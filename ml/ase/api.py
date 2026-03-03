import json
import asyncio
import threading
from datetime import datetime
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from infer import infer
from pydantic import BaseModel

app = FastAPI(
    title="Ase Neural Core",
    version="0.1.1",
    description="Session-level neural embedding service",
)

# --- CORS (dev safe) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = Path("data")
DATA_DIR.mkdir(exist_ok=True)
LOG_FILE = DATA_DIR / "sessions.jsonl"


class SessionVector(BaseModel):
    values: list[float]
    context: dict = {}  # Page type, time of day, device info, etc.


class TrainingStatus(BaseModel):
    status: str
    model_version: str
    last_training: str
    samples_count: int
    training_ready: bool


# Global training state
training_lock = threading.Lock()
current_model_version = "ase_v0"
last_training_time = None
auto_training_enabled = True
MIN_SAMPLES_FOR_TRAINING = 25  # Reduced for faster learning


def trigger_auto_training():
    """Background thread to trigger training when enough data is collected"""
    global current_model_version, last_training_time
    
    with training_lock:
        try:
            from train_from_logs import train_model
            new_version = f"ase_v{int(current_model_version.split('_v')[1]) + 1}"
            
            print(f"[ASE] Auto-training started with version {new_version}")
            success = train_model(str(new_version))
            
            if success:
                current_model_version = new_version
                last_training_time = datetime.utcnow().isoformat()
                print(f"[ASE] Auto-training completed: {new_version}")
                
                # Hot-reload the model
                import importlib
                import infer
                importlib.reload(infer)
                
            return success
        except Exception as e:
            print(f"[ASE] Auto-training failed: {e}")
            return False


@app.get("/")
def root():
    return {
        "service": "Ase",
        "status": "online",
        "model": "ase_v0",
        "endpoints": ["/infer", "/log"],
    }


@app.post("/infer")
def infer_session(session: SessionVector):
    if len(session.values) != 8:
        return {
            "error": "invalid_input",
            "expected": 8,
            "received": len(session.values),
        }

    embedding = infer(session.values)
    return {
        "model": "ase_v0",
        "dims": len(embedding),
        "embedding": embedding,
    }


@app.post("/log")
def log_session(session: SessionVector):
    if len(session.values) != 8:
        return {"status": "ignored"}

    # Enhanced data collection with context
    record = {
        "ts": datetime.utcnow().isoformat(),
        "values": session.values,
        "context": session.context,
        "page": session.context.get("page", "unknown"),
        "hour": datetime.now().hour,  # Time-based patterns
        "weekday": datetime.now().weekday(),  # Day-based patterns
    }

    with LOG_FILE.open("a") as f:
        f.write(json.dumps(record) + "\n")

    # Check if we should trigger auto-training
    if auto_training_enabled:
        count = sum(1 for _ in LOG_FILE.open("r"))
        if count >= MIN_SAMPLES_FOR_TRAINING:
            # Trigger training in background thread
            threading.Thread(target=trigger_auto_training, daemon=True).start()

    return {"status": "logged", "model_version": current_model_version}


@app.get("/stats")
def get_stats():
    count = 0
    if LOG_FILE.exists():
        with LOG_FILE.open("r") as f:
            count = sum(1 for _ in f)
    
    return {
        "log_count": count,
        "training_ready_at": MIN_SAMPLES_FOR_TRAINING,
        "training_ready": count >= MIN_SAMPLES_FOR_TRAINING,
        "current_model": current_model_version,
        "last_training": last_training_time,
        "auto_training": auto_training_enabled,
    }


@app.post("/train", response_model=dict)
def manual_train():
    """Manually trigger training"""
    try:
        success = trigger_auto_training()
        return {
            "status": "success" if success else "failed",
            "model_version": current_model_version,
            "timestamp": datetime.utcnow().isoformat(),
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}


@app.post("/auto-training/{enable}")
def toggle_auto_training(enable: bool):
    """Enable/disable automatic training"""
    global auto_training_enabled
    auto_training_enabled = enable
    return {"auto_training": auto_training_enabled}

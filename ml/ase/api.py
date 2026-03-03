import json
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

    record = {
        "ts": datetime.utcnow().isoformat(),
        "values": session.values,
    }

    with LOG_FILE.open("a") as f:
        f.write(json.dumps(record) + "\n")

    return {"status": "logged"}

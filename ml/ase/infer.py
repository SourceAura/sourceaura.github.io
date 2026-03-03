import torch
from model import AseNet
import os

# Try to load the latest model, fallback to ase_v0
model_files = [
    "models/ase_v1.pt",
    "models/ase_v0.pt"
]

model_path = None
for path in model_files:
    if os.path.exists(path):
        model_path = path
        break

if model_path is None:
    raise FileNotFoundError("No trained model found. Please train the model first.")

model = AseNet(input_dim=8, latent_dim=16)
model.load_state_dict(torch.load(model_path))
model.eval()

print(f"[ASE] Loaded model: {model_path}")


def infer(session_vector):
    """Enhanced inference with input validation"""
    if len(session_vector) != 8:
        raise ValueError(f"Expected 8-dimensional input, got {len(session_vector)}")
    
    x = torch.tensor(session_vector, dtype=torch.float32).unsqueeze(0)
    with torch.no_grad():
        _, z = model(x)
    return z.squeeze().tolist()

import json
from pathlib import Path

import torch
import torch.nn as nn
from model import AseNet
from torch.utils.data import DataLoader, TensorDataset

# --- Paths ---
LOG_FILE = Path("data/sessions.jsonl")
OUT_MODEL = Path("models/ase_v1.pt")

# --- Load logged sessions ---
rows = []
if LOG_FILE.exists():
    with LOG_FILE.open() as f:
        for line in f:
            rows.append(json.loads(line)["values"])

num_samples = len(rows)
if num_samples == 0:
    raise SystemExit("No logged sessions found.")

data = torch.tensor(rows, dtype=torch.float32)

# --- Adaptive batching ---
BASE_BATCH_SIZE = 32
batch_size = min(BASE_BATCH_SIZE, num_samples)

drop_last = num_samples >= BASE_BATCH_SIZE

print(f"Training on {num_samples} samples")
print(f"Batch size: {batch_size}")
print(f"Drop last: {drop_last}")

dataset = TensorDataset(data)
loader = DataLoader(
    dataset,
    batch_size=batch_size,
    shuffle=True,
    drop_last=drop_last,
)

if len(loader) == 0:
    raise SystemExit("DataLoader produced zero batches. Check data size.")

# --- Model ---
model = AseNet(input_dim=8, latent_dim=12)
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
loss_fn = nn.MSELoss()

# --- Training loop ---
EPOCHS = 400

for epoch in range(EPOCHS):
    total_loss = 0.0
    batches = 0

    for (x,) in loader:
        optimizer.zero_grad()

        x_hat, _ = model(x)
        loss = loss_fn(x_hat, x)

        loss.backward()
        optimizer.step()

        total_loss += loss.item()
        batches += 1

    if epoch % 40 == 0:
        avg = total_loss / batches
        print(f"epoch {epoch:03d} | loss {avg:.6f}")

# --- Save model ---
torch.save(model.state_dict(), OUT_MODEL)
print("Saved", OUT_MODEL)

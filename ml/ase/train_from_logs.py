import json
from pathlib import Path

import torch
import torch.nn as nn
from model import AseNet
from torch.utils.data import DataLoader, TensorDataset


def train_model(model_version="ase_v1"):
    """Train model with adaptive parameters and return success status"""
    
    # --- Paths ---
    LOG_FILE = Path("data/sessions.jsonl")
    OUT_MODEL = Path(f"models/{model_version}.pt")

    # --- Load logged sessions ---
    rows = []
    contexts = []
    
    if LOG_FILE.exists():
        with LOG_FILE.open() as f:
            for line in f:
                data = json.loads(line)
                rows.append(data["values"])
                # Extract contextual features for enhanced learning
                context = [
                    data.get("hour", 0) / 24.0,  # Normalize hour
                    data.get("weekday", 0) / 6.0,  # Normalize weekday
                    1.0 if data.get("page") == "home" else 0.0,
                    1.0 if data.get("page") == "petals" else 0.0,
                ]
                contexts.append(context)

    num_samples = len(rows)
    if num_samples == 0:
        print("No logged sessions found.")
        return False

    data = torch.tensor(rows, dtype=torch.float32)
    
    # --- Adaptive training parameters ---
    BASE_BATCH_SIZE = 32
    batch_size = min(BASE_BATCH_SIZE, max(8, num_samples // 4))  # Adaptive batch size
    drop_last = num_samples >= BASE_BATCH_SIZE
    
    # Adaptive epochs based on data size
    epochs = min(800, max(200, num_samples * 8))
    
    # Adaptive learning rate
    base_lr = 1e-3
    learning_rate = base_lr * (num_samples / 100.0) ** 0.5  # Scale with data
    learning_rate = min(learning_rate, 5e-3)  # Cap learning rate

    print(f"Training {model_version} on {num_samples} samples")
    print(f"Batch size: {batch_size}, Epochs: {epochs}, LR: {learning_rate:.6f}")

    dataset = TensorDataset(data)
    loader = DataLoader(
        dataset,
        batch_size=batch_size,
        shuffle=True,
        drop_last=drop_last,
    )

    if len(loader) == 0:
        print("DataLoader produced zero batches.")
        return False

    # --- Enhanced model with dropout ---
    model = AseNet(input_dim=8, latent_dim=16)  # Increased latent dimension
    optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate, weight_decay=1e-4)
    scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(optimizer, patience=50, factor=0.5)
    loss_fn = nn.MSELoss()

    # --- Training loop with early stopping ---
    best_loss = float('inf')
    patience_counter = 0
    max_patience = 100

    for epoch in range(epochs):
        total_loss = 0.0
        batches = 0

        for (x,) in loader:
            optimizer.zero_grad()

            x_hat, z = model(x)
            
            # Enhanced loss: reconstruction + regularization
            recon_loss = loss_fn(x_hat, x)
            reg_loss = 0.001 * torch.mean(torch.norm(z, dim=1))  # Latent regularization
            loss = recon_loss + reg_loss

            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)  # Gradient clipping
            optimizer.step()

            total_loss += loss.item()
            batches += 1

        avg_loss = total_loss / batches
        scheduler.step(avg_loss)

        # Early stopping
        if avg_loss < best_loss:
            best_loss = avg_loss
            patience_counter = 0
            # Save best model
            torch.save(model.state_dict(), OUT_MODEL)
        else:
            patience_counter += 1

        if epoch % 40 == 0:
            print(f"epoch {epoch:03d} | loss {avg_loss:.6f} | best {best_loss:.6f}")

        if patience_counter >= max_patience:
            print(f"Early stopping at epoch {epoch}")
            break

    print(f"Training completed. Best loss: {best_loss:.6f}")
    print(f"Saved {OUT_MODEL}")
    
    # Update inference to use new model
    update_inference_model(model_version)
    
    return True


def update_inference_model(model_version):
    """Update the inference script to use the new model"""
    try:
        with open("infer.py", "r") as f:
            content = f.read()
        
        # Update model path in inference
        new_content = content.replace(
            'model.load_state_dict(torch.load("models/ase_v0.pt"))',
            f'model.load_state_dict(torch.load("models/{model_version}.pt"))'
        )
        
        with open("infer.py", "w") as f:
            f.write(new_content)
            
        print(f"Updated inference to use {model_version}")
        
    except Exception as e:
        print(f"Failed to update inference: {e}")


if __name__ == "__main__":
    import sys
    version = sys.argv[1] if len(sys.argv) > 1 else "ase_v1"
    train_model(version)

import torch
import torch.nn as nn
from model import AseNet

# Load session data
data = torch.load("data/sessions.pt")

# Create the model
model = AseNet(input_dim=8, latent_dim=12)

# Optimizer + loss
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)
loss_fn = nn.MSELoss()

# Training loop
for epoch in range(200):
    optimizer.zero_grad()

    x_hat, _ = model(data)
    loss = loss_fn(x_hat, data)

    loss.backward()
    optimizer.step()

    if epoch % 20 == 0:
        print(f"epoch {epoch} | loss {loss.item():.6f}")

# Save learned weights
torch.save(model.state_dict(), "models/ase_v0.pt")
print("Saved models/ase_v0.pt")

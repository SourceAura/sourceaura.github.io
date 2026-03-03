import torch
from model import AseNet

data = torch.load("data/sessions.pt")

model = AseNet(input_dim=8, latent_dim=12)
model.load_state_dict(torch.load("models/ase_v0.pt"))
model.eval()

with torch.no_grad():
    _, z = model(data)

print("Embedding mean:")
print(z.mean(dim=0))

print("\nEmbedding std (should NOT be near zero):")
print(z.std(dim=0))

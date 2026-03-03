import torch
from model import AseNet

model = AseNet(input_dim=8, latent_dim=12)
model.load_state_dict(torch.load("models/ase_v1.pt"))
model.eval()


def infer(session_vector):
    x = torch.tensor(session_vector, dtype=torch.float32).unsqueeze(0)
    with torch.no_grad():
        _, z = model(x)
    return z.squeeze().tolist()

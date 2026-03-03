import random
from pathlib import Path

import torch

Path("data").mkdir(exist_ok=True)

N = 800


def session():
    return [
        random.random(),  # avgScrollVelocity
        random.random(),  # idleRatio
        random.random() ** 2,  # searchCount (skewed)
        random.random(),  # searchDepth
        random.random(),  # petalInteractions
        random.random(),  # timeOnSite
        random.random(),  # wakeIntegral
        random.random(),  # cadenceEnergyAvg
    ]


data = torch.tensor([session() for _ in range(N)], dtype=torch.float32)
torch.save(data, "data/sessions.pt")

print("Saved data/sessions.pt with shape", data.shape)

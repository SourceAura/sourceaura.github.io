from infer import infer

# Example session (8 normalized values)
session = [
    0.2,  # avgScrollVelocity
    0.1,  # idleRatio
    0.05,  # searchCount
    0.4,  # searchDepth
    0.0,  # petalInteractions
    0.6,  # timeOnSite
    0.3,  # wakeIntegral
    0.2,  # cadenceEnergyAvg
]

embedding = infer(session)

print("Embedding length:", len(embedding))
print("Embedding values:")
print(embedding)

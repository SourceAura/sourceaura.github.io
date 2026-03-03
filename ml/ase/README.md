# Ase

Ase is the neural interpretation layer of SourceAura.

It does not generate content.
It does not make decisions.
It observes session-level behavior and returns a compact embedding that
biases the system’s living parameters (Qi, pulse, wake, cadence).

Ase is designed to whisper, not command.

---

## What Ase Is

- A small neural network (autoencoder)
- Trained on session summaries
- Produces an embedding (latent vector)
- Runs as a separate local service
- Influences UI via soft bias, never hard rules

Ase interprets *how* someone is present, not *what* they say.

---

## What Ase Is Not

- Not a chatbot
- Not an LLM
- Not a recommender system
- Not user identity or tracking
- Not persistent memory (yet)

Ase does not know who you are.
Only how this session feels.

---

## Inputs (Session Vector v0)

Ase currently consumes 8 normalized values (0..1):

1. Average scroll velocity
2. Idle ratio
3. Search count (reserved)
4. Search depth (reserved)
5. Interaction count
6. Time on site
7. Wake integral (derived)
8. Cadence energy (derived)

Only a subset are currently measured.
Unused inputs are filled safely with zeros.

---

## Output

Ase returns:

- A latent embedding (length 12)
- Each dimension represents an emergent behavioral axis
- No dimension is pre-labeled

Individual dimensions may correlate with:
- attentiveness
- restlessness
- exploration
- focus

Meanings are discovered, not imposed.

---

## Integration Philosophy

Ase never controls UI directly.

Instead:
- One embedding dimension is mapped to one system variable
- The system reacts organically
- If Ase is offline, the system degrades gracefully

This preserves aesthetic continuity and user trust.

---

## Current Status

- Training: offline, synthetic + real sessions (manual)
- Inference: live via local HTTP API
- Persistence: none
- Identity: none

---

## Future Directions (Intentional, Not Promised)

- Session memory decay
- Temporal embeddings
- Multi-signal influence
- Offline retraining
- Federated learning (opt-in)

Ase evolves slowly, with restraint.

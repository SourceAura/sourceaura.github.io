/**
 * AseClient
 * Dedicated telemetry collector and neural embedding bridge.
 * Observes behavioral metrics and syncs with the local Ase Neural Core.
 */

export interface AseTelemetry {
  scrollVelocity: number;
  idleRatio: number;
  interactionCount: number;
  idleTime: number;
  cadenceEnergy: number;
  searchCount: number;
  searchDepth: number;
  timeOnSite: number;
}

export class AseClient {
  private static instance: AseClient;
  public metrics: AseTelemetry = {
    scrollVelocity: 0,
    idleRatio: 0,
    interactionCount: 0,
    idleTime: 0,
    cadenceEnergy: 0,
    searchCount: 0,
    searchDepth: 0,
    timeOnSite: 0,
  };

  public startTime = Date.now();
  public lastUpdate = 0;
  public status: 'connected' | 'online' | 'offline' | 'waiting' = 'waiting';
  private syncInterval = 15000; // 15s for more responsiveness

  private constructor() {
    if (typeof window !== "undefined") {
      this.initTrackers();
      this.startSyncLoop();
    }
  }

  public static getInstance(): AseClient {
    if (!AseClient.instance) {
      AseClient.instance = new AseClient();
    }
    return AseClient.instance;
  }

  private initTrackers() {
    // Scroll Velocity
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    window.addEventListener("scroll", () => {
      const now = Date.now();
      const dy = Math.abs(window.scrollY - lastScrollY);
      const dt = now - lastScrollTime;
      if (dt > 10) {
        const vel = dy / dt; // px/ms
        this.metrics.scrollVelocity = vel * 20; // scaled for HUD visibility
      }
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    }, { passive: true });

    // Interactions
    window.addEventListener("click", () => this.metrics.interactionCount++, { passive: true });
    window.addEventListener("keydown", () => this.metrics.interactionCount++, { passive: true });

    // Idle Tracking
    let lastActivity = Date.now();
    const updateIdle = () => { lastActivity = Date.now(); };
    window.addEventListener("mousemove", updateIdle, { passive: true });
    window.addEventListener("scroll", updateIdle, { passive: true });
    window.addEventListener("keydown", updateIdle, { passive: true });

    setInterval(() => {
      const now = Date.now();
      const idle = now - lastActivity;
      if (idle > 2000) { // Consider idle after 2s
         this.metrics.idleTime += 1000;
      }
      this.metrics.idleRatio = this.metrics.idleTime / (now - this.startTime);
      this.metrics.timeOnSite = (now - this.startTime) / 60000;
    }, 1000);
  }

  public async sync() {
    const vector = [
      this.clamp(this.metrics.scrollVelocity * 20),
      this.metrics.idleRatio,
      this.clamp(this.metrics.searchCount / 10),
      this.clamp(this.metrics.searchDepth / 5),
      this.clamp(this.metrics.interactionCount / 100),
      this.clamp(this.metrics.timeOnSite / 60),
      this.clamp(this.metrics.timeOnSite / 10), // Placeholder for temporal depth
      this.clamp(this.metrics.cadenceEnergy / 100)
    ];

    try {
      const res = await fetch("http://localhost:8000/infer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values: vector })
      });

      if (res.ok) {
        const data = await res.json();
        this.status = 'connected';
        this.lastUpdate = Date.now();
        this.dispatchUpdate(data.embedding);
        
        // Auto-Trigger HUD on behavioral variance
        if (import.meta.env.DEV && Math.abs(data.embedding[0]) > 0.85) {
          window.dispatchEvent(new CustomEvent("qi:toggle-petals"));
        }
      } else {
        this.status = 'online'; // API reachable but error response
      }
    } catch (e) {
      this.status = 'offline';
    }
  }

  public async logSession() {
    const vector = [
      this.clamp(this.metrics.scrollVelocity * 20),
      this.metrics.idleRatio,
      0, 0,
      this.clamp(this.metrics.interactionCount / 100),
      this.clamp(this.metrics.timeOnSite / 60),
      this.clamp(this.metrics.timeOnSite / 10),
      this.clamp(this.metrics.cadenceEnergy / 100)
    ];

    try {
      await fetch("http://localhost:8000/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values: vector })
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  private dispatchUpdate(embedding: number[]) {
    window.dispatchEvent(new CustomEvent("ase:update", { detail: { embedding } }));
    if (embedding.length > 0) {
      const wakeBias = (embedding[0] + 1) / 2;
      document.documentElement.style.setProperty("--ase-wake", wakeBias.toFixed(4));
    }
  }

  private startSyncLoop() {
    this.sync();
    setInterval(() => this.sync(), this.syncInterval);
  }

  private clamp(n: number) {
    return Math.max(0, Math.min(1, n));
  }

  public updateSystemMetrics(metrics: Partial<AseTelemetry>) {
    Object.assign(this.metrics, metrics);
  }
}

export const ase = typeof window !== "undefined" ? AseClient.getInstance() : null;

export function initAseClient() {
  return AseClient.getInstance();
}

if (typeof window !== "undefined") {
  (window as any).__ase = ase;
}

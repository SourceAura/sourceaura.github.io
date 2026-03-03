/**
 * AseClient
 * Dedicated telemetry collector and neural embedding bridge.
 * Observes behavioral metrics and syncs with the local Ase Neural Core.
 */

export interface AseTelemetry {
  scrollVelocity: number;
  idleRatio: number;
  searchCount: number;
  searchDepth: number;
  interactionCount: number;
  timeOnSite: number;
  wakeIntegral: number;
  cadenceEnergy: number;
}

class AseClient {
  private static instance: AseClient;
  private metrics: AseTelemetry = {
    scrollVelocity: 0,
    idleRatio: 0,
    searchCount: 0,
    searchDepth: 0,
    interactionCount: 0,
    timeOnSite: 0,
    wakeIntegral: 0,
    cadenceEnergy: 0,
  };

  private lastSync = 0;
  private isOnline = false;
  private syncInterval = 30000; // 30s

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
      if (dt > 0) {
        const vel = dy / dt; // px/ms
        this.metrics.scrollVelocity = this.metrics.scrollVelocity * 0.8 + vel * 0.2;
      }
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    }, { passive: true });

    // Interactions
    window.addEventListener("click", () => this.metrics.interactionCount++, { passive: true });
    window.addEventListener("keydown", () => this.metrics.interactionCount++, { passive: true });

    // Time on Site
    const start = Date.now();
    setInterval(() => {
      this.metrics.timeOnSite = (Date.now() - start) / 60000; // minutes
    }, 10000);

    // Toggle Debug HUD
    window.addEventListener("keydown", (e) => {
      if (e.key === "`") {
        const el = document.getElementById("ase-debug");
        if (el) {
          el.style.display = el.style.display === "none" ? "block" : "none";
        }
      }
    }, { passive: true });
  }

  private async sync() {
    const vector = [
      this.clamp(this.metrics.scrollVelocity / 5),
      this.metrics.idleRatio,
      this.clamp(this.metrics.searchCount / 10),
      this.clamp(this.metrics.searchDepth / 5),
      this.clamp(this.metrics.interactionCount / 100),
      this.clamp(this.metrics.timeOnSite / 60),
      this.metrics.wakeIntegral,
      this.metrics.cadenceEnergy
    ];

    try {
      const res = await fetch("http://localhost:8000/infer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values: vector })
      });

      if (res.ok) {
        const data = await res.json();
        this.isOnline = true;
        this.dispatchUpdate(data.embedding);
        
        // Auto-Trigger HUD on high behavioral variance (DEV ONLY)
        if (import.meta.env.DEV && Math.abs(data.embedding[0]) > 0.8) {
          window.dispatchEvent(new CustomEvent("qi:toggle-petals"));
        }

        // Log to Ase training buffer
        await fetch("http://localhost:8000/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ values: vector })
        });
      }
    } catch (e) {
      this.isOnline = false;
    }
    
    if (import.meta.env.DEV) {
      this.updateDebugHud();
    }
  }

  private updateDebugHud() {
    const el = document.getElementById("ase-debug");
    if (!el) return;
    
    const now = performance.now();
    const timeOnSite = this.metrics.timeOnSite * 60; // s
    const wakeBias = getComputedStyle(document.documentElement).getPropertyValue("--ase-wake").trim() || "0.5000";
    const status = this.isOnline ? "ONLINE" : "OFFLINE";

    el.innerHTML = `
      <div style="opacity:.7;margin-bottom:6px;">Ase · session</div>
      <pre style="margin:0;font-family:inherit;">
status      ${status}
time        ${timeOnSite.toFixed(1)}s
scroll vel  ${this.metrics.scrollVelocity.toFixed(3)}
idle ratio  ${this.metrics.idleRatio.toFixed(2)}
interacts   ${this.metrics.interactionCount}
ase-wake    ${wakeBias}
      </pre>
    `;
  }

  private dispatchUpdate(embedding: number[]) {
    window.dispatchEvent(new CustomEvent("ase:update", { detail: { embedding } }));
    
    // Specifically update the --ase-wake variable as per design
    // We'll use the first dimension of the embedding as the primary 'wake' bias
    if (embedding.length > 0) {
      const wakeBias = (embedding[0] + 1) / 2; // -1..1 to 0..1
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

  // API for Om.astro to inject rich telemetry
  public updateSystemMetrics(metrics: Partial<AseTelemetry>) {
    Object.assign(this.metrics, metrics);
  }

  public triggerHud() {
    window.dispatchEvent(new CustomEvent("qi:toggle-petals"));
  }
}

export const ase = typeof window !== "undefined" ? AseClient.getInstance() : null;
if (typeof window !== "undefined") {
  (window as any).__ase = ase;
}

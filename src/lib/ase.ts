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
  scrollAcceleration: number;
  clickHeatmap: number;
  keyboardRhythm: number;
  sessionDepth: number;
  focusIntensity: number;
  explorationPattern: number;
  trainingEpochs: number;
  lastMilestone: number;
  breakthroughLevel: number;
}

export interface AseContext {
  page: string;
  section: string;
  deviceType: string;
  viewportSize: string;
  timeOfDay: number;
  dayOfWeek: number;
  sessionNumber: number;
  referrer: string;
}

/**
 * Dev-only. Layout.astro imports this module behind `import.meta.env.DEV`,
 * so production builds ship none of it.
 */
export const ASE_ENABLED: boolean = import.meta.env.DEV;

/** Ase Neural Core endpoint. Override with PUBLIC_ASE_URL when the service moves. */
export const ASE_URL: string =
  (import.meta.env.PUBLIC_ASE_URL as string | undefined) ??
  "http://127.0.0.1:8000";

export class AseClient {
  private static instance: AseClient;

  /** The exact 8-dim vector last POSTed to /infer. The HUD reads this so it
   *  can never drift from what is actually being sent. */
  public lastVector: number[] = [];

  /** Round-trip time of the last /infer call, in ms. */
  public lastLatency: number | null = null;
  public metrics: AseTelemetry = {
    scrollVelocity: 0,
    idleRatio: 0,
    interactionCount: 0,
    idleTime: 0,
    cadenceEnergy: 0,
    searchCount: 0,
    searchDepth: 0,
    timeOnSite: 0,
    scrollAcceleration: 0,
    clickHeatmap: 0,
    keyboardRhythm: 0,
    sessionDepth: 0,
    focusIntensity: 0,
    explorationPattern: 0,
    trainingEpochs: 0,
    lastMilestone: 0,
    breakthroughLevel: 0,
  };

  public context: AseContext = {
    page: "unknown",
    section: "main",
    deviceType: "desktop",
    viewportSize: "medium",
    timeOfDay: new Date().getHours(),
    dayOfWeek: new Date().getDay(),
    sessionNumber: 1,
    referrer: document.referrer || "direct",
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

  private updateContext() {
    this.context.page = this.detectPageType();
    this.context.section = this.getCurrentSection();
    this.context.deviceType = this.detectDeviceType();
    this.context.viewportSize = this.getViewportSize();
    this.context.timeOfDay = new Date().getHours();
    this.context.dayOfWeek = new Date().getDay();
  }

  private detectPageType(): string {
    const path = window.location.pathname;
    if (path === "/" || path === "/index") return "home";
    if (path.includes("/petals")) return "petals";
    if (path.includes("/euthymia")) return "euthymia";
    return "other";
  }

  private getCurrentSection(): string {
    const sections = document.querySelectorAll("section, [id]");
    const scrollY = window.scrollY;
    
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      const element = section as HTMLElement;
      const elementTop = rect.top + scrollY;
      
      if (scrollY >= elementTop - 100) {
        return element.id || element.tagName.toLowerCase();
      }
    }
    return "main";
  }

  private detectDeviceType(): string {
    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  }

  private getViewportSize(): string {
    const width = window.innerWidth;
    if (width < 640) return "small";
    if (width < 1024) return "medium";
    return "large";
  }

  private calculateClickConcentration(clicks: Array<{x: number, y: number, time: number}>): number {
    if (clicks.length < 2) return 0;
    
    let totalDistance = 0;
    let count = 0;
    
    for (let i = 1; i < clicks.length; i++) {
      const dx = clicks[i].x - clicks[i-1].x;
      const dy = clicks[i].y - clicks[i-1].y;
      totalDistance += Math.sqrt(dx * dx + dy * dy);
      count++;
    }
    
    const avgDistance = count > 0 ? totalDistance / count : 0;
    return Math.max(0, 1 - avgDistance);
  }

  private updateCadenceEnergy() {
    const recentActivity = this.metrics.interactionCount / Math.max((Date.now() - this.startTime) / 1000, 1);
    const scrollEnergy = this.metrics.scrollVelocity;
    const focusEnergy = this.metrics.focusIntensity;
    
    this.metrics.cadenceEnergy = (
      recentActivity * 0.4 +
      scrollEnergy * 0.3 +
      focusEnergy * 0.3
    );
  }

  public static getInstance(): AseClient {
    if (!AseClient.instance) {
      AseClient.instance = new AseClient();
    }
    return AseClient.instance;
  }

  private initTrackers() {
    this.updateContext();
    
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    let lastVelocity = 0;
    let currentVelocity = 0;
    let scrollEvents = [];
    
    window.addEventListener("scroll", () => {
      const now = Date.now();
      const dy = Math.abs(window.scrollY - lastScrollY);
      const dt = now - lastScrollTime;
      
      if (dt > 16) { // ~60fps throttling
        currentVelocity = dy / dt; // px/ms
        this.metrics.scrollVelocity = currentVelocity * 10; // reduced scaling
        
        const acceleration = Math.abs(currentVelocity - lastVelocity) / dt * 1000;
        this.metrics.scrollAcceleration = Math.min(acceleration, 1.0);
        lastVelocity = currentVelocity;
        
        scrollEvents.push({ time: now, velocity: currentVelocity });
        if (scrollEvents.length > 100) scrollEvents.shift();
        
        if (import.meta.env.DEV) {
          console.log(`ASE: scroll velocity=${this.metrics.scrollVelocity.toFixed(3)}, acc=${this.metrics.scrollAcceleration.toFixed(3)}`);
        }
      }
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    }, { passive: true });

    setInterval(() => {
      if (Date.now() - lastScrollTime > 100) { // decay after 100ms of no scroll
        currentVelocity *= 0.85; // exponential decay
        this.metrics.scrollVelocity = currentVelocity * 10;
        if (this.metrics.scrollVelocity < 0.001) {
          this.metrics.scrollVelocity = 0;
        }
      }
    }, 50);

    const clickPositions: Array<{x: number, y: number, time: number}> = [];
    window.addEventListener("click", (e) => {
      this.metrics.interactionCount++;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      clickPositions.push({ x, y, time: Date.now() });
      
      clickPositions.splice(0, clickPositions.length, ...clickPositions.filter(pos => Date.now() - pos.time < 30000));
      
      this.metrics.clickHeatmap = this.calculateClickConcentration(clickPositions);
    }, { passive: true });

    const keyTimes: number[] = [];
    window.addEventListener("keydown", () => {
      this.metrics.interactionCount++;
      
      const now = Date.now();
      keyTimes.push(now);
      
      keyTimes.splice(0, keyTimes.length, ...keyTimes.filter(time => now - time < 10000));
      
      if (keyTimes.length > 2) {
        const intervals: number[] = [];
        for (let i = 1; i < keyTimes.length; i++) {
          intervals.push(keyTimes[i] - keyTimes[i - 1]);
        }
        const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
        const variance = intervals.reduce((sum, interval) => sum + Math.pow(interval - avgInterval, 2), 0) / intervals.length;
        this.metrics.keyboardRhythm = Math.min(variance / 10000, 1.0); // Normalize
      }
    }, { passive: true });

    let visitedSections = new Set();
    let pageTransitions = 0;
    
    const trackSection = () => {
      const section = this.getCurrentSection();
      if (!visitedSections.has(section)) {
        visitedSections.add(section);
        this.metrics.sessionDepth = visitedSections.size / 10; // Normalize
      }
    };
    
    let lastPage = window.location.pathname;
    const checkPageTransition = () => {
      const currentPage = window.location.pathname;
      if (currentPage !== lastPage) {
        pageTransitions++;
        lastPage = currentPage;
        this.metrics.explorationPattern = Math.min(pageTransitions / 20, 1.0);
        this.updateContext();
      }
    };
    
    const focusEvents: number[] = [];
    let lastFocusTime = Date.now();
    
    const trackFocus = () => {
      const now = Date.now();
      const focusDuration = now - lastFocusTime;
      focusEvents.push(focusDuration);
      
      focusEvents.splice(0, focusEvents.length, ...focusEvents.filter(duration => duration < 300000)); // 5 minutes
      
      if (focusEvents.length > 0) {
        const avgFocus = focusEvents.reduce((a, b) => a + b, 0) / focusEvents.length;
        this.metrics.focusIntensity = Math.min(avgFocus / 60000, 1.0); // Normalize to minutes
      }
      
      lastFocusTime = now;
    };
    
    // Declared above its first use so the handlers below never close over a
    // `let` that is still in its temporal dead zone.
    let lastActivity = Date.now();

    window.addEventListener("mousemove", () => {
      lastActivity = Date.now();
      trackSection();
    }, { passive: true });
    
    window.addEventListener("scroll", () => {
      lastActivity = Date.now();
      trackSection();
      trackFocus();
    }, { passive: true });
    
    window.addEventListener("keydown", () => {
      lastActivity = Date.now();
      trackFocus();
    }, { passive: true });
    
    setInterval(checkPageTransition, 1000);

    setInterval(() => {
      const now = Date.now();
      const idle = now - lastActivity;
      if (idle > 2000) { // Consider idle after 2s
         this.metrics.idleTime += 1000;
      }
      this.metrics.idleRatio = this.metrics.idleTime / (now - this.startTime);
      this.metrics.timeOnSite = (now - this.startTime) / 60000;
      
      this.updateCadenceEnergy();
    }, 1000);
  }

  public async sync() {
    if (!ASE_ENABLED) return;

    const vector = [
      this.clamp(this.metrics.scrollVelocity * 20),
      this.clamp(this.metrics.scrollAcceleration),
      this.clamp(this.metrics.idleRatio),
      this.clamp(this.metrics.clickHeatmap),
      this.clamp(this.metrics.keyboardRhythm),
      this.clamp(this.metrics.interactionCount / 100),
      this.clamp(this.metrics.sessionDepth),
      this.clamp(this.metrics.focusIntensity),
    ];

    this.lastVector = vector;

    try {
      const t0 = performance.now();
      const res = await fetch(`${ASE_URL}/infer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          values: vector,
          context: this.context 
        })
      });
      this.lastLatency = performance.now() - t0;

      if (res.ok) {
        const data = await res.json();
        this.status = 'connected';
        this.lastUpdate = Date.now();
        this.dispatchUpdate(data.embedding, this.lastLatency);
        
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
    if (!ASE_ENABLED) return false;

    const vector = [
      this.clamp(this.metrics.scrollVelocity * 20),
      this.clamp(this.metrics.scrollAcceleration),
      this.clamp(this.metrics.idleRatio),
      this.clamp(this.metrics.clickHeatmap),
      this.clamp(this.metrics.keyboardRhythm),
      this.clamp(this.metrics.interactionCount / 100),
      this.clamp(this.metrics.sessionDepth),
      this.clamp(this.metrics.focusIntensity),
    ];

    try {
      const res = await fetch(`${ASE_URL}/log`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          values: vector,
          context: this.context 
        })
      });
      
      if (res.ok) {
        const result = await res.json();
        if (import.meta.env.DEV) {
          console.log("[ASE] Session logged:", result);
        }
        return true;
      }
      return false;
    } catch (e) {
      if (import.meta.env.DEV) {
        console.error("[ASE] Failed to log session:", e);
      }
      return false;
    }
  }

  private dispatchUpdate(embedding: number[], latency: number | null = null) {
    window.dispatchEvent(
      new CustomEvent("ase:update", {
        detail: {
          embedding,
          latency,
          vector: this.lastVector,
          context: this.context,
        },
      }),
    );

    if (embedding.length > 0) {
      const wakeBias = (embedding[0] + 1) / 2;
      document.documentElement.style.setProperty("--ase-wake", wakeBias.toFixed(4));
    }

    // Autonomous training milestone detection. Emitted as an event rather than
    // injected as a floating DOM node: the HUD decides how to surface it.
    this.metrics.trainingEpochs++;
    const currentMilestone = Math.floor(this.metrics.trainingEpochs / 100); // Every 100 epochs

    if (currentMilestone > this.metrics.lastMilestone) {
      this.metrics.lastMilestone = currentMilestone;
      this.metrics.breakthroughLevel = Math.max(embedding[0] || 0, this.metrics.breakthroughLevel);

      window.dispatchEvent(
        new CustomEvent("ase:milestone", {
          detail: {
            count: currentMilestone,
            level: this.metrics.breakthroughLevel,
          },
        }),
      );
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
  const instance = AseClient.getInstance();
  if (import.meta.env.DEV) {
    console.log("[ASE] Client initialized", instance);
  }
  return instance;
}

if (typeof window !== "undefined") {
  (window as any).__ase = ase;
  (window as any).__aseUrl = ASE_URL;
}

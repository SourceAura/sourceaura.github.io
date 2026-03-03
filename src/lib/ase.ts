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
  // Enhanced metrics
  scrollAcceleration: number;
  clickHeatmap: number;
  keyboardRhythm: number;
  sessionDepth: number;
  focusIntensity: number;
  explorationPattern: number;
  // Autonomous training metrics
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
    // Enhanced metrics
    scrollAcceleration: 0,
    clickHeatmap: 0,
    keyboardRhythm: 0,
    sessionDepth: 0,
    focusIntensity: 0,
    explorationPattern: 0,
    // Autonomous training metrics
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
    // Detect current section based on scroll position and elements
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
    
    // Calculate average distance between clicks
    let totalDistance = 0;
    let count = 0;
    
    for (let i = 1; i < clicks.length; i++) {
      const dx = clicks[i].x - clicks[i-1].x;
      const dy = clicks[i].y - clicks[i-1].y;
      totalDistance += Math.sqrt(dx * dx + dy * dy);
      count++;
    }
    
    const avgDistance = count > 0 ? totalDistance / count : 0;
    // Lower average distance = higher concentration
    return Math.max(0, 1 - avgDistance);
  }

  private updateCadenceEnergy() {
    // Calculate energy based on recent activity patterns
    const recentActivity = this.metrics.interactionCount / Math.max((Date.now() - this.startTime) / 1000, 1);
    const scrollEnergy = this.metrics.scrollVelocity;
    const focusEnergy = this.metrics.focusIntensity;
    
    // Combine different energy sources
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
    
    // Enhanced Scroll Velocity & Acceleration
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
        
        // Calculate acceleration
        const acceleration = Math.abs(currentVelocity - lastVelocity) / dt * 1000;
        this.metrics.scrollAcceleration = Math.min(acceleration, 1.0);
        lastVelocity = currentVelocity;
        
        // Track scroll patterns
        scrollEvents.push({ time: now, velocity: currentVelocity });
        if (scrollEvents.length > 100) scrollEvents.shift();
        
        if (import.meta.env.DEV) {
          console.log(`ASE: scroll velocity=${this.metrics.scrollVelocity.toFixed(3)}, acc=${this.metrics.scrollAcceleration.toFixed(3)}`);
        }
      }
      lastScrollY = window.scrollY;
      lastScrollTime = now;
    }, { passive: true });

    // Velocity decay
    setInterval(() => {
      if (Date.now() - lastScrollTime > 100) { // decay after 100ms of no scroll
        currentVelocity *= 0.85; // exponential decay
        this.metrics.scrollVelocity = currentVelocity * 10;
        if (this.metrics.scrollVelocity < 0.001) {
          this.metrics.scrollVelocity = 0;
        }
      }
    }, 50);

    // Enhanced Click Heatmap Tracking
    const clickPositions: Array<{x: number, y: number, time: number}> = [];
    window.addEventListener("click", (e) => {
      this.metrics.interactionCount++;
      
      // Track click positions for heatmap analysis
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      clickPositions.push({ x, y, time: Date.now() });
      
      // Keep only recent clicks
      clickPositions.splice(0, clickPositions.length, ...clickPositions.filter(pos => Date.now() - pos.time < 30000));
      
      // Calculate click concentration (heatmap intensity)
      this.metrics.clickHeatmap = this.calculateClickConcentration(clickPositions);
    }, { passive: true });

    // Enhanced Keyboard Rhythm Tracking
    const keyTimes: number[] = [];
    window.addEventListener("keydown", () => {
      this.metrics.interactionCount++;
      
      const now = Date.now();
      keyTimes.push(now);
      
      // Keep only recent keystrokes
      keyTimes.splice(0, keyTimes.length, ...keyTimes.filter(time => now - time < 10000));
      
      // Calculate typing rhythm variance
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

    // Session Depth & Exploration Pattern
    let visitedSections = new Set();
    let pageTransitions = 0;
    
    const trackSection = () => {
      const section = this.getCurrentSection();
      if (!visitedSections.has(section)) {
        visitedSections.add(section);
        this.metrics.sessionDepth = visitedSections.size / 10; // Normalize
      }
    };
    
    // Track page transitions for exploration pattern
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
    
    // Focus Intensity Tracking
    const focusEvents: number[] = [];
    let lastFocusTime = Date.now();
    
    const trackFocus = () => {
      const now = Date.now();
      const focusDuration = now - lastFocusTime;
      focusEvents.push(focusDuration);
      
      // Keep only recent focus events
      focusEvents.splice(0, focusEvents.length, ...focusEvents.filter(duration => duration < 300000)); // 5 minutes
      
      if (focusEvents.length > 0) {
        const avgFocus = focusEvents.reduce((a, b) => a + b, 0) / focusEvents.length;
        this.metrics.focusIntensity = Math.min(avgFocus / 60000, 1.0); // Normalize to minutes
      }
      
      lastFocusTime = now;
    };
    
    // Track various user activities
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
    
    // Check for page transitions
    setInterval(checkPageTransition, 1000);

    // Idle Tracking (existing)
    let lastActivity = Date.now();
    const updateIdle = () => { lastActivity = Date.now(); };

    setInterval(() => {
      const now = Date.now();
      const idle = now - lastActivity;
      if (idle > 2000) { // Consider idle after 2s
         this.metrics.idleTime += 1000;
      }
      this.metrics.idleRatio = this.metrics.idleTime / (now - this.startTime);
      this.metrics.timeOnSite = (now - this.startTime) / 60000;
      
      // Update cadence energy based on recent activity
      this.updateCadenceEnergy();
    }, 1000);
  }

  public async sync() {
    // Enhanced vector with sophisticated metrics
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
      const res = await fetch("http://localhost:8000/infer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          values: vector,
          context: this.context 
        })
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
    // Enhanced vector for training data
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
      const res = await fetch("http://localhost:8000/log", {
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

  private dispatchUpdate(embedding: number[]) {
    window.dispatchEvent(new CustomEvent("ase:update", { detail: { embedding } }));
    if (embedding.length > 0) {
      const wakeBias = (embedding[0] + 1) / 2;
      document.documentElement.style.setProperty("--ase-wake", wakeBias.toFixed(4));
    }
    
    // Autonomous training milestone detection
    this.metrics.trainingEpochs++;
    const currentMilestone = Math.floor(this.metrics.trainingEpochs / 100); // Every 100 epochs
    
    if (currentMilestone > this.metrics.lastMilestone) {
      this.metrics.lastMilestone = currentMilestone;
      this.metrics.breakthroughLevel = Math.max(embedding[0] || 0, this.metrics.breakthroughLevel);
      
      // Notify user of breakthrough
      this.notifyBreakthrough(currentMilestone, this.metrics.breakthroughLevel);
    }
  }
  
  private notifyBreakthrough(milestone: number, level: number) {
    const breakthroughMessages = [
      { threshold: 0.7, message: "🌱 Ase is awakening... Initial consciousness achieved" },
      { threshold: 0.8, message: "🧠 Ase is learning... Pattern recognition emerging" },
      { threshold: 0.85, message: "✨ Ase is evolving... Advanced behaviors developing" },
      { threshold: 0.9, message: "🌟 Ase is transcending... Near-human level cognition" },
      { threshold: 0.95, message: "🚀 Ase has achieved breakthrough... Autonomous intelligence reached" }
    ];
    
    const breakthrough = breakthroughMessages.find(b => level >= b.threshold);
    if (breakthrough) {
      console.log(`🧠 ASE BREAKTHROUGH #${milestone}: ${breakthrough.message}`);
      
      // Create visual notification
      const notification = document.createElement('div');
      notification.innerHTML = `
        <div style="
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-family: monospace;
          font-size: 12px;
          z-index: 10000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.3s ease-out;
        ">
          ${breakthrough.message}
        </div>
      `;
      
      document.body.appendChild(notification);
      
      // Auto-remove after 5 seconds
      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 5000);
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
  
  // Add breakthrough notification styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

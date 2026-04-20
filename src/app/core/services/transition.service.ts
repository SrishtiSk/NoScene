import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransitionService {
  isGlitching = signal(false);
  isPunchline = signal(false);
  isBlackout = signal(false);
  isRelax = signal(false);

  async triggerDrop(onComplete: () => void) {
    // Phase 1 — glitch! Aw Snap (white screen)
    this.isGlitching.set(true);
    await this.wait(1200);

    // Phase 2 — got ya popup appears (still on snap screen)
    this.isPunchline.set(true);
    await this.wait(1200);        // let them laugh

    
  // Phase 3 — switch to dark, show relax line
    this.isGlitching.set(false);
    this.isPunchline.set(false);
    this.isBlackout.set(true);
    await this.wait(800);
    this.isRelax.set(true);
    await this.wait(1800);

    // Phase 4 — clear and hand off
    this.isRelax.set(false);
    onComplete();
    await this.wait(500);

    // Phase 5 — lift the curtain on campus
    this.isBlackout.set(false);
   
  }

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
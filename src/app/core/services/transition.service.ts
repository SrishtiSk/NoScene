import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransitionService {
  isGlitching = signal(false);
  isPunchline = signal(false);
  isBlackout = signal(false);

  async triggerDrop(onComplete: () => void) {
    // Phase 1 — glitch
    this.isGlitching.set(true);
    await this.wait(600);

    // Phase 2 — blackout
    this.isGlitching.set(false);
    this.isBlackout.set(true);
    await this.wait(800);

    // Phase 3 — punchline
    this.isPunchline.set(true);
    await this.wait(1800);

    // Phase 4 — fade and hand off
    this.isPunchline.set(false);
    await this.wait(600);

    this.isBlackout.set(false);
    onComplete();
  }

  private wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
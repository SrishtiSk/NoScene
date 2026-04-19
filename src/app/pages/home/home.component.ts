import { afterNextRender, Component, inject, signal } from '@angular/core';
import { TransitionService } from '../../core/services/transition.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  dropped = signal(false);
  eggOneActive = signal(false);

  private router = inject(Router);
  private ts = inject(TransitionService);

  constructor() {
    afterNextRender(() => {
      setTimeout(() => this.dropped.set(true), 100);
    });
  }

  onWatermarkEnter() { this.eggOneActive.set(true);   }
  onWatermarkLeave() { this.eggOneActive.set(false);   }

  onSeeHow(){
    this.ts.triggerDrop(() => {
      this.router.navigate(['/campus']);
    });
  }
}
import { Component, inject } from '@angular/core';
import { TransitionService } from '../../../core/services/transition.service';

@Component({
  selector: 'app-transition-overlay',
  standalone: true,
  imports: [],
  templateUrl: './transition-overlay.component.html',
  styleUrl: './transition-overlay.component.scss'
})
export class TransitionOverlayComponent {
  ts = inject(TransitionService);
}
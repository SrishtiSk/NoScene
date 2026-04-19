import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransitionOverlayComponent } from '../../shared/components/transition-overlay/transition-overlay.component';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, TransitionOverlayComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}

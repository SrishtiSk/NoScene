import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransitionOverlayComponent } from '../../shared/components/transition-overlay/transition-overlay.component';
import { BrokeStudentToastComponent } from '../../shared/components/broke-student-toast/broke-student-toast.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, TransitionOverlayComponent, BrokeStudentToastComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {

}

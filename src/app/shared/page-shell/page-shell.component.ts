import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-shell',
  imports: [RouterModule],
  templateUrl: './page-shell.component.html',
  styleUrl: './page-shell.component.scss'
})
export class PageShellComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() accent: string = "#e8ff47";

  constructor(private location: Location) { }

  goBack(){
    this.location.back();
  }
}

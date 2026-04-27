import { Location } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartDrawerComponent } from '../components/cart-drawer/cart-drawer.component';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-page-shell',
  standalone: true,
  imports: [RouterModule, CartDrawerComponent],
  templateUrl: './page-shell.component.html',
  styleUrl: './page-shell.component.scss'
})
export class PageShellComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() accent: string = "#e8ff47";
  @Input() showCart: boolean = false;

  cart = inject(CartService);
  location = inject(Location);

  goBack(){
    this.location.back();
  }
}

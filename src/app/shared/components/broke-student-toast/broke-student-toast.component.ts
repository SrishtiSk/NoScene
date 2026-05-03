import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-broke-student-toast',
  standalone: true,
  imports: [],
  templateUrl: './broke-student-toast.component.html',
  styleUrl: './broke-student-toast.component.scss',
  encapsulation: ViewEncapsulation.None    // ← styles apply globally

})
export class BrokeStudentToastComponent {
  cart = inject(CartService);
  router = inject(Router);

  goToRentals() {
    this.cart.brokeStudentEgg.set(false);
    this.cart.closeDrawer();
    this.router.navigate(['/campus/rentals']);
  }
}
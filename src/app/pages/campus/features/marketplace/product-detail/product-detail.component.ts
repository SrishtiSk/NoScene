import { Component, computed, inject, signal } from '@angular/core';
import { PageShellComponent } from '../../../../../shared/page-shell/page-shell.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../../core/services/product.service';
import { CartService } from '../../../../../core/services/cart.service';
import { Product } from '../../../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [PageShellComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private products = inject(ProductService);
  cart = inject(CartService);

  product = signal<Product | undefined>(undefined);
  activeImage = signal(0);

  added = computed(()=>{
    const p = this.product();
    if (!p) return false;
    return this.cart.allItems().some(i => i.id === p.id as any);
  });


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    const found = this.products.getById(id);
    if (!found){ this.router.navigate(['/campus/marketplace']); return; }
    this.product.set(found);
  }
  setImage(index:number) { this.activeImage.set(index); }

  addToCart() {
    const p = this.product();
    if (!p) return;
    this.cart.add({
      id: p.id as any, 
      title: p.title, 
      price: p.price, 
      emoji: p.emoji
    });
  }
}

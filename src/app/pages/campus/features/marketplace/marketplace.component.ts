import { Component, inject, signal } from '@angular/core';
import { PageShellComponent } from '../../../../shared/page-shell/page-shell.component';
import { Router } from '@angular/router';


interface Listing {
  id: number;
  emoji: string;
  title: string;
  price: string;
  category: string;
  tag: 'new' | 'used' | 'negotiable';
  slug:string;
}


@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [PageShellComponent],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})

export class MarketplaceComponent {
  private router = inject(Router);
  
  activeCategory= signal('All');

  categories = [
    'All', "Women's Fashion", "Men's Fashion",
    'Stationery', 'Electronics', 'Furniture'
  ];

  listings: Listing[] = [
    { id: 1, emoji: '👗', title: 'Floral Sundress', price: '₹650', category: "Women's Fashion", tag: 'used', slug: 'floral-sundress' },
    { id: 2, emoji: '👟', title: 'Nike Air Force 1', price: '₹3,200', category: "Men's Fashion", tag: 'used', slug: 'nike-shoe' },
    { id: 3, emoji: '💻', title: 'MacBook Air M1', price: '₹55,000', category: 'Electronics', tag: 'negotiable', slug:'macbook-air'},
    { id: 4, emoji: '📓', title: 'Classmate Notebooks', price: '₹120', category: 'Stationery', tag: 'new', slug:'' },
    { id: 5, emoji: '🪑', title: 'Study Chair', price: '₹1,800', category: 'Furniture', tag: 'used', slug:'study-chair' },
    { id: 6, emoji: '👜', title: 'Leather Tote Bag', price: '₹899', category: "Women's Fashion", tag: 'new', slug:'' },
    { id: 7, emoji: '⌨️', title: 'Mechanical Keyboard', price: '₹2,100', category: 'Electronics', tag: 'used', slug:'' },
    { id: 8, emoji: '👕', title: 'Oversized Hoodie', price: '₹750', category: "Men's Fashion", tag: 'new', slug: '' },
  ];

  get filtered(): Listing[] {
    const cat = this.activeCategory();
    return cat === 'All'
      ? this.listings
      : this.listings.filter(l => l.category === cat);
  }

  setCategory(cat: string) { this.activeCategory.set(cat); }

  // goToProduct(id:string){
  //   this.router.navigate(['/campus/marketplace', id]);
  // }
  goToProduct(slug:string){
    if(!slug) return;
    this.router.navigate(['/campus/marketplace', slug]);
  }
}

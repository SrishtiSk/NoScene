import { Component, signal } from '@angular/core';
import { PageShellComponent } from '../../../../shared/page-shell/page-shell.component';


interface Listing {
  id: number;
  emoji: string;
  title: string;
  price: string;
  category: string;
  tag: 'new' | 'used' | 'negotiable';
}


@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [PageShellComponent],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.scss'
})

export class MarketplaceComponent {

  activeCategory= signal('All');

  categories = [
    'All', "Women's Fashion", "Men's Fashion",
    'Stationery', 'Electronics', 'Furniture'
  ];

  listings: Listing[] = [
    { id: 1, emoji: '👗', title: 'Floral Sundress', price: '₹650', category: "Women's Fashion", tag: 'used' },
    { id: 2, emoji: '👟', title: 'Nike Air Force 1', price: '₹3,200', category: "Men's Fashion", tag: 'used' },
    { id: 3, emoji: '💻', title: 'MacBook Air M1', price: '₹55,000', category: 'Electronics', tag: 'negotiable' },
    { id: 4, emoji: '📓', title: 'Classmate Notebooks', price: '₹120', category: 'Stationery', tag: 'new' },
    { id: 5, emoji: '🪑', title: 'Study Chair', price: '₹1,800', category: 'Furniture', tag: 'used' },
    { id: 6, emoji: '👜', title: 'Leather Tote Bag', price: '₹899', category: "Women's Fashion", tag: 'new' },
    { id: 7, emoji: '⌨️', title: 'Mechanical Keyboard', price: '₹2,100', category: 'Electronics', tag: 'used' },
    { id: 8, emoji: '👕', title: 'Oversized Hoodie', price: '₹750', category: "Men's Fashion", tag: 'new' },
  ];

  get filtered(): Listing[] {
    const cat = this.activeCategory();
    return cat === 'All'
      ? this.listings
      : this.listings.filter(l => l.category === cat);
  }

  setCategory(cat: string) { this.activeCategory.set(cat); }
}

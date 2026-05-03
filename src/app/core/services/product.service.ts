import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[]=[
    {
      id: 'floral-sundress',
      emoji: '👗',
      title: 'Floral Sundress',
      price: '₹650',
      category: "Women's Fashion",
      tag: 'used',
      description: 'Barely worn floral sundress. Perfect for fests and casual outings. Washed and ready to go — no stains, no tears.',
      images: [
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
        'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80',
      ], 
      specs: [
        { label: 'Size', value: 'M (fits S-M)' },
        { label: 'Condition', value: 'Used — like new' },
        { label: 'Colour', value: 'White & Pink' },
        { label: 'Material', value: 'Cotton blend' },
      ],
      seller: 'Priya R.',
      location: 'Girls Hostel Block B',
    },
    {
      id: 'macbook-air',
      emoji: '💻',
      title: 'MacBook Air M1',
      price: '₹55,000',
      category: 'Electronics',
      tag: 'negotiable',
      description: 'M1 MacBook Air, 8GB RAM, 256GB SSD. Used for 1.5 years. Battery health 91%. Comes with original charger. Price negotiable for serious buyers.',
      images: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
      ], 
      specs: [
        { label: 'Chip', value: 'Apple M1' },
        { label: 'RAM', value: '8GB' },
        { label: 'Storage', value: '256GB SSD' },
        { label: 'Battery', value: '91% health' },
        { label: 'Includes', value: 'Original charger' },
      ],
      seller: 'Arjun M.',
      location: 'CV Raman Block',
    },
    {
      id: 'study-chair',
      emoji: '🪑',
      title: 'Study Chair',
      price: '₹1,800',
      category: 'Furniture',
      tag: 'used',
      description: 'Ergonomic study chair with adjustable height. Used for one semester. Solid build, no wobble. Ideal for long study sessions.',
      images: [
        'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80',
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=80',
      ],
      specs: [
        { label: 'Type', value: 'Ergonomic' },
        { label: 'Condition', value: 'Good — minor scuffs' },
        { label: 'Height', value: 'Adjustable' },
        { label: 'Colour', value: 'Black' },
      ],
      seller: 'Rohit K.',
      location: 'Men\'s Hostel Block A',
    },
  ];
  getById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getAll(): Product[] {
    return this.products;
  }


}

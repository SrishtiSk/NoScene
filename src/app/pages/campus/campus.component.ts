import { afterNextRender, Component, ElementRef, Host, HostListener, inject, signal } from '@angular/core';
import { FeatureCard } from '../../core/models/feature.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campus',
  standalone: true,
  imports: [],
  templateUrl: './campus.component.html',
  styleUrl: './campus.component.scss'
})

export class CampusComponent {

  private router = inject(Router);
  private el = inject(ElementRef);

  // ── Spotlight ──────────────────────────────────
  spotX = signal(50);   // percent
  spotY = signal(50);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = (this.el.nativeElement as HTMLElement).getBoundingClientRect();
    this.spotX.set(((event.clientX - rect.left) / rect.width) * 100);
    this.spotY.set(((event.clientY - rect.top) / rect.height) * 100);
  }
  
  // ── Sequential reveal ──────────────────────────
  visibleCards = signal<boolean[]>([false, false, false, false]);
  hoveredId: string | null = null;
 
  constructor() {
    // Reveal cards one by one with a delay
    afterNextRender(() => {
      [0,1,2,3].forEach((i) => {
        setTimeout(() => {
          this.visibleCards.update(v=>{
            const next = [...v];
            next[i] = true;
            return next;
          });
        }, 200 + i * 150 ); // delay between each card
      });
    });
  }


  features:FeatureCard[] = [
    {
      id: 'marketplace',
      icon: '🛍',
      label: 'Marketplace',
      description: 'Buy & sell anything. No middleman.',
      route: '/campus/marketplace',
      categories: ["Women's Fashion", "Men's Fashion",
        'Stationery', 'Electronics', 'Furniture'],
      accent: '#e8ff47',   // electric yellow
    },
    {
      id: 'rentals',
      icon: '🏠',
      label: 'Rentals',
      description: 'Rent what you need, when you need it.',
      route: '/campus/rentals',
      categories: ['Properties', 'Electronics',
        'Furniture', 'Rides'],
      accent: '#47d4ff',   // cool blue
    },
    {
      id: 'projects',
      icon: '📝',
      label: 'Projects',
      description: 'Find experts. Get it done.',
      route: '/campus/projects',
      categories: ['Describe Needs', 'Connect',
        'Collaborate', 'Get Results'],
      accent: '#b47fff',   // soft purple
    },
    {
      id: 'dashboard',
      icon: '📊',
      label: 'Seller Dashboard',
      description: 'Your listings, sales & messages.',
      route: '/campus/dashboard',
      categories: ['Listings', 'Sales', 'Messages', 'Analytics'],
      accent: '#ff9f47',   // warm orange
    }
  ];

  navigate(route:string){
    this.router.navigate([route]);
  }
  
}

import { computed, Injectable, signal } from '@angular/core';


export interface CartItem {
  id: number;
  title: string;
  price: string;
  emoji: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = signal<CartItem[]>([]);
  
  count = computed(() => this.items().length);
  allItems = computed(() => this.items());
  isOpen = signal(false);

  add(item: CartItem) {
    if(!this.items().find(i => i.id === item.id)) {
      this.items.update(items => [...items, item]);
    }
    this.isOpen.set(true);
  }

  remove(id: number) {
    this.items.update(items => items.filter(i => i.id !== id));
  }

  toggleDrawer() {
    this.isOpen.update(isOpen => !isOpen);
  }
  closeDrawer() {
    this.isOpen.set(false);
  } 

  
}

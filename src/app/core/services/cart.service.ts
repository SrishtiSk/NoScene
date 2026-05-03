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

  brokeStudentEgg = signal(false);

  add(item: CartItem) {
    if(!this.items().find(i => i.id === item.id)) {
      this.items.update(items => [...items, item]);
    }
    this.isOpen.set(true);
  }

  remove(id: any) {
    const wasMacBook = this.items().some(
      i => i.id === id && id ==='macbook-air'
    );

    this.items.update(items => items.filter(i => i.id !== id));
  
    if (wasMacBook) {
      this.isOpen.set(false);
      setTimeout(() => {
        this.brokeStudentEgg.set(true);
        setTimeout(() => {
          this.brokeStudentEgg.set(false);
        }, 5000);
      }, 350);
    }
  }

  toggleDrawer() {
    this.isOpen.update(isOpen => !isOpen);
  }
  closeDrawer() {
    this.isOpen.set(false);
  } 

  
}

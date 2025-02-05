import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeProduct(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  getTotal() {
    return this.cartService.getTotalPrice();
  }
}

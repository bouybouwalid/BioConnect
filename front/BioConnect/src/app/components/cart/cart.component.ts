import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajoutez FormsModule ici
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
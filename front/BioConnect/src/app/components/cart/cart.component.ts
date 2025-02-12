import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  confirmationMessage: string | null = null; // Pour afficher le message de confirmation

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

  // ✅ Passer la commande
  passerCommande() {
    this.cartService.passerCommande().subscribe(
      (response) => {
        this.confirmationMessage = `Votre paiement est fait ! Voici votre numéro de suivi : ${response.id}`;
        this.cartService.clearCart(); // Vider le panier après validation
      },
      (error) => {
        console.error("Erreur lors de la commande :", error);
        this.confirmationMessage = "Erreur lors du paiement. Veuillez réessayer.";
      }
    );
  }
}

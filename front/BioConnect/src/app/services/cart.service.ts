import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = []; // Liste des produits dans le panier


  constructor() {}

  // ✅ Ajouter un produit au panier
  addToCart(product: any) {
    let existingProduct = this.cart.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++; // Incrémenter la quantité si le produit existe déjà
    } else {
      this.cart.push({ ...product, quantity: 1 }); // Ajouter avec une quantité initiale de 1
    }
  }

  // ✅ Récupérer le panier
  getCart() {
    return this.cart;
  }

  // ✅ Supprimer un produit du panier
  removeFromCart(productId: number) {
    this.cart = this.cart.filter((p) => p.id !== productId);
  }

  // ✅ Calculer le total du panier
  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.prix * product.quantity, 0);
  }

  // ✅ Modifier la quantité d’un produit
  updateQuantity(productId: number, quantity: number) {
    let product = this.cart.find((p) => p.id === productId);
    if (product && quantity > 0) {
      product.quantity = quantity;
    } else {
      this.removeFromCart(productId);
    }
  }

  // ✅ Vider le panier
  clearCart() {
    this.cart = [];
  }


}

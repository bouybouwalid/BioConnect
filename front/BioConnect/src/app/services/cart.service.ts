import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service'; // Importation de l'authentification
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = []; // Liste des produits dans le panier
  private apiUrl = 'http://localhost:8080/api/commandes';

  constructor(private http: HttpClient, private authService: AuthService) {}

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

  // ✅ Passer la commande
  passerCommande(): Observable<any> {
    const userId = this.authService.getUserId(); // Récupérer l'ID de l'utilisateur connecté
    if (!userId) {
      throw new Error("Utilisateur non connecté !");
    }

    const produitIds = this.cart.map((p) => p.id); // Extraire les IDs des produits
    const montantTotal = this.getTotalPrice(); // Calculer le total

    return this.http.post(`${this.apiUrl}/passer?userId=${userId}&montantTotal=${montantTotal}`, produitIds);
  }

  // ✅ Vider le panier après commande
  clearCart() {
    this.cart = [];
  }
}

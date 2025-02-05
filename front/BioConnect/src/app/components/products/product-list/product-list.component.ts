import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service'; // Importer CartService

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = []; // Liste des produits chargés depuis le backend
  selectedProduct: any = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Charger les produits depuis l'API (à implémenter plus tard)
  loadProducts() {
    // Simule les produits pour l'instant
    this.products = [
      { id: 1, nom: 'Tomates Bio', prix: 3.5, details: 'Cultivées sans pesticides', imageUrl: 'assets/products/tomatoes.jpg' },
      { id: 2, nom: 'Pommes de Terre', prix: 2.0, details: 'Riches en goût', imageUrl: 'assets/products/potatoes.jpg' }
    ];
  }

  // Ouvrir la modale d’un produit
  openProductDetails(product: any) {
    this.selectedProduct = product;
  }

  // Fermer la modale
  closeProductDetails() {
    this.selectedProduct = null;
  }

  // Ajouter un produit au panier
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.nom} ajouté au panier !`);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  apiUrl = 'http://localhost:8080/api/produits'; // 🔹 Lien vers l'API des produits
  products: any[] = [];
  groupedProducts: { [category: string]: any[] } = {};
  selectedProduct: any = null;
  showModal: boolean = false;

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Charger les produits depuis l'API
  loadProducts() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.products = data;
        this.groupProductsByCategory();
      },
      (error) => {
        console.error('Erreur lors du chargement des produits :', error);
      }
    );
  }

  // Grouper les produits par catégorie
  private groupProductsByCategory(): void {
    this.groupedProducts = this.products.reduce((acc: { [category: string]: any[] }, product) => {
      if (!acc[product.categorie?.nom]) {
        acc[product.categorie?.nom] = [];
      }
      acc[product.categorie?.nom].push(product);
      return acc;
    }, {});
  }

  // Ouvrir la pop-up des détails produit
  openProductDetails(product: any) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  // Fermer la pop-up
  closeProductDetails() {
    this.selectedProduct = null;
    this.showModal = false;
  }

  // Ajouter un produit au panier
  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert('Produit ajouté au panier !'); // 🔹 Afficher une alerte pour confirmer
  }
}

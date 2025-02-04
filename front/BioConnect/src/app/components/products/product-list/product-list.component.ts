import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ProductListComponent implements OnInit {
  apiUrlProducts = 'http://localhost:8080/api/produits';
  apiUrlCategories = 'http://localhost:8080/api/categories';
  products: any[] = [];
  categories: any[] = [];
  groupedProducts: { [category: string]: any[] } = {};
  selectedProduct: any = null; // Stocke le produit sélectionné pour la pop-up

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  // Charger les produits depuis le backend
  loadProducts() {
    this.http.get<any[]>(this.apiUrlProducts).subscribe(
      (data) => {
        this.products = data;
        this.groupProductsByCategory();
      },
      (error) => {
        console.error('Erreur lors du chargement des produits :', error);
      }
    );
  }

  // Charger les catégories depuis le backend
  loadCategories() {
    this.http.get<any[]>(this.apiUrlCategories).subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des catégories :', error);
      }
    );
  }

  // Grouper les produits par catégorie
  private groupProductsByCategory(): void {
    this.groupedProducts = this.products.reduce((acc: { [category: string]: any[] }, product) => {
      const categoryName = product.categorie ? product.categorie.nom : 'Autres';
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(product);
      return acc;
    }, {});
  }

  // Ouvrir la pop-up avec les détails du produit
  openProductDetails(product: any) {
    this.selectedProduct = product;
  }

  // Fermer la pop-up
  closeProductDetails() {
    this.selectedProduct = null;
  }
}

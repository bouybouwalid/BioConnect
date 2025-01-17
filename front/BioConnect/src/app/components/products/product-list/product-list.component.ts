import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [
    {
      name: 'Tomates Bio',
      imageUrl: 'assets/products/tomatoes.jpg',
      category: 'Légumes',
      association: 'BioLocal',
      price: 3.5,
    },
    {
      name: 'Pommes de Terre',
      imageUrl: 'assets/products/potatoes.jpg',
      category: 'Légumes',
      association: 'Nature et Saveurs',
      price: 2.0,
    },
    {
      name: 'Miel Naturel',
      imageUrl: 'assets/products/honey.jpg',
      category: 'Produits Transformés',
      association: 'Green Earth',
      price: 8.0,
    },
    {
      name: 'Confiture Maison',
      imageUrl: 'assets/products/jam.jpg',
      category: 'Produits Transformés',
      association: 'Nature et Saveurs',
      price: 5.0,
    },
  ];

  groupedProducts: { [category: string]: { name: string; imageUrl: string; category: string; association: string; price: number; }[] } = {};

  ngOnInit(): void {
    this.groupProductsByCategory();
  }

  // Grouper les produits par catégorie
  private groupProductsByCategory(): void {
    this.groupedProducts = this.products.reduce((acc: { [category: string]: { name: string; imageUrl: string; category: string; association: string; price: number; }[] }, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-details',
  standalone: true,
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  imports: [CommonModule,RouterLink] // Ajoutez CommonModule ici
})
export class OrderDetailsComponent {
  orderId: number;
  order: any;

  constructor(private route: ActivatedRoute) {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

    // Simuler les données de la commande
    this.order = {
      id: this.orderId,
      date: new Date('2023-12-01'),
      total: 75.5,
      items: [
        { name: 'Produit 1', price: 25.0, quantity: 1 },
        { name: 'Produit 2', price: 15.0, quantity: 2 },
        { name: 'Produit 3', price: 10.0, quantity: 1 }
      ]
    };
  }
}
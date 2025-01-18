import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-association-dashboard',
  standalone: true,
  templateUrl: './association-dashboard.component.html',
  styleUrls: ['./association-dashboard.component.css'],
  imports: [CommonModule]
})
export class AssociationDashboardComponent {
  association = {
    id: 1,
    name: 'BioLocal',
    description: 'Une association dédiée à la promotion des produits biologiques.',
    location: '10 Rue des Fleurs, Bordeaux',
  };

  orders = [
    { id: 101, clientName: 'Alice Dupont', total: 45.0 },
    { id: 102, clientName: 'Jean Martin', total: 30.5 },
    { id: 103, clientName: 'Claire Dubois', total: 60.0 },
  ];

  validateOrder(orderId: number) {
    console.log('Commande validée :', orderId);
    alert(`Commande #${orderId} validée avec succès !`);
    // Ajoute ici la logique pour valider une commande (simulée)
  }
}

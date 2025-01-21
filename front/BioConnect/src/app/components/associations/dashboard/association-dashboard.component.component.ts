import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-association-dashboard',
  standalone: true,
  templateUrl: './association-dashboard.component.html',
  styleUrls: ['./association-dashboard.component.css'],
  imports: [CommonModule, FormsModule] // Ajoutez FormsModule ici
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
    { id: 102, clientName: 'Bob Martin', total: 30.0 },
    { id: 103, clientName: 'Charlie Brown', total: 25.0 }
  ];

  newProduct = { name: '', price: 0 };
  newEvent = { name: '', date: '', location: '' };

  constructor(private modalService: NgbModal) {}

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addProduct() {
    console.log('Produit ajouté :', this.newProduct);
    // Ajoutez la logique pour sauvegarder le produit (simulée ici)
    alert('Produit ajouté avec succès !');
    this.newProduct = { name: '', price: 0 };
  }

  addEvent() {
    console.log('Événement ajouté :', this.newEvent);
    // Ajoutez la logique pour sauvegarder l'événement (simulée ici)
    alert('Événement ajouté avec succès !');
    this.newEvent = { name: '', date: '', location: '' };
  }

  validateOrder(orderId: number) {
    console.log('Commande validée :', orderId);
    // Ajoutez la logique pour valider la commande (simulée ici)
    alert('Commande validée avec succès !');
  }
}
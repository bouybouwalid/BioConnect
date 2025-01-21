import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-association-list',
  standalone: true,
  templateUrl: './association-list.component.html',
  styleUrls: ['./association-list.component.css'],
  imports: [CommonModule, RouterModule] // Ajoutez CommonModule et RouterModule ici
})
export class AssociationListComponent {
  // Liste simulée des associations
  associations = [
    { id: 1, name: 'Association BioLocal', description: 'Promotion des produits bio locaux.' },
    { id: 2, name: 'Green Earth', description: 'Soutenir une agriculture durable.' },
    { id: 3, name: 'Nature et Saveurs', description: 'Produits bio issus de la région.' },
  ];
}
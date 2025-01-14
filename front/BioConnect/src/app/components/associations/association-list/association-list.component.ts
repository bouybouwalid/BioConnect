import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-association-list',
  standalone: true,
  templateUrl: './association-list.component.html',
  styleUrls: ['./association-list.component.css'],
})
export class AssociationListComponent {
  // Liste simulée des associations
  associations = [
    { id: 1, name: 'Association BioLocal', description: 'Promotion des produits bio locaux.' },
    { id: 2, name: 'Green Earth', description: 'Soutenir une agriculture durable.' },
    { id: 3, name: 'Nature et Saveurs', description: 'Produits bio issus de la région.' },
  ];
}

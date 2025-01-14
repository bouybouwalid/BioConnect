import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-association-details',
  standalone: true,
  templateUrl: './association-details.component.html',
  styleUrls: ['./association-details.component.css'],
})
export class AssociationDetailsComponent {
  association: any;

  // Liste simulée pour démo
  associations = [
    {
      id: 1,
      name: 'Association BioLocal',
      description: 'Promotion des produits bio locaux.',
      products: [
        { name: 'Tomates Bio', description: 'Cultivées sans pesticides.' },
        { name: 'Pommes de Terre', description: 'Riches en goût.' },
      ],
      events: [
        { name: 'Marché Bio', description: 'Marché mensuel des produits bio.' },
      ],
    },
    // Autres associations...
  ];

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.association = this.associations.find((assoc) => assoc.id === id);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  standalone: true,
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  imports: [CommonModule]
})
export class EventListComponent {
  events = [
    {
      id: 1,
      title: 'Marché Bio de Bordeaux',
      date: new Date('2025-01-20'),
      location: 'Place des Quinconces, Bordeaux',
      description:
        'Rejoignez-nous pour un marché bio exceptionnel, avec des produits locaux, des dégustations et des ateliers sur l’agriculture durable.',
      image: 'assets/events/market.jpg',
    },
    {
      id: 2,
      title: 'Atelier Cuisine Bio',
      date: new Date('2025-01-25'),
      location: 'Maison des Associations, Mérignac',
      description:
        'Participez à notre atelier de cuisine bio et apprenez à préparer des plats sains et délicieux avec des ingrédients locaux.',
      image: 'assets/events/cooking.jpg',
    }
  ];

  constructor(private router: Router) {}

  viewDetails(event: any) {
    this.router.navigate(['/events', event.id]);
  }
}
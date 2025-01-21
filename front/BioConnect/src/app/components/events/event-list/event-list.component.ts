import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    },
    {
      id: 3,
      title: 'Conférence sur l\'Agriculture Durable',
      date: new Date('2025-02-10'),
      location: 'Centre des Congrès, Paris',
      description:
        'Assistez à une conférence sur les dernières innovations en matière d\'agriculture durable.',
      image: 'assets/events/conference.jpg',
    },
    {
      id: 4,
      title: 'Festival des Produits Locaux',
      date: new Date('2025-03-05'),
      location: 'Parc des Expositions, Lyon',
      description:
        'Découvrez et dégustez des produits locaux lors de notre festival annuel.',
      image: 'assets/events/festival.jpg',
    },
    {
      id: 5,
      title: 'Atelier de Jardinage Bio',
      date: new Date('2025-04-15'),
      location: 'Jardin Botanique, Nantes',
      description:
        'Apprenez les techniques de jardinage biologique lors de notre atelier pratique.',
      image: 'assets/events/gardening.jpg',
    },
    {
      id: 6,
      title: 'Salon de l\'Agriculture Bio',
      date: new Date('2025-05-20'),
      location: 'Parc des Expositions, Toulouse',
      description:
        'Rencontrez des producteurs bio et découvrez les dernières tendances du secteur.',
      image: 'assets/events/expo.jpg',
    },
    {
      id: 7,
      title: 'Randonnée Nature',
      date: new Date('2025-06-10'),
      location: 'Forêt de Fontainebleau',
      description:
        'Participez à une randonnée guidée pour découvrir la biodiversité locale.',
      image: 'assets/events/hiking.jpg',
    },
    {
      id: 8,
      title: 'Marché Nocturne Bio',
      date: new Date('2025-07-25'),
      location: 'Place de la République, Lille',
      description:
        'Profitez d\'un marché nocturne avec des produits bio et des animations musicales.',
      image: 'assets/events/night-market.jpg',
    }
  ];

  selectedEvent: any;

  constructor(private modalService: NgbModal) {}

  openModal(content: any, event: any) {
    this.selectedEvent = event;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
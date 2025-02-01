import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../../../services/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule], // Ajoutez CommonModule ici
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  selectedEvent: Event | null = null;
  showModal: boolean = false;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(
      (data: Event[]) => {
        this.events = data;
      },
      (error: any) => {
        console.error('Erreur de chargement des événements :', error);
      }
    );
  }
}
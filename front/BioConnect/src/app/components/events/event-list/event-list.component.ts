import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../../../services/event.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
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

  openDetails(event: Event) {
    this.selectedEvent = event;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedEvent = null;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Event {
  id: number;
  title: string;
  description: string;
  address: string;
  date: string;
  association: { id: number; nom: string };
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }
}

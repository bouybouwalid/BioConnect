import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Association {
  id?: number;
  nom: string;
  lieu: string;
  description: string;
  latitude: number;
  longitude: number;
  createurId: number;
}

@Injectable({
  providedIn: 'root',
})
export class AssociationService {
  private apiUrl = 'http://localhost:8080/api/associations';

  constructor(private http: HttpClient) {}

  getAssociations(): Observable<Association[]> {
    return this.http.get<Association[]>(this.apiUrl);
  }
  createAssociation(userId: number, association: Association): Observable<Association> {
    return this.http.post<Association>(`${this.apiUrl}/create/${userId}`, association);
  }
}

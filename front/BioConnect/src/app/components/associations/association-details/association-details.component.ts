import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-association-details',
  standalone: true,
  templateUrl: './association-details.component.html',
  styleUrls: ['./association-details.component.css'],
  imports: [CommonModule]
})
export class AssociationDetailsComponent implements OnInit {
  apiUrl = 'http://localhost:8080/api/associations';
  association: any = null;
  id: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAssociation();
  }

  // Charger les détails de l'association depuis l'API
  loadAssociation() {
    this.http.get<any>(`${this.apiUrl}/${this.id}`).subscribe(
      (data) => {
        this.association = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de l’association :', error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-association-list',
  standalone: true,
  templateUrl: './association-list.component.html',
  styleUrls: ['./association-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AssociationListComponent implements OnInit {
  apiUrl = 'http://localhost:8080/api/associations'; // URL du backend
  associations: any[] = []; // Tableau qui stocke les associations récupérées

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAssociations();
  }

  loadAssociations() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.associations = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des associations :', error);
      }
    );
  }
}

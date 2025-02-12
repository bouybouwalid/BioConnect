import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

declare var ymaps: any; // Déclare l'objet Yandex Maps

@Component({
  selector: 'app-association-details',
  standalone: true,
  templateUrl: './association-details.component.html',
  styleUrls: ['./association-details.component.css'],
  imports: [CommonModule]
})
export class AssociationDetailsComponent implements OnInit, AfterViewInit {
  apiUrl = 'http://localhost:8080/api/associations';
  association: any = null;
  id: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAssociation();
  }

  ngAfterViewInit(): void {
    if (this.association) {
      this.initMap();
    }
  }

  // Charger les détails de l'association
  loadAssociation() {
    this.http.get<any>(`${this.apiUrl}/${this.id}`).subscribe(
      (data) => {
        this.association = data;
        this.initMap(); // Initialise la carte une fois les données chargées
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de l’association :', error);
      }
    );
  }

  initMap() {
    if (!ymaps) {
      console.error("L'API Yandex Maps n'est pas chargée !");
      return;
    }

    ymaps.ready(() => {
      const map = new ymaps.Map('map-container', {
        center: [this.association.latitude, this.association.longitude],
        zoom: 10
      });

      const placemark = new ymaps.Placemark(
        [this.association.latitude, this.association.longitude],
        { balloonContent: `<strong>${this.association.nom}</strong><br>${this.association.lieu}` }
      );

      map.geoObjects.add(placemark);
    });
  }
}

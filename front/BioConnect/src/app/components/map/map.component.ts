import { Component, AfterViewInit } from '@angular/core';
import { AssociationService, Association } from '../../services/association.service';

declare var ymaps: any; // Déclare l'objet Yandex Maps

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  associations: Association[] = [];

  constructor(private associationService: AssociationService) {}

  ngAfterViewInit() {
    this.associationService.getAssociations().subscribe(
      (data: Association[]) => {
        this.associations = data;
        this.initMap();
      },
      (error) => {
        console.error("Erreur lors du chargement des associations :", error);
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
        center: [44.8378, -0.5792], // Coordonnées de Bordeaux (point de départ)
        zoom: 6
      });

      this.associations.forEach((assoc) => {
        if (assoc.latitude && assoc.longitude) {
          const placemark = new ymaps.Placemark(
            [assoc.latitude, assoc.longitude],
            { balloonContent: `<strong>${assoc.nom}</strong><br>${assoc.lieu}` }
          );
          map.geoObjects.add(placemark);
        }
      });
    });
  }
}

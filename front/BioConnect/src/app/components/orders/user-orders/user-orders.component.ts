import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-orders',
  standalone: true,
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
  imports: [CommonModule, RouterModule] // Ajoutez CommonModule et RouterModule ici
})
export class UserOrdersComponent {
  orders = [
    { id: 1, date: new Date('2023-12-01'), total: 45.5 },
    { id: 2, date: new Date('2023-12-15'), total: 30.0 },
    { id: 3, date: new Date('2024-01-05'), total: 60.75 },
  ];
}
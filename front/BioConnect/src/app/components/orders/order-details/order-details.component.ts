import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-order-details',
  standalone: true,
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  imports: [CommonModule, RouterLink]
})
export class OrderDetailsComponent {
  orderId!: number;
  order: any;
  private route = inject(ActivatedRoute);
  private orderService = inject(OrderService);

  ngOnInit() {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadOrderDetails();
  }

  loadOrderDetails() {
    this.orderService.getOrderDetails(this.orderId).subscribe(
      (data) => {
        this.order = data;
      },
      (error) => {
        console.error("Erreur lors du chargement des détails de la commande :", error);
      }
    );
  }
}

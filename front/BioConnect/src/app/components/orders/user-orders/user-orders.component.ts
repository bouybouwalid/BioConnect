import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-user-orders',
  standalone: true,
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
  imports: [CommonModule, RouterModule]
})
export class UserOrdersComponent {
  orders: any[] = [];
  private orderService = inject(OrderService);
  private authService = inject(AuthService);

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.orderService.getUserOrders(user.id).subscribe(
        (data) => {
          this.orders = data;
        },
        (error) => {
          console.error("Erreur lors du chargement des commandes :", error);
        }
      );
    }
  }
}

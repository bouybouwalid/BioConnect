import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserPayload } from '../../models/user-payload.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common'; // Importez CommonModule
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [RouterLink,CommonModule],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private authService = inject(AuthService);
  cartService = inject(CartService);
  private router = inject(Router);
  user: UserPayload | null = null;
  private userSubscription!: Subscription;

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}

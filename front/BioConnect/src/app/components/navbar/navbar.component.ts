import { Component } from '@angular/core';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public cartService: CartService) {}
}
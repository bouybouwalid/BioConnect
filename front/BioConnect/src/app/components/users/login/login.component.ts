import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service'; // Service d'authentification
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajout de FormsModule pour `ngModel`
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };
  
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      this.authService.login(this.loginData.email, this.loginData.password).subscribe(
        response => {
          console.log('Connexion réussie !', response);
        },
        error => {
          console.error('Erreur de connexion :', error);
        }
      );
    } else {
      console.error('Formulaire invalide');
    }
  }

  
}

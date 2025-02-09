import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };
  
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      this.authService.login(this.loginData.email, this.loginData.password).subscribe({
        next: (response) => {
          // Sauvegarder le token reçu du backend
          this.authService.saveToken(response.token);
          
          this.successMessage = 'Connexion réussie ! Redirection en cours...';
          this.errorMessage = '';
          
          // Redirection après 1.5 secondes
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1500);
        },
        error: (error) => {
          console.error('Erreur de connexion :', error);
          this.errorMessage = error.status === 401 
            ? 'Email ou mot de passe incorrect' 
            : 'Erreur lors de la connexion';
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs';
    }
  }
}
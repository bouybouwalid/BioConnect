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
      console.log('Tentative de connexion avec:', this.loginData);
      
      this.authService.login(this.loginData.email, this.loginData.password).subscribe({
        next: (response) => {
          console.log('Réponse complète du serveur:', response);
          
          if (response.token) {
            console.log('Token reçu:', response.token);
            this.authService.saveToken(response.token);
            
            // Vérification instantanée
            const currentUser = this.authService.getCurrentUser();
            console.log('Utilisateur après sauvegarde du token:', currentUser);
          }
          
          this.successMessage = 'Connexion réussie ! Redirection en cours...';
          setTimeout(() => this.router.navigate(['/home']), 1500);
        },
        error: (error) => {
          console.error('Erreur complète:', error);
          if (error.error) console.log('Détails de l\'erreur:', error.error);
          this.errorMessage = 'Échec de la connexion';
        }
      });
    }
  }
}
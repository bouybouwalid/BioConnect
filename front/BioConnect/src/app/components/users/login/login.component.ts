import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajout des modules nécessaires
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Ajout des données de connexion
  loginData = {
    email: '',
    password: '',
  };

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      console.log('Tentative de connexion :', this.loginData);
      // Ajouter ici la logique de connexion (envoi au backend, gestion des erreurs, etc.)
    } else {
      console.error('Formulaire invalide');
    }
  }
}

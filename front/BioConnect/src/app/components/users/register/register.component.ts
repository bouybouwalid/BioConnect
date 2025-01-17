import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // Données du formulaire
  registerData = {
    fullName: '',
    email: '',
    password: '',
  };

  // Méthode appelée lors de la soumission du formulaire
  onSubmit() {
    if (this.registerData.fullName && this.registerData.email && this.registerData.password) {
      console.log('Tentative d\'inscription :', this.registerData);
      // Logique d'inscription ici (par exemple, envoi au backend)
    } else {
      console.error('Formulaire invalide');
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajoutez CommonModule et FormsModule ici
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    motDePasse: ''
  };

  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.registerData).subscribe(
      (response: any) => {
        console.log('Inscription réussie', response);
      },
      (error: any) => {
        console.error('Erreur lors de l’inscription', error);
      }
    );
    
  }
}
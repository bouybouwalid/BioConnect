import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  imports: [CommonModule, FormsModule] // Ajoutez FormsModule ici
})
export class EditProfileComponent {
  user = {
    name: 'Walid Bouybou',
    email: 'walid@example.com',
    phone: '+33 6 12 34 56 78',
  };

  onSubmit() {
    console.log('Profil mis à jour :', this.user);
    // Ajoute la logique pour sauvegarder les modifications (simulée ici)
    alert('Profil mis à jour avec succès !');
  }
}
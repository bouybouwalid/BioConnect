import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-association',
  standalone: true,
  templateUrl: './create-association.component.html',
  styleUrls: ['./create-association.component.css'],
  imports: [CommonModule, FormsModule] // Ajoutez FormsModule ici
})
export class CreateAssociationComponent {
  association = {
    name: '',
    description: '',
    location: '',
  };

  onSubmit() {
    console.log('Nouvelle association créée :', this.association);
    alert('Association créée avec succès !');
  }
}
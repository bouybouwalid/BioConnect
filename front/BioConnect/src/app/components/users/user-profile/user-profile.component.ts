import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CommonModule, RouterModule] // Ajoutez les modules nécessaires ici
})
export class UserProfileComponent {
  user = {
    name: 'John Doe', // Ajoutez cette propriété
    email: 'john.doe@example.com', // Ajoutez cette propriété
    phone: '123-456-7890', // Ajoutez cette propriété
    associations: [
      { id: 1, name: 'Association 1', createdAt: new Date() },
      { id: 2, name: 'Association 2', createdAt: new Date() }
    ]
  };
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CommonModule, FormsModule, RouterModule] // Utilisez CommonModule au lieu de BrowserModule
})
export class UserProfileComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    associations: [
      { id: 1, name: 'Association 1', createdAt: new Date() },
      { id: 2, name: 'Association 2', createdAt: new Date() }
    ]
  };

  newBlog = { title: '', domain: '', text: '' };

  constructor(private modalService: NgbModal) {}

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addBlog() {
    console.log('Blog ajouté :', this.newBlog);
    // Ajoutez la logique pour sauvegarder le blog (simulée ici)
    alert('Blog ajouté avec succès !');
    this.newBlog = { title: '', domain: '', text: '' };
  }
}
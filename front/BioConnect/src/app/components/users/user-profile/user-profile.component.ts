import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';
import { BlogService, Blog } from '../../../services/blog.service';
import { UserPayload } from '../../../models/user-payload.model';
import { Subscription } from 'rxjs';
import { AssociationService, Association } from '../../../services/association.service';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class UserProfileComponent {
  user: UserPayload | null = null;
  private userSub!: Subscription;
  newBlog: Blog = { titre: '', contenu: '', auteur: '' };
  newAssociation: Association = { nom: '', lieu: '', description: '', createurId: 0 , latitude: 0, longitude: 0};
  private modalService = inject(NgbModal);
  private authService = inject(AuthService);
  private blogService = inject(BlogService);
  private associationService = inject(AssociationService);

  constructor() {}

  ngOnInit() {
    this.userSub = this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  addBlog(modal: any) {
    if (!this.user) {
      alert("Erreur : Utilisateur non connecté.");
      return;
    }

    this.newBlog.auteur = `${this.user.prenom} ${this.user.nom}`;

    this.blogService.addBlog(this.newBlog).subscribe(
      () => {
        alert('Blog ajouté avec succès !');
        modal.close(); // Fermer la fenêtre modale après succès
        this.newBlog = { titre: '', contenu: '', auteur: '' };
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du blog :', error);
        alert('Erreur lors de l\'ajout du blog.');
      }
    );
  }
  createAssociation(modal: any) {
    if (!this.user) {
      alert("Erreur : Utilisateur non connecté.");
      return;
    }

    this.newAssociation.createurId = this.user.id;

    this.associationService.createAssociation(this.user.id, this.newAssociation).subscribe(
      () => {
        alert('Association créée avec succès !');
        modal.close(); // Fermer le modal après succès
        this.newAssociation = { nom: '', lieu: '', description: '', createurId: 0 , latitude: 0, longitude: 0};
      },
      (error) => {
        console.error('Erreur lors de la création de l\'association :', error);
        alert('Erreur lors de la création de l\'association.');
      }
    );
  }
}

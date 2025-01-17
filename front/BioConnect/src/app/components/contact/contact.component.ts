import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData = {
    fullName: '',
    email: '',
    message: '',
  };

  onSubmit() {
    if (this.contactData.fullName && this.contactData.email && this.contactData.message) {
      console.log('Message envoyé :', this.contactData);
      alert('Votre message a été envoyé avec succès !');
      this.contactData = { fullName: '', email: '', message: '' };
    } else {
      console.error('Formulaire invalide');
    }
  }
}

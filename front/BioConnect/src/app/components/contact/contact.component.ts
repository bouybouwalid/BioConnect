import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  apiUrl = 'http://localhost:8080/api/contacts';

  contactData = {
    nomComplet: '',
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.contactData.nomComplet && this.contactData.email && this.contactData.message) {
      this.http.post(this.apiUrl, this.contactData).subscribe(
        (response) => {
          console.log('Message envoyé :', response);
          alert('Votre message a été envoyé avec succès !');
          this.contactData = { nomComplet: '', email: '', message: '' };
        },
        (error) => {
          console.error('Erreur lors de l’envoi du message :', error);
          alert('Une erreur est survenue lors de l’envoi du message.');
        }
      );
    }
  }
}

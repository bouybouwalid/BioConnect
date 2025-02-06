import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-messages',
  standalone: true,
  templateUrl: './contact-messages.component.html',
  styleUrls: ['./contact-messages.component.css'],
  imports: [CommonModule]
})
export class ContactMessagesComponent implements OnInit {
  apiUrl = 'http://localhost:8080/api/contacts'; // API backend
  messages: any[] = []; // Liste des messages
  displayedMessages: any[] = []; // Messages affichés (pagination)
  pageSize = 5; // Nombre de messages par page
  currentPage = 1; // Page actuelle
  totalMessages = 0; // Nombre total de messages

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  // Charger les messages depuis l'API
  loadMessages(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.messages = data.reverse(); // Trier par date (les plus récents en premier)
        this.totalMessages = this.messages.length;
        this.updateDisplayedMessages();
      },
      (error) => {
        console.error('Erreur lors du chargement des messages :', error);
      }
    );
  }

  // Mettre à jour les messages affichés (pagination)
  updateDisplayedMessages(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedMessages = this.messages.slice(startIndex, endIndex);
  }

  // Gérer le changement de page
  changePage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedMessages();
  }
  getTotalPages(): number {
    return Math.ceil(this.totalMessages / this.pageSize);
  }
  isLastPage(): boolean {
    return this.currentPage === this.getTotalPages();
  }
}

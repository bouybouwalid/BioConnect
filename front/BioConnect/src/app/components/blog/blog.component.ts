import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [CommonModule]
})
export class BlogComponent implements OnInit {
  apiUrl = 'http://localhost:8080/api/blogs'; // URL du backend
  blogs: any[] = [];
  selectedBlog: any = null;
  showModal: boolean = false;
  defaultImage = 'assets/blogs/default-profile.png'; // Image statique de profil

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  // Charger les blogs depuis l'API
  loadBlogs() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.blogs = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des blogs :', error);
      }
    );
  }

  // Ouvrir la pop-up avec les détails du blog
  openBlog(blog: any) {
    this.selectedBlog = blog;
    this.showModal = true;
  }

  // Fermer la pop-up
  closeModal() {
    this.selectedBlog = null;
    this.showModal = false;
  }
}

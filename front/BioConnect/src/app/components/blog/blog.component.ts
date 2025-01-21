import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [CommonModule] // Ajoutez CommonModule ici
})
export class BlogComponent {
  blogs = [
    {
      id: 1,
      title: 'Les Bienfaits de l’Agriculture Biologique',
      author: 'Alice Dupont',
      excerpt: 'L’agriculture biologique favorise une alimentation saine et un environnement durable...',
      content:
        'L’agriculture biologique favorise une alimentation saine et un environnement durable. Découvrez comment les pratiques bio améliorent la biodiversité et réduisent l’empreinte carbone.',
      image: 'assets/blogs/agriculture-bio.jpg',
    },
    {
      id: 2,
      title: '5 Astuces pour Manger Local',
      author: 'Jean Martin',
      excerpt: 'Découvrez comment manger local peut améliorer votre santé et soutenir l’économie locale...',
      content:
        'Manger local présente de nombreux avantages pour la santé et l’économie locale. Voici cinq astuces pour intégrer plus de produits locaux dans votre alimentation quotidienne.',
      image: 'assets/blogs/manger-local.jpg',
    },
    {
      id: 3,
      title: 'Les Avantages des Produits de Saison',
      author: 'Marie Dubois',
      excerpt: 'Les produits de saison sont non seulement plus savoureux, mais aussi plus respectueux de l’environnement...',
      content:
        'Les produits de saison sont non seulement plus savoureux, mais aussi plus respectueux de l’environnement. Découvrez pourquoi il est important de consommer des produits de saison.',
      image: 'assets/blogs/produits-saison.jpg',
    },
    {
      id: 4,
      title: 'Comment Créer un Potager Bio',
      author: 'Pierre Lefevre',
      excerpt: 'Créer un potager bio chez soi est une excellente façon de manger sainement et de réduire son empreinte carbone...',
      content:
        'Créer un potager bio chez soi est une excellente façon de manger sainement et de réduire son empreinte carbone. Suivez nos conseils pour démarrer votre propre potager bio.',
      image: 'assets/blogs/potager-bio.jpg',
    },
    {
      id: 5,
      title: 'Les Bienfaits des Aliments Fermentés',
      author: 'Sophie Moreau',
      excerpt: 'Les aliments fermentés sont riches en probiotiques et bénéfiques pour la santé digestive...',
      content:
        'Les aliments fermentés sont riches en probiotiques et bénéfiques pour la santé digestive. Découvrez les bienfaits des aliments fermentés et comment les intégrer dans votre alimentation.',
      image: 'assets/blogs/aliments-fermentes.jpg',
    },
    {
      id: 6,
      title: 'L’Agriculture Urbaine : Une Solution d’Avenir',
      author: 'Lucie Bernard',
      excerpt: 'L’agriculture urbaine permet de produire des aliments frais en ville et de réduire les émissions de CO2...',
      content:
        'L’agriculture urbaine permet de produire des aliments frais en ville et de réduire les émissions de CO2. Découvrez les initiatives d’agriculture urbaine et leurs avantages.',
      image: 'assets/blogs/agriculture-urbaine.jpg',
    },
    {
      id: 7,
      title: 'Les Super-Aliments : Mythes et Réalités',
      author: 'Julien Robert',
      excerpt: 'Les super-aliments sont souvent présentés comme des aliments miracles. Mais qu’en est-il vraiment ?...',
      content:
        'Les super-aliments sont souvent présentés comme des aliments miracles. Mais qu’en est-il vraiment ? Découvrez les mythes et réalités des super-aliments.',
      image: 'assets/blogs/super-aliments.jpg',
    }
  ];

  selectedBlog: any;
  showModal: boolean = false;

  openBlog(blog: any) {
    this.selectedBlog = blog;
    this.showModal = true;
  }

  closeModal() {
    this.selectedBlog = null;
    this.showModal = false;
  }
}
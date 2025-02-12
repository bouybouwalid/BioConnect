import { Component, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { MapComponent }  from '../map/map.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, AboutComponent, MapComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.revealElements();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.revealElements();
  }

  private revealElements(): void {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
}

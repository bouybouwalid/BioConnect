import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { UserPayload } from '../models/user-payload.model';

interface RegisterRequest {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  motDePasse: string;
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  apiUrl = 'http://localhost:8080/api';
  
  private userSubject = new BehaviorSubject<UserPayload | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.loadUserFromToken();
  }

  // ✅ Connexion
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/connexion`, { email, motDePasse: password });
  }

  // ✅ Sauvegarde du token et extraction des infos utilisateur
  saveToken(token: string) {
    console.log('Sauvegarde du token dans le localStorage');
    localStorage.setItem('authToken', token);
    this.decodeUserFromToken(token);
  }


  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null;
  }

  // ✅ Vérifier si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // ✅ Déconnexion
  logout() {
    localStorage.removeItem('authToken');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  // ✅ Charger l'utilisateur à partir du token
  private loadUserFromToken() {
    const token = this.getToken();
    if (token) {
      this.decodeUserFromToken(token);
    }
  }

  // ✅ Décoder l'utilisateur à partir du token JWT
  private decodeUserFromToken(token: string) {
    try {
      const decoded: any = jwtDecode(token);
      console.log('Token décodé avec téléphone:', decoded);
  
      const userPayload: UserPayload = {
        id: decoded.id,
        nom: decoded.nom,
        prenom: decoded.prenom,
        email: decoded.email,
        telephone: decoded.telephone, // Récupération du téléphone
        roles: decoded.roles || []
      };
  
      this.userSubject.next(userPayload);
    } catch (error) {
      console.error('Erreur de décodage:', error);
      this.logout();
    }
  }
    // ✅ Inscription
    register(user: RegisterRequest): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/inscription`, user);
    }
    // Ajoutez cette méthode
getCurrentUser(): UserPayload | null {
  return this.userSubject.getValue();
}

}

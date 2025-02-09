export interface UserPayload {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string; // Ajouter cette ligne
  roles: string[];
}
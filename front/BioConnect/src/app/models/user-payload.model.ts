export interface UserPayload {
    sub: string; // L'identifiant utilisateur contenu dans le token
    nom: string;
    prenom: string;
    email: string;
    exp: number; // Expiration du token en timestamp
  }
  
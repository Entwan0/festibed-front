import { DepartementAPI } from './departement';
import { LogementAPI } from './logement';

export interface UtilisateurAPI {
  id: number;

  email: string;

  password: string;

  numTel: string;

  nom: string;

  prenom: string;

  adresse: string;

  role: number;
}

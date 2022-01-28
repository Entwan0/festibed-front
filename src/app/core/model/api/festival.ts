import { OrganisateurApi } from './organisateur';

export interface FestivalAPI {
  ndeg: number;

  nomManifestation: string;

  domaine: string;

  complementDomaine: string;

  site: string;

  coordonnees: string;

  moisHabituel: number;

  dateDebut: Date;

  dateFin: Date;

  duree: number;

  periodicite: string;

  commentaire: string;

  nombrePassProposes: number;

  nombrePassRestants: number;

  prixPass: number;

  adresse: string;

  organisateur: OrganisateurApi;

  quantitePanier: number; 

  idPanier: number;
}

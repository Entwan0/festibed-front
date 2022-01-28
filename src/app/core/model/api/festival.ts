import { OrganisateurApi } from './organisateur';

export interface FestivalAPI {
  ndefg: number;

  nomManifestation: string;

  domaine: string;

  complementDomaine: string;

  site: string;

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

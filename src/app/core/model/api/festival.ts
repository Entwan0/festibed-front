import { OrganisateurApi } from './organisateur';
import { CommuneAPI } from './commune';

export interface FestivalAPI {
  ndeg: string;

  nomManifestation: string;

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

  domaine: string;

  commune: CommuneAPI;

  quantitePanier: number;

  idPanier: number;
}

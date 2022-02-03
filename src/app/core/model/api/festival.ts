import { OrganisateurApi } from './organisateur';
import { CommuneAPI } from './commune';
import {ReservationAPI} from "./reservation";

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

  organisateur: OrganisateurApi;

  domaine: string;

  commune: CommuneAPI;

  reservations: ReservationAPI[];

  quantitePanier: number;

  idPanier: number;
}

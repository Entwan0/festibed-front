import { OrganisateurApi } from './organisateur';
import {UtilisateurAPI} from "./utilisateur";

export interface FestivalierAPI extends UtilisateurAPI{
  socialId: number;
}

import { UtilisateurAPI } from './utilisateur';
import { FestivalierAPI } from './festivalier';

export interface OrganisateurApi extends UtilisateurAPI{

  festivales: FestivalierAPI[];
}

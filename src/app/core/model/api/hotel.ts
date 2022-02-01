import { EtablissementAPI } from './etablissement';
import { ChambreAPI } from './chambre';

export interface HotelAPI extends EtablissementAPI {
  capaciteAccueil: number;

  chambres: ChambreAPI[];
}

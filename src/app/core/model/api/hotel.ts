import { EtablissementAPI } from './etablissement';

export interface HotelAPI extends EtablissementAPI {
  chambresSimples: number;

  chambresDoubles: number;

  chambresFamiliales: number;

  capaciteAccueil: number;
}

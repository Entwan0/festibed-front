import { EtablissementAPI } from './etablissement';

export interface EtablissementParUniteHabitationAPI extends EtablissementAPI {
  typologie: String;

  nombreUniteHabitation: number;

  capaciteAccueil: number;
}

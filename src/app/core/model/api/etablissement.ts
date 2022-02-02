import { CommuneAPI } from './commune';

export interface EtablissementAPI {
  nomCommercial: String;

  classement: number;

  site: string;

  coordonnees: string;

  adresse: string;

  commune: CommuneAPI;
}

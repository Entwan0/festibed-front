import { EtablissementAPI } from './etablissement';

export interface EtablissementParNbrEmplacementAPI extends EtablissementAPI {
  typologie: String;

  nombreEmplacement: number;
}

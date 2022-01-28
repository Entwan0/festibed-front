import { LogementAPI } from './logement';

export interface ChambreAPI extends LogementAPI {
  chambreSimple: number;

  chambreDouble: number;

  chambreTriple: number;

  chambresFamiliales: number;
}

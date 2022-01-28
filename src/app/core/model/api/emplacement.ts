import { DepartementAPI } from './departement';
import { LogementAPI } from './logement';

export interface EmplacementAPI extends LogementAPI {
  nombreEmplacement: number;
}

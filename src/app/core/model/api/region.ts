import { LogementAPI } from './logement';
import { DepartementAPI } from './departement';

export interface RegionAPI extends LogementAPI {
  idRegion: number;

  nomRegion: string;

  departements: DepartementAPI[];
}

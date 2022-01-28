import { LogementAPI } from './logement';
import { CommuneAPI } from './commune';
import { RegionAPI } from './region';

export interface DepartementAPI extends LogementAPI {
  idDepartement: number;

  nomDepartement: string;

  codeDepartement: string;

  region: RegionAPI;

  communes: CommuneAPI[];
}

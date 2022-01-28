import { DepartementAPI } from './departement';

export interface CommuneAPI {
  idCommune: number;

  nomCommune: string;

  codePostal: string;

  Departement: DepartementAPI;
}

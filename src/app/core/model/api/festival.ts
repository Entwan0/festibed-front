import { BaseModel } from './base';

export interface FestivalAPI extends BaseModel {
  nom: string;

  ville: string;

  img: string;

  prix: string;

  idPanier: number;

  quantitePanier: number;
}

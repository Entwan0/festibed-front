import { BaseModel } from '../base';

export interface ClientAPI extends BaseModel {
  creationDate: Date;

  details: string;

  name: string;

  tier: number;
}

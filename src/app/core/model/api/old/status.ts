import { BaseModel } from '../base';

export interface StatusAPI extends BaseModel {
  code: number;

  color: string;

  name: string;
}

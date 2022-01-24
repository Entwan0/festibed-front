import { BaseModel } from './base';

export interface PriorityAPI extends BaseModel {
  description: string;

  letter: number;

  name: string;
}

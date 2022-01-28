import { BaseModel } from '../base';

export interface SoftwareAPI extends BaseModel {
  externalId: number;

  name: string;
}

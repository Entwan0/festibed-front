import { BaseModel } from './base';
import { SoftwareAPI } from './software';

export interface ProjectAPI extends BaseModel {
  externalId: string;

  name: string;

  description: string;

  software: SoftwareAPI;

  creationDate: Date;
}

import { BaseModel } from '../base';

export interface VersionAPI extends BaseModel {
  externalId: string;

  name: string;

  installationDate: Date;
}

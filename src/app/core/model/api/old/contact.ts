import { BaseModel } from '../base';
import { ClientAPI } from './client';

export interface ContactAPI extends BaseModel {
  client: ClientAPI;

  email: string;

  externalId?: number;

  landline: string;

  mobile: string;

  name: string;

  note: string;

  surname: string;
}

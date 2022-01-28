import { BaseModel } from '../base';
import { CategoryAPI } from './category';

export interface TagAPI extends BaseModel {
  category: CategoryAPI;

  description: string;

  name: string;
}

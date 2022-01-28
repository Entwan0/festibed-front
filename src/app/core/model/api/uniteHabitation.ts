import { FestivalierAPI } from './festivalier';
import { LogementAPI } from './logement';

export interface UniteHabitationApi extends LogementAPI {
  nombreUniteHabitation: number;
}

import { Show } from '../models/show'
import { IGenericDAO } from './IGenericDAO'

export interface SHOWDAO extends IGenericDAO<Show> {
  findByName(Show: string): Promise<Show[]>
}

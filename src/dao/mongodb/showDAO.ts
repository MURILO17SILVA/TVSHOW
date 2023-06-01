import { inject, injectable } from 'inversify'
import { Db } from 'mongodb'

import { TYPES } from '../../injections/types'
import { Show } from '../../models/show'
import { ShowsDAO } from '../ShowDAO'
import { GenericDAO } from './GenericDAO'

@injectable()
export class ShowsDAO extends GenericDAO<Show> implements ShowsDAO {
  constructor(@inject(TYPES.DbConnector) db: Db) {
    super()
    this._collection = db.collection('users')
  }

  async findByName(ShowsDAO: string): Promise<Show[]> {
    const show = await this.find({
      show: {
        $regex: ShowsDAO,
        $options: 'i',
      },
    })

    return show
  }
}

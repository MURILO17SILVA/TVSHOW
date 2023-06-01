import { PrismaClient } from '@prisma/client'
import { inject, injectable } from 'inversify'

import { TYPES } from '../../injections/types'
import { Show} from '../../models/show'
import { showDAO } from '../ShowDAO'
import { GenericDAO } from './GenericDAO'

@injectable()
export class showDAO extends GenericDAO<Show> implements showDAO {
  constructor(@inject(TYPES.DbConnector) client: PrismaClient) {
    super()
    /**
     * Aqui ocorre a injeção de dependência
     */
    this._model = client.show
  }

  // select * from user where lower(name) like lower('%dwight%')
  async findByName(show: string): Promise<Show[]> {
    const shows = await this.find({
      show: {
        contains: show,
        mode: 'insensitive',
      },
    })

    return shows
  }
}

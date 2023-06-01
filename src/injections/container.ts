import { Container } from 'inversify'
import { Db, MongoClient } from 'mongodb'

import { ShowDAO } from '../dao/ShowDAO'
import { showDAO } from '../dao/mongodb/showDAO'
import { TYPES } from './types'

export const getContainer = async () => {
  const container = new Container()

  // const client = new PrismaClient()
  // container.bind<IUserDAO>(TYPES.IUserDAO).to(UserDAO)
  // container.bind<PrismaClient>(TYPES.DbConnector).toConstantValue(client)

  const connection = await MongoClient.connect('mongodb://localhost')
  const db = connection.db('authdb')
  container.bind<Db>(TYPES.DbConnector).toConstantValue(db)

  container.bind<showDAO>(TYPES.showDAO).to(showDAO)

  return container
}

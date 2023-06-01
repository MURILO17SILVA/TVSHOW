import 'reflect-metadata'

import { ShowDAO } from './dao/ShowDAO'
import { getContainer } from './injections/container'
import { TYPES } from './injections/types'
import { Show } from './models/show'
import { ShowsDAO } from './dao/mongodb/showDAO'

const run = async () => {
  const container = await getContainer()
  const dao = container.get<ShowDAO>(TYPES.ShowDAO)

  const Show = new Show(
    '1',
     'HOJE JFDJSK',
    '7 DE JANEIRO',
    '',
  )

  const id = await dao.create(Show1)
  console.log(`ID: ${id}`)

  let show = await dao.findOne(id)
  console.log(show)

  const updated = await dao.update(id, {
    premiere:  '7 de janeiro',
  })
  console.log(`Atualizado: ${updated}`)

  show = await dao.findOne(id)
  console.log(show)

  const SHOW = await dao.findByName('SHOW')
  console.log(show)

  const deleted = await dao.delete(id)
  console.log(`Removido: ${deleted}`)

  console.log('Mal feito desfeito')
}

run()

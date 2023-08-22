import { randomUUID } from 'crypto'
import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL customers
  await knex('customers').del()

  // Inserts some customers
  await knex('customers').insert([
    {
      id: randomUUID(),
      name: 'Sandra R. Veasey',
      phone: '336-912-5881',
      fine: 2,
      discount: 10,
    },{
      id: randomUUID(),
      name: 'Roberto E. Pagan',
      phone: '918-810-3934',
      fine: 2,
      discount: 1,
    },{
      id: randomUUID(),
      name: 'Richard K. Brown',
      phone: '253-470-9328',
      fine: 2,
      discount: 0,
    },{
      id: randomUUID(),
      name: 'Tosha J. Lebowitz',
      phone: '970-963-7116',
      fine: 2,
      discount: 35,
    }
  ])
}

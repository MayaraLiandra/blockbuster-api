import { randomUUID } from 'crypto'
import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes all employees
  await knex('employees').del()

  // Insert some employees
  await knex('employees').insert([
    { id: randomUUID(), name: 'Crystal R. Williams', qty_rents: 13 },
    { id: randomUUID(), name: 'Crystal R. Williams', qty_rents: 2 },
    { id: randomUUID(), name: 'Francisco S. Jackson', qty_rents: 3 },
  ])
}

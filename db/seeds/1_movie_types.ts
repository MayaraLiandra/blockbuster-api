import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  // Deletes all types
  await knex('movie_types').del()

  // Insert some types
  await knex('movie_types').insert([
    { id: '1', name: 'VHS', cost_by_day: 1 },
    { id: '2', name: 'DVD', cost_by_day: 2.5},
    { id: '3', name: 'Blu-ray', cost_by_day: 3.8 },
  ])
}

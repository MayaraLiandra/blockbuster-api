import { randomUUID } from 'crypto'
import { Knex } from 'knex'
import { MovieStatus, MovieTypes } from '../../src/enums'

export async function seed(knex: Knex): Promise<void> {
  // Delete all movies
  await knex('movies').del()

  // Inserts some movies 
  await knex('movies').insert([
    {
      id: randomUUID(),
      name: 'Avengers: Endgame',
      days: 11,
      value: 10.0,
      movie_status_id: MovieStatus.AVAILABLE,
      movie_type_id: MovieTypes.VHS,
    },
    {
      id: randomUUID(),
      name: 'The Godfather',
      days: 4,
      value: 10.0,
      movie_status_id: MovieStatus.LOST,
      movie_type_id: MovieTypes.VHS,
    },
    {
      id: randomUUID(),
      name: 'Pulp Fiction',
      days: 6,
      value: 12.0,
      movie_status_id: MovieStatus.AVAILABLE,
      movie_type_id: MovieTypes.DVD,
    },
    {
      id: randomUUID(),
      name: 'Spider-Man: Across the Spider-Verse',
      days: 2,
      value: 4.0,
      movie_status_id: MovieStatus.RENTED,
      movie_type_id: MovieTypes.BLUE_RAY,
    },
    {
      id: randomUUID(),
      name: 'Avengers: Infinity War',
      days: 3,
      value: 23.0,
      movie_status_id: MovieStatus.RENTED,
      movie_type_id: MovieTypes.BLUE_RAY,
    },
    {
      id: randomUUID(),
      name: 'Toy Story 3',
      days: 8,
      value: 3.0,
      movie_status_id: MovieStatus.AVAILABLE,
      movie_type_id: MovieTypes.DVD,
    },
    {
      id: randomUUID(),
      name: 'WALL·E',
      days: 15,
      value: 7.0,
      movie_status_id: MovieStatus.RENTED,
      movie_type_id: MovieTypes.DVD,
    },
  ])
}

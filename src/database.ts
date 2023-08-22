import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: './db/application.db',
  },
  // debug: true,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: 'db/migrations',
  },
  seeds: {
    extension: 'ts',
    directory: 'db/seeds',
  }
}

export const knex = setupKnex(config).on('query', ({ bindings, sql }) => {
  console.info(`SQL: `, [sql])
  console.info(`Bindings: `, bindings)
  console.log('/---------------------------------------/')
})

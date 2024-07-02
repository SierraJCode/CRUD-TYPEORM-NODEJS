import {DataSource} from 'typeorm'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "2412",
    database: 'typeormdb',
    entities: [],
    logging: true
})
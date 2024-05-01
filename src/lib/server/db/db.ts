import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.DATABASE_DB,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: 5432, 
});

export default sequelize;
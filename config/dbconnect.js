import { Sequelize } from "sequelize";
import 'dotenv/config';

// add sequqlize connection
const sequelizeConnection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    })
    console.log("DATABASE:: connected? ", true);

export default sequelizeConnection;

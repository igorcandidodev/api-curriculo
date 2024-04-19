import 'dotenv/config';
import { Sequelize } from 'sequelize';
import getInformacoesPessoaisRepository from './informacoesPessoaisRepository';

const name = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(name, user, password, {
    dialect: "postgres",
    host: host,
});

const models = {
    InformacoesPessoais: getInformacoesPessoaisRepository(sequelize, Sequelize),
};

export default models;
export { sequelize }

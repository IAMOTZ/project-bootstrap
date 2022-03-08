import Sequelize from 'sequelize';
import dbConfig from '../config/db';

const config = dbConfig[process.env.NODE_ENV || 'development'];

const shouldLog = process.env.SEQUELIZE_QUERY_LOGGING
  && JSON.parse(process.env.SEQUELIZE_QUERY_LOGGING);

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    ...config,
    logging: shouldLog ? console.log : false,
    freezeTableName: true,
  });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: shouldLog ? console.log : false,
    freezeTableName: true,
  });
}

export default sequelize;

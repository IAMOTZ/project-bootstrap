import mongoose from 'mongoose';
import dbConfig from '../config/db';

const shouldLog = process.env.DB_QUERY_LOGGING
  && JSON.parse(process.env.DB_QUERY_LOGGING);

mongoose.set('debug', !!shouldLog);

const environment = process.env.NODE_ENV;

const config = dbConfig[environment || 'development'];

const dbUrl = process.env[config.use_env_variable];

export default () => {
  console.info(`Start setting up database for ${environment} environment`);
  mongoose.connect(dbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true,
  });
  mongoose.Promise = global.Promise;
  console.info('Finished setting up database');
};

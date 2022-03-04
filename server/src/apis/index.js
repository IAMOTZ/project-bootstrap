import cats from './cats';

export default (app) => {
  app.use('/api/v1/cats', cats);
};

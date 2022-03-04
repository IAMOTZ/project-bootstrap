import app from './src/app';
import config from './src/config';

export default app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}`);
});

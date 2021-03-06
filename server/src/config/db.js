require('dotenv').config();

module.exports = {
  "development": {
    use_env_variable: 'DEV_DB_URL'
  },
  "test": {
    use_env_variable: 'TEST_DB_URL'
  },
  "production": {
    "username": "",
    "password": null,
    "database": "",
    "host": "",
    "dialect": "postgres"
  }
}

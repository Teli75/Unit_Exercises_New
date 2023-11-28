const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  // logging: false
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

//loads the movie model
db.models.Movie = require('./models/movie.js')(sequelize);
//exports the db object, which holds the Sequelize and database configurations
module.exports = db;
//Exposing the Sequelize package wherever you import models into your code means that you'll have all of Sequelize's methods and functionality to use.
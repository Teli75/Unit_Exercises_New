//imports db and destructures the Movie model imported from db.models
const db = require("./db");
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;


(async () => {
  await db.sequelize.sync({ force: true });

    //Model instances
  try {
    const movie = await Movie.create({
      title: "Toy Story",
      runtime: 81,
      releaseDate: "1995-11-22",
      isAvailableOnVHS: true,
    });

    const movie2 = await Movie.create({
      title: "The Incredibles",
      runtime: 115,
      releaseDate: "2004-04-14",
      isAvailableOnVHS: true,
    });

    const movie3 = await Movie.create({
        title: "I gave it a title",
        runtime: 115,
        releaseDate: "1895-12-28",
        isAvailableOnVHS: true,
      });

      // New Person record
    const person = await Person.create({
        firstName: 'Tom',
        lastName: 'Hanks',
      });

      // New instance
    const movie4 = await Movie.build({
        title: 'Toy Story 3',
        runtime: 103,
        releaseDate: '2010-06-18',
        isAvailableOnVHS: false,
      });
      await movie4.save(); // save the record
    //console.log(movie4.toJSON());

    //Finder methods like findByPk() return a model instance. In this case, movieById is an instance of Movie, which contains the data of the table entry with ID 2
    //const movieById = await Movie.findByPk(2);
    //console.log(movieById.toJSON());

    //const movieByRuntime = await Movie.findOne({ where: { runtime: 115 } });
    //console.log(movieByRuntime.toJSON());

    //const personByLastname = await Person.findOne({ where: { lastName: 'Hanks' } });
    //console.log(personByLastname.toJSON());

    // const movies = await Movie.findAll({
    //     where: {
    //       runtime: 92,
    //       isAvailableOnVHS: true
    //     }
    //   });
    //   // SELECT * FROM Movies WHERE runtime = 92 AND isAvailableOnVHS = true;
    //   console.log( movies.map(movie => movie.toJSON()) );

    // const movies = await Movie.findAll({
    //     attributes: ['id', 'title'], // return only id and title
    //     where: {
    //       isAvailableOnVHS: true,
    //     },
    //   });
    //   console.log( movies.map(movie => movie.toJSON()) );

    const movies = await Movie.findAll({
        attributes: ['id', 'title'],
        where: {
          releaseDate: {
            [Op.gte]: '2004-01-01' // greater than or equal to the date
          }
        },
      });
      console.log( movies.map(movie => movie.toJSON()) );
  

  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((err) => err.message);
      console.error("Validation errors: ", errors);
    } else {
      throw error;
    }
    //console.error("Error connecting to the database: ", error);
  }
})();

// //Require the sequelize module
// const Sequelize = require("sequelize");

// //Connect to a SQLite database by instantiating sequelize
// //Intialize db connection by passing the sequelize() constructor an object with connection params
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "movies.db",
// });

// // Movie model
// //Extends creates a subclass of the baseclass
// class Movie extends Sequelize.Model {}
// //Call the static class init() method on the model name (Movie) to  initialize and configure the model:
// Movie.init(
//   {
//     title: Sequelize.STRING,
//   },
//   { sequelize }
// ); // same as { sequelize: sequelize }

// (async () => {
//   // Sync all tables
//   //Drops tables that exist each time app is ran
//   await sequelize.sync({ force: true });

//   try {
//     // Instance of the Movie class represents a database row
//     //returns a Promise object, which resolves or rejects based on the successful or failed interaction with your db
//     //const movieInstances = await Promise.all([]);
//     const movie = await Movie.create({
//         title: 'Toy Story',
//     });
//     const movie2 = await Movie.create({
//         title: 'Old Yeller'
//       });
//       await Movie.create({
//         title: 'The Incredibles'
//       });
//     //await sequelize.authenticate();
//     console.log("Connection to the database successful!");
//     console.log(movie.toJSON());
//     console.log(movie2.toJSON());
//     //const moviesJSON = movieInstances.map(movie => movie.toJSON());
//     console.log(moviesJSON);
//   } catch (error) {
//     console.error("Error connecting to the database: ", error);
//   }
// })();

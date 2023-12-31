'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      //validate object
      validate: {
        //NotNull validator is only allowed with allowNull
        notNull: {
          msg: 'A name is required'
        },
        //checks for empty strings for example
        notEmpty: {
          msg: 'Please provide a name'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'The email you entered already exists'
      },
      validate: {
        notNull: {
          msg: 'An email is required'
        },
        isEmail: {
          msg: 'Please provide a valid email address'
        }
      }
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A birthday is required'
        },
        notEmpty: {
          msg: 'Please provide a birthday'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'A password is required'
        },
        notEmpty: {
          msg: 'Please provide a password'
        }
      }
    }
  }, { sequelize });

  return User;
};

// {
//   "name": "Teli",
//   "email": "7telita@gmail.com",
//   "birthday": "01-13-1970",
//   "password": "mypw"
// }

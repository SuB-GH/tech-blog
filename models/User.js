const bcrypt = require('bcrypt');
//"Model" is a class, and "DataTypes" is an object, both imported from Sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// this create our own User model, (based off of "Model" class above, and inherits its functionality
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// this "init" method will initialize the model's data and configuration, passing two objects as arguments.
//Obj 1 defince columns and data types, Obj 2 configures certain options for the table
User.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate email values in this table
      unique: true,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true
      }
    },
    // define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least four characters long
        len: [4]
      }
    }
  },
  {
    //"async/await. The "async" is used as a prefix to the function that contains the asynchronous function. await can be used to prefix the async function, which will then gracefully assign the value from the response to the newUserData's password property. The newUserData is then returned to the application with the hashed password.
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality. when user creates new password
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // set up beforeUpdate lifecycle "hook" functionality. when user updates current password
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  },

  {
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
  }
);

module.exports = User;
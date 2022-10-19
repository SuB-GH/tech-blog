const { Model, DataTypes } = require('sequelize');
// this is the connection to MySQL we stored in the connection.js file
const sequelize = require('../config/connection');

class Post extends Model { }

// create fields/columns for Post model. Columns are:  post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    post_contents: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    // "userId column determines who posted the article. 
    //references property establishes link btwn this post and user model (specifically the "id" column defined by key property which is the primary key.
    // The user_id is conversely defined as the foreign key and will be the matching link.
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  // below, we configure the metadata, including the naming conventions
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

//export expression to make the Post model accessible to other parts of the application
module.exports = Post;
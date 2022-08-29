const { Model, DataTypes } = require('sequelize');
// this is the connection to MySQL we stored in the connection.js file
const sequelize = require('../config/connection');

// create our Post model - REMOVE VOTE FROM THIS
class Post extends Model {}
//{
//   static upvote(body, models) {
//     return models.Vote.create({
//       user_id: body.user_id,
//       post_id: body.post_id
//     }).then(() => {
//       return Post.findOne({
//         where: {
//           id: body.post_id
//         },
//         attributes: [
//           'id',
//           'post_url',
//           'title',
//           'created_at',
//           [
//             sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
//             'vote_count'
//           ]
//         ]
//       });
//     });
//   }

// }

// create fields/columns for Post model. Columns are: id, title, post_url and user_id
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
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true // Sequelize offers this as validation that this url is a verified link
      }
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
const { Post } = require('../models');

const postdata = [
{
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_contents: 'testing out these article contents',
    user_id: 2
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_contents: 'testing out these article contents',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_contents: 'testing out these article contents',
    user_id: 1
  },
  {
    title: 'Pellentesque eget nunc.',
    post_contents: 'testing out these article contents',
    user_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
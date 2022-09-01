INSERT INTO Comment (comment_text, user_id, post_id, created_at)
  VALUES
  ('Morbi non quam nec dui luctus rutrum.', 1, 1, ""),
  ('Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.', 1, 1, "")
  
--   const { Comment } = require('./models');

-- const commentData = [
-- {
--     comment_text: 'Morbi non quam nec dui luctus rutrum.'

--   },
--   {
--     comment_text: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.'
   
--   }
-- --   {
-- --     title: 'Nunc purus.',
-- --     post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
-- --     user_id: 1
-- --   },
-- --   {
-- --     title: 'Pellentesque eget nunc.',
-- --     post_url: 'http://google.ca/nam/nulla/integer.aspx',
-- --     user_id: 2
-- --   },
-- ];

-- const seedComment = () => Post.bulkCreate(commentData);

-- module.exports = seedComment;
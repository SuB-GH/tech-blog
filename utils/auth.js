// this checks that a user is logged in ("e.g. a session exisits"). if not, it redirects to the login page

const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
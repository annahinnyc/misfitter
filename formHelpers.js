module.exports.parseUserData = (req) => {
  return {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
};
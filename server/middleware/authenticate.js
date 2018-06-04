const {User} = require('./../models/user');

let authenticate = (req, res, next) => {    //middleware
  let token = req.header('x-auth');         //  gets value of header

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = {authenticate};

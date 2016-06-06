var _ = require('underscore');
var faker = require('faker');
var helpers = require('../helpers');
var restify = require('restify');

module.exports = function(req, res, next) {
  if(!req.params.userId) {
    return next(new restify.BadRequestError("Invalid User ID."));
  }

  res.send(helpers.wrapResponse({
    "username": faker.internet.userName(),
    "bio": faker.lorem.sentences(),
    "website": faker.internet.url(),
    "profile_picture": faker.image.avatar(),
    "full_name": faker.name.findName(),
    "counts": {
      "media": faker.random.number({"min": 0, "max": 1000}),
      "followed_by": faker.random.number({"min": 0, "max": 10000000}),
      "follows": faker.random.number({"min": 0, "max": 100000})
    },
    "id": req.params.userId
  }));
  return res.next();
}
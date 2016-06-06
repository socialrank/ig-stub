var _ = require('underscore');
var faker = require('faker');
var helpers = require('../helpers');
var restify = require('restify');

module.exports = function(req, res, next) {
  if(!req.params.mediaId) {
      return next(new restify.BadRequestError("Invalid Media ID."));
    }

  var resp = _.range(req.query.count || 10).map((i) => ({
    "username": faker.internet.userName(),
    "profile_picture": faker.image.avatar(),
    "id": ("u-" + faker.random.uuid().replace(/-/g, "")),
    "full_name": faker.name.findName()
  }));

  res.send(helpers.wrapResponse(resp));
  return res.next();
}
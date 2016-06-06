var restify = require('restify');

module.exports = function(req, res, next) {
  return next(new restify.BadRequestError("Endpoint deprecated."));
}
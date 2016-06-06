var helpers = require('./helpers');
var restify = require('restify');
var _ = require('underscore');
var faker = require('faker');

var server = restify.createServer({
  "name": "Instagram API Stub",
  "version": "0.0.1"
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(restify.conditionalRequest());

server.get("/users/search", require('./endpoints/users_search'));
server.get("/users/self/followed-by", require('./endpoints/users_self_followed-by'));
server.get("/users/:userId/followed-by", require('./endpoints/users_userId_followed-by'));
server.get("/users/:userId", require('./endpoints/users_userId'));
server.get("/users/:userId/media/recent", require('./endpoints/users_userId_media_recent'));
server.get("/media/:mediaId/likes", require('./endpoints/media_mediaId_likes'));
server.get("/media/:mediaId/comments", require('./endpoints/media_mediaId_comments'));

server.listen(9090, function () {
  console.log('%s listening at %s', server.name, server.url);
});

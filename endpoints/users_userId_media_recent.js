var _ = require('underscore');
var faker = require('faker');
var helpers = require('../helpers');
var restify = require('restify');

module.exports = function(req, res, next) {
  if(!req.params.userId) {
    return next(new restify.BadRequestError("Invalid User ID."));
  }

  var resp = _.range(req.query.count || 30).map((i) => ({
    "attribution": null,
    "tags": [faker.random.words(faker.random.number({"min": 0, "max": 10})).split(" ")],
    "type": "image",
    "location": {
      "latitude": faker.address.latitude(),
      "longitude": faker.address.longitude(),
      "name": faker.address.state(),
      "id": ("l-" + faker.random.uuid().replace(/-/g, ""))
    },
    "comments": {
      "count": faker.random.number({"min": 0, "max": 100})
    },
    "filter": "Normal",
    "created_time": ("" + Math.ceil(faker.date.recent(90).getTime() / 1000)),
    "link": faker.internet.url(),
    "likes": {
      "count": faker.random.number({"min": 0, "max": 100})
    },
    "images": {
      "low_resolution": {
        "url": faker.image.avatar(),
        "width": 320,
        "height": 320
      },
      "thumbnail": {
        "url": faker.image.avatar(),
        "width": 150,
        "height": 150
      },
      "standard_resolution": {
        "url": faker.image.avatar(),
        "width": 640,
        "height": 640
      }
    },
    "users_in_photo": [],
    "caption": {
      "created_time": ("" + Math.ceil(faker.date.recent(90).getTime() / 1000)),
      "text": helpers.randomCaption(),
      "from": {
        "username": faker.internet.userName(),
        "profile_picture": faker.image.avatar(),
        "id": ("f-" + faker.random.uuid().replace(/-/g, "")),
        "full_name": faker.name.findName()
      },
      "id": ("c-" + faker.random.uuid().replace(/-/g, ""))
    },
    "user_has_liked": false,
    "id": ("m-" + faker.random.uuid().replace(/-/g, "")),
    "user": {
      "username": faker.internet.userName(),
      "profile_picture": faker.image.avatar(),
      "id": ("u-" + faker.random.uuid().replace(/-/g, "")),
      "full_name": faker.name.findName()
    }
  }));

  res.send(helpers.wrapResponse(resp));
  return res.next();
}
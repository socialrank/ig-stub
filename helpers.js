var faker = require('faker');

module.exports = function() {
  return {
    "wrapResponse": function(data) {
      return {
        "pagination": {},
        "meta": {
          "code": 200
        },
        "data": data
      }
    },

    "randomCaption": function() {
      return faker.random.words(faker.random.number({"min": 0, "max": 10})) +
             " " +
             faker.random.words(faker.random.number({"min": 0, "max": 5})).split(" ").map((w) => ("#" + w)).join(" ");
    }
  }
}()
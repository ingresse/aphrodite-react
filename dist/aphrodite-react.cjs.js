'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./aphrodite-react.cjs.prod.js");
} else {
  module.exports = require("./aphrodite-react.cjs.dev.js");
}

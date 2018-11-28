"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = void 0;

/* Sort Filters */
var sort = {
  byProperty: function byProperty(array, property) {
    array.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1;
      }

      if (a[property] > b[property]) {
        return 1;
      }

      return 0;
    });
    return array;
  }
};
exports.sort = sort;
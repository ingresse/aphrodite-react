"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = void 0;

/* Sort Filters */
var sort = {
  byProperty: function byProperty(array, property, reverse) {
    array.sort(function (a, b) {
      if (a[property] < b[property]) {
        return reverse ? 1 : -1;
      }

      if (a[property] > b[property]) {
        return reverse ? -1 : 1;
      }

      return 0;
    });
    return array;
  }
};
exports.sort = sort;
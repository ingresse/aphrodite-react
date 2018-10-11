"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANIMATIONS = void 0;

var _reactEmotion = require("react-emotion");

/* Packages */

/* Animation Fade In Up */
var fadeInUp =
/*#__PURE__*/
(0, _reactEmotion.keyframes)("0%{opacity:0;transform:translate3d(0,75%,0);}100%{opacity:1;transform:none;}");
/* Animation Pull Up */

var pullUp =
/*#__PURE__*/
(0, _reactEmotion.keyframes)("0%{transform:scaleY(0.1);}25%{transform:scaleY(1);}50%{transform:scaleY(0.95);}100%{transform:scaleY(1);}");
var ANIMATIONS = {
  FADE_IN_UP: {
    animation: "".concat(fadeInUp, " 0.75s ease")
  },
  PULL_UP: {
    willChange: 'transform-origin',
    animation: "".concat(pullUp, " 0.75s ease"),
    transformOrigin: '50% 100%'
  }
};
exports.ANIMATIONS = ANIMATIONS;
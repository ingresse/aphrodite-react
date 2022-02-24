import { keyframes, css, Global } from '@emotion/core';
import React, { forwardRef, useState, useEffect, Fragment as Fragment$1, useRef, memo, useCallback, useLayoutEffect } from 'react';
import _styled from '@emotion/styled-base';
import chroma from 'chroma-js';
import * as CNPJ from '@fnando/cnpj';
import { isValid, format as format$1 } from '@fnando/cnpj';
import * as CPF from '@fnando/cpf';
import { isValid as isValid$1, format as format$2 } from '@fnando/cpf';
import ReactClipboard from 'react-clipboard.js';
import ReactTooltip from 'react-tooltip';
import { ToastContainer, toast } from 'react-toastify';
import Paginator from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/pt_BR';
import dayjs from 'dayjs';
import dayjsCustomParsePlugin from 'dayjs/plugin/customParseFormat';
import LibInputMask from 'react-input-mask';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject, _templateObject2;
var fadeInUp = keyframes(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    0% {\n        opacity  : 0;\n        transform: translate3d(0, 75%, 0);\n    }\n    100% {\n        opacity  : 1;\n        transform: none;\n    }\n"])));
var pullUp = keyframes(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n    0% {\n        transform: scaleY(0.1);\n    }\n\n    25% {\n        transform: scaleY(1);\n    }\n\n    50% {\n        transform: scaleY(0.95);\n    }\n\n    100% {\n        transform: scaleY(1);\n    }\n"])));
var ANIMATIONS = {
  FADE_IN_UP: {
    animation: fadeInUp + " 0.75s ease"
  },
  PULL_UP: {
    willChange: 'transform-origin',
    animation: pullUp + " 0.75s ease",
    transformOrigin: '50% 100%'
  }
};

var _COLORS = {
  DARK_BLACK: 'rgb(0, 0, 0)',
  BLACK: 'rgb(45, 45, 45)',
  WHITE: 'rgb(255, 255, 255)',
  SMOKE: 'rgb(248, 248, 248)',
  DARK_SMOKE: 'rgb(242, 242, 242)',
  GREY_SMOKE: 'rgb(238, 238, 238)',
  LIGHT_GREY: 'rgb(212, 215, 217)',
  GREY: 'rgb(157, 166, 173)',
  DARK_GREY: 'rgb(122, 128, 133)',
  YELLOW: 'rgb(255, 198, 30)',
  ORANGE: 'rgb(252, 163, 17)',
  ORANGE_RED: 'rgb(255, 141, 80)',
  RED: 'rgb(241, 51, 53)',
  DARK_RED: 'rgb(196, 31, 31)',
  GREEN: 'rgb(96,198,89)',
  DARK_GREEN: 'rgb(25, 174, 53)',
  LIGHT_BLUE: 'rgb(0, 209, 239)',
  BLUE: 'rgb(0, 165, 219)',
  PURPLE: 'rgb(172, 108, 184)',
  LIGHT_PINK: 'rgb(248, 130, 184)'
};

var _SEGMENTED = Object.assign({}, _COLORS, {
  PRIMARY: _COLORS.BLUE,
  SECONDARY: _COLORS.ORANGE,
  ERROR: _COLORS.RED,
  WARNING: _COLORS.YELLOW,
  SUCCESS: _COLORS.GREEN,
  INFO: _COLORS.BLUE,
  INVERSE: _COLORS.WHITE
});

var _TONED = Object.assign({}, _SEGMENTED, {
  TONES: {
    'DARK_BLACK': _SEGMENTED.BLACK,
    'BLACK': _SEGMENTED.DARK_BLACK,
    'WHITE': _SEGMENTED.SMOKE,
    'SMOKE': _SEGMENTED.LIGHT_GREY,
    'DARK_SMOKE': _SEGMENTED.GREY_SMOKE,
    'GREY_SMOKE': _SEGMENTED.LIGHT_GREY,
    'LIGHT_GREY': _SEGMENTED.GREY,
    'GREY': _SEGMENTED.DARK_GREY,
    'DARK_GREY': _SEGMENTED.GREY,
    'YELLOW': _SEGMENTED.YELLOW,
    'ORANGE': _SEGMENTED.ORANGE,
    'ORANGE_RED': _SEGMENTED.ORANGE_RED,
    'RED': _SEGMENTED.DARK_RED,
    'DARK_RED': _SEGMENTED.RED,
    'GREEN': _SEGMENTED.DARK_GREEN,
    'DARK_GREEN': _SEGMENTED.GREEN,
    'BLUE': _SEGMENTED.BLUE,
    'PURPLE': _SEGMENTED.PURPLE,
    'LIGHT_PINK': _SEGMENTED.LIGHT_PINK,
    'PRIMARY': _SEGMENTED.PRIMARY,
    'SECONDARY': _SEGMENTED.SECONDARY,
    'ERROR': _SEGMENTED.ERROR,
    'WARNING': _SEGMENTED.WARNING,
    'SUCCESS': _SEGMENTED.SUCCESS,
    'INFO': _SEGMENTED.INFO,
    'INVERSE': _SEGMENTED.WHITE
  }
});

var COLORS = Object.assign({}, _TONED, {
  GET: function GET(color, opacity) {
    if (color === void 0) {
      color = 'BLACK';
    }

    if (opacity === void 0) {
      opacity = 1;
    }

    if (!color || typeof color !== 'string') {
      return _TONED.BLACK;
    }

    var selected = _TONED[color.toUpperCase()];

    if (!selected && !color.includes('rgb(')) {
      return _TONED.BLACK;
    }

    if (!selected && color.includes('rgb(')) {
      selected = color;
    }

    if (!isNaN(opacity) && opacity >= 0 && opacity <= 1) {
      selected = selected.replace('rgb', 'rgba');
      selected = selected.replace(')', ", " + opacity + ")");
    }

    return selected;
  },
  FILL: function FILL(color) {
    if (color === void 0) {
      color = 'SMOKE';
    }

    if (typeof color !== 'string') {
      return {
        color: _TONED.BLACK,
        background: _TONED.SMOKE
      };
    }

    var _color = color.toUpperCase();

    var selected = _TONED[_color];
    var inverse = ['WHITE', 'SMOKE', 'DARK_SMOKE', 'GREY_SMOKE', 'LIGHT_GREY', 'YELLOW', 'WARNING', 'INVERSE'];

    if (!selected) {
      return {
        color: _TONED.BLACK,
        background: _TONED.SMOKE
      };
    }

    return {
      color: inverse.includes(_color) ? _TONED.BLACK : _TONED.WHITE,
      background: selected
    };
  }
});

var COLUMNS = 12;
var GRID = {
  UNIT: 'px',
  QUERIES: ['xs', 'sm', 'md', 'lg', 'xl'],
  CONTAINER_PADDING_XS: 15,
  CONTAINER_PADDING: 20,
  CONTAINER: Object.assign(980, {
    XS: 480,
    SM: 660,
    MD: 820,
    LG: 980,
    XL: 1440
  }),
  COLUMNS: COLUMNS,
  COLUMNS_PADDING: 10,
  COLUMNS_GET_WIDTH: function COLUMNS_GET_WIDTH(columnNumber) {
    function getPercentual(number) {
      return number * 10 / 12 * 10 + '%';
    }

    columnNumber = parseInt(columnNumber, 10);

    if (!columnNumber || typeof columnNumber !== 'number' || columnNumber < 1 || columnNumber > COLUMNS) {
      return null;
    }

    return getPercentual(columnNumber);
  }
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var t="function"===typeof Symbol&&Symbol.for,aa=t?Symbol.for("react.portal"):60106,u=t?Symbol.for("react.fragment"):60107,ba=t?Symbol.for("react.strict_mode"):60108,ca=t?Symbol.for("react.profiler"):60114,v=t?Symbol.for("react.provider"):60109,da=t?Symbol.for("react.context"):60110,ea=t?Symbol.for("react.concurrent_mode"):60111,fa=t?Symbol.for("react.forward_ref"):60112,B=t?Symbol.for("react.suspense"):60113,ha=t?Symbol.for("react.suspense_list"):60120,ia=t?Symbol.for("react.memo"):60115,ja=t?Symbol.for("react.lazy"):
60116,ka=t?Symbol.for("react.block"):60121,la=t?Symbol.for("react.fundamental"):60117,ma=t?Symbol.for("react.scope"):60119;function na(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(c){0===a._status&&(c=c.default,a._status=1,a._result=c);},function(c){0===a._status&&(a._status=2,a._result=c);});}}
function C(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case u:return "Fragment";case aa:return "Portal";case ca:return "Profiler";case ba:return "StrictMode";case B:return "Suspense";case ha:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case da:return "Context.Consumer";case v:return "Context.Provider";case fa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");
case ia:return C(a.type);case ka:return C(a.render);case ja:if(a=1===a._status?a._result:null)return C(a)}return null}var D=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;D.hasOwnProperty("ReactCurrentDispatcher")||(D.ReactCurrentDispatcher={current:null});D.hasOwnProperty("ReactCurrentBatchConfig")||(D.ReactCurrentBatchConfig={suspense:null});var oa={};function E(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1;}
function pa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return E(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c;}else b=oa;return b}for(var F=new Uint16Array(16),H=0;15>H;H++)F[H]=H+1;F[15]=0;
var qa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ra=Object.prototype.hasOwnProperty,sa={},ta={};
function ua(a){if(ra.call(ta,a))return !0;if(ra.call(sa,a))return !1;if(qa.test(a))return ta[a]=!0;sa[a]=!0;return !1}function va(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function wa(a,b,c,d){if(null===b||"undefined"===typeof b||va(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function J(a,b,c,d,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=g;}var K={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){K[a]=new J(a,0,!1,a,null,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];K[b]=new J(b,1,!1,a[1],null,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){K[a]=new J(a,2,!1,a.toLowerCase(),null,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){K[a]=new J(a,2,!1,a,null,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){K[a]=new J(a,3,!1,a.toLowerCase(),null,!1);});
["checked","multiple","muted","selected"].forEach(function(a){K[a]=new J(a,3,!0,a,null,!1);});["capture","download"].forEach(function(a){K[a]=new J(a,4,!1,a,null,!1);});["cols","rows","size","span"].forEach(function(a){K[a]=new J(a,6,!1,a,null,!1);});["rowSpan","start"].forEach(function(a){K[a]=new J(a,5,!1,a.toLowerCase(),null,!1);});var L=/[\-:]([a-z])/g;function M(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(L,
M);K[b]=new J(b,1,!1,a,null,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/1999/xlink",!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(L,M);K[b]=new J(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1);});["tabIndex","crossOrigin"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!1);});
K.xlinkHref=new J("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){K[a]=new J(a,1,!1,a.toLowerCase(),null,!0);});var xa=/["'&<>]/;
function N(a){if("boolean"===typeof a||"number"===typeof a)return ""+a;a=""+a;var b=xa.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b;}a=f!==d?c+a.substring(f,d):c;}return a}
function ya(a,b){var c=K.hasOwnProperty(a)?K[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||wa(a,b,c,!1))return "";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(N(b)+'"')}return ua(a)?a+'="'+(N(b)+'"'):""}function za(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Aa="function"===typeof Object.is?Object.is:za,O=null,P=null,Q=null,R=!1,S=!1,U=null,V=0;function W(){if(null===O)throw Error(q(321));return O}function Ba(){if(0<V)throw Error(q(312));return {memoizedState:null,queue:null,next:null}}function Ca(){null===Q?null===P?(R=!1,P=Q=Ba()):(R=!0,Q=P):null===Q.next?(R=!1,Q=Q.next=Ba()):(R=!0,Q=Q.next);return Q}function Da(a,b,c,d){for(;S;)S=!1,V+=1,Q=null,c=a(b,d);P=O=null;V=0;Q=U=null;return c}function Ea(a,b){return "function"===typeof b?b(a):b}
function Fa(a,b,c){O=W();Q=Ca();if(R){var d=Q.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=Q.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);Q.memoizedState=d;return [d,b]}return [Q.memoizedState,b]}a=a===Ea?"function"===typeof b?b():b:void 0!==c?c(b):b;Q.memoizedState=a;a=Q.queue={last:null,dispatch:null};a=a.dispatch=Ga.bind(null,O,a);return [Q.memoizedState,a]}
function Ga(a,b,c){if(!(25>V))throw Error(q(301));if(a===O)if(S=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else {for(b=c;null!==b.next;)b=b.next;b.next=a;}}function Ha(){}
var X=0,Ia={readContext:function(a){var b=X;E(a,b);return a[b]},useContext:function(a){W();var b=X;E(a,b);return a[b]},useMemo:function(a,b){O=W();Q=Ca();b=void 0===b?null:b;if(null!==Q){var c=Q.memoizedState;if(null!==c&&null!==b){a:{var d=c[1];if(null===d)d=!1;else {for(var f=0;f<d.length&&f<b.length;f++)if(!Aa(b[f],d[f])){d=!1;break a}d=!0;}}if(d)return c[0]}}a=a();Q.memoizedState=[a,b];return a},useReducer:Fa,useRef:function(a){O=W();Q=Ca();var b=Q.memoizedState;return null===b?(a={current:a},Q.memoizedState=
a):b},useState:function(a){return Fa(Ea,a)},useLayoutEffect:function(){},useCallback:function(a){return a},useImperativeHandle:Ha,useEffect:Ha,useDebugValue:Ha,useResponder:function(a,b){return {props:b,responder:a}},useDeferredValue:function(a){W();return a},useTransition:function(){W();return [function(a){a();},!1]}},Ja={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Ka(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
var La={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ma=objectAssign({menuitem:!0},La),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Na=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Na.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a];});});
var Oa=/([A-Z])/g,Pa=/^ms-/,Z=React.Children.toArray,Qa=D.ReactCurrentDispatcher,Ra={listing:!0,pre:!0,textarea:!0},Sa=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ta={},Ua={};function Va(a){if(void 0===a||null===a)return a;var b="";React.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}var Wa=Object.prototype.hasOwnProperty,Xa={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ya(a,b){if(void 0===a)throw Error(q(152,C(b)||"Component"));}
function Za(a,b,c){function d(d,g){var e=g.prototype&&g.prototype.isReactComponent,f=pa(g,b,c,e),x=[],h=!1,m={isMounted:function(){return !1},enqueueForceUpdate:function(){if(null===x)return null},enqueueReplaceState:function(a,c){h=!0;x=[c];},enqueueSetState:function(a,c){if(null===x)return null;x.push(c);}};if(e){if(e=new g(d.props,f,m),"function"===typeof g.getDerivedStateFromProps){var w=g.getDerivedStateFromProps.call(null,d.props,e.state);null!=w&&(e.state=objectAssign({},e.state,w));}}else if(O={},e=g(d.props,
f,m),e=Da(g,d.props,e,f),null==e||null==e.render){a=e;Ya(a,g);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof g.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),x.length){m=x;var r=
h;x=null;h=!1;if(r&&1===m.length)e.state=m[0];else {w=r?m[0]:e.state;var y=!0;for(r=r?1:0;r<m.length;r++){var p=m[r];p="function"===typeof p?p.call(e,w,d.props,f):p;null!=p&&(y?(y=!1,w=objectAssign({},w,p)):objectAssign(w,p));}e.state=w;}}else x=null;a=e.render();Ya(a,g);if("function"===typeof e.getChildContext&&(d=g.childContextTypes,"object"===typeof d)){var A=e.getChildContext();for(var T in A)if(!(T in d))throw Error(q(108,C(g)||"Unknown",T));}A&&(b=objectAssign({},b,A));}for(;React.isValidElement(a);){var f=a,g=f.type;if("function"!==
typeof g)break;d(f,g);}return {child:a,context:b}}
var $a=function(){function a(a,b){React.isValidElement(a)?a.type!==u?a=[a]:(a=a.props.children,a=React.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ja.html,children:a,childIndex:0,context:oa,footer:""};var c=F[0];if(0===c){var g=F;c=g.length;var d=2*c;if(!(65536>=d))throw Error(q(304));var h=new Uint16Array(d);h.set(g);F=h;F[0]=c+1;for(g=c;g<d-1;g++)F[g]=g+1;F[d-1]=0;}else F[0]=F[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;this.makeStaticMarkup=
b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[];}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;F[a]=F[0];F[0]=a;}};b.pushProvider=function(a){var c=++this.contextIndex,b=a.type._context,g=this.threadID;E(b,g);var x=b[g];this.contextStack[c]=b;this.contextValueStack[c]=x;b[g]=a.props.value;};b.popProvider=function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];
this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f;};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a];};b.read=function(a){if(this.exhausted)return null;var b=X;X=this.threadID;var c=Qa.current;Qa.current=Ia;try{for(var g=[""],x=!1;g[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var h=this.threadID;F[h]=F[0];F[0]=h;break}var e=this.stack[this.stack.length-1];if(x||e.childIndex>=
e.children.length){var I=e.footer;""!==I&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===v)this.popProvider(e.type);else if(e.type===B){this.suspenseDepth--;var G=g.pop();if(x){x=!1;var n=e.fallbackFrame;if(!n)throw Error(q(303));this.stack.push(n);g[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else g[this.suspenseDepth]+=G;}g[this.suspenseDepth]+=I;}else {var m=e.children[e.childIndex++],
w="";try{w+=this.render(m,e.context,e.domNamespace);}catch(r){if(null!=r&&"function"===typeof r.then)throw Error(q(294));throw r;}finally{}g.length<=this.suspenseDepth&&g.push("");g[this.suspenseDepth]+=w;}}return g[0]}finally{Qa.current=c,X=b;}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return "";if(this.makeStaticMarkup)return N(f);if(this.previousWasTextNode)return "\x3c!-- --\x3e"+N(f);this.previousWasTextNode=!0;return N(f)}b=Za(a,b,this.threadID);a=b.child;
b=b.context;if(null===a||!1===a)return "";if(!React.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===aa)throw Error(q(257));throw Error(q(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return ""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case ba:case ea:case ca:case ha:case u:return a=Z(a.props.children),this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:throw Error(q(294));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case fa:O={};var d=c.render(a.props,a.ref);d=Da(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return "";case ia:return a=[React.createElement(c.type,objectAssign({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case v:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,
context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case da:c=a.type;d=a.props;var h=this.threadID;E(c,h);c=Z(d.children(c[h]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return "";case la:throw Error(q(338));case ja:switch(c=a.type,na(c),c._status){case 1:return a=[React.createElement(c._result,objectAssign({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case 2:throw c._result;default:throw Error(q(295));
}case ma:throw Error(q(343));}throw Error(q(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();if(!Ta.hasOwnProperty(c)){if(!Sa.test(c))throw Error(q(65,c));Ta[c]=!0;}var d=a.props;if("input"===c)d=objectAssign({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var h=d.value;if(null==h){h=d.defaultValue;var e=d.children;if(null!=e){if(null!=
h)throw Error(q(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(q(93));e=e[0];}h=""+e;}null==h&&(h="");}d=objectAssign({},d,{value:void 0,children:""+h});}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=objectAssign({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var I=Va(d.children);if(null!=e){var G=null!=d.value?d.value+"":I;h=!1;if(Array.isArray(e))for(var n=0;n<e.length;n++){if(""+e[n]===G){h=!0;break}}else h=""+e===G;d=objectAssign({selected:void 0,children:void 0},
d,{selected:h,children:I});}}if(h=d){if(Ma[c]&&(null!=h.children||null!=h.dangerouslySetInnerHTML))throw Error(q(137,c,""));if(null!=h.dangerouslySetInnerHTML){if(null!=h.children)throw Error(q(60));if(!("object"===typeof h.dangerouslySetInnerHTML&&"__html"in h.dangerouslySetInnerHTML))throw Error(q(61));}if(null!=h.style&&"object"!==typeof h.style)throw Error(q(62,""));}h=d;e=this.makeStaticMarkup;I=1===this.stack.length;G="<"+a.type;for(z in h)if(Wa.call(h,z)){var m=h[z];if(null!=m){if("style"===
z){n=void 0;var w="",r="";for(n in m)if(m.hasOwnProperty(n)){var y=0===n.indexOf("--"),p=m[n];if(null!=p){if(y)var A=n;else if(A=n,Ua.hasOwnProperty(A))A=Ua[A];else {var T=A.replace(Oa,"-$1").toLowerCase().replace(Pa,"-ms-");A=Ua[A]=T;}w+=r+A+":";r=n;y=null==p||"boolean"===typeof p||""===p?"":y||"number"!==typeof p||0===p||Y.hasOwnProperty(r)&&Y[r]?(""+p).trim():p+"px";w+=y;r=";";}}m=w||null;}n=null;b:if(y=c,p=h,-1===y.indexOf("-"))y="string"===typeof p.is;else switch(y){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":y=
!1;break b;default:y=!0;}y?Xa.hasOwnProperty(z)||(n=z,n=ua(n)&&null!=m?n+'="'+(N(m)+'"'):""):n=ya(z,m);n&&(G+=" "+n);}}e||I&&(G+=' data-reactroot=""');var z=G;h="";La.hasOwnProperty(c)?z+="/>":(z+=">",h="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=N(e);break a}e=null;}null!=e?(d=[],Ra.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(z+="\n"),z+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===
f?Ka(a):"http://www.w3.org/2000/svg"===f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:h});this.previousWasTextNode=!1;return z};return a}(),ab={renderToString:function(a){a=new $a(a,!1);try{return a.read(Infinity)}finally{a.destroy();}},renderToStaticMarkup:function(a){a=new $a(a,!0);try{return a.read(Infinity)}finally{a.destroy();}},renderToNodeStream:function(){throw Error(q(207));},renderToStaticNodeStream:function(){throw Error(q(208));
},version:"16.14.0"};var reactDomServer_browser_production_min=ab.default||ab;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var reactDomServer_browser_development = createCommonjsModule(function (module) {



if (process.env.NODE_ENV !== "production") {
  (function() {

var React$1 = React;
var _assign = objectAssign;
var checkPropTypes = checkPropTypes_1;

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}

var ReactVersion = '16.14.0';

var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; // Prevent newer renderers from RTE when used with older react package versions.
// Current owner and dispatcher used to share the same ref,
// but PR #14548 split them out to better support the react-debug-tools package.

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentDispatcher')) {
  ReactSharedInternals.ReactCurrentDispatcher = {
    current: null
  };
}

if (!ReactSharedInternals.hasOwnProperty('ReactCurrentBatchConfig')) {
  ReactSharedInternals.ReactCurrentBatchConfig = {
    suspense: null
  };
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}
function initializeLazyComponentType(lazyComponent) {
  if (lazyComponent._status === Uninitialized) {
    lazyComponent._status = Pending;
    var ctor = lazyComponent._ctor;
    var thenable = ctor();
    lazyComponent._result = thenable;
    thenable.then(function (moduleObject) {
      if (lazyComponent._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + "const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
          }
        }

        lazyComponent._status = Resolved;
        lazyComponent._result = defaultExport;
      }
    }, function (error) {
      if (lazyComponent._status === Pending) {
        lazyComponent._status = Rejected;
        lazyComponent._result = error;
      }
    });
  }
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var enableSuspenseServerRenderer = false;

var enableDeprecatedFlareAPI = false; // Experimental Host Component support.

var ReactDebugCurrentFrame;
var didWarnAboutInvalidateContextType;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];

reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true);
});
// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */


var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://fb.me/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error( "Rendered more hooks than during the previous render" );
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;

  {
    isInHookUserCodeInDev = false;
  } // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;


  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);

  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://fb.me/react-uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  // Callbacks are passed as they are in the server environment.
  return callback;
}

function useResponder(responder, props) {
  return {
    props: props,
    responder: responder
  };
}

function useDeferredValue(value, config) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition(config) {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function noop() {}

var currentThreadID = 0;
function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useResponder: useResponder,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var ReactDebugCurrentFrame$2 = null;
var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;
  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };
  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI ) {
        return null;
      }

      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null || enableDeprecatedFlareAPI ) {
        return null;
      }

      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };
  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */

  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';
var ReactDebugCurrentFrame$3 = null;

{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." + ( ReactDebugCurrentFrame$3.getStackAddendum() ) );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." + ( ReactDebugCurrentFrame$3.getStackAddendum() ) );
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

/**
 * Mapping from registration name to plugin module
 */

var registrationNameModules = {};
/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */

var possibleRegistrationNames =  {} ; // Trust the developer to only use possibleRegistrationNames in true

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, canUseEventSystem);
}

var toArray = React$1.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$4;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame$4 = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props,
    /* canUseEventSystem */
    false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame$4.getCurrentStack;
      ReactDebugCurrentFrame$4.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame$4.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error( "Invalid tag: " + tag );
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React$1.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React$1.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React$1.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty$2.call(props, propKey)) {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React$1.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }

      {
        var _componentName3 = getComponentName(Component) || 'Unknown';

        if (!didWarnAboutModulePatternComponent[_componentName3]) {
          error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

          didWarnAboutModulePatternComponent[_componentName3] = true;
        }
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              warn( // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://fb.me/react-unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
              }
            }
          }
        } else {
          {
            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer =
/*#__PURE__*/
function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      if (index < 0 || provider !== this.contextProviderStack[index]) {
        error('Unexpected pop.');
      }
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentDispatcher.current;
    ReactCurrentDispatcher.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : formatProdErrorMessage(303));
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        if (true) {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : formatProdErrorMessage(342));
                }
              }

              suspended = true;
            } else {
              if (!false) {
                {
                  throw Error(true ? "ReactDOMServer does not yet support Suspense." : formatProdErrorMessage(294));
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          if (true) {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher.current = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React$1.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            {
              {
                {
                  throw Error( "ReactDOMServer does not yet support Suspense." );
                }
              }
            }
          }
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren4;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren4 = elementType.render(element.props, element.ref);
              _nextChildren4 = finishHooks(elementType.render, element.props, _nextChildren4, element.ref);
              _nextChildren4 = toArray(_nextChildren4);
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame4.debugElementStack = [];
              }

              this.stack.push(_frame4);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren5 = [React$1.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren6 = toArray(nextProps.children);

              var _frame6 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame6);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;

                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren7 = toArray(_nextProps.children(nextValue));

              var _frame7 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.stack.push(_frame7);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              initializeLazyComponentType(lazyComponent);

              switch (lazyComponent._status) {
                case Resolved:
                  {
                    var _nextChildren9 = [React$1.createElement(lazyComponent._result, _assign({
                      ref: _element2.ref
                    }, _element2.props))];
                    var _frame9 = {
                      type: null,
                      domNamespace: parentNamespace,
                      children: _nextChildren9,
                      childIndex: 0,
                      context: context,
                      footer: ''
                    };

                    {
                      _frame9.debugElementStack = [];
                    }

                    this.stack.push(_frame9);
                    return '';
                  }

                case Rejected:
                  throw lazyComponent._result;

                case Pending:
                default:
                  {
                    {
                      throw Error( "ReactDOMServer does not yet support lazy-loaded components." );
                    }
                  }

              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_SCOPE_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support scope components." );
                }
              }
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        if (tag !== element.type) {
          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
        }
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);

          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error( "<textarea> can only have at most one child." );
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');

          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead." );
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead." );
    }
  }
} // Note: when changing this, also consider https://github.com/facebook/react/issues/11526


var ReactDOMServer = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest


var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}
});

var server_browser = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactDomServer_browser_production_min;
} else {
  module.exports = reactDomServer_browser_development;
}
});

var ICONS = Object.assign(['adjusts', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'bluetooth', 'camera', 'card', 'cards', 'chart-line', 'check', 'contract', 'coupon', 'delete', 'external-ticket', 'eye', 'filter', 'flash', 'flash-off', 'help', 'info', 'items', 'labels', 'list', 'loader', 'loading', 'logout', 'lock', 'unlock', 'search', 'settings', 'signal', 'share-link', 'options', 'minus', 'plus', 'times', 'qrcode', 'refresh', 'scan', 'ticketbooth', 'transfer', 'pencil', 'user', 'facebook', 'payment-amex', 'payment-bankbillet', 'payment-diners', 'payment-discover', 'payment-elo', 'payment-freepass', 'payment-mastercard', 'payment-money', 'payment-others', 'payment-paypal', 'payment-visa'], {
  ENCODE_SVG: function ENCODE_SVG(reactElement) {
    return 'data:image/svg+xml,' + escape(server_browser.renderToStaticMarkup(reactElement));
  }
});

var LAYOUT = {
  RESIZED: 'LAYOUT:RESIZED'
};

var RADIUS = Object.assign(5, {
  XXS: 5,
  XS: 5,
  SM: 5,
  MD: 5,
  LG: 10,
  XL: 10
});

var SCREEN_SIZES = {
  XS: 359,
  SM: 768,
  MD: 1024,
  LG: 1280,
  XL: 1440
};

var SIZES = {
  XS: {
    FONT_WEIGHT: 400,
    FONT_SIZE: '8px',
    LINE_HEIGHT: '10px',
    RADIUS: '5px',
    SHADOW: '5px'
  },
  SM: {
    FONT_WEIGHT: 400,
    FONT_SIZE: '14px',
    LINE_HEIGHT: '20px',
    RADIUS: '5px',
    SHADOW: '5px'
  },
  MD: {
    FONT_WEIGHT: 400,
    FONT_SIZE: '16px',
    LINE_HEIGHT: '20px',
    RADIUS: '5px',
    SHADOW: '5px'
  },
  LG: {
    FONT_WEIGHT: 700,
    FONT_SIZE: '20px',
    LINE_HEIGHT: '20px',
    RADIUS: '10px',
    SHADOW: '10px'
  },
  XL: {
    FONT_WEIGHT: 700,
    FONT_SIZE: '28px',
    LINE_HEIGHT: '30px',
    RADIUS: '10px',
    SHADOW: '10px'
  },
  XXL: {
    FONT_WEIGHT: 700,
    FONT_SIZE: '36px',
    LINE_HEIGHT: '40px',
    RADIUS: '10px',
    SHADOW: '10px'
  },
  ACTION_BAR_HEIGHT: '60px'
};

var MEDIA_QUERIES = {
  PRINT: '@media print',
  XXS: "@media (max-width: " + (SCREEN_SIZES.XS - 1) + "px)",
  XS: "@media (min-width: " + SCREEN_SIZES.XS + "px) and (max-width: " + (SCREEN_SIZES.SM - 1) + "px)",
  SM: "@media (min-width: " + SCREEN_SIZES.SM + "px) and (max-width: " + (SCREEN_SIZES.MD - 1) + "px)",
  MD: "@media (min-width: " + SCREEN_SIZES.MD + "px) and (max-width: " + (SCREEN_SIZES.LG - 1) + "px)",
  LG: "@media (min-width: " + SCREEN_SIZES.LG + "px) and (max-width: " + (SCREEN_SIZES.XL - 1) + "px)",
  XL: "@media (min-width: " + SCREEN_SIZES.XL + "px)",
  LT: {
    XS: "@media (max-width: " + (SCREEN_SIZES.XS - 1) + "px)",
    SM: "@media (max-width: " + (SCREEN_SIZES.SM - 1) + "px)",
    MD: "@media (max-width: " + (SCREEN_SIZES.MD - 1) + "px)",
    LG: "@media (max-width: " + (SCREEN_SIZES.LG - 1) + "px)"
  },
  GT: {
    XXS: "@media (min-width: 1px)",
    XS: "@media (min-width: " + SCREEN_SIZES.XS + "px)",
    SM: "@media (min-width: " + SCREEN_SIZES.SM + "px)",
    MD: "@media (min-width: " + SCREEN_SIZES.MD + "px)",
    LG: "@media (min-width: " + SCREEN_SIZES.LG + "px)",
    XL: "@media (min-width: " + SCREEN_SIZES.XL + "px)"
  }
};

var ZINDEX = {
  ACTION_BAR: 100,
  NAVBAR: 9000,
  MODAL: 10000,
  TOAST: 10010
};

var _DEFAULT, _CHECKBOX_MASK, _CHECKBOX_MASK_RIGHT;
var FORM = {
  TYPES: {
    DEFAULT: ['text', 'number', 'date']
  },
  STYLES: {
    DEFAULT: (_DEFAULT = {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '40px',
      margin: 0,
      padding: '0 15px',
      fontSize: '16px',
      lineHeight: '20px',
      color: COLORS.BLACK,
      backgroundColor: COLORS.WHITE,
      boxShadow: "inset 0 0 2px 0 " + COLORS.GET('DARK_BLACK', 0.3),
      borderRadius: RADIUS.XS,
      border: 0,
      outline: 0,
      transition: 'box-shadow 0.15s linear',
      willChange: 'box-shadow',
      '&.error': {
        boxShadow: "inset 0 0 2px 0 " + COLORS.GET('RED', 0.3)
      },
      '&:focus, &:active, &.error:focus, &.error:active': {
        boxShadow: "inset 0 0 2px 0 " + COLORS.GET('DARK_BLACK', 0.6)
      }
    }, _DEFAULT[MEDIA_QUERIES.LT.SM] = {
      height: '50px'
    }, _DEFAULT),
    CHECKBOX: {
      boxSizing: 'border-box',
      position: 'absolute',
      left: 0,
      margin: 0,
      padding: 0,
      opacity: 0,
      width: '20px',
      height: '20px',
      '&:checked + .aph-form__control__mask:before': {
        backgroundColor: COLORS.BLUE
      }
    },
    CHECKBOX_MASK: (_CHECKBOX_MASK = {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'block',
      width: '100%',
      paddingLeft: '30px',
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      '&[for]': {
        cursor: 'pointer'
      },
      '&:before': {
        content: '" "',
        position: 'absolute',
        top: '50%',
        left: 0,
        padding: 0,
        margin: 0,
        width: '20px',
        height: '20px',
        transform: 'translateY(-50%)',
        borderRadius: RADIUS.XS,
        backgroundSize: '12px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }
    }, _CHECKBOX_MASK[MEDIA_QUERIES.LT.SM] = {
      paddingLeft: '40px',
      '&:before': {
        width: '30px',
        height: '30px',
        backgroundSize: '18px'
      }
    }, _CHECKBOX_MASK),
    CHECKBOX_MASK_RIGHT: (_CHECKBOX_MASK_RIGHT = {
      paddingRight: '30px',
      paddingLeft: 0,
      '&:before': {
        right: 0,
        left: 'auto'
      }
    }, _CHECKBOX_MASK_RIGHT[MEDIA_QUERIES.LT.SM] = {
      paddingRight: '40px',
      paddingLeft: 0,
      '&:before': {
        width: '30px',
        height: '30px',
        backgroundSize: '18px'
      }
    }, _CHECKBOX_MASK_RIGHT)
  }
};

var resized = function resized(_window) {
  return function (dispatch) {
    dispatch({
      type: LAYOUT.RESIZED,
      window: _window
    });
  };
};

var layoutActions = {
  resized: resized
};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q$1=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t$1=b?Symbol.for("react.lazy"):60116,v$1=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t$1:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t$1;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t$1};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v$1)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var _templateObject$1;

var spin = function spin(speed, effect, loop) {
  if (speed === void 0) {
    speed = '0.75s';
  }

  if (effect === void 0) {
    effect = 'linear';
  }

  if (loop === void 0) {
    loop = 'infinite';
  }

  var animation = keyframes(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n        from {\n            transform: rotate(0deg);\n        }\n\n        to {\n            transform: rotate(360deg);\n        }\n    "])));
  return /*#__PURE__*/css("animation:", animation, " ", speed, " ", effect, " ", loop, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbnMudXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJjIiwiZmlsZSI6ImFuaW1hdGlvbnMudXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEFuaW1hdGlvbnMgVXRpbHNcbiAqL1xuY29uc3Qgc3BpbiA9IChzcGVlZCA9ICcwLjc1cycsIGVmZmVjdCA9ICdsaW5lYXInLCBsb29wID0gJ2luZmluaXRlJykgPT4ge1xuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGtleWZyYW1lc2BcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICBgO1xuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbn0gJHtzcGVlZH0gJHtlZmZlY3R9ICR7bG9vcH07XG4gICAgYDtcbn07XG5cbi8qIE1hcHBpbmcgKi9cbmNvbnN0IGFuaW1hdGlvbnMgPSB7XG4gICAgc3Bpbixcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgYW5pbWF0aW9ucztcbiJdfQ== */"));
};

var animations = {
  spin: spin
};

var getShadesFormat = function getShadesFormat(dark, original, light, crystal) {
  return {
    dark: dark,
    original: original,
    light: light,
    crystal: crystal
  };
};

var tangerine = getShadesFormat('rgb(250, 132, 9)', 'rgb(252, 163, 17)', 'rgb(252, 190, 24)', 'rgb(254, 232, 195)');
var ocean = getShadesFormat('rgb(0, 134, 201)', 'rgb(0, 165, 219)', 'rgb(0, 192, 232)', 'rgb(191, 232, 246)');
var mercury = getShadesFormat('rgb(90, 96, 101)', 'rgb(122, 128, 133)', 'rgb(152, 159, 163)', 'rgb(221, 223, 224)');
var bamboo = getShadesFormat('rgb(66, 173, 60)', 'rgb(96, 198, 89)', 'rgb(126, 218, 118)', 'rgb(157, 235, 149)');
var sunflower = getShadesFormat('rgb(255, 173, 17)', 'rgb(255, 198, 30)', 'rgb(255, 218, 43)', 'rgb(255, 240, 198)');
var ruby = getShadesFormat('rgb(230, 38, 39)', 'rgb(239, 60, 62)', 'rgb(245, 83, 86)', 'rgb(251, 206, 206)');
var supernova = getShadesFormat('rgb(141, 77, 156)', 'rgb(172, 108, 184)', 'rgb(198, 138, 207)', 'rgb(234, 218, 237)');
var mint = getShadesFormat('rgb(38, 168, 134)', 'rgb(60, 194, 165)', 'rgb(83, 215, 192)', 'rgb(206, 239, 232)');
var oil = getShadesFormat('rgb(27, 27, 27)', 'rgb(45, 45, 45)', 'rgb(64, 64, 64)', 'rgb(202, 202, 202)');
var poison = getShadesFormat('rgb(81, 108, 178)', 'rgb(81, 108, 178)', 'rgb(81, 108, 178)', 'rgb(81, 108, 178)');
var translucid = getShadesFormat('rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.1)');
var shadow = getShadesFormat('rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.1)');
var shades = {
  tangerine: tangerine,
  ocean: ocean,
  oil: oil,
  mercury: mercury,
  bamboo: bamboo,
  sunflower: sunflower,
  ruby: ruby,
  supernova: supernova,
  mint: mint,
  poison: poison,
  translucid: translucid,
  shadow: shadow
};
var aliasKeys = ['info', 'success', 'warning', 'error', 'link'];
var alias = {
  primary: tangerine,
  secondary: ocean,
  info: supernova,
  success: bamboo,
  warning: sunflower,
  error: ruby,
  link: ocean,
  approved: bamboo,
  authorized: mint,
  cancelled: mercury,
  complete: mint,
  created: tangerine,
  declined: ruby,
  draft: mercury,
  finished: mercury,
  refund: supernova,
  limitExceeded: tangerine,
  'manual review': poison,
  notStarted: sunflower,
  outOfStock: tangerine,
  pending: ocean,
  'partially-approved': sunflower,
  private: ocean,
  published: bamboo,
  scheduled: tangerine,
  soldout: supernova,
  unavailable: mercury
};
var statusKeys = ['approved', 'authorized', 'cancelled', 'complete', 'created', 'declined', 'draft', 'finished', 'refund', 'limitExceeded', 'manual review', 'notStarted', 'outOfStock', 'pending', 'partially-approved', 'private', 'published', 'scheduled', 'soldout', 'unavailable'];
var stock = {
  tangerine: tangerine.original,
  ocean: ocean.original,
  mercury: mercury.original,
  bamboo: bamboo.original,
  sunflower: sunflower.original,
  ruby: ruby.original,
  supernova: supernova.original,
  mint: mint.original,
  oil: oil.original,
  primary: tangerine.original,
  secondary: ocean.original,
  info: supernova.original,
  success: bamboo.original,
  warning: sunflower.original,
  error: ruby.original,
  approved: alias.approved.original,
  authorized: alias.authorized.original,
  cancelled: alias.cancelled.original,
  complete: alias.complete.original,
  created: alias.created.original,
  declined: alias.declined.original,
  draft: alias.draft.original,
  finished: alias.finished.original,
  refund: alias.refund.original,
  limitExceeded: alias.limitExceeded.original,
  'manual review': alias['manual review'].original,
  notStarted: alias.notStarted.original,
  outOfStock: alias.outOfStock.original,
  pending: alias.pending.original,
  'partially-approved': alias['partially-approved'].original,
  private: alias.private.original,
  published: alias.published.original,
  scheduled: alias.scheduled,
  soldout: alias.soldout,
  unavailable: alias.unavailable,
  base: 'rgb(0, 0, 0)',
  inverse: 'rgb(255, 255, 255)',
  background: 'rgb(248, 248, 248)',
  translucid: translucid.original,
  shadow: shadow.original,
  border: mercury.crystal,
  disabled: mercury.crystal,
  helper: mercury.original,
  link: ocean.original,
  smoke: 'rgb(248, 248, 248)',
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)'
};

var all = _objectSpread2({
  alias: alias,
  shades: _objectSpread2(_objectSpread2({}, shades), alias)
}, stock);

var getOpacity = function getOpacity(opacity, color) {
  if (opacity === void 0) {
    opacity = 1;
  }

  if (color === void 0) {
    color = all.shades.mercury.original;
  }

  var opacityToReplace = !isNaN(opacity) && opacity > 0 && opacity < 1 ? ", " + opacity + ")" : '';

  if (!opacityToReplace || typeof color !== 'string' || !color.includes('rgb(') && !color.includes('rgba(')) {
    return color;
  }

  return color.replace('rgb(', 'rgba(').replace(')', opacityToReplace);
};

var get = function get(color, shade, opacity) {
  if (color === void 0) {
    color = 'primary';
  }

  if (shade === void 0) {
    shade = 'original';
  }

  if (opacity === void 0) {
    opacity = 1;
  }

  var _color = (color + '').toLowerCase();

  var selected = all.shades[_color] ? all.shades[_color][shade] : all[_color] || _color;

  if (typeof color !== 'string' || !selected) {
    return getOpacity(opacity, selected || _color);
  }

  return getOpacity(opacity, selected);
};

var getFromTheme = function getFromTheme(componentProps, colorKey, colorShade, opacity) {
  if (componentProps === void 0) {
    componentProps = {};
  }

  if (colorShade === void 0) {
    colorShade = 'original';
  }

  var _componentProps = componentProps,
      theme = _componentProps.theme;

  if (typeof theme !== 'object' || !theme[colorKey]) {
    return get(colorKey, colorShade, opacity);
  }

  var themeShades = theme.shades && theme.shades[colorKey] ? theme.shades[colorKey] : theme[colorKey];

  if (typeof themeShades !== 'object') {
    return getOpacity(opacity, themeShades || '');
  }

  return getOpacity(opacity, themeShades[colorShade]);
};

var colors = _objectSpread2({}, all);

var set = function set(colorKey, shadeOriginal, shadeDark, shadeLight, shadeCrystal) {
  var _objectSpread2$1, _objectSpread3, _objectSpread4;

  if (typeof colorKey !== 'string' || typeof shadeOriginal !== 'string') {
    return colors;
  }

  var colorOriginal = "rgb(" + chroma(shadeOriginal).rgb().join(',') + ")";
  var colorDark = shadeDark || chroma(colorOriginal).darken().css();
  var colorLight = shadeLight || chroma(colorOriginal).brighten(0.5).css();
  var colorCrystal = shadeCrystal || chroma(colorOriginal).brighten(1).css();
  var colorShades = getShadesFormat(colorDark, colorOriginal, colorLight, colorCrystal);
  var colorAlias = !aliasKeys.includes(colorKey) && !statusKeys.includes(colorKey) ? {} : _objectSpread2(_objectSpread2({}, colors.alias), {}, (_objectSpread2$1 = {}, _objectSpread2$1[colorKey] = colorShades, _objectSpread2$1));
  colors = _objectSpread2(_objectSpread2({}, colors), {}, (_objectSpread4 = {
    alias: colorAlias
  }, _objectSpread4[colorKey] = colorOriginal, _objectSpread4.shades = _objectSpread2(_objectSpread2({}, colors.shades), {}, (_objectSpread3 = {}, _objectSpread3[colorKey] = colorShades, _objectSpread3)), _objectSpread4));
  return colors;
};

function getFullColor(componentProps, colorString) {
  if (!colorString) {
    return colorString;
  }

  var normalized = String(colorString);
  var isRgbOrHsl = normalized.includes(')');
  var colorSplitted = String(normalized).split(isRgbOrHsl ? ')' : ',');
  var colorNameOrValue = colorSplitted[0] || '';
  var colorArgs = (!isRgbOrHsl ? colorSplitted.slice(1) : String(colorSplitted[1]).split(',')).filter(function (param) {
    return param && param.trim();
  });
  var colorKey = colorNameOrValue.concat(isRgbOrHsl ? ')' : '');
  return getFromTheme(componentProps || {}, colorKey, colorArgs[0], colorArgs[1]);
}

colors = _objectSpread2(_objectSpread2({}, colors), {}, {
  aliasKeys: aliasKeys,
  statusKeys: statusKeys,
  getFullColor: getFullColor,
  getFromTheme: getFromTheme,
  getOpacity: getOpacity,
  get: get,
  set: set
});
var colors$1 = colors;

var palette = {};
var excluded = ['poison', 'translucid'];

for (var colorKey in colors$1.shades) {
  var color = colors$1.shades[colorKey];

  if (!excluded.includes(colorKey) && typeof color === 'object' && color.light && color.dark) {
    palette[colorKey] = {
      start: color.dark,
      end: color.light
    };
  }
}

var list = Object.values(palette);
var keys = Object.keys(palette);

function random() {
  return list[Math.floor(Math.random() * list.length)];
}

function get$1(paletteShade) {
  if (paletteShade === void 0) {
    paletteShade = '';
  }

  return palette[paletteShade] || null;
}

function backgroundLinear(paletteShade, deg) {
  if (paletteShade === void 0) {
    paletteShade = '';
  }

  if (deg === void 0) {
    deg = 0;
  }

  var _ref = get$1(paletteShade) || {},
      start = _ref.start,
      end = _ref.end;

  if (!start || !end) {
    return null;
  }

  return "linear-gradient(" + deg + "deg, " + start + ", " + end + ")";
}

var gradients = {
  get: get$1,
  list: list,
  keys: keys,
  palette: palette,
  random: random,
  backgroundLinear: backgroundLinear
};

function hasDatePickerSupport() {
  if (window.datePickerSupport) {
    return true;
  }

  var input = document.createElement('input');
  input.setAttribute('type', 'date');
  var notADateValue = 'not-a-date';
  input.setAttribute('value', notADateValue);
  var hasDatePickerSupport = input.value !== notADateValue;
  window.datePickerSupport = hasDatePickerSupport;
  return hasDatePickerSupport;
}

function format(value) {
  var isValidCNPJ = isValid(value);
  var isValidCPF = isValid$1(value);
  return isValidCNPJ ? format$1(value) : isValidCPF ? format$2(value) : value;
}

function strip(value) {
  return JSON.stringify(value || '').replace(/\D/g, '');
}

function type(value) {
  var isValidCNPJ = isValid(value);
  var isValidCPF = isValid$1(value);
  return isValidCNPJ ? 'CNPJ' : isValidCPF ? 'CPF' : '';
}

function valid(value) {
  return !!(isValid(value) || isValid$1(value));
}

var documents = {
  CNPJ: CNPJ,
  CPF: CPF,
  format: format,
  type: type,
  strip: strip,
  valid: valid
};

function focus(selector, index) {
  if (index === void 0) {
    index = 0;
  }

  var element = document.querySelectorAll(selector)[index];

  if (element || element.focus) {
    element.focus();
  }
}

function toggleLocationHash(hash) {
  if (hash === void 0) {
    hash = '';
  }

  try {
    if (hash) {
      window.location.hash = hash;
      return;
    }

    var _url = new URL(window.location);

    _url.hash = '';
    window.history.replaceState(null, document.title, _url);
  } catch (e) {
    console.error(e);
  }
}

var formatNumber = function formatNumber(num, locale) {
  if (locale === void 0) {
    locale = 'pt-BR';
  }

  return new Intl.NumberFormat(locale).format(num);
};
var formatNumberRound = function formatNumberRound(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
};
var formatCurrency = function formatCurrency(num, locale, currency) {
  if (locale === void 0) {
    locale = 'pt-BR';
  }

  if (currency === void 0) {
    currency = 'BRL';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(num);
};

function numeric(value, allowed) {
  if (value === void 0) {
    value = '';
  }

  if (allowed === void 0) {
    allowed = [' ', '.'];
  }

  var filteredValue = [];
  var stringArray = String(value).trimStart().split('');
  stringArray.forEach(function (character) {
    var isAllowed = allowed.includes(character);
    var isNonDigit = /\D/.test(character);
    var shouldRemove = !!(!isAllowed && isNonDigit);

    if (!shouldRemove) {
      filteredValue.push(character);
    }
  });
  return filteredValue.join('');
}

var patterns = {
  numeric: numeric
};

var colorfull = function colorfull(_ref) {
  var background = _ref.background,
      backgroundColor = _ref.backgroundColor,
      color = _ref.color,
      textColor = _ref.textColor,
      componentProps = _objectWithoutPropertiesLoose(_ref, ["background", "backgroundColor", "color", "textColor"]);

  return /*#__PURE__*/css("background:", colors$1.getFullColor(componentProps, background), ";background-color:", colors$1.getFullColor(componentProps, backgroundColor), ";color:", !color && !textColor ? null : colors$1.getFullColor(componentProps, textColor || color), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yZnVsbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTUyIsImZpbGUiOiJjb2xvcmZ1bGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB1dGlsaXR5IGZyb20gJy4uL2NvbG9ycy9jb2xvcnMudXRpbHMnO1xuXG5leHBvcnQgY29uc3QgY29sb3JmdWxsID0gKHtcbiAgYmFja2dyb3VuZCxcbiAgYmFja2dyb3VuZENvbG9yLFxuICBjb2xvcixcbiAgdGV4dENvbG9yLFxuICAuLi5jb21wb25lbnRQcm9wc1xufSkgPT4gY3NzYFxuICBiYWNrZ3JvdW5kOiAke3V0aWxpdHkuZ2V0RnVsbENvbG9yKGNvbXBvbmVudFByb3BzLCBiYWNrZ3JvdW5kKX07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dXRpbGl0eS5nZXRGdWxsQ29sb3IoY29tcG9uZW50UHJvcHMsIGJhY2tncm91bmRDb2xvcil9O1xuICBjb2xvcjogJHsoIWNvbG9yICYmICF0ZXh0Q29sb3IpID8gbnVsbCA6IHV0aWxpdHkuZ2V0RnVsbENvbG9yKGNvbXBvbmVudFByb3BzLCAodGV4dENvbG9yIHx8IGNvbG9yKSl9O1xuYDtcbiJdfQ== */"));
};

var flex = function flex(_ref) {
  var alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      alignSelf = _ref.alignSelf,
      display = _ref.display,
      flex = _ref.flex,
      flexDirection = _ref.flexDirection,
      flexDisplay = _ref.flexDisplay,
      flexGrow = _ref.flexGrow,
      flexShrink = _ref.flexShrink,
      flexWrap = _ref.flexWrap,
      justifyContent = _ref.justifyContent,
      order = _ref.order;
  return /*#__PURE__*/css("align-content:", alignContent || null, ";align-items:", alignItems || null, ";align-self:", alignSelf || null, ";display:", display || (!flexDisplay ? null : 'flex'), ";flex:", !flex ? null : typeof flex === 'boolean' ? '1 auto' : flex, ";flex-direction:", flexDirection || null, ";flex-grow:", flexGrow || null, ";flex-shrink:", flexShrink || null, ";flex-wrap:", flexWrap || null, ";justify-content:", justifyContent || null, ";order:", order || null, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZVMiLCJmaWxlIjoiZmxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgZmxleCA9ICh7XG4gIGFsaWduQ29udGVudCxcbiAgYWxpZ25JdGVtcyxcbiAgYWxpZ25TZWxmLFxuICBkaXNwbGF5LFxuICBmbGV4LFxuICBmbGV4RGlyZWN0aW9uLFxuICBmbGV4RGlzcGxheSxcbiAgZmxleEdyb3csXG4gIGZsZXhTaHJpbmssXG4gIGZsZXhXcmFwLFxuICBqdXN0aWZ5Q29udGVudCxcbiAgb3JkZXIsXG59KSA9PiBjc3NgXG4gIGFsaWduLWNvbnRlbnQ6ICR7YWxpZ25Db250ZW50IHx8IG51bGx9O1xuICBhbGlnbi1pdGVtczogJHthbGlnbkl0ZW1zIHx8IG51bGx9O1xuICBhbGlnbi1zZWxmOiAke2FsaWduU2VsZiB8fCBudWxsfTtcbiAgZGlzcGxheTogJHtkaXNwbGF5IHx8ICghZmxleERpc3BsYXkgPyBudWxsIDogJ2ZsZXgnKX07XG4gIGZsZXg6ICR7IWZsZXggPyBudWxsIDogKHR5cGVvZiBmbGV4ID09PSAnYm9vbGVhbicgPyAnMSBhdXRvJyA6IGZsZXgpfTtcbiAgZmxleC1kaXJlY3Rpb246ICR7ZmxleERpcmVjdGlvbiB8fCBudWxsfTtcbiAgZmxleC1ncm93OiAke2ZsZXhHcm93IHx8IG51bGx9O1xuICBmbGV4LXNocmluazogJHtmbGV4U2hyaW5rIHx8IG51bGx9O1xuICBmbGV4LXdyYXA6ICR7ZmxleFdyYXAgfHwgbnVsbH07XG4gIGp1c3RpZnktY29udGVudDogJHtqdXN0aWZ5Q29udGVudCB8fCBudWxsfTtcbiAgb3JkZXI6ICR7b3JkZXIgfHwgbnVsbH07XG5gO1xuIl19 */"));
};

function validateSize(size, allowNegative) {
  if (allowNegative === void 0) {
    allowNegative = false;
  }

  var type = typeof size;
  var splitted = ("" + size).split(' ');
  var hasNumberNegative = splitted.some(function (side) {
    return parseFloat(side, 10) < 0;
  });
  var isString = type === 'string';
  var isNumber = type === 'number';
  var isNumberAndValid = isNumber && (allowNegative || !hasNumberNegative);
  var isStringAndValid = isString && (allowNegative || !hasNumberNegative);
  return !isNumber && !isString ? null : isStringAndValid ? size : isNumberAndValid ? size + "px" : null;
}
function borderRadius(_ref) {
  var aphradius = _ref.aphradius,
      aphRadius = _ref.aphRadius,
      borderRadius = _ref.borderRadius,
      borderTopLeftRadius = _ref.borderTopLeftRadius,
      borderTopRightRadius = _ref.borderTopRightRadius,
      borderBottomRightRadius = _ref.borderBottomRightRadius,
      borderBottomLeftRadius = _ref.borderBottomLeftRadius,
      radius = _ref.radius;
  return /*#__PURE__*/css("border-radius:", validateSize(aphradius), ";border-radius:", validateSize(aphRadius), ";border-radius:", validateSize(radius), ";border-radius:", validateSize(borderRadius), ";border-top-left-radius:", validateSize(borderTopLeftRadius), ";border-top-right-radius:", validateSize(borderTopRightRadius), ";border-bottom-right-radius:", validateSize(borderBottomRightRadius), ";border-bottom-left-radius:", validateSize(borderBottomLeftRadius), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDWSIsImZpbGUiOiJzaXplcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBzIHRvIGRlY2lkZSBpZiBzb21lIHNpemUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHNpemVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgYWxsb3dOZWdhdGl2ZVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R8c3RyaW5nfSBpbiBjYXNlIG9mIGludmFsaWQsIHJldHVybnMgYG51bGxgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNpemUoc2l6ZSwgYWxsb3dOZWdhdGl2ZSA9IGZhbHNlKXtcbiAgY29uc3QgdHlwZSAgICAgICAgICAgICAgPSB0eXBlb2Ygc2l6ZTtcbiAgY29uc3Qgc3BsaXR0ZWQgICAgICAgICAgPSBgJHtzaXplfWAuc3BsaXQoJyAnKTtcbiAgY29uc3QgaGFzTnVtYmVyTmVnYXRpdmUgPSBzcGxpdHRlZC5zb21lKChzaWRlKSA9PiBwYXJzZUZsb2F0KHNpZGUsIDEwKSA8IDApO1xuICBjb25zdCBpc1N0cmluZyAgICAgICAgICA9IHR5cGUgPT09ICdzdHJpbmcnO1xuICBjb25zdCBpc051bWJlciAgICAgICAgICA9IHR5cGUgPT09ICdudW1iZXInO1xuICBjb25zdCBpc051bWJlckFuZFZhbGlkICA9IChpc051bWJlciAmJiAoYWxsb3dOZWdhdGl2ZSB8fCAhaGFzTnVtYmVyTmVnYXRpdmUpKTtcbiAgY29uc3QgaXNTdHJpbmdBbmRWYWxpZCAgPSAoaXNTdHJpbmcgJiYgKGFsbG93TmVnYXRpdmUgfHwgIWhhc051bWJlck5lZ2F0aXZlKSk7XG5cbiAgcmV0dXJuICghaXNOdW1iZXIgJiYgIWlzU3RyaW5nKSA/IG51bGwgOiAoXG4gICAgaXNTdHJpbmdBbmRWYWxpZCA/IHNpemUgOiAoXG4gICAgICBpc051bWJlckFuZFZhbGlkID8gYCR7c2l6ZX1weGAgOiBudWxsXG4gICAgKVxuICApO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGJvcmRlci1yYWRpdXMgYmFzZWQgb24gcmVjZWl2ZWQgY29tcG9uZW50IHByb3BzLlxuICogSW4gY2FzZSBvZiBpbmV4aXN0ZW50IHJhZGl1cyBwcm9wcywgd2lsbCBub3QgYXBwbHkgYW55IENTUy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IHByb3BzOiBib3JkZXJSYWRpdXMgb3IgcmFkaXVzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY3NzIHJ1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXMoe1xuICBhcGhyYWRpdXMsXG4gIGFwaFJhZGl1cyxcbiAgYm9yZGVyUmFkaXVzLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzLFxuICBib3JkZXJUb3BSaWdodFJhZGl1cyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMsXG4gIHJhZGl1cyxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBocmFkaXVzKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaFJhZGl1cyl9O1xuICAgIGJvcmRlci1yYWRpdXMgICAgICAgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShyYWRpdXMpfTtcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyUmFkaXVzKX07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyAgICA6ICR7dmFsaWRhdGVTaXplKGJvcmRlclRvcExlZnRSYWRpdXMpfTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyVG9wUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tTGVmdFJhZGl1cyl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGhlaWdodCBhbmQgbWluLWhlaWdodCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGhlaWdodCBvciBtaW5IZWlnaHRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlaWdodCh7XG4gIGFwaGhlaWdodCxcbiAgYXBoSGVpZ2h0LFxuICBhcGhtaW5oZWlnaHQsXG4gIGFwaE1pbkhlaWdodCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgaGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhoZWlnaHQpfTtcbiAgICBoZWlnaHQ6ICR7dmFsaWRhdGVTaXplKGFwaEhlaWdodCl9O1xuICAgIGhlaWdodDogJHt2YWxpZGF0ZVNpemUoaGVpZ2h0KX07XG5cbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhtaW5oZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhNaW5IZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShtaW5IZWlnaHQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBtYXJnaW5zIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCBtYXJnaW4gcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogbWFyZ2luLCBtYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmdpbih7XG4gIGFwaG1hcmdpbixcbiAgYXBoTWFyZ2luLFxuICBtYXJnaW4sXG4gIG1hcmdpblRvcCxcbiAgbWFyZ2luUmlnaHQsXG4gIG1hcmdpbkJvdHRvbSxcbiAgbWFyZ2luTGVmdCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhNYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4tdG9wICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5Ub3AsIHRydWUpfTtcbiAgICBtYXJnaW4tcmlnaHQgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5SaWdodCwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dmFsaWRhdGVTaXplKG1hcmdpbkJvdHRvbSwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1sZWZ0ICA6ICR7dmFsaWRhdGVTaXplKG1hcmdpbkxlZnQsIHRydWUpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBwYWRkaW5ncyBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcGFkZGluZ3MgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogcGFkZGluZywgcGFkZGluZ1RvcCwgcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm90dG9tLCBwYWRkaW5nTGVmdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBydWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkZGluZyh7XG4gIGFwaHBhZGRpbmcsXG4gIGFwaFBhZGRpbmcsXG4gIHBhZGRpbmcsXG4gIHBhZGRpbmdUb3AsXG4gIHBhZGRpbmdSaWdodCxcbiAgcGFkZGluZ0JvdHRvbSxcbiAgcGFkZGluZ0xlZnQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgcGFkZGluZyAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaHBhZGRpbmcpfTtcbiAgICBwYWRkaW5nICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBoUGFkZGluZyl9O1xuICAgIHBhZGRpbmcgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShwYWRkaW5nKX07XG4gICAgcGFkZGluZy10b3AgICA6ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdUb3ApfTtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ1JpZ2h0KX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdCb3R0b20pfTtcbiAgICBwYWRkaW5nLWxlZnQgIDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ0xlZnQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyB3aWR0aCBhbmQgbWluLXdpZHRoIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCByYWRpdXMgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogd2lkdGggb3IgbWluV2lkdGhcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpZHRoKHtcbiAgYXBod2lkdGgsXG4gIGFwaFdpZHRoLFxuICBhcGhtaW53aWR0aCxcbiAgYXBoTWluV2lkdGgsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBod2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBoV2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUod2lkdGgpfTtcblxuICAgIG1pbi13aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBobWlud2lkdGgpfTtcbiAgICBtaW4td2lkdGg6ICR7dmFsaWRhdGVTaXplKGFwaE1pbldpZHRoKX07XG4gICAgbWluLXdpZHRoOiAke3ZhbGlkYXRlU2l6ZShtaW5XaWR0aCl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIHNpemVzIHRvIGJvcmRlciByYWRpdXMsIG1hcmdpbnMgYW5kIHBhZGRpbmdzLCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGJvcmRlclJhZGl1cyBvciByYWRpdXNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVzKHByb3BzKSB7XG4gIHJldHVybiBjc3NgXG4gICAgJHt3aWR0aChwcm9wcyl9O1xuICAgICR7aGVpZ2h0KHByb3BzKX07XG4gICAgJHttYXJnaW4ocHJvcHMpfTtcbiAgICAke3BhZGRpbmcocHJvcHMpfTtcbiAgICAke2JvcmRlclJhZGl1cyhwcm9wcyl9O1xuICBgO1xufVxuIl19 */"));
}
function height(_ref2) {
  var aphheight = _ref2.aphheight,
      aphHeight = _ref2.aphHeight,
      aphminheight = _ref2.aphminheight,
      aphMinHeight = _ref2.aphMinHeight,
      height = _ref2.height,
      minHeight = _ref2.minHeight;
  return /*#__PURE__*/css("height:", validateSize(aphheight), ";height:", validateSize(aphHeight), ";height:", validateSize(height), ";min-height:", validateSize(aphminheight), ";min-height:", validateSize(aphMinHeight), ";min-height:", validateSize(minHeight), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFWSIsImZpbGUiOiJzaXplcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBzIHRvIGRlY2lkZSBpZiBzb21lIHNpemUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHNpemVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgYWxsb3dOZWdhdGl2ZVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R8c3RyaW5nfSBpbiBjYXNlIG9mIGludmFsaWQsIHJldHVybnMgYG51bGxgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNpemUoc2l6ZSwgYWxsb3dOZWdhdGl2ZSA9IGZhbHNlKXtcbiAgY29uc3QgdHlwZSAgICAgICAgICAgICAgPSB0eXBlb2Ygc2l6ZTtcbiAgY29uc3Qgc3BsaXR0ZWQgICAgICAgICAgPSBgJHtzaXplfWAuc3BsaXQoJyAnKTtcbiAgY29uc3QgaGFzTnVtYmVyTmVnYXRpdmUgPSBzcGxpdHRlZC5zb21lKChzaWRlKSA9PiBwYXJzZUZsb2F0KHNpZGUsIDEwKSA8IDApO1xuICBjb25zdCBpc1N0cmluZyAgICAgICAgICA9IHR5cGUgPT09ICdzdHJpbmcnO1xuICBjb25zdCBpc051bWJlciAgICAgICAgICA9IHR5cGUgPT09ICdudW1iZXInO1xuICBjb25zdCBpc051bWJlckFuZFZhbGlkICA9IChpc051bWJlciAmJiAoYWxsb3dOZWdhdGl2ZSB8fCAhaGFzTnVtYmVyTmVnYXRpdmUpKTtcbiAgY29uc3QgaXNTdHJpbmdBbmRWYWxpZCAgPSAoaXNTdHJpbmcgJiYgKGFsbG93TmVnYXRpdmUgfHwgIWhhc051bWJlck5lZ2F0aXZlKSk7XG5cbiAgcmV0dXJuICghaXNOdW1iZXIgJiYgIWlzU3RyaW5nKSA/IG51bGwgOiAoXG4gICAgaXNTdHJpbmdBbmRWYWxpZCA/IHNpemUgOiAoXG4gICAgICBpc051bWJlckFuZFZhbGlkID8gYCR7c2l6ZX1weGAgOiBudWxsXG4gICAgKVxuICApO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGJvcmRlci1yYWRpdXMgYmFzZWQgb24gcmVjZWl2ZWQgY29tcG9uZW50IHByb3BzLlxuICogSW4gY2FzZSBvZiBpbmV4aXN0ZW50IHJhZGl1cyBwcm9wcywgd2lsbCBub3QgYXBwbHkgYW55IENTUy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IHByb3BzOiBib3JkZXJSYWRpdXMgb3IgcmFkaXVzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY3NzIHJ1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXMoe1xuICBhcGhyYWRpdXMsXG4gIGFwaFJhZGl1cyxcbiAgYm9yZGVyUmFkaXVzLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzLFxuICBib3JkZXJUb3BSaWdodFJhZGl1cyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMsXG4gIHJhZGl1cyxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBocmFkaXVzKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaFJhZGl1cyl9O1xuICAgIGJvcmRlci1yYWRpdXMgICAgICAgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShyYWRpdXMpfTtcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyUmFkaXVzKX07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyAgICA6ICR7dmFsaWRhdGVTaXplKGJvcmRlclRvcExlZnRSYWRpdXMpfTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyVG9wUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tTGVmdFJhZGl1cyl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGhlaWdodCBhbmQgbWluLWhlaWdodCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGhlaWdodCBvciBtaW5IZWlnaHRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlaWdodCh7XG4gIGFwaGhlaWdodCxcbiAgYXBoSGVpZ2h0LFxuICBhcGhtaW5oZWlnaHQsXG4gIGFwaE1pbkhlaWdodCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgaGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhoZWlnaHQpfTtcbiAgICBoZWlnaHQ6ICR7dmFsaWRhdGVTaXplKGFwaEhlaWdodCl9O1xuICAgIGhlaWdodDogJHt2YWxpZGF0ZVNpemUoaGVpZ2h0KX07XG5cbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhtaW5oZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhNaW5IZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShtaW5IZWlnaHQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBtYXJnaW5zIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCBtYXJnaW4gcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogbWFyZ2luLCBtYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmdpbih7XG4gIGFwaG1hcmdpbixcbiAgYXBoTWFyZ2luLFxuICBtYXJnaW4sXG4gIG1hcmdpblRvcCxcbiAgbWFyZ2luUmlnaHQsXG4gIG1hcmdpbkJvdHRvbSxcbiAgbWFyZ2luTGVmdCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhNYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4tdG9wICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5Ub3AsIHRydWUpfTtcbiAgICBtYXJnaW4tcmlnaHQgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5SaWdodCwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dmFsaWRhdGVTaXplKG1hcmdpbkJvdHRvbSwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1sZWZ0ICA6ICR7dmFsaWRhdGVTaXplKG1hcmdpbkxlZnQsIHRydWUpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBwYWRkaW5ncyBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcGFkZGluZ3MgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogcGFkZGluZywgcGFkZGluZ1RvcCwgcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm90dG9tLCBwYWRkaW5nTGVmdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBydWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkZGluZyh7XG4gIGFwaHBhZGRpbmcsXG4gIGFwaFBhZGRpbmcsXG4gIHBhZGRpbmcsXG4gIHBhZGRpbmdUb3AsXG4gIHBhZGRpbmdSaWdodCxcbiAgcGFkZGluZ0JvdHRvbSxcbiAgcGFkZGluZ0xlZnQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgcGFkZGluZyAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaHBhZGRpbmcpfTtcbiAgICBwYWRkaW5nICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBoUGFkZGluZyl9O1xuICAgIHBhZGRpbmcgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShwYWRkaW5nKX07XG4gICAgcGFkZGluZy10b3AgICA6ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdUb3ApfTtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ1JpZ2h0KX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdCb3R0b20pfTtcbiAgICBwYWRkaW5nLWxlZnQgIDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ0xlZnQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyB3aWR0aCBhbmQgbWluLXdpZHRoIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCByYWRpdXMgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogd2lkdGggb3IgbWluV2lkdGhcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpZHRoKHtcbiAgYXBod2lkdGgsXG4gIGFwaFdpZHRoLFxuICBhcGhtaW53aWR0aCxcbiAgYXBoTWluV2lkdGgsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBod2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBoV2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUod2lkdGgpfTtcblxuICAgIG1pbi13aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBobWlud2lkdGgpfTtcbiAgICBtaW4td2lkdGg6ICR7dmFsaWRhdGVTaXplKGFwaE1pbldpZHRoKX07XG4gICAgbWluLXdpZHRoOiAke3ZhbGlkYXRlU2l6ZShtaW5XaWR0aCl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIHNpemVzIHRvIGJvcmRlciByYWRpdXMsIG1hcmdpbnMgYW5kIHBhZGRpbmdzLCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGJvcmRlclJhZGl1cyBvciByYWRpdXNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVzKHByb3BzKSB7XG4gIHJldHVybiBjc3NgXG4gICAgJHt3aWR0aChwcm9wcyl9O1xuICAgICR7aGVpZ2h0KHByb3BzKX07XG4gICAgJHttYXJnaW4ocHJvcHMpfTtcbiAgICAke3BhZGRpbmcocHJvcHMpfTtcbiAgICAke2JvcmRlclJhZGl1cyhwcm9wcyl9O1xuICBgO1xufVxuIl19 */"));
}
function margin(_ref3) {
  var aphmargin = _ref3.aphmargin,
      aphMargin = _ref3.aphMargin,
      margin = _ref3.margin,
      marginTop = _ref3.marginTop,
      marginRight = _ref3.marginRight,
      marginBottom = _ref3.marginBottom,
      marginLeft = _ref3.marginLeft;
  return /*#__PURE__*/css("margin:", validateSize(aphmargin, true), ";margin:", validateSize(aphMargin, true), ";margin:", validateSize(margin, true), ";margin-top:", validateSize(marginTop, true), ";margin-right:", validateSize(marginRight, true), ";margin-bottom:", validateSize(marginBottom, true), ";margin-left:", validateSize(marginLeft, true), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9HWSIsImZpbGUiOiJzaXplcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBzIHRvIGRlY2lkZSBpZiBzb21lIHNpemUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHNpemVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgYWxsb3dOZWdhdGl2ZVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R8c3RyaW5nfSBpbiBjYXNlIG9mIGludmFsaWQsIHJldHVybnMgYG51bGxgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNpemUoc2l6ZSwgYWxsb3dOZWdhdGl2ZSA9IGZhbHNlKXtcbiAgY29uc3QgdHlwZSAgICAgICAgICAgICAgPSB0eXBlb2Ygc2l6ZTtcbiAgY29uc3Qgc3BsaXR0ZWQgICAgICAgICAgPSBgJHtzaXplfWAuc3BsaXQoJyAnKTtcbiAgY29uc3QgaGFzTnVtYmVyTmVnYXRpdmUgPSBzcGxpdHRlZC5zb21lKChzaWRlKSA9PiBwYXJzZUZsb2F0KHNpZGUsIDEwKSA8IDApO1xuICBjb25zdCBpc1N0cmluZyAgICAgICAgICA9IHR5cGUgPT09ICdzdHJpbmcnO1xuICBjb25zdCBpc051bWJlciAgICAgICAgICA9IHR5cGUgPT09ICdudW1iZXInO1xuICBjb25zdCBpc051bWJlckFuZFZhbGlkICA9IChpc051bWJlciAmJiAoYWxsb3dOZWdhdGl2ZSB8fCAhaGFzTnVtYmVyTmVnYXRpdmUpKTtcbiAgY29uc3QgaXNTdHJpbmdBbmRWYWxpZCAgPSAoaXNTdHJpbmcgJiYgKGFsbG93TmVnYXRpdmUgfHwgIWhhc051bWJlck5lZ2F0aXZlKSk7XG5cbiAgcmV0dXJuICghaXNOdW1iZXIgJiYgIWlzU3RyaW5nKSA/IG51bGwgOiAoXG4gICAgaXNTdHJpbmdBbmRWYWxpZCA/IHNpemUgOiAoXG4gICAgICBpc051bWJlckFuZFZhbGlkID8gYCR7c2l6ZX1weGAgOiBudWxsXG4gICAgKVxuICApO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGJvcmRlci1yYWRpdXMgYmFzZWQgb24gcmVjZWl2ZWQgY29tcG9uZW50IHByb3BzLlxuICogSW4gY2FzZSBvZiBpbmV4aXN0ZW50IHJhZGl1cyBwcm9wcywgd2lsbCBub3QgYXBwbHkgYW55IENTUy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IHByb3BzOiBib3JkZXJSYWRpdXMgb3IgcmFkaXVzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY3NzIHJ1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXMoe1xuICBhcGhyYWRpdXMsXG4gIGFwaFJhZGl1cyxcbiAgYm9yZGVyUmFkaXVzLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzLFxuICBib3JkZXJUb3BSaWdodFJhZGl1cyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMsXG4gIHJhZGl1cyxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBocmFkaXVzKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaFJhZGl1cyl9O1xuICAgIGJvcmRlci1yYWRpdXMgICAgICAgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShyYWRpdXMpfTtcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyUmFkaXVzKX07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyAgICA6ICR7dmFsaWRhdGVTaXplKGJvcmRlclRvcExlZnRSYWRpdXMpfTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyVG9wUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tTGVmdFJhZGl1cyl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGhlaWdodCBhbmQgbWluLWhlaWdodCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGhlaWdodCBvciBtaW5IZWlnaHRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlaWdodCh7XG4gIGFwaGhlaWdodCxcbiAgYXBoSGVpZ2h0LFxuICBhcGhtaW5oZWlnaHQsXG4gIGFwaE1pbkhlaWdodCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgaGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhoZWlnaHQpfTtcbiAgICBoZWlnaHQ6ICR7dmFsaWRhdGVTaXplKGFwaEhlaWdodCl9O1xuICAgIGhlaWdodDogJHt2YWxpZGF0ZVNpemUoaGVpZ2h0KX07XG5cbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhtaW5oZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhNaW5IZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShtaW5IZWlnaHQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBtYXJnaW5zIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCBtYXJnaW4gcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogbWFyZ2luLCBtYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmdpbih7XG4gIGFwaG1hcmdpbixcbiAgYXBoTWFyZ2luLFxuICBtYXJnaW4sXG4gIG1hcmdpblRvcCxcbiAgbWFyZ2luUmlnaHQsXG4gIG1hcmdpbkJvdHRvbSxcbiAgbWFyZ2luTGVmdCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhNYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4tdG9wICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5Ub3AsIHRydWUpfTtcbiAgICBtYXJnaW4tcmlnaHQgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5SaWdodCwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dmFsaWRhdGVTaXplKG1hcmdpbkJvdHRvbSwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1sZWZ0ICA6ICR7dmFsaWRhdGVTaXplKG1hcmdpbkxlZnQsIHRydWUpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBwYWRkaW5ncyBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcGFkZGluZ3MgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogcGFkZGluZywgcGFkZGluZ1RvcCwgcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm90dG9tLCBwYWRkaW5nTGVmdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBydWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkZGluZyh7XG4gIGFwaHBhZGRpbmcsXG4gIGFwaFBhZGRpbmcsXG4gIHBhZGRpbmcsXG4gIHBhZGRpbmdUb3AsXG4gIHBhZGRpbmdSaWdodCxcbiAgcGFkZGluZ0JvdHRvbSxcbiAgcGFkZGluZ0xlZnQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgcGFkZGluZyAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaHBhZGRpbmcpfTtcbiAgICBwYWRkaW5nICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBoUGFkZGluZyl9O1xuICAgIHBhZGRpbmcgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShwYWRkaW5nKX07XG4gICAgcGFkZGluZy10b3AgICA6ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdUb3ApfTtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ1JpZ2h0KX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdCb3R0b20pfTtcbiAgICBwYWRkaW5nLWxlZnQgIDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ0xlZnQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyB3aWR0aCBhbmQgbWluLXdpZHRoIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCByYWRpdXMgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogd2lkdGggb3IgbWluV2lkdGhcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpZHRoKHtcbiAgYXBod2lkdGgsXG4gIGFwaFdpZHRoLFxuICBhcGhtaW53aWR0aCxcbiAgYXBoTWluV2lkdGgsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBod2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBoV2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUod2lkdGgpfTtcblxuICAgIG1pbi13aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBobWlud2lkdGgpfTtcbiAgICBtaW4td2lkdGg6ICR7dmFsaWRhdGVTaXplKGFwaE1pbldpZHRoKX07XG4gICAgbWluLXdpZHRoOiAke3ZhbGlkYXRlU2l6ZShtaW5XaWR0aCl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIHNpemVzIHRvIGJvcmRlciByYWRpdXMsIG1hcmdpbnMgYW5kIHBhZGRpbmdzLCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGJvcmRlclJhZGl1cyBvciByYWRpdXNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVzKHByb3BzKSB7XG4gIHJldHVybiBjc3NgXG4gICAgJHt3aWR0aChwcm9wcyl9O1xuICAgICR7aGVpZ2h0KHByb3BzKX07XG4gICAgJHttYXJnaW4ocHJvcHMpfTtcbiAgICAke3BhZGRpbmcocHJvcHMpfTtcbiAgICAke2JvcmRlclJhZGl1cyhwcm9wcyl9O1xuICBgO1xufVxuIl19 */"));
}
function padding(_ref4) {
  var aphpadding = _ref4.aphpadding,
      aphPadding = _ref4.aphPadding,
      padding = _ref4.padding,
      paddingTop = _ref4.paddingTop,
      paddingRight = _ref4.paddingRight,
      paddingBottom = _ref4.paddingBottom,
      paddingLeft = _ref4.paddingLeft;
  return /*#__PURE__*/css("padding:", validateSize(aphpadding), ";padding:", validateSize(aphPadding), ";padding:", validateSize(padding), ";padding-top:", validateSize(paddingTop), ";padding-right:", validateSize(paddingRight), ";padding-bottom:", validateSize(paddingBottom), ";padding-left:", validateSize(paddingLeft), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdJWSIsImZpbGUiOiJzaXplcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBzIHRvIGRlY2lkZSBpZiBzb21lIHNpemUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHNpemVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgYWxsb3dOZWdhdGl2ZVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R8c3RyaW5nfSBpbiBjYXNlIG9mIGludmFsaWQsIHJldHVybnMgYG51bGxgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNpemUoc2l6ZSwgYWxsb3dOZWdhdGl2ZSA9IGZhbHNlKXtcbiAgY29uc3QgdHlwZSAgICAgICAgICAgICAgPSB0eXBlb2Ygc2l6ZTtcbiAgY29uc3Qgc3BsaXR0ZWQgICAgICAgICAgPSBgJHtzaXplfWAuc3BsaXQoJyAnKTtcbiAgY29uc3QgaGFzTnVtYmVyTmVnYXRpdmUgPSBzcGxpdHRlZC5zb21lKChzaWRlKSA9PiBwYXJzZUZsb2F0KHNpZGUsIDEwKSA8IDApO1xuICBjb25zdCBpc1N0cmluZyAgICAgICAgICA9IHR5cGUgPT09ICdzdHJpbmcnO1xuICBjb25zdCBpc051bWJlciAgICAgICAgICA9IHR5cGUgPT09ICdudW1iZXInO1xuICBjb25zdCBpc051bWJlckFuZFZhbGlkICA9IChpc051bWJlciAmJiAoYWxsb3dOZWdhdGl2ZSB8fCAhaGFzTnVtYmVyTmVnYXRpdmUpKTtcbiAgY29uc3QgaXNTdHJpbmdBbmRWYWxpZCAgPSAoaXNTdHJpbmcgJiYgKGFsbG93TmVnYXRpdmUgfHwgIWhhc051bWJlck5lZ2F0aXZlKSk7XG5cbiAgcmV0dXJuICghaXNOdW1iZXIgJiYgIWlzU3RyaW5nKSA/IG51bGwgOiAoXG4gICAgaXNTdHJpbmdBbmRWYWxpZCA/IHNpemUgOiAoXG4gICAgICBpc051bWJlckFuZFZhbGlkID8gYCR7c2l6ZX1weGAgOiBudWxsXG4gICAgKVxuICApO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGJvcmRlci1yYWRpdXMgYmFzZWQgb24gcmVjZWl2ZWQgY29tcG9uZW50IHByb3BzLlxuICogSW4gY2FzZSBvZiBpbmV4aXN0ZW50IHJhZGl1cyBwcm9wcywgd2lsbCBub3QgYXBwbHkgYW55IENTUy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IHByb3BzOiBib3JkZXJSYWRpdXMgb3IgcmFkaXVzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY3NzIHJ1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXMoe1xuICBhcGhyYWRpdXMsXG4gIGFwaFJhZGl1cyxcbiAgYm9yZGVyUmFkaXVzLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzLFxuICBib3JkZXJUb3BSaWdodFJhZGl1cyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMsXG4gIHJhZGl1cyxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBocmFkaXVzKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaFJhZGl1cyl9O1xuICAgIGJvcmRlci1yYWRpdXMgICAgICAgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShyYWRpdXMpfTtcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyUmFkaXVzKX07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyAgICA6ICR7dmFsaWRhdGVTaXplKGJvcmRlclRvcExlZnRSYWRpdXMpfTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyVG9wUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tTGVmdFJhZGl1cyl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGhlaWdodCBhbmQgbWluLWhlaWdodCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGhlaWdodCBvciBtaW5IZWlnaHRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlaWdodCh7XG4gIGFwaGhlaWdodCxcbiAgYXBoSGVpZ2h0LFxuICBhcGhtaW5oZWlnaHQsXG4gIGFwaE1pbkhlaWdodCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgaGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhoZWlnaHQpfTtcbiAgICBoZWlnaHQ6ICR7dmFsaWRhdGVTaXplKGFwaEhlaWdodCl9O1xuICAgIGhlaWdodDogJHt2YWxpZGF0ZVNpemUoaGVpZ2h0KX07XG5cbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhtaW5oZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhNaW5IZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShtaW5IZWlnaHQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBtYXJnaW5zIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCBtYXJnaW4gcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogbWFyZ2luLCBtYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmdpbih7XG4gIGFwaG1hcmdpbixcbiAgYXBoTWFyZ2luLFxuICBtYXJnaW4sXG4gIG1hcmdpblRvcCxcbiAgbWFyZ2luUmlnaHQsXG4gIG1hcmdpbkJvdHRvbSxcbiAgbWFyZ2luTGVmdCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhNYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4tdG9wICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5Ub3AsIHRydWUpfTtcbiAgICBtYXJnaW4tcmlnaHQgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5SaWdodCwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dmFsaWRhdGVTaXplKG1hcmdpbkJvdHRvbSwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1sZWZ0ICA6ICR7dmFsaWRhdGVTaXplKG1hcmdpbkxlZnQsIHRydWUpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBwYWRkaW5ncyBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcGFkZGluZ3MgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogcGFkZGluZywgcGFkZGluZ1RvcCwgcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm90dG9tLCBwYWRkaW5nTGVmdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBydWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkZGluZyh7XG4gIGFwaHBhZGRpbmcsXG4gIGFwaFBhZGRpbmcsXG4gIHBhZGRpbmcsXG4gIHBhZGRpbmdUb3AsXG4gIHBhZGRpbmdSaWdodCxcbiAgcGFkZGluZ0JvdHRvbSxcbiAgcGFkZGluZ0xlZnQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgcGFkZGluZyAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaHBhZGRpbmcpfTtcbiAgICBwYWRkaW5nICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBoUGFkZGluZyl9O1xuICAgIHBhZGRpbmcgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShwYWRkaW5nKX07XG4gICAgcGFkZGluZy10b3AgICA6ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdUb3ApfTtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ1JpZ2h0KX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdCb3R0b20pfTtcbiAgICBwYWRkaW5nLWxlZnQgIDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ0xlZnQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyB3aWR0aCBhbmQgbWluLXdpZHRoIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCByYWRpdXMgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogd2lkdGggb3IgbWluV2lkdGhcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpZHRoKHtcbiAgYXBod2lkdGgsXG4gIGFwaFdpZHRoLFxuICBhcGhtaW53aWR0aCxcbiAgYXBoTWluV2lkdGgsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBod2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBoV2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUod2lkdGgpfTtcblxuICAgIG1pbi13aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBobWlud2lkdGgpfTtcbiAgICBtaW4td2lkdGg6ICR7dmFsaWRhdGVTaXplKGFwaE1pbldpZHRoKX07XG4gICAgbWluLXdpZHRoOiAke3ZhbGlkYXRlU2l6ZShtaW5XaWR0aCl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIHNpemVzIHRvIGJvcmRlciByYWRpdXMsIG1hcmdpbnMgYW5kIHBhZGRpbmdzLCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGJvcmRlclJhZGl1cyBvciByYWRpdXNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVzKHByb3BzKSB7XG4gIHJldHVybiBjc3NgXG4gICAgJHt3aWR0aChwcm9wcyl9O1xuICAgICR7aGVpZ2h0KHByb3BzKX07XG4gICAgJHttYXJnaW4ocHJvcHMpfTtcbiAgICAke3BhZGRpbmcocHJvcHMpfTtcbiAgICAke2JvcmRlclJhZGl1cyhwcm9wcyl9O1xuICBgO1xufVxuIl19 */"));
}
function width(_ref5) {
  var aphwidth = _ref5.aphwidth,
      aphWidth = _ref5.aphWidth,
      aphminwidth = _ref5.aphminwidth,
      aphMinWidth = _ref5.aphMinWidth,
      width = _ref5.width,
      minWidth = _ref5.minWidth;
  return /*#__PURE__*/css("width:", validateSize(aphwidth), ";width:", validateSize(aphWidth), ";width:", validateSize(width), ";min-width:", validateSize(aphminwidth), ";min-width:", validateSize(aphMinWidth), ";min-width:", validateSize(minWidth), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJKWSIsImZpbGUiOiJzaXplcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBzIHRvIGRlY2lkZSBpZiBzb21lIHNpemUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHNpemVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgYWxsb3dOZWdhdGl2ZVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R8c3RyaW5nfSBpbiBjYXNlIG9mIGludmFsaWQsIHJldHVybnMgYG51bGxgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNpemUoc2l6ZSwgYWxsb3dOZWdhdGl2ZSA9IGZhbHNlKXtcbiAgY29uc3QgdHlwZSAgICAgICAgICAgICAgPSB0eXBlb2Ygc2l6ZTtcbiAgY29uc3Qgc3BsaXR0ZWQgICAgICAgICAgPSBgJHtzaXplfWAuc3BsaXQoJyAnKTtcbiAgY29uc3QgaGFzTnVtYmVyTmVnYXRpdmUgPSBzcGxpdHRlZC5zb21lKChzaWRlKSA9PiBwYXJzZUZsb2F0KHNpZGUsIDEwKSA8IDApO1xuICBjb25zdCBpc1N0cmluZyAgICAgICAgICA9IHR5cGUgPT09ICdzdHJpbmcnO1xuICBjb25zdCBpc051bWJlciAgICAgICAgICA9IHR5cGUgPT09ICdudW1iZXInO1xuICBjb25zdCBpc051bWJlckFuZFZhbGlkICA9IChpc051bWJlciAmJiAoYWxsb3dOZWdhdGl2ZSB8fCAhaGFzTnVtYmVyTmVnYXRpdmUpKTtcbiAgY29uc3QgaXNTdHJpbmdBbmRWYWxpZCAgPSAoaXNTdHJpbmcgJiYgKGFsbG93TmVnYXRpdmUgfHwgIWhhc051bWJlck5lZ2F0aXZlKSk7XG5cbiAgcmV0dXJuICghaXNOdW1iZXIgJiYgIWlzU3RyaW5nKSA/IG51bGwgOiAoXG4gICAgaXNTdHJpbmdBbmRWYWxpZCA/IHNpemUgOiAoXG4gICAgICBpc051bWJlckFuZFZhbGlkID8gYCR7c2l6ZX1weGAgOiBudWxsXG4gICAgKVxuICApO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGJvcmRlci1yYWRpdXMgYmFzZWQgb24gcmVjZWl2ZWQgY29tcG9uZW50IHByb3BzLlxuICogSW4gY2FzZSBvZiBpbmV4aXN0ZW50IHJhZGl1cyBwcm9wcywgd2lsbCBub3QgYXBwbHkgYW55IENTUy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IHByb3BzOiBib3JkZXJSYWRpdXMgb3IgcmFkaXVzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY3NzIHJ1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXMoe1xuICBhcGhyYWRpdXMsXG4gIGFwaFJhZGl1cyxcbiAgYm9yZGVyUmFkaXVzLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzLFxuICBib3JkZXJUb3BSaWdodFJhZGl1cyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMsXG4gIHJhZGl1cyxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBocmFkaXVzKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaFJhZGl1cyl9O1xuICAgIGJvcmRlci1yYWRpdXMgICAgICAgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShyYWRpdXMpfTtcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyUmFkaXVzKX07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyAgICA6ICR7dmFsaWRhdGVTaXplKGJvcmRlclRvcExlZnRSYWRpdXMpfTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyVG9wUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tTGVmdFJhZGl1cyl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGhlaWdodCBhbmQgbWluLWhlaWdodCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGhlaWdodCBvciBtaW5IZWlnaHRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlaWdodCh7XG4gIGFwaGhlaWdodCxcbiAgYXBoSGVpZ2h0LFxuICBhcGhtaW5oZWlnaHQsXG4gIGFwaE1pbkhlaWdodCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgaGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhoZWlnaHQpfTtcbiAgICBoZWlnaHQ6ICR7dmFsaWRhdGVTaXplKGFwaEhlaWdodCl9O1xuICAgIGhlaWdodDogJHt2YWxpZGF0ZVNpemUoaGVpZ2h0KX07XG5cbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhtaW5oZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhNaW5IZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShtaW5IZWlnaHQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBtYXJnaW5zIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCBtYXJnaW4gcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogbWFyZ2luLCBtYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmdpbih7XG4gIGFwaG1hcmdpbixcbiAgYXBoTWFyZ2luLFxuICBtYXJnaW4sXG4gIG1hcmdpblRvcCxcbiAgbWFyZ2luUmlnaHQsXG4gIG1hcmdpbkJvdHRvbSxcbiAgbWFyZ2luTGVmdCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhNYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4tdG9wICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5Ub3AsIHRydWUpfTtcbiAgICBtYXJnaW4tcmlnaHQgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5SaWdodCwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dmFsaWRhdGVTaXplKG1hcmdpbkJvdHRvbSwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1sZWZ0ICA6ICR7dmFsaWRhdGVTaXplKG1hcmdpbkxlZnQsIHRydWUpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBwYWRkaW5ncyBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcGFkZGluZ3MgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogcGFkZGluZywgcGFkZGluZ1RvcCwgcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm90dG9tLCBwYWRkaW5nTGVmdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBydWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkZGluZyh7XG4gIGFwaHBhZGRpbmcsXG4gIGFwaFBhZGRpbmcsXG4gIHBhZGRpbmcsXG4gIHBhZGRpbmdUb3AsXG4gIHBhZGRpbmdSaWdodCxcbiAgcGFkZGluZ0JvdHRvbSxcbiAgcGFkZGluZ0xlZnQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgcGFkZGluZyAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaHBhZGRpbmcpfTtcbiAgICBwYWRkaW5nICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBoUGFkZGluZyl9O1xuICAgIHBhZGRpbmcgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShwYWRkaW5nKX07XG4gICAgcGFkZGluZy10b3AgICA6ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdUb3ApfTtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ1JpZ2h0KX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdCb3R0b20pfTtcbiAgICBwYWRkaW5nLWxlZnQgIDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ0xlZnQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyB3aWR0aCBhbmQgbWluLXdpZHRoIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCByYWRpdXMgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogd2lkdGggb3IgbWluV2lkdGhcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpZHRoKHtcbiAgYXBod2lkdGgsXG4gIGFwaFdpZHRoLFxuICBhcGhtaW53aWR0aCxcbiAgYXBoTWluV2lkdGgsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBod2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBoV2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUod2lkdGgpfTtcblxuICAgIG1pbi13aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBobWlud2lkdGgpfTtcbiAgICBtaW4td2lkdGg6ICR7dmFsaWRhdGVTaXplKGFwaE1pbldpZHRoKX07XG4gICAgbWluLXdpZHRoOiAke3ZhbGlkYXRlU2l6ZShtaW5XaWR0aCl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIHNpemVzIHRvIGJvcmRlciByYWRpdXMsIG1hcmdpbnMgYW5kIHBhZGRpbmdzLCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGJvcmRlclJhZGl1cyBvciByYWRpdXNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVzKHByb3BzKSB7XG4gIHJldHVybiBjc3NgXG4gICAgJHt3aWR0aChwcm9wcyl9O1xuICAgICR7aGVpZ2h0KHByb3BzKX07XG4gICAgJHttYXJnaW4ocHJvcHMpfTtcbiAgICAke3BhZGRpbmcocHJvcHMpfTtcbiAgICAke2JvcmRlclJhZGl1cyhwcm9wcyl9O1xuICBgO1xufVxuIl19 */"));
}
function sizes(props) {
  return /*#__PURE__*/css(width(props), ";", height(props), ";", margin(props), ";", padding(props), ";", borderRadius(props), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStLWSIsImZpbGUiOiJzaXplcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKipcbiAqIEhlbHBzIHRvIGRlY2lkZSBpZiBzb21lIHNpemUgaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHNpemVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gICAgICAgYWxsb3dOZWdhdGl2ZVxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R8c3RyaW5nfSBpbiBjYXNlIG9mIGludmFsaWQsIHJldHVybnMgYG51bGxgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVNpemUoc2l6ZSwgYWxsb3dOZWdhdGl2ZSA9IGZhbHNlKXtcbiAgY29uc3QgdHlwZSAgICAgICAgICAgICAgPSB0eXBlb2Ygc2l6ZTtcbiAgY29uc3Qgc3BsaXR0ZWQgICAgICAgICAgPSBgJHtzaXplfWAuc3BsaXQoJyAnKTtcbiAgY29uc3QgaGFzTnVtYmVyTmVnYXRpdmUgPSBzcGxpdHRlZC5zb21lKChzaWRlKSA9PiBwYXJzZUZsb2F0KHNpZGUsIDEwKSA8IDApO1xuICBjb25zdCBpc1N0cmluZyAgICAgICAgICA9IHR5cGUgPT09ICdzdHJpbmcnO1xuICBjb25zdCBpc051bWJlciAgICAgICAgICA9IHR5cGUgPT09ICdudW1iZXInO1xuICBjb25zdCBpc051bWJlckFuZFZhbGlkICA9IChpc051bWJlciAmJiAoYWxsb3dOZWdhdGl2ZSB8fCAhaGFzTnVtYmVyTmVnYXRpdmUpKTtcbiAgY29uc3QgaXNTdHJpbmdBbmRWYWxpZCAgPSAoaXNTdHJpbmcgJiYgKGFsbG93TmVnYXRpdmUgfHwgIWhhc051bWJlck5lZ2F0aXZlKSk7XG5cbiAgcmV0dXJuICghaXNOdW1iZXIgJiYgIWlzU3RyaW5nKSA/IG51bGwgOiAoXG4gICAgaXNTdHJpbmdBbmRWYWxpZCA/IHNpemUgOiAoXG4gICAgICBpc051bWJlckFuZFZhbGlkID8gYCR7c2l6ZX1weGAgOiBudWxsXG4gICAgKVxuICApO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGJvcmRlci1yYWRpdXMgYmFzZWQgb24gcmVjZWl2ZWQgY29tcG9uZW50IHByb3BzLlxuICogSW4gY2FzZSBvZiBpbmV4aXN0ZW50IHJhZGl1cyBwcm9wcywgd2lsbCBub3QgYXBwbHkgYW55IENTUy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29tcG9uZW50IHByb3BzOiBib3JkZXJSYWRpdXMgb3IgcmFkaXVzXG4gKlxuICogQHJldHVybnMge3N0cmluZ30gY3NzIHJ1bGVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXMoe1xuICBhcGhyYWRpdXMsXG4gIGFwaFJhZGl1cyxcbiAgYm9yZGVyUmFkaXVzLFxuICBib3JkZXJUb3BMZWZ0UmFkaXVzLFxuICBib3JkZXJUb3BSaWdodFJhZGl1cyxcbiAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsXG4gIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMsXG4gIHJhZGl1cyxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBocmFkaXVzKX07XG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaFJhZGl1cyl9O1xuICAgIGJvcmRlci1yYWRpdXMgICAgICAgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShyYWRpdXMpfTtcbiAgICBib3JkZXItcmFkaXVzICAgICAgICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyUmFkaXVzKX07XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyAgICA6ICR7dmFsaWRhdGVTaXplKGJvcmRlclRvcExlZnRSYWRpdXMpfTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1cyAgIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyVG9wUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMpfTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzIDogJHt2YWxpZGF0ZVNpemUoYm9yZGVyQm90dG9tTGVmdFJhZGl1cyl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIGhlaWdodCBhbmQgbWluLWhlaWdodCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGhlaWdodCBvciBtaW5IZWlnaHRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhlaWdodCh7XG4gIGFwaGhlaWdodCxcbiAgYXBoSGVpZ2h0LFxuICBhcGhtaW5oZWlnaHQsXG4gIGFwaE1pbkhlaWdodCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgaGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhoZWlnaHQpfTtcbiAgICBoZWlnaHQ6ICR7dmFsaWRhdGVTaXplKGFwaEhlaWdodCl9O1xuICAgIGhlaWdodDogJHt2YWxpZGF0ZVNpemUoaGVpZ2h0KX07XG5cbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhtaW5oZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShhcGhNaW5IZWlnaHQpfTtcbiAgICBtaW4taGVpZ2h0OiAke3ZhbGlkYXRlU2l6ZShtaW5IZWlnaHQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBtYXJnaW5zIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCBtYXJnaW4gcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogbWFyZ2luLCBtYXJnaW5Ub3AsIG1hcmdpblJpZ2h0LCBtYXJnaW5Cb3R0b20sIG1hcmdpbkxlZnRcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmdpbih7XG4gIGFwaG1hcmdpbixcbiAgYXBoTWFyZ2luLFxuICBtYXJnaW4sXG4gIG1hcmdpblRvcCxcbiAgbWFyZ2luUmlnaHQsXG4gIG1hcmdpbkJvdHRvbSxcbiAgbWFyZ2luTGVmdCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShhcGhNYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4gICAgICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW4sIHRydWUpfTtcbiAgICBtYXJnaW4tdG9wICAgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5Ub3AsIHRydWUpfTtcbiAgICBtYXJnaW4tcmlnaHQgOiAke3ZhbGlkYXRlU2l6ZShtYXJnaW5SaWdodCwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dmFsaWRhdGVTaXplKG1hcmdpbkJvdHRvbSwgdHJ1ZSl9O1xuICAgIG1hcmdpbi1sZWZ0ICA6ICR7dmFsaWRhdGVTaXplKG1hcmdpbkxlZnQsIHRydWUpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyBwYWRkaW5ncyBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcGFkZGluZ3MgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogcGFkZGluZywgcGFkZGluZ1RvcCwgcGFkZGluZ1JpZ2h0LCBwYWRkaW5nQm90dG9tLCBwYWRkaW5nTGVmdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGNzcyBydWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkZGluZyh7XG4gIGFwaHBhZGRpbmcsXG4gIGFwaFBhZGRpbmcsXG4gIHBhZGRpbmcsXG4gIHBhZGRpbmdUb3AsXG4gIHBhZGRpbmdSaWdodCxcbiAgcGFkZGluZ0JvdHRvbSxcbiAgcGFkZGluZ0xlZnQsXG59KSB7XG4gIHJldHVybiBjc3NgXG4gICAgcGFkZGluZyAgICAgICA6ICR7dmFsaWRhdGVTaXplKGFwaHBhZGRpbmcpfTtcbiAgICBwYWRkaW5nICAgICAgIDogJHt2YWxpZGF0ZVNpemUoYXBoUGFkZGluZyl9O1xuICAgIHBhZGRpbmcgICAgICAgOiAke3ZhbGlkYXRlU2l6ZShwYWRkaW5nKX07XG4gICAgcGFkZGluZy10b3AgICA6ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdUb3ApfTtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ1JpZ2h0KX07XG4gICAgcGFkZGluZy1ib3R0b206ICR7dmFsaWRhdGVTaXplKHBhZGRpbmdCb3R0b20pfTtcbiAgICBwYWRkaW5nLWxlZnQgIDogJHt2YWxpZGF0ZVNpemUocGFkZGluZ0xlZnQpfTtcbiAgYDtcbn1cblxuLyoqXG4gKiBBcHBsaWVzIENTUyB3aWR0aCBhbmQgbWluLXdpZHRoIGJhc2VkIG9uIHJlY2VpdmVkIGNvbXBvbmVudCBwcm9wcy5cbiAqIEluIGNhc2Ugb2YgaW5leGlzdGVudCByYWRpdXMgcHJvcHMsIHdpbGwgbm90IGFwcGx5IGFueSBDU1MuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbXBvbmVudCBwcm9wczogd2lkdGggb3IgbWluV2lkdGhcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpZHRoKHtcbiAgYXBod2lkdGgsXG4gIGFwaFdpZHRoLFxuICBhcGhtaW53aWR0aCxcbiAgYXBoTWluV2lkdGgsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbn0pIHtcbiAgcmV0dXJuIGNzc2BcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBod2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBoV2lkdGgpfTtcbiAgICB3aWR0aDogJHt2YWxpZGF0ZVNpemUod2lkdGgpfTtcblxuICAgIG1pbi13aWR0aDogJHt2YWxpZGF0ZVNpemUoYXBobWlud2lkdGgpfTtcbiAgICBtaW4td2lkdGg6ICR7dmFsaWRhdGVTaXplKGFwaE1pbldpZHRoKX07XG4gICAgbWluLXdpZHRoOiAke3ZhbGlkYXRlU2l6ZShtaW5XaWR0aCl9O1xuICBgO1xufVxuXG4vKipcbiAqIEFwcGxpZXMgQ1NTIHNpemVzIHRvIGJvcmRlciByYWRpdXMsIG1hcmdpbnMgYW5kIHBhZGRpbmdzLCBiYXNlZCBvbiByZWNlaXZlZCBjb21wb25lbnQgcHJvcHMuXG4gKiBJbiBjYXNlIG9mIGluZXhpc3RlbnQgcmFkaXVzIHByb3BzLCB3aWxsIG5vdCBhcHBseSBhbnkgQ1NTLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb21wb25lbnQgcHJvcHM6IGJvcmRlclJhZGl1cyBvciByYWRpdXNcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgcnVsZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpemVzKHByb3BzKSB7XG4gIHJldHVybiBjc3NgXG4gICAgJHt3aWR0aChwcm9wcyl9O1xuICAgICR7aGVpZ2h0KHByb3BzKX07XG4gICAgJHttYXJnaW4ocHJvcHMpfTtcbiAgICAke3BhZGRpbmcocHJvcHMpfTtcbiAgICAke2JvcmRlclJhZGl1cyhwcm9wcyl9O1xuICBgO1xufVxuIl19 */"));
}

var styling = function styling(props) {
  return /*#__PURE__*/css(colorfull(props), ";", flex(props), ";", sizes(props), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUs4QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY29sb3JmdWxsIH0gZnJvbSAnLi9jb2xvcmZ1bGwnO1xuaW1wb3J0IHsgZmxleCB9IGZyb20gJy4vZmxleCc7XG5pbXBvcnQgeyBzaXplcyB9IGZyb20gJy4vc2l6ZXMnO1xuXG5jb25zdCBzdHlsaW5nID0gKHByb3BzKSA9PiBjc3NgXG4gICR7Y29sb3JmdWxsKHByb3BzKX07XG4gICR7ZmxleChwcm9wcyl9O1xuICAke3NpemVzKHByb3BzKX07XG5gO1xuXG5zdHlsaW5nLmNvbG9yZnVsbCA9IGNvbG9yZnVsbDtcbnN0eWxpbmcuZmxleCAgICAgID0gZmxleDtcbnN0eWxpbmcuc2l6ZXMgICAgID0gc2l6ZXM7XG5cbmV4cG9ydCB7IHN0eWxpbmcgfTtcbiJdfQ== */"));
};

styling.colorfull = colorfull;
styling.flex = flex;
styling.sizes = sizes;

var text = function text(props, size) {
  if (size === void 0) {
    size = '';
  }

  return "\n    " + (!props.margin ? '' : "\n        margin: " + props.margin + ";\n    ") + ";\n    " + (!props.padding ? '' : "\n        padding: " + props.padding + ";\n    ") + ";\n\n    " + textDefinitions(props, size) + ";\n    " + textSizes(props) + ";\n    " + textAlign(props) + ";\n    " + textTransform(props) + ";\n    " + textBreakAll(props) + ";\n    " + textColorfull(props) + ";\n    " + textTruncate(props) + ";\n";
};
var textAlign = function textAlign(props) {
  if (props === void 0) {
    props = {};
  }

  return !props.textAlign && !props.textLeft && !props.textCenter && !props.textRight ? '' : "\n    text-align: " + (props.textLeft ? 'left' : props.textCenter ? 'center' : props.textRight ? 'right' : props.textAlign) + ";\n";
};
var textBreakAll = function textBreakAll(props) {
  if (props === void 0) {
    props = {};
  }

  return !props.breakAll && !props.textBreakAll ? '' : "\n    word-break: break-all;\n";
};
var textColorfull = function textColorfull(props) {
  if (props === void 0) {
    props = {};
  }

  return !props.textColor && !props.link && !props.helper ? '' : "\n    color: " + colors$1.getFullColor(props, props.link ? 'link' : props.helper ? 'helper' : props.textColor) + ";\n";
};
var textDefinitions = function textDefinitions(props, size) {
  if (size === void 0) {
    size = '';
  }

  return "\n    font-size  : " + (!size ? '' : size.includes('px') ? size : SIZES[size.toUpperCase()].FONT_SIZE) + ";\n    line-height: " + (!size ? '' : size.includes('px') ? size : SIZES[size.toUpperCase()].LINE_HEIGHT) + ";\n";
};
var textSizes = function textSizes(_ref) {
  var bold = _ref.bold,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      lineHeight = _ref.lineHeight,
      textBold = _ref.textBold,
      textDecoration = _ref.textDecoration,
      textSmall = _ref.textSmall,
      textTransform = _ref.textTransform;
  return "\n    font-weight    : " + (bold || textBold ? 'bold' : fontWeight || '') + ";\n    font-size      : " + (textSmall ? '14px' : fontSize || '') + ";\n    line-height    : " + (lineHeight || '') + ";\n    text-decoration: " + (textDecoration || '') + ";\n    text-transform : " + (textTransform || '') + ";\n";
};
var textTransform = function textTransform(props) {
  if (props === void 0) {
    props = {};
  }

  return !props.textLower && !props.textUpper ? '' : "\n    text-transform: " + (props.textLower ? 'lowercase' : 'uppercase') + ";\n";
};
var textTruncate = function textTruncate(props) {
  if (props === void 0) {
    props = {};
  }

  return !props.truncate && !props.textTruncate ? '' : "\n    overflow     : hidden;\n    white-space  : nowrap;\n    text-overflow: ellipsis;\n";
};

var ActionBarStyled = _styled("div", {
  target: "e1cc56di0",
  label: "ActionBarStyled"
})("box-sizing:border-box;display:block;width:100%;min-height:", SIZES.ACTION_BAR_HEIGHT, ";z-index:", ZINDEX.ACTION_BAR, ";position:fixed;right:0;bottom:0;left:0;padding:20px 0;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse');
}, ";box-shadow:0 0 4px 0 ", function (props) {
  return colors$1.getFromTheme(props, 'shadow');
}, ";transform:translateY(110%);will-change:transform;transition:transform 0.3s ease-out 0s,background-color 0.2s linear;&.aph-action-bar--visible{transform:translateY(0);}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjdGlvbkJhclN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0MiLCJmaWxlIjoiQWN0aW9uQmFyU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVdGlsaXRpZXMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBTSVpFUywgWklOREVYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU3R5bGVzICovXG5jb25zdCBBY3Rpb25CYXJTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgd2lkdGggICAgIDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAke1NJWkVTLkFDVElPTl9CQVJfSEVJR0hUfTtcblxuICAgIHotaW5kZXggOiAke1pJTkRFWC5BQ1RJT05fQkFSfTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQgICA6IDA7XG4gICAgYm90dG9tICA6IDA7XG4gICAgbGVmdCAgICA6IDA7XG4gICAgcGFkZGluZyA6IDIwcHggMDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfTtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IDAgJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzaGFkb3cnKX07XG5cbiAgICB0cmFuc2Zvcm0gIDogdHJhbnNsYXRlWSgxMTAlKTtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24gOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCAwcywgYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcblxuICAgICYuYXBoLWFjdGlvbi1iYXItLXZpc2libGUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJhclN0eWxlZDtcbiJdfQ== */"));

var ActionBar = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      visible = _ref.visible,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "visible"]);

  return /*#__PURE__*/React.createElement(ActionBarStyled, _extends({}, rest, {
    ref: ref,
    className: "aph-action-bar" + (visible ? ' aph-action-bar--visible' : '') + " " + (className || '')
  }));
});
ActionBar.defaultProps = {
  visible: false,
  styles: {}
};
ActionBar.propTypes = {
  children: propTypes.any,
  visible: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var ImgStyled = /*#__PURE__*/_styled('img', {
  target: "e1hsdvom0",
  label: "ImgStyled"
})(function (props) {
  var center = props.center,
      circle = props.circle,
      rounded = props.rounded,
      radius = props.radius,
      maxWidthXS = props.maxWidthXS,
      withFadeIn = props.withFadeIn,
      styles = props.styles;
  var _extraStyles = {};

  if (center) {
    _extraStyles = _objectSpread2(_objectSpread2({}, _extraStyles), {}, {
      display: 'block',
      margin: '0 auto'
    });
  }

  if (maxWidthXS) {
    _extraStyles[MEDIA_QUERIES.LT.SM] = Object.assign({
      maxWidth: maxWidthXS
    }, styles && styles[MEDIA_QUERIES.LT.SM] ? styles[MEDIA_QUERIES.LT.SM] : {});
  }

  if (withFadeIn) {
    _extraStyles = _objectSpread2(_objectSpread2({}, _extraStyles), {}, {
      opacity: 1,
      transition: 'opacity 0.3s linear',
      '&.aph-img--fade-in': {
        opacity: 0
      }
    });
  }

  return _objectSpread2(_objectSpread2({
    boxSizing: 'border-box',
    display: 'inline-block',
    opacity: 1,
    maxWidth: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    borderRadius: circle ? '50%' : rounded ? RADIUS + 'px' : radius || null
  }, styles), _extraStyles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkltZ1N0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0IiLCJmaWxlIjoiSW1nU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7XG4gICAgTUVESUFfUVVFUklFUyxcbiAgICBSQURJVVMsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFN0eWxlZCAqL1xuY29uc3QgSW1nU3R5bGVkID0gc3R5bGVkKCdpbWcnKSgocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNlbnRlcixcbiAgICAgICAgY2lyY2xlLFxuICAgICAgICByb3VuZGVkLFxuICAgICAgICByYWRpdXMsXG5cbiAgICAgICAgbWF4V2lkdGhYUyxcbiAgICAgICAgd2l0aEZhZGVJbixcblxuICAgICAgICBzdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgbGV0IF9leHRyYVN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKGNlbnRlcikge1xuICAgICAgICBfZXh0cmFTdHlsZXMgPSB7XG4gICAgICAgICAgICAuLi5fZXh0cmFTdHlsZXMsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luIDogJzAgYXV0bycsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKG1heFdpZHRoWFMpIHtcbiAgICAgICAgX2V4dHJhU3R5bGVzW01FRElBX1FVRVJJRVMuTFQuU01dID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IG1heFdpZHRoWFMsXG4gICAgICAgICAgICB9LCBzdHlsZXMgJiYgc3R5bGVzW01FRElBX1FVRVJJRVMuTFQuU01dID8gc3R5bGVzW01FRElBX1FVRVJJRVMuTFQuU01dIDoge31cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAod2l0aEZhZGVJbikge1xuICAgICAgICBfZXh0cmFTdHlsZXMgPSB7XG4gICAgICAgICAgICAuLi5fZXh0cmFTdHlsZXMsXG4gICAgICAgICAgICBvcGFjaXR5ICAgOiAxLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcyBsaW5lYXInLFxuXG4gICAgICAgICAgICAnJi5hcGgtaW1nLS1mYWRlLWluJzoge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG9wYWNpdHkgICAgICA6IDEsXG4gICAgICAgIG1heFdpZHRoICAgICA6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0ICAgICAgIDogJ2F1dG8nLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblxuICAgICAgICBib3JkZXJSYWRpdXM6IChjaXJjbGUgPyAnNTAlJyA6IHJvdW5kZWQgPyAoUkFESVVTICsgJ3B4JykgOiAocmFkaXVzIHx8IG51bGwpKSxcblxuICAgICAgICAuLi5zdHlsZXMsXG5cbiAgICAgICAgLi4uX2V4dHJhU3R5bGVzXG4gICAgfTtcbn0pO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEltZ1N0eWxlZDtcbiJdfQ== */");

var Img = /*#__PURE__*/forwardRef(function (props, ref) {
  var center = props.center,
      src = props.src,
      srcFallback = props.srcFallback,
      className = props.className,
      onError = props.onError,
      onLoad = props.onLoad,
      fadeIn = props.fadeIn,
      rest = _objectWithoutPropertiesLoose(props, ["center", "src", "srcFallback", "className", "onError", "onLoad", "fadeIn"]);

  var _useState = useState(src),
      managedSRC = _useState[0],
      setManagedSRC = _useState[1];

  var _useState2 = useState(false),
      appliedSRC = _useState2[0],
      setAppliedSRC = _useState2[1];

  var _useState3 = useState(fadeIn ? true : false),
      activeFade = _useState3[0],
      setActiveFade = _useState3[1];

  function handleLoad(evt) {
    if (typeof onLoad === 'function') {
      onLoad(_objectSpread2({}, evt || {}));
    }

    if (!activeFade) {
      return;
    }

    setActiveFade(false);
  }

  function handleError(errorEvt) {
    if (!appliedSRC && srcFallback && typeof srcFallback === 'string') {
      setAppliedSRC(true);
      setManagedSRC(srcFallback);
    }

    if (typeof onError === 'function') {
      onError(_objectSpread2({}, errorEvt || {}));
    }
  }

  useEffect(function () {
    setManagedSRC(src);
  }, [src]);
  return /*#__PURE__*/React.createElement(ImgStyled, _extends({}, rest, {
    center: center,
    ref: ref,
    src: managedSRC,
    onLoad: handleLoad,
    onError: handleError,
    withFadeIn: fadeIn,
    className: "aph-img" + (activeFade ? ' aph-img--fade-in ' : ' ') + (className || '')
  }));
});
Img.defaultProps = {
  circle: false,
  rounded: false,
  fadeIn: false,
  radius: '',
  maxWidthXS: '',
  srcFallback: '',
  styles: {}
};
Img.propTypes = {
  circle: propTypes.bool,
  rounded: propTypes.bool,
  fadeIn: propTypes.bool,
  radius: propTypes.string,
  maxWidthXS: propTypes.string,
  srcFallback: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var AvatarStyled = _styled("figure", {
  target: "e1iucjq10",
  label: "AvatarStyled"
})("box-sizing:border-box;position:relative;display:", function (props) {
  return props.aphCenter ? '' : 'inline-';
}, "block;margin:", function (props) {
  return props.aphCenter ? (props.aphMargin || '0') + ' auto' : props.aphMargin;
}, ";width:", function (props) {
  return props.aphWidth + ((props.aphWidth + '').includes('px') ? '' : 'px');
}, ";height:", function (props) {
  return props.aphHeight + ((props.aphHeight + '').includes('px') ? '' : 'px');
}, ";border-radius:", function (props) {
  return props.aphRadius || (props.aphCircle ? '50%' : null);
}, ";background-color:", function (props) {
  return props.aphColorStart || props.aphColorEnd;
}, ";background:linear-gradient(0deg,", function (props) {
  return props.aphColorStart;
}, " 0%,", function (props) {
  return props.aphColorEnd;
}, " 100%);user-select:none;", function (props) {
  return props.aphStyles;
}, ";.aph-avatar{&__initials{color:rgba(255,255,255,0.5);font-size:", function (props) {
  return props.aphFontSize || (props.aphWidth + '').replace('px', '') / 2 - 8;
}, "px;line-height:", function (props) {
  return props.aphHeight + ((props.aphHeight + '').includes('px') ? '' : 'px');
}, ";text-align:center;text-transform:uppercase;user-select:none;", function (props) {
  return text(props);
}, ";}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkF2YXRhclN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTa0MiLCJmaWxlIjoiQXZhdGFyU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVdGlsaXRpZXMgKi9cbmltcG9ydCB7XG4gICAgdGV4dCxcbn0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBdmF0YXJTdHlsZWQgPSBzdHlsZWQuZmlndXJlYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG4gICAgZGlzcGxheSAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhDZW50ZXIgPyAnJyA6ICdpbmxpbmUtJ31ibG9jaztcbiAgICBtYXJnaW4gICAgOiAke3Byb3BzID0+IHByb3BzLmFwaENlbnRlciA/ICgocHJvcHMuYXBoTWFyZ2luIHx8ICcwJykgKyAnIGF1dG8nKSA6IHByb3BzLmFwaE1hcmdpbn07XG4gICAgd2lkdGggICAgIDogJHtwcm9wcyA9PiAocHJvcHMuYXBoV2lkdGggKyAoKHByb3BzLmFwaFdpZHRoICsgJycpLmluY2x1ZGVzKCdweCcpID8gJycgOiAncHgnKSl9O1xuICAgIGhlaWdodCAgICA6ICR7cHJvcHMgPT4gKHByb3BzLmFwaEhlaWdodCArICgocHJvcHMuYXBoSGVpZ2h0ICsgJycpLmluY2x1ZGVzKCdweCcpID8gJycgOiAncHgnKSl9O1xuXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhSYWRpdXMgfHwgKHByb3BzLmFwaENpcmNsZSA/ICc1MCUnIDogbnVsbCl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXBoQ29sb3JTdGFydCB8fCBwcm9wcy5hcGhDb2xvckVuZH07XG4gICAgYmFja2dyb3VuZCAgICAgIDogbGluZWFyLWdyYWRpZW50KDBkZWcsICR7cHJvcHMgPT4gcHJvcHMuYXBoQ29sb3JTdGFydH0gMCUsICR7cHJvcHMgPT4gcHJvcHMuYXBoQ29sb3JFbmR9IDEwMCUpO1xuXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmFwaFN0eWxlc307XG5cbiAgICAuYXBoLWF2YXRhciB7XG4gICAgICAgICZfX2luaXRpYWxzIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgICAgOiAke3Byb3BzID0+IChwcm9wcy5hcGhGb250U2l6ZSB8fCAoKChwcm9wcy5hcGhXaWR0aCArICcnKS5yZXBsYWNlKCdweCcsICcnKSAvIDIpIC0gOCkpfXB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQgICA6ICR7cHJvcHMgPT4gKHByb3BzLmFwaEhlaWdodCArICgocHJvcHMuYXBoSGVpZ2h0ICsgJycpLmluY2x1ZGVzKCdweCcpID8gJycgOiAncHgnKSl9O1xuICAgICAgICAgICAgdGV4dC1hbGlnbiAgICA6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdCAgIDogbm9uZTtcblxuICAgICAgICAgICAgJHtwcm9wcyA9PiB0ZXh0KHByb3BzKX07XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEF2YXRhclN0eWxlZDtcbiJdfQ== */"));

function Avatar(_ref) {
  var center = _ref.center,
      circle = _ref.circle,
      color = _ref.color,
      fontSize = _ref.fontSize,
      initials = _ref.initials,
      gradient = _ref.gradient,
      margin = _ref.margin,
      name = _ref.name,
      size = _ref.size,
      width = _ref.width,
      height = _ref.height,
      styles = _ref.styles,
      radius = _ref.radius,
      className = _ref.className,
      src = _ref.src,
      rest = _objectWithoutPropertiesLoose(_ref, ["center", "circle", "color", "fontSize", "initials", "gradient", "margin", "name", "size", "width", "height", "styles", "radius", "className", "src"]);

  var _ref2 = gradient || {},
      gStart = _ref2.start,
      gEnd = _ref2.end;

  var gradientOptional = gradients.palette[color] || gradients.random() || {};
  var gradientSelected = gStart || gEnd ? {
    start: gStart || gEnd,
    end: gEnd || gStart
  } : gradientOptional;
  var hasName = name && !initials ? true : false;
  var splitted = (name || '').trim().split(' ');
  var first = '' + splitted[0];
  var last = '' + splitted[splitted.length - 1 || 0];
  var firstLetter = !hasName ? '' : first[0];
  var lastLetter = !hasName ? '' : last[0];
  var colorStart = gradientSelected.start;
  var colorEnd = gradientSelected.end;

  var _useState = useState(src ? false : true),
      display = _useState[0],
      setDisplay = _useState[1];

  function handleError() {
    if (display) {
      return;
    }

    setDisplay(true);
  }

  useEffect(function () {
    setDisplay(src ? false : true);
  }, [src]);

  if (!display) {
    return /*#__PURE__*/React.createElement(Img, _extends({
      src: src,
      width: (width || size) + 'px',
      height: (height || size) + 'px',
      circle: circle,
      margin: margin,
      radius: radius,
      className: className,
      onError: handleError,
      fadeIn: true,
      styles: _objectSpread2(_objectSpread2({}, styles || {}), !center ? {} : {
        display: 'block',
        margin: '0 auto'
      })
    }, rest));
  }

  return /*#__PURE__*/React.createElement(AvatarStyled, _extends({
    role: "img",
    aphCenter: center,
    aphCircle: circle,
    aphFontSize: fontSize,
    aphMargin: margin,
    aphWidth: width || size,
    aphHeight: height || size,
    aphRadius: radius,
    aphStyles: styles,
    aphColorStart: colorStart,
    aphColorEnd: colorEnd,
    title: name || '',
    className: "aph-avatar " + className
  }, rest), /*#__PURE__*/React.createElement("figcaption", {
    className: "aph-avatar__initials"
  }, initials ? initials : /*#__PURE__*/React.createElement(Fragment$1, null, firstLetter, lastLetter)));
}

Avatar.defaultProps = {
  center: false,
  circle: false,
  color: '',
  fontSize: 0,
  initials: '',
  gradient: {},
  margin: null,
  name: '',
  size: 40,
  width: null,
  height: null,
  styles: {},
  radius: '',
  src: '',
  className: ''
};
Avatar.propTypes = {
  center: propTypes.bool,
  circle: propTypes.bool,
  color: propTypes.string,
  fontSize: propTypes.number,
  initials: propTypes.string,
  gradient: propTypes.object,
  margin: propTypes.any,
  name: propTypes.string,
  size: propTypes.oneOfType([propTypes.number, propTypes.string]),
  width: propTypes.oneOfType([propTypes.number, propTypes.string]),
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  styles: propTypes.object,
  radius: propTypes.string,
  src: propTypes.string,
  className: propTypes.string
};

function useWindowSize(delay) {
  if (delay === void 0) {
    delay = 500;
  }

  var isClient = typeof window === 'object';

  function getSize() {
    var _window = isClient ? window : {};

    var width = _window.innerWidth;
    var height = _window.innerHeight;
    var xs = width <= SCREEN_SIZES.SM;
    var sm = width >= SCREEN_SIZES.SM && width < SCREEN_SIZES.MD;
    var md = width >= SCREEN_SIZES.MD && width < SCREEN_SIZES.LG;
    var lg = width >= SCREEN_SIZES.LG && width < SCREEN_SIZES.XL;
    var xl = width >= SCREEN_SIZES.XL;
    var GTxs = sm || md || lg || xl;
    var GTsm = md || lg || xl;
    var GTmd = lg || xl;
    var GTlg = width > SCREEN_SIZES.LG;
    var GTxl = width > SCREEN_SIZES.XL;
    var LTxs = xs;
    var LTsm = xs;
    var LTmd = xs || sm;
    var LTlg = xs || sm || md;
    var LTxl = xs || sm || md || lg;
    return {
      width: width,
      height: height,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg,
      xl: xl,
      _lt_: {
        xs: LTxs,
        sm: LTsm,
        md: LTmd,
        lg: LTlg,
        xl: LTxl
      },
      _gt_: {
        xs: GTxs,
        sm: GTsm,
        md: GTmd,
        lg: GTlg,
        xl: GTxl
      }
    };
  }

  var timer = null;

  var _useState = useState(getSize),
      windowSize = _useState[0],
      setWindowSize = _useState[1];

  useEffect(function () {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        setWindowSize(getSize());
      }, delay);
    }

    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [timer, delay]);
  return windowSize;
}

var SegmentStyled = _styled("div", {
  target: "eg4gr7x0",
  label: "SegmentStyled"
})("box-sizing:border-box;display:block;margin:", function (props) {
  return props.aphMargin || null;
}, ";padding:", function (props) {
  return props.withLink ? null : props.aphPadding;
}, ";", function (props) {
  return text(props, props.textSize);
}, ";border-radius:", function (props) {
  return !props.aphRadius ? null : typeof props.aphRadius === 'number' ? props.aphRadius + "px" : props.aphRadius;
}, ";box-shadow:", function (props) {
  return props.aphShadow ? typeof props.aphShadow === 'string' ? props.aphShadow : "0 0 3px " + colors$1.getFromTheme(props, 'shadow') : props.borderTop || props.borderBottom ? "inset 0 " + (props.borderBottom ? '-' : '') + "1px 0 0 " + colors$1.getFromTheme(props, 'helper', undefined, 0.15) : null;
}, ";color:", function (props) {
  return props.aphColor ? colors$1.getFromTheme(props, props.aphColor) : null;
}, ";background-color:", function (props) {
  return props.aphBackground ? colors$1.getFromTheme(props, props.aphBackground) : null;
}, ";", function (props) {
  return !props.aphHoverable ? null : "\n        outline: 0;\n        border : 0;\n\n        box-shadow: " + (!props.aphShadow ? '' : "0 0 3px " + colors$1.getFromTheme(props, 'shadow')) + ";\n        transition: box-shadow 0.15s linear;\n\n        &:active, &:hover, &:focus {\n            box-shadow: 0 0 10px " + colors$1.getFromTheme(props, 'shadow') + ";\n        }\n    ";
}, " ", function (props) {
  return !props.withLink ? null : "\n        > a {\n            border-radius: " + (!props.aphRadius ? '' : typeof props.aphRadius === 'number' ? props.aphRadius + "px" : props.aphRadius) + ";\n            color: inherit;\n            display: block;\n            padding: " + props.aphPadding + ";\n            text-decoration: none;\n        }\n    ";
}, " ", function (props) {
  return props.aphStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlZ21lbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnQyIsImZpbGUiOiJTZWdtZW50LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNvbG9ycywgdGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgU2VnbWVudFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46ICR7cHJvcHMgPT4gcHJvcHMuYXBoTWFyZ2luIHx8IG51bGx9O1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMud2l0aExpbmsgPyBudWxsIDogcHJvcHMuYXBoUGFkZGluZ307XG5cbiAgICAke3Byb3BzID0+IHRleHQocHJvcHMsIHByb3BzLnRleHRTaXplKX07XG5cbiAgICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+ICFwcm9wcy5hcGhSYWRpdXMgPyBudWxsIDogKCh0eXBlb2YgcHJvcHMuYXBoUmFkaXVzID09PSAnbnVtYmVyJykgPyBgJHtwcm9wcy5hcGhSYWRpdXN9cHhgIDogcHJvcHMuYXBoUmFkaXVzKX07XG4gICAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy5hcGhTaGFkb3cgP1xuICAgICAgICAodHlwZW9mIHByb3BzLmFwaFNoYWRvdyA9PT0gJ3N0cmluZycgPyBwcm9wcy5hcGhTaGFkb3cgOiBgMCAwIDNweCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzaGFkb3cnKX1gKSA6IChcbiAgICAgICAgICAgIChwcm9wcy5ib3JkZXJUb3AgfHwgcHJvcHMuYm9yZGVyQm90dG9tKSA/IGBpbnNldCAwICR7cHJvcHMuYm9yZGVyQm90dG9tID8gJy0nIDogJyd9MXB4IDAgMCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInLCB1bmRlZmluZWQsIDAuMTUpfWAgOiBudWxsXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXBoQ29sb3IgPyBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5hcGhDb2xvcikgOiBudWxsfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmFwaEJhY2tncm91bmQgPyBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5hcGhCYWNrZ3JvdW5kKSA6IG51bGx9O1xuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuYXBoSG92ZXJhYmxlID8gbnVsbCA6IGBcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgYm9yZGVyIDogMDtcblxuICAgICAgICBib3gtc2hhZG93OiAkeyFwcm9wcy5hcGhTaGFkb3cgPyAnJyA6IGAwIDAgM3B4ICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NoYWRvdycpfWB9O1xuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGxpbmVhcjtcblxuICAgICAgICAmOmFjdGl2ZSwgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzaGFkb3cnKX07XG4gICAgICAgIH1cbiAgICBgfVxuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMud2l0aExpbmsgPyBudWxsIDogYFxuICAgICAgICA+IGEge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogJHshcHJvcHMuYXBoUmFkaXVzID8gJycgOiAoKHR5cGVvZiBwcm9wcy5hcGhSYWRpdXMgPT09ICdudW1iZXInKSA/IGAke3Byb3BzLmFwaFJhZGl1c31weGAgOiBwcm9wcy5hcGhSYWRpdXMpfTtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiAke3Byb3BzLmFwaFBhZGRpbmd9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgYH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuYXBoU3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IFNlZ21lbnQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG5cbiAgICAgICAgbWFyZ2luLFxuICAgICAgICBwYWRkaW5nLFxuXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kLFxuICAgICAgICBob3ZlcmFibGUsXG4gICAgICAgIHJhZGl1cyxcbiAgICAgICAgc2hhZG93LFxuXG4gICAgICAgIHN0eWxlcyxcbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZWdtZW50U3R5bGVkXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgYXBoTWFyZ2luPXttYXJnaW59XG4gICAgICAgICAgICBhcGhQYWRkaW5nPXtwYWRkaW5nfVxuICAgICAgICAgICAgYXBoSG92ZXJhYmxlPXtob3ZlcmFibGV9XG4gICAgICAgICAgICBhcGhDb2xvcj17Y29sb3J9XG4gICAgICAgICAgICBhcGhCYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kfVxuICAgICAgICAgICAgYXBoUmFkaXVzPXtyYWRpdXN9XG4gICAgICAgICAgICBhcGhTaGFkb3c9e3NoYWRvd31cbiAgICAgICAgICAgIGFwaFN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLXNlZ21lbnQgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuU2VnbWVudC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dEFsaWduOiAnJyxcbiAgICB0ZXh0Q29sb3I6ICcnLFxuICAgIGNvbG9yOiAnJyxcbiAgICBiYWNrZ3JvdW5kOiAnJyxcbiAgICBtYXJnaW46ICcnLFxuICAgIHBhZGRpbmc6ICcyMHB4IDEwcHgnLFxuICAgIGhvdmVyYWJsZTogZmFsc2UsXG4gICAgcmFkaXVzOiAwLFxuICAgIHNoYWRvdzogZmFsc2UsXG4gICAgc3R5bGVzOiB7fSxcbiAgICB3aXRoTGluazogZmFsc2UsXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5TZWdtZW50LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUZXh0IGFsaWduXG4gICAgICovXG4gICAgdGV4dEFsaWduOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGV4dCBjb2xvclxuICAgICAqL1xuICAgIHRleHRDb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRleHQgY29sb3JcbiAgICAgKi9cbiAgICBjb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEJhY2tncm91bmQgY29sb3JcbiAgICAgKi9cbiAgICBiYWNrZ3JvdW5kOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRXh0ZXJuYWwgRGlzdGFuY2UgdG8gb3RoZXIgZWxlbWVudHNcbiAgICAgKi9cbiAgICBtYXJnaW46IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBzcGFjZW1lbnRcbiAgICAgKi9cbiAgICBwYWRkaW5nOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQmFja2dyb3VuZCBjb2xvciBjaGFuZ2VzIG9uIGhvdmVyIGV2ZW50XG4gICAgICovXG4gICAgaG92ZXJhYmxlOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBib3JkZXIgcmFkaXVzXG4gICAgICovXG4gICAgcmFkaXVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm51bWJlcixcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIEVuYWJsZSBvciBjdXN0b21pemUgYm94LXNoYWRvd1xuICAgICAqL1xuICAgIHNoYWRvdzogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5ib29sLFxuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIHN0eWxlc1xuICAgICAqL1xuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBVc2UgaXQgd2hlbiB5b3UgbmVlZCBhIGxpbmsgaW5zaWRlLCBzdWNoIGFzIFJlYWN0IFJvdXRlciBMaW5rXG4gICAgICovXG4gICAgd2l0aExpbms6IHByb3BUeXBlcy5ib29sLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBTZWdtZW50O1xuIl19 */"));

var Segment = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      margin = props.margin,
      padding = props.padding,
      color = props.color,
      background = props.background,
      hoverable = props.hoverable,
      radius = props.radius,
      shadow = props.shadow,
      styles = props.styles,
      rest = _objectWithoutPropertiesLoose(props, ["className", "margin", "padding", "color", "background", "hoverable", "radius", "shadow", "styles"]);

  return /*#__PURE__*/React.createElement(SegmentStyled, _extends({}, rest, {
    ref: ref,
    aphMargin: margin,
    aphPadding: padding,
    aphHoverable: hoverable,
    aphColor: color,
    aphBackground: background,
    aphRadius: radius,
    aphShadow: shadow,
    aphStyles: styles,
    className: "aph-segment " + (className || '')
  }));
});
Segment.defaultProps = {
  textAlign: '',
  textColor: '',
  color: '',
  background: '',
  margin: '',
  padding: '20px 10px',
  hoverable: false,
  radius: 0,
  shadow: false,
  styles: {},
  withLink: false
};
Segment.propTypes = {
  textAlign: propTypes.string,
  textColor: propTypes.string,
  color: propTypes.string,
  background: propTypes.string,
  margin: propTypes.string,
  padding: propTypes.string,
  hoverable: propTypes.bool,
  radius: propTypes.oneOfType([propTypes.string, propTypes.number]),
  shadow: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  withLink: propTypes.bool
};

function Badge(_ref) {
  var padding = _ref.padding,
      radius = _ref.radius,
      styles = _ref.styles,
      className = _ref.className,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["padding", "radius", "styles", "className", "prefix", "suffix", "children"]);

  var _useWindowSize = useWindowSize(),
      xs = _useWindowSize.xs;

  var _ref2 = prefix || {},
      _ref2$children = _ref2.children,
      prefixChildren = _ref2$children === void 0 ? null : _ref2$children,
      _ref2$className = _ref2.className,
      prefixClassName = _ref2$className === void 0 ? '' : _ref2$className,
      _ref2$styles = _ref2.styles,
      prefixStyles = _ref2$styles === void 0 ? {} : _ref2$styles,
      prefixProps = _objectWithoutPropertiesLoose(_ref2, ["children", "className", "styles"]);

  var _ref3 = suffix || {},
      _ref3$children = _ref3.children,
      suffixChildren = _ref3$children === void 0 ? null : _ref3$children,
      _ref3$className = _ref3.className,
      suffixClassName = _ref3$className === void 0 ? '' : _ref3$className,
      suffixProps = _objectWithoutPropertiesLoose(_ref3, ["children", "className", "styles"]);

  return /*#__PURE__*/React.createElement(Segment, _extends({}, rest, {
    className: "aph-badge " + (className || ''),
    padding: padding || (xs ? '5px 10px' : '0 10px'),
    radius: radius || 2,
    styles: _objectSpread2({
      position: 'relative',
      display: 'inline-block',
      fontSize: (xs ? 14 : 12) + 'px',
      lineHeight: '20px'
    }, styles)
  }), prefix && /*#__PURE__*/React.createElement(Segment, _extends({
    padding: "0"
  }, prefixProps, {
    className: "aph-badge__prefix " + prefixClassName,
    styles: _objectSpread2({
      display: 'inline-block',
      marginRight: '5px',
      paddingRight: '5px'
    }, prefixStyles)
  }), prefixChildren || prefix), children, suffix && /*#__PURE__*/React.createElement(Segment, _extends({
    padding: "0"
  }, suffixProps, {
    className: "aph-badge__suffix " + suffixClassName,
    styles: _objectSpread2({
      display: 'inline-block',
      marginLeft: '5px',
      paddingLeft: '5px'
    }, prefixStyles)
  }), suffixChildren || suffix));
}

Badge.defaultProps = {
  color: 'white',
  background: 'secondary',
  prefix: null,
  suffix: null,
  styles: {}
};
Badge.propTypes = {
  color: propTypes.string,
  background: propTypes.string,
  prefix: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.node]),
  suffix: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.node]),
  styles: propTypes.object
};

var BlurBackgroundWrapper = _styled("div", {
  target: "ee5zyei0",
  label: "BlurBackgroundWrapper"
})("position:relative;z-index:1;display:block;min-width:100%;min-height:100%;overflow:hidden;color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'base', 'original', 0.5);
}, ";.aph-placeholder{background:linear-gradient( 90deg,", function (props) {
  return colors$1.getFromTheme(props, 'base', 'original', 0.05);
}, ",", function (props) {
  return colors$1.getFromTheme(props, 'base', 'original', 0.25);
}, " );}", function (_ref) {
  var aphWrapperStyles = _ref.aphWrapperStyles;
  return aphWrapperStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJsdXJCYWNrZ3JvdW5kU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMrQyIsImZpbGUiOiJCbHVyQmFja2dyb3VuZFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVXRpbGl0aWVzICovXG5pbXBvcnQge1xuICAgIGNvbG9ycyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuZXhwb3J0IGNvbnN0IEJsdXJCYWNrZ3JvdW5kV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG4gICAgei1pbmRleCAgIDogMTtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBtaW4td2lkdGggOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3cgIDogaGlkZGVuO1xuXG4gICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYXNlJywgJ29yaWdpbmFsJywgMC41KX07XG5cbiAgICAuYXBoLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgICAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYXNlJywgJ29yaWdpbmFsJywgMC4wNSl9LFxuICAgICAgICAgICAgJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScsICdvcmlnaW5hbCcsIDAuMjUpfVxuICAgICAgICApO1xuICAgIH1cblxuICAgICR7KHsgYXBoV3JhcHBlclN0eWxlcyB9KSA9PiBhcGhXcmFwcGVyU3R5bGVzfTtcbmA7XG5cbi8qIEltYWdlIEJsdXJyZWQgU3R5bGVzICovXG5leHBvcnQgY29uc3QgQmx1ckJhY2tncm91bmRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb24gIDogYWJzb2x1dGU7XG4gICAgei1pbmRleCAgIDogLTE7XG4gICAgdG9wICAgICAgIDogMDtcbiAgICByaWdodCAgICAgOiAwO1xuICAgIGJvdHRvbSAgICA6IDA7XG4gICAgbGVmdCAgICAgIDogMDtcbiAgICBtaW4td2lkdGggOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG5cbiAgICBvcGFjaXR5ICA6ICR7cHJvcHMgPT4gcHJvcHMuYXBoT3BhY2l0eX07XG4gICAgZmlsdGVyICAgOiBibHVyKCR7cHJvcHMgPT4gcHJvcHMuYXBoQmx1cn0pO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcblxuICAgIGJhY2tncm91bmQtc2l6ZSAgICA6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0ICA6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZSAgIDogdXJsKCR7cHJvcHMgPT4gcHJvcHMuYXBoSW1hZ2UgfHwgbnVsbH0pO1xuXG4gICAgJHsoeyBhcGhTdHlsZXMgfSkgPT4gYXBoU3R5bGVzfTtcbmA7XG4iXX0= */"));
var BlurBackgroundImage = _styled("div", {
  target: "ee5zyei1",
  label: "BlurBackgroundImage"
})("position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;min-width:100%;min-height:100%;opacity:", function (props) {
  return props.aphOpacity;
}, ";filter:blur(", function (props) {
  return props.aphBlur;
}, ");transform:scale(1.2);background-size:cover;background-repeat:no-repeat;background-position:50%;background-image:url(", function (props) {
  return props.aphImage || null;
}, ");", function (_ref2) {
  var aphStyles = _ref2.aphStyles;
  return aphStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJsdXJCYWNrZ3JvdW5kU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDNkMiLCJmaWxlIjoiQmx1ckJhY2tncm91bmRTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHtcbiAgICBjb2xvcnMsXG59IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogV3JhcHBlciBTdHlsZXMgKi9cbmV4cG9ydCBjb25zdCBCbHVyQmFja2dyb3VuZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIHotaW5kZXggICA6IDE7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgbWluLXdpZHRoIDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93ICA6IGhpZGRlbjtcblxuICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScsICdvcmlnaW5hbCcsIDAuNSl9O1xuXG4gICAgLmFwaC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgICAgJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScsICdvcmlnaW5hbCcsIDAuMDUpfSxcbiAgICAgICAgICAgICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Jhc2UnLCAnb3JpZ2luYWwnLCAwLjI1KX1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAkeyh7IGFwaFdyYXBwZXJTdHlsZXMgfSkgPT4gYXBoV3JhcHBlclN0eWxlc307XG5gO1xuXG4vKiBJbWFnZSBCbHVycmVkIFN0eWxlcyAqL1xuZXhwb3J0IGNvbnN0IEJsdXJCYWNrZ3JvdW5kSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgIHotaW5kZXggICA6IC0xO1xuICAgIHRvcCAgICAgICA6IDA7XG4gICAgcmlnaHQgICAgIDogMDtcbiAgICBib3R0b20gICAgOiAwO1xuICAgIGxlZnQgICAgICA6IDA7XG4gICAgbWluLXdpZHRoIDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gICAgb3BhY2l0eSAgOiAke3Byb3BzID0+IHByb3BzLmFwaE9wYWNpdHl9O1xuICAgIGZpbHRlciAgIDogYmx1cigke3Byb3BzID0+IHByb3BzLmFwaEJsdXJ9KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG5cbiAgICBiYWNrZ3JvdW5kLXNpemUgICAgOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdCAgOiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2UgICA6IHVybCgke3Byb3BzID0+IHByb3BzLmFwaEltYWdlIHx8IG51bGx9KTtcblxuICAgICR7KHsgYXBoU3R5bGVzIH0pID0+IGFwaFN0eWxlc307XG5gO1xuIl19 */"));

function BlurBackground(_ref) {
  var _ref$blur = _ref.blur,
      blur = _ref$blur === void 0 ? '12px' : _ref$blur,
      children = _ref.children,
      image = _ref.image,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 0.65 : _ref$opacity,
      styles = _ref.styles,
      wrapperStyles = _ref.wrapperStyles,
      rest = _objectWithoutPropertiesLoose(_ref, ["blur", "children", "image", "opacity", "styles", "wrapperStyles"]);

  return /*#__PURE__*/React.createElement(BlurBackgroundWrapper, {
    aphWrapperStyles: wrapperStyles
  }, /*#__PURE__*/React.createElement(BlurBackgroundImage, _extends({
    aphBlur: blur,
    aphImage: image,
    aphStyles: styles,
    aphOpacity: opacity
  }, rest)), children);
}

BlurBackground.propTypes = {
  blur: propTypes.string,
  image: propTypes.string.isRequired,
  opacity: propTypes.number,
  children: propTypes.any,
  styles: propTypes.object,
  wrapperStyles: propTypes.object
};

function getFilteredProps(_ref) {
  var className = _ref.className,
      color = _ref.color,
      height = _ref.height,
      size = _ref.size,
      width = _ref.width;
  var xmlns = 'http://www.w3.org/2000/svg';
  return {
    xmlns: xmlns,
    className: className,
    color: color,
    height: height || size,
    width: width || size,
    fill: 'currentColor',
    stroke: 'currentColor'
  };
}

var IconAdjusts = function IconAdjusts(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-adjusts",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-fill",
    id: "aph-icon-path-adjusts",
    d: "M21,22 L21,21.5 C21,20.9477153 21.4477153,20.5 22,20.5 C22.5522847,20.5 23,20.9477153 23,21.5 L23,22 L24,22 C24.5522847,22 25,22.4477153 25,23 C25,23.5522847 24.5522847,24 24,24 L23,24 L23,24.5 C23,25.0522847 22.5522847,25.5 22,25.5 C21.4477153,25.5 21,25.0522847 21,24.5 L21,24 L6,24 C5.44771525,24 5,23.5522847 5,23 C5,22.4477153 5.44771525,22 6,22 L21,22 Z M14,14 L14,13.5 C14,12.9477153 14.4477153,12.5 15,12.5 C15.5522847,12.5 16,12.9477153 16,13.5 L16,14 L24,14 C24.5522847,14 25,14.4477153 25,15 C25,15.5522847 24.5522847,16 24,16 L16,16 L16,16.5 C16,17.0522847 15.5522847,17.5 15,17.5 C14.4477153,17.5 14,17.0522847 14,16.5 L14,16 L6,16 C5.44771525,16 5,15.5522847 5,15 C5,14.4477153 5.44771525,14 6,14 L14,14 Z M7,6 L7,5.5 C7,4.94771525 7.44771525,4.5 8,4.5 C8.55228475,4.5 9,4.94771525 9,5.5 L9,6 L24,6 C24.5522847,6 25,6.44771525 25,7 C25,7.55228475 24.5522847,8 24,8 L9,8 L9,8.5 C9,9.05228475 8.55228475,9.5 8,9.5 C7.44771525,9.5 7,9.05228475 7,8.5 L7,8 L6,8 C5.44771525,8 5,7.55228475 5,7 C5,6.44771525 5.44771525,6 6,6 L7,6 Z"
  })));
};

var IconArrowUp = function IconArrowUp(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-arrow-up-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    className: "aph-icon-stroke",
    strokeWidth: "2",
    id: "aph-icon-arrow-up-polyline",
    transform: "translate(15.000000, 14.857143) rotate(-180.000000) translate(-15.000000, -14.857143)",
    points: "10 12 15 17.7142857 20 12"
  })));
};

var IconArrowRight = function IconArrowRight(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-stroke",
    id: "aph-icon-arrow-right-path",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 22l8-7-8-7"
  }));
};

var IconArrowDown = function IconArrowDown(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-arrow-down-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    className: "aph-icon-stroke",
    strokeWidth: "2",
    id: "aph-icon-arrow-down-polyline",
    points: "10 12 15 17.7142857 20 12"
  })));
};

var IconArrowLeft = function IconArrowLeft(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-stroke",
    id: "aph-icon-arrow-left-path",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M18 8l-8 7 8 7"
  }));
};

var IconBluetooth = function IconBluetooth(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-bluetooth-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-fill",
    d: "M16.9725,15.1440782 L20.5925,11.5240782 C20.7825,11.3340782 20.8825,11.0840782 20.8825,10.8140782 C20.8825,10.5440782 20.7725,10.2940782 20.5925,10.1040782 L16.2625,5.79407822 C15.9725,5.50407822 15.5425,5.42407822 15.1725,5.57407822 C14.8025,5.72407822 14.5625,6.09407822 14.5625,6.49407822 L14.5625,12.7240782 L10.7025,8.87407822 C10.3125,8.48407822 9.6825,8.48407822 9.2925,8.87407822 C8.9025,9.26407822 8.9025,9.89407822 9.2925,10.2840782 L14.1425,15.1440782 L9.2925,19.9940782 C8.9025,20.3840782 8.9025,21.0140782 9.2925,21.4040782 C9.6825,21.7940782 10.3125,21.7940782 10.7025,21.4040782 L14.5625,17.5540782 L14.5625,23.7840782 C14.5625,24.1840782 14.8025,24.5540782 15.1825,24.7040782 C15.3025,24.7540782 15.4325,24.7840782 15.5625,24.7840782 C15.8225,24.7840782 16.0825,24.6840782 16.2725,24.4940782 L20.5925,20.1740782 C20.7825,19.9840782 20.8825,19.7340782 20.8825,19.4640782 C20.8825,19.1940782 20.7725,18.9440782 20.5925,18.7540782 L16.9725,15.1440782 Z M16.5625,8.91407822 L18.4725,10.8240782 L16.5625,12.7240782 L16.5625,8.91407822 Z M16.5625,21.3740782 L16.5625,17.5540782 L18.4725,19.4640782 L16.5625,21.3740782 Z",
    id: "aph-icon-bluetooth-shape"
  })));
};

var IconCamera = function IconCamera(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-camera-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6,11 L8.38196601,11 C8.76073807,11 9.10700119,10.7859976 9.2763932,10.4472136 L10.7236068,7.5527864 C10.8929988,7.21400238 11.2392619,7 11.618034,7 L18.381966,7 C18.7607381,7 19.1070012,7.21400238 19.2763932,7.5527864 L20.7236068,10.4472136 C20.8929988,10.7859976 21.2392619,11 21.618034,11 L24,11 C24.5522847,11 25,11.4477153 25,12 L25,22 C25,22.5522847 24.5522847,23 24,23 L6,23 C5.44771525,23 5,22.5522847 5,22 L5,12 C5,11.4477153 5.44771525,11 6,11 Z",
    id: "aph-icon-camera-shape",
    className: "aph-icon-stroke",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "aph-icon-stroke",
    id: "aph-icon-camera-circle",
    strokeWidth: "1.8",
    cx: "15",
    cy: "16",
    r: "4"
  })));
};

var IconCard = function IconCard(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-card-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "aph-icon-card-group-rect-stroke",
    className: "aph-icon-stroke",
    strokeWidth: "2",
    x: "3",
    y: "7",
    width: "24",
    height: "16",
    rx: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "aph-icon-card-group-rect-fill-1",
    className: "aph-icon-fill",
    x: "3",
    y: "11",
    width: "24",
    height: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "aph-icon-card-group-rect-fill-2",
    fill: "#EF3C3E",
    x: "20",
    y: "16",
    width: "5",
    height: "2"
  })));
};

var IconCards = function IconCards(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Cards",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group",
    transform: "translate(2.000000, 5.300000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Cards",
    transform: "translate(0.000000, 1.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Card-1"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1,-0.75 L15,-0.75 C15.5983085,-0.75 16.0833333,-0.264975146 16.0833333,0.333333333 L16.0833333,7.24831355 L11.1641099,7.24831355 C10.473754,7.24831355 9.91410993,7.80795762 9.91410993,8.49831355 L9.91410993,10.0833333 L1,10.0833333 C0.401691521,10.0833333 -0.0833333333,9.59830848 -0.0833333333,9 L-0.0833333333,0.333333333 C-0.0833333333,-0.264975146 0.401691521,-0.75 1,-0.75 Z",
    id: "Rectangle",
    className: "aph-icon-stroke",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    className: "aph-icon-fill",
    x: "0",
    y: "2",
    width: "16",
    height: "1.5"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Card-2",
    transform: "translate(10.000000, 8.000000)"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    className: "aph-icon-stroke",
    strokeWidth: "1.5",
    x: "-0.0833333333",
    y: "-0.75",
    width: "16.1666667",
    height: "10.8333333",
    rx: "0.333333333"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    className: "aph-icon-fill",
    x: "0",
    y: "2",
    width: "16",
    height: "1.5"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Arrows",
    transform: "translate(1.500000, 0.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Arrow-1",
    transform: "translate(16.000000, 0.000000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.75851811,5.41421356 L1.5,5.41421356 C1.22385763,5.41421356 1,5.19035594 1,4.91421356 L1,1.5 C1,1.22385763 1.22385763,1 1.5,1 L4.91421356,1 C5.19035594,1 5.41421356,1.22385763 5.41421356,1.5 L5.41421356,1.75851811 C5.41421356,2.03466048 5.19035594,2.25851811 4.91421356,2.25851811 L2.75851811,2.25851811 C2.48237573,2.25851811 2.25851811,2.48237573 2.25851811,2.75851811 L2.25851811,4.91421356 C2.25851811,5.19035594 2.03466048,5.41421356 1.75851811,5.41421356 Z",
    id: "Path-4-Copy-4",
    className: "aph-icon-fill",
    transform: "translate(3.207107, 3.207107) rotate(-45.000000) translate(-3.207107, -3.207107) "
  }), /*#__PURE__*/React.createElement("polyline", {
    id: "Path-9",
    className: "aph-icon-stroke",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "1.53553391 3.20710678 6.82504026 3.20710678 6.82504026 5.70710678"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Arrow-2",
    transform: "translate(3.500000, 15.500000) scale(-1, -1) translate(-3.500000, -15.500000) translate(0.000000, 12.000000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.75851811,5.41421356 L1.5,5.41421356 C1.22385763,5.41421356 1,5.19035594 1,4.91421356 L1,1.5 C1,1.22385763 1.22385763,1 1.5,1 L4.91421356,1 C5.19035594,1 5.41421356,1.22385763 5.41421356,1.5 L5.41421356,1.75851811 C5.41421356,2.03466048 5.19035594,2.25851811 4.91421356,2.25851811 L2.75851811,2.25851811 C2.48237573,2.25851811 2.25851811,2.48237573 2.25851811,2.75851811 L2.25851811,4.91421356 C2.25851811,5.19035594 2.03466048,5.41421356 1.75851811,5.41421356 Z",
    id: "Path-4-Copy-4",
    className: "aph-icon-fill",
    transform: "translate(3.207107, 3.207107) rotate(-45.000000) translate(-3.207107, -3.207107) "
  }), /*#__PURE__*/React.createElement("polyline", {
    id: "Path-9",
    className: "aph-icon-stroke",
    strokeWidth: "1.3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    points: "1.53553391 3.20710678 6.82504026 3.20710678 6.82504026 5.70710678"
  }))))));
};

var IconCharLine = function IconCharLine(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Chart-/-White",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "chart-bar-regular",
    transform: "translate(5.000000, 7.000000)",
    className: "aph-icon-fill",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.275,11.8125 L17.19375,11.8125 C17.45625,11.8125 17.71875,11.55 17.71875,11.2875 L17.71875,1.8375 C17.71875,1.575 17.45625,1.3125 17.19375,1.3125 L16.275,1.3125 C16.0125,1.3125 15.75,1.575 15.75,1.8375 L15.75,11.2875 C15.75,11.55 16.0125,11.8125 16.275,11.8125 Z M8.4,11.8125 L9.31875,11.8125 C9.58125,11.8125 9.84375,11.55 9.84375,11.2875 L9.84375,3.15 C9.84375,2.8875 9.58125,2.625 9.31875,2.625 L8.4,2.625 C8.1375,2.625 7.875,2.8875 7.875,3.15 L7.875,11.2875 C7.875,11.55 8.1375,11.8125 8.4,11.8125 L8.4,11.8125 Z M12.3375,11.8125 L13.25625,11.8125 C13.51875,11.8125 13.78125,11.55 13.78125,11.2875 L13.78125,5.775 C13.78125,5.5125 13.51875,5.25 13.25625,5.25 L12.3375,5.25 C12.075,5.25 11.8125,5.5125 11.8125,5.775 L11.8125,11.2875 C11.8125,11.55 12.075,11.8125 12.3375,11.8125 L12.3375,11.8125 Z M20.34375,13.78125 L1.96875,13.78125 L1.96875,0.65625 C1.96875,0.293671875 1.67507813,0 1.3125,0 L0.65625,0 C0.293671875,0 0,0.293671875 0,0.65625 L0,14.4375 C0,15.1622461 0.587753906,15.75 1.3125,15.75 L20.34375,15.75 C20.7063281,15.75 21,15.4563281 21,15.09375 L21,14.4375 C21,14.0749219 20.7063281,13.78125 20.34375,13.78125 Z M4.4625,11.8125 L5.38125,11.8125 C5.64375,11.8125 5.90625,11.55 5.90625,11.2875 L5.90625,8.4 C5.90625,8.1375 5.64375,7.875 5.38125,7.875 L4.4625,7.875 C4.2,7.875 3.9375,8.1375 3.9375,8.4 L3.9375,11.2875 C3.9375,11.55 4.2,11.8125 4.4625,11.8125 L4.4625,11.8125 Z",
    id: "Shape"
  }))));
};

var IconCheckThin = function IconCheckThin(props) {
  var _getFilteredProps = getFilteredProps(props),
      color = _getFilteredProps.color,
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 20 16"
  }), /*#__PURE__*/React.createElement("g", {
    id: "IconCheckThinWrapper",
    stroke: "none",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "IconCheckThinWrapperGroup",
    transform: "translate(-5.000000, -7.000000)",
    className: "aph-icon-stroke",
    strokeWidth: "4",
    stroke: color
  }, /*#__PURE__*/React.createElement("polyline", {
    id: "Path",
    points: "7.5 14 13.5 21 23 9"
  }))));
};

var IconContract = function IconContract(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-contract",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.7289453,0 C18.4332422,0 19.0954102,0.27421875 19.5933984,0.772265625 L19.5933984,0.772265625 L22.0792383,3.25822266 C22.5772852,3.75621094 22.8515625,4.41832031 22.8515625,5.12261719 L22.8515625,5.12261719 L22.8515625,12.0877148 C23.1275853,11.8114299 24.773306,10.1643682 25.3432683,9.59391666 L25.4957812,9.44126953 C26.5241602,8.41300781 28.1969531,8.41294922 29.2249805,9.44103516 C30.2556445,10.471582 30.2554102,12.1395117 29.2249219,13.1699414 L29.2249219,13.1699414 L22.8515625,19.5486914 L22.8515625,27.3632812 C22.8515625,28.817168 21.6687305,30 20.2148437,30 L20.2148437,30 L2.63671875,30 C1.18283203,30 -1.77635684e-15,28.817168 -1.77635684e-15,27.3632812 L-1.77635684e-15,27.3632812 L-1.77635684e-15,2.63671875 C-1.77635684e-15,1.18283203 1.18283203,0 2.63671875,0 L2.63671875,0 Z M15.8203125,1.7578125 L2.63671875,1.7578125 C2.15208984,1.7578125 1.7578125,2.15208984 1.7578125,2.63671875 L1.7578125,2.63671875 L1.7578125,27.3632812 C1.7578125,27.8479102 2.15208984,28.2421875 2.63671875,28.2421875 L2.63671875,28.2421875 L20.2148437,28.2421875 C20.6995312,28.2421875 21.09375,27.8479102 21.09375,27.3632812 L21.09375,27.3632812 L21.09375,21.3070313 L20.9871094,21.4136719 C20.8906641,21.5101758 20.7730078,21.5828906 20.6435742,21.6260156 L20.6435742,21.6260156 L16.914668,22.8689648 C16.5993164,22.9741406 16.2509766,22.8923438 16.0152539,22.6566211 C15.7798242,22.42125 15.6976172,22.0730273 15.8029102,21.757207 L15.8029102,21.757207 L17.045918,18.0283008 C17.089043,17.8988672 17.1618164,17.7812109 17.2582617,17.6847656 L17.2582617,17.6847656 L18.5962613,16.3466434 C18.9424293,16.0002081 20.1412833,14.8003326 20.7432145,14.1978866 L21.09375,13.8470508 L21.09375,7.03125 L16.6992187,7.03125 C16.2138281,7.03125 15.8203125,6.63773438 15.8203125,6.15234375 L15.8203125,6.15234375 L15.8203125,1.7578125 Z M16.6992188,24.7265625 C17.1846094,24.7265625 17.578125,25.1200781 17.578125,25.6054687 C17.578125,26.0908594 17.1846094,26.484375 16.6992188,26.484375 L16.6992188,26.484375 L11.4257812,26.484375 C10.9403906,26.484375 10.546875,26.0908594 10.546875,25.6054687 C10.546875,25.1200781 10.9403906,24.7265625 11.4257812,24.7265625 L11.4257812,24.7265625 Z M13.1835938,19.3359375 C13.6689844,19.3359375 14.0625,19.7294531 14.0625,20.2148438 C14.0625,20.7002344 13.6689844,21.09375 13.1835938,21.09375 L13.1835938,21.09375 L4.39453125,21.09375 C3.90914062,21.09375 3.515625,20.7002344 3.515625,20.2148438 C3.515625,19.7294531 3.90914062,19.3359375 4.39453125,19.3359375 L4.39453125,19.3359375 Z M19.1226562,18.3062695 L18.6478711,18.7809961 L18.0264258,20.6454492 L19.8908203,20.0240039 L20.3656055,19.5492187 L19.1226562,18.3062695 Z M24.5902734,12.8345508 C23.9668359,13.4585156 21.0272461,16.400625 20.3653711,17.0630273 L20.3653711,17.0630273 L21.6083203,18.3059766 L25.8332227,14.0775 Z M13.1835938,15.8203125 C13.6689844,15.8203125 14.0625,16.2138281 14.0625,16.6992188 C14.0625,17.1846094 13.6689844,17.578125 13.1835938,17.578125 L13.1835938,17.578125 L4.39453125,17.578125 C3.90914062,17.578125 3.515625,17.1846094 3.515625,16.6992188 C3.515625,16.2138281 3.90914062,15.8203125 4.39453125,15.8203125 L4.39453125,15.8203125 Z M13.1835938,12.3046875 C13.6689844,12.3046875 14.0625,12.6982031 14.0625,13.1835938 C14.0625,13.6689844 13.6689844,14.0625 13.1835938,14.0625 L13.1835938,14.0625 L4.39453125,14.0625 C3.90914062,14.0625 3.515625,13.6689844 3.515625,13.1835938 C3.515625,12.6982031 3.90914062,12.3046875 4.39453125,12.3046875 L4.39453125,12.3046875 Z M27.9820898,10.6839844 C27.6394336,10.3413281 27.0819727,10.3412695 26.739082,10.6839844 L26.739082,10.6839844 L25.8327539,11.5910742 L27.0757031,12.8340234 L27.9817383,11.9272266 C28.3265039,11.5824023 28.3246875,11.0267578 27.9820898,10.6839844 Z M16.6992188,8.7890625 C17.1846094,8.7890625 17.578125,9.18257813 17.578125,9.66796875 C17.578125,10.1533594 17.1846094,10.546875 16.6992188,10.546875 L16.6992188,10.546875 L4.39453125,10.546875 C3.90914062,10.546875 3.515625,10.1533594 3.515625,9.66796875 C3.515625,9.18257813 3.90914062,8.7890625 4.39453125,8.7890625 L4.39453125,8.7890625 Z M17.709631,1.75732221 L17.5781836,1.7578125 L17.5781836,5.2734375 L21.0938086,5.2734375 C21.0938086,5.08582031 21.1152539,4.78013672 20.8363477,4.50117187 L20.8363477,4.50117187 L18.3504492,2.01521484 C18.1278255,1.79263672 17.8847852,1.7605787 17.709631,1.75732221 Z",
    id: "Contract",
    className: "aph-icon-fill",
    fillRule: "nonzero"
  })));
};

var IconCoupon = function IconCoupon(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Cupom-/-White",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(3.000000, 7.000000)",
    className: "aph-icon-fill",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23.296875,1.43712575 C22.9091719,1.43712575 22.59375,1.11477844 22.59375,0.718562874 C22.59375,0.321724551 22.2789375,0 21.890625,0 L2.109375,0 C1.7210625,0 1.40625,0.321724551 1.40625,0.718562874 C1.40625,1.11477844 1.09082813,1.43712575 0.703125,1.43712575 C0.3148125,1.43712575 0,1.7588503 0,2.15568862 L0,13.8443114 C0,14.2411497 0.3148125,14.5628743 0.703125,14.5628743 C1.09082813,14.5628743 1.40625,14.8852216 1.40625,15.2814371 C1.40625,15.6782754 1.7210625,16 2.109375,16 L21.890625,16 C22.2789375,16 22.59375,15.6782754 22.59375,15.2814371 C22.59375,14.8852216 22.9091719,14.5628743 23.296875,14.5628743 C23.6851875,14.5628743 24,14.2411497 24,13.8443114 L24,2.15568862 C24,1.7588024 23.6851875,1.43712575 23.296875,1.43712575 Z M22.59375,13.2489102 C21.99525,13.4657725 21.5201719,13.9512814 21.3079688,14.5629222 L2.69203125,14.5629222 C2.479875,13.9512814 2.00475,13.4657725 1.40625,13.2489102 L1.40625,2.75108982 C2.00475,2.53422754 2.47982813,2.04871856 2.69203125,1.43707784 L21.3079688,1.43707784 C21.520125,2.04871856 21.99525,2.53422754 22.59375,2.75108982 L22.59375,13.2489102 Z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.765625,7.03125 C15.9287344,7.03125 16.8750469,6.08498437 16.8750469,4.921875 C16.8750469,3.75876563 15.9287344,2.8125 14.765625,2.8125 C13.6025156,2.8125 12.65625,3.75876563 12.65625,4.921875 C12.65625,6.08498437 13.6025156,7.03125 14.765625,7.03125 Z M14.765625,4.21875 C15.1533281,4.21875 15.4687969,4.53417188 15.4687969,4.921875 C15.4687969,5.30957812 15.153375,5.625 14.765625,5.625 C14.377875,5.625 14.0625,5.30957812 14.0625,4.921875 C14.0625,4.53417188 14.3779219,4.21875 14.765625,4.21875 Z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.078125,8.62495313 C17.9150156,8.62495313 16.96875,9.57121875 16.96875,10.7343281 C16.96875,11.8974375 17.9150156,12.8437031 19.078125,12.8437031 C20.2412344,12.8437031 21.1875,11.8974375 21.1875,10.7343281 C21.1875,9.57121875 20.2412344,8.62495313 19.078125,8.62495313 Z M19.078125,11.4375 C18.6904219,11.4375 18.375,11.1220781 18.375,10.734375 C18.375,10.3466719 18.6904219,10.03125 19.078125,10.03125 C19.4658281,10.03125 19.78125,10.3466719 19.78125,10.734375 C19.78125,11.1220781 19.4658281,11.4375 19.078125,11.4375 Z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.8877813,3.81529687 C20.6132344,3.54070312 20.1680156,3.54070312 19.8934219,3.81529687 L12.2293594,11.4793594 C11.9547656,11.7539531 11.9547656,12.199125 12.2293594,12.4737187 C12.3666563,12.6110156 12.5466094,12.6796875 12.7265156,12.6796875 C12.9064219,12.6796875 13.0864219,12.6110625 13.2236719,12.4737187 L20.8877344,4.80965625 C21.1624219,4.5350625 21.1624219,4.08989062 20.8877812,3.81529687 L20.8877813,3.81529687 Z",
    id: "Path"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.515625,4.21875 L7.21875,4.21875 C7.6070625,4.21875 7.921875,3.9039375 7.921875,3.515625 C7.921875,3.1273125 7.6070625,2.8125 7.21875,2.8125 L3.515625,2.8125 C3.1273125,2.8125 2.8125,3.1273125 2.8125,3.515625 C2.8125,3.9039375 3.1273125,4.21875 3.515625,4.21875 Z",
    id: "Path"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.703125,5.625 L3.515625,5.625 C3.1273125,5.625 2.8125,5.9398125 2.8125,6.328125 C2.8125,6.7164375 3.1273125,7.03125 3.515625,7.03125 L9.703125,7.03125 C10.0914375,7.03125 10.40625,6.7164375 10.40625,6.328125 C10.40625,5.9398125 10.0914375,5.625 9.703125,5.625 Z",
    id: "Path"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.21875,8.4375 L3.515625,8.4375 C3.1273125,8.4375 2.8125,8.7523125 2.8125,9.140625 C2.8125,9.5289375 3.1273125,9.84375 3.515625,9.84375 L7.21875,9.84375 C7.6070625,9.84375 7.921875,9.5289375 7.921875,9.140625 C7.921875,8.7523125 7.6070625,8.4375 7.21875,8.4375 Z",
    id: "Path"
  }))));
};

var IconDelete = function IconDelete(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-delete-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-delete-path",
    className: "aph-icon-fill",
    d: "M15,0 C23.2842712,-1.52179594e-15 30,6.71572875 30,15 C30,23.2842712 23.2842712,30 15,30 C6.71572875,30 1.01453063e-15,23.2842712 0,15 C-1.01453063e-15,6.71572875 6.71572875,1.52179594e-15 15,0 Z M24.25,18 C24.6642136,18 25,17.6642136 25,17.25 L25,13.75 C25,13.3357864 24.6642136,13 24.25,13 L5.75,13 C5.33578644,13 5,13.3357864 5,13.75 L5,17.25 C5,17.6642136 5.33578644,18 5.75,18 L24.25,18 Z"
  })));
};

var IconExternalTicket = function IconExternalTicket(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-external-ticket-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-external-ticket-subgroup",
    transform: "translate(15.000000, 15.500000) rotate(-270.000000) translate(-15.000000, -15.500000) translate(4.000000, 4.500000)",
    className: "aph-icon-stroke",
    strokeWidth: "2.3"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-external-ticket-path-one",
    d: "M1.5,2 L19.5,2 C20.0522847,2 20.5,2.44771525 20.5,3 L20.5,7 C17.8333333,7 16.5,8 16.5,10 C16.5,12 17.8333333,13 20.5,13 L20.5,17 C20.5,17.5522847 20.0522847,18 19.5,18 L5.5,18",
    transform: "translate(11.000000, 10.000000) rotate(-90.000000) translate(-11.000000, -10.000000)"
  }), /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-external-ticket-path-two",
    d: "M0,21.5 L22,14.5"
  }))));
};

var IconEye = function IconEye(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-eye-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-eye-path",
    d: "M5.34544747,14.7030573 C8.56363164,11.5676858 11.7818158,10 15,10 C18.2181923,10 21.4363846,11.5676937 24.6545769,14.7030811 L24.6545535,14.7031051 C25.0946794,15.1319063 25.1038597,15.8363109 24.6750585,16.2764368 C24.6683125,16.2833609 24.6614766,16.2901967 24.6545525,16.2969427 C21.4363684,19.4323142 18.2181842,21 15,21 C11.7818077,21 8.5636154,19.4323063 5.34542309,16.2969189 L5.34544646,16.2968949 C4.90532063,15.8680937 4.89614027,15.1636891 5.32494155,14.7235632 C5.33168748,14.7166391 5.33852337,14.7098033 5.34544747,14.7030573 Z M15,18.25 C16.5362373,18.25 17.7816037,17.0187831 17.7816037,15.5 C17.7816037,13.9812169 16.5362373,12.75 15,12.75 C13.4637627,12.75 12.2183963,13.9812169 12.2183963,15.5 C12.2183963,17.0187831 13.4637627,18.25 15,18.25 Z",
    className: "aph-icon-fill"
  })));
};

var IconFilter = function IconFilter(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Filter-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(5.000000, 6.000000)",
    id: "Path",
    className: "aph-icon-stroke",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "20 0 0 0 8 9.46 8 16 12 18 12 9.46"
  }))));
};

var IconFlash = function IconFlash(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-flash-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polygon", {
    id: "aph-icon-flash-polygon",
    className: "aph-icon-stroke",
    strokeWidth: "2",
    points: "17 5 9 17 15 17 13 25 21 13 15 13"
  })));
};

var IconFlashOff = function IconFlashOff(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-flash-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("polygon", {
    id: "aph-icon-flash-polygon",
    className: "aph-icon-stroke",
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "17 5 9 17 15 17 13 25 21 13 15 13"
  }), /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-flash-path",
    d: "M6,6 L24,24",
    className: "aph-icon-stroke",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })));
};

var IconFacebook = function IconFacebook(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 20 20",
    id: "aph-icon-facebook"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-facebook-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-facebook-group-2",
    transform: "translate(-610.000000, -110.000000)",
    fill: "#0084FF",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-facebook-group-3",
    transform: "translate(610.000000, 110.000000)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-facebook-path",
    d: "M9.97964286,0.041547619 C4.46809524,0.041547619 0,4.50964286 0,10.0211905 C0,14.9644048 3.59785714,19.0582143 8.3152381,19.8509524 L8.3152381,12.1032143 L5.90785714,12.1032143 L5.90785714,9.31511905 L8.3152381,9.31511905 L8.3152381,7.25928571 C8.3152381,4.87392857 9.77214286,3.57404762 11.9003571,3.57404762 C12.9196429,3.57404762 13.7955952,3.65 14.049881,3.68345238 L14.049881,6.17678571 L12.5738095,6.1775 C11.4166667,6.1775 11.1935714,6.7272619 11.1935714,7.53428571 L11.1935714,9.31369048 L13.9546429,9.31369048 L13.5945238,12.1017857 L11.1935714,12.1017857 L11.1935714,19.917619 C16.1311905,19.3166667 19.9591667,15.1185714 19.9591667,10.0183333 C19.9591667,4.50964286 15.4910714,0.041547619 9.97964286,0.041547619 Z"
  })))));
};

var IconHelp = function IconHelp(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Help-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("g", {
    id: "help-circle",
    transform: "translate(5.000000, 5.000000)",
    className: "aph-icon-stroke",
    strokeWidth: "2.3"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "Oval",
    cx: "10",
    cy: "10",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.09,7 C7.57543688,5.62004444 8.98538362,4.79140632 10.4271763,5.0387121 C11.868969,5.28601788 12.9221794,6.53715293 12.9200034,8 C12.9200034,10 9.92,11 9.92,11",
    id: "Path"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10,15 L10,14.5",
    id: "Path"
  }))));
};

var IconInfo = function IconInfo(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 20 20"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-info-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-info-path",
    className: "aph-icon-fill",
    d: "M10,3.25 C10.9664983,3.25 11.75,4.03350169 11.75,5 C11.75,5.96649831 10.9664983,6.75 10,6.75 C9.03350169,6.75 8.25,5.96649831 8.25,5 C8.25,4.03350169 9.03350169,3.25 10,3.25 Z M8.6875,8.75 L11.3125,8.75 C11.5541246,8.75 11.75,8.94587542 11.75,9.1875 L11.75,16.3125 C11.75,16.5541246 11.5541246,16.75 11.3125,16.75 L8.6875,16.75 C8.44587542,16.75 8.25,16.5541246 8.25,16.3125 L8.25,9.1875 C8.25,8.94587542 8.44587542,8.75 8.6875,8.75 Z"
  })));
};

var IconItems = function IconItems(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Tab-Destaques-/-Normal",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Eventos",
    transform: "translate(2.000000, 0.500000)"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle-Copy-3",
    className: "aph-icon-stroke",
    strokeWidth: "1.5",
    transform: "translate(7.000000, 12.000000) rotate(-270.000000) translate(-7.000000, -12.000000) ",
    x: "-4.75",
    y: "4.25",
    width: "23.5",
    height: "15.5",
    rx: "1.05"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle-Copy-3",
    className: "aph-icon-fill",
    transform: "translate(18.000000, 11.950000) rotate(-270.000000) translate(-18.000000, -11.950000) ",
    x: "7",
    y: "11.2",
    width: "22",
    height: "1.5",
    rx: "0.75"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle-Copy-5",
    className: "aph-icon-fill",
    transform: "translate(21.000000, 11.750000) rotate(-270.000000) translate(-21.000000, -11.750000) ",
    x: "12",
    y: "11",
    width: "18",
    height: "1.5",
    rx: "0.75"
  }))));
};

var IconLabels = function IconLabels(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Labels",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    className: "aph-icon-fill aph-icon-stroke",
    id: "director-2",
    transform: "translate(4.500000, 1.000000)",
    fillRule: "nonzero",
    strokeWidth: "0.3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.8370214,15.7212632 L20.7060273,15.4236881 C20.4320702,14.7923054 19.7235484,14.4720535 19.0686004,14.6835712 C19.0288655,14.6962339 18.9836725,14.7099883 18.9415361,14.723306 L18.9415361,11.625731 L19.8934269,11.625731 C20.1044363,11.625731 20.2754932,11.4546741 20.2754932,11.2436647 L20.2754932,2.40155945 C20.2754932,2.19055008 20.1044363,2.01949318 19.8934269,2.01949318 L18.9415361,2.01949318 L18.9415361,0.400187135 C18.9414156,0.189227667 18.7704293,0.0181208577 18.5594698,0.0181208577 L16.337809,0.0181208577 C16.1267996,0.0181208577 15.9557427,0.189177756 15.9557427,0.400187135 L15.9557427,2.01949318 L5.00332164,2.01949318 L5.00332164,0.400187135 C5.00320119,0.189227667 4.83221483,0.0181208577 4.62125536,0.0181208577 L2.39850292,0.0181208577 C2.18754346,0.0181208577 2.01655709,0.189227667 2.01643665,0.400187135 L2.01643665,2.01949318 L1.71929825,2.01949318 C1.14685772,2.02021489 0.682982925,2.48408968 0.682261209,3.05653021 L0.682261209,10.588694 C0.682982925,11.1611345 1.14685772,11.6250093 1.71929825,11.625731 L2.01643665,11.625731 L2.01643665,14.723306 C1.97430019,14.7102066 1.92910721,14.6964522 1.88937232,14.6835712 C1.23442429,14.4720535 0.525902498,14.7923054 0.251945419,15.4236881 L0.120951267,15.7210448 C-0.0314679216,16.0677312 -0.0302612369,16.4626884 0.124273499,16.808437 C0.278808236,17.1541856 0.572274434,17.4185154 0.932241715,17.5361871 C1.09620273,17.5896764 1.28417934,17.6475322 1.48678363,17.7071345 L7.74415595,21.8500429 L2.6925848,25.1945419 C2.00482564,25.6577091 1.81933216,26.588877 2.27710293,27.2802397 C2.73487369,27.9716025 3.66456135,28.1643774 4.35948538,27.7120312 L10.4795322,23.6603821 L16.5997973,27.7126862 C17.2951636,28.1728675 18.23192,27.9822123 18.6921013,27.286846 C19.1522827,26.5914797 18.9616275,25.6547232 18.2662612,25.1945419 L18.2662612,25.1945419 L13.2138168,21.8500429 L19.4707524,17.7073528 C19.673575,17.6475322 19.8615517,17.5896764 20.0255127,17.5361871 C20.385505,17.4186122 20.6790236,17.1543438 20.833606,16.8086233 C20.9881883,16.4629029 20.9894289,16.0679479 20.8370214,15.7212632 L20.8370214,15.7212632 Z M18.1645224,26.3053723 C18.2244688,26.6007628 18.1006629,26.9031905 17.8507882,27.0717484 C17.6009135,27.2403063 17.2741291,27.2418333 17.0226901,27.0756179 L11.1716179,23.2023392 L12.521731,22.3083041 L17.84446,25.8322651 L17.84446,25.8322651 C18.0102087,25.9407331 18.1255088,26.1111666 18.1645224,26.3053723 L18.1645224,26.3053723 Z M18.1798051,14.9451228 C17.717614,15.0689123 17.2292242,15.1830955 16.7209669,15.2859259 L16.7209669,11.625731 L18.1798051,11.625731 L18.1798051,14.9451228 Z M16.7198752,0.782253411 L18.1787135,0.782253411 L18.1787135,2.01949318 L16.7198752,2.01949318 L16.7198752,0.782253411 Z M2.7805692,0.782253411 L4.23918908,0.782253411 L4.23918908,2.01949318 L2.7805692,2.01949318 L2.7805692,0.782253411 Z M1.44639376,10.588694 L1.44639376,3.05653021 C1.44663418,2.90590893 1.56867696,2.78386615 1.71929825,2.78362573 L19.5126706,2.78362573 L19.5126706,10.8615984 L1.71929825,10.8615984 C1.56867696,10.861358 1.44663418,10.7393152 1.44639376,10.588694 L1.44639376,10.588694 Z M4.23918908,11.625731 L4.23918908,15.2859259 C3.73071345,15.1830955 3.24254191,15.0689123 2.7805692,14.9451228 L2.7805692,11.625731 L4.23918908,11.625731 Z M5.00332164,11.625731 L15.9557427,11.625731 L15.9557427,15.4304561 C14.1466247,15.7375176 12.3145144,15.8889335 10.4795322,15.8830409 C8.64454908,15.8889539 6.81243708,15.7375379 5.00332164,15.4304561 L5.00332164,11.625731 Z M3.68442885,18.2448655 C4.8246252,18.4712968 5.97610336,18.6366578 7.13394152,18.7402417 L9.78831969,20.4977466 L8.4379883,21.3917817 L3.68442885,18.2448655 Z M10.4795322,20.0397037 L8.67552437,18.8452554 C9.25211696,18.8725458 9.8522885,18.8889201 10.4795322,18.8889201 C11.1067758,18.8889201 11.7071657,18.8727641 12.28354,18.8452554 L10.4795322,20.0397037 Z M17.2746355,18.2448655 L3.93768421,27.0756179 C3.59404037,27.3029052 3.13120928,27.2085795 2.90392204,26.8649357 C2.67663479,26.5212918 2.77096045,26.0584607 3.11460429,25.8311735 L13.8259961,18.7402417 C14.983465,18.6359706 16.1346161,18.4706147 17.2746355,18.2448655 L17.2746355,18.2448655 Z M20.1346745,16.4982768 C20.0691825,16.6470645 19.9432814,16.7608123 19.7886316,16.8109162 C17.0453957,17.6973099 13.6923821,18.1263158 10.4795322,18.1245745 C7.12499025,18.0824327 4.47869006,17.8204444 1.17021442,16.8096062 C1.01807198,16.7551057 0.894765779,16.6408682 0.828824171,16.4933238 C0.762882562,16.3457795 0.760019247,16.1777127 0.820896686,16.0280078 L0.951890838,15.7306511 C1.04295379,15.5203405 1.2499643,15.3839622 1.4791423,15.3832982 C4.10644834,16.1039844 6.30802339,16.6128967 10.4795322,16.6471735 C14.5807407,16.5928109 16.7253333,16.1686082 19.3039532,15.4110253 C19.5856325,15.3205999 19.8899359,15.4588166 20.0071735,15.7304327 L20.1381676,16.0280078 C20.2044812,16.1777957 20.2035277,16.3488011 20.1355478,16.4978402 L20.1346745,16.4982768 Z",
    id: "Shape"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.32009357,7.82100585 L8.27031579,9.6237037 C8.30786745,9.76517739 8.33908772,10.0747602 8.78031969,9.9948538 L10.4795322,9.39009747 L12.1787446,9.99419883 C12.2973072,10.0302494 12.4259161,10.0085616 12.5260994,9.93562301 C12.6262827,9.86268444 12.6864231,9.74695305 12.6885302,9.62304873 L12.6391891,7.82035088 L13.7386667,6.39120468 C13.8095183,6.28965661 13.8286753,6.16076959 13.790421,6.04300466 C13.7521667,5.92523973 13.6609246,5.83221435 13.543922,5.79168811 L11.8141442,5.2834308 L10.7945731,3.79577388 C10.7196155,3.69752327 10.6031114,3.63986853 10.4795322,3.63986853 C10.3559529,3.63986853 10.2394489,3.69752327 10.1644912,3.79577388 L9.14492008,5.2834308 L7.4151423,5.79321637 C7.29813976,5.83374261 7.2068976,5.92676799 7.1686433,6.04453292 C7.13038899,6.16229786 7.14954599,6.29118487 7.22039766,6.39273294 L8.32009357,7.82100585 Z M9.49139961,5.97704483 C9.57559585,5.95211571 9.64866705,5.89900806 9.69837037,5.82661988 L10.4795322,4.68675244 L11.260694,5.82661988 C11.3103973,5.89900806 11.3834685,5.95211571 11.4676647,5.97704483 L12.7931072,6.36784405 L11.9505965,7.46295517 C11.8968716,7.53250584 11.8689392,7.61854079 11.8715634,7.70638596 L11.9095517,9.08750097 L10.6074698,8.62378168 C10.5247132,8.5943722 10.4343511,8.5943722 10.3515945,8.62378168 L9.04973099,9.086846 L9.0877193,7.70573099 C9.09013317,7.61781374 9.06214118,7.5317557 9.00846784,7.46208187 L8.16530214,6.36784405 L9.49139961,5.97704483 Z",
    id: "Shape"
  }))));
};

var IconList = function IconList(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-list-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-list-group",
    className: "aph-icon-fill",
    d: "M7,11 C5.8954305,11 5,10.1045695 5,9 C5,7.8954305 5.8954305,7 7,7 C8.1045695,7 9,7.8954305 9,9 C9,10.1045695 8.1045695,11 7,11 Z M7,17 C5.8954305,17 5,16.1045695 5,15 C5,13.8954305 5.8954305,13 7,13 C8.1045695,13 9,13.8954305 9,15 C9,16.1045695 8.1045695,17 7,17 Z M7,23 C5.8954305,23 5,22.1045695 5,21 C5,19.8954305 5.8954305,19 7,19 C8.1045695,19 9,19.8954305 9,21 C9,22.1045695 8.1045695,23 7,23 Z M12.5,7.5 L23.5,7.5 C24.3284271,7.5 25,8.17157288 25,9 C25,9.82842712 24.3284271,10.5 23.5,10.5 L12.5,10.5 C11.6715729,10.5 11,9.82842712 11,9 C11,8.17157288 11.6715729,7.5 12.5,7.5 Z M12.5,13.5 L23.5,13.5 C24.3284271,13.5 25,14.1715729 25,15 C25,15.8284271 24.3284271,16.5 23.5,16.5 L12.5,16.5 C11.6715729,16.5 11,15.8284271 11,15 C11,14.1715729 11.6715729,13.5 12.5,13.5 Z M12.5,19.5 L23.5,19.5 C24.3284271,19.5 25,20.1715729 25,21 C25,21.8284271 24.3284271,22.5 23.5,22.5 L12.5,22.5 C11.6715729,22.5 11,21.8284271 11,21 C11,20.1715729 11.6715729,19.5 12.5,19.5 Z"
  })));
};

var IconStyled = _styled("svg", {
  target: "ess9ju00",
  label: "IconStyled"
})(animations.spin(), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb25Mb2FkZXJEb251dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTzZCIiwiZmlsZSI6Ikljb25Mb2FkZXJEb251dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RmlsdGVyZWRQcm9wcyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGFuaW1hdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNvbnN0IEljb25TdHlsZWQgPSBzdHlsZWQuc3ZnYCR7YW5pbWF0aW9ucy5zcGluKCl9O2A7XG5jb25zdCBJY29uTG9hZGVyRG9udXQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCAuLi5yZXN0IH0gPSBnZXRGaWx0ZXJlZFByb3BzKHByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uU3R5bGVkIHsuLi5yZXN0fSB2aWV3Qm94PVwiMCAwIDMwIDMwXCI+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwiYXBoLWljb24tbG9hZGVyLWdyb3VwXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxwYXRoXG5cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJhcGgtaWNvbi1sb2FkZXItcGF0aFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC1pY29uLXN0cm9rZVwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTUsMjIuNSBDMTkuMTQyMTM1NiwyMi41IDIyLjUsMTkuMTQyMTM1NiAyMi41LDE1IEMyMi41LDEwLjg1Nzg2NDQgMTkuMTQyMTM1Niw3LjUgMTUsNy41IEMxMC44NTc4NjQ0LDcuNSA3LjUsMTAuODU3ODY0NCA3LjUsMTVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvSWNvblN0eWxlZD5cbiAgICApO1xufTtcblxuSWNvbkxvYWRlckRvbnV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBzaXplIDogMjAsXG59O1xuXG5JY29uTG9hZGVyRG9udXQucHJvcFR5cGVzID0ge1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemUgOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbkxvYWRlckRvbnV0O1xuIl19 */"));

var IconLoaderDonut = function IconLoaderDonut(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement(IconStyled, _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-loader-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-loader-path",
    className: "aph-icon-stroke",
    strokeWidth: "2",
    d: "M15,22.5 C19.1421356,22.5 22.5,19.1421356 22.5,15 C22.5,10.8578644 19.1421356,7.5 15,7.5 C10.8578644,7.5 7.5,10.8578644 7.5,15"
  })));
};

IconLoaderDonut.defaultProps = {
  color: 'white',
  size: 20
};
IconLoaderDonut.propTypes = {
  color: propTypes.string,
  size: propTypes.number
};

var IconLoading = function IconLoading(props) {
  var _getFilteredProps = getFilteredProps(props),
      height = _getFilteredProps.height,
      width = _getFilteredProps.width,
      size = _getFilteredProps.size,
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color", "height", "width", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    width: width || size || 120,
    height: height || size || 30,
    viewBox: "0 0 120 30",
    className: "aph-icon-fill"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    fillOpacity: "0.3"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    from: "9",
    to: "9",
    begin: "0s",
    dur: "0.8s",
    values: "9;15;9",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "0.5",
    to: "0.5",
    begin: "0s",
    dur: "0.8s",
    values: ".5;1;.5",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, /*#__PURE__*/React.createElement("animate", {
    attributeName: "r",
    from: "15",
    to: "15",
    begin: "0s",
    dur: "0.8s",
    values: "15;9;15",
    calcMode: "linear",
    repeatCount: "indefinite"
  }), /*#__PURE__*/React.createElement("animate", {
    attributeName: "fill-opacity",
    from: "1",
    to: "1",
    begin: "0s",
    dur: "0.8s",
    values: "1;.5;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  })));
};

var IconLock = function IconLock(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-lock-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    className: "aph-icon-stroke",
    id: "aph-icon-lock-rect",
    strokeWidth: "2",
    x: "8",
    y: "14",
    width: "14",
    height: "10",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-fill",
    id: "aph-icon-lock-path",
    d: "M9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 C18.3137085,5 21,7.6862915 21,11 L21,13 L19,13 L19,11 C19,8.790861 17.209139,7 15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 Z"
  })));
};

var IconLogout = function IconLogout(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Logout-/-White",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("g", {
    id: "log-out",
    transform: "translate(6.000000, 6.000000)",
    className: "aph-icon-stroke",
    strokeWidth: "2.3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,2 C0,0.8954305 0.8954305,0 2,0 L6,0",
    id: "Path"
  }), /*#__PURE__*/React.createElement("polyline", {
    id: "Path",
    points: "13 14 18 9 13 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18,9 L6,9",
    id: "Path"
  }))));
};

var IconMinus = function IconMinus(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-minus",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "aph-icon-rect-minus",
    className: "aph-icon-fill",
    rx: "2.5",
    x: "14.5",
    y: "5",
    width: "2",
    height: "20",
    transform: "translate(15.000000, 15.000000) rotate(-270.000000) translate(-15.000000, -15.000000) "
  })));
};

var IconOptions = function IconOptions(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-options",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-path-options",
    className: "aph-icon-fill",
    d: "M7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 C8.88071187,12.5 10,13.6192881 10,15 C10,16.3807119 8.88071187,17.5 7.5,17.5 Z M15,17.5 C13.6192881,17.5 12.5,16.3807119 12.5,15 C12.5,13.6192881 13.6192881,12.5 15,12.5 C16.3807119,12.5 17.5,13.6192881 17.5,15 C17.5,16.3807119 16.3807119,17.5 15,17.5 Z M22.5,17.5 C21.1192881,17.5 20,16.3807119 20,15 C20,13.6192881 21.1192881,12.5 22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 Z"
  })));
};

var IconPencil = function IconPencil(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-polygon-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-path-refresh",
    className: "aph-icon-stroke",
    strokeWidth: "2",
    transform: "translate(13.427922, 16.427922) rotate(-315.000000) translate(-13.427922, -16.427922)",
    d: "M9.92792206,3.92792206 L16.9279221,3.92792206 C18.0324916,3.92792206 18.9279221,4.82335256 18.9279221,5.92792206 L18.9279221,20.0888985 C18.9279221,20.4844205 18.8106482,20.8710621 18.5909276,21.1999397 L13.8436734,28.3056257 C13.6902707,28.5352389 13.3797749,28.5970196 13.1501618,28.4436168 C13.0955478,28.4071297 13.0486578,28.3602397 13.0121707,28.3056257 L8.26491652,21.1999397 C8.04519592,20.8710621 7.92792206,20.4844205 7.92792206,20.0888985 L7.92792206,5.92792206 C7.92792206,4.82335256 8.82335256,3.92792206 9.92792206,3.92792206 Z"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "aph-icon-polygon-refresh",
    className: "aph-icon-fill",
    transform: "translate(5.999679, 23.856166) rotate(-315.000000) translate(-5.999679, -23.856166)",
    points: "8.67125147 21.8612882 5.9996786 25.8510429 3.32810572 21.8612882"
  })));
};

var IconPlus = function IconPlus(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-plus",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-path-plus",
    className: "aph-icon-fill",
    d: "M17.5,12.5 L22.5,12.5 C23.8807119,12.5 25,13.6192881 25,15 C25,16.3807119 23.8807119,17.5 22.5,17.5 L17.5,17.5 L17.5,22.5 C17.5,23.8807119 16.3807119,25 15,25 C13.6192881,25 12.5,23.8807119 12.5,22.5 L12.5,17.5 L7.5,17.5 C6.11928813,17.5 5,16.3807119 5,15 C5,13.6192881 6.11928813,12.5 7.5,12.5 L12.5,12.5 L12.5,7.5 C12.5,6.11928813 13.6192881,5 15,5 C16.3807119,5 17.5,6.11928813 17.5,7.5 L17.5,12.5 Z"
  })));
};

var IconQRCode = function IconQRCode(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-qrcode",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-path-qrcode",
    className: "aph-icon-fill",
    d: "M6,19 L10,19 C10.5522847,19 11,19.4477153 11,20 L11,24 C11,24.5522847 10.5522847,25 10,25 L6,25 C5.44771525,25 5,24.5522847 5,24 L5,20 C5,19.4477153 5.44771525,19 6,19 Z M7.3,20.8 C7.02385763,20.8 6.8,21.0238576 6.8,21.3 L6.8,22.8 C6.8,23.0761424 7.02385763,23.3 7.3,23.3 L8.8,23.3 C9.07614237,23.3 9.3,23.0761424 9.3,22.8 L9.3,21.3 C9.3,21.0238576 9.07614237,20.8 8.8,20.8 L7.3,20.8 Z M6,5 L10,5 C10.5522847,5 11,5.44771525 11,6 L11,10 C11,10.5522847 10.5522847,11 10,11 L6,11 C5.44771525,11 5,10.5522847 5,10 L5,6 C5,5.44771525 5.44771525,5 6,5 Z M7.3,6.8 C7.02385763,6.8 6.8,7.02385763 6.8,7.3 L6.8,8.8 C6.8,9.07614237 7.02385763,9.3 7.3,9.3 L8.8,9.3 C9.07614237,9.3 9.3,9.07614237 9.3,8.8 L9.3,7.3 C9.3,7.02385763 9.07614237,6.8 8.8,6.8 L7.3,6.8 Z M20,5 L24,5 C24.5522847,5 25,5.44771525 25,6 L25,10 C25,10.5522847 24.5522847,11 24,11 L20,11 C19.4477153,11 19,10.5522847 19,10 L19,6 C19,5.44771525 19.4477153,5 20,5 Z M21.3,6.8 C21.0238576,6.8 20.8,7.02385763 20.8,7.3 L20.8,8.8 C20.8,9.07614237 21.0238576,9.3 21.3,9.3 L22.8,9.3 C23.0761424,9.3 23.3,9.07614237 23.3,8.8 L23.3,7.3 C23.3,7.02385763 23.0761424,6.8 22.8,6.8 L21.3,6.8 Z M24,17 C24.5522847,17 25,17.4477153 25,18 L25,24 C25,24.5522847 24.5522847,25 24,25 L16,25 C15.4477153,25 15,24.5522847 15,24 C15,23.4477153 15.4477153,23 16,23 L22,23 C22.5522847,23 23,22.5522847 23,22 L23,18 C23,17.4477153 23.4477153,17 24,17 Z M14,22 C13.4477153,22 13,21.5522847 13,21 L13,19 C13,18.4477153 13.4477153,18 14,18 L20,18 C20.5522847,18 21,18.4477153 21,19 C21,19.5522847 20.5522847,20 20,20 L16,20 C15.4477153,20 15,20.4477153 15,21 C15,21.5522847 14.5522847,22 14,22 Z M14,11 C14.5522847,11 15,11.4477153 15,12 L15,15 C15,15.5522847 14.5522847,16 14,16 L6,16 C5.44771525,16 5,15.5522847 5,15 C5,14.4477153 5.44771525,14 6,14 L12,14 C12.5522847,14 13,13.5522847 13,13 L13,12 C13,11.4477153 13.4477153,11 14,11 Z M16,5 C16.5522847,5 17,5.44771525 17,6 L17,8 C17,8.55228475 16.5522847,9 16,9 C15.4477153,9 15,8.55228475 15,8 L15,6 C15,5.44771525 15.4477153,5 16,5 Z M17.9988769,13.0002805 L24.0011231,13.0019657 C24.552833,13.0021206 25,13.4494132 25,14.0011231 C25,14.5526327 24.5529131,14.9997196 24.0014035,14.9997196 C24.0013101,14.9997196 24.0012166,14.9997196 24.0011231,14.9997195 L17.9988769,14.9980343 C17.447167,14.9978794 17,14.5505868 17,13.9988769 C17,13.4473673 17.4470869,13.0002804 17.9985965,13.0002804 C17.9986899,13.0002804 17.9987834,13.0002804 17.9988769,13.0002805 Z"
  })));
};

var IconRefresh = function IconRefresh(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Refresh-/-Ocean",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group",
    transform: "translate(1.500000, 6.000000)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-fill",
    id: "Path-4-Copy-3",
    transform: "translate(21.649747, 10.449747) rotate(-315.000000) translate(-21.649747, -10.449747) ",
    d: "M19.0247475,13.9497475 C18.5414983,13.9497475 18.1497475,13.5579966 18.1497475,13.0747475 L18.1497475,7.82474747 C18.1497475,7.34149831 18.5414983,6.94974747 19.0247475,6.94974747 L24.2747475,6.94974747 C24.7579966,6.94974747 25.1497475,7.34149831 25.1497475,7.82474747 C25.1497475,8.30799662 24.7579966,8.69974747 24.2747475,8.69974747 L20.7747475,8.69974747 C20.2914983,8.69974747 19.8997475,9.09149831 19.8997475,9.57474747 L19.8997475,13.0747475 C19.8997475,13.5579966 19.5079966,13.9497475 19.0247475,13.9497475 Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-fill",
    id: "Path-4-Copy-4",
    transform: "translate(5.349747, 7.449747) rotate(-135.000000) translate(-5.349747, -7.449747) ",
    d: "M2.72474747,10.9497475 C2.24149831,10.9497475 1.84974747,10.5579966 1.84974747,10.0747475 L1.84974747,4.82474747 C1.84974747,4.34149831 2.24149831,3.94974747 2.72474747,3.94974747 L7.97474747,3.94974747 C8.45799662,3.94974747 8.84974747,4.34149831 8.84974747,4.82474747 C8.84974747,5.30799662 8.45799662,5.69974747 7.97474747,5.69974747 L4.47474747,5.69974747 C3.99149831,5.69974747 3.59974747,6.09149831 3.59974747,6.57474747 L3.59974747,10.0747475 C3.59974747,10.5579966 3.20799662,10.9497475 2.72474747,10.9497475 Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-stroke",
    id: "Oval",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20,2.63083009 C18.4097668,1.00521174 16.2144208,0 13.789779,0 C8.93531811,0 5,4.02943725 5,9"
  }), /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-stroke",
    id: "Oval-Copy",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    transform: "translate(14.500000, 13.500000) rotate(-180.000000) translate(-14.500000, -13.500000) ",
    d: "M22,11.6308301 C20.4097668,10.0052117 18.2144208,9 15.789779,9 C10.9353181,9 7,13.0294373 7,18"
  }))));
};

var IconScan = function IconScan(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-scan",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    className: "aph-icon-stroke",
    id: "aph-icon-polyline-one-scan",
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "20 5 25 5 25 10"
  }), /*#__PURE__*/React.createElement("polyline", {
    className: "aph-icon-stroke",
    id: "aph-icon-polyline-two-scan",
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "5 20 10 20 10 25",
    transform: "translate(7.500000, 22.500000) rotate(-180.000000) translate(-7.500000, -22.500000)"
  }), /*#__PURE__*/React.createElement("polyline", {
    className: "aph-icon-stroke",
    id: "aph-icon-polyline-tree-scan",
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "5 5 10 5 10 10",
    transform: "translate(7.500000, 7.500000) rotate(-90.000000) translate(-7.500000, -7.500000)"
  }), /*#__PURE__*/React.createElement("polyline", {
    className: "aph-icon-stroke",
    id: "aph-icon-polyline-four-scan",
    strokeWidth: "2",
    strokeLinejoin: "round",
    points: "20 20 25 20 25 25",
    transform: "translate(22.500000, 22.500000) rotate(-270.000000) translate(-22.500000, -22.500000)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-stroke",
    id: "aph-icon-path-scan",
    d: "M3,15 L27,15",
    strokeWidth: "2"
  })));
};

var IconSearch = function IconSearch(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "IconSearchGroup",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    className: "aph-icon-stroke",
    id: "IconSearchCircle",
    strokeWidth: "2",
    cx: "12.5",
    cy: "12.9",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    className: "aph-icon-stroke",
    d: "M17.5,17.9 L23,23.4",
    id: "IconSearchLiner",
    strokeWidth: "2"
  })));
};

var IconSettings = function IconSettings(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Settings-/-Mercury",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("g", {
    id: "settings",
    transform: "translate(4.000000, 4.000000)",
    className: "aph-icon-stroke",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "Oval",
    cx: "11",
    cy: "11",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.4,14 C18.1276535,14.6170901 18.2583341,15.3378133 18.73,15.82 L18.79,15.88 C19.1655541,16.2551365 19.3765733,16.7641815 19.3765733,17.295 C19.3765733,17.8258185 19.1655541,18.3348635 18.79,18.71 C18.4148635,19.0855541 17.9058185,19.2965733 17.375,19.2965733 C16.8441815,19.2965733 16.3351365,19.0855541 15.96,18.71 L15.9,18.65 C15.4178133,18.1783341 14.6970901,18.0476535 14.08,18.32 C13.4755294,18.5790683 13.0826229,19.1723571 13.08,19.83 L13.08,20 C13.08,21.1045695 12.1845695,22 11.08,22 C9.9754305,22 9.08,21.1045695 9.08,20 L9.08,19.91 C9.0641566,19.2326708 8.63587177,18.6338652 8,18.4 C7.38290993,18.1276535 6.66218673,18.2583341 6.18,18.73 L6.12,18.79 C5.74486349,19.1655541 5.2358185,19.3765733 4.705,19.3765733 C4.1741815,19.3765733 3.66513651,19.1655541 3.29,18.79 C2.91444591,18.4148635 2.70342669,17.9058185 2.70342669,17.375 C2.70342669,16.8441815 2.91444591,16.3351365 3.29,15.96 L3.35,15.9 C3.82166588,15.4178133 3.95234646,14.6970901 3.68,14.08 C3.42093172,13.4755294 2.82764292,13.0826229 2.17,13.08 L2,13.08 C0.8954305,13.08 0,12.1845695 0,11.08 C0,9.9754305 0.8954305,9.08 2,9.08 L2.09,9.08 C2.76732918,9.0641566 3.36613483,8.63587177 3.6,8 C3.87234646,7.38290993 3.74166588,6.66218673 3.27,6.18 L3.21,6.12 C2.83444591,5.74486349 2.62342669,5.2358185 2.62342669,4.705 C2.62342669,4.1741815 2.83444591,3.66513651 3.21,3.29 C3.58513651,2.91444591 4.0941815,2.70342669 4.625,2.70342669 C5.1558185,2.70342669 5.66486349,2.91444591 6.04,3.29 L6.1,3.35 C6.58218673,3.82166588 7.30290993,3.95234646 7.92,3.68 L8,3.68 C8.60447061,3.42093172 8.99737709,2.82764292 9,2.17 L9,2 C9,0.8954305 9.8954305,0 11,0 C12.1045695,0 13,0.8954305 13,2 L13,2.09 C13.0026229,2.74764292 13.3955294,3.34093172 14,3.6 C14.6170901,3.87234646 15.3378133,3.74166588 15.82,3.27 L15.88,3.21 C16.2551365,2.83444591 16.7641815,2.62342669 17.295,2.62342669 C17.8258185,2.62342669 18.3348635,2.83444591 18.71,3.21 C19.0855541,3.58513651 19.2965733,4.0941815 19.2965733,4.625 C19.2965733,5.1558185 19.0855541,5.66486349 18.71,6.04 L18.65,6.1 C18.1783341,6.58218673 18.0476535,7.30290993 18.32,7.92 L18.32,8 C18.5790683,8.60447061 19.1723571,8.99737709 19.83,9 L20,9 C21.1045695,9 22,9.8954305 22,11 C22,12.1045695 21.1045695,13 20,13 L19.91,13 C19.2523571,13.0026229 18.6590683,13.3955294 18.4,14 Z",
    id: "Path"
  }))));
};

var IconShareLink = function IconShareLink(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "link",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "unlink"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fillOpacity: "0",
    fill: "#FFFFFF",
    x: "0",
    y: "0",
    width: "30",
    height: "30"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.6083636,6.38218182 C21.7654545,4.53927273 18.7665455,4.54 16.9232727,6.38218182 L13.5807273,9.72472727 C13.2967273,10.0087273 13.2967273,10.4690909 13.5807273,10.7530909 C13.8647273,11.0370909 14.3250909,11.0370909 14.6090909,10.7530909 L17.9516364,7.41054545 C18.5665455,6.796 19.3883636,6.45709091 20.2654545,6.45709091 C21.1429091,6.45709091 21.9647273,6.796 22.5796364,7.41090909 C23.1945455,8.02581818 23.5334545,8.84763636 23.5334545,9.72509091 C23.5334545,10.6021818 23.1945455,11.424 22.5796364,12.0389091 L18.2090909,16.4105455 C16.9327273,17.6861818 14.8567273,17.6861818 13.5803636,16.4105455 C13.2963636,16.1265455 12.836,16.1265455 12.552,16.4105455 C12.268,16.6945455 12.268,17.1552727 12.552,17.4389091 C13.4734545,18.3603636 14.684,18.8210909 15.8945455,18.8210909 C17.1050909,18.8210909 18.3156364,18.3603636 19.2370909,17.4389091 L23.6083636,13.0676364 C24.4981818,12.1781818 24.9883636,10.9909091 24.9883636,9.72509091 C24.9883636,8.45890909 24.4981818,7.272 23.6083636,6.38218182 Z",
    id: "Path",
    className: "aph-icon-fill",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.8661818,19.7527273 L12.0378182,22.5810909 C11.4229091,23.196 10.6010909,23.5349091 9.72363636,23.5349091 C8.84654545,23.5349091 8.02436364,23.196 7.40945455,22.5810909 C6.13345455,21.3050909 6.13345455,19.2287273 7.40945455,17.9527273 L11.5236364,13.8385455 C12.1385455,13.224 12.9603636,12.8850909 13.8378182,12.8850909 C14.7149091,12.8850909 15.5367273,13.224 16.1516364,13.8385455 C16.4356364,14.1225455 16.896,14.1225455 17.18,13.8385455 C17.464,13.5545455 17.464,13.0941818 17.18,12.8101818 C15.3374545,10.9676364 12.3385455,10.9672727 10.4949091,12.8101818 L6.38072727,16.9247273 C5.49127273,17.8141818 5.00109091,19.0014545 5.00109091,20.2672727 C5.00109091,21.5327273 5.49127273,22.72 6.38109091,23.6094545 C7.27054545,24.4992727 8.45781818,24.9894545 9.72327273,24.9894545 C10.9890909,24.9894545 12.1763636,24.4992727 13.0658182,23.6094545 L15.8941818,20.7810909 C16.1781818,20.4970909 16.1781818,20.0367273 15.8941818,19.7527273 C15.6101818,19.4687273 15.1501818,19.4687273 14.8661818,19.7527273 Z",
    id: "Path",
    className: "aph-icon-fill",
    fillRule: "nonzero"
  }))));
};

IconShareLink.defaultProps = {
  size: 30,
  width: 30,
  height: 30
};

var IconSignal = function IconSignal(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Chart-/-White",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("g", {
    id: "bar-chart",
    transform: "translate(8.000000, 7.000000)",
    className: "aph-icon-stroke",
    strokeWidth: "2.3"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7,16 L7,6",
    id: "Path"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13,16 L13,0",
    id: "Path"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1,16 L1,12",
    id: "Path"
  }))));
};

var IconTicketbooth = function IconTicketbooth(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-defs-path-ticketbooth",
    d: "M6,9 L24,9 C24.5522847,9 25,9.44771525 25,10 L25,13 C23.6666667,13.0001869 23,13.6668536 23,15 C23,16.3331464 23.6666667,16.9998131 25,17 L25,20 C25,20.5522847 24.5522847,21 24,21 L6,21 C5.44771525,21 5,20.5522847 5,20 L5,17 C6.33333333,16.9998131 7,16.3331464 7,15 C7,13.6668536 6.33333333,13.0001869 5,13 L5,10 C5,9.44771525 5.44771525,9 6,9 Z"
  })), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-ticketbooth",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "aph-icon-mask-ticketbooth",
    className: "aph-icon-fill"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#aph-icon-defs-path-ticketbooth"
  })), /*#__PURE__*/React.createElement("use", {
    id: "aph-icon-use-ticketbooth",
    className: "aph-icon-fill",
    xlinkHref: "#aph-icon-defs-path-ticketbooth",
    transform: "translate(15.000000, 15.000000) rotate(-45.000000) translate(-15.000000, -15.000000)"
  })));
};

var IconTimes = function IconTimes(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-times-group",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-times-subgroup",
    transform: "translate(9.000000, 9.000000)",
    className: "aph-icon-stroke",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-times-path-one",
    d: "M0,12 L12,0 L0,12 Z",
    transform: "translate(6.000000, 6.000000) rotate(-90.000000) translate(-6.000000, -6.000000)"
  }), /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-times-path-two",
    d: "M0,12 L12,0 L0,12 Z",
    transform: "translate(6.000000, 6.000000) rotate(-180.000000) translate(-6.000000, -6.000000)"
  }))));
};

var IconTransfer = function IconTransfer(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-transfer",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-path-transfer",
    className: "aph-icon-fill",
    transform: "translate(14.992641, 14.985028) rotate(-90.000000) translate(-14.992641, -14.985028)",
    d: "M11.206603,8.37817585 C11.2271209,8.45799335 11.2380326,8.54166506 11.2380326,8.62788535 L11.2380326,19.9850282 C11.2380326,20.537313 10.7903174,20.9850282 10.2380326,20.9850282 C9.68574787,20.9850282 9.23803262,20.537313 9.23803262,19.9850282 L9.23803262,8.62788535 C9.23803262,8.54608042 9.24785541,8.46656973 9.26638585,8.3904684 L6.70710678,10.9497475 C6.31658249,11.3402718 5.68341751,11.3402718 5.29289322,10.9497475 C4.90236893,10.5592232 4.90236893,9.9260582 5.29289322,9.53553391 L9.53553391,5.29289322 C9.9260582,4.90236893 10.5592232,4.90236893 10.9497475,5.29289322 L15.1923882,9.53553391 C15.5829124,9.9260582 15.5829124,10.5592232 15.1923882,10.9497475 C14.8018639,11.3402718 14.1686989,11.3402718 13.7781746,10.9497475 L11.206603,8.37817585 Z M20.6984202,21.6000634 L23.2781746,19.0203089 C23.6686989,18.6297847 24.3018639,18.6297847 24.6923882,19.0203089 C25.0829124,19.4108332 25.0829124,20.0439982 24.6923882,20.4345225 L20.4497475,24.6771632 C20.0592232,25.0676875 19.4260582,25.0676875 19.0355339,24.6771632 L14.7928932,20.4345225 C14.4023689,20.0439982 14.4023689,19.4108332 14.7928932,19.0203089 C15.1834175,18.6297847 15.8165825,18.6297847 16.2071068,19.0203089 L18.7740013,21.5872035 C18.7505574,21.5022863 18.7380326,21.4128383 18.7380326,21.3204649 L18.7380326,9.98502821 C18.7380326,9.43274346 19.1857479,8.98502821 19.7380326,8.98502821 C20.2903174,8.98502821 20.7380326,9.43274346 20.7380326,9.98502821 L20.7380326,21.3204649 C20.7380326,21.417514 20.7242078,21.5113341 20.6984202,21.6000634 Z"
  })));
};

var IconUnlock = function IconUnlock(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["strokeProp", "fillProp"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-unlock",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    id: "aph-icon-rect-unlock",
    className: "aph-icon-stroke",
    strokeWidth: "2",
    x: "8",
    y: "14",
    width: "14",
    height: "10",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    id: "aph-icon-path-unlock",
    className: "aph-icon-fill",
    d: "M21,10 C21,10.5522847 20.5522847,11 20,11 C19.4477153,11 19,10.5522847 19,10 C19,8.34314575 17.6568542,7 16,7 L15,7 C12.790861,7 11,8.790861 11,11 L11,13 L9,13 L9,11 C9,7.6862915 11.6862915,5 15,5 L16,5 C18.7614237,5 21,7.23857625 21,10 Z"
  })));
};

var IconUser = function IconUser(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Icon-/-30-/-Perfil-/-Mercury",
    className: "aph-icon-stroke",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.9132855,17.7160261 C21.1860415,17.7160261 23.9166399,19.3436924 25.000265,21.3295607 L25.5521812,22.3410109 C26.6411712,24.3367109 25.6766726,25.9545455 23.4031446,25.9545455 L7.59388622,25.9545455 C5.31801606,25.9545455 4.36122446,24.3268791 5.44484956,22.3410109 L5.99676577,21.3295607 C7.08575576,19.3338607 9.81519808,17.7160261 12.0837452,17.7160261 L18.9132855,17.7160261 Z M15.1904113,4 C17.8161848,4 19.952635,6.03450072 19.952635,8.53515134 L19.952635,10.7534959 C19.952635,13.2541466 17.8161848,15.2886473 15.1904113,15.2886473 C12.5647887,15.2886473 10.4284894,13.2541466 10.4284894,10.7534959 L10.4284894,8.53515134 C10.4284894,6.03450072 12.5647887,4 15.1904113,4 Z"
  }))));
};

var IconPaymentAmex = function IconPaymentAmex(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "aph-icon-defs-rect-payment-amex",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-payment-amex",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "aph-icon-mask-payment-amex",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#aph-icon-defs-rect-payment-amex"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#27ADE4",
    xlinkHref: "#aph-icon-defs-rect-payment-amex"
  }), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-subgroup-payment-amex",
    mask: "url(#aph-icon-mask-payment-amex)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Shape",
    transform: "translate(0.750000, 9.800000)"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#2D78BC",
    d: "M3.46580854,2.55314286 L2.95162683,1.24857143 L2.44050366,2.55314286 L3.46580854,2.55314286 Z M14.7871207,2.03357143 C14.6838951,2.09907143 14.5619012,2.10121429 14.4157171,2.10121429 L13.5033,2.10121429 L13.5033,1.3745 L14.4279512,1.3745 C14.5587732,1.3745 14.6953646,1.38014286 14.7839927,1.433 C14.8812402,1.48114286 14.9413693,1.58264286 14.9413693,1.72271429 C14.9416463,1.86542857 14.8841598,1.98064286 14.7871207,2.03357143 L14.7871207,2.03357143 Z M21.2940183,2.55314286 L20.7746232,1.24857143 L20.258078,2.55314286 L21.2940183,2.55314286 L21.2940183,2.55314286 Z M9.16455732,3.96507143 L8.39464024,3.96507143 L8.39179024,1.402 L7.30302073,3.96507143 L6.64369756,3.96507143 L5.5523561,1.39985714 L5.5523561,3.96507143 L4.02503415,3.96507143 L3.73655854,3.23514286 L2.1734378,3.23514286 L1.88183415,3.96507143 L1.0664561,3.96507143 L2.41089146,0.692642857 L3.52670122,0.692642857 L4.80350122,3.79078571 L4.80350122,0.692642857 L6.02879268,0.692642857 L7.01141707,2.91257143 L7.91396341,0.692642857 L9.16455732,0.692642857 L9.16455732,3.96507143 L9.16455732,3.96507143 L9.16455732,3.96507143 Z M12.2324085,3.96507143 L9.72406098,3.96507143 L9.72406098,0.692642857 L12.232478,0.692642857 L12.232478,1.37442857 L10.4752793,1.37442857 L10.4752793,1.96428571 L12.1903537,1.96428571 L12.1903537,2.63514286 L10.4752793,2.63514286 L10.4752793,3.28778571 L12.232478,3.28778571 L12.2324085,3.96507143 L12.2324085,3.96507143 Z M15.7689805,1.57435714 C15.7689805,2.0955 15.4344878,2.36571429 15.2397146,2.44621429 C15.404111,2.51171429 15.5445256,2.62664286 15.6111183,2.72228571 C15.7172634,2.8845 15.7356841,3.03021429 15.7356841,3.322 L15.7356841,3.96507143 L14.9782793,3.96507143 L14.9754293,3.55242857 C14.9754293,3.35542857 14.9933634,3.07185714 14.8568415,2.91471429 C14.7470817,2.79978571 14.5801134,2.77464286 14.309572,2.77464286 L13.5033,2.77464286 L13.5033,3.96507143 L12.7524293,3.96507143 L12.7524293,0.692642857 L14.4797378,0.692642857 C14.8636537,0.692642857 15.1463598,0.703071429 15.3887488,0.849285714 C15.6264805,0.996 15.7689805,1.209 15.7689805,1.57435714 L15.7689805,1.57435714 Z M16.9706378,3.96507143 L16.2046134,3.96507143 L16.2046134,0.692928571 L16.9706378,0.692928571 L16.9706378,3.96507143 Z M25.8585366,3.96507143 L24.7941659,3.96507143 L23.3711817,1.50885714 L23.3711817,3.96507143 L21.8417744,3.96507143 L21.5499622,3.23514286 L19.990178,3.23514286 L19.7064293,3.96507143 L18.8277951,3.96507143 C18.4631341,3.96507143 18.0006695,3.88085714 17.7390256,3.60292857 C17.4750183,3.32521429 17.3379402,2.94892857 17.3379402,2.35371429 C17.3379402,1.86885714 17.4196171,1.42442857 17.7429183,1.07457143 C17.9855854,0.813214286 18.3658171,0.692642857 18.8831963,0.692642857 L19.6098768,0.692642857 L19.6098768,1.39371429 L18.8982805,1.39371429 C18.6244024,1.39371429 18.4698768,1.43621429 18.3206341,1.58778571 C18.1926622,1.72592857 18.1047293,1.98628571 18.1047293,2.32921429 C18.1047293,2.67957143 18.1718085,2.93242857 18.311528,3.09735714 C18.4267793,3.227 18.6369146,3.26628571 18.8346073,3.26628571 L19.171672,3.26628571 L20.2299951,0.693 L21.355189,0.693 L22.626289,3.78821429 L22.626289,0.693 L23.7696951,0.693 L25.0894537,2.97171429 L25.0894537,0.693 L25.8585366,0.693 L25.8585366,3.96507143 L25.8585366,3.96507143 Z M1.05783659,4.60785714 L2.34061463,4.60785714 L2.62985488,3.88085714 L3.27722195,3.88085714 L3.56569756,4.60785714 L6.08996341,4.60785714 L6.08996341,4.05221429 L6.31546098,4.61 L7.62555732,4.61 L7.85077683,4.04392857 L7.85077683,4.60785714 L14.1238354,4.60785714 L14.1207073,3.4145 L14.2421451,3.4145 C14.327228,3.41771429 14.3519049,3.426 14.3519049,3.57221429 L14.3519049,4.60785714 L17.5963866,4.60785714 L17.5963866,4.33014286 C17.8583085,4.47635714 18.265372,4.60785714 18.801172,4.60785714 L20.1659049,4.60785714 L20.4579951,3.88085714 L21.1056402,3.88085714 L21.3911963,4.60785714 L24.0213293,4.60785714 L24.0213293,3.91721429 L24.4197732,4.60785714 L26.5275915,4.60785714 L26.5275915,0.044 L24.441322,0.044 L24.441322,0.583071429 L24.1495098,0.044 L22.0088817,0.044 L22.0088817,0.583071429 L21.7409817,0.044 L18.849622,0.044 C18.3660951,0.044 17.940611,0.114571429 17.5967341,0.3105 L17.5967341,0.044 L15.6015256,0.044 L15.6015256,0.3105 C15.3830488,0.108428571 15.0852585,0.044 14.7536159,0.044 L7.46435854,0.044 L6.97534024,1.22264286 L6.47311463,0.044 L4.17691829,0.044 L4.17691829,0.583071429 L3.92458902,0.044 L1.96691707,0.044 L1.05735,2.21392857 L0.014597561,4.60785714 L1.05783659,4.60785714 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFFFFF",
    d: "M3.46580854,2.82035714 L2.95162683,1.51578571 L2.44050366,2.82035714 L3.46580854,2.82035714 Z M14.7871207,2.30078571 C14.6838951,2.36628571 14.5619012,2.36842857 14.4157171,2.36842857 L13.5033,2.36842857 L13.5033,1.64171429 L14.4279512,1.64171429 C14.5587732,1.64171429 14.6953646,1.64735714 14.7839927,1.70021429 C14.8812402,1.74835714 14.9413693,1.84985714 14.9413693,1.98992857 C14.9416463,2.13271429 14.8841598,2.24792857 14.7871207,2.30078571 L14.7871207,2.30078571 Z M21.2940183,2.82035714 L20.7746232,1.51578571 L20.258078,2.82035714 L21.2940183,2.82035714 L21.2940183,2.82035714 Z M9.16455732,4.23235714 L8.39464024,4.23235714 L8.39179024,1.66928571 L7.30302073,4.23235714 L6.64369756,4.23235714 L5.5523561,1.66714286 L5.5523561,4.23235714 L4.02503415,4.23235714 L3.73655854,3.50242857 L2.1734378,3.50242857 L1.88183415,4.23235714 L1.0664561,4.23235714 L2.41089146,0.959928571 L3.52670122,0.959928571 L4.80350122,4.05807143 L4.80350122,0.959928571 L6.02879268,0.959928571 L7.01141707,3.17985714 L7.91396341,0.959928571 L9.16455732,0.959928571 L9.16455732,4.23235714 L9.16455732,4.23235714 L9.16455732,4.23235714 Z M12.2324085,4.23235714 L9.72406098,4.23235714 L9.72406098,0.959928571 L12.232478,0.959928571 L12.232478,1.64171429 L10.4752793,1.64171429 L10.4752793,2.23157143 L12.1903537,2.23157143 L12.1903537,2.90242857 L10.4752793,2.90242857 L10.4752793,3.55507143 L12.232478,3.55507143 L12.2324085,4.23235714 L12.2324085,4.23235714 Z M15.7689805,1.84164286 C15.7689805,2.36278571 15.4344878,2.633 15.2397146,2.7135 C15.404111,2.779 15.5445256,2.89392857 15.6111183,2.98957143 C15.7172634,3.15178571 15.7356841,3.2975 15.7356841,3.58928571 L15.7356841,4.23235714 L14.9782793,4.23235714 L14.9754293,3.81971429 C14.9754293,3.62271429 14.9933634,3.33914286 14.8568415,3.182 C14.7470817,3.06707143 14.5801134,3.04192857 14.309572,3.04192857 L13.5033,3.04192857 L13.5033,4.23235714 L12.7524293,4.23235714 L12.7524293,0.959928571 L14.4797378,0.959928571 C14.8636537,0.959928571 15.1463598,0.970357143 15.3887488,1.11657143 C15.6264805,1.26328571 15.7689805,1.47628571 15.7689805,1.84164286 L15.7689805,1.84164286 Z M16.9706378,4.23235714 L16.2046134,4.23235714 L16.2046134,0.960214286 L16.9706378,0.960214286 L16.9706378,4.23235714 Z M25.8585366,4.23235714 L24.7941659,4.23235714 L23.3711817,1.77614286 L23.3711817,4.23235714 L21.8417744,4.23235714 L21.5499622,3.50242857 L19.990178,3.50242857 L19.7064293,4.23235714 L18.8277951,4.23235714 C18.4631341,4.23235714 18.0006695,4.14814286 17.7390256,3.87021429 C17.4750183,3.5925 17.3379402,3.21621429 17.3379402,2.621 C17.3379402,2.13614286 17.4196171,1.69171429 17.7429183,1.34185714 C17.9855854,1.0805 18.3658171,0.959928571 18.8831963,0.959928571 L19.6098768,0.959928571 L19.6098768,1.661 L18.8982805,1.661 C18.6244024,1.661 18.4698768,1.7035 18.3206341,1.85507143 C18.1926622,1.99321429 18.1047293,2.25357143 18.1047293,2.5965 C18.1047293,2.94685714 18.1718085,3.19971429 18.311528,3.36464286 C18.4267793,3.49428571 18.6369146,3.53357143 18.8346073,3.53357143 L19.171672,3.53357143 L20.2299951,0.960285714 L21.355189,0.960285714 L22.626289,4.0555 L22.626289,0.960285714 L23.7696951,0.960285714 L25.0894537,3.239 L25.0894537,0.960285714 L25.8585366,0.960285714 L25.8585366,4.23235714 L25.8585366,4.23235714 Z M1.05783659,4.87514286 L2.34061463,4.87514286 L2.62985488,4.14814286 L3.27722195,4.14814286 L3.56569756,4.87514286 L6.08996341,4.87514286 L6.08996341,4.3195 L6.31546098,4.87728571 L7.62555732,4.87728571 L7.85077683,4.31121429 L7.85077683,4.87514286 L14.1238354,4.87514286 L14.1207073,3.68178571 L14.2421451,3.68178571 C14.327228,3.685 14.3519049,3.69328571 14.3519049,3.8395 L14.3519049,4.87514286 L17.5963866,4.87514286 L17.5963866,4.59742857 C17.8583085,4.74364286 18.265372,4.87514286 18.801172,4.87514286 L20.1659049,4.87514286 L20.4579951,4.14814286 L21.1056402,4.14814286 L21.3911963,4.87514286 L24.0213293,4.87514286 L24.0213293,4.1845 L24.4197732,4.87514286 L26.5275915,4.87514286 L26.5275915,0.311285714 L24.441322,0.311285714 L24.441322,0.850357143 L24.1495098,0.311285714 L22.0088817,0.311285714 L22.0088817,0.850357143 L21.7409817,0.311285714 L18.849622,0.311285714 C18.3660951,0.311285714 17.940611,0.381857143 17.5967341,0.577785714 L17.5967341,0.311285714 L15.6015256,0.311285714 L15.6015256,0.577785714 C15.3830488,0.375714286 15.0852585,0.311285714 14.7536159,0.311285714 L7.46435854,0.311285714 L6.97534024,1.48992857 L6.47311463,0.311285714 L4.17691829,0.311285714 L4.17691829,0.850357143 L3.92458902,0.311285714 L1.96691707,0.311285714 L1.05735,2.48121429 L0.014597561,4.87514286 L1.05783659,4.87514286 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2D78BC",
    d: "M28.2120805,7.6935 L28.2120805,5.59971429 L27.6924073,5.59971429 L27.6924073,5.59971429 L26.3310805,5.59971429 C25.9115744,5.59971429 25.6064159,5.70421429 25.3908585,5.86642857 L25.3908585,5.59971429 L23.3345488,5.59971429 C23.0057561,5.59971429 22.6195463,5.68414286 22.4374939,5.86642857 L22.4374939,5.59971429 L18.7648171,5.59971429 L18.7648171,5.86642857 C18.4727268,5.64728571 17.9793293,5.59971429 17.7520244,5.59971429 L15.3297329,5.59971429 L15.3297329,5.86642857 C15.0985354,5.63364286 14.5845622,5.59971429 14.2711317,5.59971429 L11.5603646,5.59971429 L10.9400378,6.29807143 L10.3589854,5.59971429 L6.30955244,5.59971429 L6.30955244,10.1630714 L10.282522,10.1630714 L10.9218256,9.45371429 L11.5236622,10.1630714 L13.9729939,10.1657143 L13.9729939,9.09185714 L14.2135756,9.09185714 C14.5384061,9.09721429 14.9215573,9.08357143 15.2596646,8.9315 L15.2596646,10.1627857 L17.279828,10.1627857 L17.279828,8.97314286 L17.3776317,8.97314286 C17.501989,8.97314286 17.5139451,8.97878571 17.5139451,9.10785714 L17.5139451,10.1627857 L23.6502037,10.1627857 C24.0400976,10.1627857 24.447439,10.0587857 24.6731451,9.87092857 L24.6731451,10.1627857 L26.6192085,10.1627857 C27.0244646,10.1627857 27.4200585,10.1037143 27.7209768,9.95242857 L27.7209768,9.94764286 C28.160572,9.65628571 28.4528733,9.14585714 28.4528733,8.56321429 C28.4534268,8.2435 28.3645207,7.9455 28.2120805,7.6935 Z M14.24715,8.42364286 L13.309778,8.42364286 L13.309778,9.52078571 L11.8498134,9.52078571 L10.9246756,8.43778571 L9.9636,9.52078571 L6.98785244,9.52078571 L6.98785244,6.25 L10.0094085,6.25 L10.9335037,7.322 L11.8890878,6.25 L14.2895524,6.25 C14.885411,6.25 15.555161,6.42185714 15.555161,7.32735714 C15.555161,8.23628571 14.9036232,8.42364286 14.24715,8.42364286 Z M18.7679451,8.27535714 C18.8740902,8.43492857 18.8893829,8.58378571 18.892511,8.87242857 L18.892511,9.52085714 L18.1387207,9.52085714 L18.1387207,9.11164286 C18.1387207,8.91492857 18.1566549,8.62364286 18.0170049,8.47128571 C17.9069671,8.35421429 17.7402768,8.32585714 17.4658427,8.32585714 L16.6629073,8.32585714 L16.6629073,9.52078571 L15.9083524,9.52078571 L15.9083524,6.25 L17.6426817,6.25 C18.0229134,6.25 18.299711,6.26735714 18.5465488,6.4045 C18.7837939,6.55335714 18.932828,6.75728571 18.932828,7.13064286 C18.932828,7.65264286 18.5980573,7.91935714 18.4004341,8.00085714 C18.5668463,8.065 18.7039244,8.17992857 18.7679451,8.27535714 Z M21.8560939,6.92671429 L20.0968098,6.92671429 L20.0968098,7.52135714 L21.8132049,7.52135714 L21.8132049,8.18871429 L20.0968098,8.18871429 L20.0968098,8.8395 L21.8560939,8.84271429 L21.8560939,9.52128571 L19.3489976,9.52128571 L19.3489976,6.25 L21.8560939,6.25 L21.8560939,6.92671429 L21.8560939,6.92671429 Z M23.7690695,9.52107143 L22.3060463,9.52107143 L22.3060463,8.8195 L23.7636476,8.8195 C23.9061476,8.8195 24.0070793,8.80028571 24.0705439,8.73828571 C24.1217744,8.68807143 24.1592415,8.61428571 24.1592415,8.52557143 C24.1592415,8.43014286 24.1192024,8.35428571 24.0674159,8.30878571 C24.0096512,8.25857143 23.9308939,8.23635714 23.8000024,8.23635714 C23.0974427,8.21178571 22.2175573,8.25878571 22.2175573,7.22364286 C22.2175573,6.74921429 22.5041561,6.25 23.2915207,6.25 L24.7977805,6.25 L24.7977805,6.94621429 L23.4197707,6.94621429 C23.2832488,6.94621429 23.1942732,6.95157143 23.1185744,7.005 C23.0366195,7.05821429 23.0056866,7.1365 23.0056866,7.24071429 C23.0056866,7.36392857 23.0758939,7.44785714 23.1700829,7.4845 C23.2496744,7.51285714 23.3344793,7.52114286 23.4624512,7.52114286 L23.8671512,7.53314286 C24.2747012,7.543 24.5548354,7.61678571 24.7249317,7.79585714 C24.8713939,7.953 24.9493866,8.15185714 24.9493866,8.48835714 C24.949178,9.19235714 24.5270305,9.52107143 23.7690695,9.52107143 Z M27.6354768,9.20514286 C27.4375756,9.41335714 27.1183756,9.52107143 26.7019976,9.52107143 L25.251139,9.52107143 L25.251139,8.8195 L26.69595,8.8195 C26.8394927,8.8195 26.9399378,8.80028571 27.0002744,8.73828571 C27.0525476,8.68807143 27.088972,8.61428571 27.088972,8.52557143 C27.088972,8.43014286 27.0525476,8.35428571 26.9971463,8.30878571 C26.9427878,8.25857143 26.8634744,8.23635714 26.7323744,8.23635714 C26.0269646,8.21178571 25.1470793,8.25878571 25.1470793,7.22364286 C25.1470793,6.74921429 25.4363195,6.25 26.2249354,6.25 L27.6926854,6.25 L27.6926854,6.946 L26.3524207,6.946 C26.2161073,6.946 26.1251159,6.95164286 26.0483744,7.00507143 C25.969061,7.058 25.9386146,7.13657143 25.9386146,7.24028571 C25.9386146,7.364 26.0054854,7.44742857 26.103011,7.48407143 C26.1826024,7.51292857 26.2674073,7.52121429 26.3922512,7.52121429 L26.7993146,7.53271429 C27.2102707,7.54314286 27.4847049,7.61664286 27.6513951,7.796 C27.6818415,7.82085714 27.7002622,7.84892857 27.7216024,7.87671429 C27.7130524,7.86521429 27.704711,7.85428571 27.6958829,7.84278571 C27.8259402,8.02185714 27.904211,8.2445 27.904211,8.48635714 C27.9041415,8.76364286 27.8014024,9.01514286 27.6354768,9.20514286 Z M9.61951463,6.92671429 L10.4414268,7.87978571 L9.58309024,8.83928571 L7.73587317,8.83928571 L7.73587317,8.1885 L9.38518902,8.1885 L9.38518902,7.52114286 L7.73587317,7.52114286 L7.73587317,6.92671429 L9.61951463,6.92671429 L9.61951463,6.92671429 Z M11.4084805,7.891 L12.5620354,6.60142857 L12.5620354,9.22357143 L11.4084805,7.891 Z M14.7491671,7.32757143 C14.7491671,7.61114286 14.5694085,7.7595 14.2807244,7.7595 L13.3100561,7.7595 L13.3100561,6.92671429 L14.2898305,6.92671429 C14.5605805,6.92671429 14.7491671,7.04135714 14.7491671,7.32757143 Z M18.1018098,7.28 C18.1018098,7.41978571 18.0435585,7.53257143 17.9460329,7.59378571 C17.8456573,7.65578571 17.7213,7.66114286 17.5753939,7.66114286 L16.6624207,7.66114286 L16.6624207,6.92671429 L17.58735,6.92671429 C17.7213,6.92671429 17.85525,6.92964286 17.9460329,6.98578571 C18.0438366,7.03842857 18.1018098,7.13971429 18.1018098,7.28 Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FFFFFF",
    d: "M28.2120805,7.96078571 L28.2120805,5.867 L27.6924073,5.867 L27.6924073,5.867 L26.3310805,5.867 C25.9115744,5.867 25.6064159,5.9715 25.3908585,6.13371429 L25.3908585,5.867 L23.3345488,5.867 C23.0057561,5.867 22.6195463,5.95142857 22.4374939,6.13371429 L22.4374939,5.867 L18.7648171,5.867 L18.7648171,6.13371429 C18.4727268,5.91457143 17.9793293,5.867 17.7520244,5.867 L15.3297329,5.867 L15.3297329,6.13371429 C15.0985354,5.90092857 14.5845622,5.867 14.2711317,5.867 L11.5603646,5.867 L10.9400378,6.56535714 L10.3589854,5.867 L6.30955244,5.867 L6.30955244,10.4303571 L10.282522,10.4303571 L10.9218256,9.721 L11.5236622,10.4303571 L13.9729939,10.433 L13.9729939,9.35914286 L14.2135756,9.35914286 C14.5384061,9.3645 14.9215573,9.35085714 15.2596646,9.19878571 L15.2596646,10.4300714 L17.279828,10.4300714 L17.279828,9.24042857 L17.3776317,9.24042857 C17.501989,9.24042857 17.5139451,9.24607143 17.5139451,9.37514286 L17.5139451,10.4300714 L23.6502037,10.4300714 C24.0400976,10.4300714 24.447439,10.3260714 24.6731451,10.1382143 L24.6731451,10.4300714 L26.6192085,10.4300714 C27.0244646,10.4300714 27.4200585,10.371 27.7209768,10.2197143 L27.7209768,10.2149286 C28.160572,9.92357143 28.4528733,9.41314286 28.4528733,8.8305 C28.4534268,8.51078571 28.3645207,8.21278571 28.2120805,7.96078571 Z M14.24715,8.69092857 L13.309778,8.69092857 L13.309778,9.78807143 L11.8498134,9.78807143 L10.9246756,8.70507143 L9.9636,9.78807143 L6.98785244,9.78807143 L6.98785244,6.51721429 L10.0094085,6.51721429 L10.9335037,7.58921429 L11.8890878,6.51721429 L14.2895524,6.51721429 C14.885411,6.51721429 15.555161,6.68907143 15.555161,7.59457143 C15.555161,8.50357143 14.9036232,8.69092857 14.24715,8.69092857 Z M18.7679451,8.54257143 C18.8740902,8.70214286 18.8893829,8.851 18.892511,9.13964286 L18.892511,9.78807143 L18.1387207,9.78807143 L18.1387207,9.37885714 C18.1387207,9.18214286 18.1566549,8.89085714 18.0170049,8.7385 C17.9069671,8.62142857 17.7402768,8.59307143 17.4658427,8.59307143 L16.6629073,8.59307143 L16.6629073,9.788 L15.9083524,9.788 L15.9083524,6.51714286 L17.6426817,6.51714286 C18.0229134,6.51714286 18.299711,6.5345 18.5465488,6.67164286 C18.7837939,6.8205 18.932828,7.02442857 18.932828,7.39778571 C18.932828,7.91978571 18.5980573,8.1865 18.4004341,8.268 C18.5668463,8.33228571 18.7039244,8.44721429 18.7679451,8.54257143 Z M21.8560939,7.194 L20.0968098,7.194 L20.0968098,7.78864286 L21.8132049,7.78864286 L21.8132049,8.456 L20.0968098,8.456 L20.0968098,9.10678571 L21.8560939,9.11 L21.8560939,9.78857143 L19.3489976,9.78857143 L19.3489976,6.51721429 L21.8560939,6.51721429 L21.8560939,7.194 L21.8560939,7.194 Z M23.7690695,9.78835714 L22.3060463,9.78835714 L22.3060463,9.08678571 L23.7636476,9.08678571 C23.9061476,9.08678571 24.0070793,9.06757143 24.0705439,9.00557143 C24.1217744,8.95535714 24.1592415,8.88157143 24.1592415,8.79285714 C24.1592415,8.69742857 24.1192024,8.62157143 24.0674159,8.57607143 C24.0096512,8.52585714 23.9308939,8.50364286 23.8000024,8.50364286 C23.0974427,8.47907143 22.2175573,8.52607143 22.2175573,7.49092857 C22.2175573,7.0165 22.5041561,6.51728571 23.2915207,6.51728571 L24.7977805,6.51728571 L24.7977805,7.2135 L23.4197707,7.2135 C23.2832488,7.2135 23.1942732,7.21885714 23.1185744,7.27228571 C23.0366195,7.3255 23.0056866,7.40378571 23.0056866,7.508 C23.0056866,7.63121429 23.0758939,7.71514286 23.1700829,7.75178571 C23.2496744,7.78014286 23.3344793,7.78842857 23.4624512,7.78842857 L23.8671512,7.80042857 C24.2747012,7.81028571 24.5548354,7.88407143 24.7249317,8.06314286 C24.8713939,8.22028571 24.9493866,8.41914286 24.9493866,8.75564286 C24.949178,9.45957143 24.5270305,9.78835714 23.7690695,9.78835714 Z M27.6354768,9.47242857 C27.4375756,9.68064286 27.1183756,9.78835714 26.7019976,9.78835714 L25.251139,9.78835714 L25.251139,9.08678571 L26.69595,9.08678571 C26.8394927,9.08678571 26.9399378,9.06757143 27.0002744,9.00557143 C27.0525476,8.95535714 27.088972,8.88157143 27.088972,8.79285714 C27.088972,8.69742857 27.0525476,8.62157143 26.9971463,8.57607143 C26.9427878,8.52585714 26.8634744,8.50364286 26.7323744,8.50364286 C26.0269646,8.47907143 25.1470793,8.52607143 25.1470793,7.49092857 C25.1470793,7.0165 25.4363195,6.51728571 26.2249354,6.51728571 L27.6926854,6.51728571 L27.6926854,7.21328571 L26.3524207,7.21328571 C26.2161073,7.21328571 26.1251159,7.21892857 26.0483744,7.27235714 C25.969061,7.32528571 25.9386146,7.40385714 25.9386146,7.50757143 C25.9386146,7.63128571 26.0054854,7.71471429 26.103011,7.75135714 C26.1826024,7.78021429 26.2674073,7.7885 26.3922512,7.7885 L26.7993146,7.8 C27.2102707,7.81042857 27.4847049,7.88392857 27.6513951,8.06328571 C27.6818415,8.08814286 27.7002622,8.11621429 27.7216024,8.144 C27.7130524,8.1325 27.704711,8.12157143 27.6958829,8.11007143 C27.8259402,8.28914286 27.904211,8.51178571 27.904211,8.75364286 C27.9041415,9.03092857 27.8014024,9.28242857 27.6354768,9.47242857 Z M9.61951463,7.194 L10.4414268,8.14707143 L9.58309024,9.10657143 L7.73587317,9.10657143 L7.73587317,8.45578571 L9.38518902,8.45578571 L9.38518902,7.78842857 L7.73587317,7.78842857 L7.73587317,7.194 L9.61951463,7.194 L9.61951463,7.194 Z M11.4084805,8.15828571 L12.5620354,6.86871429 L12.5620354,9.49085714 L11.4084805,8.15828571 Z M14.7491671,7.59485714 C14.7491671,7.87842857 14.5694085,8.02678571 14.2807244,8.02678571 L13.3100561,8.02678571 L13.3100561,7.194 L14.2898305,7.194 C14.5605805,7.194 14.7491671,7.30864286 14.7491671,7.59485714 Z M18.1018098,7.54728571 C18.1018098,7.68707143 18.0435585,7.79985714 17.9460329,7.86107143 C17.8456573,7.92307143 17.7213,7.92842857 17.5753939,7.92842857 L16.6624207,7.92842857 L16.6624207,7.194 L17.58735,7.194 C17.7213,7.194 17.85525,7.19692857 17.9460329,7.25307143 C18.0438366,7.30571429 18.1018098,7.407 18.1018098,7.54728571 Z"
  })))));
};

var IconPaymentBankBillet = function IconPaymentBankBillet(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "aph-icon-defs-rect-payment-bank-billet",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "aph-icon-group-payment-bank-billet",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#aph-icon-defs-rect-payment-bank-billet"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#F8F8F8",
    xlinkHref: "#aph-icon-defs-rect-payment-bank-billet"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#000000",
    mask: "url(#mask-2)",
    d: "M12.7692308,4 L14.3076923,4 L14.3076923,26.5 L12.7692308,26.5 L12.7692308,4 Z M17.2307692,4 L18.7692308,4 L18.7692308,26.5 L17.2307692,26.5 L17.2307692,4 Z M21.6923077,4 L25.5384615,4 L25.5384615,26.5 L21.6923077,26.5 L21.6923077,4 Z M4.46153846,4 L9.84615385,4 L9.84615385,26.5 L4.46153846,26.5 L4.46153846,4 Z M0,4 L1.53846154,4 L1.53846154,26.5 L0,26.5 L0,4 Z M28.4615385,4 L30,4 L30,26.5 L28.4615385,26.5 L28.4615385,4 Z"
  })));
};

var IconPaymentDiners = function IconPaymentDiners(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-Diners",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#00529E",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Diners",
    mask: "url(#mask-2)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(5.250000, 7.500000)"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Path",
    fill: "#FFFFFF",
    fillRule: "evenodd",
    d: "M11.4131034,14.9672626 C15.6312672,14.9870659 19.4819569,11.631305 19.4819569,7.54826152 C19.4819569,3.08456586 15.6307069,-0.00162978907 11.4131034,5.68434189e-14 L7.78251724,5.68434189e-14 C3.51448276,-0.00162978907 -2.84217094e-14,3.08532673 -2.84217094e-14,7.54826152 C-2.84217094e-14,11.6320659 3.51448276,14.9870659 7.78251724,14.9672626 L11.4131034,14.9672626 L11.4131034,14.9672626 Z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    fill: "#00529E",
    fillRule: "nonzero",
    d: "M9.44965517,11.5570652 L9.44965517,3.45076087 C11.129569,4.07543478 12.3220948,5.65358696 12.3250086,7.50369565 C12.3220948,9.35391304 11.1294569,10.9307609 9.44965517,11.5570652 M3.37092241,7.50369565 C3.37428448,5.65434783 4.56524138,4.0775 6.24425862,3.45076087 L6.24425862,11.5557609 C4.56524138,10.9294565 3.37428448,9.35304348 3.37092241,7.50369565 M7.8469569,0.652173913 C3.94673276,0.652934783 0.785267241,3.72 0.784482759,7.50369565 C0.785267241,11.2873913 3.94673276,14.3528261 7.8469569,14.3544565 C11.7488621,14.3528261 14.9111121,11.2873913 14.9111121,7.50369565 C14.9111121,3.72 11.7484138,0.653043478 7.8469569,0.652173913"
  })))));
};

var IconPaymentDiscover = function IconPaymentDiscover(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-Discover",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#F3F2F2",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Discover",
    mask: "url(#mask-2)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(2.500000, 11.000000)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    id: "Oval",
    fill: "#F26E21",
    fillRule: "evenodd",
    cx: "13.2893333",
    cy: "2.11932203",
    rx: "2.07866667",
    ry: "2.11389831"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "5.70733333 7.85986441 5.70733333 5.60237288 7.223 7.21498305 7.223 5.74589831 7.5368 5.74589831 7.5368 7.98840678 6.02113333 6.37959322 6.02113333 7.85952542 5.70733333 7.85952542"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "9.18193333 6.04583051 8.34853333 6.04583051 8.34853333 6.55369492 9.15773333 6.55369492 9.15773333 6.85376271 8.34853333 6.85376271 8.34853333 7.56 9.18193333 7.56 9.18193333 7.85986441 8.03493333 7.85986441 8.03493333 5.74623729 9.18193333 5.74623729 9.18193333 6.04583051"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "10.1672667 6.04583051 10.1672667 7.85966102 9.85346667 7.85966102 9.85346667 6.04583051 9.3758 6.04583051 9.3758 5.7459661 10.644 5.7459661 10.644 6.04583051"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "11.1500667 5.74623729 11.6914 7.15898305 12.2571333 5.64352542 12.7982 7.15898305 13.3729333 5.74623729 13.7136667 5.74623729 12.7847333 7.99410169 12.2501333 6.49640678 11.6928667 7.99566102 10.8095333 5.74630508"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.7738,6.79362712 C13.7738,6.49579661 13.8813333,6.24033898 14.0956,6.02698305 C14.3091333,5.81335593 14.5660667,5.70657627 14.8659333,5.70657627 C15.162,5.70657627 15.416,5.81416949 15.6277333,6.02949153 C15.8405333,6.24515254 15.9465333,6.50359322 15.9465333,6.8060339 C15.9465333,7.10969492 15.8398,7.36766102 15.6264667,7.57952542 C15.4119333,7.79213559 15.153,7.89864407 14.8496667,7.89864407 C14.5815333,7.89864407 14.3402667,7.804 14.1267333,7.61525424 C13.8915333,7.4060339 13.7738,7.1320678 13.7738,6.79362712 Z M14.0903333,6.79694915 C14.0903333,7.03030508 14.1676667,7.22210169 14.3218,7.37281356 C14.4752,7.52352542 14.6526,7.59857627 14.8538667,7.59857627 C15.0716667,7.59857627 15.2557333,7.5219661 15.4056667,7.36901695 C15.5556,7.2140339 15.6304,7.02528814 15.6304,6.80277966 C15.6304,6.57728814 15.5563333,6.38854237 15.4081333,6.23654237 C15.2609333,6.08332203 15.0788667,6.00671186 14.8616,6.00671186 C14.6453333,6.00671186 14.4627333,6.08332203 14.3140667,6.23654237 C14.1649333,6.38725424 14.0903333,6.57444068 14.0903333,6.79694915 Z",
    id: "Shape",
    fill: "#000000",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.0451333,6.95905085 L17.6887333,7.85986441 L17.3050667,7.85986441 L16.7114,6.99484746 L16.6548,6.99484746 L16.6548,7.85986441 L16.341,7.85986441 L16.341,5.74623729 L16.7084667,5.74623729 C16.9833333,5.74623729 17.1814,5.79877966 17.3036667,5.90379661 C17.4384,6.02047458 17.5057333,6.17471186 17.5057333,6.36650847 C17.5057333,6.51620339 17.4636,6.64481356 17.379,6.75233898 C17.2945333,6.85986441 17.1835333,6.92908475 17.0451333,6.95905085 Z M16.6549333,6.71674576 L16.7542,6.71674576 C17.0512667,6.71674576 17.2,6.60128814 17.2,6.37044068 C17.2,6.1540339 17.0555333,6.0459661 16.7664667,6.0459661 L16.6549333,6.0459661 L16.6549333,6.71674576 L16.6549333,6.71674576 Z",
    id: "Shape",
    fill: "#000000",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "#000000",
    fillRule: "evenodd",
    points: "18.3148 6.58942373 19.1238 5.74616949 19.5426 5.74616949 18.6029333 6.70332203 19.5481333 7.85986441 19.1280667 7.85986441 18.3794667 6.91945763 18.3148667 6.98542373 18.3148667 7.85986441 18.0010667 7.85986441 18.0010667 5.74623729 18.3148667 5.74623729 18.3148667 6.58942373"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Group",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.0938,3.13152542 C1.84886667,3.35450847 1.5328,3.45118644 1.03086667,3.45118644 L0.8226,3.45118644 L0.8226,0.797220339 L1.03086667,0.797220339 C1.53273333,0.797220339 1.83633333,0.887525424 2.0938,1.12189831 C2.3622,1.36264407 2.52233333,1.73532203 2.52233333,2.12040678 C2.52233333,2.50569492 2.3622,2.89152542 2.0938,3.13152542 L2.0938,3.13152542 Z M1.18653333,0.117559322 L0.0460666667,0.117559322 L0.0460666667,4.13023729 L1.1808,4.13023729 C1.783,4.13023729 2.21826667,3.98664407 2.6002,3.66705085 C3.0532,3.2880678 3.32213333,2.71654237 3.32213333,2.12569492 C3.32206667,0.941016949 2.44453333,0.117559322 1.18653333,0.117559322 L1.18653333,0.117559322 Z",
    id: "Shape",
    fill: "#0B161F",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "3.68 4.13023729 4.45533333 4.13023729 4.45533333 0.117559322 3.68 0.117559322 3.68 4.13023729"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.3534,1.65688136 C5.8874,1.48257627 5.7502,1.3679322 5.7502,1.15233898 C5.7502,0.899389831 5.9944,0.706847458 6.32893333,0.706847458 C6.56166667,0.706847458 6.75226667,0.802983051 6.95606667,1.03105085 L7.36093333,0.496271186 C7.0272,0.201016949 6.62753333,0.050779661 6.19153333,0.050779661 C5.48806667,0.050779661 4.95073333,0.54420339 4.95073333,1.19918644 C4.95073333,1.75349153 5.20093333,2.0360678 5.92933333,2.30142373 C6.23366667,2.40922034 6.38833333,2.48101695 6.46613333,2.5299661 C6.62106667,2.63247458 6.69913333,2.77627119 6.69913333,2.94474576 C6.69913333,3.27023729 6.44246667,3.51044068 6.09593333,3.51044068 C5.726,3.51044068 5.42793333,3.32427119 5.2488,2.97518644 L4.7484,3.46298305 C5.1056,3.99166102 5.5352,4.22732203 6.12633333,4.22732203 C6.93153333,4.22732203 7.49806698,3.68494915 7.49806698,2.90922034 C7.4984,2.27105085 7.23646667,1.98210169 6.3534,1.65688136",
    id: "Path",
    fill: "#0B161F"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.74286667,2.12569492 C7.74286667,3.30630508 8.66186667,4.22081356 9.84326667,4.22081356 C10.1775333,4.22081356 10.4634,4.15410169 10.8158667,3.98664407 L10.8158667,3.06508475 C10.5053333,3.37837288 10.2306667,3.50447458 9.87866667,3.50447458 C9.09713333,3.50447458 8.54213333,2.93267797 8.54213333,2.12013559 C8.54213333,1.35023729 9.11486667,0.742169492 9.84326667,0.742169492 C10.2124667,0.742169492 10.4933333,0.874305085 10.8158667,1.19349153 L10.8158667,0.272610169 C10.4761333,0.0985762712 10.195,0.026779661 9.86073333,0.026779661 C8.68573333,0.0270508475 7.74286667,0.95979661 7.74286667,2.12569492",
    id: "Path",
    fill: "#0B161F"
  }), /*#__PURE__*/React.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "17.1037333 2.81294915 16.0415333 0.117559322 15.1944 0.117559322 16.8834667 4.23301695 17.3005333 4.23301695 19.0192667 0.117559322 18.1778667 0.117559322 17.1037333 2.81294915"
  }), /*#__PURE__*/React.createElement("polyline", {
    id: "Path",
    fill: "#0B161F",
    points: "19.3717333 4.13023729 21.5728667 4.13023729 21.5728667 3.45118644 20.1472667 3.45118644 20.1472667 2.36698305 21.5182667 2.36698305 21.5182667 1.68786441 20.1472667 1.68786441 20.1472667 0.797152542 21.5728667 0.797152542 21.5728667 0.117559322 19.3717333 0.117559322 19.3717333 4.13023729"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.0875333,1.96461017 L22.8615333,1.96461017 L22.8615333,0.748474576 L23.0997333,0.748474576 C23.5839333,0.748474576 23.8466,0.953966102 23.8466,1.34433898 C23.8466,1.74718644 23.5839333,1.96461017 23.0875333,1.96461017 L23.0875333,1.96461017 Z M24.6446,1.30176271 C24.6446,0.550101695 24.132,0.117559322 23.2364667,0.117559322 L22.0852667,0.117559322 L22.0852667,4.13023729 L22.8613333,4.13023729 L22.8613333,2.51762712 L22.9631333,2.51762712 L24.0362667,4.13023729 L24.9909333,4.13023729 L23.7374667,2.43972881 C24.3230667,2.31952542 24.6446,1.9159322 24.6446,1.30176271 L24.6446,1.30176271 Z",
    id: "Shape",
    fill: "#0B161F",
    fillRule: "nonzero"
  }))))));
};

var IconPaymentElo = function IconPaymentElo(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-Elo",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#000000",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Elo",
    mask: "url(#mask-2)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(6.750000, 7.000000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.77271739,3.64757702 C7.26080435,3.48604504 7.78258696,3.39912924 8.32571739,3.39912924 C10.6947174,3.39912924 12.6724783,5.06631854 13.1255,7.28253133 L16.483587,6.60387728 C15.7129783,2.8377846 12.353913,0.00348955614 8.32571739,0.00348955614 C7.40271739,0.00348955614 6.51604348,0.152484987 5.68632609,0.427082898 L6.77271739,3.64757702",
    id: "Fill-1",
    fill: "#F9C623"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.80971739,14.4310809 L5.08056522,11.8870868 C4.06682609,10.9971854 3.42736957,9.69853198 3.42736957,8.25174478 C3.42736957,6.80601305 4.06606522,5.50800587 5.07917391,4.61911684 L2.80778261,2.07495039 C1.08636957,3.58616514 0,5.79365405 0,8.25174478 C0,10.7115157 1.08680435,12.9196723 2.80971739,14.4310809",
    id: "Fill-3",
    fill: "#009ACB"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.1245217,9.22563251 C12.6696739,11.4405529 10.6938696,13.1045757 8.32571739,13.1045757 C7.78215217,13.1045757 7.259,13.0178753 6.77121739,12.8552879 L5.68343478,16.0770313 C6.51315217,16.3514354 7.40163043,16.5 8.32571739,16.5 C12.3500652,16.5 15.7084783,13.6704008 16.4821957,9.90771149 L13.1245217,9.22563251",
    id: "Fill-4",
    fill: "#DC3E2A"
  })))));
};

var IconPaymentFreepass = function IconPaymentFreepass(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-Cortesia",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#F882B8",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "gift-box",
    mask: "url(#mask-2)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(8.000000, 8.000000)",
    id: "Shape"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.4166667,0.5 L9.70833333,0.5 C9.00228881,0.5 8.40177409,0.953063948 8.17815144,1.58333333 L5.82184856,1.58333333 C5.59822591,0.953063948 4.99771119,0.5 4.29166667,0.5 L1.58333333,0.5 L1.58333333,3.75 L0.5,3.75 L0.5,7.27083333 L1.58333333,7.27083333 L1.58333333,13.5 L12.4166667,13.5 L12.4166667,7.27083333 L13.5,7.27083333 L13.5,3.75 L12.4166667,3.75 L12.4166667,0.5 Z M4.83333333,12.4166667 L2.66666667,12.4166667 L2.66666667,7.27083333 L4.83333333,7.27083333 L4.83333333,12.4166667 Z M4.83333333,6.1875 L1.58333333,6.1875 L1.58333333,4.83333333 L4.83333333,4.83333333 L4.83333333,6.1875 Z M4.83333333,2.66666667 L4.83333333,3.75 L2.66666667,3.75 L2.66666667,1.58333333 L4.29166667,1.58333333 C4.59040325,1.58333333 4.83333333,1.82626342 4.83333333,2.125 L4.83333333,2.66666667 Z M8.08333333,7.27083333 L8.08333333,12.4166667 L5.91666667,12.4166667 L5.91666667,4.83333333 L8.08333333,4.83333333 L8.08333333,7.27083333 Z M8.08333333,3.75 L5.91666667,3.75 L5.91666667,2.66666667 L8.08333333,2.66666667 L8.08333333,3.75 Z M9.16666667,2.66666667 L9.16666667,2.125 C9.16666667,1.82626342 9.40959675,1.58333333 9.70833333,1.58333333 L11.3333333,1.58333333 L11.3333333,3.75 L9.16666667,3.75 L9.16666667,2.66666667 Z M11.3333333,12.4166667 L9.16666667,12.4166667 L9.16666667,7.27083333 L11.3333333,7.27083333 L11.3333333,12.4166667 Z M12.4166667,6.1875 L9.16666667,6.1875 L9.16666667,4.83333333 L12.4166667,4.83333333 L12.4166667,6.1875 Z"
  })))));
};

var IconPaymentMastercard = function IconPaymentMastercard(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-Master",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#2D2D2D",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Master",
    mask: "url(#mask-2)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(3.500000, 8.500000)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    id: "Oval",
    fill: "#EE0005",
    cx: "6.93714953",
    cy: "6.74795455",
    rx: "6.93714953",
    ry: "6.74795455"
  }), /*#__PURE__*/React.createElement("ellipse", {
    id: "Oval",
    fill: "#F9A000",
    cx: "15.5560164",
    cy: "6.74795455",
    rx: "6.93714953",
    ry: "6.74795455"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.61897196,6.74785227 C8.61897196,8.89046591 9.64577103,10.799642 11.2466355,12.0357102 C12.8474474,10.7995909 13.8742991,8.89046591 13.8742991,6.74785227 C13.8742991,4.60523864 12.8475,2.6960625 11.2466355,1.45999432 C9.6458236,2.69616477 8.61897196,4.60528977 8.61897196,6.74785227 Z",
    id: "Path",
    fill: "#FF6300"
  })))));
};

var IconPaymentMoney = function IconPaymentMoney(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-Dinheiro",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#59B47D",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Dinheiro",
    mask: "url(#mask-2)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(7.500000, 7.500000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.5,0 C3.36441039,0 0,3.36441039 0,7.5 C0,11.6352844 3.36441039,15 7.5,15 C11.6352844,15 15,11.6352844 15,7.5 C15,3.36441039 11.6352844,0 7.5,0 Z M7.5,13.75 C4.0538025,13.75 1.25,10.9461975 1.25,7.5 C1.25,4.0538025 4.0538025,1.25 7.5,1.25 C10.9461975,1.25 13.75,4.0538025 13.75,7.5 C13.75,10.9461975 10.9461975,13.75 7.5,13.75 Z",
    id: "Shape",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fillRule: "evenodd",
    points: "8.125 2.8125 6.875 2.8125 6.875 4.375 5 4.375 5 8.125 8.75 8.125 8.75 9.375 5 9.375 5 10.625 6.875 10.625 6.875 12.1875 8.125 12.1875 8.125 10.625 10 10.625 10 6.875 6.25 6.875 6.25 5.625 10 5.625 10 4.375 8.125 4.375"
  })))));
};

var IconPaymentOthers = function IconPaymentOthers(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-Outros",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#6798E5",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Outros",
    mask: "url(#mask-2)",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(8.500000, 8.500000)",
    id: "Shape"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.0414022,0 L5.95806886,0 C2.62687174,0.277241768 0,3.08227604 0,6.49257507 C0,9.90287409 2.62687174,12.7077758 5.95806886,12.9850176 L7.0414022,12.9850176 C10.3728638,12.708041 13,9.90313929 13,6.49257507 C13,3.08201084 10.3728638,0.276976574 7.0414022,0 Z M7.0414022,3.27943458 C8.57647707,3.53877691 9.74973553,4.8807013 9.74973553,6.49257507 C9.74973553,8.10444883 8.57647707,9.44637322 7.0414022,9.70571555 L7.0414022,8.59316866 C7.9743754,8.35093016 8.6664022,7.50236619 8.6664022,6.49230991 C8.6664022,5.48212101 7.9743754,4.63355704 7.0414022,4.39131854 L7.0414022,3.27943458 Z M6.49973553,7.57873695 L5.95806886,7.57873695 L5.95806886,11.8959387 C3.22487384,11.6221443 1.08333333,9.30357579 1.08333333,6.49257507 C1.08333333,3.68157434 3.22487384,1.3628733 5.95806886,1.08921142 L5.95806886,5.40641319 L6.49973553,5.40641319 C7.09720866,5.40641319 7.58306886,5.89354192 7.58306886,6.49257507 C7.58306886,7.09160821 7.09720866,7.57873695 6.49973553,7.57873695 Z M7.0414022,11.8959387 L7.0414022,10.799435 C9.17553711,10.530944 10.8330689,8.70401233 10.8330689,6.49257507 C10.8330689,4.2811378 9.17553711,2.45420612 7.0414022,2.18558257 L7.0414022,1.08921142 C9.77486165,1.3626081 11.9166667,3.68130915 11.9166667,6.49257507 C11.9166667,9.30384098 9.77486165,11.6224094 7.0414022,11.8959387 Z"
  })))));
};

var IconPaymentPaypal = function IconPaymentPaypal(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-PayPal",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#FFC61E",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Logo-PayPal",
    mask: "url(#mask-2)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(9.000000, 7.000000)",
    id: "Path"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3.65643871,15.3022635 L3.91962581,13.5586222 L3.33336774,13.5444505 L0.533922581,13.5444505 L2.47939355,0.678141061 C2.49136448,0.596887959 2.55859173,0.537040578 2.63740645,0.53747169 L7.35766452,0.53747169 C8.92470968,0.53747169 10.0061419,0.877594314 10.5707613,1.54891197 C10.8354581,1.86383816 11.0040387,2.19293603 11.0855613,2.55510115 C11.1711097,2.93511208 11.1726194,3.38913067 11.0890839,3.94287589 L11.0830452,3.98329142 L11.0830452,4.33810826 L11.3477419,4.4945216 C11.5498158,4.6013026 11.7314519,4.74574783 11.8836774,4.92072171 C12.110129,5.1899836 12.2565677,5.53220339 12.3184645,5.9379333 C12.3823742,6.3552105 12.3612387,6.85174412 12.2565677,7.41388737 C12.1357935,8.06053581 11.9405419,8.62372881 11.6768516,9.0845708 C11.4441941,9.4974109 11.1313769,9.85497375 10.7584645,10.1343248 C10.4082194,10.393614 9.99205161,10.5904429 9.52153548,10.7164133 C9.0656129,10.8402843 8.54578065,10.9027447 7.97562581,10.9027447 L7.60827097,10.9027447 C7.3455871,10.9027447 7.09045161,11.0014215 6.89016774,11.1783051 C6.69016783,11.357076 6.55749247,11.6040835 6.51576774,11.8753417 L6.48809032,12.0322799 L6.02310968,15.1054347 L6.00197419,15.2182832 C5.99643871,15.2539748 5.98687742,15.2718207 5.9727871,15.2838928 C5.95913757,15.2955358 5.94210854,15.3020114 5.92447742,15.3022635 L3.65643871,15.3022635 Z",
    fill: "#253B80"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.5983484,4.02423182 C11.5842581,4.1181848 11.5681548,4.21423729 11.5500387,4.31291416 C10.9275484,7.64640787 8.79789677,8.79798797 6.07796129,8.79798797 L4.69308387,8.79798797 C4.36045161,8.79798797 4.08015484,9.04992892 4.02832258,9.39214872 L3.31927742,14.0824494 L3.11849032,15.4119628 C3.10230332,15.5186896 3.13171569,15.6274589 3.19898398,15.7096348 C3.26625226,15.7918108 3.36463555,15.8392127 3.46823226,15.8392127 L5.92447742,15.8392127 C6.21534194,15.8392127 6.46242581,15.6187644 6.50821935,15.3195845 L6.53237419,15.189415 L6.99483871,12.1283324 L7.02452903,11.9603718 C7.06981935,11.6601422 7.31740645,11.4396938 7.60827097,11.4396938 L7.97562581,11.4396938 C10.3553806,11.4396938 12.2183226,10.43193 12.7628129,7.5157135 C12.990271,6.29747403 12.8725161,5.28026244 12.2706581,4.56485511 C12.0799004,4.34354759 11.8520761,4.16034761 11.5983484,4.02423182 L11.5983484,4.02423182 Z",
    fill: "#179BD7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.9471742,3.7533953 C10.7484133,3.69342348 10.5462166,3.6466161 10.3417935,3.61325314 C9.93786423,3.5485053 9.52962978,3.5174392 9.12096774,3.52034992 L5.42125161,3.52034992 C5.13032561,3.52016288 4.8826943,3.74118491 4.8380129,4.04102788 L4.05096774,9.24045927 L4.02832258,9.39214872 C4.07898592,9.05013605 4.36128845,8.79781528 4.69308387,8.79798797 L6.07796129,8.79798797 C8.79789677,8.79798797 10.9275484,7.645883 11.5500387,4.31291416 C11.5686581,4.21423729 11.5842581,4.1181848 11.5983484,4.02423182 C11.4340881,3.93438788 11.2628949,3.85906666 11.0865677,3.7990596 C11.0403405,3.78306126 10.99387,3.76783787 10.9471742,3.7533953 L10.9471742,3.7533953 Z",
    fill: "#222D65"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.8380129,4.04102788 C4.88232115,3.74104677 5.13025311,3.51993221 5.42125161,3.52087479 L9.12096774,3.52087479 C9.55927742,3.52087479 9.9684,3.55079278 10.3417935,3.61377802 C10.594467,3.65519724 10.8436512,3.71714631 11.087071,3.7990596 C11.2707484,3.86256971 11.4413419,3.93762712 11.5988516,4.02423182 C11.7840387,2.79234554 11.5973419,1.95359213 10.9587484,1.19409513 C10.2547355,0.357966102 8.98409032,-1.33226763e-14 7.35816774,-1.33226763e-14 L2.63790968,-1.33226763e-14 C2.30578065,-1.33226763e-14 2.02246452,0.251940951 1.97113548,0.594685621 L0.00503225806,13.5932641 C-0.0135007605,13.7153962 0.020123745,13.8398721 0.0970608222,13.9339481 C0.173997899,14.0280242 0.286545093,14.0822822 0.405096774,14.0824494 L3.31927742,14.0824494 L4.05096774,9.24045927 L4.8380129,4.04102788 Z",
    fill: "#253B80"
  })))));
};

var IconPaymentVisa = function IconPaymentVisa(props) {
  var _getFilteredProps = getFilteredProps(props),
      rest = _objectWithoutPropertiesLoose(_getFilteredProps, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 30 30",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "4",
    width: "30",
    height: "22.5",
    rx: "2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Pagamento-/-Visa",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#path-1"
  })), /*#__PURE__*/React.createElement("use", {
    id: "Fundo",
    fill: "#F3F2F2",
    xlinkHref: "#path-1"
  }), /*#__PURE__*/React.createElement("g", {
    id: "Visa",
    mask: "url(#mask-2)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(3.000000, 11.500000)"
  }, /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd",
    points: "8.07027008 7.32904018 9.20044321 0.15890625 11.0301731 0.15890625 9.90006233 7.32904018"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.4139058,0.344263393 C16.0512881,0.198950893 15.4831787,0.0433258929 14.7737119,0.0433258929 C12.9653601,0.0433258929 11.6915859,1.01604911 11.6806163,2.40964286 C11.6705817,3.4396875 12.589903,4.01424107 13.2844114,4.3575 C13.9966205,4.70825893 14.2361427,4.93332589 14.2326524,5.24678571 C14.2282271,5.72738839 13.663608,5.94709821 13.1375069,5.94709821 C12.4052285,5.94683036 12.0159972,5.83834821 11.4149792,5.57075893 L11.1791967,5.45651786 L10.922223,7.06165179 C11.349723,7.261875 12.140277,7.43551339 12.9609349,7.44428571 C14.8842175,7.44381696 16.1333102,6.48314732 16.1473338,4.99453125 C16.1543144,4.17897321 15.666669,3.55828125 14.6109141,3.04640625 C13.9711911,2.71513393 13.5794044,2.49388393 13.5836427,2.15765625 C13.5836427,1.85973214 13.9154709,1.54104911 14.631669,1.54104911 C15.2300693,1.53100446 15.663615,1.67035714 16.0015512,1.81566964 L16.1652839,1.89837054 L16.4139058,0.344263393 L16.4139058,0.344263393 Z",
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5335526,0.15890625 C19.0951454,0.15890625 18.7784003,0.302745536 18.5857479,0.769553571 L15.8739681,7.32930804 L17.8112742,7.32930804 L18.1879155,6.23055804 L20.5025485,6.23055804 L20.7175762,7.32930804 L22.4398546,7.32930804 L20.9331025,0.159107143 L19.533615,0.159107143 L19.5335526,0.15890625 L19.5335526,0.15890625 Z M18.7019252,4.79584821 C18.8530679,4.38294643 19.4307133,2.79180804 19.4307133,2.79180804 C19.4202424,2.810625 19.581108,2.37689732 19.6734765,2.10776786 L19.7973199,2.72564732 C19.7973199,2.72564732 20.1473476,4.43725446 20.220831,4.79604911 L18.7019252,4.79604911 L18.7019252,4.79584821 Z",
    id: "Shape",
    fill: "#293688",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.73347645,5.07395089 L4.57229917,4.09098214 C4.2383518,2.94515625 3.20191828,1.70537946 2.04051939,1.08421875 L3.65715374,7.32904018 L5.59489612,7.32904018 L8.50094875,0.15890625 L6.56364266,0.15890625 L4.73347645,5.07395089 Z",
    id: "Path",
    fill: "#293688",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0.0512950139,0.15890625 L0.0512950139,0.2746875 C2.34729224,0.867991071 3.94130194,2.36792411 4.5723615,4.09104911 L3.90889197,0.770825893 C3.79813712,0.317075893 3.46250693,0.174709821 3.06536011,0.158973214 L0.0512950139,0.15890625 L0.0512950139,0.15890625 Z",
    id: "Path",
    fill: "#F7981D",
    fillRule: "evenodd"
  })))));
};

var ICONS$1 = {
  adjusts: IconAdjusts,
  "arrow-up": IconArrowUp,
  "arrow-right": IconArrowRight,
  "arrow-down": IconArrowDown,
  "arrow-left": IconArrowLeft,
  bluetooth: IconBluetooth,
  camera: IconCamera,
  card: IconCard,
  cards: IconCards,
  "chart-line": IconCharLine,
  check: IconCheckThin,
  "check-thin": IconCheckThin,
  contract: IconContract,
  coupon: IconCoupon,
  "external-ticket": IconExternalTicket,
  eye: IconEye,
  filter: IconFilter,
  flash: IconFlash,
  "flash-off": IconFlashOff,
  help: IconHelp,
  info: IconInfo,
  items: IconItems,
  labels: IconLabels,
  chair: IconLabels,
  list: IconList,
  loader: IconLoaderDonut,
  loading: IconLoading,
  lock: IconLock,
  logout: IconLogout,
  minus: IconMinus,
  options: IconOptions,
  pencil: IconPencil,
  plus: IconPlus,
  qrcode: IconQRCode,
  scan: IconScan,
  search: IconSearch,
  settings: IconSettings,
  signal: IconSignal,
  "share-link": IconShareLink,
  ticketbooth: IconTicketbooth,
  times: IconTimes,
  transfer: IconTransfer,
  unlock: IconUnlock,
  refresh: IconRefresh,
  delete: IconDelete,
  user: IconUser,
  facebook: IconFacebook,
  amex: IconPaymentAmex,
  "payment-amex": IconPaymentAmex,
  bankbillet: IconPaymentBankBillet,
  "bank-billet": IconPaymentBankBillet,
  "payment-bankbillet": IconPaymentBankBillet,
  "payment-bank-billet": IconPaymentBankBillet,
  boleto: IconPaymentBankBillet,
  "payment-boleto": IconPaymentBankBillet,
  diners: IconPaymentDiners,
  "payment-diners": IconPaymentDiners,
  discover: IconPaymentDiscover,
  "payment-discover": IconPaymentDiscover,
  elo: IconPaymentElo,
  "payment-elo": IconPaymentElo,
  freepass: IconPaymentFreepass,
  "payment-freepass": IconPaymentFreepass,
  master: IconPaymentMastercard,
  mastercard: IconPaymentMastercard,
  "payment-master": IconPaymentMastercard,
  "payment-mastercard": IconPaymentMastercard,
  money: IconPaymentMoney,
  cash: IconPaymentMoney,
  "payment-money": IconPaymentMoney,
  "payment-cash": IconPaymentMoney,
  others: IconPaymentOthers,
  "payment-others": IconPaymentOthers,
  paypal: IconPaymentPaypal,
  "payment-paypal": IconPaymentPaypal,
  visa: IconPaymentVisa,
  "payment-visa": IconPaymentVisa
};

var IconWrapper = _styled("svg", {
  target: "ejo49a30",
  label: "IconWrapper"
})("display:inline-block;line-height:0;vertical-align:middle;color:", function (_ref) {
  var color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, ["color"]);

  return !color ? null : colors$1.getFromTheme(props, color);
}, ";.aph-icon{&-fill{fill:", function (_ref2) {
  var color = _ref2.color,
      fill = _ref2.fill,
      props = _objectWithoutPropertiesLoose(_ref2, ["color", "fill"]);

  return fill || (!color ? 'currentColor' : colors$1.getFromTheme(props, color));
}, ";}&-stroke{stroke:", function (_ref3) {
  var color = _ref3.color,
      stroke = _ref3.stroke,
      props = _objectWithoutPropertiesLoose(_ref3, ["color", "stroke"]);

  return stroke || (!color ? 'currentColor' : colors$1.getFromTheme(props, color));
}, ";}}", function (props) {
  return props.aphStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdKOEIiLCJmaWxlIjoiSWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuLyogQ29tcG9uZW50cyAvIEljb25zICovXG5pbXBvcnQgQWRqdXN0cyBmcm9tIFwiLi9JY29uQWRqdXN0c1wiO1xuaW1wb3J0IEFycm93VXAgZnJvbSBcIi4vSWNvbkFycm93VXBcIjtcbmltcG9ydCBBcnJvd1JpZ2h0IGZyb20gXCIuL0ljb25BcnJvd1JpZ2h0XCI7XG5pbXBvcnQgQXJyb3dEb3duIGZyb20gXCIuL0ljb25BcnJvd0Rvd25cIjtcbmltcG9ydCBBcnJvd0xlZnQgZnJvbSBcIi4vSWNvbkFycm93TGVmdFwiO1xuaW1wb3J0IEJsdWV0b290aCBmcm9tIFwiLi9JY29uQmx1ZXRvb3RoXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL0ljb25DYW1lcmFcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0ljb25DYXJkXCI7XG5pbXBvcnQgQ2FyZHMgZnJvbSBcIi4vSWNvbkNhcmRzXCI7XG5pbXBvcnQgQ2hhcnRMaW5lIGZyb20gXCIuL0ljb25DaGFydExpbmVcIjtcbmltcG9ydCBDaGVja1RoaW4gZnJvbSBcIi4vSWNvbkNoZWNrVGhpblwiO1xuaW1wb3J0IENvbnRyYWN0IGZyb20gXCIuL0ljb25Db250cmFjdFwiO1xuaW1wb3J0IENvdXBvbiBmcm9tIFwiLi9JY29uQ291cG9uXCI7XG5pbXBvcnQgRGVsZXRlIGZyb20gXCIuL0ljb25EZWxldGVcIjtcbmltcG9ydCBFeHRlcm5hbFRpY2tldCBmcm9tIFwiLi9JY29uRXh0ZXJuYWxUaWNrZXRcIjtcbmltcG9ydCBFeWUgZnJvbSBcIi4vSWNvbkV5ZVwiO1xuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi9JY29uRmlsdGVyXCI7XG5pbXBvcnQgRmxhc2ggZnJvbSBcIi4vSWNvbkZsYXNoXCI7XG5pbXBvcnQgRmxhc2hPZmYgZnJvbSBcIi4vSWNvbkZsYXNoT2ZmXCI7XG5pbXBvcnQgRmFjZWJvb2sgZnJvbSBcIi4vSWNvbkZhY2Vib29rXCI7XG5pbXBvcnQgSGVscCBmcm9tIFwiLi9JY29uSGVscFwiO1xuaW1wb3J0IEluZm8gZnJvbSBcIi4vSWNvbkluZm9cIjtcbmltcG9ydCBJdGVtcyBmcm9tIFwiLi9JY29uSXRlbXNcIjtcbmltcG9ydCBMYWJlbHMgZnJvbSBcIi4vSWNvbkxhYmVsc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vSWNvbkxpc3RcIjtcbmltcG9ydCBMb2FkZXJEb251dCBmcm9tIFwiLi9JY29uTG9hZGVyRG9udXRcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0ljb25Mb2FkaW5nXCI7XG5pbXBvcnQgTG9jayBmcm9tIFwiLi9JY29uTG9ja1wiO1xuaW1wb3J0IExvZ291dCBmcm9tIFwiLi9JY29uTG9nb3V0XCI7XG5pbXBvcnQgTWludXMgZnJvbSBcIi4vSWNvbk1pbnVzXCI7XG5pbXBvcnQgT3B0aW9ucyBmcm9tIFwiLi9JY29uT3B0aW9uc1wiO1xuaW1wb3J0IFBlbmNpbCBmcm9tIFwiLi9JY29uUGVuY2lsXCI7XG5pbXBvcnQgUGx1cyBmcm9tIFwiLi9JY29uUGx1c1wiO1xuaW1wb3J0IFFSQ29kZSBmcm9tIFwiLi9JY29uUVJDb2RlXCI7XG5pbXBvcnQgUmVmcmVzaCBmcm9tIFwiLi9JY29uUmVmcmVzaFwiO1xuaW1wb3J0IFNjYW4gZnJvbSBcIi4vSWNvblNjYW5cIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vSWNvblNlYXJjaFwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL0ljb25TZXR0aW5nc1wiO1xuaW1wb3J0IFNoYXJlTGluayBmcm9tIFwiLi9JY29uU2hhcmVMaW5rXCI7XG5pbXBvcnQgU2lnbmFsIGZyb20gXCIuL0ljb25TaWduYWxcIjtcbmltcG9ydCBUaWNrZXRib290aCBmcm9tIFwiLi9JY29uVGlja2V0Ym9vdGhcIjtcbmltcG9ydCBUaW1lcyBmcm9tIFwiLi9JY29uVGltZXNcIjtcbmltcG9ydCBUcmFuc2ZlciBmcm9tIFwiLi9JY29uVHJhbnNmZXJcIjtcbmltcG9ydCBVbmxvY2sgZnJvbSBcIi4vSWNvblVubG9ja1wiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vSWNvblVzZXJcIjtcblxuaW1wb3J0IFBheW1lbnRBbWV4IGZyb20gXCIuL0ljb25QYXltZW50QW1leFwiO1xuaW1wb3J0IFBheW1lbnRCYW5rQmlsbGV0IGZyb20gXCIuL0ljb25QYXltZW50QmFua0JpbGxldFwiO1xuaW1wb3J0IFBheW1lbnREaW5lcnMgZnJvbSBcIi4vSWNvblBheW1lbnREaW5lcnNcIjtcbmltcG9ydCBQYXltZW50RGlzY292ZXIgZnJvbSBcIi4vSWNvblBheW1lbnREaXNjb3ZlclwiO1xuaW1wb3J0IFBheW1lbnRFbG8gZnJvbSBcIi4vSWNvblBheW1lbnRFbG9cIjtcbmltcG9ydCBQYXltZW50RnJlZXBhc3MgZnJvbSBcIi4vSWNvblBheW1lbnRGcmVlcGFzc1wiO1xuaW1wb3J0IFBheW1lbnRNYXN0ZXJjYXJkIGZyb20gXCIuL0ljb25QYXltZW50TWFzdGVyY2FyZFwiO1xuaW1wb3J0IFBheW1lbnRNb25leSBmcm9tIFwiLi9JY29uUGF5bWVudE1vbmV5XCI7XG5pbXBvcnQgUGF5bWVudE90aGVycyBmcm9tIFwiLi9JY29uUGF5bWVudE90aGVyc1wiO1xuaW1wb3J0IFBheW1lbnRQYXlwYWwgZnJvbSBcIi4vSWNvblBheW1lbnRQYXlwYWxcIjtcbmltcG9ydCBQYXltZW50VmlzYSBmcm9tIFwiLi9JY29uUGF5bWVudFZpc2FcIjtcblxuLyogTWFwcGVyICovXG4vKiBTaG91bGQgYmUgbWFwcGVkIGludG8gJ2ljb25zLmNvbnN0YW50cycgdG9vICovXG5jb25zdCBJQ09OUyA9IHtcbiAgICBhZGp1c3RzOiBBZGp1c3RzLFxuICAgIFwiYXJyb3ctdXBcIjogQXJyb3dVcCxcbiAgICBcImFycm93LXJpZ2h0XCI6IEFycm93UmlnaHQsXG4gICAgXCJhcnJvdy1kb3duXCI6IEFycm93RG93bixcbiAgICBcImFycm93LWxlZnRcIjogQXJyb3dMZWZ0LFxuICAgIGJsdWV0b290aDogQmx1ZXRvb3RoLFxuICAgIGNhbWVyYTogQ2FtZXJhLFxuICAgIGNhcmQ6IENhcmQsXG4gICAgY2FyZHM6IENhcmRzLFxuICAgIFwiY2hhcnQtbGluZVwiOiBDaGFydExpbmUsXG4gICAgY2hlY2s6IENoZWNrVGhpbixcbiAgICBcImNoZWNrLXRoaW5cIjogQ2hlY2tUaGluLFxuICAgIGNvbnRyYWN0OiBDb250cmFjdCxcbiAgICBjb3Vwb246IENvdXBvbixcbiAgICBcImV4dGVybmFsLXRpY2tldFwiOiBFeHRlcm5hbFRpY2tldCxcbiAgICBleWU6IEV5ZSxcbiAgICBmaWx0ZXI6IEZpbHRlcixcbiAgICBmbGFzaDogRmxhc2gsXG4gICAgXCJmbGFzaC1vZmZcIjogRmxhc2hPZmYsXG4gICAgaGVscDogSGVscCxcbiAgICBpbmZvOiBJbmZvLFxuICAgIGl0ZW1zOiBJdGVtcyxcbiAgICBsYWJlbHM6IExhYmVscyxcbiAgICBjaGFpcjogTGFiZWxzLFxuICAgIGxpc3Q6IExpc3QsXG4gICAgbG9hZGVyOiBMb2FkZXJEb251dCxcbiAgICBsb2FkaW5nOiBMb2FkaW5nLFxuICAgIGxvY2s6IExvY2ssXG4gICAgbG9nb3V0OiBMb2dvdXQsXG4gICAgbWludXM6IE1pbnVzLFxuICAgIG9wdGlvbnM6IE9wdGlvbnMsXG4gICAgcGVuY2lsOiBQZW5jaWwsXG4gICAgcGx1czogUGx1cyxcbiAgICBxcmNvZGU6IFFSQ29kZSxcbiAgICBzY2FuOiBTY2FuLFxuICAgIHNlYXJjaDogU2VhcmNoLFxuICAgIHNldHRpbmdzOiBTZXR0aW5ncyxcbiAgICBzaWduYWw6IFNpZ25hbCxcbiAgICBcInNoYXJlLWxpbmtcIjogU2hhcmVMaW5rLFxuICAgIHRpY2tldGJvb3RoOiBUaWNrZXRib290aCxcbiAgICB0aW1lczogVGltZXMsXG4gICAgdHJhbnNmZXI6IFRyYW5zZmVyLFxuICAgIHVubG9jazogVW5sb2NrLFxuICAgIHJlZnJlc2g6IFJlZnJlc2gsXG4gICAgZGVsZXRlOiBEZWxldGUsXG4gICAgdXNlcjogVXNlcixcblxuICAgIGZhY2Vib29rOiBGYWNlYm9vayxcblxuICAgIGFtZXg6IFBheW1lbnRBbWV4LFxuICAgIFwicGF5bWVudC1hbWV4XCI6IFBheW1lbnRBbWV4LFxuICAgIGJhbmtiaWxsZXQ6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgIFwiYmFuay1iaWxsZXRcIjogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgXCJwYXltZW50LWJhbmtiaWxsZXRcIjogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgXCJwYXltZW50LWJhbmstYmlsbGV0XCI6IFBheW1lbnRCYW5rQmlsbGV0LFxuICAgIGJvbGV0bzogUGF5bWVudEJhbmtCaWxsZXQsXG4gICAgXCJwYXltZW50LWJvbGV0b1wiOiBQYXltZW50QmFua0JpbGxldCxcbiAgICBkaW5lcnM6IFBheW1lbnREaW5lcnMsXG4gICAgXCJwYXltZW50LWRpbmVyc1wiOiBQYXltZW50RGluZXJzLFxuICAgIGRpc2NvdmVyOiBQYXltZW50RGlzY292ZXIsXG4gICAgXCJwYXltZW50LWRpc2NvdmVyXCI6IFBheW1lbnREaXNjb3ZlcixcbiAgICBlbG86IFBheW1lbnRFbG8sXG4gICAgXCJwYXltZW50LWVsb1wiOiBQYXltZW50RWxvLFxuICAgIGZyZWVwYXNzOiBQYXltZW50RnJlZXBhc3MsXG4gICAgXCJwYXltZW50LWZyZWVwYXNzXCI6IFBheW1lbnRGcmVlcGFzcyxcbiAgICBtYXN0ZXI6IFBheW1lbnRNYXN0ZXJjYXJkLFxuICAgIG1hc3RlcmNhcmQ6IFBheW1lbnRNYXN0ZXJjYXJkLFxuICAgIFwicGF5bWVudC1tYXN0ZXJcIjogUGF5bWVudE1hc3RlcmNhcmQsXG4gICAgXCJwYXltZW50LW1hc3RlcmNhcmRcIjogUGF5bWVudE1hc3RlcmNhcmQsXG4gICAgbW9uZXk6IFBheW1lbnRNb25leSxcbiAgICBjYXNoOiBQYXltZW50TW9uZXksXG4gICAgXCJwYXltZW50LW1vbmV5XCI6IFBheW1lbnRNb25leSxcbiAgICBcInBheW1lbnQtY2FzaFwiOiBQYXltZW50TW9uZXksXG4gICAgb3RoZXJzOiBQYXltZW50T3RoZXJzLFxuICAgIFwicGF5bWVudC1vdGhlcnNcIjogUGF5bWVudE90aGVycyxcbiAgICBwYXlwYWw6IFBheW1lbnRQYXlwYWwsXG4gICAgXCJwYXltZW50LXBheXBhbFwiOiBQYXltZW50UGF5cGFsLFxuICAgIHZpc2E6IFBheW1lbnRWaXNhLFxuICAgIFwicGF5bWVudC12aXNhXCI6IFBheW1lbnRWaXNhXG59O1xuXG4vKiBDb21wb25lbnQgV3JhcHBlciBzdHlsZXMgKi9cbmNvbnN0IEljb25XcmFwcGVyID0gc3R5bGVkLnN2Z2BcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjb2xvcjogJHsoeyBjb2xvciwgLi4ucHJvcHMgfSkgPT4gKCFjb2xvciA/IG51bGwgOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBjb2xvcikpfTtcblxuICAgIC5hcGgtaWNvbiB7XG4gICAgICAgICYtZmlsbCB7XG4gICAgICAgICAgICBmaWxsOiAkeyh7IGNvbG9yLCBmaWxsLCAuLi5wcm9wcyB9KSA9PiBmaWxsIHx8ICghY29sb3IgPyAnY3VycmVudENvbG9yJyA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIGNvbG9yKSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zdHJva2Uge1xuICAgICAgICAgICAgc3Ryb2tlOiAkeyh7IGNvbG9yLCBzdHJva2UsIC4uLnByb3BzIH0pID0+IHN0cm9rZSB8fCAoIWNvbG9yID8gJ2N1cnJlbnRDb2xvcicgOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBjb2xvcikpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuYXBoU3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBpdCBzZWxmICovXG5jb25zdCBJY29uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBzaGFwZSwgc2x1ZyB9ID0gcHJvcHM7XG4gICAgY29uc3QgU0xVRyA9XG4gICAgICAgIHNsdWcgK1xuICAgICAgICAoIWRpcmVjdGlvbiA/IFwiXCIgOiBcIi1cIiArIGRpcmVjdGlvbikgK1xuICAgICAgICAoIXNoYXBlID8gXCJcIiA6IFwiLVwiICsgc2hhcGUpO1xuICAgIGNvbnN0IFNlbGVjdGVkSWNvbiA9IElDT05TW1NMVUddO1xuXG4gICAgaWYgKCFTZWxlY3RlZEljb24pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGVzLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJcbiAgICAgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8SWNvbldyYXBwZXJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBhcz17U2VsZWN0ZWRJY29ufVxuICAgICAgICAgICAgYXBoU3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaWNvbiBhcGgtaWNvbi13cmFwcGVyICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc2x1ZzogXCJcIixcbiAgICBkaXJlY3Rpb246IFwiXCIsXG4gICAgc2hhcGU6IFwiXCIsXG4gICAgc2l6ZTogMjAsXG4gICAgY29sb3I6IFwiXCIsXG4gICAgZmlsbDogXCJcIixcbiAgICBzdHJva2U6IFwiXCIsXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICBzdHlsZXM6IHt9LFxuICAgIHRvRW5jb2RlOiBmYWxzZVxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuSWNvbi5wcm9wVHlwZXMgPSB7XG4gICAgc2x1ZzogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGRpcmVjdGlvbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaGFwZTogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGNvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZpbGw6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3Ryb2tlOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHdpZHRoOiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIGhlaWdodDogcHJvcFR5cGVzLm51bWJlcixcbiAgICB0b0VuY29kZTogcHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0XSlcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiJdfQ== */"));

var Icon = /*#__PURE__*/forwardRef(function (props, ref) {
  var direction = props.direction,
      shape = props.shape,
      slug = props.slug;
  var SLUG = slug + (!direction ? "" : "-" + direction) + (!shape ? "" : "-" + shape);
  var SelectedIcon = ICONS$1[SLUG];

  if (!SelectedIcon) {
    return null;
  }

  var className = props.className,
      styles = props.styles,
      rest = _objectWithoutPropertiesLoose(props, ["className", "styles"]);

  return /*#__PURE__*/React.createElement(IconWrapper, _extends({}, rest, {
    ref: ref,
    as: SelectedIcon,
    aphStyles: styles,
    className: "aph-icon aph-icon-wrapper " + (className || "")
  }));
});
Icon.defaultProps = {
  slug: "",
  direction: "",
  shape: "",
  size: 20,
  color: "",
  fill: "",
  stroke: "",
  width: undefined,
  height: undefined,
  styles: {},
  toEncode: false
};
Icon.propTypes = {
  slug: propTypes.string.isRequired,
  direction: propTypes.string,
  shape: propTypes.string,
  size: propTypes.number,
  color: propTypes.string,
  fill: propTypes.string,
  stroke: propTypes.string,
  width: propTypes.number,
  height: propTypes.number,
  toEncode: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var AphButtonStyled = _styled("button", {
  target: "e1btaip20",
  label: "AphButtonStyled"
})("position:relative;overflow:hidden;cursor:pointer;display:", function (props) {
  return props.aphblock ? '' : 'inline-';
}, "block;", function (props) {
  return styling(props);
}, ";width:", function (props) {
  return props.aphblock ? '100%' : 'auto';
}, ";font-weight:", function (_ref) {
  var aphweight = _ref.aphweight;
  return aphweight;
}, ";font-size:16px;line-height:20px;text-align:center;text-decoration:none;border:0;outline:0;transition:all ease 0.25s;-webkit-tap-highlight-color:", function (props) {
  return colors$1.getFromTheme(props, props.aphcolor || 'secondary', 'crystal', 0.5);
}, ";color:", function (props) {
  return props.aphlink ? colors$1.getFromTheme(props, props.aphcolor || 'secondary') : colors$1.getFromTheme(props, ['white', 'smoke'].includes(props.aphcolor) ? 'secondary' : 'white');
}, ";background-color:", function (props) {
  return props.aphlink ? 'transparent' : colors$1.getFromTheme(props, props.aphcolor || 'secondary');
}, ";&:hover{background-color:", function (props) {
  return props.aphlink ? colors$1.getFromTheme(props, 'smoke') : colors$1.getFromTheme(props, props.aphcolor || 'secondary', 'light');
}, ";}&:active,&:focus{background-color:", function (props) {
  return props.aphlink ? colors$1.getFromTheme(props, 'smoke') : colors$1.getFromTheme(props, props.aphcolor || 'secondary', 'dark');
}, ";}&:disabled{cursor:not-allowed;color:", function (props) {
  return colors$1.getFromTheme(props, 'mercury', props.aphtranslucid ? 'crystal' : 'light');
}, ";background-color:", function (props) {
  return props.aphlink ? colors$1.getFromTheme(props, 'smoke') : props.aphtranslucid ? colors$1.getFromTheme(props, 'smoke', '', 0.5) : colors$1.getFromTheme(props, 'mercury', 'crystal');
}, ";}.aph-btn{&__content{opacity:1;}&__loader{position:absolute;top:calc(50% - 15px);left:50%;transform:translate(-50%);opacity:0;}}&.aph-btn--loading{&:hover,&:disabled{background-color:", function (props) {
  return props.aphlink ? 'transparent' : colors$1.getFromTheme(props, props.aphcolor || 'secondary');
}, ";}.aph-btn{&__content{opacity:0;}&__loader{opacity:1;}}}", function (props) {
  return props.aphstyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvblN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHcUMiLCJmaWxlIjoiQnV0dG9uU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY29sb3JzLCBzdHlsaW5nIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBBcGhCdXR0b25TdHlsZWQgPSBzdHlsZWQuYnV0dG9uYFxuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93ICA6IGhpZGRlbjtcbiAgICBjdXJzb3IgICAgOiBwb2ludGVyO1xuICAgIGRpc3BsYXkgICA6ICR7cHJvcHMgPT4gcHJvcHMuYXBoYmxvY2sgPyAnJyA6ICdpbmxpbmUtJ31ibG9jaztcblxuICAgICR7cHJvcHMgPT4gc3R5bGluZyhwcm9wcyl9O1xuXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMuYXBoYmxvY2sgPyAnMTAwJScgOiAnYXV0byd9O1xuXG4gICAgZm9udC13ZWlnaHQ6ICR7KHsgYXBod2VpZ2h0IH0pID0+IGFwaHdlaWdodH07XG4gICAgZm9udC1zaXplICA6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbiAgOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4yNXM7XG5cbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmFwaGNvbG9yIHx8ICdzZWNvbmRhcnknKSwgJ2NyeXN0YWwnLCAwLjUpfTtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmFwaGNvbG9yIHx8ICdzZWNvbmRhcnknKSkgOlxuICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKFsnd2hpdGUnLCAnc21va2UnXS5pbmNsdWRlcyhwcm9wcy5hcGhjb2xvcikpID8gJ3NlY29uZGFyeScgOiAnd2hpdGUnKVxuICAgIH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgICd0cmFuc3BhcmVudCcgOlxuICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmFwaGNvbG9yIHx8ICdzZWNvbmRhcnknKSlcbiAgICB9O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpIDpcbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuYXBoY29sb3IgfHwgJ3NlY29uZGFyeScpLCAnbGlnaHQnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc21va2UnKSA6XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmFwaGNvbG9yIHx8ICdzZWNvbmRhcnknKSwgJ2RhcmsnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsXG4gICAgICAgICAgICAnbWVyY3VyeScsXG4gICAgICAgICAgICAocHJvcHMuYXBodHJhbnNsdWNpZCA/ICdjcnlzdGFsJyA6ICdsaWdodCcpXG4gICAgICAgICl9O1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzLmFwaGxpbmsgP1xuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzbW9rZScpIDpcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYXBodHJhbnNsdWNpZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc21va2UnLCAnJywgMC41KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnY3J5c3RhbCcpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLmFwaC1idG4ge1xuICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmX19sb2FkZXIge1xuICAgICAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcCAgICAgIDogY2FsYyg1MCUgLSAxNXB4KTtcbiAgICAgICAgICAgIGxlZnQgICAgIDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICAgICAgICBvcGFjaXR5ICA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFwaC1idG4tLWxvYWRpbmcge1xuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5hcGhsaW5rID9cbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zcGFyZW50JyA6XG4gICAgICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5hcGhjb2xvciB8fCAnc2Vjb25kYXJ5JykpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwaC1idG4ge1xuICAgICAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fbG9hZGVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5hcGhzdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhCdXR0b25TdHlsZWQ7XG4iXX0= */"));

var AphButtonItemStyled = _styled("span", {
  target: "emi8u8c0",
  label: "AphButtonItemStyled"
})("box-sizing:border-box;position:relative;display:inline-block;top:0;min-width:", function (props) {
  return props.childrenWidth || null;
}, ";margin:0;padding:0;text-align:center;transition-timing-function:ease;transition-duration:0.25s;transition-property:opacity;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbkl0ZW1TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXVDIiwiZmlsZSI6IkJ1dHRvbkl0ZW1TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEJ1dHRvbkl0ZW1TdHlsZWQgPSBzdHlsZWQuc3BhbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgICA6IGlubGluZS1ibG9jaztcbiAgICB0b3AgICAgICAgOiAwO1xuXG4gICAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLmNoaWxkcmVuV2lkdGggfHwgbnVsbH07XG4gICAgbWFyZ2luICAgOiAwO1xuICAgIHBhZGRpbmcgIDogMDtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogb3BhY2l0eTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoQnV0dG9uSXRlbVN0eWxlZDtcbiJdfQ== */"));

var Button = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var block = _ref.block,
      circle = _ref.circle,
      className = _ref.className,
      color = _ref.color,
      children = _ref.children,
      loading = _ref.loading,
      disabled = _ref.disabled,
      margin = _ref.margin,
      link = _ref.link,
      radius = _ref.radius,
      sm = _ref.sm,
      small = _ref.small,
      styles = _ref.styles,
      translucid = _ref.translucid,
      weight = _ref.weight,
      rest = _objectWithoutPropertiesLoose(_ref, ["block", "circle", "className", "color", "children", "loading", "disabled", "margin", "link", "radius", "sm", "small", "styles", "translucid", "weight"]);

  var childrenRef = useRef(null);

  var _useState = useState(140),
      childrenWidth = _useState[0],
      setChildrenWidth = _useState[1];

  var padding = circle ? '50%' : sm || small ? '5px 15px' : '10px 20px';
  var minWidth = circle ? sm || small ? '30px' : '40px' : '140px';
  useEffect(function () {
    if (typeof loading !== 'boolean' || !childrenRef || !childrenRef.current || !childrenRef.current.offsetWidth || childrenRef.current.offsetWidth === childrenWidth) {
      return;
    }

    setChildrenWidth(childrenRef.current.offsetWidth);
  }, [children]);
  return /*#__PURE__*/React.createElement(AphButtonStyled, _extends({}, rest, {
    ref: ref,
    aphsm: sm || small ? 1 : 0,
    aphblock: block ? 1 : 0,
    aphcircle: circle,
    aphcolor: color,
    aphlink: link ? 1 : 0,
    aphmargin: margin,
    aphminwidth: minWidth,
    aphpadding: padding,
    aphradius: radius,
    aphstyles: styles,
    aphtranslucid: translucid ? 1 : 0,
    aphweight: weight,
    disabled: disabled,
    className: "aph-btn" + (loading ? ' aph-btn--loading' : '') + " " + className
  }), typeof loading !== 'boolean' ? children : /*#__PURE__*/React.createElement(Fragment$1, null, /*#__PURE__*/React.createElement(AphButtonItemStyled, {
    className: "aph-btn__loader",
    childrenWidth: childrenWidth ? childrenWidth + "px" : null
  }, loading && /*#__PURE__*/React.createElement(Icon, {
    size: 30,
    slug: "loader",
    color: ['white', 'smoke'].includes(color) ? 'secondary' : 'white'
  })), /*#__PURE__*/React.createElement(AphButtonItemStyled, {
    ref: childrenRef,
    className: "aph-btn__content"
  }, children)));
});
Button.defaultProps = {
  as: 'button',
  type: 'button',
  role: 'button',
  color: 'secondary',
  className: '',
  margin: null,
  small: false,
  block: false,
  disabled: false,
  loading: undefined,
  radius: 25,
  styles: {},
  weight: 'bold'
};
Button.propTypes = {
  type: propTypes.string,
  disabled: propTypes.bool,
  loading: propTypes.bool,
  color: propTypes.string,
  radius: propTypes.oneOfType([propTypes.string, propTypes.number]),
  margin: propTypes.string,
  block: propTypes.bool,
  small: propTypes.bool,
  as: propTypes.elementType,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  weight: propTypes.oneOfType([propTypes.number, propTypes.string])
};

function ButtonIcon(_ref) {
  var icon = _ref.icon,
      size = _ref.size,
      shadow = _ref.shadow,
      styles = _ref.styles,
      props = _objectWithoutPropertiesLoose(_ref, ["icon", "size", "shadow", "styles"]);

  var btnSize = size + "px";
  var iconProps = typeof icon === 'object' ? icon : {};
  var slug = iconProps.slug;
  var iconSlug = typeof icon === 'string' ? icon : slug;
  return !iconSlug ? null : /*#__PURE__*/React.createElement(Button, _extends({
    link: true
  }, props, {
    styles: _objectSpread2({
      padding: 0,
      width: btnSize,
      height: btnSize,
      minWidth: 'auto',
      boxShadow: !shadow ? null : typeof shadow === 'string' ? shadow : '0 2px 10px 0 rgba(0,0,0,0.1)'
    }, styles)
  }), /*#__PURE__*/React.createElement(Icon, _extends({
    size: size / 2,
    slug: iconSlug
  }, iconProps)));
}
ButtonIcon.defaultProps = {
  radius: '50%',
  size: 40,
  shadow: false,
  styles: {}
};

var StyledStyled = _styled("div", {
  target: "eoevoju0",
  label: "StyledStyled"
})("box-sizing:border-box;box-shadow:", function (_ref) {
  var customBoxShadow = _ref.customBoxShadow;
  return customBoxShadow || null;
}, ";margin:", function (_ref2) {
  var customMargin = _ref2.customMargin;
  return customMargin;
}, ";padding:", function (_ref3) {
  var customPadding = _ref3.customPadding,
      withLink = _ref3.withLink;
  return !customPadding || withLink ? null : customPadding;
}, ";&:active,&:hover,&:focus{background-color:", function (_ref4) {
  var hoverable = _ref4.hoverable,
      props = _objectWithoutPropertiesLoose(_ref4, ["hoverable"]);

  return !hoverable ? null : colors$1.getFullColor(props, typeof hoverable === 'string' ? hoverable : 'background');
}, ";}", function (_ref5) {
  var color = _ref5.color,
      customPadding = _ref5.customPadding,
      textColor = _ref5.textColor,
      withLink = _ref5.withLink,
      props = _objectWithoutPropertiesLoose(_ref5, ["color", "customPadding", "textColor", "withLink"]);

  return !withLink ? null : /*#__PURE__*/css("a:first-of-type{color:", color || textColor ? colors$1.getFullColor(props, color || textColor) : 'inherit', ";display:block;padding:", customPadding || null, ";text-decoration:none;};label:StyledStyled;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJnQyIsImZpbGUiOiJTdHlsZWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGNvbG9ycywgc3R5bGluZywgdGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE1FRElBX1FVRVJJRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBTdHlsZWRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmcgICA6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdyAgIDogJHsoeyBjdXN0b21Cb3hTaGFkb3cgfSkgPT4gY3VzdG9tQm94U2hhZG93IHx8IG51bGx9O1xuXG4gICAgbWFyZ2luIDogJHsoeyBjdXN0b21NYXJnaW4gfSkgPT4gY3VzdG9tTWFyZ2lufTtcbiAgICBwYWRkaW5nOiAkeyh7IGN1c3RvbVBhZGRpbmcsIHdpdGhMaW5rIH0pID0+ICghY3VzdG9tUGFkZGluZyB8fCB3aXRoTGluaykgPyBudWxsIDogY3VzdG9tUGFkZGluZ307XG5cbiAgICAmOmFjdGl2ZSwgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGhvdmVyYWJsZSwgLi4ucHJvcHMgfSkgPT4gIWhvdmVyYWJsZSA/IG51bGwgOlxuICAgICAgICBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAodHlwZW9mIGhvdmVyYWJsZSA9PT0gJ3N0cmluZycgPyBob3ZlcmFibGUgOiAnYmFja2dyb3VuZCcpKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAkeyh7XG4gICAgICBjb2xvcixcbiAgICAgIGN1c3RvbVBhZGRpbmcsXG4gICAgICB0ZXh0Q29sb3IsXG4gICAgICB3aXRoTGluayxcbiAgICAgIC4uLnByb3BzXG4gICAgfSkgPT4gIXdpdGhMaW5rID8gbnVsbCA6IGNzc2BcbiAgICAgIGE6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIGNvbG9yOiAke2NvbG9yIHx8IHRleHRDb2xvciA/IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChjb2xvciB8fCB0ZXh0Q29sb3IpKSA6ICdpbmhlcml0J307XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAke2N1c3RvbVBhZGRpbmcgfHwgbnVsbH07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTtcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAkeyhwcm9wcykgPT4gc3R5bGluZyhwcm9wcyl9O1xuICAgICR7KHByb3BzKSA9PiB0ZXh0KHByb3BzLCBwcm9wcy50ZXh0U2l6ZSl9O1xuICAgICR7KHsgY3VzdG9tU3R5bGVzIH0pID0+IGN1c3RvbVN0eWxlc307XG4gICAgJHsoeyBzdHlsZXNYUyB9KSA9PiBzdHlsZXNYUyA/IG51bGwgOiBjc3NgXG4gICAgICAke01FRElBX1FVRVJJRVMuTFQuU019IHtcbiAgICAgICAgJHtzdHlsZXNYU307XG4gICAgICB9XG4gICAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWQgPSBmb3J3YXJkUmVmKCh7XG4gIGJvcmRlcixcbiAgYm9yZGVyQ29sb3IsXG4gIGJvcmRlclRvcCxcbiAgYm9yZGVyUmlnaHQsXG4gIGJvcmRlckJvdHRvbSxcbiAgYm9yZGVyTGVmdCxcbiAgYm9yZGVyUmFkaXVzLFxuICBjbGFzc05hbWUsXG4gIG1hcmdpbixcbiAgcGFkZGluZyxcbiAgcmFkaXVzLFxuICBzaGFkb3csXG4gIHNoYWRvd0NvbG9yLFxuICBzaGFkb3dTcHJlYWQsXG4gIHN0eWxlcyxcbiAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICBjb25zdCBnZXRDb2xvck5vdEJvb2wgICAgPSAoZGVzaXJlZCkgPT4gKHR5cGVvZiBkZXNpcmVkICE9PSAnc3RyaW5nJyA/ICcnIDogZGVzaXJlZCk7XG4gIGNvbnN0IGdldFNwYWNlbWVudCAgICAgICA9IChzaXplKSA9PiAoKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykgPyBgJHtzaXplfXB4YCA6IHNpemUpO1xuICBjb25zdCBzaGFkb3dDb2xvckRlZmF1bHQgPSBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAoc2hhZG93Q29sb3IgfHwgJ3NoYWRvdycpKTtcbiAgY29uc3QgYm9yZGVyQ29sb3JEZWZhdWx0ID0gKGJvcmRlckNvbG9yIHx8ICdib3JkZXInKTtcbiAgY29uc3QgYm94U2hhZG93ICAgICAgICAgID0gW1xuICAgICghYm9yZGVyICYmICFib3JkZXJUb3ApID8gJycgICAgOiBgaW5zZXQgMCAxcHggMCAwICR7Y29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKGdldENvbG9yTm90Qm9vbChib3JkZXJUb3AgfHwgYm9yZGVyKSB8fCBib3JkZXJDb2xvckRlZmF1bHQpKX1gLFxuICAgICghYm9yZGVyICYmICFib3JkZXJSaWdodCkgPyAnJyAgOiBgaW5zZXQgLTFweCAwIDAgMCAke2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChnZXRDb2xvck5vdEJvb2woYm9yZGVyUmlnaHQgfHwgYm9yZGVyKSB8fCBib3JkZXJDb2xvckRlZmF1bHQpKX1gLFxuICAgICghYm9yZGVyICYmICFib3JkZXJCb3R0b20pID8gJycgOiBgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChnZXRDb2xvck5vdEJvb2woYm9yZGVyQm90dG9tIHx8IGJvcmRlcikgfHwgYm9yZGVyQ29sb3JEZWZhdWx0KSl9YCxcbiAgICAoIWJvcmRlciAmJiAhYm9yZGVyTGVmdCkgPyAnJyAgIDogYGluc2V0IDFweCAwIDAgMCAke2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChnZXRDb2xvck5vdEJvb2woYm9yZGVyTGVmdCB8fCBib3JkZXIpIHx8IGJvcmRlckNvbG9yRGVmYXVsdCkpfWAsXG4gICAgIXNoYWRvdyA/ICcnICAgICAgIDogKHR5cGVvZiBzaGFkb3cgPT09ICdzdHJpbmcnID8gc2hhZG93IDogYDAgMCAke3NoYWRvd1NwcmVhZCB8fCAnMTBweCd9ICR7c2hhZG93Q29sb3JEZWZhdWx0fWApLFxuICBdLmZpbHRlcigoYm9yZGVyKSA9PiBib3JkZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFN0eWxlZFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBib3JkZXJSYWRpdXM9e2JvcmRlclJhZGl1cyB8fCByYWRpdXN9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0gYCA6ICcnfWFwaC1zdHlsZWRgfVxuICAgICAgY3VzdG9tQm94U2hhZG93PXtib3hTaGFkb3cuam9pbignLCAnKX1cbiAgICAgIGN1c3RvbU1hcmdpbj17Z2V0U3BhY2VtZW50KG1hcmdpbil9XG4gICAgICBjdXN0b21QYWRkaW5nPXtnZXRTcGFjZW1lbnQocGFkZGluZyl9XG4gICAgICBjdXN0b21TdHlsZXM9e3N0eWxlc31cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufSk7XG5cblN0eWxlZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBIVE1MIFRhZyBhcyBzdHJpbmcgb3Igb25lIFJlYWN0IENvbXBvbmVudDpcbiAgICogPFN0eWxlZCBhcz17Q29udGFpbmVyfT5UcnkgdGhpczwvU3R5bGVkPlxuICAgKi9cbiAgYXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMuZWxlbWVudCBdKSxcblxuICAvKipcbiAgICogVXNlcyBpbnNldCBgYm94LXNoYWRvd2AgYXMgYm9yZGVyIGF0IHRvcC5cbiAgICogU3RyaW5nIHRvIHBhc3MgdGhlIGNvbG9yLlxuICAgKi9cbiAgYm9yZGVyVG9wOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLmJvb2wsIHByb3BUeXBlcy5zdHJpbmcgXSksXG5cbiAgLyoqXG4gICAqIFVzZXMgaW5zZXQgYGJveC1zaGFkb3dgIGFzIGJvcmRlciBhdCByaWdodC5cbiAgICogU3RyaW5nIHRvIHBhc3MgdGhlIGNvbG9yLlxuICAgKi9cbiAgYm9yZGVyUmlnaHQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuYm9vbCwgcHJvcFR5cGVzLnN0cmluZyBdKSxcblxuICAvKipcbiAgICogVXNlcyBpbnNldCBgYm94LXNoYWRvd2AgYXMgYm9yZGVyIGF0IGJvdHRvbS5cbiAgICogU3RyaW5nIHRvIHBhc3MgdGhlIGNvbG9yLlxuICAgKi9cbiAgYm9yZGVyQm90dG9tOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLmJvb2wsIHByb3BUeXBlcy5zdHJpbmcgXSksXG5cbiAgLyoqXG4gICAqIFVzZXMgaW5zZXQgYGJveC1zaGFkb3dgIGFzIGJvcmRlciBhdCBsZWZ0LlxuICAgKiBTdHJpbmcgdG8gcGFzcyB0aGUgY29sb3IuXG4gICAqL1xuICBib3JkZXJMZWZ0OiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLmJvb2wsIHByb3BUeXBlcy5zdHJpbmcgXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiBib3JkZXIvYGJveC1zaGFkb3dgXG4gICAqL1xuICBib3JkZXJDb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQm9yZGVyIFJhZGl1c1xuICAgKi9cbiAgYm9yZGVyUmFkaXVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm51bWJlciBdKSxcblxuICAvKipcbiAgICogQmFja2dyb3VuZCBDb2xvciBmcm9tIGBjb2xvcnNgIHV0aWxpdHlcbiAgICpcbiAgICogWW91IGNhbiB1c2UgbGlrZSB0aGlzOiBjb2xvcj1cIm9jZWFuLGNyeXN0YWwsMC41XCJcbiAgICovXG4gIGJhY2tncm91bmQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRleHQgQ29sb3IgZnJvbSBgY29sb3JzYCB1dGlsaXR5LlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSBsaWtlIHRoaXM6IGNvbG9yPVwib2NlYW4sZGFya1wiXG4gICAqL1xuICBjb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogT24gbW91c2UgaG92ZXIsIGNoYW5nZXMgYmFja2dyb3VuZCBjb2xvci5cbiAgICovXG4gIGhvdmVyYWJsZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5ib29sLCBwcm9wVHlwZXMuc3RyaW5nIF0pLFxuXG4gIC8qKlxuICAgKiBCb3ggTWFyZ2luXG4gICAqL1xuICBtYXJnaW46IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMubnVtYmVyIF0pLFxuXG4gIC8qKlxuICAgKiBCb3ggUGFkZGluZ1xuICAgKi9cbiAgcGFkZGluZzogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5udW1iZXIgXSksXG5cbiAgLyoqXG4gICAqIFNhbWVzIGFzIEJvcmRlciBSYWRpdXNcbiAgICovXG4gIHJhZGl1czogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5udW1iZXIgXSksXG5cbiAgLyoqXG4gICAqIEJveCBTaGFkb3dcbiAgICovXG4gIHNoYWRvdzogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5ib29sLCBwcm9wVHlwZXMuc3RyaW5nIF0pLFxuXG4gIC8qKlxuICAgKiBCb3ggU2hhZG93IGNvbG9yXG4gICAqL1xuICBzaGFkb3dDb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQm94IFNoYWRvdyBzcHJlYWQuIEV4Ljogc2hhZG93U3ByZWFkPVwiNXB4XCJcbiAgICovXG4gIHNoYWRvd1NwcmVhZDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ3VzdG9tIFN0eWxlc1xuICAgKi9cbiAgc3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDdXN0b20gU3R5bGVzIHRvIHNjcmVlbnMgc21hbGxlciB0aGFuIDc2OHB4XG4gICAqL1xuICBzdHlsZXNYUzogcHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGV4dCBBbGlnblxuICAgKi9cbiAgdGV4dEFsaWduOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGhlYXZ5IGBmb250LXdlaWdodGBcbiAgICovXG4gIHRleHRCb2xkOiBwcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQXBwbGllcyBgd29yZC1icmVhazogYnJlYWstYWxsO2BcbiAgICovXG4gIHRleHRCcmVha0FsbDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRleHQgQWxpZ25lZCBhdCBjZW50ZXJcbiAgICovXG4gIHRleHRDZW50ZXI6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUZXh0IENvbG9yLCBzYW1lIGFzIGBjb2xvcmAgcHJvcFxuICAgKi9cbiAgdGV4dENvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUZXh0IENvbG9yIGFzIGNvbG9yIGBoZWxwZXJgIGZyb20gY29sb3JzIHV0aWxpdHlcbiAgICovXG4gIHRleHRIZWxwZXI6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUZXh0IENvbG9yIGFzIGNvbG9yIGBsaW5rYCBmcm9tIGNvbG9ycyB1dGlsaXR5XG4gICAqL1xuICB0ZXh0TGluazogcHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRleHQgTG93ZXJjYXNlXG4gICAqL1xuICB0ZXh0TG93ZXI6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUZXh0IFVwcGVyY2FzZVxuICAgKi9cbiAgdGV4dFVwcGVyOiBwcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGV4dCBTaXplXG4gICAqL1xuICB0ZXh0U2l6ZTogcHJvcFR5cGVzLm9uZU9mKFsgJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyBdKSxcblxuICAvKipcbiAgICogVGV4dCBUcnVuY2F0ZSBhcHBsaWVzIGNzcyBydWxlcyB0byBkb24ndCBicmVhayBsaW5lcyBhbmQgaGlkZSB0ZXh0L2NvbnRlbnRcbiAgICovXG4gIHRleHRUcnVuY2F0ZTogcHJvcFR5cGVzLmJvb2wsXG5cbiAgYWxpZ25Db250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbkl0ZW1zOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnblNlbGY6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc3BsYXk6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGZsZXg6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuYm9vbCwgcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZyBdKSxcbiAgZmxleERpcmVjdGlvbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgZmxleERpc3BsYXk6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGZsZXhHcm93OiBwcm9wVHlwZXMuc3RyaW5nLFxuICBmbGV4U2hyaW5rOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBmbGV4V3JhcDogcHJvcFR5cGVzLnN0cmluZyxcbiAganVzdGlmeUNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG4gIG9yZGVyOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZyBdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZDtcbiJdfQ== */"));
}, ";transition:all 0.2s ease;", function (props) {
  return styling(props);
}, ";", function (props) {
  return text(props, props.textSize);
}, ";", function (_ref6) {
  var customStyles = _ref6.customStyles;
  return customStyles;
}, ";", function (_ref7) {
  var stylesXS = _ref7.stylesXS;
  return stylesXS ? null : /*#__PURE__*/css(MEDIA_QUERIES.LT.SM, "{", stylesXS, ";};label:StyledStyled;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUM2QyIsImZpbGUiOiJTdHlsZWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGNvbG9ycywgc3R5bGluZywgdGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IE1FRElBX1FVRVJJRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBTdHlsZWRTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmcgICA6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdyAgIDogJHsoeyBjdXN0b21Cb3hTaGFkb3cgfSkgPT4gY3VzdG9tQm94U2hhZG93IHx8IG51bGx9O1xuXG4gICAgbWFyZ2luIDogJHsoeyBjdXN0b21NYXJnaW4gfSkgPT4gY3VzdG9tTWFyZ2lufTtcbiAgICBwYWRkaW5nOiAkeyh7IGN1c3RvbVBhZGRpbmcsIHdpdGhMaW5rIH0pID0+ICghY3VzdG9tUGFkZGluZyB8fCB3aXRoTGluaykgPyBudWxsIDogY3VzdG9tUGFkZGluZ307XG5cbiAgICAmOmFjdGl2ZSwgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IGhvdmVyYWJsZSwgLi4ucHJvcHMgfSkgPT4gIWhvdmVyYWJsZSA/IG51bGwgOlxuICAgICAgICBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAodHlwZW9mIGhvdmVyYWJsZSA9PT0gJ3N0cmluZycgPyBob3ZlcmFibGUgOiAnYmFja2dyb3VuZCcpKVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAkeyh7XG4gICAgICBjb2xvcixcbiAgICAgIGN1c3RvbVBhZGRpbmcsXG4gICAgICB0ZXh0Q29sb3IsXG4gICAgICB3aXRoTGluayxcbiAgICAgIC4uLnByb3BzXG4gICAgfSkgPT4gIXdpdGhMaW5rID8gbnVsbCA6IGNzc2BcbiAgICAgIGE6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgIGNvbG9yOiAke2NvbG9yIHx8IHRleHRDb2xvciA/IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChjb2xvciB8fCB0ZXh0Q29sb3IpKSA6ICdpbmhlcml0J307XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAke2N1c3RvbVBhZGRpbmcgfHwgbnVsbH07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTtcblxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAkeyhwcm9wcykgPT4gc3R5bGluZyhwcm9wcyl9O1xuICAgICR7KHByb3BzKSA9PiB0ZXh0KHByb3BzLCBwcm9wcy50ZXh0U2l6ZSl9O1xuICAgICR7KHsgY3VzdG9tU3R5bGVzIH0pID0+IGN1c3RvbVN0eWxlc307XG4gICAgJHsoeyBzdHlsZXNYUyB9KSA9PiBzdHlsZXNYUyA/IG51bGwgOiBjc3NgXG4gICAgICAke01FRElBX1FVRVJJRVMuTFQuU019IHtcbiAgICAgICAgJHtzdHlsZXNYU307XG4gICAgICB9XG4gICAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWQgPSBmb3J3YXJkUmVmKCh7XG4gIGJvcmRlcixcbiAgYm9yZGVyQ29sb3IsXG4gIGJvcmRlclRvcCxcbiAgYm9yZGVyUmlnaHQsXG4gIGJvcmRlckJvdHRvbSxcbiAgYm9yZGVyTGVmdCxcbiAgYm9yZGVyUmFkaXVzLFxuICBjbGFzc05hbWUsXG4gIG1hcmdpbixcbiAgcGFkZGluZyxcbiAgcmFkaXVzLFxuICBzaGFkb3csXG4gIHNoYWRvd0NvbG9yLFxuICBzaGFkb3dTcHJlYWQsXG4gIHN0eWxlcyxcbiAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICBjb25zdCBnZXRDb2xvck5vdEJvb2wgICAgPSAoZGVzaXJlZCkgPT4gKHR5cGVvZiBkZXNpcmVkICE9PSAnc3RyaW5nJyA/ICcnIDogZGVzaXJlZCk7XG4gIGNvbnN0IGdldFNwYWNlbWVudCAgICAgICA9IChzaXplKSA9PiAoKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykgPyBgJHtzaXplfXB4YCA6IHNpemUpO1xuICBjb25zdCBzaGFkb3dDb2xvckRlZmF1bHQgPSBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAoc2hhZG93Q29sb3IgfHwgJ3NoYWRvdycpKTtcbiAgY29uc3QgYm9yZGVyQ29sb3JEZWZhdWx0ID0gKGJvcmRlckNvbG9yIHx8ICdib3JkZXInKTtcbiAgY29uc3QgYm94U2hhZG93ICAgICAgICAgID0gW1xuICAgICghYm9yZGVyICYmICFib3JkZXJUb3ApID8gJycgICAgOiBgaW5zZXQgMCAxcHggMCAwICR7Y29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKGdldENvbG9yTm90Qm9vbChib3JkZXJUb3AgfHwgYm9yZGVyKSB8fCBib3JkZXJDb2xvckRlZmF1bHQpKX1gLFxuICAgICghYm9yZGVyICYmICFib3JkZXJSaWdodCkgPyAnJyAgOiBgaW5zZXQgLTFweCAwIDAgMCAke2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChnZXRDb2xvck5vdEJvb2woYm9yZGVyUmlnaHQgfHwgYm9yZGVyKSB8fCBib3JkZXJDb2xvckRlZmF1bHQpKX1gLFxuICAgICghYm9yZGVyICYmICFib3JkZXJCb3R0b20pID8gJycgOiBgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChnZXRDb2xvck5vdEJvb2woYm9yZGVyQm90dG9tIHx8IGJvcmRlcikgfHwgYm9yZGVyQ29sb3JEZWZhdWx0KSl9YCxcbiAgICAoIWJvcmRlciAmJiAhYm9yZGVyTGVmdCkgPyAnJyAgIDogYGluc2V0IDFweCAwIDAgMCAke2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChnZXRDb2xvck5vdEJvb2woYm9yZGVyTGVmdCB8fCBib3JkZXIpIHx8IGJvcmRlckNvbG9yRGVmYXVsdCkpfWAsXG4gICAgIXNoYWRvdyA/ICcnICAgICAgIDogKHR5cGVvZiBzaGFkb3cgPT09ICdzdHJpbmcnID8gc2hhZG93IDogYDAgMCAke3NoYWRvd1NwcmVhZCB8fCAnMTBweCd9ICR7c2hhZG93Q29sb3JEZWZhdWx0fWApLFxuICBdLmZpbHRlcigoYm9yZGVyKSA9PiBib3JkZXIpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFN0eWxlZFxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBib3JkZXJSYWRpdXM9e2JvcmRlclJhZGl1cyB8fCByYWRpdXN9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0gYCA6ICcnfWFwaC1zdHlsZWRgfVxuICAgICAgY3VzdG9tQm94U2hhZG93PXtib3hTaGFkb3cuam9pbignLCAnKX1cbiAgICAgIGN1c3RvbU1hcmdpbj17Z2V0U3BhY2VtZW50KG1hcmdpbil9XG4gICAgICBjdXN0b21QYWRkaW5nPXtnZXRTcGFjZW1lbnQocGFkZGluZyl9XG4gICAgICBjdXN0b21TdHlsZXM9e3N0eWxlc31cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufSk7XG5cblN0eWxlZC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBIVE1MIFRhZyBhcyBzdHJpbmcgb3Igb25lIFJlYWN0IENvbXBvbmVudDpcbiAgICogPFN0eWxlZCBhcz17Q29udGFpbmVyfT5UcnkgdGhpczwvU3R5bGVkPlxuICAgKi9cbiAgYXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMuZWxlbWVudCBdKSxcblxuICAvKipcbiAgICogVXNlcyBpbnNldCBgYm94LXNoYWRvd2AgYXMgYm9yZGVyIGF0IHRvcC5cbiAgICogU3RyaW5nIHRvIHBhc3MgdGhlIGNvbG9yLlxuICAgKi9cbiAgYm9yZGVyVG9wOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLmJvb2wsIHByb3BUeXBlcy5zdHJpbmcgXSksXG5cbiAgLyoqXG4gICAqIFVzZXMgaW5zZXQgYGJveC1zaGFkb3dgIGFzIGJvcmRlciBhdCByaWdodC5cbiAgICogU3RyaW5nIHRvIHBhc3MgdGhlIGNvbG9yLlxuICAgKi9cbiAgYm9yZGVyUmlnaHQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuYm9vbCwgcHJvcFR5cGVzLnN0cmluZyBdKSxcblxuICAvKipcbiAgICogVXNlcyBpbnNldCBgYm94LXNoYWRvd2AgYXMgYm9yZGVyIGF0IGJvdHRvbS5cbiAgICogU3RyaW5nIHRvIHBhc3MgdGhlIGNvbG9yLlxuICAgKi9cbiAgYm9yZGVyQm90dG9tOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLmJvb2wsIHByb3BUeXBlcy5zdHJpbmcgXSksXG5cbiAgLyoqXG4gICAqIFVzZXMgaW5zZXQgYGJveC1zaGFkb3dgIGFzIGJvcmRlciBhdCBsZWZ0LlxuICAgKiBTdHJpbmcgdG8gcGFzcyB0aGUgY29sb3IuXG4gICAqL1xuICBib3JkZXJMZWZ0OiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLmJvb2wsIHByb3BUeXBlcy5zdHJpbmcgXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiBib3JkZXIvYGJveC1zaGFkb3dgXG4gICAqL1xuICBib3JkZXJDb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQm9yZGVyIFJhZGl1c1xuICAgKi9cbiAgYm9yZGVyUmFkaXVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm51bWJlciBdKSxcblxuICAvKipcbiAgICogQmFja2dyb3VuZCBDb2xvciBmcm9tIGBjb2xvcnNgIHV0aWxpdHlcbiAgICpcbiAgICogWW91IGNhbiB1c2UgbGlrZSB0aGlzOiBjb2xvcj1cIm9jZWFuLGNyeXN0YWwsMC41XCJcbiAgICovXG4gIGJhY2tncm91bmQ6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRleHQgQ29sb3IgZnJvbSBgY29sb3JzYCB1dGlsaXR5LlxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSBsaWtlIHRoaXM6IGNvbG9yPVwib2NlYW4sZGFya1wiXG4gICAqL1xuICBjb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogT24gbW91c2UgaG92ZXIsIGNoYW5nZXMgYmFja2dyb3VuZCBjb2xvci5cbiAgICovXG4gIGhvdmVyYWJsZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5ib29sLCBwcm9wVHlwZXMuc3RyaW5nIF0pLFxuXG4gIC8qKlxuICAgKiBCb3ggTWFyZ2luXG4gICAqL1xuICBtYXJnaW46IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMubnVtYmVyIF0pLFxuXG4gIC8qKlxuICAgKiBCb3ggUGFkZGluZ1xuICAgKi9cbiAgcGFkZGluZzogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5udW1iZXIgXSksXG5cbiAgLyoqXG4gICAqIFNhbWVzIGFzIEJvcmRlciBSYWRpdXNcbiAgICovXG4gIHJhZGl1czogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5udW1iZXIgXSksXG5cbiAgLyoqXG4gICAqIEJveCBTaGFkb3dcbiAgICovXG4gIHNoYWRvdzogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5ib29sLCBwcm9wVHlwZXMuc3RyaW5nIF0pLFxuXG4gIC8qKlxuICAgKiBCb3ggU2hhZG93IGNvbG9yXG4gICAqL1xuICBzaGFkb3dDb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQm94IFNoYWRvdyBzcHJlYWQuIEV4Ljogc2hhZG93U3ByZWFkPVwiNXB4XCJcbiAgICovXG4gIHNoYWRvd1NwcmVhZDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ3VzdG9tIFN0eWxlc1xuICAgKi9cbiAgc3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDdXN0b20gU3R5bGVzIHRvIHNjcmVlbnMgc21hbGxlciB0aGFuIDc2OHB4XG4gICAqL1xuICBzdHlsZXNYUzogcHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGV4dCBBbGlnblxuICAgKi9cbiAgdGV4dEFsaWduOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGhlYXZ5IGBmb250LXdlaWdodGBcbiAgICovXG4gIHRleHRCb2xkOiBwcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQXBwbGllcyBgd29yZC1icmVhazogYnJlYWstYWxsO2BcbiAgICovXG4gIHRleHRCcmVha0FsbDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRleHQgQWxpZ25lZCBhdCBjZW50ZXJcbiAgICovXG4gIHRleHRDZW50ZXI6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUZXh0IENvbG9yLCBzYW1lIGFzIGBjb2xvcmAgcHJvcFxuICAgKi9cbiAgdGV4dENvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUZXh0IENvbG9yIGFzIGNvbG9yIGBoZWxwZXJgIGZyb20gY29sb3JzIHV0aWxpdHlcbiAgICovXG4gIHRleHRIZWxwZXI6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUZXh0IENvbG9yIGFzIGNvbG9yIGBsaW5rYCBmcm9tIGNvbG9ycyB1dGlsaXR5XG4gICAqL1xuICB0ZXh0TGluazogcHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRleHQgTG93ZXJjYXNlXG4gICAqL1xuICB0ZXh0TG93ZXI6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUZXh0IFVwcGVyY2FzZVxuICAgKi9cbiAgdGV4dFVwcGVyOiBwcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGV4dCBTaXplXG4gICAqL1xuICB0ZXh0U2l6ZTogcHJvcFR5cGVzLm9uZU9mKFsgJ3hzJywgJ3NtJywgJ21kJywgJ2xnJyBdKSxcblxuICAvKipcbiAgICogVGV4dCBUcnVuY2F0ZSBhcHBsaWVzIGNzcyBydWxlcyB0byBkb24ndCBicmVhayBsaW5lcyBhbmQgaGlkZSB0ZXh0L2NvbnRlbnRcbiAgICovXG4gIHRleHRUcnVuY2F0ZTogcHJvcFR5cGVzLmJvb2wsXG5cbiAgYWxpZ25Db250ZW50OiBwcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbkl0ZW1zOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnblNlbGY6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc3BsYXk6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGZsZXg6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuYm9vbCwgcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZyBdKSxcbiAgZmxleERpcmVjdGlvbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgZmxleERpc3BsYXk6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGZsZXhHcm93OiBwcm9wVHlwZXMuc3RyaW5nLFxuICBmbGV4U2hyaW5rOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBmbGV4V3JhcDogcHJvcFR5cGVzLnN0cmluZyxcbiAganVzdGlmeUNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG4gIG9yZGVyOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZyBdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZDtcbiJdfQ== */"));
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0eWxlZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUStCIiwiZmlsZSI6IlN0eWxlZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY29sb3JzLCBzdHlsaW5nLCB0ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IFN0eWxlZFN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZyAgIDogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93ICAgOiAkeyh7IGN1c3RvbUJveFNoYWRvdyB9KSA9PiBjdXN0b21Cb3hTaGFkb3cgfHwgbnVsbH07XG5cbiAgICBtYXJnaW4gOiAkeyh7IGN1c3RvbU1hcmdpbiB9KSA9PiBjdXN0b21NYXJnaW59O1xuICAgIHBhZGRpbmc6ICR7KHsgY3VzdG9tUGFkZGluZywgd2l0aExpbmsgfSkgPT4gKCFjdXN0b21QYWRkaW5nIHx8IHdpdGhMaW5rKSA/IG51bGwgOiBjdXN0b21QYWRkaW5nfTtcblxuICAgICY6YWN0aXZlLCAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgaG92ZXJhYmxlLCAuLi5wcm9wcyB9KSA9PiAhaG92ZXJhYmxlID8gbnVsbCA6XG4gICAgICAgIGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsICh0eXBlb2YgaG92ZXJhYmxlID09PSAnc3RyaW5nJyA/IGhvdmVyYWJsZSA6ICdiYWNrZ3JvdW5kJykpXG4gICAgICB9O1xuICAgIH1cblxuICAgICR7KHtcbiAgICAgIGNvbG9yLFxuICAgICAgY3VzdG9tUGFkZGluZyxcbiAgICAgIHRleHRDb2xvcixcbiAgICAgIHdpdGhMaW5rLFxuICAgICAgLi4ucHJvcHNcbiAgICB9KSA9PiAhd2l0aExpbmsgPyBudWxsIDogY3NzYFxuICAgICAgYTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgY29sb3I6ICR7Y29sb3IgfHwgdGV4dENvbG9yID8gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKGNvbG9yIHx8IHRleHRDb2xvcikpIDogJ2luaGVyaXQnfTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6ICR7Y3VzdG9tUGFkZGluZyB8fCBudWxsfTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIGB9O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICR7KHByb3BzKSA9PiBzdHlsaW5nKHByb3BzKX07XG4gICAgJHsocHJvcHMpID0+IHRleHQocHJvcHMsIHByb3BzLnRleHRTaXplKX07XG4gICAgJHsoeyBjdXN0b21TdHlsZXMgfSkgPT4gY3VzdG9tU3R5bGVzfTtcbiAgICAkeyh7IHN0eWxlc1hTIH0pID0+IHN0eWxlc1hTID8gbnVsbCA6IGNzc2BcbiAgICAgICR7TUVESUFfUVVFUklFUy5MVC5TTX0ge1xuICAgICAgICAke3N0eWxlc1hTfTtcbiAgICAgIH1cbiAgICBgfTtcbmA7XG5cbmNvbnN0IFN0eWxlZCA9IGZvcndhcmRSZWYoKHtcbiAgYm9yZGVyLFxuICBib3JkZXJDb2xvcixcbiAgYm9yZGVyVG9wLFxuICBib3JkZXJSaWdodCxcbiAgYm9yZGVyQm90dG9tLFxuICBib3JkZXJMZWZ0LFxuICBib3JkZXJSYWRpdXMsXG4gIGNsYXNzTmFtZSxcbiAgbWFyZ2luLFxuICBwYWRkaW5nLFxuICByYWRpdXMsXG4gIHNoYWRvdyxcbiAgc2hhZG93Q29sb3IsXG4gIHNoYWRvd1NwcmVhZCxcbiAgc3R5bGVzLFxuICAuLi5wcm9wc1xufSwgcmVmKSA9PiB7XG4gIGNvbnN0IGdldENvbG9yTm90Qm9vbCAgICA9IChkZXNpcmVkKSA9PiAodHlwZW9mIGRlc2lyZWQgIT09ICdzdHJpbmcnID8gJycgOiBkZXNpcmVkKTtcbiAgY29uc3QgZ2V0U3BhY2VtZW50ICAgICAgID0gKHNpemUpID0+ICgodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSA/IGAke3NpemV9cHhgIDogc2l6ZSk7XG4gIGNvbnN0IHNoYWRvd0NvbG9yRGVmYXVsdCA9IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChzaGFkb3dDb2xvciB8fCAnc2hhZG93JykpO1xuICBjb25zdCBib3JkZXJDb2xvckRlZmF1bHQgPSAoYm9yZGVyQ29sb3IgfHwgJ2JvcmRlcicpO1xuICBjb25zdCBib3hTaGFkb3cgICAgICAgICAgPSBbXG4gICAgKCFib3JkZXIgJiYgIWJvcmRlclRvcCkgPyAnJyAgICA6IGBpbnNldCAwIDFweCAwIDAgJHtjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAoZ2V0Q29sb3JOb3RCb29sKGJvcmRlclRvcCB8fCBib3JkZXIpIHx8IGJvcmRlckNvbG9yRGVmYXVsdCkpfWAsXG4gICAgKCFib3JkZXIgJiYgIWJvcmRlclJpZ2h0KSA/ICcnICA6IGBpbnNldCAtMXB4IDAgMCAwICR7Y29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKGdldENvbG9yTm90Qm9vbChib3JkZXJSaWdodCB8fCBib3JkZXIpIHx8IGJvcmRlckNvbG9yRGVmYXVsdCkpfWAsXG4gICAgKCFib3JkZXIgJiYgIWJvcmRlckJvdHRvbSkgPyAnJyA6IGBpbnNldCAwIC0xcHggMCAwICR7Y29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKGdldENvbG9yTm90Qm9vbChib3JkZXJCb3R0b20gfHwgYm9yZGVyKSB8fCBib3JkZXJDb2xvckRlZmF1bHQpKX1gLFxuICAgICghYm9yZGVyICYmICFib3JkZXJMZWZ0KSA/ICcnICAgOiBgaW5zZXQgMXB4IDAgMCAwICR7Y29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKGdldENvbG9yTm90Qm9vbChib3JkZXJMZWZ0IHx8IGJvcmRlcikgfHwgYm9yZGVyQ29sb3JEZWZhdWx0KSl9YCxcbiAgICAhc2hhZG93ID8gJycgICAgICAgOiAodHlwZW9mIHNoYWRvdyA9PT0gJ3N0cmluZycgPyBzaGFkb3cgOiBgMCAwICR7c2hhZG93U3ByZWFkIHx8ICcxMHB4J30gJHtzaGFkb3dDb2xvckRlZmF1bHR9YCksXG4gIF0uZmlsdGVyKChib3JkZXIpID0+IGJvcmRlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU3R5bGVkXG4gICAgICByZWY9e3JlZn1cbiAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzIHx8IHJhZGl1c31cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfSBgIDogJyd9YXBoLXN0eWxlZGB9XG4gICAgICBjdXN0b21Cb3hTaGFkb3c9e2JveFNoYWRvdy5qb2luKCcsICcpfVxuICAgICAgY3VzdG9tTWFyZ2luPXtnZXRTcGFjZW1lbnQobWFyZ2luKX1cbiAgICAgIGN1c3RvbVBhZGRpbmc9e2dldFNwYWNlbWVudChwYWRkaW5nKX1cbiAgICAgIGN1c3RvbVN0eWxlcz17c3R5bGVzfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59KTtcblxuU3R5bGVkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEhUTUwgVGFnIGFzIHN0cmluZyBvciBvbmUgUmVhY3QgQ29tcG9uZW50OlxuICAgKiA8U3R5bGVkIGFzPXtDb250YWluZXJ9PlRyeSB0aGlzPC9TdHlsZWQ+XG4gICAqL1xuICBhczogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5lbGVtZW50IF0pLFxuXG4gIC8qKlxuICAgKiBVc2VzIGluc2V0IGBib3gtc2hhZG93YCBhcyBib3JkZXIgYXQgdG9wLlxuICAgKiBTdHJpbmcgdG8gcGFzcyB0aGUgY29sb3IuXG4gICAqL1xuICBib3JkZXJUb3A6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuYm9vbCwgcHJvcFR5cGVzLnN0cmluZyBdKSxcblxuICAvKipcbiAgICogVXNlcyBpbnNldCBgYm94LXNoYWRvd2AgYXMgYm9yZGVyIGF0IHJpZ2h0LlxuICAgKiBTdHJpbmcgdG8gcGFzcyB0aGUgY29sb3IuXG4gICAqL1xuICBib3JkZXJSaWdodDogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5ib29sLCBwcm9wVHlwZXMuc3RyaW5nIF0pLFxuXG4gIC8qKlxuICAgKiBVc2VzIGluc2V0IGBib3gtc2hhZG93YCBhcyBib3JkZXIgYXQgYm90dG9tLlxuICAgKiBTdHJpbmcgdG8gcGFzcyB0aGUgY29sb3IuXG4gICAqL1xuICBib3JkZXJCb3R0b206IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuYm9vbCwgcHJvcFR5cGVzLnN0cmluZyBdKSxcblxuICAvKipcbiAgICogVXNlcyBpbnNldCBgYm94LXNoYWRvd2AgYXMgYm9yZGVyIGF0IGxlZnQuXG4gICAqIFN0cmluZyB0byBwYXNzIHRoZSBjb2xvci5cbiAgICovXG4gIGJvcmRlckxlZnQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuYm9vbCwgcHJvcFR5cGVzLnN0cmluZyBdKSxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIGJvcmRlci9gYm94LXNoYWRvd2BcbiAgICovXG4gIGJvcmRlckNvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBCb3JkZXIgUmFkaXVzXG4gICAqL1xuICBib3JkZXJSYWRpdXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMubnVtYmVyIF0pLFxuXG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIENvbG9yIGZyb20gYGNvbG9yc2AgdXRpbGl0eVxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSBsaWtlIHRoaXM6IGNvbG9yPVwib2NlYW4sY3J5c3RhbCwwLjVcIlxuICAgKi9cbiAgYmFja2dyb3VuZDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGV4dCBDb2xvciBmcm9tIGBjb2xvcnNgIHV0aWxpdHkuXG4gICAqXG4gICAqIFlvdSBjYW4gdXNlIGxpa2UgdGhpczogY29sb3I9XCJvY2VhbixkYXJrXCJcbiAgICovXG4gIGNvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBPbiBtb3VzZSBob3ZlciwgY2hhbmdlcyBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgKi9cbiAgaG92ZXJhYmxlOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLmJvb2wsIHByb3BUeXBlcy5zdHJpbmcgXSksXG5cbiAgLyoqXG4gICAqIEJveCBNYXJnaW5cbiAgICovXG4gIG1hcmdpbjogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5udW1iZXIgXSksXG5cbiAgLyoqXG4gICAqIEJveCBQYWRkaW5nXG4gICAqL1xuICBwYWRkaW5nOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm51bWJlciBdKSxcblxuICAvKipcbiAgICogU2FtZXMgYXMgQm9yZGVyIFJhZGl1c1xuICAgKi9cbiAgcmFkaXVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLm51bWJlciBdKSxcblxuICAvKipcbiAgICogQm94IFNoYWRvd1xuICAgKi9cbiAgc2hhZG93OiBwcm9wVHlwZXMub25lT2ZUeXBlKFsgcHJvcFR5cGVzLmJvb2wsIHByb3BUeXBlcy5zdHJpbmcgXSksXG5cbiAgLyoqXG4gICAqIEJveCBTaGFkb3cgY29sb3JcbiAgICovXG4gIHNoYWRvd0NvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBCb3ggU2hhZG93IHNwcmVhZC4gRXguOiBzaGFkb3dTcHJlYWQ9XCI1cHhcIlxuICAgKi9cbiAgc2hhZG93U3ByZWFkOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gU3R5bGVzXG4gICAqL1xuICBzdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEN1c3RvbSBTdHlsZXMgdG8gc2NyZWVucyBzbWFsbGVyIHRoYW4gNzY4cHhcbiAgICovXG4gIHN0eWxlc1hTOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUZXh0IEFsaWduXG4gICAqL1xuICB0ZXh0QWxpZ246IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgaGVhdnkgYGZvbnQtd2VpZ2h0YFxuICAgKi9cbiAgdGV4dEJvbGQ6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGB3b3JkLWJyZWFrOiBicmVhay1hbGw7YFxuICAgKi9cbiAgdGV4dEJyZWFrQWxsOiBwcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGV4dCBBbGlnbmVkIGF0IGNlbnRlclxuICAgKi9cbiAgdGV4dENlbnRlcjogcHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRleHQgQ29sb3IsIHNhbWUgYXMgYGNvbG9yYCBwcm9wXG4gICAqL1xuICB0ZXh0Q29sb3I6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRleHQgQ29sb3IgYXMgY29sb3IgYGhlbHBlcmAgZnJvbSBjb2xvcnMgdXRpbGl0eVxuICAgKi9cbiAgdGV4dEhlbHBlcjogcHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRleHQgQ29sb3IgYXMgY29sb3IgYGxpbmtgIGZyb20gY29sb3JzIHV0aWxpdHlcbiAgICovXG4gIHRleHRMaW5rOiBwcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGV4dCBMb3dlcmNhc2VcbiAgICovXG4gIHRleHRMb3dlcjogcHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRleHQgVXBwZXJjYXNlXG4gICAqL1xuICB0ZXh0VXBwZXI6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUZXh0IFNpemVcbiAgICovXG4gIHRleHRTaXplOiBwcm9wVHlwZXMub25lT2YoWyAneHMnLCAnc20nLCAnbWQnLCAnbGcnIF0pLFxuXG4gIC8qKlxuICAgKiBUZXh0IFRydW5jYXRlIGFwcGxpZXMgY3NzIHJ1bGVzIHRvIGRvbid0IGJyZWFrIGxpbmVzIGFuZCBoaWRlIHRleHQvY29udGVudFxuICAgKi9cbiAgdGV4dFRydW5jYXRlOiBwcm9wVHlwZXMuYm9vbCxcblxuICBhbGlnbkNvbnRlbnQ6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduSXRlbXM6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduU2VsZjogcHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzcGxheTogcHJvcFR5cGVzLnN0cmluZyxcbiAgZmxleDogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5ib29sLCBwcm9wVHlwZXMubnVtYmVyLCBwcm9wVHlwZXMuc3RyaW5nIF0pLFxuICBmbGV4RGlyZWN0aW9uOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBmbGV4RGlzcGxheTogcHJvcFR5cGVzLnN0cmluZyxcbiAgZmxleEdyb3c6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGZsZXhTaHJpbms6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGZsZXhXcmFwOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBqdXN0aWZ5Q29udGVudDogcHJvcFR5cGVzLnN0cmluZyxcbiAgb3JkZXI6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMubnVtYmVyLCBwcm9wVHlwZXMuc3RyaW5nIF0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkO1xuIl19 */"));

var Styled = /*#__PURE__*/forwardRef(function (_ref8, ref) {
  var border = _ref8.border,
      borderColor = _ref8.borderColor,
      borderTop = _ref8.borderTop,
      borderRight = _ref8.borderRight,
      borderBottom = _ref8.borderBottom,
      borderLeft = _ref8.borderLeft,
      borderRadius = _ref8.borderRadius,
      className = _ref8.className,
      margin = _ref8.margin,
      padding = _ref8.padding,
      radius = _ref8.radius,
      shadow = _ref8.shadow,
      shadowColor = _ref8.shadowColor,
      shadowSpread = _ref8.shadowSpread,
      styles = _ref8.styles,
      props = _objectWithoutPropertiesLoose(_ref8, ["border", "borderColor", "borderTop", "borderRight", "borderBottom", "borderLeft", "borderRadius", "className", "margin", "padding", "radius", "shadow", "shadowColor", "shadowSpread", "styles"]);

  var getColorNotBool = function getColorNotBool(desired) {
    return typeof desired !== 'string' ? '' : desired;
  };

  var getSpacement = function getSpacement(size) {
    return typeof size === 'number' ? size + "px" : size;
  };

  var shadowColorDefault = colors$1.getFullColor(props, shadowColor || 'shadow');
  var borderColorDefault = borderColor || 'border';
  var boxShadow = [!border && !borderTop ? '' : "inset 0 1px 0 0 " + colors$1.getFullColor(props, getColorNotBool(borderTop || border) || borderColorDefault), !border && !borderRight ? '' : "inset -1px 0 0 0 " + colors$1.getFullColor(props, getColorNotBool(borderRight || border) || borderColorDefault), !border && !borderBottom ? '' : "inset 0 -1px 0 0 " + colors$1.getFullColor(props, getColorNotBool(borderBottom || border) || borderColorDefault), !border && !borderLeft ? '' : "inset 1px 0 0 0 " + colors$1.getFullColor(props, getColorNotBool(borderLeft || border) || borderColorDefault), !shadow ? '' : typeof shadow === 'string' ? shadow : "0 0 " + (shadowSpread || '10px') + " " + shadowColorDefault].filter(function (border) {
    return border;
  });
  return /*#__PURE__*/React.createElement(StyledStyled, _extends({
    ref: ref,
    borderRadius: borderRadius || radius,
    className: (className ? className + " " : '') + "aph-styled",
    customBoxShadow: boxShadow.join(', '),
    customMargin: getSpacement(margin),
    customPadding: getSpacement(padding),
    customStyles: styles
  }, props));
});
Styled.propTypes = {
  as: propTypes.oneOfType([propTypes.string, propTypes.element]),
  borderTop: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  borderRight: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  borderBottom: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  borderLeft: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  borderColor: propTypes.string,
  borderRadius: propTypes.oneOfType([propTypes.string, propTypes.number]),
  background: propTypes.string,
  color: propTypes.string,
  hoverable: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  margin: propTypes.oneOfType([propTypes.string, propTypes.number]),
  padding: propTypes.oneOfType([propTypes.string, propTypes.number]),
  radius: propTypes.oneOfType([propTypes.string, propTypes.number]),
  shadow: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  shadowColor: propTypes.string,
  shadowSpread: propTypes.string,
  styles: propTypes.object,
  stylesXS: propTypes.object,
  textAlign: propTypes.string,
  textBold: propTypes.bool,
  textBreakAll: propTypes.bool,
  textCenter: propTypes.bool,
  textColor: propTypes.string,
  textHelper: propTypes.bool,
  textLink: propTypes.bool,
  textLower: propTypes.bool,
  textUpper: propTypes.bool,
  textSize: propTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  textTruncate: propTypes.bool,
  alignContent: propTypes.string,
  alignItems: propTypes.string,
  alignSelf: propTypes.string,
  display: propTypes.string,
  flex: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string]),
  flexDirection: propTypes.string,
  flexDisplay: propTypes.string,
  flexGrow: propTypes.string,
  flexShrink: propTypes.string,
  flexWrap: propTypes.string,
  justifyContent: propTypes.string,
  order: propTypes.oneOfType([propTypes.number, propTypes.string])
};

var Card = _objectSpread2({}, Styled);

Card.defaultProps = _objectSpread2({
  padding: '15px',
  radius: 10,
  shadow: true,
  shadowSpread: '5px'
}, Styled.defaultProps);

var _SIZES$XS = SIZES.XS,
    FONT_SIZE = _SIZES$XS.FONT_SIZE,
    LINE_HEIGHT = _SIZES$XS.LINE_HEIGHT;

var HoverActionItem = _styled("button", {
  target: "e120tsy80",
  label: "HoverActionItem"
})("box-sizing:border-box;display:inline-block;padding:6px 5px 4px;margin:0;font-weight:bold;font-size:", FONT_SIZE, ";line-height:", LINE_HEIGHT, ";text-transform:uppercase;border:0;outline:0;text-decoration:none;border-radius:", RADIUS.XS, "px;cursor:pointer;color:", function (props) {
  return props.color ? colors$1.getFromTheme(props, props.color) : null;
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse', null, 0.75);
}, ";box-shadow:0 0 5px ", function (props) {
  return colors$1.getFromTheme(props, 'shadow');
}, ";transition:color 0.25s linear,background-color 0.25s linear;&:active,&:focus,&:hover{border:0;outline:0;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse', null, 1);
}, ";}&.success{color:", function (props) {
  return colors$1.getFromTheme(props, 'success');
}, ";}&.error{color:", function (props) {
  return colors$1.getFromTheme(props, 'error');
}, ";}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvdmVyQWN0aW9uc0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXFDIiwiZmlsZSI6IkhvdmVyQWN0aW9uc0l0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgUkFESVVTLCBTSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFV0aWxpdGllcyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBTaXplcyAqL1xuY29uc3QgeyBGT05UX1NJWkUsIExJTkVfSEVJR0hUIH0gPSBTSVpFUy5YUztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgSG92ZXJBY3Rpb25JdGVtID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDZweCA1cHggNHB4O1xuICAgIG1hcmdpbiA6IDA7XG5cbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcbiAgICBmb250LXNpemUgICAgIDogJHtGT05UX1NJWkV9O1xuICAgIGxpbmUtaGVpZ2h0ICAgOiAke0xJTkVfSEVJR0hUfTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgYm9yZGVyLXJhZGl1czogJHtSQURJVVMuWFN9cHg7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBjb2xvciAgICAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLmNvbG9yID8gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuY29sb3IpIDogbnVsbH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScsIG51bGwsIDAuNzUpfTtcbiAgICBib3gtc2hhZG93ICAgICAgOiAwIDAgNXB4ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NoYWRvdycpfTtcblxuICAgIHRyYW5zaXRpb246XG4gICAgICAgIGNvbG9yIDAuMjVzIGxpbmVhcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXJcbiAgICA7XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIge1xuICAgICAgICBib3JkZXIgOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJywgbnVsbCwgMSl9O1xuICAgIH1cblxuICAgICYuc3VjY2VzcyB7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzdWNjZXNzJyl9O1xuICAgIH1cblxuICAgICYuZXJyb3Ige1xuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZXJyb3InKX07XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBIb3ZlckFjdGlvbkl0ZW07XG4iXX0= */"));

var ClipboardStyled = /*#__PURE__*/_styled(HoverActionItem, {
  target: "e1u4doz90",
  label: "ClipboardStyled"
})(function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaXBib2FyZFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0QiLCJmaWxlIjoiQ2xpcGJvYXJkU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb21wb25lbnQgQmFzZSAqL1xuaW1wb3J0IEhvdmVyQWN0aW9uc0l0ZW0gZnJvbSAnLi4vSG92ZXJBY3Rpb25zL0hvdmVyQWN0aW9uc0l0ZW0nO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBDbGlwYm9hcmRTdHlsZWQgPSBzdHlsZWQoSG92ZXJBY3Rpb25zSXRlbSlgXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDbGlwYm9hcmRTdHlsZWQ7XG4iXX0= */"));

var AphClipboardWrapper = /*#__PURE__*/_styled(ReactClipboard, {
  target: "e1qdasv60",
  label: "AphClipboardWrapper"
})("box-sizing:border-box;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaXBib2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWtEIiwiZmlsZSI6IkNsaXBib2FyZC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RDbGlwYm9hcmQgZnJvbSAncmVhY3QtY2xpcGJvYXJkLmpzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuaW1wb3J0IENsaXBib2FyZFN0eWxlZCBmcm9tICcuL0NsaXBib2FyZFN0eWxlZCc7XG5jb25zdCBBcGhDbGlwYm9hcmRXcmFwcGVyID0gc3R5bGVkKFJlYWN0Q2xpcGJvYXJkKWBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IENsaXBib2FyZCA9IChwcm9wcykgPT4ge1xuXG4gICAgLyoqXG4gICAgICogR2xvYmFsIHZhbHVlc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgc3R5bGVkLFxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBvblN1Y2Nlc3MsXG4gICAgICAgIG9uRXJyb3IsXG5cbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIC8qKlxuICAgICAqIExvY2FsIHZhbHVlc1xuICAgICAqL1xuICAgIGNvbnN0IFsgdGltZXIsIHNldFRpbWVyIF0gICA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFsgc3RhdHVzLCBzZXRTdGF0dXMgXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIC8qKlxuICAgICAqIEFwcGx5IFN0YXR1c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IF9zdGF0dXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfYXBwbHlTdGF0dXMgKF9zdGF0dXMpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgc2V0U3RhdHVzKF9zdGF0dXMpO1xuICAgICAgICBzZXRUaW1lcihcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1cygnJyk7XG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGVycm9yXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZ0XG4gICAgICovXG4gICAgZnVuY3Rpb24gX29uRXJyb3IgKGV2dCkge1xuICAgICAgICBfYXBwbHlTdGF0dXMoJ2Vycm9yJyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvbkVycm9yKHsgLi4uZXZ0IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gc3VjY2Vzc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2dFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9vblN1Y2Nlc3MgKGV2dCkge1xuICAgICAgICBfYXBwbHlTdGF0dXMoJ3N1Y2Nlc3MnKTtcblxuICAgICAgICBpZiAodHlwZW9mIG9uU3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgb25TdWNjZXNzKHsgLi4uZXZ0IH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2lsbCBVbm1vdW50XG4gICAgICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICAvKipcbiAgICAgKiBDb21tb24gUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdCBjbGlwYm9hcmRQcm9wcyA9IHtcbiAgICAgICAgLi4ucmVzdCxcblxuICAgICAgICBzdHlsZXMgICA6IHN0eWxlcyxcbiAgICAgICAgb25FcnJvciAgOiBfb25FcnJvcixcbiAgICAgICAgb25TdWNjZXNzOiBfb25TdWNjZXNzLFxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJcbiAgICAgKi9cbiAgICBpZiAoIXN0eWxlZCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEFwaENsaXBib2FyZFdyYXBwZXJcbiAgICAgICAgICAgICAgICB7Li4uY2xpcGJvYXJkUHJvcHN9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWNsaXBib2FyZCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2xpcGJvYXJkU3R5bGVkXG4gICAgICAgICAgICB7Li4uY2xpcGJvYXJkUHJvcHN9XG4gICAgICAgICAgICBhcz17UmVhY3RDbGlwYm9hcmR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtY2xpcGJvYXJkJHtzdGF0dXMgPT09ICdzdWNjZXNzJyA/ICcgc3VjY2VzcycgOiAnJ30ke3N0YXR1cyA9PT0gJ2Vycm9yJyA/ICcgZXJyb3InIDogJyd9ICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cbkNsaXBib2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVkOiBmYWxzZSxcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ2xpcGJvYXJkLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHN0eWxlc1xuICAgICAqL1xuICAgIHN0eWxlZDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdWxsIGN1c3RvbSBzdHlsZXNcbiAgICAgKi9cbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDbGlwYm9hcmQ7XG4iXX0= */"));

var Clipboard = function Clipboard(props) {
  var styled = props.styled,
      styles = props.styles,
      className = props.className,
      onSuccess = props.onSuccess,
      onError = props.onError,
      rest = _objectWithoutPropertiesLoose(props, ["styled", "styles", "className", "onSuccess", "onError"]);

  var _useState = useState(null),
      timer = _useState[0],
      setTimer = _useState[1];

  var _useState2 = useState(''),
      status = _useState2[0],
      setStatus = _useState2[1];

  function _applyStatus(_status) {
    clearTimeout(timer);
    setStatus(_status);
    setTimer(setTimeout(function () {
      setStatus('');
    }, 1000));
  }

  function _onError(evt) {
    _applyStatus('error');

    if (typeof onError === 'function') {
      onError(_objectSpread2({}, evt));
    }
  }

  function _onSuccess(evt) {
    _applyStatus('success');

    if (typeof onSuccess === 'function') {
      onSuccess(_objectSpread2({}, evt));
    }
  }

  useEffect(function () {
    return function () {
      clearTimeout(timer);
    };
  }, []);

  var clipboardProps = _objectSpread2(_objectSpread2({}, rest), {}, {
    styles: styles,
    onError: _onError,
    onSuccess: _onSuccess
  });

  if (!styled) {
    return /*#__PURE__*/React.createElement(AphClipboardWrapper, _extends({}, clipboardProps, {
      className: "aph-clipboard " + (className || '')
    }));
  }

  return /*#__PURE__*/React.createElement(ClipboardStyled, _extends({}, clipboardProps, {
    as: ReactClipboard,
    className: "aph-clipboard" + (status === 'success' ? ' success' : '') + (status === 'error' ? ' error' : '') + " " + (className || '')
  }));
};

Clipboard.defaultProps = {
  styled: false,
  styles: {}
};
Clipboard.propTypes = {
  styled: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var DialogWrapper = _styled("section", {
  target: "ectk1z10",
  label: "DialogWrapper"
})("display:flex;align-items:", function (props) {
  return props.align;
}, ";justify-content:", function (props) {
  return props.justify;
}, ";padding:", function (props) {
  return props.padding;
}, ";background-color:rgba(0,0,0,0.25);position:fixed;left:0;top:0;z-index:9999;height:100%;width:100%;opacity:0;visibility:hidden;transition:all 195ms cubic-bezier(0.4,0,0.2,1) 0ms;&.act{opacity:1;visibility:visible;}", function (props) {
  return props.styles;
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpYWxvZ1N0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFMkMiLCJmaWxlIjoiRGlhbG9nU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgRGlhbG9nV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6ICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbn07XG4gICAganVzdGlmeS1jb250ZW50OiAkeyhwcm9wcykgPT4gcHJvcHMuanVzdGlmeX07XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnBhZGRpbmd9O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDE5NW1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xuXG4gICAgJi5hY3Qge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5zdHlsZXN9XG5gO1xuXG5leHBvcnQgY29uc3QgRGlhbG9nQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zaXRpb246IGFsbCA0MDBtcyBjdWJpYy1iZXppZXIoMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1KTtcblxuICAgICYuYWN0IHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG5gO1xuIl19 */");
var DialogContent = _styled("div", {
  target: "ectk1z11",
  label: "DialogContent"
})(process.env.NODE_ENV === "production" ? {
  name: "djj6yk",
  styles: "opacity:0;transform:scale(0);transition:all 400ms cubic-bezier(0.68,-0.55,0.265,1.55);&.act{z-index:2;opacity:1;transform:scale(1);}"
} : {
  name: "djj6yk",
  styles: "opacity:0;transform:scale(0);transition:all 400ms cubic-bezier(0.68,-0.55,0.265,1.55);&.act{z-index:2;opacity:1;transform:scale(1);}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpYWxvZ1N0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQnVDIiwiZmlsZSI6IkRpYWxvZ1N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuZXhwb3J0IGNvbnN0IERpYWxvZ1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiAkeyhwcm9wcykgPT4gcHJvcHMuYWxpZ259O1xuICAgIGp1c3RpZnktY29udGVudDogJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnl9O1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5wYWRkaW5nfTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCAxOTVtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpIDBtcztcblxuICAgICYuYWN0IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuc3R5bGVzfVxuYDtcblxuZXhwb3J0IGNvbnN0IERpYWxvZ0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNDAwbXMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XG5cbiAgICAmLmFjdCB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

function Dialog(_ref) {
  var opened = _ref.opened,
      onClose = _ref.onClose,
      align = _ref.align,
      justify = _ref.justify,
      children = _ref.children,
      styles = _ref.styles,
      padding = _ref.padding,
      closeArea = _ref.closeArea;
  return /*#__PURE__*/React.createElement(DialogWrapper, {
    className: "aph-dialog__wrapper " + (opened ? 'act' : ''),
    styles: styles,
    align: align,
    justify: justify,
    padding: padding
  }, /*#__PURE__*/React.createElement(DialogContent, {
    className: "aph-dialog__content " + (opened ? 'act' : '')
  }, children), !closeArea ? null : /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    className: "aph-dialog__close__area",
    style: {
      zIndex: '-1',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  }));
}

Dialog.propTypes = {
  opened: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  closeArea: propTypes.bool,
  align: propTypes.string,
  justify: propTypes.string,
  padding: propTypes.string,
  children: propTypes.any,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};
Dialog.defaultProps = {
  children: null,
  closeArea: true,
  padding: '0',
  align: 'center',
  justify: 'center',
  styles: {}
};

var DISTANCE = 'calc(100% + 10px)';

var DropdownStyled = _styled("div", {
  target: "e1mflwxx0",
  label: "DropdownStyled"
})("box-sizing:border-box;position:relative;display:block;width:100%;z-index:1", function (props) {
  return props.opened ? 0 : null;
}, ";-webkit-box-orient:vertical;-webkit-box-direction:normal;.aph{&-dropdown{&__toggle,&__content{box-sizing:border-box;}&__toggle{display:", function (props) {
  return props.toggleBlock ? '' : 'inline-';
}, "block;width:", function (props) {
  return props.toggleBlock ? '100%' : null;
}, ";cursor:pointer;border:0;outline:0;margin:0;padding:0;color:inherit;background:transparent;z-index:4;}&__content{display:none;position:absolute;z-index:", function (props) {
  return props.opened ? 6 : 3;
}, ";top:", function (props) {
  return props.up ? null : DISTANCE;
}, ";bottom:", function (props) {
  return props.up ? DISTANCE : null;
}, ";left:", function (props) {
  return props.center ? '50%' : props.right ? null : '0';
}, ";right:", function (props) {
  return props.right && !props.center ? '0' : null;
}, ";transform:", function (props) {
  return props.center ? 'translateX(-50%)' : null;
}, ";opacity:0;width:", function (props) {
  return props.contentWidth || null;
}, ";will-change:z-index,opacity;transition:display ", function (props) {
  return props.opened ? 0.25 : 0.1;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.15 : 0.25;
}, "s linear;color:", function (props) {
  return colors$1.getFromTheme(props, 'black');
}, ";background:", function (props) {
  return colors$1.getFromTheme(props, 'white');
}, ";box-shadow:0 2px 10px 0 ", function (props) {
  return colors$1.getFromTheme(props, 'shadow', 'crystal');
}, ";padding:", function (props) {
  return props.thin ? '0' : '15px 10px';
}, ";border-radius:", RADIUS.XS, "px;text-align:", function (props) {
  return props.right ? 'left' : null;
}, ";align-self:center;overflow:hidden;&.visible{display:block;}&.active{opacity:1;}}}&-list{overflow:hidden;}}&.up{.aph-dropdown{&__content{top:auto;bottom:100%;}}}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRyb3Bkb3duU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdpQyIsImZpbGUiOiJEcm9wZG93blN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgTGlicmFyeSBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyBIZWxwZXJzICovXG5jb25zdCBESVNUQU5DRSA9ICdjYWxjKDEwMCUgKyAxMHB4KSc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IERyb3Bkb3duU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICB3aWR0aCAgIDogMTAwJTtcbiAgICB6LWluZGV4IDogMSR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMCA6IG51bGx9O1xuXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcblxuICAgIC5hcGgge1xuICAgICAgICAmLWRyb3Bkb3duIHtcbiAgICAgICAgICAgICZfX3RvZ2dsZSxcbiAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSAgIDogJHtwcm9wcyA9PiAocHJvcHMudG9nZ2xlQmxvY2sgPyAnJyA6ICdpbmxpbmUtJyl9YmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGggICAgIDogJHtwcm9wcyA9PiAocHJvcHMudG9nZ2xlQmxvY2sgPyAnMTAwJScgOiBudWxsKX07XG4gICAgICAgICAgICAgICAgY3Vyc29yICAgIDogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgOiAwO1xuICAgICAgICAgICAgICAgIG91dGxpbmUgICA6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luICAgIDogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nICAgOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yICAgICA6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgei1pbmRleCAgIDogNDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheSAgOiBub25lO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleCAgOiAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDYgOiAzfTtcbiAgICAgICAgICAgICAgICB0b3AgICAgICA6ICR7cHJvcHMgPT4gKHByb3BzLnVwID8gbnVsbCA6IERJU1RBTkNFKX07XG4gICAgICAgICAgICAgICAgYm90dG9tICAgOiAke3Byb3BzID0+IChwcm9wcy51cCA/IERJU1RBTkNFIDogbnVsbCl9O1xuICAgICAgICAgICAgICAgIGxlZnQgICAgIDogJHtwcm9wcyA9PiAocHJvcHMuY2VudGVyID8gJzUwJScgOiBwcm9wcy5yaWdodCA/IG51bGwgOiAnMCcpfTtcbiAgICAgICAgICAgICAgICByaWdodCAgICA6ICR7cHJvcHMgPT4gKChwcm9wcy5yaWdodCAmJiAhcHJvcHMuY2VudGVyKSA/ICcwJyA6IG51bGwpfTtcblxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PiAocHJvcHMuY2VudGVyID8gJ3RyYW5zbGF0ZVgoLTUwJSknIDogbnVsbCl9O1xuXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICB3aWR0aCAgOiAke3Byb3BzID0+IChwcm9wcy5jb250ZW50V2lkdGggfHwgbnVsbCl9O1xuXG4gICAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IHotaW5kZXgsIG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbiA6XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjI1IDogMC4xfXMgbGluZWFyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICR7cHJvcHMgPT4gcHJvcHMub3BlbmVkID8gMC4xNSA6IDAuMjV9cyBsaW5lYXJcbiAgICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICAgICAgICBjb2xvciAgICAgOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdibGFjaycpfTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICd3aGl0ZScpfTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDAgJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2hhZG93JywgJ2NyeXN0YWwnKX07XG5cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAke3Byb3BzID0+IChwcm9wcy50aGluID8gJzAnIDogJzE1cHggMTBweCcpfTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke1JBRElVUy5YU31weDtcblxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0KSA/ICdsZWZ0JyA6IG51bGx9O1xuXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93ICA6IGhpZGRlbjtcblxuICAgICAgICAgICAgICAgICYudmlzaWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLWxpc3Qge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYudXAge1xuICAgICAgICAuYXBoLWRyb3Bkb3duIHtcbiAgICAgICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgICAgICAgIHRvcCAgIDogYXV0bztcbiAgICAgICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duU3R5bGVkO1xuIl19 */"));

var Dropdown = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      toggle = _ref.toggle,
      toggleBlock = _ref.toggleBlock,
      _ref$toggleProps = _ref.toggleProps,
      toggleProps = _ref$toggleProps === void 0 ? {} : _ref$toggleProps,
      _ref$toggleTag = _ref.toggleTag,
      toggleTag = _ref$toggleTag === void 0 ? 'button' : _ref$toggleTag,
      _ref$toggleTabIndex = _ref.toggleTabIndex,
      toggleTabIndex = _ref$toggleTabIndex === void 0 ? '-1' : _ref$toggleTabIndex,
      width = _ref.width,
      center = _ref.center,
      up = _ref.up,
      right = _ref.right,
      left = _ref.left,
      thin = _ref.thin,
      opened = _ref.opened,
      styles = _ref.styles;

  var _useState = useState(opened),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = useState(opened),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(null),
      activeTimer = _useState3[0],
      setActiveTimer = _useState3[1];

  var _useState4 = useState(null),
      visibleTimer = _useState4[0],
      setVisibleTimer = _useState4[1];

  var dropdownRef = useRef(null);

  function addClickListener() {
    document.addEventListener('click', handleClose);
  }

  function removeClickListener() {
    clearTimeout(activeTimer);
    clearTimeout(visibleTimer);
    document.removeEventListener('click', handleClose);
  }

  function handleClose(evt) {
    clearTimeout(visibleTimer);

    if ( evt && evt.target && dropdownRef && dropdownRef.current && dropdownRef.current.contains(evt.target)) {
      return;
    }

    setActive(false);
    setVisible(true);
    setVisibleTimer(setTimeout(function () {

      setVisible(false);
      removeClickListener();
    }, 250));
  }

  function handleOpen(evt) {
    clearTimeout(activeTimer);

    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }

    setActive(false);
    setVisible(true);
    setActiveTimer(setTimeout(function () {

      setActive(true);
      addClickListener();
    }, 50));
  }

  function handleToggle(evt) {
    if (visible && !opened) {
      return handleClose();
    }

    handleOpen(evt);
  }

  useEffect(function () {
    removeClickListener();

    if (!opened) {
      handleClose();
      return;
    }

    if (opened || active) {
      addClickListener();
      handleOpen();
    }

    return removeClickListener;
  }, [opened]);
  useEffect(function () {
    return removeClickListener;
  }, []);
  return /*#__PURE__*/React.createElement(DropdownStyled, {
    opened: visible,
    center: center,
    up: up,
    right: right,
    left: left,
    thin: thin,
    toggleBlock: toggleBlock || center,
    contentWidth: width,
    styles: styles,
    ref: dropdownRef,
    className: "aph-dropdown " + (className || '')
  }, !toggle ? null : /*#__PURE__*/React.createElement(Styled, _extends({
    as: toggleTag,
    role: "button",
    type: "button",
    tabIndex: toggleTabIndex,
    onClick: handleToggle,
    className: "aph-dropdown__toggle"
  }, toggleProps), toggle), !visible ? null : /*#__PURE__*/React.createElement("div", {
    className: "aph-dropdown__content" + (active ? ' active' : '') + (visible ? ' visible' : ''),
    onClick: function onClick() {
      return handleClose();
    }
  }, children));
});
Dropdown.defaultProps = {
  className: '',
  toggle: '',
  opened: false,
  width: '220px',
  thin: false,
  up: false,
  right: false,
  left: true,
  styles: {}
};
Dropdown.propTypes = {
  className: propTypes.string,
  toggle: propTypes.oneOfType([propTypes.string, propTypes.element]),
  opened: propTypes.bool,
  width: propTypes.string,
  thin: propTypes.bool,
  up: propTypes.bool,
  right: propTypes.bool,
  left: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var ExpansionPanelWrapper = _styled("div", {
  target: "e16mc3ef0",
  label: "ExpansionPanelWrapper"
})("position:relative;box-shadow:inset 0 -1px 0 0 ", colors$1.get('mercury', 'crystal'), ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cGFuc2lvblBhbmVsU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUcrQyIsImZpbGUiOiJFeHBhbnNpb25QYW5lbFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEV4cGFuc2lvblBhbmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0KCdtZXJjdXJ5JywgJ2NyeXN0YWwnKX07XG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4cGFuc2lvblBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBsaW5lYXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ2V0KCdzbW9rZScpfTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmhlYWRlclN0eWxlc307XG5gO1xuXG5leHBvcnQgY29uc3QgRXhwYW5zaW9uUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBvdmVyZmxvdzogJHsocHJvcHMpID0+IHByb3BzLm9wZW5lZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfTtcbiAgICBoZWlnaHQgIDogJHsocHJvcHMpID0+IHByb3BzLm9wZW5lZCA/ICdhdXRvJyA6IDB9O1xuYDtcbiJdfQ== */"));
var ExpansionPanelHeader = _styled("div", {
  target: "e16mc3ef1",
  label: "ExpansionPanelHeader"
})("cursor:pointer;padding:15px 0;transition:background-color 0.3s linear;&:hover{background-color:", colors$1.get('smoke'), ";}", function (props) {
  return props.headerStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cGFuc2lvblBhbmVsU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVM4QyIsImZpbGUiOiJFeHBhbnNpb25QYW5lbFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEV4cGFuc2lvblBhbmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0KCdtZXJjdXJ5JywgJ2NyeXN0YWwnKX07XG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4cGFuc2lvblBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBsaW5lYXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ2V0KCdzbW9rZScpfTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLmhlYWRlclN0eWxlc307XG5gO1xuXG5leHBvcnQgY29uc3QgRXhwYW5zaW9uUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBvdmVyZmxvdzogJHsocHJvcHMpID0+IHByb3BzLm9wZW5lZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfTtcbiAgICBoZWlnaHQgIDogJHsocHJvcHMpID0+IHByb3BzLm9wZW5lZCA/ICdhdXRvJyA6IDB9O1xuYDtcbiJdfQ== */"));
var ExpansionPanelContent = _styled("div", {
  target: "e16mc3ef2",
  label: "ExpansionPanelContent"
})("overflow:", function (props) {
  return props.opened ? 'visible' : 'hidden';
}, ";height:", function (props) {
  return props.opened ? 'auto' : 0;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkV4cGFuc2lvblBhbmVsU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCK0MiLCJmaWxlIjoiRXhwYW5zaW9uUGFuZWxTdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBFeHBhbnNpb25QYW5lbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICR7Y29sb3JzLmdldCgnbWVyY3VyeScsICdjcnlzdGFsJyl9O1xuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBFeHBhbnNpb25QYW5lbEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgbGluZWFyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JzLmdldCgnc21va2UnKX07XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5oZWFkZXJTdHlsZXN9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4cGFuc2lvblBhbmVsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgb3ZlcmZsb3c6ICR7KHByb3BzKSA9PiBwcm9wcy5vcGVuZWQgPyAndmlzaWJsZScgOiAnaGlkZGVuJ307XG4gICAgaGVpZ2h0ICA6ICR7KHByb3BzKSA9PiBwcm9wcy5vcGVuZWQgPyAnYXV0bycgOiAwfTtcbmA7XG4iXX0= */"));

function ExpansionPanel(props) {
  var header = props.header,
      children = props.children,
      expanded = props.expanded,
      expandedCallback = props.expandedCallback,
      styles = props.styles,
      headerStyles = props.headerStyles,
      rest = _objectWithoutPropertiesLoose(props, ["header", "children", "expanded", "expandedCallback", "styles", "headerStyles"]);

  var _useState = useState(expanded),
      opened = _useState[0],
      setOpened = _useState[1];

  useEffect(function () {
    setOpened(expanded);
  }, [expanded]);

  function toggle() {
    setOpened(!opened);
    expandedCallback(!opened);
  }

  return /*#__PURE__*/React.createElement(ExpansionPanelWrapper, _extends({}, rest, {
    styles: styles,
    className: "aph-expansion-panel"
  }), /*#__PURE__*/React.createElement(ExpansionPanelHeader, {
    onClick: toggle,
    headerStyles: headerStyles,
    className: "aph-expansion-panel__header"
  }, header), /*#__PURE__*/React.createElement(ExpansionPanelContent, {
    opened: opened,
    className: "aph-expansion-panel__content"
  }, children));
}

ExpansionPanel.defaultProps = {
  expanded: false,
  styles: {},
  headerStyles: {},
  expandedCallback: function expandedCallback() {
    return null;
  }
};
ExpansionPanel.proTypes = {
  header: propTypes.any.isRequired,
  children: propTypes.oneOfType([propTypes.func]).isRequired,
  expanded: propTypes.bool,
  expandedCallback: propTypes.any,
  styles: propTypes.object,
  headerStyles: propTypes.object
};

var selector = '.aph-hover-actions';

var HoverActionsStyled = _styled("span", {
  target: "epahe5r0",
  label: "HoverActionsStyled"
})("box-sizing:border-box;position:relative;display:inline-block;z-index:1;", selector, "{&__content{z-index:1;filter:none;display:block;transition:filter 0.15s linear;}&__items{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;display:flex;z-index:-1;justify-content:space-evenly;align-items:center;transition:opacity 0.25s linear,z-index 0.25s linear;text-align:center;vertical-align:middle;}}", function (props) {
  return !props.hasActions ? null : "\n        &:hover,\n        &:active,\n        &:focus {\n            " + selector + " {\n                &__content {\n                    filter: blur(1px);\n                }\n\n                &__items {\n                    opacity: 1;\n                    z-index: 10;\n                }\n            }\n        }\n    ";
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvdmVyQWN0aW9uc1N0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPc0MiLCJmaWxlIjoiSG92ZXJBY3Rpb25zU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb21wb25lbnQgU2VsZWN0b3IgKi9cbmNvbnN0IHNlbGVjdG9yID0gJy5hcGgtaG92ZXItYWN0aW9ucyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEhvdmVyQWN0aW9uc1N0eWxlZCA9IHN0eWxlZC5zcGFuYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcbiAgICB6LWluZGV4IDogMTtcblxuICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgJl9fY29udGVudCB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgZmlsdGVyIDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4xNXMgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9faXRlbXMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wICAgICA6IDA7XG4gICAgICAgICAgICByaWdodCAgIDogMDtcbiAgICAgICAgICAgIGJvdHRvbSAgOiAwO1xuICAgICAgICAgICAgbGVmdCAgICA6IDA7XG4gICAgICAgICAgICBvcGFjaXR5IDogMDtcbiAgICAgICAgICAgIGRpc3BsYXkgOiBmbGV4O1xuICAgICAgICAgICAgei1pbmRleCA6IC0xO1xuXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb246XG4gICAgICAgICAgICAgICAgb3BhY2l0eSAwLjI1cyBsaW5lYXIsXG4gICAgICAgICAgICAgICAgei1pbmRleCAwLjI1cyBsaW5lYXJcbiAgICAgICAgICAgIDtcblxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuaGFzQWN0aW9ucyA/IG51bGwgOiBgXG4gICAgICAgICY6aG92ZXIsXG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDFweCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJl9faXRlbXMge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSG92ZXJBY3Rpb25zU3R5bGVkO1xuIl19 */"));

function HoverActions(props) {
  var actions = props.actions,
      className = props.className,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["actions", "className", "children"]);

  return /*#__PURE__*/React.createElement(HoverActionsStyled, _extends({
    hasActions: actions ? true : false,
    className: "aph-hover-actions " + (className || '')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "aph-hover-actions__content"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "aph-hover-actions__items"
  }, actions));
}

HoverActions.defaultProps = {
  actions: undefined,
  styles: {}
};
HoverActions.propTypes = {
  actions: propTypes.any,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var _templateObject$2;
var bgPlaceholder = keyframes(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n"])));
var Placeholder = /*#__PURE__*/forwardRef(function (props, ref) {
  var _ref = props || {},
      className = _ref.className,
      styles = _ref.styles,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "styles"]);

  var isDarkMode = props.theme && props.theme.isDarkMode ? true : false;
  var colorTheme = colors$1.getFromTheme(props, 'helper');
  var colorBase = chroma(colorTheme);
  var colorStart = colorBase.alpha(isDarkMode ? 0.5 : 0.05).css();
  var colorEnd = colorBase.alpha(isDarkMode ? 0.75 : 0.15).css();

  var StyledPlaceholder = /*#__PURE__*/_styled('div', {
    target: "eoicejf0",
    label: "StyledPlaceholder"
  })(_objectSpread2({
    fontSize: '0',
    lineHeight: '0',
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: "" + (props.block ? 'block' : 'inline-block'),
    width: "" + (props.width ? props.width + 'px' : '100%'),
    maxWidth: "" + (props.width ? props.width + 'px' : '100%'),
    minHeight: props.height + "px",
    border: props.border || null,
    borderRadius: props.radius + "px",
    color: colorBase.rgb(),
    background: "linear-gradient(90deg, " + colorStart + ", " + colorEnd + ")",
    backgroundSize: '200% 100%',
    animation: bgPlaceholder + " .9s ease infinite"
  }, styles), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBsYWNlaG9sZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzhCIiwiZmlsZSI6IlBsYWNlaG9sZGVyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzJztcblxuLyogVXRpbHMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29uc3RhbnRzICovXG5jb25zdCBiZ1BsYWNlaG9sZGVyID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgUGxhY2Vob2xkZXIgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IChwcm9wcyB8fCB7fSk7XG5cbiAgICBjb25zdCBpc0RhcmtNb2RlID0gKChwcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZS5pc0RhcmtNb2RlKSA/IHRydWUgOiBmYWxzZSk7XG4gICAgY29uc3QgY29sb3JUaGVtZSA9IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKTtcbiAgICBjb25zdCBjb2xvckJhc2UgID0gY2hyb21hKGNvbG9yVGhlbWUpO1xuICAgIGNvbnN0IGNvbG9yU3RhcnQgPSBjb2xvckJhc2UuYWxwaGEoaXNEYXJrTW9kZSA/IDAuNSA6IDAuMDUpLmNzcygpO1xuICAgIGNvbnN0IGNvbG9yRW5kICAgPSBjb2xvckJhc2UuYWxwaGEoaXNEYXJrTW9kZSA/IDAuNzUgOiAwLjE1KS5jc3MoKTtcblxuICAgIGNvbnN0IFN0eWxlZFBsYWNlaG9sZGVyID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgICAgIGZvbnRTaXplICA6ICcwJyxcbiAgICAgICAgbGluZUhlaWdodDogJzAnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBvdmVyZmxvdyA6ICdoaWRkZW4nLFxuXG4gICAgICAgIGRpc3BsYXkgIDogYCR7cHJvcHMuYmxvY2sgPyAnYmxvY2snIDogJ2lubGluZS1ibG9jayd9YCxcbiAgICAgICAgd2lkdGggICAgOiBgJHtwcm9wcy53aWR0aCA/IChwcm9wcy53aWR0aCArICdweCcpIDogJzEwMCUnfWAsXG4gICAgICAgIG1heFdpZHRoIDogYCR7cHJvcHMud2lkdGggPyAocHJvcHMud2lkdGggKyAncHgnKSA6ICcxMDAlJ31gLFxuICAgICAgICBtaW5IZWlnaHQ6IGAke3Byb3BzLmhlaWdodH1weGAsXG5cbiAgICAgICAgYm9yZGVyICAgICAgOiAocHJvcHMuYm9yZGVyIHx8IG51bGwpLFxuICAgICAgICBib3JkZXJSYWRpdXM6IGAke3Byb3BzLnJhZGl1c31weGAsXG5cbiAgICAgICAgY29sb3IgICAgICAgICA6IGNvbG9yQmFzZS5yZ2IoKSxcbiAgICAgICAgYmFja2dyb3VuZCAgICA6IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7Y29sb3JTdGFydH0sICR7Y29sb3JFbmR9KWAsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnMjAwJSAxMDAlJyxcblxuICAgICAgICBhbmltYXRpb246IGAke2JnUGxhY2Vob2xkZXJ9IC45cyBlYXNlIGluZmluaXRlYCxcblxuICAgICAgICAuLi5zdHlsZXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkUGxhY2Vob2xkZXJcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtcGxhY2Vob2xkZXIgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvU3R5bGVkUGxhY2Vob2xkZXI+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cblBsYWNlaG9sZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBibG9jayA6IGZhbHNlLFxuICAgIGhlaWdodDogMjAsXG4gICAgcmFkaXVzOiA0LFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5QbGFjZWhvbGRlci5wcm9wVHlwZXMgPSB7XG4gICAgYmxvY2sgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB3aWR0aCA6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVpZ2h0OiBwcm9wVHlwZXMubnVtYmVyLFxuICAgIHJhZGl1czogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZSA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nIENvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgUGxhY2Vob2xkZXI7XG4iXX0= */");

  return /*#__PURE__*/React.createElement(StyledPlaceholder, _extends({}, rest, {
    ref: ref,
    className: "aph-placeholder " + (className || '')
  }), props.children);
});
Placeholder.defaultProps = {
  block: false,
  height: 20,
  radius: 4,
  styles: {}
};
Placeholder.propTypes = {
  block: propTypes.bool,
  width: propTypes.number,
  height: propTypes.number,
  radius: propTypes.number,
  style: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var TooltipWrapper = /*#__PURE__*/_styled('span', {
  target: "e1021out0",
  label: "TooltipWrapper"
})(function (props) {
  var _ref;

  return _ref = {
    display: 'inline-block',
    verticalAlign: 'middle',
    lineHeight: 0,
    '.aph-tooltip': {
      opacity: 1,
      padding: '8px 12px',
      fontSize: '12px',
      lineHeight: '16px',
      textAlign: props.place === 'right' ? 'left' : props.place === 'left' ? 'right' : 'center',
      maxWidth: '230px',
      borderRadius: '4px',
      '&.type-error': {
        backgroundColor: COLORS.ERROR,
        '&:after': {
          borderTopColor: COLORS.ERROR
        },
        '&.place-right:after': {
          borderRightColor: COLORS.ERROR
        },
        '&.place-bottom:after': {
          borderBottomColor: COLORS.ERROR
        },
        '&.place-left:after': {
          borderLeftColor: COLORS.ERROR
        }
      },
      '&.type-warning': {
        color: COLORS.BLACK,
        backgroundColor: COLORS.WARNING,
        '&:after': {
          borderTopColor: COLORS.WARNING
        },
        '&.place-right:after': {
          borderRightColor: COLORS.WARNING
        },
        '&.place-bottom:after': {
          borderBottomColor: COLORS.WARNING
        },
        '&.place-left:after': {
          borderLeftColor: COLORS.WARNING
        }
      },
      '&.type-success': {
        backgroundColor: COLORS.SUCCESS,
        '&:after': {
          borderTopColor: COLORS.SUCCESS
        },
        '&.place-right:after': {
          borderRightColor: COLORS.SUCCESS
        },
        '&.place-bottom:after': {
          borderBottomColor: COLORS.SUCCESS
        },
        '&.place-left:after': {
          borderLeftColor: COLORS.SUCCESS
        }
      },
      '&.type-info': {
        backgroundColor: COLORS.INFO,
        '&:after': {
          borderTopColor: COLORS.INFO
        },
        '&.place-right:after': {
          borderRightColor: COLORS.INFO
        },
        '&.place-bottom:after': {
          borderBottomColor: COLORS.INFO
        },
        '&.place-left:after': {
          borderLeftColor: COLORS.INFO
        }
      },
      '&.place-right, &.place-bottom, &.place-left': {
        '&:after': {
          borderTopColor: 'transparent'
        }
      },
      '&.type-light': {
        color: COLORS.DARK_GREY,
        backgroundColor: COLORS.WHITE,
        boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.2)',
        '&:after': {
          width: '12px',
          height: '12px',
          border: '0 !important',
          bottom: '-10px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAAA/UlEQVQoFa2S62qEMBCFT7IxCor4/o/Y/SMiuLk3Z7KWIrS03Q4kJJMz31xUlWp40fSL8RL+P5CUErj+aow197c7YoqYpgnLsvyKta4r9n2HHscRXM55bNv2Ywi1jGGscs6VnDJ88NXp0Pc95nn+FtYATWs7C1V7KiUXacn7BrLWfgkigDomo87cDBT/k2rIOSPGiOADHu4hgmtFJ2DoB3S2gzEGWmvIJ1ZKyYVOPlJEGId2Gs/0XQGMNafoM4g+3kOd03EcIomhAoYBpjMfFVAjWulFjm1ja+eMOHC2SZOyb7rNQCtJ0iJqwiuEDwJ6wnimMat6Bp8VyEPd3gFtaZ6FSCYKnwAAAABJRU5ErkJggg==")'
        },
        '&.place-right:after, &.place-left:after': {
          width: '8px',
          marginTop: '-5.5px'
        },
        '&.place-right:after': {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAGbaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEzPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE3PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CpEr0D8AAAENSURBVCgVhZLrjoQgDIXLRcDEGP/Mvv8zGs0ICG7bWcgw2RESI4F+Lee04sIFHyvnDOd5gj887PsOj58HKKVqlKy7vw3luPIFOSGYTv4+YxqIAK6CwSEGCCHCNE1NFUqgS5YK4LNCCOC9h3F0MM9zCal/rvQORMxOgLX2X4BIWTSQcAIOf4Ax5itQIRYc0S2s0AMI0sWpiMKtsyycLu6WLnqscyh8vIutd43l9bSzkUIIkFJi9w/Ytq0T/rqWQiKkJAyD4bFZ17ULciWtNOhBc2+osT2QIaqmtYbBDOCs44m4A9mIoquANA3Us29gnb13kERRK57Pgwd4WZZGZ2N5BVGjQWMMPpccTSk10C9l/KMdM5jKRwAAAABJRU5ErkJggg==")'
        },
        '&.place-bottom:after': {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAABCUlEQVQoFa2S7a6DIAyGCzKZifH+r9IfRgcCwvrWsLElJ9tJ1oRQ6ctDP1SFjRrDp6x87ggppUhpXth5vZtpD+rldCTKR6acs4S11qQ7TaZjuT6h7T0+Og0AXIopUgyRvHfn65wBfJwhBg20rUkmFZBSEvG+72SvloZhEO1xHAzyZIuVb2MMIbtamnkH+N1T3/c0juPjMfjIALFqLUilmAp6EEIgZADANE1V+7IvyyI6a63o0CNpuLu5EuIJQPAvQKUBJOUCdOml4Wqe5xK4acNw/QhoQc6h7ItMzGzbJvV/yqACsEOLHq3rKhDFEyld17War31MDaZ4Oq9D/xrxFD5+tufR/72fQO4qbauIX3q2XAAAAABJRU5ErkJggg==")'
        },
        '&.place-left:after': {
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAARCAYAAAAG/yacAAABfGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGAqSSwoyGFhYGDIzSspCnJ3UoiIjFJgv8PAzcDDIMRgxSCemFxc4BgQ4MOAE3y7xsAIoi/rgsxK8/x506a1fP4WNq+ZclYlOrj1gQF3SmpxMgMDIweQnZxSnJwLZOcA2TrJBUUlQPYMIFu3vKQAxD4BZIsUAR0IZN8BsdMh7A8gdhKYzcQCVhMS5AxkSwDZAkkQtgaInQ5hW4DYyRmJKUC2B8guiBvAgNPDRcHcwFLXkYC7SQa5OaUwO0ChxZOaFxoMcgcQyzB4MLgwKDCYMxgwWDLoMjiWpFaUgBQ65xdUFmWmZ5QoOAJDNlXBOT+3oLQktUhHwTMvWU9HwcjA0ACkDhRnEKM/B4FNZxQ7jxDLX8jAYKnMwMDcgxBLmsbAsH0PA4PEKYSYyjwGBn5rBoZt5woSixLhDmf8xkKIX5xmbARh8zgxMLDe+///sxoDA/skBoa/E////73o//+/i4H2A+PsQA4AJHdp4IxrEg8AAAICaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgolRitEAAABD0lEQVQoFY2T0a6EIAxEBwTBaPz/P/TVGBMFUS9Dlg0ad/f2BTFzaGkHccbAK/Z9xzAMaNsWjW2gtYasJIQQWZJWVe6qqkLXdXDOg99CCiihIOUVFGWmfMA0TRF0sNairmsodQVlFpZr3/cwxiRw8xtCCDiOA/kmjxAPIMgsq1uRwfM4E/gRKkGWGraAsIffUAaNNdg2j2OPJcZsj42g+B7LsiSAJX8t7w7m/b+geZ7h1vU9r59QmtnqojtiWXRHHPhXiID3Ps1MaQVVqWSpj1AGrLHQtU6uYBb68BHKNqIrMlD672JYdmccx2TYpnn2HTWXTHwa7FQdy6njxXmHMgMBxgXiDwqT+NWp+1ui5g/scn4798MbBAAAAABJRU5ErkJggg==")'
        }
      },
      '&__content': {
        display: 'inline-block',
        verticalAlign: 'middle',
        minHeight: props.style && props.style.height ? props.style.height : null
      }
    }
  }, _ref[MEDIA_QUERIES.XS] = {
    '.aph-tooltip': {
      fontSize: '14px',
      lineHeight: '20px'
    }
  }, _ref;
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvb2x0aXAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCdUIiLCJmaWxlIjoiVG9vbHRpcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBDT0xPUlMsIE1FRElBX1FVRVJJRVMsIFNDUkVFTl9TSVpFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQ3VzdG9taXplZCBmcm9tICdyZWFjdC10b29sdGlwJyBwcm9qZWN0OlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS93d2F5bmUvcmVhY3QtdG9vbHRpcFxuICogaHR0cHM6Ly9yZWFjdC10b29sdGlwLm5ldGxpZnkuY29tL1xuICovXG5cbi8qIENvbXBvbmVudCBXcmFwcGVyICovXG5jb25zdCBUb29sdGlwV3JhcHBlciA9IHN0eWxlZCgnc3BhbicpKHByb3BzID0+ICh7XG4gICAgZGlzcGxheSAgICAgIDogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgbGluZUhlaWdodCAgIDogMCxcblxuICAgICcuYXBoLXRvb2x0aXAnOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMTJweCcsXG5cbiAgICAgICAgZm9udFNpemUgIDogJzEycHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgICAgIHRleHRBbGlnbiA6IChwcm9wcy5wbGFjZSA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6IChwcm9wcy5wbGFjZSA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdjZW50ZXInKSksXG5cbiAgICAgICAgbWF4V2lkdGggICAgOiAnMjMwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuXG4gICAgICAgICcmLnR5cGUtZXJyb3InOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SUy5FUlJPUixcblxuICAgICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wQ29sb3I6IENPTE9SUy5FUlJPUixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLXJpZ2h0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0Q29sb3I6ICBDT0xPUlMuRVJST1IsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1ib3R0b206YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICBDT0xPUlMuRVJST1IsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1sZWZ0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlckxlZnRDb2xvcjogIENPTE9SUy5FUlJPUixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgJyYudHlwZS13YXJuaW5nJzoge1xuICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiBDT0xPUlMuQkxBQ0ssXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SUy5XQVJOSU5HLFxuXG4gICAgICAgICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BDb2xvcjogQ09MT1JTLldBUk5JTkcsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1yaWdodDphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJSaWdodENvbG9yOiAgQ09MT1JTLldBUk5JTkcsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1ib3R0b206YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6ICBDT0xPUlMuV0FSTklORyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLWxlZnQ6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdENvbG9yOiAgQ09MT1JTLldBUk5JTkcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgICcmLnR5cGUtc3VjY2Vzcyc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTLlNVQ0NFU1MsXG5cbiAgICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlclRvcENvbG9yOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLXJpZ2h0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlclJpZ2h0Q29sb3I6ICBDT0xPUlMuU1VDQ0VTUyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLWJvdHRvbTphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogIENPTE9SUy5TVUNDRVNTLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtbGVmdDphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0Q29sb3I6ICBDT0xPUlMuU1VDQ0VTUyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgJyYudHlwZS1pbmZvJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlMuSU5GTyxcblxuICAgICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyVG9wQ29sb3I6IENPTE9SUy5JTkZPLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtcmlnaHQ6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyUmlnaHRDb2xvcjogIENPTE9SUy5JTkZPLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtYm90dG9tOmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAgQ09MT1JTLklORk8sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1sZWZ0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlckxlZnRDb2xvcjogIENPTE9SUy5JTkZPLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAnJi5wbGFjZS1yaWdodCwgJi5wbGFjZS1ib3R0b20sICYucGxhY2UtbGVmdCc6IHtcbiAgICAgICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJvcmRlclRvcENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAnJi50eXBlLWxpZ2h0Jzoge1xuICAgICAgICAgICAgY29sb3IgICAgICAgICAgOiBDT0xPUlMuREFSS19HUkVZLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlMuV0hJVEUsXG4gICAgICAgICAgICBib3hTaGFkb3cgICAgICA6ICcwIDAgNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpJyxcblxuICAgICAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgICAgICAgd2lkdGggOiAnMTJweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTJweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgICAgICAgICAgICBib3R0b206ICctMTBweCcsXG5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZSAgOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlIDogJ3VybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkVBQUFBTkNBWUFBQUJQZVlVYUFBQUJmR2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBcVNTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmd2OFBBemNERElNUmd4U0NlbUZ4YzRCZ1E0TU9BRTN5N3hzQUlvaS9yZ3N4SzgveDUwNmExZlA0V05xK1pjbFlsT3JqMWdRRjNTbXB4TWdNREl3ZVFuWnhTbkp3TFpPY0EyVHJKQlVVbFFQWU1JRnUzdktRQXhENEJaSXNVQVIwSVpOOEJzZE1oN0E4Z2RoS1l6Y1FDVmhNUzVBeGtTd0RaQWtrUXRnYUluUTVoVzREWXlSbUpLVUMyQjhndWlCdkFnTlBEUmNIY3dGTFhrWUM3U1FhNU9hVXdPMENoeFpPYUZ4b01jZ2NReXpCNE1MZ3dLRENZTXhnd1dETG9NamlXcEZhVWdCUTY1eGRVRm1XbVo1UW9PQUpETmxYQk9UKzNvTFFrdFVoSHdUTXZXVTlId2NqQTBBQ2tEaFJuRUtNL0I0Rk5aeFE3anhETFg4akFZS25Nd01EY2d4Qkxtc2JBc0gwUEE0UEVLWVNZeWp3R0JuNXJCb1p0NXdvU2l4TGhEbWY4eGtLSVg1eG1iQVJoOHpneE1MRGUrLy8vc3hvREEvc2tCb2EvRS8vLy83M28vLysvaTRIMkErUHNRQTRBSkhkcDRJeHJFZzhBQUFJQ2FWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKWVRWQWdRMjl5WlNBMUxqUXVNQ0krQ2lBZ0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStDaUFnSUNBZ0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVY0YVdZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZaWGhwWmk4eExqQXZJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenAwYVdabVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM1JwWm1Zdk1TNHdMeUkrQ2lBZ0lDQWdJQ0FnSUR4bGVHbG1PbEJwZUdWc1dVUnBiV1Z1YzJsdmJqNHhOend2WlhocFpqcFFhWGhsYkZsRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUNBZ0lEeGxlR2xtT2xCcGVHVnNXRVJwYldWdWMybHZiajR4TXp3dlpYaHBaanBRYVhobGJGaEVhVzFsYm5OcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29nSUNBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ29sUml0RUFBQUEvVWxFUVZRb0ZhMlM2MnFFTUJDRlQ3SXhDb3I0L28vWS9TTWl1TGszWjdLV0lyUzAzUTRrSkpNejMxeFVsV3A0MGZTTDhSTCtQNUNVRXJqK2FvdzE5N2M3WW9xWXBnbkxzdnlLdGE0cjluMkhIc2NSWE01NWJOdjJZd2kxakdHc2NzNlZuREo4OE5YcDBQYzk1bm4rRnRZQVRXczdDMVY3S2lVWGFjbjdCckxXZmdraWdEb21vODdjREJUL2sycklPU1BHaU9BREh1NGhnbXRGSjJEb0IzUzJnekVHV212SUoxWkt5WVZPUGxKRUdJZDJHcy8wWFFHTU5hZm9NNGcrM2tPZDAzRWNJb21oQW9ZQnBqTWZGVkFqV3VsRmptMWphK2VNT0hDMlNaT3liN3JOUUN0SjBpSnF3aXVFRHdKNnduaW1NYXQ2QnA4VnlFUGQzZ0Z0YVo2RlNDWUtud0FBQUFCSlJVNUVya0pnZ2c9PVwiKScsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5wbGFjZS1yaWdodDphZnRlciwgJi5wbGFjZS1sZWZ0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIHdpZHRoICAgIDogJzhweCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnLTUuNXB4JyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcmLnBsYWNlLXJpZ2h0OmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTBBQUFBUkNBWUFBQUFHL3lhY0FBQUJmR2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBcVNTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmd2OFBBemNERElNUmd4U0NlbUZ4YzRCZ1E0TU9BRTN5N3hzQUlvaS9yZ3N4SzgveDUwNmExZlA0V05xK1pjbFlsT3JqMWdRRjNTbXB4TWdNREl3ZVFuWnhTbkp3TFpPY0EyVHJKQlVVbFFQWU1JRnUzdktRQXhENEJaSXNVQVIwSVpOOEJzZE1oN0E4Z2RoS1l6Y1FDVmhNUzVBeGtTd0RaQWtrUXRnYUluUTVoVzREWXlSbUpLVUMyQjhndWlCdkFnTlBEUmNIY3dGTFhrWUM3U1FhNU9hVXdPMENoeFpPYUZ4b01jZ2NReXpCNE1MZ3dLRENZTXhnd1dETG9NamlXcEZhVWdCUTY1eGRVRm1XbVo1UW9PQUpETmxYQk9UKzNvTFFrdFVoSHdUTXZXVTlId2NqQTBBQ2tEaFJuRUtNL0I0Rk5aeFE3anhETFg4akFZS25Nd01EY2d4Qkxtc2JBc0gwUEE0UEVLWVNZeWp3R0JuNXJCb1p0NXdvU2l4TGhEbWY4eGtLSVg1eG1iQVJoOHpneE1MRGUrLy8vc3hvREEvc2tCb2EvRS8vLy83M28vLysvaTRIMkErUHNRQTRBSkhkcDRJeHJFZzhBQUFHYmFWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKWVRWQWdRMjl5WlNBMUxqUXVNQ0krQ2lBZ0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStDaUFnSUNBZ0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVY0YVdZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZaWGhwWmk4eExqQXZJajRLSUNBZ0lDQWdJQ0FnUEdWNGFXWTZVR2w0Wld4WVJHbHRaVzV6YVc5dVBqRXpQQzlsZUdsbU9sQnBlR1ZzV0VScGJXVnVjMmx2Ymo0S0lDQWdJQ0FnSUNBZ1BHVjRhV1k2VUdsNFpXeFpSR2x0Wlc1emFXOXVQakUzUEM5bGVHbG1PbEJwZUdWc1dVUnBiV1Z1YzJsdmJqNEtJQ0FnSUNBZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0NpQWdJRHd2Y21SbU9sSkVSajRLUEM5NE9uaHRjRzFsZEdFK0NwRXIwRDhBQUFFTlNVUkJWQ2dWaFpMcmpvUWdESVhMUmNERUdQL012djh6R3MwSUNHN2JXY2d3MlJFU0k0RitMZWUwNHNJRkh5dm5ET2Q1Z2o4ODdQc09qNThIS0tWcWxLeTd2dzNsdVBJRk9TR1lUdjQrWXhxSUFLNkN3U0VHQ0NIQ05FMU5GVXFnUzVZSzRMTkNDT0M5aDNGME1NOXpDYWwvcnZRT1JNeE9nTFgyWDRCSVdUU1FjQUlPZjRBeDVpdFFJUlljMFMyczBBTUkwc1dwaU1LdHN5eWNMdTZXTG5xc2N5aDh2SXV0ZDQzbDliU3prVUlJa0ZKaTl3L1l0cTBUL3JxV1FpS2tKQXlENGJGWjE3VUxjaVd0Tk9oQmMyK29zVDJRSWFxbXRZYkJET0NzNDRtNEE5bUlvcXVBTkEzVXMyOWduYjEza0VSUks1N1Bnd2Q0V1paR1oyTjVCVkdqUVdNTVBwY2NUU2sxMEM5bC9LTWRNNWpLUndBQUFBQkpSVTVFcmtKZ2dnPT1cIiknLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtYm90dG9tOmFmdGVyJzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkVBQUFBTkNBWUFBQUJQZVlVYUFBQUJmR2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFLSkZqWUdBcVNTd295R0ZoWUdESXpTc3BDbkozVW9pSWpGSmd2OFBBemNERElNUmd4U0NlbUZ4YzRCZ1E0TU9BRTN5N3hzQUlvaS9yZ3N4SzgveDUwNmExZlA0V05xK1pjbFlsT3JqMWdRRjNTbXB4TWdNREl3ZVFuWnhTbkp3TFpPY0EyVHJKQlVVbFFQWU1JRnUzdktRQXhENEJaSXNVQVIwSVpOOEJzZE1oN0E4Z2RoS1l6Y1FDVmhNUzVBeGtTd0RaQWtrUXRnYUluUTVoVzREWXlSbUpLVUMyQjhndWlCdkFnTlBEUmNIY3dGTFhrWUM3U1FhNU9hVXdPMENoeFpPYUZ4b01jZ2NReXpCNE1MZ3dLRENZTXhnd1dETG9NamlXcEZhVWdCUTY1eGRVRm1XbVo1UW9PQUpETmxYQk9UKzNvTFFrdFVoSHdUTXZXVTlId2NqQTBBQ2tEaFJuRUtNL0I0Rk5aeFE3anhETFg4akFZS25Nd01EY2d4Qkxtc2JBc0gwUEE0UEVLWVNZeWp3R0JuNXJCb1p0NXdvU2l4TGhEbWY4eGtLSVg1eG1iQVJoOHpneE1MRGUrLy8vc3hvREEvc2tCb2EvRS8vLy83M28vLysvaTRIMkErUHNRQTRBSkhkcDRJeHJFZzhBQUFJQ2FWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKWVRWQWdRMjl5WlNBMUxqUXVNQ0krQ2lBZ0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStDaUFnSUNBZ0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlDaUFnSUNBZ0lDQWdJQ0FnSUhodGJHNXpPbVY0YVdZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZaWGhwWmk4eExqQXZJZ29nSUNBZ0lDQWdJQ0FnSUNCNGJXeHVjenAwYVdabVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM1JwWm1Zdk1TNHdMeUkrQ2lBZ0lDQWdJQ0FnSUR4bGVHbG1PbEJwZUdWc1dVUnBiV1Z1YzJsdmJqNHhOend2WlhocFpqcFFhWGhsYkZsRWFXMWxibk5wYjI0K0NpQWdJQ0FnSUNBZ0lEeGxlR2xtT2xCcGVHVnNXRVJwYldWdWMybHZiajR4TXp3dlpYaHBaanBRYVhobGJGaEVhVzFsYm5OcGIyNCtDaUFnSUNBZ0lDQWdJRHgwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQakU4TDNScFptWTZUM0pwWlc1MFlYUnBiMjQrQ2lBZ0lDQWdJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29nSUNBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ29sUml0RUFBQUJDVWxFUVZRb0ZhMlM3YTZESUF5R0N6S1ppZkgrcjlJZlJnY0N3dnJXc0xFbEo5dEoxb1JRNmN0RFAxU0ZqUnJEcDZ4ODdnZ3BwVWhwWHRoNXZadHBEK3JsZENUS1I2YWNzNFMxMXFRN1RhWmp1VDZoN1QwK09nMEFYSW9wVWd5UnZIZm42NXdCZkp3aEJnMjByVWttRlpCU0V2Rys3MlN2bG9aaEVPMXhIQXp5Wkl1VmIyTU1JYnRhbW5rSCtOMVQzL2MwanVQak1maklBTEZxTFVpbG1BcDZFRUlnWkFEQU5FMVYrN0l2eXlJNmE2M28wQ05wdUx1NUV1SUpRUEF2UUtVQkpPVUNkT21sNFdxZTV4SzRhY053L1Fob1FjNmg3SXRNekd6Ykp2Vi95cUFDc0VPTEhxM3JLaERGRXlsZDE3V2FyMzFNRGFaNE9xOUQveHJ4RkQ1K3R1ZlIvNzJmUU80cWJhdUlYM3EyWEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiknLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgJyYucGxhY2UtbGVmdDphZnRlcic6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUEwQUFBQVJDQVlBQUFBRy95YWNBQUFCZkdsRFExQkpRME1nVUhKdlptbHNaUUFBS0pGallHQXFTU3dveUdGaFlHREl6U3NwQ25KM1VvaUlqRkpndjhQQXpjRERJTVJneFNDZW1GeGM0QmdRNE1PQUUzeTd4c0FJb2kvcmdzeEs4L3g1MDZhMWZQNFdOcStaY2xZbE9yajFnUUYzU21weE1nTURJd2VRblp4U25Kd0xaT2NBMlRySkJVVWxRUFlNSUZ1M3ZLUUF4RDRCWklzVUFSMElaTjhCc2RNaDdBOGdkaEtZemNRQ1ZoTVM1QXhrU3dEWkFra1F0Z2FJblE1aFc0RFl5Um1KS1VDMkI4Z3VpQnZBZ05QRFJjSGN3RkxYa1lDN1NRYTVPYVV3TzBDaHhaT2FGeG9NY2djUXl6QjRNTGd3S0RDWU14Z3dXRExvTWppV3BGYVVnQlE2NXhkVUZtV21aNVFvT0FKRE5sWEJPVCszb0xRa3RVaEh3VE12V1U5SHdjakEwQUNrRGhSbkVLTS9CNEZOWnhRN2p4RExYOGpBWUtuTXdNRGNneEJMbXNiQXNIMFBBNFBFS1lTWXlqd0dCbjVyQm9adDV3b1NpeExoRG1mOHhrS0lYNXhtYkFSaDh6Z3hNTERlKy8vL3N4b0RBL3NrQm9hL0UvLy8vNzNvLy8rL2k0SDJBK1BzUUE0QUpIZHA0SXhyRWc4QUFBSUNhVlJZZEZoTlREcGpiMjB1WVdSdlltVXVlRzF3QUFBQUFBQThlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSllUVkFnUTI5eVpTQTFMalF1TUNJK0NpQWdJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrQ2lBZ0lDQWdJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpQ2lBZ0lDQWdJQ0FnSUNBZ0lIaHRiRzV6T21WNGFXWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2WlhocFppOHhMakF2SWdvZ0lDQWdJQ0FnSUNBZ0lDQjRiV3h1Y3pwMGFXWm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNScFptWXZNUzR3THlJK0NpQWdJQ0FnSUNBZ0lEeGxlR2xtT2xCcGVHVnNXVVJwYldWdWMybHZiajR4Tnp3dlpYaHBaanBRYVhobGJGbEVhVzFsYm5OcGIyNCtDaUFnSUNBZ0lDQWdJRHhsZUdsbU9sQnBlR1ZzV0VScGJXVnVjMmx2Ymo0eE16d3ZaWGhwWmpwUWFYaGxiRmhFYVcxbGJuTnBiMjQrQ2lBZ0lDQWdJQ0FnSUR4MGFXWm1Pazl5YVdWdWRHRjBhVzl1UGpFOEwzUnBabVk2VDNKcFpXNTBZWFJwYjI0K0NpQWdJQ0FnSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvZ0lDQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvbFJpdEVBQUFCRDBsRVFWUW9GWTJUMGE2RUlBeEVCd1RCYVB6L1AvVFZHQk1GVVM5RGxnMGFkL2YyQlRGemFHa0hjY2JBSy9aOXh6QU1hTnNXalcyZ3RZYXNKSVFRV1pKV1ZlNnFxa0xYZFhET2c5OUNDaWloSU9VVkZHV21mTUEwVFJGMHNOYWlybXNvZFFWbEZwWnIzL2N3eGlSdzh4dENDRGlPQS9rbWp4QVBJTWdzcTF1UndmTTRFL2dSS2tHV0dyYUFzSWZmVUFhTk5kZzJqMk9QSmNac2o0MmcrQjdMc2lTQUpYOHQ3dzdtL2IrZ2VaN2gxdlU5cjU5UW10bnFvanRpV1hSSEhQaFhpSUQzUHMxTWFRVlZxV1NwajFBR3JMSFF0VTZ1WUJiNjhCSEtOcUlyTWxENjcySllkbWNjeDJUWXBubjJIVFdYVEh3YTdGUWR5Nm5qeFhtSE1nTUJ4Z1hpRHdxVCtOV3ArMXVpNWcvc2NuNDc5OE1iQkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAnJl9fY29udGVudCc6IHtcbiAgICAgICAgICAgIGRpc3BsYXkgICAgICA6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICBtaW5IZWlnaHQgICAgOiAoKHByb3BzLnN0eWxlICYmIHByb3BzLnN0eWxlLmhlaWdodCkgPyBwcm9wcy5zdHlsZS5oZWlnaHQgOiBudWxsKSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuWFNdOiB7XG4gICAgICAgICcuYXBoLXRvb2x0aXAnOiB7XG4gICAgICAgICAgICBmb250U2l6ZSAgOiAnMTRweCcsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNvbnN0IFRvb2x0aXAgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgbGV0IGN1c3RvbVByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuICAgIGN1c3RvbVByb3BzLmlkICA9IGN1c3RvbVByb3BzLmlkIHx8IGBBcGhUb29sdGlwJHtNYXRoLnJhbmRvbSgpfWA7XG5cbiAgICBkZWxldGUgY3VzdG9tUHJvcHMuY2hpbGRyZW47XG4gICAgZGVsZXRlIGN1c3RvbVByb3BzLnRpcDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUb29sdGlwV3JhcHBlclxuICAgICAgICAgICAgey4uLmN1c3RvbVByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9PlxuICAgICAgICAgICAgPHNwYW4gZGF0YS10aXA9e3Byb3BzLnRpcH1cbiAgICAgICAgICAgICAgICAgIGRhdGEtZm9yPXtjdXN0b21Qcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwaC10b29sdGlwX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPFJlYWN0VG9vbHRpcFxuICAgICAgICAgICAgICAgIHsuLi5jdXN0b21Qcm9wc31cbiAgICAgICAgICAgICAgICBkZWxheUhpZGU9e2N1c3RvbVByb3BzLmRlbGF5SGlkZSB8fCAod2luZG93LmlubmVyV2lkdGggPiBTQ1JFRU5fU0laRVMuU00gPyA1MDAgOiAwKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtdG9vbHRpcCAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9Ub29sdGlwV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIENvbXBvbmVudCBkZWZhdWx0IHByb3BlcnRpZXMgKi9cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlcjogZmFsc2UsXG4gICAgZWZmZWN0OiAnc29saWQnLFxuICAgIHBsYWNlIDogJ3RvcCcsXG4gICAgdHlwZSAgOiAnbGlnaHQnLFxufTtcblxuLyogQ29tcG9uZW50IHByb3BlcnRpZXMgdHlwZXMgKi9cblRvb2x0aXAucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuIDogcHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIHRpcCAgICAgIDogcHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIGRlbGF5SGlkZTogcHJvcFR5cGVzLm51bWJlcixcbiAgICBlZmZlY3QgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2UgICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHR5cGUgICAgIDogcHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbiJdfQ== */");

var Tooltip = /*#__PURE__*/forwardRef(function (props, ref) {
  var customProps = Object.assign({}, props);
  customProps.id = customProps.id || "AphTooltip" + Math.random();
  delete customProps.children;
  delete customProps.tip;
  return /*#__PURE__*/React.createElement(TooltipWrapper, _extends({}, customProps, {
    ref: ref
  }), /*#__PURE__*/React.createElement("span", {
    "data-tip": props.tip,
    "data-for": customProps.id,
    className: "aph-tooltip__content"
  }, props.children), /*#__PURE__*/React.createElement(ReactTooltip, _extends({}, customProps, {
    delayHide: customProps.delayHide || (window.innerWidth > SCREEN_SIZES.SM ? 500 : 0),
    className: "aph-tooltip " + (props.className || '')
  })));
});
Tooltip.defaultProps = {
  border: false,
  effect: 'solid',
  place: 'top',
  type: 'light'
};
Tooltip.propTypes = {
  children: propTypes.any.isRequired,
  tip: propTypes.any.isRequired,
  delayHide: propTypes.number,
  effect: propTypes.string,
  place: propTypes.string,
  type: propTypes.string
};

function ItemContent(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      children = _ref.children,
      className = _ref.className,
      _ref$compact = _ref.compact,
      compact = _ref$compact === void 0 ? false : _ref$compact,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? '5px 0' : _ref$padding,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$labelProps = _ref.labelProps,
      labelProps = _ref$labelProps === void 0 ? {} : _ref$labelProps,
      _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      _ref$placeholderWidth = _ref.placeholderWidth,
      placeholderWidth = _ref$placeholderWidth === void 0 ? 140 : _ref$placeholderWidth,
      _ref$placeholderHeigh = _ref.placeholderHeight,
      placeholderHeight = _ref$placeholderHeigh === void 0 ? 16 : _ref$placeholderHeigh,
      _ref$placeholderRadiu = _ref.placeholderRadius,
      placeholderRadius = _ref$placeholderRadiu === void 0 ? 4 : _ref$placeholderRadiu,
      _ref$placeholderMargi = _ref.placeholderMargin,
      placeholderMargin = _ref$placeholderMargi === void 0 ? '2px 0 -3px' : _ref$placeholderMargi,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? '' : _ref$tooltip,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      rest = _objectWithoutPropertiesLoose(_ref, ["loading", "children", "className", "compact", "padding", "label", "labelProps", "wrapperProps", "placeholderWidth", "placeholderHeight", "placeholderRadius", "placeholderMargin", "tooltip", "id"]);

  var classList = (!className ? '' : className + " ") + "aph-item-content";

  var getElementId = function getElementId(elementId) {
    return !id ? '' : id + "_" + elementId;
  };

  var getIdProp = function getIdProp(elementId) {
    return !id ? {} : {
      id: getElementId(elementId)
    };
  };

  var ContentWrapper = tooltip ? Tooltip : Fragment$1;
  var contentWrapperProps = !tooltip ? {} : typeof tooltip === 'object' ? tooltip : {
    tip: tooltip
  };
  var textSizeProp = !compact ? {} : {
    textSize: 'sm'
  };
  return /*#__PURE__*/React.createElement(Styled, _extends({
    className: classList,
    padding: padding
  }, getIdProp('wrapper'), wrapperProps), /*#__PURE__*/React.createElement(ContentWrapper, contentWrapperProps, label && /*#__PURE__*/React.createElement(Styled, _extends({
    textColor: loading ? 'disabled' : 'helper'
  }, getIdProp('label'), textSizeProp, labelProps), label), (children || loading) && /*#__PURE__*/React.createElement(Styled, _extends({}, getIdProp('content'), textSizeProp, rest), !loading ? children : /*#__PURE__*/React.createElement(Placeholder, {
    radius: placeholderRadius,
    width: placeholderWidth,
    height: placeholderHeight,
    styles: {
      margin: placeholderMargin
    }
  }))));
}

var _templateObject$3;
var bgAnimated = keyframes(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n"])));
var defaultStyles = {
  boxSizing: 'border-box',
  display: 'block'
};

var AphProgressBarWrapper = /*#__PURE__*/_styled('div', {
  target: "e11czq8u0",
  label: "AphProgressBarWrapper"
})(function (props) {
  return _objectSpread2(_objectSpread2({}, defaultStyles), {}, {
    height: props.height || '10px',
    overflow: 'hidden',
    width: '100%',
    maxWidth: props.width || '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: (props.radius || props.radius === 0) && typeof parseInt(props.radius, 10) === 'number' ? parseInt(props.radius, 10) + (props.radius.toString().includes('%') ? '%' : 'px') : '10px',
    background: colors$1.getFromTheme(props, 'disabled')
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjhCIiwiZmlsZSI6IlByb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBBbmltYXRpb24gKi9cbmNvbnN0IGJnQW5pbWF0ZWQgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICB9XG5gO1xuXG4vKiBEZWZhdWx0IFN0eWxlcyAqL1xuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG59O1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmRlZmF1bHRTdHlsZXMsXG5cbiAgICBoZWlnaHQ6IChwcm9wcy5oZWlnaHQgfHwgJzEwcHgnKSxcblxuICAgIG92ZXJmbG93ICAgOiAnaGlkZGVuJyxcbiAgICB3aWR0aCAgICAgIDogJzEwMCUnLFxuICAgIG1heFdpZHRoICAgOiAocHJvcHMud2lkdGggfHwgJzEwMCUnKSxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQgOiAnYXV0bycsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoKHByb3BzLnJhZGl1cyB8fCBwcm9wcy5yYWRpdXMgPT09IDApICYmIHR5cGVvZiBwYXJzZUludChwcm9wcy5yYWRpdXMsIDEwKSA9PT0gJ251bWJlcicpID8gcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgKyAocHJvcHMucmFkaXVzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJyUnKSA/ICclJyA6ICdweCcpIDogJzEwcHgnKSxcbiAgICBiYWNrZ3JvdW5kICA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBGaWxsZXIgU3R5bGVzICovXG5jb25zdCBBcGhQcm9ncmVzc0JhciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG4gICAgd2lkdGggOiAocHJvcHMuc2l6ZSB8fCAoKHByb3BzLnBlcmNlbnR1YWwgJiYgcHJvcHMucGVyY2VudHVhbCA+IDEwMCkgPyAxMDAgOiBwcm9wcy5wZXJjZW50dWFsIHx8IDApICsgJyUnKSxcblxuICAgIGJhY2tncm91bmQ6IChwcm9wcy5jb2xvciA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmNvbG9yKSA6ICFwcm9wcy5hbmltYXRlZCA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKSA6IGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmdyYWRpZW50U3RhcnQgfHwgJ3NlY29uZGFyeScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5ncmFkaWVudEVuZCB8fCAnc2Vjb25kYXJ5Jyl9IDEwMCUpYCksXG4gICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuXG4gICAgYW5pbWF0aW9uOiBgJHtiZ0FuaW1hdGVkfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICB3aWxsQ2hhbmdlOiAnd2lkdGgnLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAuMTVzIGVhc2UtaW4nLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXRzZWxmICovXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcihwcm9wcykge1xuICAgIC8qKlxuICAgICAqIEluaGVyaXQgcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdCB7XG4gICAgICAgIGFuaW1hdGVkLFxuXG4gICAgICAgIHNpemUsXG4gICAgICAgIHBlcmNlbnQsXG4gICAgICAgIHBlcmNlbnR1YWwsXG4gICAgICAgIGdyYWRpZW50LFxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgcmFkaXVzLFxuXG4gICAgICAgIGNvbG9yLFxuXG4gICAgICAgIHdyYXBwZXJTdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaFByb2dyZXNzQmFyV3JhcHBlclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICByYWRpdXM9e3JhZGl1c31cbiAgICAgICAgICAgIHN0eWxlcz17d3JhcHBlclN0eWxlc30+XG4gICAgICAgICAgICA8QXBoUHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAgIHBlcmNlbnR1YWw9eyhwZXJjZW50IHx8IHBlcmNlbnR1YWwpfVxuICAgICAgICAgICAgICAgIGNvbG9yPXsoY29sb3IgfHwgJycpfVxuICAgICAgICAgICAgICAgIGFuaW1hdGVkPXthbmltYXRlZH1cbiAgICAgICAgICAgICAgICBncmFkaWVudFN0YXJ0PXtncmFkaWVudCAmJiBncmFkaWVudC5zdGFydH1cbiAgICAgICAgICAgICAgICBncmFkaWVudEVuZD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuZW5kfVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9BcGhQcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBmYWxzZSxcblxuICAgIHBlcmNlbnQgICAgICA6IDAsXG4gICAgcGVyY2VudHVhbCAgIDogMCxcbiAgICBzaXplICAgICAgICAgOiAnJyxcbiAgICBncmFkaWVudCAgICAgOiB7XG4gICAgICAgIHN0YXJ0OiBjb2xvcnMuZ2V0KCdzZWNvbmRhcnknKSxcbiAgICAgICAgZW5kICA6IGNvbG9ycy5nZXQoJ3NlY29uZGFyeScsICdsaWdodCcpLFxuICAgIH0sXG4gICAgc3R5bGVzICAgICAgIDoge30sXG5cbiAgICB3aWR0aCAgICAgICAgOiAnMTAwJScsXG4gICAgaGVpZ2h0ICAgICAgIDogMTAsXG5cbiAgICBjb2xvciAgICAgICAgOiAnJyxcbiAgICBjb2xvcmZ1bCAgICAgOiBmYWxzZSxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcHMgVHlwZXMgKi9cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHNpemUgICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudHVhbCAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBncmFuZGllbnQgICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0eWxlcyAgICAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxuXG4gICAgd2lkdGggICAgICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQgICAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgY29sb3IgICAgICAgIDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */");

var AphProgressBar = /*#__PURE__*/_styled('div', {
  target: "e11czq8u1",
  label: "AphProgressBar"
})(function (props) {
  return _objectSpread2(_objectSpread2({}, defaultStyles), {}, {
    height: props.height || '10px',
    width: props.size || (props.percentual && props.percentual > 100 ? 100 : props.percentual || 0) + '%',
    background: props.color ? colors$1.getFromTheme(props, props.color) : !props.animated ? colors$1.getFromTheme(props, 'secondary') : "linear-gradient(270deg, " + colors$1.getFromTheme(props, props.gradientStart || 'secondary') + " 0%, " + colors$1.getFromTheme(props, props.gradientEnd || 'secondary') + " 100%)",
    backgroundSize: '200% 100%',
    animation: bgAnimated + " .9s ease infinite",
    willChange: 'width',
    transition: 'width .15s ease-in'
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2dyZXNzQmFyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHVCIiwiZmlsZSI6IlByb2dyZXNzQmFyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBBbmltYXRpb24gKi9cbmNvbnN0IGJnQW5pbWF0ZWQgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gICAgfVxuXG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcbiAgICB9XG5gO1xuXG4vKiBEZWZhdWx0IFN0eWxlcyAqL1xuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG59O1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoUHJvZ3Jlc3NCYXJXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIC4uLmRlZmF1bHRTdHlsZXMsXG5cbiAgICBoZWlnaHQ6IChwcm9wcy5oZWlnaHQgfHwgJzEwcHgnKSxcblxuICAgIG92ZXJmbG93ICAgOiAnaGlkZGVuJyxcbiAgICB3aWR0aCAgICAgIDogJzEwMCUnLFxuICAgIG1heFdpZHRoICAgOiAocHJvcHMud2lkdGggfHwgJzEwMCUnKSxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQgOiAnYXV0bycsXG5cbiAgICBib3JkZXJSYWRpdXM6ICgoKHByb3BzLnJhZGl1cyB8fCBwcm9wcy5yYWRpdXMgPT09IDApICYmIHR5cGVvZiBwYXJzZUludChwcm9wcy5yYWRpdXMsIDEwKSA9PT0gJ251bWJlcicpID8gcGFyc2VJbnQocHJvcHMucmFkaXVzLCAxMCkgKyAocHJvcHMucmFkaXVzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJyUnKSA/ICclJyA6ICdweCcpIDogJzEwcHgnKSxcbiAgICBiYWNrZ3JvdW5kICA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBGaWxsZXIgU3R5bGVzICovXG5jb25zdCBBcGhQcm9ncmVzc0JhciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5kZWZhdWx0U3R5bGVzLFxuXG4gICAgaGVpZ2h0OiAocHJvcHMuaGVpZ2h0IHx8ICcxMHB4JyksXG4gICAgd2lkdGggOiAocHJvcHMuc2l6ZSB8fCAoKHByb3BzLnBlcmNlbnR1YWwgJiYgcHJvcHMucGVyY2VudHVhbCA+IDEwMCkgPyAxMDAgOiBwcm9wcy5wZXJjZW50dWFsIHx8IDApICsgJyUnKSxcblxuICAgIGJhY2tncm91bmQ6IChwcm9wcy5jb2xvciA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmNvbG9yKSA6ICFwcm9wcy5hbmltYXRlZCA/IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKSA6IGBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmdyYWRpZW50U3RhcnQgfHwgJ3NlY29uZGFyeScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBwcm9wcy5ncmFkaWVudEVuZCB8fCAnc2Vjb25kYXJ5Jyl9IDEwMCUpYCksXG4gICAgYmFja2dyb3VuZFNpemU6ICcyMDAlIDEwMCUnLFxuXG4gICAgYW5pbWF0aW9uOiBgJHtiZ0FuaW1hdGVkfSAuOXMgZWFzZSBpbmZpbml0ZWAsXG5cbiAgICB3aWxsQ2hhbmdlOiAnd2lkdGgnLFxuICAgIHRyYW5zaXRpb246ICd3aWR0aCAuMTVzIGVhc2UtaW4nLFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgaXRzZWxmICovXG5mdW5jdGlvbiBQcm9ncmVzc0Jhcihwcm9wcykge1xuICAgIC8qKlxuICAgICAqIEluaGVyaXQgcHJvcHNcbiAgICAgKi9cbiAgICBjb25zdCB7XG4gICAgICAgIGFuaW1hdGVkLFxuXG4gICAgICAgIHNpemUsXG4gICAgICAgIHBlcmNlbnQsXG4gICAgICAgIHBlcmNlbnR1YWwsXG4gICAgICAgIGdyYWRpZW50LFxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgcmFkaXVzLFxuXG4gICAgICAgIGNvbG9yLFxuXG4gICAgICAgIHdyYXBwZXJTdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaFByb2dyZXNzQmFyV3JhcHBlclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICByYWRpdXM9e3JhZGl1c31cbiAgICAgICAgICAgIHN0eWxlcz17d3JhcHBlclN0eWxlc30+XG4gICAgICAgICAgICA8QXBoUHJvZ3Jlc3NCYXJcbiAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAgIHBlcmNlbnR1YWw9eyhwZXJjZW50IHx8IHBlcmNlbnR1YWwpfVxuICAgICAgICAgICAgICAgIGNvbG9yPXsoY29sb3IgfHwgJycpfVxuICAgICAgICAgICAgICAgIGFuaW1hdGVkPXthbmltYXRlZH1cbiAgICAgICAgICAgICAgICBncmFkaWVudFN0YXJ0PXtncmFkaWVudCAmJiBncmFkaWVudC5zdGFydH1cbiAgICAgICAgICAgICAgICBncmFkaWVudEVuZD17Z3JhZGllbnQgJiYgZ3JhZGllbnQuZW5kfVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9BcGhQcm9ncmVzc0JhcldyYXBwZXI+XG4gICAgKTtcbn07XG5cbi8qIERlZmF1bHQgUHJvcHMgKi9cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBmYWxzZSxcblxuICAgIHBlcmNlbnQgICAgICA6IDAsXG4gICAgcGVyY2VudHVhbCAgIDogMCxcbiAgICBzaXplICAgICAgICAgOiAnJyxcbiAgICBncmFkaWVudCAgICAgOiB7XG4gICAgICAgIHN0YXJ0OiBjb2xvcnMuZ2V0KCdzZWNvbmRhcnknKSxcbiAgICAgICAgZW5kICA6IGNvbG9ycy5nZXQoJ3NlY29uZGFyeScsICdsaWdodCcpLFxuICAgIH0sXG4gICAgc3R5bGVzICAgICAgIDoge30sXG5cbiAgICB3aWR0aCAgICAgICAgOiAnMTAwJScsXG4gICAgaGVpZ2h0ICAgICAgIDogMTAsXG5cbiAgICBjb2xvciAgICAgICAgOiAnJyxcbiAgICBjb2xvcmZ1bCAgICAgOiBmYWxzZSxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcHMgVHlwZXMgKi9cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgICBhbmltYXRlZCAgICAgOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIHNpemUgICAgICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudHVhbCAgIDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBncmFuZGllbnQgICAgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0eWxlcyAgICAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxuXG4gICAgd2lkdGggICAgICAgIDogcHJvcFR5cGVzLmFueSxcbiAgICBoZWlnaHQgICAgICAgOiBwcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgY29sb3IgICAgICAgIDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHdyYXBwZXJTdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiJdfQ== */");

function ProgressBar(props) {
  var animated = props.animated,
      size = props.size,
      percent = props.percent,
      percentual = props.percentual,
      gradient = props.gradient,
      styles = props.styles,
      width = props.width,
      height = props.height,
      radius = props.radius,
      color = props.color,
      wrapperStyles = props.wrapperStyles;
  return /*#__PURE__*/React.createElement(AphProgressBarWrapper, {
    width: width,
    height: height,
    radius: radius,
    styles: wrapperStyles
  }, /*#__PURE__*/React.createElement(AphProgressBar, {
    size: size,
    percentual: percent || percentual,
    color: color || '',
    animated: animated,
    gradientStart: gradient && gradient.start,
    gradientEnd: gradient && gradient.end,
    height: height,
    styles: styles
  }));
}
ProgressBar.defaultProps = {
  animated: false,
  percent: 0,
  percentual: 0,
  size: '',
  gradient: {
    start: colors$1.get('secondary'),
    end: colors$1.get('secondary', 'light')
  },
  styles: {},
  width: '100%',
  height: 10,
  color: '',
  colorful: false,
  wrapperStyles: {}
};
ProgressBar.propTypes = {
  animated: propTypes.bool,
  size: propTypes.string,
  percentual: propTypes.number,
  grandient: propTypes.object,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  width: propTypes.any,
  height: propTypes.number,
  color: propTypes.string,
  wrapperStyles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var _styled2;

var StyledWrapper = /*#__PURE__*/_styled('div', {
  target: "e11pv2pm0",
  label: "StyledWrapper"
})(function (props) {
  var _objectSpread2$1;

  return _objectSpread2(_objectSpread2({}, props.styles), {}, (_objectSpread2$1 = {
    position: 'relative',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginRight: '-10px',
    marginLeft: '-10px',
    '&:before,&:after': {
      content: '" "',
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '15px',
      zIndex: 1
    },
    '&:before': {
      left: 0,
      background: "linear-gradient(to right, " + colors$1.getFromTheme(props, 'inverse') + " 50%, " + colors$1.getFromTheme(props, 'inverse').replace('rgb(', 'rgba(').replace(')', ', 0)') + " 80%)"
    },
    '&:after': {
      right: 0,
      background: "linear-gradient(to right, " + colors$1.getFromTheme(props, 'inverse').replace('rgb(', 'rgba(').replace(')', ', 0)') + " 0%, " + colors$1.getFromTheme(props, 'inverse') + " 50%)"
    },
    '&.scrollable--xs': {
      '&:before,&:after': {
        content: 'initial'
      }
    }
  }, _objectSpread2$1[MEDIA_QUERIES.XS] = {
    marginRight: '-20px',
    marginLeft: '-20px',
    '&.scrollable--xs:before,&.scrollable--xs:after': {
      content: '" "'
    }
  }, _objectSpread2$1));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbGFibGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdzQiIsImZpbGUiOiJTY3JvbGxhYmxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVXRpbGl0ZXMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBNRURJQV9RVUVSSUVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogU3R5bGUgV3JhcHBlciAqL1xuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICAuLi5wcm9wcy5zdHlsZXMsXG5cbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgIHBhZGRpbmdUb3AgICA6ICcxMHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgbWFyZ2luUmlnaHQgIDogJy0xMHB4JyxcbiAgICBtYXJnaW5MZWZ0ICAgOiAnLTEwcHgnLFxuXG4gICAgJyY6YmVmb3JlLCY6YWZ0ZXInOiB7XG4gICAgICAgIGNvbnRlbnQgOiAnXCIgXCInLFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wICAgICA6ICcwJyxcbiAgICAgICAgYm90dG9tICA6ICcwJyxcbiAgICAgICAgd2lkdGggICA6ICcxNXB4JyxcbiAgICAgICAgekluZGV4ICA6IDEsXG4gICAgfSxcblxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfSA1MCUsICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKS5yZXBsYWNlKCdyZ2IoJywgJ3JnYmEoJykucmVwbGFjZSgnKScsICcsIDApJyl9IDgwJSlgLFxuICAgIH0sXG5cbiAgICAnJjphZnRlcic6IHtcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKS5yZXBsYWNlKCdyZ2IoJywgJ3JnYmEoJykucmVwbGFjZSgnKScsICcsIDApJyl9IDAlLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJyl9IDUwJSlgLFxuICAgIH0sXG5cbiAgICAnJi5zY3JvbGxhYmxlLS14cyc6IHtcbiAgICAgICAgJyY6YmVmb3JlLCY6YWZ0ZXInOiB7XG4gICAgICAgICAgICBjb250ZW50IDogJ2luaXRpYWwnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5YU106IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICctMjBweCcsXG4gICAgICAgIG1hcmdpbkxlZnQgOiAnLTIwcHgnLFxuXG4gICAgICAgICcmLnNjcm9sbGFibGUtLXhzOmJlZm9yZSwmLnNjcm9sbGFibGUtLXhzOmFmdGVyJzoge1xuICAgICAgICAgICAgY29udGVudCA6ICdcIiBcIicsXG4gICAgICAgIH1cbiAgICB9XG59KSk7XG5cbi8qIFN0eWxlZCBTY3JvbGwgKi9cbmNvbnN0IFN0eWxlZFNjcm9sbGFibGUgPSBzdHlsZWQoJ2RpdicpKHtcbiAgICBvdmVyZmxvdyAgOiAnYXV0bycsXG4gICAgb3ZlcmZsb3dZIDogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgdGV4dEFsaWduIDogJ2NlbnRlcicsXG5cbiAgICAnLnNjcm9sbGFibGVfX2l0ZW0nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXJnaW4gOiAnMCAxMHB4JyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgfSxcblxuICAgIFtNRURJQV9RVUVSSUVTLlhTXToge1xuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcblxuICAgICAgICAnLnNjcm9sbGFibGVfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnJjpsYXN0LWNoaWxkJzoge1xuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBTY3JvbGxhYmxlID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgb25seVhTLFxuICAgICAgICBzdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFdyYXBwZXJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICBjbGFzc05hbWU9eyhjbGFzc05hbWUgfHwgJycpICsgKG9ubHlYUyA/ICcgc2Nyb2xsYWJsZS0teHMnIDogJycpfT5cbiAgICAgICAgICAgIDxTdHlsZWRTY3JvbGxhYmxlPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvU3R5bGVkU2Nyb2xsYWJsZT5cbiAgICAgICAgPC9TdHlsZWRXcmFwcGVyPlxuICAgICk7XG59KTtcblxuLyogRXhwb3J0IENvbXBvbmVudCAqL1xuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsYWJsZTtcbiJdfQ== */");

var StyledScrollable = /*#__PURE__*/_styled('div', {
  target: "e11pv2pm1",
  label: "StyledScrollable"
})((_styled2 = {
  overflow: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  '.scrollable__item': {
    display: 'inline-block',
    margin: '0 10px',
    verticalAlign: 'middle'
  }
}, _styled2[MEDIA_QUERIES.XS] = {
  textAlign: 'left',
  '.scrollable__item': {
    '&:first-of-type': {
      marginLeft: '20px'
    },
    '&:last-child': {
      marginRight: '20px'
    }
  }
}, _styled2), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbGFibGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEeUIiLCJmaWxlIjoiU2Nyb2xsYWJsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxpdGVzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFN0eWxlIFdyYXBwZXIgKi9cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgLi4ucHJvcHMuc3R5bGVzLFxuXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICBwYWRkaW5nVG9wICAgOiAnMTBweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgIG1hcmdpblJpZ2h0ICA6ICctMTBweCcsXG4gICAgbWFyZ2luTGVmdCAgIDogJy0xMHB4JyxcblxuICAgICcmOmJlZm9yZSwmOmFmdGVyJzoge1xuICAgICAgICBjb250ZW50IDogJ1wiIFwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcCAgICAgOiAnMCcsXG4gICAgICAgIGJvdHRvbSAgOiAnMCcsXG4gICAgICAgIHdpZHRoICAgOiAnMTVweCcsXG4gICAgICAgIHpJbmRleCAgOiAxLFxuICAgIH0sXG5cbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX0gNTAlLCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJykucmVwbGFjZSgncmdiKCcsICdyZ2JhKCcpLnJlcGxhY2UoJyknLCAnLCAwKScpfSA4MCUpYCxcbiAgICB9LFxuXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdpbnZlcnNlJykucmVwbGFjZSgncmdiKCcsICdyZ2JhKCcpLnJlcGxhY2UoJyknLCAnLCAwKScpfSAwJSwgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfSA1MCUpYCxcbiAgICB9LFxuXG4gICAgJyYuc2Nyb2xsYWJsZS0teHMnOiB7XG4gICAgICAgICcmOmJlZm9yZSwmOmFmdGVyJzoge1xuICAgICAgICAgICAgY29udGVudCA6ICdpbml0aWFsJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgW01FRElBX1FVRVJJRVMuWFNdOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiAnLTIwcHgnLFxuICAgICAgICBtYXJnaW5MZWZ0IDogJy0yMHB4JyxcblxuICAgICAgICAnJi5zY3JvbGxhYmxlLS14czpiZWZvcmUsJi5zY3JvbGxhYmxlLS14czphZnRlcic6IHtcbiAgICAgICAgICAgIGNvbnRlbnQgOiAnXCIgXCInLFxuICAgICAgICB9XG4gICAgfVxufSkpO1xuXG4vKiBTdHlsZWQgU2Nyb2xsICovXG5jb25zdCBTdHlsZWRTY3JvbGxhYmxlID0gc3R5bGVkKCdkaXYnKSh7XG4gICAgb3ZlcmZsb3cgIDogJ2F1dG8nLFxuICAgIG92ZXJmbG93WSA6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxuXG4gICAgJy5zY3JvbGxhYmxlX19pdGVtJzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWFyZ2luIDogJzAgMTBweCcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIH0sXG5cbiAgICBbTUVESUFfUVVFUklFUy5YU106IHtcbiAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG5cbiAgICAgICAgJy5zY3JvbGxhYmxlX19pdGVtJzoge1xuICAgICAgICAgICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyY6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH0sXG59KTtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgU2Nyb2xsYWJsZSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIG9ubHlYUyxcbiAgICAgICAgc3R5bGVzLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRXcmFwcGVyXG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXsoY2xhc3NOYW1lIHx8ICcnKSArIChvbmx5WFMgPyAnIHNjcm9sbGFibGUtLXhzJyA6ICcnKX0+XG4gICAgICAgICAgICA8U3R5bGVkU2Nyb2xsYWJsZT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L1N0eWxlZFNjcm9sbGFibGU+XG4gICAgICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIEV4cG9ydCBDb21wb25lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbGFibGU7XG4iXX0= */");

var Scrollable = /*#__PURE__*/forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      onlyXS = props.onlyXS,
      styles = props.styles;
  return /*#__PURE__*/React.createElement(StyledWrapper, {
    ref: ref,
    styles: styles,
    className: (className || '') + (onlyXS ? ' scrollable--xs' : '')
  }, /*#__PURE__*/React.createElement(StyledScrollable, null, children));
});

var AphTableStyled = _styled("table", {
  target: "e1f04vbw0",
  label: "AphTableStyled"
})("box-sizing:border-box;min-width:100%;border-collapse:collapse;border-style:hidden;", function (props) {
  return props.styles;
}, ";", function (props) {
  return !props.rounded ? null : "\n        position     : relative;\n        overflow     : hidden;\n        border-radius: " + RADIUS.SM + "px;\n    ";
}, " ", function (props) {
  return !props.striped ? null : "\n        tbody {\n            tr:nth-child(even) {\n                background-color: " + COLORS.SMOKE + ";\n            }\n        }\n    ";
}, " thead,tfoot{background-color:", COLORS.LIGHT_GREY, ";text-align:left;}th{font-weight:700;padding:", function (props) {
  return props.condensed ? '6px' : '11px';
}, " 10px ", function (props) {
  return props.condensed ? '4px' : '9px';
}, ";}td{padding:", function (props) {
  return props.condensed ? '5px' : props.bordered ? '10px' : '11px';
}, " 10px ", function (props) {
  return props.condensed ? props.bordered ? '4px' : '5px' : '9px';
}, ";", function (props) {
  return !props.bordered ? null : "\n            border-top: 1px solid " + COLORS.LIGHT_GREY + ";\n        ";
}, "}tbody{", function (props) {
  return !props.hoverable ? null : "\n            tr {\n                background-color: transparent;\n                transition: background-color 0.25s linear;\n\n                &:hover {\n                    background-color: " + COLORS.SMOKE + ";\n                }\n            }\n        ";
}, "}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRhYmxlU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQyIsImZpbGUiOiJUYWJsZVN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBDT0xPUlMsIFJBRElVUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaFRhYmxlU3R5bGVkID0gc3R5bGVkLnRhYmxlYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWluLXdpZHRoIDogMTAwJTtcblxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXN0eWxlICAgOiBoaWRkZW47XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5cbiAgICAke3Byb3BzID0+ICghcHJvcHMucm91bmRlZCA/IG51bGwgOiBgXG4gICAgICAgIHBvc2l0aW9uICAgICA6IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7UkFESVVTLlNNfXB4O1xuICAgIGApfVxuXG4gICAgJHtwcm9wcyA9PiAoIXByb3BzLnN0cmlwZWQgPyBudWxsIDogYFxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q09MT1JTLlNNT0tFfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGApfVxuXG4gICAgdGhlYWQsXG4gICAgdGZvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NPTE9SUy5MSUdIVF9HUkVZfTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHBhZGRpbmc6XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAnNnB4JyA6ICcxMXB4Jyl9XG4gICAgICAgICAgICAxMHB4XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAnNHB4JyA6ICc5cHgnKX1cbiAgICAgICAgO1xuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICR7cHJvcHMgPT4gKHByb3BzLmNvbmRlbnNlZCA/ICc1cHgnIDogKHByb3BzLmJvcmRlcmVkID8gJzEwcHgnIDogJzExcHgnKSl9XG4gICAgICAgICAgICAxMHB4XG4gICAgICAgICAgICAke3Byb3BzID0+IChwcm9wcy5jb25kZW5zZWQgPyAocHJvcHMuYm9yZGVyZWQgPyAnNHB4JyA6ICc1cHgnKSA6ICc5cHgnKX1cbiAgICAgICAgO1xuXG4gICAgICAgICR7cHJvcHMgPT4gKCFwcm9wcy5ib3JkZXJlZCA/IG51bGwgOiBgXG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtDT0xPUlMuTElHSFRfR1JFWX07XG4gICAgICAgIGApfVxuICAgIH1cblxuICAgIHRib2R5IHtcbiAgICAgICAgJHtwcm9wcyA9PiAoIXByb3BzLmhvdmVyYWJsZSA/IG51bGwgOiBgXG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBsaW5lYXI7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDT0xPUlMuU01PS0V9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYCl9XG4gICAgfVxuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhUYWJsZVN0eWxlZDtcbiJdfQ== */"));

var Table = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children;
  return /*#__PURE__*/React.createElement(AphTableStyled, _extends({}, props, {
    ref: ref,
    className: "aph-table " + (className || '')
  }), children);
});
Table.defaultProps = {
  bordered: false,
  condensed: false,
  hoverable: false,
  striped: false
};
Table.propTypes = {
  bordered: propTypes.bool,
  condensed: propTypes.bool,
  hoverable: propTypes.bool,
  striped: propTypes.bool
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "rlub5d-ToastsStyles",
  styles: ".Toastify__toast-container{z-index:9999;-webkit-transform:translateZ(9999px);position:fixed;padding:4px;width:320px;box-sizing:border-box;color:#fff}.Toastify__toast-container--top-left{top:1em;left:1em}.Toastify__toast-container--top-center{top:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--top-right{top:1em;right:1em}.Toastify__toast-container--bottom-left{bottom:1em;left:1em}.Toastify__toast-container--bottom-center{bottom:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--bottom-right{bottom:1em;right:1em}@media only screen and (max-width:480px){.Toastify__toast-container{width:100vw;padding:0;left:0;margin:0}.Toastify__toast-container--top-center,.Toastify__toast-container--top-left,.Toastify__toast-container--top-right{top:0;transform:translateX(0)}.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-right{bottom:0;transform:translateX(0)}.Toastify__toast-container--rtl{right:0;left:auto}}.Toastify__toast{position:relative;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:8px;border-radius:4px;box-shadow:0 1px 10px 0 rgba(0,0,0,.1),0 2px 15px 0 rgba(0,0,0,.05);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;max-height:800px;overflow:hidden;font-family:sans-serif;cursor:pointer;direction:ltr}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--dark{background:#121212;color:#fff}.Toastify__toast--default{background:#fff;color:#aaa}.Toastify__toast--info{background:#3498db}.Toastify__toast--success{background:#07bc0c}.Toastify__toast--warning{background:#f1c40f}.Toastify__toast--error{background:#e74c3c}.Toastify__toast-body{margin:auto 0;-ms-flex:1 1 auto;flex:1 1 auto;padding:6px}.Toastify--animate{animation-fill-mode:both;animation-duration:.7s}@media only screen and (max-width:480px){.Toastify__toast{margin-bottom:0;border-radius:0}}.Toastify__close-button{color:#fff;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;-ms-flex-item-align:start;align-self:flex-start}.Toastify__close-button--default{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:focus,.Toastify__close-button:hover{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:5px;z-index:9999;opacity:.7;background-color:hsla(0,0%,100%,.7);transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:auto;transform-origin:right}.Toastify__progress-bar--default{background:linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55)}.Toastify__progress-bar--dark{background:#bb86fc}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--bottom-left,.Toastify__bounce-enter--top-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--bottom-right,.Toastify__bounce-enter--top-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--bottom-left,.Toastify__bounce-exit--top-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--bottom-right,.Toastify__bounce-exit--top-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(110%,0,0)}}@keyframes Toastify__slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-110%,0,0)}}@keyframes Toastify__slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--bottom-left,.Toastify__slide-enter--top-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--bottom-right,.Toastify__slide-enter--top-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--bottom-left,.Toastify__slide-exit--top-left{animation-name:Toastify__slideOutLeft}.Toastify__slide-exit--bottom-right,.Toastify__slide-exit--top-right{animation-name:Toastify__slideOutRight}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown};label:ToastsStyles;"
} : {
  name: "rlub5d-ToastsStyles",
  styles: ".Toastify__toast-container{z-index:9999;-webkit-transform:translateZ(9999px);position:fixed;padding:4px;width:320px;box-sizing:border-box;color:#fff}.Toastify__toast-container--top-left{top:1em;left:1em}.Toastify__toast-container--top-center{top:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--top-right{top:1em;right:1em}.Toastify__toast-container--bottom-left{bottom:1em;left:1em}.Toastify__toast-container--bottom-center{bottom:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--bottom-right{bottom:1em;right:1em}@media only screen and (max-width:480px){.Toastify__toast-container{width:100vw;padding:0;left:0;margin:0}.Toastify__toast-container--top-center,.Toastify__toast-container--top-left,.Toastify__toast-container--top-right{top:0;transform:translateX(0)}.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-right{bottom:0;transform:translateX(0)}.Toastify__toast-container--rtl{right:0;left:auto}}.Toastify__toast{position:relative;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:8px;border-radius:4px;box-shadow:0 1px 10px 0 rgba(0,0,0,.1),0 2px 15px 0 rgba(0,0,0,.05);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;max-height:800px;overflow:hidden;font-family:sans-serif;cursor:pointer;direction:ltr}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--dark{background:#121212;color:#fff}.Toastify__toast--default{background:#fff;color:#aaa}.Toastify__toast--info{background:#3498db}.Toastify__toast--success{background:#07bc0c}.Toastify__toast--warning{background:#f1c40f}.Toastify__toast--error{background:#e74c3c}.Toastify__toast-body{margin:auto 0;-ms-flex:1 1 auto;flex:1 1 auto;padding:6px}.Toastify--animate{animation-fill-mode:both;animation-duration:.7s}@media only screen and (max-width:480px){.Toastify__toast{margin-bottom:0;border-radius:0}}.Toastify__close-button{color:#fff;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;-ms-flex-item-align:start;align-self:flex-start}.Toastify__close-button--default{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:focus,.Toastify__close-button:hover{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:5px;z-index:9999;opacity:.7;background-color:hsla(0,0%,100%,.7);transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:auto;transform-origin:right}.Toastify__progress-bar--default{background:linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55)}.Toastify__progress-bar--dark{background:#bb86fc}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--bottom-left,.Toastify__bounce-enter--top-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--bottom-right,.Toastify__bounce-enter--top-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--bottom-left,.Toastify__bounce-exit--top-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--bottom-right,.Toastify__bounce-exit--top-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes Toastify__slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(110%,0,0)}}@keyframes Toastify__slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-110%,0,0)}}@keyframes Toastify__slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--bottom-left,.Toastify__slide-enter--top-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--bottom-right,.Toastify__slide-enter--top-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--bottom-left,.Toastify__slide-exit--top-left{animation-name:Toastify__slideOutLeft}.Toastify__slide-exit--bottom-right,.Toastify__slide-exit--top-right{animation-name:Toastify__slideOutRight}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown};label:ToastsStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvYXN0c1N0eWxlcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3VCIiwiZmlsZSI6IlRvYXN0c1N0eWxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuZnVuY3Rpb24gVG9hc3RzU3R5bGVzKCkge1xuICAgIC8qKlxuICAgICAqIFJlbmRlclxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgICAgICAgIC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVye3otaW5kZXg6OTk5OTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDk5OTlweCk7cG9zaXRpb246Zml4ZWQ7cGFkZGluZzo0cHg7d2lkdGg6MzIwcHg7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOiNmZmZ9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1sZWZ0e3RvcDoxZW07bGVmdDoxZW19LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1jZW50ZXJ7dG9wOjFlbTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0uVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lci0tdG9wLXJpZ2h0e3RvcDoxZW07cmlnaHQ6MWVtfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tbGVmdHtib3R0b206MWVtO2xlZnQ6MWVtfS5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tY2VudGVye2JvdHRvbToxZW07bGVmdDo1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1yaWdodHtib3R0b206MWVtO3JpZ2h0OjFlbX1AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpey5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVye3dpZHRoOjEwMHZ3O3BhZGRpbmc6MDtsZWZ0OjA7bWFyZ2luOjB9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1jZW50ZXIsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXRvcC1sZWZ0LC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS10b3AtcmlnaHR7dG9wOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1jZW50ZXIsLlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLWJvdHRvbS1sZWZ0LC5Ub2FzdGlmeV9fdG9hc3QtY29udGFpbmVyLS1ib3R0b20tcmlnaHR7Ym90dG9tOjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9LlRvYXN0aWZ5X190b2FzdC1jb250YWluZXItLXJ0bHtyaWdodDowO2xlZnQ6YXV0b319LlRvYXN0aWZ5X190b2FzdHtwb3NpdGlvbjpyZWxhdGl2ZTttaW4taGVpZ2h0OjY0cHg7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi1ib3R0b206MXJlbTtwYWRkaW5nOjhweDtib3JkZXItcmFkaXVzOjRweDtib3gtc2hhZG93OjAgMXB4IDEwcHggMCByZ2JhKDAsMCwwLC4xKSwwIDJweCAxNXB4IDAgcmdiYSgwLDAsMCwuMDUpO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXgtaGVpZ2h0OjgwMHB4O292ZXJmbG93OmhpZGRlbjtmb250LWZhbWlseTpzYW5zLXNlcmlmO2N1cnNvcjpwb2ludGVyO2RpcmVjdGlvbjpsdHJ9LlRvYXN0aWZ5X190b2FzdC0tcnRse2RpcmVjdGlvbjpydGx9LlRvYXN0aWZ5X190b2FzdC0tZGFya3tiYWNrZ3JvdW5kOiMxMjEyMTI7Y29sb3I6I2ZmZn0uVG9hc3RpZnlfX3RvYXN0LS1kZWZhdWx0e2JhY2tncm91bmQ6I2ZmZjtjb2xvcjojYWFhfS5Ub2FzdGlmeV9fdG9hc3QtLWluZm97YmFja2dyb3VuZDojMzQ5OGRifS5Ub2FzdGlmeV9fdG9hc3QtLXN1Y2Nlc3N7YmFja2dyb3VuZDojMDdiYzBjfS5Ub2FzdGlmeV9fdG9hc3QtLXdhcm5pbmd7YmFja2dyb3VuZDojZjFjNDBmfS5Ub2FzdGlmeV9fdG9hc3QtLWVycm9ye2JhY2tncm91bmQ6I2U3NGMzY30uVG9hc3RpZnlfX3RvYXN0LWJvZHl7bWFyZ2luOmF1dG8gMDstbXMtZmxleDoxIDEgYXV0bztmbGV4OjEgMSBhdXRvO3BhZGRpbmc6NnB4fS5Ub2FzdGlmeS0tYW5pbWF0ZXthbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWR1cmF0aW9uOi43c31AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpey5Ub2FzdGlmeV9fdG9hc3R7bWFyZ2luLWJvdHRvbTowO2JvcmRlci1yYWRpdXM6MH19LlRvYXN0aWZ5X19jbG9zZS1idXR0b257Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O291dGxpbmU6bm9uZTtib3JkZXI6bm9uZTtwYWRkaW5nOjA7Y3Vyc29yOnBvaW50ZXI7b3BhY2l0eTouNzt0cmFuc2l0aW9uOi4zcyBlYXNlOy1tcy1mbGV4LWl0ZW0tYWxpZ246c3RhcnQ7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1kZWZhdWx0e2NvbG9yOiMwMDA7b3BhY2l0eTouM30uVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbj5zdmd7ZmlsbDpjdXJyZW50Q29sb3I7aGVpZ2h0OjE2cHg7d2lkdGg6MTRweH0uVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbjpmb2N1cywuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbjpob3ZlcntvcGFjaXR5OjF9QGtleWZyYW1lcyBUb2FzdGlmeV9fdHJhY2tQcm9ncmVzc3swJXt0cmFuc2Zvcm06c2NhbGVYKDEpfXRve3RyYW5zZm9ybTpzY2FsZVgoMCl9fS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo1cHg7ei1pbmRleDo5OTk5O29wYWNpdHk6Ljc7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsMTAwJSwuNyk7dHJhbnNmb3JtLW9yaWdpbjpsZWZ0fS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1hbmltYXRlZHthbmltYXRpb246VG9hc3RpZnlfX3RyYWNrUHJvZ3Jlc3MgbGluZWFyIDEgZm9yd2FyZHN9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWNvbnRyb2xsZWR7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzfS5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1ydGx7cmlnaHQ6MDtsZWZ0OmF1dG87dHJhbnNmb3JtLW9yaWdpbjpyaWdodH0uVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tZGVmYXVsdHtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywjNGNkOTY0LCM1YWM4ZmEsIzAwN2FmZiwjMzRhYWRjLCM1ODU2ZDYsI2ZmMmQ1NSl9LlRvYXN0aWZ5X19wcm9ncmVzcy1iYXItLWRhcmt7YmFja2dyb3VuZDojYmI4NmZjfUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZUluUmlnaHR7MCUsNjAlLDc1JSw5MCUsdG97YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMwMDBweCwwLDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNXB4LDAsMCl9NzUle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNXB4LDAsMCl9dG97dHJhbnNmb3JtOm5vbmV9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZU91dFJpZ2h0ezIwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMHB4LDAsMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5MZWZ0ezAlLDYwJSw3NSUsOTAlLHRve2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMzAwMHB4LDAsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjVweCwwLDApfTc1JXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApfXRve3RyYW5zZm9ybTpub25lfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19ib3VuY2VPdXRMZWZ0ezIwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsMCwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlSW5VcHswJSw2MCUsNzUlLDkwJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwzMDAwcHgsMCl9NjAle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKX03NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTVweCwwKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlT3V0VXB7MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApfTQwJSw0NSV7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwcHgsMCl9dG97b3BhY2l0eTowO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2JvdW5jZUluRG93bnswJSw2MCUsNzUlLDkwJSx0b3thbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMzAwMHB4LDApfTYwJXtvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjVweCwwKX03NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCl9OTAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKX10b3t0cmFuc2Zvcm06bm9uZX19QGtleWZyYW1lcyBUb2FzdGlmeV9fYm91bmNlT3V0RG93bnsyMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKX00MCUsNDUle29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKX10b3tvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApfX0uVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tYm90dG9tLWxlZnQsLlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLXRvcC1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VJbkxlZnR9LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLWJvdHRvbS1yaWdodCwuVG9hc3RpZnlfX2JvdW5jZS1lbnRlci0tdG9wLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VJblJpZ2h0fS5Ub2FzdGlmeV9fYm91bmNlLWVudGVyLS10b3AtY2VudGVye2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19ib3VuY2VJbkRvd259LlRvYXN0aWZ5X19ib3VuY2UtZW50ZXItLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZUluVXB9LlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLWxlZnQsLlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tdG9wLWxlZnR7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX2JvdW5jZU91dExlZnR9LlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLXJpZ2h0LC5Ub2FzdGlmeV9fYm91bmNlLWV4aXQtLXRvcC1yaWdodHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0UmlnaHR9LlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0VXB9LlRvYXN0aWZ5X19ib3VuY2UtZXhpdC0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fYm91bmNlT3V0RG93bn1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X196b29tSW57MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX01MCV7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X196b29tT3V0ezAle29wYWNpdHk6MX01MCV7b3BhY2l0eTowO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX10b3tvcGFjaXR5OjB9fS5Ub2FzdGlmeV9fem9vbS1lbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fem9vbUlufS5Ub2FzdGlmeV9fem9vbS1leGl0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X196b29tT3V0fUBrZXlmcmFtZXMgVG9hc3RpZnlfX2ZsaXBJbnswJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjtvcGFjaXR5OjB9NDAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTtvcGFjaXR5OjF9ODAle3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtNWRlZyl9dG97dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19QGtleWZyYW1lcyBUb2FzdGlmeV9fZmxpcE91dHswJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfTMwJXt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTtvcGFjaXR5OjF9dG97dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTtvcGFjaXR5OjB9fS5Ub2FzdGlmeV9fZmxpcC1lbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fZmxpcElufS5Ub2FzdGlmeV9fZmxpcC1leGl0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19mbGlwT3V0fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5SaWdodHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTEwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVJbkxlZnR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMTAlLDAsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRve3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZUluVXB7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTEwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlSW5Eb3duezAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMTAlLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRSaWdodHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTEwJSwwLDApfX1Aa2V5ZnJhbWVzIFRvYXN0aWZ5X19zbGlkZU91dExlZnR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMTAlLDAsMCl9fUBrZXlmcmFtZXMgVG9hc3RpZnlfX3NsaWRlT3V0RG93bnswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1MDBweCwwKX19QGtleWZyYW1lcyBUb2FzdGlmeV9fc2xpZGVPdXRVcHswJXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtNTAwcHgsMCl9fS5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLWJvdHRvbS1sZWZ0LC5Ub2FzdGlmeV9fc2xpZGUtZW50ZXItLXRvcC1sZWZ0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluTGVmdH0uVG9hc3RpZnlfX3NsaWRlLWVudGVyLS1ib3R0b20tcmlnaHQsLlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZUluUmlnaHR9LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJbkRvd259LlRvYXN0aWZ5X19zbGlkZS1lbnRlci0tYm90dG9tLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVJblVwfS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLWxlZnQsLlRvYXN0aWZ5X19zbGlkZS1leGl0LS10b3AtbGVmdHthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRMZWZ0fS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tYm90dG9tLXJpZ2h0LC5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLXJpZ2h0e2FuaW1hdGlvbi1uYW1lOlRvYXN0aWZ5X19zbGlkZU91dFJpZ2h0fS5Ub2FzdGlmeV9fc2xpZGUtZXhpdC0tdG9wLWNlbnRlcnthbmltYXRpb24tbmFtZTpUb2FzdGlmeV9fc2xpZGVPdXRVcH0uVG9hc3RpZnlfX3NsaWRlLWV4aXQtLWJvdHRvbS1jZW50ZXJ7YW5pbWF0aW9uLW5hbWU6VG9hc3RpZnlfX3NsaWRlT3V0RG93bn1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBUb2FzdHNTdHlsZXM7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

function ToastsStyles() {
  return /*#__PURE__*/React.createElement(Global, {
    styles: _ref
  });
}

var ToastsContainer = function ToastsContainer(props) {
  var _objectSpread2$1;

  if (props === void 0) {
    props = {
      styles: {}
    };
  }

  var styles = props.styles || {};

  var AphToastsContainer = /*#__PURE__*/_styled('div', {
    target: "ev3n6an0",
    label: "AphToastsContainer"
  })(_objectSpread2(_objectSpread2({}, styles), {}, (_objectSpread2$1 = {
    zIndex: styles.zIndex || ZINDEX.TOAST,
    position: styles.position || 'fixed',
    top: typeof styles.top === 'string' ? styles.top : '20px',
    right: typeof styles.right === 'string' ? styles.right : '20px',
    '.Toastify__toast-container': {
      position: 'relative',
      top: 'auto',
      right: 'auto',
      width: '100%',
      minWidth: '380px',
      padding: 0
    },
    '.Toastify__toast': {
      margin: '0 0 10px',
      padding: '15px 40px 15px 20px',
      background: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0 0 4px rgba(42, 42, 42, 0.25)',
      borderRadius: '4px',
      minHeight: '50px',
      maxWidth: '380px',
      width: '100%',
      fontFamily: 'inherit',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '20px',
      userSelect: 'none',
      '&--default': {
        color: COLORS.BLACK
      },
      '.Toastify__close-button': {
        position: 'absolute',
        top: 'calc(50% - 15px)',
        right: '10px',
        width: '30px',
        height: '30px',
        padding: 0,
        margin: '0 !important',
        opacity: 1,
        lineHeight: 0,
        color: 'transparent',
        cursor: 'pointer',
        outline: 0,
        border: 0,
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'none',
        textAlign: 'center',
        willTransform: 'background, box-shadow',
        transition: 'background .25s linear, box-shadow .25s linear',
        '&:hover': {
          background: 'rgba(42, 42, 42, 0.05)'
        },
        '&:active,&:focus': {
          boxShadow: 'inset 1px 1px 4px rgba(42, 42, 42, 0.15)',
          background: 'rgba(42, 42, 42, 0.15)'
        },
        svg: {
          width: '15px',
          height: '15px'
        }
      },
      '.Toastify__progress-bar': {
        height: '2px',
        background: COLORS.BLACK
      },
      '&.Toastify__toast--success': {
        color: COLORS.SUCCESS,
        '.Toastify__close-button--success svg path': {
          fill: COLORS.SUCCESS
        },
        '.Toastify__progress-bar--success': {
          background: COLORS.SUCCESS
        }
      },
      '&.Toastify__toast--info': {
        color: COLORS.INFO,
        '.Toastify__close-button--info svg path': {
          fill: COLORS.INFO
        },
        '.Toastify__progress-bar--info': {
          background: COLORS.INFO
        }
      },
      '&.Toastify__toast--warning': {
        color: COLORS.WARNING,
        '.Toastify__close-button--warning svg path': {
          fill: COLORS.WARNING
        },
        '.Toastify__progress-bar--warning': {
          background: COLORS.WARNING
        }
      },
      '&.Toastify__toast--error': {
        color: COLORS.ERROR,
        '.Toastify__close-button--error svg path': {
          fill: COLORS.ERROR
        },
        '.Toastify__progress-bar--error': {
          background: COLORS.ERROR
        }
      },
      '&.Toastify__toast--inverse': {
        color: COLORS.WHITE,
        background: 'rgba(45, 45, 45, 0.95)',
        '.Toastify__close-button': {
          '&:hover': {
            background: 'rgba(42, 42, 42, 0.5)'
          },
          '&:active,&:focus': {
            boxShadow: 'inset 1px 1px 4px rgb(42, 42, 42)',
            background: 'rgba(42, 42, 42, 0.5)'
          },
          '&:before': {
            color: COLORS.WHITE
          }
        },
        '.Toastify__progress-bar': {
          background: COLORS.WHITE
        }
      }
    }
  }, _objectSpread2$1[MEDIA_QUERIES.LT.SM] = {
    width: '100%',
    top: 'auto',
    right: 0,
    bottom: 0,
    left: 0,
    '.Toastify__toast-container': {
      top: 'auto',
      right: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      width: '100%',
      minWidth: '100%'
    },
    '.Toastify__toast': {
      margin: 0,
      padding: '20px 40px 20px 20px',
      boxShadow: '0 0 2px 0 rgba(42, 42, 42, 0.2)',
      borderRadius: 0,
      maxWidth: '100%'
    }
  }, _objectSpread2$1)), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvYXN0c0NvbnRhaW5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZStCIiwiZmlsZSI6IlRvYXN0c0NvbnRhaW5lci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IENPTE9SUywgTUVESUFfUVVFUklFUywgWklOREVYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuaW1wb3J0IFRvYXN0c1N0eWxlcyBmcm9tICcuL1RvYXN0c1N0eWxlcyc7XG5cbi8qIENvbXBvbmVudCAqL1xuY29uc3QgVG9hc3RzQ29udGFpbmVyID0gKHByb3BzID0geyBzdHlsZXM6IHt9IH0pID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSBwcm9wcy5zdHlsZXMgfHwge307XG5cbiAgICBjb25zdCBBcGhUb2FzdHNDb250YWluZXIgPSBzdHlsZWQoJ2RpdicpKHtcbiAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICB6SW5kZXggIDogKHN0eWxlcy56SW5kZXggfHwgWklOREVYLlRPQVNUKSxcbiAgICAgICAgcG9zaXRpb246IChzdHlsZXMucG9zaXRpb24gfHwgJ2ZpeGVkJyksXG4gICAgICAgIHRvcCAgICAgOiAodHlwZW9mIHN0eWxlcy50b3AgPT09ICdzdHJpbmcnID8gc3R5bGVzLnRvcCA6ICcyMHB4JyksXG4gICAgICAgIHJpZ2h0ICAgOiAodHlwZW9mIHN0eWxlcy5yaWdodCA9PT0gJ3N0cmluZycgPyBzdHlsZXMucmlnaHQgOiAnMjBweCcpLFxuXG4gICAgICAgICcuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lcic6IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgdG9wICAgICA6ICdhdXRvJyxcbiAgICAgICAgICAgIHJpZ2h0ICAgOiAnYXV0bycsXG4gICAgICAgICAgICB3aWR0aCAgIDogJzEwMCUnLFxuICAgICAgICAgICAgbWluV2lkdGg6ICczODBweCcsXG4gICAgICAgICAgICBwYWRkaW5nIDogMCxcbiAgICAgICAgfSxcblxuICAgICAgICAnLlRvYXN0aWZ5X190b2FzdCc6IHtcbiAgICAgICAgICAgIG1hcmdpbiAgICAgIDogJzAgMCAxMHB4JyxcbiAgICAgICAgICAgIHBhZGRpbmcgICAgIDogJzE1cHggNDBweCAxNXB4IDIwcHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZCAgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KScsXG4gICAgICAgICAgICBib3hTaGFkb3cgICA6ICcwIDAgNHB4IHJnYmEoNDIsIDQyLCA0MiwgMC4yNSknLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcbiAgICAgICAgICAgIG1pbkhlaWdodCAgIDogJzUwcHgnLFxuICAgICAgICAgICAgbWF4V2lkdGggICAgOiAnMzgwcHgnLFxuICAgICAgICAgICAgd2lkdGggICAgICAgOiAnMTAwJScsXG5cbiAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgICAgICAgZm9udFNpemUgIDogJzE2cHgnLFxuICAgICAgICAgICAgbGluZUhlaWdodDogJzIwcHgnLFxuXG4gICAgICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG5cbiAgICAgICAgICAgICcmLS1kZWZhdWx0Jzoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuQkxBQ0ssXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnLlRvYXN0aWZ5X19jbG9zZS1idXR0b24nOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgdG9wICAgICA6ICdjYWxjKDUwJSAtIDE1cHgpJyxcbiAgICAgICAgICAgICAgICByaWdodCAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgIHdpZHRoICAgOiAnMzBweCcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICA6ICczMHB4JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nIDogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW4gIDogJzAgIWltcG9ydGFudCcsXG4gICAgICAgICAgICAgICAgb3BhY2l0eSA6IDEsXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogMCxcblxuICAgICAgICAgICAgICAgIGNvbG9yIDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcblxuICAgICAgICAgICAgICAgIG91dGxpbmUgICAgIDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgICA6IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kICA6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93ICAgOiAnbm9uZScsXG5cbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuXG4gICAgICAgICAgICAgICAgd2lsbFRyYW5zZm9ybTogJ2JhY2tncm91bmQsIGJveC1zaGFkb3cnLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24gICA6ICdiYWNrZ3JvdW5kIC4yNXMgbGluZWFyLCBib3gtc2hhZG93IC4yNXMgbGluZWFyJyxcblxuICAgICAgICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0MiwgNDIsIDQyLCAwLjA1KScsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcmOmFjdGl2ZSwmOmZvY3VzJzoge1xuICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3cgOiAnaW5zZXQgMXB4IDFweCA0cHggcmdiYSg0MiwgNDIsIDQyLCAwLjE1KScsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDQyLCA0MiwgNDIsIDAuMTUpJyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc3ZnOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzE1cHgnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcuVG9hc3RpZnlfX3Byb2dyZXNzLWJhcic6IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgOiAnMnB4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuQkxBQ0ssXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLXN1Y2Nlc3MnOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5TVUNDRVNTLFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1zdWNjZXNzIHN2ZyBwYXRoJzoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1zdWNjZXNzJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLWluZm8nOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5JTkZPLFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS1pbmZvIHN2ZyBwYXRoJzoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBDT0xPUlMuSU5GTyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS1pbmZvJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuSU5GTyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLXdhcm5pbmcnOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5XQVJOSU5HLFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fY2xvc2UtYnV0dG9uLS13YXJuaW5nIHN2ZyBwYXRoJzoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBDT0xPUlMuV0FSTklORyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyLS13YXJuaW5nJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuV0FSTklORyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLWVycm9yJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBDT0xPUlMuRVJST1IsXG5cbiAgICAgICAgICAgICAgICAnLlRvYXN0aWZ5X19jbG9zZS1idXR0b24tLWVycm9yIHN2ZyBwYXRoJzoge1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiBDT0xPUlMuRVJST1IsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX3Byb2dyZXNzLWJhci0tZXJyb3InOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IENPTE9SUy5FUlJPUixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAnJi5Ub2FzdGlmeV9fdG9hc3QtLWludmVyc2UnOiB7XG4gICAgICAgICAgICAgICAgY29sb3IgICAgIDogQ09MT1JTLldISVRFLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDQ1LCA0NSwgNDUsIDAuOTUpJyxcblxuICAgICAgICAgICAgICAgICcuVG9hc3RpZnlfX2Nsb3NlLWJ1dHRvbic6IHtcbiAgICAgICAgICAgICAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmdiYSg0MiwgNDIsIDQyLCAwLjUpJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAnJjphY3RpdmUsJjpmb2N1cyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdyA6ICdpbnNldCAxcHggMXB4IDRweCByZ2IoNDIsIDQyLCA0MiknLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JnYmEoNDIsIDQyLCA0MiwgMC41KScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IENPTE9SUy5XSElURSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgJy5Ub2FzdGlmeV9fcHJvZ3Jlc3MtYmFyJzoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBDT0xPUlMuV0hJVEUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgICAgIHdpZHRoIDogJzEwMCUnLFxuICAgICAgICAgICAgdG9wICAgOiAnYXV0bycsXG4gICAgICAgICAgICByaWdodCA6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBsZWZ0ICA6IDAsXG5cbiAgICAgICAgICAgICcuVG9hc3RpZnlfX3RvYXN0LWNvbnRhaW5lcic6IHtcbiAgICAgICAgICAgICAgICB0b3AgICAgOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgcmlnaHQgIDogMCxcbiAgICAgICAgICAgICAgICBib3R0b20gOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQgICA6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcblxuICAgICAgICAgICAgICAgIHdpZHRoICAgOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICcuVG9hc3RpZnlfX3RvYXN0Jzoge1xuICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgIDogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nICAgICA6ICcyMHB4IDQwcHggMjBweCAyMHB4JyxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3cgICA6ICcwIDAgMnB4IDAgcmdiYSg0MiwgNDIsIDQyLCAwLjIpJyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGggICAgOiAnMTAwJScsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoVG9hc3RzQ29udGFpbmVyIGNsYXNzTmFtZT1cImFwaC10b2FzdHMtY29udGFpbmVyXCIgc3R5bGVzPXtwcm9wcy5zdHlsZXN9PlxuICAgICAgICAgICAgPFRvYXN0c1N0eWxlcyAvPlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICAgIGNsb3NlT25DbGljaz17cHJvcHMuY2xvc2VPbkNsaWNrIHx8IGZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9BcGhUb2FzdHNDb250YWluZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RzQ29udGFpbmVyO1xuIl19 */");

  return /*#__PURE__*/React.createElement(AphToastsContainer, {
    className: "aph-toasts-container",
    styles: props.styles
  }, /*#__PURE__*/React.createElement(ToastsStyles, null), /*#__PURE__*/React.createElement(ToastContainer, _extends({}, props, {
    closeOnClick: props.closeOnClick || false
  })));
};

toast.inverse = function (content, props) {
  if (content === void 0) {
    content = '';
  }

  if (props === void 0) {
    props = {};
  }

  return toast(content, _objectSpread2(_objectSpread2({}, props), {}, {
    className: 'Toastify__toast--inverse'
  }));
};

toast.black = toast.inverse;

function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$1 = process.env.NODE_ENV === "production" ? {
  name: "142v397-Flex",
  styles: "display:flex;;label:Flex;"
} : {
  name: "142v397-Flex",
  styles: "display:flex;;label:Flex;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXNCIiwiZmlsZSI6IkZsZXhTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgRmxleCA9ICgpID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgRmxleFdyYXAgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMuZmxleFdyYXB9O1xuYDtcblxuY29uc3QgQWxpZ25JdGVtcyA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduSXRlbXN9O1xuYDtcblxuY29uc3QgQWxpZ25Db250ZW50ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25Db250ZW50fTtcbmA7XG5cbmNvbnN0IEZsZXhEaXJlY3Rpb24gPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcy5mbGV4RGlyZWN0aW9ufTtcbmA7XG5cbmNvbnN0IEp1c3RpZnlDb250ZW50ZSA9IChwcm9wcykgPT4gY3NzYFxuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudH07XG5gO1xuXG4vKiBQcm9wZXJ0aWVzIGZvciB0aGUgQ2hpbGRyZW4gKi9cbmNvbnN0IE9yZGVyID0gKHByb3BzKSA9PiBjc3NgXG4gICAgb3JkZXI6ICR7cHJvcHMub3JkZXJ9O1xuYDtcblxuY29uc3QgRmxleEdyb3cgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMuZmxleEdyb3d9O1xuYDtcblxuY29uc3QgQWxpZ25TZWxmID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24tc2VsZjogJHtwcm9wcy5hbGlnblNlbGZ9O1xuYDtcblxuY29uc3QgRmxleFNocmluayA9IChwcm9wcykgPT4gY3NzYFxuICAgIGZsZXgtc2hyaW5rOiAke3Byb3BzLmZsZXhTaHJpbmt9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoRmxleCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4ICYmIChGbGV4KX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFdyYXAgICAgICAgJiYgKEZsZXhXcmFwKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduSXRlbXMgICAgICYmIChBbGlnbkl0ZW1zKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduQ29udGVudCAgICYmIChBbGlnbkNvbnRlbnQpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleERpcmVjdGlvbiAgJiYgKEZsZXhEaXJlY3Rpb24pfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuanVzdGlmeUNvbnRlbnQgJiYgKEp1c3RpZnlDb250ZW50ZSl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLm9yZGVyICAgICAgJiYgKE9yZGVyKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhHcm93ICAgJiYgKEZsZXhHcm93KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduU2VsZiAgJiYgKEFsaWduU2VsZil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4U2hyaW5rICYmIChGbGV4U2hyaW5rKX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRmxleDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};

var Flex = function Flex() {
  return _ref$1;
};

var FlexWrap = function FlexWrap(props) {
  return /*#__PURE__*/css("flex-wrap:", props.flexWrap, ";;label:FlexWrap;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUStCIiwiZmlsZSI6IkZsZXhTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgRmxleCA9ICgpID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgRmxleFdyYXAgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMuZmxleFdyYXB9O1xuYDtcblxuY29uc3QgQWxpZ25JdGVtcyA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduSXRlbXN9O1xuYDtcblxuY29uc3QgQWxpZ25Db250ZW50ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25Db250ZW50fTtcbmA7XG5cbmNvbnN0IEZsZXhEaXJlY3Rpb24gPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcy5mbGV4RGlyZWN0aW9ufTtcbmA7XG5cbmNvbnN0IEp1c3RpZnlDb250ZW50ZSA9IChwcm9wcykgPT4gY3NzYFxuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudH07XG5gO1xuXG4vKiBQcm9wZXJ0aWVzIGZvciB0aGUgQ2hpbGRyZW4gKi9cbmNvbnN0IE9yZGVyID0gKHByb3BzKSA9PiBjc3NgXG4gICAgb3JkZXI6ICR7cHJvcHMub3JkZXJ9O1xuYDtcblxuY29uc3QgRmxleEdyb3cgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMuZmxleEdyb3d9O1xuYDtcblxuY29uc3QgQWxpZ25TZWxmID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24tc2VsZjogJHtwcm9wcy5hbGlnblNlbGZ9O1xuYDtcblxuY29uc3QgRmxleFNocmluayA9IChwcm9wcykgPT4gY3NzYFxuICAgIGZsZXgtc2hyaW5rOiAke3Byb3BzLmZsZXhTaHJpbmt9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoRmxleCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4ICYmIChGbGV4KX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFdyYXAgICAgICAgJiYgKEZsZXhXcmFwKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduSXRlbXMgICAgICYmIChBbGlnbkl0ZW1zKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduQ29udGVudCAgICYmIChBbGlnbkNvbnRlbnQpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleERpcmVjdGlvbiAgJiYgKEZsZXhEaXJlY3Rpb24pfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuanVzdGlmeUNvbnRlbnQgJiYgKEp1c3RpZnlDb250ZW50ZSl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLm9yZGVyICAgICAgJiYgKE9yZGVyKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhHcm93ICAgJiYgKEZsZXhHcm93KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduU2VsZiAgJiYgKEFsaWduU2VsZil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4U2hyaW5rICYmIChGbGV4U2hyaW5rKX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRmxleDtcbiJdfQ== */"));
};

var AlignItems = function AlignItems(props) {
  return /*#__PURE__*/css("align-items:", props.alignItems, ";;label:AlignItems;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWlDIiwiZmlsZSI6IkZsZXhTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDb3JlIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgRmxleCA9ICgpID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgRmxleFdyYXAgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXdyYXA6ICR7cHJvcHMuZmxleFdyYXB9O1xuYDtcblxuY29uc3QgQWxpZ25JdGVtcyA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduSXRlbXN9O1xuYDtcblxuY29uc3QgQWxpZ25Db250ZW50ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24taXRlbXM6ICR7cHJvcHMuYWxpZ25Db250ZW50fTtcbmA7XG5cbmNvbnN0IEZsZXhEaXJlY3Rpb24gPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcy5mbGV4RGlyZWN0aW9ufTtcbmA7XG5cbmNvbnN0IEp1c3RpZnlDb250ZW50ZSA9IChwcm9wcykgPT4gY3NzYFxuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcy5qdXN0aWZ5Q29udGVudH07XG5gO1xuXG4vKiBQcm9wZXJ0aWVzIGZvciB0aGUgQ2hpbGRyZW4gKi9cbmNvbnN0IE9yZGVyID0gKHByb3BzKSA9PiBjc3NgXG4gICAgb3JkZXI6ICR7cHJvcHMub3JkZXJ9O1xuYDtcblxuY29uc3QgRmxleEdyb3cgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMuZmxleEdyb3d9O1xuYDtcblxuY29uc3QgQWxpZ25TZWxmID0gKHByb3BzKSA9PiBjc3NgXG4gICAgYWxpZ24tc2VsZjogJHtwcm9wcy5hbGlnblNlbGZ9O1xuYDtcblxuY29uc3QgRmxleFNocmluayA9IChwcm9wcykgPT4gY3NzYFxuICAgIGZsZXgtc2hyaW5rOiAke3Byb3BzLmZsZXhTaHJpbmt9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoRmxleCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4ICYmIChGbGV4KX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFdyYXAgICAgICAgJiYgKEZsZXhXcmFwKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduSXRlbXMgICAgICYmIChBbGlnbkl0ZW1zKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduQ29udGVudCAgICYmIChBbGlnbkNvbnRlbnQpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleERpcmVjdGlvbiAgJiYgKEZsZXhEaXJlY3Rpb24pfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuanVzdGlmeUNvbnRlbnQgJiYgKEp1c3RpZnlDb250ZW50ZSl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLm9yZGVyICAgICAgJiYgKE9yZGVyKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhHcm93ICAgJiYgKEZsZXhHcm93KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmFsaWduU2VsZiAgJiYgKEFsaWduU2VsZil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4U2hyaW5rICYmIChGbGV4U2hyaW5rKX07XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRmxleDtcbiJdfQ== */"));
};

var AlignContent = function AlignContent(props) {
  return /*#__PURE__*/css("align-items:", props.alignContent, ";;label:AlignContent;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JtQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));
};

var FlexDirection = function FlexDirection(props) {
  return /*#__PURE__*/css("flex-direction:", props.flexDirection, ";;label:FlexDirection;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));
};

var JustifyContente = function JustifyContente(props) {
  return /*#__PURE__*/css("justify-content:", props.justifyContent, ";;label:JustifyContente;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JzQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));
};

var Order = function Order(props) {
  return /*#__PURE__*/css("order:", props.order, ";;label:Order;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkI0QiIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));
};

var FlexGrow = function FlexGrow(props) {
  return /*#__PURE__*/css("flex-grow:", props.flexGrow, ";;label:FlexGrow;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUMrQiIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));
};

var AlignSelf = function AlignSelf(props) {
  return /*#__PURE__*/css("align-self:", props.alignSelf, ";;label:AlignSelf;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNnQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));
};

var FlexShrink = function FlexShrink(props) {
  return /*#__PURE__*/css("flex-shrink:", props.flexShrink, ";;label:FlexShrink;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNpQyIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));
};

var AphFlex = _styled("div", {
  target: "e1hpn6v50",
  label: "AphFlex"
})("box-sizing:border-box;", function (props) {
  return props.flex && Flex;
}, ";", function (props) {
  return props.flexWrap && FlexWrap;
}, ";", function (props) {
  return props.alignItems && AlignItems;
}, ";", function (props) {
  return props.alignContent && AlignContent;
}, ";", function (props) {
  return props.flexDirection && FlexDirection;
}, ";", function (props) {
  return props.justifyContent && JustifyContente;
}, ";", function (props) {
  return props.order && Order;
}, ";", function (props) {
  return props.flexGrow && FlexGrow;
}, ";", function (props) {
  return props.alignSelf && AlignSelf;
}, ";", function (props) {
  return props.flexShrink && FlexShrink;
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZsZXhTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEMwQiIsImZpbGUiOiJGbGV4U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IEZsZXggPSAoKSA9PiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IEZsZXhXcmFwID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC13cmFwOiAke3Byb3BzLmZsZXhXcmFwfTtcbmA7XG5cbmNvbnN0IEFsaWduSXRlbXMgPSAocHJvcHMpID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHtwcm9wcy5hbGlnbkl0ZW1zfTtcbmA7XG5cbmNvbnN0IEFsaWduQ29udGVudCA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke3Byb3BzLmFsaWduQ29udGVudH07XG5gO1xuXG5jb25zdCBGbGV4RGlyZWN0aW9uID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMuZmxleERpcmVjdGlvbn07XG5gO1xuXG5jb25zdCBKdXN0aWZ5Q29udGVudGUgPSAocHJvcHMpID0+IGNzc2BcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMuanVzdGlmeUNvbnRlbnR9O1xuYDtcblxuLyogUHJvcGVydGllcyBmb3IgdGhlIENoaWxkcmVuICovXG5jb25zdCBPcmRlciA9IChwcm9wcykgPT4gY3NzYFxuICAgIG9yZGVyOiAke3Byb3BzLm9yZGVyfTtcbmA7XG5cbmNvbnN0IEZsZXhHcm93ID0gKHByb3BzKSA9PiBjc3NgXG4gICAgZmxleC1ncm93OiAke3Byb3BzLmZsZXhHcm93fTtcbmA7XG5cbmNvbnN0IEFsaWduU2VsZiA9IChwcm9wcykgPT4gY3NzYFxuICAgIGFsaWduLXNlbGY6ICR7cHJvcHMuYWxpZ25TZWxmfTtcbmA7XG5cbmNvbnN0IEZsZXhTaHJpbmsgPSAocHJvcHMpID0+IGNzc2BcbiAgICBmbGV4LXNocmluazogJHtwcm9wcy5mbGV4U2hyaW5rfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaEZsZXggPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleCAmJiAoRmxleCl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhXcmFwICAgICAgICYmIChGbGV4V3JhcCl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkl0ZW1zICAgICAmJiAoQWxpZ25JdGVtcyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnbkNvbnRlbnQgICAmJiAoQWxpZ25Db250ZW50KX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmZsZXhEaXJlY3Rpb24gICYmIChGbGV4RGlyZWN0aW9uKX07XG4gICAgJHsocHJvcHMpID0+IHByb3BzLmp1c3RpZnlDb250ZW50ICYmIChKdXN0aWZ5Q29udGVudGUpfTtcblxuICAgICR7KHByb3BzKSA9PiBwcm9wcy5vcmRlciAgICAgICYmIChPcmRlcil9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5mbGV4R3JvdyAgICYmIChGbGV4R3Jvdyl9O1xuICAgICR7KHByb3BzKSA9PiBwcm9wcy5hbGlnblNlbGYgICYmIChBbGlnblNlbGYpfTtcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuZmxleFNocmluayAmJiAoRmxleFNocmluayl9O1xuXG4gICAgJHsocHJvcHMpID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZsZXg7XG4iXX0= */"));

function Flex$1(props) {
  var className = props.className;
  return /*#__PURE__*/React.createElement(AphFlex, _extends({}, props, {
    className: "aph-flex " + className
  }));
}

Flex$1.defaultProps = {
  className: '',
  flexWrap: '',
  alignSelf: '',
  alignItems: '',
  alignContent: '',
  flexDirection: '',
  justifyContent: '',
  order: '',
  flexGrow: '',
  flexShrink: '',
  styles: {}
};
Flex$1.propTypes = {
  className: propTypes.string,
  flexWrap: propTypes.string,
  alignSelf: propTypes.string,
  alignItems: propTypes.string,
  alignContent: propTypes.string,
  flexDirection: propTypes.string,
  justifyContent: propTypes.string,
  order: propTypes.oneOfType([propTypes.string, propTypes.number]),
  flexGrow: propTypes.oneOfType([propTypes.string, propTypes.number]),
  flexShrink: propTypes.oneOfType([propTypes.string, propTypes.number]),
  styles: propTypes.any
};

var H1Styled = _styled("h1", {
  target: "eu7lulg0",
  label: "H1Styled"
})("box-sizing:border-box;", function (props) {
  return text(props, 'XXL');
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkgxLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiSDEuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVXRpbHMgKi9cbmltcG9ydCB7IHRleHQgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEgxU3R5bGVkID0gc3R5bGVkLmgxYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAke3Byb3BzID0+IHRleHQocHJvcHMsICdYWEwnKX07XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBDb21wb25lbnQgSXRzZWxmICovXG5jb25zdCBIMSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY29sb3IsXG5cbiAgICAgICAgYWxpZ24sXG4gICAgICAgIGNlbnRlcixcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIGxvd2VyLFxuICAgICAgICB1cHBlcixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEgxU3R5bGVkXG4gICAgICAgICAgICB0ZXh0QWxpZ249e2FsaWdufVxuICAgICAgICAgICAgdGV4dENvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIHRleHRMZWZ0PXtsZWZ0fVxuICAgICAgICAgICAgdGV4dENlbnRlcj17Y2VudGVyfVxuICAgICAgICAgICAgdGV4dFJpZ2h0PXtyaWdodH1cbiAgICAgICAgICAgIHRleHRMb3dlcj17bG93ZXJ9XG4gICAgICAgICAgICB0ZXh0VXBwZXI9e3VwcGVyfVxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1oMSAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5IMS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGluayAgOiBmYWxzZSxcbiAgICBib2xkICA6IHRydWUsXG4gICAgY2VudGVyOiBmYWxzZSxcbiAgICB1cHBlciA6IGZhbHNlLFxuICAgIGhlbHBlcjogZmFsc2UsXG4gICAgbWFyZ2luOiAnMjVweCAwIDE1cHgnLFxuICAgIGNvbG9yIDogJycsXG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkgxLnByb3BUeXBlcyA9IHtcbiAgICBsaW5rICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGJvbGQgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgY2VudGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB1cHBlciA6IHByb3BUeXBlcy5ib29sLFxuICAgIGhlbHBlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFyZ2luOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBIMTtcbiJdfQ== */"));

var H1 = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      align = props.align,
      center = props.center,
      left = props.left,
      right = props.right,
      lower = props.lower,
      upper = props.upper,
      rest = _objectWithoutPropertiesLoose(props, ["className", "color", "align", "center", "left", "right", "lower", "upper"]);

  return /*#__PURE__*/React.createElement(H1Styled, _extends({
    textAlign: align,
    textColor: color,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper
  }, rest, {
    ref: ref,
    className: "aph-h1 " + (className || '')
  }));
});
H1.defaultProps = {
  link: false,
  bold: true,
  center: false,
  upper: false,
  helper: false,
  margin: '25px 0 15px',
  color: '',
  styles: {}
};
H1.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var selector$1 = '.aph-modal';

var ModalStyled = _styled("dialog", {
  target: "ert80wf0",
  label: "ModalStyled"
})("box-sizing:border-box;overflow:hidden;position:fixed;display:none;opacity:0;z-index:", ZINDEX.MODAL, ";width:auto;height:auto;top:40px;right:40px;bottom:0;left:40px;margin:0;padding:0 0 ", function (props) {
  return props.hasFooter ? SIZES.ACTION_BAR_HEIGHT : 0;
}, ";border:0;outline:0;transform:translateY(", function (props) {
  return props.opened ? '0' : '50%';
}, ");will-change:z-index,opacity,transform;transition:display ", function (props) {
  return props.opened ? 0.2 : 0.1;
}, "s linear,opacity ", function (props) {
  return props.opened ? 0.1 : 0.2;
}, "s linear,transform ", function (props) {
  return props.opened ? 0.2 : 0.1;
}, "s linear;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse');
}, ";box-shadow:0 0 10px 0 ", function (props) {
  return colors$1.getFromTheme(props, 'shadow');
}, ";border-radius:", SIZES.LG.RADIUS, " ", SIZES.LG.RADIUS, " 0 0;&.visible{display:block;}&.active{opacity:1;}*{box-sizing:border-box;}", selector$1, "{&__container{min-height:100%;max-height:100%;overflow:auto;&__title{padding:45px 0 15px;}&__header{padding-top:5px;padding-bottom:5px;}&__content{width:100%;}}&__footer{max-height:", SIZES.ACTION_BAR_HEIGHT, ";}}", function (props) {
  return props.styles;
}, ";", MEDIA_QUERIES.LT.SM, "{top:20px;right:10px;left:10px;", selector$1, "{&__container{&__title{padding:25px 0 15px;font-size:28px;line-height:30px;}&__header{padding-top:0;}}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsU3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQyIsImZpbGUiOiJNb2RhbFN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUywgU0laRVMsIFpJTkRFWCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENTUyBTZWxlY3RvciAqL1xuY29uc3Qgc2VsZWN0b3IgPSAnLmFwaC1tb2RhbCc7XG5cbi8qIE1vZGFsIFN0eWxlZCAqL1xuY29uc3QgTW9kYWxTdHlsZWQgPSBzdHlsZWQuZGlhbG9nYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheSA6IG5vbmU7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgei1pbmRleCA6ICR7WklOREVYLk1PREFMfTtcbiAgICB3aWR0aCAgIDogYXV0bztcbiAgICBoZWlnaHQgIDogYXV0bztcbiAgICB0b3AgICAgIDogNDBweDtcbiAgICByaWdodCAgIDogNDBweDtcbiAgICBib3R0b20gIDogMDtcbiAgICBsZWZ0ICAgIDogNDBweDtcbiAgICBtYXJnaW4gIDogMDtcbiAgICBwYWRkaW5nIDogMCAwICR7cHJvcHMgPT4gcHJvcHMuaGFzRm9vdGVyID8gU0laRVMuQUNUSU9OX0JBUl9IRUlHSFQgOiAwfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/ICcwJyA6ICc1MCUnfSk7XG5cbiAgICB3aWxsLWNoYW5nZTogei1pbmRleCwgb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb246XG4gICAgICAgIGRpc3BsYXkgJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjIgOiAwLjF9cyBsaW5lYXIsXG4gICAgICAgIG9wYWNpdHkgJHtwcm9wcyA9PiBwcm9wcy5vcGVuZWQgPyAwLjEgOiAwLjJ9cyBsaW5lYXIsXG4gICAgICAgIHRyYW5zZm9ybSAke3Byb3BzID0+IHByb3BzLm9wZW5lZCA/IDAuMiA6IDAuMX1zIGxpbmVhclxuICAgIDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2ludmVyc2UnKX07XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzaGFkb3cnKX07XG4gICAgYm9yZGVyLXJhZGl1czogJHtTSVpFUy5MRy5SQURJVVN9ICR7U0laRVMuTEcuUkFESVVTfSAwIDA7XG5cbiAgICAmLnZpc2libGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgJHtzZWxlY3Rvcn0ge1xuICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdyAgOiBhdXRvO1xuXG4gICAgICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNDVweCAwIDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2hlYWRlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3AgICA6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19jb250ZW50IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2Zvb3RlciB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAke1NJWkVTLkFDVElPTl9CQVJfSEVJR0hUfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcblxuICAgICR7TUVESUFfUVVFUklFUy5MVC5TTX0ge1xuICAgICAgICB0b3AgIDogMjBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGxlZnQgOiAxMHB4O1xuXG4gICAgICAgICR7c2VsZWN0b3J9IHtcbiAgICAgICAgICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDAgMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmX19oZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IE1vZGFsU3R5bGVkO1xuIl19 */"));

var ModalOverlayStyled = _styled("div", {
  target: "en0xu1l0",
  label: "ModalOverlayStyled"
})("position:fixed;z-index:", ZINDEX.MODAL - 1, ";top:", function (props) {
  return props.isOpened ? '0' : '100%';
}, ";right:0;bottom:0;left:0;opacity:", function (props) {
  return props.isOpened ? '1' : '0';
}, ";backdrop-filter:blur(2px);background-color:", colors$1.get('black', 'normal', 0.2), ";will-change:opacity top;transition:opacity 0.2s linear,top 0.", function (props) {
  return props.isOpened ? 1 : 4;
}, "s linear;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsT3ZlcmxheVN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVcUMiLCJmaWxlIjoiTW9kYWxPdmVybGF5U3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVXRpbGl0aWVzICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgWklOREVYIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogTW9kYWwgT3ZlcmxheSBTdHlsZXMgKi9cbmNvbnN0IE1vZGFsT3ZlcmxheVN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXggOiAke1pJTkRFWC5NT0RBTCAtIDF9O1xuICAgIHRvcCAgICAgOiAke3Byb3BzID0+IHByb3BzLmlzT3BlbmVkID8gJzAnIDogJzEwMCUnfTtcbiAgICByaWdodCAgIDogMDtcbiAgICBib3R0b20gIDogMDtcbiAgICBsZWZ0ICAgIDogMDtcbiAgICBvcGFjaXR5IDogJHtwcm9wcyA9PiBwcm9wcy5pc09wZW5lZCA/ICcxJyA6ICcwJ307XG5cbiAgICBiYWNrZHJvcC1maWx0ZXIgOiBibHVyKDJweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuZ2V0KCdibGFjaycsICdub3JtYWwnLCAwLjIpfTtcblxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5IHRvcDtcbiAgICB0cmFuc2l0aW9uIDpcbiAgICAgICAgb3BhY2l0eSAwLjJzIGxpbmVhcixcbiAgICAgICAgdG9wIDAuJHtwcm9wcyA9PiBwcm9wcy5pc09wZW5lZCA/IDEgOiA0fXMgbGluZWFyXG4gICAgO1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBNb2RhbE92ZXJsYXlTdHlsZWQ7XG4iXX0= */"));

function _EMOTION_STRINGIFIED_CSS_ERROR__$3() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref$2 = process.env.NODE_ENV === "production" ? {
  name: "5c9k6p-Modal",
  styles: "body{overflow:hidden;};label:Modal;"
} : {
  name: "5c9k6p-Modal",
  styles: "body{overflow:hidden;};label:Modal;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vZGFsLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTzJDIiwiZmlsZSI6Ik1vZGFsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgZm9yd2FyZFJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbi8qIEhlbHBlciBDb21wb25lbnRzICovXG5pbXBvcnQgQWN0aW9uQmFyIGZyb20gJy4uL0FjdGlvbkJhci9BY3Rpb25CYXInO1xuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleC9GbGV4JztcbmltcG9ydCBIMSBmcm9tICcuLi9UeXBvZ3JhcGh5L0gxL0gxJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuaW1wb3J0IE1vZGFsU3R5bGVkIGZyb20gJy4vTW9kYWxTdHlsZXMnO1xuaW1wb3J0IE1vZGFsT3ZlcmxheVN0eWxlZCBmcm9tICcuL01vZGFsT3ZlcmxheVN0eWxlcyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IE1vZGFsID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuXG4gICAgLyoqXG4gICAgICogR2xvYmFsIHByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyLFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyLFxuICAgIH0gPSB3aW5kb3c7XG5cbiAgICAvKipcbiAgICAgKiBJbmhlcml0IFByb3BzXG4gICAgICovXG4gICAgY29uc3Qge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjb250ZW50SnVzdGlmeSxcbiAgICAgICAgYWxpZ25JdGVtcyxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGZvb3RlcixcbiAgICAgICAgZm9vdGVyUHJvcHMsXG4gICAgICAgIG92ZXJsYXlQcm9wcyxcblxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIHN0eWxlcyxcblxuICAgICAgICBvcGVuZWQsXG4gICAgICAgIG9wZW5lZENhbGxiYWNrLFxuICAgICAgICBjbG9zZU9uRXNjYXBlLFxuICAgICAgICBjbG9zZUJ5RXNjYXBlLFxuICAgICAgICB1bmJsb2NrU2Nyb2xsaW5nLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvKipcbiAgICAgKiBTdGF0ZSB2YWx1ZXNcbiAgICAgKi9cbiAgICBjb25zdCBbIGFjdGl2ZSwgc2V0QWN0aXZlIF0gICAgICAgICAgICAgPSB1c2VTdGF0ZShvcGVuZWQpO1xuICAgIGNvbnN0IFsgdmlzaWJsZSwgc2V0VmlzaWJsZSBdICAgICAgICAgICA9IHVzZVN0YXRlKG9wZW5lZCk7XG4gICAgY29uc3QgWyB1bm1vdW50ZWQsIHNldFVubW91bnRlZCBdICAgICAgID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgYWN0aXZlVGltZXIsIHNldEFjdGl2ZVRpbWVyIF0gICA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFsgdmlzaWJsZVRpbWVyLCBzZXRWaXNpYmxlVGltZXIgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgLyoqXG4gICAgICogU3RhdGUgcmVmZXJlbmNlXG4gICAgICovXG4gICAgY29uc3QgbW9kYWxSZWYgPSB1c2VSZWYocmVmIHx8IG51bGwpO1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggY2xvc2UgYnkgZXNjYXBlIGtleVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2dCAtIERPTSBjbGljayBldmVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNsb3NlT25TY2FwZSAoZXZ0KSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBrZXlDb2RlIH0gPSAoZXZ0IHx8IHt9KTtcbiAgICAgICAgY29uc3QgaXNFc2NQcmVzc2VkICAgICA9ICgoa2V5ID09PSAnRXNjYXBlJykgfHwgKGtleSA9PT0gJ0VzYycpIHx8IChrZXlDb2RlID09PSAyNykpO1xuXG4gICAgICAgIGlmICghaXNFc2NQcmVzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZ0ICYmIGV2dC5zdG9wUHJvcGFnYXRpb24gJiZcbiAgICAgICAgICAgICh0eXBlb2YgZXZ0LnN0b3BQcm9wYWdhdGlvbiA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBFdmVudCBMaXN0ZW5lcnMgdG8gaGFuZGxlIHdpdGggbW9kYWwgdmlzaWJpbGl0eVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpc3RlbiAoKSB7XG4gICAgICAgIGlmIChjbG9zZU9uRXNjYXBlIHx8IGNsb3NlQnlFc2NhcGUpIHtcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVDbG9zZU9uU2NhcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50IExpc3RlbmVyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVubGlzdGVuICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZVRpbWVyKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUNsb3NlT25TY2FwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggRHJvcGRvd24gY2xvc2UgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldnQgLSBET00gY2xpY2sgZXZlbnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZShldnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHZpc2libGVUaW1lcik7XG5cbiAgICAgICAgaWYgKHVubW91bnRlZCB8fFxuICAgICAgICAgICAgKGV2dCAmJlxuICAgICAgICAgICAgZXZ0LnRhcmdldCAmJlxuICAgICAgICAgICAgbW9kYWxSZWYgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuY29udGFpbnMoZXZ0LnRhcmdldCkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICBzZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHNldFZpc2libGVUaW1lcihzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh1bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgb3BlbmVkQ2FsbGJhY2soZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAobW9kYWxSZWYgJiZcbiAgICAgICAgICAgICAgICBtb2RhbFJlZi5jdXJyZW50ICYmXG4gICAgICAgICAgICAgICAgbW9kYWxSZWYuY3VycmVudC5mb2N1cykge1xuICAgICAgICAgICAgICAgIG1vZGFsUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdpdGggRHJvcGRvd24gb3BlbiBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2dCAtIERPTSBjbGljayBldmVudFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhbmRsZU9wZW4oZXZ0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChhY3RpdmVUaW1lcik7XG5cbiAgICAgICAgaWYgKHVubW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2dCAmJiBldnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICBzZXRBY3RpdmVUaW1lcihzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh1bm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgIGxpc3RlbigpO1xuICAgICAgICB9LCA1MCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdhdGNoIGZvciBgb3BlbmVkYCBwcm9wIGNoYW5nZXNcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wZW5lZCB8fCBhY3RpdmUpIHtcbiAgICAgICAgICAgIGhhbmRsZU9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICB9LCBbIG9wZW5lZCBdKTtcblxuICAgIC8qKlxuICAgICAqIFVubW91bnRcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIHNldFVubW91bnRlZCh0cnVlKTtcbiAgICAgICAgICAgIHVubGlzdGVuKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPE1vZGFsT3ZlcmxheVN0eWxlZFxuICAgICAgICAgICAgICAgIGlzT3BlbmVkPXthY3RpdmUgJiYgdmlzaWJsZX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiAoY2xvc2VPbkVzY2FwZSB8fCBjbG9zZUJ5RXNjYXBlKSAmJiBoYW5kbGVDbG9zZShldnQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1tb2RhbC1vdmVybGF5JHthY3RpdmUgPyAnIGFjdGl2ZScgOiAnJ30ke3Zpc2libGUgPyAnIHZpc2libGUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICB7Li4ub3ZlcmxheVByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNb2RhbFN0eWxlZFxuICAgICAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgICAgIHJlZj17bW9kYWxSZWZ9XG4gICAgICAgICAgICAgICAgb3BlblxuICAgICAgICAgICAgICAgIG9wZW5lZD17YWN0aXZlICYmIHZpc2libGV9XG4gICAgICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgaGFzRm9vdGVyPXsoZm9vdGVyIHx8IE9iamVjdC5rZXlzKGZvb3RlclByb3BzKS5sZW5ndGgpID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1tb2RhbCAke2NsYXNzTmFtZSB8fCAnJ30ke2FjdGl2ZSA/ICcgYWN0aXZlJyA6ICcnfSR7dmlzaWJsZSA/ICcgdmlzaWJsZScgOiAnJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsoIWFjdGl2ZSB8fCAhdmlzaWJsZSkgPyAobnVsbCkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1bmJsb2NrU2Nyb2xsaW5nID8gKG51bGwpIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoIXRpdGxlKSA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEgxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJfX3RpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyghaGVhZGVyKSA/IChudWxsKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJhcGgtbW9kYWxfX2NvbnRhaW5lcl9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtjb250ZW50SnVzdGlmeSB8fCAnc3RhcnQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3sgZmxleDogMSwgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLW1vZGFsX19jb250YWluZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggc3R5bGVzPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QWN0aW9uQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZvb3RlclByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1tb2RhbF9fY29udGVudF9fZm9vdGVyICR7Zm9vdGVyUHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17Zm9vdGVyUHJvcHMudmlzaWJsZSB8fCAodHlwZW9mIGZvb3RlclByb3BzLnZpc2libGUgPT09ICd1bmRlZmluZWQnICYmIGZvb3RlciA/IHRydWUgOiBmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvb3RlclByb3BzLnN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAgOiAnMTBweCAwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnaW5pdGlhbCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY3Rpb25CYXI+XG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTW9kYWxTdHlsZWQ+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IHByb3BzICovXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGUgOiAnJyxcbiAgICBoZWFkZXI6IHVuZGVmaW5lZCxcblxuICAgIG9wZW5lZCAgICAgICAgICA6IGZhbHNlLFxuICAgIG9wZW5lZENhbGxiYWNrICA6ICgpID0+IHt9LFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IGZhbHNlLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogRmxleCBganVzdGlmeS1jb250ZW50YFxuICAgICAqIGZsZXgtc3RhcnQgfHwgY2VudGVyIHx8IGZsZXgtZW5kXG4gICAgICovXG4gICAgY29udGVudEp1c3RpZnk6ICdmbGV4LXN0YXJ0JyxcblxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZvb3RlclByb3BzOiB7fSxcbiAgICBzdHlsZXMgICAgIDoge30sXG5cbiAgICBvdmVybGF5UHJvcHM6IHt9LFxufTtcblxuLyogUHJvcCBUeXBlcyAqL1xuTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIHRpdGxlIDogUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5hbnksXG5cbiAgICBvcGVuZWQgICAgICAgICAgOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcGVuZWRDYWxsYmFjayAgOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsb3NlT25Fc2NhcGUgICA6IFByb3BUeXBlcy5ib29sLFxuICAgIHVuYmxvY2tTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgY29udGVudEp1c3RpZnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWxpZ25JdGVtczogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIG92ZXJsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$3
};

var Modal = /*#__PURE__*/forwardRef(function (props, ref) {
  var _window = window,
      addEventListener = _window.addEventListener,
      removeEventListener = _window.removeEventListener;

  var title = props.title,
      header = props.header,
      contentJustify = props.contentJustify,
      children = props.children,
      footer = props.footer,
      footerProps = props.footerProps,
      overlayProps = props.overlayProps,
      className = props.className,
      styles = props.styles,
      opened = props.opened,
      openedCallback = props.openedCallback,
      closeOnEscape = props.closeOnEscape,
      closeByEscape = props.closeByEscape,
      unblockScrolling = props.unblockScrolling,
      rest = _objectWithoutPropertiesLoose(props, ["title", "header", "contentJustify", "alignItems", "children", "footer", "footerProps", "overlayProps", "className", "styles", "opened", "openedCallback", "closeOnEscape", "closeByEscape", "unblockScrolling"]);

  var _useState = useState(opened),
      active = _useState[0],
      setActive = _useState[1];

  var _useState2 = useState(opened),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(false),
      unmounted = _useState3[0],
      setUnmounted = _useState3[1];

  var _useState4 = useState(null),
      activeTimer = _useState4[0],
      setActiveTimer = _useState4[1];

  var _useState5 = useState(null),
      visibleTimer = _useState5[0],
      setVisibleTimer = _useState5[1];

  var modalRef = useRef(ref || null);

  function handleCloseOnScape(evt) {
    var _ref2 = evt || {},
        key = _ref2.key,
        keyCode = _ref2.keyCode;

    var isEscPressed = key === 'Escape' || key === 'Esc' || keyCode === 27;

    if (!isEscPressed) {
      return;
    }

    if (evt && evt.stopPropagation && typeof evt.stopPropagation === 'function') {
      evt.stopPropagation();
    }

    handleClose();
    return;
  }

  function listen() {
    if (closeOnEscape || closeByEscape) {
      addEventListener('keydown', handleCloseOnScape);
    }
  }

  function unlisten() {
    clearTimeout(activeTimer);
    clearTimeout(visibleTimer);
    removeEventListener('keydown', handleCloseOnScape);
  }

  function handleClose(evt) {
    clearTimeout(visibleTimer);

    if (unmounted || evt && evt.target && modalRef && modalRef.current && modalRef.current.contains(evt.target)) {
      return;
    }

    unlisten();
    setActive(false);
    setVisible(true);
    setVisibleTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setVisible(false);
      openedCallback(false);

      if (modalRef && modalRef.current && modalRef.current.focus) {
        modalRef.current.focus();
      }
    }, 100));
  }

  function handleOpen(evt) {
    clearTimeout(activeTimer);

    if (unmounted) {
      return;
    }

    if (evt && evt.preventDefault) {
      evt.preventDefault();
    }

    setActive(false);
    setVisible(true);
    setActiveTimer(setTimeout(function () {
      if (unmounted) {
        return;
      }

      setActive(true);
      listen();
    }, 50));
  }

  useEffect(function () {
    if (!opened) {
      handleClose();
      unlisten();
      return function cleanup() {
        unlisten();
      };
    }

    if (opened || active) {
      handleOpen();
    }

    return function cleanup() {
      unlisten();
    };
  }, [opened]);
  useEffect(function () {
    return function cleanup() {
      setUnmounted(true);
      unlisten();
    };
  }, []);
  return /*#__PURE__*/React.createElement(Fragment$1, null, /*#__PURE__*/React.createElement(ModalOverlayStyled, _extends({
    isOpened: active && visible,
    onClick: function onClick(evt) {
      return (closeOnEscape || closeByEscape) && handleClose(evt);
    },
    className: "aph-modal-overlay" + (active ? ' active' : '') + (visible ? ' visible' : '')
  }, overlayProps)), /*#__PURE__*/React.createElement(ModalStyled, _extends({}, rest, {
    ref: modalRef,
    open: true,
    opened: active && visible,
    role: "dialog",
    styles: styles,
    hasFooter: footer || Object.keys(footerProps).length ? true : false,
    className: "aph-modal " + (className || '') + (active ? ' active' : '') + (visible ? ' visible' : '')
  }), !active || !visible ? null : /*#__PURE__*/React.createElement(Fragment$1, null, unblockScrolling ? null : /*#__PURE__*/React.createElement(Global, {
    styles: _ref$2
  }), /*#__PURE__*/React.createElement(Flex$1, {
    flex: true,
    flexDirection: "column",
    className: "aph-modal__container"
  }, !title ? null : /*#__PURE__*/React.createElement(H1, {
    bold: true,
    center: true,
    margin: "0",
    className: "aph-modal__container__title"
  }, title), !header ? null : /*#__PURE__*/React.createElement("header", {
    className: "aph-modal__container__header"
  }, header), /*#__PURE__*/React.createElement(Flex$1, {
    flex: true,
    alignItems: "center",
    justifyContent: contentJustify || 'start',
    styles: {
      flex: 1,
      width: '100%'
    },
    flexDirection: "column",
    className: "aph-modal__container__content"
  }, /*#__PURE__*/React.createElement(Flex$1, {
    styles: {
      width: '100%'
    }
  }, children))), /*#__PURE__*/React.createElement(ActionBar, _extends({}, footerProps, {
    className: "aph-modal__content__footer " + (footerProps.className || ''),
    visible: footerProps.visible || (typeof footerProps.visible === 'undefined' && footer ? true : false),
    styles: _objectSpread2(_objectSpread2({}, footerProps.styles), {}, {
      padding: '10px 0',
      minHeight: 'initial'
    })
  }), footer))));
});
Modal.defaultProps = {
  title: '',
  header: undefined,
  opened: false,
  openedCallback: function openedCallback() {},
  closeOnEscape: false,
  unblockScrolling: false,
  contentJustify: 'flex-start',
  alignItems: 'center',
  footerProps: {},
  styles: {},
  overlayProps: {}
};
Modal.propTypes = {
  title: propTypes.any,
  header: propTypes.any,
  opened: propTypes.bool,
  openedCallback: propTypes.func.isRequired,
  closeOnEscape: propTypes.bool,
  unblockScrolling: propTypes.bool,
  contentJustify: propTypes.string,
  alignItems: propTypes.string,
  overlayProps: propTypes.object
};

var SidePillStyled = _styled("aside", {
  target: "e1lt9sub0",
  label: "SidePillStyled"
})("box-sizing:border-box;display:flex;align-items:center;justify-content:", function (props) {
  return props.center ? 'center' : props.right ? 'flex-end' : 'flex-start';
}, ";min-width:70px;min-height:60px;padding:", function (props) {
  return props.right ? '0 15px 0 25px' : '0 20px';
}, ";position:absolute;top:10px;left:", function (props) {
  return props.center ? '50%' : props.right ? null : '-15%';
}, ";right:", function (props) {
  return props.right && !props.center ? '-15%' : null;
}, ";flex-direction:", function (props) {
  return props.right ? 'row-reverse' : null;
}, ";font-weight:500;font-size:20px;line-height:30px;color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'background');
}, ";box-shadow:0 0 5px 0 ", function (props) {
  return colors$1.getFromTheme(props, 'black', 'original', 0.25);
}, ";border-radius:", function (props) {
  return props.center ? '30px' : props.right ? '30px 0 0 30px' : '0 30px 30px 0';
}, ";transition:all 0.15s linear 0s;img{margin-left:", function (props) {
  return props.right ? 0 : '20px';
}, ";margin-right:", function (props) {
  return props.right ? '20px' : 0;
}, ";}.aph-sidepill{&__content,&__hoverable{display:flex;align-items:center;padding:0;margin:0;}}&:hover{left:", function (props) {
  return props.right ? null : '0';
}, ";right:", function (props) {
  return !props.right ? null : '0';
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpZGVQaWxsU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQyIsImZpbGUiOiJTaWRlUGlsbFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvcmUgUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQXBocm9kaXRlIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgU2lkZVBpbGxTdHlsZWQgPSBzdHlsZWQuYXNpZGVgXG4gICAgYm94LXNpemluZyAgICAgOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAgICBhbGlnbi1pdGVtcyAgICA6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMgPT4gcHJvcHMuY2VudGVyID8gJ2NlbnRlcicgOiBwcm9wcy5yaWdodCA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCd9O1xuICAgIG1pbi13aWR0aCAgICAgIDogNzBweDtcbiAgICBtaW4taGVpZ2h0ICAgICA6IDYwcHg7XG4gICAgcGFkZGluZyAgICAgICAgOiAke3Byb3BzID0+IHByb3BzLnJpZ2h0ID8gJzAgMTVweCAwIDI1cHgnIDogJzAgMjBweCd9O1xuXG4gICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICA6IDEwcHg7XG4gICAgbGVmdCAgICAgOiAke3Byb3BzID0+IChwcm9wcy5jZW50ZXIgPyAnNTAlJyA6IHByb3BzLnJpZ2h0ID8gbnVsbCA6ICctMTUlJyl9O1xuICAgIHJpZ2h0ICAgIDogJHtwcm9wcyA9PiAocHJvcHMucmlnaHQgJiYgIXByb3BzLmNlbnRlciA/ICctMTUlJyA6IG51bGwpfTtcblxuICAgIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IChwcm9wcy5yaWdodCA/ICdyb3ctcmV2ZXJzZScgOiBudWxsKX07XG5cbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZSAgOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuXG4gICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYWNrZ3JvdW5kJyl9O1xuICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCA1cHggMCAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcblxuICAgIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMuY2VudGVyID8gJzMwcHgnIDogcHJvcHMucmlnaHQgPyAnMzBweCAwIDAgMzBweCcgOiAnMCAzMHB4IDMwcHggMCd9O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGxpbmVhciAwcztcblxuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0IDogJHtwcm9wcyA9PiBwcm9wcy5yaWdodCA/IDAgOiAnMjBweCd9O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMucmlnaHQgPyAnMjBweCcgOiAwfTtcbiAgICB9XG5cbiAgICAuYXBoLXNpZGVwaWxsIHtcbiAgICAgICAgJl9fY29udGVudCxcbiAgICAgICAgJl9faG92ZXJhYmxlIHtcbiAgICAgICAgICAgIGRpc3BsYXkgICAgOiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbiA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgbGVmdCA6ICR7cHJvcHMgPT4gKHByb3BzLnJpZ2h0ICA/IG51bGwgOiAnMCcpfTtcbiAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKCFwcm9wcy5yaWdodCA/IG51bGwgOiAnMCcpfTtcbiAgICB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFNpZGVQaWxsU3R5bGVkO1xuIl19 */"));

var SidePill = /*#__PURE__*/memo(function (props) {
  var className = props.className,
      children = props.children,
      right = props.right,
      hoverable = props.hoverable;
  return /*#__PURE__*/React.createElement(SidePillStyled, _extends({}, props, {
    className: "aph-sidepill " + (className || '')
  }), !hoverable ? null : /*#__PURE__*/React.createElement("span", {
    className: "aph-sidepill__hoverable " + (right ? 'aph-sidepill__hoverable--right' : '')
  }, hoverable), /*#__PURE__*/React.createElement("span", {
    className: "aph-sidepill__content"
  }, children));
});
SidePill.defaultProps = {
  right: false
};
SidePill.propTypes = {
  right: propTypes.bool
};

var AStyled = _styled("a", {
  target: "e1o4tksj0",
  label: "AStyled"
})("box-sizing:border-box;cursor:pointer;text-decoration:none;", function (props) {
  return textColorfull(props);
}, ";border:0;outline:0;&:active,&:focus,&:hover,&:visited{border:0;outline:0;color:", function (props) {
  return props.textColor || null;
}, ";}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkEuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QiIsImZpbGUiOiJBLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IHRleHRDb2xvcmZ1bGwgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFTdHlsZWQgPSBzdHlsZWQuYWBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgY3Vyc29yICAgICAgICAgOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICR7cHJvcHMgPT4gdGV4dENvbG9yZnVsbChwcm9wcyl9O1xuXG4gICAgYm9yZGVyIDogMDtcbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyxcbiAgICAmOmhvdmVyLFxuICAgICY6dmlzaXRlZCB7XG4gICAgICAgIGJvcmRlciA6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGNvbG9yICA6ICR7KHByb3BzKSA9PiBwcm9wcy50ZXh0Q29sb3IgfHwgbnVsbH07XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQSA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY29sb3IsXG5cbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBU3R5bGVkXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgdGV4dENvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1hICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkEuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmsgIDogZmFsc2UsXG4gICAgYm9sZCAgOiBmYWxzZSxcbiAgICBjZW50ZXI6IGZhbHNlLFxuICAgIHVwcGVyIDogZmFsc2UsXG4gICAgc21hbGwgOiBmYWxzZSxcbiAgICBoZWxwZXI6IGZhbHNlLFxuICAgIGNvbG9yIDogJ2xpbmsnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5BLnByb3BUeXBlcyA9IHtcbiAgICBsaW5rICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGJvbGQgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgY2VudGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB1cHBlciA6IHByb3BUeXBlcy5ib29sLFxuICAgIGhlbHBlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFyZ2luOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBO1xuIl19 */"));

var A$1 = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      rest = _objectWithoutPropertiesLoose(props, ["className", "color"]);

  return /*#__PURE__*/React.createElement(AStyled, _extends({}, rest, {
    ref: ref,
    textColor: color,
    className: "aph-a " + (className || '')
  }));
});
A$1.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  small: false,
  helper: false,
  color: 'link',
  styles: {}
};
A$1.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var H2Styled = _styled("h2", {
  target: "e5uw5ft0",
  label: "H2Styled"
})("box-sizing:border-box;", function (props) {
  return text(props, 'XL');
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkgyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiSDIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVXRpbHMgKi9cbmltcG9ydCB7IHRleHQgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEgyU3R5bGVkID0gc3R5bGVkLmgyYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAke3Byb3BzID0+IHRleHQocHJvcHMsICdYTCcpfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEgyID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgYWxpZ24sXG4gICAgICAgIGNlbnRlcixcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIGxvd2VyLFxuICAgICAgICB1cHBlcixcbiAgICAgICAgLi4ucmVzdFxuICAgIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxIMlN0eWxlZFxuICAgICAgICAgICAgdGV4dEFsaWduPXthbGlnbn1cbiAgICAgICAgICAgIHRleHRMZWZ0PXtsZWZ0fVxuICAgICAgICAgICAgdGV4dENlbnRlcj17Y2VudGVyfVxuICAgICAgICAgICAgdGV4dFJpZ2h0PXtyaWdodH1cbiAgICAgICAgICAgIHRleHRMb3dlcj17bG93ZXJ9XG4gICAgICAgICAgICB0ZXh0VXBwZXI9e3VwcGVyfVxuICAgICAgICAgICAgdGV4dENvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtaDIgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuSDIuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpbmsgIDogZmFsc2UsXG4gICAgYm9sZCAgOiB0cnVlLFxuICAgIGNlbnRlcjogZmFsc2UsXG4gICAgdXBwZXIgOiBmYWxzZSxcbiAgICBoZWxwZXI6IGZhbHNlLFxuICAgIG1hcmdpbjogJzI1cHggMCAxNXB4JyxcbiAgICBjb2xvciA6ICcnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5IMi5wcm9wVHlwZXMgPSB7XG4gICAgbGluayAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGNlbnRlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgdXBwZXIgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWxwZXI6IHByb3BUeXBlcy5ib29sLFxuICAgIG1hcmdpbjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvciA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgcHJvcFR5cGVzLm9iamVjdCxcbiAgICBdKSxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgSDI7XG4iXX0= */"));

var H2 = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      align = props.align,
      center = props.center,
      left = props.left,
      right = props.right,
      lower = props.lower,
      upper = props.upper,
      rest = _objectWithoutPropertiesLoose(props, ["className", "color", "align", "center", "left", "right", "lower", "upper"]);

  return /*#__PURE__*/React.createElement(H2Styled, _extends({
    textAlign: align,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper,
    textColor: color
  }, rest, {
    ref: ref,
    className: "aph-h2 " + (className || '')
  }));
});
H2.defaultProps = {
  link: false,
  bold: true,
  center: false,
  upper: false,
  helper: false,
  margin: '25px 0 15px',
  color: '',
  styles: {}
};
H2.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var H3Styled = _styled("h3", {
  target: "eabywip0",
  label: "H3Styled"
})("box-sizing:border-box;", function (props) {
  return text(props, 'LG');
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkgzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTMEIiLCJmaWxlIjoiSDMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVXRpbHMgKi9cbmltcG9ydCB7IHRleHQgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEgzU3R5bGVkID0gc3R5bGVkLmgzYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAke3Byb3BzID0+IHRleHQocHJvcHMsICdMRycpfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEgzID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjb2xvcixcblxuICAgICAgICBhbGlnbixcbiAgICAgICAgY2VudGVyLFxuICAgICAgICBsZWZ0LFxuICAgICAgICByaWdodCxcbiAgICAgICAgbG93ZXIsXG4gICAgICAgIHVwcGVyLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SDNTdHlsZWRcbiAgICAgICAgICAgIHRleHRBbGlnbj17YWxpZ259XG4gICAgICAgICAgICB0ZXh0TGVmdD17bGVmdH1cbiAgICAgICAgICAgIHRleHRDZW50ZXI9e2NlbnRlcn1cbiAgICAgICAgICAgIHRleHRSaWdodD17cmlnaHR9XG4gICAgICAgICAgICB0ZXh0TG93ZXI9e2xvd2VyfVxuICAgICAgICAgICAgdGV4dFVwcGVyPXt1cHBlcn1cbiAgICAgICAgICAgIHRleHRDb2xvcj17Y29sb3J9XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWgzICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgIC8+XG4gICAgKTtcbn0pO1xuXG4vKiBEZWZhdWx0IFByb3BlcnRpZXMgKi9cbkgzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBsaW5rICAgICAgOiBmYWxzZSxcbiAgICBib2xkICAgICAgOiBmYWxzZSxcbiAgICBjZW50ZXIgICAgOiBmYWxzZSxcbiAgICB1cHBlciAgICAgOiBmYWxzZSxcbiAgICBoZWxwZXIgICAgOiBmYWxzZSxcbiAgICBtYXJnaW4gICAgOiAnMTVweCAwIDVweCcsXG4gICAgY29sb3IgICAgIDogJycsXG4gICAgc3R5bGVzICAgIDoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5IMy5wcm9wVHlwZXMgPSB7XG4gICAgZm9udFdlaWdodDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaW5rICAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib2xkICAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBjZW50ZXIgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB1cHBlciAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBoZWxwZXIgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBtYXJnaW4gICAgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yICAgICA6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGVzICAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEgzO1xuIl19 */"));

var H3 = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      align = props.align,
      center = props.center,
      left = props.left,
      right = props.right,
      lower = props.lower,
      upper = props.upper,
      rest = _objectWithoutPropertiesLoose(props, ["className", "color", "align", "center", "left", "right", "lower", "upper"]);

  return /*#__PURE__*/React.createElement(H3Styled, _extends({
    textAlign: align,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper,
    textColor: color
  }, rest, {
    ref: ref,
    className: "aph-h3 " + (className || '')
  }));
});
H3.defaultProps = {
  fontWeight: 'normal',
  link: false,
  bold: false,
  center: false,
  upper: false,
  helper: false,
  margin: '15px 0 5px',
  color: '',
  styles: {}
};
H3.propTypes = {
  fontWeight: propTypes.string,
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var PStyled = _styled("p", {
  target: "e1qbu1zn0",
  label: "PStyled"
})("box-sizing:border-box;", function (props) {
  return text(props, props.textSmall ? 'SM' : 'MD');
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QiIsImZpbGUiOiJQLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFV0aWxzICovXG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBQU3R5bGVkID0gc3R5bGVkLnBgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICR7cHJvcHMgPT4gdGV4dChwcm9wcywgcHJvcHMudGV4dFNtYWxsID8gJ1NNJyA6ICdNRCcpfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IFAgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGNvbG9yLFxuXG4gICAgICAgIGFsaWduLFxuICAgICAgICBjZW50ZXIsXG4gICAgICAgIGxlZnQsXG4gICAgICAgIHJpZ2h0LFxuICAgICAgICBsb3dlcixcbiAgICAgICAgdXBwZXIsXG4gICAgICAgIHNtYWxsLFxuXG4gICAgICAgIC4uLnJlc3RcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UFN0eWxlZFxuICAgICAgICAgICAgdGV4dEFsaWduPXthbGlnbn1cbiAgICAgICAgICAgIHRleHRMZWZ0PXtsZWZ0fVxuICAgICAgICAgICAgdGV4dENlbnRlcj17Y2VudGVyfVxuICAgICAgICAgICAgdGV4dFJpZ2h0PXtyaWdodH1cbiAgICAgICAgICAgIHRleHRMb3dlcj17bG93ZXJ9XG4gICAgICAgICAgICB0ZXh0VXBwZXI9e3VwcGVyfVxuICAgICAgICAgICAgdGV4dENvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIHRleHRTbWFsbD17c21hbGx9XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLXAgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuUC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGluayAgOiBmYWxzZSxcbiAgICBib2xkICA6IGZhbHNlLFxuICAgIGNlbnRlcjogZmFsc2UsXG4gICAgdXBwZXIgOiBmYWxzZSxcbiAgICBzbWFsbCA6IGZhbHNlLFxuICAgIGhlbHBlcjogZmFsc2UsXG4gICAgbWFyZ2luOiAnMTBweCAwJyxcbiAgICBjb2xvciA6ICcnLFxuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5QLnByb3BUeXBlcyA9IHtcbiAgICBsaW5rICA6IHByb3BUeXBlcy5ib29sLFxuICAgIGJvbGQgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgY2VudGVyOiBwcm9wVHlwZXMuYm9vbCxcbiAgICB1cHBlciA6IHByb3BUeXBlcy5ib29sLFxuICAgIGhlbHBlcjogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWFyZ2luOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBQO1xuIl19 */"));

var P$1 = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      align = props.align,
      center = props.center,
      left = props.left,
      right = props.right,
      lower = props.lower,
      upper = props.upper,
      small = props.small,
      rest = _objectWithoutPropertiesLoose(props, ["className", "color", "align", "center", "left", "right", "lower", "upper", "small"]);

  return /*#__PURE__*/React.createElement(PStyled, _extends({
    textAlign: align,
    textLeft: left,
    textCenter: center,
    textRight: right,
    textLower: lower,
    textUpper: upper,
    textColor: color,
    textSmall: small
  }, rest, {
    ref: ref,
    className: "aph-p " + (className || '')
  }));
});
P$1.defaultProps = {
  link: false,
  bold: false,
  center: false,
  upper: false,
  small: false,
  helper: false,
  margin: '10px 0',
  color: '',
  styles: {}
};
P$1.propTypes = {
  link: propTypes.bool,
  bold: propTypes.bool,
  center: propTypes.bool,
  upper: propTypes.bool,
  helper: propTypes.bool,
  margin: propTypes.string,
  color: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function Label(_ref) {
  var className = _ref.className,
      styles = _ref.styles,
      rest = _objectWithoutPropertiesLoose(_ref, ["className", "styles"]);

  return /*#__PURE__*/React.createElement(P$1, _extends({
    bold: true,
    upper: true,
    margin: "5px 0",
    color: "helper",
    as: "label",
    textSmall: true,
    className: "aph-label " + (className || ''),
    styles: Object.assign({
      display: 'block'
    }, styles || {})
  }, rest));
}

var AphContainer = /*#__PURE__*/_styled('div', {
  target: "ebf4xu40",
  label: "AphContainer"
})(function (props) {
  var _objectSpread2$1;

  return _objectSpread2((_objectSpread2$1 = {
    boxSizing: 'border-box',
    display: 'block',
    margin: '0 auto',
    padding: props.noPadding ? 0 : "0 " + (GRID.CONTAINER_PADDING + GRID.UNIT),
    width: '100%',
    maxWidth: props.maxWidth || (props.fluid ? '100%' : props.xs ? GRID.CONTAINER.XS + GRID.UNIT : props.sm ? GRID.CONTAINER.SM + GRID.UNIT : props.md ? GRID.CONTAINER.MD + GRID.UNIT : props.xl ? GRID.CONTAINER.XL + GRID.UNIT : GRID.CONTAINER.LG + GRID.UNIT)
  }, _objectSpread2$1[MEDIA_QUERIES.LT.SM] = {
    paddingRight: props.noPadding ? 0 : GRID.CONTAINER_PADDING_XS + GRID.UNIT,
    paddingLeft: props.noPadding ? 0 : GRID.CONTAINER_PADDING_XS + GRID.UNIT
  }, _objectSpread2$1), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRhaW5lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3FCIiwiZmlsZSI6IkNvbnRhaW5lci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKiBDb25zdGFudHMgKi9cbmltcG9ydCB7IEdSSUQsIE1FRElBX1FVRVJJRVMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG4vKiBXcmFwcGVyIHN0eWxlcyAqL1xuY29uc3QgQXBoQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnKShwcm9wcyA9PiAoe1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGRpc3BsYXkgIDogJ2Jsb2NrJyxcbiAgICBtYXJnaW4gICA6ICcwIGF1dG8nLFxuICAgIHBhZGRpbmcgIDogIChwcm9wcy5ub1BhZGRpbmcgPyAwIDogYDAgJHsoR1JJRC5DT05UQUlORVJfUEFERElORyArIEdSSUQuVU5JVCl9YCksXG4gICAgd2lkdGggICAgOiAnMTAwJScsXG5cbiAgICBtYXhXaWR0aCA6IChwcm9wcy5tYXhXaWR0aCB8fCAoXG4gICAgICAgIChwcm9wcy5mbHVpZCA/ICcxMDAlJyA6XG4gICAgICAgICAgICAocHJvcHMueHMgPyAoR1JJRC5DT05UQUlORVIuWFMgKyBHUklELlVOSVQpIDpcbiAgICAgICAgICAgICAgICAocHJvcHMuc20gPyAoR1JJRC5DT05UQUlORVIuU00gKyBHUklELlVOSVQpIDpcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLm1kID8gKEdSSUQuQ09OVEFJTkVSLk1EICsgR1JJRC5VTklUKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAocHJvcHMueGwgPyAoR1JJRC5DT05UQUlORVIuWEwgKyBHUklELlVOSVQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoR1JJRC5DT05UQUlORVIuTEcgKyBHUklELlVOSVQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICApKSxcblxuICAgIFtNRURJQV9RVUVSSUVTLkxULlNNXToge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IChwcm9wcy5ub1BhZGRpbmcgPyAwIDogKEdSSUQuQ09OVEFJTkVSX1BBRERJTkdfWFMgKyBHUklELlVOSVQpKSxcbiAgICAgICAgcGFkZGluZ0xlZnQgOiAocHJvcHMubm9QYWRkaW5nID8gMCA6IChHUklELkNPTlRBSU5FUl9QQURESU5HX1hTICsgR1JJRC5VTklUKSksXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50IGl0IHNlbGYgKi9cbmNvbnN0IENvbnRhaW5lciA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoQ29udGFpbmVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jb250YWluZXIgJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQXBoQ29udGFpbmVyPlxuICAgICk7XG59KTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgICB4cyAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHNtICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgbWQgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBsZyAgICA6IHByb3BUeXBlcy5ib29sLFxuICAgIHhsICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgZmx1aWQgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxuXG4gICAgbm9QYWRkaW5nOiBwcm9wVHlwZXMuYm9vbCxcbn07XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXMgICA6IHt9LFxuICAgIG5vUGFkZGluZzogZmFsc2UsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdfQ== */");

var Container = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AphContainer, _extends({}, props, {
    ref: ref,
    className: "aph-container " + (props.className || '')
  }), props.children);
});
Container.propTypes = {
  xs: propTypes.bool,
  sm: propTypes.bool,
  md: propTypes.bool,
  lg: propTypes.bool,
  xl: propTypes.bool,
  fluid: propTypes.bool,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  noPadding: propTypes.bool
};
Container.defaultProps = {
  styles: {},
  noPadding: false
};

var MARGIN = '-' + GRID.COLUMNS_PADDING + GRID.UNIT;

var RowWrapper = /*#__PURE__*/_styled('div', {
  target: "er9oyyw0",
  label: "RowWrapper"
})(function (props) {
  var vertical = props.vertical,
      horizontal = props.horizontal,
      reverse = props.reverse,
      styles = props.styles;
  var _extraStyles = {};

  if (horizontal) {
    if (horizontal === 'center' || horizontal === 'middle') {
      _extraStyles = {
        WebkitBoxPack: 'center',
        MsFlexPack: 'center',
        justifyContent: 'center'
      };
    } else {
      _extraStyles = {
        WebkitBoxPack: horizontal,
        MsFlexPack: horizontal,
        justifyContent: "flex-" + horizontal
      };
    }
  }

  if (vertical) {
    if (vertical === 'center' || vertical === 'middle') {
      _extraStyles = Object.assign(_extraStyles, {
        WebkitBoxAlign: 'center',
        MsFlexAlign: 'center',
        alignItems: 'center'
      });
    } else {
      _extraStyles = Object.assign(_extraStyles, {
        WebkitBoxAlign: vertical,
        MsFlexAlign: vertical,
        alignItems: "flex-" + vertical
      });
    }
  }

  return _objectSpread2(_objectSpread2({
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flex: '0 1 auto',
    flexWrap: 'wrap',
    marginRight: MARGIN,
    marginLeft: MARGIN,
    flexDirection: reverse ? 'row-reverse' : 'row',
    '&:before, &:after': {
      clear: 'both'
    }
  }, styles), _extraStyles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJvdy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWW1CIiwiZmlsZSI6IlJvdy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgSGVscGVycyAqL1xuaW1wb3J0IHsgR1JJRCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIFNpemVzICovXG5jb25zdCBNQVJHSU4gPSAoJy0nICsgR1JJRC5DT0xVTU5TX1BBRERJTkcgKyBHUklELlVOSVQpO1xuXG4vKiBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgUm93V3JhcHBlciA9IHN0eWxlZCgnZGl2JykoKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICB2ZXJ0aWNhbCxcbiAgICAgICAgaG9yaXpvbnRhbCxcblxuICAgICAgICByZXZlcnNlLFxuICAgICAgICBzdHlsZXMsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgbGV0IF9leHRyYVN0eWxlcyA9IHt9O1xuXG4gICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgaWYgKGhvcml6b250YWwgPT09ICdjZW50ZXInIHx8IGhvcml6b250YWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICAgICAgICBfZXh0cmFTdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgV2Via2l0Qm94UGFjayA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIE1zRmxleFBhY2sgICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfZXh0cmFTdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgV2Via2l0Qm94UGFjayA6IGhvcml6b250YWwsXG4gICAgICAgICAgICAgICAgTXNGbGV4UGFjayAgICA6IGhvcml6b250YWwsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IGBmbGV4LSR7aG9yaXpvbnRhbH1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBpZiAodmVydGljYWwgPT09ICdjZW50ZXInIHx8IHZlcnRpY2FsID09PSAnbWlkZGxlJykge1xuICAgICAgICAgICAgX2V4dHJhU3R5bGVzID0gT2JqZWN0LmFzc2lnbihfZXh0cmFTdHlsZXMsIHtcbiAgICAgICAgICAgICAgICBXZWJraXRCb3hBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgTXNGbGV4QWxpZ24gICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXMgICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfZXh0cmFTdHlsZXMgPSBPYmplY3QuYXNzaWduKF9leHRyYVN0eWxlcywge1xuICAgICAgICAgICAgICAgIFdlYmtpdEJveEFsaWduOiB2ZXJ0aWNhbCxcbiAgICAgICAgICAgICAgICBNc0ZsZXhBbGlnbiAgIDogdmVydGljYWwsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcyAgICA6IGBmbGV4LSR7dmVydGljYWx9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm94U2l6aW5nICAgIDogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwb3NpdGlvbiAgICAgOiAncmVsYXRpdmUnLFxuICAgICAgICBkaXNwbGF5ICAgICAgOiAnZmxleCcsXG4gICAgICAgIGZsZXggICAgICAgICA6ICcwIDEgYXV0bycsXG4gICAgICAgIGZsZXhXcmFwICAgICA6ICd3cmFwJyxcblxuICAgICAgICBtYXJnaW5SaWdodDogTUFSR0lOLFxuICAgICAgICBtYXJnaW5MZWZ0IDogTUFSR0lOLFxuXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IHJldmVyc2UgPyAncm93LXJldmVyc2UnIDogJ3JvdycsXG5cbiAgICAgICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgICAgICAgY2xlYXI6ICdib3RoJyxcbiAgICAgICAgfSxcblxuICAgICAgICAuLi5zdHlsZXMsXG5cbiAgICAgICAgLi4uX2V4dHJhU3R5bGVzLFxuICAgIH07XG59KTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBSb3cgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3dXcmFwcGVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1yb3cgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUm93V3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cblJvdy5wcm9wVHlwZXMgPSB7XG4gICAgdmVydGljYWwgIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBob3Jpem9udGFsOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlcyAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5Sb3cuZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlcyAgICA6IHt9LFxuICAgIHZlcnRpY2FsICA6ICdtaWRkbGUnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0Jyxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgUm93O1xuIl19 */");

var Row = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children;
  return /*#__PURE__*/React.createElement(RowWrapper, _extends({}, props, {
    ref: ref,
    className: "aph-row " + (className || '')
  }), children);
});
Row.propTypes = {
  vertical: propTypes.string,
  horizontal: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};
Row.defaultProps = {
  styles: {},
  vertical: 'middle',
  horizontal: 'left'
};

var ColStyled = /*#__PURE__*/_styled('div', {
  target: "eres4i10",
  label: "ColStyled"
})(function (props) {
  var _objectSpread2$1;

  var _ref = props || {},
      gridWidth = _ref.gridWidth,
      gridStyles = _ref.gridStyles,
      gridFirst = _ref.gridFirst,
      gridLast = _ref.gridLast,
      gridXS = _ref.gridXS,
      gridXXS = _ref.gridXXS,
      gridSM = _ref.gridSM,
      gridMD = _ref.gridMD,
      gridLG = _ref.gridLG,
      gridXL = _ref.gridXL;

  var ORDER = gridFirst === 'xxs' || gridFirst === 'xs' ? -1 : gridLast === 'xxs' || gridLast === 'xs' ? 1 : null;

  function getOrder(size) {
    if (size === void 0) {
      size = 'xs';
    }

    return gridFirst === size ? -1 : gridLast === size ? 1 : null;
  }

  return _objectSpread2(_objectSpread2({
    boxSizing: 'border-box',
    flex: '0 0 auto',
    flexGrow: 1,
    flexDirection: 'column',
    order: ORDER,
    paddingRight: GRID.COLUMNS_PADDING,
    paddingLeft: GRID.COLUMNS_PADDING,
    flexBasis: gridWidth || GRID.COLUMNS_GET_WIDTH(gridXXS || gridXS) || null,
    maxWidth: gridWidth || GRID.COLUMNS_GET_WIDTH(gridXXS || gridXS) || null
  }, gridStyles), {}, (_objectSpread2$1 = {}, _objectSpread2$1[MEDIA_QUERIES.LT.SM] = {
    flexBasis: GRID.COLUMNS_GET_WIDTH(gridXS),
    maxWidth: GRID.COLUMNS_GET_WIDTH(gridXS),
    order: getOrder('xs')
  }, _objectSpread2$1[MEDIA_QUERIES.GT.SM] = {
    flexBasis: GRID.COLUMNS_GET_WIDTH(gridSM),
    maxWidth: GRID.COLUMNS_GET_WIDTH(gridSM),
    order: getOrder('sm')
  }, _objectSpread2$1[MEDIA_QUERIES.GT.MD] = {
    flexBasis: GRID.COLUMNS_GET_WIDTH(gridMD),
    maxWidth: GRID.COLUMNS_GET_WIDTH(gridMD),
    order: getOrder('md')
  }, _objectSpread2$1[MEDIA_QUERIES.GT.LG] = {
    flexBasis: GRID.COLUMNS_GET_WIDTH(gridLG),
    maxWidth: GRID.COLUMNS_GET_WIDTH(gridLG),
    order: getOrder('lg')
  }, _objectSpread2$1[MEDIA_QUERIES.GT.XL] = {
    flexBasis: GRID.COLUMNS_GET_WIDTH(gridXL),
    maxWidth: GRID.COLUMNS_GET_WIDTH(gridXL),
    order: getOrder('xl')
  }, _objectSpread2$1));
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbHVtbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2tCIiwiZmlsZSI6IkNvbHVtbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBDb25zdGFudHMgSGVscGVycyAqL1xuaW1wb3J0IHsgR1JJRCwgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IENvbFN0eWxlZCA9IHN0eWxlZCgnZGl2JykoKHByb3BzKSA9PiB7XG4gICAgLyoqXG4gICAgICogSW5oZXJpdCBwcm9wc1xuICAgICAqL1xuICAgIGNvbnN0IHtcbiAgICAgICAgZ3JpZFdpZHRoLFxuICAgICAgICBncmlkU3R5bGVzLFxuXG4gICAgICAgIGdyaWRGaXJzdCxcbiAgICAgICAgZ3JpZExhc3QsXG5cbiAgICAgICAgZ3JpZFhTLFxuICAgICAgICBncmlkWFhTLFxuICAgICAgICBncmlkU00sXG4gICAgICAgIGdyaWRNRCxcbiAgICAgICAgZ3JpZExHLFxuICAgICAgICBncmlkWEwsXG4gICAgfSA9IChwcm9wcyB8fCB7fSk7XG5cbiAgICAvKipcbiAgICAgKiBPcmRlclxuICAgICAqL1xuICAgIGNvbnN0IE9SREVSID0gKFxuICAgICAgICAoZ3JpZEZpcnN0ID09PSAneHhzJyB8fCBncmlkRmlyc3QgPT09ICd4cycpID8gLTEgOiAoXG4gICAgICAgICAgICAoZ3JpZExhc3QgPT09ICd4eHMnIHx8IGdyaWRMYXN0ID09PSAneHMnKSA/IDEgOiBudWxsXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgLyoqXG4gICAgICogR2V0IENTUyBGbGV4IG9yZGVyIHByb3BlcnR5LCBiYXNlZCBvbiBDb21wb25lbnQgUHJvcFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNpemVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRPcmRlciAoc2l6ZSA9ICd4cycpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChncmlkRmlyc3QgPT09IHNpemUpID8gLTEgOiAoXG4gICAgICAgICAgICAgICAgKGdyaWRMYXN0ID09PSBzaXplKSA/IDEgOiBudWxsXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3R5bGVzXG4gICAgICovXG4gICAgcmV0dXJuICh7XG4gICAgICAgIGJveFNpemluZyAgICA6ICdib3JkZXItYm94JyxcbiAgICAgICAgZmxleCAgICAgICAgIDogJzAgMCBhdXRvJyxcbiAgICAgICAgZmxleEdyb3cgICAgIDogMSxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cbiAgICAgICAgb3JkZXI6IE9SREVSLFxuXG4gICAgICAgIHBhZGRpbmdSaWdodDogR1JJRC5DT0xVTU5TX1BBRERJTkcsXG4gICAgICAgIHBhZGRpbmdMZWZ0IDogR1JJRC5DT0xVTU5TX1BBRERJTkcsXG5cbiAgICAgICAgZmxleEJhc2lzOiAoZ3JpZFdpZHRoIHx8IEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoZ3JpZFhYUyB8fCBncmlkWFMpIHx8IG51bGwpLFxuICAgICAgICBtYXhXaWR0aCA6IChncmlkV2lkdGggfHwgR1JJRC5DT0xVTU5TX0dFVF9XSURUSChncmlkWFhTIHx8IGdyaWRYUykgfHwgbnVsbCksXG5cbiAgICAgICAgLi4uZ3JpZFN0eWxlcyxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoZ3JpZFhTKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKGdyaWRYUykpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcigneHMnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5TTV06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoZ3JpZFNNKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKGdyaWRTTSkpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcignc20nKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5NRF06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoZ3JpZE1EKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKGdyaWRNRCkpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcignbWQnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5MR106IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoZ3JpZExHKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKGdyaWRMRykpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcignbGcnKSxcbiAgICAgICAgfSxcblxuICAgICAgICBbTUVESUFfUVVFUklFUy5HVC5YTF06IHtcbiAgICAgICAgICAgIGZsZXhCYXNpczogKEdSSUQuQ09MVU1OU19HRVRfV0lEVEgoZ3JpZFhMKSksXG4gICAgICAgICAgICBtYXhXaWR0aCA6IChHUklELkNPTFVNTlNfR0VUX1dJRFRIKGdyaWRYTCkpLFxuICAgICAgICAgICAgb3JkZXIgICAgOiBnZXRPcmRlcigneGwnKSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn0pO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IENvbHVtbiA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGZpcnN0LFxuICAgICAgICBsYXN0LFxuXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBzdHlsZXMsXG5cbiAgICAgICAgeHhzLFxuICAgICAgICB4cyxcbiAgICAgICAgc20sXG4gICAgICAgIG1kLFxuICAgICAgICBsZyxcbiAgICAgICAgeGwsXG5cbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbixcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVyXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbFN0eWxlZFxuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICBncmlkRmlyc3Q9e2ZpcnN0fVxuICAgICAgICAgICAgZ3JpZExhc3Q9e2xhc3R9XG4gICAgICAgICAgICBncmlkWFhTPXt4eHN9XG4gICAgICAgICAgICBncmlkWFM9e3hzfVxuICAgICAgICAgICAgZ3JpZFNNPXtzbX1cbiAgICAgICAgICAgIGdyaWRNRD17bWR9XG4gICAgICAgICAgICBncmlkTEc9e2xnfVxuICAgICAgICAgICAgZ3JpZFhMPXt4bH1cbiAgICAgICAgICAgIGdyaWRXaWR0aD17d2lkdGh9XG4gICAgICAgICAgICBncmlkU3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1jb2wgJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29sU3R5bGVkPlxuICAgICk7XG59KTtcblxuLyogU2l6ZXMgVHlwZXMgKi9cbmNvbnN0IHNpemVzVHlwZXMgPSBwcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByb3BUeXBlcy5udW1iZXJcbl0pO1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5Db2x1bW4ucHJvcFR5cGVzID0ge1xuICAgIHhzcyAgIDogc2l6ZXNUeXBlcyxcbiAgICB4cyAgICA6IHNpemVzVHlwZXMsXG4gICAgc20gICAgOiBzaXplc1R5cGVzLFxuICAgIG1kICAgIDogc2l6ZXNUeXBlcyxcbiAgICBsZyAgICA6IHNpemVzVHlwZXMsXG4gICAgeGwgICAgOiBzaXplc1R5cGVzLFxuXG4gICAgZmlyc3QgOiBwcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhc3QgIDogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIHdpZHRoIDogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5Db2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczoge30sXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcbiJdfQ== */");

var Column = /*#__PURE__*/forwardRef(function (props, ref) {
  var first = props.first,
      last = props.last,
      width = props.width,
      styles = props.styles,
      xxs = props.xxs,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      className = props.className,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["first", "last", "width", "styles", "xxs", "xs", "sm", "md", "lg", "xl", "className", "children"]);

  return /*#__PURE__*/React.createElement(ColStyled, _extends({}, rest, {
    gridFirst: first,
    gridLast: last,
    gridXXS: xxs,
    gridXS: xs,
    gridSM: sm,
    gridMD: md,
    gridLG: lg,
    gridXL: xl,
    gridWidth: width,
    gridStyles: styles,
    ref: ref,
    className: "aph-col " + (className || '')
  }), children);
});
var sizesTypes = propTypes.oneOfType([propTypes.string, propTypes.number]);
Column.propTypes = {
  xss: sizesTypes,
  xs: sizesTypes,
  sm: sizesTypes,
  md: sizesTypes,
  lg: sizesTypes,
  xl: sizesTypes,
  first: propTypes.string,
  last: propTypes.string,
  width: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};
Column.defaultProps = {
  styles: {}
};

var AphListStyled = _styled("ul", {
  target: "e1glup0d0",
  label: "AphListStyled"
})("box-sizing:border-box;display:block;margin:0;padding:0;border-radius:", RADIUS.SM, "px;list-style-type:", function (props) {
  return props.type || 'none';
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMrQiIsImZpbGUiOiJMaXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIFVJIEZyYW1ld29yayBVdGlscyAqL1xuaW1wb3J0IHsgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgQXBoTGlzdFN0eWxlZCA9IHN0eWxlZC51bGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luIDogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgYm9yZGVyLXJhZGl1czogJHtSQURJVVMuU019cHg7XG5cbiAgICBsaXN0LXN0eWxlLXR5cGU6ICR7cHJvcHMgPT4gcHJvcHMudHlwZSB8fCAnbm9uZSd9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgTGlzdCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoTGlzdFN0eWxlZFxuICAgICAgICAgICAgcm9sZT1cImxpc3Rib3hcIlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtbGlzdCAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAvPlxuICAgICk7XG59KTtcblxuLyogRGVmYXVsdCBQcm9wZXJ0aWVzICovXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdHlsZXM6IHt9LFxufTtcblxuLyogUHJvcGVydGllcyBUeXBlcyAqL1xuTGlzdC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ3VzdG9tIFN0eWxlc1xuICAgICAqL1xuICAgIHN0eWxlczogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iXX0= */"));

var List = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className;
  return /*#__PURE__*/React.createElement(AphListStyled, _extends({
    role: "listbox"
  }, props, {
    ref: ref,
    className: "aph-list " + (className || '')
  }));
});
List.defaultProps = {
  styles: {}
};
List.propTypes = {
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var AphListItemStyled = _styled("li", {
  target: "e1j6my8k0",
  label: "AphListItemStyled"
})("box-sizing:border-box;display:block;margin:0;padding:", function (props) {
  return props.aphPadding;
}, ";", function (props) {
  return text(props, props.textSize);
}, ";box-shadow:", function (props) {
  return !props.borderTop && !props.borderBottom ? null : "inset 0 " + (props.borderBottom ? '-' : '') + "1px 0 0 " + colors$1.getFromTheme(props, 'shadow', 'crystal');
}, ";color:", function (props) {
  return !props.disabled && !props.aphColor ? null : colors$1.getFromTheme(props, props.disabled ? 'helper' : props.aphColor || 'secondary');
}, ";cursor:", function (props) {
  return !props.disabled ? null : 'not-allowed';
}, ";transition:color 0.15s linear,background-color 0.15s linear;will-change:color,background-color;&.active{color:", function (props) {
  return colors$1.getFromTheme(props, props.disabled ? 'helper' : props.aphColor || 'secondary');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, props.disabled ? 'disabled' : props.aphColor || 'secondary', 'crystal', 0.3);
}, ";}", function (props) {
  return props.onClick || props.withLink ? {
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    color: colors$1.getFromTheme(props, props.disabled ? 'helper' : props.aphColor || 'secondary'),
    padding: !props.withLink ? null : '0',
    '&:hover': {
      color: colors$1.getFromTheme(props, props.disabled ? 'helper' : props.aphColor || 'secondary'),
      backgroundColor: colors$1.getFromTheme(props, props.disabled ? 'disabled' : props.aphColor || 'secondary', 'crystal', 0.3)
    },
    '.aph-list__item__link, > a': {
      display: 'block',
      color: 'inherit',
      padding: !props.withLink ? null : props.aphPadding,
      textDecoration: 'none'
    }
  } : null;
}, ";", function (props) {
  return props.hoverable ? {
    '&:hover': {
      backgroundColor: colors$1.getFromTheme(props, 'disabled', 'original', 0.3)
    }
  } : null;
}, ";", function (_ref) {
  var styles = _ref.styles;
  return styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RJdGVtLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTbUMiLCJmaWxlIjoiTGlzdEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogVUkgRnJhbWV3b3JrIFV0aWxzICovXG5pbXBvcnQgeyBjb2xvcnMsIHRleHQgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IEFwaExpc3RJdGVtU3R5bGVkID0gc3R5bGVkLmxpYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4gOiAwO1xuICAgIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMuYXBoUGFkZGluZ307XG5cbiAgICAke3Byb3BzID0+IHRleHQocHJvcHMsIHByb3BzLnRleHRTaXplKX07XG5cbiAgICBib3gtc2hhZG93OiAke3Byb3BzID0+ICgoIXByb3BzLmJvcmRlclRvcCAmJiAhcHJvcHMuYm9yZGVyQm90dG9tKSA/IG51bGwgOiBgaW5zZXQgMCAke3Byb3BzLmJvcmRlckJvdHRvbSA/ICctJyA6ICcnfTFweCAwIDAgJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2hhZG93JywgJ2NyeXN0YWwnKX1gKX07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gKCghcHJvcHMuZGlzYWJsZWQgJiYgIXByb3BzLmFwaENvbG9yKSA/IG51bGwgOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuZGlzYWJsZWQgPyAnaGVscGVyJyA6IChwcm9wcy5hcGhDb2xvciB8fCAnc2Vjb25kYXJ5JykpKSl9O1xuICAgIGN1cnNvcjogJHtwcm9wcyA9PiAoIXByb3BzLmRpc2FibGVkID8gbnVsbCA6ICdub3QtYWxsb3dlZCcpfTtcblxuICAgIHRyYW5zaXRpb24gOlxuICAgICAgICBjb2xvciAwLjE1cyBsaW5lYXIsXG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgMC4xNXMgbGluZWFyXG4gICAgO1xuICAgIHdpbGwtY2hhbmdlOlxuICAgICAgICBjb2xvcixcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvclxuICAgIDtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmRpc2FibGVkID8gJ2hlbHBlcicgOiAocHJvcHMuYXBoQ29sb3IgfHwgJ3NlY29uZGFyeScpKSl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5kaXNhYmxlZCA/ICdkaXNhYmxlZCcgOiAocHJvcHMuYXBoQ29sb3IgfHwgJ3NlY29uZGFyeScpKSwgJ2NyeXN0YWwnLCAwLjMpfTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+IChwcm9wcy5vbkNsaWNrIHx8IHByb3BzLndpdGhMaW5rKSA/IHtcbiAgICAgICAgY3Vyc29yOiAocHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInKSxcbiAgICAgICAgY29sb3I6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5kaXNhYmxlZCA/ICdoZWxwZXInIDogKHByb3BzLmFwaENvbG9yIHx8ICdzZWNvbmRhcnknKSkpLFxuXG4gICAgICAgIHBhZGRpbmc6ICghcHJvcHMud2l0aExpbmsgPyBudWxsIDogJzAnKSxcblxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuZGlzYWJsZWQgPyAnaGVscGVyJyA6IChwcm9wcy5hcGhDb2xvciB8fCAnc2Vjb25kYXJ5JykpKSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmRpc2FibGVkID8gJ2Rpc2FibGVkJyA6IChwcm9wcy5hcGhDb2xvciB8fCAnc2Vjb25kYXJ5JykpLCAnY3J5c3RhbCcsIDAuMyksXG4gICAgICAgIH0sXG5cbiAgICAgICAgJy5hcGgtbGlzdF9faXRlbV9fbGluaywgPiBhJzoge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIGNvbG9yICA6ICdpbmhlcml0JyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICghcHJvcHMud2l0aExpbmsgPyBudWxsIDogcHJvcHMuYXBoUGFkZGluZyksXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICB9LFxuICAgIH0gOiBudWxsfTtcblxuICAgICR7cHJvcHMgPT4gKHByb3BzLmhvdmVyYWJsZSkgPyB7XG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZGlzYWJsZWQnLCAnb3JpZ2luYWwnLCAwLjMpLFxuICAgICAgICB9XG4gICAgfSA6IG51bGx9O1xuXG4gICAgJHsoeyBzdHlsZXMgfSkgPT4gc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IExpc3RJdGVtID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICB3aXRoTGluayxcbiAgICAgICAgcGFkZGluZyxcblxuICAgICAgICAuLi5yZXN0XG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgQXBoTGlzdEl0ZW0gPSAoY29tcG9uZW50ID8gQXBoTGlzdEl0ZW1TdHlsZWQud2l0aENvbXBvbmVudChjb21wb25lbnQpIDogQXBoTGlzdEl0ZW1TdHlsZWQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaExpc3RJdGVtXG4gICAgICAgICAgICByb2xlPVwib3B0aW9uXCJcbiAgICAgICAgICAgIGFwaENvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIGFwaFBhZGRpbmc9e3BhZGRpbmd9XG4gICAgICAgICAgICB3aXRoTGluaz17d2l0aExpbmt9XG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWxpc3RfX2l0ZW0gJHtjbGFzc05hbWUgfHwgJyd9ICR7IXdpdGhMaW5rID8gJycgOiAnYXBoLWxpc3RfX2l0ZW0tLXdpdGgtbGluayd9YH1cbiAgICAgICAgLz5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuTGlzdEl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICAgIGJvcmRlclRvcDogZmFsc2UsXG4gICAgYm9yZGVyQm90dG9tOiBmYWxzZSxcbiAgICBjb2xvcjogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGhvdmVyYWJsZTogZmFsc2UsXG4gICAgcGFkZGluZzogJzEwcHggMTVweCcsXG4gICAgc3R5bGVzOiB7fSxcbiAgICB3aXRoTGluazogZmFsc2UsXG59O1xuXG4vKiBQcm9wZXJ0aWVzIFR5cGVzICovXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQXBwbGllcyBhIGJveC1zaGFkb3cgdG8gc3R5bGVzLCBzaW11bGF0aW5nIHRoZSBib3JkZXItdG9wIHByb3BlcnR5XG4gICAgICovXG4gICAgYm9yZGVyVG9wOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYSBib3gtc2hhZG93IHRvIHN0eWxlcywgc2ltdWxhdGluZyB0aGUgYm9yZGVyLWJvdHRvbSBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGJvcmRlckJvdHRvbTogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTb21lIGNvbG9yIGZvciBDb2xvciBVdGlsaXRpZXMgKHZpc2l0eSBvbiBzaWRlbWVudSlcbiAgICAgKi9cbiAgICBjb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERpc2FibGVkIHN0YXRlIGNoYW5nZXMgY29sb3IgYW4gYmFja2dyb3VuZFxuICAgICAqL1xuICAgIGRpc2FibGVkOiBwcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEJhY2tncm91bmQgY29sb3IgY2hhbmdlcyBvbiBob3ZlciBldmVudFxuICAgICAqL1xuICAgIGhvdmVyYWJsZTogcHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBzcGFjZW1lbnRcbiAgICAgKi9cbiAgICBwYWRkaW5nOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIFN0eWxlc1xuICAgICAqL1xuICAgIHN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFVzZSBpdCB3aGVuIHlvdSBuZWVkIGEgbGluayBpbnNpZGUsIHN1Y2ggYXMgUmVhY3QgUm91dGVyIExpbmtcbiAgICAgKi9cbiAgICB3aXRoTGluazogcHJvcFR5cGVzLmJvb2wsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIl19 */"));

var ListItem = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      color = props.color,
      component = props.component,
      withLink = props.withLink,
      padding = props.padding,
      rest = _objectWithoutPropertiesLoose(props, ["className", "color", "component", "withLink", "padding"]);

  var AphListItem = component ? AphListItemStyled.withComponent(component, {
    target: "e1j6my8k1",
    label: "AphListItem"
  }) : AphListItemStyled;
  return /*#__PURE__*/React.createElement(AphListItem, _extends({
    role: "option",
    aphColor: color,
    aphPadding: padding,
    withLink: withLink
  }, rest, {
    ref: ref,
    className: "aph-list__item " + (className || '') + " " + (!withLink ? '' : 'aph-list__item--with-link')
  }));
});
ListItem.defaultProps = {
  borderTop: false,
  borderBottom: false,
  color: '',
  disabled: false,
  hoverable: false,
  padding: '10px 15px',
  styles: {},
  withLink: false
};
ListItem.propTypes = {
  borderTop: propTypes.bool,
  borderBottom: propTypes.bool,
  color: propTypes.string,
  disabled: propTypes.bool,
  hoverable: propTypes.bool,
  padding: propTypes.string,
  styles: propTypes.object,
  withLink: propTypes.bool
};

var AphListGroup = /*#__PURE__*/_styled('div', {
  target: "e1wlf4350",
  label: "AphListGroup"
})(function (props) {
  return _objectSpread2({
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
    padding: props.noSideBorders ? '1px 0' : '1px',
    margin: 0,
    listStyle: 'none',
    borderRadius: (!isNaN(props.radius) ? props.radius : RADIUS) + GRID.UNIT,
    boxShadow: props.noSideBorders ? "\n            inset 0 -1px 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 1px 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + "\n        " : "\n            inset 0 -1px 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + ",\n            inset 1px 0 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + ",\n            inset -1px 0 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + ",\n            inset 0 1px 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + "\n        ",
    '.aph-list__header, .aph-list__item': {
      boxShadow: "\n            inset 0 -1px 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + ",\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent,\n            inset 0 0 0 0 transparent\n        ",
      '+ .aph-list__header, + .aph-list__item': {
        boxShadow: "\n                inset 0 -1px 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + ",\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent,\n                inset 0 0 0 0 transparent\n            "
      }
    },
    '.aph-list__header': {
      backgroundColor: colors$1.getFromTheme(props, 'helper')
    },
    '.aph-list__item': {
      backgroundColor: colors$1.getFromTheme(props, 'background')
    },
    'div:first-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:first-of-type': {
          marginTop: '-1px',
          borderTopRightRadius: (!isNaN(props.radius) ? props.radius : RADIUS) - 2 + GRID.UNIT,
          borderTopLeftRadius: (!isNaN(props.radius) ? props.radius : RADIUS) - 2 + GRID.UNIT,
          boxShadow: "\n                    inset 0 -1px 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + ",\n                    inset 0 0 0 0 transparent,\n                    inset 0 0 0 0 transparent,\n                    inset 0 1px 0 0 " + colors$1.getOpacity(0.25, colors$1.getFromTheme(props, 'helper')) + "\n                "
        }
      }
    },
    'div:last-of-type': {
      '.aph-list__header, > .aph-list__item': {
        '&:last-of-type': {
          marginBottom: '-1px',
          borderBottomRightRadius: (!isNaN(props.radius) ? props.radius : RADIUS) - 2 + GRID.UNIT,
          borderBottomLeftRadius: (!isNaN(props.radius) ? props.radius : RADIUS) - 2 + GRID.UNIT
        }
      }
    }
  }, props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RHcm91cC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCIiwiZmlsZSI6Ikxpc3RHcm91cC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIENvbnN0YW50cyAqL1xuaW1wb3J0IHsgR1JJRCwgUkFESVVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogVXRpbHMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogV3JhcHBlciBzdHlsZXMgKi9cbmNvbnN0IEFwaExpc3RHcm91cCA9IHN0eWxlZCgnZGl2JykocHJvcHMgPT4gKHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwb3NpdGlvbiA6ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3cgOiAnaGlkZGVuJyxcbiAgICBkaXNwbGF5ICA6ICdibG9jaycsXG4gICAgd2lkdGggICAgOiAnMTAwJScsXG4gICAgcGFkZGluZyAgOiAocHJvcHMubm9TaWRlQm9yZGVycyA/ICcxcHggMCcgOiAnMXB4JyksXG4gICAgbWFyZ2luICAgOiAwLFxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuXG4gICAgYm9yZGVyUmFkaXVzOiAoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSArIEdSSUQuVU5JVCksXG4gICAgYm94U2hhZG93ICAgOiAocHJvcHMubm9TaWRlQm9yZGVycyA/XG4gICAgICAgIChgXG4gICAgICAgICAgICBpbnNldCAwIC0xcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX0sXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9XG4gICAgICAgIGApXG4gICAgICAgIDpcbiAgICAgICAgKGBcbiAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJykpfSxcbiAgICAgICAgICAgIGluc2V0IDFweCAwIDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9LFxuICAgICAgICAgICAgaW5zZXQgLTFweCAwIDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9LFxuICAgICAgICAgICAgaW5zZXQgMCAxcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX1cbiAgICAgICAgYClcbiAgICApLFxuXG4gICAgJy5hcGgtbGlzdF9faGVhZGVyLCAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgIGJveFNoYWRvdyAgIDogYFxuICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9LFxuICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50XG4gICAgICAgIGAsXG5cbiAgICAgICAgJysgLmFwaC1saXN0X19oZWFkZXIsICsgLmFwaC1saXN0X19pdGVtJzoge1xuICAgICAgICAgICAgYm94U2hhZG93ICAgOiBgXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAtMXB4IDAgMCAke2NvbG9ycy5nZXRPcGFjaXR5KDAuMjUsIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKSl9LFxuICAgICAgICAgICAgICAgIGluc2V0IDAgMCAwIDAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICBpbnNldCAwIDAgMCAwIHRyYW5zcGFyZW50XG4gICAgICAgICAgICBgLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgICcuYXBoLWxpc3RfX2hlYWRlcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJyksXG4gICAgfSxcblxuICAgICcuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2JhY2tncm91bmQnKSxcbiAgICB9LFxuXG4gICAgJ2RpdjpmaXJzdC1vZi10eXBlJzoge1xuICAgICAgICAnLmFwaC1saXN0X19oZWFkZXIsID4gLmFwaC1saXN0X19pdGVtJzoge1xuICAgICAgICAgICAgJyY6Zmlyc3Qtb2YtdHlwZSc6IHtcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICctMXB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogKCgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpIC0gMikgKyBHUklELlVOSVQpLFxuICAgICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXMgOiAoKCghaXNOYU4ocHJvcHMucmFkaXVzKSA/IHByb3BzLnJhZGl1cyA6IFJBRElVUykgLSAyKSArIEdSSUQuVU5JVCksXG4gICAgICAgICAgICAgICAgYm94U2hhZG93OiBgXG4gICAgICAgICAgICAgICAgICAgIGluc2V0IDAgLTFweCAwIDAgJHtjb2xvcnMuZ2V0T3BhY2l0eSgwLjI1LCBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaGVscGVyJykpfSxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAwIDAgMCB0cmFuc3BhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCAwICR7Y29sb3JzLmdldE9wYWNpdHkoMC4yNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpKX1cbiAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgJ2RpdjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICcuYXBoLWxpc3RfX2hlYWRlciwgPiAuYXBoLWxpc3RfX2l0ZW0nOiB7XG4gICAgICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnLTFweCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6ICgoKCFpc05hTihwcm9wcy5yYWRpdXMpID8gcHJvcHMucmFkaXVzIDogUkFESVVTKSAtIDIpICsgR1JJRC5VTklUKSxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzIDogKCgoIWlzTmFOKHByb3BzLnJhZGl1cykgPyBwcm9wcy5yYWRpdXMgOiBSQURJVVMpIC0gMikgKyBHUklELlVOSVQpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLi4ucHJvcHMuc3R5bGVzLFxufSkpO1xuXG4vKiBDb21wb25lbnQgKi9cbmNvbnN0IExpc3RHcm91cCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoTGlzdEdyb3VwXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1saXN0LWdyb3VwICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWB9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0FwaExpc3RHcm91cD5cbiAgICApO1xufSk7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTGlzdEdyb3VwO1xuIl19 */");

var ListGroup = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(AphListGroup, _extends({}, props, {
    ref: ref,
    className: "aph-list-group " + (props.className || '')
  }), props.children);
});

var AphListGroupItem = /*#__PURE__*/_styled('div', {
  target: "e3yyivk0",
  label: "AphListGroupItem"
})(function (props) {
  var _objectSpread2$1;

  return _objectSpread2((_objectSpread2$1 = {
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
    display: 'block',
    padding: GRID.CONTAINER_PADDING / 2 + GRID.UNIT + ' ' + (GRID.CONTAINER_PADDING + GRID.UNIT),
    margin: 0
  }, _objectSpread2$1[MEDIA_QUERIES.LT.SM] = {
    paddingRight: GRID.CONTAINER_PADDING - 5 + GRID.UNIT,
    paddingLeft: GRID.CONTAINER_PADDING - 5 + GRID.UNIT
  }, _objectSpread2$1), props.styles);
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpc3RHcm91cEl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF5QiIsImZpbGUiOiJMaXN0R3JvdXBJdGVtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogQ29uc3RhbnRzICovXG5pbXBvcnQgeyBHUklELCBNRURJQV9RVUVSSUVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyogV3JhcHBlciBzdHlsZXMgKi9cbmNvbnN0IEFwaExpc3RHcm91cEl0ZW0gPSBzdHlsZWQoJ2RpdicpKHByb3BzID0+ICh7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcG9zaXRpb24gOiAncmVsYXRpdmUnLFxuICAgIG92ZXJmbG93IDogJ2hpZGRlbicsXG4gICAgZGlzcGxheSAgOiAnYmxvY2snLFxuICAgIHBhZGRpbmcgIDogKCgoR1JJRC5DT05UQUlORVJfUEFERElORyAgLyAyKSArIEdSSUQuVU5JVCkgKyAnICcgKyAoR1JJRC5DT05UQUlORVJfUEFERElORyAgKyBHUklELlVOSVQpKSxcbiAgICBtYXJnaW4gICA6IDAsXG5cbiAgICBbTUVESUFfUVVFUklFUy5MVC5TTV06IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAoKEdSSUQuQ09OVEFJTkVSX1BBRERJTkcgIC0gNSkgKyBHUklELlVOSVQpLFxuICAgICAgICBwYWRkaW5nTGVmdCA6ICgoR1JJRC5DT05UQUlORVJfUEFERElORyAgLSA1KSArIEdSSUQuVU5JVCksXG4gICAgfSxcblxuICAgIC4uLnByb3BzLnN0eWxlcyxcbn0pKTtcblxuLyogQ29tcG9uZW50ICovXG5jb25zdCBMaXN0R3JvdXBJdGVtID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBoTGlzdEdyb3VwSXRlbVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcmVmPXtmb3J3YXJkUmVmfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcm9wcy5oZWFkZXIgPyAnYXBoLWxpc3QtZ3JvdXBfX2hlYWRlciAnIDogJ2FwaC1saXN0LWdyb3VwX19pdGVtICd9JHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQXBoTGlzdEdyb3VwSXRlbT5cbiAgICApO1xufSk7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTGlzdEdyb3VwSXRlbTtcbiJdfQ== */");

var ListGroupItem = /*#__PURE__*/forwardRef(function (props, ref) {
  var className = props.className,
      children = props.children;
  return /*#__PURE__*/React.createElement(AphListGroupItem, _extends({}, props, {
    ref: forwardRef,
    className: "" + (props.header ? 'aph-list-group__header ' : 'aph-list-group__item ') + (className || '')
  }), children);
});

function Alert(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '10px 0' : _ref$margin,
      _ref$opened = _ref.opened,
      opened = _ref$opened === void 0 ? true : _ref$opened,
      _ref$openedCallback = _ref.openedCallback,
      openedCallback = _ref$openedCallback === void 0 ? function () {} : _ref$openedCallback,
      _ref$closeable = _ref.closeable,
      closeable = _ref$closeable === void 0 ? true : _ref$closeable,
      _ref$closeBottom = _ref.closeBottom,
      closeBottom = _ref$closeBottom === void 0 ? false : _ref$closeBottom,
      textSmall = _ref.textSmall,
      styles = _ref.styles,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "color", "margin", "opened", "openedCallback", "closeable", "closeBottom", "textSmall", "styles"]);

  var _useState = useState(opened),
      visible = _useState[0],
      setVisible = _useState[1];

  var closeDistance = '10px';
  var isColorComplete = !!(color && color.includes(','));

  function close() {
    setVisible(false);
    openedCallback(false);
  }

  useEffect(function () {
    setVisible(opened);
  }, [opened]);
  return /*#__PURE__*/React.createElement(Styled, _extends({
    backgroundColor: isColorComplete ? color : color + ",crystal,0.25",
    textColor: isColorComplete ? color : color + ",dark",
    radius: 5,
    styles: _objectSpread2({
      position: 'relative',
      transition: 'all 0.2s ease',
      margin: "" + (!visible ? '0' : margin),
      paddingTop: !visible ? '0' : null,
      paddingBottom: !visible ? '0' : null,
      paddingRight: !closeable ? null : '40px',
      lineHeight: !visible ? '0' : '20px',
      fontSize: textSmall ? '14px' : null
    }, styles)
  }, props), visible && /*#__PURE__*/React.createElement(Fragment$1, null, children, closeable && /*#__PURE__*/React.createElement(ButtonIcon, {
    title: "Fechar",
    onClick: close,
    size: 30,
    icon: {
      slug: 'times',
      color: color
    },
    styles: {
      position: 'absolute',
      top: closeBottom ? null : closeDistance,
      right: closeDistance,
      bottom: closeBottom ? closeDistance : null
    }
  })));
}
Alert.defaultProps = {
  color: 'secondary',
  margin: '10px 0',
  padding: '15px',
  opened: true,
  openedCallback: function openedCallback() {},
  closeable: true,
  closeBottom: false,
  textSmall: false,
  styles: {}
};
Alert.propTypes = {
  color: propTypes.string,
  margin: propTypes.string,
  opened: propTypes.bool,
  openedCallback: propTypes.func,
  closeable: propTypes.bool,
  closeBottom: propTypes.bool,
  textSmall: propTypes.bool,
  styles: propTypes.object
};

var AphCollapsibleChildrenStyled = /*#__PURE__*/_styled(Styled, {
  target: "e9ktd490",
  label: "AphCollapsibleChildrenStyled"
})("opacity:1;overflow:hidden;position:relative;transition-timing-function:ease;transition-property:max-height,opacity;will-change:max-height,opacity;", function (_ref) {
  var styles = _ref.styles;
  return styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbGxhcHNpYmxlQ2hpbGRyZW5TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR21EIiwiZmlsZSI6IkNvbGxhcHNpYmxlQ2hpbGRyZW5TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgU3R5bGVkIGZyb20gJy4uL1N0eWxlZC9TdHlsZWQnO1xuXG5jb25zdCBBcGhDb2xsYXBzaWJsZUNoaWxkcmVuU3R5bGVkID0gc3R5bGVkKFN0eWxlZClgXG4gICAgb3BhY2l0eSA6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogbWF4LWhlaWdodCwgb3BhY2l0eTtcblxuICAgIHdpbGwtY2hhbmdlOiBtYXgtaGVpZ2h0LCBvcGFjaXR5O1xuXG4gICAgJHsoeyBzdHlsZXN9KSA9PiBzdHlsZXN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQXBoQ29sbGFwc2libGVDaGlsZHJlblN0eWxlZDtcbiJdfQ== */"));

var Collapsible = /*#__PURE__*/forwardRef(function (props, ref) {
  var after = props.after,
      before = props.before,
      borderRadius = props.borderRadius,
      className = props.className,
      header = props.header,
      headerProps = props.headerProps,
      children = props.children,
      childrenProps = props.childrenProps,
      disabled = props.disabled,
      delay = props.delay,
      icon = props.icon,
      iconSize = props.iconSize,
      radius = props.radius;
  var timerDelay = delay * 1000;
  var wrapperRef = useRef(null);
  var wrapperContentRef = useRef(null);

  var _useState = useState(props.opened || false),
      opened = _useState[0],
      setOpened = _useState[1];

  var _useState2 = useState(null),
      openTimer = _useState2[0],
      setOpenTimer = _useState2[1];

  var _useState3 = useState(null),
      closeTimer = _useState3[0],
      setCloseTimer = _useState3[1];

  var _useState4 = useState(Object.assign({
    transitionDuration: props.delay + 's'
  }, props.opened ? null : {
    maxHeight: 0
  })),
      styles = _useState4[0],
      setStyles = _useState4[1];

  var headerStyles = Object.assign({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    borderRadius: borderRadius || radius,
    padding: '10px 15px'
  }, headerProps && headerProps.styles ? headerProps.styles : {});

  function handleOpen() {
    var openStyles = _objectSpread2(_objectSpread2({}, styles), {}, {
      maxHeight: 0,
      display: 'block'
    });

    clearTimeout(closeTimer);
    setStyles(openStyles);
    setTimeout(function () {
      setStyles(_objectSpread2(_objectSpread2({}, openStyles), {}, {
        maxHeight: wrapperContentRef.current.clientHeight
      }));
      clearTimeout(openTimer);
      setOpenTimer(setTimeout(function () {
        setStyles(_objectSpread2(_objectSpread2({}, openStyles), {}, {
          maxHeight: null
        }));
      }, timerDelay));
    }, 1);
  }

  function handleClose() {
    var closeStyles = _objectSpread2(_objectSpread2({}, styles), {}, {
      maxHeight: wrapperContentRef.current.clientHeight
    });

    clearTimeout(openTimer);
    setStyles(closeStyles);
    setTimeout(function () {
      setStyles(_objectSpread2(_objectSpread2({}, closeStyles), {}, {
        maxHeight: 0
      }));
      clearTimeout(closeTimer);
      setCloseTimer(setTimeout(function () {
        setStyles(_objectSpread2(_objectSpread2({}, closeStyles), {}, {
          display: 'none'
        }));
      }, timerDelay + 10));
    }, 10);
  }

  function toggle() {
    if (disabled) {
      return;
    }

    if (opened) {
      handleClose();
    } else {
      handleOpen();
    }

    setOpened(!opened);
  }

  useEffect(function () {
    return function cleanup() {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Styled, _extends({}, props, {
    ref: ref,
    className: (className || '') + " aph-collapsible " + (opened ? 'active' : ''),
    styles: _objectSpread2({
      position: 'relative',
      overflow: 'hidden'
    }, props.styles || {})
  }), before, header && /*#__PURE__*/React.createElement(Styled, _extends({
    margin: "0",
    role: "button"
  }, headerProps, {
    onClick: toggle,
    className: "aph-collapsible__header",
    styles: _objectSpread2(_objectSpread2({}, headerStyles), {}, {
      paddingRight: !icon ? null : iconSize + "px"
    })
  }), header, icon && /*#__PURE__*/React.createElement(Icon, {
    className: "aph-collapsible__header__item",
    slug: "arrow-down",
    size: iconSize,
    styles: {
      position: 'absolute',
      top: '50%',
      right: '5px',
      transform: "translateY(-50%)" + (opened ? ' rotate(180deg)' : ''),
      transition: "transform " + delay + "s linear"
    }
  })), /*#__PURE__*/React.createElement(AphCollapsibleChildrenStyled, _extends({}, childrenProps, {
    ref: wrapperRef,
    visible: opened,
    styles: Object.assign({}, childrenProps.styles || {}, styles),
    className: "aph-collapsible__content"
  }), /*#__PURE__*/React.createElement("div", {
    ref: wrapperContentRef
  }, children)), after);
});
Collapsible.defaultProps = {
  opened: false,
  delay: 0.2,
  childrenProps: {},
  childrenStyles: {},
  header: '',
  headerProps: null,
  icon: true,
  iconSize: 40,
  padding: '0',
  radius: 10,
  shadow: true,
  shadowSpread: '5px',
  styles: {}
};
Collapsible.propTypes = {
  after: propTypes.oneOfType([propTypes.element, propTypes.string]),
  before: propTypes.oneOfType([propTypes.element, propTypes.string]),
  opened: propTypes.bool,
  delay: propTypes.number,
  icon: propTypes.bool,
  iconSize: propTypes.number,
  childrenProps: propTypes.object,
  childrenStyles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  header: propTypes.any,
  headerProps: propTypes.object
};

var CountdownStyled = _styled("div", {
  target: "e1o8mx930",
  label: "CountdownStyled"
})("box-sizing:border-box;position:relative;display:block;margin:0 auto;width:", function (props) {
  return props.aphSize;
}, "px;height:", function (props) {
  return props.aphSize;
}, "px;.", function (props) {
  return props.aphSelector;
}, "{box-sizing:border-box;position:relative;transform:rotate(-90deg) scaleY(-1);&__trace,&__line{fill:none;}&__trace{stroke:", function (props) {
  return colors$1[props.aphBackground] ? colors$1.getFromTheme(props, props.aphBackground) : props.aphBackground;
}, ";}&__line{transition:stroke-dashoffset 0.1s linear;stroke-linecap:round;stroke:", function (props) {
  return colors$1[props.aphColor] ? colors$1.getFromTheme(props, props.aphColor) : props.aphColor;
}, ";}&__count{position:absolute;top:0;right:0;bottom:0;left:0;margin:0;display:block;text-align:center;font-weight:normal;font-size:", function (props) {
  return props.aphSize / 2;
}, "px;line-height:", function (props) {
  return props.aphSize;
}, "px;color:", function (props) {
  return colors$1[props.aphColor] ? colors$1.getFromTheme(props, props.aphColor) : props.aphColor;
}, ";}}", function (props) {
  return props.aphStyles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvdW50ZG93blN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0MiLCJmaWxlIjoiQ291bnRkb3duU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ29yZSBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVdGlsaXRpZXMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQ291bnRkb3duU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIG1hcmdpbiAgICA6IDAgYXV0bztcbiAgICB3aWR0aCAgICAgOiAke3Byb3BzID0+IHByb3BzLmFwaFNpemV9cHg7XG4gICAgaGVpZ2h0ICAgIDogJHtwcm9wcyA9PiBwcm9wcy5hcGhTaXplfXB4O1xuXG4gICAgLiR7cHJvcHMgPT4gcHJvcHMuYXBoU2VsZWN0b3J9IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG5cbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKSBzY2FsZVkoLTEpO1xuXG4gICAgICAgICZfX3RyYWNlLFxuICAgICAgICAmX19saW5lIHtcbiAgICAgICAgICAgIGZpbGw6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAmX190cmFjZSB7XG4gICAgICAgICAgICBzdHJva2U6ICR7cHJvcHMgPT4gKGNvbG9yc1twcm9wcy5hcGhCYWNrZ3JvdW5kXSA/XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYXBoQmFja2dyb3VuZCkgOiBwcm9wcy5hcGhCYWNrZ3JvdW5kXG4gICAgICAgICAgICApfTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2xpbmUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLWRhc2hvZmZzZXQgMC4xcyBsaW5lYXI7XG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgICAgICBzdHJva2U6ICR7cHJvcHMgPT4gKGNvbG9yc1twcm9wcy5hcGhDb2xvcl0gP1xuICAgICAgICAgICAgICAgIGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIHByb3BzLmFwaENvbG9yKSA6IHByb3BzLmFwaENvbG9yXG4gICAgICAgICAgICApfTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2NvdW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcCAgICAgOiAwO1xuICAgICAgICAgICAgcmlnaHQgICA6IDA7XG4gICAgICAgICAgICBib3R0b20gIDogMDtcbiAgICAgICAgICAgIGxlZnQgICAgOiAwO1xuICAgICAgICAgICAgbWFyZ2luICA6IDA7XG4gICAgICAgICAgICBkaXNwbGF5IDogYmxvY2s7XG5cbiAgICAgICAgICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zaXplICA6ICR7cHJvcHMgPT4gcHJvcHMuYXBoU2l6ZSAvIDJ9cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5hcGhTaXplfXB4O1xuXG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiAoY29sb3JzW3Byb3BzLmFwaENvbG9yXSA/XG4gICAgICAgICAgICAgICAgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgcHJvcHMuYXBoQ29sb3IpIDogcHJvcHMuYXBoQ29sb3JcbiAgICAgICAgICAgICl9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5hcGhTdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25TdHlsZWQ7XG4iXX0= */"));

var SELECTOR = 'aph-countdown';
var LOG_PREFIX = 'Aphrodite Countdown:';
var RADIUS$1 = 54;
var VIEW_BOX = 120;
var CIRCUMFERENCE = 2 * Math.PI * RADIUS$1;

function Countdown(_ref) {
  var background = _ref.background,
      className = _ref.className,
      color = _ref.color,
      log = _ref.log,
      size = _ref.size,
      seconds = _ref.seconds,
      strokeWidth = _ref.strokeWidth,
      styles = _ref.styles,
      onFinishCallback = _ref.onFinishCallback,
      rest = _objectWithoutPropertiesLoose(_ref, ["background", "className", "color", "log", "size", "seconds", "strokeWidth", "styles", "onFinishCallback"]);

  var _useState = useState(seconds),
      countdown = _useState[0],
      setCountdown = _useState[1];

  var _useState2 = useState(0),
      dashoffset = _useState2[0],
      setDashoffset = _useState2[1];

  var _useState3 = useState(null),
      timer = _useState3[0],
      setTimer = _useState3[1];

  function handleProgress(value) {
    var _progress = value / 100;

    var _dashoffset = CIRCUMFERENCE * (1 - _progress);

    setDashoffset(_dashoffset);

    if (log) {
      console.log(LOG_PREFIX, value + '%', '|', 'offset:', _dashoffset + ';');
    }
  }

  function handleStart() {
    var _timer = null;
    var _count = 0;
    var _current = seconds;

    var _progress = _current / seconds * 100;

    var miliseconds = 1000;

    if (log) {
      console.log(LOG_PREFIX, seconds, 'seconds to decrease;');
    }

    function _decrease() {
      if (_count > seconds) {
        if (typeof onFinishCallback === 'function') {
          onFinishCallback(seconds, log);
        }

        clearInterval(timer);
        clearInterval(_timer);
        return;
      }

      handleProgress(_progress);
      setCountdown(seconds - _count);
      _count = _count + 1;
      _current = _current - 1;
      _progress = _current / seconds * 100;
    }

    clearInterval(timer);
    clearInterval(_timer);

    _decrease();

    _timer = setInterval(_decrease, miliseconds);
    setTimer(_timer);
    return _timer;
  }

  useEffect(function () {
    var interval = handleStart();
    return function cleanup() {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, [seconds]);
  useEffect(function () {
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/React.createElement(CountdownStyled, _extends({}, rest, {
    aphBackground: background,
    aphColor: color,
    aphSelector: SELECTOR,
    aphSize: size,
    aphStyles: styles,
    className: SELECTOR + "-wrapper " + (className || '')
  }), /*#__PURE__*/React.createElement("svg", {
    className: SELECTOR + " " + (className || ''),
    width: size,
    height: size,
    viewBox: "0 0 " + VIEW_BOX + " " + VIEW_BOX
  }, /*#__PURE__*/React.createElement("circle", {
    className: SELECTOR + "__trace",
    cx: VIEW_BOX / 2,
    cy: VIEW_BOX / 2,
    r: RADIUS$1,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React.createElement("circle", {
    className: SELECTOR + "__line",
    cx: VIEW_BOX / 2,
    cy: VIEW_BOX / 2,
    r: RADIUS$1,
    strokeWidth: strokeWidth,
    style: {
      strokeDasharray: CIRCUMFERENCE,
      strokeDashoffset: dashoffset
    }
  })), /*#__PURE__*/React.createElement("h4", {
    className: SELECTOR + "__count"
  }, countdown));
}

Countdown.defaultProps = {
  color: 'helper',
  background: 'transparent',
  seconds: 10,
  size: 32,
  strokeWidth: 8,
  onFinishCallback: function onFinishCallback(seconds, log) {
    return log && console.log(LOG_PREFIX, seconds, 'seconds finished;');
  }
};
Countdown.propTypes = {
  color: propTypes.string,
  background: propTypes.string,
  seconds: propTypes.number,
  size: propTypes.number,
  strokeWidth: propTypes.number,
  onFinishCallback: propTypes.func,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function Dimmer(_ref) {
  var blur = _ref.blur,
      children = _ref.children,
      className = _ref.className,
      buttons = _ref.buttons,
      delay = _ref.delay,
      id = _ref.id,
      icon = _ref.icon,
      inverse = _ref.inverse,
      opened = _ref.opened,
      openedCallback = _ref.openedCallback,
      styles = _ref.styles,
      title = _ref.title,
      rest = _objectWithoutPropertiesLoose(_ref, ["blur", "children", "className", "buttons", "delay", "id", "icon", "inverse", "opened", "openedCallback", "styles", "title"]);

  var transition = delay / 1000;
  var dimmerId = "dimmer_" + (id || Math.round(Math.random() * 100));

  var _useState = useState(opened),
      visiblity = _useState[0],
      setVisibility = _useState[1];

  var iconProps = _objectSpread2({
    size: 60
  }, typeof icon === 'string' ? {
    slug: icon
  } : icon);

  var titleProps = _objectSpread2(_objectSpread2({}, typeof title === 'string' ? {
    children: title
  } : title), {}, {
    styles: _objectSpread2({
      fontWeight: 700,
      fontSize: '22px',
      lineHeight: '30px'
    }, (title || {}).styles || {})
  });

  var handleParentClassName = useCallback(function (isVisible, optClassName) {
    try {
      document.getElementById(dimmerId).parentElement.classList[isVisible ? 'add' : 'remove'](optClassName || 'aph-dimmer-wrapper--active');
    } catch (e) {
      console.error(e);
    }
  });
  var handleVisibility = useCallback(function (isVisible) {
    handleParentClassName(isVisible);
    setTimeout(function () {
      setVisibility(isVisible);
    }, delay);
  }, [delay, dimmerId, handleParentClassName]);
  useLayoutEffect(function () {
    handleVisibility(opened);
  }, [opened, handleVisibility]);
  useLayoutEffect(function () {
    handleParentClassName(true, 'aph-dimmer-wrapper');
    return function () {
      handleParentClassName(false, 'aph-dimmer-wrapper');
      handleParentClassName(false, 'aph-dimmer-wrapper--active');
    };
  }, [handleParentClassName]);
  return /*#__PURE__*/React.createElement(Styled, _extends({
    id: dimmerId,
    as: "dialog",
    className: (className || '') + " aph-dimmer",
    backgroundColor: inverse ? 'smoke,original,0.75' : 'base,original,.5',
    textColor: inverse ? 'base' : 'inverse',
    textAlign: "center",
    radius: 10,
    styles: _objectSpread2({
      position: 'absolute',
      overflow: opened ? 'auto' : 'hidden',
      opacity: opened ? 1 : 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      border: 0,
      outline: 0,
      width: 'auto',
      height: 'auto',
      transform: "scale(" + (opened ? 1 : 0) + ")",
      willChange: 'line-height,opacity,overflow,top,transform',
      lineHeight: opened ? null : 0,
      transition: "all " + transition + "s ease",
      display: 'flex',
      flex: '1 auto',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '> .aph-dimmer__block': {
        display: 'block',
        width: '100%'
      },
      '.aph-dimmer__buttons': {
        width: 'calc(100% + 20px)'
      }
    }, styles)
  }, rest), blur && /*#__PURE__*/React.createElement(Global, {
    styles: /*#__PURE__*/css(".aph-dimmer-wrapper{position:relative;> *:not(.aph-dimmer){transition:filter 0.1s ease;}&--active{> *:not(.aph-dimmer){filter:blur(", blur, ");}}};label:Dimmer;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRpbW1lci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0hxQiIsImZpbGUiOiJEaW1tZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDYWxsYmFjaywgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjc3MsIEdsb2JhbCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcbmltcG9ydCBCdXR0b25JY29uIGZyb20gJy4uL0J1dHRvbkljb24vQnV0dG9uSWNvbic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29ucy9JY29uJztcbmltcG9ydCBTdHlsZWQgZnJvbSAnLi4vU3R5bGVkL1N0eWxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpbW1lcih7XG4gIGJsdXIsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIGJ1dHRvbnMsXG4gIGRlbGF5LFxuICBpZCxcbiAgaWNvbixcbiAgaW52ZXJzZSxcbiAgb3BlbmVkLFxuICBvcGVuZWRDYWxsYmFjayxcbiAgc3R5bGVzLFxuICB0aXRsZSxcbiAgLi4ucmVzdFxufSkge1xuICBjb25zdCB0cmFuc2l0aW9uID0gKGRlbGF5IC8gMTAwMCk7XG4gIGNvbnN0IGRpbW1lcklkID0gYGRpbW1lcl8ke2lkIHx8IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCl9YDtcbiAgY29uc3QgW3Zpc2libGl0eSwgc2V0VmlzaWJpbGl0eV0gPSB1c2VTdGF0ZShvcGVuZWQpO1xuICBjb25zdCBpY29uUHJvcHMgPSB7XG4gICAgc2l6ZTogNjAsXG4gICAgLi4uKHR5cGVvZiBpY29uID09PSAnc3RyaW5nJyA/IHsgc2x1ZzogaWNvbiB9IDogaWNvbiksXG4gIH07XG4gIGNvbnN0IHRpdGxlUHJvcHMgPSB7XG4gICAgLi4uKHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgPyB7IGNoaWxkcmVuOiB0aXRsZSB9IDogdGl0bGUpLFxuICAgIHN0eWxlczoge1xuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcbiAgICAgIC4uLigodGl0bGUgfHwge30pLnN0eWxlcyB8fCB7fSksXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQYXJlbnRDbGFzc05hbWUgPSB1c2VDYWxsYmFjaygoaXNWaXNpYmxlLCBvcHRDbGFzc05hbWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGltbWVySWQpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0W2lzVmlzaWJsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG9wdENsYXNzTmFtZSB8fCAnYXBoLWRpbW1lci13cmFwcGVyLS1hY3RpdmUnKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlVmlzaWJpbGl0eSA9IHVzZUNhbGxiYWNrKChpc1Zpc2libGUpID0+IHtcbiAgICBoYW5kbGVQYXJlbnRDbGFzc05hbWUoaXNWaXNpYmxlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VmlzaWJpbGl0eShpc1Zpc2libGUpO1xuICAgIH0sIGRlbGF5KTtcbiAgfSwgW2RlbGF5LCBkaW1tZXJJZCwgaGFuZGxlUGFyZW50Q2xhc3NOYW1lXSk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVWaXNpYmlsaXR5KG9wZW5lZCk7XG4gIH0sIFtvcGVuZWQsIGhhbmRsZVZpc2liaWxpdHldKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZVBhcmVudENsYXNzTmFtZSh0cnVlLCAnYXBoLWRpbW1lci13cmFwcGVyJyk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaGFuZGxlUGFyZW50Q2xhc3NOYW1lKGZhbHNlLCAnYXBoLWRpbW1lci13cmFwcGVyJyk7XG4gICAgICBoYW5kbGVQYXJlbnRDbGFzc05hbWUoZmFsc2UsICdhcGgtZGltbWVyLXdyYXBwZXItLWFjdGl2ZScpO1xuICAgIH07XG4gIH0sIFtoYW5kbGVQYXJlbnRDbGFzc05hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRcbiAgICAgIGlkPXtkaW1tZXJJZH1cbiAgICAgIGFzPVwiZGlhbG9nXCJcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lIHx8ICcnfSBhcGgtZGltbWVyYH1cbiAgICAgIGJhY2tncm91bmRDb2xvcj17aW52ZXJzZSA/ICdzbW9rZSxvcmlnaW5hbCwwLjc1JyA6ICdiYXNlLG9yaWdpbmFsLC41J31cbiAgICAgIHRleHRDb2xvcj17aW52ZXJzZSA/ICdiYXNlJyA6ICdpbnZlcnNlJ31cbiAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICByYWRpdXM9ezEwfVxuICAgICAgc3R5bGVzPXt7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBvdmVyZmxvdzogKG9wZW5lZCA/ICdhdXRvJyA6ICdoaWRkZW4nKSxcbiAgICAgICAgb3BhY2l0eTogKG9wZW5lZCA/IDEgOiAwKSxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke29wZW5lZCA/IDEgOiAwfSlgLFxuICAgICAgICB3aWxsQ2hhbmdlOiAnbGluZS1oZWlnaHQsb3BhY2l0eSxvdmVyZmxvdyx0b3AsdHJhbnNmb3JtJyxcbiAgICAgICAgbGluZUhlaWdodDogb3BlbmVkID8gbnVsbCA6IDAsXG4gICAgICAgIHRyYW5zaXRpb246IGBhbGwgJHt0cmFuc2l0aW9ufXMgZWFzZWAsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleDogJzEgYXV0bycsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAnPiAuYXBoLWRpbW1lcl9fYmxvY2snOiB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICB9LFxuICAgICAgICAnLmFwaC1kaW1tZXJfX2J1dHRvbnMnOiB7XG4gICAgICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgKyAyMHB4KScsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnN0eWxlcyxcbiAgICAgIH19XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7Ymx1ciAmJiAoXG4gICAgICAgIDxHbG9iYWxcbiAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgIC5hcGgtZGltbWVyLXdyYXBwZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgPiAqOm5vdCguYXBoLWRpbW1lcikge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjFzIGVhc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLS1hY3RpdmUge1xuICAgICAgICAgICAgICAgID4gKjpub3QoLmFwaC1kaW1tZXIpIHtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigke2JsdXJ9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHt2aXNpYmxpdHkgJiYgKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgPFN0eWxlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcGgtZGltbWVyX19ibG9jayBhcGgtZGltbWVyX19pY29uXCJcbiAgICAgICAgICAgICAgcGFkZGluZz17KCF0aXRsZSAmJiBjaGlsZHJlbikgPyAnMCcgOiAnMCAwIDVweCd9XG4gICAgICAgICAgICAgIHN0eWxlcz17eyBsaW5lSGVpZ2h0OiAwIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgey4uLmljb25Qcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU3R5bGVkPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICAgIDxTdHlsZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLWRpbW1lcl9fYmxvY2sgYXBoLWRpbW1lcl9fdGl0bGVcIlxuICAgICAgICAgICAgICBwYWRkaW5nPVwiNXB4IDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3R5bGVkIHsuLi50aXRsZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9TdHlsZWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgPFN0eWxlZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcGgtZGltbWVyX19ibG9jayBhcGgtZGltbWVyX19jb250ZW50XCJcbiAgICAgICAgICAgICAgcGFkZGluZz1cIjVweCAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9TdHlsZWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IWJ1dHRvbnMgfHwgIWJ1dHRvbnMubGVuZ3RoID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxTdHlsZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLWRpbW1lcl9fYmxvY2sgYXBoLWRpbW1lcl9fYnV0dG9uc1wiXG4gICAgICAgICAgICAgIG1hcmdpbj1cIjAgLTEwcHhcIlxuICAgICAgICAgICAgICBwYWRkaW5nPVwiNXB4IDBcIlxuICAgICAgICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICcuYXBoLWJ0bic6IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzEwcHgnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtidXR0b25zLm1hcCgoYnRuLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRLZXkgPSBgJHtkaW1tZXJJZH1fYnRuXyR7aW5kZXh9YDtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGljb246IGJ0bkljb24sIC4uLmJ0blJlc3QgfSA9IChidG4gfHwge30pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ0bkljb25Qcm9wcyA9IHR5cGVvZiBidG5JY29uID09PSAnb2JqZWN0JyA/IGJ0bkljb24gOiB7XG4gICAgICAgICAgICAgICAgICBpY29uOiBidG5JY29uLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYnRuSWNvbiA/IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25JY29uIGtleT17ZWxlbWVudEtleX0gey4uLmJ0bkljb25Qcm9wc30gey4uLmJ0blJlc3R9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXtlbGVtZW50S2V5fSB7Li4uYnRuUmVzdH0gLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3R5bGVkPlxuICAgICAgICAgICl9XG4gICAgICAgICAge29wZW5lZENhbGxiYWNrICYmIChcbiAgICAgICAgICAgIDxCdXR0b25JY29uXG4gICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgaWNvbj1cInRpbWVzXCJcbiAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbmVkQ2FsbGJhY2soZmFsc2UpfVxuICAgICAgICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiAgIDogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICB0b3AgICAgICAgIDogJzE1cHgnLFxuICAgICAgICAgICAgICAgIHJpZ2h0ICAgICAgOiAnMTVweCcsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93ICA6ICdub25lJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uIDogJ2JveC1zaGFkb3cgMC41cyBlYXNlJyxcbiAgICAgICAgICAgICAgICAnJjphY3RpdmUsICY6Zm9jdXMsICY6aG92ZXInOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3cgICAgICA6ICcwIDAgM3B4IC0xcHgnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvU3R5bGVkPlxuICApO1xufVxuXG5EaW1tZXIuZGVmYXVsdFByb3BzID0ge1xuICBibHVyICAgOiAnM3B4JyxcbiAgYnV0dG9uczogW10sXG4gIGRlbGF5ICA6IDI1MCxcbiAgaWNvbiAgIDogJycsXG4gIGlkICAgICA6ICcnLFxuICBpbnZlcnNlOiBmYWxzZSxcbiAgcGFkZGluZzogJzEwcHggMTVweCcsXG4gIHRpdGxlICA6ICcnLFxuICBvcGVuZWQ6IGZhbHNlLFxufTtcblxuRGltbWVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFBhcmVudCBjaGlsZC1ub2RlcyBibHVyIHJhZGl1c1xuICAgKi9cbiAgYmx1cjogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQnV0dG9uc1xuICAgKi9cbiAgYnV0dG9uczogcHJvcFR5cGVzLmFycmF5LFxuXG4gIC8qKlxuICAgKiBDb250ZW50IGluc2lkZVxuICAgKi9cbiAgY2hpbGRyZW46IHByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbiBkZWxheSBpbiBtaWxpc2Vjb25kc1xuICAgKi9cbiAgZGVsYXk6IHByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIENvbnRlbnQgSWNvbi4gUGFzcyB0aGUgaWNvbiBzbHVnIGFzIHN0cmluZyBvciBhbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBpY29uIHByb3BzLlxuICAgKi9cbiAgaWNvbjogcHJvcFR5cGVzLm9uZU9mVHlwZShbIHByb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vYmplY3QgXSksXG5cbiAgLyoqXG4gICAqIFJlcXVpcmVkIHRvIGF2b2lkIHByb2JsZW1zXG4gICAqL1xuICBpZDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGJhY2tncm91bmQgYW5kIHRleHQgY29sb3Igc2NoZW1hLlxuICAgKiBJdCdzIG92ZXJyaWRlZCBieSBgYmFja2dyb3VuZENvbG9yYCBhbmQgYHRleHRDb2xvcmAgcHJvcHMuXG4gICAqL1xuICBpbnZlcnNlOiBwcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGltbWVyIHZpc2liaWxpdHlcbiAgICovXG4gIG9wZW5lZDogcHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIGRpc3BsYXkgdGhlIGRlZmF1bHQgY2xvc2UgYnV0dG9uIGluc2lkZVxuICAgKi9cbiAgb3BlbmVkQ2FsbGJhY2s6IHByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBXcmFwcGVyIGludGVybmFsIHNwYWNlbWVudFxuICAgKi9cbiAgcGFkZGluZzogcHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ29udGVudCBUaXRsZVxuICAgKi9cbiAgdGl0bGU6IHByb3BUeXBlcy5vbmVPZlR5cGUoWyBwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMub2JqZWN0IF0pLFxufTtcbiJdfQ== */"))
  }), visiblity && /*#__PURE__*/React.createElement(Fragment$1, null, icon && /*#__PURE__*/React.createElement(Styled, {
    className: "aph-dimmer__block aph-dimmer__icon",
    padding: !title && children ? '0' : '0 0 5px',
    styles: {
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, iconProps)), title && /*#__PURE__*/React.createElement(Styled, {
    className: "aph-dimmer__block aph-dimmer__title",
    padding: "5px 0"
  }, /*#__PURE__*/React.createElement(Styled, titleProps)), children && /*#__PURE__*/React.createElement(Styled, {
    className: "aph-dimmer__block aph-dimmer__content",
    padding: "5px 0"
  }, children), !buttons || !buttons.length ? null : /*#__PURE__*/React.createElement(Styled, {
    className: "aph-dimmer__block aph-dimmer__buttons",
    margin: "0 -10px",
    padding: "5px 0",
    styles: {
      lineHeight: 0,
      '.aph-btn': {
        margin: '10px'
      }
    }
  }, buttons.map(function (btn, index) {
    var elementKey = dimmerId + "_btn_" + index;

    var _ref2 = btn || {},
        btnIcon = _ref2.icon,
        btnRest = _objectWithoutPropertiesLoose(_ref2, ["icon"]);

    var btnIconProps = typeof btnIcon === 'object' ? btnIcon : {
      icon: btnIcon
    };
    return btnIcon ? /*#__PURE__*/React.createElement(ButtonIcon, _extends({
      key: elementKey
    }, btnIconProps, btnRest)) : /*#__PURE__*/React.createElement(Button, _extends({
      key: elementKey
    }, btnRest));
  })), openedCallback && /*#__PURE__*/React.createElement(ButtonIcon, {
    link: true,
    icon: "times",
    tabIndex: "-1",
    color: "currentColor",
    onClick: function onClick() {
      return openedCallback(false);
    },
    styles: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      boxShadow: 'none',
      transition: 'box-shadow 0.5s ease',
      '&:active, &:focus, &:hover': {
        backgroundColor: 'transparent',
        boxShadow: '0 0 3px -1px'
      }
    }
  })));
}
Dimmer.defaultProps = {
  blur: '3px',
  buttons: [],
  delay: 250,
  icon: '',
  id: '',
  inverse: false,
  padding: '10px 15px',
  title: '',
  opened: false
};
Dimmer.propTypes = {
  blur: propTypes.string,
  buttons: propTypes.array,
  children: propTypes.any,
  delay: propTypes.number,
  icon: propTypes.oneOfType([propTypes.string, propTypes.object]),
  id: propTypes.string.isRequired,
  inverse: propTypes.bool,
  opened: propTypes.bool,
  openedCallback: propTypes.func,
  padding: propTypes.string,
  title: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var LayerMenu = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _objectSpread2$1;

  var children = _ref.children,
      icon = _ref.icon,
      loading = _ref.loading,
      options = _ref.options,
      right = _ref.right,
      originalStyles = _ref.styles,
      toggle = _ref.toggle,
      toggleProps = _ref.toggleProps,
      top = _ref.top,
      width = _ref.width,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "disabled", "icon", "loading", "options", "right", "styles", "toggle", "toggleProps", "top", "width"]);

  var xs = originalStyles.xs,
      styles = _objectWithoutPropertiesLoose(originalStyles, ["xs"]);

  return /*#__PURE__*/React.createElement(Dropdown, _extends({
    ref: ref,
    thin: true,
    right: true,
    width: width,
    toggleTabIndex: null,
    toggleBlock: true,
    toggleProps: !loading ? toggleProps : {
      onClick: function onClick() {}
    },
    toggle: toggle || /*#__PURE__*/React.createElement(Icon, _extends({}, icon, {
      size: icon.size || 40,
      slug: icon.slug || 'arrow-down',
      color: loading ? 'disabled' : icon.color
    })),
    styles: _objectSpread2((_objectSpread2$1 = {
      position: 'absolute',
      width: '40px',
      height: '40px',
      top: "" + (top || 'calc(50% - 20px)'),
      right: "" + (right || '5px'),
      '.aph-dropdown__content': {
        top: '90%',
        right: '0'
      }
    }, _objectSpread2$1[MEDIA_QUERIES.LT.SM] = _objectSpread2({
      right: '5px',
      '.aph-dropdown__content': {
        right: '0'
      }
    }, xs || {}), _objectSpread2$1), styles)
  }, props), options && options.length && /*#__PURE__*/React.createElement(List, {
    styles: {
      overflow: 'hidden'
    }
  }, options.map(function (option, index) {
    var _ref2 = option || {},
        children = _ref2.children;

    return /*#__PURE__*/React.createElement(ListItem, _extends({
      key: index
    }, option), children || option);
  })), children);
});
LayerMenu.defaultProps = {
  icon: {
    color: 'secondary',
    size: 40,
    slug: 'arrow-down'
  },
  loading: false,
  options: [],
  right: '',
  top: '',
  styles: {}
};
LayerMenu.propTypes = {
  icon: propTypes.object,
  loading: propTypes.bool,
  options: propTypes.array,
  toggle: propTypes.oneOfType([propTypes.element, propTypes.string]),
  top: propTypes.string,
  right: propTypes.string,
  styles: propTypes.object,
  width: propTypes.string
};

var Wrapper = /*#__PURE__*/_styled(Styled, {
  target: "e1vmh9m20",
  label: "Wrapper"
})("position:absolute;z-index:10;top:26.93%;bottom:26.93%;left:", function (_ref) {
  var hasInput = _ref.hasInput;
  return !hasInput ? 1 : 4;
}, "0px;display:block;padding:0;margin:0;width:30px;height:auto;border:0;outline:0;cursor:pointer;background-color:transparent;transition-property:top,bottom;transition-duration:0.2s;transition-timing-function:linear;-webkit-tap-highlight-color:rgba(0,0,0,0);&:after{content:\" \";position:absolute;top:0;bottom:0;left:50%;transform:translateX(-50%);display:block;margin:0;padding:0;width:4px;height:auto;border-radius:2.5px;background-color:", function (props) {
  return colors$1.get(props.textColor);
}, ";}&:active,&:focus,&:hover{top:15%;bottom:15%;border:0;outline:0;.aph-layer__status__description{opacity:1;z-index:9;visibility:visible;}}.aph-layer__status__description{box-sizing:border-box;z-index:-1;opacity:0;visibility:hidden;position:absolute;top:50%;left:25px;transform:translateY(-50%);display:inline-block;width:auto;min-height:30px;padding:5px 10px;white-space:nowrap;font-size:12px;line-height:20px;text-transform:uppercase;border-radius:5px;color:inherit;background-color:#ffffff;box-shadow:0 0 5px rgba(0,0,0,0.2);transition-property:opacity,z-index,visibility;transition-duration:0.25s;transition-timing-function:linear;}", MEDIA_QUERIES.LT.SM, "{left:", function (_ref2) {
  var hasInput = _ref2.hasInput;
  return !hasInput ? '5px' : '40px';
}, ";.aph-layer__status__description{left:30px;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxheWVyU3RhdHVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPOEIiLCJmaWxlIjoiTGF5ZXJTdGF0dXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU3R5bGVkIGZyb20gJy4uL1N0eWxlZC9TdHlsZWQnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkKFN0eWxlZClgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXggOiAxMDtcbiAgICB0b3AgICAgIDogMjYuOTMlO1xuICAgIGJvdHRvbSAgOiAyNi45MyU7XG4gICAgbGVmdCAgICA6ICR7KHsgaGFzSW5wdXQgfSkgPT4gIWhhc0lucHV0ID8gMSA6IDR9MHB4O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4gOiAwO1xuICAgIHdpZHRoICA6IDMwcHg7XG4gICAgaGVpZ2h0IDogYXV0bztcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBjdXJzb3IgOiBwb2ludGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogdG9wLCBib3R0b207XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMnM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcblxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50ICA6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgICAgICB0b3AgICAgICA6IDA7XG4gICAgICAgIGJvdHRvbSAgIDogMDtcbiAgICAgICAgbGVmdCAgICAgOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICAgICBkaXNwbGF5IDogYmxvY2s7XG4gICAgICAgIG1hcmdpbiAgOiAwO1xuICAgICAgICBwYWRkaW5nIDogMDtcbiAgICAgICAgd2lkdGggICA6IDRweDtcbiAgICAgICAgaGVpZ2h0ICA6IGF1dG87XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMi41cHg7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0KHByb3BzLnRleHRDb2xvcil9O1xuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Zm9jdXMsXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRvcCAgICA6IDE1JTtcbiAgICAgICAgYm90dG9tIDogMTUlO1xuICAgICAgICBib3JkZXIgOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIC5hcGgtbGF5ZXJfX3N0YXR1c19fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgb3BhY2l0eSAgIDogMTtcbiAgICAgICAgICAgIHotaW5kZXggICA6IDk7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFwaC1sYXllcl9fc3RhdHVzX19kZXNjcmlwdGlvbiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHotaW5kZXggICA6IC0xO1xuICAgICAgICBvcGFjaXR5ICAgOiAwO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgICAgICB0b3AgICAgICAgOiA1MCU7XG4gICAgICAgIGxlZnQgICAgICA6IDI1cHg7XG4gICAgICAgIHRyYW5zZm9ybSA6IHRyYW5zbGF0ZVkoLTUwJSk7XG5cbiAgICAgICAgZGlzcGxheSAgIDogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aCAgICAgOiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgICBwYWRkaW5nICAgOiA1cHggMTBweDtcblxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodCAgIDogMjBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgICBib3JkZXItcmFkaXVzICAgOiA1cHg7XG4gICAgICAgIGNvbG9yICAgICAgICAgICA6IGluaGVyaXQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJveC1zaGFkb3cgICAgICA6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBvcGFjaXR5LCB6LWluZGV4LCB2aXNpYmlsaXR5O1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgfVxuXG4gICAgJHtNRURJQV9RVUVSSUVTLkxULlNNfSB7XG4gICAgICAgIGxlZnQ6ICR7KHsgaGFzSW5wdXQgfSkgPT4gIWhhc0lucHV0ID8gJzVweCcgOiAnNDBweCd9O1xuXG4gICAgICAgIC5hcGgtbGF5ZXJfX3N0YXR1c19fZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBJdHNlbGYgKi9cbmNvbnN0IExheWVyU3RhdHVzID0gZm9yd2FyZFJlZigoe1xuICAgIGNoaWxkcmVuLFxuICAgIGNvbG9yLFxuICAgIGxhYmVsLFxuICAgIHRleHQsXG4gICAgY2hlY2tib3gsXG4gICAgcmFkaW8sXG4gICAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyXG4gICAgICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgdGV4dENvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgaGFzSW5wdXQ9eyEhKGNoZWNrYm94IHx8IHJhZGlvKX1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgeyhjaGlsZHJlbiB8fCBsYWJlbCB8fCB0ZXh0KSAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXBoLWxheWVyX19zdGF0dXNfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbiB8fCBsYWJlbCB8fCB0ZXh0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuTGF5ZXJTdGF0dXMuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgY29sb3I6ICdkaXNhYmxlZCcsXG4gICAgdGFiSW5kZXg6ICctMScsXG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgc3R5bGVzOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkxheWVyU3RhdHVzLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBIb3ZlciBjb250ZW50XG4gICAgICovXG4gICAgY2hpbGRyZW46IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMuZWxlbWVudCxcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIENvbG9yIG5hbWUgZnJvbSBDb2xvcnMgVXRpbGl0eVxuICAgICAqL1xuICAgIGNvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIHN0eWxlc1xuICAgICAqL1xuICAgIHN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgTGF5ZXJTdGF0dXM7XG4iXX0= */"));

var LayerStatus = /*#__PURE__*/forwardRef(function (_ref3, ref) {
  var children = _ref3.children,
      color = _ref3.color,
      label = _ref3.label,
      text = _ref3.text,
      checkbox = _ref3.checkbox,
      radio = _ref3.radio,
      props = _objectWithoutPropertiesLoose(_ref3, ["children", "color", "label", "text", "checkbox", "radio"]);

  return /*#__PURE__*/React.createElement(Wrapper, _extends({
    as: "button",
    type: "button",
    tabIndex: "-1",
    textColor: color,
    ref: ref,
    hasInput: !!(checkbox || radio)
  }, props), (children || label || text) && /*#__PURE__*/React.createElement("span", {
    className: "aph-layer__status__description"
  }, children || label || text));
});
LayerStatus.defaultProps = {
  className: '',
  color: 'disabled',
  tabIndex: '-1',
  type: 'button',
  styles: {}
};
LayerStatus.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.element]),
  color: propTypes.string,
  styles: propTypes.object
};

function _EMOTION_STRINGIFIED_CSS_ERROR__$4() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var AphCheckboxWrapperStyled = _styled("div", {
  target: "e1s2q62n0",
  label: "AphCheckboxWrapperStyled"
})(process.env.NODE_ENV === "production" ? {
  name: "g9qje4",
  styles: "box-sizing:border-box;display:block;position:relative;"
} : {
  name: "g9qje4",
  styles: "box-sizing:border-box;display:block;position:relative;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoZWNrYm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPMkMiLCJmaWxlIjoiQ2hlY2tib3guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgSUNPTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IEljb25DaGVja1RoaW4gZnJvbSAnLi4vLi4vSWNvbnMvSWNvbkNoZWNrVGhpbic7XG5cbmNvbnN0IEFwaENoZWNrYm94V3JhcHBlclN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IEFwaENoZWNrYm94TWFza1N0eWxlZCA9IHN0eWxlZC5sYWJlbGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG5cbiAgICBtaW4taGVpZ2h0ICAgIDogMzBweDtcbiAgICBwYWRkaW5nLXRvcCAgIDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy1yaWdodCA6ICR7cHJvcHMgPT4gcHJvcHMubGFiZWxSaWdodCA/ICc0MHB4JyA6IG51bGx9O1xuICAgIHBhZGRpbmctbGVmdCAgOiAke3Byb3BzID0+ICFwcm9wcy5sYWJlbFJpZ2h0ID8gJzQwcHgnIDogbnVsbH07XG5cbiAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnJpZ2h0ID8gJ3JpZ2h0JyA6IG51bGx9O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBib3gtc2l6aW5nICA6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbnRlbnQgICAgIDogXCIgXCI7XG4gICAgICAgIHBvc2l0aW9uICAgIDogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXkgICAgIDogYmxvY2s7XG4gICAgICAgIHdpZHRoICAgICAgIDogMzBweDtcbiAgICAgICAgaGVpZ2h0ICAgICAgOiAzMHB4O1xuICAgICAgICBib3JkZXIgICAgICA6ICR7KHsgYm9yZGVyV2lkdGggfSkgPT4gYm9yZGVyV2lkdGh9cHggc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCBwcm9wcy5ib3JkZXJDb2xvciB8fCAnYm9yZGVyJykpfTtcblxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTVweCk7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41cHg7XG5cbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjE1cztcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtaW1hZ2UsIGJvcmRlci1jb2xvcjtcblxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlICAgOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0Mm1Oa1lBQUFBQVlBQWpDQjBDOEFBQUFBU1VWT1JLNUNZSUk9KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAgIDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSAgICA6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xuICAgIH1cbmA7XG5cbmNvbnN0IEFwaENoZWNrYm94U3R5bGVkID0gc3R5bGVkLmlucHV0YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheSA6IGJsb2NrO1xuICAgIHdpZHRoICAgOiAzMHB4O1xuICAgIGhlaWdodCAgOiAzMHB4O1xuICAgIG1hcmdpbiAgOiAwO1xuICAgIG9wYWNpdHkgOiAwO1xuXG4gICAgdG9wICA6IDA7XG4gICAgcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMubGFiZWxSaWdodCA/ICcwJyA6IG51bGx9O1xuICAgIGxlZnQgOiAke3Byb3BzID0+ICFwcm9wcy5sYWJlbFJpZ2h0ID8gJzAnIDogbnVsbH07XG5cbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrIHtcbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmxhYmVsUmlnaHQgfHwgcHJvcHMucmlnaHQpID8gJzAnIDogbnVsbH07XG4gICAgICAgICAgICBsZWZ0IDogJHtwcm9wcyA9PiAoIXByb3BzLmxhYmVsUmlnaHQgJiYgIXByb3BzLnJpZ2h0KSA/ICcwJyA6IG51bGx9O1xuXG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSl9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjphY3RpdmUsXG4gICAgJjpjaGVja2VkLFxuICAgICY6Zm9jdXMsXG4gICAgJjpob3ZlciB7XG4gICAgICAgICsgLmFwaC1mb3JtLWNvbnRyb2wtbWFzayB7XG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKX07XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSl9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpjaGVja2VkICsgLmFwaC1mb3JtLWNvbnRyb2wtbWFzazpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJvcHMgPT4gSUNPTlMuRU5DT0RFX1NWRyhcbiAgICAgICAgICAgIDxJY29uQ2hlY2tUaGluXG4gICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKX0nKTtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkLFxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICArIC5hcGgtZm9ybS1jb250cm9sLW1hc2sge1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdkaXNhYmxlZCcpKX07XG5cbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnZGlzYWJsZWQnKSl9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAnZGlzYWJsZWQnKX07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAnZGlzYWJsZWQnKX07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAnYmFja2dyb3VuZCcpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6Y2hlY2tlZCArIC5hcGgtZm9ybS1jb250cm9sLW1hc2s6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtwcm9wcyA9PiBJQ09OUy5FTkNPREVfU1ZHKFxuICAgICAgICAgICAgICAgIDxJY29uQ2hlY2tUaGluXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgJ2Rpc2FibGVkJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9Jyk7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBDaGVja2JveCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJXaWR0aCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGxhYmVsUHJvcHMsXG4gICAgICAgIGxhYmVsUmlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICByaWdodCxcbiAgICB9ID0gcHJvcHM7XG4gICAgbGV0IG5ld1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuXG4gICAgZGVsZXRlIG5ld1Byb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaENoZWNrYm94V3JhcHBlclN0eWxlZD5cbiAgICAgICAgICAgIDxBcGhDaGVja2JveFN0eWxlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1mb3JtLWNvbnRyb2wgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QXBoQ2hlY2tib3hNYXNrU3R5bGVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWZvcm0tY29udHJvbC1tYXNrICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgIHJpZ2h0PXtyaWdodH1cbiAgICAgICAgICAgICAgICBsYWJlbFJpZ2h0PXtsYWJlbFJpZ2h0IHx8IHJpZ2h0fVxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcn1cbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD17Ym9yZGVyV2lkdGh9XG4gICAgICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9BcGhDaGVja2JveE1hc2tTdHlsZWQ+XG4gICAgICAgIDwvQXBoQ2hlY2tib3hXcmFwcGVyU3R5bGVkPlxuICAgICk7XG59KTtcblxuQ2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICAgIGlkICAgICAgICAgOiBgZm9ybUNvbnRyb2xSYW5kb21JRCR7TWF0aC5yYW5kb20oKX1gLFxuICAgIGxhYmVsUHJvcHMgOiB7fSxcbiAgICBsYWJlbFJpZ2h0IDogZmFsc2UsXG4gICAgcmlnaHQgICAgICA6IGZhbHNlLFxuICAgIGJvcmRlckNvbG9yOiAnJyxcbiAgICBib3JkZXJXaWR0aCA6IDIsXG4gICAgc3R5bGVzICAgICA6IHt9LFxufTtcblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAgIGlkICAgICAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWxQcm9wcyA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgbGFiZWxSaWdodCA6IHByb3BUeXBlcy5ib29sLFxuICAgIHJpZ2h0ICAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib3JkZXJDb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBib3JkZXJXaWR0aDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZXMgICAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$4
});

var AphCheckboxMaskStyled = _styled("label", {
  target: "e1s2q62n1",
  label: "AphCheckboxMaskStyled"
})("box-sizing:border-box;display:block;position:relative;cursor:pointer;min-height:30px;padding-top:5px;padding-bottom:5px;padding-right:", function (props) {
  return props.labelRight ? '40px' : null;
}, ";padding-left:", function (props) {
  return !props.labelRight ? '40px' : null;
}, ";text-align:", function (props) {
  return props.right ? 'right' : null;
}, ";transition:all 0.15s ease;&:before{box-sizing:border-box;content:\" \";position:absolute;display:block;width:30px;height:30px;border:", function (_ref) {
  var borderWidth = _ref.borderWidth;
  return borderWidth;
}, "px solid;border-color:", function (props) {
  return colors$1.getFullColor(props, props.color || props.borderColor || 'border');
}, ";top:calc(50% - 15px);border-radius:7.5px;transition-timing-function:ease;transition-duration:0.15s;transition-property:background-color,background-image,border-color;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);background-color:transparent;background-size:20px;background-position:center;background-repeat:no-repeat;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoZWNrYm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhMEMiLCJmaWxlIjoiQ2hlY2tib3guanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgSUNPTlMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IEljb25DaGVja1RoaW4gZnJvbSAnLi4vLi4vSWNvbnMvSWNvbkNoZWNrVGhpbic7XG5cbmNvbnN0IEFwaENoZWNrYm94V3JhcHBlclN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IEFwaENoZWNrYm94TWFza1N0eWxlZCA9IHN0eWxlZC5sYWJlbGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XG5cbiAgICBtaW4taGVpZ2h0ICAgIDogMzBweDtcbiAgICBwYWRkaW5nLXRvcCAgIDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy1yaWdodCA6ICR7cHJvcHMgPT4gcHJvcHMubGFiZWxSaWdodCA/ICc0MHB4JyA6IG51bGx9O1xuICAgIHBhZGRpbmctbGVmdCAgOiAke3Byb3BzID0+ICFwcm9wcy5sYWJlbFJpZ2h0ID8gJzQwcHgnIDogbnVsbH07XG5cbiAgICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLnJpZ2h0ID8gJ3JpZ2h0JyA6IG51bGx9O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBib3gtc2l6aW5nICA6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbnRlbnQgICAgIDogXCIgXCI7XG4gICAgICAgIHBvc2l0aW9uICAgIDogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXkgICAgIDogYmxvY2s7XG4gICAgICAgIHdpZHRoICAgICAgIDogMzBweDtcbiAgICAgICAgaGVpZ2h0ICAgICAgOiAzMHB4O1xuICAgICAgICBib3JkZXIgICAgICA6ICR7KHsgYm9yZGVyV2lkdGggfSkgPT4gYm9yZGVyV2lkdGh9cHggc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCBwcm9wcy5ib3JkZXJDb2xvciB8fCAnYm9yZGVyJykpfTtcblxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTVweCk7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogNy41cHg7XG5cbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjE1cztcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtaW1hZ2UsIGJvcmRlci1jb2xvcjtcblxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlICAgOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FRQUFBQzFIQXdDQUFBQUMwbEVRVlI0Mm1Oa1lBQUFBQVlBQWpDQjBDOEFBQUFBU1VWT1JLNUNZSUk9KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciAgIDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZSAgICA6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xuICAgIH1cbmA7XG5cbmNvbnN0IEFwaENoZWNrYm94U3R5bGVkID0gc3R5bGVkLmlucHV0YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheSA6IGJsb2NrO1xuICAgIHdpZHRoICAgOiAzMHB4O1xuICAgIGhlaWdodCAgOiAzMHB4O1xuICAgIG1hcmdpbiAgOiAwO1xuICAgIG9wYWNpdHkgOiAwO1xuXG4gICAgdG9wICA6IDA7XG4gICAgcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMubGFiZWxSaWdodCA/ICcwJyA6IG51bGx9O1xuICAgIGxlZnQgOiAke3Byb3BzID0+ICFwcm9wcy5sYWJlbFJpZ2h0ID8gJzAnIDogbnVsbH07XG5cbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrIHtcbiAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICY6Zm9jdXMsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmxhYmVsUmlnaHQgfHwgcHJvcHMucmlnaHQpID8gJzAnIDogbnVsbH07XG4gICAgICAgICAgICBsZWZ0IDogJHtwcm9wcyA9PiAoIXByb3BzLmxhYmVsUmlnaHQgJiYgIXByb3BzLnJpZ2h0KSA/ICcwJyA6IG51bGx9O1xuXG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSl9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjphY3RpdmUsXG4gICAgJjpjaGVja2VkLFxuICAgICY6Zm9jdXMsXG4gICAgJjpob3ZlciB7XG4gICAgICAgICsgLmFwaC1mb3JtLWNvbnRyb2wtbWFzayB7XG4gICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKX07XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSl9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpjaGVja2VkICsgLmFwaC1mb3JtLWNvbnRyb2wtbWFzazpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJvcHMgPT4gSUNPTlMuRU5DT0RFX1NWRyhcbiAgICAgICAgICAgIDxJY29uQ2hlY2tUaGluXG4gICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKX0nKTtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkLFxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICArIC5hcGgtZm9ybS1jb250cm9sLW1hc2sge1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdkaXNhYmxlZCcpKX07XG5cbiAgICAgICAgICAgICY6YWN0aXZlLFxuICAgICAgICAgICAgJjpmb2N1cyxcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnZGlzYWJsZWQnKSl9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAnZGlzYWJsZWQnKX07XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAnZGlzYWJsZWQnKX07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAnYmFja2dyb3VuZCcpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6Y2hlY2tlZCArIC5hcGgtZm9ybS1jb250cm9sLW1hc2s6YmVmb3JlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtwcm9wcyA9PiBJQ09OUy5FTkNPREVfU1ZHKFxuICAgICAgICAgICAgICAgIDxJY29uQ2hlY2tUaGluXG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgJ2Rpc2FibGVkJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9Jyk7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBDaGVja2JveCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJXaWR0aCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGxhYmVsUHJvcHMsXG4gICAgICAgIGxhYmVsUmlnaHQsXG4gICAgICAgIGlkLFxuICAgICAgICByaWdodCxcbiAgICB9ID0gcHJvcHM7XG4gICAgbGV0IG5ld1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpO1xuXG4gICAgZGVsZXRlIG5ld1Byb3BzLmNoaWxkcmVuO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwaENoZWNrYm94V3JhcHBlclN0eWxlZD5cbiAgICAgICAgICAgIDxBcGhDaGVja2JveFN0eWxlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1mb3JtLWNvbnRyb2wgJHtjbGFzc05hbWUgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICB7Li4ubmV3UHJvcHN9XG4gICAgICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QXBoQ2hlY2tib3hNYXNrU3R5bGVkXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYXBoLWZvcm0tY29udHJvbC1tYXNrICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgIHJpZ2h0PXtyaWdodH1cbiAgICAgICAgICAgICAgICBsYWJlbFJpZ2h0PXtsYWJlbFJpZ2h0IHx8IHJpZ2h0fVxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yPXtib3JkZXJDb2xvcn1cbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aD17Ym9yZGVyV2lkdGh9XG4gICAgICAgICAgICAgICAgey4uLmxhYmVsUHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9BcGhDaGVja2JveE1hc2tTdHlsZWQ+XG4gICAgICAgIDwvQXBoQ2hlY2tib3hXcmFwcGVyU3R5bGVkPlxuICAgICk7XG59KTtcblxuQ2hlY2tib3guZGVmYXVsdFByb3BzID0ge1xuICAgIGlkICAgICAgICAgOiBgZm9ybUNvbnRyb2xSYW5kb21JRCR7TWF0aC5yYW5kb20oKX1gLFxuICAgIGxhYmVsUHJvcHMgOiB7fSxcbiAgICBsYWJlbFJpZ2h0IDogZmFsc2UsXG4gICAgcmlnaHQgICAgICA6IGZhbHNlLFxuICAgIGJvcmRlckNvbG9yOiAnJyxcbiAgICBib3JkZXJXaWR0aCA6IDIsXG4gICAgc3R5bGVzICAgICA6IHt9LFxufTtcblxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xuICAgIGlkICAgICAgICAgOiBwcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWxQcm9wcyA6IHByb3BUeXBlcy5vYmplY3QsXG4gICAgbGFiZWxSaWdodCA6IHByb3BUeXBlcy5ib29sLFxuICAgIHJpZ2h0ICAgICAgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICBib3JkZXJDb2xvcjogcHJvcFR5cGVzLnN0cmluZyxcbiAgICBib3JkZXJXaWR0aDogcHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZXMgICAgIDogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIHByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHByb3BUeXBlcy5vYmplY3QsXG4gICAgXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiJdfQ== */"));

var AphCheckboxStyled = _styled("input", {
  target: "e1s2q62n2",
  label: "AphCheckboxStyled"
})("box-sizing:border-box;position:absolute;display:block;width:30px;height:30px;margin:0;opacity:0;top:0;right:", function (props) {
  return props.labelRight ? '0' : null;
}, ";left:", function (props) {
  return !props.labelRight ? '0' : null;
}, ";vertical-align:middle;+ .aph-form-control-mask{&:active,&:focus,&:hover{color:", function (props) {
  return colors$1.getFullColor(props, props.color || 'secondary');
}, ";}&:before{right:", function (props) {
  return props.labelRight || props.right ? '0' : null;
}, ";left:", function (props) {
  return !props.labelRight && !props.right ? '0' : null;
}, ";&:active,&:focus,&:hover{border-color:", function (props) {
  return colors$1.getFullColor(props, props.color || 'secondary');
}, ";}}}&:active,&:checked,&:focus,&:hover{+ .aph-form-control-mask{color:", function (props) {
  return colors$1.getFullColor(props, props.color || 'secondary');
}, ";&:before{border-color:", function (props) {
  return colors$1.getFullColor(props, props.color || 'secondary');
}, ";}}}&:checked + .aph-form-control-mask:before{background-image:url('", function (props) {
  return ICONS.ENCODE_SVG( /*#__PURE__*/React.createElement(IconCheckThin, {
    size: 20,
    color: colors$1.getFullColor(props, props.color || 'secondary')
  }));
}, "');}&.disabled,&:disabled{+ .aph-form-control-mask{color:", function (props) {
  return colors$1.getFullColor(props, props.color || 'disabled');
}, ";&:active,&:focus,&:hover{color:", function (props) {
  return colors$1.getFullColor(props, props.color || 'disabled');
}, ";}&:before{color:", function (props) {
  return colors$1.getFullColor(props, 'disabled');
}, ";border-color:", function (props) {
  return colors$1.getFullColor(props, 'disabled');
}, ";background-color:", function (props) {
  return colors$1.getFullColor(props, 'background');
}, ";}}&:checked + .aph-form-control-mask:before{background-image:url('", function (props) {
  return ICONS.ENCODE_SVG( /*#__PURE__*/React.createElement(IconCheckThin, {
    size: 20,
    color: colors$1.getFullColor(props, 'disabled')
  }));
}, "');}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoZWNrYm94LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRHNDIiwiZmlsZSI6IkNoZWNrYm94LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IElDT05TIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCBJY29uQ2hlY2tUaGluIGZyb20gJy4uLy4uL0ljb25zL0ljb25DaGVja1RoaW4nO1xuXG5jb25zdCBBcGhDaGVja2JveFdyYXBwZXJTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheSAgIDogYmxvY2s7XG4gICAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBBcGhDaGVja2JveE1hc2tTdHlsZWQgPSBzdHlsZWQubGFiZWxgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbiAgICBjdXJzb3IgICAgOiBwb2ludGVyO1xuXG4gICAgbWluLWhlaWdodCAgICA6IDMwcHg7XG4gICAgcGFkZGluZy10b3AgICA6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQgOiAke3Byb3BzID0+IHByb3BzLmxhYmVsUmlnaHQgPyAnNDBweCcgOiBudWxsfTtcbiAgICBwYWRkaW5nLWxlZnQgIDogJHtwcm9wcyA9PiAhcHJvcHMubGFiZWxSaWdodCA/ICc0MHB4JyA6IG51bGx9O1xuXG4gICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy5yaWdodCA/ICdyaWdodCcgOiBudWxsfTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgYm94LXNpemluZyAgOiBib3JkZXItYm94O1xuICAgICAgICBjb250ZW50ICAgICA6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbiAgICA6IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5ICAgICA6IGJsb2NrO1xuICAgICAgICB3aWR0aCAgICAgICA6IDMwcHg7XG4gICAgICAgIGhlaWdodCAgICAgIDogMzBweDtcbiAgICAgICAgYm9yZGVyICAgICAgOiAkeyh7IGJvcmRlcldpZHRoIH0pID0+IGJvcmRlcldpZHRofXB4IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAocHJvcHMuY29sb3IgfHwgcHJvcHMuYm9yZGVyQ29sb3IgfHwgJ2JvcmRlcicpKX07XG5cbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDE1cHgpO1xuXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xuXG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4xNXM7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWltYWdlLCBib3JkZXItY29sb3I7XG5cbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZSAgIDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNDJtTmtZQUFBQUFZQUFqQ0IwQzhBQUFBQVNVVk9SSzVDWUlJPSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgICA6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgICAgOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0ICA6IG5vLXJlcGVhdDtcbiAgICB9XG5gO1xuXG5jb25zdCBBcGhDaGVja2JveFN0eWxlZCA9IHN0eWxlZC5pbnB1dGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXkgOiBibG9jaztcbiAgICB3aWR0aCAgIDogMzBweDtcbiAgICBoZWlnaHQgIDogMzBweDtcbiAgICBtYXJnaW4gIDogMDtcbiAgICBvcGFjaXR5IDogMDtcblxuICAgIHRvcCAgOiAwO1xuICAgIHJpZ2h0OiAke3Byb3BzID0+IHByb3BzLmxhYmVsUmlnaHQgPyAnMCcgOiBudWxsfTtcbiAgICBsZWZ0IDogJHtwcm9wcyA9PiAhcHJvcHMubGFiZWxSaWdodCA/ICcwJyA6IG51bGx9O1xuXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICsgLmFwaC1mb3JtLWNvbnRyb2wtbWFzayB7XG4gICAgICAgICY6YWN0aXZlLFxuICAgICAgICAmOmZvY3VzLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpfTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5sYWJlbFJpZ2h0IHx8IHByb3BzLnJpZ2h0KSA/ICcwJyA6IG51bGx9O1xuICAgICAgICAgICAgbGVmdCA6ICR7cHJvcHMgPT4gKCFwcm9wcy5sYWJlbFJpZ2h0ICYmICFwcm9wcy5yaWdodCkgPyAnMCcgOiBudWxsfTtcblxuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmZvY3VzLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlLFxuICAgICY6Y2hlY2tlZCxcbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIge1xuICAgICAgICArIC5hcGgtZm9ybS1jb250cm9sLW1hc2sge1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzZWNvbmRhcnknKSl9O1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6Y2hlY2tlZCArIC5hcGgtZm9ybS1jb250cm9sLW1hc2s6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3Byb3BzID0+IElDT05TLkVOQ09ERV9TVkcoXG4gICAgICAgICAgICA8SWNvbkNoZWNrVGhpblxuICAgICAgICAgICAgICAgIHNpemU9ezIwfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3NlY29uZGFyeScpKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9Jyk7XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnZGlzYWJsZWQnKSl9O1xuXG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6Zm9jdXMsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ2Rpc2FibGVkJykpfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgJ2Rpc2FibGVkJyl9O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgJ2Rpc2FibGVkJyl9O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgJ2JhY2tncm91bmQnKX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOmNoZWNrZWQgKyAuYXBoLWZvcm0tY29udHJvbC1tYXNrOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJvcHMgPT4gSUNPTlMuRU5DT0RFX1NWRyhcbiAgICAgICAgICAgICAgICA8SWNvbkNoZWNrVGhpblxuICAgICAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5nZXRGdWxsQ29sb3IocHJvcHMsICdkaXNhYmxlZCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfScpO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgQ2hlY2tib3ggPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgICBib3JkZXJDb2xvcixcbiAgICAgICAgYm9yZGVyV2lkdGgsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBsYWJlbFByb3BzLFxuICAgICAgICBsYWJlbFJpZ2h0LFxuICAgICAgICBpZCxcbiAgICAgICAgcmlnaHQsXG4gICAgfSA9IHByb3BzO1xuICAgIGxldCBuZXdQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzKTtcblxuICAgIGRlbGV0ZSBuZXdQcm9wcy5jaGlsZHJlbjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcGhDaGVja2JveFdyYXBwZXJTdHlsZWQ+XG4gICAgICAgICAgICA8QXBoQ2hlY2tib3hTdHlsZWRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhcGgtZm9ybS1jb250cm9sICR7Y2xhc3NOYW1lIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgey4uLm5ld1Byb3BzfVxuICAgICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEFwaENoZWNrYm94TWFza1N0eWxlZFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1mb3JtLWNvbnRyb2wtbWFzayAke2NsYXNzTmFtZSB8fCAnJ31gfVxuICAgICAgICAgICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgICByaWdodD17cmlnaHR9XG4gICAgICAgICAgICAgICAgbGFiZWxSaWdodD17bGFiZWxSaWdodCB8fCByaWdodH1cbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcj17Ym9yZGVyQ29sb3J9XG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg9e2JvcmRlcldpZHRofVxuICAgICAgICAgICAgICAgIHsuLi5sYWJlbFByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQXBoQ2hlY2tib3hNYXNrU3R5bGVkPlxuICAgICAgICA8L0FwaENoZWNrYm94V3JhcHBlclN0eWxlZD5cbiAgICApO1xufSk7XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpZCAgICAgICAgIDogYGZvcm1Db250cm9sUmFuZG9tSUQke01hdGgucmFuZG9tKCl9YCxcbiAgICBsYWJlbFByb3BzIDoge30sXG4gICAgbGFiZWxSaWdodCA6IGZhbHNlLFxuICAgIHJpZ2h0ICAgICAgOiBmYWxzZSxcbiAgICBib3JkZXJDb2xvcjogJycsXG4gICAgYm9yZGVyV2lkdGggOiAyLFxuICAgIHN0eWxlcyAgICAgOiB7fSxcbn07XG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgICBpZCAgICAgICAgIDogcHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGxhYmVsUHJvcHMgOiBwcm9wVHlwZXMub2JqZWN0LFxuICAgIGxhYmVsUmlnaHQgOiBwcm9wVHlwZXMuYm9vbCxcbiAgICByaWdodCAgICAgIDogcHJvcFR5cGVzLmJvb2wsXG4gICAgYm9yZGVyQ29sb3I6IHByb3BUeXBlcy5zdHJpbmcsXG4gICAgYm9yZGVyV2lkdGg6IHByb3BUeXBlcy5udW1iZXIsXG4gICAgc3R5bGVzICAgICA6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBwcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBwcm9wVHlwZXMub2JqZWN0LFxuICAgIF0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iXX0= */"));

var Checkbox = /*#__PURE__*/forwardRef(function (props, ref) {
  var borderColor = props.borderColor,
      borderWidth = props.borderWidth,
      className = props.className,
      children = props.children,
      color = props.color,
      labelProps = props.labelProps,
      labelRight = props.labelRight,
      id = props.id,
      right = props.right;
  var newProps = Object.assign({}, props);
  delete newProps.children;
  return /*#__PURE__*/React.createElement(AphCheckboxWrapperStyled, null, /*#__PURE__*/React.createElement(AphCheckboxStyled, _extends({
    className: "aph-form-control " + (className || '')
  }, newProps, {
    ref: ref,
    type: "checkbox"
  })), /*#__PURE__*/React.createElement(AphCheckboxMaskStyled, _extends({
    className: "aph-form-control-mask " + (className || ''),
    htmlFor: id,
    color: color,
    right: right,
    labelRight: labelRight || right,
    borderColor: borderColor,
    borderWidth: borderWidth
  }, labelProps), children));
});
Checkbox.defaultProps = {
  id: "formControlRandomID" + Math.random(),
  labelProps: {},
  labelRight: false,
  right: false,
  borderColor: '',
  borderWidth: 2,
  styles: {}
};
Checkbox.propTypes = {
  id: propTypes.string.isRequired,
  labelProps: propTypes.object,
  labelRight: propTypes.bool,
  right: propTypes.bool,
  borderColor: propTypes.string,
  borderWidth: propTypes.number,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var RadioButtonWrapper = _styled("label", {
  target: "eq3y1050",
  label: "RadioButtonWrapper"
})("display:", function (_ref) {
  var hasChildren = _ref.hasChildren;
  return hasChildren ? 'flex' : 'block';
}, ";align-items:center;cursor:pointer;position:relative;padding-top:", function (_ref2) {
  var hasChildren = _ref2.hasChildren;
  return hasChildren ? 5 : 0;
}, "px;padding-left:40px;padding-bottom:", function (_ref3) {
  var hasChildren = _ref3.hasChildren;
  return hasChildren ? 5 : 0;
}, "px;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvQnV0dG9uU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUk4QyIsImZpbGUiOiJSYWRpb0J1dHRvblN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b25XcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgIGRpc3BsYXkgICAgOiAkeyh7IGhhc0NoaWxkcmVuIH0pID0+IGhhc0NoaWxkcmVuID8gJ2ZsZXgnIDogJ2Jsb2NrJ307XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3IgICAgIDogcG9pbnRlcjtcblxuICAgIHBvc2l0aW9uICAgICAgOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcCAgIDogJHsoeyBoYXNDaGlsZHJlbiB9KSA9PiBoYXNDaGlsZHJlbiA/IDUgOiAwfXB4O1xuICAgIHBhZGRpbmctbGVmdCAgOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAkeyh7IGhhc0NoaWxkcmVuIH0pID0+IGhhc0NoaWxkcmVuID8gNSA6IDB9cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b25JbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdCAgICA6IDA7XG4gICAgbWFyZ2luICA6IDA7XG4gICAgcGFkZGluZyA6IDA7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgd2lkdGggICA6IDMwcHg7XG4gICAgaGVpZ2h0ICA6IDMwcHg7XG5cbiAgICB+IGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGggOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdib3JkZXInKX07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG5cbiAgICAgICAgfiBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlLCAmOmZvY3VzLCAmOmhvdmVyIHtcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICB+IGkge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG5cbiAgICAgICAgICAgICAgICB+IHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpjaGVja2VkIH4gaSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudCAgIDogXCIgXCI7XG4gICAgICAgICAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGggICAgIDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodCAgICA6IDE0cHg7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkeyhwcm9wcykgPT4gcHJvcHMuZGlzYWJsZWQgPyBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZGlzYWJsZWQnKSA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB+IGkge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZGlzYWJsZWQnKX07XG5cbiAgICAgICAgfiBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJyl9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuIl19 */"));
var RadioButtonInput = _styled("input", {
  target: "eq3y1051",
  label: "RadioButtonInput"
})("position:absolute;left:0;margin:0;padding:0;opacity:0;width:30px;height:30px;~ i{position:absolute;box-sizing:border-box;display:flex;align-items:center;justify-content:center;left:0;width:30px;height:30px;border-radius:100%;border:2px solid ", function (props) {
  return colors$1.getFromTheme(props, 'border');
}, ";transition:all ease 0.2s;~ span{color:inherit;transition:all ease 0.2s;}}&:active,&:focus,&:hover{&:not(:disabled){~ i{border-color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";~ span{color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";}}}}&:checked ~ i{border-color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";&:before{content:\" \";position:absolute;display:block;width:14px;height:14px;background-color:", function (props) {
  return props.disabled ? colors$1.getFromTheme(props, 'disabled') : colors$1.getFromTheme(props, 'secondary');
}, ";border-radius:100%;}}&:disabled ~ i{border-color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled');
}, ";~ span{color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled');
}, ";text-decoration:line-through;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhZGlvQnV0dG9uU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWU0QyIsImZpbGUiOiJSYWRpb0J1dHRvblN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b25XcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgIGRpc3BsYXkgICAgOiAkeyh7IGhhc0NoaWxkcmVuIH0pID0+IGhhc0NoaWxkcmVuID8gJ2ZsZXgnIDogJ2Jsb2NrJ307XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3IgICAgIDogcG9pbnRlcjtcblxuICAgIHBvc2l0aW9uICAgICAgOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXRvcCAgIDogJHsoeyBoYXNDaGlsZHJlbiB9KSA9PiBoYXNDaGlsZHJlbiA/IDUgOiAwfXB4O1xuICAgIHBhZGRpbmctbGVmdCAgOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAkeyh7IGhhc0NoaWxkcmVuIH0pID0+IGhhc0NoaWxkcmVuID8gNSA6IDB9cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgUmFkaW9CdXR0b25JbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdCAgICA6IDA7XG4gICAgbWFyZ2luICA6IDA7XG4gICAgcGFkZGluZyA6IDA7XG4gICAgb3BhY2l0eSA6IDA7XG4gICAgd2lkdGggICA6IDMwcHg7XG4gICAgaGVpZ2h0ICA6IDMwcHg7XG5cbiAgICB+IGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGggOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdib3JkZXInKX07XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XG5cbiAgICAgICAgfiBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlLCAmOmZvY3VzLCAmOmhvdmVyIHtcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgICB+IGkge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG5cbiAgICAgICAgICAgICAgICB+IHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpjaGVja2VkIH4gaSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHsocHJvcHMpID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudCAgIDogXCIgXCI7XG4gICAgICAgICAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGggICAgIDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodCAgICA6IDE0cHg7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkeyhwcm9wcykgPT4gcHJvcHMuZGlzYWJsZWQgPyBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZGlzYWJsZWQnKSA6IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdzZWNvbmRhcnknKX07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJjpkaXNhYmxlZCB+IGkge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7KHByb3BzKSA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZGlzYWJsZWQnKX07XG5cbiAgICAgICAgfiBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAkeyhwcm9wcykgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJyl9O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuIl19 */"));

function RadioButton(_ref) {
  var id = _ref.id,
      name = _ref.name,
      children = _ref.children,
      checked = _ref.checked,
      type = _ref.type,
      value = _ref.value,
      disabled = _ref.disabled,
      rest = _objectWithoutPropertiesLoose(_ref, ["id", "name", "children", "checked", "type", "value", "disabled"]);

  return /*#__PURE__*/React.createElement(RadioButtonWrapper, _extends({
    htmlFor: id,
    disabled: disabled,
    hasChildren: !!children
  }, rest), /*#__PURE__*/React.createElement(RadioButtonInput, _extends({
    id: id,
    name: name,
    checked: checked,
    type: type,
    value: value,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("i", null), children && /*#__PURE__*/React.createElement("span", null, children));
}

RadioButton.defaultProps = {
  id: null,
  type: 'radio',
  name: null,
  value: '',
  children: '',
  onChange: function onChange() {
    return null;
  },
  checked: false,
  disabled: false
};
RadioButton.propTypes = {
  id: propTypes.string.isRequired,
  type: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.any,
  children: propTypes.any,
  onChange: propTypes.func,
  checked: propTypes.bool,
  disabled: propTypes.bool
};

var Wrapper$1 = /*#__PURE__*/_styled(Styled, {
  target: "e1gvsz7g0",
  label: "Wrapper"
})("position:absolute;z-index:10;top:50%;left:10px;transform:translateY(-50%);display:block;padding:0;margin:0;width:30px;height:30px;border:0;outline:0;cursor:pointer;background-color:transparent;", MEDIA_QUERIES.LT.SM, "{left:10px;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxheWVyQ2hlY2tib3hPclJhZGlvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTOEIiLCJmaWxlIjoiTGF5ZXJDaGVja2JveE9yUmFkaW8uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vRm9ybS9DaGVja2JveC9DaGVja2JveCc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi4vRm9ybS9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvbic7XG5pbXBvcnQgU3R5bGVkIGZyb20gJy4uL1N0eWxlZC9TdHlsZWQnO1xuXG4vKiBTdHlsZXMgKi9cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoU3R5bGVkKWBcbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIHotaW5kZXggIDogMTA7XG4gICAgdG9wICAgICAgOiA1MCU7XG4gICAgbGVmdCAgICAgOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogMDtcbiAgICB3aWR0aCAgOiAzMHB4O1xuICAgIGhlaWdodCA6IDMwcHg7XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG4gICAgY3Vyc29yIDogcG9pbnRlcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgJHtNRURJQV9RVUVSSUVTLkxULlNNfSB7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IEl0c2VsZiAqL1xuY29uc3QgTGF5ZXJDaGVja2JveE9yUmFkaW8gPSBmb3J3YXJkUmVmKCh7XG4gICAgY2hlY2tib3gsXG4gICAgcmFkaW8sXG4gICAgZGlzYWJsZWQsXG4gICAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICAgIGNvbnN0IHNob3VsZFJlbmRlciA9ICEhKGNoZWNrYm94IHx8IHJhZGlvKTtcblxuICAgIHJldHVybiAhc2hvdWxkUmVuZGVyID8gbnVsbCA6IChcbiAgICAgICAgPFdyYXBwZXJcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hlY2tib3ggJiYgKFxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBkaXNhYmxlZD17ZGlzYWJsZWR9IHsuLi5jaGVja2JveH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7cmFkaW8gJiYgKFxuICAgICAgICAgICAgICAgIDxSYWRpbyBkaXNhYmxlZD17ZGlzYWJsZWR9IHsuLi5yYWRpb30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xufSk7XG5cbi8qIERlZmF1bHQgUHJvcGVydGllcyAqL1xuTGF5ZXJDaGVja2JveE9yUmFkaW8uZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrYm94OiBudWxsLFxuICAgIHJhZGlvICAgOiBudWxsLFxuICAgIHN0eWxlcyAgOiB7fSxcbn07XG5cbi8qIFByb3BlcnRpZXMgVHlwZXMgKi9cbkxheWVyQ2hlY2tib3hPclJhZGlvLnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDaGVja2JveCBwcm9wc1xuICAgICAqL1xuICAgIGNoZWNrYm94OiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgIC8qKlxuICAgICAgKiBSYWRpbyBwcm9wc1xuICAgICAgKi9cbiAgICByYWRpbzogcHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBzdHlsZXNcbiAgICAgKi9cbiAgICBzdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IExheWVyQ2hlY2tib3hPclJhZGlvO1xuIl19 */"));

var LayerCheckboxOrRadio = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var checkbox = _ref.checkbox,
      radio = _ref.radio,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["checkbox", "radio", "disabled"]);

  var shouldRender = !!(checkbox || radio);
  return !shouldRender ? null : /*#__PURE__*/React.createElement(Wrapper$1, _extends({
    ref: ref
  }, props), checkbox && /*#__PURE__*/React.createElement(Checkbox, _extends({
    disabled: disabled
  }, checkbox)), radio && /*#__PURE__*/React.createElement(RadioButton, _extends({
    disabled: disabled
  }, radio)));
});
LayerCheckboxOrRadio.defaultProps = {
  checkbox: null,
  radio: null,
  styles: {}
};
LayerCheckboxOrRadio.propTypes = {
  checkbox: propTypes.object,
  radio: propTypes.object,
  styles: propTypes.object
};

var _Layer$propTypes;
var defaultClassName = 'aph-layer';

var Wrapper$2 = /*#__PURE__*/_styled(Styled, {
  target: "exm9ife0",
  label: "Wrapper"
})("box-sizing:border-box;position:relative;margin:", function (_ref) {
  var margin = _ref.margin;
  return margin;
}, ";&:active,&:hover,&:focus{.", defaultClassName, "{&__status{top:15%;bottom:15%;}}}.", defaultClassName, "{padding-right:", function (_ref2) {
  var hasMenu = _ref2.hasMenu;
  return !hasMenu ? null : '40px';
}, ";padding-left:", function (_ref3) {
  var hasInput = _ref3.hasInput,
      hasStatus = _ref3.hasStatus;
  return hasInput && hasStatus ? '70px' : hasInput || hasStatus ? '50px' : null;
}, ";a:first-of-type{padding-right:", function (_ref4) {
  var hasMenu = _ref4.hasMenu;
  return !hasMenu ? null : '0';
}, ";padding-left:", function (_ref5) {
  var hasInput = _ref5.hasInput,
      hasStatus = _ref5.hasStatus;
  return hasInput || hasStatus ? '0' : null;
}, ";}&__menu{.aph-dropdown{&__toggle{border-radius:5px;&:active,&:hover,&:focus{background-color:", function (_ref6) {
  var isLoading = _ref6.isLoading,
      props = _objectWithoutPropertiesLoose(_ref6, ["isLoading"]);

  return isLoading ? 'transparent' : colors$1.getFullColor(props, 'secondary,original,0.05');
}, ";}}}}}", function (_ref7) {
  var styles = _ref7.styles;
  return styles;
}, ";", MEDIA_QUERIES.LT.SM, "{.", defaultClassName, "{padding-left:", function (_ref8) {
  var hasInput = _ref8.hasInput,
      hasStatus = _ref8.hasStatus;
  return hasInput && hasStatus ? '70px' : hasInput || hasStatus ? '40px' : null;
}, ";}", function (_ref9) {
  var stylesXS = _ref9.stylesXS;
  return stylesXS;
}, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxheWVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXOEIiLCJmaWxlIjoiTGF5ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IExheWVyTWVudSBmcm9tICcuL0xheWVyTWVudSc7XG5pbXBvcnQgTGF5ZXJTdGF0dXMgZnJvbSAnLi9MYXllclN0YXR1cyc7XG5pbXBvcnQgTGF5ZXJDaGVja2JveE9yUmFkaW8gZnJvbSAnLi9MYXllckNoZWNrYm94T3JSYWRpbyc7XG5pbXBvcnQgU3R5bGVkIGZyb20gJy4uL1N0eWxlZC9TdHlsZWQnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgTUVESUFfUVVFUklFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGRlZmF1bHRDbGFzc05hbWUgPSAnYXBoLWxheWVyJztcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoU3R5bGVkKWBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb24gIDogcmVsYXRpdmU7XG4gIG1hcmdpbiAgICA6ICR7KHsgbWFyZ2luIH0pID0+IG1hcmdpbn07XG5cbiAgJjphY3RpdmUsXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIC4ke2RlZmF1bHRDbGFzc05hbWV9IHtcbiAgICAgICZfX3N0YXR1cyB7XG4gICAgICAgIHRvcCAgIDogMTUlO1xuICAgICAgICBib3R0b206IDE1JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuJHtkZWZhdWx0Q2xhc3NOYW1lfSB7XG4gICAgcGFkZGluZy1yaWdodDogJHsoeyBoYXNNZW51IH0pID0+ICFoYXNNZW51ID8gbnVsbCA6ICc0MHB4J307XG4gICAgcGFkZGluZy1sZWZ0IDogJHsoeyBoYXNJbnB1dCwgaGFzU3RhdHVzIH0pID0+IGhhc0lucHV0ICYmIGhhc1N0YXR1cyA/ICc3MHB4JyA6ICgoaGFzSW5wdXQgfHwgaGFzU3RhdHVzKSA/ICc1MHB4JyA6IG51bGwpfTtcblxuICAgIGE6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkeyh7IGhhc01lbnUgfSkgPT4gIWhhc01lbnUgPyBudWxsIDogJzAnfTtcbiAgICAgIHBhZGRpbmctbGVmdCA6ICR7KHsgaGFzSW5wdXQsIGhhc1N0YXR1cyB9KSA9PiAoaGFzSW5wdXQgfHwgaGFzU3RhdHVzKSA/ICcwJyA6IG51bGx9O1xuICAgIH1cblxuICAgICZfX21lbnUge1xuICAgICAgLmFwaC1kcm9wZG93biB7XG4gICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgJjphY3RpdmUsICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBpc0xvYWRpbmcsIC4uLnByb3BzIH0pID0+IGlzTG9hZGluZyA/ICd0cmFuc3BhcmVudCcgOiBjb2xvcnMuZ2V0RnVsbENvbG9yKHByb3BzLCAnc2Vjb25kYXJ5LG9yaWdpbmFsLDAuMDUnKX07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJHsoeyBzdHlsZXMgfSkgPT4gc3R5bGVzfTtcblxuICAke01FRElBX1FVRVJJRVMuTFQuU019IHtcbiAgICAuJHtkZWZhdWx0Q2xhc3NOYW1lfSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICR7KHsgaGFzSW5wdXQsIGhhc1N0YXR1cyB9KSA9PiBoYXNJbnB1dCAmJiBoYXNTdGF0dXMgPyAnNzBweCcgOiAoKGhhc0lucHV0IHx8IGhhc1N0YXR1cykgPyAnNDBweCcgOiBudWxsKX07XG4gICAgfVxuXG4gICAgJHsoeyBzdHlsZXNYUyB9KSA9PiBzdHlsZXNYU307XG4gIH1cbmA7XG5jb25zdCBMYXllciA9IGZvcndhcmRSZWYoKHtcbiAgY2xhc3NOYW1lLFxuICBpc0xvYWRpbmcsXG4gIG1hcmdpbixcbiAgbWVudSxcbiAgYmVmb3JlLFxuICBhZnRlcixcbiAgY2hlY2tib3gsXG4gIHJhZGlvLFxuICBzdGF0dXMsXG4gIHdyYXBwZXJTdHlsZXMsXG4gIHdyYXBwZXJTdHlsZXNYUyxcbiAgLi4ucHJvcHNcbn0sIHJlZikgPT4ge1xuICBjb25zdCBjc3NDbGFzcyAgICAgPSBgJHtjbGFzc05hbWV9ICR7ZGVmYXVsdENsYXNzTmFtZX1gO1xuICBjb25zdCBoYXNJbnB1dCAgICAgPSAhIShjaGVja2JveCB8fCByYWRpbyk7XG4gIGNvbnN0IGhhc01lbnUgICAgICA9ICEhbWVudTtcbiAgY29uc3QgaGFzU3RhdHVzICAgID0gISFzdGF0dXM7XG4gIGNvbnN0IHdyYXBwZXJQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGNzc0NsYXNzLmNvbmNhdCgnLXdyYXBwZXInKSxcbiAgICBoYXNJbnB1dCxcbiAgICBoYXNNZW51LFxuICAgIGhhc1N0YXR1cyxcbiAgICBpc0xvYWRpbmcsXG4gICAgbWFyZ2luLFxuICAgIHN0eWxlczogd3JhcHBlclN0eWxlcyxcbiAgICBzdHlsZXNYUzogd3JhcHBlclN0eWxlc1hTLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXJcbiAgICAgIHJlZj17cmVmfVxuICAgICAgey4uLndyYXBwZXJQcm9wc31cbiAgICA+XG4gICAgICB7YmVmb3JlfVxuICAgICAge2hhc0lucHV0ICYmIChcbiAgICAgICAgPExheWVyQ2hlY2tib3hPclJhZGlvXG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzcy5jb25jYXQoJ19faW5wdXQnKX1cbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2FkaW5nfVxuICAgICAgICAgIGNoZWNrYm94PXtjaGVja2JveH1cbiAgICAgICAgICByYWRpbz17cmFkaW99XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3N0YXR1cyAmJiAoXG4gICAgICAgIDxMYXllclN0YXR1c1xuICAgICAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3MuY29uY2F0KCdfX3N0YXR1cycpfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgaGFzSW5wdXQ9e2hhc0lucHV0fVxuICAgICAgICAgIHsuLi5zdGF0dXN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFN0eWxlZFxuICAgICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzfVxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eyFpc0xvYWRpbmcgPyBudWxsIDogJ2JhY2tncm91bmQnfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgICAge21lbnUgJiYgKFxuICAgICAgICA8TGF5ZXJNZW51XG4gICAgICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzcy5jb25jYXQoJ19fbWVudScpfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgICAgey4uLm1lbnV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2FmdGVyfVxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn0pO1xuXG5MYXllci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZSAgICA6ICcnLFxuICBtYXJnaW4gICAgICAgOiAnMTVweCAwJyxcbiAgcGFkZGluZyAgICAgIDogJzE1cHgnLFxuICByYWRpdXMgICAgICAgOiAxMCxcbiAgc2hhZG93ICAgICAgIDogJzAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMSknLFxuICBzdHlsZXMgICAgICAgOiB7fSxcbiAgaXNMb2FkaW5nICAgIDogZmFsc2UsXG4gIGJvcmRlclRvcCAgICA6IGZhbHNlLFxuICBib3JkZXJCb3R0b20gOiBmYWxzZSxcbiAgYmVmb3JlICAgICAgIDogJycsXG4gIGFmdGVyICAgICAgICA6ICcnLFxuICBjaGVja2JveCAgICAgOiBudWxsLFxuICByYWRpbyAgICAgICAgOiBudWxsLFxuICB3cmFwcGVyU3R5bGVzOiB7fSxcbn07XG5cbkxheWVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFdpbGwgY2hhbmdlcyBiYWNrZ3JvdW5kIGNvbG9yXG4gICAqL1xuICBpc0xvYWRpbmc6IHByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFeHRlcm5hbCBEaXN0YW5jZSB0byBvdGhlciBlbGVtZW50c1xuICAgKi9cbiAgbWFyZ2luOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJbnRlcm5hbCBzcGFjZW1lbnRcbiAgICovXG4gIHBhZGRpbmc6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIExheWVyTWVudSBjb21wb25lbnQgcHJvcHNcbiAgICovXG4gIG1lbnU6IHByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEN1c3RvbSBib3JkZXIgcmFkaXVzXG4gICAqL1xuICByYWRpdXM6IHByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgcHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBMYXllclN0YXR1cyBjb21wb25lbnQgcHJvcHNcbiAgICovXG4gIHN0YXR1czogcHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ3VzdG9tIHN0eWxlc1xuICAgKi9cbiAgc3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUZXh0IGFsaWduXG4gICAqL1xuICB0ZXh0QWxpZ24gOiBwcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUZXh0IGNvbG9yXG4gICAqL1xuICB0ZXh0Q29sb3I6IHByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFNvbWV0aGluZyBiZWZvcmUgdGhlIGNvbnRlbnQgYmxvY2tcbiAgICovXG4gIGJlZm9yZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLnN0cmluZywgcHJvcFR5cGVzLmVsZW1lbnRdKSxcblxuICAvKipcbiAgICogU29tZXRoaW5nIGFmdGVyIHRoZSBjb250ZW50IGJsb2NrXG4gICAqL1xuICBiZWZvcmU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5lbGVtZW50XSksXG5cbiAgLyoqXG4gICAqIENoZWNrYm94IGlucHV0IHByb3BzXG4gICAqL1xuICBjaGVja2JveDogcHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICogUmFkaW8gaW5wdXQgcHJvcHNcbiAgICAqL1xuICByYWRpbzogcHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ3VzdG9tIHdyYXBwZXIgc3R5bGVzXG4gICAqL1xuICB3cmFwcGVyU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXI7XG4iXX0= */"));

var Layer = /*#__PURE__*/forwardRef(function (_ref10, ref) {
  var className = _ref10.className,
      isLoading = _ref10.isLoading,
      margin = _ref10.margin,
      menu = _ref10.menu,
      before = _ref10.before,
      after = _ref10.after,
      checkbox = _ref10.checkbox,
      radio = _ref10.radio,
      status = _ref10.status,
      wrapperStyles = _ref10.wrapperStyles,
      wrapperStylesXS = _ref10.wrapperStylesXS,
      props = _objectWithoutPropertiesLoose(_ref10, ["className", "isLoading", "margin", "menu", "before", "after", "checkbox", "radio", "status", "wrapperStyles", "wrapperStylesXS"]);

  var cssClass = className + " " + defaultClassName;
  var hasInput = !!(checkbox || radio);
  var hasMenu = !!menu;
  var hasStatus = !!status;
  var wrapperProps = {
    className: cssClass.concat('-wrapper'),
    hasInput: hasInput,
    hasMenu: hasMenu,
    hasStatus: hasStatus,
    isLoading: isLoading,
    margin: margin,
    styles: wrapperStyles,
    stylesXS: wrapperStylesXS
  };
  return /*#__PURE__*/React.createElement(Wrapper$2, _extends({
    ref: ref
  }, wrapperProps), before, hasInput && /*#__PURE__*/React.createElement(LayerCheckboxOrRadio, {
    className: cssClass.concat('__input'),
    disabled: isLoading,
    checkbox: checkbox,
    radio: radio
  }), status && /*#__PURE__*/React.createElement(LayerStatus, _extends({
    className: cssClass.concat('__status'),
    disabled: isLoading,
    hasInput: hasInput
  }, status)), /*#__PURE__*/React.createElement(Styled, _extends({
    className: cssClass,
    backgroundColor: !isLoading ? null : 'background'
  }, props)), menu && /*#__PURE__*/React.createElement(LayerMenu, _extends({
    className: cssClass.concat('__menu'),
    disabled: isLoading
  }, menu)), after);
});
Layer.defaultProps = {
  className: '',
  margin: '15px 0',
  padding: '15px',
  radius: 10,
  shadow: '0 0 5px 0 rgba(0, 0, 0, 0.1)',
  styles: {},
  isLoading: false,
  borderTop: false,
  borderBottom: false,
  before: '',
  after: '',
  checkbox: null,
  radio: null,
  wrapperStyles: {}
};
Layer.propTypes = (_Layer$propTypes = {
  isLoading: propTypes.bool,
  margin: propTypes.string,
  padding: propTypes.string,
  menu: propTypes.object,
  radius: propTypes.oneOfType([propTypes.string, propTypes.number]),
  status: propTypes.object,
  styles: propTypes.object,
  textAlign: propTypes.string,
  textColor: propTypes.string,
  before: propTypes.oneOfType([propTypes.string, propTypes.element])
}, _Layer$propTypes["before"] = propTypes.oneOfType([propTypes.string, propTypes.element]), _Layer$propTypes.checkbox = propTypes.object, _Layer$propTypes.radio = propTypes.object, _Layer$propTypes.wrapperStyles = propTypes.object, _Layer$propTypes);

function LayerCondensed(_ref) {
  var background = _ref.background,
      backgroundColor = _ref.backgroundColor,
      _ref$borderTop = _ref.borderTop,
      borderTop = _ref$borderTop === void 0 ? true : _ref$borderTop,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$paddingTop = _ref.paddingTop,
      paddingTop = _ref$paddingTop === void 0 ? '0' : _ref$paddingTop,
      _ref$paddingBottom = _ref.paddingBottom,
      paddingBottom = _ref$paddingBottom === void 0 ? '0' : _ref$paddingBottom,
      _ref$wrapperStyles = _ref.wrapperStyles,
      wrapperStyles = _ref$wrapperStyles === void 0 ? {} : _ref$wrapperStyles,
      _ref$wrapperStylesXS = _ref.wrapperStylesXS,
      wrapperStylesXS = _ref$wrapperStylesXS === void 0 ? {} : _ref$wrapperStylesXS,
      menu = _ref.menu,
      checkbox = _ref.checkbox,
      radio = _ref.radio,
      status = _ref.status,
      withLink = _ref.withLink,
      rest = _objectWithoutPropertiesLoose(_ref, ["background", "backgroundColor", "borderTop", "isLoading", "paddingTop", "paddingBottom", "wrapperStyles", "wrapperStylesXS", "menu", "checkbox", "radio", "status", "withLink"]);

  var hasInput = !!(checkbox || radio);
  var hasStatus = !!status;
  var backgroundName = !isLoading && (backgroundColor || backgroundColor) ? background || backgroundColor : isLoading ? 'background' : null;
  return /*#__PURE__*/React.createElement(Layer, _extends({
    backgroundColor: backgroundName,
    borderTop: borderTop,
    checkbox: checkbox,
    radio: radio,
    hoverable: true,
    isLoading: isLoading,
    menu: menu,
    margin: "0",
    shadow: false,
    status: status,
    withLink: withLink,
    wrapperStyles: _objectSpread2({
      '.aph-layer': {
        borderRadius: 0,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: hasInput && hasStatus ? '70px' : hasInput ? '50px' : hasStatus ? '30px' : null,
        transition: 'background-color ease 0.2s',
        '&__status': !status ? {} : {
          width: '20px',
          left: !hasInput ? '5px' : '45px',
          '&__description': {
            left: '20px'
          }
        },
        '&__menu': {
          right: '0'
        }
      }
    }, wrapperStyles),
    wrapperStylesXS: _objectSpread2({
      '.aph-layer': {
        paddingLeft: hasInput && hasStatus ? '65px' : hasStatus ? '30px' : hasInput ? '50px' : null,
        '&__status': !status ? {} : {
          left: !hasInput ? null : '42.5px'
        },
        '&__menu': {
          right: '2.5px'
        }
      }
    }, wrapperStylesXS)
  }, rest));
}
LayerCondensed.defaultProps = {
  padding: '5px 10px'
};

var AphPaginationStyled = _styled("section", {
  target: "e1wqxxjk0",
  label: "AphPaginationStyled"
})("box-sizing:border-box;position:relative;display:block;width:auto;margin:40px auto;padding:10px 60px;max-width:460px;min-height:50px;list-style-type:none;text-align:center;user-select:none;border-radius:5px;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'background');
}, ";transition:background-color .2s linear;*{box-sizing:border-box;user-select:none;}.rc-pagination{&-prev,&-next,&-jump-next,&-jump-prev,&-item{display:inline-block;vertical-align:middle;text-align:center;min-width:30px;font-weight:bold;font-size:16px;line-height:20px;border-radius:5px;transition:background-color 0.2s linear;outline:0;border:0;&:not(.rc-pagination-item-active){cursor:pointer;}}&-prev,&-next{position:absolute;padding:2px 2.5px 2.5px;color:", function (props) {
  return colors$1.getFromTheme(props, 'inverse');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";}&-prev{left:15px;}&-next{right:15px;padding-left:1.5px;}&-disabled{background-color:", function (props) {
  return colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? 'inverse' : 'disabled');
}, ";}&-item,&-jump-prev,&-jump-next{padding:5px;margin:0 5px;color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";background-color:transparent;&-active{color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";}&:active,&:hover{outline:0;border:0;&:not(.rc-pagination-item-active){background-color:", function (props) {
  return colors$1.getOpacity(0.5, colors$1.getFromTheme(props, props.theme && props.theme.isDarkMode ? 'inverse' : 'disabled'));
}, ";}}}}", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZ2luYXRpb25TdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTzBDIiwiZmlsZSI6IlBhZ2luYXRpb25TdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBVSSBMaWJyYXJ5IEhlbHBlcnMgKi9cbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogUGFnaW5hdGlvbiBTdHlsZXMgKi9cbmNvbnN0IEFwaFBhZ2luYXRpb25TdHlsZWQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHdpZHRoICAgICA6IGF1dG87XG4gICAgbWFyZ2luICAgIDogNDBweCBhdXRvO1xuICAgIHBhZGRpbmcgICA6IDEwcHggNjBweDtcbiAgICBtYXgtd2lkdGggOiA0NjBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgIGJvcmRlci1yYWRpdXMgICA6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdiYWNrZ3JvdW5kJyl9O1xuICAgIHRyYW5zaXRpb24gICAgICA6IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhcjtcblxuICAgICoge1xuICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgLnJjLXBhZ2luYXRpb24ge1xuICAgICAgICAmLXByZXYsXG4gICAgICAgICYtbmV4dCxcbiAgICAgICAgJi1qdW1wLW5leHQsXG4gICAgICAgICYtanVtcC1wcmV2LFxuICAgICAgICAmLWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheSAgICAgICA6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcblxuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJvcmRlciA6IDA7XG5cbiAgICAgICAgICAgICY6bm90KC5yYy1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi1wcmV2LFxuICAgICAgICAmLW5leHQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcGFkZGluZyA6IDJweCAyLjVweCAyLjVweDtcblxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnaW52ZXJzZScpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScpfTtcbiAgICAgICAgfVxuXG4gICAgICAgICYtcHJldiB7XG4gICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1uZXh0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYtZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUuaXNEYXJrTW9kZSA/ICdpbnZlcnNlJyA6ICdkaXNhYmxlZCcpKX07XG4gICAgICAgIH1cblxuICAgICAgICAmLWl0ZW0sXG4gICAgICAgICYtanVtcC1wcmV2LFxuICAgICAgICAmLWp1bXAtbmV4dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBtYXJnaW4gOiAwIDVweDtcblxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5Jyl9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICYtYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFzZScpfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjphY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlciA6IDA7XG5cbiAgICAgICAgICAgICAgICAmOm5vdCgucmMtcGFnaW5hdGlvbi1pdGVtLWFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRPcGFjaXR5KDAuNSwgY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLmlzRGFya01vZGUgPyAnaW52ZXJzZScgOiAnZGlzYWJsZWQnKSkpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAke3Byb3BzID0+IHByb3BzLnN0eWxlc307XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaFBhZ2luYXRpb25TdHlsZWQ7XG4iXX0= */"));

function Pagination(props) {
  var loading = props.loading,
      className = props.className,
      rest = _objectWithoutPropertiesLoose(props, ["loading", "className"]);

  return /*#__PURE__*/React.createElement(AphPaginationStyled, _extends({
    locale: localeInfo,
    showLessItems: true
  }, rest, {
    as: !loading ? Paginator : Placeholder,
    jumpPrevIcon: /*#__PURE__*/React.createElement(Fragment$1, null, "\u2022\u2022\u2022"),
    jumpNextIcon: /*#__PURE__*/React.createElement(Fragment$1, null, "\u2022\u2022\u2022"),
    prevIcon: /*#__PURE__*/React.createElement(Icon, {
      slug: "arrow",
      direction: "left",
      color: "inverse",
      size: 25
    }),
    nextIcon: /*#__PURE__*/React.createElement(Icon, {
      slug: "arrow",
      direction: "right",
      color: "inverse",
      size: 25
    }),
    className: "aph-pagination " + (className || '')
  }), !loading ? null : /*#__PURE__*/React.createElement(Fragment$1, null, /*#__PURE__*/React.createElement(Placeholder, {
    width: 30,
    height: 30,
    className: "rc-pagination-prev"
  }), Array.from({
    length: 3
  }, function (number, index) {
    return /*#__PURE__*/React.createElement(Placeholder, {
      width: 30,
      height: 30,
      className: "rc-pagination-item",
      key: "rc-pagination-placeholder-" + index
    });
  }), /*#__PURE__*/React.createElement(Placeholder, {
    width: 30,
    height: 30,
    className: "rc-pagination-next"
  })));
}

Pagination.defaultProps = {
  onChange: function onChange() {},
  loading: true,
  total: 0,
  current: 1,
  pageSize: 25,
  styles: {}
};
Pagination.propTypes = {
  onChange: propTypes.func.isRequired,
  loading: propTypes.bool,
  total: propTypes.number,
  current: propTypes.number,
  pageSize: propTypes.number,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function SectionTitle(_ref) {
  var after = _ref.after,
      before = _ref.before,
      className = _ref.className,
      children = _ref.children,
      fontWeight = _ref.fontWeight,
      fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight,
      loading = _ref.loading,
      id = _ref.id,
      onClick = _ref.onClick,
      onScroll = _ref.onScroll,
      scroll = _ref.scroll,
      scrollAfter = _ref.scrollAfter,
      styles = _ref.styles,
      textColor = _ref.textColor,
      wrapper = _ref.wrapper,
      rest = _objectWithoutPropertiesLoose(_ref, ["after", "before", "className", "children", "fontWeight", "fontSize", "lineHeight", "loading", "id", "onClick", "onScroll", "scroll", "scrollAfter", "styles", "textColor", "wrapper"]);

  var ref = useRef(null);

  var _useState = useState(window.location.hash.includes(id)),
      isHashed = _useState[0],
      setIsHashed = _useState[1];

  var paddings = rest.padding.split(' ');
  var classList = (!className ? '' : className + " ") + "aph-section__title" + (isHashed ? ' aph-section__title--hashed' : '');
  var handleScroll = useCallback(function () {
    setTimeout(function () {
      function scrollToElement() {
        var _ref2 = ref || {},
            current = _ref2.current;

        if (!current || !current.scrollIntoView) {
          return;
        }

        current.scrollIntoView({
          behavior: 'smooth'
        });
        onScroll();
      }

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(scrollToElement);
      } else {
        scrollToElement();
      }
    }, scrollAfter);
  }, [ref, scrollAfter]);
  var handleClick = useCallback(function (evt) {
    var isOnHash = window.location.hash.includes(id);
    setIsHashed(!isOnHash);
    toggleLocationHash(isOnHash ? '' : id);
    onClick(evt);
  }, [id]);
  var handleHash = useCallback(function () {
    setIsHashed(window.location.hash.includes(id));
  }, [id]);
  useLayoutEffect(function () {
    if (!id || !window.location.hash.includes(id) || !scroll) {
      return;
    }

    handleScroll();
  }, [id, scroll, handleScroll]);
  useLayoutEffect(function () {
    if (!id) {
      return;
    }

    window.addEventListener('hashchange', handleHash);
    return function () {
      window.removeEventListener('hashchange', handleHash);
    };
  }, [id, handleHash]);
  return /*#__PURE__*/React.createElement(Styled, _extends({
    as: "header"
  }, wrapper), before, /*#__PURE__*/React.createElement(Styled, _extends({
    ref: ref,
    id: id,
    as: "h3",
    className: classList,
    onClick: handleClick,
    textColor: loading ? 'disabled' : textColor,
    styles: _objectSpread2(_objectSpread2({
      cursor: id ? 'pointer' : null,
      display: 'block',
      position: 'relative',
      fontSize: fontSize,
      fontWeight: fontWeight,
      lineHeight: lineHeight
    }, !id ? {} : {
      '&:before': {
        content: '"#"',
        position: 'absolute',
        top: '0',
        left: '-10px',
        width: '30px',
        height: '30px',
        opacity: '1',
        transition: 'color 0.15s ease, opacity 0.15s ease',
        color: 'transparent',
        fontFamily: 'monospace',
        fontSize: '20px',
        lineHeight: '30px',
        textAlign: 'center'
      },
      '&.aph-section__title--hashed, &:hover': {
        '&:before': {
          color: 'currentColor',
          opacity: '0.5'
        }
      },
      '&.aph-section__title--hashed:hover:before': {
        opacity: '1'
      }
    }), styles || {})
  }, rest), children), after);
}

SectionTitle.defaultProps = {
  className: '',
  fontWeight: 'bold',
  fontSize: '20px',
  lineHeight: '30px',
  margin: '0',
  onClick: function onClick() {},
  onScroll: function onScroll() {},
  padding: '15px 0 5px',
  scroll: true,
  scrollAfter: 1000,
  wrapper: {}
};
SectionTitle.propTypes = {
  after: propTypes.any,
  before: propTypes.any,
  fontWeight: propTypes.string,
  fontSize: propTypes.string,
  lineHeight: propTypes.string,
  id: propTypes.string,
  onClick: propTypes.func,
  onScroll: propTypes.func,
  scroll: propTypes.bool,
  scrollAfter: propTypes.number,
  wrapper: propTypes.object
};

function Section(_ref) {
  var after = _ref.after,
      before = _ref.before,
      className = _ref.className,
      children = _ref.children,
      loading = _ref.loading,
      htmlTitle = _ref.htmlTitle,
      title = _ref.title,
      withLayer = _ref.withLayer,
      wrapper = _ref.wrapper,
      rest = _objectWithoutPropertiesLoose(_ref, ["after", "before", "className", "children", "loading", "htmlTitle", "title", "withLayer", "wrapper"]);

  var classList = (!className ? '' : className + " ") + "aph-section";
  var Content = withLayer ? Layer : Styled;

  var titleProps = _objectSpread2(_objectSpread2({
    margin: '0',
    padding: '0',
    wrapper: !withLayer ? {} : _objectSpread2(_objectSpread2({}, title.wrapper || {}), {}, {
      styles: _objectSpread2({
        marginBottom: '-5px'
      }, (title.wrapper || {}).styles || {})
    })
  }, title && title.children ? title : {}), title && !title.children && ['object', 'string'].includes(typeof title) ? {
    children: title
  } : {});

  return /*#__PURE__*/React.createElement(Styled, _extends({
    as: "section"
  }, wrapper, {
    className: classList,
    title: htmlTitle
  }), before, title && /*#__PURE__*/React.createElement(SectionTitle, _extends({
    loading: loading
  }, titleProps)), /*#__PURE__*/React.createElement(Content, _extends({
    as: "section"
  }, rest, {
    className: "aph-section__content",
    isLoading: loading,
    textColor: loading ? 'disabled' : rest.color || rest.textColor || '',
    wrapperStyles: _objectSpread2({
      marginBottom: !withLayer ? null : '10px'
    }, rest.wrapperStyles || {})
  }), children), after);
}

Section.defaultProps = {
  after: undefined,
  before: undefined,
  loading: false,
  htmlTitle: '',
  title: '',
  withLayer: true,
  wrapper: {
    padding: '10px 0'
  }
};
Section.propTypes = {
  after: propTypes.any,
  before: propTypes.any,
  loading: propTypes.bool,
  htmlTitle: propTypes.string,
  title: propTypes.oneOfType([propTypes.string, propTypes.object, propTypes.element]),
  withLayer: propTypes.bool,
  wrapper: propTypes.object
};

var Spacer = _objectSpread2({}, Styled);

Spacer.defaultProps = {
  padding: '10px 0'
};

var Toggle = _styled("div", {
  target: "eom0p960",
  label: "Toggle"
})("box-sizing:border-box;overflow:hidden;display:flex;flex:1 auto;flex-direction:row;align-items:flex-end;justify-content:center;border-bottom:2px solid ", function (_ref) {
  var color = _ref.color,
      props = _objectWithoutPropertiesLoose(_ref, ["color"]);

  return colors$1.getFromTheme(props, color || 'secondary');
}, ";", function (_ref2) {
  var styles = _ref2.styles;
  return styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvZ2dsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR3lCIiwiZmlsZSI6IlRvZ2dsZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbmNvbnN0IFRvZ2dsZSA9IHN0eWxlZC5kaXZgXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93ICA6IGhpZGRlbjtcblxuICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XG4gIGZsZXggICAgICAgICAgIDogMSBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbiA6IHJvdztcbiAgYWxpZ24taXRlbXMgICAgOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICR7KHsgY29sb3IsIC4uLnByb3BzIH0pID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIGNvbG9yIHx8ICdzZWNvbmRhcnknKX07XG5cbiAgJHsoeyBzdHlsZXMgfSkgPT4gc3R5bGVzfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZTtcbiJdfQ== */"));

var ToggleButtonStyled = _styled("button", {
  target: "e15y3isl0",
  label: "ToggleButtonStyled"
})("box-sizing:border-box;overflow:hidden;display:flex;flex:1 auto;flex-direction:row;align-items:flex-end;justify-content:center;font-weight:", function (_ref) {
  var active = _ref.active;
  return !active ? 'normal' : 'bold';
}, ";font-size:16px;line-height:20px;text-transform:uppercase;border:0;outline:0;margin:0;padding:", function (_ref2) {
  var xs = _ref2.xs;
  return xs ? 9 : 10;
}, "px 5px 6px;cursor:", function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, ";transition:all 0.3s ease;border-radius:5px 5px 0 0;border-bottom:", function (_ref4) {
  var xs = _ref4.xs;
  return xs ? 3 : 2;
}, "px solid ", function (_ref5) {
  var active = _ref5.active,
      color = _ref5.color,
      props = _objectWithoutPropertiesLoose(_ref5, ["active", "color"]);

  return !active ? 'transparent' : colors$1.getFromTheme(props, color);
}, ";background-color:transparent;color:", function (_ref6) {
  var color = _ref6.color,
      props = _objectWithoutPropertiesLoose(_ref6, ["color"]);

  return colors$1.getFromTheme(props, color);
}, ";&:active,&:focus,&:hover{background-color:", function (_ref7) {
  var background = _ref7.background,
      props = _objectWithoutPropertiesLoose(_ref7, ["background"]);

  return colors$1.getFromTheme(props, background);
}, ";}", function (_ref8) {
  var styles = _ref8.styles;
  return styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvZ2dsZUJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3dDIiwiZmlsZSI6IlRvZ2dsZUJ1dHRvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4uLy4uL2hvb2tzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuY29uc3QgVG9nZ2xlQnV0dG9uU3R5bGVkID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3cgIDogaGlkZGVuO1xuXG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAgZmxleCAgICAgICAgICAgOiAxIGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uIDogcm93O1xuICBhbGlnbi1pdGVtcyAgICA6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBmb250LXdlaWdodCAgIDogJHsoeyBhY3RpdmUgfSkgPT4gKCFhY3RpdmUgPyAnbm9ybWFsJyA6ICdib2xkJyl9O1xuICBmb250LXNpemUgICAgIDogMTZweDtcbiAgbGluZS1oZWlnaHQgICA6IDIwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgYm9yZGVyIDogMDtcbiAgb3V0bGluZTogMDtcbiAgbWFyZ2luIDogMDtcbiAgcGFkZGluZzogJHsoeyB4cyB9KSA9PiB4cyA/IDkgOiAxMH1weCA1cHggNnB4O1xuXG4gIGN1cnNvciAgICA6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICBib3JkZXItcmFkaXVzICAgOiA1cHggNXB4IDAgMDtcbiAgYm9yZGVyLWJvdHRvbSAgIDogJHsoeyB4cyB9KSA9PiB4cyA/IDMgOiAyfXB4IHNvbGlkICR7KHsgYWN0aXZlLCBjb2xvciwgLi4ucHJvcHMgfSkgPT4gIWFjdGl2ZSA/ICd0cmFuc3BhcmVudCcgOiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBjb2xvcil9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3IgICAgICAgICAgIDogJHsoeyBjb2xvciwgLi4ucHJvcHMgfSkgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgY29sb3IpfTtcblxuICAmOmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBiYWNrZ3JvdW5kLCAuLi5wcm9wcyB9KSA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCBiYWNrZ3JvdW5kKX07XG4gIH1cblxuICAkeyh7IHN0eWxlcyB9KSA9PiBzdHlsZXN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9nZ2xlQnV0dG9uKHtcbiAgY29sb3IgICAgICA9ICdzZWNvbmRhcnknLFxuICBiYWNrZ3JvdW5kID0gJ2JhY2tncm91bmQnLFxuICAuLi5wcm9wc1xufSkge1xuICBjb25zdCB7IHhzIH0gPSB1c2VXaW5kb3dTaXplKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9nZ2xlQnV0dG9uU3R5bGVkXG4gICAgICB4cz17eHN9XG4gICAgICBjb2xvcj17Y29sb3J9XG4gICAgICBiYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kfVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */"));

function ToggleButton(_ref9) {
  var _ref9$color = _ref9.color,
      color = _ref9$color === void 0 ? 'secondary' : _ref9$color,
      _ref9$background = _ref9.background,
      background = _ref9$background === void 0 ? 'background' : _ref9$background,
      props = _objectWithoutPropertiesLoose(_ref9, ["color", "background"]);

  var _useWindowSize = useWindowSize(),
      xs = _useWindowSize.xs;

  return /*#__PURE__*/React.createElement(ToggleButtonStyled, _extends({
    xs: xs,
    color: color,
    background: background,
    role: "button"
  }, props));
}

var AphFormControlWrapperStyled = _styled("div", {
  target: "egwnx0u0",
  label: "AphFormControlWrapperStyled"
})("box-sizing:border-box;position:relative;display:block;.aph-form-control{padding-top:", function (_ref) {
  var hasLabel = _ref.hasLabel;
  return !hasLabel ? null : '20px';
}, ";padding-bottom:", function (_ref2) {
  var hasLabel = _ref2.hasLabel;
  return !hasLabel ? null : '0';
}, ";}", function (props) {
  return !props.hasError ? null : "\n        .aph-form-control {\n            color: " + colors$1.getFromTheme(props, 'error') + ";\n\n            + .aph-form-label {\n                color: " + colors$1.getFromTheme(props, 'error') + ";\n            }\n\n            &:hover,\n            &:active,\n            &:focus {\n                + .aph-form-label {\n                    color: " + colors$1.getFromTheme(props, 'error') + ";\n                }\n            }\n        }\n    ";
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sV3JhcHBlclN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPOEMiLCJmaWxlIjoiRm9ybUNvbnRyb2xXcmFwcGVyU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogRnJhbWV3b3JrIERlZmluaXRpb25zICovXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Db250cm9sV3JhcHBlclN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcblxuICAgIC5hcGgtZm9ybS1jb250cm9sIHtcbiAgICAgICAgcGFkZGluZy10b3A6ICR7KHsgaGFzTGFiZWwsIGRlZmF1bHRQYWRkaW5nIH0pID0+ICFoYXNMYWJlbCA/IG51bGwgOiAnMjBweCd9O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogJHsoeyBoYXNMYWJlbCwgZGVmYXVsdFBhZGRpbmcgfSkgPT4gIWhhc0xhYmVsID8gbnVsbCA6ICcwJ307XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiAhcHJvcHMuaGFzRXJyb3IgPyBudWxsIDogYFxuICAgICAgICAuYXBoLWZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZXJyb3InKX07XG5cbiAgICAgICAgICAgICsgLmFwaC1mb3JtLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZXJyb3InKX07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICsgLmFwaC1mb3JtLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Vycm9yJyl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGB9XG5gO1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IEFwaEZvcm1Db250cm9sV3JhcHBlclN0eWxlZDtcbiJdfQ== */");

var AphFormControlLabelStyled = _styled("label", {
  target: "e1woyfy20",
  label: "AphFormControlLabelStyled"
})("box-sizing:border-box;position:absolute;top:12.5px;left:0;right:0;display:inline-block;padding:2.5px 10px;border-radius:5px;pointer-events:none;font-size:", SIZES.MD.FONT_SIZE, ";line-height:", SIZES.MD.LINE_HEIGHT, ";color:", function (props) {
  return colors$1.getFromTheme(props, 'helper');
}, ";text-transform:uppercase;transition-property:top,font-size;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;&.aph-form-label--top{top:0;font-size:", SIZES.SM.FONT_SIZE, ";}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sTGFiZWxTdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUThDIiwiZmlsZSI6IkZvcm1Db250cm9sTGFiZWxTdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybUNvbnRyb2xMYWJlbFN0eWxlZCA9IHN0eWxlZC5sYWJlbGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xuICAgIHRvcCAgICAgICA6IDEyLjVweDtcbiAgICBsZWZ0ICAgICAgOiAwO1xuICAgIHJpZ2h0ICAgICA6IDA7XG4gICAgZGlzcGxheSAgIDogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmcgICA6IDIuNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICBmb250LXNpemUgIDogJHtTSVpFUy5NRC5GT05UX1NJWkV9O1xuICAgIGxpbmUtaGVpZ2h0OiAke1NJWkVTLk1ELkxJTkVfSEVJR0hUfTtcblxuICAgIGNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdoZWxwZXInKX07XG5cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IHRvcCwgZm9udC1zaXplO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4xNXM7XG5cbiAgICAmLmFwaC1mb3JtLWxhYmVsLS10b3Age1xuICAgICAgICB0b3AgICAgICA6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogJHtTSVpFUy5TTS5GT05UX1NJWkV9O1xuICAgIH1cbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgQXBoRm9ybUNvbnRyb2xMYWJlbFN0eWxlZDtcbiJdfQ== */"));

var FormControlStyled = _styled("input", {
  target: "ep75o620",
  label: "FormControlStyled"
})("box-sizing:border-box;display:block;width:100%;margin:0;min-height:50px;padding-top:", function (_ref) {
  var hasLabel = _ref.hasLabel,
      defaultPadding = _ref.defaultPadding;
  return hasLabel ? '20px' : defaultPadding || '10px';
}, ";padding-bottom:", function (_ref2) {
  var hasLabel = _ref2.hasLabel,
      defaultPadding = _ref2.defaultPadding;
  return hasLabel ? '0' : defaultPadding || '10px';
}, ";padding-right:", function (_ref3) {
  var hasAfter = _ref3.hasAfter,
      defaultPadding = _ref3.defaultPadding;
  return hasAfter ? '40px' : defaultPadding || '10px';
}, ";padding-left:", function (_ref4) {
  var hasBefore = _ref4.hasBefore,
      defaultPadding = _ref4.defaultPadding;
  return hasBefore ? '40px' : defaultPadding || '10px';
}, ";font-weight:", SIZES.MD.FONT_WEIGHT, ";font-size:", SIZES.MD.FONT_SIZE, ";line-height:", SIZES.MD.LINE_HEIGHT, ";color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'background');
}, ";border-radius:", RADIUS.XS, "px;border:0;outline:0;transition-property:color,padding-top,padding-bottom,padding-right;transition-timing-function:linear;transition-duration:0.3s;will-change:color,padding;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&::placeholder{color:", function (props) {
  return colors$1.getFromTheme(props, 'mercury', 'light');
}, ";font-weight:300;}&:active,&:focus{color:", function (props) {
  return colors$1.getFromTheme(props, props.error ? 'error' : 'base');
}, ";+ .aph-form-label{top:0;font-size:", SIZES.SM.FONT_SIZE, ";transform:translateY(0);}}&:hover,&:active,&:focus{border:0;outline:0;+ .aph-form-label{color:", function (props) {
  return colors$1.getFromTheme(props, props.error ? 'error' : props.color || 'secondary');
}, ";}}&.disabled,&:disabled,&[readonly]{cursor:not-allowed;&:hover,&:active,&:focus{+ .aph-form-label{color:", function (props) {
  return colors$1.getFromTheme(props, 'helper');
}, ";}}}&.disabled,&:disabled{opacity:1;color:", function (props) {
  return colors$1.getFromTheme(props, 'base');
}, ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled', 'crystal');
}, ";}&[readonly]{opacity:0.5;}&.aph-form-control--middle{padding-top:", function (_ref5) {
  var defaultPadding = _ref5.defaultPadding;
  return defaultPadding;
}, ";padding-bottom:", function (_ref6) {
  var defaultPadding = _ref6.defaultPadding;
  return defaultPadding;
}, ";}", function (props) {
  return !props.error ? null : "\n        color: " + colors$1.getFromTheme(props, 'error') + ";\n\n        + .aph-form-label {\n            color: " + colors$1.getFromTheme(props, 'error') + ";\n        }\n\n        &:hover,\n        &:active,\n        &:focus {\n            + .aph-form-label {\n                color: " + colors$1.getFromTheme(props, 'error') + ";\n            }\n        }\n    ";
}, " ", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sU3R5bGVkLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZc0MiLCJmaWxlIjoiRm9ybUNvbnRyb2xTdHlsZWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogRnJhbWV3b3JrIERlZmluaXRpb25zICovXG5pbXBvcnQgeyBSQURJVVMsIFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBDb21wb25lbnQgU3R5bGVkXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BlcnRpZXMgLSBjb21wb25lbnQgcHJvcHNcbiAqL1xuY29uc3QgRm9ybUNvbnRyb2xTdHlsZWQgPSBzdHlsZWQuaW5wdXRgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICB3aWR0aCAgICAgOiAxMDAlO1xuICAgIG1hcmdpbiAgICA6IDA7XG4gICAgbWluLWhlaWdodDogNTBweDtcblxuICAgIHBhZGRpbmctdG9wICAgOiAkeyh7IGhhc0xhYmVsLCBkZWZhdWx0UGFkZGluZyB9KSA9PiBoYXNMYWJlbCA/ICcyMHB4JyA6IGRlZmF1bHRQYWRkaW5nIHx8ICcxMHB4J307XG4gICAgcGFkZGluZy1ib3R0b206ICR7KHsgaGFzTGFiZWwsIGRlZmF1bHRQYWRkaW5nIH0pID0+IGhhc0xhYmVsID8gJzAnIDogZGVmYXVsdFBhZGRpbmcgfHwgJzEwcHgnfTtcbiAgICBwYWRkaW5nLXJpZ2h0IDogJHsoeyBoYXNBZnRlciwgZGVmYXVsdFBhZGRpbmcgfSkgPT4gaGFzQWZ0ZXIgPyAnNDBweCcgOiBkZWZhdWx0UGFkZGluZyB8fCAnMTBweCd9O1xuICAgIHBhZGRpbmctbGVmdCAgOiAkeyh7IGhhc0JlZm9yZSwgZGVmYXVsdFBhZGRpbmcgfSkgPT4gaGFzQmVmb3JlID8gJzQwcHgnIDogZGVmYXVsdFBhZGRpbmcgfHwgJzEwcHgnfTtcblxuICAgIGZvbnQtd2VpZ2h0OiAke1NJWkVTLk1ELkZPTlRfV0VJR0hUfTtcbiAgICBmb250LXNpemUgIDogJHtTSVpFUy5NRC5GT05UX1NJWkV9O1xuICAgIGxpbmUtaGVpZ2h0OiAke1NJWkVTLk1ELkxJTkVfSEVJR0hUfTtcblxuICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Jhc2UnKX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnYmFja2dyb3VuZCcpfTtcbiAgICBib3JkZXItcmFkaXVzICAgOiAke1JBRElVUy5YU31weDtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBjb2xvciwgcGFkZGluZy10b3AsIHBhZGRpbmctYm90dG9tLCBwYWRkaW5nLXJpZ2h0O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuM3M7XG5cbiAgICB3aWxsLWNoYW5nZTogY29sb3IsIHBhZGRpbmc7XG5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2UgICAgICAgICA6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnbGlnaHQnKX07XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSxcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmVycm9yID8gJ2Vycm9yJyA6ICdiYXNlJykpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICB0b3AgICAgICA6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6ICR7U0laRVMuU00uRk9OVF9TSVpFfTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIsXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlciA6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmVycm9yID8gJ2Vycm9yJyA6IChwcm9wcy5jb2xvciB8fCAnc2Vjb25kYXJ5JykpKX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmRpc2FibGVkLFxuICAgICY6ZGlzYWJsZWQsXG4gICAgJltyZWFkb25seV0ge1xuICAgICAgICBjdXJzb3IgOiBub3QtYWxsb3dlZDtcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2hlbHBlcicpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZGlzYWJsZWQsXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHkgICAgICAgICA6IDE7XG4gICAgICAgIGNvbG9yICAgICAgICAgICA6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Jhc2UnKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJywgJ2NyeXN0YWwnKX07XG4gICAgfVxuXG4gICAgJltyZWFkb25seV0ge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgJi5hcGgtZm9ybS1jb250cm9sLS1taWRkbGUge1xuICAgICAgICBwYWRkaW5nLXRvcDogJHsoeyBkZWZhdWx0UGFkZGluZyB9KSA9PiBkZWZhdWx0UGFkZGluZ307XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAkeyh7IGRlZmF1bHRQYWRkaW5nIH0pID0+IGRlZmF1bHRQYWRkaW5nfTtcbiAgICB9XG5cbiAgICAke3Byb3BzID0+ICFwcm9wcy5lcnJvciA/IG51bGwgOiBgXG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdlcnJvcicpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnZXJyb3InKX07XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmFjdGl2ZSxcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICArIC5hcGgtZm9ybS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Vycm9yJyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYH1cblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2xTdHlsZWQ7XG4iXX0= */"));

var AphFormControlButtonStyled = _styled("button", {
  target: "es9hd4l0",
  label: "AphFormControlButtonStyled"
})("box-sizing:border-box;position:absolute;display:block;padding:0;margin:0;width:30px;height:30px;top:10px;z-index:10;font-size:30px;line-height:30px;border:0;outline:0;background:transparent;text-align:center;transition:all ease 0.3s;&:active,&:focus,&:hover{color:", function (props) {
  return props.as ? null : colors$1.getFromTheme(props, 'base');
}, ";border:0;outline:0;background:transparent;}", function (props) {
  return text(props, props.textSize);
}, ";", function (props) {
  return props.left ? 'left' : 'right';
}, ":5px;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sQnV0dG9uU3R5bGVkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nRCIsImZpbGUiOiJGb3JtQ29udHJvbEJ1dHRvblN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgY29sb3JzLCB0ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtQ29udHJvbEJ1dHRvblN0eWxlZCA9IHN0eWxlZC5idXR0b25gXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbiAgICBwYWRkaW5nICAgOiAwO1xuICAgIG1hcmdpbiAgICA6IDA7XG4gICAgd2lkdGggICAgIDogMzBweDtcbiAgICBoZWlnaHQgICAgOiAzMHB4O1xuICAgIHRvcCAgICAgICA6IDEwcHg7XG4gICAgei1pbmRleCAgIDogMTA7XG5cbiAgICBmb250LXNpemUgIDogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcblxuICAgIGJvcmRlciAgICA6IDA7XG4gICAgb3V0bGluZSAgIDogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xuXG4gICAgJjphY3RpdmUsXG4gICAgJjpmb2N1cyxcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXMgPyBudWxsIDogY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Jhc2UnKX07XG5cbiAgICAgICAgYm9yZGVyICAgIDogMDtcbiAgICAgICAgb3V0bGluZSAgIDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJHtwcm9wcyA9PiB0ZXh0KHByb3BzLCBwcm9wcy50ZXh0U2l6ZSl9O1xuXG4gICAgJHtwcm9wcyA9PiAocHJvcHMubGVmdCA/ICdsZWZ0JyA6ICdyaWdodCcpfTogNXB4O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhGb3JtQ29udHJvbEJ1dHRvblN0eWxlZDtcbiJdfQ== */"));

var AphFormControlErrorMsgStyled = _styled("label", {
  target: "evee81d0",
  label: "AphFormControlErrorMsgStyled"
})("box-sizing:border-box;display:block;padding:0 10px;max-height:0;color:", function (props) {
  return colors$1.getFromTheme(props, 'error');
}, ";font-size:", SIZES.SM.FONT_SIZE, ";line-height:", SIZES.SM.LINE_HEIGHT, ";transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:0.15s;transition-property:max-height;", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZvcm1Db250cm9sRXJyb3JNc2dTdHlsZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWlEIiwiZmlsZSI6IkZvcm1Db250cm9sRXJyb3JNc2dTdHlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG4vKiBGcmFtZXdvcmsgRGVmaW5pdGlvbnMgKi9cbmltcG9ydCB7IFNJWkVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyogQ29tcG9uZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybUNvbnRyb2xFcnJvck1zZ1N0eWxlZCA9IHN0eWxlZC5sYWJlbGBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xuICAgIHBhZGRpbmcgICA6IDAgMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAwO1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Vycm9yJyl9O1xuXG4gICAgZm9udC1zaXplICA6ICR7U0laRVMuU00uRk9OVF9TSVpFfTtcbiAgICBsaW5lLWhlaWdodDogJHtTSVpFUy5TTS5MSU5FX0hFSUdIVH07XG5cbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbiAgICAgICA6IDAuMTVzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBtYXgtaGVpZ2h0O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogRXhwb3J0aW5nICovXG5leHBvcnQgZGVmYXVsdCBBcGhGb3JtQ29udHJvbEVycm9yTXNnU3R5bGVkO1xuIl19 */"));

var Input = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      onPaste = props.onPaste,
      preventPaste = props.preventPaste,
      btn = props.btn,
      button = props.button,
      errorMessage = props.errorMessage;

  var _useState = useState(!!value),
      hasValue = _useState[0],
      setHasValue = _useState[1];

  useEffect(function () {
    setHasValue(!!value);
  }, [value]);

  function handleChange(evt) {
    var target = evt.target;
    var inputValue = target.value;
    setHasValue(!!inputValue);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt), inputValue);
    }
  }

  function handlePaste(evt) {
    var _ref = evt || {},
        target = _ref.target;

    var inputValue = target.value;

    if (preventPaste) {
      evt.preventDefault();
    }

    if (typeof onPaste === 'function') {
      onPaste(Object.assign({}, evt), inputValue);
    }
  }

  return /*#__PURE__*/React.createElement(AphFormControlWrapperStyled, {
    hasButton: !!(btn || button),
    buttonAlign: btn && btn.align ? btn.align : button && button.align ? button.align : ''
  }, /*#__PURE__*/React.createElement(FormControlStyled, _extends({
    name: id
  }, props, {
    ref: ref,
    hasLabel: !!label,
    onChange: handleChange,
    onPaste: handlePaste,
    className: "aph-form-control " + (!label || !label && hasValue ? 'aph-form-control--middle' : '') + " " + (className || '')
  })), !label ? null : /*#__PURE__*/React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label " + (placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), !btn && !button ? null : /*#__PURE__*/React.createElement(AphFormControlButtonStyled, null, /*#__PURE__*/React.createElement("span", _extends({}, btn, button))), /*#__PURE__*/React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
Input.defaultProps = {
  id: "formControlRandomID" + Math.random(),
  label: '',
  btn: null,
  button: null,
  styles: {},
  defaultPadding: '10px'
};
Input.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  btn: propTypes.object,
  button: propTypes.object,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

function InputMask(_ref) {
  var mask = _ref.mask,
      maskProps = _ref.maskProps,
      value = _ref.value,
      onChange = _ref.onChange,
      ref = _ref.ref,
      inputRef = _ref.inputRef,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["mask", "maskProps", "value", "onChange", "ref", "inputRef", "disabled"]);

  return /*#__PURE__*/React.createElement(LibInputMask, _extends({
    mask: mask,
    value: value,
    onChange: onChange,
    disabled: disabled
  }, maskProps), function (inputProps) {
    return /*#__PURE__*/React.createElement(Input, _extends({}, inputProps, props, {
      disabled: disabled,
      inputRef: ref || inputRef
    }));
  });
}

InputMask.defaultProps = {
  mask: '',
  maskProps: {},
  defaultPadding: '10px'
};
InputMask.propTypes = {
  mask: propTypes.string,
  maskProps: propTypes.object
};

var _InputDateFallback$pr;
dayjs.extend(dayjsCustomParsePlugin);

function InputDateFallback(_ref) {
  var _ref2;

  var id = _ref.id,
      formatDisplay = _ref.formatDisplay,
      formatReturn = _ref.formatReturn,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      min = _ref.min,
      max = _ref.max,
      disabled = _ref.disabled,
      erasable = _ref.erasable,
      messageErase = _ref.messageErase,
      messageInvalid = _ref.messageInvalid,
      messageMin = _ref.messageMin,
      messageMax = _ref.messageMax,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "formatDisplay", "formatReturn", "placeholder", "onChange", "min", "max", "maskChar", "disabled", "erasable", "messageErase", "messageInvalid", "messageMin", "messageMax", "error", "errorMessage"]);

  var minRef = !min || !dayjs(min).isValid() ? null : dayjs(min).set('second', 0).set('minute', 0).set('hour', 0);
  var maxRef = !max || !dayjs(max).isValid() ? null : dayjs(max).set('second', 59).set('minute', 59).set('hour', 23);
  var maskFormat = formatDisplay.replace(/D|M|Y/g, '9');

  var _useState = useState(!props.value ? '' : dayjs(props.value).format(formatDisplay)),
      value = _useState[0],
      setValue = _useState[1];

  var validate = useCallback(function (newValue) {
    if (newValue === void 0) {
      newValue = '';
    }

    var dateRef = dayjs(newValue, formatDisplay).isValid() ? dayjs(newValue, formatDisplay) : null;
    var dateMinRef = !min || !dayjs(min).isValid() ? null : dayjs(min).set('second', 0).set('minute', 0).set('hour', 0);
    var dateMaxRef = !max || !dayjs(max).isValid() ? null : dayjs(max).set('second', 59).set('minute', 59).set('hour', 23);
    var dateInvalid = !!(!dateRef || !dateRef.isValid());
    var valueDigits = newValue.replace(/\D/g, '');
    var formatDisplayDigits = formatDisplay.replace(/\/|-| /g, '');
    var isInvalidValue = valueDigits.length === formatDisplayDigits.length && dateInvalid;
    var isInvalidMin = dateInvalid || isInvalidValue || !dateRef || !dateMinRef ? false : dateRef.set('second', 1).set('minute', 0).set('hour', 0).isBefore(dateMinRef);
    var isInvalidMax = dateInvalid || isInvalidValue || !dateRef || !dateMaxRef ? false : dateRef.set('second', 58).set('minute', 59).set('hour', 23).isAfter(dateMaxRef);
    var isInvalid = !!(isInvalidValue || isInvalidMin || isInvalidMax);
    return {
      isInvalid: isInvalid,
      isInvalidMin: isInvalidMin,
      isInvalidMax: isInvalidMax,
      isInvalidValue: isInvalidValue
    };
  }, [formatDisplay, min, max]);
  var handleChange = useCallback(function (evt) {
    var target = evt.target,
        srcEvt = _objectWithoutPropertiesLoose(evt, ["target"]);

    var targetValue = target.value,
        srcTarget = _objectWithoutPropertiesLoose(target, ["value"]);

    var normalized = dayjs(targetValue, formatDisplay);
    var newValue = normalized.isValid() ? normalized.format(formatReturn) : '';

    var _validate = validate(targetValue),
        isInvalid = _validate.isInvalid;

    setValue(targetValue);

    if (props.value !== newValue) {
      onChange(Object.assign(srcEvt, {
        target: Object.assign(srcTarget, {
          id: id,
          value: isInvalid ? '' : newValue
        })
      }));
    }
  }, [id, onChange, formatDisplay, formatReturn, validate, props.value]);
  var handleErase = useCallback(function (btnEvt) {
    handleChange(Object.assign(btnEvt || {}, {
      target: Object.assign((btnEvt || {}).target, {
        id: id,
        value: ''
      })
    }));
  }, [id, handleChange]);
  useEffect(function () {
    var normalized = dayjs(props.value);

    if (!props.value || !normalized.isValid()) {
      return;
    }

    setValue(normalized.format(formatDisplay));
  }, [props.value, formatDisplay, formatReturn]);

  var _validate2 = validate(value),
      isInvalid = _validate2.isInvalid,
      isInvalidMin = _validate2.isInvalidMin,
      isInvalidMax = _validate2.isInvalidMax;

  var errorMessageFinal = errorMessage || (isInvalidMin ? messageMin.replace('#min', minRef.format(formatDisplay)) : isInvalidMax ? messageMax.replace('#max', maxRef.format(formatDisplay)) : isInvalid ? messageInvalid : '');
  return /*#__PURE__*/React.createElement(Styled, {
    styles: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(InputMask, _extends({
    inputMode: "decimal",
    type: "text"
  }, props, {
    id: id,
    mask: maskFormat,
    disabled: disabled,
    value: value || '',
    onChange: handleChange,
    placeholder: placeholder || formatDisplay,
    error: error || isInvalid,
    errorMessage: errorMessageFinal
  })), erasable && value && !disabled && /*#__PURE__*/React.createElement(ButtonIcon, {
    type: "button",
    tabIndex: "-1",
    radius: "10px",
    title: messageErase,
    onClick: handleErase,
    size: 30,
    styles: (_ref2 = {
      position: 'absolute',
      top: '19px',
      right: 0
    }, _ref2[MEDIA_QUERIES.LT.SM] = {
      top: '15px',
      right: 0
    }, _ref2),
    icon: {
      slug: 'times',
      color: 'base'
    }
  }));
}

var valueTypes = propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date), propTypes.instanceOf(dayjs)]);
InputDateFallback.defaultProps = {
  formatDisplay: 'DD/MM/YYYY',
  formatReturn: 'YYYY-MM-DD',
  onChange: function onChange() {},
  value: '',
  min: '',
  max: '',
  maskChar: '_',
  disabled: false,
  erasable: true,
  messageErase: 'Limpar data',
  messageInvalid: 'Data inválida',
  messageMin: 'Data mínima: #min',
  messageMax: 'Data máxima: #max'
};
InputDateFallback.propTypes = (_InputDateFallback$pr = {
  onChange: propTypes.func,
  value: valueTypes.isRequired
}, _InputDateFallback$pr["onChange"] = propTypes.func.isRequired, _InputDateFallback$pr.min = valueTypes, _InputDateFallback$pr.max = valueTypes, _InputDateFallback$pr.disabled = propTypes.bool, _InputDateFallback$pr.erasable = propTypes.bool, _InputDateFallback$pr.messageErase = propTypes.string, _InputDateFallback$pr.messageInvalid = propTypes.string, _InputDateFallback$pr.messageMin = propTypes.string, _InputDateFallback$pr.messageMax = propTypes.string, _InputDateFallback$pr.maskChar = propTypes.string, _InputDateFallback$pr.formatDisplay = propTypes.string, _InputDateFallback$pr.formatReturn = propTypes.string, _InputDateFallback$pr);

var formatBR = 'DD/MM/YYYY';
var formatSYS = 'YYYY-MM-DD';

function DatePicker(_ref) {
  var _ref2;

  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      _ref$min = _ref.min,
      dateMin = _ref$min === void 0 ? '' : _ref$min,
      _ref$max = _ref.max,
      dateMax = _ref$max === void 0 ? '' : _ref$max,
      _ref$value = _ref.value,
      original = _ref$value === void 0 ? '' : _ref$value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$formatReturn = _ref.formatReturn,
      formatReturn = _ref$formatReturn === void 0 ? formatSYS : _ref$formatReturn,
      _ref$formatDisplay = _ref.formatDisplay,
      formatDisplay = _ref$formatDisplay === void 0 ? formatBR : _ref$formatDisplay,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? formatBR : _ref$placeholder,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$styles = _ref.styles,
      css = _ref$styles === void 0 ? {} : _ref$styles,
      disabled = _ref.disabled,
      _ref$erasable = _ref.erasable,
      erasable = _ref$erasable === void 0 ? true : _ref$erasable,
      _ref$messageErase = _ref.messageErase,
      messageErase = _ref$messageErase === void 0 ? 'Limpar data' : _ref$messageErase,
      _ref$messageInvalid = _ref.messageInvalid,
      messageInvalid = _ref$messageInvalid === void 0 ? 'Data inválida' : _ref$messageInvalid,
      _ref$messageMin = _ref.messageMin,
      messageMin = _ref$messageMin === void 0 ? 'Data mínima: #min' : _ref$messageMin,
      _ref$messageMax = _ref.messageMax,
      messageMax = _ref$messageMax === void 0 ? 'Data máxima: #max' : _ref$messageMax,
      _ref$messageWrapper = _ref.messageWrapper,
      messageWrapper = _ref$messageWrapper === void 0 ? {} : _ref$messageWrapper,
      _ref$dateLib = _ref.dateLib,
      dateLib = _ref$dateLib === void 0 ? dayjs : _ref$dateLib,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "min", "max", "value", "onChange", "formatReturn", "formatDisplay", "placeholder", "label", "styles", "disabled", "erasable", "messageErase", "messageInvalid", "messageMin", "messageMax", "messageWrapper", "dateLib"]);

  if (!hasDatePickerSupport()) {
    return /*#__PURE__*/React.createElement(InputDateFallback, _extends({
      id: id,
      min: dateMin,
      max: dateMax,
      value: original,
      onChange: onChange,
      formatDisplay: formatDisplay,
      formatReturn: formatReturn,
      placeholder: placeholder,
      label: label,
      disabled: disabled,
      erasable: erasable,
      messageErase: messageErase,
      messageInvalid: messageInvalid,
      messageMin: messageMin,
      messageMax: messageMax,
      styles: css
    }, props));
  }

  var type = 'date';
  var minRef = !dateMin ? null : dateLib(dateMin).set('second', 0).set('minute', 0).set('hour', 0);
  var maxRef = !dateMax ? null : dateLib(dateMax).set('second', 59).set('minute', 59).set('hour', 23);
  var min = minRef && minRef.isValid() ? minRef.format(formatSYS) : '';
  var max = maxRef && maxRef.isValid() ? maxRef.format(formatSYS) : '';

  var _useState = useState(!original ? '' : dateLib(original).format(formatSYS)),
      value = _useState[0],
      setValue = _useState[1];

  var validate = useCallback(function (newValue) {
    if (newValue === void 0) {
      newValue = '';
    }

    var dateRef = dateLib(newValue).isValid() ? dateLib(newValue) : null;
    var dateMinRef = !min || !dateLib(min).isValid() ? null : dateLib(min).set('second', 0).set('minute', 0).set('hour', 0);
    var dateMaxRef = !max || !dateLib(max).isValid() ? null : dateLib(max).set('second', 59).set('minute', 59).set('hour', 23);
    var dateInvalid = !!(!dateRef || !dateRef.isValid());
    var isInvalidValue = !!(newValue && dateInvalid);
    var isInvalidMin = dateInvalid || isInvalidValue || !dateRef || !dateMinRef ? false : dateRef.set('second', 1).set('minute', 0).set('hour', 0).isBefore(dateMinRef);
    var isInvalidMax = dateInvalid || isInvalidValue || !dateRef || !dateMaxRef ? false : dateRef.set('second', 58).set('minute', 59).set('hour', 23).isAfter(dateMaxRef);
    var isInvalid = !!(isInvalidValue || isInvalidMin || isInvalidMax);
    return {
      isInvalid: isInvalid,
      isInvalidMin: isInvalidMin,
      isInvalidMax: isInvalidMax,
      isInvalidValue: isInvalidValue
    };
  }, [min, max]);
  var handleChange = useCallback(function (evt) {
    var target = evt.target,
        srcEvt = _objectWithoutPropertiesLoose(evt, ["target"]);

    var targetValue = target.value,
        srcTarget = _objectWithoutPropertiesLoose(target, ["value"]);

    var normalized = dateLib(targetValue);
    var newValue = normalized.isValid() ? normalized.format(formatSYS) : '';
    var returnValue = normalized.isValid() ? normalized.format(formatReturn) : '';

    var _validate = validate(newValue),
        isInvalid = _validate.isInvalid;

    setValue(newValue);

    if (original !== returnValue) {
      onChange(Object.assign({}, srcEvt, {
        target: Object.assign({}, srcTarget, {
          id: id,
          value: isInvalid ? '' : returnValue
        })
      }));
    }
  }, [onChange, id, formatReturn, validate, original]);
  var handleErase = useCallback(function (btnEvt) {
    handleChange(Object.assign(btnEvt || {}, {
      target: Object.assign((btnEvt || {}).target, {
        id: id,
        value: ''
      })
    }));
  }, [id, handleChange]);
  useEffect(function () {
    var normalized = dateLib(original);

    if (!original || !normalized.isValid()) {
      return;
    }

    setValue(normalized.format(formatSYS));
  }, [original]);

  var _validate2 = validate(value),
      isInvalid = _validate2.isInvalid,
      isInvalidMin = _validate2.isInvalidMin,
      isInvalidMax = _validate2.isInvalidMax,
      isInvalidValue = _validate2.isInvalidValue;

  var styles = _objectSpread2(_objectSpread2({
    lineHeight: !label ? '50px' : '30px',
    '&.aph-form-control, &.aph-form-control--middle': {
      padding: !label ? '0 10px' : '18px 10px 0'
    }
  }, !label ? {} : {
    '+ .aph-form-label': {
      top: '0',
      fontSize: '14px'
    }
  }), css);

  var inputProps = _objectSpread2(_objectSpread2({
    id: id,
    type: type,
    label: label,
    styles: styles,
    placeholder: placeholder,
    onChange: handleChange,
    error: !!isInvalid,
    disabled: disabled
  }, props), {}, {
    min: min,
    max: max
  });

  return /*#__PURE__*/React.createElement(Styled, {
    styles: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Input, _extends({
    value: value
  }, inputProps)), erasable && value && !disabled && /*#__PURE__*/React.createElement(ButtonIcon, {
    type: "button",
    tabIndex: "-1",
    radius: "10px",
    title: messageErase,
    onClick: handleErase,
    size: 30,
    styles: (_ref2 = {
      position: 'absolute',
      top: '19px',
      right: '40px'
    }, _ref2[MEDIA_QUERIES.LT.SM] = {
      top: '15px',
      right: 0
    }, _ref2),
    icon: {
      slug: 'times',
      color: 'base'
    }
  }), isInvalid && /*#__PURE__*/React.createElement(Styled, _extends({
    as: "label",
    htmlFor: id,
    padding: "0 10px",
    textSize: "sm",
    textColor: "error"
  }, messageWrapper, {
    styles: _objectSpread2({
      display: 'block'
    }, messageWrapper.styles || {})
  }), minRef && isInvalidMin && messageMin.replace('#min', minRef.format(formatDisplay)), maxRef && isInvalidMax && messageMax.replace('#max', maxRef.format(formatDisplay)), isInvalidValue && messageInvalid));
}

var valueTypes$1 = propTypes.oneOfType([propTypes.string, propTypes.instanceOf(Date), propTypes.instanceOf(dayjs)]);
DatePicker.defaultProps = {
  formatDisplay: 'DD/MM/YYYY',
  formatReturn: 'YYYY-MM-DD',
  onChange: function onChange() {},
  value: '',
  min: '',
  max: '',
  maskChar: '_',
  disabled: false,
  erasable: true,
  messageErase: 'Limpar data',
  messageInvalid: 'Data inválida',
  messageMin: 'Data mínima: #min',
  messageMax: 'Data máxima: #max'
};
DatePicker.propTypes = {
  value: valueTypes$1.isRequired,
  onChange: propTypes.func.isRequired,
  min: valueTypes$1,
  max: valueTypes$1,
  disabled: propTypes.bool,
  erasable: propTypes.bool,
  messageErase: propTypes.string,
  messageInvalid: propTypes.string,
  messageMin: propTypes.string,
  messageMax: propTypes.string,
  formatDisplay: propTypes.string,
  formatReturn: propTypes.string,
  maskChar: propTypes.string
};

function InputCnpjOrCpf(_ref) {
  var _ref$value = _ref.value,
      srcValue = _ref$value === void 0 ? '' : _ref$value,
      _ref$onBlur = _ref.onBlur,
      onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$validationDelay = _ref.validationDelay,
      validationDelay = _ref$validationDelay === void 0 ? 1000 : _ref$validationDelay,
      props = _objectWithoutPropertiesLoose(_ref, ["value", "onBlur", "onChange", "validationDelay"]);

  var _useState = useState(null),
      timer = _useState[0],
      setTimer = _useState[1];

  var _useState2 = useState(srcValue),
      value = _useState2[0],
      setValue = _useState2[1];

  function handleEvent(evt, optValue) {
    var target = evt.target;
    var inputId = target.id,
        inputValue = target.value;
    var valueToFilter = typeof optValue === 'string' ? optValue : inputValue;
    var filteredValue = patterns.numeric(valueToFilter, ['-', '.', '/', ' ']);
    setValue(filteredValue);
    return Object.assign({}, evt, {
      target: Object.assign({}, evt.target, {
        id: inputId,
        value: filteredValue
      })
    });
  }

  function handleValidation(evt, callback) {
    if (callback === void 0) {
      callback = function callback() {};
    }

    var target = evt.target;
    var inputValue = target.value;
    var isValid = documents.valid(inputValue);
    var optValue = isValid ? documents.format(inputValue) : undefined;
    callback(handleEvent(evt, optValue));
  }

  function handleBlur(evt) {
    clearTimeout(timer);
    handleValidation(handleEvent(evt), onBlur);
  }

  function handleChange(evt) {
    var newEvt = handleEvent(evt);
    clearTimeout(timer);
    onChange(newEvt);
    setTimer(setTimeout(function () {
      handleValidation(newEvt, onChange);
    }, validationDelay));
  }

  useEffect(function () {
    setValue(srcValue);
    return function () {
      clearTimeout(timer);
    };
  }, [srcValue, timer]);
  return /*#__PURE__*/React.createElement(Input, _extends({
    onBlur: handleBlur,
    onChange: handleChange,
    value: value,
    inputMode: "numeric"
  }, props));
}

function cnpjValidator(cnpj) {
  if (cnpj === void 0) {
    cnpj = '';
  }

  return isValid(cnpj);
}

function cpfValidator(cpf) {
  if (cpf === void 0) {
    cpf = '';
  }

  return isValid$1(cpf);
}

function emailValidator(email) {
  var regex = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}

function InputCpf(_ref) {
  var error = _ref.error,
      onChange = _ref.onChange,
      pMask = _ref.mask,
      rest = _objectWithoutPropertiesLoose(_ref, ["error", "onChange", "mask"]);

  var mask = pMask || '999.999.999-99';

  var _useState = useState(error || false),
      hasError = _useState[0],
      setHasError = _useState[1];

  function handleChange(evt) {
    var _ref2 = evt || {},
        target = _ref2.target;

    var _ref3 = target || {},
        value = _ref3.value;

    var isValid = cpfValidator(value);
    setHasError(value && !isValid ? true : false);
    onChange(_objectSpread2({}, evt || {}));
  }

  return /*#__PURE__*/React.createElement(InputMask, _extends({
    mask: mask,
    error: error || hasError,
    onChange: handleChange,
    pattern: "\\d{3}\\.?\\d{3}\\.?\\d{3}-?\\d{2}"
  }, rest));
}

InputCpf.defaultProps = {
  mask: '',
  onChange: function onChange() {}
};
InputCpf.propTypes = {
  mask: propTypes.string,
  onChange: propTypes.func
};

var InputNumeric = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (_ref, ref) {
  var id = _ref.id,
      accept = _ref.accept,
      className = _ref.className,
      label = _ref.label,
      labelProps = _ref.labelProps,
      placeholder = _ref.placeholder,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      posfix = _ref.posfix,
      suggestions = _ref.suggestions,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      before = _ref.before,
      after = _ref.after,
      doubleDecimal = _ref.doubleDecimal,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "accept", "className", "label", "labelProps", "placeholder", "error", "errorMessage", "posfix", "suggestions", "onChange", "onBlur", "onFocus", "before", "after", "doubleDecimal"]);

  var _useState = useState(false),
      inFocus = _useState[0],
      setInFocus = _useState[1];

  var hasValue = !!(props.value || typeof props.value === 'number');
  var hasSuggestions = !!(suggestions && suggestions.length);
  var list = !hasSuggestions ? {} : {
    list: id + "-suggestions"
  };

  function getInRange(newValue) {
    if (!newValue) {
      return newValue;
    }

    var parsed = parseFloat(newValue, 10);
    var parsedMin = parseFloat(props.min, 10);
    var parsedMax = parseFloat(props.max, 10);

    if (typeof parsedMin === 'number' && parsedMin > parsed) {
      return parsedMin;
    }

    if (typeof parsedMax === 'number' && parsedMax < parsed) {
      return parsedMax;
    }

    return newValue;
  }

  function handleEvt(evt, shouldRound) {
    if (shouldRound === void 0) {
      shouldRound = false;
    }

    var target = evt.target;
    var value = target.value;
    var rangeValue = getInRange(value);
    var filtered = patterns.numeric(rangeValue, accept);
    var newValue = shouldRound && doubleDecimal ? formatNumberRound(parseFloat(filtered, 10)) : filtered;
    return Object.assign({}, evt, {
      target: Object.assign({}, evt.target, {
        id: id,
        value: newValue
      })
    });
  }

  function handleChange(evt, shouldRound) {
    if (shouldRound === void 0) {
      shouldRound = false;
    }

    var newEvt = handleEvt(evt, shouldRound);
    onChange(newEvt, newEvt.target.value);
  }

  function handleBlur(evt) {
    setInFocus(false);
    onBlur(handleEvt(evt, true));
    handleChange(evt, true);
  }

  function handleFocus(evt) {
    setInFocus(true);
    onFocus(handleEvt(evt));
  }

  return /*#__PURE__*/React.createElement(AphFormControlWrapperStyled, {
    hasError: !!error,
    hasLabel: !!label
  }, hasValue && before && /*#__PURE__*/React.createElement(AphFormControlButtonStyled, {
    left: true,
    as: "label",
    htmlFor: id,
    textColor: inFocus || hasValue ? 'base' : props.disabled ? 'disabled' : 'helper',
    styles: _objectSpread2({
      fontSize: '16px'
    }, label ? {
      top: '20px'
    } : {})
  }, before), /*#__PURE__*/React.createElement(FormControlStyled, _extends({}, props, list, {
    id: id,
    ref: ref,
    onChange: handleChange,
    onBlur: handleBlur,
    onFocus: handleFocus,
    className: "aph-form-control " + (!label || !label && hasValue ? 'aph-form-control--middle' : '') + " " + (className || ''),
    placeholder: placeholder,
    hasLabel: !!label,
    hasPosfix: !!posfix,
    hasBefore: !!before && hasValue,
    hasAfter: !!after && hasValue
  })), label && /*#__PURE__*/React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label " + (placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), hasValue && after && /*#__PURE__*/React.createElement(AphFormControlButtonStyled, {
    as: "label",
    htmlFor: id,
    textColor: inFocus || hasValue ? 'base' : props.disabled ? 'disabled' : 'helper',
    styles: _objectSpread2({
      fontSize: '16px'
    }, label && inFocus || label && hasValue ? {
      top: '20px'
    } : {})
  }, after), errorMessage && /*#__PURE__*/React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    className: "aph-form-error"
  }, errorMessage || ''), hasSuggestions && /*#__PURE__*/React.createElement("datalist", {
    id: list.list
  }, suggestions.map(function (suggestion, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "suggestion-" + index,
      value: suggestion
    });
  })));
}));
InputNumeric.defaultProps = {
  id: '',
  label: '',
  labelProps: {},
  accept: [],
  min: undefined,
  max: undefined,
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  step: 0.1,
  styles: {},
  suggestions: [],
  type: 'text',
  inputMode: 'numeric',
  value: undefined,
  before: '',
  after: '',
  doubleDecimal: false,
  defaultPadding: '10px'
};
var valueTypes$2 = propTypes.oneOfType([propTypes.number, propTypes.string]);
InputNumeric.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  labelProps: propTypes.object,
  accept: propTypes.array,
  min: valueTypes$2,
  max: valueTypes$2,
  onChange: propTypes.func.isRequired,
  step: valueTypes$2,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  suggestions: propTypes.array,
  value: valueTypes$2,
  before: propTypes.string,
  after: propTypes.string,
  doubleDecimal: propTypes.bool
};

var InputDiscount = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (_ref, ref) {
  var currency = _ref.currency,
      discountType = _ref.discountType,
      locale = _ref.locale,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      type = _ref.type,
      value = _ref.value,
      props = _objectWithoutPropertiesLoose(_ref, ["currency", "discountType", "locale", "onBlur", "onFocus", "type", "value"]);

  var _useState = useState(false),
      inFocus = _useState[0],
      setInFocus = _useState[1];

  var isDynamic = discountType === 'dynamic';
  var isFixed = discountType === 'fixed';
  var min = isDynamic || isFixed ? 0 : undefined;
  var max = isDynamic ? 100 : undefined;
  var currencyMask = formatCurrency(0, locale, currency).replace(/\d|\,|\./g, '');
  var before = inFocus && isFixed ? currencyMask : '';
  var after = inFocus && isDynamic ? '%' : '';
  var customType = !inFocus ? 'text' : type || 'number';
  var customValue = inFocus || !isFixed && !isDynamic || value === undefined || value === '' ? value : isFixed ? formatCurrency(value, locale, currency) : value + '%';

  function handleBlur(evt) {
    setInFocus(false);
    onBlur(evt);
  }

  function handleFocus(evt) {
    setInFocus(true);
    onFocus(evt);
  }

  var customProps = _objectSpread2({
    min: min,
    max: max,
    before: before,
    after: after,
    ref: ref,
    type: customType,
    value: customValue,
    onBlur: handleBlur,
    onFocus: handleFocus,
    accept: ['.', ',']
  }, props);

  return /*#__PURE__*/React.createElement(InputNumeric, customProps);
}));
InputDiscount.defaultProps = {
  id: '',
  label: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  type: 'number',
  styles: {},
  suggestions: [],
  value: undefined,
  defaultPadding: '10px',
  currency: 'BRL',
  locale: 'pt-BR',
  discountType: 'dynamic',
  doubleDecimal: true
};
var valueTypes$3 = propTypes.oneOfType([propTypes.number, propTypes.string]);
InputDiscount.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  suggestions: propTypes.array,
  value: valueTypes$3,
  currency: propTypes.string,
  locale: propTypes.string,
  discountType: propTypes.string,
  doubleDecimal: propTypes.bool
};

var InputFakeWrapper = /*#__PURE__*/_styled(Styled, {
  target: "e9v0eal0",
  label: "InputFakeWrapper"
})("&:hover{.aph-label{color:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";}}button{svg g{transition:stroke 0.2s ease;}&:active,&:focus,&:hover{background-color:rgba(0,0,0,.05);svg g{stroke:", function (props) {
  return colors$1.getFromTheme(props, 'secondary');
}, ";}}}", function (_ref) {
  var styles = _ref.styles;
  return styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0RmFrZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXVDIiwiZmlsZSI6IklucHV0RmFrZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vQnV0dG9uL0J1dHRvbic7XG5pbXBvcnQgQ29sIGZyb20gJy4uLy4uL0dyaWQvQ29sdW1uJztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL0ljb25zL0ljb24nO1xuaW1wb3J0IFJvdyBmcm9tICcuLi8uLi9HcmlkL1Jvdyc7XG5pbXBvcnQgU3R5bGVkIGZyb20gJy4uLy4uL1N0eWxlZC9TdHlsZWQnO1xuXG5jb25zdCBJbnB1dEZha2VXcmFwcGVyID0gc3R5bGVkKFN0eWxlZClgXG4gICY6aG92ZXIge1xuICAgIC5hcGgtbGFiZWwge1xuICAgICAgY29sb3I6ICR7KHByb3BzKSA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnc2Vjb25kYXJ5Jyl9O1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgc3ZnIGcge1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlIDAuMnMgZWFzZTtcbiAgICB9XG5cbiAgICAmOmFjdGl2ZSwgJjpmb2N1cywgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XG5cbiAgICAgIHN2ZyBnIHtcbiAgICAgICAgc3Ryb2tlOiAkeyhwcm9wcykgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ3NlY29uZGFyeScpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAkeyh7IHN0eWxlcyB9KSA9PiBzdHlsZXN9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRGYWtlKHtcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBsYWJlbCxcbiAgb25SZW1vdmUsXG4gIG9uUmVtb3ZlSWNvbixcbiAgb25SZW1vdmVJY29uQ29sb3IsXG4gIG9uUmVtb3ZlSWNvblNpemUsXG4gIG9uUmVtb3ZlVGl0bGUsXG4gIG9uUmVtb3ZlV2lkdGgsXG4gIHBsYWNlaG9sZGVyLFxuICB2YWx1ZSxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgY29uc3QgdmFsY2hpbCA9IHZhbHVlIHx8IGNoaWxkcmVuO1xuICBjb25zdCBkaXNwbGF5ID0gdmFsY2hpbCB8fCBwbGFjZWhvbGRlcjtcbiAgY29uc3Qgb25SZW1vdmVDb2xXaWR0aCA9IGAke3BhcnNlSW50KG9uUmVtb3ZlV2lkdGgsIDEwKSArIDV9cHhgO1xuICBjb25zdCBtYWluQ29sV2lkdGggPSAhb25SZW1vdmUgPyAnMTAwJScgOiBgY2FsYygxMDAlIC0gJHtvblJlbW92ZUNvbFdpZHRofSlgO1xuXG4gIHJldHVybiAoIWRpc3BsYXkgJiYgIWxhYmVsKSA/IG51bGwgOiAoXG4gICAgPElucHV0RmFrZVdyYXBwZXJcbiAgICAgIGJhY2tncm91bmQ9e2Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICdiYWNrZ3JvdW5kJ31cbiAgICAgIHBhZGRpbmc9XCI1cHggMTBweFwiXG4gICAgICByYWRpdXM9ezV9XG4gICAgICBzaGFkb3c9e2ZhbHNlfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxSb3cgdmVydGljYWw9XCJjZW50ZXJcIj5cbiAgICAgICAgPENvbFxuICAgICAgICAgIHdpZHRoPXttYWluQ29sV2lkdGh9XG4gICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICAgIDxTdHlsZWRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBoLWZvcm0tY29udHJvbC1mYWtlX19sYWJlbFwiXG4gICAgICAgICAgICAgIG1hcmdpbj17IWRpc3BsYXkgPyAnJyA6ICctMnB4IDAgMnB4J31cbiAgICAgICAgICAgICAgdGV4dENvbG9yPVwiaGVscGVyXCJcbiAgICAgICAgICAgICAgdGV4dFNpemU9eyFkaXNwbGF5ID8gJ21kJyA6ICdzbSd9XG4gICAgICAgICAgICAgIHRleHRUcnVuY2F0ZVxuICAgICAgICAgICAgICB0ZXh0VXBwZXJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9TdHlsZWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8U3R5bGVkXG4gICAgICAgICAgICB0ZXh0VHJ1bmNhdGVcbiAgICAgICAgICAgIHRleHRDb2xvcj17IXZhbGNoaWwgPyAnaGVscGVyLG9yaWdpbmFsLDAuNScgOiAnJ31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFwaC1mb3JtLWNvbnRyb2wtZmFrZV9fJHt2YWxjaGlsID8gJ2NvbnRlbnQnIDogJ3BsYWNlaG9sZGVyJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkaXNwbGF5fVxuICAgICAgICAgIDwvU3R5bGVkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAge29uUmVtb3ZlICYmIChcbiAgICAgICAgICA8Q29sXG4gICAgICAgICAgICB3aWR0aD17b25SZW1vdmVDb2xXaWR0aH1cbiAgICAgICAgICAgIHN0eWxlcz17e1xuICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMCcsXG4gICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzVweCcsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICBtYXJnaW49XCIwXCJcbiAgICAgICAgICAgICAgdGl0bGU9e29uUmVtb3ZlVGl0bGV9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxuICAgICAgICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IG9uUmVtb3ZlV2lkdGgsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IG9uUmVtb3ZlV2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBvblJlbW92ZVdpZHRoLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBvblJlbW92ZVdpZHRoLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IGAke3BhcnNlRmxvYXQob25SZW1vdmVXaWR0aCwgMTApIC8gNn1weGAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgc2l6ZT17b25SZW1vdmVJY29uU2l6ZSwgcGFyc2VGbG9hdChvblJlbW92ZVdpZHRoLCAxMCkgLyAyfVxuICAgICAgICAgICAgICAgIHNsdWc9e29uUmVtb3ZlSWNvbn1cbiAgICAgICAgICAgICAgICBjb2xvcj17b25SZW1vdmVJY29uQ29sb3J9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICAgICAgICBnOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiAnM3B4ICFpbXBvcnRhbnQnLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICl9XG4gICAgICA8L1Jvdz5cbiAgICA8L0lucHV0RmFrZVdyYXBwZXI+XG4gICk7XG59XG5cbklucHV0RmFrZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgbGFiZWw6ICcnLFxuICBvblJlbW92ZTogdW5kZWZpbmVkLFxuICBvblJlbW92ZUljb246ICd0aW1lcycsXG4gIG9uUmVtb3ZlSWNvbkNvbG9yOiAnYmFzZScsXG4gIG9uUmVtb3ZlSWNvblNpemU6IHVuZGVmaW5lZCxcbiAgb25SZW1vdmVUaXRsZTogJ1JlbW92ZXInLFxuICBvblJlbW92ZVdpZHRoOiAnNDBweCcsXG4gIHBsYWNlaG9sZGVyOiAnJyxcbiAgdmFsdWU6ICcnLFxufTtcblxuSW5wdXRGYWtlLnByb3BUeXBlcyA9IHtcbiAgZGlzYWJsZWQ6IHByb3BUeXBlcy5ib29sLFxuICBsYWJlbDogcHJvcFR5cGVzLnN0cmluZyxcbiAgb25SZW1vdmU6IHByb3BUeXBlcy5mdW5jLFxuICBvblJlbW92ZUljb246IHByb3BUeXBlcy5zdHJpbmcsXG4gIG9uUmVtb3ZlSWNvbkNvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBvblJlbW92ZUljb25TaXplOiBwcm9wVHlwZXMubnVtYmVyLFxuICBvblJlbW92ZVRpdGxlOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBvblJlbW92ZVdpZHRoOiBwcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogcHJvcFR5cGVzLnN0cmluZyxcbiAgdmFsdWU6IHByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl19 */"));

function InputFake(_ref2) {
  var children = _ref2.children,
      disabled = _ref2.disabled,
      label = _ref2.label,
      onRemove = _ref2.onRemove,
      onRemoveIcon = _ref2.onRemoveIcon,
      onRemoveIconColor = _ref2.onRemoveIconColor,
      onRemoveTitle = _ref2.onRemoveTitle,
      onRemoveWidth = _ref2.onRemoveWidth,
      placeholder = _ref2.placeholder,
      value = _ref2.value,
      props = _objectWithoutPropertiesLoose(_ref2, ["children", "disabled", "label", "onRemove", "onRemoveIcon", "onRemoveIconColor", "onRemoveIconSize", "onRemoveTitle", "onRemoveWidth", "placeholder", "value"]);

  var valchil = value || children;
  var display = valchil || placeholder;
  var onRemoveColWidth = parseInt(onRemoveWidth, 10) + 5 + "px";
  var mainColWidth = !onRemove ? '100%' : "calc(100% - " + onRemoveColWidth + ")";
  return !display && !label ? null : /*#__PURE__*/React.createElement(InputFakeWrapper, _extends({
    background: disabled ? 'disabled' : 'background',
    padding: "5px 10px",
    radius: 5,
    shadow: false
  }, props), /*#__PURE__*/React.createElement(Row, {
    vertical: "center"
  }, /*#__PURE__*/React.createElement(Column, {
    width: mainColWidth,
    styles: {
      textAlign: 'left'
    }
  }, label && /*#__PURE__*/React.createElement(Styled, {
    className: "aph-form-control-fake__label",
    margin: !display ? '' : '-2px 0 2px',
    textColor: "helper",
    textSize: !display ? 'md' : 'sm',
    textTruncate: true,
    textUpper: true
  }, label), /*#__PURE__*/React.createElement(Styled, {
    textTruncate: true,
    textColor: !valchil ? 'helper,original,0.5' : '',
    className: "aph-form-control-fake__" + (valchil ? 'content' : 'placeholder')
  }, display)), onRemove && /*#__PURE__*/React.createElement(Column, {
    width: onRemoveColWidth,
    styles: {
      textAlign: 'right',
      paddingLeft: '0',
      paddingRight: '5px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    link: true,
    small: true,
    margin: "0",
    title: onRemoveTitle,
    onClick: onRemove,
    styles: {
      minHeight: onRemoveWidth,
      minWidth: onRemoveWidth,
      height: onRemoveWidth,
      width: onRemoveWidth,
      padding: parseFloat(onRemoveWidth, 10) / 6 + "px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    size: (parseFloat(onRemoveWidth, 10) / 2),
    slug: onRemoveIcon,
    color: onRemoveIconColor,
    styles: {
      g: {
        strokeWidth: '3px !important'
      }
    }
  })))));
}
InputFake.defaultProps = {
  disabled: false,
  label: '',
  onRemove: undefined,
  onRemoveIcon: 'times',
  onRemoveIconColor: 'base',
  onRemoveIconSize: undefined,
  onRemoveTitle: 'Remover',
  onRemoveWidth: '40px',
  placeholder: '',
  value: ''
};
InputFake.propTypes = {
  disabled: propTypes.bool,
  label: propTypes.string,
  onRemove: propTypes.func,
  onRemoveIcon: propTypes.string,
  onRemoveIconColor: propTypes.string,
  onRemoveIconSize: propTypes.number,
  onRemoveTitle: propTypes.string,
  onRemoveWidth: propTypes.string,
  placeholder: propTypes.string,
  value: propTypes.string
};

var IconFromToIconBetweenWrapper = _styled("div", {
  target: "evwkm880",
  label: "IconFromToIconBetweenWrapper"
})("position:absolute;top:10px;left:50%;transform:translateX(-50%);padding:2.5px 0;background-color:", function (_ref) {
  var disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["disabled"]);

  return colors$1.getFullColor(props, disabled ? 'disabled' : 'background');
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0RnJvbVRvSWNvbkJldHdlZW4uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUsrQyIsImZpbGUiOiJJbnB1dEZyb21Ub0ljb25CZXR3ZWVuLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29ucy9JY29uJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJztcblxuY29uc3QgSWNvbkZyb21Ub0ljb25CZXR3ZWVuV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgcGFkZGluZzogMi41cHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBkaXNhYmxlZCwgLi4ucHJvcHMgfSkgPT4gY29sb3JzLmdldEZ1bGxDb2xvcihwcm9wcywgKGRpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICdiYWNrZ3JvdW5kJykpfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb25Gcm9tVG9JY29uQmV0d2Vlbih7IGRpc2FibGVkLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEljb25Gcm9tVG9JY29uQmV0d2VlbldyYXBwZXIgZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgIDxJY29uIHsuLi5wcm9wc30gLz5cbiAgICA8L0ljb25Gcm9tVG9JY29uQmV0d2VlbldyYXBwZXI+XG4gICk7XG59XG4iXX0= */"));

function IconFromToIconBetween(_ref2) {
  var disabled = _ref2.disabled,
      props = _objectWithoutPropertiesLoose(_ref2, ["disabled"]);

  return /*#__PURE__*/React.createElement(IconFromToIconBetweenWrapper, {
    disabled: disabled
  }, /*#__PURE__*/React.createElement(Icon, props));
}

function InputFromTo(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$from = _ref.from,
      from = _ref$from === void 0 ? {} : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === void 0 ? {} : _ref$to,
      sharedProps = _objectWithoutPropertiesLoose(_ref, ["disabled", "from", "to"]);

  return /*#__PURE__*/React.createElement(Styled, {
    styles: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Row, {
    vertical: "start"
  }, /*#__PURE__*/React.createElement(Column, {
    xs: 6
  }, /*#__PURE__*/React.createElement(DatePicker, _extends({
    disabled: disabled
  }, sharedProps, from))), /*#__PURE__*/React.createElement(Column, {
    xs: 6
  }, /*#__PURE__*/React.createElement(DatePicker, _extends({
    disabled: disabled
  }, sharedProps, to)))), /*#__PURE__*/React.createElement(IconFromToIconBetween, {
    className: "icon-between-dates",
    color: "helper",
    slug: "transfer",
    size: 20,
    disabled: disabled
  }));
}

var InputMoney = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(InputDiscount, props);
}));
InputMoney.defaultProps = {
  id: '',
  label: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  type: 'number',
  inputMode: 'decimal',
  styles: {},
  suggestions: [],
  value: undefined,
  defaultPadding: '10px',
  currency: 'BRL',
  locale: 'pt-BR',
  discountType: 'fixed',
  doubleDecimal: true
};
var valueTypes$4 = propTypes.oneOfType([propTypes.number, propTypes.string]);
InputMoney.propTypes = {
  id: propTypes.string.isRequired,
  label: propTypes.string,
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  suggestions: propTypes.array,
  value: valueTypes$4,
  currency: propTypes.string,
  locale: propTypes.string
};

function InputOneTimePassword(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? 'otp' : _ref$id,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 6 : _ref$size,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      _ref$labelTooltip = _ref.labelTooltip,
      labelTooltip = _ref$labelTooltip === void 0 ? '' : _ref$labelTooltip,
      _ref$labelTooltipIcon = _ref.labelTooltipIcon,
      labelTooltipIcon = _ref$labelTooltipIcon === void 0 ? 'help' : _ref$labelTooltipIcon,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$onKeyPress = _ref.onKeyPress,
      onKeyPress = _ref$onKeyPress === void 0 ? function () {} : _ref$onKeyPress,
      _ref$onKeyUp = _ref.onKeyUp,
      onKeyUp = _ref$onKeyUp === void 0 ? function () {} : _ref$onKeyUp,
      _ref$onKeyDown = _ref.onKeyDown,
      onKeyDown = _ref$onKeyDown === void 0 ? function () {} : _ref$onKeyDown,
      _ref$getPrefix = _ref.getPrefix,
      getPrefix = _ref$getPrefix === void 0 ? function (fieldId) {
    if (fieldId === void 0) {
      fieldId = '';
    }

    return id + "_" + fieldId;
  } : _ref$getPrefix,
      _ref$getElementSelect = _ref.getElementSelector,
      getElementSelector = _ref$getElementSelect === void 0 ? function (inputIndex) {
    return "#" + getPrefix(inputIndex);
  } : _ref$getElementSelect,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus,
      _ref$center = _ref.center,
      center = _ref$center === void 0 ? false : _ref$center,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$disableds = _ref.disableds,
      disableds = _ref$disableds === void 0 ? [] : _ref$disableds,
      _ref$wrapper = _ref.wrapper,
      wrapper = _ref$wrapper === void 0 ? {} : _ref$wrapper,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? colors$1.get('secondary') : _ref$color,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "size", "label", "labelTooltip", "labelTooltipIcon", "placeholder", "value", "onChange", "onKeyPress", "onKeyUp", "onKeyDown", "getPrefix", "getElementSelector", "autoFocus", "center", "disabled", "disableds", "wrapper", "color"]);

  var _useWindowSize = useWindowSize(),
      xs = _useWindowSize.xs;

  var _useState = useState({}),
      composed = _useState[0],
      setComposed = _useState[1];

  var alignment = !center ? '' : 'center';

  function handleFilteredEvt(evt, otpIndexId, shouldUpdate, optValue, emptyValue) {
    var _objectSpread2$1;

    if (shouldUpdate === void 0) {
      shouldUpdate = false;
    }

    if (optValue === void 0) {
      optValue = '';
    }

    if (emptyValue === void 0) {
      emptyValue = false;
    }

    var filteredValue = patterns.numeric("" + (emptyValue ? '' : optValue || evt.target.value || ''), []);

    var newComposed = _objectSpread2(_objectSpread2({}, composed), {}, (_objectSpread2$1 = {}, _objectSpread2$1[otpIndexId] = filteredValue, _objectSpread2$1));

    var fullValue = Object.values(newComposed).join('');
    var evtUpdated = Object.assign({}, evt, {
      target: Object.assign({}, evt.target, {
        id: id,
        value: fullValue
      })
    });

    if (shouldUpdate) {
      setComposed(newComposed);
      onChange(evtUpdated);
    }

    return evtUpdated;
  }

  function focusNext(inputIndex) {
    var nextIndex = inputIndex + 1;

    if (nextIndex > size - 1) {
      return;
    }

    focus(getElementSelector(nextIndex));
  }

  function focusPrev(inputIndex) {
    var previousIndex = inputIndex - 1;

    if (previousIndex < 0) {
      return;
    }

    focus(getElementSelector(previousIndex));
  }

  function isValid(keyCode) {
    return keyCode >= 48 && keyCode <= 57;
  }

  function handleBackspace(evt, inputIndex) {
    if (evt.target.value === '') {
      focusPrev(inputIndex);
    } else {
      handleFilteredEvt(evt, getPrefix(inputIndex), true, '', true);
    }
  }

  function handleKeyPress(evt, inputIndex) {
    if (!isValid(evt.keyCode) && evt.charCode !== 13) {
      evt.preventDefault();
    }

    onKeyPress(handleFilteredEvt(evt, getPrefix(inputIndex)));
  }

  function handleKeyUp(evt, inputIndex) {
    if (isValid(evt.keyCode)) {
      handleFilteredEvt(evt, getPrefix(inputIndex), true, String.fromCharCode(evt.keyCode));
      focusNext(inputIndex);
      return;
    }

    onKeyUp(handleFilteredEvt(evt, getPrefix(inputIndex), true));
  }

  function handleKeyDown(evt, inputIndex) {
    switch (evt.keyCode) {
      case 8:
        handleBackspace(evt, inputIndex);
        break;

      case 37:
        focusPrev(inputIndex);
        break;

      case 39:
        focusNext(inputIndex);
        break;
    }

    onKeyDown(handleFilteredEvt(evt, getPrefix(inputIndex)));
  }

  useEffect(function () {
    var updatedValue = value || '';
    var notChanged = Object.values(composed).join('') === updatedValue;

    if (notChanged) {
      return;
    }

    if (typeof value !== 'string' || !value) {
      setComposed({});
    } else {
      var newComposed = {};
      value.split('').forEach(function (otpIndexValue, otpIndex) {
        newComposed[getPrefix(otpIndex)] = otpIndexValue;
      });
      setComposed(newComposed);
    }
  }, [composed, getPrefix, value]);
  return /*#__PURE__*/React.createElement(Segment, _extends({
    padding: "0"
  }, wrapper), label && /*#__PURE__*/React.createElement(Label, {
    id: getPrefix('label'),
    textAlign: alignment,
    margin: "0"
  }, /*#__PURE__*/React.createElement("span", {
    style: !labelTooltip ? {} : {
      padding: '0 5px 0 20px'
    }
  }, label), labelTooltip && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'normal',
      textTransform: 'none'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    tip: labelTooltip
  }, /*#__PURE__*/React.createElement(Icon, {
    slug: labelTooltipIcon,
    size: 20,
    styles: {
      cursor: 'help',
      display: 'inline-block',
      margin: '-4px 0 0 0'
    }
  })))), /*#__PURE__*/React.createElement(Row, {
    horizontal: alignment,
    vertical: alignment,
    style: {
      marginRight: '-5px',
      marginLeft: '-5px'
    }
  }, Array.from({
    length: size
  }, function (v, k) {
    return k;
  }).map(function (otpIndex) {
    var inputId = getPrefix(otpIndex);
    return /*#__PURE__*/React.createElement(Column, {
      width: (xs ? 5 : 6) + "0px",
      key: inputId,
      styles: {
        padding: '5px'
      }
    }, /*#__PURE__*/React.createElement(InputNumeric, _extends({}, props, {
      id: inputId,
      required: true,
      inputMode: "numeric",
      min: 0,
      max: 9,
      step: 1,
      autoComplete: "off",
      placeholder: placeholder[otpIndex] || '',
      autoFocus: otpIndex !== 0 ? false : autoFocus,
      disabled: disabled || disableds.includes(otpIndex),
      value: composed[inputId] || '',
      onKeyUp: function onKeyUp(evt) {
        return handleKeyUp(evt, otpIndex);
      },
      onKeyDown: function onKeyDown(evt) {
        return handleKeyDown(evt, otpIndex);
      },
      onKeyPress: function onKeyPress(evt) {
        return handleKeyPress(evt, otpIndex);
      },
      styles: {
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '20px',
        lineHeight: '20px',
        boxShadow: '0 2px transparent',
        transition: 'box-shadow 0.1s linear',
        MozAppearance: 'textfield',
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          WebkitAppearance: 'none',
          margin: '0'
        },
        '&:focus': {
          boxShadow: "0 2px 0 " + color
        }
      }
    })));
  })));
}

var Select = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (props, ref) {
  var id = props.id,
      icon = props.icon,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      errorMessage = props.errorMessage;

  var _useState = useState(typeof value === 'number' || value ? true : false),
      hasValue = _useState[0],
      setHasValue = _useState[1];

  var styles = {
    height: '50px',
    cursor: 'pointer',
    paddingRight: '40px'
  };
  useEffect(function () {
    setHasValue(value ? true : false);
  }, [value]);

  function handleChange(evt) {
    var target = evt.target;
    var inputValue = target.value;
    setHasValue(typeof inputValue === 'number' || inputValue ? true : false);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt), inputValue);
    }
  }

  return /*#__PURE__*/React.createElement(AphFormControlWrapperStyled, null, /*#__PURE__*/React.createElement(FormControlStyled, _extends({}, props, {
    as: "select",
    ref: ref,
    hasLabel: !!label,
    onChange: handleChange,
    styles: Object.assign({}, styles, props.styles)
  })), !label ? null : /*#__PURE__*/React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: id,
    className: "aph-form-label " + (placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), /*#__PURE__*/React.createElement(AphFormControlButtonStyled, {
    type: "button",
    tabIndex: "-1",
    disabled: props.disabled,
    styles: {
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, _extends({
    color: props.disabled ? 'helper' : 'base'
  }, icon))), /*#__PURE__*/React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: id,
    className: "aph-form-error"
  }, errorMessage || ''));
}));
Select.defaultProps = {
  id: "formControlRandomID" + Math.random(),
  icon: {
    size: 30,
    slug: 'arrow-down'
  },
  label: '',
  btn: null,
  styles: {},
  defaultPadding: '10px'
};
Select.propTypes = {
  id: propTypes.string.isRequired,
  icon: propTypes.object,
  label: propTypes.string,
  btn: propTypes.object,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object])
};

var aphFormSwitchCommonStyles = "\n    box-sizing: border-box;\n    cursor    : pointer;\n";

var AphFormSwitchWrapper = _styled("label", {
  target: "e117xw920",
  label: "AphFormSwitchWrapper"
})(aphFormSwitchCommonStyles, ";position:relative;display:flex;min-width:50px;min-height:30px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:", function (props) {
  return props.textSmall ? SIZES.SM.FONT_SIZE : null;
}, ";text-align:", function (props) {
  return props.textAlign || 'left';
}, ";", function (props) {
  return props.toggleAlign !== 'right' ? {
    paddingLeft: '50px',
    '.aph-form-switch__wrapper': {
      left: 0
    }
  } : {
    paddingRight: '50px',
    '.aph-form-switch__wrapper': {
      right: 0
    }
  };
}, ";", function (props) {
  return props.styles;
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUMiLCJmaWxlIjoiU3dpdGNoU3R5bGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGFja2FnZXMgKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuLyogRnJhbWV3b3JrIERlZmluaXRpb25zICovXG5pbXBvcnQgeyBTSVpFUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuLi8uLi8uLi91dGlscyc7XG5cbmNvbnN0IGFwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXMgPSBgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3IgICAgOiBwb2ludGVyO1xuYDtcblxuLyogQ29tcG9uZW50IFdyYXBwZXIgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoV3JhcHBlciA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXkgOiBmbGV4O1xuXG4gICAgbWluLXdpZHRoIDogNTBweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbiAgIDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zICAgICAgOiBjZW50ZXI7XG5cbiAgICBmb250LXNpemUgOiAke3Byb3BzID0+IHByb3BzLnRleHRTbWFsbCA/IChTSVpFUy5TTS5GT05UX1NJWkUpIDogbnVsbH07XG4gICAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy50ZXh0QWxpZ24gfHwgJ2xlZnQnfTtcblxuICAgICR7KHByb3BzID0+IChwcm9wcy50b2dnbGVBbGlnbiAhPT0gJ3JpZ2h0JykgPyB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnNTBweCcsXG5cbiAgICAgICAgJy5hcGgtZm9ybS1zd2l0Y2hfX3dyYXBwZXInOiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9LFxuICAgIH0gOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzUwcHgnLFxuXG4gICAgICAgICcuYXBoLWZvcm0tc3dpdGNoX193cmFwcGVyJzoge1xuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIH0sXG4gICAgfSl9O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5zdHlsZXN9O1xuYDtcblxuLyogQ29tcG9uZW50IFRvZ2dsZSBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XG4gICAgZGlzcGxheSAgOiBibG9jaztcbiAgICB0b3AgICAgICA6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cbiAgICBsaW5lLWhlaWdodDogMDtcbmA7XG5cbi8qIENvbXBvbmVudCBUb2dnbGUgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoVG9nZ2xlID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wICAgICA6IDA7XG5cbiAgICB3aWR0aCA6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eSAgICAgICA6IHJpZ2h0LCBsZWZ0LCBib3gtc2hhZG93O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblxuICAgIGJvcmRlci1yYWRpdXMgICA6IDUwJTtcbiAgICBib3gtc2hhZG93ICAgICAgOiAwIDAgNXB4IDAgJHtjb2xvcnMuZ2V0KCdibGFjaycsICdvcmlnaW5hbCcsIDAuMjUpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICd3aGl0ZScpfTtcbmA7XG5cbi8qIENvbXBvbmVudCBJbnB1dCBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4gOiA1cHggMDtcblxuICAgIHdpZHRoICAgICAgICA6IDUwcHg7XG4gICAgaGVpZ2h0ICAgICAgIDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnbWVyY3VyeScsICdsaWdodCcpfTtcblxuICAgIGJvcmRlciA6IDA7XG4gICAgb3V0bGluZTogMDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiBiYWNrZ3JvdW5kLWNvbG9yO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb24gICAgICAgOiAwLjI1cztcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcblxuICAgIC13ZWJraXQtYXBwZWFyYW5jZSAgICAgICAgIDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgJjphY3RpdmUsICY6Zm9jdXMsICY6aG92ZXIge1xuICAgICAgICArIC5hcGgtZm9ybS1zd2l0Y2hfX3RvZ2dsZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmRpc2FibGVkLFxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ2Rpc2FibGVkJyl9O1xuICAgIH1cblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgKHByb3BzLmNvbG9yIHx8ICdzdWNjZXNzJykpfTtcblxuICAgICAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAgICAgJl9fdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpLCAnbGlnaHQnLCAwLjUpfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICsgLmFwaC1mb3JtLXN3aXRjaCB7XG4gICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuYDtcblxuLyogQ29tcG9uZW50IENvbnRlbnQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoQ29udGVudCA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGggIDogMTAwJTtcblxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgICAke3Byb3BzID0+ICghcHJvcHMuaGFzQ2hpbGRyZW4pID8gbnVsbCA6ICgocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzEwcHgnLFxuICAgIH0gOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogJzEwcHgnLFxuICAgIH0pfTtcbmA7XG5cbi8qIENvbXBvbmVudCBTdHlsZXMgKi9cbmNvbnN0IFN3aXRjaFN0eWxlZCA9IHtcbiAgICBXcmFwcGVyICAgICAgOiBBcGhGb3JtU3dpdGNoV3JhcHBlcixcbiAgICBUb2dnbGVXcmFwcGVyOiBBcGhGb3JtU3dpdGNoVG9nZ2xlV3JhcHBlcixcbiAgICBUb2dnbGUgICAgICAgOiBBcGhGb3JtU3dpdGNoVG9nZ2xlLFxuICAgIElucHV0ICAgICAgICA6IEFwaEZvcm1Td2l0Y2hJbnB1dCxcbiAgICBDb250ZW50ICAgICAgOiBBcGhGb3JtU3dpdGNoQ29udGVudCxcbn07XG5cbi8qIEV4cG9ydGluZyAqL1xuZXhwb3J0IGRlZmF1bHQgU3dpdGNoU3R5bGVkO1xuIl19 */"));

var AphFormSwitchToggleWrapper = _styled("label", {
  target: "e117xw921",
  label: "AphFormSwitchToggleWrapper"
})(aphFormSwitchCommonStyles, ";position:absolute;display:block;top:50%;transform:translateY(-50%);line-height:0;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQytDIiwiZmlsZSI6IlN3aXRjaFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBhcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzID0gYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yICAgIDogcG9pbnRlcjtcbmA7XG5cbi8qIENvbXBvbmVudCBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFdyYXBwZXIgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5IDogZmxleDtcblxuICAgIG1pbi13aWR0aCA6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcblxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ24gICA6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtcyAgICAgIDogY2VudGVyO1xuXG4gICAgZm9udC1zaXplIDogJHtwcm9wcyA9PiBwcm9wcy50ZXh0U21hbGwgPyAoU0laRVMuU00uRk9OVF9TSVpFKSA6IG51bGx9O1xuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMudGV4dEFsaWduIHx8ICdsZWZ0J307XG5cbiAgICAkeyhwcm9wcyA9PiAocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzUwcHgnLFxuXG4gICAgICAgICcuYXBoLWZvcm0tc3dpdGNoX193cmFwcGVyJzoge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgfSxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH0pfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBUb2dnbGUgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGVXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIGRpc3BsYXkgIDogYmxvY2s7XG4gICAgdG9wICAgICAgOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgbGluZS1oZWlnaHQ6IDA7XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFRvZ2dsZSA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcCAgICAgOiAwO1xuXG4gICAgd2lkdGggOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiByaWdodCwgbGVmdCwgYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICBib3JkZXItcmFkaXVzICAgOiA1MCU7XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDVweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnd2hpdGUnKX07XG5gO1xuXG4vKiBDb21wb25lbnQgSW5wdXQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogNXB4IDA7XG5cbiAgICB3aWR0aCAgICAgICAgOiA1MHB4O1xuICAgIGhlaWdodCAgICAgICA6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnbGlnaHQnKX07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2UgICAgICAgICA6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6YWN0aXZlLCAmOmZvY3VzLCAmOmhvdmVyIHtcbiAgICAgICAgKyAuYXBoLWZvcm0tc3dpdGNoX190b2dnbGUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tc3dpdGNoIHtcbiAgICAgICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3N1Y2Nlc3MnKSwgJ2xpZ2h0JywgMC41KX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAmX190b2dnbGUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBDb250ZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaENvbnRlbnQgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoICA6IDEwMCU7XG5cbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gICAgJHtwcm9wcyA9PiAoIXByb3BzLmhhc0NoaWxkcmVuKSA/IG51bGwgOiAoKHByb3BzLnRvZ2dsZUFsaWduICE9PSAncmlnaHQnKSA/IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxMHB4JyxcbiAgICB9KX07XG5gO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBTd2l0Y2hTdHlsZWQgPSB7XG4gICAgV3JhcHBlciAgICAgIDogQXBoRm9ybVN3aXRjaFdyYXBwZXIsXG4gICAgVG9nZ2xlV3JhcHBlcjogQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIsXG4gICAgVG9nZ2xlICAgICAgIDogQXBoRm9ybVN3aXRjaFRvZ2dsZSxcbiAgICBJbnB1dCAgICAgICAgOiBBcGhGb3JtU3dpdGNoSW5wdXQsXG4gICAgQ29udGVudCAgICAgIDogQXBoRm9ybVN3aXRjaENvbnRlbnQsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFN0eWxlZDtcbiJdfQ== */"));

var AphFormSwitchToggle = _styled("label", {
  target: "e117xw922",
  label: "AphFormSwitchToggle"
})(aphFormSwitchCommonStyles, ";position:absolute;top:0;width:30px;height:30px;transition-property:right,left,box-shadow;transition-duration:0.25s;transition-timing-function:ease;border-radius:50%;box-shadow:0 0 5px 0 ", colors$1.get('black', 'original', 0.25), ";background-color:", function (props) {
  return colors$1.getFromTheme(props, 'white');
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRHdDIiwiZmlsZSI6IlN3aXRjaFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBhcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzID0gYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yICAgIDogcG9pbnRlcjtcbmA7XG5cbi8qIENvbXBvbmVudCBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFdyYXBwZXIgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5IDogZmxleDtcblxuICAgIG1pbi13aWR0aCA6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcblxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ24gICA6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtcyAgICAgIDogY2VudGVyO1xuXG4gICAgZm9udC1zaXplIDogJHtwcm9wcyA9PiBwcm9wcy50ZXh0U21hbGwgPyAoU0laRVMuU00uRk9OVF9TSVpFKSA6IG51bGx9O1xuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMudGV4dEFsaWduIHx8ICdsZWZ0J307XG5cbiAgICAkeyhwcm9wcyA9PiAocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzUwcHgnLFxuXG4gICAgICAgICcuYXBoLWZvcm0tc3dpdGNoX193cmFwcGVyJzoge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgfSxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH0pfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBUb2dnbGUgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGVXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIGRpc3BsYXkgIDogYmxvY2s7XG4gICAgdG9wICAgICAgOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgbGluZS1oZWlnaHQ6IDA7XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFRvZ2dsZSA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcCAgICAgOiAwO1xuXG4gICAgd2lkdGggOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiByaWdodCwgbGVmdCwgYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICBib3JkZXItcmFkaXVzICAgOiA1MCU7XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDVweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnd2hpdGUnKX07XG5gO1xuXG4vKiBDb21wb25lbnQgSW5wdXQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogNXB4IDA7XG5cbiAgICB3aWR0aCAgICAgICAgOiA1MHB4O1xuICAgIGhlaWdodCAgICAgICA6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnbGlnaHQnKX07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2UgICAgICAgICA6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6YWN0aXZlLCAmOmZvY3VzLCAmOmhvdmVyIHtcbiAgICAgICAgKyAuYXBoLWZvcm0tc3dpdGNoX190b2dnbGUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tc3dpdGNoIHtcbiAgICAgICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3N1Y2Nlc3MnKSwgJ2xpZ2h0JywgMC41KX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAmX190b2dnbGUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBDb250ZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaENvbnRlbnQgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoICA6IDEwMCU7XG5cbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gICAgJHtwcm9wcyA9PiAoIXByb3BzLmhhc0NoaWxkcmVuKSA/IG51bGwgOiAoKHByb3BzLnRvZ2dsZUFsaWduICE9PSAncmlnaHQnKSA/IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxMHB4JyxcbiAgICB9KX07XG5gO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBTd2l0Y2hTdHlsZWQgPSB7XG4gICAgV3JhcHBlciAgICAgIDogQXBoRm9ybVN3aXRjaFdyYXBwZXIsXG4gICAgVG9nZ2xlV3JhcHBlcjogQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIsXG4gICAgVG9nZ2xlICAgICAgIDogQXBoRm9ybVN3aXRjaFRvZ2dsZSxcbiAgICBJbnB1dCAgICAgICAgOiBBcGhGb3JtU3dpdGNoSW5wdXQsXG4gICAgQ29udGVudCAgICAgIDogQXBoRm9ybVN3aXRjaENvbnRlbnQsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFN0eWxlZDtcbiJdfQ== */"));

var AphFormSwitchInput = _styled("input", {
  target: "e117xw923",
  label: "AphFormSwitchInput"
})(aphFormSwitchCommonStyles, ";padding:0;margin:5px 0;width:50px;height:20px;border-radius:15px;background-color:", function (props) {
  return colors$1.getFromTheme(props, 'mercury', 'light');
}, ";border:0;outline:0;transition-property:background-color;transition-duration:0.25s;transition-timing-function:ease;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;&:active,&:focus,&:hover{+ .aph-form-switch__toggle{box-shadow:0 0 10px 0 ", colors$1.get('black', 'original', 0.25), ";}}&.disabled,&:disabled{background-color:", function (props) {
  return colors$1.getFromTheme(props, 'disabled');
}, ";}&:checked{background-color:", function (props) {
  return colors$1.getFromTheme(props, props.color || 'success');
}, ";+ .aph-form-switch{&__toggle{left:20px;}}&:disabled{background-color:", function (props) {
  return colors$1.getFromTheme(props, props.color || 'success', 'light', 0.5);
}, ";}}+ .aph-form-switch{&__toggle{left:0;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RXVDIiwiZmlsZSI6IlN3aXRjaFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBhcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzID0gYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yICAgIDogcG9pbnRlcjtcbmA7XG5cbi8qIENvbXBvbmVudCBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFdyYXBwZXIgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5IDogZmxleDtcblxuICAgIG1pbi13aWR0aCA6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcblxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ24gICA6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtcyAgICAgIDogY2VudGVyO1xuXG4gICAgZm9udC1zaXplIDogJHtwcm9wcyA9PiBwcm9wcy50ZXh0U21hbGwgPyAoU0laRVMuU00uRk9OVF9TSVpFKSA6IG51bGx9O1xuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMudGV4dEFsaWduIHx8ICdsZWZ0J307XG5cbiAgICAkeyhwcm9wcyA9PiAocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzUwcHgnLFxuXG4gICAgICAgICcuYXBoLWZvcm0tc3dpdGNoX193cmFwcGVyJzoge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgfSxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH0pfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBUb2dnbGUgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGVXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIGRpc3BsYXkgIDogYmxvY2s7XG4gICAgdG9wICAgICAgOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgbGluZS1oZWlnaHQ6IDA7XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFRvZ2dsZSA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcCAgICAgOiAwO1xuXG4gICAgd2lkdGggOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiByaWdodCwgbGVmdCwgYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICBib3JkZXItcmFkaXVzICAgOiA1MCU7XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDVweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnd2hpdGUnKX07XG5gO1xuXG4vKiBDb21wb25lbnQgSW5wdXQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogNXB4IDA7XG5cbiAgICB3aWR0aCAgICAgICAgOiA1MHB4O1xuICAgIGhlaWdodCAgICAgICA6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnbGlnaHQnKX07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2UgICAgICAgICA6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6YWN0aXZlLCAmOmZvY3VzLCAmOmhvdmVyIHtcbiAgICAgICAgKyAuYXBoLWZvcm0tc3dpdGNoX190b2dnbGUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tc3dpdGNoIHtcbiAgICAgICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3N1Y2Nlc3MnKSwgJ2xpZ2h0JywgMC41KX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAmX190b2dnbGUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBDb250ZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaENvbnRlbnQgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoICA6IDEwMCU7XG5cbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gICAgJHtwcm9wcyA9PiAoIXByb3BzLmhhc0NoaWxkcmVuKSA/IG51bGwgOiAoKHByb3BzLnRvZ2dsZUFsaWduICE9PSAncmlnaHQnKSA/IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxMHB4JyxcbiAgICB9KX07XG5gO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBTd2l0Y2hTdHlsZWQgPSB7XG4gICAgV3JhcHBlciAgICAgIDogQXBoRm9ybVN3aXRjaFdyYXBwZXIsXG4gICAgVG9nZ2xlV3JhcHBlcjogQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIsXG4gICAgVG9nZ2xlICAgICAgIDogQXBoRm9ybVN3aXRjaFRvZ2dsZSxcbiAgICBJbnB1dCAgICAgICAgOiBBcGhGb3JtU3dpdGNoSW5wdXQsXG4gICAgQ29udGVudCAgICAgIDogQXBoRm9ybVN3aXRjaENvbnRlbnQsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFN0eWxlZDtcbiJdfQ== */"));

var AphFormSwitchContent = _styled("label", {
  target: "e117xw924",
  label: "AphFormSwitchContent"
})(aphFormSwitchCommonStyles, ";display:block;width:100%;word-break:break-word;", function (props) {
  return !props.hasChildren ? null : props.toggleAlign !== 'right' ? {
    paddingLeft: '10px'
  } : {
    paddingRight: '10px'
  };
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaFN0eWxlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSXlDIiwiZmlsZSI6IlN3aXRjaFN0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbi8qIEZyYW1ld29yayBEZWZpbml0aW9ucyAqL1xuaW1wb3J0IHsgU0laRVMgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgY29sb3JzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnO1xuXG5jb25zdCBhcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzID0gYFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yICAgIDogcG9pbnRlcjtcbmA7XG5cbi8qIENvbXBvbmVudCBXcmFwcGVyIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFdyYXBwZXIgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5IDogZmxleDtcblxuICAgIG1pbi13aWR0aCA6IDUwcHg7XG4gICAgbWluLWhlaWdodDogMzBweDtcblxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ24gICA6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtcyAgICAgIDogY2VudGVyO1xuXG4gICAgZm9udC1zaXplIDogJHtwcm9wcyA9PiBwcm9wcy50ZXh0U21hbGwgPyAoU0laRVMuU00uRk9OVF9TSVpFKSA6IG51bGx9O1xuICAgIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMudGV4dEFsaWduIHx8ICdsZWZ0J307XG5cbiAgICAkeyhwcm9wcyA9PiAocHJvcHMudG9nZ2xlQWxpZ24gIT09ICdyaWdodCcpID8ge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzUwcHgnLFxuXG4gICAgICAgICcuYXBoLWZvcm0tc3dpdGNoX193cmFwcGVyJzoge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgfSxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc1MHB4JyxcblxuICAgICAgICAnLmFwaC1mb3JtLXN3aXRjaF9fd3JhcHBlcic6IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgIH0pfTtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuc3R5bGVzfTtcbmA7XG5cbi8qIENvbXBvbmVudCBUb2dnbGUgV3JhcHBlciBTdHlsZXMgKi9cbmNvbnN0IEFwaEZvcm1Td2l0Y2hUb2dnbGVXcmFwcGVyID0gc3R5bGVkLmxhYmVsYFxuICAgICR7YXBoRm9ybVN3aXRjaENvbW1vblN0eWxlc307XG5cbiAgICBwb3NpdGlvbiA6IGFic29sdXRlO1xuICAgIGRpc3BsYXkgIDogYmxvY2s7XG4gICAgdG9wICAgICAgOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgbGluZS1oZWlnaHQ6IDA7XG5gO1xuXG4vKiBDb21wb25lbnQgVG9nZ2xlIFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaFRvZ2dsZSA9IHN0eWxlZC5sYWJlbGBcbiAgICAke2FwaEZvcm1Td2l0Y2hDb21tb25TdHlsZXN9O1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcCAgICAgOiAwO1xuXG4gICAgd2lkdGggOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIHRyYW5zaXRpb24tcHJvcGVydHkgICAgICAgOiByaWdodCwgbGVmdCwgYm94LXNoYWRvdztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICBib3JkZXItcmFkaXVzICAgOiA1MCU7XG4gICAgYm94LXNoYWRvdyAgICAgIDogMCAwIDVweCAwICR7Y29sb3JzLmdldCgnYmxhY2snLCAnb3JpZ2luYWwnLCAwLjI1KX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAnd2hpdGUnKX07XG5gO1xuXG4vKiBDb21wb25lbnQgSW5wdXQgU3R5bGVzICovXG5jb25zdCBBcGhGb3JtU3dpdGNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luIDogNXB4IDA7XG5cbiAgICB3aWR0aCAgICAgICAgOiA1MHB4O1xuICAgIGhlaWdodCAgICAgICA6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gY29sb3JzLmdldEZyb21UaGVtZShwcm9wcywgJ21lcmN1cnknLCAnbGlnaHQnKX07XG5cbiAgICBib3JkZXIgOiAwO1xuICAgIG91dGxpbmU6IDA7XG5cbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5ICAgICAgIDogYmFja2dyb3VuZC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uICAgICAgIDogMC4yNXM7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2UgICAgICAgICA6IG5vbmU7XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6YWN0aXZlLCAmOmZvY3VzLCAmOmhvdmVyIHtcbiAgICAgICAgKyAuYXBoLWZvcm0tc3dpdGNoX190b2dnbGUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAke2NvbG9ycy5nZXQoJ2JsYWNrJywgJ29yaWdpbmFsJywgMC4yNSl9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCxcbiAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcz0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsICdkaXNhYmxlZCcpfTtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGNvbG9ycy5nZXRGcm9tVGhlbWUocHJvcHMsIChwcm9wcy5jb2xvciB8fCAnc3VjY2VzcycpKX07XG5cbiAgICAgICAgKyAuYXBoLWZvcm0tc3dpdGNoIHtcbiAgICAgICAgICAgICZfX3RvZ2dsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBjb2xvcnMuZ2V0RnJvbVRoZW1lKHByb3BzLCAocHJvcHMuY29sb3IgfHwgJ3N1Y2Nlc3MnKSwgJ2xpZ2h0JywgMC41KX07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICArIC5hcGgtZm9ybS1zd2l0Y2gge1xuICAgICAgICAmX190b2dnbGUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbi8qIENvbXBvbmVudCBDb250ZW50IFN0eWxlcyAqL1xuY29uc3QgQXBoRm9ybVN3aXRjaENvbnRlbnQgPSBzdHlsZWQubGFiZWxgXG4gICAgJHthcGhGb3JtU3dpdGNoQ29tbW9uU3R5bGVzfTtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoICA6IDEwMCU7XG5cbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gICAgJHtwcm9wcyA9PiAoIXByb3BzLmhhc0NoaWxkcmVuKSA/IG51bGwgOiAoKHByb3BzLnRvZ2dsZUFsaWduICE9PSAncmlnaHQnKSA/IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcbiAgICB9IDoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcxMHB4JyxcbiAgICB9KX07XG5gO1xuXG4vKiBDb21wb25lbnQgU3R5bGVzICovXG5jb25zdCBTd2l0Y2hTdHlsZWQgPSB7XG4gICAgV3JhcHBlciAgICAgIDogQXBoRm9ybVN3aXRjaFdyYXBwZXIsXG4gICAgVG9nZ2xlV3JhcHBlcjogQXBoRm9ybVN3aXRjaFRvZ2dsZVdyYXBwZXIsXG4gICAgVG9nZ2xlICAgICAgIDogQXBoRm9ybVN3aXRjaFRvZ2dsZSxcbiAgICBJbnB1dCAgICAgICAgOiBBcGhGb3JtU3dpdGNoSW5wdXQsXG4gICAgQ29udGVudCAgICAgIDogQXBoRm9ybVN3aXRjaENvbnRlbnQsXG59O1xuXG4vKiBFeHBvcnRpbmcgKi9cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFN0eWxlZDtcbiJdfQ== */"));

var SwitchStyled = {
  Wrapper: AphFormSwitchWrapper,
  ToggleWrapper: AphFormSwitchToggleWrapper,
  Toggle: AphFormSwitchToggle,
  Input: AphFormSwitchInput,
  Content: AphFormSwitchContent
};

var Switch = /*#__PURE__*/forwardRef(function (props, ref) {
  var id = props.id,
      className = props.className,
      children = props.children,
      styles = props.styles,
      textAlign = props.textAlign,
      textSmall = props.textSmall,
      toggleAlign = props.toggleAlign,
      rest = _objectWithoutPropertiesLoose(props, ["id", "className", "children", "styles", "textAlign", "textSmall", "toggleAlign"]);

  return /*#__PURE__*/React.createElement(SwitchStyled.Wrapper, {
    htmlFor: id,
    className: "aph-form-switch " + (className || ''),
    styles: styles,
    textAlign: textAlign,
    textSmall: textSmall,
    toggleAlign: toggleAlign
  }, /*#__PURE__*/React.createElement(SwitchStyled.ToggleWrapper, {
    htmlFor: id,
    className: "aph-form-switch__wrapper"
  }, /*#__PURE__*/React.createElement(SwitchStyled.Input, _extends({}, rest, {
    ref: ref,
    id: id,
    type: "checkbox",
    className: "aph-form-switch__input"
  })), /*#__PURE__*/React.createElement(SwitchStyled.Toggle, {
    htmlFor: id,
    className: "aph-form-switch__toggle"
  })), !children ? null : /*#__PURE__*/React.createElement(SwitchStyled.Content, {
    htmlFor: id,
    hasChildren: children ? true : false,
    toggleAlign: toggleAlign,
    className: "aph-form-switch__label"
  }, children));
});
Switch.defaultProps = {
  id: '',
  className: '',
  styles: {},
  textSmall: false,
  textAlign: 'left',
  toggleAlign: 'left'
};
Switch.propTypes = {
  id: propTypes.string.isRequired,
  className: propTypes.string,
  styles: propTypes.oneOfType([propTypes.string, propTypes.object]),
  textSmall: propTypes.bool,
  textAlign: propTypes.string,
  toggleAlign: propTypes.string
};

var TextArea = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(function (props, ref) {
  var id = props.id,
      label = props.label,
      labelProps = props.labelProps,
      placeholder = props.placeholder,
      value = props.value,
      onChange = props.onChange,
      errorMessage = props.errorMessage,
      styles = props.styles;

  var _useState = useState(value ? true : false),
      hasValue = _useState[0],
      setHasValue = _useState[1];

  var inputId = "" + (id || 'formControl');

  var customStyles = _objectSpread2({
    maxWidth: '100%',
    minWidth: '100%',
    minHeight: '100px',
    paddingTop: '27.5px',
    paddingBottom: '10px',
    '&[rows="4"]': {
      minHeight: '120px'
    },
    '&[rows="5"]': {
      minHeight: '140px'
    },
    '&[rows="6"]': {
      minHeight: '160px'
    },
    '&[rows="7"]': {
      minHeight: '180px'
    },
    '&[rows="8"]': {
      minHeight: '200px'
    },
    '&[rows="9"]': {
      minHeight: '220px'
    },
    '&[rows="10"]': {
      minHeight: '240px'
    },
    ' + .aph-form-label': {
      display: 'block',
      top: '0',
      backgroundColor: 'transparent'
    }
  }, styles || {});

  useEffect(function () {
    setHasValue(value ? true : false);
  }, [value]);

  function handleChange(evt) {
    var target = evt.target;
    var inputValue = target.value;
    setHasValue(inputValue ? true : false);

    if (typeof onChange === 'function') {
      onChange(Object.assign({}, evt));
    }
  }

  return /*#__PURE__*/React.createElement(AphFormControlWrapperStyled, null, /*#__PURE__*/React.createElement(FormControlStyled, _extends({}, props, {
    ref: ref,
    as: "textarea",
    hasLabel: !!label,
    onChange: handleChange,
    styles: customStyles
  })), !label ? null : /*#__PURE__*/React.createElement(AphFormControlLabelStyled, _extends({}, labelProps, {
    htmlFor: inputId,
    className: "aph-form-label " + (placeholder || hasValue ? 'aph-form-label--top' : '')
  }), label), /*#__PURE__*/React.createElement(AphFormControlErrorMsgStyled, {
    htmlFor: inputId,
    styles: !errorMessage ? null : {
      maxHeight: '600px'
    },
    className: "aph-form-error"
  }, errorMessage || ''));
}));
TextArea.defaultProps = {
  defaultPadding: '10px'
};

function byProperty(array, property, reverse) {
  if (array === void 0) {
    array = [];
  }

  if (property === void 0) {
    property = '';
  }

  if (reverse === void 0) {
    reverse = false;
  }

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

var sort = byProperty;
sort.byProperty = byProperty;

export { A$1 as A, ANIMATIONS, ActionBar, Alert, Avatar, Badge, BlurBackground, Button, ButtonIcon, COLORS, Card, Checkbox, Clipboard, Column as Col, Collapsible, Column, Container, Countdown, DatePicker, Dialog, Dimmer, Dropdown, ExpansionPanel, FORM, Flex$1 as Flex, GRID, H1, H2, H3, HoverActions, HoverActionItem as HoverActionsItem, ICONS, Icon, Img, Input, InputCnpjOrCpf, InputCpf, InputDateFallback, InputDiscount, InputFake, InputFromTo, InputMask, InputMoney, InputNumeric, InputOneTimePassword, ItemContent, LAYOUT, Label, Layer, LayerCondensed, LayerMenu, LayerStatus, A$1 as Link, List, ListGroup, ListGroupItem, ListItem, MEDIA_QUERIES, Modal, P$1 as P, Pagination, Placeholder, ProgressBar, RADIUS, RadioButton, Row, SCREEN_SIZES, SIZES, Scrollable, Section, SectionTitle, Segment, Select, SidePill, Spacer, Styled, Switch, Table, P$1 as Text, TextArea, ToastsContainer, Toggle, ToggleButton, Tooltip, ZINDEX, animations, cnpjValidator, colors$1 as colors, cpfValidator, documents, emailValidator, focus, formatCurrency, formatNumber, formatNumberRound, gradients, hasDatePickerSupport, layoutActions, patterns, sort, styling, text, textAlign, textBreakAll, textColorfull, textDefinitions, textSizes, textTransform, textTruncate, toast, toggleLocationHash, useWindowSize };
//# sourceMappingURL=index.modern.js.map

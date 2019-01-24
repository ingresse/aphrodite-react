(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/Toast/Toast.mdx":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return d});var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),s=n("./node_modules/docz/dist/index.m.js"),c=n("./src/components/index.js"),i=n("./src/constants/index.js");function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=p(this,m(e).call(this,t))).layout=null,n}var n,o,u;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,r.a.Component),n=e,(o=[{key:"render",value:function(){var t=this.props,e=t.components,n=l(t,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:e},r.a.createElement(a.MDXTag,{name:"h1",components:e,props:{id:"toast"}},"Toast"),r.a.createElement(a.MDXTag,{name:"h4",components:e,props:{id:"just-an-implementation-of-awesome-library-react-toastify-with-aphrodites-definitions"}},"Just an implementation of awesome library ",r.a.createElement(a.MDXTag,{name:"a",components:e,parentName:"h4",props:{href:"https://github.com/fkhadra/react-toastify"}},r.a.createElement(a.MDXTag,{name:"strong",components:e,parentName:"a"},"React Toastify")),", with Aphrodite's definitions."),r.a.createElement(a.MDXTag,{name:"h4",components:e,props:{id:"so-its-just-consult-the-documentation-for-more-options"}},"So, it's just consult the ",r.a.createElement(a.MDXTag,{name:"a",components:e,parentName:"h4",props:{href:"https://github.com/fkhadra/react-toastify"}},"documentation")," for more options."),r.a.createElement(a.MDXTag,{name:"pre",components:e},r.a.createElement(a.MDXTag,{name:"code",components:e,parentName:"pre",props:{className:"language-jsx"}},"import { Button, ToastsContainer, toast } from 'aphrodite-react';\n")),r.a.createElement(a.MDXTag,{name:"h2",components:e,props:{id:"example"}},"Example"),r.a.createElement(s.e,{__codesandbox:"undefined",__position:0,__code:'() => {\n  function toastDefault() {\n    toast(\'Hello from Aphrodite React\')\n  }\n  function toastInverse() {\n    toast.inverse(\'Hello from Aphrodite React\')\n  }\n\n  function toastSuccess() {\n    toast.success(\n      \'We are using React Toastify, an awesome library, customized with our styles definitions\',\n    )\n  }\n\n  function toastInfo() {\n    toast.info(\'You can use React Toastify directly, if you want\')\n  }\n\n  function toastWarning() {\n    toast.warning("But, isn\'t have our style, if you use directly")\n  }\n\n  function toastError() {\n    toast.error(\n      "And maybe doesn\'t make sense use our library, if you want to use React Toastify directly - haha",\n    )\n  }\n\n  return (\n    <div>\n      <ToastsContainer\n        hideProgressBar={true}\n        autoClose={false}\n        styles={{ top: \'45px\', right: \'45px\' }}\n      />\n\n      <Button color="grey" onClick={toastDefault}>\n        Default\n      </Button>\n      <Button color="black" onClick={toastInverse}>\n        Inverse\n      </Button>\n\n      <br />\n      <br />\n\n      <Button color="success" onClick={toastSuccess}>\n        Success\n      </Button>\n      <Button color="primary" onClick={toastInfo}>\n        Info\n      </Button>\n      <Button color="warning" onClick={toastWarning}>\n        Warning\n      </Button>\n      <Button color="error" onClick={toastError}>\n        Error\n      </Button>\n    </div>\n  )\n}',__scope:{props:this?this.props:n,Button:c.c,ToastsContainer:c.m,toast:c.o,SCREEN_SIZES:i.g}},function(){return r.a.createElement("div",null,r.a.createElement(c.m,{hideProgressBar:!0,autoClose:!1,styles:{top:"45px",right:"45px"}}),r.a.createElement(c.c,{color:"grey",onClick:function(){Object(c.o)("Hello from Aphrodite React")}},"Default"),r.a.createElement(c.c,{color:"black",onClick:function(){c.o.inverse("Hello from Aphrodite React")}},"Inverse"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(c.c,{color:"success",onClick:function(){c.o.success("We are using React Toastify, an awesome library, customized with our styles definitions")}},"Success"),r.a.createElement(c.c,{color:"primary",onClick:function(){c.o.info("You can use React Toastify directly, if you want")}},"Info"),r.a.createElement(c.c,{color:"warning",onClick:function(){c.o.warning("But, isn't have our style, if you use directly")}},"Warning"),r.a.createElement(c.c,{color:"error",onClick:function(){c.o.error("And maybe doesn't make sense use our library, if you want to use React Toastify directly - haha")}},"Error"))}))}}])&&f(n.prototype,o),u&&f(n,u),e}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=components-toast-toast.849364687e38501c464e.js.map
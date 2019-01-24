(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./src/components/Tooltip/Tooltip.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return v});var n=o("./node_modules/react/index.js"),i=o.n(n),p=o("./node_modules/@mdx-js/tag/dist/index.js"),r=o("./node_modules/docz/dist/index.m.js"),a=o("./src/components/index.js"),l=o("./src/constants/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=d(this,u(t).call(this,e))).layout=null,o}var o,n,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,i.a.Component),o=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components,o=s(e,["components"]);return i.a.createElement(p.MDXTag,{name:"wrapper",components:t},i.a.createElement(p.MDXTag,{name:"h1",components:t,props:{id:"tooltip"}},"Tooltip"),i.a.createElement(p.MDXTag,{name:"h4",components:t,props:{id:"just-an-implementation-of-awesome-library-react-tooltip-with-aphrodites-definitions"}},"Just an implementation of awesome library ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"h4",props:{href:"https://github.com/wwayne/react-tooltip"}},i.a.createElement(p.MDXTag,{name:"strong",components:t,parentName:"a"},"React Tooltip")),", with Aphrodite's definitions."),i.a.createElement(p.MDXTag,{name:"h4",components:t,props:{id:"so-its-just-consult-the-documentation-for-more-options"}},"So, it's just consult the ",i.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"h4",props:{href:"https://github.com/wwayne/react-tooltip"}},"documentation")," for more options."),i.a.createElement(p.MDXTag,{name:"pre",components:t},i.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"import { Tooltip } from 'aphrodite-react';\n\n<Tooltip tip=\"How you doing?!\">Hover me</Tooltip>\n")),i.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),i.a.createElement(r.f,{of:a.n}),i.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"examples"}},"Examples"),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"top"}},"Top"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:1,__code:'<Tooltip\n  tip="Placed at top of relative element/word, if fits to screen"\n  place="top"\n>\n  Some text\n</Tooltip>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement(a.n,{tip:"Placed at top of relative element/word, if fits to screen",place:"top"},"Some text")),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"bottom"}},"Bottom"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:2,__code:'<Tooltip tip="Placed at bottom of wrapped element" place="bottom">\n  Some text\n</Tooltip>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement(a.n,{tip:"Placed at bottom of wrapped element",place:"bottom"},"Some text")),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"right"}},"Right"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:3,__code:'<Tooltip tip="At the right, if fits to screen" place="right">\n  Some text\n</Tooltip>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement(a.n,{tip:"At the right, if fits to screen",place:"right"},"Some text")),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"left"}},"Left"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:4,__code:'<Tooltip tip="At the left, if fits to screen" place="left">\n  Some text\n</Tooltip>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement(a.n,{tip:"At the left, if fits to screen",place:"left"},"Some text")),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"svg-icon-nested"}},"SVG Icon nested"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:5,__code:'<div>\n  TIMES\n  <Tooltip tip="It works?" place="top">\n    <Icon slug="times-circle" color={COLORS.ERROR} />\n  </Tooltip>\n</div>\n<div>\n  Question\n  <Tooltip tip="I don\'t know. Maybe..." place="right">\n    <Icon slug="question-circle" color={COLORS.WARNING} size={30} />\n  </Tooltip>\n</div>\n<div>\n  Info\n  <Tooltip tip="Well, seems legit" place="bottom">\n    <Icon slug="info-circle" color={COLORS.SUCCESS} size={40} />\n  </Tooltip>\n</div>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement("div",null,"TIMES",i.a.createElement(a.n,{tip:"It works?",place:"top"},i.a.createElement(a.e,{slug:"times-circle",color:l.a.ERROR}))),i.a.createElement("div",null,"Question",i.a.createElement(a.n,{tip:"I don't know. Maybe...",place:"right"},i.a.createElement(a.e,{slug:"question-circle",color:l.a.WARNING,size:30}))),i.a.createElement("div",null,"Info",i.a.createElement(a.n,{tip:"Well, seems legit",place:"bottom"},i.a.createElement(a.e,{slug:"info-circle",color:l.a.SUCCESS,size:40})))),i.a.createElement(p.MDXTag,{name:"h2",components:t,props:{id:"variations"}},"Variations"),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"error"}},"Error"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:6,__code:'<div>\n  <Tooltip tip="Error tooltip text" type="error">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Error tooltip text" type="error" place="left">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Error tooltip text" type="error" place="right">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Error tooltip text" type="error" place="bottom">\n    Hover me\n  </Tooltip>\n</div>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Error tooltip text",type:"error"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Error tooltip text",type:"error",place:"left"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Error tooltip text",type:"error",place:"right"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Error tooltip text",type:"error",place:"bottom"},"Hover me"))),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"warning"}},"Warning"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:7,__code:'<div>\n  <Tooltip tip="Warning tooltip text" type="warning">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Warning tooltip text" type="warning" place="left">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Warning tooltip text" type="warning" place="right">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Warning tooltip text" type="warning" place="bottom">\n    Hover me\n  </Tooltip>\n</div>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Warning tooltip text",type:"warning"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Warning tooltip text",type:"warning",place:"left"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Warning tooltip text",type:"warning",place:"right"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Warning tooltip text",type:"warning",place:"bottom"},"Hover me"))),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"success"}},"Success"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:8,__code:'<div>\n  <Tooltip tip="Success tooltip text" type="success">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Success tooltip text" type="success" place="left">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Success tooltip text" type="success" place="right">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Success tooltip text" type="success" place="bottom">\n    Hover me\n  </Tooltip>\n</div>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Success tooltip text",type:"success"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Success tooltip text",type:"success",place:"left"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Success tooltip text",type:"success",place:"right"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Success tooltip text",type:"success",place:"bottom"},"Hover me"))),i.a.createElement(p.MDXTag,{name:"h3",components:t,props:{id:"info"}},"Info"),i.a.createElement(r.e,{__codesandbox:"undefined",__position:9,__code:'<div>\n  <Tooltip tip="Info tooltip text" type="info">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Info tooltip text" type="info" place="left">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Info tooltip text" type="info" place="right">\n    Hover me\n  </Tooltip>\n</div>\n<div>\n  <Tooltip tip="Info tooltip text" type="info" place="bottom">\n    Hover me\n  </Tooltip>\n</div>',__scope:{props:this?this.props:o,Tooltip:a.n,Icon:a.e,COLORS:l.a}},i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Info tooltip text",type:"info"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Info tooltip text",type:"info",place:"left"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Info tooltip text",type:"info",place:"right"},"Hover me")),i.a.createElement("div",null,i.a.createElement(a.n,{tip:"Info tooltip text",type:"info",place:"bottom"},"Hover me"))))}}])&&m(o.prototype,n),c&&m(o,c),t}();v.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=components-tooltip-tooltip.20aa4015eec70da43dc1.js.map
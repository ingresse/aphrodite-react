(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"./src/utils/gradients/gradients.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/esm.js")),i=n("./node_modules/docz/dist/index.esm.js"),d=n("./src/components/index.js"),o=n("./src/utils/index.js");const l={};function c(e){let t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"utilities--gradients"},"Utilities | Gradients"),Object(r.b)("h3",{id:"tools-to-made-easy-the-development-with-our-gradients-presets"},"Tools to made easy the development with our gradients presets."),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h4",{id:"the-gradients-utility-will-help-you-to-get-the-desired-color-from-aphrodite-reacts-gradients-palette"},"The ",Object(r.b)("inlineCode",{parentName:"h4"},"gradients")," utility will help you to get the desired color from Aphrodite React's Gradients Palette."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"import { gradients } from '@ingresse/aphrodite';\n\ngradients.palette; // All availables gradients palette.\ngradients.keys; // All availables gradients palette keys.\ngradients.list; // All availables gradients palette values.\n\ngradients.random();         // Get a random gradient start/end object.\ngradients.get('tangerine'); // Get specific gradient.\n\ngradients.backgroundLinear('tangerine', 45); // CSS string to apply as background.\n")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)(i.c,{__position:0,__code:'() => {\n  const gradientItemStyles = {\n    padding: \'15px 20px\',\n    margin: \'10px 0\',\n  }\n  return (\n    <Segment\n      padding="0"\n      styles={{\n        fontSize: \'16px\',\n        lineHeight: \'20px\',\n      }}\n    >\n      <Row vertical="start">\n        {gradients.keys.map((gradientKey, index) => {\n          const gradient = gradients.palette[gradientKey]\n\n          return (\n            <Col xs={12} sm={6} key={`gradient-${index}`}>\n              <Segment\n                className="aph-color"\n                role="button"\n                color="inverse"\n                tabIndex={`10${index}`}\n                hoverable\n                styles={{\n                  ...gradientItemStyles,\n                  background: gradients.backgroundLinear(gradientKey, 45),\n                }}\n              >\n                <div>\n                  key: <strong>{gradientKey}</strong>\n                </div>\n                <div>start: {gradient.start}</div>\n                <div>end: {gradient.end}</div>\n              </Segment>\n            </Col>\n          )\n        })}\n      </Row>\n    </Segment>\n  )\n}',__scope:{props:this?this.props:n,Playground:i.c,Row:d.R,Col:d.j,Segment:d.S,colors:o.b,gradients:o.c},mdxType:"Playground"},()=>{const e={padding:"15px 20px",margin:"10px 0"};return Object(r.b)(d.S,{padding:"0",styles:{fontSize:"16px",lineHeight:"20px"},mdxType:"Segment"},Object(r.b)(d.R,{vertical:"start",mdxType:"Row"},o.c.keys.map((t,n)=>{const a=o.c.palette[t];return Object(r.b)(d.j,{xs:12,sm:6,key:"gradient-".concat(n),mdxType:"Col"},Object(r.b)(d.S,{className:"aph-color",role:"button",color:"inverse",tabIndex:"10".concat(n),hoverable:!0,styles:Object(s.a)(Object(s.a)({},e),{},{background:o.c.backgroundLinear(t,45)}),mdxType:"Segment"},Object(r.b)("div",null,"key: ",Object(r.b)("strong",null,t)),Object(r.b)("div",null,"start: ",a.start),Object(r.b)("div",null,"end: ",a.end)))})))}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/utils/gradients/gradients.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=utils-gradients-gradients.7370d320ea93d645ca66.js.map
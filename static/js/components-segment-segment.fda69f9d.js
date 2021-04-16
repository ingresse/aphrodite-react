(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"./src/components/Segment/Segment.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),m=n("./node_modules/react/index.js"),a=n("./node_modules/@mdx-js/react/dist/esm.js"),c=n("./node_modules/docz/dist/index.esm.js"),p=n("./src/components/index.js"),r={};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"segment"},"Segment"),Object(a.b)("h3",{id:"a-simple-block-with-default-paddings-of-20px-10px"},"A simple block, with default paddings of ",Object(a.b)("inlineCode",{parentName:"h3"},"20px 10px"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"import { Segment } from '@ingresse/aphrodite';\n\n...\n\n<Segment>\n    Hello\n</Segment>\n")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)(c.c,{__position:0,__code:"() => {\n  const [hasCustomStyles, setHasCustomStyles] = useState(true)\n  return (\n    <Container sm>\n      <Segment>Default Segment.</Segment>\n\n      <Segment color=\"supernova\">Segment with custom color prop.</Segment>\n\n      <Segment\n        textUpper={hasCustomStyles}\n        radius={hasCustomStyles ? 10 : 0}\n        color={hasCustomStyles ? 'inverse' : ''}\n        background={hasCustomStyles ? 'success' : ''}\n      >\n        <div>This is a `Segment`.</div>A simple block to segmentate all the\n        things.\n      </Segment>\n\n      <Segment padding=\"40px 0 10px\">\n        <Card>\n          <Switch\n            id=\"SegmentSwitchExample\"\n            checked={hasCustomStyles}\n            onChange={() => setHasCustomStyles(!hasCustomStyles)}\n          >\n            Display with custom styles.\n          </Switch>\n        </Card>\n      </Segment>\n    </Container>\n  )\n}",__scope:{props:this?this.props:n,useState:m.useState,Playground:c.c,Props:c.d,Segment:p.bb,Container:p.m,Row:p.Y,Col:p.k,Card:p.h,Switch:p.eb},mdxType:"Playground"},(function(){var e=Object(m.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1];return Object(a.b)(p.m,{sm:!0,mdxType:"Container"},Object(a.b)(p.bb,{mdxType:"Segment"},"Default Segment."),Object(a.b)(p.bb,{color:"supernova",mdxType:"Segment"},"Segment with custom color prop."),Object(a.b)(p.bb,{textUpper:n,radius:n?10:0,color:n?"inverse":"",background:n?"success":"",mdxType:"Segment"},Object(a.b)("div",null,"This is a `Segment`."),"A simple block to segmentate all the things."),Object(a.b)(p.bb,{padding:"40px 0 10px",mdxType:"Segment"},Object(a.b)(p.h,{mdxType:"Card"},Object(a.b)(p.eb,{id:"SegmentSwitchExample",checked:n,onChange:function(){return o(!n)},mdxType:"Switch"},"Display with custom styles."))))})),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(c.d,{of:p.bb,mdxType:"Props"}))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Segment/Segment.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=components-segment-segment.51add19a7fc772339bd2.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/ActionBar/ActionBar.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),r=t("./node_modules/@mdx-js/react/dist/esm.js"),a=t("./node_modules/docz/dist/index.esm.js"),c=t("./src/components/index.js");const l={};function b(e){let n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"action-bar"},"Action Bar"),Object(r.b)("h3",{id:"toggle-visibility-of-action-elements"},"Toggle visibility of action elements"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { ActionBar, Button } from '@ingresse/aphrodite';\n\n<ActionBar\n    visible={true}\n    styles={{\n        textAlign: 'center',\n    }}>\n    <Button>My Action</Button>\n</ActionBar>\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(a.c,{__position:0,__code:"() => {\n  const [visible, setVisible] = useState(true)\n  return (\n    <Segment\n      shadow\n      radius={4}\n      padding=\"0\"\n      textColor=\"base\"\n      textAlign=\"center\"\n      background=\"background\"\n      styles={{\n        position: 'relative',\n        overflow: 'hidden !important',\n        minHeight: '160px',\n      }}\n    >\n      <Container xs>\n        <Segment padding=\"30px 0 50px\">Page content.</Segment>\n        <Button\n          link\n          color={!visible ? 'success' : 'error'}\n          onClick={() => setVisible(true)}\n        >\n          {visible ? \"Can't see anymore\" : 'Open Action Bar'}\n        </Button>\n      </Container>\n      <ActionBar\n        visible={visible}\n        styles={{\n          position: 'absolute',\n          textAlign: 'center',\n        }}\n      >\n        <Button onClick={() => setVisible(false)}>Close Action Bar</Button>\n      </ActionBar>\n    </Segment>\n  )\n}",__scope:{props:this?this.props:t,useState:s.useState,Playground:a.c,Props:a.d,ActionBar:c.a,Button:c.e,Container:c.k,Segment:c.N},mdxType:"Playground"},()=>{const e=Object(s.useState)(!0),n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(r.b)(c.N,{shadow:!0,radius:4,padding:"0",textColor:"base",textAlign:"center",background:"background",styles:{position:"relative",overflow:"hidden !important",minHeight:"160px"},mdxType:"Segment"},Object(r.b)(c.k,{xs:!0,mdxType:"Container"},Object(r.b)(c.N,{padding:"30px 0 50px",mdxType:"Segment"},"Page content."),Object(r.b)(c.e,{link:!0,color:t?"error":"success",onClick:()=>i(!0),mdxType:"Button"},t?"Can't see anymore":"Open Action Bar")),Object(r.b)(c.a,{visible:t,styles:{position:"absolute",textAlign:"center"},mdxType:"ActionBar"},Object(r.b)(c.e,{onClick:()=>i(!1),mdxType:"Button"},"Close Action Bar")))}),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(a.d,{of:c.a,mdxType:"Props"}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ActionBar/ActionBar.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=components-action-bar-action-bar.5186fa4f9581e2f94d83.js.map
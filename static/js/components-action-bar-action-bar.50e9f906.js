(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/ActionBar/ActionBar.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),r=t("./node_modules/@mdx-js/react/dist/esm.js"),c=t("./node_modules/docz/dist/index.esm.js"),a=t("./src/components/index.js"),b={};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"action-bar"},"Action Bar"),Object(r.b)("h3",{id:"toggle-visibility-of-action-elements"},"Toggle visibility of action elements"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import { ActionBar, Button } from '@ingresse/aphrodite';\n\n<ActionBar\n    visible={true}\n    styles={{\n        textAlign: 'center',\n    }}>\n    <Button>My Action</Button>\n</ActionBar>\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(c.c,{__position:0,__code:"() => {\n  const [visible, setVisible] = useState(true)\n  return (\n    <Segment\n      shadow\n      radius={4}\n      padding=\"0\"\n      textColor=\"base\"\n      textAlign=\"center\"\n      background=\"background\"\n      styles={{\n        position: 'relative',\n        overflow: 'hidden !important',\n        minHeight: '160px',\n      }}\n    >\n      <Container xs>\n        <Segment padding=\"30px 0 50px\">Page content.</Segment>\n        <Button\n          link\n          color={!visible ? 'success' : 'error'}\n          onClick={() => setVisible(true)}\n        >\n          {visible ? \"Can't see anymore\" : 'Open Action Bar'}\n        </Button>\n      </Container>\n      <ActionBar\n        visible={visible}\n        styles={{\n          position: 'absolute',\n          textAlign: 'center',\n        }}\n      >\n        <Button onClick={() => setVisible(false)}>Close Action Bar</Button>\n      </ActionBar>\n    </Segment>\n  )\n}",__scope:{props:this?this.props:t,useState:s.useState,Playground:c.c,Props:c.d,ActionBar:a.b,Button:a.g,Container:a.m,Segment:a.bb},mdxType:"Playground"},(function(){var e=Object(s.useState)(!0),n=Object(o.a)(e,2),t=n[0],i=n[1];return Object(r.b)(a.bb,{shadow:!0,radius:4,padding:"0",textColor:"base",textAlign:"center",background:"background",styles:{position:"relative",overflow:"hidden !important",minHeight:"160px"},mdxType:"Segment"},Object(r.b)(a.m,{xs:!0,mdxType:"Container"},Object(r.b)(a.bb,{padding:"30px 0 50px",mdxType:"Segment"},"Page content."),Object(r.b)(a.g,{link:!0,color:t?"error":"success",onClick:function(){return i(!0)},mdxType:"Button"},t?"Can't see anymore":"Open Action Bar")),Object(r.b)(a.b,{visible:t,styles:{position:"absolute",textAlign:"center"},mdxType:"ActionBar"},Object(r.b)(a.g,{onClick:function(){return i(!1)},mdxType:"Button"},"Close Action Bar")))})),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(c.d,{of:a.b,mdxType:"Props"}))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ActionBar/ActionBar.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=components-action-bar-action-bar.51add19a7fc772339bd2.js.map
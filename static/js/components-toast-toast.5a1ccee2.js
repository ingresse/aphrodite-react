(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./src/components/Toast/Toast.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/esm.js")),a=t("./node_modules/docz/dist/index.esm.js"),c=t("./src/components/index.js"),r=t("./src/constants/index.js");const i={};function l(e){let n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},i,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"toasts"},"Toasts"),Object(s.b)("h3",{id:"just-an-implementation-of-awesome-library-react-toastify-with-aphrodites-definitions"},"Just an implementation of awesome library ",Object(s.b)("a",Object.assign({parentName:"h3"},{href:"https://github.com/fkhadra/react-toastify"}),Object(s.b)("strong",{parentName:"a"},"React Toastify")),", with Aphrodite's definitions."),Object(s.b)("h3",{id:"consult-the-documentation-for-more-options"},"Consult the ",Object(s.b)("a",Object.assign({parentName:"h3"},{href:"https://github.com/fkhadra/react-toastify"}),"documentation")," for more options."),Object(s.b)("h2",{id:"example"},"Example"),Object(s.b)(a.c,{__position:0,__code:'() => {\n  function toastDefault() {\n    toast(\'Hello from Aphrodite React\')\n  }\n  function toastInverse() {\n    toast.inverse(\'Hello from Aphrodite React\')\n  }\n\n  function toastSuccess() {\n    toast.success(\n      \'We are using React Toastify, an awesome library, customized with our styles definitions\',\n    )\n  }\n\n  function toastInfo() {\n    toast.info(\'You can use React Toastify directly, if you want\')\n  }\n\n  function toastWarning() {\n    toast.warning("But, isn\'t have our style, if you use directly")\n  }\n\n  function toastError() {\n    toast.error(\n      "And maybe doesn\'t make sense use our library, if you want to use React Toastify directly - haha",\n    )\n  }\n\n  return (\n    <Container>\n      <ToastsContainer\n        hideProgressBar={true}\n        autoClose={false}\n        styles={{\n          top: \'45px\',\n          right: \'45px\',\n        }}\n      />\n      <Row vertical="center" horizontal="center">\n        <Col xs={6} sm={3}>\n          <Segment padding="10px 0">\n            <Button block color="grey" onClick={toastDefault}>\n              Default\n            </Button>\n          </Segment>\n        </Col>\n        <Col xs={6} sm={3}>\n          <Segment padding="10px 0">\n            <Button block color="black" onClick={toastInverse}>\n              Inverse\n            </Button>\n          </Segment>\n        </Col>\n      </Row>\n\n      <Row vertical="center" horizontal="center">\n        <Col xs={6} sm={3}>\n          <Segment padding="10px 0">\n            <Button block color="success" onClick={toastSuccess}>\n              Success\n            </Button>\n          </Segment>\n        </Col>\n        <Col xs={6} sm={3}>\n          <Segment padding="10px 0">\n            <Button block color="secondary" onClick={toastInfo}>\n              Info\n            </Button>\n          </Segment>\n        </Col>\n        <Col xs={6} sm={3}>\n          <Segment padding="10px 0">\n            <Button block color="warning" onClick={toastWarning}>\n              Warning\n            </Button>\n          </Segment>\n        </Col>\n        <Col xs={6} sm={3}>\n          <Segment padding="10px 0">\n            <Button block color="error" onClick={toastError}>\n              Error\n            </Button>\n          </Segment>\n        </Col>\n      </Row>\n    </Container>\n  )\n}',__scope:{props:this?this.props:t,Playground:a.c,Props:a.d,Container:c.l,Row:c.R,Col:c.j,Segment:c.S,Button:c.f,ToastsContainer:c.X,toast:c.Y,SCREEN_SIZES:r.f},mdxType:"Playground"},()=>Object(s.b)(c.l,{mdxType:"Container"},Object(s.b)(c.X,{hideProgressBar:!0,autoClose:!1,styles:{top:"45px",right:"45px"},mdxType:"ToastsContainer"}),Object(s.b)(c.R,{vertical:"center",horizontal:"center",mdxType:"Row"},Object(s.b)(c.j,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(c.S,{padding:"10px 0",mdxType:"Segment"},Object(s.b)(c.f,{block:!0,color:"grey",onClick:function(){Object(c.Y)("Hello from Aphrodite React")},mdxType:"Button"},"Default"))),Object(s.b)(c.j,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(c.S,{padding:"10px 0",mdxType:"Segment"},Object(s.b)(c.f,{block:!0,color:"black",onClick:function(){c.Y.inverse("Hello from Aphrodite React")},mdxType:"Button"},"Inverse")))),Object(s.b)(c.R,{vertical:"center",horizontal:"center",mdxType:"Row"},Object(s.b)(c.j,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(c.S,{padding:"10px 0",mdxType:"Segment"},Object(s.b)(c.f,{block:!0,color:"success",onClick:function(){c.Y.success("We are using React Toastify, an awesome library, customized with our styles definitions")},mdxType:"Button"},"Success"))),Object(s.b)(c.j,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(c.S,{padding:"10px 0",mdxType:"Segment"},Object(s.b)(c.f,{block:!0,color:"secondary",onClick:function(){c.Y.info("You can use React Toastify directly, if you want")},mdxType:"Button"},"Info"))),Object(s.b)(c.j,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(c.S,{padding:"10px 0",mdxType:"Segment"},Object(s.b)(c.f,{block:!0,color:"warning",onClick:function(){c.Y.warning("But, isn't have our style, if you use directly")},mdxType:"Button"},"Warning"))),Object(s.b)(c.j,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(c.S,{padding:"10px 0",mdxType:"Segment"},Object(s.b)(c.f,{block:!0,color:"error",onClick:function(){c.Y.error("And maybe doesn't make sense use our library, if you want to use React Toastify directly - haha")},mdxType:"Button"},"Error")))))))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=components-toast-toast.fa05da86aaf45a840a0f.js.map
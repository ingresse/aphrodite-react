(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Button/Button.mdx":function(o,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return a}));var n=e("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=e("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=e("./node_modules/react/index.js"),s=e("./node_modules/@mdx-js/react/dist/esm.js"),r=e("./node_modules/docz/dist/index.esm.js"),d=e("./src/utils/index.js"),b=e("./src/components/index.js"),i={};function a(o){var t=o.components,e=Object(l.a)(o,["components"]);return Object(s.b)("wrapper",Object.assign({},i,e,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"button"},"Button"),Object(s.b)("h3",{id:"button-styled-with-aphrodite-definitions"},"Button styled with Aphrodite definitions."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},"import { Button } from '@ingresse/aphrodite';\n\n<Button>Hello, you</Button>\n")),Object(s.b)("h2",{id:"regular"},"Regular"),Object(s.b)(r.c,{__position:0,__code:'<Styled textAlign="center">\n  <Button>Hello</Button>\n</Styled>',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.eb,{textAlign:"center",mdxType:"Styled"},Object(s.b)(b.g,{mdxType:"Button"},"Hello"))),Object(s.b)("h2",{id:"link"},"Link"),Object(s.b)(r.c,{__position:1,__code:'<Styled textAlign="center">\n  <Button link>Hello</Button>\n</Styled>',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.eb,{textAlign:"center",mdxType:"Styled"},Object(s.b)(b.g,{link:!0,mdxType:"Button"},"Hello"))),Object(s.b)("h2",{id:"small"},"Small"),Object(s.b)(r.c,{__position:2,__code:'<Styled textAlign="center">\n  <Button small>Hello</Button>\n</Styled>',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.eb,{textAlign:"center",mdxType:"Styled"},Object(s.b)(b.g,{small:!0,mdxType:"Button"},"Hello"))),Object(s.b)("h2",{id:"basic-colors"},"Basic Colors"),Object(s.b)(r.c,{__position:3,__code:'<Row horizontal="center">\n  <Col xs={12} sm={4}>\n    <Styled padding="10px 20px" background="info">\n      <Button block margin="10px 0" color="black">\n        black\n      </Button>\n    </Styled>\n  </Col>\n  <Col xs={12} sm={4}>\n    <Styled padding="10px 20px" background="secondary">\n      <Button block margin="10px 0" color="white">\n        white\n      </Button>\n    </Styled>\n  </Col>\n  <Col xs={12} sm={4}>\n    <Styled padding="10px 20px" background="success">\n      <Button block margin="10px 0" color="smoke">\n        smoke\n      </Button>\n    </Styled>\n  </Col>\n</Row>',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.Z,{horizontal:"center",mdxType:"Row"},Object(s.b)(b.k,{xs:12,sm:4,mdxType:"Col"},Object(s.b)(b.eb,{padding:"10px 20px",background:"info",mdxType:"Styled"},Object(s.b)(b.g,{block:!0,margin:"10px 0",color:"black",mdxType:"Button"},"black"))),Object(s.b)(b.k,{xs:12,sm:4,mdxType:"Col"},Object(s.b)(b.eb,{padding:"10px 20px",background:"secondary",mdxType:"Styled"},Object(s.b)(b.g,{block:!0,margin:"10px 0",color:"white",mdxType:"Button"},"white"))),Object(s.b)(b.k,{xs:12,sm:4,mdxType:"Col"},Object(s.b)(b.eb,{padding:"10px 20px",background:"success",mdxType:"Styled"},Object(s.b)(b.g,{block:!0,margin:"10px 0",color:"smoke",mdxType:"Button"},"smoke"))))),Object(s.b)("h2",{id:"colors-alias"},"Colors Alias"),Object(s.b)(r.c,{__position:4,__code:'() => {\n  const colorsAlias = Object.keys(colors.alias)\n  return (\n    <section>\n      <Styled padding="20px 0">\n        <Row horizontal="center" vertical="middle">\n          {colorsAlias.map(colorKey => (\n            <Col xs={6} sm={4} md={4} lg={3} key={`color-${colorKey}`}>\n              <Button block margin="10px 0" color={colorKey}>\n                {colorKey}\n              </Button>\n              <Button block small margin="10px 0" color={colorKey}>\n                {colorKey}\n              </Button>\n            </Col>\n          ))}\n        </Row>\n      </Styled>\n      <Styled padding="20px 0">\n        <Row horizontal="center" vertical="middle">\n          {colorsAlias.map(colorKey => (\n            <Col xs={6} sm={4} md={4} lg={3} key={`color-${colorKey}`}>\n              <Button link block margin="10px 0" color={colorKey}>\n                {colorKey}\n              </Button>\n              <Button link block small margin="10px 0" color={colorKey}>\n                {colorKey}\n              </Button>\n            </Col>\n          ))}\n        </Row>\n      </Styled>\n    </section>\n  )\n}',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},(function(){var o=Object.keys(d.b.alias);return Object(s.b)("section",null,Object(s.b)(b.eb,{padding:"20px 0",mdxType:"Styled"},Object(s.b)(b.Z,{horizontal:"center",vertical:"middle",mdxType:"Row"},o.map((function(o){return Object(s.b)(b.k,{xs:6,sm:4,md:4,lg:3,key:"color-".concat(o),mdxType:"Col"},Object(s.b)(b.g,{block:!0,margin:"10px 0",color:o,mdxType:"Button"},o),Object(s.b)(b.g,{block:!0,small:!0,margin:"10px 0",color:o,mdxType:"Button"},o))})))),Object(s.b)(b.eb,{padding:"20px 0",mdxType:"Styled"},Object(s.b)(b.Z,{horizontal:"center",vertical:"middle",mdxType:"Row"},o.map((function(o){return Object(s.b)(b.k,{xs:6,sm:4,md:4,lg:3,key:"color-".concat(o),mdxType:"Col"},Object(s.b)(b.g,{link:!0,block:!0,margin:"10px 0",color:o,mdxType:"Button"},o),Object(s.b)(b.g,{link:!0,block:!0,small:!0,margin:"10px 0",color:o,mdxType:"Button"},o))})))))})),Object(s.b)("h2",{id:"colors-shades"},"Colors Shades"),Object(s.b)(r.c,{__position:5,__code:"() => {\n  const colorsShades = Object.keys(colors.shades)\n  const colorsExcluded = [\n    'primary',\n    'secondary',\n    'info',\n    'success',\n    'warning',\n    'error',\n    'translucid',\n  ]\n  return (\n    <Row horizontal=\"center\">\n      {colorsShades.map(colorKey => {\n        if (colorsExcluded.includes(colorKey)) {\n          return null\n        }\n\n        return (\n          <Col xs={6} sm={4} md={4} lg={3} key={`color-${colorKey}`}>\n            <Button block margin=\"10px 0\" color={colorKey}>\n              {colorKey}\n            </Button>\n            <Button block small margin=\"10px 0\" color={colorKey}>\n              {colorKey}\n            </Button>\n          </Col>\n        )\n      })}\n    </Row>\n  )\n}",__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},(function(){var o=Object.keys(d.b.shades),t=["primary","secondary","info","success","warning","error","translucid"];return Object(s.b)(b.Z,{horizontal:"center",mdxType:"Row"},o.map((function(o){return t.includes(o)?null:Object(s.b)(b.k,{xs:6,sm:4,md:4,lg:3,key:"color-".concat(o),mdxType:"Col"},Object(s.b)(b.g,{block:!0,margin:"10px 0",color:o,mdxType:"Button"},o),Object(s.b)(b.g,{block:!0,small:!0,margin:"10px 0",color:o,mdxType:"Button"},o))})))})),Object(s.b)("h2",{id:"translucid"},"Translucid"),Object(s.b)(r.c,{__position:6,__code:'<Row horizontal="center">\n  <Col xs={12} sm={4}>\n    <Styled padding="10px 20px" background="success">\n      <Button block margin="10px 0" color="translucid">\n        translucid\n      </Button>\n    </Styled>\n  </Col>\n</Row>',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.Z,{horizontal:"center",mdxType:"Row"},Object(s.b)(b.k,{xs:12,sm:4,mdxType:"Col"},Object(s.b)(b.eb,{padding:"10px 20px",background:"success",mdxType:"Styled"},Object(s.b)(b.g,{block:!0,margin:"10px 0",color:"translucid",mdxType:"Button"},"translucid"))))),Object(s.b)("h2",{id:"customized-radius"},"Customized Radius"),Object(s.b)(r.c,{__position:7,__code:'<Row horizontal="center">\n  <Col xs={6} sm={3}>\n    <Button block margin="10px 0">\n      Regular Radius\n    </Button>\n  </Col>\n  <Col xs={6} sm={3}>\n    <Button block margin="10px 0" radius="12px">\n      Custom Radius\n    </Button>\n  </Col>\n  <Col xs={6} sm={3}>\n    <Button block margin="10px 0" radius={6}>\n      Custom Radius\n    </Button>\n  </Col>\n  <Col xs={6} sm={3}>\n    <Button block margin="10px 0" radius="0">\n      Reset Radius\n    </Button>\n  </Col>\n</Row>',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.Z,{horizontal:"center",mdxType:"Row"},Object(s.b)(b.k,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(b.g,{block:!0,margin:"10px 0",mdxType:"Button"},"Regular Radius")),Object(s.b)(b.k,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(b.g,{block:!0,margin:"10px 0",radius:"12px",mdxType:"Button"},"Custom Radius")),Object(s.b)(b.k,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(b.g,{block:!0,margin:"10px 0",radius:6,mdxType:"Button"},"Custom Radius")),Object(s.b)(b.k,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(b.g,{block:!0,margin:"10px 0",radius:"0",mdxType:"Button"},"Reset Radius")))),Object(s.b)("h2",{id:"block"},"Block"),Object(s.b)(r.c,{__position:8,__code:"<Button block>Block</Button>",__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.g,{block:!0,mdxType:"Button"},"Block")),Object(s.b)("h2",{id:"custom-component"},"Custom Component"),Object(s.b)(r.c,{__position:9,__code:'<Styled textAlign="center">\n  <Button as="a" target="_blank" href="https://www.ingresse.com">\n    Custom Component\n  </Button>\n</Styled>',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.eb,{textAlign:"center",mdxType:"Styled"},Object(s.b)(b.g,{as:"a",target:"_blank",href:"https://www.ingresse.com",mdxType:"Button"},"Custom Component"))),Object(s.b)("h2",{id:"loading-state"},"Loading State"),Object(s.b)(r.c,{__position:10,__code:"() => {\n  const [btnText, setBtnText] = useState('Load')\n  const [loading, setLoading] = useState(false)\n  function toggleLoading() {\n    setLoading(!loading)\n\n    setTimeout(() => {\n      setBtnText('Done')\n      setLoading(false)\n\n      setTimeout(() => {\n        setBtnText('Again')\n      }, 1000)\n    }, 5000)\n  }\n\n  return (\n    <Row horizontal=\"center\">\n      <Col xs={12} sm={6}>\n        <Styled textAlign=\"center\">\n          <Button onClick={toggleLoading} loading={loading}>\n            {btnText}\n          </Button>\n        </Styled>\n      </Col>\n      <Col xs={12} sm={6}>\n        <Styled textAlign=\"center\">\n          <Button small onClick={toggleLoading} loading={loading}>\n            {btnText}\n          </Button>\n        </Styled>\n      </Col>\n    </Row>\n  )\n}",__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},(function(){var o=Object(c.useState)("Load"),t=Object(n.a)(o,2),e=t[0],l=t[1],r=Object(c.useState)(!1),d=Object(n.a)(r,2),i=d[0],a=d[1];function p(){a(!i),setTimeout((function(){l("Done"),a(!1),setTimeout((function(){l("Again")}),1e3)}),5e3)}return Object(s.b)(b.Z,{horizontal:"center",mdxType:"Row"},Object(s.b)(b.k,{xs:12,sm:6,mdxType:"Col"},Object(s.b)(b.eb,{textAlign:"center",mdxType:"Styled"},Object(s.b)(b.g,{onClick:p,loading:i,mdxType:"Button"},e))),Object(s.b)(b.k,{xs:12,sm:6,mdxType:"Col"},Object(s.b)(b.eb,{textAlign:"center",mdxType:"Styled"},Object(s.b)(b.g,{small:!0,onClick:p,loading:i,mdxType:"Button"},e))))})),Object(s.b)("h2",{id:"disabled"},"Disabled"),Object(s.b)("p",null,"Ignore ",Object(s.b)("inlineCode",{parentName:"p"},"color")," attribute"),Object(s.b)(r.c,{__position:11,__code:'<Styled textAlign="center">\n  <Row horizontal="center">\n    <Col xs={6} sm={4}>\n      <Button disabled block color="success">\n        Regular\n      </Button>\n    </Col>\n    <Col xs={6} sm={4}>\n      <Button disabled block link color="success">\n        Link\n      </Button>\n    </Col>\n    <Col xs={6} sm={4}>\n      <Button disabled block translucid color="success">\n        Translucid\n      </Button>\n    </Col>\n  </Row>\n</Styled>',__scope:{props:this?this.props:e,useState:c.useState,Playground:r.c,Props:r.d,colors:d.b,Button:b.g,Container:b.m,Styled:b.eb,Row:b.Z,Col:b.k},mdxType:"Playground"},Object(s.b)(b.eb,{textAlign:"center",mdxType:"Styled"},Object(s.b)(b.Z,{horizontal:"center",mdxType:"Row"},Object(s.b)(b.k,{xs:6,sm:4,mdxType:"Col"},Object(s.b)(b.g,{disabled:!0,block:!0,color:"success",mdxType:"Button"},"Regular")),Object(s.b)(b.k,{xs:6,sm:4,mdxType:"Col"},Object(s.b)(b.g,{disabled:!0,block:!0,link:!0,color:"success",mdxType:"Button"},"Link")),Object(s.b)(b.k,{xs:6,sm:4,mdxType:"Col"},Object(s.b)(b.g,{disabled:!0,block:!0,translucid:!0,color:"success",mdxType:"Button"},"Translucid"))))),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)(r.d,{of:b.g,mdxType:"Props"}))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Button/Button.mdx"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=components-button-button.ea29a8f5ffee93fb746b.js.map
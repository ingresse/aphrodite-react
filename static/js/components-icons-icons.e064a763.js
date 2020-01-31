(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/components/Icons/Icons.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=o("./node_modules/react/index.js"),a=o.n(l),r=o("./node_modules/@mdx-js/react/dist/esm.js"),i=o("./node_modules/docz/dist/index.esm.js"),s=o("./src/components/index.js"),m=o("./src/constants/index.js"),p=o("./src/utils/index.js");function d(e){var n=e.color,o=e.slug,t=e.markup,c=e.children;return a.a.createElement(s.t,{styled:!0,styles:{display:"block",width:"auto"},actions:a.a.createElement(a.a.Fragment,null,o?a.a.createElement(s.h,{styled:!0,"data-clipboard-text":o},"Copy Slug"):null,a.a.createElement(s.h,{styled:!0,"data-clipboard-text":t},"Copy Markup"))},a.a.createElement(s.f,{hover:!0,boxShadow:!0,styles:{margin:"0 0 20px",backgroundColor:"translucid"===n?p.b.get("oil"):null}},a.a.createElement(s.M,{vertical:"middle",horizontal:"center"},a.a.createElement(s.i,{xs:o?4:12,sm:o?4:12,lg:o?3:12,styles:{textAlign:"center"}},c),o?a.a.createElement(s.i,{xs:8,sm:8,lg:9},a.a.createElement(s.Q,{bold:!0,small:!0,center:!0,color:"mercury"},o)):null)))}var u=d;d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconExample",filename:"src/components/Icons/IconExample.jsx"}}),o.d(n,"default",(function(){return g}));var b={};function g(e){var n=e.components,o=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},b,o,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"icon"},"Icon"),Object(r.b)("h4",{id:"simple-svg-icons"},"Simple SVG icons"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'import { Icon } from \'aphrodite-react\';\n...\n<Icon\n    slug="arrow-up"\n    size={30}\n    color="ruby"\n/>\n')),Object(r.b)("h2",{id:"list"},"List"),Object(r.b)(i.c,{__position:0,__code:'() => {\n  /**\n   * Local values\n   */\n  const [size, setSize] = useState(30)\n  const [color, setColor] = useState(\'none\')\n  const [term, setTerm] = useState(\'\')\n  return (\n    <>\n      <form onSubmit={evt => evt.preventDefault()}>\n        <Segment padding="0">\n          <Row vertical="middle" horizontal="center">\n            <Col xs={12} sm={8} first="sm" last="xs">\n              <Segment padding="0 0 20px">\n                <Input\n                  id="aph_icons_search"\n                  type="search"\n                  autoComplete="off"\n                  label={`Search over ${ICONS.length} icons`}\n                  value={term}\n                  onChange={(evt, value) => setTerm(value)}\n                />\n              </Segment>\n            </Col>\n            <Col xs={6} sm={2}>\n              <Segment padding="0 0 20px">\n                <Select\n                  id="aph_icons_size"\n                  label="Size"\n                  value={size}\n                  onChange={(evt, value) => setSize(value)}\n                >\n                  <option value={20}>20</option>\n                  <option value={30}>30</option>\n                  <option value={40}>40</option>\n                </Select>\n              </Segment>\n            </Col>\n            <Col xs={6} sm={2}>\n              <Segment padding="0 0 20px">\n                <Select\n                  id="aph_icons_color"\n                  label="Color"\n                  value={color}\n                  onChange={(evt, value) => setColor(value)}\n                >\n                  <option value={\'none\'}>random</option>\n                  {Object.keys(colors.shades).map(colorKey => (\n                    <option\n                      key={`aph_icons_color_${colorKey}`}\n                      value={colorKey}\n                    >\n                      {colorKey}\n                    </option>\n                  ))}\n                </Select>\n              </Segment>\n            </Col>\n          </Row>\n        </Segment>\n\n        <Row vertical="middle" horizontal="center">\n          {ICONS.map((ICON_SLUG, INDEX) => {\n            if (\n              term &&\n              !ICON_SLUG.toLowerCase().includes(term.toLowerCase())\n            ) {\n              return null\n            }\n\n            const iconMarkup = `<Icon slug="${ICON_SLUG}" size={${size}} color="${\n              color !== \'none\' ? color : INDEX % 2 ? \'primary\' : \'secondary\'\n            }" />`\n            return (\n              <Col xs={12} sm={4} md={3} key={`aph_icon_${INDEX}`}>\n                <IconExample\n                  id={`aph_icon_${INDEX}`}\n                  color={color}\n                  slug={ICON_SLUG}\n                  markup={iconMarkup}\n                >\n                  <Icon\n                    slug={ICON_SLUG}\n                    size={parseInt(size, 10)}\n                    color={\n                      color !== \'none\'\n                        ? color\n                        : INDEX % 2\n                        ? \'primary\'\n                        : \'secondary\'\n                    }\n                    {...props}\n                  />\n                </IconExample>\n              </Col>\n            )\n          })}\n        </Row>\n      </form>\n    </>\n  )\n}',__scope:{props:this?this.props:o,useState:l.useState,Playground:i.c,Props:i.d,Icon:s.v,Input:s.x,Select:s.O,Card:s.f,Row:s.M,Col:s.i,Segment:s.N,ICONS:m.c,colors:p.b,IconExample:u},mdxType:"Playground"},(function(){var e=Object(l.useState)(30),n=Object(t.a)(e,2),c=n[0],i=n[1],d=Object(l.useState)("none"),b=Object(t.a)(d,2),g=b[0],h=b[1],x=Object(l.useState)(""),y=Object(t.a)(x,2),O=y[0],j=y[1];return Object(r.b)(a.a.Fragment,null,Object(r.b)("form",{onSubmit:function(e){return e.preventDefault()}},Object(r.b)(s.N,{padding:"0",mdxType:"Segment"},Object(r.b)(s.M,{vertical:"middle",horizontal:"center",mdxType:"Row"},Object(r.b)(s.i,{xs:12,sm:8,first:"sm",last:"xs",mdxType:"Col"},Object(r.b)(s.N,{padding:"0 0 20px",mdxType:"Segment"},Object(r.b)(s.x,{id:"aph_icons_search",type:"search",autoComplete:"off",label:"Search over ".concat(m.c.length," icons"),value:O,onChange:function(e,n){return j(n)},mdxType:"Input"}))),Object(r.b)(s.i,{xs:6,sm:2,mdxType:"Col"},Object(r.b)(s.N,{padding:"0 0 20px",mdxType:"Segment"},Object(r.b)(s.O,{id:"aph_icons_size",label:"Size",value:c,onChange:function(e,n){return i(n)},mdxType:"Select"},Object(r.b)("option",{value:20},"20"),Object(r.b)("option",{value:30},"30"),Object(r.b)("option",{value:40},"40")))),Object(r.b)(s.i,{xs:6,sm:2,mdxType:"Col"},Object(r.b)(s.N,{padding:"0 0 20px",mdxType:"Segment"},Object(r.b)(s.O,{id:"aph_icons_color",label:"Color",value:g,onChange:function(e,n){return h(n)},mdxType:"Select"},Object(r.b)("option",{value:"none"},"random"),Object.keys(p.b.shades).map((function(e){return Object(r.b)("option",{key:"aph_icons_color_".concat(e),value:e},e)}))))))),Object(r.b)(s.M,{vertical:"middle",horizontal:"center",mdxType:"Row"},m.c.map((function(e,n){if(O&&!e.toLowerCase().includes(O.toLowerCase()))return null;var t='<Icon slug="'.concat(e,'" size={').concat(c,'} color="').concat("none"!==g?g:n%2?"primary":"secondary",'" />');return Object(r.b)(s.i,{xs:12,sm:4,md:3,key:"aph_icon_".concat(n),mdxType:"Col"},Object(r.b)(u,{id:"aph_icon_".concat(n),color:g,slug:e,markup:t,mdxType:"IconExample"},Object(r.b)(s.v,Object.assign({slug:e,size:parseInt(c,10),color:"none"!==g?g:n%2?"primary":"secondary"},o,{mdxType:"Icon"}))))})))))})),Object(r.b)("h2",{id:"width--height"},"Width & Height"),Object(r.b)(i.c,{__position:1,__code:'<Segment padding="20px 0 0">\n  <Row vertical="middle" horizontal="center">\n    <Col xs={12} sm={6} md={3}>\n      <IconExample\n        markup={`<Icon slug="loading" width={20} height={5} color="primary" />`}\n      >\n        <Icon slug="loading" width={20} height={5} color="primary" />\n      </IconExample>\n    </Col>\n    <Col xs={12} sm={6} md={3}>\n      <IconExample markup={`<Icon slug="loading" width={40} height={10} />`}>\n        <Icon slug="loading" width={40} height={10} />\n      </IconExample>\n    </Col>\n    <Col xs={12} sm={6} md={3}>\n      <IconExample\n        markup={`<Icon slug="loading" width={80} height={20} color="primary" />`}\n      >\n        <Icon slug="loading" width={80} height={20} color="primary" />\n      </IconExample>\n    </Col>\n    <Col xs={12} sm={6} md={3}>\n      <IconExample markup={`<Icon slug="loading" width={120} height={30} />`}>\n        <Icon slug="loading" width={120} height={30} />\n      </IconExample>\n    </Col>\n  </Row>\n</Segment>',__scope:{props:this?this.props:o,useState:l.useState,Playground:i.c,Props:i.d,Icon:s.v,Input:s.x,Select:s.O,Card:s.f,Row:s.M,Col:s.i,Segment:s.N,ICONS:m.c,colors:p.b,IconExample:u},mdxType:"Playground"},Object(r.b)(s.N,{padding:"20px 0 0",mdxType:"Segment"},Object(r.b)(s.M,{vertical:"middle",horizontal:"center",mdxType:"Row"},Object(r.b)(s.i,{xs:12,sm:6,md:3,mdxType:"Col"},Object(r.b)(u,{markup:'<Icon slug="loading" width={20} height={5} color="primary" />',mdxType:"IconExample"},Object(r.b)(s.v,{slug:"loading",width:20,height:5,color:"primary",mdxType:"Icon"}))),Object(r.b)(s.i,{xs:12,sm:6,md:3,mdxType:"Col"},Object(r.b)(u,{markup:'<Icon slug="loading" width={40} height={10} />',mdxType:"IconExample"},Object(r.b)(s.v,{slug:"loading",width:40,height:10,mdxType:"Icon"}))),Object(r.b)(s.i,{xs:12,sm:6,md:3,mdxType:"Col"},Object(r.b)(u,{markup:'<Icon slug="loading" width={80} height={20} color="primary" />',mdxType:"IconExample"},Object(r.b)(s.v,{slug:"loading",width:80,height:20,color:"primary",mdxType:"Icon"}))),Object(r.b)(s.i,{xs:12,sm:6,md:3,mdxType:"Col"},Object(r.b)(u,{markup:'<Icon slug="loading" width={120} height={30} />',mdxType:"IconExample"},Object(r.b)(s.v,{slug:"loading",width:120,height:30,mdxType:"Icon"})))))),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(i.d,{of:s.v,mdxType:"Props"}))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Icons/Icons.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=components-icons-icons.f51c347d9947b731052f.js.map
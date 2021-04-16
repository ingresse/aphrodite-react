(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"./src/components/Icons/Icons.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return g}));var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=o("./node_modules/react/index.js"),a=o.n(c),s=o("./node_modules/@mdx-js/react/dist/esm.js"),i=o("./node_modules/docz/dist/index.esm.js"),r=o("./src/components/index.js"),m=o("./src/constants/index.js"),p=o("./src/utils/index.js");function d(e){var n=e.color,o=e.slug,t=e.markup,l=e.children;return a.a.createElement(r.x,{styled:!0,styles:{display:"block",width:"auto"},actions:a.a.createElement(c.Fragment,null,o?a.a.createElement(r.j,{styled:!0,"data-clipboard-text":o},"Copy Slug"):null,a.a.createElement(r.j,{styled:!0,"data-clipboard-text":t},"Copy Markup"))},a.a.createElement(r.h,{hover:!0,boxShadow:!0,styles:{margin:"0 0 20px",backgroundColor:"translucid"===n?p.b.get("oil"):null}},a.a.createElement(r.Y,{vertical:"middle",horizontal:"center"},a.a.createElement(r.k,{xs:o?4:12,sm:o?4:12,lg:o?3:12,styles:{textAlign:"center",color:p.b.get(n)}},l),o?a.a.createElement(r.k,{xs:8,sm:8,lg:9},a.a.createElement(r.fb,{bold:!0,small:!0,center:!0,color:"mercury"},o)):null)))}var b=d;d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IconExample",filename:"src/components/Icons/IconExample.jsx"}});var u={};function g(e){var n=e.components,o=Object(l.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},u,o,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"icon"},"Icon"),Object(s.b)("h4",{id:"simple-svg-icons"},"Simple SVG icons"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-jsx"},'import { Icon } from \'@ingresse/aphrodite\';\n...\n<Icon\n    slug="arrow-up"\n    size={30}\n    color="ruby"\n/>\n')),Object(s.b)("h2",{id:"list"},"List"),Object(s.b)(i.c,{__position:0,__code:'() => {\n  /**\n   * Local values\n   */\n  const [size, setSize] = useState(30)\n  const [color, setColor] = useState(\'supernova\')\n  const [term, setTerm] = useState(\'\')\n  return (\n    <Fragment>\n      <form onSubmit={evt => evt.preventDefault()}>\n        <Segment padding="0">\n          <Row vertical="middle" horizontal="center">\n            <Col xs={12} sm={6} first="sm" last="xs">\n              <Segment padding="0 0 20px">\n                <Input\n                  id="aph_icons_search"\n                  type="search"\n                  autoComplete="off"\n                  label={`Search over ${ICONS.length} icons`}\n                  value={term}\n                  onChange={(evt, value) => setTerm(value)}\n                />\n              </Segment>\n            </Col>\n            <Col xs={6} sm={3}>\n              <Segment padding="0 0 20px">\n                <Select\n                  id="aph_icons_size"\n                  label="Size"\n                  value={size}\n                  onChange={(evt, value) => setSize(value)}\n                >\n                  <option value={20}>20</option>\n                  <option value={30}>30</option>\n                  <option value={40}>40</option>\n                </Select>\n              </Segment>\n            </Col>\n            <Col xs={6} sm={3}>\n              <Segment padding="0 0 20px">\n                <Select\n                  id="aph_icons_color"\n                  label="Color"\n                  value={color}\n                  onChange={(evt, value) => setColor(value)}\n                >\n                  {Object.keys(colors.shades).map(colorKey => (\n                    <option\n                      key={`aph_icons_color_${colorKey}`}\n                      value={colorKey}\n                    >\n                      {colorKey}\n                    </option>\n                  ))}\n                </Select>\n              </Segment>\n            </Col>\n          </Row>\n        </Segment>\n\n        <Row vertical="middle" horizontal="center">\n          {ICONS.map((ICON_SLUG, INDEX) => {\n            if (\n              term &&\n              !ICON_SLUG.toLowerCase().includes(term.toLowerCase())\n            ) {\n              return null\n            }\n\n            const iconMarkup = `<Icon slug="${ICON_SLUG}" size={${size}} color="${color}" />`\n            return (\n              <Col\n                xs={12}\n                sm={4}\n                md={3}\n                key={`aph_icon_${INDEX}`}\n                styles={{ lineHeight: 0 }}\n              >\n                <IconExample\n                  id={`aph_icon_${INDEX}`}\n                  color={color}\n                  slug={ICON_SLUG}\n                  markup={iconMarkup}\n                >\n                  <Icon\n                    slug={ICON_SLUG}\n                    size={parseInt(size, 10)}\n                    color={color}\n                    {...props}\n                  />\n                </IconExample>\n              </Col>\n            )\n          })}\n        </Row>\n      </form>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:o,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Icon:r.z,Input:r.B,Select:r.cb,Card:r.h,Row:r.Y,Col:r.k,Segment:r.bb,ICONS:m.c,colors:p.b,IconExample:b},mdxType:"Playground"},(function(){var e=Object(c.useState)(30),n=Object(t.a)(e,2),l=n[0],a=n[1],i=Object(c.useState)("supernova"),d=Object(t.a)(i,2),u=d[0],g=d[1],h=Object(c.useState)(""),x=Object(t.a)(h,2),y=x[0],j=x[1];return Object(s.b)(c.Fragment,{mdxType:"Fragment"},Object(s.b)("form",{onSubmit:function(e){return e.preventDefault()}},Object(s.b)(r.bb,{padding:"0",mdxType:"Segment"},Object(s.b)(r.Y,{vertical:"middle",horizontal:"center",mdxType:"Row"},Object(s.b)(r.k,{xs:12,sm:6,first:"sm",last:"xs",mdxType:"Col"},Object(s.b)(r.bb,{padding:"0 0 20px",mdxType:"Segment"},Object(s.b)(r.B,{id:"aph_icons_search",type:"search",autoComplete:"off",label:"Search over ".concat(m.c.length," icons"),value:y,onChange:function(e,n){return j(n)},mdxType:"Input"}))),Object(s.b)(r.k,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(r.bb,{padding:"0 0 20px",mdxType:"Segment"},Object(s.b)(r.cb,{id:"aph_icons_size",label:"Size",value:l,onChange:function(e,n){return a(n)},mdxType:"Select"},Object(s.b)("option",{value:20},"20"),Object(s.b)("option",{value:30},"30"),Object(s.b)("option",{value:40},"40")))),Object(s.b)(r.k,{xs:6,sm:3,mdxType:"Col"},Object(s.b)(r.bb,{padding:"0 0 20px",mdxType:"Segment"},Object(s.b)(r.cb,{id:"aph_icons_color",label:"Color",value:u,onChange:function(e,n){return g(n)},mdxType:"Select"},Object.keys(p.b.shades).map((function(e){return Object(s.b)("option",{key:"aph_icons_color_".concat(e),value:e},e)}))))))),Object(s.b)(r.Y,{vertical:"middle",horizontal:"center",mdxType:"Row"},m.c.map((function(e,n){if(y&&!e.toLowerCase().includes(y.toLowerCase()))return null;var t='<Icon slug="'.concat(e,'" size={').concat(l,'} color="').concat(u,'" />');return Object(s.b)(r.k,{xs:12,sm:4,md:3,key:"aph_icon_".concat(n),styles:{lineHeight:0},mdxType:"Col"},Object(s.b)(b,{id:"aph_icon_".concat(n),color:u,slug:e,markup:t,mdxType:"IconExample"},Object(s.b)(r.z,Object.assign({slug:e,size:parseInt(l,10),color:u},o,{mdxType:"Icon"}))))})))))})),Object(s.b)("h2",{id:"width--height"},"Width & Height"),Object(s.b)(i.c,{__position:1,__code:'<Segment padding="20px 0 0">\n  <Row vertical="middle" horizontal="center">\n    <Col xs={12} sm={6} md={3} styles={{ lineHeight: 0 }}>\n      <IconExample\n        markup={`<Icon slug="loading" width={20} height={5} color="primary" />`}\n      >\n        <Icon slug="loading" width={20} height={5} color="primary" />\n      </IconExample>\n    </Col>\n    <Col xs={12} sm={6} md={3} styles={{ lineHeight: 0 }}>\n      <IconExample markup={`<Icon slug="loading" width={40} height={10} />`}>\n        <Icon slug="loading" width={40} height={10} />\n      </IconExample>\n    </Col>\n    <Col xs={12} sm={6} md={3} styles={{ lineHeight: 0 }}>\n      <IconExample\n        markup={`<Icon slug="loading" width={80} height={20} color="primary" />`}\n      >\n        <Icon slug="loading" width={80} height={20} color="primary" />\n      </IconExample>\n    </Col>\n    <Col xs={12} sm={6} md={3} styles={{ lineHeight: 0 }}>\n      <IconExample markup={`<Icon slug="loading" width={120} height={30} />`}>\n        <Icon slug="loading" width={120} height={30} />\n      </IconExample>\n    </Col>\n  </Row>\n</Segment>',__scope:{props:this?this.props:o,useState:c.useState,Fragment:c.Fragment,Playground:i.c,Props:i.d,Icon:r.z,Input:r.B,Select:r.cb,Card:r.h,Row:r.Y,Col:r.k,Segment:r.bb,ICONS:m.c,colors:p.b,IconExample:b},mdxType:"Playground"},Object(s.b)(r.bb,{padding:"20px 0 0",mdxType:"Segment"},Object(s.b)(r.Y,{vertical:"middle",horizontal:"center",mdxType:"Row"},Object(s.b)(r.k,{xs:12,sm:6,md:3,styles:{lineHeight:0},mdxType:"Col"},Object(s.b)(b,{markup:'<Icon slug="loading" width={20} height={5} color="primary" />',mdxType:"IconExample"},Object(s.b)(r.z,{slug:"loading",width:20,height:5,color:"primary",mdxType:"Icon"}))),Object(s.b)(r.k,{xs:12,sm:6,md:3,styles:{lineHeight:0},mdxType:"Col"},Object(s.b)(b,{markup:'<Icon slug="loading" width={40} height={10} />',mdxType:"IconExample"},Object(s.b)(r.z,{slug:"loading",width:40,height:10,mdxType:"Icon"}))),Object(s.b)(r.k,{xs:12,sm:6,md:3,styles:{lineHeight:0},mdxType:"Col"},Object(s.b)(b,{markup:'<Icon slug="loading" width={80} height={20} color="primary" />',mdxType:"IconExample"},Object(s.b)(r.z,{slug:"loading",width:80,height:20,color:"primary",mdxType:"Icon"}))),Object(s.b)(r.k,{xs:12,sm:6,md:3,styles:{lineHeight:0},mdxType:"Col"},Object(s.b)(b,{markup:'<Icon slug="loading" width={120} height={30} />',mdxType:"IconExample"},Object(s.b)(r.z,{slug:"loading",width:120,height:30,mdxType:"Icon"})))))),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)(i.d,{of:r.z,mdxType:"Props"}))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Icons/Icons.mdx"}}),g.isMDXComponent=!0}}]);
//# sourceMappingURL=components-icons-icons.51add19a7fc772339bd2.js.map
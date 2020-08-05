(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/Dropdown/Dropdown.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return i}));var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),d=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),p=o("./node_modules/react/index.js"),s=o("./node_modules/@mdx-js/react/dist/esm.js"),r=o("./node_modules/docz/dist/index.esm.js"),m=o("./src/components/index.js");const l={};function i(e){let n=e.components,o=Object(d.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},l,o,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"dropdown"},"Dropdown"),Object(s.b)("h3",{id:"a-white-block-rounded-with-simple-shadow-effect-downing-from-some-other-component"},"A white block, rounded, with simple shadow effect, downing from some other component."),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { Dropdown } from '@ingresse/aphrodite';\n\n...\n\n<Dropdown\n    center\n    toggle=\"Dropdown toggle\">\n    Dropdown content\n</Dropdown>\n")),Object(s.b)("h2",{id:"examples"},"Examples"),Object(s.b)(r.c,{__position:0,__code:"() => {\n  function logClick(dropdownItemId) {\n    console.log('Dropdown Item click', dropdownItemId)\n  }\n  return (\n    <Segment padding=\"40px 0\">\n      <Row>\n        <Col xs={12} sm={3}>\n          <Segment padding=\"20px 0\">\n            <H3 styles={{ marginBottom: '25px' }}>Regular</H3>\n            <Dropdown width=\"300px\" toggle=\"Regular Dropdown Toggle\">\n              This is the regular dropdown content, with customized width\n            </Dropdown>\n          </Segment>\n        </Col>\n        <Col xs={12} sm={3}>\n          <Segment padding=\"20px 0\" styles={{ textAlign: 'center' }}>\n            <H3 styles={{ marginBottom: '25px' }}>Center</H3>\n            <Dropdown center toggle=\"Center Dropdown Toggle\">\n              This is the regular dropdown content\n            </Dropdown>\n          </Segment>\n        </Col>\n        <Col xs={12} sm={3}>\n          <Segment padding=\"20px 0\" styles={{ textAlign: 'center' }}>\n            <H3 styles={{ marginBottom: '25px' }}>Center Up</H3>\n            <Dropdown up center toggle=\"Center Dropdown Toggle\">\n              This is the regular dropdown content\n            </Dropdown>\n          </Segment>\n        </Col>\n        <Col xs={12} sm={3}>\n          <Segment padding=\"20px 0\" styles={{ textAlign: 'right' }}>\n            <H3 styles={{ marginBottom: '25px' }}>Right</H3>\n            <Dropdown right thin toggle=\"Right Dropdown Toggle\">\n              <List>\n                <ListItem onClick={() => logClick('#A')}>\n                  Dropdown Item A\n                </ListItem>\n                <ListItem onClick={() => logClick('#B')}>\n                  Dropdown Item B\n                </ListItem>\n              </List>\n            </Dropdown>\n          </Segment>\n        </Col>\n      </Row>\n    </Segment>\n  )\n}",__scope:{props:this?this.props:o,useState:p.useState,Playground:r.c,Props:r.d,Dropdown:m.o,Row:m.U,Col:m.j,Segment:m.V,H3:m.t,Button:m.f,Input:m.y,List:m.L,ListItem:m.M},mdxType:"Playground"},()=>{function e(e){console.log("Dropdown Item click",e)}return Object(s.b)(m.V,{padding:"40px 0",mdxType:"Segment"},Object(s.b)(m.U,{mdxType:"Row"},Object(s.b)(m.j,{xs:12,sm:3,mdxType:"Col"},Object(s.b)(m.V,{padding:"20px 0",mdxType:"Segment"},Object(s.b)(m.t,{styles:{marginBottom:"25px"},mdxType:"H3"},"Regular"),Object(s.b)(m.o,{width:"300px",toggle:"Regular Dropdown Toggle",mdxType:"Dropdown"},"This is the regular dropdown content, with customized width"))),Object(s.b)(m.j,{xs:12,sm:3,mdxType:"Col"},Object(s.b)(m.V,{padding:"20px 0",styles:{textAlign:"center"},mdxType:"Segment"},Object(s.b)(m.t,{styles:{marginBottom:"25px"},mdxType:"H3"},"Center"),Object(s.b)(m.o,{center:!0,toggle:"Center Dropdown Toggle",mdxType:"Dropdown"},"This is the regular dropdown content"))),Object(s.b)(m.j,{xs:12,sm:3,mdxType:"Col"},Object(s.b)(m.V,{padding:"20px 0",styles:{textAlign:"center"},mdxType:"Segment"},Object(s.b)(m.t,{styles:{marginBottom:"25px"},mdxType:"H3"},"Center Up"),Object(s.b)(m.o,{up:!0,center:!0,toggle:"Center Dropdown Toggle",mdxType:"Dropdown"},"This is the regular dropdown content"))),Object(s.b)(m.j,{xs:12,sm:3,mdxType:"Col"},Object(s.b)(m.V,{padding:"20px 0",styles:{textAlign:"right"},mdxType:"Segment"},Object(s.b)(m.t,{styles:{marginBottom:"25px"},mdxType:"H3"},"Right"),Object(s.b)(m.o,{right:!0,thin:!0,toggle:"Right Dropdown Toggle",mdxType:"Dropdown"},Object(s.b)(m.L,{mdxType:"List"},Object(s.b)(m.M,{onClick:()=>e("#A"),mdxType:"ListItem"},"Dropdown Item A"),Object(s.b)(m.M,{onClick:()=>e("#B"),mdxType:"ListItem"},"Dropdown Item B")))))))}),Object(s.b)("h2",{id:"advanced-examples"},"Advanced Examples"),Object(s.b)(r.c,{__position:1,__code:"() => {\n  const [dropdownVisible, setDropdownVisible] = useState(false)\n  const [dropdownValue, setDropdownValue] = useState('Dropdown Item B')\n  return (\n    <Segment padding=\"40px 0 120px\">\n      <Row>\n        <Col xs={12} sm={6}>\n          <Segment padding=\"20px 0\">\n            <H3 styles={{ marginBottom: '25px' }}>Custom Toggle</H3>\n            <Dropdown\n              width=\"300px\"\n              toggleBlock\n              toggle={<Button block>Custom Toggle</Button>}\n            >\n              This is the dropdown content, triggered by a custom toggle\n            </Dropdown>\n          </Segment>\n        </Col>\n        <Col xs={12} sm={6}>\n          <Segment padding=\"20px 0\">\n            <H3 styles={{ marginBottom: '25px' }}>Focus</H3>\n            <Dropdown\n              thin\n              opened={dropdownVisible}\n              toggleBlock\n              toggle={\n                <Input\n                  id=\"MyInputAsDropdownToggle\"\n                  label=\"Selecting a Value from Dropdown\"\n                  tabIndex={20}\n                  value={dropdownValue}\n                  onChange={evt => setDropdownValue(evt.target.value || '')}\n                  onBlur={() => {\n                    setDropdownVisible(false)\n                  }}\n                  onFocus={() => {\n                    setDropdownVisible(true)\n                  }}\n                />\n              }\n            >\n              <List>\n                <ListItem>Type or Select one option</ListItem>\n                <ListItem\n                  className={\n                    dropdownValue === 'Dropdown Item A' ? 'active' : ''\n                  }\n                  onClick={() => setDropdownValue('Dropdown Item A')}\n                >\n                  Dropdown Item A\n                </ListItem>\n                <ListItem\n                  className={\n                    dropdownValue === 'Dropdown Item B' ? 'active' : ''\n                  }\n                  onClick={() => setDropdownValue('Dropdown Item B')}\n                >\n                  Dropdown Item B\n                </ListItem>\n              </List>\n            </Dropdown>\n          </Segment>\n        </Col>\n      </Row>\n    </Segment>\n  )\n}",__scope:{props:this?this.props:o,useState:p.useState,Playground:r.c,Props:r.d,Dropdown:m.o,Row:m.U,Col:m.j,Segment:m.V,H3:m.t,Button:m.f,Input:m.y,List:m.L,ListItem:m.M},mdxType:"Playground"},()=>{const e=Object(p.useState)(!1),n=Object(t.a)(e,2),o=n[0],d=n[1],r=Object(p.useState)("Dropdown Item B"),l=Object(t.a)(r,2),i=l[0],g=l[1];return Object(s.b)(m.V,{padding:"40px 0 120px",mdxType:"Segment"},Object(s.b)(m.U,{mdxType:"Row"},Object(s.b)(m.j,{xs:12,sm:6,mdxType:"Col"},Object(s.b)(m.V,{padding:"20px 0",mdxType:"Segment"},Object(s.b)(m.t,{styles:{marginBottom:"25px"},mdxType:"H3"},"Custom Toggle"),Object(s.b)(m.o,{width:"300px",toggleBlock:!0,toggle:Object(s.b)(m.f,{block:!0,mdxType:"Button"},"Custom Toggle"),mdxType:"Dropdown"},"This is the dropdown content, triggered by a custom toggle"))),Object(s.b)(m.j,{xs:12,sm:6,mdxType:"Col"},Object(s.b)(m.V,{padding:"20px 0",mdxType:"Segment"},Object(s.b)(m.t,{styles:{marginBottom:"25px"},mdxType:"H3"},"Focus"),Object(s.b)(m.o,{thin:!0,opened:o,toggleBlock:!0,toggle:Object(s.b)(m.y,{id:"MyInputAsDropdownToggle",label:"Selecting a Value from Dropdown",tabIndex:20,value:i,onChange:e=>g(e.target.value||""),onBlur:()=>{d(!1)},onFocus:()=>{d(!0)},mdxType:"Input"}),mdxType:"Dropdown"},Object(s.b)(m.L,{mdxType:"List"},Object(s.b)(m.M,{mdxType:"ListItem"},"Type or Select one option"),Object(s.b)(m.M,{className:"Dropdown Item A"===i?"active":"",onClick:()=>g("Dropdown Item A"),mdxType:"ListItem"},"Dropdown Item A"),Object(s.b)(m.M,{className:"Dropdown Item B"===i?"active":"",onClick:()=>g("Dropdown Item B"),mdxType:"ListItem"},"Dropdown Item B")))))))}),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)(r.d,{of:m.o,mdxType:"Props"}))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Dropdown/Dropdown.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=components-dropdown-dropdown.a766a01c34661eeba39d.js.map
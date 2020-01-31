(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/components/Form/Switch/Switch.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var o,l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/react/index.js"),c=n("./node_modules/@mdx-js/react/dist/esm.js"),d=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/components/index.js"),g=(o="BreakPointToggle",{});function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object.assign({},g,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"switch"},"Switch"),Object(c.b)("h3",{id:"form-checkbox-styled-like-a-switch-onoff"},"Form checkbox styled like a switch on/off."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)(d.c,{__position:0,__code:'() => {\n  const [col, setCol] = useState(4)\n  const [text, setText] = useState(\'Switch Text\')\n  const [disabled, setDisabled] = useState(false)\n  const [textAlign, setTextAlign] = useState(false)\n  const [textSmall, setTextSmall] = useState(false)\n  const [toggleAlign, setToggleAlign] = useState(false)\n  const BreakPointToggle = props => (\n    <Placeholder\n      {...props}\n      block\n      as="button"\n      type="button"\n      height={20}\n      styles={{\n        cursor: \'pointer\',\n        border: 0,\n        outline: 0,\n      }}\n      title={`Toggle width to ${props.size} columns`}\n      onClick={() => setCol(props.size)}\n    />\n  )\n\n  return (\n    <Segment padding="0">\n      {window.innerWidth < 768 ? null : (\n        <Segment padding="0 0 10px">\n          <Row horizontal="center">\n            <Col xs={12} sm={2}>\n              <BreakPointToggle size={12} />\n            </Col>\n            <Col xs={12} sm={2}>\n              <BreakPointToggle size={8} />\n            </Col>\n            <Col xs={12} sm={4}>\n              <BreakPointToggle size={4} />\n            </Col>\n            <Col xs={12} sm={2}>\n              <BreakPointToggle size={8} />\n            </Col>\n            <Col xs={12} sm={2}>\n              <BreakPointToggle size={12} />\n            </Col>\n          </Row>\n        </Segment>\n      )}\n\n      <Segment padding="20px 0">\n        <Row horizontal="center">\n          <Col xs={12} sm={col}>\n            <Card>\n              <Switch\n                disabled={disabled}\n                textSmall={textSmall}\n                textAlign={textAlign ? \'right\' : \'left\'}\n                toggleAlign={toggleAlign ? \'right\' : \'left\'}\n              >\n                {text}\n              </Switch>\n            </Card>\n          </Col>\n        </Row>\n\n        <Segment padding="40px 0">\n          <Row horizontal="center">\n            <Col xs={12} sm={12} md={9}>\n              <Segment padding="10px 0">\n                <Input\n                  type="text"\n                  label="Switch Label Text"\n                  placeholder="Type something..."\n                  value={text}\n                  onChange={e => setText(e.target.value)}\n                />\n              </Segment>\n            </Col>\n          </Row>\n\n          <Row horizontal="center">\n            <Col xs={6} sm={6} md={3}>\n              <Segment padding="10px 0">\n                <Checkbox\n                  id="switchToggleAlign"\n                  value={toggleAlign ? \'right\' : \'left\'}\n                  defaultChecked={toggleAlign}\n                  onChange={e =>\n                    setToggleAlign(e.target.checked ? true : false)\n                  }\n                >\n                  Align toggle at right\n                </Checkbox>\n              </Segment>\n            </Col>\n\n            <Col xs={6} sm={6} md={3}>\n              <Segment padding="10px 0">\n                <Checkbox\n                  id="switchTextAlign"\n                  value={textAlign ? \'right\' : \'left\'}\n                  defaultChecked={textAlign}\n                  onChange={e =>\n                    setTextAlign(e.target.checked ? true : false)\n                  }\n                >\n                  Align text at right\n                </Checkbox>\n              </Segment>\n            </Col>\n\n            <Col xs={6} sm={6} md={3}>\n              <Segment padding="10px 0">\n                <Checkbox\n                  id="switchTextSmall"\n                  value={textSmall ? true : false}\n                  defaultChecked={textSmall}\n                  onChange={e =>\n                    setTextSmall(e.target.checked ? true : false)\n                  }\n                >\n                  Text small\n                </Checkbox>\n              </Segment>\n            </Col>\n\n            <Col xs={6} sm={6} md={3}>\n              <Segment padding="10px 0">\n                <Checkbox\n                  id="switchDisabled"\n                  value={disabled ? true : false}\n                  defaultChecked={disabled}\n                  onChange={e => setDisabled(e.target.checked ? true : false)}\n                >\n                  Disabled\n                </Checkbox>\n              </Segment>\n            </Col>\n          </Row>\n        </Segment>\n      </Segment>\n    </Segment>\n  )\n}',__scope:{props:this?this.props:n,useState:s.useState,Playground:d.c,Props:d.d,Switch:a.P,Card:a.f,Checkbox:a.g,Input:a.x,Placeholder:a.J,Segment:a.N,Row:a.M,Col:a.i},mdxType:"Playground"},(function(){var e=Object(s.useState)(4),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(s.useState)("Switch Text"),d=Object(l.a)(i,2),g=d[0],b=d[1],m=Object(s.useState)(!1),r=Object(l.a)(m,2),x=r[0],p=r[1],h=Object(s.useState)(!1),u=Object(l.a)(h,2),T=u[0],C=u[1],j=Object(s.useState)(!1),S=Object(l.a)(j,2),O=S[0],y=S[1],k=Object(s.useState)(!1),f=Object(l.a)(k,2),w=f[0],A=f[1],P=function(e){return Object(c.b)(a.J,Object.assign({},e,{block:!0,as:"button",type:"button",height:20,styles:{cursor:"pointer",border:0,outline:0},title:"Toggle width to ".concat(e.size," columns"),onClick:function(){return o(e.size)},mdxType:"Placeholder"}))};return Object(c.b)(a.N,{padding:"0",mdxType:"Segment"},window.innerWidth<768?null:Object(c.b)(a.N,{padding:"0 0 10px",mdxType:"Segment"},Object(c.b)(a.M,{horizontal:"center",mdxType:"Row"},Object(c.b)(a.i,{xs:12,sm:2,mdxType:"Col"},Object(c.b)(P,{size:12,mdxType:"BreakPointToggle"})),Object(c.b)(a.i,{xs:12,sm:2,mdxType:"Col"},Object(c.b)(P,{size:8,mdxType:"BreakPointToggle"})),Object(c.b)(a.i,{xs:12,sm:4,mdxType:"Col"},Object(c.b)(P,{size:4,mdxType:"BreakPointToggle"})),Object(c.b)(a.i,{xs:12,sm:2,mdxType:"Col"},Object(c.b)(P,{size:8,mdxType:"BreakPointToggle"})),Object(c.b)(a.i,{xs:12,sm:2,mdxType:"Col"},Object(c.b)(P,{size:12,mdxType:"BreakPointToggle"})))),Object(c.b)(a.N,{padding:"20px 0",mdxType:"Segment"},Object(c.b)(a.M,{horizontal:"center",mdxType:"Row"},Object(c.b)(a.i,{xs:12,sm:n,mdxType:"Col"},Object(c.b)(a.f,{mdxType:"Card"},Object(c.b)(a.P,{disabled:x,textSmall:O,textAlign:T?"right":"left",toggleAlign:w?"right":"left",mdxType:"Switch"},g)))),Object(c.b)(a.N,{padding:"40px 0",mdxType:"Segment"},Object(c.b)(a.M,{horizontal:"center",mdxType:"Row"},Object(c.b)(a.i,{xs:12,sm:12,md:9,mdxType:"Col"},Object(c.b)(a.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(a.x,{type:"text",label:"Switch Label Text",placeholder:"Type something...",value:g,onChange:function(e){return b(e.target.value)},mdxType:"Input"})))),Object(c.b)(a.M,{horizontal:"center",mdxType:"Row"},Object(c.b)(a.i,{xs:6,sm:6,md:3,mdxType:"Col"},Object(c.b)(a.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(a.g,{id:"switchToggleAlign",value:w?"right":"left",defaultChecked:w,onChange:function(e){return A(!!e.target.checked)},mdxType:"Checkbox"},"Align toggle at right"))),Object(c.b)(a.i,{xs:6,sm:6,md:3,mdxType:"Col"},Object(c.b)(a.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(a.g,{id:"switchTextAlign",value:T?"right":"left",defaultChecked:T,onChange:function(e){return C(!!e.target.checked)},mdxType:"Checkbox"},"Align text at right"))),Object(c.b)(a.i,{xs:6,sm:6,md:3,mdxType:"Col"},Object(c.b)(a.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(a.g,{id:"switchTextSmall",value:!!O,defaultChecked:O,onChange:function(e){return y(!!e.target.checked)},mdxType:"Checkbox"},"Text small"))),Object(c.b)(a.i,{xs:6,sm:6,md:3,mdxType:"Col"},Object(c.b)(a.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(a.g,{id:"switchDisabled",value:!!x,defaultChecked:x,onChange:function(e){return p(!!e.target.checked)},mdxType:"Checkbox"},"Disabled")))))))})),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)(d.d,{of:a.P,mdxType:"Props"}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Form/Switch/Switch.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=components-form-switch-switch.1492a209a91b4f0f7e9a.js.map
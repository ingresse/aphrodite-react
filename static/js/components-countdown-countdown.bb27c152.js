(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Countdown/Countdown.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return r}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=t("./node_modules/react/index.js"),d=t("./node_modules/@mdx-js/react/dist/esm.js"),l=t("./node_modules/docz/dist/index.esm.js"),a=t("./src/components/index.js"),i=t("./src/utils/index.js");const p={};function r(e){let n=e.components,t=Object(s.a)(e,["components"]);return Object(d.b)("wrapper",Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"countdown"},"Countdown"),Object(d.b)("h3",{id:"regressive-seconds-visual-timer"},"Regressive seconds visual timer"),Object(d.b)("pre",null,Object(d.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import { Countdown } from '@ingresse/aphrodite';\n\n...\n\nfunction countdownFinished() {\n    alert('finished');\n}\n\n...\n\n<Countdown\n    size={120}\n    seconds={30}\n    onFinishCallback={countdownFinished}\n/>\n")),Object(d.b)("h2",{id:"example"},"Example"),Object(d.b)(l.c,{__position:0,__code:'() => {\n  const [counting, setCounting] = useState(false)\n  const [seconds, setSeconds] = useState(5)\n  const [color, setColor] = useState(\'helper\')\n  const [size, setSize] = useState(120)\n  const btnColor = color !== \'helper\' ? color : \'secondary\'\n  function countdownFinished() {\n    console.log(\'countdown finished\')\n    setCounting(false)\n  }\n\n  return (\n    <Segment padding="45px 0">\n      <Container xs>\n        <Card padding="10px 20px">\n          {counting ? (\n            <Segment padding="10px 0" textAlign="center">\n              <Countdown\n                size={size}\n                seconds={seconds}\n                color={color}\n                onFinishCallback={countdownFinished}\n              />\n              <Segment padding="20px 0 0">\n                <Button\n                  link\n                  color={btnColor}\n                  onClick={() => setCounting(false)}\n                >\n                  Cancel\n                </Button>\n              </Segment>\n            </Segment>\n          ) : (\n            <Segment padding="0">\n              <Row horizontal="center">\n                <Col xs={6} sm={6}>\n                  <Segment padding="10px 0">\n                    <InputNumber\n                      label="Size"\n                      value={size}\n                      onChange={setSize}\n                    />\n                  </Segment>\n                </Col>\n                <Col xs={6} sm={6}>\n                  <Segment padding="10px 0">\n                    <InputNumber\n                      label="Seconds"\n                      value={seconds}\n                      onChange={setSeconds}\n                    />\n                  </Segment>\n                </Col>\n                <Col xs={10} sm={6}>\n                  <Segment padding="10px 0">\n                    <Select\n                      label="Color"\n                      value={color}\n                      onChange={({ target }) => setColor(target.value)}\n                    >\n                      <option value={Countdown.color}>default</option>\n                      {Object.keys(colors.shades).map(colorKey => (\n                        <option\n                          key={`aph-color-${colorKey}`}\n                          value={colorKey}\n                        >\n                          {colorKey}\n                        </option>\n                      ))}\n                    </Select>\n                  </Segment>\n                </Col>\n              </Row>\n              <Segment padding="10px 0" textAlign="center">\n                <Button\n                  link\n                  color={btnColor}\n                  onClick={() => setCounting(true)}\n                >\n                  Start\n                </Button>\n              </Segment>\n            </Segment>\n          )}\n        </Card>\n      </Container>\n    </Segment>\n  )\n}',__scope:{props:this?this.props:t,useState:c.useState,Playground:l.c,Props:l.d,Countdown:a.l,Container:a.k,Segment:a.N,Button:a.e,Card:a.f,InputNumber:a.B,Select:a.O,Row:a.M,Col:a.i,colors:i.b},mdxType:"Playground"},()=>{const e=Object(c.useState)(!1),n=Object(o.a)(e,2),t=n[0],s=n[1],l=Object(c.useState)(5),p=Object(o.a)(l,2),r=p[0],b=p[1],u=Object(c.useState)("helper"),m=Object(o.a)(u,2),g=m[0],x=m[1],j=Object(c.useState)(120),C=Object(o.a)(j,2),O=C[0],S=C[1],y="helper"!==g?g:"secondary";return Object(d.b)(a.N,{padding:"45px 0",mdxType:"Segment"},Object(d.b)(a.k,{xs:!0,mdxType:"Container"},Object(d.b)(a.f,{padding:"10px 20px",mdxType:"Card"},t?Object(d.b)(a.N,{padding:"10px 0",textAlign:"center",mdxType:"Segment"},Object(d.b)(a.l,{size:O,seconds:r,color:g,onFinishCallback:function(){console.log("countdown finished"),s(!1)},mdxType:"Countdown"}),Object(d.b)(a.N,{padding:"20px 0 0",mdxType:"Segment"},Object(d.b)(a.e,{link:!0,color:y,onClick:()=>s(!1),mdxType:"Button"},"Cancel"))):Object(d.b)(a.N,{padding:"0",mdxType:"Segment"},Object(d.b)(a.M,{horizontal:"center",mdxType:"Row"},Object(d.b)(a.i,{xs:6,sm:6,mdxType:"Col"},Object(d.b)(a.N,{padding:"10px 0",mdxType:"Segment"},Object(d.b)(a.B,{label:"Size",value:O,onChange:S,mdxType:"InputNumber"}))),Object(d.b)(a.i,{xs:6,sm:6,mdxType:"Col"},Object(d.b)(a.N,{padding:"10px 0",mdxType:"Segment"},Object(d.b)(a.B,{label:"Seconds",value:r,onChange:b,mdxType:"InputNumber"}))),Object(d.b)(a.i,{xs:10,sm:6,mdxType:"Col"},Object(d.b)(a.N,{padding:"10px 0",mdxType:"Segment"},Object(d.b)(a.O,{label:"Color",value:g,onChange:({target:e})=>x(e.value),mdxType:"Select"},Object(d.b)("option",{value:a.l.color},"default"),Object.keys(i.b.shades).map(e=>Object(d.b)("option",{key:"aph-color-".concat(e),value:e},e)))))),Object(d.b)(a.N,{padding:"10px 0",textAlign:"center",mdxType:"Segment"},Object(d.b)(a.e,{link:!0,color:y,onClick:()=>s(!0),mdxType:"Button"},"Start"))))))}),Object(d.b)("h2",{id:"properties"},"Properties"),Object(d.b)(l.d,{of:a.l,mdxType:"Props"}))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Countdown/Countdown.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=components-countdown-countdown.5186fa4f9581e2f94d83.js.map
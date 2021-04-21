(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/Countdown/Countdown.mdx":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return p}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),d=t("./node_modules/@mdx-js/react/dist/esm.js"),a=t("./node_modules/docz/dist/index.esm.js"),i=t("./src/components/index.js"),r=t("./src/utils/index.js"),l={};function p(n){var e=n.components,t=Object(c.a)(n,["components"]);return Object(d.b)("wrapper",Object.assign({},l,t,{components:e,mdxType:"MDXLayout"}),Object(d.b)("h1",{id:"countdown"},"Countdown"),Object(d.b)("h3",{id:"regressive-seconds-visual-timer"},"Regressive seconds visual timer"),Object(d.b)("pre",null,Object(d.b)("code",{parentName:"pre",className:"language-jsx"},"import { Countdown } from '@ingresse/aphrodite';\n\n...\n\nfunction countdownFinished() {\n    alert('finished');\n}\n\n...\n\n<Countdown\n    size={120}\n    seconds={30}\n    onFinishCallback={countdownFinished}\n/>\n")),Object(d.b)("h2",{id:"example"},"Example"),Object(d.b)(a.c,{__position:0,__code:'() => {\n  const [counting, setCounting] = useState(false)\n  const [seconds, setSeconds] = useState(5)\n  const [color, setColor] = useState(\'helper\')\n  const [size, setSize] = useState(120)\n  const btnColor = color !== \'helper\' ? color : \'secondary\'\n  function countdownFinished() {\n    console.log(\'countdown finished\')\n    setCounting(false)\n  }\n\n  return (\n    <Segment padding="45px 0">\n      <Container xs>\n        <Card padding="10px 20px">\n          {counting ? (\n            <Segment padding="10px 0" textAlign="center">\n              <Countdown\n                size={size}\n                seconds={seconds}\n                color={color}\n                onFinishCallback={countdownFinished}\n              />\n              <Segment padding="20px 0 0">\n                <Button\n                  link\n                  color={btnColor}\n                  onClick={() => setCounting(false)}\n                >\n                  Cancel\n                </Button>\n              </Segment>\n            </Segment>\n          ) : (\n            <Segment padding="0">\n              <Row horizontal="center">\n                <Col xs={6} sm={6}>\n                  <Segment padding="10px 0">\n                    <InputNumeric\n                      label="Size"\n                      value={size}\n                      onChange={(evt, n) => setSize(parseInt(n, 10))}\n                    />\n                  </Segment>\n                </Col>\n                <Col xs={6} sm={6}>\n                  <Segment padding="10px 0">\n                    <InputNumeric\n                      label="Seconds"\n                      value={seconds}\n                      onChange={(evt, n) => setSeconds(parseInt(n, 10))}\n                    />\n                  </Segment>\n                </Col>\n                <Col xs={10} sm={6}>\n                  <Segment padding="10px 0">\n                    <Select\n                      label="Color"\n                      value={color}\n                      onChange={({ target }) => setColor(target.value)}\n                    >\n                      <option value={Countdown.color}>default</option>\n                      {Object.keys(colors.shades).map(colorKey => (\n                        <option\n                          key={`aph-color-${colorKey}`}\n                          value={colorKey}\n                        >\n                          {colorKey}\n                        </option>\n                      ))}\n                    </Select>\n                  </Segment>\n                </Col>\n              </Row>\n              <Segment padding="10px 0" textAlign="center">\n                <Button\n                  link\n                  color={btnColor}\n                  onClick={() => setCounting(true)}\n                >\n                  Start\n                </Button>\n              </Segment>\n            </Segment>\n          )}\n        </Card>\n      </Container>\n    </Segment>\n  )\n}',__scope:{props:this?this.props:t,useState:s.useState,Playground:a.c,Props:a.d,Countdown:i.n,Container:i.m,Segment:i.cb,Button:i.g,Card:i.h,InputNumeric:i.J,Select:i.db,Row:i.Z,Col:i.k,colors:r.b},mdxType:"Playground"},(function(){var n=Object(s.useState)(!1),e=Object(o.a)(n,2),t=e[0],c=e[1],a=Object(s.useState)(5),l=Object(o.a)(a,2),p=l[0],b=l[1],u=Object(s.useState)("helper"),m=Object(o.a)(u,2),g=m[0],x=m[1],C=Object(s.useState)(120),j=Object(o.a)(C,2),S=j[0],O=j[1],h="helper"!==g?g:"secondary";return Object(d.b)(i.cb,{padding:"45px 0",mdxType:"Segment"},Object(d.b)(i.m,{xs:!0,mdxType:"Container"},Object(d.b)(i.h,{padding:"10px 20px",mdxType:"Card"},t?Object(d.b)(i.cb,{padding:"10px 0",textAlign:"center",mdxType:"Segment"},Object(d.b)(i.n,{size:S,seconds:p,color:g,onFinishCallback:function(){console.log("countdown finished"),c(!1)},mdxType:"Countdown"}),Object(d.b)(i.cb,{padding:"20px 0 0",mdxType:"Segment"},Object(d.b)(i.g,{link:!0,color:h,onClick:function(){return c(!1)},mdxType:"Button"},"Cancel"))):Object(d.b)(i.cb,{padding:"0",mdxType:"Segment"},Object(d.b)(i.Z,{horizontal:"center",mdxType:"Row"},Object(d.b)(i.k,{xs:6,sm:6,mdxType:"Col"},Object(d.b)(i.cb,{padding:"10px 0",mdxType:"Segment"},Object(d.b)(i.J,{label:"Size",value:S,onChange:function(n,e){return O(parseInt(e,10))},mdxType:"InputNumeric"}))),Object(d.b)(i.k,{xs:6,sm:6,mdxType:"Col"},Object(d.b)(i.cb,{padding:"10px 0",mdxType:"Segment"},Object(d.b)(i.J,{label:"Seconds",value:p,onChange:function(n,e){return b(parseInt(e,10))},mdxType:"InputNumeric"}))),Object(d.b)(i.k,{xs:10,sm:6,mdxType:"Col"},Object(d.b)(i.cb,{padding:"10px 0",mdxType:"Segment"},Object(d.b)(i.db,{label:"Color",value:g,onChange:function(n){var e=n.target;return x(e.value)},mdxType:"Select"},Object(d.b)("option",{value:i.n.color},"default"),Object.keys(r.b.shades).map((function(n){return Object(d.b)("option",{key:"aph-color-".concat(n),value:n},n)})))))),Object(d.b)(i.cb,{padding:"10px 0",textAlign:"center",mdxType:"Segment"},Object(d.b)(i.g,{link:!0,color:h,onClick:function(){return c(!0)},mdxType:"Button"},"Start"))))))})),Object(d.b)("h2",{id:"properties"},"Properties"),Object(d.b)(a.d,{of:i.n,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Countdown/Countdown.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=components-countdown-countdown.ea29a8f5ffee93fb746b.js.map
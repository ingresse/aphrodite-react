(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./src/components/Modal/Modal.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/react/index.js"),c=t("./node_modules/@mdx-js/react/dist/esm.js"),s=t("./src/components/index.js"),i=t("./node_modules/docz/dist/index.esm.js"),p={};function d(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"modal"},"Modal"),Object(c.b)("h3",{id:"a-simple-dialog-implementation"},"A simple dialog implementation"),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)(i.c,{__position:0,__code:'() => {\n  // import { Modal, Segment, Button, Placeholder } from \'aphrodite-react\';\n  const [opened, setOpened] = useState(false)\n  const [title, setTitle] = useState(\'Oi, eu sou o Goku\')\n  const [header, setHeader] = useState(\'\')\n  const [closeOnEscape, setCloseOnEscape] = useState(true)\n  const [unblockScrolling, setUnblockScrolling] = useState(false)\n  const [contentJustify, setContentJustify] = useState(\'center\')\n\n  /** All the `styles` in Modal was only customized to this example */\n  return (\n    <Segment\n      padding="0"\n      styles={{\n        position: \'relative\',\n        overflow: \'hidden\',\n        height: \'720px\',\n      }}\n    >\n      <Container>\n        <Segment padding="20px 0" styles={{ textAlign: \'center\' }}>\n          <Segment padding="10px 0">\n            <Row horizontal="center">\n              <Col xs={6} sm={4}>\n                <Segment padding="10px 0">\n                  <Switch\n                    id="modal_unblock_scrolling"\n                    textAlign="right"\n                    toggleAlign="right"\n                    checked={unblockScrolling}\n                    onChange={evt => setUnblockScrolling(evt.target.checked)}\n                  >\n                    Unblock Scrolling\n                  </Switch>\n                </Segment>\n              </Col>\n              <Col xs={6} sm={4}>\n                <Segment padding="10px 0">\n                  <Switch\n                    id="modal_close_on_escape"\n                    checked={closeOnEscape}\n                    onChange={evt => setCloseOnEscape(evt.target.checked)}\n                  >\n                    Close On Escape\n                  </Switch>\n                </Segment>\n              </Col>\n            </Row>\n          </Segment>\n          <Segment padding="10px 0">\n            <Row horizontal="center">\n              <Col xs={12} sm={4}>\n                <Segment padding="10px 0">\n                  <Input\n                    type="text"\n                    value={title}\n                    label="Title"\n                    autoComplete="off"\n                    onChange={(evt, value) => setTitle(value)}\n                  />\n                </Segment>\n              </Col>\n              <Col xs={12} sm={4}>\n                <Segment padding="10px 0">\n                  <Input\n                    type="text"\n                    value={header}\n                    label="Header"\n                    autoComplete="off"\n                    placeholder="Components, such as in footer"\n                    onChange={(evt, value) => setHeader(value)}\n                  />\n                </Segment>\n              </Col>\n              <Col xs={12} sm={4}>\n                <Segment padding="10px 0">\n                  <Select\n                    value={contentJustify}\n                    label="Content Justify"\n                    onChange={(evt, value) => setContentJustify(value)}\n                  >\n                    <option value="flex-start">flex-start</option>\n                    <option value="center">center</option>\n                    <option value="flex-end">flex-end</option>\n                  </Select>\n                </Segment>\n              </Col>\n            </Row>\n          </Segment>\n          <Segment padding="20px 0">\n            <Button color="primary" onClick={() => setOpened(true)}>\n              Open Modal\n            </Button>\n          </Segment>\n        </Segment>\n      </Container>\n\n      <Modal\n        title={title}\n        header={header}\n        opened={opened}\n        openedCallback={setOpened}\n        closeOnEscape={closeOnEscape}\n        contentJustify={contentJustify}\n        unblockScrolling={unblockScrolling}\n        styles={{\n          position: \'absolute\',\n        }}\n        overlayProps={{\n          styles: {\n            position: \'absolute\',\n          },\n        }}\n        footerProps={{\n          styles: {\n            position: \'absolute\',\n            textAlign: \'center\',\n          },\n        }}\n        footer={<Button onClick={() => setOpened(false)}>Close Modal</Button>}\n      >\n        <Container sm>\n          <Placeholder>\n            <iframe\n              width="100%"\n              height="325"\n              src="https://www.youtube-nocookie.com/embed/oyTZ267Xg70?autoplay=true&volume=0.3&start=4"\n              frameBorder="0"\n              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"\n              allowFullScreen\n            />\n          </Placeholder>\n        </Container>\n      </Modal>\n    </Segment>\n  )\n}',__scope:{props:this?this.props:t,useState:a.useState,Modal:s.F,Button:s.e,Segment:s.N,Container:s.k,Placeholder:s.J,Row:s.M,Col:s.i,Input:s.x,Select:s.O,Switch:s.P,Playground:i.c,Props:i.d},style:{margin:"-20px",padding:"0 !important"},mdxType:"Playground"},(function(){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),t=n[0],l=n[1],i=Object(a.useState)("Oi, eu sou o Goku"),p=Object(o.a)(i,2),d=p[0],r=p[1],m=Object(a.useState)(""),u=Object(o.a)(m,2),b=u[0],g=u[1],x=Object(a.useState)(!0),y=Object(o.a)(x,2),O=y[0],h=y[1],S=Object(a.useState)(!1),j=Object(o.a)(S,2),f=j[0],C=j[1],T=Object(a.useState)("center"),v=Object(o.a)(T,2),w=v[0],k=v[1];return Object(c.b)(s.N,{padding:"0",styles:{position:"relative",overflow:"hidden",height:"720px"},mdxType:"Segment"},Object(c.b)(s.k,{mdxType:"Container"},Object(c.b)(s.N,{padding:"20px 0",styles:{textAlign:"center"},mdxType:"Segment"},Object(c.b)(s.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(s.M,{horizontal:"center",mdxType:"Row"},Object(c.b)(s.i,{xs:6,sm:4,mdxType:"Col"},Object(c.b)(s.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(s.P,{id:"modal_unblock_scrolling",textAlign:"right",toggleAlign:"right",checked:f,onChange:function(e){return C(e.target.checked)},mdxType:"Switch"},"Unblock Scrolling"))),Object(c.b)(s.i,{xs:6,sm:4,mdxType:"Col"},Object(c.b)(s.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(s.P,{id:"modal_close_on_escape",checked:O,onChange:function(e){return h(e.target.checked)},mdxType:"Switch"},"Close On Escape"))))),Object(c.b)(s.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(s.M,{horizontal:"center",mdxType:"Row"},Object(c.b)(s.i,{xs:12,sm:4,mdxType:"Col"},Object(c.b)(s.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(s.x,{type:"text",value:d,label:"Title",autoComplete:"off",onChange:function(e,n){return r(n)},mdxType:"Input"}))),Object(c.b)(s.i,{xs:12,sm:4,mdxType:"Col"},Object(c.b)(s.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(s.x,{type:"text",value:b,label:"Header",autoComplete:"off",placeholder:"Components, such as in footer",onChange:function(e,n){return g(n)},mdxType:"Input"}))),Object(c.b)(s.i,{xs:12,sm:4,mdxType:"Col"},Object(c.b)(s.N,{padding:"10px 0",mdxType:"Segment"},Object(c.b)(s.O,{value:w,label:"Content Justify",onChange:function(e,n){return k(n)},mdxType:"Select"},Object(c.b)("option",{value:"flex-start"},"flex-start"),Object(c.b)("option",{value:"center"},"center"),Object(c.b)("option",{value:"flex-end"},"flex-end")))))),Object(c.b)(s.N,{padding:"20px 0",mdxType:"Segment"},Object(c.b)(s.e,{color:"primary",onClick:function(){return l(!0)},mdxType:"Button"},"Open Modal")))),Object(c.b)(s.F,{title:d,header:b,opened:t,openedCallback:l,closeOnEscape:O,contentJustify:w,unblockScrolling:f,styles:{position:"absolute"},overlayProps:{styles:{position:"absolute"}},footerProps:{styles:{position:"absolute",textAlign:"center"}},footer:Object(c.b)(s.e,{onClick:function(){return l(!1)},mdxType:"Button"},"Close Modal"),mdxType:"Modal"},Object(c.b)(s.k,{sm:!0,mdxType:"Container"},Object(c.b)(s.J,{mdxType:"Placeholder"},Object(c.b)("iframe",{width:"100%",height:"325",src:"https://www.youtube-nocookie.com/embed/oyTZ267Xg70?autoplay=true&volume=0.3&start=4",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))})),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)(i.d,{of:s.F,mdxType:"Props"}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Modal/Modal.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=components-modal-modal.f51c347d9947b731052f.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/ExpansionPanel/ExpansionPanel.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),d=t.n(i),l=t("./node_modules/@mdx-js/react/dist/esm.js"),p=t("./node_modules/docz/dist/index.esm.js"),r=t("./src/components/index.js"),m=t("./src/utils/index.js"),c={};function u(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(l.b)("wrapper",Object.assign({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"expansion-panel"},"Expansion Panel"),Object(l.b)("h3",{id:"a-simple-component-to-help-out-with-expansion-panel-stuffs"},"A simple component to help out with Expansion Panel stuffs."),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)(p.c,{__position:0,__code:'() => {\n  // import { ExpansionPanel } from \'aphrodite-react\';\n  return (\n    <ExpansionPanel\n      header={\n        <Segment margin="0" padding="0">\n          Expansion panel 1\n        </Segment>\n      }\n    >\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n      malesuada lacus ex, sit amet blandit leo lobortis eget.\n    </ExpansionPanel>\n  )\n}',__scope:{props:this?this.props:t,useState:i.useState,Playground:p.c,Props:p.d,ExpansionPanel:r.o,Segment:r.N,Row:r.M,Col:r.i,Button:r.e,colors:m.b},mdxType:"Playground"},(function(){return Object(l.b)(r.o,{header:Object(l.b)(r.N,{margin:"0",padding:"0",mdxType:"Segment"},"Expansion panel 1"),mdxType:"ExpansionPanel"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.")})),Object(l.b)("h2",{id:"example-with-custom-styles"},"Example with custom styles"),Object(l.b)(p.c,{__position:1,__code:"() => {\n  const headerStyles = {\n    borderRadius: '10px',\n    background: colors.get('bamboo', 'original'),\n    color: '#fff',\n    '&:hover': {\n      background: colors.get('bamboo'),\n    },\n  }\n  const styles = {\n    borderRadius: '10px',\n    background: colors.get('primary'),\n  }\n\n  return (\n    <ExpansionPanel\n      styles={styles}\n      headerStyles={headerStyles}\n      header={\n        <Segment margin=\"0\" padding=\"0 20px\">\n          with custom styles\n        </Segment>\n      }\n    >\n      <Segment margin=\"0\" padding=\"20px\">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse\n        malesuada lacus ex, sit amet blandit leo lobortis eget.\n      </Segment>\n    </ExpansionPanel>\n  )\n}",__scope:{props:this?this.props:t,useState:i.useState,Playground:p.c,Props:p.d,ExpansionPanel:r.o,Segment:r.N,Row:r.M,Col:r.i,Button:r.e,colors:m.b},mdxType:"Playground"},(function(){var e={borderRadius:"10px",background:m.b.get("bamboo","original"),color:"#fff","&:hover":{background:m.b.get("bamboo")}},n={borderRadius:"10px",background:m.b.get("primary")};return Object(l.b)(r.o,{styles:n,headerStyles:e,header:Object(l.b)(r.N,{margin:"0",padding:"0 20px",mdxType:"Segment"},"with custom styles"),mdxType:"ExpansionPanel"},Object(l.b)(r.N,{margin:"0",padding:"20px",mdxType:"Segment"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))})),Object(l.b)("h2",{id:"with-a-advanced-state-managament"},"With a advanced state managament"),Object(l.b)(p.c,{__position:2,__code:'() => {\n  const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]\n  const [openedPanels, setOpenedPanels] = useState([])\n\n  /**\n   * Change opened status of all panels\n   */\n  function handleExpandedAll() {\n    if (openedPanels.length) {\n      setOpenedPanels([])\n\n      return\n    }\n\n    setOpenedPanels(items.map(item => item.id))\n  }\n\n  /**\n   * Validate if has any expanded panel item\n   *\n   * @param {any} item\n   */\n  function handleHasOpened(item) {\n    if (openedPanels.includes(item)) {\n      const openedItems = openedPanels.filter(panel => panel !== item)\n\n      setOpenedPanels(openedItems)\n\n      return\n    }\n\n    setOpenedPanels([...openedPanels, item])\n  }\n\n  return (\n    <>\n      <Row horizontal="center">\n        <Col sm={4}>\n          <Button block onClick={handleExpandedAll}>\n            {`${openedPanels.length ? \'Close\' : \'Open\'} all`}\n          </Button>\n        </Col>\n      </Row>\n      <Row>\n        {items.map((item, i) => (\n          <ExpansionPanel\n            key={i}\n            expanded={openedPanels.includes(item.id)}\n            expandedCallback={() => handleHasOpened(item.id)}\n            styles={{ marginBottom: \'15px\' }}\n            header={\n              <Segment margin="0" padding="0">\n                Expansion panel {item.id}\n              </Segment>\n            }\n          >\n            <Segment margin="0" padding="0">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis\n              eget.\n            </Segment>\n          </ExpansionPanel>\n        ))}\n      </Row>\n    </>\n  )\n}',__scope:{props:this?this.props:t,useState:i.useState,Playground:p.c,Props:p.d,ExpansionPanel:r.o,Segment:r.N,Row:r.M,Col:r.i,Button:r.e,colors:m.b},mdxType:"Playground"},(function(){var e=[{id:1},{id:2},{id:3},{id:4},{id:5}],n=Object(i.useState)([]),t=Object(o.a)(n,2),s=t[0],p=t[1];return Object(l.b)(d.a.Fragment,null,Object(l.b)(r.M,{horizontal:"center",mdxType:"Row"},Object(l.b)(r.i,{sm:4,mdxType:"Col"},Object(l.b)(r.e,{block:!0,onClick:function(){s.length?p([]):p(e.map((function(e){return e.id})))},mdxType:"Button"},"".concat(s.length?"Close":"Open"," all")))),Object(l.b)(r.M,{mdxType:"Row"},e.map((function(e,n){return Object(l.b)(r.o,{key:n,expanded:s.includes(e.id),expandedCallback:function(){return function(e){if(s.includes(e)){var n=s.filter((function(n){return n!==e}));p(n)}else p([].concat(Object(a.a)(s),[e]))}(e.id)},styles:{marginBottom:"15px"},header:Object(l.b)(r.N,{margin:"0",padding:"0",mdxType:"Segment"},"Expansion panel ",e.id),mdxType:"ExpansionPanel"},Object(l.b)(r.N,{margin:"0",padding:"0",mdxType:"Segment"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))}))))})),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)(p.d,{of:r.o,mdxType:"Props"}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ExpansionPanel/ExpansionPanel.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=components-expansion-panel-expansion-panel.1492a209a91b4f0f7e9a.js.map
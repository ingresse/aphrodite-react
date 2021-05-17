(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Grid/grid.mdx":function(n,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return a}));var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/esm.js")),r=o("./node_modules/docz/dist/index.esm.js"),m=o("./src/components/index.js"),d=o("./src/utils/index.js"),i=o("./src/constants/index.js"),b={};function a(n){var e=n.components,o=Object(s.a)(n,["components"]);return Object(l.b)("wrapper",Object.assign({},b,o,{components:e,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"grid"},"Grid"),Object(l.b)("h3",{id:"align-the-components-with-aphrodite-standards"},"Align the components with Aphrodite standards"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},'import { Container, Row, Col } from \'@ingresse/aphrodite\';\n...\n<Container>\n    <Row>\n        <Col xs="12" sm="6">\n            YOUR CONTENT HERE\n        </Col>\n    </Row>\n</Container>\n')),Object(l.b)("h2",{id:"container"},"Container"),Object(l.b)("h4",{id:"we-use-to-delimitate-the-content-area-centralizing-this-block-in-the-screen"},"We use to delimitate the content area, centralizing this block in the screen."),Object(l.b)("p",null,"..."),Object(l.b)(r.d,{of:m.m,mdxType:"Props"}),Object(l.b)(r.c,{__position:1,__code:"() => {\n  const containerExample = {\n    color: colors.get('mercury', 'dark'),\n    background: colors.get('mercury', 'crystal'),\n    borderRadius: RADIUS + GRID.UNIT,\n    marginTop: '20px',\n    marginBottom: '20px',\n    paddingTop: '15px',\n    paddingBottom: '20px',\n  }\n\n  const contentExample = {\n    boxSizing: 'border-box',\n    background: colors.get('smoke'),\n    borderRadius: RADIUS + GRID.UNIT,\n\n    margin: '15px 0 0',\n    padding: '15px 20px',\n  }\n\n  return (\n    <div>\n      <Container xl styles={containerExample}>\n        Container <code>XL</code> maximum width is{' '}\n        <strong>{GRID.CONTAINER.XL + GRID.UNIT}</strong>.\n        <div style={contentExample}>\n          And the content maximum width is{' '}\n          <strong>\n            {GRID.CONTAINER.XL - GRID.CONTAINER_PADDING * 2 + GRID.UNIT}\n          </strong>\n          .\n        </div>\n      </Container>\n\n      <Container styles={containerExample}>\n        Container <strong>DEFAULT</strong> or <code>LG</code> maximum width is{' '}\n        <strong>{GRID.CONTAINER + GRID.UNIT}</strong>.\n        <div style={contentExample}>\n          And the content maximum width is{' '}\n          <strong>\n            {GRID.CONTAINER - GRID.CONTAINER_PADDING * 2 + GRID.UNIT}\n          </strong>\n          .\n        </div>\n      </Container>\n\n      <Container md styles={containerExample}>\n        Container <code>MD</code> maximum width is{' '}\n        <strong>{GRID.CONTAINER.MD + GRID.UNIT}</strong>.\n        <div style={contentExample}>\n          And the content maximum width is{' '}\n          <strong>\n            {GRID.CONTAINER.MD - GRID.CONTAINER_PADDING * 2 + GRID.UNIT}\n          </strong>\n          .\n        </div>\n      </Container>\n\n      <Container sm styles={containerExample}>\n        Container <code>SM</code> maximum width is{' '}\n        <strong>{GRID.CONTAINER.SM + GRID.UNIT}</strong>.\n        <div style={contentExample}>\n          And the content maximum width is{' '}\n          <strong>\n            {GRID.CONTAINER.SM - GRID.CONTAINER_PADDING * 2 + GRID.UNIT}\n          </strong>\n          .\n        </div>\n      </Container>\n\n      <Container xs styles={containerExample}>\n        Container <code>XS</code> maximum width is{' '}\n        <strong>{GRID.CONTAINER.XS + GRID.UNIT}</strong>.\n        <div style={contentExample}>\n          And the content maximum width is{' '}\n          <strong>\n            {GRID.CONTAINER.XS - GRID.CONTAINER_PADDING * 2 + GRID.UNIT}\n          </strong>\n          .\n        </div>\n      </Container>\n\n      <Container\n        xs\n        noPadding\n        styles={{\n          ...containerExample,\n          border: `1px solid ${colors.get('mercury', 'dark')}`,\n        }}\n      >\n        noPadding Example\n      </Container>\n    </div>\n  )\n}",__scope:{props:this?this.props:o,Playground:r.c,Props:r.d,Container:m.m,Row:m.Z,Col:m.k,colors:d.b,GRID:i.b,RADIUS:i.e},mdxType:"Playground"},(function(){var n={color:d.b.get("mercury","dark"),background:d.b.get("mercury","crystal"),borderRadius:i.e+i.b.UNIT,marginTop:"20px",marginBottom:"20px",paddingTop:"15px",paddingBottom:"20px"},e={boxSizing:"border-box",background:d.b.get("smoke"),borderRadius:i.e+i.b.UNIT,margin:"15px 0 0",padding:"15px 20px"};return Object(l.b)("div",null,Object(l.b)(m.m,{xl:!0,styles:n,mdxType:"Container"},"Container ",Object(l.b)("code",null,"XL")," maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER.XL+i.b.UNIT),".",Object(l.b)("div",{style:e},"And the content maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER.XL-2*i.b.CONTAINER_PADDING+i.b.UNIT),".")),Object(l.b)(m.m,{styles:n,mdxType:"Container"},"Container ",Object(l.b)("strong",null,"DEFAULT")," or ",Object(l.b)("code",null,"LG")," maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER+i.b.UNIT),".",Object(l.b)("div",{style:e},"And the content maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER-2*i.b.CONTAINER_PADDING+i.b.UNIT),".")),Object(l.b)(m.m,{md:!0,styles:n,mdxType:"Container"},"Container ",Object(l.b)("code",null,"MD")," maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER.MD+i.b.UNIT),".",Object(l.b)("div",{style:e},"And the content maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER.MD-2*i.b.CONTAINER_PADDING+i.b.UNIT),".")),Object(l.b)(m.m,{sm:!0,styles:n,mdxType:"Container"},"Container ",Object(l.b)("code",null,"SM")," maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER.SM+i.b.UNIT),".",Object(l.b)("div",{style:e},"And the content maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER.SM-2*i.b.CONTAINER_PADDING+i.b.UNIT),".")),Object(l.b)(m.m,{xs:!0,styles:n,mdxType:"Container"},"Container ",Object(l.b)("code",null,"XS")," maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER.XS+i.b.UNIT),".",Object(l.b)("div",{style:e},"And the content maximum width is ",Object(l.b)("strong",null,i.b.CONTAINER.XS-2*i.b.CONTAINER_PADDING+i.b.UNIT),".")),Object(l.b)(m.m,{xs:!0,noPadding:!0,styles:Object(t.a)(Object(t.a)({},n),{},{border:"1px solid ".concat(d.b.get("mercury","dark"))}),mdxType:"Container"},"noPadding Example"))})),Object(l.b)("h2",{id:"row--column"},"Row & Column"),Object(l.b)("h4",{id:"based-in-flexboxgrid-awesome-system"},"Based in ",Object(l.b)("a",{parentName:"h4",href:"http://flexboxgrid.com/"},"FlexboxGrid")," awesome system."),Object(l.b)("p",null,"..."),Object(l.b)(r.d,{of:m.Z,mdxType:"Props"}),Object(l.b)(r.d,{of:m.k,mdxType:"Props"}),Object(l.b)("h3",{id:"example-usage"},"Example usage"),Object(l.b)(r.c,{__position:3,__code:'() => {\n  // DON\'T DO THIS\n  const containerExample = {\n    color: colors.get(\'mercury\', \'dark\'),\n    background: colors.get(\'mercury\', \'crystal\'),\n    borderRadius: RADIUS + GRID.UNIT,\n    marginTop: \'10px\',\n    marginBottom: \'10px\',\n\n    textAlign: \'center\',\n  }\n\n  const rowsExample = {\n    paddingTop: \'5px\',\n    paddingBottom: \'5px\',\n    borderRadius: RADIUS + GRID.UNIT,\n    overflow: \'hidden\',\n  }\n\n  const columnsExample = {\n    color: colors.get(\'white\'),\n    background: colors.get(\'mint\'),\n\n    marginTop: \'5px\',\n    marginBottom: \'5px\',\n\n    paddingTop: \'20px\',\n    paddingBottom: \'20px\',\n    paddingRight: 0,\n    paddingLeft: 0,\n\n    borderRight: `${GRID.COLUMNS_PADDING}px solid ${colors.get(\n      \'mint\',\n      \'dark\',\n    )}`,\n    borderLeft: `${GRID.COLUMNS_PADDING}px solid ${colors.get(\n      \'mint\',\n      \'dark\',\n    )}`,\n  }\n\n  return (\n    <Container fluid styles={containerExample}>\n      <Row styles={rowsExample}>\n        <Col xs="6" sm="7" md="8" lg="9" xl="10" styles={columnsExample}>\n          Column\n          <br />\n          xs="6" sm="7"\n          <br />\n          md="8"\n          <br />\n          lg="9" xl="10"\n        </Col>\n        <Col xs="6" sm="5" md="4" lg="3" xl="2" styles={columnsExample}>\n          Column\n          <br />\n          xs="6" sm="5"\n          <br />\n          md="4"\n          <br />\n          lg="3" xl="2"\n        </Col>\n\n        <Col sm="4" styles={columnsExample}>\n          Column sm="4"\n        </Col>\n        <Col sm="8" styles={columnsExample}>\n          Column sm="8"\n        </Col>\n\n        <Col xs="2" styles={columnsExample}>\n          Column xs="2"\n        </Col>\n        <Col xs="2" styles={columnsExample}>\n          Column xs="2"\n        </Col>\n        <Col xs="2" styles={columnsExample}>\n          Column xs="2"\n        </Col>\n        <Col xs="2" styles={columnsExample}>\n          Column xs="2"\n        </Col>\n        <Col xs="2" styles={columnsExample}>\n          Column xs="2"\n        </Col>\n        <Col xs="2" styles={columnsExample}>\n          Column xs="2"\n        </Col>\n      </Row>\n    </Container>\n  )\n}',__scope:{props:this?this.props:o,Playground:r.c,Props:r.d,Container:m.m,Row:m.Z,Col:m.k,colors:d.b,GRID:i.b,RADIUS:i.e},style:{padding:"0 20px"},mdxType:"Playground"},(function(){var n={color:d.b.get("mercury","dark"),background:d.b.get("mercury","crystal"),borderRadius:i.e+i.b.UNIT,marginTop:"10px",marginBottom:"10px",textAlign:"center"},e={paddingTop:"5px",paddingBottom:"5px",borderRadius:i.e+i.b.UNIT,overflow:"hidden"},o={color:d.b.get("white"),background:d.b.get("mint"),marginTop:"5px",marginBottom:"5px",paddingTop:"20px",paddingBottom:"20px",paddingRight:0,paddingLeft:0,borderRight:"".concat(i.b.COLUMNS_PADDING,"px solid ").concat(d.b.get("mint","dark")),borderLeft:"".concat(i.b.COLUMNS_PADDING,"px solid ").concat(d.b.get("mint","dark"))};return Object(l.b)(m.m,{fluid:!0,styles:n,mdxType:"Container"},Object(l.b)(m.Z,{styles:e,mdxType:"Row"},Object(l.b)(m.k,{xs:"6",sm:"7",md:"8",lg:"9",xl:"10",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="6" sm="7"',Object(l.b)("br",null),'md="8"',Object(l.b)("br",null),'lg="9" xl="10"'),Object(l.b)(m.k,{xs:"6",sm:"5",md:"4",lg:"3",xl:"2",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="6" sm="5"',Object(l.b)("br",null),'md="4"',Object(l.b)("br",null),'lg="3" xl="2"'),Object(l.b)(m.k,{sm:"4",styles:o,mdxType:"Col"},'Column sm="4"'),Object(l.b)(m.k,{sm:"8",styles:o,mdxType:"Col"},'Column sm="8"'),Object(l.b)(m.k,{xs:"2",styles:o,mdxType:"Col"},'Column xs="2"'),Object(l.b)(m.k,{xs:"2",styles:o,mdxType:"Col"},'Column xs="2"'),Object(l.b)(m.k,{xs:"2",styles:o,mdxType:"Col"},'Column xs="2"'),Object(l.b)(m.k,{xs:"2",styles:o,mdxType:"Col"},'Column xs="2"'),Object(l.b)(m.k,{xs:"2",styles:o,mdxType:"Col"},'Column xs="2"'),Object(l.b)(m.k,{xs:"2",styles:o,mdxType:"Col"},'Column xs="2"')))})),Object(l.b)("h3",{id:"ordering"},"Ordering"),Object(l.b)(r.c,{__position:4,__code:'() => {\n  // Example custom styles\n  const containerExample = {\n    color: colors.get(\'mercury\', \'dark\'),\n    background: colors.get(\'mercury\', \'crystal\'),\n    borderRadius: RADIUS + GRID.UNIT,\n    marginTop: \'10px\',\n    marginBottom: \'10px\',\n\n    paddingTop: \'15px\',\n\n    textAlign: \'center\',\n  }\n\n  const rowsExample = {\n    paddingTop: \'5px\',\n    paddingBottom: \'5px\',\n    borderRadius: RADIUS + GRID.UNIT,\n    overflow: \'hidden\',\n  }\n\n  const columnsExample = {\n    color: colors.get(\'white\'),\n    background: colors.get(\'mint\'),\n\n    marginTop: \'5px\',\n    marginBottom: \'5px\',\n\n    paddingTop: \'20px\',\n    paddingBottom: \'20px\',\n    paddingRight: 0,\n    paddingLeft: 0,\n\n    borderRight: `${GRID.COLUMNS_PADDING}px solid ${colors.get(\n      \'mint\',\n      \'dark\',\n    )}`,\n    borderLeft: `${GRID.COLUMNS_PADDING}px solid ${colors.get(\n      \'mint\',\n      \'dark\',\n    )}`,\n  }\n\n  return (\n    <Container fluid styles={containerExample}>\n      Regular\n      <Row styles={rowsExample}>\n        <Col xs="12" sm="4" first="xs" last="sm" styles={columnsExample}>\n          Column\n          <br />\n          xs="12" sm="4"\n          <br />\n          first="xs" last="sm"\n        </Col>\n        <Col xs="12" sm="8" first="sm" last="xs" styles={columnsExample}>\n          Column\n          <br />\n          xs="12" sm="8"\n          <br />\n          first="sm" last="xs"\n        </Col>\n      </Row>\n      <br />\n      Reverse\n      <Row reverse styles={rowsExample}>\n        <Col xs="12" sm="4" first="xs" styles={columnsExample}>\n          Column\n          <br />\n          xs="12" sm="4"\n          <br />\n          first="xs"\n        </Col>\n\n        <Col xs="12" sm="8" last="xs" styles={columnsExample}>\n          Column\n          <br />\n          xs="12" sm="8"\n          <br />\n          last="xs"\n        </Col>\n      </Row>\n    </Container>\n  )\n}',__scope:{props:this?this.props:o,Playground:r.c,Props:r.d,Container:m.m,Row:m.Z,Col:m.k,colors:d.b,GRID:i.b,RADIUS:i.e},mdxType:"Playground"},(function(){var n={color:d.b.get("mercury","dark"),background:d.b.get("mercury","crystal"),borderRadius:i.e+i.b.UNIT,marginTop:"10px",marginBottom:"10px",paddingTop:"15px",textAlign:"center"},e={paddingTop:"5px",paddingBottom:"5px",borderRadius:i.e+i.b.UNIT,overflow:"hidden"},o={color:d.b.get("white"),background:d.b.get("mint"),marginTop:"5px",marginBottom:"5px",paddingTop:"20px",paddingBottom:"20px",paddingRight:0,paddingLeft:0,borderRight:"".concat(i.b.COLUMNS_PADDING,"px solid ").concat(d.b.get("mint","dark")),borderLeft:"".concat(i.b.COLUMNS_PADDING,"px solid ").concat(d.b.get("mint","dark"))};return Object(l.b)(m.m,{fluid:!0,styles:n,mdxType:"Container"},"Regular",Object(l.b)(m.Z,{styles:e,mdxType:"Row"},Object(l.b)(m.k,{xs:"12",sm:"4",first:"xs",last:"sm",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="12" sm="4"',Object(l.b)("br",null),'first="xs" last="sm"'),Object(l.b)(m.k,{xs:"12",sm:"8",first:"sm",last:"xs",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="12" sm="8"',Object(l.b)("br",null),'first="sm" last="xs"')),Object(l.b)("br",null),"Reverse",Object(l.b)(m.Z,{reverse:!0,styles:e,mdxType:"Row"},Object(l.b)(m.k,{xs:"12",sm:"4",first:"xs",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="12" sm="4"',Object(l.b)("br",null),'first="xs"'),Object(l.b)(m.k,{xs:"12",sm:"8",last:"xs",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="12" sm="8"',Object(l.b)("br",null),'last="xs"')))})),Object(l.b)("h3",{id:"horizontal-alignment"},"Horizontal Alignment"),Object(l.b)(r.c,{__position:5,__code:"() => {\n  // Examples\n  const containerExample = {\n    color: colors.get('mercury', 'dark'),\n    background: colors.get('mercury', 'crystal'),\n    borderRadius: RADIUS + GRID.UNIT,\n    marginTop: '10px',\n    marginBottom: '10px',\n\n    paddingTop: '15px',\n\n    textAlign: 'center',\n  }\n\n  const rowsExample = {\n    paddingTop: '5px',\n    paddingBottom: '5px',\n    borderRadius: RADIUS + GRID.UNIT,\n    overflow: 'hidden',\n  }\n\n  const columnsExample = {\n    color: colors.get('white'),\n    background: colors.get('mint'),\n\n    marginTop: '5px',\n    marginBottom: '5px',\n\n    paddingTop: '20px',\n    paddingBottom: '20px',\n    paddingRight: 0,\n    paddingLeft: 0,\n\n    borderRight: `${GRID.COLUMNS_PADDING}px solid ${colors.get(\n      'mint',\n      'dark',\n    )}`,\n    borderLeft: `${GRID.COLUMNS_PADDING}px solid ${colors.get(\n      'mint',\n      'dark',\n    )}`,\n  }\n\n  return (\n    <Container fluid styles={containerExample}>\n      <strong>Left</strong>, Center or Right\n      <Row styles={rowsExample}>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n      </Row>\n      <Row horizontal=\"center\" styles={rowsExample}>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n      </Row>\n      <Row horizontal=\"end\" styles={rowsExample}>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n      </Row>\n    </Container>\n  )\n}",__scope:{props:this?this.props:o,Playground:r.c,Props:r.d,Container:m.m,Row:m.Z,Col:m.k,colors:d.b,GRID:i.b,RADIUS:i.e},style:{padding:"0 20px"},mdxType:"Playground"},(function(){var n={color:d.b.get("mercury","dark"),background:d.b.get("mercury","crystal"),borderRadius:i.e+i.b.UNIT,marginTop:"10px",marginBottom:"10px",paddingTop:"15px",textAlign:"center"},e={paddingTop:"5px",paddingBottom:"5px",borderRadius:i.e+i.b.UNIT,overflow:"hidden"},o={color:d.b.get("white"),background:d.b.get("mint"),marginTop:"5px",marginBottom:"5px",paddingTop:"20px",paddingBottom:"20px",paddingRight:0,paddingLeft:0,borderRight:"".concat(i.b.COLUMNS_PADDING,"px solid ").concat(d.b.get("mint","dark")),borderLeft:"".concat(i.b.COLUMNS_PADDING,"px solid ").concat(d.b.get("mint","dark"))};return Object(l.b)(m.m,{fluid:!0,styles:n,mdxType:"Container"},Object(l.b)("strong",null,"Left"),", Center or Right",Object(l.b)(m.Z,{styles:e,mdxType:"Row"},Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"'),Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"')),Object(l.b)(m.Z,{horizontal:"center",styles:e,mdxType:"Row"},Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"'),Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"')),Object(l.b)(m.Z,{horizontal:"end",styles:e,mdxType:"Row"},Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"'),Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"')))})),Object(l.b)("h3",{id:"vertical-alignment"},"Vertical Alignment"),Object(l.b)(r.c,{__position:6,__code:"() => {\n  // DON'T DO THIS\n  const containerExample = {\n    color: colors.get('mercury', 'dark'),\n    background: colors.get('mercury', 'crystal'),\n    borderRadius: RADIUS + GRID.UNIT,\n    marginTop: '10px',\n    marginBottom: '10px',\n\n    paddingTop: '15px',\n\n    textAlign: 'center',\n  }\n\n  const rowsExample = {\n    paddingTop: '5px',\n    paddingBottom: '5px',\n    borderRadius: RADIUS + GRID.UNIT,\n    overflow: 'hidden',\n  }\n\n  const columnsExample = {\n    color: colors.get('white'),\n    background: colors.get('mint'),\n\n    marginTop: '5px',\n    marginBottom: '5px',\n\n    paddingTop: '20px',\n    paddingBottom: '20px',\n    paddingRight: 0,\n    paddingLeft: 0,\n\n    borderRight: `${GRID.COLUMNS_PADDING}px solid ${colors.get(\n      'mint',\n      'dark',\n    )}`,\n    borderLeft: `${GRID.COLUMNS_PADDING}px solid ${colors.get(\n      'mint',\n      'dark',\n    )}`,\n  }\n\n  return (\n    <Container fluid styles={containerExample}>\n      Start, <strong>Middle</strong> or End\n      <Row vertical=\"start\" styles={rowsExample}>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n        <Col\n          xs=\"4\"\n          styles={Object.assign({ minHeight: '120px' }, columnsExample)}\n        >\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n      </Row>\n      <Row styles={rowsExample}>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n        <Col\n          xs=\"4\"\n          styles={Object.assign({ minHeight: '120px' }, columnsExample)}\n        >\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n        <Col xs=\"4\" styles={columnsExample}>\n          Column\n          <br />\n          xs=\"4\"\n        </Col>\n      </Row>\n      <Row vertical=\"end\" styles={rowsExample}>\n        <Col width=\"25%\" styles={columnsExample}>\n          Column\n          <br />\n          width=\"25%\"\n        </Col>\n        <Col styles={Object.assign({ minHeight: '120px' }, columnsExample)}>\n          Column\n          <br />\n          without sizes\n        </Col>\n        <Col width=\"160px\" styles={columnsExample}>\n          Column\n          <br />\n          width=\"160px\"\n        </Col>\n      </Row>\n    </Container>\n  )\n}",__scope:{props:this?this.props:o,Playground:r.c,Props:r.d,Container:m.m,Row:m.Z,Col:m.k,colors:d.b,GRID:i.b,RADIUS:i.e},style:{padding:"0 20px"},mdxType:"Playground"},(function(){var n={color:d.b.get("mercury","dark"),background:d.b.get("mercury","crystal"),borderRadius:i.e+i.b.UNIT,marginTop:"10px",marginBottom:"10px",paddingTop:"15px",textAlign:"center"},e={paddingTop:"5px",paddingBottom:"5px",borderRadius:i.e+i.b.UNIT,overflow:"hidden"},o={color:d.b.get("white"),background:d.b.get("mint"),marginTop:"5px",marginBottom:"5px",paddingTop:"20px",paddingBottom:"20px",paddingRight:0,paddingLeft:0,borderRight:"".concat(i.b.COLUMNS_PADDING,"px solid ").concat(d.b.get("mint","dark")),borderLeft:"".concat(i.b.COLUMNS_PADDING,"px solid ").concat(d.b.get("mint","dark"))};return Object(l.b)(m.m,{fluid:!0,styles:n,mdxType:"Container"},"Start, ",Object(l.b)("strong",null,"Middle")," or End",Object(l.b)(m.Z,{vertical:"start",styles:e,mdxType:"Row"},Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"'),Object(l.b)(m.k,{xs:"4",styles:Object.assign({minHeight:"120px"},o),mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"'),Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"')),Object(l.b)(m.Z,{styles:e,mdxType:"Row"},Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"'),Object(l.b)(m.k,{xs:"4",styles:Object.assign({minHeight:"120px"},o),mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"'),Object(l.b)(m.k,{xs:"4",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'xs="4"')),Object(l.b)(m.Z,{vertical:"end",styles:e,mdxType:"Row"},Object(l.b)(m.k,{width:"25%",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'width="25%"'),Object(l.b)(m.k,{styles:Object.assign({minHeight:"120px"},o),mdxType:"Col"},"Column",Object(l.b)("br",null),"without sizes"),Object(l.b)(m.k,{width:"160px",styles:o,mdxType:"Col"},"Column",Object(l.b)("br",null),'width="160px"')))})))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Grid/grid.mdx"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=components-grid-grid.911fe5238686a17028c0.js.map
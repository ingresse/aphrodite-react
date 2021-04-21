(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/components/Form/InputDateFallback/InputDateFallback.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/react/index.js"),o=n("./node_modules/@mdx-js/react/dist/esm.js"),b=n("./node_modules/docz/dist/index.esm.js"),i=n("./node_modules/dayjs/dayjs.min.js"),r=n.n(i),d=n("./src/components/index.js"),m={};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"form--input-date-fallback"},"Form | Input Date (Fallback)"),Object(o.b)("h3",{id:"a-simple-alternative-to-manage-input-date"},"A simple alternative to manage input date."),Object(o.b)("p",null,"It's used as fallback of DatePicker component."),Object(o.b)("p",null,"This component works with ",Object(o.b)("a",{parentName:"p",href:"https://day.js.org/"},"Day.js"),", which is a project dependency."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(b.c,{__position:0,__code:'() => {\n  const [example, setExample] = useState(\'\')\n  return (\n    <Row>\n      <Col as={Styled} xs={12} sm={6} padding="10px">\n        <div>Regular InputDateFallback</div>\n        <br />\n        <InputDateFallback\n          id="example"\n          value={example}\n          onChange={({ target }) => setExample(target.value)}\n          label="Type a date"\n        />\n        <br />\n        <div>\n          <strong>input value: </strong>\n          {JSON.stringify(example)}\n        </div>\n      </Col>\n    </Row>\n  )\n}',__scope:{props:this?this.props:n,memo:s.memo,useState:s.useState,Playground:b.c,Props:b.d,dayjs:r.a,InputDateFallback:d.D,Styled:d.eb,Row:d.Z,Col:d.k},mdxType:"Playground"},(function(){var e=Object(s.useState)(""),t=Object(a.a)(e,2),n=t[0],l=t[1];return Object(o.b)(d.Z,{mdxType:"Row"},Object(o.b)(d.k,{as:d.eb,xs:12,sm:6,padding:"10px",mdxType:"Col"},Object(o.b)("div",null,"Regular InputDateFallback"),Object(o.b)("br",null),Object(o.b)(d.D,{id:"example",value:n,onChange:function(e){var t=e.target;return l(t.value)},label:"Type a date",mdxType:"InputDateFallback"}),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("strong",null,"input value: "),JSON.stringify(n))))})),Object(o.b)("h2",{id:"minimum-date"},"Minimum Date"),Object(o.b)(b.c,{__position:1,__code:'() => {\n  const min = dayjs().add(30, \'days\')\n  const today = dayjs()\n  const [example, setExample] = useState(today)\n  return (\n    <Row vertical="start">\n      <Col as={Styled} xs={12} sm={6} padding="10px">\n        <div>Minimum: {min.format(\'YYYY-MM-DD\')}</div>\n        <br />\n        <InputDateFallback\n          id="example2"\n          value={example}\n          onChange={({ target }) => setExample(target.value)}\n          label="Type a date"\n          min={min}\n        />\n        <br />\n        <div>\n          <strong>input value: </strong>\n          {JSON.stringify(example)}\n        </div>\n      </Col>\n    </Row>\n  )\n}',__scope:{props:this?this.props:n,memo:s.memo,useState:s.useState,Playground:b.c,Props:b.d,dayjs:r.a,InputDateFallback:d.D,Styled:d.eb,Row:d.Z,Col:d.k},mdxType:"Playground"},(function(){var e=r()().add(30,"days"),t=r()(),n=Object(s.useState)(t),l=Object(a.a)(n,2),b=l[0],i=l[1];return Object(o.b)(d.Z,{vertical:"start",mdxType:"Row"},Object(o.b)(d.k,{as:d.eb,xs:12,sm:6,padding:"10px",mdxType:"Col"},Object(o.b)("div",null,"Minimum: ",e.format("YYYY-MM-DD")),Object(o.b)("br",null),Object(o.b)(d.D,{id:"example2",value:b,onChange:function(e){var t=e.target;return i(t.value)},label:"Type a date",min:e,mdxType:"InputDateFallback"}),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("strong",null,"input value: "),JSON.stringify(b))))})),Object(o.b)("h2",{id:"maximum-date"},"Maximum Date"),Object(o.b)(b.c,{__position:2,__code:'() => {\n  const max = dayjs().subtract(30, \'days\')\n  const today = dayjs()\n  const [example, setExample] = useState(today)\n  return (\n    <Row vertical="start">\n      <Col as={Styled} xs={12} sm={6} padding="10px">\n        <div>Maximum: {max.format(\'YYYY-MM-DD\')}</div>\n        <br />\n        <InputDateFallback\n          id="example3"\n          value={example}\n          onChange={({ target }) => setExample(target.value)}\n          label="Type a date"\n          max={max}\n        />\n        <br />\n        <div>\n          <strong>input value: </strong>\n          {JSON.stringify(example)}\n        </div>\n      </Col>\n    </Row>\n  )\n}',__scope:{props:this?this.props:n,memo:s.memo,useState:s.useState,Playground:b.c,Props:b.d,dayjs:r.a,InputDateFallback:d.D,Styled:d.eb,Row:d.Z,Col:d.k},mdxType:"Playground"},(function(){var e=r()().subtract(30,"days"),t=r()(),n=Object(s.useState)(t),l=Object(a.a)(n,2),b=l[0],i=l[1];return Object(o.b)(d.Z,{vertical:"start",mdxType:"Row"},Object(o.b)(d.k,{as:d.eb,xs:12,sm:6,padding:"10px",mdxType:"Col"},Object(o.b)("div",null,"Maximum: ",e.format("YYYY-MM-DD")),Object(o.b)("br",null),Object(o.b)(d.D,{id:"example3",value:b,onChange:function(e){var t=e.target;return i(t.value)},label:"Type a date",max:e,mdxType:"InputDateFallback"}),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("strong",null,"input value: "),JSON.stringify(b))))})),Object(o.b)("h2",{id:"minimum-and-maximum"},"Minimum and Maximum"),Object(o.b)(b.c,{__position:3,__code:'() => {\n  const [min, setMin] = useState(\n    dayjs()\n      .subtract(2, \'days\')\n      .format(\'YYYY-MM-DD\'),\n  )\n  const [max, setMax] = useState(\n    dayjs()\n      .add(2, \'days\')\n      .format(\'YYYY-MM-DD\'),\n  )\n  return (\n    <Row vertical="start">\n      <Col as={Styled} xs={12} sm={6} padding="10px">\n        <InputDateFallback\n          id="exampleFrom"\n          value={min}\n          onChange={({ target }) => setMin(target.value)}\n          label="From"\n          max={max}\n        />\n        <br />\n        <div>\n          <strong>input value: </strong>\n          {JSON.stringify(min)}\n        </div>\n        <div>\n          <strong>max: </strong>\n          {JSON.stringify(max)}\n        </div>\n      </Col>\n      <Col as={Styled} xs={12} sm={6} padding="10px">\n        <InputDateFallback\n          id="exampleTo"\n          value={max}\n          onChange={({ target }) => setMax(target.value)}\n          label="To"\n          min={min}\n        />\n        <br />\n        <div>\n          <strong>input value: </strong>\n          {JSON.stringify(max)}\n        </div>\n        <div>\n          <strong>min: </strong>\n          {JSON.stringify(min)}\n        </div>\n      </Col>\n    </Row>\n  )\n}',__scope:{props:this?this.props:n,memo:s.memo,useState:s.useState,Playground:b.c,Props:b.d,dayjs:r.a,InputDateFallback:d.D,Styled:d.eb,Row:d.Z,Col:d.k},mdxType:"Playground"},(function(){var e=Object(s.useState)(r()().subtract(2,"days").format("YYYY-MM-DD")),t=Object(a.a)(e,2),n=t[0],l=t[1],b=Object(s.useState)(r()().add(2,"days").format("YYYY-MM-DD")),i=Object(a.a)(b,2),m=i[0],u=i[1];return Object(o.b)(d.Z,{vertical:"start",mdxType:"Row"},Object(o.b)(d.k,{as:d.eb,xs:12,sm:6,padding:"10px",mdxType:"Col"},Object(o.b)(d.D,{id:"exampleFrom",value:n,onChange:function(e){var t=e.target;return l(t.value)},label:"From",max:m,mdxType:"InputDateFallback"}),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("strong",null,"input value: "),JSON.stringify(n)),Object(o.b)("div",null,Object(o.b)("strong",null,"max: "),JSON.stringify(m))),Object(o.b)(d.k,{as:d.eb,xs:12,sm:6,padding:"10px",mdxType:"Col"},Object(o.b)(d.D,{id:"exampleTo",value:m,onChange:function(e){var t=e.target;return u(t.value)},label:"To",min:n,mdxType:"InputDateFallback"}),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("strong",null,"input value: "),JSON.stringify(m)),Object(o.b)("div",null,Object(o.b)("strong",null,"min: "),JSON.stringify(n))))})),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)(b.d,{of:d.D,mdxType:"Props"}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Form/InputDateFallback/InputDateFallback.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=components-form-input-date-fallback-input-date-fallback.ea29a8f5ffee93fb746b.js.map
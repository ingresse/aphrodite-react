(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/components/Form/TextArea/TextArea.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/react/index.js"),r=n("./node_modules/@mdx-js/react/dist/esm.js"),d=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/components/index.js");const p={};function m(e){let t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"form--textarea"},"Form | TextArea"),Object(r.b)("h3",{id:"form-text-area-component-styled"},"Form Text Area component styled."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)(d.c,{__position:0,__code:'<Segment padding="10px 0">\n  <TextArea label="A lot of words" />\n</Segment>',__scope:{props:this?this.props:n,useEffect:a.useEffect,useState:a.useState,Playground:d.c,Props:d.d,TextArea:c.W,Segment:c.S},mdxType:"Playground"},Object(r.b)(c.S,{padding:"10px 0",mdxType:"Segment"},Object(r.b)(c.W,{label:"A lot of words",mdxType:"TextArea"}))),Object(r.b)("h2",{id:"delayed"},"Delayed"),Object(r.b)(d.c,{__position:1,__code:"() => {\n  const [value, setValue] = useState('')\n  useEffect(() => {\n    setTimeout(() => {\n      setValue('aphrodite')\n    }, 2500)\n  }, [])\n\n  function handleChange(evt) {\n    setValue(evt.target.value)\n  }\n\n  return (\n    <Segment padding=\"10px 0\">\n      <TextArea\n        label=\"Big content goes here\"\n        value={value}\n        onChange={handleChange}\n      />\n    </Segment>\n  )\n}",__scope:{props:this?this.props:n,useEffect:a.useEffect,useState:a.useState,Playground:d.c,Props:d.d,TextArea:c.W,Segment:c.S},mdxType:"Playground"},()=>{const e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)(()=>{setTimeout(()=>{s("aphrodite")},2500)},[]),Object(r.b)(c.S,{padding:"10px 0",mdxType:"Segment"},Object(r.b)(c.W,{label:"Big content goes here",value:n,onChange:function(e){s(e.target.value)},mdxType:"TextArea"}))}),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)(d.d,{of:c.W,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Form/TextArea/TextArea.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=components-form-text-area-text-area.fa05da86aaf45a840a0f.js.map
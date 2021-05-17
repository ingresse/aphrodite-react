(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"./src/hooks/use-window-size/useWindowSize.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",(function(){return b}));var t,s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=o("./node_modules/react/index.js"),r=o("./node_modules/@mdx-js/react/dist/esm.js"),d=o("./node_modules/docz/dist/index.esm.js"),a=o("./src/constants/index.js"),c=o("./src/components/index.js"),m=o("./src/utils/index.js"),p=o("./src/hooks/use-window-size/useWindowSize.jsx"),u=(t="Title",{});function b(e){var n=e.components,o=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},u,o,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"hook--usewindowsize"},"Hook | useWindowSize"),Object(r.b)("h3",{id:"simple-hook-to-return-window-width-and-height"},"Simple hook to return window width and height"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"import {\n    useWindowSize,\n    H1,\n    H3,\n    Container,\n    Segment,\n} from '@ingresse/aphrodite';\n\nfunction Header() {\n    const {\n        xs,\n        sm,\n        md,\n        lg,\n        xl,\n        width,\n        height,\n    } = useWindowSize();\n\n    const Title = (xs ? H3 : H1);\n\n    return (\n        <Segment\n            as=\"header\"\n            padding={xs ? '20px 0' : '40px 0'}>\n            <Container>\n                <Title\n                    as=\"h1\">\n                    Sales Report\n                </Title>\n            </Container>\n        </Segment>\n    );\n}\n")),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)(d.c,{__position:0,__code:'() => {\n  const sizes = useWindowSize()\n  const { xs } = sizes\n  const Title = xs ? H3 : H1\n  return (\n    <Fragment>\n      <Segment\n        radius={5}\n        margin="0 0 20px"\n        padding="15px 20px"\n        background="smoke"\n        textColor="black"\n      >\n        <code>{JSON.stringify(sizes).replace(/,/g, \',\\n\')}</code>\n      </Segment>\n\n      <Segment\n        as="header"\n        radius={5}\n        textColor="inverse"\n        background="supernova"\n        padding={xs ? \'20px 0\' : \'40px 0\'}\n      >\n        <Container>\n          <Title margin="0">Component rendered based on hook values</Title>\n        </Container>\n      </Segment>\n    </Fragment>\n  )\n}',__scope:{props:this?this.props:o,Fragment:i.Fragment,Playground:d.c,SCREEN_SIZES:a.f,Container:c.m,H1:c.u,H3:c.w,Row:c.Z,Col:c.k,Segment:c.cb,colors:m.b,useWindowSize:p.a},mdxType:"Playground"},(function(){var e=Object(p.a)(),n=e.xs,o=n?c.w:c.u;return Object(r.b)(i.Fragment,{mdxType:"Fragment"},Object(r.b)(c.cb,{radius:5,margin:"0 0 20px",padding:"15px 20px",background:"smoke",textColor:"black",mdxType:"Segment"},Object(r.b)("code",null,JSON.stringify(e).replace(/,/g,",\n"))),Object(r.b)(c.cb,{as:"header",radius:5,textColor:"inverse",background:"supernova",padding:n?"20px 0":"40px 0",mdxType:"Segment"},Object(r.b)(c.m,{mdxType:"Container"},Object(r.b)(o,{margin:"0",mdxType:"Title"},"Component rendered based on hook values"))))})))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/hooks/use-window-size/useWindowSize.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=hooks-use-window-size-use-window-size.911fe5238686a17028c0.js.map
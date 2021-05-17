(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"./src/index.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/esm.js")),a={};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"aphrodite"},"Aphrodite"),Object(r.b)("h3",{id:"a-front-end-components-library-with-ingresses-styles-using-react-16-based-on-emotion"},"A front-end components library with Ingresse's styles, using ",Object(r.b)("inlineCode",{parentName:"h3"},"React")," 16, based on ",Object(r.b)("a",{parentName:"h3",href:"https://emotion.sh"},"Emotion"),"."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("h4",{id:"you-can-install-with-yarn-or-npm-in-your-app-project"},"You can install with Yarn or NPM in your App Project:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm i --save @ingresse/aphrodite\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"usage-example"},"Usage Example"),Object(r.b)("h4",{id:"re-export-the-aphrodite-tools-through-your-react-application-folder-structure"},"Re-export the Aphrodite tools through your React application folder structure."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"src/utils/index.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"export {\n    colors,\n} from '@ingresse/aphrodite';\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"src/components/index.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"export {\n    Button,\n    Container,\n    Segment,\n} from '@ingresse/aphrodite';\n")),Object(r.b)("h4",{id:"then-its-easy-to-use"},"Then, it's easy to use"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"src/App.jsx"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"/* Core Packages */\nimport React from 'react';\n\n/* Components */\nimport {\n    Button,\n    Container,\n    Segment,\n} from './components';\n\n/* Component Itself */\nfunction App() {\n    function handleClick(evt) {\n        console.log('button click', evt);\n    }\n\n    return (\n        <Container>\n            <Segment\n                textAlign=\"center\">\n                <Button onClick={handleClick}>\n                    Aphrodite Button\n                </Button>\n            </Segment>\n        </Container>\n    );\n}\n\n/* Exporting */\nexport default App;\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/index.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=index.911fe5238686a17028c0.js.map
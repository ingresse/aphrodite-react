(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"./src/components/Pagination/Pagination.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),c=t("./node_modules/@mdx-js/react/dist/esm.js"),r=t("./node_modules/docz/dist/index.esm.js"),d=t("./src/components/index.js"),b={};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"pagination"},"Pagination"),Object(c.b)("h3",{id:"a-styled-customization-of-awesome-library-rc-pagination"},"A styled customization of awesome library ",Object(c.b)("a",{parentName:"h3",href:"https://www.npmjs.com/package/rc-pagination"},"RC Pagination"),"."),Object(c.b)("h3",{id:"check-it-out-there-to-more-usage-details"},"Check it out there to more usage details."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)(r.c,{__position:0,__code:'() => {\n  const [timer, setTimer] = useState(null)\n  const [pagination, setPagination] = useState({\n    loading: false,\n    total: 50,\n    current: 5,\n    pageSize: 5,\n  })\n  /**\n   * Handle with Page changes,\n   * simulating a HTTP request delay\n   *\n   * @param {number} selectedPage\n   */\n  function handlePageChange(selectedPage = 1) {\n    console.log(\'Page Selected\', selectedPage)\n\n    clearTimeout(timer)\n\n    setPagination({\n      ...pagination,\n      loading: true,\n    })\n\n    setTimer(\n      setTimeout(() => {\n        setPagination({\n          ...pagination,\n          loading: false,\n          current: selectedPage,\n        })\n      }, 500),\n    )\n  }\n\n  return (\n    <Segment padding="40px 0">\n      <Text center bold>\n        Pagination state object\n      </Text>\n      <Text center margin="0">\n        {JSON.stringify(pagination)}\n      </Text>\n\n      <Pagination {...pagination} onChange={handlePageChange} />\n    </Segment>\n  )\n}',__scope:{props:this?this.props:t,useState:s.useState,useEffect:s.useEffect,Playground:r.c,Props:r.d,Pagination:d.V,Segment:d.cb,Text:d.gb},mdxType:"Playground"},(function(){var e=Object(s.useState)(null),n=Object(o.a)(e,2),t=n[0],i=n[1],r=Object(s.useState)({loading:!1,total:50,current:5,pageSize:5}),b=Object(o.a)(r,2),l=b[0],g=b[1];return Object(c.b)(d.cb,{padding:"40px 0",mdxType:"Segment"},Object(c.b)(d.gb,{center:!0,bold:!0,mdxType:"Text"},"Pagination state object"),Object(c.b)(d.gb,{center:!0,margin:"0",mdxType:"Text"},JSON.stringify(l)),Object(c.b)(d.V,Object.assign({},l,{onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;console.log("Page Selected",e),clearTimeout(t),g(Object(a.a)(Object(a.a)({},l),{},{loading:!0})),i(setTimeout((function(){g(Object(a.a)(Object(a.a)({},l),{},{loading:!1,current:e}))}),500))},mdxType:"Pagination"})))})),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)(r.d,{of:d.V,mdxType:"Props"}))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Pagination/Pagination.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=components-pagination-pagination.ea29a8f5ffee93fb746b.js.map
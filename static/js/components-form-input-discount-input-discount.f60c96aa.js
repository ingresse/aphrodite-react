(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/Form/InputDiscount/InputDiscount.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return r}));var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),i=t("./node_modules/@mdx-js/react/dist/esm.js"),u=t("./node_modules/docz/dist/index.esm.js"),a=t("./src/utils/index.js"),p=t("./src/components/index.js"),l={};function r(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"input-discount"},"Input Discount"),Object(i.b)("h3",{id:"inputnumeric-with-predefined-properties-to-discounts-scenery"},"InputNumeric with predefined properties to discount's scenery"),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(u.c,{__position:0,__code:'() => {\n  const [discount, setDiscount] = useState(0)\n  const [discountType, setDiscountType] = useState(\'choose\')\n  const [currencyLocale, setCurrencyLocale] = useState(\'pt-BR | BRL\')\n  const splitted = currencyLocale.split(\' | \')\n  const locale = splitted[0]\n  const currency = splitted[1]\n  const discountFixedPlaceholder = formatCurrency(\n    new Date().getFullYear(),\n    locale,\n    currency,\n  )\n  console.log(\'discount\', discount)\n\n  return (\n    <Container sm>\n      <Row horizontal="center" vertical="center">\n        <Col xs={12} sm={6}>\n          <Segment padding="10px 0">\n            <Select\n              id="ExampleInputDiscountType"\n              label="Discount Type"\n              onChange={({ target }) => {\n                setDiscountType(target.value)\n                setDiscount(0)\n              }}\n              value={discountType || \'\'}\n            >\n              <option value="choose">Select one option</option>\n              <option value="dynamic">Dynamic (Percentage)</option>\n              <option value="fixed">Fixed (Monetary/Currency)</option>\n            </Select>\n          </Segment>\n        </Col>\n        <Col xs={12} sm={6}>\n          <Segment padding="10px 0">\n            <Select\n              id="ExampleInputDiscountCurrencyLocale"\n              label="Discount Currency Locale"\n              onChange={({ target }) => setCurrencyLocale(target.value)}\n              value={currencyLocale}\n              disabled={discountType !== \'fixed\'}\n            >\n              <option value="pt-BR | BRL">pt-BR | BRL</option>\n              <option value="en-US | USD">en-US | USD</option>\n              <option value="en-EU | EUR">en-EU | EUR</option>\n            </Select>\n          </Segment>\n        </Col>\n        <Col xs={12} sm={6}>\n          <Segment padding="10px 0">\n            <InputDiscount\n              id="ExampleInputDiscount"\n              label="Discount Amount"\n              onChange={(e, newValue) => setDiscount(newValue)}\n              value={discount || \'\'}\n              disabled={discountType === \'choose\'}\n              placeholder={`Ex: ${\n                discountType === \'fixed\' ? discountFixedPlaceholder : \'15%\'\n              }`}\n              discountType={discountType}\n              locale={locale}\n              currency={currency}\n            />\n          </Segment>\n        </Col>\n      </Row>\n    </Container>\n  )\n}',__scope:{props:this?this.props:t,useState:s.useState,Playground:u.c,Props:u.d,formatCurrency:a.e,InputDiscount:p.E,Input:p.B,Select:p.db,Container:p.m,Segment:p.cb,Row:p.Z,Col:p.k},mdxType:"Playground"},(function(){var e=Object(s.useState)(0),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(s.useState)("choose"),l=Object(o.a)(u,2),r=l[0],d=l[1],b=Object(s.useState)("pt-BR | BRL"),m=Object(o.a)(b,2),y=m[0],x=m[1],j=y.split(" | "),g=j[0],D=j[1],O=Object(a.e)((new Date).getFullYear(),g,D);return console.log("discount",t),Object(i.b)(p.m,{sm:!0,mdxType:"Container"},Object(i.b)(p.Z,{horizontal:"center",vertical:"center",mdxType:"Row"},Object(i.b)(p.k,{xs:12,sm:6,mdxType:"Col"},Object(i.b)(p.cb,{padding:"10px 0",mdxType:"Segment"},Object(i.b)(p.db,{id:"ExampleInputDiscountType",label:"Discount Type",onChange:function(e){var n=e.target;d(n.value),c(0)},value:r||"",mdxType:"Select"},Object(i.b)("option",{value:"choose"},"Select one option"),Object(i.b)("option",{value:"dynamic"},"Dynamic (Percentage)"),Object(i.b)("option",{value:"fixed"},"Fixed (Monetary/Currency)")))),Object(i.b)(p.k,{xs:12,sm:6,mdxType:"Col"},Object(i.b)(p.cb,{padding:"10px 0",mdxType:"Segment"},Object(i.b)(p.db,{id:"ExampleInputDiscountCurrencyLocale",label:"Discount Currency Locale",onChange:function(e){var n=e.target;return x(n.value)},value:y,disabled:"fixed"!==r,mdxType:"Select"},Object(i.b)("option",{value:"pt-BR | BRL"},"pt-BR | BRL"),Object(i.b)("option",{value:"en-US | USD"},"en-US | USD"),Object(i.b)("option",{value:"en-EU | EUR"},"en-EU | EUR")))),Object(i.b)(p.k,{xs:12,sm:6,mdxType:"Col"},Object(i.b)(p.cb,{padding:"10px 0",mdxType:"Segment"},Object(i.b)(p.E,{id:"ExampleInputDiscount",label:"Discount Amount",onChange:function(e,n){return c(n)},value:t||"",disabled:"choose"===r,placeholder:"Ex: ".concat("fixed"===r?O:"15%"),discountType:r,locale:g,currency:D,mdxType:"InputDiscount"})))))})),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)(u.d,{of:p.E,mdxType:"Props"}))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Form/InputDiscount/InputDiscount.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=components-form-input-discount-input-discount.911fe5238686a17028c0.js.map
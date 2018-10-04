(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/Button/Button.mdx":function(o,e,A){"use strict";A.r(e);var t=A("./node_modules/react/index.js"),r=A.n(t),n=A("./node_modules/@mdx-js/tag/dist/index.js"),g=A("./node_modules/docz/dist/index.m.js"),c={display:"inline-block",width:"auto",margin:0,padding:"0 20px",cursor:"pointer",outline:0,border:"1px solid",fontSize:"16px",minWidth:"140px",borderRadius:"25px",textTransform:"uppercase",userSelect:"none","&:hover,&:focus,&:active,&:disabled":{outline:0}},l=A("./node_modules/react-emotion/dist/index.esm.js"),i={BLACK:"rgb(45, 45, 45)",WHITE:"rgb(255, 255, 255)",SMOKE:"rgb(248, 248, 248)",GREY_SMOKE:"rgb(238, 238, 238)",LIGHT_GREY:"rgb(212, 215, 217)",GREY:"rgb(157, 166, 173)",DARK_GREY:"rgb(122, 128, 133)",ORANGE:"rgb(252, 163, 17)",LIGHT_ORANGE:"rgb(255, 141, 80)",YELLOW:"rgb(255, 198, 30)",RED:"rgb(241, 51, 53)",GREEN:"rgb(96,198,89)",BLUE:"rgb(0, 165, 219)",PURPLE:"rgb(172, 108, 184)",LIGHT_PINK:"rgb(248, 130, 184)"},a=Object.assign({},i,{PRIMARY:i.BLUE,SECONDARY:i.ORANGE,ERROR:i.RED,WARNING:i.YELLOW,SUCCESS:i.GREEN,INVERSE:i.WHITE});function E(o){return(E="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"===typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function u(o,e){for(var A=0;A<e.length;A++){var t=e[A];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}function B(o,e){return!e||"object"!==E(e)&&"function"!==typeof e?function(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(o):e}function F(o){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function y(o,e){return(y=Object.setPrototypeOf||function(o,e){return o.__proto__=e,o})(o,e)}function d(o,e,A){return e in o?Object.defineProperty(o,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):o[e]=A,o}var C=Object(l.default)("button",{target:"e1mq6gx80"})(function(o){return function(o){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{},t=Object.keys(A);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(A).filter(function(o){return Object.getOwnPropertyDescriptor(A,o).enumerable}))),t.forEach(function(e){d(o,e,A[e])})}return o}({},o.styles,{borderColor:o.color?a[o.color.toUpperCase()]:a.PRIMARY,color:o.color?a[o.color.toUpperCase()]:a.PRIMARY,background:"transparent","&:disabled":{cursor:"not-allowed",color:a.GREY,borderColor:a.GREY}})}),w=function(o){function e(){return function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),B(this,F(e).apply(this,arguments))}var A,t,n;return function(o,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&y(o,e)}(e,r.a.Component),A=e,(t=[{key:"render",value:function(){return r.a.createElement(C,this.props,this.props.children)}}])&&u(A.prototype,t),n&&u(A,n),e}();function s(o){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"===typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function p(o,e){for(var A=0;A<e.length;A++){var t=e[A];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}function I(o,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(o):e}function m(o){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function h(o,e){return(h=Object.setPrototypeOf||function(o,e){return o.__proto__=e,o})(o,e)}function Y(o,e,A){return e in o?Object.defineProperty(o,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):o[e]=A,o}w.__docgenInfo={description:"",methods:[],displayName:"Bordered"};var D=Object(l.default)("button",{target:"e1bfgx1g0"})(function(o){return function(o){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{},t=Object.keys(A);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(A).filter(function(o){return Object.getOwnPropertyDescriptor(A,o).enumerable}))),t.forEach(function(e){Y(o,e,A[e])})}return o}({},o.styles,{color:o.color&&"white"!==o.color?a.WHITE:a.BLACK,background:o.color?a[o.color.toUpperCase()]:a.PRIMARY,borderColor:o.color?a[o.color.toUpperCase()]:a.PRIMARY,"&:disabled":{cursor:"not-allowed",color:a.GREY,background:a.LIGHT_GREY,borderColor:a.LIGHT_GREY}})}),K=function(o){function e(){return function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),I(this,m(e).apply(this,arguments))}var A,t,n;return function(o,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&h(o,e)}(e,r.a.Component),A=e,(t=[{key:"render",value:function(){return r.a.createElement(D,this.props,this.props.children)}}])&&p(A.prototype,t),n&&p(A,n),e}();function S(o){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"===typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}function O(o,e){for(var A=0;A<e.length;A++){var t=e[A];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(o,t.key,t)}}function L(o,e){return!e||"object"!==S(e)&&"function"!==typeof e?function(o){if(void 0===o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}(o):e}function b(o){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function Q(o,e){return(Q=Object.setPrototypeOf||function(o,e){return o.__proto__=e,o})(o,e)}K.__docgenInfo={description:"",methods:[],displayName:"Regular"};var k=function(o){function e(){return function(o,e){if(!(o instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),L(this,b(e).apply(this,arguments))}var A,t,n;return function(o,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),e&&Q(o,e)}(e,r.a.Component),A=e,(t=[{key:"render",value:function(){var o=this.props,e=o.block,A=o.bordered,t=o.size,n=Object.assign({},c);switch(e&&(n.display="block",n.width="100%"),t){case"xs":n.fontSize="9px",n.minHeight="20px",n.lineHeight="18px",n["@media (max-width: 767px)"]={minHeight:"30px",lineHeight:"28px"};break;case"sm":n.fontSize="13px",n.minHeight="30px",n.lineHeight="28px",n["@media (max-width: 767px)"]={minHeight:"40px",lineHeight:"38px"};break;default:n.minHeight="40px",n.lineHeight="38px",n["@media (max-width: 767px)"]={minHeight:"50px",lineHeight:"48px"}}return A?r.a.createElement(w,Object.assign({styles:n},this.props)):r.a.createElement(K,Object.assign({styles:n},this.props))}}])&&O(A.prototype,t),n&&O(A,n),e}();k.defaultProps={type:"button",disabled:!1,color:"primary",bordered:!1,block:!1,size:""};var z=k;function x(o,e){if(null==o)return{};var A,t,r=function(o,e){if(null==o)return{};var A,t,r={},n=Object.keys(o);for(t=0;t<n.length;t++)A=n[t],e.indexOf(A)>=0||(r[A]=o[A]);return r}(o,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);for(t=0;t<n.length;t++)A=n[t],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(o,A)&&(r[A]=o[A])}return r}k.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'button'",computed:!1},type:{name:"string"},required:!1,description:"Button Type.\nButton, Reset, Submit"},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Should the Button be disabled?"},color:{defaultValue:{value:"'primary'",computed:!1},type:{name:"string"},required:!1,description:"Renders the button using an alternative color.\nSecondary, Warning, Error, Success"},bordered:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Should the Button be bordered?"},block:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Should the Button be block?"},size:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Size of the button. Use the Button's xs or sm."}}};e.default=function(o){var e=o.components,A=x(o,["components"]);return r.a.createElement(n.MDXTag,{name:"wrapper",components:e},r.a.createElement(n.MDXTag,{name:"h1",components:e,props:{id:"button"}},"Button"),r.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"properties"}},"Properties"),r.a.createElement(g.PropsTable,{of:z}),r.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"sizes"}},"Sizes"),r.a.createElement(g.Playground,{__position:1,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAdg73CCJzHkN0TXaT04AEchASdah9DgQMBXtTVzWQuUFXNQMzF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsZm7Fh514gAWYT2AANmE0T1jAUCADEfWgRJeP4ZxDkRR1MHYAAFIR-CWIhqEoOAJMRFS6zUmhnAgWjLnYABGGSxPkVUg1QKipgAQTmFj2GjGDyBsKB0Ejdh5E5FixHCuMZHYVEmJgbhgGPejGOxeRd3rYAougWLggAMgq8ZEnmShmlKmK4u4Fr5TAUIAr7VB2nYAB-DYysjaNEquRrytQeQ433WQzE_MxYQ1Y4YDAMIoCmYakpSutGBCtc62TOCbmoMRxRSUIoFcAQpEOhCioO-CWXyNy-BAOAiHEZwogSDJroe1A7obG7HtcrL-CwOBxEvLA0VcdhPviWArskIH_qm3ba05X9XowrCs1wyRVGwICyB0UD9EMIx2ChwjHTxmg7F5easBpmDMBW86pn8WC_vikiPWRv6BaO7q_Kx9DMM-Ld6aFhCZeoICsBJ3QwIMCDjFMyVtlcNIGb5VACMWkMpT5silT8g2HTMygZksWr4BNodrYtRj5jwvyzHVxxUFRdwCF1u1Fpgu8AFVLEsXUADkAH1nEsABNAAZS9nBCOxY8T5PeeNUjPUC323fBVB1Yj-BaByTccPp9hGf1qDYOFWcC2z_m7wbi50GRtuunQfC69O87LpNz1-4ugRJBHy6KKLymK-zKYa_IC64DsFGYWhuh0DsI2CBwWfXXY_bpw3mNEoP-tz5Lb3oPYDwoFObYli8ARG8WdKQd51iJlsHBHbuPyL_rLAKYGVmKsV1B4dQWwd7-HyCkVAEUlBw3jknZw35C4AIsBAZo0Zb731PuuDB6V8rwBwCwWyF1kisXaLgnYgZCHnxASQ3E6BiwWCoR5PifEACkdCMGTX8oQuARYorhSejAfBh9CFxDgN0do4N2iIAIfQiwjC4A4CcgQFybl6xUIAJzKX_soi-qicBEDQAACRgBAFIhA2HygAEx8QMUo5RJioBoBgJY6xtj2EAA5nGSKMaogA2u0AAAqeFgsNoxRCwBaZhEwrgAHYFJJOEpydoABdMKZ8jGELMagLxNipi8VTE4kSYk8mEPcS6IphBeL2P8RUlx9DfItMIR4M02x3aBIAdI2Rb0FHtIwSYjRWjuh2PaB5ISIlDFVKIZlNRBS6lTDCu0MpAT5kqOIWompnirHFLWY0zZWyQnhMiRAaJsT4lcESewFJaSsAZOyaxXJWz6zLIObY2S5SHLvPPnslZpSml_K2W03p9DOkSm6egoxbNVoEEURCwROzTEWK-asqhMlflzKqW4jxKy1mphBbivJZyInZEueFa5CS8DJNSekrJOThnKM-d4kp8oACsvzKn_IsICjFskQW8vmeCwh_CWlYPCk_F-Ei8ldAIH0cw0ZGCt2fu3BZ2JsqqKQsAHA-qv5qN_nAJCO40EQolRChVSrwqMAnkcVR2qdm6v1TgQ1P9hwmvYGa3F_DLXq21MtBFplhwZBiPbGuKNSFBo5lbEcrz1wuwmRYXiHg_qgosGQ1wt9shXBWlAGRIqSx3yOCm-UQ4BSXUSBmm-Xdc1GniIW9cNDdhlvzU2w-Yjz68QcuCj2lM41hogPbW2rtq56yjb_Ud9sE0CPrMYUwh9Kar2nTgdcy6_pLHFDIggSxnBvDMaIJdetz5JquHG6dajURzhSGJdcC711w2GOdHIExuir0CMcWw2bYDoF6uuk99Ys05vQOe4cl6cBeEoFAO9h8H1LvYOKKMAg7BvpvjzPIBQQjmHiLQAQqBohsG6FQEta6EPOC2NQdAValgAHVLr63nEsS8AghACD3aEcgiJl4AfXCR4UYHrYQevQUWD594Pn0ps4Z9MUCTvp5p-mV7d_3HubXW0DIahN2zUVBmDsKLASfrFJmTr7Njc2FjfboLaVOScAxYFtgmbbacg8IPTc6DMmEfeMvYzQ0NpuFvUYOMi5PmYQu0Ow4M9gOqIGR2z64xGOeE2iUTZg-0umZoteFHNQvUFFkobGEtsJzzgHLIuedpaEw0MBUmehwIgHVtTRaq8vY-yrjXBaDpKbN1QpIfzCEGKLI-NQVrftAxixxpLSuftSud3Vd3WbL8FZKzJnV9WJlNbawjXrC2RFjbdbNGbAODpGE5H21qC0MArJdSnp7YbBB87jqO9fewuoE66lFCnJC3X9WSB-z98ro2enqwG7-x7AU7tw2IegVerETsvj69QD80ZjWbQiuuV1xqcCqLE_WJTAhHAlquMjz1Q2S19QcK997zhgmY_4wIN1lBg5zAyPYSkw1slXBe29j7OATKigaPqIKoo46ciLXTgBRPafQeFOTrnVOack7pwzpncJWcyPZ-wTnlOed84F0LkXRaPCaxSEIDqOReIw29hJSM74ccWHaBVRAwHf0KLYi03oKGZfdvlD8S0CNRjZBrefcXF8tfc-cDgAA4qKS8cci3nzxwTgTFPw9R5j3H9cShUucnNf22mUt556w61MLLa0ehLxXupteYFN6Ia1LvIr-91wzhPm7q1E4bWxmRfWRgIPsirz1QawkHrrYmoBnk4A7rafRXGvwvJUg-_Q7-uP-s5rz5-rMONwrdNpso3HjAM6o99-H8ukt7QytyZqwHRtnWYOdt1-Imd8i5s64nZNgdy0l2RADBFoXW7V8Hsa578YI5cPss53RUJPQ_tc47t84bspMocwdApIdMol8LNYcod4d01ORidR9Uc3l2AMcSdsd9Ni0vdvdcC7hScZcqpBxFdpcjgABCVqdoEYGwWgHqfqUAiPWjcxBoSwS8TXFPKnHAO8BOIKewAAaVF2bWN1NwwCEMoLUXFy4O12pyl1IwiBVxZzZ05A52EJ1350F2FxkMPkTwYMl3oLJ1UPDwV1H2oPpy0OZ3x10P0O4N5yMP11MPXAdyd2_RA1dwIODz6DgHILLXaF9wtH9xGED3j3rBD293cOj1jziPszkLaAULDxEITgaEj3MUsCjmSIzwhXMMJwMIjxyLyIKKKKLSzwmhzyBxnkbxzHawywdFLymEXhgTrxPyOGwBry3nrz3hzAIJbwEA2iCPrGtXwy2nn0XwH1dSn09UKhZQvkn2H2n0GjoDnyMQXyhxRhXwsDX3rA31QC31xgLxKz3wBxKwR1QD72UNgPpmJnPxW1Vnqw3QsweLB2L0vmohDjDkjhjmQUzlnXPjIXJFcB0nlDQD2QtBbRrVpXCLCAiBrU4m4iEL4iLQkh7AKF4gEkcWUjtx6BCJl14iFDQDwwcnXH2D2SuCxLUzmyEKmXklCPcR7mJLGRBl4g8iUmaXc3YAKVo1uTpXlC8h5VILx1FG7AgDyAaU5SJNINoGhksEyG9jUgECIF4lCGcP6WpMPjyAyAo1gClF4h-BdH1PPl8OGFYAyEUEdzUl6DgHtMQHNCIxdOd0DyuEmIsFpI8XpNqJ8jy2UHFiwgAIqyjCq2W1q3eIazaKmBa3uzayL3jOriHiwhLUePDMB033y1DJuIzOFCzJGzUU0GjJVgYEoghyjm4OZUPjEIkMkN4i4g8GjBkk5SWHbM7M5QySWGUUeHYAAGJ7FtQRyRz1xeD-DLxmyUhWz7FOUOz2B5zFzlzezCEBzBz1ItztzSDnB9RdRJDpzTRZzox7EZJfElgzyLylzzy1yMENz1JfFHzHzSCiiY59zDyZy5ziVLyfylziU7zvVJAhzLxQKwLSDKj8jCj08vzTyPJ7FLyPIVyPIklAKNztQZJtQkltRdF1wiiJdjzWykKkklheSFJSKklUw0LgLBzdFtQgoFIgptR1x6LRRJDoLY9mSWzox4KELPJGlSLUwqLRJ50aKkkgpfE-JfFOVSD3sgoI5I9BDQ9CLTzOU-LeTUwKLqKhz1J7AgpUwPIPJ1xIKCi5KFKjzOgTzlzSKZIPIlhJLtLNzHztRuV1w45LwE43taMCLLK5yFzSLdFryylHKtz7AFIPJLx1wY9tR6FYKzy7L2BOUErOVhK-yDMaL1JpkhKZLD5kjLwI4MFYLdFyKPJArFBfFdFALRKhyFI-IwrOVcL6yE5g4lKfLuKsTPIFJkLKqRLqrBzOEgpOVtQ7x1wTJg5RQTIk42qTyUL1KpLSLfEZI7yNyJCFJ7A7xfFjLcioKTIGgI5JDwjuKrzBKOqPJFrlqMrfFfF7ENrUselfjkDaywEIEoEcAYFrF4FgBEEay1ClgCDddjC44y0frU8xCWqi1nBLwXsI5WK44rgQaRCzLFLiTLxRRRR3tvcEaedoqi1aMhcI49rI9gb3D3LPLdRaMIbg57B7Bk4U4hCsaI88qI5iS9qAA1VGyG4mtQnAScgQnyc1LGOyLWNIICagcsy_EAXJfgAjU8fgK4fgIEYkKobwDIC7LAH0ckJkEAXlfgW0lDH_OW9gfgPiHAE2viCydYfgcocgfoGYLqQ2_gIKN-ACNeDW2AJackSgRIAsTDecI-c0C0RWkEFWgQC2usfgKINAB2lQSMoCMOiwK2mAeYKMAKYdCGJANvc-fgD_aOgAPV5JwE5RwHsXjvrH4F_mdm0zzqQpwAUmLtLoTpAC_3tozv4Fzt0WLpwHgobqNsEHO2boNtbpAHbs7u7u1vXGzvO2tGrrrqLpLpAHWD9TFmDtwF0EgBSFFrONeJjIYHYhAFoF9CyDloVrNFoAtA_yiLmH4HkAUHkHkCAA",__code:'<Button>Regular</Button>\n<Button size="sm">Smaller</Button>\n<Button size="xs">Extra Smaller</Button>',__scope:{props:A,Button:z}},r.a.createElement(z,null,"Regular"),r.a.createElement(z,{size:"sm"},"Smaller"),r.a.createElement(z,{size:"xs"},"Extra Smaller")),r.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"color"}},"Color"),r.a.createElement(g.Playground,{__position:2,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAdg73CCJzHkN0TXaT04AEchASdah9DgQMBXtTVzWQuUFXNQMzF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsZm7Fh514gAWYT2AANmE0T1jAUCADEfWgRJeP4ZxDkRR1MHYAAFIR-CWIhqEoOAJMRFS6zUmhnAgWjLnYABGGSxPkVUg1QKipgAQTmFj2GjGDyBsKB0Ejdh5E5FixHCuMZHYVEmJgbhgGPejGOxeRd3rYAougWLggAMgq8ZEnmShmlKmK4u4Fr5TAUIAr7VB2nYAB-DYysjaNEquRrytQeQ433WQzE_MxYQ1Y4YDAMIoCmYakpSutGBCtc62TOCbhZKgoGFPgQBGVwBFQApxAAdSum75ykQ6EKKg74OOyhToEc64C2ah0CuxJxGcAGMGBl7PtQd6G1er6fvOjIhAEcRLwEFGoaOmH10YeHzBOs7-CHAVgfEMzSYERIsbe3H8ZLRH-AZchETgOBQdCFn4DgGnqFhvHoYZomQA8KBJW2cQ7zFnZeZx_a4cFwnfv4EYbFoe61ZgWWiqkXba05X8QHQzDPi3Gg4EkVRsCAsgdFA_RDCMdhLywQjHSzXD2F5ebXcWmDMBW0I1pCOx6aQ41SM9fHJHxwNDeNrCPfNmPoZT7GgKwW3dDAgwIOMUzxdcNI7G9m6oPYEMpRI00tXw8uzMoGZLFq-Bq_aIdG4tRj5jwvyzHzxxUFRdwCBLvky7dmC7wAVUsSxdQAOQAfWcSwAE0ABlL2cEP2FXzft_itvPUCkfe_BVB84X-BaByTccPNr3x4Ixa72FWcCwjj0Y_fi50B_gQH90B1zduKFIQcrrH0kGAiBAhoEwHAWLAQFFL5O3vtmKYpdyBizZrBQW2AwLoDsJXAgOB0GunYvLGcMZEqUPrPQksQ9oLsFFqcbYSwvCAL_ksfIbkj6sQmLYHAHc7h-QYfWWAUwMrMVYrqDw6gtikP8PkFIqAIpKD3uvLezhvwX3ERYCAzRoysJ2LQ9c-j0r5XgDgFgtkxbJFYu0Ex2xAwWPodI6xuJ0DFgsI4jyfE-IAFJXH6Mmv5CxcAixRXCrwmAZj5YWLiP9eUWA8KIHMW4iwHi4A4CcgQFyfDfHygAJzKTEZkhh2ScBEDQAACRgBAFIhAintAAEx8TKRkzJVSoBoBgPUxpzS_EAA5OkJIqdkgA2u0AAAqeFgrhwpRCwBaLxEwrgAHYFIbOEpydoABdMKdCKkWJqagAZTSpi8VTB0kSYkTkWN6S6C5hBeKtNGXcrpbjfJfIsR4M02w-7jPEUk7o7Q4A2nScCtxVS8kFO6C0jyQkRLlIeZYzKOSzkvKmGFdoNyxloqyVYnJTz-kNMubi95BLCVTNmfMiAizozLNWVwdZ7Atk7KwHsw5rFjmEvrFi8lzTZK3Icvy-hpLsXXI-WKwlPzoV_IBUCk5AdVoEChfyqpgrBk4scTJUVqKHk9L6di3FqYZWGpObSuZ2QGVLNcCstZeBNnbN2Qco5vyKnaopbxAArKK-54qLCSqFeq-UMkZWBrRfKixYSvmGPCpwoB8STldAIH0cw0Y8a_y6DkbJ2VslIWADgEtgickiLgEhHcujoVxuhWmjN4VGAwKQei7EBbiVFpLTgMtwjhyVvYNWw1YS63521MtNVplhwZBiK3Uu-MbETqDgQBuI5eXrm7giiwvEPDQ1lRYWxrhRbZCuCtKA_0o1CyONu-UJNOKJH3SwnNJ6jTxAveuZx9ZT1vpgJe2J9DeIOXlf3J2q6Z0QFbs3HuT8zALpEVB1u67wn1mMKYeWTt6YIZwOuDD0Mljin-gQJYzg3g1NEOh8e9DN1XFXQhnJqI5wpDEuuVDOG97DCDjkCY3R6aBGOLYI9sB0C9Rw5R-sh7j3oBo8OOjOAvDfWY_LVj6GK50FnHYbjLDBZ5AKCEcw8RaDXWiGwboStsMqbBroIGVMlgPWugUJY6MUbEc5qzdmFH1xK2k43WTDGHN6JQyYNjzgOMxQJDxwWfGk1_xEx5-W0Xc3eabi3HJ8moCKfocp-hTsQttDC5p3j3RnGxey2JiwzikuybSxlwLaHst71ct0eq4WtPp3YNPZJBW912FSXsI4ELzOlfXLEyrKWcB-fnD5IFC0HSquXXg7Gfl44YUTmbUeacEJYSYWfS2UYNDATtnocCIB84uzdvTQew9H6lxm5gqBu7sYMQxR8agV3R5xyUEbFbpsH7rejm_LhuaAFAIzlne2x384mULsXGDE9FokLbmaJUfkX4Og8TkL-ZEpQWhgFZLqKCB6vYIGfWHqPmH2F1BvXUood7h3dKhT0JbJBM9PubAnOWrE5CwUTvenP6asXRy-B7CEPzRgrZtCK65u0VvG8Smr5Wc2OB-lcMX_aXs_T6g4Sn1PnCTJl2ZiI085gZHsJSYahyrgU6pzTnAJlRQNH1EFUUa9OSXqVuIlX-vvrCk11bnXeu1cG8oEbuEpv_rm_YJb7XNu7cO6dy7y9HhxYpCEB1HIvE0TuFsldfQDl1ztAqogCTQn2hXD5Qw3oAg4A-4A_KH4lp4inRGNkR99D3cMKj9b5wOAADiopLxr0vfQhLSvhSd5173_vg_1xKDMAlGtIH3Zrdh7dpagdg7YOUbBZ9OQCFqeIVqMh2EMFsXXNQgQG1y_0IbddLaJzGBPaE_TYtpbCR9sbpW2GJzgC9v19FcaYS9-kgj-2Q-MX-9YNa9CI6Zgy2Jsx-uEG21A8CiCV0yBsCoO2g2cDsecoG0Oc6z85cCOmOSO74KO5c6OiOWoOOeOAw3UQKhO2212BBk8WuXeR8mOTOnBJ8ROZ87OvOmUXO48gU_BT-gsAunOQue6nIquH-Eu5e0uau2S8uV6Hu4UXuGuVUg4ge3uRwAAhK1O0KrC8DAD1P1H7jbndLUg0JYJeJHqwRPneBvEFPYAANKu4frJ6p4YB2EyF3Dq4-5mHR667qHCg9rB7G4CBh4wAR7j4x726O7O7uHxaK46Ge7aEa6BFd4B4f7-ECBhEh4m5m6cgW72FxFx6JHKEF5F4CaSal6n7QqV7V7Xpfp14iAWiN6jAt5D71jt617mHd594D7dHlaeFtDeGxHd4bwNA961KWBLyDHT7Qoj6pGlGTHTGzHzFT6Xqz4TScgL6oJL6_Yr6-yzZLob44IH4oFHB74YAH7mhH5JzQRn5qY0L1EWI36ZqerJggHoDP7dq_79qFRfEMI_5v5_6DR0CAEVJSA_FgFfKQH1jQGoCwGra_YWzRys7rbC7UAgE5KYk5KaBg5Ha5wna4bYwiH4E-xuzCEzxzyLwrxaKHxIb0K2LkiuA6TyhoCkoWjOKPpOo3rtBhARCPqcTcR2F8SXoSQ9gFC8QCTtLKTKGNE-68RChoCGZ57yz7CkpXASkfo5p2HtAeTyTV69LALKFwqNa8QeRKSfLIYWBnJ3SsrOryheQBoBYK6A6ijdgQB5BvK-oKnunjAEKWCZBDxqQCBEC8ShARGgoan0J5AZBgywBSi8Q_Auhxn1hVHDCsAZCKCF5qS9BwB5mIDmgmbFnF4t5l5fJal9I6nbFTYwGfYJz4m7ZqA2yYHg4kmnYnFTCXbE5MFUmLROwcFYQ_R4k8Fs5LZNnfYTnrZKzjmMGjztkgTEkMCUQ85Lz9EeryyOHOEuG8RcQeDRgyS-pLAnlnm-p7JLCZKPDsAADErS2oj5j564lh1hl4B5KQR5rSvqp57AP5f5AFV5Fit5d56k4FEFgZzg-ouoLhH5poX50YrSEaSwyFwyqFEawF-ioF6kwyuFuFgZCxK8MFcFn5355qqFFF_55qWFg6kg95l4jFTFgZUxMxcxCxZFSFHkrSqFHkgFHkGytFoF2oMk2oGy2oxS64CxqhnQiFfFGySw1pCkilGyqYQl9Fd5xS2oQUCkQU2o642looLhmxA-Bph50Y3FPFnk7yilqYalokKGGlGyQUwyfEwyvqgZ1OQUC8PethHeCF35vqVl1pqYKl6l956k9gQUqYHkHk64rFGxXlPl8FslgVf5XkHkSwrl4VYFuF2o_q64a8l4G8VOd0Ml5lAFilxS6FgkfEOV4F9gCkHkl464_e2obinFyFmV7Avq3Vvq9l15FgOFSKdlHl8sgxl4C8-inFxSylHk1VigwyxStFjl95CkfEjVvqklO5G808fl5ViFEpnkCk_Fy1Dlq1d5ASQUvq2od464Jk08ooJkW8B1R5AlwVblilwyMkWFoFzhCk9gd4wy8V6xcxJkDQC8LhApFVKFnkNyX1P151OFwywyrSQNc-02PZjC1EW5si8iiiOAyijSaiwAGim5QRSw5eseCRa8N65NXeOAjhe1l6zgl4FOC8hla8Vw9NE-SVvlyhl4oooo1OtePNNubVl6d0TuC8ENPedN_ROARVJVuod0LN089g9g28O8dhYtAx_ek1yhENAAaoLazfLUETgG-TYT5DWobHZNsEXIBJoNQESTnAwMcvwKgD6EyEgOwPwECMSFUN4BkDjlgD6OSD7YGvwDmVXrQfwFcPwHxDgEnXxBZOsPwOUOQP0DMF1PHX7SAEFOlARLADCGHQBEtOSJQIkAWDpvONOFQQHSCMHajCAFHSAFEGgHnfwFbPtmnXWBnTAPMFGAFBBuzL7eXvwCQV3SAAAHrWk4C-o4CtJ930LEzDhdwpbT1z2L0KRL0r31j8C44iBx2-38Az3FJL04DcX70WCT1UFH252n2z0X2tJX3L2t3rh33mhWiRBb3z2L3v3rAjrxxN24C6CQApBAQu0dmrkQTsQgC0C-hZDx3-1mi0AWgkHtFzD8DyAKDyDyBAA",__code:'<Button color="warning">Warning</Button>\n<Button color="secondary">Secondary</Button>\n<Button color="error">Error</Button>\n<Button color="primary">Primary</Button>\n<Button color="success">Success</Button>\n<Button color="black">Black</Button>\n<Button color="white">White</Button>',__scope:{props:A,Button:z}},r.a.createElement(z,{color:"warning"},"Warning"),r.a.createElement(z,{color:"secondary"},"Secondary"),r.a.createElement(z,{color:"error"},"Error"),r.a.createElement(z,{color:"primary"},"Primary"),r.a.createElement(z,{color:"success"},"Success"),r.a.createElement(z,{color:"black"},"Black"),r.a.createElement(z,{color:"white"},"White")),r.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"bordered"}},"Bordered"),r.a.createElement(g.Playground,{__position:3,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAdg73CCJzHkN0TXaT04AEchASdah9DgQMBXtTVzWQuUFXNQMzF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsZm7Fh514gAWYT2AANmE0T1jAUCADEfWgRJeP4ZxDkRR1MHYAAFIR-CWIhqEoOAJMRFS6zUmhnAgWjLnYABGGSxPkVUg1QKipgAQTmFj2GjGDyBsKB0Ejdh5E5FixHCuMZHYVEmJgbhgGPejGOxeRd3rYAougWLggAMgq8ZEnmShmlKmK4u4Fr5TAUIAr7VB2nYAB-DYysjaNEquRrytQeQ433WQzE_MxYQ1Y4YDAMIoCmYakpSutGBCtc62TOCbhZLwBFnAsqCgYU-BAEZXAEVACnEdcLAAdTuh753XKRDoQoqDvg47hTOnILqu_g4C2ah0DuxInv2-tnEhjAYa-yQfuoP6G3R8wTuBktLoEa6MiEAQ4fretLwEEnUexzHGGx9hcYuEHKAJ66hwFFGQExiwzM5gRYfh76AdQOmGaZroWbZ8HQnIRE4DgMnyfYZxZflxWhbRkWxZFxmgeZ_GwZADwoElbYlfJu9TZ2Gnta-8X9clw3Cf4EYbFoC36xe92mU12mpt22tOV_EB0Mwz4txoOBJFUbAgLIHRQP0QwjHYS8sEIx0s1w9heXmjPFpgzAVtCNaQjsBmkONUjPWxrWju6vyQ7DrDs6j-uEI76ggKwBPdDAgwIOMUyzdcNI7Dzh6oPYEMpRI00tXw6ezMoGZLFq-B5_aIdV4tRj5jwvyzGHxxUFRdwCAnvkp8zmC7wAVUsSxdQAOQAfWcSwAE0ABlL2ccuKtv5_wAVXd0qEsJnwIBfQ-4JUDDxfvAWgORNw4Sjrna-BFFp3kdgWauHo0a4PQIQ06zMl6Z3FCkUud0t6ekodQgQkh6GmwEBReBqdUHZimJPcgpsFawV1tgMC6A7CzwIDgThrp2LwxnDGRK0jlb1kCmxRml0dhLAltkJY-Q3LxTChMWwOAd53D8ooiwsApgZWYqxXUHh1BbHEf4fIKRUARSUEA3-_9vxwLMZwZo0YTanG2PI56ZirHwBwCwWyptkisXaIEnYgZfHk3CXAHAuJ0DFgsHEjyfE-IAFIklmMmv5XxcAixRXCjomAIT4a-LiBDeUWA8KIFCck9K-UIlOQIC5XR2T5QAE5lKmPacrVJOAiBoAABIwAgCkQg_T2gACY-LDLack8ZUA0AwBmXMhZOSAAcay6mjNSQAbXaAAAVPCwVw4UohYAtBkiYVwADsClXnCU5O0AAumFBRozfGTNQLs-ZUxeKplWSJMSgLfFbJdKCwgvEllHOhes3xvl0VmI8GabYR8TmKIad0docAbStIJRszpaTum9O6IsjyQkRIjNhR0zKaTgWIqmGFdokLjksosJs7ZnLuUor5fy85VybkQDudGB5TyuAvPYO8z5WBvl_NYgC_l9YOWzLBewWSUKHJavJvCnZuqkXylTKio1_LMUUt8TiiUeKfGjOLqtAg5KtXjJ1XsrlcSZKGuZbCwVCLzVTDiVasVLKJXXOyNK-5rhHnPLwG8j5Xzfn_Kxe0n1ereIAFZDUwuNeYoVYbZLWqLSyu1GKXWKIgP4zR6BamAq6AQPo5hoz0yIay7E2VUlIWADgIdBi0nGLgEhHc3iKUlPWa29t4VGDMJoakvtVKB1DpwCOoxw5x3sEnUGkpM72HsG1Mtd1plhwZBiJvSe2NIlntLgQFeI4NXrn3nSiwvEPAixtRYKJrgTbZCuCtKAENK3O3rLxDmnFEi_r1qQyWwH4hgfXAk3Yn6jTIZgOB6p5NeIOTtcfVOz6r0QE3uvA-GCzB3uMRRzer7Sn1mMKYeGqcGZ0ZwOuNjIsljighgQJYqsPCTNEKx6-5N31XGfXRtJqI5wpDEuuZjXGVbDFLjkCY3RxbdH_YB9AvUuPifrLp2A6ApPDhkzgLwrNFPw2U6xmedBZx2E04zXWeQCghHMPEWg91ohsG6KDAQnGHOI10NDAWSw3r3QKEsSmJNBNq3gBrcmk9yZBfM6vSzcnYu1r3SYFTzg1MxQJFp3WgR4PAwM2J1DRDMtrw3mk6zUBbPk3s6l1TbQSuue06ooJ1XUtGYsGh-rlnmutaYwV0Lrluj1VK25hu9R76NJ6z-uwzS9hHFJSFwb65qmjcazgHL84fL4oWg6N1j6BENybkoUOGFW6R0vl3eBgUYExyjBoYCic9DgRAMPdOmcGan3Pugye53uG0MkN-huDE2UfGoKDy-gZm4PYjmg57dccEIeyCQ4GPc-5Jz-8PEyo9x5UZvotMRW8zRKj8lgh04Scj4LIlKC0MArJdTYSfRH0CweYOnjBewuof66lFKA2hnoh2SGl29qO3PU5w9MxT5RSvsgM1Ykzl8MOEIfmjGOzaEV1wbrHUdqlE3huO0cATK4-ud0I4Jn1BwIuxfODOaboLm7KD3zmBkewlJhp_KuML0X4ucAmVFA0fUQVRRf05OBoLijbce9ZsKJ3IfXfu_t57iIPu4T-4hoH_VzvQ_OHD5H6Psf4-obNikIQHUci8TRO4Wyd19AOXXO0CqiATPZHaFcTVytegCDgGnvD8ofiWniJdEYffwPpdT0cZWweXdh4AOKikvF_ef9YJbW-FCv0vOAN9b_A0oMwCUp1Eazk9inEOlolzLrwpxsFu1CKc6IrUEjsJcLYuuWRAgG0g-5Mc690W0gKjAau6ADMg6w6hI26q846PMoywAW6Hu0U40JSEBkgUB_sFKU65Mh6ZgqO4cP-uEL2TCMAVCLClB1Bd0BO2g_cycQ8xGZON6AuFCWoNOi89O08TO3B5o7OnOAwjccCPOUCMCFODO0EJerueiLO0uihnocuyO-Kw8UBKuvOKsnS0BusmuOh2uP6nIduiBhug-Ju9uqSFuEGy-4UKejuVUg42ei-7AAAhK1O0G7C8DAD1P1BnmHi9FMg0JYJeMXv4WXneD_EFPYAANLV7wweC1714YDF4mF3AO5p5-Gr5u72HChe555-4B6chB6yFh4R5R4x5x7gZ76L7J7OGO5ZGl5Z6IEZHBa56-4CAF4wBF6H6u7l4VFV7WFd4962AAamb95_4UrD6j5L6QYT4iAWjT6jBz7rKJ62HhHH6b7b7rKJE7B15tApG9Fh4_wNBr5TKWBvwn7bEUo1E26lFl4nFnEXFXFn4-SchX7HqSI5jg4FwXYPpP58Kf50FHDv4YCf7mjf5tzQT_5OZyKTG-KgEdpZoNi4G6ywGbrwFjqFTInkyoGYnZ4YGRhYGjJSCokNzIEWAEH1hEGoAkGPYY7Rx1wqHRw67UBq5pLMnxyMFE6Dz_bcYNzaFsp36_FTDKIPxPyvwfzAL_yZrwxRLkiuA6TyhoCmoWhoZwbJoYbtBhARBwacTcTF58TgYSQ9gFC8QCQrLKTWHTFp5QaUBoC-Yd7wz7CmpXBGm1YIbF7tAeTySj5bLoBOnkw0oza8QeRKRoqMYWDAovQKopryheSFp5YSyijdgQB5DIp5pWl5a0BYAECWCZBnxqQCBEC8ShAdFEqBn1h5AZCIywBSi8Q_AuiVkWDDHDCsAZCKDd5qS9BwCdmIDmgBZ9m94BkD7rIunbJumvEX63bKAtzMkfZqBckgS_a8kA4imOgSH875yZypwKFYQEwcm84wIo53ZzlHntxBaHmbmXxLk_YDwMCURaFvzhGymWxRGxG8RcQeDRgyR5pLC_n_l5rfJLDtKPDsAADESy2oUFUF64gRwRl4n5KQ35Syeaf57AqF6FmFwFviYF4F6kBFhFeWzg-ouoMRiFpoyF0YSyMkBySwNFdFGFtFOFZieF6kBy7F7FeWVxH8pF5FSFKFVq9FQlGFVqLFe6kgEFl40lMleWjx5xlxWxAl1FHkSy9FHkWFHkry4leF2oMk2ory2oAy64VxSelF35GlrySwYZCk1lryqYOlkl4FAy2oQUCkQU2o64rlooMRilW-XpX50YqlalnkKK1lqYDlokTGTlryQUByfEByeaeWYuQUL8a-oRthnQVFqFIVYZqYdljlEF6k9gQUqYHkHk648lFxKVaVFFWVKFaF1lMkHkSw8VhV-F7F2oBa64X8l4P8ouL0Zl9V1FjVnkAyjFkK7VBF9gCkHkl464m-2oySylNFLV7Aeaa1eakVIFFgbFDKEVSV8MJ-l4L8ZiylAytlHk41igByAy4l0VEFCkfEM1eaxl8MkR98GVQ1gVRpnkCkmld1UVD14FeSQUea2od464Jk98ooJkf831VFWluVCV1lByMkLFeF0RCk9gd4BylVpxClJkDQL8MRWpgVDF4Vv1HkaNGNTl7FBySyuN05cC9-yiL5NidiDiOATicyriwA7iz52RSwg-5RleX8GGgtR-H1l44Gzgl4wuL83lX8VwktfRNV6V1hl4ooooYu4-qtYei14GL0MeL8xNa-EtGxvV_VuoL0st989g9g_8ACxe-tZex1L81hxNAAalrXLRbdkTgPBSEW8TOSAHZNsGPIBJoNQITiuQwACvwKgD6EyEgOwPwECMSFUN4BkOzlgD6OSCnUWvwO2SPiIfwFcPwHxDgFXXxBZOsPwOUOQP0DMF1OXWnSAEFOlARLADCHnQBEtOSJQIkAWB5vONOFqBaBnSCNnaTCAEXSAFEGgG3fwLHF9nXXWA3TAPMFGAFGRorKnYPvwLTqIKnfwAAHphk4B5o4BLLr3kz8DGJ7yNbL0gAX3X0KQ31331j8Ac4iBl2n2v0DI304CqVf0WBH0T2_2t0ANn1ANLIgO31z3rgQOCHWgv0X0f3X2IPrCHrNzT24C6CQApBAQx3clx0QTsQgC0C-hZDl3p1mi0AWjH2LFzD8DyAKDyDyBAA",__code:'<Button bordered color="warning">\n  Warning\n</Button>\n<Button bordered color="secondary">\n  Secondary\n</Button>\n<Button bordered color="error">\n  Error\n</Button>\n<Button bordered color="primary">\n  Primary\n</Button>\n<Button bordered color="success">\n  Success\n</Button>\n<Button bordered color="black">\n  Black\n</Button>\n<Button bordered color="white">\n  White\n</Button>',__scope:{props:A,Button:z}},r.a.createElement(z,{bordered:!0,color:"warning"},"Warning"),r.a.createElement(z,{bordered:!0,color:"secondary"},"Secondary"),r.a.createElement(z,{bordered:!0,color:"error"},"Error"),r.a.createElement(z,{bordered:!0,color:"primary"},"Primary"),r.a.createElement(z,{bordered:!0,color:"success"},"Success"),r.a.createElement(z,{bordered:!0,color:"black"},"Black"),r.a.createElement(z,{bordered:!0,color:"white"},"White")),r.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"block"}},"Block"),r.a.createElement(g.Playground,{__position:4,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAdg73CCJzHkN0TXaT04AEchASdah9DgQMBXtTVzWQuUFXNQMzF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsZm7Fh514gAWYT2AANmE0T1jAUCADEfWgRJeP4ZxDkRR1MHYAAFIR-CWIhqEoOAJMRFS6zUmhnAgWjLnYABGGSxPkVUg1QKipgAQTmFj2GjGDyBsKB0Ejdh5E5FixHCuMZHYVEmJgbhgGPejGOxeRd3rYAougWLggAMgq8ZEnmShmlKmK4u4Fr5TAUIAr7VB2nYAB-DYysjaNEquRrytQeQ433WQzE_MxYQ1Y4YDAMIoCmYakpSutGBCtc62TOCbhZDwoFObYxDvU6dikQ6EKKqRdtrTlfxAdDMM-LcaDgSRVGwICyB0UD9EMIx2EvLBCMdLNcPYXl5ohxaYMwFbQjWkI7FulkkONUjPUx1BJHxwMXrerDoa-wn4OoSmjtQICsAB3QwIMCDjFMyVtlcNI7Dh1ACMWkMpRI00tXwqDTOHSxavgYX2iHSgZgtRj5jwvyzDZxxUFRdwCB5vk-fFmC7wAVUsSxdQAOQAfWcSwAE0ABlL2cdH2Ftx3nfi2XPUCnXVfBAnQYt-BaByTccK-2H9f5h072FWcCxxj1Cfji50BTgQE_QMXIfFFJUdcI4k9QyQ84LgRS5gfOoELijA6hz6pl58ga7gDGqfMbAwPQOxBYIHBw-zaD1xnGNEvY_b6wsQK2PYE6zqWLxM7TpZ8jcr3WImWwcHlu4_KnqfYCmDLmNY3UPHULZ-_8fIUlQCKlDd-2necb8A4P-sIGaaN552cf1w_hYE-8AcAsFsjXZIrF2i_22IGQBB9gFwBwLidAxYLBQI8nxPiABSOBgDJr-XgXAIsUVwprxgP_Se8C4hwG6O0LAeFEAAPgfWRBOAnIEBcuvdB8oACcyl94sI_mwogaAAASMAIApEIDw9oAAmPiAjmFCLYVANAMAJFSJkRggAHEoqhQj0r5XgAAbXaAAAVPCwVw4UohYAtCgiYVwADsClnHCU5O0AAumFCehiWGiNQJo6RUxeKpkUSJMS_j4FqJdMEwgvE5F6MicolhvlUnwI8GabYasDEfxoXQuANomF5JYWwjhXDuiyI8kJESgjolGMykgwJ8SphhXaOE_RDSgHGKQbEjRkiQntKSV07piCzGWOyBAGx0Y7EOK4E49grj3FYE8T41ifjulTxaYMmRskIkOS2YfdRrSwnJMOd09JpTMnZNyf45Gq0CAlK2SI8Ruy2lQJkgc-p0TVEnPee01M5yfn-PGRYqx0zbGuHsY4vALi3EeO8b4jJhidlaNCfKAArAcqJRyLD9NOfKGS5zcUNKufAghqSv7hSXlnSh_iugED6OYaMjA47Ly6DkRB2VEFIWADgAVW8kG7zgEhHcb9SmUtKYy5l4VGBlxrkcblwBeVsQFTgIVO9hyivYOKn5BCpVs21MtR5EsFYZBiDLXm-NQEmtRgQMyCs7AbPXMrKpFheIeA7hciwYDXAnWyFcFaUBaGkpLKdI4Hr5RDgFIXRIPq56p05UG-Iob1wwPrCmkNMAw3kKnrxByVz1ag0dXCS1dgpYqyjmYG1u9K0yxdYQ-sxhTCT1BvjKw0scDrnbR3JY4paEECWM4N4ojRBtv1lPN1VxS31qQaiOcKQxLrhbT2t2wxUY5AmN0DtgRji2H9bAdAvUe2TvrH6gN6AZ2S2lkgrwlAoDLsnqutt7BxRRgEHYbdc8O65HyPOEI5h4i0AEKgaIbBuhUAjd219zgtjUHQHGpYAB1QufN5xLEvAIIQAhh2hHIIiNup71xQeFNehWc6cALoKE-qeL6p6g2cBumKBId2_r3bStOJ6J3pqTYGs1MxKP3sfe_ZtJg11MbaCx79u7ugwO4wxs9FgYHkcE7enAwnaNidbQxt2rluj1VYz-2m9Rja0KM0TOwDC9hKqIDBxT65yGqco9RjDZgi0ugRg6B59rYIdz8iTDCZNG7fXxlhLWBA_Y_SjBoYCgM9DgRAGzcGkMO2a21pHXmC0HSg2Lp6L1tMGJNI-NQDLutiZKFekFj6EddY0wQhnLOjW0700ZkDRLbMTIcy5la6O4s-6yzNEqPyMdj7GJyMXIbloYBWS6nXDWpXIuZb65DGC9hdQO11KKF22N3SoU9AKyQh3fZfXm4x8b1aAqLbduNjtrFgHPmgd6zk0YRWbQiuudVIqqO9K08ppNjgI1XFe9qkrEa-oOA21t5wJjvukYEBqygxs5gZHsJSYaPirjrc29tnAJlRQNH1EFUUdtORhvhx_YHcOH3Cgh9j6HsPQfw8R8juEaPaEY_YFjqHuP8eE-J6TsNHgOYpCEB1HIvE0TuFsoXfQDl1ztAqogC9R72hXE2fkvocBaf5vlD8S08RTojGyAmqeFOD7c5x84HAABxUUl47ZhqnpxgQgOyOQ6t7b-3jv1xKHc5yCVxaG61cu9lqYPm0YtxvrBPjOQu50B7m-rUA9sJDzYiPBPY90_SonLK2M1z6yMCK0ejt_LBWEi1U6wqKKP7AE1XD6K40CH-KkMX7I-MiofwlVPA1ZhAvvVT7her1MFWF0rtXQurXtBM2BqzEt3XuaXdG0n4ik3RYjfFg9wbWoLQzZEAMbquSFsRb9kvw2Hvodezywdm_4Wyv-38mzNvORm7Xef3dxpR6XwFYQh-EHTr3sNd2AvtQdEE_tw0dddd_87gwdacqpBwmcacjgABCVqdoEYGwWgHqfqenXHZDMRBoSwS8LnC_XHO8B2IKewAAaTJ3TRFzFwwBIOgKQQpxwJ5xh2p2gwiFZ1R3R05Ex1IOtz5yJxJ1oMnhdzd0rHCk4NpzYKt0ZydVgIR24JR1dz4IENwKEIJxEMF1EwsEV2VwPUvTV2z2oS10gKjXaH1wtEN1GBNyd3rHN1100K9wdwcOU3oLaEYMt2hxwAdgaBtzEUsCtjtzcNSQkKQJ8Nx38MCOCNCJ90nj9wmgDyP1BkHldCyy83DztUj1bl7irnLhhCwG7nyPNBT3JmHknlHgEA2iAKnhlVAy2hb3f1_TLw1QrxFWrwL1r3ryZ0b0jGb0MVb1uw7k7wPm73rF71QH72C1q1Cw7jvyWzqx_2oDbxYMWz9n-mn3axZiS17VphuyaVDyyJLAi1glNnNmtndhfmRUnjAXJFcB0nlDQH6QtBgQTVhUsLCAiATU4m4hIL4jDQkh7AKF4gEgUWUnAN6E_Vp14iFDQBA3l0nn2H6SuEBN4w5RIPaA8nkm1zUWznAIqX014g8iUhSSbQsECWQwWThXlC8hxT0MTQ5VFG7AgDyESUxUhMZNoGKMsEyC1jUgECIF4lCFUIKSRKnjyAyDg1gClF4h-BdAlPrAMOGFYAyEUCVzUl6DgA1MQHNAg11JVxN3V1SRRPUTRLDSSKuRmJOzq1-lizawS12OSxOPSyWL1nhkhlyz2x9iQPWJP1OwC0q1JltO-nh39Pvy2JAidIYEomuytk0NuKnnIMoKoN4i4g8GjBkkxSWGzNzMxU8SWCEUeHYAAGI5FtQKyKz1x8DCDLx0yUhMy5FMUcz2BmzWz2zCz4ESzSz1I-z-zGTnB9RdQqD6zTRGzow5FiUlgpydEZziUuzAEez1IdEVyVzGT4ibZhzRyGymygUZz9y2ygVFzdVJAyzLwLzLzGSYigiQjvddzJyPI5EZyPIOyPJnETyeztQZJtRnFtReF1x4jKdxzMzXznElhSSFIILnFUxPyzzSzeFtQgoFIgptR1wkLRQqC7yHcsSMzownznzPIkkILUxYLRJm14LnEgodE-IdFMVGStsgoLYbdiCLcQLJzMVCLSTUxoK4Kyz1J7AgpUwPIPJ1wbzgjGLmKxzOgJz2yIKZIPIlgaK-LeyVztRsV1w7ZLwHZNtkNgKZKmyWyILeE5zBI-IVK-z7AFIPJLx1x7dtQWEHypzFL2BMUXLMUyKiyLBlyalSL6LJ5QjLwLZAEHzeEoKPITLFAdFeETyKKyyFI-IrLMUALJ5yDjZWL9K8LATPIFI3yYryK4rSysEgpMVtQ7x1wTJjZRQTInZMqJz3yuLaKIKdEZJFyezKCFJ7A7wdExKAjbyTIGgLYqDLC8LZySLsqPIWq2r4KVydE5Fur3Nckw9TjqJEyz4L4r4cAb4pF75gBH4Ez2ClggDhCBco0DrPc0rLww1nBLx1sLYMK7YrhzrfDJKWLwDLxRRRQttddnrcd7Kw1kNicLZBqbczqXCtKdLdRkNrrjZ7B7BnYXYSDfrrdAqLZwDBqAA1D6m6sG9gnAWsognyCVF6OyTmNIICagR05mBgTZfgMDU8fgK4fgIEYkKobwDIXfLAH0ckJkEAXFfgNUz9A_Rm9gfgPiHAcWviCydYfgcocgfoGYLqEW_gIKdKAiWAIo7mjWzAckSgRIAsPIAoacHfFmkEdmgQaWusfgKINAZWlQGLICS2iwWWmAeYKMAKCAeAEWoA_gKbO2gAPVJJwExRwDkSdvrH4F3iVlvQDtfJwAUlDvDudpAD3yVqQFFpAH9t4VDpwCfKTozqm131m2FvTv4Czpzrzr5vXF9p32tFjoTpDrDpAHWANRJjNtwF0EgBSApumO2JjIgnYhAFoF9CyEZuZrNFoAtELtmBmH4HkAUHkHkCAA",__code:"<Button block>Block</Button>",__scope:{props:A,Button:z}},r.a.createElement(z,{block:!0},"Block")),r.a.createElement(n.MDXTag,{name:"h2",components:e,props:{id:"disabled"}},"Disabled"),r.a.createElement(n.MDXTag,{name:"p",components:e},"Ignore ",r.a.createElement(n.MDXTag,{name:"inlineCode",components:e,parentName:"p"},"color")," attribute"),r.a.createElement(n.MDXTag,{name:"p",components:e},"."),r.a.createElement(g.Playground,{__position:5,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAdg73CCJzHkN0TXaT04AEchASdah9DgQMBXtTVzWQuUFXNQMzF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsZm7Fh514gAWYT2AANmE0T1jAUCADEfWgRJeP4ZxDkRR1MHYAAFIR-CWIhqEoOAJMRFS6zUmhnAgWjLnYABGGSxPkVUg1QKipgAQTmFj2GjGDyBsKB0Ejdh5E5FixHCuMZHYVEmJgbhgGPejGOxeRd3rYAougWLggAMgq8ZEnmShmlKmK4u4Fr5TAUIAr7VB2nYAB-DYysjaNEquRrytQeQ433WQzE_MxYQ1Y4YDAMIoCmYakpSutGBCtc62TOCbhZKgoGFPgQA8KBJW2fhjlsVxLuyIr63YcUUlCK6jm1e7HvQdcpEOhDnobQHjsoU6BHOro_pAdgvAEWcCxYCpfuBiw72FRGcm-lHYD-_aG0kUHUCKqRdtrTlfxAdDMM-LcaDgSRVGwICyB0UD9EMIx2EvLBCMdLNcPYXl5r5xaYMwFaPqmfxYPglkkONUjPWJon5e6vyqZprDBYZtWjtQfWEKArA2d0MCDAg4xTOu1w0jsEXUAIxaQylEjTS1fCoNM4dLFq-B3faIdKBmC1GPmPC_LMa3HFQVF3AIB2-Sd72YLvABVSxLF1AA5AB9ZxLAATQAGUvZwQjsQvS_L-LA89QKE8j8FDe5nP4FoHJNxwhnheT52HQxhGLhyJWPSJzGR4n4foa9_m3o-1wjjH1DJAXz615gd7Poo1uBfpqZHfIK64DsYmYSwMD0DsV2CBwbvs2g9cZxjRL2IJl7ArYuHTp2JZ4axksfIbk66sQmLYHAwc7h-Rei9WAUwMrMVYrqDw6gth338PkFIqAIpKHYNXMuzhvwt1gfWCAzRoyXVONsN-65SEWEQfAHAyNySuGSKxdoVCdiBnobAxhcAcC4nQMWCwHCPJ8T4gAUh4fQya_leFwCLFFcKwCYC0I_vQuIcBujtCwHhRAdDeH1n4TgJyBAXIgNEfKAAnMpGBRjSEmKIGgAAEjACAKRCBWPaAAJj4nYwxDiTFQDQDANxHivFiIABwBI0UE_K8AADa7QAACp4WCuHClELAFohETCuAAdgUgU4SnJ2gAF0wrvwcQ45xqBwmeKmLxVM_iRJiRqUYkJLoGmEF4j4mJbTAlGN8kM3hHgzTbCjnE2BWidFwBtAY6ZCiEkCLMRY7o3iPJCREvYjpDCVk4DqT0qYYV2gtNiXs4xByulhPcY005_SLmXPSis5JaTsgQEydGbJuSuD5PYEUkpWAymVNYtU55L0jl3K8bJVpDkIVwNCcc5pAz4XPJGUs-h4yJSTJITUyWq0CCLIhU41x0KTkcJknC3ZezglIvJac1MqKaUdP4W89JnysmuByXkvAhTimlIqVU0ZNSoURKafKAArHC9pCKLA3ORfKGSqLZWXIxbwuRQzyHhQASPdRHSugED6OYaMjAh5YxeZlOA2V-FIWADgB14CBFQLgEhHcxDpmaumYa414VGDryXpa7ENqVl2odTgJ1kDhyuvYO6mlcivXW21MtQlPsQ4ZBiAHR2xNmEpulmZEOdgwXrnDhsiwvEPDqzRRYZGD08ZXBWlAbRqqSwQ3rLxIcAol6JGrXDSe0MG3xGbeuLhuxy1GiHTAFtqiXq8Qchi6O3MC1wkzXYP2Ec-5mBzVA9dAdi3yPrMYUwBNubn13Tgdcp71ZLHFNoggSxnBvGcaIE9ycXqlquMu3dAjURzhSGJdcR7L34OGB9HIExujn0CHdXG2ReqXrffWWtv1P2-39gIrw4MAMEyAye16dBZx2Ag3DdWuR8jzhCOYeItABCoGiGwboJ1hQXrw84LY1B0DdqWAAdSXk7ecSxLwCCEAIB9oRyCIlPgh9cTHKxppmN-nAv6CjYZerhl63NnCgZigSSDpHoO6uhvB19I7-3ZFQyHRTmGoCqcPSYYDWm2g6eI1B7oo7jMacQxYUdFmFPoZwNZ2zFh1P1k065bo9VdMkYNvUdO2iovE3aHYPRewjjzJY559cqjfOKeUwJswC6XRiwdAS6WcsDaayUNTDCOsD6M1Vo3PWzMNDAXZnocCIBra835ufWO8de6OwWg6bmK9PSVoNgxK1HxqD9cToGLWNW6Y90Tkbag08sbrZHibM2HMOvWxMrbe2m6U7zy1IHM0So_IDwQQk0e7oyJSgtDAKyXVd4xxmwQJux3rvf3sLqEuupRQV0Vvdh1kgwdg8a3NqZ1tJt42O1_OH2Rz6sUYc-ThVbOTRhdZtCK65w0uqUysoLfaZ6OAhlcbH0bpttv6n9gHQPEmE9kxGyg6c5gZHsJSYalSrj08B84HAJlRQNH1EFUURdOQttk6QynzPwbCj6g4f7AumfU5ZxEdncIufaJ5-wPnKugdC5F2LiXUuR3XRSEIDqOReJoncLZJe-gHLrnaBVRAyG8btCuOC0hvQBBwEV7O-UPxLTxFOiMbIvbP4K6OLAg3DPBcAHFRSXiLi2l6hnyfCgTwLnAKe08tqUAVzkHrF372W8dobUxStrR6CfM-ZmcjYCvjfLU99sKPzYs_Ajr9u_eonL62MmLkxI_QOfe1jrCRRsLYVEVpDgCRuZ9FcaciOlSDH8TNG9YPUvQTWYBbtNO-4VW4bANAhN7byXtt7Q5tOZWyXYdrN_dva33O57K73s0fv_NE9l7AwNYW53s45PsBsX9-YYJ-cgc65RtPQIcG4Psm43tNNbsEcPt8FbsUcg1sgXxxsEIPwqdC1cdfd2ACdqd-EScZd49wp5c20qpBx1dY92AABCVqdoEYGwWgHqOnQ3QXbjFxBoSwS8fXZXRPHAO8EuIKewAAaXNwJg8Et2twwBEMILuBp0Vx4MTzV0LXUIEFZy1052505F51ELz2F1F3F0lxbSz1jzl0YNp1MMZ1oOY01w5wEB1xgD11zyN3MNNysLxQsDdw9x-i9x9yGX90Dzj3bRDxEAtHD1GCjwz3rCoODygOT1T3TyGQUJ2CtzaGUO8MFxLgaCTxcUsDzgL0yOmRsIp0cMKOKNKPKIyKLx8lLxh25gfldEG2KxrzzTr2PkwXwyvyOBbwIzb3NA711ifgJhfgEA2hIJeh9Voy2nX031I0nwjWnxdTnxH1gUX02PVxX0jDXxqQ30wPVm3wsF33rH31QEP1q2W3q3ViwhAKbkkDwOoCRwEShwEU0B23a0tk6yvQNgwKtSr26JLBANgkzmznzgIVrn3RehYSuh0nlDQBuQtFHV7V5XHXaDCAiF7U4m4hEL4hbQkh7AKF4gEj8WUkoL6EiJEKDkoDQBoxdwJn2BuSuBJNMxngZI8nkkDxCXQFZJejWXC14g8iUkGQPQsDqW4z-T5XlC8hlQCNJ1nFFG7AgDyD6UlRpJVNoEvksEyDjjUgECIF4lCDcNmWFPrDyAyDY1gClF4h-BdGtMCPd2GFYAyEUHdzUl6DgG9MQHNAYwDM9yjzCOmXZNCU5OaIK0q2UG1m-KZijBaz-Iti5h5nBL61AMTjBP5hG1Bywghi-MQIZnmyqwTJLJW1k2LJeIZlZlv12wBMonQLzjSOFQJgkKkOkN4i4g8GjBkklSWAHKHMlTKSWAcUeHYAAGIfFtRZzZz1x-DBDLweyUg-yfFJVBz2ANytydyxzeFJypz1JjyTyVTnB9RdRpCVzTQ1zowfFlUlh7yolHzlV9z6FDz1IolPzPyVSKiC4LyrzVz1ymVHyQLtymU3zY1JBpzLxYK4KVSiiSiyiKigK7yPIfFHyPJdyPIClILDztQZJtQCltRrF1wKjZcby-ysKCklgJSFJaKClUw8LoKpzrFtQgoFIgptR1x2LRRpDGi08GTezox0KMLPJ-laLUwmLRJD0WKCkgook-IolJUVTAcgoc4k9hDqDOhbyNyxKJTUwGLmLpz1J7AgpUwPIPJ1xEKGi1KNLrydL1zNzaKZIPIlhFLjKjzPztRpV1wi5LwS4AduMKLHK7znLPJrFnzBI-JPLjz7AFIPJLx1xU9tQjFUL7y3L2BJVMrJVpLxzgsWL1ItkpKVKCYC9Lwc56FULrF6KPJIrFAolrFILZLpyFI-J4rJVSKOyS504tKQrhKSTPIFJsKmqZKWqpyJEgpJVtQ7x1wTJ05RQTIy5-rbycL9KlLaKokZI3zDypCFJ7A7wolrL6iyiTIGgc5pCcThKnzJLBqPItqdrCqokokfFDrYyW5q8ITqI2zkFUF0EcBMEPEcFgA8FWzeClgSDfDLDx0waxCJDeqW1nBLw_sc5eKi4rhYa887LNKSdLxRRRRAdg9MajcUqW1uNxcc5zqk8Ya0icB_LArdRuNEb057B7By4K4RDib0jYKc4SdzqAA1PGpGmm3gnAJcoQlouMkAOybYO2QCTQagVM-_EAcFfgOjU8fgK4fgIEYkKobwDIJ7LAH0ckJkEAWVfgT0gPAAzW9gfgPiHAe2viCydYfgcocgfoGYLqG2_gIKdKAiWAC-Y2gOzAckSgRIAsPIAoacLUC0HWkEfWgQZ2usfgKINAb2lQZMoCJOiwV2mAeYKMAKCAeAG2kg_gC7UQJAW2kAAAPQlJwElRwB8WzvrH4CgTDnQ3TtroboUkbubpzpAGexEGtsrv4GrusUbpwHQr7qrvLr_yHuoE7vHp8UnqbrNvXDLpjutE7rrobtXvWATS1njtwF0EgBSCAkVobP-IYHYhAFoF9CyE1u1rNFoAtFntmBmH4HkAUHkHkCAA",__code:'<Button color="black" disabled>\n  Regular Disabled\n</Button>\n<Button color="red" bordered disabled>\n  Bordered Disabled\n</Button>',__scope:{props:A,Button:z}},r.a.createElement(z,{color:"black",disabled:!0},"Regular Disabled"),r.a.createElement(z,{color:"red",bordered:!0,disabled:!0},"Bordered Disabled")))}}}]);
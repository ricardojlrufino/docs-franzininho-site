(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{162:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(162)),i=["components"],c={slug:"hello-world",title:"Hello",author:"Endilie Yacop Sucipto",author_title:"Maintainer of Docusaurus",author_url:"https://github.com/endiliey",author_image_url:"https://avatars1.githubusercontent.com/u/17883920?s=460&v=4",tags:["hello","docusaurus"]},l={permalink:"/docs-franzininho-site/blog/hello-world",source:"@site/blog/2019-05-29-hello-world.md",description:"Welcome to this blog. This blog is created with Docusaurus 2 alpha.",date:"2019-05-29T00:00:00.000Z",tags:[{label:"hello",permalink:"/docs-franzininho-site/blog/tags/hello"},{label:"docusaurus",permalink:"/docs-franzininho-site/blog/tags/docusaurus"}],title:"Hello",readingTime:.12,truncated:!0,prevItem:{title:"Welcome",permalink:"/docs-franzininho-site/blog/welcome"},nextItem:{title:"Hola",permalink:"/docs-franzininho-site/blog/hola"}},u=[],s={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Welcome to this blog. This blog is created with ",Object(a.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},Object(a.b)("strong",{parentName:"a"},"Docusaurus 2 alpha")),"."))}p.isMDXComponent=!0}}]);
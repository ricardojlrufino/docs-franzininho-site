(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return l})),n.d(r,"toc",(function(){return m})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),i=(n(0),n(162)),a=["components"],c={id:"semaforo",title:"Sem\xe1foro",slug:"/franzininho-diy/semaforo",description:"Nesse exemplo vamos fazer um sem\xe1foro de uma via com Franzininho DIY"},l={unversionedId:"FranzininhoDIY/exemplos-arduino/semaforo",id:"FranzininhoDIY/exemplos-arduino/semaforo",isDocsHomePage:!1,title:"Sem\xe1foro",description:"Nesse exemplo vamos fazer um sem\xe1foro de uma via com Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/semaforo.md",slug:"/franzininho-diy/semaforo",permalink:"/docs/franzininho-diy/semaforo",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/semaforo.md",version:"current",sidebar:"docs",previous:{title:"Sensor de luz com LDR",permalink:"/docs/franzininho-diy/sensor-luz-ldr"},next:{title:"Theremim",permalink:"/docs/franzininho-diy/theremim"}},m=[{value:"Materiais",id:"materiais",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Video de Funcionamento",id:"video-de-funcionamento",children:[]}],u={toc:m};function d(e){var r=e.components,c=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(t.a)({},u,c,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Nesse exemplo vamos fazer um sem\xe1foro de uma via com Franzininho DIY."),Object(i.b)("h2",{id:"materiais"},"Materiais"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Placa Franzininho;"),Object(i.b)("li",{parentName:"ul"},"Protoboard;"),Object(i.b)("li",{parentName:"ul"},"LED vermelho"),Object(i.b)("li",{parentName:"ul"},"LED amarelo"),Object(i.b)("li",{parentName:"ul"},"LED verde"),Object(i.b)("li",{parentName:"ul"},"3 Resistores 330 R"),Object(i.b)("li",{parentName:"ul"},"Jumpers")),Object(i.b)("h2",{id:"circuito"},"Circuito"),Object(i.b)("p",null,"Fa\xe7a a seguinte liga\xe7\xe3o no protoboard:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"circuito semaforo",src:n(375).default})),Object(i.b)("p",null,"Sketch"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Franzininho\n  Exemplo: Sem\xe1foro\nNesse exemplo vamos fazer um sem\xe1foro de uma via.\n*/\nint vermelho = 2; //LED Vermelho\nint amarelo = 1; //LED Amarelo\nint verde = 0; //LED Verde\n\nvoid setup() {\n pinMode(vermelho,OUTPUT); //define LED vermelho como Sa\xedda\n pinMode(verde,OUTPUT);   //define LED verde como Sa\xedda\n pinMode(amarelo,OUTPUT); //define LED Amarelo como Sa\xedda\n}\n\nvoid loop() {\n  //fase 1\n  digitalWrite(vermelho,HIGH);\n  digitalWrite(amarelo,LOW);\n  digitalWrite(verde,LOW);\n  delay(5000);\n  //fase 2\n  digitalWrite(vermelho,LOW);\n  digitalWrite(amarelo,HIGH);\n  digitalWrite(verde,LOW);\n delay(1000);\n //fase 3\n  digitalWrite(vermelho,LOW);\n  digitalWrite(amarelo,LOW);\n  digitalWrite(verde,HIGH);\n  delay(5000);\n}\n")),Object(i.b)("h2",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(i.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311444144703668800?view=diagram"}),Object(i.b)("h2",{id:"video-de-funcionamento"},"Video de Funcionamento"),Object(i.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/jdFRHqfmzik",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0},162:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=o.a.createContext({}),u=function(e){var r=o.a.useContext(m),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},d=function(e){var r=u(e.components);return o.a.createElement(m.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},p=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=t,f=d["".concat(a,".").concat(p)]||d[p]||s[p]||i;return n?o.a.createElement(f,c(c({ref:r},m),{},{components:n})):o.a.createElement(f,c({ref:r},m))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var m=2;m<i;m++)a[m]=n[m];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},375:function(e,r,n){"use strict";n.r(r),r.default=n.p+"assets/images/semaforo-circuito-ad8d502f56ebf8aee34751edba36b634.png"}}]);
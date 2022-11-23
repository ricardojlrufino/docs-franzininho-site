(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{162:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var o=r(0),t=r.n(o);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=t.a.createContext({}),u=function(e){var n=t.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,b=s["".concat(i,".").concat(m)]||s[m]||p[m]||a;return r?t.a.createElement(b,l(l({ref:n},d),{},{components:r})):t.a.createElement(b,l({ref:n},d))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},312:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/sensor-luz-circuito-6c590c3ead770407b6f4c790d14d0251.png"},98:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return l})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return d})),r.d(n,"default",(function(){return s}));var o=r(3),t=r(7),a=(r(0),r(162)),i=["components"],l={id:"sensor-luz-ldr",title:"Sensor de luz com LDR",slug:"/franzininho-diy/sensor-luz-ldr",description:"Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica da Franzininho DIY"},c={unversionedId:"FranzininhoDIY/exemplos-arduino/sensor-luz-ldr",id:"FranzininhoDIY/exemplos-arduino/sensor-luz-ldr",isDocsHomePage:!1,title:"Sensor de luz com LDR",description:"Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica da Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/sensor-luz.md",slug:"/franzininho-diy/sensor-luz-ldr",permalink:"/docs/franzininho-diy/sensor-luz-ldr",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/sensor-luz.md",version:"current",sidebar:"docs",previous:{title:"Elefante Colorido! Que cor?",permalink:"/docs/franzininho-diy/elefante-colorido"},next:{title:"Sem\xe1foro",permalink:"/docs/franzininho-diy/semaforo"}},d=[{value:"Materiais",id:"materiais",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"Sketch",id:"sketch",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Video de Funcionamento",id:"video-de-funcionamento",children:[]}],u={toc:d};function s(e){var n=e.components,l=Object(t.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},u,l,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica. "),Object(a.b)("p",null,"Ser\xe1 exibido um exemplo de funcionamento de uma fotoc\xe9lula, onde ao escurecer ser\xe1 aceso o LED, como acontece com a luz da rua."),Object(a.b)("h2",{id:"materiais"},"Materiais"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Placa Franzininho;"),Object(a.b)("li",{parentName:"ul"},"Protoboard;"),Object(a.b)("li",{parentName:"ul"},"1 Resistor 10K;"),Object(a.b)("li",{parentName:"ul"},"1 LDR","(","10K",")"),Object(a.b)("li",{parentName:"ul"},"Jumpers")),Object(a.b)("h2",{id:"circuito"},"Circuito"),Object(a.b)("p",null,"Fa\xe7a a seguinte liga\xe7\xe3o no protoboard:"),Object(a.b)("p",null,Object(a.b)("img",{src:r(312).default})),Object(a.b)("h2",{id:"sketch"},"Sketch"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Franzininho\n  Exemplo: Sensor de Luz - LDR\n Nesse exemplo vamos ler um sensor LDR usando a entrada anal\xf3gica. Ser\xe1 exibido um exemplo de funcionamento de uma fotoc\xe9lula, onde ao escurecer ser\xe1 aceso o LED, como acontece na luz da rua. ;)\n*/\n//Sensor de luz com LDR\nint ledPin = 1; //Led no pino 1 - LED da placa\nint ldrPin = A1; //LDR no pino anal\xf3gico A1\nint ldrValor = 0; //Valor lido do LDR\n\nvoid setup() {\n pinMode(ledPin,OUTPUT); //define LED como Sa\xedda\n}\n\nvoid loop() {\n //ler o valor do LDR\n ldrValor = analogRead(ldrPin); //O valor lido ser\xe1 entre 0 e 1023\n //se o valor lido for maior que 800, liga o led\n if (ldrValor>= 800){\n   digitalWrite(ledPin, HIGH);      //aciona sa\xedda\n } else {  // sen\xe3o, apaga o led            \n   digitalWrite(ledPin,LOW);        //desliga sa\xedda\n }\n delay(100);\n}\n")),Object(a.b)("h2",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(a.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311443234729493056?view=diagram"}),Object(a.b)("h2",{id:"video-de-funcionamento"},"Video de Funcionamento"),Object(a.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/AzypBpXO238",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}s.isMDXComponent=!0}}]);
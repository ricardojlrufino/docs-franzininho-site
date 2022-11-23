(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"toc",(function(){return d})),r.d(n,"default",(function(){return p}));var t=r(3),i=r(7),a=(r(0),r(162)),o=["components"],c={id:"pisca-led",title:"Pisca LED",slug:"/franzininho-diy/pisca-led",description:"Nesse exemplo vamos aprender como fazer um pisca LED (Blink) com a Franzininho DIY."},l={unversionedId:"FranzininhoDIY/exemplos-arduino/pisca-led",id:"FranzininhoDIY/exemplos-arduino/pisca-led",isDocsHomePage:!1,title:"Pisca LED",description:"Nesse exemplo vamos aprender como fazer um pisca LED (Blink) com a Franzininho DIY.",source:"@site/docs/FranzininhoDIY/exemplos-arduino/pisca-led.md",slug:"/franzininho-diy/pisca-led",permalink:"/docs/franzininho-diy/pisca-led",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/pisca-led.md",version:"current",sidebar:"docs",previous:{title:"Sa\xeddas PWM",permalink:"/docs/franzininho-diy/saidas-pwm"},next:{title:"Controle brilho de LED",permalink:"/docs/franzininho-diy/brilho-led"}},d=[{value:"Materiais:",id:"materiais",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"Sketch",id:"sketch",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Video de Funcionamento",id:"video-de-funcionamento",children:[]}],u={toc:d};function p(e){var n=e.components,c=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(t.a)({},u,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"O primeiro contato com a programa\xe7\xe3o com o Arduino, voc\xea faz o blink ","(","que faz com que o led pisque em intervalos de tempo",")",". Com a Franzininho n\xe3o \xe9 diferente, voc\xea pode testar com o pr\xf3prio LED que ela tem ou caso voc\xea queira, pode ligar um LED em uma protoboard. A seguir vamos explicar como fazer um blink com a Franzininho."),Object(a.b)("p",null,Object(a.b)("img",{alt:"resultado Pisca LED",src:r(355).default})),Object(a.b)("h2",{id:"materiais"},"Materiais:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Placa Franzininho;"),Object(a.b)("li",{parentName:"ul"},"Protoboard;"),Object(a.b)("li",{parentName:"ul"},"LED 3mm;"),Object(a.b)("li",{parentName:"ul"},"Resistor 330;"),Object(a.b)("li",{parentName:"ul"},"Jumpers")),Object(a.b)("h2",{id:"circuito"},"Circuito"),Object(a.b)("p",null,"Na protoboard voc\xea pode montar o circuito para acionamento do LED da seguinte forma:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Circuito Pisca LED",src:r(356).default})),Object(a.b)("h2",{id:"sketch"},"Sketch"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Pisca LED - Blink\n\n  Esse exemplo exibe como piscar o LED presente na placa ou um LED externo ligado ao pino 1 da Franzininho em intervalos de 1 segundo.\n\n*/\n\nconst int LED = 1; //pino digital conectado ao LED\n\nvoid setup(){\n  pinMode(LED,OUTPUT); //pino digital de sa\xedda\n}\n\nvoid loop(){\n  digitalWrite(LED,HIGH);   //acende o led da placa\n  delay(1000);             //aguarda um segundo\n  digitalWrite(LED,LOW);  //apaga o led da placa\n  delay(1000);           //aguarda um segundo\n}\n")),Object(a.b)("h2",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(a.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311359028691206722?view=diagram"}),Object(a.b)("h2",{id:"video-de-funcionamento"},"Video de Funcionamento"),Object(a.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/0YHNiuUSfyk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0},162:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=i.a.createContext({}),u=function(e){var n=i.a.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=u(e.components);return i.a.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=t,b=p["".concat(o,".").concat(m)]||p[m]||s[m]||a;return r?i.a.createElement(b,c(c({ref:n},d),{},{components:r})):i.a.createElement(b,c({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var d=2;d<a;d++)o[d]=r[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},355:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/pisca-led-95dfe2300337a645c61ca8cbda964ef4.gif"},356:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/pisca-led-cafaefb0f69ebc87e542c140ed6f0f67.png"}}]);
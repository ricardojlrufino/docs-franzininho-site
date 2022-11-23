(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(162)),i=["components"],c={id:"leitura-tecla",title:"Leitura de Tecla",slug:"/franzininho-diy/leitura-tecla",description:"Nesse exemplo vamos fazer a leitura de uma tecla e acionar um LED quando a mesma for pressionada."},l={unversionedId:"FranzininhoDIY/exemplos-arduino/leitura-tecla",id:"FranzininhoDIY/exemplos-arduino/leitura-tecla",isDocsHomePage:!1,title:"Leitura de Tecla",description:"Nesse exemplo vamos fazer a leitura de uma tecla e acionar um LED quando a mesma for pressionada.",source:"@site/docs/FranzininhoDIY/exemplos-arduino/leitura-tecla.md",slug:"/franzininho-diy/leitura-tecla",permalink:"/en/docs/franzininho-diy/leitura-tecla",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/leitura-tecla.md",version:"current",sidebar:"docs",previous:{title:"Controle brilho de LED",permalink:"/en/docs/franzininho-diy/brilho-led"},next:{title:"Tecla Liga/Desliga",permalink:"/en/docs/franzininho-diy/tecla-liga-desliga"}},u=[{value:"Materiais",id:"materiais",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"Sketch",id:"sketch",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Video de Funcionamento",id:"video-de-funcionamento",children:[]}],d={toc:u};function s(e){var t=e.components,c=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},d,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Nesse exemplo vamos fazer a leitura de uma tecla e acionar um LED quando a mesma for pressionada."),Object(o.b)("h2",{id:"materiais"},"Materiais"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Placa Franzininho;"),Object(o.b)("li",{parentName:"ul"},"Protoboard;"),Object(o.b)("li",{parentName:"ul"},"LED 3mm;"),Object(o.b)("li",{parentName:"ul"},"1 Resistor 330;"),Object(o.b)("li",{parentName:"ul"},"1 Resistor de 1k;"),Object(o.b)("li",{parentName:"ul"},"1 Bot\xe3o;"),Object(o.b)("li",{parentName:"ul"},"Jumpers macho/f\xeamea")),Object(o.b)("h2",{id:"circuito"},"Circuito"),Object(o.b)("p",null,"No protoboard voc\xea deve inserir o LED, resistores e o bot\xe3o, conforme a imagem abaixo:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Circuito leitura tecla",src:a(399).default})),Object(o.b)("h2",{id:"sketch"},"Sketch"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Franzininho\n  Exemplo: Leitura de Tecla - Pull Down\n  Esse exemplo exibe como ler uma tecla com resistor de pull down e acionar um led quando ela for pressionada\n*/\nconst int LED = 1; //pino para o LED\nconst int BOTAO = 2; //pino para o bot\xe3o\nint val = 0; // val ser\xe1 utilizado para armazenar o estado do pino\nvoid setup(){\n  pinMode(LED,OUTPUT); //o LED \xe9 uma sa\xedda\n  pinMode(BOTAO,INPUT); //o BOTAO \xe9 uma entrada\n}\nvoid loop (){\nval = digitalRead(BOTAO); // l\xea e armazena o valor de entrada\ndigitalWrite(LED, val); //aciona LED conforme valor lido do bot\xe3o\n}\n")),Object(o.b)("h2",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(o.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311373301712683584?view=diagram"}),Object(o.b)("h2",{id:"video-de-funcionamento"},"Video de Funcionamento"),Object(o.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/JHdqOuj-WHc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}s.isMDXComponent=!0},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,b=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return a?r.a.createElement(b,c(c({ref:t},u),{},{components:a})):r.a.createElement(b,c({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},399:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/leitura-de-tecla-0133088e4f085079b1a5dc507efc2d45.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{162:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return b}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=d(e.components);return i.a.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},m=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,b=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return t?i.a.createElement(b,c(c({ref:a},s),{},{components:t})):i.a.createElement(b,c({ref:a},s))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},309:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/circuito-tecla-liga-desliga-0133088e4f085079b1a5dc507efc2d45.png"},95:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return u}));var n=t(3),i=t(7),r=(t(0),t(162)),o=["components"],c={id:"tecla-liga-desliga",title:"Tecla Liga/Desliga",slug:"/franzininho-diy/tecla-liga-desliga",description:"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos."},l={unversionedId:"FranzininhoDIY/exemplos-arduino/tecla-liga-desliga",id:"FranzininhoDIY/exemplos-arduino/tecla-liga-desliga",isDocsHomePage:!1,title:"Tecla Liga/Desliga",description:"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos.",source:"@site/docs/FranzininhoDIY/exemplos-arduino/tecla-liga-desliga.md",slug:"/franzininho-diy/tecla-liga-desliga",permalink:"/docs-franzininho-site/docs/franzininho-diy/tecla-liga-desliga",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/tecla-liga-desliga.md",version:"current",sidebar:"docs",previous:{title:"Leitura de Tecla",permalink:"/docs-franzininho-site/docs/franzininho-diy/leitura-tecla"},next:{title:"LED RGB",permalink:"/docs-franzininho-site/docs/franzininho-diy/led-rgb"}},s=[{value:"Materiais",id:"materiais",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"Sketch",id:"sketch",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]},{value:"Video de Funcionamento",id:"video-de-funcionamento",children:[]}],d={toc:s};function u(e){var a=e.components,c=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(n.a)({},d,c,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos."),Object(r.b)("h2",{id:"materiais"},"Materiais"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Placa Franzininho;"),Object(r.b)("li",{parentName:"ul"},"Protoboard;"),Object(r.b)("li",{parentName:"ul"},"LED 3mm; "),Object(r.b)("li",{parentName:"ul"},"1 Resistor 3300; "),Object(r.b)("li",{parentName:"ul"},"1 Resistor de 1K; "),Object(r.b)("li",{parentName:"ul"},"1 Bot\xe3o; "),Object(r.b)("li",{parentName:"ul"},"Jumpers;")),Object(r.b)("h2",{id:"circuito"},"Circuito"),Object(r.b)("p",null,"No protoboard voc\xea deve inserir o LED, resistores e o bot\xe3o, conforme a imagem abaixo:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito ",src:t(309).default})),Object(r.b)("h2",{id:"sketch"},"Sketch"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Franzininho\n  Exemplo: Tecla liga/desliga\n  Esse exemplo exibe como fazer ligar e desligar uma sa\xedda atrav\xe9s de uma tecla\n*/\nconst int LED = 1; //pino para o LED\nconst int BOTAO = 2; //pino para o bot\xe3o\nint estadoAnteriorBotao = 0;   // armazena o estado anterior do bot\xe3o\n\nvoid setup(){\n  pinMode(LED,OUTPUT); //o LED \xe9 uma sa\xedda\n  pinMode(BOTAO,INPUT); //o BOTAO \xe9 uma entrada\n}\n\nvoid loop (){\n int estadoAtualBT= digitalRead(BOTAO);      // L\xea estado do bot\xe3o\n delay(10);\n\nif ((estadoAtualBT != estadoAnteriorBotao)&& (estadoAtualBT == LOW)){       //Se o bot\xe3o foi pressionado e o seu estado mudou\n  digitalWrite(LED,!digitalRead(LED)); //inverte estado do LED\n}\n  estadoAnteriorBotao = estadoAtualBT;  //salva o estado do bot\xe3o para comparar na pr\xf3xima leitura\n}\n")),Object(r.b)("h2",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(r.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311373968060711489?view=diagram"}),Object(r.b)("h2",{id:"video-de-funcionamento"},"Video de Funcionamento"),Object(r.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/Aht0fUuGIjQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0}}]);
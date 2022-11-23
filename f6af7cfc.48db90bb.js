(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{155:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return s})),o.d(a,"metadata",(function(){return l})),o.d(a,"toc",(function(){return c})),o.d(a,"default",(function(){return u}));var n=o(3),t=o(7),r=(o(0),o(162)),i=["components"],s={id:"saida-digital",title:"Sa\xedda Digital",slug:"/franzininho-diy/exemplos-avr-libc/saida-digital",description:"Vamos entender como trabalhar com as sa\xeddas Digitais",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},l={unversionedId:"FranzininhoDIY/exemplos-avr-libc/saida-digital",id:"FranzininhoDIY/exemplos-avr-libc/saida-digital",isDocsHomePage:!1,title:"Sa\xedda Digital",description:"Vamos entender como trabalhar com as sa\xeddas Digitais",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/saida-digital.md",slug:"/franzininho-diy/exemplos-avr-libc/saida-digital",permalink:"/docs/franzininho-diy/exemplos-avr-libc/saida-digital",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/saida-digital.md",version:"current",sidebar:"docs",previous:{title:"Hello, World!",permalink:"/docs/franzininho-diy/exemplos-avr-libc/hello-world"},next:{title:"Entrada Digital",permalink:"/docs/franzininho-diy/exemplos-avr-libc/entrada-digital"}},c=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",children:[]},{value:"Pinos do ATtiny85",id:"pinos-do-attiny85",children:[{value:"Algumas Particularidades do circuito da Franzininho DIY",id:"algumas-particularidades-do-circuito-da-franzininho-diy",children:[]}]},{value:"Registradores respons\xe1veis pelos pinos de I/O",id:"registradores-respons\xe1veis-pelos-pinos-de-io",children:[]},{value:"C\xf3digos",id:"c\xf3digos",children:[]},{value:"Desafio",id:"desafio",children:[]}],d={toc:c};function u(e){var a=e.components,s=Object(t.a)(e,i);return Object(r.b)("wrapper",Object(n.a)({},d,s,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Agora que j\xe1 estamos com as ferramentas instaladas e a placa Franzininho DIY em m\xe3os, vamos dar in\xedcio aos estudos dos perif\xe9ricos internos do ATtiny85."),Object(r.b)("p",null,"Nesse artigo vamos explorar os pinos de I/O como sa\xedda digital. Ao final, voc\xea saber\xe1 como acionar dispositivos externos a Franzininho DIY."),Object(r.b)("h2",{id:"recursos-necess\xe1rios"},"Recursos Necess\xe1rios"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Placa Franzininho DIY(com Micronucleus)"),Object(r.b)("li",{parentName:"ul"},"Computador com as ferramentas de software instaladas")),Object(r.b)("h2",{id:"pinos-do-attiny85"},"Pinos do ATtiny85"),Object(r.b)("p",null,"O ATtiny85 possui 8 pinos, sendo que 6 deles podemos usar como I/O (entradas ou sa\xeddas) digitais. Os pinos de I/O s\xe3o nomeados conforme a porta que eles pertencem. Na figura a seguir vemos que os pinos do ATtiny85 s\xe3o nomeados de PBx, onde x \xe9 o n\xfamero correspondente ao pino no registrador (n\xe3o se preocupe, vamos ver mais detalhes a seguir):"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Pinagem do ATtiny85",src:o(429).default})),Object(r.b)("p",null,"Cada pino de I/O pode ser usado como entrada ou sa\xedda e tamb\xe9m como outras fun\xe7\xf5es nesse momento s\xf3 vamos trabalhar com os pinos funcionando como GPIO (General Porpouse Input/Output)."),Object(r.b)("p",null,"Conforme exibido na imagem acima, temos os seguintes pinos dispon\xedveis no ATtiny85:"),Object(r.b)("p",null,"PB0, PB1, PB2, PB3, PB4, PB5."),Object(r.b)("h3",{id:"algumas-particularidades-do-circuito-da-franzininho-diy"},"Algumas Particularidades do circuito da Franzininho DIY"),Object(r.b)("p",null,"Os pinos de I/O s\xe3o marcados em Amarelo no Pinout da Franzininho DIY"),Object(r.b)("p",null,Object(r.b)("img",{alt:"pinout Franzininho DIY",src:o(172).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"O pino PB5 \xe9 configurado como RESET na Franzininho DIY, sendo assim n\xe3o poderemos us\xe1-lo como I/O."),Object(r.b)("li",{parentName:"ul"},"Os pinos PB3 e PB4 s\xe3o usados para o circuito da USB, sendo assim temos que us\xe1-los com cautela. Geralmente esses pinos s\xe3o usados apenas como sa\xeddas digitais."),Object(r.b)("li",{parentName:"ul"},"O LED amarelo da placa est\xe1 ligado ao pino PB1."),Object(r.b)("li",{parentName:"ul"},"Os pinos PB0 E PB2 n\xe3o possuem circuito ligados a eles.")),Object(r.b)("h2",{id:"registradores-respons\xe1veis-pelos-pinos-de-io"},"Registradores respons\xe1veis pelos pinos de I/O"),Object(r.b)("p",null,"Para trabalhar com os pinos de I/O no ATtiny85 temos 3 registradores:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"PORTB: Registrador de dados. Respons\xe1vel pela escrita nos pinos;"),Object(r.b)("li",{parentName:"ul"},"DDRB: Registrador de dire\xe7\xe3o do pino. Respons\xe1vel pela configura\xe7\xe3o dos pinos para definir se ser\xe1 entrada ou sa\xedda;"),Object(r.b)("li",{parentName:"ul"},"PINB: Registrador de entrada da porta. Respons\xe1vel pela leitura do estado do pino.")),Object(r.b)("p",null,"Note que todos os registradores terminam com B no final. Isso significa que estamos trabalhando com o PORTB. Caso fosse um microcontrolador com maior quantidade de pinos ter\xedamos os finais A, B,C, etc. Cada porta s\xf3 possui no m\xe1ximo 8 pinos."),Object(r.b)("p",null,"Na se\xe7\xe3o 10 do datasheet do ATtiny85 temos todos os detalhes para se trabalhar com os I/O. A tabela a seguir, retirada do datasheet, exibe as configura\xe7\xf5es poss\xedveis para os pinos:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"configura\xe7\xe3o GPIO",src:o(180).default})),Object(r.b)("p",null,"A figura abaixo exibe os registradores respons\xe1veis pelos pino de I/O do PORTB:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"configura\xe7\xe3o GPIO",src:o(181).default})),Object(r.b)("p",null,"Note que cada bit dos registradores \xe9 respons\xe1vel por pino sendo indexado pelo n\xfamero correspondente ao bit. Dessa forma, se quisermos usar o pino PB1 para acionar o LED, devemos configurar o registrador DDRB da seguinte forma:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"7"),Object(r.b)("th",{parentName:"tr",align:null},"6"),Object(r.b)("th",{parentName:"tr",align:null},"5"),Object(r.b)("th",{parentName:"tr",align:null},"4"),Object(r.b)("th",{parentName:"tr",align:null},"3"),Object(r.b)("th",{parentName:"tr",align:null},"2"),Object(r.b)("th",{parentName:"tr",align:null},"1"),Object(r.b)("th",{parentName:"tr",align:null},"0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"-"),Object(r.b)("td",{parentName:"tr",align:null},"0"),Object(r.b)("td",{parentName:"tr",align:null},"0"),Object(r.b)("td",{parentName:"tr",align:null},"0"),Object(r.b)("td",{parentName:"tr",align:null},"0"),Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"0")))),Object(r.b)("p",null,"E para acionar ligar/deligar o LED devemos colocar 1 ou no bit correspondente no PORTB."),Object(r.b)("p",null,"Vamos a um exemplo para ficar mais claro."),Object(r.b)("h2",{id:"c\xf3digos"},"C\xf3digos"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"#include <avr/io.h>\n#include <util/delay.h>\n\n#define F_CPU 16500000L        // Frequ\xeancia do oscilador. usado para a fun\xe7\xe3o de delay\n\nint main(void)\n{\n  DDRB = 0b00000010;           // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n  while (1)\n  {\n      PORTB = 0b00000010;      // Liga o LED 1\n      _delay_ms(250);          // Aguarda 250 ms\n      PORTB = 0b00000000;      // Desliga o LED 1\n      _delay_ms(250);          // Aguarda 250 ms\n  }\n\n  return (0);\n}\n")),Object(r.b)("p",null,"O exemplo acima pisca o LED em intervalos de 250 ms. A configura\xe7\xe3o do pino PB1 como sa\xedda foi feito colocando o bit1 de DDRB em 1. J\xe1 para ligar e desligar o LED foi manipulado o bit 1 de PORTB, hora em 1 hora em 0."),Object(r.b)("p",null,"Bacana, n\xe3o?"),Object(r.b)("p",null,"podemos melhorar a manipula\xe7\xe3o dos bits dos registradores usando macros. As macros s\xe3o rotinas que facilitam nossas vidas. Recomendo que se voc\xea leia esse artigo para entender sobre as macros e as opera\xe7\xf5es efetuadas: ",Object(r.b)("a",{parentName:"p",href:"https://www.embarcados.com.br/bits-em-linguagem-c/"},"https://www.embarcados.com.br/bits-em-linguagem-c/")),Object(r.b)("p",null,"Vamos usar as seguintes macros:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"#define setBit(valor,bit) (valor |= (1<<bit))\n#define toogleBit(valor,bit) (valor ^= (1<<bit))\n")),Object(r.b)("p",null,"Os nomes j\xe1 s\xe3o auto-explicativos mas vamos verificar como us\xe1-las no programa em C:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-c"},"#include <avr/io.h>\n#include <util/delay.h>\n\n#define F_CPU 16500000L\n\n// Macros\n#define setBit(valor,bit) (valor |= (1 << bit))\n#define toogleBit(valor,bit) (valor ^= (1 << bit))\n\nint main(void)\n{\n    setBit(DDRB,PB1);          // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n    while (1)\n    {\n        toogleBit(PORTB, PB1); // Inverte o estado do pino\n        _delay_ms(250);        // Aguarda 250 ms\n    }\n\n    return (0);\n}\n")),Object(r.b)("p",null,"Dessa forma manipulamos somente os bits desejados, n\xe3o alterando os valores dos outros que poder\xe3o ser usados para outras aplica\xe7\xf5es."),Object(r.b)("h2",{id:"desafio"},"Desafio"),Object(r.b)("p",null,"Coloque outro LED no pino PB0 e o acione alternadamente ao pino PB1, ou seja, quando LED no PB0 estiver ligado o LED em PB1 deve apagar e vice-versa."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Autor"),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"th",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Data:"),Object(r.b)("td",{parentName:"tr",align:null},"24/04/2021")))))}u.isMDXComponent=!0},162:function(e,a,o){"use strict";o.d(a,"a",(function(){return u})),o.d(a,"b",(function(){return m}));var n=o(0),t=o.n(n);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=t.a.createContext({}),d=function(e){var a=t.a.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},u=function(e){var a=d(e.components);return t.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},p=t.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(o),p=n,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||r;return o?t.a.createElement(m,s(s({ref:a},c),{},{components:o})):t.a.createElement(m,s({ref:a},c))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},172:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/Pinagem-Franzininho-DIY-V2RV2-42a18903012c4dc223f9d4c774730625.png"},180:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/config-gpio-5448c58ddfc3c042b28c64b3cedb300e.png"},181:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/registradores-port-B-f8a36498e9dd1043ec81211a0fb7103c.png"},429:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/pinagem-attiny85-8fa815c3f3e21f9c3b699b09c9a7f6f1.png"}}]);
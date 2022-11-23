(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{133:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return s})),n.d(a,"toc",(function(){return l})),n.d(a,"default",(function(){return u}));var o=n(3),t=n(7),r=(n(0),n(162)),i=["components"],c={id:"saidas-pwm",title:"Sa\xeddas PWM",slug:"/franzininho-diy/saidas-pwm",description:"Nesse exemplo vamos aprender trabalhar com as sa\xeddas PWM na Franzininho DIY"},s={unversionedId:"FranzininhoDIY/exemplos-arduino/saidas-pwm",id:"FranzininhoDIY/exemplos-arduino/saidas-pwm",isDocsHomePage:!1,title:"Sa\xeddas PWM",description:"Nesse exemplo vamos aprender trabalhar com as sa\xeddas PWM na Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/pwm.md",slug:"/franzininho-diy/saidas-pwm",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/saidas-pwm",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/pwm.md",version:"current",sidebar:"docs",previous:{title:"Entradas Anal\xf3gicas",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/entradas-analogicas"},next:{title:"Pisca LED",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/pisca-led"}},l=[{value:"O que \xe9 PWM?",id:"o-que-\xe9-pwm",children:[]},{value:"Fun\xe7\xe3o",id:"fun\xe7\xe3o",children:[{value:"Sintaxe:",id:"sintaxe",children:[]},{value:"Par\xe2metros:",id:"par\xe2metros",children:[]},{value:"Exemplo",id:"exemplo",children:[]},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]}]}],d={toc:l};function u(e){var a=e.components,c=Object(t.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},d,c,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"o-que-\xe9-pwm"},"O que \xe9 PWM?"),Object(r.b)("p",null,"PWM, do ingl\xeas Pulse Width Modulation, \xe9 uma t\xe9cnica utilizada por sistemas digitais para varia\xe7\xe3o do valor m\xe9dio de uma forma de onda peri\xf3dica. A t\xe9cnica consiste em manter a frequ\xeancia de uma onda quadrada fixa e variar o tempo que o sinal fica em n\xedvel l\xf3gico alto. Esse tempo \xe9 chamado de duty cycle, ou seja, o ciclo ativo da forma de onda. No gr\xe1fico abaixo s\xe3o exibidas algumas modula\xe7\xf5es PWM:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Sinal PWM",src:n(386).default})),Object(r.b)("p",null,"Analisando as formas de onda nota-se que a frequ\xeancia da forma de onda tem o mesmo valor e varia-se o duty cycle da forma de onda. Quando o duty cicle est\xe1 em 0% o valor m\xe9dio da sa\xedda encontra-se em 0 V e consequentemente para um duty cycle de 100% a sa\xedda assume seu valor m\xe1ximo, que no caso \xe9 5V. Para um duty cycle de 50% a sa\xedda assumir\xe1 50% do valor da tens\xe3o, 2,5 V, e assim sucessivamente para cada varia\xe7\xe3o no duty cycle. Portanto, para calcular o valor m\xe9dio da tens\xe3o de sa\xedda de um sinal PWM pode-se utilizar a seguinte equa\xe7\xe3o:"),Object(r.b)("p",null,"Vout = ","(","duty cycle/100",")","*"," Vcc"),Object(r.b)("p",null,"Onde:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Vout - tens\xe3o de sa\xedda em V;"),Object(r.b)("li",{parentName:"ul"},"duty cycle - valor do ciclo ativo do PWM em %;"),Object(r.b)("li",{parentName:"ul"},"Vcc - tens\xe3o de alimenta\xe7\xe3o em V.")),Object(r.b)("p",null,"PWM pode ser usada para diversas aplica\xe7\xf5es, como por exemplo:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"controle de velocidade de motores;"),Object(r.b)("li",{parentName:"ul"},"varia\xe7\xe3o da luminosidade de leds;"),Object(r.b)("li",{parentName:"ul"},"gera\xe7\xe3o de sinais anal\xf3gicos;"),Object(r.b)("li",{parentName:"ul"},"gera\xe7\xe3o de sinais de \xe1udio.")),Object(r.b)("p",null,"Fonte: ",Object(r.b)("a",{parentName:"p",href:"https://www.embarcados.com.br/pwm-do-arduino/"},"Usando as sa\xeddas PWM do Arduino")),Object(r.b)("p",null,"Na Franzininho temos ",Object(r.b)("strong",{parentName:"p"},"3 pinos")," que pode ser usado como saidas PWM","(","PWM0,PWM1 e PWM4",")"," conforme pinout:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Pinagem Franzininho DIY",src:n(173).default})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Verificar limita\xe7\xf5es de uso dos pinos"))),Object(r.b)("h2",{id:"fun\xe7\xe3o"},"Fun\xe7\xe3o"),Object(r.b)("p",null,"A fun\xe7\xe3o analogWrite","(",")"," escreve um valor de PWM em um pino digital que possui a fun\xe7\xe3o PWM. Para usar o pino como sa\xedda PWM \xe9 necess\xe1rio configur\xe1-lo como sa\xedda digital."),Object(r.b)("h3",{id:"sintaxe"},"Sintaxe:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"analogWrite(pino, valor);")),Object(r.b)("h3",{id:"par\xe2metros"},"Par\xe2metros:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"pino:")," n\xfamero do pino onde ser\xe1 gerado o sinal PWM ","(","0,1,4 na Franzininho",")",";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"valor:")," valor m\xe9dio da tens\xe3o de sa\xedda que ser\xe1 gerado por PWM, entre 0 e 255, onde 0 representa 0V e 255, 5V.")),Object(r.b)("h3",{id:"exemplo"},"Exemplo"),Object(r.b)("p",null,"Vamos controlar o brilho do LED conforme o valor lido no potenci\xf4metro:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito",src:n(387).default})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"const byte LED = 1; //pino do LED\nconst byte POT = A1; //pino do Potenci\xf4metro\n\nvoid setup() {\n  pinMode(LED,OUTPUT);\n}\n\nvoid loop() {\n\n  int valor = analogRead(POT); // l\xea o valor do potenci\xf4metro\n  analogWrite(LED,valor/4);    //escreve no LED valor entre 0 e 255\n\n}\n")),Object(r.b)("h3",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(r.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/310740273604854336?view=diagram"}))}u.isMDXComponent=!0},162:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return b}));var o=n(0),t=n.n(o);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=t.a.createContext({}),d=function(e){var a=t.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},u=function(e){var a=d(e.components);return t.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},m=t.a.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return n?t.a.createElement(b,c(c({ref:a},l),{},{components:n})):t.a.createElement(b,c({ref:a},l))}));function b(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},173:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/pinagem-V2-7047a8d5930175670acc131497791fcc.png"},386:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/pwm-1a77c519e01b2cf6e365dd2e6e3a624e.jpg"},387:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/circuito-a6a0591bc42320cbe29b14bd9332f3c2.png"}}]);
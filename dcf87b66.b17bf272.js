(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{146:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return t})),a.d(o,"metadata",(function(){return l})),a.d(o,"toc",(function(){return c})),a.d(o,"default",(function(){return u}));var r=a(3),i=a(7),n=(a(0),a(162)),s=["components"],t={id:"franzininho-wifi-espidf-01",title:"Hello World! ESP-IDF",slug:"/franzininho-wifi/exemplos-espidf/hello-world-esp-idf",description:"Este texto tem como objetivo fazer o primeiro programa no ESP-IDF para a Franzininho WIFI",author:"Halysson Junior"},l={unversionedId:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-01",id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-01",isDocsHomePage:!1,title:"Hello World! ESP-IDF",description:"Este texto tem como objetivo fazer o primeiro programa no ESP-IDF para a Franzininho WIFI",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x01-Hello-world.md",slug:"/franzininho-wifi/exemplos-espidf/hello-world-esp-idf",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-espidf/hello-world-esp-idf",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x01-Hello-world.md",version:"current",sidebar:"docs",previous:{title:"Primeiros Passos com ESP-IDF",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-espidf/primeiros-passos"},next:{title:"Entrada digital",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-espidf/entrada-digital"}},c=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",children:[]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Esquem\xe1tico",id:"esquem\xe1tico",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"Compila\xe7\xe3o",id:"compila\xe7\xe3o",children:[]},{value:"Resultados",id:"resultados",children:[]}]},{value:"Abaixo segue o nosso circuito do nosso projeto",id:"abaixo-segue-o-nosso-circuito-do-nosso-projeto",children:[]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],d={toc:c};function u(e){var o=e.components,t=Object(i.a)(e,s);return Object(n.b)("wrapper",Object(r.a)({},d,t,{components:o,mdxType:"MDXLayout"}),Object(n.b)("p",null,"O artigo proposto dar\xe1 in\xedcio a uma s\xe9rie de projetos utilizando o framework oficial da Espressif, o IDF. O objetivo deste artigo \xe9 apresentar um exemplo de projeto que sirva como base para aqueles que est\xe3o dando seus primeiros passos na fam\xedlia de microcontroladores ESP32."),Object(n.b)("p",null,"Como \xe9 de praxe na programa\xe7\xe3o sempre que iniciamos uma nova linguagem ou quando aprendemos sobre um novo processador o primeiro projeto a ser criado \xe9 o \u201cOl\xe1 Mundo\u201c, caso contr\xe1rio teremos um eterno azar, ent\xe3o o que acha de come\xe7armos a estudar e apresentar nosso projeto ao Mundo?"),Object(n.b)("p",null,"Ao final desse exemplo voc\xea saber\xe1 como \xe9 a estrutura b\xe1sica de um programa no ESP-IDF e estar\xe1 pronto para os pr\xf3ximos passos."),Object(n.b)("h2",{id:"recursos-necess\xe1rios"},"Recursos Necess\xe1rios"),Object(n.b)("p",null,"Para esse exemplo voc\xea precisar\xe1 dos seguintes recursos:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Placa Franzininho WiFi;"),Object(n.b)("li",{parentName:"ul"},"Protoboard;"),Object(n.b)("li",{parentName:"ul"},"LED;"),Object(n.b)("li",{parentName:"ul"},"Resistor 220R ou 150R;"),Object(n.b)("li",{parentName:"ul"},"Computador com ESP-IDF instalado e configurado")),Object(n.b)("h2",{id:"desenvolvimento"},"Desenvolvimento"),Object(n.b)("p",null,"Nesse projeto foi utilizado a Franzininho WiFi, uma placa de desenvolvimento baseada no m\xf3dulo ESP 32-S2 (Wroom ou Wrover), o qual faz parte de uma iniciativa open hardware para ensinar sobre programa\xe7\xe3o e eletr\xf4nica aliando habilidades na soldagem de componentes eletr\xf4nicos."),Object(n.b)("p",null,"Como mencionado, vamos fazer o Ol\xe1 Mundo (Hello, World!), um programa base que tem como objetivo apresentar os recursos prim\xe1rios do processador em estudo. Nesse primeiro projeto vamos explorar as GPIOs, configuradas como sa\xedda digital, conectada a um LED externo para ligar e desligar numa frequ\xeancia de 1 Hertz (1 segundo) e enviar alguns dados de sa\xedda para serem mostrados no monitor do editor, para aqueles que est\xe3o migrando do Arduino j\xe1 est\xe3o familiarizados com esse exemplo, o famoso \u201cBlink\u201d."),Object(n.b)("h3",{id:"esquem\xe1tico"},"Esquem\xe1tico"),Object(n.b)("p",null,"Antes de come\xe7armos a escrever as primeiras linhas de c\xf3digo vamos realizar a montagem do circuito, vale ressaltar que na placa Franzininho WiFi h\xe1 um LED RGB on board endere\xe7\xe1vel, contudo ser\xe1 utilizado um LED externo, conectado a GPIO 2 ,para o primeiro projeto, vamos nos familiarizarmos com os comandos b\xe1sicos. Abaixo segue o esquem\xe1tico proposto:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Hello World_circuito",src:a(408).default})),Object(n.b)("h3",{id:"c\xf3digo"},"C\xf3digo"),Object(n.b)("p",null,"O nosso c\xf3digo possui uma estrutura bem simples e n\xe3o \xe9 necess\xe1rio acrescentar nenhuma biblioteca. Ao criar um novo projeto no IDF j\xe1 temos arquivos configurados e prontos para programa\xe7\xe3o do dispositivo, desta forma digite e comente as linhas do seguinte c\xf3digo no arquivo main.c :"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-c"},'/*\n Descri\xe7\xe3o: Exemplo que mostra Hello World utilizando quatro modalidade de sa\xedda de dados por meio do\n terminal e interagindo com um LED externo para indica\xe7\xe3o de estado.\n\n Autor: Halysson Junior\n Data : 28/03/21\n*/\n\n\n// Arquivos de cabe\xe7alho\n#include <stdio.h>\n#include "freertos/FreeRTOS.h"\n#include "freertos/task.h"\n#include "esp_system.h"\n#include "driver/gpio.h"\n\n\n// Defini\xe7\xe3o de pino\n\n#define LED 2\n\n// Vari\xe1vel Global\nchar status[2] = {\'L\',\'H\'}; // Caracter para indicar estado do LED H- HIGH e L - LOW\n\n\nvoid app_main(void) // Main\n{\n\n    gpio_pad_select_gpio(LED);// Mapeamento do pino LED\n    gpio_set_direction(LED,GPIO_MODE_OUTPUT); // Defini\xe7\xe3o\n\n    printf("Exemplo - Hello World \\n");// Mostra informa\xe7\xe3o no terminal\n\n\n    //Vari\xe1veis Local\n     bool i = 0 ; // Varia o estado l\xf3gico do LED\n\n      for (;;) {// Loop\n\n        i= i^1; // Opera\xe7\xe3o l\xf3gica XOR para alternar o estado do LED\n        gpio_set_level(LED,i); // Envia os n\xedveis l\xf3gicos 1 ou 0\n\n       printf("Hello World, i am Franzininho WiFi ----\x3e LED status : %c \\n", status[i]);\n\n        vTaskDelay(1000 / portTICK_PERIOD_MS); // Rotina de Delay de 1 segundo\n        fflush(stdout);  // Descarrega os buffers de sa\xedda de dados   \n\n    }// end Loop\n\n\n}// end Main\n')),Object(n.b)("p",null,"Voc\xea encontra o projeto completo na documenta\xe7\xe3o da Franzininho: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/Franzininho/exemplos-esp-idf/tree/main/exemplos/Hello_World"},"Hello_World")),Object(n.b)("p",null,"Caso ainda n\xe3o tenha instalado e configurado o IDF no seu computador ou tem d\xfavidas sobre as ferramentas, acesse o ",Object(n.b)("a",{parentName:"p",href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi-espidf/primeiros-passos"},"tutorial de instala\xe7\xe3o")),Object(n.b)("h3",{id:"compila\xe7\xe3o"},"Compila\xe7\xe3o"),Object(n.b)("p",null,"Ap\xf3s a codifica\xe7\xe3o vamos compilar o c\xf3digo, mas antes selecione o set target para ESP 32-S2."),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"idf.py set-target esp32s2")),Object(n.b)("p",null,"Ao final da compila\xe7\xe3o o resultado final deve ser semelhante \xe0 imagem mostrada abaixo, em caso de erros retorne os passos anteriores e revise seu c\xf3digo."),Object(n.b)("p",null,Object(n.b)("img",{alt:"resultado da compila\xe7\xe3o",src:a(409).default})),Object(n.b)("p",null,"Agora  vamos enviar o c\xf3digo fonte para nossa placa, no editor vamos pressionar o \xedcone abaixo e aguarde alguns segundos para assim dar in\xedcio ao programa \u201cOl\xe1 Mundo\u201d."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Gravando",src:a(410).default})),Object(n.b)("p",null,"Para vermos a sa\xedda de dados do nosso projeto clique no \xedcone apresentado abaixo."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Monitor",src:a(411).default})),Object(n.b)("h3",{id:"resultados"},"Resultados"),Object(n.b)("p",null,"Com a finaliza\xe7\xe3o do projeto o leitor observou que utilizamos uma estrutura\xe7\xe3o da linguagem C (main(), printf, fflush()), la\xe7os de repeti\xe7\xe3o (for()) e alguns tipos de vari\xe1veis primitivas (int e char) para formar nosso c\xf3digo . Aliados a isso utilizamos labels nativas do IDF para definir os pinos de entrada ou sa\xedda digital (GPIO_MODE_OUTPUT )."),Object(n.b)("p",null,"Abaixo segue o resultado final dos dados de sa\xedda :"),Object(n.b)("p",null,Object(n.b)("img",{alt:"monitor",src:a(412).default})),Object(n.b)("h2",{id:"abaixo-segue-o-nosso-circuito-do-nosso-projeto"},"Abaixo segue o nosso circuito do nosso projeto"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Monitor",src:a(413).default})),Object(n.b)("p",null,"Portanto, a partir deste projeto \xe9 poss\xedvel aplicar a l\xf3gica estruturada no c\xf3digo em diversos outros tipos de sensores, por exemplo : sensor de vibra\xe7\xe3o, sensor infravermelho, sensor de som e outros sensores digitais comumente comercializados."),Object(n.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(n.b)("p",null,"Nesse projeto apresentamos os conceitos b\xe1sicos para aqueles que desejam dar o pontap\xe9 inicial nos estudos sobre o IDF, contudo aconselhamos aos leitores a modificar o c\xf3digo no intuito de revisar a linguagem C e fixar algumas fun\xe7\xf5es nativas, os quais ser\xe3o normalmente utilizadas em outros projetos tamb\xe9m n\xe3o limitar-se apenas aos perif\xe9ricos GPIOs do microcontrolador, pois o ESP32-S2 possui diversos recursos tanto em hardware quanto em software. Desta forma o artigo servir\xe1 de acervo aos leitores para relembrar conceitos espec\xedficos e aprimorar os que j\xe1 possuem."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Autor"),Object(n.b)("th",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"th",href:"https://github.com/halyssonJr"},"Halysson Junior")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Data:"),Object(n.b)("td",{parentName:"tr",align:null},"13/05/2021")))))}u.isMDXComponent=!0},162:function(e,o,a){"use strict";a.d(o,"a",(function(){return u})),a.d(o,"b",(function(){return b}));var r=a(0),i=a.n(r);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function s(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function t(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?s(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function l(e,o){if(null==e)return{};var a,r,i=function(e,o){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var o=i.a.useContext(c),a=o;return e&&(a="function"==typeof e?e(o):t(t({},o),e)),a},u=function(e){var o=d(e.components);return i.a.createElement(c.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return i.a.createElement(i.a.Fragment,{},o)}},m=i.a.forwardRef((function(e,o){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return a?i.a.createElement(b,t(t({ref:o},c),{},{components:a})):i.a.createElement(b,t({ref:o},c))}));function b(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=m;var t={};for(var l in o)hasOwnProperty.call(o,l)&&(t[l]=o[l]);t.originalType=e,t.mdxType="string"==typeof e?e:r,s[1]=t;for(var c=2;c<n;c++)s[c]=a[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},408:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/01-esquematico-121114b8161dd3e6287dcf53cbef5789.jpg"},409:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/02-compilacao-8819c8dee549eaa15aa22bdf14b9b11b.png"},410:function(e,o,a){"use strict";a.r(o),o.default="data:image/png;base64,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"},411:function(e,o,a){"use strict";a.r(o),o.default="data:image/png;base64,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"},412:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/05-monitor-715bb898fc09463329bc8c14844b8509.png"},413:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/06-circuito-montado-58b7b31688a38dba89adcadf4bbdba30.png"}}]);
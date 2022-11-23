(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{152:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return s})),o.d(a,"metadata",(function(){return l})),o.d(a,"toc",(function(){return c})),o.d(a,"default",(function(){return p}));var t=o(3),n=o(7),i=(o(0),o(162)),r=["components"],s={id:"franzininho-wifi-espidf-02",title:"Entrada digital",slug:"/franzininho-wifi/exemplos-espidf/entrada-digital",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",author:"Halysson Junior"},l={unversionedId:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-02",id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-02",isDocsHomePage:!1,title:"Entrada digital",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x02-entrada-digital.md",slug:"/franzininho-wifi/exemplos-espidf/entrada-digital",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/entrada-digital",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x02-entrada-digital.md",version:"current",sidebar:"docs",previous:{title:"Hello World! ESP-IDF",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/hello-world-esp-idf"},next:{title:"Entrada Anal\xf3gica",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/entrada-analogica"}},c=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",children:[]},{value:"<strong>Recursos Necess\xe1rios</strong>",id:"recursos-necess\xe1rios-1",children:[]},{value:"Desenvolvimento",id:"desenvolvimento",children:[{value:"Esquem\xe1tico",id:"esquem\xe1tico",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"Compila\xe7\xe3o",id:"compila\xe7\xe3o",children:[]}]},{value:"Resultados",id:"resultados",children:[]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],d={toc:c};function p(e){var a=e.components,s=Object(n.a)(e,r);return Object(i.b)("wrapper",Object(t.a)({},d,s,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Seguindo nas aplica\xe7\xf5es com o ESP-IDF naa placa Franzininho WiFi vamos dar continuidade aos trabalhos com o perif\xe9rico de Entrada/Sa\xedda de Prop\xf3sito Geral ou do ingl\xeas General Purpose Input/Output (GPIO) . O objetivo deste texto \xe9 apresentar um exemplo de projeto para configurar os pinos como entrada digital.  Ao final, estaremos preparados para manipular tanto as sa\xeddas digitais, vista anteriormente, quanto \xe0s entradas de digitais."),Object(i.b)("h2",{id:"recursos-necess\xe1rios"},"Recursos Necess\xe1rios"),Object(i.b)("p",null,"Os materiais necess\xe1rios para realizar esse exemplo s\xe3o:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Placa Franzininho WiFi;"),Object(i.b)("li",{parentName:"ul"},"Protoboard;"),Object(i.b)("li",{parentName:"ul"},"Bot\xe3o ou chave t\xe1ctil;"),Object(i.b)("li",{parentName:"ul"},"LED;"),Object(i.b)("li",{parentName:"ul"},"Resistor de 220 ou 330 Ohm;"),Object(i.b)("li",{parentName:"ul"},"Cabos Jumpers;"),Object(i.b)("li",{parentName:"ul"},"Computador com ESP-IDF instalado e configurado.")),Object(i.b)("h2",{id:"recursos-necess\xe1rios-1"},Object(i.b)("strong",{parentName:"h2"},"Recursos Necess\xe1rios")),Object(i.b)("p",null,"Os materiais necess\xe1rios para realizar esse exemplo s\xe3o:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Placa Franzininho WiFi;"),Object(i.b)("li",{parentName:"ul"},"Protoboard;"),Object(i.b)("li",{parentName:"ul"},"Bot\xe3o ou chave t\xe1ctil;"),Object(i.b)("li",{parentName:"ul"},"LED;"),Object(i.b)("li",{parentName:"ul"},"Resistor de 220 ou 330 Ohm;"),Object(i.b)("li",{parentName:"ul"},"Cabos Jumpers;"),Object(i.b)("li",{parentName:"ul"},"Computador com ESP-IDF instalado e configurado.")),Object(i.b)("h2",{id:"desenvolvimento"},"Desenvolvimento"),Object(i.b)("p",null,"Nesse artigo vamos apresentar um exemplo de projeto utilizando as duas fun\xe7\xf5es do perif\xe9rico GPIO: entrada digital e sa\xedda digital. Na entrada digital vamos realizar a leitura do bot\xe3o t\xe1ctil e armazenar seu estado em uma vari\xe1vel que ir\xe1 interagir com o monitor e um LED externo, atuando como uma sa\xedda digital que ir\xe1 nos indicar o estado atual do bot\xe3o."),Object(i.b)("p",null,"O programa desenvolvido possibilita utilizar duas topologias de circuito : ",Object(i.b)("a",{parentName:"p",href:"https://www.embarcados.com.br/como-dimensionar-resistores-de-pull-up/"},Object(i.b)("strong",{parentName:"a"},"pull up"))," ou ",Object(i.b)("a",{parentName:"p",href:"https://www.embarcados.com.br/resistor-de-pull-down/"},Object(i.b)("strong",{parentName:"a"},"pull down")),", para mais informa\xe7\xf5es sobre essas topologias acesse os links referente a cada circuito. Nesse exemplo de projeto iremos utilizar a topologia com o pull up interno do processador, desta forma deve-se observar os coment\xe1rios ao longo do c\xf3digo a fim de habilitar ou desabilitar as topologias de circuito."),Object(i.b)("p",null,"Na placa Franzininho WiFI temos 38 pinos program\xe1veis com o perif\xe9rico GPIO, encorajamos aos leitores que alterem o c\xf3digo da forma como achar necess\xe1rio e praticar a codifica\xe7\xe3o do programa a fim de consolidar o conhecimento adquirido."),Object(i.b)("h3",{id:"esquem\xe1tico"},"Esquem\xe1tico"),Object(i.b)("p",null,"Para darmos in\xedcio ao projeto \xe9 importante realizar a montagem do circuito em protoboard observando com cuidado as conex\xf5es, iremos conectar um dos terminais do resistor no ",Object(i.b)("strong",{parentName:"p"},"GPIO 2")," e outro no LED externo por fim ligamos a ",Object(i.b)("strong",{parentName:"p"},"GPIO 15")," no bot\xe3o t\xe1ctil. Abaixo segue o esquem\xe1tico proposto:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"circuito",src:o(417).default})),Object(i.b)("h3",{id:"c\xf3digo"},"C\xf3digo"),Object(i.b)("p",null,"O programa desenvolvido possui uma estrutura bem simples e n\xe3o \xe9 necess\xe1rio acrescentar nenhuma biblioteca, apenas a manuten\xe7\xe3o dos arquivos de cabe\xe7alho j\xe1 presentes no projeto. Ao criar um novo projeto no IDF automaticamente j\xe1 temos arquivos configurados e prontos para programa\xe7\xe3o do dispositivo, desta forma digite e comente as linhas do seguinte c\xf3digo no arquivo ",Object(i.b)("strong",{parentName:"p"},"main.c :")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'/*\n    Autor : Halysson Junior\n    Data: 31/03/21\n    Descri\xe7\xe3o:\n    Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital)\n    e mostra seu estado no terminal.\n\n*/\n\n// Inclus\xe3o arquivos de cabe\xe7alho\n\n#include <stdio.h>\n#include "freertos/FreeRTOS.h"\n#include "freertos/task.h"\n#include "driver/gpio.h"\n#include "sdkconfig.h"\n\n// Defini\xe7\xf5es de Pinos\n#define BTN 15\n#define LED 2\n\n// Defini\xe7\xe3o de habilita\xe7\xe3o (PULLUP / PULLDOWN)\n#define PULLUP\n// #define PULLDOWN (Para habilitar pulldown descomente aqui e comente -> " #define PULLUP ")\n\n// Defini\xe7\xf5es de estado l\xf3gico (caso altere para pulldown, deve-se inverter os estado l\xf3gicos)\n#define ON 1\n#define OFF 0\n\nvoid app_main(void){  // Main\n\n gpio_pad_select_gpio(LED);                \n gpio_set_direction(LED,GPIO_MODE_OUTPUT);// onfigura LED como sa\xedda digital\n\n gpio_pad_select_gpio(BTN);  \n gpio_set_direction(BTN,GPIO_MODE_INPUT); // Configura LED como sa\xedda digital\n\n  #ifdef PULLDOWN // Habilita pulldown\n\n   gpio_pulldown_en(BTN);\n   gpio_pullup_dis(BTN);  \n\n  #endif\n\n  #ifdef PULLUP  // Habilita pullup\n  gpio_pullup_en(BTN);\n  gpio_pulldown_dis(BTN);\n\n  #endif\n\n// V\xe1riavel Local\nbool last_state_btn = 0; // Armazena o \xfaltimo estado do bot\xe3o       \n\n    while (1) { // Loop\n\n    // V\xe1riavel Local  \n     bool state_btn = gpio_get_level(BTN); // Leitura do bot\xe3o\n\n      if(!state_btn && !last_state_btn) {\n          gpio_set_level(LED,ON);           // Se bot\xe3o for zero ent\xe3o ... liga LED\n          printf("LED LIGADO");             // Mostra informa\xe7\xe3o no monitor "LED LIGADO"\n          last_state_btn = true;            // Bot\xe3o pressionado\n      }\n\n      else if(state_btn && last_state_btn){\n        gpio_set_level(LED,OFF);            // Sen\xe3o... desliga LED\n         printf ("LED DESLIGADO");          // Mostra informa\xe7\xe3o no monitor "LED DESLIGADO"\n        last_state_btn = false;             // Bot\xe3o solto\n      }\n      vTaskDelay(1/ portTICK_PERIOD_MS);    // Rotina de Delay de 1 segundo\n      fflush(stdout);                       // Descarrega os buffers de sa\xedda de dados   \n\n    }// endLoop\n\n}// endMain\n')),Object(i.b)("p",null,"Voc\xea encontra o projeto completo na documenta\xe7\xe3o da Franzininho: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://github.com/Franzininho/exemplos-esp-idf/tree/main/exemplos/Button"},"Button"))),Object(i.b)("p",null,"Caso ainda n\xe3o tenha instalado e configurado o IDF no seu computador ou tenha d\xfavidas sobre as ferramentas, acesse o tutorial de instala\xe7\xe3o (",Object(i.b)("a",{parentName:"p",href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi-espidf/primeiros-passos"},"Clique Aqui"),")."),Object(i.b)("h3",{id:"compila\xe7\xe3o"},"Compila\xe7\xe3o"),Object(i.b)("p",null,"Ap\xf3s a codifica\xe7\xe3o vamos compilar o c\xf3digo, mas antes selecione o ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"set-target"))," para ESP 32-S2:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"idf.py set-target esp32s2\n")),Object(i.b)("p",null,"Ao final da compila\xe7\xe3o o resultado final deve ser semelhante \xe0 imagem mostrada abaixo, em caso de erros retorne os passos anteriores e revise seu c\xf3digo."),Object(i.b)("p",null,Object(i.b)("img",{alt:"resultado da compila\xe7\xe3o",src:o(418).default})),Object(i.b)("p",null,"Ap\xf3s a etapa de compila\xe7\xe3o vamos enviar o c\xf3digo fonte para nossa placa, no editor pressione o \xedcone abaixo e aguarde alguns segundos para assim dar in\xedcio ao programa \u201cButton\u201d(seta preta) e para vermos a sa\xedda de dados do nosso projeto clique no \xedcone no formato de monitor (seta vermelha):"),Object(i.b)("p",null,Object(i.b)("img",{alt:"atalhos de compila\xe7\xe3o",src:o(419).default})),Object(i.b)("h2",{id:"resultados"},"Resultados"),Object(i.b)("p",null,"Finalizando o exemplo de projeto o leitor deve ter observado que no programa Button, foram utilizadas as estruturas de condi\xe7\xe3o IF / ELSE IF para interagir com o estado atual do bot\xe3o, adicionou-se \xe0s uma nova label nativa para indicar as entradas digitais (GPIO_MODE_INPUT) e as fun\xe7\xf5es para indicar topologia do circuito ( gpio_pullup_en()/gpio pulldown_dis()) utilizado e verificar a leitura digital no pino definido no cabe\xe7alho do c\xf3digo."),Object(i.b)("p",null,"Abaixo segue o resultado final dos dados de sa\xedda no monitor:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"sa\xedda monitor serial",src:o(420).default})),Object(i.b)("p",null,"Abaixo segue o nosso circuito do nosso projeto:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"teste na bancada",src:o(421).default})),Object(i.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(i.b)("p",null,"Nesse projeto conclu\xedmos o estudo do perif\xe9rico base para iniciar no mundo dos microcontroladores, pois a partir desse conhecimento adquirido podemos reciclar para as outras fam\xedlias do ESP32, como tamb\xe9m em outros chips baseados na linguagem C para estruturar seu programa. Como mencionado na se\xe7\xe3o de Desenvolvimento, este segundo artigo deseja consolidar o conhecimento nesse perif\xe9rico (GPIO), por tanto deixo o desafio de criar um contador de pulsos de 0 at\xe9 10 e reiniciado sempre quando forma maior que 10, ao final de cada contagem deve-se acionar um LED e mostrar quantas contagens j\xe1 foram feitas. Desejo sorte \xe0queles que ir\xe3o realizar o desafio e bons estudos, que a ",Object(i.b)("strong",{parentName:"p"},"for\xe7a esteja com todos n\xf3s.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Autor"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"th",href:"https://github.com/halyssonJr"},"Halysson Junior")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Data:"),Object(i.b)("td",{parentName:"tr",align:null},"01/06/2021")))))}p.isMDXComponent=!0},162:function(e,a,o){"use strict";o.d(a,"a",(function(){return p})),o.d(a,"b",(function(){return b}));var t=o(0),n=o.n(t);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),d=function(e){var a=n.a.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},p=function(e){var a=d(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),m=t,b=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return o?n.a.createElement(b,s(s({ref:a},c),{},{components:o})):n.a.createElement(b,s({ref:a},c))}));function b(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},417:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/1-124f6f4ee8bacde41bd8a9e355dc439a.png"},418:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/2-9dcac030cd53ee20f535abf4683f595c.png"},419:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/3-e82c6cff8b1723ecc738df1fa83a7f4d.png"},420:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/4-398af45ebe97733b089183f9be584ceb.png"},421:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/5-38b38892827b20fb4c4fad0565d3620c.png"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var n=t(0),o=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var a=o.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=p(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},m=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,u=d["".concat(r,".").concat(m)]||d[m]||b[m]||i;return t?o.a.createElement(u,c(c({ref:a},l),{},{components:t})):o.a.createElement(u,c({ref:a},l))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,r=new Array(i);r[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<i;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},182:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/libraries-43f696d429c655da2cf36dc63cfc72e0.png"},308:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/circuito-display-oled-i2c-ff5b68392bb5d09ccc0c91e16b875d4c.png"},93:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return d}));var n=t(3),o=t(7),i=(t(0),t(162)),r=["components"],c={id:"circuitpython-display-oled-i2c",title:"Display OLED I2C",slug:"/franzininho-wifi/exemplos-circuitpython/display-oled-i2c",description:"Nesse exemplo aprenderemos usar o display OLED com comunica\xe7\xe3o I2C explorando as funcionalidades b\xe1sicas usando o CircuitPython.",author:"Cl\xe1udio Lu\xeds Vieira Oliveira"},s={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-display-oled-i2c",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-display-oled-i2c",isDocsHomePage:!1,title:"Display OLED I2C",description:"Nesse exemplo aprenderemos usar o display OLED com comunica\xe7\xe3o I2C explorando as funcionalidades b\xe1sicas usando o CircuitPython.",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/display-oled-i2c.md",slug:"/franzininho-wifi/exemplos-circuitpython/display-oled-i2c",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/display-oled-i2c",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/display-oled-i2c.md",version:"current",sidebar:"docs",previous:{title:"Pinos de Toque Capacitivo",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/touch-capacitivo"},next:{title:"Sensor de temperatura e umidade DHT11",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/dht11"}},l=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",children:[]}],p={toc:l};function d(e){var a=e.components,c=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(n.a)({},p,c,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Nesse exemplo aprenderemos usar o display OLED com comunica\xe7\xe3o I2C explorando as funcionalidades b\xe1sicas usando o CircuitPython."),Object(i.b)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),Object(i.b)("p",null,"Identifique os seguintes materiais necess\xe1rios para este projeto:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 Franzininho WiFi."),Object(i.b)("li",{parentName:"ul"},"1 Display OLED 128x64 I2C."),Object(i.b)("li",{parentName:"ul"},"1 Protoboard."),Object(i.b)("li",{parentName:"ul"},"Cabos de liga\xe7\xe3o.")),Object(i.b)("h2",{id:"circuito"},"Circuito"),Object(i.b)("p",null,"A pr\xf3xima etapa consiste em realizar a montagem da maneira indicada pela figura a seguir:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Circuito Display OLED I2C",src:t(308).default})),Object(i.b)("p",null,"Resumindo o que \xe9 mostrado nas Figuras 4.2 at\xe9 4.5, a conex\xe3o dos terminais do OLED aos terminais das respectivas placas de desenvolvimento deve ser realizada conforme a tabela a seguir."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"OLED I2C"),Object(i.b)("th",{parentName:"tr",align:"center"},"Franzininho WiFi"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"SDA (DATA)"),Object(i.b)("td",{parentName:"tr",align:"center"},"GPIO8")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"SCK (CLK)"),Object(i.b)("td",{parentName:"tr",align:"center"},"GPIO9")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"VDD"),Object(i.b)("td",{parentName:"tr",align:"center"},"3V3")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"GND"),Object(i.b)("td",{parentName:"tr",align:"center"},"GND")))),Object(i.b)("h2",{id:"c\xf3digo"},"C\xf3digo"),Object(i.b)("p",null,"Como o display OLED \xe9 um componente com funcionamento bastante complexo, vamos fazer uso de uma biblioteca que implementa todas as funcionalidades, permitindo que nossos programas possam ser implementados de maneira bastante simples e produtiva."),Object(i.b)("p",null,"As bibliotecas para o CircuitPython podem ser obtidas atrav\xe9s do endere\xe7o ",Object(i.b)("a",{parentName:"p",href:"https://circuitpython.org/libraries"},"https://circuitpython.org/libraries"),". Escolha e baixe o arquivo de acordo com a vers\xe3o do CircuitPyhthon que voc\xea tem instalado na Franzininho WiFi."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Bibliotecas",src:t(182).default})),Object(i.b)("p",null,"Em seguida, copie os seguintes arquivos diretamente para a posta lib do sistema de arquivos da Franzininho WiFi:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"adafruit_ssd1306.mpy"),Object(i.b)("li",{parentName:"ul"},"adafruit_framebuf.mpy")),Object(i.b)("p",null,"Copie tamb\xe9m o arquivo ",Object(i.b)("strong",{parentName:"p"},"font5x8.bin"),", mas neste caso, para a pasta raiz da Franzininho WiFi. Por fim, implemente o programa abaixo no arquivo ",Object(i.b)("strong",{parentName:"p"},"code.py")," que est\xe1 localizado na pasta raiz da Franzininho WiFi."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import board\nimport busio\nimport adafruit_ssd1306\nimport time\n\ni2c = busio.I2C(scl=board.IO9, sda=board.IO8)\noled = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)\n\ntry:\n  inverter = False\n  while True:\n    oled.invert(inverter)\n    oled.fill(0)\n    oled.rect(0, 0, 128, 64, 1)\n    oled.rect(2, 2, 124, 60, 1)\n    oled.text('Franzininho', 4, 4, 1)\n    oled.text('WiFi', 4, 14, 1)\n    oled.show()\n    inverter = not inverter\n    time.sleep(2)\nfinally:\n  oled.invert(False)\n  oled.fill(0)\n  oled.show()\n")),Object(i.b)("h2",{id:"an\xe1lise-do-c\xf3digo"},"An\xe1lise do c\xf3digo"),Object(i.b)("p",null,"Devemos importar as bibliotecas busio e adafruit_ssd1306, que ser\xe3o respons\xe1veis pelas classes que ir\xe3o possibilitar a comunica\xe7\xe3o I2C e o uso do display OLED, respectivamente. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import busio\nimport adafruit_ssd1306\n")),Object(i.b)("p",null,"A comunica\xe7\xe3o I2C ser\xe1 realizada atrav\xe9s do terminais ",Object(i.b)("strong",{parentName:"p"},"IO9")," e ",Object(i.b)("strong",{parentName:"p"},"IO8")," da Franzininho WiFi, conforme podemos observar na pinagem, dispon\xedvel em ",Object(i.b)("a",{parentName:"p",href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi"},"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi")," "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"i2c = busio.I2C(scl=board.IO9, sda=board.IO8)\n")),Object(i.b)("p",null,"A configura\xe7\xe3o do display OLED deve levar em conta as suas dimens\xf5es e o seu endere\xe7o no barramento I2C."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"oled = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)\n")),Object(i.b)("p",null,"Neste programa o objetivo e realizar a invers\xe3o da exibi\xe7\xe3o do conte\xfado no display a cada 2 segundos. Desta forma, ser\xe1 usado o m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"invert")," que receber\xe1 uma vari\xe1vel booleana como par\xe2metro, sendo seu valor alternado entre ",Object(i.b)("inlineCode",{parentName:"p"},"True")," e ",Object(i.b)("inlineCode",{parentName:"p"},"False"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"oled.invert(inverter)\n")),Object(i.b)("p",null,"O m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"fill")," \xe9 usado para preencher toda \xe1rea do display e atuar\xe1 em conjunto com o m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"invert"),". Como se trata de um display monocrom\xe1tico temos duas cores dispon\xedveis, 0 (zero) que representa o preto (pixel desligado) e 1 (um) para especificar o branco (pixel ligado), caso o m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"invert")," tenha recebido como par\xe2metro o valor False. Por outro lado, caso ",Object(i.b)("inlineCode",{parentName:"p"},"invert")," receber True como par\xe2metro,  1 (um) vai representar o preto (pixel desligado) e 0 (zero) vai especificar o branco (pixel ligado)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"oled.invert(inverter)\noled.fill(0)\n")),Object(i.b)("p",null,"Na sequ\xeancia foi usado o m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"rect")," para desenhar um ret\xe2ngulo come\xe7ando nas coordenadas ",Object(i.b)("strong",{parentName:"p"},"x = 0")," e ",Object(i.b)("strong",{parentName:"p"},"y = 0")," e com ",Object(i.b)("strong",{parentName:"p"},"128 pixels de largura")," e ",Object(i.b)("strong",{parentName:"p"},"64 pixels de altura")," e, logo em seguida, um outro ret\xe2ngulo levemente inferior. O \xfaltimo par\xe2metro do m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"rect")," consiste na cor que, neste exemplo, ser\xe1 branco. Desta forma, acabamos desenhando uma borda dupla que envolve toda a \xe1rea do display. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"oled.rect(0, 0, 128, 64, 1)\noled.rect(2, 2, 124, 60, 1)\n")),Object(i.b)("p",null,"O m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"text")," possibilita exibir um texto nas coordenadas e na cor especificadas."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"oled.text('Franzininho', 4, 4, 1)\noled.text('WiFi', 4, 14, 1)\n")),Object(i.b)("p",null,"O m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"show"),", ir\xe1 executar os m\xe9todos usados anteriormente, ou seja, ",Object(i.b)("inlineCode",{parentName:"p"},"fill"),", ",Object(i.b)("inlineCode",{parentName:"p"},"rect")," e ",Object(i.b)("inlineCode",{parentName:"p"},"text")," no display. Ou seja, qualquer conte\xfado s\xf3 \xe9 exibido no display quando o m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"show")," \xe9 executado."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"oled.show()\n")),Object(i.b)("p",null,"Tente exibir outros textos e imagens. Compartilhe seus resultados com a comunidade. "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",Object(i.b)("a",{parentName:"p",href:"https://discord.gg/H5kENmWGaz"},"Discord")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Autor"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"th",href:"mailto:claudio.oliveira@fatec.sp.gov.br"},"Cl\xe1udio Lu\xeds Vieira Oliveira")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Data:"),Object(i.b)("td",{parentName:"tr",align:null},"07/10/2021")))))}d.isMDXComponent=!0}}]);
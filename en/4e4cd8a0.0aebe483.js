(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{162:function(e,o,a){"use strict";a.d(o,"a",(function(){return m})),a.d(o,"b",(function(){return d}));var r=a(0),n=a.n(r);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function i(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?i(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function p(e,o){if(null==e)return{};var a,r,n=function(e,o){if(null==e)return{};var a,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)a=t[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),c=function(e){var o=n.a.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},m=function(e){var o=c(e.components);return n.a.createElement(l.Provider,{value:o},e.children)},b={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},u=n.a.forwardRef((function(e,o){var a=e.components,r=e.mdxType,t=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||t;return a?n.a.createElement(d,s(s({ref:o},l),{},{components:a})):n.a.createElement(d,s({ref:o},l))}));function d(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var t=a.length,i=new Array(t);i[0]=u;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<t;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},297:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/circuito-servo-cdd775c22e65131a61c0d1db61c05fe1.webp"},298:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/biblioteca-servo-58357a122b96bde035495e9835cb75e7.png"},88:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return s})),a.d(o,"metadata",(function(){return p})),a.d(o,"toc",(function(){return l})),a.d(o,"default",(function(){return m}));var r=a(3),n=a(7),t=(a(0),a(162)),i=["components"],s={id:"circuitpython-servo-motor",title:"Servo motor",slug:"/franzininho-wifi/exemplos-circuitpython/servo-motor",description:"Confira nesse artigo como controlar um servo motor com a Franzininho WiFi no CircuitPython. Veja como \xe9 f\xe1cil!",author:"Mateus Adriano Ventura Vieira"},p={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-servo-motor",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-servo-motor",isDocsHomePage:!1,title:"Servo motor",description:"Confira nesse artigo como controlar um servo motor com a Franzininho WiFi no CircuitPython. Veja como \xe9 f\xe1cil!",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/servo-motor.md",slug:"/franzininho-wifi/exemplos-circuitpython/servo-motor",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/servo-motor",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/servo-motor.md",version:"current",sidebar:"docs",previous:{title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04"},next:{title:"Primeiros Passos",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/primeiros-passos"}},l=[{value:"<strong>Materiais Necess\xe1rios</strong>",id:"materiais-necess\xe1rios",children:[]},{value:"<strong>Circuito</strong>",id:"circuito",children:[]},{value:"<strong>C\xf3digos</strong>",id:"c\xf3digos",children:[{value:"<strong>Exemplo 1</strong>",id:"exemplo-1",children:[]},{value:"<strong>Exemplo 2</strong>",id:"exemplo-2",children:[]}]},{value:"<strong>An\xe1lise dos C\xf3digos</strong>",id:"an\xe1lise-dos-c\xf3digos",children:[{value:"<strong>Exemplo 1</strong>",id:"exemplo-1-1",children:[]}]},{value:"<strong>Conclus\xe3o</strong>",id:"conclus\xe3o",children:[]}],c={toc:l};function m(e){var o=e.components,s=Object(n.a)(e,i);return Object(t.b)("wrapper",Object(r.a)({},c,s,{components:o,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Um servo motor \xe9 um pequeno motor de corrente cont\xednua. Diferentemente dos demais motores DC, onde apenas controlamos a velocidade de giro, conseguimos controlar a posi\xe7\xe3o de um servo, atrav\xe9s do PWM."),Object(t.b)("p",null,"O servo que vamos utilizar nesse exemplo, tem a resolu\xe7\xe3o de meia volta, ou seja, de 0\xb0 a 180\xb0."),Object(t.b)("h2",{id:"materiais-necess\xe1rios"},Object(t.b)("strong",{parentName:"h2"},"Materiais Necess\xe1rios")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"1 Placa Franzininho WiFi com CircuitPython;"),Object(t.b)("li",{parentName:"ul"},"1 Micro servo 9g;"),Object(t.b)("li",{parentName:"ul"},"1 Protoboard;"),Object(t.b)("li",{parentName:"ul"},"1 potenci\xf4metro de 10 k\u03a9;"),Object(t.b)("li",{parentName:"ul"},"Jumpers.")),Object(t.b)("h2",{id:"circuito"},Object(t.b)("strong",{parentName:"h2"},"Circuito")),Object(t.b)("p",null,"Para os exemplos que vamos ver a seguir, realize a seguinte montagem:"),Object(t.b)("p",null,Object(t.b)("img",{alt:"Circuito Servo Motor",src:a(297).default})),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Observa\xe7\xe3o:")," o servo deve ser conectado ao 5V da placa. E, caso deseje usar mais de dois servos, uma fonte externa deve ser usada."),Object(t.b)("h2",{id:"c\xf3digos"},Object(t.b)("strong",{parentName:"h2"},"C\xf3digos")),Object(t.b)("p",null,"Assim como quando aprendemos a usar PWM, vamos importar o m\xf3dulo simpleio. Tamb\xe9m, vamos importar um novo m\xf3dulo para trabalharmos com o servo motor."),Object(t.b)("p",null,"Para ter acesso a esses m\xf3dulos, acesse o endere\xe7o: ",Object(t.b)("a",{parentName:"p",href:"https://circuitpython.org/libraries"},"https://circuitpython.org/libraries"),". Fa\xe7a o download, de acordo com a vers\xe3o do CircuitPython instalada na sua Franzininho WiFi."),Object(t.b)("p",null,Object(t.b)("img",{alt:"Circuito Servo Motor",src:a(298).default})),Object(t.b)("p",null,"Ap\xf3s finalizar o download, importe os dois m\xf3dulos para a pasta de arquivos da Franzininho WiFi:"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"simpleio.mpy"),";"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("strong",{parentName:"li"},"adafruit_motor"),".")),Object(t.b)("h3",{id:"exemplo-1"},Object(t.b)("strong",{parentName:"h3"},"Exemplo 1")),Object(t.b)("p",null,"No primeiro exemplo, vamos aprender a como programar um servo motor usando CircuitPython. Para isso, copie o c\xf3digo abaixo:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import board\nimport pwmio\nfrom adafruit_motor import servo \nfrom time import sleep\n\npin = board.IO1\npwm = pwmio.PWMOut(pin, frequency = 50)\n\nmy_servo = servo.Servo(pwm)\n\nwhile True:\n    for angle in range(0, 180, 10): \n        my_servo.angle = angle\n        sleep(0.1)\n    for angle in range(180, 0, -10): \n        my_servo.angle = angle\n        sleep(0.1)\n")),Object(t.b)("p",null,"Salve e execute o c\xf3digo."),Object(t.b)("h3",{id:"exemplo-2"},Object(t.b)("strong",{parentName:"h3"},"Exemplo 2")),Object(t.b)("p",null,"J\xe1 nesse exemplo, vamos controlar o posicionamento do servo atrav\xe9s de um potenci\xf4metro. E para isso, vamos usar alguns recursos que aprendemos anteriormente. Escreva o c\xf3digo abaixo:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import board\nimport pwmio\nfrom adafruit_motor import servo\nimport simpleio\nimport math\nfrom analogio import AnalogIn\nfrom time import sleep\n\npin = board.IO1\npwm = pwmio.PWMOut(pin, frequency = 50)\nmy_servo = servo.Servo(pwm)\n\npotPin = board.IO2\npot = AnalogIn(potPin)\n\ndef converter(pin):\n    pinValue = pin.value\n    mapValue = math.trunc(simpleio.map_range\n               (pinValue, 536, 51355, 0, 180))\n    return mapValue\n\nwhile True:\n    angle = converter(pot)\n    my_servo.angle = angle\n    sleep(0.1)\n")),Object(t.b)("p",null,"Ap\xf3s terminar de escrever, salve o c\xf3digo e teste-o."),Object(t.b)("h2",{id:"an\xe1lise-dos-c\xf3digos"},Object(t.b)("strong",{parentName:"h2"},"An\xe1lise dos C\xf3digos")),Object(t.b)("h3",{id:"exemplo-1-1"},Object(t.b)("strong",{parentName:"h3"},"Exemplo 1")),Object(t.b)("p",null,"O primeiro m\xf3dulo que vamos importar, \xe9 o ",Object(t.b)("strong",{parentName:"p"},"board"),". Ele possibilita o acesso aos pinos da placa:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import board\n")),Object(t.b)("p",null,"Para conseguirmos usar os pinos PWM, precisamos do m\xf3dulo ",Object(t.b)("strong",{parentName:"p"},"pwmio"),":"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import pwmio\n")),Object(t.b)("p",null,"Tamb\xe9m, ser\xe1 necess\xe1rio a biblioteca auxiliar ",Object(t.b)("strong",{parentName:"p"},"adafruit_motor.servo"),". Ela ser\xe1 \xfatil para controlar o servo com base na sa\xedda PWM:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"from adafruit_motor import servo\n")),Object(t.b)("p",null,"E, por \xfaltimo, precisaremos da fun\xe7\xe3o ",Object(t.b)("strong",{parentName:"p"},"sleep")," do m\xf3dulo ",Object(t.b)("strong",{parentName:"p"},"time"),", para intervalos de temporiza\xe7\xe3o:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"from time import sleep\n")),Object(t.b)("p",null,"Agora, vamos atribuir o GPIO1 da placa a vari\xe1vel pin:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"pin  =  board.IO1\n")),Object(t.b)("p",null,"Tamb\xe9m, configuraremos esse pino como uma sa\xedda PWM. Repare, que diferente do LED, precisamos informar a frequ\xeancia, pois, por padr\xe3o ela est\xe1 configurada com 500Hz e o padr\xe3o do servo motor \xe9 50Hz:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"pwm  =  pwmio.PWMOut(pin,  frequency  =  50)\n")),Object(t.b)("p",null,"Al\xe9m disso, vamos criar o objeto ",Object(t.b)("strong",{parentName:"p"},"my_servo")," e atribuir o pino ",Object(t.b)("strong",{parentName:"p"},"pwm")," a ele:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"my_servo  =  servo.Servo(pwm)\n")),Object(t.b)("p",null,"Por fim, dentro do ",Object(t.b)("strong",{parentName:"p"},"while True"),", o nosso loop, faremos com que o servo se mova continuamente. Para isso, usaremos a estrutura de repeti\xe7\xe3o ",Object(t.b)("strong",{parentName:"p"},"for")," e o comando ",Object(t.b)("strong",{parentName:"p"},"range( )"),", que gera uma lista."),Object(t.b)("p",null,"Como par\xe2metros do primeiro la\xe7o, vamos informar o valor inicial (0), valor final(180) e o intervalo de contagem, ou seja, de 10 em 10. Dentro do la\xe7o, esse valor ser\xe1 enviado para o servo a cada 0.1 segundos:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"while True:\n    for angle in range(0, 180, 10): \n        my_servo.angle = angle\n        sleep(0.1)\n")),Object(t.b)("p",null,"J\xe1 no segundo la\xe7o, faremos o mesmo. Por\xe9m, inv\xe9s de incrementar de 10 em 10, a contagem ser\xe1 decrescente:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"for angle in range(180, 0, -10): \n        my_servo.angle = angle\n        sleep(0.1)\n")),Object(t.b)("p",null,Object(t.b)("strong",{parentName:"p"},"Exemplo 2")),Object(t.b)("p",null,"Al\xe9m dos m\xf3dulos que j\xe1 usamos no primeiro exemplo, precisaremos importar ",Object(t.b)("strong",{parentName:"p"},"simpleio"),", para usarmos a fun\xe7\xe3o de mapeamento:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import simpleio\n")),Object(t.b)("p",null,"Vamos precisar tamb\xe9m da biblioteca ",Object(t.b)("strong",{parentName:"p"},"math"),":"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import math\n")),Object(t.b)("p",null,"E, da fun\xe7\xe3o ",Object(t.b)("strong",{parentName:"p"},"AnalogIn")," da biblioteca ",Object(t.b)("strong",{parentName:"p"},"analogio"),":"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"from analogio import AnalogIn\n")),Object(t.b)("p",null,"Al\xe9m de configurarmos o servo, tamb\xe9m vamos configurar o potenci\xf4metro. Para isso, primeiro vamos atribuir o GPIO2 a vari\xe1vel potPin:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"potPin  =  board.IO2\n")),Object(t.b)("p",null,"Por fim, vamos atribuir esse pino ao objeto ",Object(t.b)("strong",{parentName:"p"},"pot")," como uma entrada anal\xf3gica:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"pot  =  AnalogIn(potPin)\n")),Object(t.b)("p",null,"Agora, vamos criar uma fun\xe7\xe3o chamada ",Object(t.b)("strong",{parentName:"p"},"converte"),". Essa fun\xe7\xe3o receber\xe1 como par\xe2metro o pino que estamos lendo:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"def converter(pin):\n")),Object(t.b)("p",null,"Dentro da fun\xe7\xe3o, faremos a leitura do valor enviado pelo potenci\xf4metro e armazen\xe1-la na vari\xe1vel ",Object(t.b)("strong",{parentName:"p"},"pinValue"),":"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"pinValue  =  pin.value\n")),Object(t.b)("p",null,"Ademais, converteremos o valor da leitura para graus. Para tal, usaremos a fun\xe7\xe3o ",Object(t.b)("strong",{parentName:"p"},"simpleio.map_range"),". Os par\xe2metros dessa fun\xe7\xe3o s\xe3o: valor bruto (valor da leitura naquele instante), valor m\xednimo de entrada, valor m\xe1ximo de entrada, valor m\xednimo de sa\xedda e valor m\xe1ximo de sa\xedda. Tamb\xe9m, precisaremos da fun\xe7\xe3o ",Object(t.b)("strong",{parentName:"p"},"math.trunc"),", que eliminar\xe1 as casas decimais. Todas essas informa\xe7\xf5es ficar\xe3o armazenadas na vari\xe1vel ",Object(t.b)("strong",{parentName:"p"},"mapValue"),":"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"mapValue = math.trunc(simpleio.map_range(pinValue, 536, 51355, 0, 180))\n")),Object(t.b)("p",null,"E, a fun\xe7\xe3o nos retornar\xe1 o valor de ",Object(t.b)("strong",{parentName:"p"},"mapValue"),":"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"return  mapValue\n")),Object(t.b)("p",null,"No la\xe7o de repeti\xe7\xe3o infinita, ",Object(t.b)("strong",{parentName:"p"},"while True"),", atribuiremos o valor retornado pela fun\xe7\xe3o ",Object(t.b)("strong",{parentName:"p"},"converte")," a vari\xe1vel ",Object(t.b)("strong",{parentName:"p"},"angle"),". Esse valor ser\xe1 enviado para o servo motor a cada 0.1 segundos:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"while True:\n    angle = converter(pot)\n    my_servo.angle = angle\n    sleep(0.1)\n")),Object(t.b)("h2",{id:"conclus\xe3o"},Object(t.b)("strong",{parentName:"h2"},"Conclus\xe3o")),Object(t.b)("p",null,"No decorrer da explica\xe7\xe3o, aprendemos a como usar um servo motor de uma maneira simples utilizando CircuitPython. Tamb\xe9m, pudemos ver como usar um potenci\xf4metro para controlar a movimenta\xe7\xe3o dos nossos servos."),Object(t.b)("table",null,Object(t.b)("thead",{parentName:"table"},Object(t.b)("tr",{parentName:"thead"},Object(t.b)("th",{parentName:"tr",align:null},"Autor"),Object(t.b)("th",{parentName:"tr",align:null},"Mateus Adriano Ventura Vieira"))),Object(t.b)("tbody",{parentName:"table"},Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",{parentName:"tr",align:null},"Data:"),Object(t.b)("td",{parentName:"tr",align:null},"17/05/2022")))))}m.isMDXComponent=!0}}]);
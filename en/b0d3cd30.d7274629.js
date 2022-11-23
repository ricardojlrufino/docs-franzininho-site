(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{123:function(e,o,n){"use strict";n.r(o),n.d(o,"frontMatter",(function(){return l})),n.d(o,"metadata",(function(){return c})),n.d(o,"toc",(function(){return s})),n.d(o,"default",(function(){return u}));var i=n(3),t=n(7),a=(n(0),n(162)),r=["components"],l={id:"circuitpython-hello-world",title:"Hello World!",slug:"/franzininho-wifi/exemplos-circuitpython/hello-world",description:"Neste texto vamos fazer nosso Blink - Pisca LED com a Franzininho WiFi",author:"Diana Santos"},c={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-hello-world",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-hello-world",isDocsHomePage:!1,title:"Hello World!",description:"Neste texto vamos fazer nosso Blink - Pisca LED com a Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/hello-world.md",slug:"/franzininho-wifi/exemplos-circuitpython/hello-world",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/hello-world",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/hello-world.md",version:"current",sidebar:"docs",previous:{title:"Instalando as ferramentas",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/ferramentas"},next:{title:"Serial Console",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/serial-console"}},s=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",children:[]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],p={toc:s};function u(e){var o=e.components,l=Object(t.a)(e,r);return Object(a.b)("wrapper",Object(i.a)({},p,l,{components:o,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Nesse primeiro  exemplo faremos um blink LED, nosso \u201cHello, World!\u201d com a placa Franzininho WiFi programada em CircuitPython. Assim, aquecemos os motores para explorar diversas aplica\xe7\xf5es com CircuitPython na Franzininho WiFi."),Object(a.b)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"1 Placa Franzininho Wifi com CircuitPython;"),Object(a.b)("li",{parentName:"ul"},"1 Protoboard;"),Object(a.b)("li",{parentName:"ul"},"1 LED vermelho 3 mm;"),Object(a.b)("li",{parentName:"ul"},"1 resistor 330 \u03a9;"),Object(a.b)("li",{parentName:"ul"},"Jumpers.")),Object(a.b)("h2",{id:"circuito"},"Circuito"),Object(a.b)("p",null,"Nosso primeiro circuito \xe9 bem simples. Realize a seguinte montagem:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"franzininho-wifi-hello-world",src:n(376).default})),Object(a.b)("h2",{id:"c\xf3digo"},"C\xf3digo"),Object(a.b)("p",null,"Digite o c\xf3digo abaixo no arquivo code.py que est\xe1 no diret\xf3rio CIRCUITPY e salve o arquivo:"),Object(a.b)("p",null,"Obs. Provavelmente voc\xea encontrar\xe1 outro c\xf3digo no arquivo code.py. Apague-o e insira o c\xf3digo novo."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'""" Hello, World! (Pisca LED)"""\nimport board\nimport time\nfrom digitalio import DigitalInOut, Direction\n\n# Configurando o pino do LED, o led que configurei foi o pino 4 = IO4\nled = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n\n#loop infinito - executando sempre\nwhile True:    \n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n')),Object(a.b)("p",null,"Finalizando a edi\xe7\xe3o do arquivo, salve-o.\nAp\xf3s salvar o arquivo o LED pisca em intervalos de 0,5 segundos. (Blink LED)"),Object(a.b)("h2",{id:"an\xe1lise-do-c\xf3digo"},"An\xe1lise do c\xf3digo"),Object(a.b)("p",null,"Para acessar os pinos da placa precisamos importar o m\xf3dulo board:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"import board\n")),Object(a.b)("p",null,"Como  precisaremos de intervalos de temporiza\xe7\xe3o importamos o m\xf3dulo sleep:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"import time\n")),Object(a.b)("p",null,"O LED foi conectado ao pino 4(IO4) da Franzininho WiFi. Como o LED \xe9 um atuador, preciamos configurar o pino como uma sa\xedda digital. Para isso, precisamos importar os seguintes m\xf3dulos:\nfrom digitalio import DigitalInOut, Direction"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"from digitalio import DigitalInOut, Direction\n")),Object(a.b)("p",null,"Com os m\xf3dulos importados podemos acessar as fun\xe7\xf5es de configura\xe7\xe3o do pino digital:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"led = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n")),Object(a.b)("p",null,"Note que primeiro mapeamos o pino e depois  configuramos a dire\xe7\xe3o."),Object(a.b)("p",null,"Para que o LED fique piscando infinitamente em intervalos de 500 ms, fazemos um loop infinito com o la\xe7o while. O valor do LED \xe9 invertido a cada 0,5 s loop:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"while True:    \n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Sugest\xe3o")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Altere o tempo de intervalo para 0.1 e 1 e observe o efeito."))),Object(a.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(a.b)("p",null,"Neste primeiro exemplo de programa\xe7\xe3o da  Franzininho WiFi com o CircuitPython fizemos um c\xf3digo simples em Python para piscar o LED em intervalos de 0,5 segundos. Esse exemplo serviu para nos ensinar como importar as bibliotecas, configurar o pino como sa\xedda digital e criar um loop infinito para piscar o LED. Voc\xea pode alterar o intervalo de tempo alterando o par\xe2metro na fun\xe7\xe3o sleep."),Object(a.b)("p",null,"Com esse exemplo dominado, podemos passar para a pr\xf3xima etapa."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Autor"),Object(a.b)("th",{parentName:"tr",align:null},"Diana Santos"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Autor"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Data:"),Object(a.b)("td",{parentName:"tr",align:null},"16/09/2021")))))}u.isMDXComponent=!0},162:function(e,o,n){"use strict";n.d(o,"a",(function(){return u})),n.d(o,"b",(function(){return b}));var i=n(0),t=n.n(i);function a(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){a(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function c(e,o){if(null==e)return{};var n,i,t=function(e,o){if(null==e)return{};var n,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=t.a.createContext({}),p=function(e){var o=t.a.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):l(l({},o),e)),n},u=function(e){var o=p(e.components);return t.a.createElement(s.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},m=t.a.forwardRef((function(e,o){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,b=u["".concat(r,".").concat(m)]||u[m]||d[m]||a;return n?t.a.createElement(b,l(l({ref:o},s),{},{components:n})):t.a.createElement(b,l({ref:o},s))}));function b(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return t.a.createElement.apply(null,r)}return t.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},376:function(e,o,n){"use strict";n.r(o),o.default=n.p+"assets/images/0x00-Hello_world-6a2d3444f01a16a485a1084d37794f5d.png"}}]);
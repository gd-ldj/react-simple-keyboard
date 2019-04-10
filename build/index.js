/*!
 * 
 *   react-simple-keyboard v1.21.4
 *   https://github.com/hodgef/react-simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define("ReactSimpleKeyboard",[],e):"object"===typeof exports?exports.ReactSimpleKeyboard=e():t.ReactSimpleKeyboard=e()}(window,function(){return function(t){var e={};function __webpack_require__(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,__webpack_require__),o.l=!0,o.exports}return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,n){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},__webpack_require__.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)__webpack_require__.d(n,o,function(e){return t[e]}.bind(null,o));return n},__webpack_require__.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(t,e,n){"use strict";t.exports=n(4)},function(t,e,n){t.exports=n(6)()},function(t,e,n){window,t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(2)},function(t,e,n){},function(e,n,i){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}i.r(n),i(1);var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.simpleKeyboardInstance=e,this.initKeyboardListener=this.initKeyboardListener.bind(this),this.getSimpleKeyboardLayoutKey=this.getSimpleKeyboardLayoutKey.bind(this),this.initKeyboardListener()}var e,n;return e=t,(n=[{key:"initKeyboardListener",value:function(){var t=this;document.addEventListener("keydown",function(e){if(t.simpleKeyboardInstance.options.physicalKeyboardHighlight){var n=t.getSimpleKeyboardLayoutKey(e);t.simpleKeyboardInstance.dispatch(function(e){var o=e.getButtonElement(n)||e.getButtonElement("{".concat(n,"}"));o&&(o.style.backgroundColor=t.simpleKeyboardInstance.options.physicalKeyboardHighlightBgColor||"#9ab4d0",o.style.color=t.simpleKeyboardInstance.options.physicalKeyboardHighlightTextColor||"white")})}}),document.addEventListener("keyup",function(e){if(t.simpleKeyboardInstance.options.physicalKeyboardHighlight){var n=t.getSimpleKeyboardLayoutKey(e);t.simpleKeyboardInstance.dispatch(function(t){var e=t.getButtonElement(n)||t.getButtonElement("{".concat(n,"}"));e&&e.removeAttribute&&e.removeAttribute("style")})}})}},{key:"getSimpleKeyboardLayoutKey",value:function(t){var e;return((e=t.code.includes("Numpad")||t.code.includes("Shift")||t.code.includes("Space")||t.code.includes("Backspace")||t.code.includes("Control")||t.code.includes("Alt")||t.code.includes("Meta")?t.code:t.key)!==e.toUpperCase()||"F"===t.code[0]&&Number.isInteger(Number(t.code[1]))&&t.code.length<=3)&&(e=e.toLowerCase()),e}}])&&o(e.prototype,n),t}();function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,(n=[{key:"getDefaultLayout",value:function(){return{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]}}}])&&s(e,n),t}();function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.simpleKeyboardInstance=e,t.bindMethods(t,this)}var e,n,o;return e=t,o=[{key:"bindMethods",value:function(t,e){var n=!0,o=!1,i=void 0;try{for(var s,a=Object.getOwnPropertyNames(t.prototype)[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var u=s.value;"constructor"===u||"bindMethods"===u||(e[u]=e[u].bind(e))}}catch(r){o=!0,i=r}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}}}],(n=[{key:"getButtonClass",value:function(t){var e=t.includes("{")&&t.includes("}")&&"{//}"!==t?"functionBtn":"standardBtn",n=t.replace("{","").replace("}",""),o="";return"standardBtn"!==e&&(o=" hg-button-".concat(n)),"hg-".concat(e).concat(o)}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"\u2191","{arrowleft}":"\u2190","{arrowdown}":"\u2193","{arrowright}":"\u2192","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(t,e,n){return(e=n?Object.assign({},this.getDefaultDiplay(),e):e||this.getDefaultDiplay())[t]||t}},{key:"getUpdatedInput",value:function(t,e,n,o,i){var r=e;return("{bksp}"===t||"{backspace}"===t)&&r.length>0?r=this.removeAt(r,o,i):"{space}"===t?r=this.addStringAt(r," ",o,i):"{tab}"!==t||"boolean"===typeof n.tabCharOnTab&&!1===n.tabCharOnTab?"{enter}"!==t&&"{numpadenter}"!==t||!n.newLineOnEnter?t.includes("numpad")&&Number.isInteger(Number(t[t.length-2]))?r=this.addStringAt(r,t[t.length-2],o,i):"{numpaddivide}"===t?r=this.addStringAt(r,"/",o,i):"{numpadmultiply}"===t?r=this.addStringAt(r,"*",o,i):"{numpadsubtract}"===t?r=this.addStringAt(r,"-",o,i):"{numpadadd}"===t?r=this.addStringAt(r,"+",o,i):"{numpaddecimal}"===t?r=this.addStringAt(r,".",o,i):"{"===t||"}"===t?r=this.addStringAt(r,t,o,i):t.includes("{")||t.includes("}")||(r=this.addStringAt(r,t,o,i)):r=this.addStringAt(r,"\n",o,i):r=this.addStringAt(r,"\t",o,i),r}},{key:"updateCaretPos",value:function(t,e){var n=this.updateCaretPosAction(this.simpleKeyboardInstance,t,e);this.simpleKeyboardInstance.options.syncInstanceInputs&&this.simpleKeyboardInstance.dispatch(function(t){t.caretPosition=n})}},{key:"updateCaretPosAction",value:function(t,e,n){return n?t.caretPosition>0&&(t.caretPosition=t.caretPosition-e):t.caretPosition=t.caretPosition+e,this.simpleKeyboardInstance.options.debug&&console.log("Caret at:",t.caretPosition,"(".concat(t.keyboardDOMClass,")")),t.caretPosition}},{key:"addStringAt",value:function(t,e,n,o){var i;return n||0===n?(i=[t.slice(0,n),e,t.slice(n)].join(""),this.isMaxLengthReached()||o&&this.updateCaretPos(e.length)):i=t+e,i}},{key:"removeAt",value:function(t,e,n){if(0===this.simpleKeyboardInstance.caretPosition)return t;var o,i=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;return e&&e>=0?t.substring(e-2,e).match(i)?(o=t.substr(0,e-2)+t.substr(e),n&&this.updateCaretPos(2,!0)):(o=t.substr(0,e-1)+t.substr(e),n&&this.updateCaretPos(1,!0)):t.slice(-2).match(i)?(o=t.slice(0,-2),n&&this.updateCaretPos(2,!0)):(o=t.slice(0,-1),n&&this.updateCaretPos(1,!0)),o}},{key:"handleMaxLength",value:function(t,e,n){var o=e.maxLength,i=t[e.inputName],r=i.length===o;if(n.length<=i.length)return!1;if(Number.isInteger(o))return e.debug&&console.log("maxLength (num) reached:",r),r?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if("object"===u(o)){var s=i.length===o[e.inputName];return e.debug&&console.log("maxLength (obj) reached:",s),s?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return Boolean(this.maxLengthReached)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{key:"pointerEventsSupported",value:function(){return window.PointerEvent}},{key:"camelCase",value:function(t){return t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(t,e){return e.length?t+e[0].toUpperCase()+e.slice(1):t})}},{key:"countInArray",value:function(t,e){return t.reduce(function(t,n){return t+(n===e)},0)}}])&&r(e.prototype,n),o&&r(e,o),t}();function l(t){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,"setOptions",function(t){t=t||{},e.options=Object.assign(e.options,t),e.render()}),d(this,"registerModule",function(t,n){e.modules[t]||(e.modules[t]={}),n(e.modules[t])});var n="string"===typeof(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:".simple-keyboard",o="object"===l(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1];if(o||(o={}),this.utilities=new p(this),this.keyboardDOM=document.querySelector(n),this.options=o,this.options.layoutName=this.options.layoutName||"default",this.options.theme=this.options.theme||"hg-theme-default",this.options.inputName=this.options.inputName||"default",this.options.preventMouseDownDefault=this.options.preventMouseDownDefault||!1,this.keyboardPluginClasses="",p.bindMethods(t,this),this.input={},this.input[this.options.inputName]="",this.keyboardDOMClass=n.split(".").join(""),this.buttonElements={},!this.keyboardDOM)throw console.warn('"'.concat(n,'" was not found in the DOM.')),new Error("KEYBOARD_DOM_ERROR");this.render(),window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),window.SimpleKeyboardInstances[this.utilities.camelCase(this.keyboardDOMClass)]=this,this.physicalKeyboardInterface=new a(this),this.modules={},this.loadModules()}var e,n;return e=t,(n=[{key:"handleButtonClicked",value:function(t){var e=this.options.debug;if("{//}"===t)return!1;"function"===typeof this.options.onKeyPress&&this.options.onKeyPress(t),this.input[this.options.inputName]||(this.input[this.options.inputName]="");var n=this.utilities.getUpdatedInput(t,this.input[this.options.inputName],this.options,this.caretPosition);if(this.input[this.options.inputName]!==n&&(!this.options.inputPattern||this.options.inputPattern&&this.inputPatternIsValid(n))){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,this.options,n))return!1;this.input[this.options.inputName]=this.utilities.getUpdatedInput(t,this.input[this.options.inputName],this.options,this.caretPosition,!0),e&&console.log("Input changed:",this.input),this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input),"function"===typeof this.options.onChange&&this.options.onChange(this.input[this.options.inputName]),"function"===typeof this.options.onChangeAll&&this.options.onChangeAll(this.input)}e&&console.log("Key pressed:",t)}},{key:"handleButtonMouseDown",value:function(t,e){var n=this;this.options.preventMouseDownDefault&&e.preventDefault(),this.options.stopMouseDownPropagation&&e.stopPropagation(),this.isMouseHold=!0,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this.holdTimeout=setTimeout(function(){!n.isMouseHold||(t.includes("{")||t.includes("}"))&&"{delete}"!==t&&"{backspace}"!==t&&"{bksp}"!==t&&"{space}"!==t&&"{tab}"!==t||(n.options.debug&&console.log("Button held:",t),n.handleButtonHold(t,e)),clearTimeout(n.holdTimeout)},500)}},{key:"handleButtonMouseUp",value:function(){this.isMouseHold=!1,this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout)}},{key:"handleButtonHold",value:function(t){var e=this;this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdInteractionTimeout=setTimeout(function(){e.isMouseHold?(e.handleButtonClicked(t),e.handleButtonHold(t)):clearTimeout(e.holdInteractionTimeout)},100)}},{key:"syncInstanceInputs",value:function(){var t=this;this.dispatch(function(e){e.replaceInput(t.input)})}},{key:"clearInput",value:function(t){t=t||this.options.inputName,this.input[t]="",this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input)}},{key:"getInput",value:function(t){return t=t||this.options.inputName,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input),this.input[t]}},{key:"setInput",value:function(t,e){e=e||this.options.inputName,this.input[e]=t,this.options.syncInstanceInputs&&this.syncInstanceInputs(this.input)}},{key:"replaceInput",value:function(t){this.input=t}},{key:"clear",value:function(){this.keyboardDOM.innerHTML="",this.keyboardDOM.className=this.keyboardDOMClass,this.buttonElements={}}},{key:"dispatch",value:function(t){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach(function(e){t(window.SimpleKeyboardInstances[e],e)})}},{key:"addButtonTheme",value:function(t,e){var n=this;if(!e||!t)return!1;t.split(" ").forEach(function(o){e.split(" ").forEach(function(e){n.options.buttonTheme||(n.options.buttonTheme=[]);var i=!1;n.options.buttonTheme.map(function(t){if(t.class.split(" ").includes(e)){i=!0;var n=t.buttons.split(" ");n.includes(o)||(i=!0,n.push(o),t.buttons=n.join(" "))}return t}),i||n.options.buttonTheme.push({class:e,buttons:t})})}),this.render()}},{key:"removeButtonTheme",value:function(t,e){var n=this;if(!t&&!e)return this.options.buttonTheme=[],this.render(),!1;t&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length&&(t.split(" ").forEach(function(t,o){n.options.buttonTheme.map(function(o,i){if(e&&e.includes(o.class)||!e){var r=o.buttons.split(" ").filter(function(e){return e!==t});r.length?o.buttons=r.join(" "):(n.options.buttonTheme.splice(i,1),o=null)}return o})}),this.render())}},{key:"getButtonElement",value:function(t){var e,n=this.buttonElements[t];return n&&(e=n.length>1?n:n[0]),e}},{key:"inputPatternIsValid",value:function(t){var e,n=this.options.inputPattern;if((e=n instanceof RegExp?n:n[this.options.inputName])&&t){var o=e.test(t);return this.options.debug&&console.log('inputPattern ("'.concat(e,'"): ').concat(o?"passed":"did not pass!")),o}return!0}},{key:"handleCaret",value:function(){this.caretPosition=null;var t=window.SimpleKeyboardInstances;(t&&Object.keys(t)[0]===this.utilities.camelCase(this.keyboardDOMClass)||!t)&&(this.options.debug&&console.log("Caret handling started (".concat(this.keyboardDOMClass,")")),document.addEventListener("keyup",this.caretEventHandler),document.addEventListener("mouseup",this.caretEventHandler),document.addEventListener("touchend",this.caretEventHandler))}},{key:"caretEventHandler",value:function(t){var e;t.target.tagName&&(e=t.target.tagName.toLowerCase()),this.dispatch(function(n){n.isMouseHold&&(n.isMouseHold=!1),"textarea"!==e&&"input"!==e||n.options.disableCaretPositioning?n.options.disableCaretPositioning&&(n.caretPosition=null):(n.caretPosition=t.target.selectionStart,n.options.debug&&console.log("Caret at: ",t.target.selectionStart,t.target.tagName.toLowerCase(),"(".concat(n.keyboardDOMClass,")")))})}},{key:"getButtonTheme",value:function(){var t=this,e={};return this.options.buttonTheme.forEach(function(n){var o;n.buttons&&n.class?("string"===typeof n.buttons&&(o=n.buttons.split(" ")),o&&o.forEach(function(o){var i=e[o];i?t.utilities.countInArray(i.split(" "),n.class)||(e[o]="".concat(i," ").concat(n.class)):e[o]=n.class})):console.warn('buttonTheme row is missing the "buttons" or the "class". Please check the documentation.')}),e}},{key:"onTouchDeviceDetected",value:function(){this.processAutoTouchEvents(),this.disableContextualWindow()}},{key:"disableContextualWindow",value:function(){window.oncontextmenu=function(t){if(t.target.classList.contains("hg-button"))return t.preventDefault(),t.stopPropagation(),!1}}},{key:"processAutoTouchEvents",value:function(){this.options.autoUseTouchEvents&&(this.options.useTouchEvents=!0,this.options.debug&&console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."))}},{key:"onInit",value:function(){this.options.debug&&console.log("".concat(this.keyboardDOMClass," Initialized")),this.handleCaret(),"function"===typeof this.options.onInit&&this.options.onInit()}},{key:"beforeFirstRender",value:function(){this.utilities.isTouchDevice()&&this.onTouchDeviceDetected(),"function"===typeof this.options.beforeFirstRender&&this.options.beforeFirstRender(),!this.utilities.pointerEventsSupported()||this.options.useTouchEvents||this.options.useMouseEvents||this.options.debug&&console.log("Using PointerEvents as it is supported by this browser"),this.options.useTouchEvents&&this.options.debug&&console.log("useTouchEvents has been enabled. Only touch events will be used.")}},{key:"beforeRender",value:function(){"function"===typeof this.options.beforeRender&&this.options.beforeRender()}},{key:"onRender",value:function(){"function"===typeof this.options.onRender&&this.options.onRender()}},{key:"onModulesLoaded",value:function(){"function"===typeof this.options.onModulesLoaded&&this.options.onModulesLoaded()}},{key:"loadModules",value:function(){var t=this;Array.isArray(this.options.modules)&&(this.options.modules.forEach(function(e){var n=new e;if(n.constructor.name&&"Function"!==n.constructor.name){var o="module-".concat(t.utilities.camelCase(n.constructor.name));t.keyboardPluginClasses=t.keyboardPluginClasses+" ".concat(o)}n.init(t)}),this.keyboardPluginClasses=this.keyboardPluginClasses+" modules-loaded",this.render(),this.onModulesLoaded())}},{key:"getModuleProp",value:function(t,e){return!!this.modules[t]&&this.modules[t][e]}},{key:"getModulesList",value:function(){return Object.keys(this.modules)}},{key:"parseRowDOMContainers",value:function(t,e,n,o){var i=this,r=Array.from(t.children),s=0;return r.length&&n.forEach(function(n,a){var u=o[a];if(!u||!(u>n))return!1;var c=n-s,l=u-s,p=document.createElement("div");p.className+="hg-button-container";var f="".concat(i.options.layoutName,"-r").concat(e,"c").concat(a);p.setAttribute("data-skUID",f);var d=r.splice(c,l-c+1);s=l-c,d.forEach(function(t){return p.appendChild(t)}),r.splice(c,0,p),t.innerHTML="",r.forEach(function(e){return t.appendChild(e)}),i.options.debug&&console.log("rowDOMContainer",d,c,l,s+1)}),t}},{key:"render",value:function(){var t=this;this.clear(),this.initialized||this.beforeFirstRender(),this.beforeRender();var e="hg-layout-".concat(this.options.layoutName),n=this.options.layout||c.getDefaultLayout(),o=this.options.useTouchEvents||!1,i=o?"hg-touch-events":"",r=this.options.useMouseEvents||!1,s=this.options.disableRowButtonContainers,a=Array.isArray(this.options.buttonTheme)?this.getButtonTheme():{};this.keyboardDOM.className+=" ".concat(this.options.theme," ").concat(e," ").concat(this.keyboardPluginClasses," ").concat(i),n[this.options.layoutName].forEach(function(e,n){var i=e.split(" "),u=document.createElement("div");u.className+="hg-row";var c=[],l=[];i.forEach(function(e,i){var p=!s&&e.includes("[")&&e.length>1,f=!s&&e.includes("]")&&e.length>1;p&&(c.push(i),e=e.replace(/\[/g,"")),f&&(l.push(i),e=e.replace(/\]/g,""));var d=t.utilities.getButtonClass(e),h=a[e],y=t.utilities.getButtonDisplayName(e,t.options.display,t.options.mergeDisplay),b=t.options.useButtonTag?"button":"div",m=document.createElement(b);m.className+="hg-button ".concat(d).concat(h?" "+h:""),!t.utilities.pointerEventsSupported()||o||r?o?(m.ontouchstart=function(n){t.handleButtonClicked(e),t.handleButtonMouseDown(e,n)},m.ontouchend=function(e){return t.handleButtonMouseUp()},m.ontouchcancel=function(e){return t.handleButtonMouseUp()}):(m.onclick=function(){t.isMouseHold=!1,t.handleButtonClicked(e)},m.onmousedown=function(n){t.handleButtonMouseDown(e,n)}):(m.onpointerdown=function(n){t.handleButtonClicked(e),t.handleButtonMouseDown(e,n)},m.onpointerup=function(e){t.handleButtonMouseUp()},m.onpointercancel=function(e){return t.handleButtonMouseUp()}),m.setAttribute("data-skBtn",e);var v="".concat(t.options.layoutName,"-r").concat(n,"b").concat(i);m.setAttribute("data-skBtnUID",v),m.setAttribute("data-displayLabel",y);var g=document.createElement("span");g.innerHTML=y,m.appendChild(g),t.buttonElements[e]||(t.buttonElements[e]=[]),t.buttonElements[e].push(m),u.appendChild(m)}),u=t.parseRowDOMContainers(u,n,c,l),t.keyboardDOM.appendChild(u)}),this.onRender(),this.initialized||(this.initialized=!0,o||(document.onmouseup=function(){return t.handleButtonMouseUp()}),this.onInit())}}])&&h(e.prototype,n),t}();n.default=f}])},function(t,e,n){t.exports=n(9)},function(t,e,n){"use strict";var o=n(5),i="function"===typeof Symbol&&Symbol.for,r=i?Symbol.for("react.element"):60103,s=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,u=i?Symbol.for("react.strict_mode"):60108,c=i?Symbol.for("react.profiler"):60114,l=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,f=i?Symbol.for("react.concurrent_mode"):60111,d=i?Symbol.for("react.forward_ref"):60112,h=i?Symbol.for("react.suspense"):60113,y=i?Symbol.for("react.memo"):60115,b=i?Symbol.for("react.lazy"):60116,m="function"===typeof Symbol&&Symbol.iterator;function B(t){for(var e=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=0;o<e;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);!function(t,e,n,o,i,r,s,a){if(!t){if(t=void 0,void 0===e)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,i,r,s,a],c=0;(t=Error(e.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function E(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||v}function F(){}function G(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||v}E.prototype.isReactComponent={},E.prototype.setState=function(t,e){"object"!==typeof t&&"function"!==typeof t&&null!=t&&B("85"),this.updater.enqueueSetState(this,t,e,"setState")},E.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},F.prototype=E.prototype;var _=G.prototype=new F;_.constructor=G,o(_,E.prototype),_.isPureReactComponent=!0;var k={current:null},w={current:null},O=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function M(t,e,n){var o=void 0,i={},s=null,a=null;if(null!=e)for(o in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(s=""+e.key),e)O.call(e,o)&&!P.hasOwnProperty(o)&&(i[o]=e[o]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(t&&t.defaultProps)for(o in u=t.defaultProps)void 0===i[o]&&(i[o]=u[o]);return{$$typeof:r,type:t,key:s,ref:a,props:i,_owner:w.current}}function N(t){return"object"===typeof t&&null!==t&&t.$$typeof===r}var C=/\/+/g,I=[];function Q(t,e,n,o){if(I.length){var i=I.pop();return i.result=t,i.keyPrefix=e,i.func=n,i.context=o,i.count=0,i}return{result:t,keyPrefix:e,func:n,context:o,count:0}}function R(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>I.length&&I.push(t)}function U(t,e,n){return null==t?0:function S(t,e,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var a=!1;if(null===t)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case r:case s:a=!0}}if(a)return n(o,t,""===e?"."+T(t,0):e),1;if(a=0,e=""===e?".":e+":",Array.isArray(t))for(var u=0;u<t.length;u++){var c=e+T(i=t[u],u);a+=S(i,c,n,o)}else if(c=null===t||"object"!==typeof t?null:"function"===typeof(c=m&&t[m]||t["@@iterator"])?c:null,"function"===typeof c)for(t=c.call(t),u=0;!(i=t.next()).done;)a+=S(i=i.value,c=e+T(i,u++),n,o);else"object"===i&&B("31","[object Object]"===(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return a}(t,"",e,n)}function T(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}(t.key):e.toString(36)}function ea(t,e){t.func.call(t.context,e,t.count++)}function fa(t,e,n){var o=t.result,i=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?V(t,o,n,function(t){return t}):null!=t&&(N(t)&&(t=function(t,e){return{$$typeof:r,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,i+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(C,"$&/")+"/")+n)),o.push(t))}function V(t,e,n,o,i){var r="";null!=n&&(r=(""+n).replace(C,"$&/")+"/"),U(t,fa,e=Q(e,r,o,i)),R(e)}function W(){var t=k.current;return null===t&&B("321"),t}var j={Children:{map:function(t,e,n){if(null==t)return t;var o=[];return V(t,o,null,e,n),o},forEach:function(t,e,n){if(null==t)return t;U(t,ea,e=Q(null,null,e,n)),R(e)},count:function(t){return U(t,function(){return null},null)},toArray:function(t){var e=[];return V(t,e,null,function(t){return t}),e},only:function(t){return N(t)||B("143"),t}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(t,e){return void 0===e&&(e=null),(t={$$typeof:p,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},forwardRef:function(t){return{$$typeof:d,render:t}},lazy:function(t){return{$$typeof:b,_ctor:t,_status:-1,_result:null}},memo:function(t,e){return{$$typeof:y,type:t,compare:void 0===e?null:e}},useCallback:function(t,e){return W().useCallback(t,e)},useContext:function(t,e){return W().useContext(t,e)},useEffect:function(t,e){return W().useEffect(t,e)},useImperativeHandle:function(t,e,n){return W().useImperativeHandle(t,e,n)},useDebugValue:function(){},useLayoutEffect:function(t,e){return W().useLayoutEffect(t,e)},useMemo:function(t,e){return W().useMemo(t,e)},useReducer:function(t,e,n){return W().useReducer(t,e,n)},useRef:function(t){return W().useRef(t)},useState:function(t){return W().useState(t)},Fragment:a,StrictMode:u,Suspense:h,createElement:M,cloneElement:function(t,e,n){(null===t||void 0===t)&&B("267",t);var i=void 0,s=o({},t.props),a=t.key,u=t.ref,c=t._owner;if(null!=e){void 0!==e.ref&&(u=e.ref,c=w.current),void 0!==e.key&&(a=""+e.key);var l=void 0;for(i in t.type&&t.type.defaultProps&&(l=t.type.defaultProps),e)O.call(e,i)&&!P.hasOwnProperty(i)&&(s[i]=void 0===e[i]&&void 0!==l?l[i]:e[i])}if(1===(i=arguments.length-2))s.children=n;else if(1<i){l=Array(i);for(var p=0;p<i;p++)l[p]=arguments[p+2];s.children=l}return{$$typeof:r,type:t.type,key:a,ref:u,props:s,_owner:c}},createFactory:function(t){var e=M.bind(null,t);return e.type=t,e},isValidElement:N,version:"16.8.5",unstable_ConcurrentMode:f,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentOwner:w,assign:o}},D={default:j},x=D&&j||D;t.exports=x.default||x},function(t,e,n){"use strict";var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(i){return!1}}()?Object.assign:function(t,e){for(var n,s,a=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))i.call(n,c)&&(a[c]=n[c]);if(o){s=o(n);for(var l=0;l<s.length;l++)r.call(n,s[l])&&(a[s[l]]=n[s[l]])}}return a}},function(t,e,n){"use strict";var o=n(7);function emptyFunction(){}t.exports=function(){function shim(t,e,n,i,r,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function getShim(){return shim}shim.isRequired=shim;var t={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};return t.checkPropTypes=emptyFunction,t.PropTypes=t,t}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),r=n(1),s=n.n(r),a=n(2),u=n.n(a);function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){_defineProperty(t,e,n[e])})}return t}({},t,{theme:"simple-keyboard ".concat(t.theme||"hg-theme-default")})};n(8);function _typeof(t){return(_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Keyboard_defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(t){function KeyboardReact(){var t,e,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,KeyboardReact);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return n=this,o=(t=_getPrototypeOf(KeyboardReact)).call.apply(t,[this].concat(r)),e=!o||"object"!==_typeof(o)&&"function"!==typeof o?_assertThisInitialized(n):o,Keyboard_defineProperty(_assertThisInitialized(e),"baseClassDefault","react-simple-keyboard"),Keyboard_defineProperty(_assertThisInitialized(e),"componentDidMount",function(){var t=_assertThisInitialized(e),n=t.props,o=(0,t.getCssBaseClass)();e.keyboard=new u.a(".".concat(o),function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){Keyboard_defineProperty(t,e,n[e])})}return t}({},c(n)))}),Keyboard_defineProperty(_assertThisInitialized(e),"componentWillReceiveProps",function(t){return e.keyboard.setOptions(c(t))}),Keyboard_defineProperty(_assertThisInitialized(e),"getCssBaseClass",function(){return e.props.baseClass||e.baseClassDefault}),e}var e,n,r;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(KeyboardReact,o["Component"]),e=KeyboardReact,(n=[{key:"shouldComponentUpdate",value:function(t,e){return this.props.stateToIgnore===t.stateToIgnore}},{key:"render",value:function(){var t=this.getCssBaseClass;return i.a.createElement("div",{className:"".concat(t())})}}])&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),KeyboardReact}();l.propTypes={stateToIgnore:s.a.any};var p=l;e.default=p}])});
//# sourceMappingURL=index.js.map
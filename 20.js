(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=s(n(2)),i=n(388),r=s(n(424)),u=s(n(580)),c=s(n(387));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e){var t=e.target.find({name:"testSquare"}),n=new i.TimelineMax({repeat:-1});return n.to(t,2,{scale:2}),n}var f=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];return n=a=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.pause=function(){a.animation.paused(!a.animation.paused())},l(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentDidMount",value:function(){this.animation=this.addAnimation(p)}},{key:"render",value:function(){return o.default.createElement(c.default,null,o.default.createElement("div",{className:"test-animation"},o.default.createElement("div",{className:u.default.square,name:"testSquare"}),o.default.createElement("button",{className:u.default.pause,onClick:this.pause},"Pause")))}}]),t}();t.default=(0,r.default)()(f)},579:function(e,t,n){(t=e.exports=n(361)(!1)).push([e.i,".👩🏼‍✈️👷🏻‍♂️🚶🏼‍♂️🤸🏾‍♂️client-graphics-InteractiveGraphics-TestAnimation-TestAnimation-module__square--3L7W2 {\n  background-color: blue;\n  width: 50px;\n  height: 50px;\n  margin: 40px auto; }\n\n.👵🏼👨🏽🚅✊🏻client-graphics-InteractiveGraphics-TestAnimation-TestAnimation-module__pause--3iF7a {\n  display: block;\n  margin: 0 auto;\n  background-color: #eaeaea; }\n",""]),t.locals={square:"👩🏼‍✈️👷🏻‍♂️🚶🏼‍♂️🤸🏾‍♂️client-graphics-InteractiveGraphics-TestAnimation-TestAnimation-module__square--3L7W2",pause:"👵🏼👨🏽🚅✊🏻client-graphics-InteractiveGraphics-TestAnimation-TestAnimation-module__pause--3iF7a"}},580:function(e,t,n){var a=n(579);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(362)(a,o);a.locals&&(e.exports=a.locals)}}]);
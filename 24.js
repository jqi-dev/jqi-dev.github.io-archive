(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QuantumBubbles=t.SpinBanner=t.TestNotebook=t.WavesCrossSection=t.EntanglementKnots=t.SimpleGSAP=t.TestAnimation=t.KickedRotor=void 0;l(n(2));var r=l(n(138)),a=l(n(139));function l(e){return e&&e.__esModule?e:{default:e}}var o=(0,r.default)({loader:function(){return n.e(22).then(n.t.bind(null,382,7))},loading:a.default}),u=((0,r.default)({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(21)]).then(n.t.bind(null,381,7))},loading:a.default}),(0,r.default)({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(20)]).then(n.t.bind(null,380,7))},loading:a.default})),i=(0,r.default)({loader:function(){return Promise.all([n.e(1),n.e(19)]).then(n.t.bind(null,379,7))},loading:a.default}),c=(0,r.default)({loader:function(){return n.e(18).then(n.t.bind(null,378,7))},loading:a.default}),f=(0,r.default)({loader:function(){return Promise.all([n.e(3),n.e(17)]).then(n.t.bind(null,377,7))},loading:a.default}),d=(0,r.default)({loader:function(){return n.e(16).then(n.t.bind(null,376,7))},loading:a.default}),s=(0,r.default)({loader:function(){return n.e(15).then(n.t.bind(null,375,7))},loading:a.default}),p=(0,r.default)({loader:function(){return Promise.all([n.e(3),n.e(4),n.e(14)]).then(n.t.bind(null,374,7))},loading:a.default});t.KickedRotor=o,t.TestAnimation=u,t.SimpleGSAP=i,t.EntanglementKnots=c,t.WavesCrossSection=f,t.TestNotebook=d,t.SpinBanner=s,t.QuantumBubbles=p},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}([""],[""]),l=c(n(2)),o=n(137),u=c(n(364)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(366));function c(e){return e&&e.__esModule?e:{default:e}}var f=u.default.div.attrs({className:"w-50-l w-100 pa0 mb4 pl3 pr3 border"})(a),d=function(e){var t,n;e.hasOwnProperty("match")?(t=e.match.params.graphic,n="w-100 mw7 cf center pt6"):t=e;var r=i[t];return r?l.default.createElement(f,{key:t,className:n},e.hasOwnProperty("match")?l.default.createElement("div",null,"Back to the ",l.default.createElement(o.Link,{to:"/graphics"},"full list"),".",l.default.createElement(r,null)):l.default.createElement("div",null,l.default.createElement(o.Link,{to:"/graphics/"+t},"Standalone graphic"),l.default.createElement(r,null))):l.default.createElement("div",{className:"w-100 mw7 cf center pt6"},"Sorry! We can't seem to find that graphic. Back to the ",l.default.createElement(o.Link,{to:"/graphics"},"full list"),".")},s=function(){return l.default.createElement("div",{className:"w-100 mw7 cf center pt6"},l.default.createElement("div",{className:"flex flex-wrap items-center"},Object.keys(i).map(function(e){return d(e)})))},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"render",value:function(){return l.default.createElement(o.Switch,null,l.default.createElement(o.Route,{exact:!0,path:"/graphics",component:s}),l.default.createElement(o.Route,{path:"/graphics/:graphic",component:d}))}}]),t}();t.default=p}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(2)),i=n(137);var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"render",value:function(){return o.default.createElement("div",{className:"w-100 mw7 cf center pt4-ns mt4-ns pt5-m pt5 mt4"},o.default.createElement(i.Link,{to:"/entry",className:"blue pointer f6 sans-serif no-underline"},o.default.createElement("span",{className:"f7 pb2 blue relative"}," ‹ "),"Back to entry list"),o.default.createElement("h1",{className:"f2-l tl-l f4 ma0 mt1 helvetica"},this.props.hed),o.default.createElement("h3",{className:"f6 mt2 mb4 gray i tl-l"},this.props.subhed))}}]),t}();t.default=l},366:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(n(2));var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getStyle=function(){return 1==n.state.display?{display:"block",opacity:"1",marginRight:"-75%",width:"60%"}:{display:"none",opacity:"0",marginRight:"-75%",width:"60%"}},n.onClick=function(){n.setState({display:!n.state.display}),console.log(n.state.display)},n.state={display:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"render",value:function(){return o.default.createElement("span",{className:"blue selector ib",onClick:this.onClick},this.props.children,o.default.createElement("span",{className:"f6 pb2 relative",style:{top:"-.5rem"}},"⊕"),o.default.createElement("span",{className:"sidenote side f7 sans-serif lh-copy gray fr-l pr6 pl5 mb3 mt3 pa0-l ma0-l mt1",style:this.getStyle()},o.default.createElement("span",{className:"f6 pb2 blue relative"},"⊕ "),this.props.note))}}]),t}();t.default=i},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TestNotebook=t.WavesCrossSection=t.EntanglementKnots=t.SimpleGSAP=t.TestAnimation=t.KickedRotor=void 0;i(n(2));var a=i(n(138)),o=i(n(139));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,a.default)({loader:function(){return n.e(19).then(n.t.bind(null,385,7))},loading:o.default}),r=((0,a.default)({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(18)]).then(n.t.bind(null,384,7))},loading:o.default}),(0,a.default)({loader:function(){return Promise.all([n.e(1),n.e(2),n.e(17)]).then(n.t.bind(null,382,7))},loading:o.default})),s=(0,a.default)({loader:function(){return Promise.all([n.e(1),n.e(16)]).then(n.t.bind(null,381,7))},loading:o.default}),c=(0,a.default)({loader:function(){return n.e(15).then(n.t.bind(null,380,7))},loading:o.default}),u=(0,a.default)({loader:function(){return Promise.all([n.e(3),n.e(14)]).then(n.t.bind(null,379,7))},loading:o.default}),d=(0,a.default)({loader:function(){return n.e(13).then(n.t.bind(null,378,7))},loading:o.default});t.KickedRotor=l,t.TestAnimation=r,t.SimpleGSAP=s,t.EntanglementKnots=c,t.WavesCrossSection=u,t.TestNotebook=d},441:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2MDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MDAgMTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0E3REVFQzt9Cgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOiNBN0RFRUM7fQoJLnN0MntkaXNwbGF5Om5vbmU7b3BhY2l0eTowLjc1O2ZpbGw6IzAwQkVGMztzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02MDAsMTBjMCwwLTM3LjcsMC02Ni4zLDBjLTI4LjcsMC0yODkuMywyMC0zNDEsMjB2NDBjNTEuNywwLDMxMi4zLDIwLDM0MSwyMGMyOC43LDAsNjYuMywwLDY2LjMsMCIvPgo8L3N2Zz4K"},442:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA2MDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MDAgMTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0E3REVFQzt9Cgkuc3Qxe2Rpc3BsYXk6bm9uZTtmaWxsOiNBN0RFRUM7fQoJLnN0MntkaXNwbGF5Om5vbmU7b3BhY2l0eTowLjc1O2ZpbGw6IzAwQkVGMztzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wLDkwLjNjMCwwLDM3LjcsMCw2Ni4zLDBzMjg5LjMtMjAsMzQxLTIwdi00MGMtNTEuNywwLTMxMi4zLTIwLTM0MS0yMFMwLDEwLjMsMCwxMC4zIi8+Cjwvc3ZnPgo="},443:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZGlzcGxheTpub25lO2ZpbGw6I0E3REVFQzt9Cgkuc3Qxe2ZpbGw6I0E3REVFQzt9Cgkuc3Qye2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjAuNzU7ZmlsbDojMDBCRUYzO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDN7b3BhY2l0eTowLjc1O2ZpbGw6IzAwQkVGMztzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NjMsOTBjMCwwLDM3LjcsMCw2Ni4zLDBjMjguNywwLDI4OS4zLTIwLDM0MS0yMFYzMGMtNTEuNywwLTMxMi4zLTIwLTM0MS0yMGMtMjguNywwLTY2LjMsMC02Ni4zLDAiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTY0MCwxMGMwLDAtMzcuNywwLTY2LjMsMGMtMjguNywwLTI4OS4zLDIwLTM0MSwyMHY0MGM1MS43LDAsMzEyLjMsMjAsMzQxLDIwYzI4LjcsMCw2Ni4zLDAsNjYuMywwIi8+CjxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjY0MCIgY3k9IjUwIiByPSI0MCIvPgo8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1NjMiIGN5PSI1MCIgcj0iNDAiLz4KPGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iNTYzIiBjeT0iNTAiIHI9IjMwIi8+CjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjY0MCIgY3k9IjUwIiByPSIzMCIvPgo8L3N2Zz4K"},444:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjAwIDEwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZGlzcGxheTpub25lO2ZpbGw6I0E3REVFQzt9Cgkuc3Qxe2ZpbGw6I0E3REVFQzt9Cgkuc3Qye29wYWNpdHk6MC43NTtmaWxsOiMwMEJFRjM7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0M3tkaXNwbGF5Om5vbmU7b3BhY2l0eTowLjc1O2ZpbGw6IzAwQkVGMztzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01NjMsOTBjMCwwLDM3LjcsMCw2Ni4zLDBjMjguNywwLDI4OS4zLTIwLDM0MS0yMFYzMGMtNTEuNywwLTMxMi4zLTIwLTM0MS0yMGMtMjguNywwLTY2LjMsMC02Ni4zLDAiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTY0MCwxMGMwLDAtMzcuNywwLTY2LjMsMGMtMjguNywwLTI4OS4zLDIwLTM0MSwyMHY0MGM1MS43LDAsMzEyLjMsMjAsMzQxLDIwYzI4LjcsMCw2Ni4zLDAsNjYuMywwIi8+CjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjY0MCIgY3k9IjUwIiByPSI0MCIvPgo8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI1NjMiIGN5PSI1MCIgcj0iNDAiLz4KPGNpcmNsZSBjbGFzcz0ic3QyIiBjeD0iNTYzIiBjeT0iNTAiIHI9IjMwIi8+CjxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjY0MCIgY3k9IjUwIiByPSIzMCIvPgo8L3N2Zz4K"},448:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=d(n(2)),i=d(n(397)),l=d(n(387));n(447),n(445);var r=d(n(444)),s=d(n(443)),c=d(n(442)),u=d(n(441));function d(e){return e&&e.__esModule?e:{default:e}}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentDidMount",value:function(){function e(){return $("#container").outerWidth()}var t=new l.default.Controller;i.default.set("#bubble-left",{x:e()/2-e()/30}),i.default.set("#bubble-right",{x:-(e()/2-e()/30)});var n="Power2.easeInOut",a=new TimelineMax;a.to("#bubble-left",2,{x:e()/6,ease:n}),a.to("#bubble-right",2,{x:-e()/6,ease:n},0),a.to("#atom-left",2,{x:-(e()/4+e()/20),ease:n},0),a.to("#atom-right",2,{x:e()/4+e()/20,ease:n},0);new l.default.Scene({triggerElement:"#container"}).setTween(a).addTo(t)}},{key:"render",value:function(){return o.default.createElement("div",{className:"w-100-l mt4 mb5"},o.default.createElement("div",{className:"relative w-100-l mt2 mt0-l"},o.default.createElement("div",{className:"w-100"},o.default.createElement("div",{className:"w-100 mw7 center overflow-hidden",id:"container"},o.default.createElement("img",{src:r.default,className:"absolute w-100 center mw7 z-1",id:"atom-left"}),o.default.createElement("img",{src:s.default,className:"absolute w-100 center mw7 z-1",id:"atom-right"}),o.default.createElement("div",{className:"w-50 absolute fl overflow-hidden ma0"},o.default.createElement("img",{src:c.default,className:"relative w-100",id:"bubble-left"})),o.default.createElement("div",{className:"w-50 relative fr overflow-hidden"},o.default.createElement("img",{src:u.default,className:"relative w-100",id:"bubble-right"}))))))}}]),t}();t.default=b},449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.meta=void 0,t.default=function(e){var t=e.factories,n=void 0===t?{}:t,r=n.a,s=void 0===r?(0,a.createFactory)("a"):r,c=n.em,u=void 0===c?(0,a.createFactory)("em"):c,d=n.p,b=void 0===d?(0,a.createFactory)("p"):d,m=n.wrapper;return(void 0===m?(0,a.createFactory)("div"):m)({},(0,a.createElement)(o.default,{hed:"Quantum Entanglement",subhed:"It’s not quite as spooky as it sounds."}),(0,a.createElement)(i.EntanglementKnots,null),b({},"Of all the peculiar things that occur in the quantum world, none is more likely to sprain the brain than entanglement. Even Einstein thought it was totally whacko. But over the past 50 years physicists have accumulated a huge body of experimental evidence that entanglement is real. Weird, but real."),b({},"It works like this: As a result of some quantum processes, two or more objects (photons, electrons, atoms, etc.) become so inextricably intertwined—“entangled”—that even if they are physically separated by a great distance, they have a shared connection and cannot be described independently."),b({},"Imagine two entangled photons that fly apart until they are on opposite sides of the galaxy. Each has a chance of being “spin up” or “spin down,” and their entanglement means that if someone measures the spin of Photon 1 and finds that it is up, then the spin of Photon 2 is down. Or vice versa. This happens despite the fact that there is no possible way for information about the result of Photon 1’s measurement to reach Photon 2—",u({},"even if it traveled at the speed of light"),"."),(0,a.createElement)(l.default,null),(0,a.createElement)("div",{style:{height:"100px"},className:"w-40-l w-100 fr pl2 pr2 pl3-l pr0-l"},(0,a.createElement)("div",{className:"w-90-l w-100 mw7 center pl4 f7 fr-l sans-serif gray lh-copy mt1 ba b--moon-gray bg-light-gray caption"},"Entanglement persists even when entangled particles are seperated.")),b({},"This leads to seemingly incredible outcomes: When you measure a property of one of a pair of entangled quantum objects (such as its momentum, polarization, or ",s({href:"Spin"},"spin"),"), and then measure the same property on the other object, the results are ",(0,a.createElement)("i",null,"always"),", ",(0,a.createElement)("i",null,"invariably")," correlated. It looks suspiciously like the measurement of the first object instantaneously determines the properties of the second object."),b({},"Whoa. That kind of behavior seems to be completely at odds with a bedrock quantum principle—namely, that a quantum object like a photon does not have specific properties until it is measured."),b({},"That’s still true with the entangled photons. Measuring a property of one of them will still result in a random value that was impossible to know prior to the measurement. But the corresponding property of the other photon will always be exactly correlated. That’s because entangled objects are not separate, individual entities. They’re both parts of a single quantum whole."),b({},"Einstein balked at that, dismissing entanglement as “spooky action at a distance.” He believed that there must be some so-far-unknown “hidden variables” carried by each object that exist prior to the measurement and account for the inevitable correlations."),b({},"In the 1960s, a test was devised to rule out the existence of hidden variables. It was ferociously difficult to perform, but after decades of increasingly sophisticated work, many teams of physicists have all but the shut the door on the hidden variables idea. One of the most accurate tests to date occurred in 2015, and it dismissed many lingering alternative interpretations, known as “loopholes.” That did not “prove” the existence of entanglement; “proof” is hard to come by in science. But it did leave less room to explain entanglement by other means."),b({},"One more strange feature of entanglement is that two entangled particles (photons, say) that interact with two other kinds of particles (such as atoms) can transfer their entanglement to the atoms. That phenomenon is now being exploited in quantum information processing to transfer quantum states among various components of a system. It’s all but assured that any future quantum computer will harness the power of entanglement."))};var a=n(2),o=(r(a),r(n(362))),i=n(370),l=r(n(448));r(n(366));function r(e){return e&&e.__esModule?e:{default:e}}t.meta={}}}]);
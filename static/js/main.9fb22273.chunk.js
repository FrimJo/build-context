/*! For license information please see main.9fb22273.chunk.js.LICENSE */
(this["webpackJsonpbuild-context-example"]=this["webpackJsonpbuild-context-example"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(1),i=n.n(c),u=(n(15),n(2)),a=n(3),l=n(6),s=n(4),f=n(7),v=n(5);var d=function(e){var t=Object(r.createContext)(void 0),n=Object(r.createContext)(void 0);return{Provider:function(o){var c=o.children,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(o,["children"]),u=e(i),a=u.state,l=u.actions;return Object(r.createElement)(t.Provider,{value:a},Object(r.createElement)(n.Provider,{value:l},c))},useState:function(){var e=Object(r.useContext)(t);if(void 0===e)throw Error("Missing Provider for useState");return e},useActions:function(){var e=Object(r.useContext)(n);if(void 0===e)throw Error("Missing Provider for useActions");return e},StateConsumer:function(e){var n=e.children;return Object(r.createElement)(t.Consumer,null,(function(e){if(void 0===e)throw Error("Missing Provider for StateConsumer");return n({state:e})}))},ActionsConsumer:function(e){var t=e.children;return Object(r.createElement)(n.Consumer,null,(function(e){if(void 0===e)throw Error("Missing Provider for ActionsConsumer");return t({actions:e})}))}}}((function(){var e=o.a.useState(0),t=Object(v.a)(e,2),n=t[0],r=t[1];return{state:{count:n},actions:{increment:o.a.useCallback((function(){return r((function(e){return e+1}))}),[]),decrement:o.a.useCallback((function(){return r((function(e){return e-1}))}),[])}}})),m=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return o.a.createElement(d.Provider,null,o.a.createElement(b,null))}}]),t}(r.Component),b=function(){var e=d.useState().count,t=d.useActions(),n=t.increment,r=t.decrement;return o.a.createElement("div",null,e,o.a.createElement("button",{onClick:n},"increment"),o.a.createElement("button",{onClick:r},"decrement"))};i.a.render(o.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.9fb22273.chunk.js.map
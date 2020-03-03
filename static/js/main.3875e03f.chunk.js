(this["webpackJsonpts-react-redux-example"]=this["webpackJsonpts-react-redux-example"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),i=a(3),o="NEW_STUDENT",m="CHANGE_STUDENT",s="REMOVE_STUDENT";function u(e){return{type:m,payload:e}}var d=a(7),b=a(5),E=a(18),p=a(14),f=a.n(p),h=(a(30),a(15)),v=l.a.memo((function(e){var t=e.id,a=e.name,c=void 0===a?"":a,r=e.birthdate,o=e.editable,m=void 0!==o&&o,p=e.performance,v=void 0===p?"":p,O=Object(i.c)(),j=Object(n.useState)({id:t,name:c,birthdate:r,editable:m,performance:v}),N=Object(E.a)(j,2),k=N[0],g=N[1],y=Object(n.useCallback)((function(e){g(Object(b.a)({},k,Object(d.a)({},e.target.name,e.target.value)))}),[k]),C=Object(n.useCallback)((function(e){g(Object(b.a)({},k,{birthdate:e[0]}))}),[k]),w=Object(n.useCallback)((function(){O(u(Object(b.a)({},k,{editable:!1})))}),[O,k]),D=Object(n.useCallback)((function(){O(u(Object(b.a)({},k,{editable:!0})))}),[O,k]),T=Object(n.useCallback)((function(){g(Object(b.a)({},k,{name:c,birthdate:r,editable:!1,performance:v}))}),[k,c,r,v]),x=Object(n.useCallback)((function(){return O(function(e){return{type:s,id:e}}(t))}),[O,t]);return l.a.createElement("tr",{className:m?"editable":""},l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:k.name,onChange:y,name:"name",disabled:!m})),l.a.createElement("td",null,l.a.createElement(f.a,{value:k.birthdate,options:{locale:h.Russian},onChange:C,disabled:!m})),l.a.createElement("td",null,l.a.createElement("select",{value:k.performance,disabled:!m,name:"performance",onChange:y},["","\u043d\u0435\u0443\u0434","\u0443\u0434","\u0445\u043e\u0440","\u043e\u0442\u043b"].map((function(e,t){return l.a.createElement("option",{value:e,key:t},e)})))),l.a.createElement("td",null,l.a.createElement("div",{className:"actions"},m?l.a.createElement("button",{className:"btn",onClick:w,title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},l.a.createElement("i",{className:"small material-icons"},"done")):l.a.createElement("button",{className:"btn",onClick:D,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},l.a.createElement("i",{className:"small material-icons"},"edit")),l.a.createElement("button",{disabled:!m,className:"btn",onClick:T,title:"\u041e\u0442\u043c\u0435\u043d\u0430"},l.a.createElement("i",{className:"small material-icons"},"undo")),l.a.createElement("button",{className:"btn",onClick:x,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"},l.a.createElement("i",{className:"small material-icons"},"clear")))))})),O=i.d,j=function(){var e=O((function(e){return e.data}),i.b),t=Object(i.c)();return l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u0424\u0418\u041e"),l.a.createElement("th",null,"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"),l.a.createElement("th",null,"\u0423\u0441\u043f\u0435\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u044c"),l.a.createElement("th",null))),l.a.createElement("tbody",null,e.map((function(e){return l.a.createElement(v,Object.assign({},e,{key:e.id}))})))),l.a.createElement("button",{className:"btn-floating btn-large m20 add",onClick:function(){return t((e=Date.now(),{type:o,id:e}));var e},title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"},l.a.createElement("i",{className:"small material-icons"},"add")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(2),k=a(16),g=a(17),y=a(19),C=[{id:0,name:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447 \u0418\u0432\u0430\u043d\u043e\u0432",birthdate:new Date("1991-12-10"),performance:"\u0445\u043e\u0440"},{id:1,name:"\u041f\u0435\u0442\u0440 \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447 \u041f\u0435\u0442\u0440\u043e\u0432",birthdate:new Date("1999-03-03")}];var w=Object(N.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return[].concat(Object(y.a)(e),[{id:t.id,editable:!0}]);case m:return e.map((function(e){return e.id!==t.payload.id?e:t.payload}));case s:return e.filter((function(e){return e.id!==t.id}));default:return e}}});a(31);var D=function(){var e=[Object(k.createLogger)({collapsed:!0})],t=N.applyMiddleware.apply(void 0,e);return Object(N.createStore)(w,Object(g.composeWithDevTools)(t))}();r.a.render(l.a.createElement((function(){return l.a.createElement(i.a,{store:D},l.a.createElement(j,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.3875e03f.chunk.js.map
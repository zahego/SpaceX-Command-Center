(this["webpackJsonpspacex-command-center"]=this["webpackJsonpspacex-command-center"]||[]).push([[0],{20:function(e,t,a){},34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},5:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),s=a.n(r),l=a(21),o=a(22),i=a(33),u=a(31),m=(a(39),function(){return c.a.createElement("div",{className:"nav-bar"})}),d=(a(5),a(1)),p=a.n(d),f=a(4),v=a(32),E=a(23),h=a.n(E),b="https://api.spacexdata.com/v4",N=b.concat("/launches"),g=N.concat("/past"),j=N.concat("/upcoming"),w=N.concat("/latest"),_=N.concat("/next"),O=(b.concat("/launchpads"),b.concat("/payloads"),b.concat("./rockets"),b.concat("/ships"),b.concat("/capsules"),function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,"past"===t?a=g:"upcoming"===t?a=j:"latest"===t?a=w:"next"===t?a=_:t&&a.concat("/"+t),e.prev=2,e.next=5,h.a.get(a);case 5:return n=e.sent,c=n.data,r={id:c.id,links:c.links,static_fire_date_utc:c.static_fire_date_utc,rocket:c.rocket,success:c.success,failures:c.failures,crew:c.crew,ships:c.ships,capsules:c.capsules,payloads:c.payloads,launchpad:c.launchpad,flight_number:c.flight_number,name:c.name,date_utc:c.date_utc,details:c.details,cores:c.cores},e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()),y=(a(20),function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,O("latest");case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),console.log("launch data "+a.details),c.a.createElement("div",{className:"main-content-lanuch"})}),k=function(){return c.a.createElement("div",{className:"main-content"},c.a.createElement(y,null),c.a.createElement("div",{className:"main-content-weather"}),c.a.createElement("div",{className:"main-content-geo"}),c.a.createElement("div",{className:"main-content-news"}),c.a.createElement("div",{className:"main-content-stock"}),c.a.createElement("div",{className:"main-content-tweet"}),c.a.createElement("div",{className:"main-content-vid"}),c.a.createElement("div",{className:"main-content-job"}),c.a.createElement("div",{className:"main-content-quiz"}),c.a.createElement("div",{className:"main-content-poll"}))},x=function(){return c.a.createElement("div",{className:"launch-content"})},S=function(){return c.a.createElement("div",{className:"tweet-content"})},A=function(){return c.a.createElement("div",{className:"content"},c.a.createElement(k,null),c.a.createElement(x,null),c.a.createElement(S,null))},I=(a(58),function(){return c.a.createElement("div",{className:"right-nav"})}),P=(a(59),function(){return c.a.createElement("div",{className:"footer"})}),X=(a(60),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(m,null),c.a.createElement(A,null),c.a.createElement(I,null),c.a.createElement(P,null))}}]),a}(c.a.Component)),D=a(30),J=a(3),L=[],M=a(7),R=a(25),T=a.n(R),q=a(26),z=a(27),B=a.n(z),C=a(28),G={SpaceX_API_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"Display_SpaceX_API_All_Launches":var c=n.reduceTodo;return e.concat(c);default:return e}}},W={key:"root",storage:T.a,stateReconciler:B.a},F=Object(J.combineReducers)(G),H=Object(M.a)(W,F),K=function(){return Object(J.createStore)(H,Object(C.composeWithDevTools)(Object(J.applyMiddleware)(q.a)))},Q=a(29),U=K(),V=Object(M.b)(U);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D.a,{store:K()},c.a.createElement(Q.PersistGate,{loading:c.a.createElement("div",null,"Loading SpaceX data, great power and fortune will come..."),persistor:V},c.a.createElement(X,null)))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.e67cf768.chunk.js.map
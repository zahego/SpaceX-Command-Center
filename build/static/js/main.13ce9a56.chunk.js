(this["webpackJsonpspacex-command-center"]=this["webpackJsonpspacex-command-center"]||[]).push([[0],{125:function(e,t,n){e.exports=n(256)},130:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},244:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),u=n(97),l=n(98),i=n(117),s=n(115),p=(n(130),function(){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement("span",null,"SPACEX COMMNAND CENTER"),r.a.createElement("div",null))}),d=(n(19),n(15)),m=n(5),f=n.n(m),h=n(7),v=n(21),_={topBanner:[],ownDiv:[],ownDivRocket:[]},E=function(e){return{type:"Display_SpaceX_API_All_Launches",payload:{SpaceX_API_reducer:e}}},b=function(e){return{type:"Display_SpaceX_API_Rockets",payload:{SpaceX_API_reducer:e}}},y=n(14),w=n.n(y),g=(n(152),"https://api.spacexdata.com/v3"),k=g.concat("/launches"),O=k.concat("/past"),j=k.concat("/upcoming"),A=k.concat("/latest"),S=k.concat("/next"),x=(g.concat("/launchpads"),g.concat("/payloads"),g.concat("/rockets")),I=(g.concat("/ships"),g.concat("/capsules"),function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k,"past"===t?n=O:"upcoming"===t?n=j:"latest"===t?n=A:"next"===t?n=S:t&&(n=n.concat("/"+t)),e.prev=2,e.next=5,w.a.get(n);case 5:return a=e.sent,r=a.data,c=r,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()),P=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,r,c,o,u,l,i,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k,a=t.keyword,n=n.concat("?filter=".concat(t.data_type,",flight_number")),e.prev=3,e.next=6,w.a.get(n);case 6:if(r=e.sent,c=r.data,1!==(o=c.filter((function(e){return Object.values(e)[0]===a}))).length){e.next=26;break}return e.prev=11,u=k.concat("/".concat(Object.values(o[0])[1])),e.next=15,w.a.get(u);case 15:return l=e.sent,i=l.data,s=i,e.abrupt("return",s);case 21:e.prev=21,e.t0=e.catch(11),console.log(e.t0);case 24:e.next=27;break;case 26:return e.abrupt("return","no matching value");case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(3),console.log(e.t1);case 32:case"end":return e.stop()}}),e,null,[[3,29],[11,21]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x,t&&n.concat("/"+t),e.prev=2,e.next=5,w.a.get(n);case 5:return a=e.sent,r=a.data,c=r,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,r,c,o,u,l,i,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x,a=t.keyword,n=n.concat("?filter=".concat(t.data_type,",rocket_id")),e.prev=3,e.next=6,w.a.get(n);case 6:if(r=e.sent,c=r.data,1!==(o=c.filter((function(e){return Object.values(e)[0]===a}))).length){e.next=26;break}return e.prev=11,u=x.concat("/".concat(Object.values(o[0])[1])),e.next=15,w.a.get(u);case 15:return l=e.sent,i=l.data,s=i,e.abrupt("return",s);case 21:e.prev=21,e.t0=e.catch(11),console.log(e.t0);case 24:e.next=27;break;case 26:return e.abrupt("return","no matching value");case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(3),console.log(e.t1);case 32:case"end":return e.stop()}}),e,null,[[3,29],[11,21]])})));return function(t){return e.apply(this,arguments)}}(),L=(n(22),n(100)),D=n(101),R=n.n(D),M=Object(d.b)((function(e){return{SpaceX_API_reducer:e.SpaceX_API_reducer.topBanner}}),(function(e){return{onOpenLoad:function(){return e((t="upcoming",function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t).then((function(e){n({type:"Display_SpaceX_API_All_Launches_Latest",payload:{SpaceX_API_reducer:e}})})).catch((function(e){console.log("error from thunk "+e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var t}}}))((function(e){var t=e.SpaceX_API_reducer,n=void 0===t?[]:t,c=e.onOpenLoad;if(Object(a.useEffect)((function(){c()}),[]),"undefined"!==typeof n[0]){var o=n[0].links.flickr_images[0];return"undefined"===typeof o&&(o="https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg"),r.a.createElement("div",{className:"main-content-launch"},r.a.createElement("div",{className:"main-content-lanuch-banner",style:{backgroundImage:"url(".concat(o,")")}},r.a.createElement("div",{className:"count-down"},r.a.createElement(L.a,{date:new Date(1e3*n[0].launch_date_unix).toLocaleString()}),r.a.createElement(R.a,{style:{fontSize:70}}))),r.a.createElement("h2",null,"New Mission: ",n[0].mission_name),r.a.createElement("h4",null,"Rocket Name: ",n[0].rocket.rocket_name),r.a.createElement("p",null,"Launch Date: ",n[0].launch_date_utc),r.a.createElement("h6",null,"Launch Site: ",n[0].launch_site.site_name_long))}return r.a.createElement("div",{className:"main-content-launch"})})),C=n(37),B=function(){return r.a.createElement("div",{className:"main-content-video"},r.a.createElement(C.a,{videoId:"W36QKRS_t5k",opts:{height:"445",width:"645",playerVars:{autoplay:0}}}),r.a.createElement("h1",null))},W=n(18),J=n(33),T=function(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){Object(J.loadModules)(["esri/Map","esri/views/MapView"],{css:!0}).then((function(t){var n=Object(W.a)(t,2),a=n[0],r=n[1],c=new a({basemap:"topo-vector"}),o=new r({container:e.current,map:c,center:[-118.3526,33.9164],zoom:13});return function(){o&&(o.container=null)}}))})),r.a.createElement("div",{className:"webmap",ref:e})},z=[],V=function(e){return"http://newsapi.org/v2/everything?apiKey=7732929add5145eeb58a4b07f6198b93&from=2020-08-01&sortBy=popularity".concat("&q=".concat(e))},F=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=V("SpaceX"),t&&(n=V(t)),e.prev=2,e.next=5,w.a.get(n);case 5:return a=e.sent,r=a.data,c=r,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),q=Object(d.b)((function(e){return{News_API_reducer:e.News_API_reducer}}),(function(e){return{onOpenLoad:function(){return e(function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F("spaceX").then((function(e){t({type:"Display_News_API",payload:{News_API_reducer:e}})})).catch((function(e){console.log("error from news thunk "+e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.News_API_reducer,n=void 0===t?[]:t,c=e.onOpenLoad;return Object(a.useEffect)((function(){c()}),[]),"undefined"!==typeof n[0]?r.a.createElement("div",{className:"main-content-news"},r.a.createElement("h3",null,n[0].articles[0].title),r.a.createElement("h5",null,n[0].articles[0].author),r.a.createElement("h6",null,n[0].articles[0].publishedAt),r.a.createElement("h6",null,n[0].articles[0].url),r.a.createElement("p",null,n[0].articles[0].content)):r.a.createElement("div",{className:"main-content-news"})})),G=[],H="https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=".concat("9202d034","&app_key=").concat("e02dbe21eeb7e32b6f26223562f786f9"),Q=function(e){return H.concat("&&results_per_page=20&what=".concat(e,"&content-type=application/json"))},K=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Q("SpaceX"),t&&(n=Q(t)),e.prev=2,e.next=5,w.a.get(n);case 5:return a=e.sent,r=a.data,c=r,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),U=Object(d.b)((function(e){return{Job_API_reducer:e.Job_API_reducer}}),(function(e){return{onOpenLoad:function(){return e(function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K("SpaceX").then((function(e){t({type:"Display_Job_API",payload:{Job_API_reducer:e}})})).catch((function(e){console.log("error from job thunk "+e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.Job_API_reducer,n=void 0===t?[]:t,c=e.onOpenLoad;return Object(a.useEffect)((function(){c()}),[]),"undefined"!==typeof n[0]?r.a.createElement("div",{className:"main-content-Job"},r.a.createElement("a",{href:n[0].results[0].redirect_url},r.a.createElement("h3",null,n[0].results[0].company.display_name),r.a.createElement("h6",null,n[0].results[0].location.display_name),r.a.createElement("h2",null,n[0].results[0].title),r.a.createElement("p",null,n[0].results[0].description),r.a.createElement("h6",null,n[0].results[0].created))):r.a.createElement("div",{className:"main-content-job"})})),Y=[],Z=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.reddit.com/r/spacex.json?limit=1",e.prev=1,e.next=4,w.a.get("https://www.reddit.com/r/spacex.json?limit=1");case 4:return n=e.sent,a=n.data,r=a,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),$=n(51),ee=n(104),te=n.n(ee),ne=n(297),ae=n(4),re=n(298),ce=n(299),oe=n(301),ue=n(302),le=n(303),ie=n(304),se=n(312),pe=n(300),de=n(57),me=n(56),fe=n(106),he=n.n(fe),ve=n(107),_e=n.n(ve),Ee=n(108),be=n.n(Ee),ye=n(105),we=n.n(ye),ge=Object(ne.a)((function(e){return{root:{maxWidth:3950},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:me.a[500]}}})),ke=function(e){var t=e.title,n=e.subheader,c=e.comment,o=e.htmlstuff,u=e.imgstuff,l=ge(),i=Object(a.useState)(!1),s=Object(W.a)(i,2),p=s[0],d=s[1];return r.a.createElement(re.a,{className:l.root},r.a.createElement(ce.a,{avatar:r.a.createElement(se.a,{"aria-label":"recipe",className:l.avatar},"R "),action:r.a.createElement(pe.a,{"aria-label":"settings"}," ",r.a.createElement(we.a,null)," "),title:t,subheader:n}),"undefined"===typeof u?r.a.createElement("span",null):r.a.createElement(oe.a,{className:l.media,image:u,title:"Reddit Image"}),r.a.createElement(ue.a,null,r.a.createElement(de.a,{variant:"body2",color:"textSecondary",component:"span"},r.a.createElement(te.a,{source:o,className:"truncate"}))),r.a.createElement(le.a,{disableSpacing:!0},r.a.createElement(pe.a,{"aria-label":"add to favorites"},r.a.createElement(he.a,null)),r.a.createElement(pe.a,{"aria-label":"share"},r.a.createElement(_e.a,null)),r.a.createElement(pe.a,{className:Object(ae.a)(l.expand,Object($.a)({},l.expandOpen,p)),onClick:function(){d(!p)},"aria-expanded":p,"aria-label":"show more"},r.a.createElement(be.a,null))),r.a.createElement(ie.a,{in:p,timeout:"auto",unmountOnExit:!0},r.a.createElement(ue.a,null,r.a.createElement(de.a,{paragraph:!0},"Comment:",c))))},Oe=Object(d.b)((function(e){return{SocialMedia_API_reducer:e.SocialMedia_API_reducer}}),(function(e){return{onOpenLoad:function(){return e(function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z("SpaceX").then((function(e){t({type:"Display_SocialMedia_API_SpaceX",payload:{SocialMedia_API_reducer:e}})})).catch((function(e){console.log("error from SocialMedia thunk "+e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.SocialMedia_API_reducer,n=void 0===t?[]:t,c=e.onOpenLoad;if(Object(a.useEffect)((function(){c()}),[]),"undefined"!==typeof n[0]){var o=n[0].data.children[0].data.title,u=n[0].data.children[0].data.num_comments,l=n[0].data.children[0].data.num_comments,i=n[0].data.children[0].data.selftext,s=n[0].data.children[0].data.url_overridden_by_dest;return r.a.createElement("div",{className:"main-content-SocialMedia"},r.a.createElement(ke,{comment:l,title:o,subheader:u,htmlstuff:i,imgstuff:s}))}return r.a.createElement("div",{className:"main-content-SocialMedia"})})),je=[],Ae="http://api.weatherapi.com/v1/current.json?key=".concat("594da0f0115441f38dc05153202608"),Se=function(e){return Ae.concat("&q=".concat(e))},xe=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Ae,t&&(n=Se(t)),e.prev=2,e.next=5,w.a.get(n);case 5:return a=e.sent,r=a.data,c=r,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),Ie=Object(d.b)((function(e){return{Weather_API_reducer:e.Weather_API_reducer}}),(function(e){return{onOpenLoad:function(t){return e(function(e){return function(){var t=Object(h.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",xe(e).then((function(e){n({type:"Display_Weather_API",payload:{Weather_API_reducer:e}})})).catch((function(e){console.log("error from Weather thunk "+e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.Weather_API_reducer,n=void 0===t?[]:t,c=e.onOpenLoad;return Object(a.useEffect)((function(){c("Hawthorne")}),[]),"undefined"!==typeof n[0]?r.a.createElement("div",{className:"main-content-weather"},r.a.createElement("img",{src:n[0].current.condition.icon,style:{width:"130px",height:"110px"}}),r.a.createElement("h3",null,n[0].current.temp_c,"\u02daC"),r.a.createElement("h6",null,n[0].current.humidity,"%"),r.a.createElement("h6",null,n[0].location.localtime),r.a.createElement("p",null,n[0].location.name,", ",n[0].location.region)):r.a.createElement("div",{className:"main-content-weather"})})),Pe=function(){return r.a.createElement("div",{className:"main-content",id:"main-content"},r.a.createElement(M,null),r.a.createElement(Ie,null),r.a.createElement(T,null),r.a.createElement(q,null),r.a.createElement(B,null),r.a.createElement(Oe,null),r.a.createElement("div",{className:"main-content-stock"}),r.a.createElement(U,null),r.a.createElement("div",{className:"main-content-quiz"}),r.a.createElement("div",{className:"main-content-poll"}))},Ne=n(309),Xe=(n(305),n(258)),Le=(n(306),n(308),n(307),n(257),n(313),n(310),n(311),n(70)),De=n.n(Le),Re=Object(d.b)((function(e){return console.log(e.SpaceX_API_reducer),{SpaceX_API_reducer:e.SpaceX_API_reducer.ownDiv,SpaceX_API_reducer_Rocket:e.SpaceX_API_reducer.ownDivRocket}}),(function(e){return{onOpenLoad:function(){return e(function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I(t).then((function(e){n(E(e))})).catch((function(e){console.log("error from thunk "+e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var t},onOpenLoadRocket:function(){return e(function(){var e=Object(h.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N().then((function(e){t(b(e))})).catch((function(e){console.log("error from thunk "+e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onButtonLoad:function(t){var n=t.data_type,a=t.keyword;return e(function(e){e.data_type;var t=e.keyword;return function(){var e=Object(h.a)(f.a.mark((function e(n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=4;break}return e.abrupt("return",I().then((function(e){n(E(e))})).catch((function(e){console.log("error from thunk "+e)})));case 4:return a={data_type:"mission_name",keyword:t},e.abrupt("return",P(a).then((function(e){n({type:"Search_SPaceX_API_Launch",payload:{SpaceX_API_reducer:e}})})).catch((function(e){console.log("error from thunk "+e)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({data_type:n,keyword:a}))},onButtonLoadRocket:function(t){var n=t.data_type,a=t.keyword;return e(function(e){e.data_type;var t=e.keyword;return function(){var e=Object(h.a)(f.a.mark((function e(n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=4;break}return e.abrupt("return",N().then((function(e){n(b(e))})).catch((function(e){console.log("error from thunk "+e)})));case 4:return a={data_type:"rocket_name",keyword:t},e.abrupt("return",X(a).then((function(e){n({type:"Search_SpaceX_API_Rocket",payload:{SpaceX_API_reducer:e}})})).catch((function(e){console.log("error from thunk "+e)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({data_type:n,keyword:a}))}}}))((function(e){var t=e.SpaceX_API_reducer,n=void 0===t?[]:t,c=e.SpaceX_API_reducer_Rocket,o=void 0===c?[]:c,u=e.onOpenLoad,l=e.onOpenLoadRocket,i=e.onButtonLoad,s=e.onButtonLoadRocket,p=Object(a.useState)(""),d=Object(W.a)(p,2),m=d[0],f=d[1],h=Object(a.useState)(""),v=Object(W.a)(h,2),_=v[0],E=v[1];Object(a.useEffect)((function(){u(),l()}),[]);var b=[0,1,2],y=[0,1,2];n.length<=3&&(b=[0]),o.length<=3&&(y=[0]);var w=null,g=null;if("undefined"!==typeof n[0]&&"undefined"!==typeof o[0])n[0].links.flickr_images[0],o[0].flickr_images[0];return w="undefined"===typeof w||null==w?"https://images2.imgbox.com/57/6a/upI6gwfq_o.png":w,g="undefined"===typeof g||null==g?"https://images2.imgbox.com/40/e3/GypSkayF_o.png":g,r.a.createElement("div",{style:{textAlign:"center",paddingTop:"40px"}},r.a.createElement("h2",null,r.a.createElement(De.a,null),"  Search for newest launch and rocket information  ",r.a.createElement(De.a,null)),r.a.createElement("div",{className:"launch-content",id:"launch-content"},"undefined"!==typeof n[0]?r.a.createElement("div",{className:"ownDiv-launch"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(Ne.a,{onChange:function(e){!function(e){f(e.target.value)}(e)},style:{paddingTop:"10px",marginBottom:"10px"}}),r.a.createElement(Xe.a,{variant:"contained",color:"primary",onClick:function(){return i({data_type:"",keyword:m})}},"Submit")),b.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("div",null,r.a.createElement("img",{src:w,style:{height:"150px",width:"150px"}})),r.a.createElement("p",null,"Mission Name:",n[e].mission_name),r.a.createElement("p",null,"Rocket Name: ",n[e].rocket.rocket_name),r.a.createElement("p",null,"Date: ",n[e].launch_date_utc),r.a.createElement("p",null,"Location: ",n[e].launch_site.site_name_long))}))):r.a.createElement("div",null),"undefined"!==typeof o[0]?r.a.createElement("div",{className:"ownDiv-rocket"},r.a.createElement(Ne.a,{onChange:function(e){!function(e){E(e.target.value)}(e)},style:{paddingTop:"10px",marginBottom:"10px"}}),r.a.createElement(Xe.a,{variant:"contained",color:"primary",onClick:function(){return s({data_type:"",keyword:_})}},"Submit"),y.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("div",null,r.a.createElement("img",{src:g,style:{height:"150px",width:"150px"}})),r.a.createElement("p",null,"Rocket Name:",o[e].rocket_name),r.a.createElement("p",null,"Height: ",o[e].height.meters,"m, Mass:",o[e].mass.kg,"kg"),r.a.createElement("p",null,"First Flight: ",o[e].first_flight),r.a.createElement("p",null,"Location: ",o[e].country))}))):r.a.createElement("div",null)))})),Me=function(){return r.a.createElement("div",{className:"social-media-content"})},Ce=n(116),Be=function(e){var t=e.w,n=e.n,c=e.zoom,o=Object(a.useRef)();return"number"!==typeof t&&(t=-118.3526),"number"!==typeof n&&(n=33.9164),"number"!==typeof c&&(c=13),Object(a.useEffect)((function(){Object(J.loadModules)(["esri/Map","esri/views/MapView"],{css:!0}).then((function(e){var a=Object(W.a)(e,2),r=a[0],u=a[1],l=new r({basemap:"topo-vector"}),i=new u({container:o.current,map:l,center:[t,n],zoom:{zoom:c}});return function(){i&&(i.container=null)}}))})),r.a.createElement("div",{style:{height:"400px",width:"94vw",padding:"2vw"}},r.a.createElement(Ce.a,{class:"full-screen-map",mapProperties:{basemap:"satellite"}}))},We=n(71),Je=n.n(We),Te=function(){return r.a.createElement("div",{className:"geo-content",id:"geo-content"},r.a.createElement("h2",null,r.a.createElement(Je.a,null),"  Adventuring right throught your screen  ",r.a.createElement(Je.a,null)),r.a.createElement(Be,null))},ze=n(72),Ve=n.n(ze),Fe=function(){var e={height:"250",width:"350",playerVars:{autoplay:0}};return r.a.createElement("div",{style:{textAlign:"center",color:"rgb(120,82,78)"}},r.a.createElement("h2",null,r.a.createElement(Ve.a,null),"  Prepare for your future ",r.a.createElement(Ve.a,null)),r.a.createElement("div",{className:"video-content",id:"video-content"},r.a.createElement(C.a,{videoId:"uqKGREZs6-w",opts:e}),r.a.createElement(C.a,{videoId:"wbSwFU6tY1c",opts:{height:"400",width:"550",playerVars:{autoplay:0}}}),r.a.createElement(C.a,{videoId:"uD4izuDMUQA",opts:e}),r.a.createElement("h1",null)))},qe=function(){return r.a.createElement("div",{className:"content"},r.a.createElement(Pe,null),r.a.createElement(Re,null),r.a.createElement(Me,null),r.a.createElement(Te,null),r.a.createElement(Fe,null))},Ge=(n(244),n(45)),He=function(){return r.a.createElement("div",{className:"right-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(Ge.Link,{activeClass:"active",to:"main-content",smooth:!0,spy:!0,offset:-70,duration:500},"Main Content")),r.a.createElement("li",null,r.a.createElement(Ge.Link,{activeClass:"active",to:"launch-content",smooth:!0,spy:!0,offset:-70,duration:500},"SpaceX info")),r.a.createElement("li",null,r.a.createElement(Ge.Link,{activeClass:"active",to:"geo-content",smooth:!0,spy:!0,offset:-70,duration:500},"Geolocation")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://weather.com/weather/hourbyhour/l/3be923e996779bcd5cacbed96ae5ec00a10509d102e79775a7fe822665c9fbd2"},"Weather")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/r/spacex/"},"Reddit")),r.a.createElement("li",null,r.a.createElement(Ge.Link,{activeClass:"active",to:"video-content",smooth:!0,spy:!0,offset:-70,duration:500},"Video")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.bbc.co.uk/news/topics/c5y915pwp89t/spacex"},"News")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.alphavantage.co/query?function=OVERVIEW&symbol=TSL&apikey=88ABEOQGHD8LBYUF&fbclid=IwAR0EuCGB8A2ee-_FWdRmz7eQfTHvi9Pcw7j-m4uFh6As7nXghvcOeppoxek"},"Stock")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.indeed.com/cmp/Spacex/reviews"},"Job"))))},Qe=(n(252),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("h1",{style:{paddingTop:"40px"}},"SpaceX Command Center"),r.a.createElement("h3",null,'A info site about SpaceX that was developed in a "Command Center" style'),r.a.createElement("h6",null,"Made by Minh Tran with Reactjs"))}),Ke=(n(253),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(p,null),r.a.createElement(qe,null),r.a.createElement(He,null),r.a.createElement(Qe,null))}}]),n}(r.a.Component)),Ue=n(20),Ye=n(55),Ze=n(110),$e=n.n(Ze),et=n(111),tt=n(112),nt=n.n(tt),at=n(113),rt={SpaceX_API_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"Display_SpaceX_API_All_Launches_Latest":var r=a.SpaceX_API_reducer;return Object(v.a)(Object(v.a)({},e),{},{topBanner:e.topBanner.concat(r)});case"Search_SPaceX_API_Launch":var c=a.SpaceX_API_reducer;return Object(v.a)(Object(v.a)({},e),{},{ownDiv:e.ownDiv.filter((function(e){return e.flight_number===c.flight_number}))});case"Display_SpaceX_API_All_Launches":var o=a.SpaceX_API_reducer;return Object(v.a)(Object(v.a)({},e),{},{ownDiv:e.ownDiv.concat(o)});case"Search_SpaceX_API_Rocket":var u=a.SpaceX_API_reducer;return Object(v.a)(Object(v.a)({},e),{},{ownDivRocket:e.ownDivRocket.filter((function(e){return e.id===u.id}))});case"Display_SpaceX_API_Rockets":var l=a.SpaceX_API_reducer;return Object(v.a)(Object(v.a)({},e),{},{ownDivRocket:e.ownDivRocket.concat(l)});default:return e}},News_API_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"Display_News_API":var r=a.News_API_reducer;return e=e.concat(r);default:return e}},Job_API_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"Display_Job_API":var r=a.Job_API_reducer;return e=e.concat(r);default:return e}},SocialMedia_API_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"Display_SocialMedia_API_SpaceX":var r=a.SocialMedia_API_reducer;return e=e.concat(r);default:return e}},Weather_API_reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"Display_Weather_API":var r=a.Weather_API_reducer;return e=e.concat(r);default:return e}}},ct={key:"root",storage:$e.a,stateReconciler:nt.a},ot=Object(Ue.combineReducers)(rt),ut=Object(Ye.a)(ct,ot),lt=function(){return Object(Ue.createStore)(ut,Object(at.composeWithDevTools)(Object(Ue.applyMiddleware)(et.a)))},it=n(114),st=lt(),pt=Object(Ye.b)(st);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:lt()},r.a.createElement(it.PersistGate,{loading:r.a.createElement("div",null,"Loading SpaceX data, great power and fortune will come..."),persistor:pt},r.a.createElement(Ke,null)))),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.13ce9a56.chunk.js.map
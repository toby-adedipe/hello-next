(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{127:function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,r){var o=new XMLHttpRequest;for(var s in o.open(n.method||"get",e,!0),n.headers)o.setRequestHeader(s,n.headers[s]);function u(){var e,n=[],t=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,s,u){n.push(s=s.toLowerCase()),t.push([s,u]),r[s]=(e=r[s])?e+","+u:u}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:u,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==n.credentials,o.onload=function(){t(u())},o.onerror=r,o.send(n.body||null)})}},131:function(e,n,t){e.exports=window.fetch||(window.fetch=t(127).default||t(127))},318:function(e,n,t){__NEXT_REGISTER_PAGE("/post",function(){return e.exports=t(319),{page:e.exports.default}})},319:function(e,n,t){"use strict";t.r(n);var r=t(88),o=t.n(r),s=t(0),u=t.n(s),a=t(131),i=t.n(a),c=t(33);function l(e,n,t,r,o,s,u){try{var a=e[s](u),i=a.value}catch(e){return void t(e)}a.done?n(i):Promise.resolve(i).then(r,o)}var f=function(e){return u.a.createElement(c.a,null,u.a.createElement("h1",null,e.show.name),u.a.createElement("p",null,e.show.summary.replace(/<[\/]?p>/g,"")),u.a.createElement("img",{src:e.show.image.medium}))};f.getInitialProps=function(){var e,n=(e=o.a.mark(function e(n){var t,r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.id,e.next=3,i()("https://api.tvmaze.com/shows/".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,console.log("Fetched show: ".concat(s.name)),e.abrupt("return",{show:s});case 9:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,o){var s=e.apply(n,t);function u(e){l(s,r,o,u,a,"next",e)}function a(e){l(s,r,o,u,a,"throw",e)}u(void 0)})});return function(e){return n.apply(this,arguments)}}(),n.default=f},88:function(e,n,t){e.exports=t(97)}},[[318,1,0]]]);
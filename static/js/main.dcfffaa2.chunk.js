(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(7),r=n.n(i),o=(n(14),n(4)),l=n(8),s=n(1),u=(n(6),function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],r=n[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],m=l[1],d=function(){var t=u.trim();t?e.addTask(t):r(!0),m("")},f=function(t){return function(){return e.changeFilter(t)}},b=function(e,t){var n;switch(t){case"Completed":n=e.filter((function(e){return!0===e.isDone}));break;case"Active":n=e.filter((function(e){return!1===e.isDone}));break;default:n=e}return n}(e.tasks,e.filter),v=b.length?b.map((function(t){var n=t.isDone?"is-done":"";return c.a.createElement("li",{key:t.id},c.a.createElement("input",{type:"checkbox",checked:t.isDone,onChange:function(n){return e.changeTaskStatus(t.id,n.currentTarget.checked)}}),c.a.createElement("span",{className:n},t.title),c.a.createElement("button",{className:"buttonDel",onClick:function(){return e.removeTask(t.id)}},"del"))})):c.a.createElement("span",null,"No tasks with this filter"),h="All"===e.filter?"active-filter":"",k="Active"===e.filter?"active-filter":"",E="Completed"===e.filter?"active-filter":"",p=i?"error":"";return c.a.createElement("div",{className:"todoList"},c.a.createElement("h3",null,e.title),c.a.createElement("div",null,c.a.createElement("input",{value:u,onChange:function(e){m(e.currentTarget.value),i&&r(!1)},onKeyPress:function(e){"Enter"===e.key&&d()},className:p}),c.a.createElement("button",{onClick:d},"+"),i&&c.a.createElement("div",{className:"error-message"},"Tittle is required")),c.a.createElement("ul",null,v),c.a.createElement("div",null,c.a.createElement("button",{className:h,onClick:f("All")},"All"),c.a.createElement("button",{className:k,onClick:f("Active")},"Active"),c.a.createElement("button",{className:E,onClick:f("Completed")},"Completed")))}),m=n(17);var d=function(){var e=Object(a.useState)([{id:Object(m.a)(),title:"HTML&CSS",isDone:!0},{id:Object(m.a)(),title:"JS",isDone:!0},{id:Object(m.a)(),title:"React",isDone:!1}]),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)("All"),d=Object(s.a)(r,2),f=d[0],b=d[1];return c.a.createElement("div",{className:"App"},c.a.createElement(u,{title:"what to learn",filter:f,tasks:n,addTask:function(e){var t={id:Object(m.a)(),title:e,isDone:!1};i([t].concat(Object(l.a)(n)))},removeTask:function(e){i(n.filter((function(t){return t.id!==e})))},changeFilter:function(e){b(e),console.log(e)},changeTaskStatus:function(e,t){i(n.map((function(n){return n.id===e?Object(o.a)(Object(o.a)({},n),{},{isDone:t}):n})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.dcfffaa2.chunk.js.map
!function(e){var t={};function o(n){if(t[n])return t[n].exports;var d=t[n]={i:n,l:!1,exports:{}};return e[n].call(d.exports,d,d.exports,o),d.l=!0,d.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)o.d(n,d,function(t){return e[t]}.bind(null,d));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=(e,t,o,n)=>({title:e,description:t,dueDate:o,priority:n,checklist:[]}),d=e=>({title:e,todos:[]}),i=function(e){let t=e,o=document.getElementById("projectview"),n=o.cloneNode(!1);o.parentNode.replaceChild(n,o),o=document.getElementById("projectview");let d=document.getElementById("todoview");n=d.cloneNode(!1),d.parentNode.replaceChild(n,d),d=document.getElementById("todoview");const i=function(e,t){let n=document.getElementById("todoview");parseInt(n.getAttribute("project-index"))>-1&&(n=parseInt(n.getAttribute("project-index")));let d=document.createElement("div");d.innerHTML=e.title,d.classList.add("projectnode"),n==t&&d.classList.add("selected");let i=document.createElement("button");i.innerHTML="x",i.classList.add("deleteproject");let l=document.createElement("button");l.innerHTML="edit",l.classList.add("editproject"),d.appendChild(l),d.appendChild(i),o.appendChild(d)};for(let e in t)i(t[e],e);!function(){let e=document.getElementById("todoview");if(parseInt(e.getAttribute("project-index"))>-1){let o=t[parseInt(e.getAttribute("project-index"))].todos;for(let e=0;e<o.length;e++){let t=document.createElement("div");t.innerHTML=o[e].title,t.classList.add("tododiv");let n=document.createElement("button");n.innerHTML="x",n.classList.add("deletetodo");let i=document.createElement("button");i.innerHTML="edit",i.classList.add("edittodo");let l=document.createElement("p");l.innerHTML=o[e].description;let r=document.createElement("p");r.innerHTML="Due: "+o[e].dueDate;let c=document.createElement("p");c.innerHTML=o[e].priority,t.appendChild(i),t.appendChild(n),t.appendChild(l),t.appendChild(r),t.appendChild(c),d.appendChild(t)}let n=document.createElement("button");n.innerHTML="Add New To Do",n.id="addtodo",d.appendChild(n)}}();let l=document.createElement("button");l.innerHTML="Add New Project",l.id="addproject",o.appendChild(l)},l=function(){let e=[];const t=function(t,o){o.stopPropagation(),e.splice(t,1),document.getElementById("todoview").setAttribute("project-index","stop"),i(e),r()},o=function(t){let o=parseInt(document.getElementById("todoview").getAttribute("project-index"));e[o].todos[t].title=prompt("New Title"),e[o].todos[t].description=prompt("New description"),e[o].todos[t].dueDate=prompt("New due date"),e[o].todos[t].priority=prompt("New Priority"),i(e),r()},l=function(t){let o=parseInt(document.getElementById("todoview").getAttribute("project-index"));e[o].todos.splice(t,1),i(e),r()},r=function(){document.getElementById("addproject").onclick=function(){!function(t){let o=d(t);e.push(o),i(e),r()}(prompt("Name of Project"))};let c=document.getElementById("addtodo");c&&(c.onclick=function(){!function(t,o,d,l){let c=parseInt(document.getElementById("todoview").getAttribute("project-index")),u=n(t,o,d,l);e[c].todos.push(u),i(e),r()}(prompt("Name To do"),prompt("Description"),prompt("Due Date"),prompt("Priority"))});let u=document.getElementsByClassName("editproject");for(let t=0;t<u.length;t++)u[t].onclick=function(){e[t].title=prompt("New Title"),i(e),r()};let p=document.getElementsByClassName("deleteproject");for(let e=0;e<p.length;e++)p[e].onclick=function(o){t(e,o)};let s=document.getElementsByClassName("edittodo");for(let e=0;e<s.length;e++)s[e].onclick=function(){o(e)};let a=document.getElementsByClassName("deletetodo");for(let e=0;e<a.length;e++)a[e].onclick=function(){l(e)};let m=document.getElementsByClassName("projectnode");for(let t=0;t<m.length;t++)m[t].onclick=function(){var o;o=t,document.getElementById("todoview").setAttribute("project-index",o),i(e),r()}};!function(){let t=d("FIrst project"),o=n("firsttodo","test","11/25/2020","low"),i=n("secondtodo","test","11/25/2020","low");o.checklist.push("test checklist"),t.todos.push(o),t.todos.push(i),e.push(t)}(),i(e),r()};window.onload=function(){const e=n("testtitle","testdesc","testdue","testpriority"),t=d("testproject");t.todos.push(e),console.log(e),e.dueDate="new duedate",console.log(t),l()}}]);
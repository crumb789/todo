(function(t){function e(e){for(var o,r,i=e[0],a=e[1],u=e[2],l=0,b=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);d&&d(e);while(b.length)b.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var a=n[r];0!==c[a]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},s=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fde58ab3"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=c[t]=[e,o]}));e.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=r(t);var u=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,n[1](u)}c[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/todo/",i.oe=function(t){throw console.error(t),t};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0270":function(t,e,n){},"40d3":function(t,e,n){"use strict";n("734c")},"4d91":function(t,e,n){},"505a":function(t,e,n){"use strict";n("dc0b")},5142:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e){var n=Object(o["A"])("router-view");return Object(o["s"])(),Object(o["d"])(n)}n("505a");var s=n("6b0d"),r=n.n(s);const i={},a=r()(i,[["render",c]]);var u=a,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),d={class:"container"},b=Object(o["g"])("nav",null,[Object(o["g"])("h1",null,"todo list")],-1),f={class:"content"},h={key:0,class:"task-form"},O=Object(o["h"])(" Задачи "),j=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[Object(o["g"])("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(o["g"])("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1),m=[j],v={key:1,class:"task-create"},k={key:0,class:"placeholder"},p={key:1,class:"placeholder"};function g(t,e,n,c,s,r){var i=Object(o["A"])("create-task"),a=(Object(o["A"])("add-child-task"),Object(o["A"])("task")),u=Object(o["A"])("list"),l=Object(o["A"])("enter-todo"),j=Object(o["A"])("todo-item"),g=Object(o["A"])("todo-list");return Object(o["s"])(),Object(o["f"])("div",d,[b,Object(o["g"])("div",f,[Object(o["i"])(u,null,{default:Object(o["G"])((function(){return[s.taskForm?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("div",h,[O,Object(o["g"])("div",{class:"task-plus",onClick:e[0]||(e[0]=function(t){return s.taskForm=!s.taskForm}),title:"Добавить задачу"},m)])),s.taskForm?(Object(o["s"])(),Object(o["f"])("div",v,[Object(o["i"])(i,{onSubmitNewtask:r.createTask,listTask:s.listTask,onCreateTaskClose:r.createTaskClose},null,8,["onSubmitNewtask","listTask","onCreateTaskClose"])])):Object(o["e"])("",!0),(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(s.listTask,(function(t,e){return Object(o["s"])(),Object(o["d"])(a,{key:e,item:t,selectedTask:s.selectedTask,onChoiceTask:r.choiseTask,onRemoveTask:r.removeTask},{default:Object(o["G"])((function(){return[Object(o["e"])("",!0)]})),_:2},1032,["item","selectedTask","onChoiceTask","onRemoveTask"])})),128))]})),_:1}),s.listTask.length<1?(Object(o["s"])(),Object(o["f"])("div",k," Создайте задачу ")):s.selectedTask?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["f"])("div",p,Object(o["C"])(s.placeholder),1)),s.selectedTask&&s.listTask.length>0?(Object(o["s"])(),Object(o["d"])(g,{key:2},{default:Object(o["G"])((function(){return[Object(o["i"])(l,{selectedTask:s.selectedTask,todoArray:s.todoArray,onSubmitNewTodo:r.newToCreate},null,8,["selectedTask","todoArray","onSubmitNewTodo"]),(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(s.todoArray,(function(t){return Object(o["s"])(),Object(o["d"])(j,{key:t.id,item:t,selectedTask:s.selectedTask,onDoneSubmit:r.doneSubmit,onRemoveTodo:r.removeTodo},null,8,["item","selectedTask","onDoneSubmit","onRemoveTodo"])})),128))]})),_:1})):Object(o["e"])("",!0)])])}n("4de4"),n("e9c4");var y={class:"list"};function T(t,e,n,c,s,r){return Object(o["s"])(),Object(o["f"])("div",y,[Object(o["z"])(t.$slots,"default")])}var w={name:"todo-list",data:function(){return{}}};n("7b92");const C=r()(w,[["render",T]]);var A=C;function x(t,e,n,c,s,r){return n.item.task===n.selectedTask.id?(Object(o["s"])(),Object(o["f"])("div",{key:0,class:Object(o["o"])(["item",{done:!0===n.item.done}]),onMouseover:e[2]||(e[2]=function(t){return s.remove=!0}),onMouseleave:e[3]||(e[3]=function(t){return s.remove=!1})},[Object(o["g"])("div",{class:Object(o["o"])(["check",{checkdone:!0===n.item.done}]),onClick:e[0]||(e[0]=function(){return r.doneCheck&&r.doneCheck.apply(r,arguments)})},null,2),Object(o["h"])(" "+Object(o["C"])(n.item.todo)+" ",1),s.remove?(Object(o["s"])(),Object(o["f"])("div",{key:0,class:"remove",onClick:e[1]||(e[1]=function(e){return t.$emit("remove-todo",n.item)}),title:"Удалить"})):Object(o["e"])("",!0)],34)):Object(o["e"])("",!0)}var S={name:"todo-item",props:{item:{type:Object,requared:!0},selectedTask:{type:Object}},data:function(){return{done:!1,remove:!1}},methods:{doneCheck:function(){this.$emit("done-submit",this.item)}}};n("f0e0");const M=r()(S,[["render",x]]);var _=M,q={class:"input-todo"},z=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[Object(o["g"])("g",null,[Object(o["g"])("rect",{fill:"none",height:"24",width:"24"})]),Object(o["g"])("g",null,[Object(o["g"])("g"),Object(o["g"])("g",null,[Object(o["g"])("path",{d:"M17,19.22H5V7h7V5H5C3.9,5,3,5.9,3,7v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-7h-2V19.22z"}),Object(o["g"])("path",{d:"M19,2h-2v3h-3c0.01,0.01,0,2,0,2h3v2.99c0.01,0.01,2,0,2,0V7h3V5h-3V2z"}),Object(o["g"])("rect",{height:"2",width:"8",x:"7",y:"9"}),Object(o["g"])("polygon",{points:"7,12 7,14 15,14 15,12 12,12"}),Object(o["g"])("rect",{height:"2",width:"8",x:"7",y:"15"})])])],-1),H=Object(o["g"])("span",null,"Добавь заметку",-1),V=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[Object(o["g"])("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(o["g"])("path",{d:"M7 10l5 5 5-5H7z"})],-1),$=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[Object(o["g"])("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(o["g"])("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1);function F(t,e,n,c,s,r){var i=Object(o["A"])("my-button");return Object(o["s"])(),Object(o["f"])("div",q,[s.showForm?Object(o["e"])("",!0):(Object(o["s"])(),Object(o["d"])(i,{key:0,onClick:e[0]||(e[0]=function(t){return s.showForm=!0}),title:"Добавить заметку",class:"todo-btn"},{default:Object(o["G"])((function(){return[z,H]})),_:1})),s.showForm?(Object(o["s"])(),Object(o["f"])("form",{key:1,onSubmit:e[2]||(e[2]=Object(o["I"])((function(){return r.onSubmit&&r.onSubmit.apply(r,arguments)}),["prevent"]))},[Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.todo=t})},null,512),[[o["E"],s.todo]]),Object(o["i"])(i,{class:"task-btn",disabled:!s.todo},{default:Object(o["G"])((function(){return[V]})),_:1},8,["disabled"])],32)):Object(o["e"])("",!0),s.showForm?(Object(o["s"])(),Object(o["d"])(i,{key:2,class:"input-close",onClick:e[3]||(e[3]=function(t){return s.showForm=!1})},{default:Object(o["G"])((function(){return[$]})),_:1})):Object(o["e"])("",!0)])}var G={class:"btn"};function B(t,e,n,c,s,r){return Object(o["s"])(),Object(o["f"])("button",G,[Object(o["z"])(t.$slots,"default")])}var P={name:"my-button",data:function(){return{}}};n("6e43");const N=r()(P,[["render",B]]);var E=N,I={components:{MyButton:E},name:"enter-form",props:{selectedTask:{type:Object,requared:!0},todoArray:{type:Array}},data:function(){return{todo:null,id:null,showForm:!1}},methods:{onSubmit:function(){var t={todo:this.todo,id:this.todoArray.length+1,task:this.selectedTask.id,done:!1};this.$emit("submit-newTodo",t),this.todo=null}}};n("664e");const J=r()(I,[["render",F]]);var L=J,D={class:"task"};function R(t,e,n,c,s,r){return Object(o["s"])(),Object(o["f"])("div",D,[Object(o["z"])(t.$slots,"default",{},void 0,!0)])}var U={name:"list-task",data:function(){return{}}};n("f690");const Q=r()(U,[["render",R],["__scopeId","data-v-e476930a"]]);var K=Q;function W(t,e,n,c,s,r){var i=Object(o["A"])("alert");return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["o"])(["task-item",{active:n.selectedTask===n.item}]),onClick:e[5]||(e[5]=function(e){return t.$emit("choice-task",n.item)}),onMouseover:e[6]||(e[6]=function(t){return s.removeTask=!0}),onMouseleave:e[7]||(e[7]=function(t){return s.removeTask=!1})},[Object(o["h"])(Object(o["C"])(n.item.task)+" ",1),n.selectedTask&&0!=n.selectedTask.child.length&&n.selectedTask===n.item?(Object(o["s"])(),Object(o["f"])("div",{key:0,class:Object(o["o"])(["task-itemchild",{active:n.selectedTask.child===n.item.child}])},Object(o["C"])(n.item.child),3)):Object(o["e"])("",!0),s.removeTask?(Object(o["s"])(),Object(o["f"])("div",{key:1,class:"box",onClick:e[0]||(e[0]=function(t){return s.quest=!0}),onMouseover:e[1]||(e[1]=function(t){return s.removeTaskChange=!0}),onMouseleave:e[2]||(e[2]=function(t){return s.removeTaskChange=!1})},[Object(o["g"])("div",{class:Object(o["o"])(["remove-task",{activeRemove:!0===s.removeTaskChange}])},null,2)],32)):Object(o["e"])("",!0),s.quest?(Object(o["s"])(),Object(o["d"])(i,{key:2,onQustClose:e[3]||(e[3]=function(t){return s.quest=!1}),onQustDelete:e[4]||(e[4]=function(t){return r.questDelete(n.item)})})):Object(o["e"])("",!0),Object(o["z"])(t.$slots,"default",{},void 0,!0)],34)}var X={class:"modal"},Y={class:"alert"},Z={class:"quest"},tt={class:"alert-btn"},et=Object(o["h"])(" Да :) "),nt=Object(o["h"])(" Нет ");function ot(t,e,n,c,s,r){var i=Object(o["A"])("my-button");return Object(o["s"])(),Object(o["f"])("div",X,[Object(o["g"])("div",Y,[Object(o["g"])("div",Z,Object(o["C"])(s.question),1),Object(o["g"])("div",tt,[Object(o["i"])(i,{class:"btn-yes",onClick:e[0]||(e[0]=function(e){return t.$emit("qust-delete")})},{default:Object(o["G"])((function(){return[et]})),_:1}),Object(o["i"])(i,{class:"btn-no",onClick:e[1]||(e[1]=function(e){return t.$emit("qust-close")})},{default:Object(o["G"])((function(){return[nt]})),_:1})])])])}var ct={name:"my-alert",components:{MyButton:E},data:function(){return{question:"Удалить задачу и заметки?"}}};n("a5c5");const st=r()(ct,[["render",ot]]);var rt=st,it={components:{Alert:rt},name:"task-item",props:{item:{type:Object,requared:!0},selectedTask:{type:Object,requared:!0}},data:function(){return{child:null,id:null,removeTask:!1,removeTaskChange:!1,quest:!1}},methods:{questDelete:function(t){console.log("fdsfsdfs"),this.$emit("remove-task",t),this.quest=!1}},mounted:function(){}};n("aa1d");const at=r()(it,[["render",W],["__scopeId","data-v-0ff79f87"]]);var ut=at,lt={class:"input-task"},dt=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[Object(o["g"])("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(o["g"])("path",{d:"M7 10l5 5 5-5H7z"})],-1),bt=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},[Object(o["g"])("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(o["g"])("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})],-1);function ft(t,e,n,c,s,r){var i=Object(o["A"])("my-button");return Object(o["s"])(),Object(o["f"])("div",lt,[Object(o["g"])("form",{onSubmit:e[1]||(e[1]=Object(o["I"])((function(){return r.onSubmit&&r.onSubmit.apply(r,arguments)}),["prevent"]))},[Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.task=t})},null,512),[[o["E"],s.task]]),Object(o["i"])(i,{class:"task-btn",disabled:!s.task},{default:Object(o["G"])((function(){return[dt]})),_:1},8,["disabled"])],32),Object(o["i"])(i,{class:"input-close",onClick:e[2]||(e[2]=function(e){return t.$emit("create-task-close")})},{default:Object(o["G"])((function(){return[bt]})),_:1})])}var ht={components:{MyButton:E},name:"enter-form",props:{todoArray:{type:Array},listTask:{type:Array}},data:function(){return{task:null,id:null}},methods:{onSubmit:function(){var t={task:this.task,id:this.listTask.length,child:[]};this.$emit("submit-newtask",t),this.task=null,this.id=null}}};n("bdfe");const Ot=r()(ht,[["render",ft]]);var jt=Ot,mt={class:"input-child"};function vt(t,e,n,c,s,r){return Object(o["s"])(),Object(o["f"])("div",mt,[Object(o["g"])("form",{onSubmit:e[1]||(e[1]=Object(o["I"])((function(){return r.addChild&&r.addChild.apply(r,arguments)}),["prevent"]))},[Object(o["H"])(Object(o["g"])("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.child=t})},null,512),[[o["E"],s.child]])],32)])}var kt={name:"create-child-task",props:{selectedTask:{type:Object,requared:!0}},data:function(){return{child:null,a:void 0}},methods:{addChild:function(){var t;t=this.selectedTask.child?this.selectedTask.child.length:0;var e={id:t,task:this.child};this.$emit("submit-child",e),this.child=null}}};const pt=r()(kt,[["render",vt]]);var gt=pt,yt={name:"Home",components:{TodoList:A,TodoItem:_,EnterTodo:L,List:K,Task:ut,CreateTask:jt,AddChildTask:gt},data:function(){return{todoArray:[],listTask:[],number:0,selectedTask:void 0,placeholder:"Выбери задачу",taskForm:!1,task:""}},methods:{previous:function(){this.number=this.number-1,this.number<0&&(this.number=this.todoArray.length-1)},next:function(){this.number=this.number+1,this.number===this.todoArray.length&&(this.number=0)},newToCreate:function(t){this.todoArray.push(t)},createTask:function(t){this.listTask.push(t),this.selectedTask=t,this.taskForm=!1},choiseTask:function(t){this.selectedTask=t},doneSubmit:function(t){t.done=!t.done},createTaskClose:function(){this.taskForm=!1},removeTodo:function(t){this.todoArray=this.todoArray.filter((function(e){return e.id!==t.id}))},removeTask:function(t){this.listTask=this.listTask.filter((function(e){return e.id!==t.id})),this.todoArray=this.todoArray.filter((function(e){return e.task!==t.id}))},submitChild:function(t){this.listTask[this.selectedTask.id].child.push(t)}},watch:{todoArray:{handler:function(t){localStorage.todoArray=JSON.stringify(t)},deep:!0},listTask:{handler:function(t){localStorage.listTask=JSON.stringify(t)},deep:!0}},mounted:function(){localStorage.listTask&&(this.listTask=JSON.parse(localStorage.listTask)),localStorage.todoArray&&(this.todoArray=JSON.parse(localStorage.todoArray))}};n("40d3");const Tt=r()(yt,[["render",g]]);var wt=Tt,Ct=[{path:"/",name:"Home",component:wt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],At=Object(l["a"])({history:Object(l["b"])(),routes:Ct}),xt=At,St=n("5502"),Mt=Object(St["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(u).use(Mt).use(xt).mount("#app")},"664e":function(t,e,n){"use strict";n("b3b4")},"6e43":function(t,e,n){"use strict";n("5142")},"734c":function(t,e,n){},"7b92":function(t,e,n){"use strict";n("7eb1")},"7eb1":function(t,e,n){},"8d43":function(t,e,n){},a5c5:function(t,e,n){"use strict";n("8d43")},aa1d:function(t,e,n){"use strict";n("4d91")},b3b4:function(t,e,n){},bdfe:function(t,e,n){"use strict";n("d075")},d075:function(t,e,n){},dc0b:function(t,e,n){},f0e0:function(t,e,n){"use strict";n("f48e")},f48e:function(t,e,n){},f690:function(t,e,n){"use strict";n("0270")}});
//# sourceMappingURL=app.c1e52632.js.map
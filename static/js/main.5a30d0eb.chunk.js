(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,a){e.exports={description:"TodoAdd_description__1yD1R"}},139:function(e,t,a){e.exports={list:"TodoList_list__nwapd"}},140:function(e,t,a){e.exports={baseInput:"InputGroup_baseInput__1bQUQ",inputGroup:"InputGroup_inputGroup__3upOq"}},141:function(e,t,a){e.exports={root:"EmptySpace_root__parX1"}},148:function(e,t,a){e.exports={1:"CategoryInput_1__1FrXI",2:"CategoryInput_2__1-9ou",3:"CategoryInput_3__41mSs",4:"CategoryInput_4__2Qc-w"}},150:function(e,t,a){e.exports={progress:"Progress_progress__3Vc4k"}},151:function(e,t,a){e.exports={button:"DateFilter_button__UmS_N"}},159:function(e,t,a){e.exports=a(288)},164:function(e,t,a){},23:function(e,t,a){e.exports={root:"Avatar_root__23LyZ",icon:"Avatar_icon__2qpvw",badge:"Avatar_badge__3CpXS",ellipse:"Avatar_ellipse__L6prr",circle:"Avatar_circle__3hXs7",background:"Avatar_background__H3-ci",foreground:"Avatar_foreground__1h5VX",disabled:"Avatar_disabled__lUCUh",large:"Avatar_large__37OM4"}},24:function(e,t,a){e.exports={root:"TodoListItem_root__2v_Kh",date:"TodoListItem_date__1hbwt",actions:"TodoListItem_actions__9NxD7",flexCentered:"TodoListItem_flexCentered__24Zqu",details:"TodoListItem_details__1AvJd",truncated:"TodoListItem_truncated__14ZfQ",title:"TodoListItem_title__M--vD",subTitle:"TodoListItem_subTitle__10Utk",content:"TodoListItem_content__2u-lf",done:"TodoListItem_done__37kAX"}},271:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),l=a(16),c=a.n(l),i=(a(164),a(26)),u=a(40),s=a(17),d=a(13),m={viewAll:!0},_=Object(s.a)({},"TOGGLE_VIEW",function(e){return Object(d.a)({},e,{viewAll:!e.viewAll})}),f=a(66),v=a(10),p=function(){return{key:"Today",value:new Date}},E={id:"".concat(Date.now()),done:!1,category:"1",description:"",location:"",date:null,icon:"",isAllDay:!1},g={isAllDay:!1,todos:[],filters:{date:p(),status:"All"}},b=(n={},Object(s.a)(n,"ADD_TODO",function(e,t){return Object(d.a)({},e,{todos:[].concat(Object(f.a)(e.todos),[t.todo]),newTodo:E})}),Object(s.a)(n,"DELETE_TODO",function(e,t){return Object(d.a)({},e,{todos:e.todos.filter(function(e){return e.id!==t.id})})}),Object(s.a)(n,"TOGGLE_TODO_STATUS",function(e,t){return Object(d.a)({},e,{todos:e.todos.map(function(e){return e.id===t.id?Object(d.a)({},e,{done:!e.done}):e})})}),Object(s.a)(n,"COMPLETE_ALL_TODOS",function(e,t){return Object(d.a)({},e,{todos:e.todos.map(function(e){return!e.done&&Object(v.isSameDay)(e.date,t.date)?Object(d.a)({},e,{done:!0}):e})})}),Object(s.a)(n,"DELETE_ALL_TODOS",function(e,t){return Object(d.a)({},e,{todos:e.todos.filter(function(e){return!Object(v.isSameDay)(e.date,t.date)}),filters:Object(d.a)({},e.filters,{date:p()})})}),Object(s.a)(n,"UPDATE_TODO_DATE_FILTER",function(e,t){return Object(d.a)({},e,{filters:Object(d.a)({},e.filters,{date:{key:t.key,value:t.value}})})}),Object(s.a)(n,"UPDATE_TODO_STATUS_FILTER",function(e,t){return Object(d.a)({},e,{filters:Object(d.a)({},e.filters,{status:t.status})})}),n),y=Object(u.b)({root:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return _[a]?_[a](e,n):e},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return b[a]?b[a](e,n):e}}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.c)(y,e)}({}),O=(a(271),a(43)),h=a.n(O),C=function(e){var t=e.invert,a=e.title,n=e.subtitle,o=e.rightContent,l=e.children;return r.a.createElement("div",{className:h.a.background,"data-test":"headerWrapper"},r.a.createElement("div",{className:h.a.container},r.a.createElement("div",{className:"".concat(h.a.left," ").concat(t?h.a.invert:""),"data-test":"headerContainer"},r.a.createElement("h1",null,a),!l&&r.a.createElement("span",null,n),l),r.a.createElement("div",{className:h.a.right,"data-test":"headerRightContent"},o)))};C.defaultProps={invert:!1,subtitle:"",rightContent:null,children:null};var D=C,N=a(55),j=a(54),A=a.n(j),S=function(e){var t=e.activeRight,a=e.left,n=e.right,o=e.overlay,l=[A.a.root,N.a.ELEVATION_4,t?"right-active":""].join(" ");return r.a.createElement("div",{className:l},r.a.createElement("div",{className:A.a.leftContainer},a),r.a.createElement("div",{className:A.a.rightContainer},n),r.a.createElement("div",{className:A.a.overlayContainer},o))};S.defaultProps={activeRight:!1};var k=S,L=a(44),w=a.n(L),x=function(e){var t=e.left,a=e.right;return r.a.createElement("div",{className:w.a.overlay},r.a.createElement("div",{className:"".concat(w.a.panel," ").concat(w.a.left)},t),r.a.createElement("div",{className:"".concat(w.a.panel," ").concat(w.a.right)},a))},F=a(297),I=a(137),P=a.n(I),M=function(e){var t=e.toggleView,a=e.hasTasks,n="".concat(a?"Nice! Looks like you have some stuff to do, but you can have more!":"Nothing to do yet? Think about it and let's start!");return r.a.createElement(o.Fragment,null,r.a.createElement("h1",null,"Hi!"),r.a.createElement("p",{"data-test":"message",className:P.a.description},n),r.a.createElement(F.b,{large:!0,minimal:!0,"data-test":"button",className:"panel-button",onClick:t},"Add Task"))};M.defaultProps={hasTasks:!1};var B=M,U=a(296),V=a(295),W=a(139),G=a.n(W),H=a(291),R=a(21),Y=a(23),X=a.n(Y),q=function(e){return r.a.createElement("circle",{className:e,r:"48%",cy:"50%",cx:"50%",strokeLinecap:"round"})},Q=function(e){var t=e.icon,a=e.large,n=e.disabled,o=e.badge,l=[X.a.root,a?X.a.large:"",n?X.a.disabled:""].join(" ");return r.a.createElement("div",{className:l},r.a.createElement("svg",{className:X.a.circle,viewBox:"0 0 60 60",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",null,q(X.a.background),q(X.a.foreground))),r.a.createElement(R.a,{icon:t,className:X.a.icon}),o&&r.a.createElement("div",{className:X.a.badge},o))};Q.defaultProps={large:!1,disabled:!1,badge:null};var K=Q,z=a(24),J=a.n(z),Z=function(e){var t=e.todo,a=e.onToggle,n=e.onDelete,o=function(){a(t.id)};return r.a.createElement("div",{className:"".concat(J.a.root," ").concat(t.done?J.a.done:"")},r.a.createElement(K,{icon:t.icon,disabled:!t.done}),r.a.createElement("div",{className:J.a.content},r.a.createElement("div",{className:J.a.title},t.description),r.a.createElement("div",{className:J.a.subTitle},t.location)),r.a.createElement("div",{className:J.a.details},r.a.createElement("span",{className:J.a.date},t.isAllDay?"All day":Object(v.format)(t.date,"ha")),r.a.createElement("div",{className:J.a.actions},r.a.createElement(H.a,{minimal:!0},!t.done&&r.a.createElement(F.b,{icon:"tick",minimal:!0,onClick:o}),t.done&&r.a.createElement(F.b,{icon:"undo",minimal:!0,onClick:o}),r.a.createElement(F.b,{icon:"trash",minimal:!0,onClick:function(){n(t.id)}})))))},$=function(e){var t=e.todos,a=e.onScroll,n=e.toggleTodoStatus,o=e.deleteTodo;return r.a.createElement("div",{className:G.a.list,onScroll:a},r.a.createElement(U.a,null,t.map(function(e){return r.a.createElement(V.a,{key:e.id,timeout:300,classNames:"item"},r.a.createElement(Z,{todo:e,onToggle:n,onDelete:o}))})))},ee=a(27),te=function(e){var t=e.initialValue,a=void 0===t?{}:t,n=e.onSubmit,r=Object(o.useState)(a),l=Object(ee.a)(r,2),c=l[0],i=l[1];return{handleChange:function(e){var t=e.target;i(function(e){return Object(d.a)({},e,Object(s.a)({},t.name,"checkbox"===t.type?t.checked:t.value))})},handleSubmit:function(e){e&&e.preventDefault(),n(c),i(a)},values:c,reset:function(e){i(function(t){return Object(d.a)({},t,Object(s.a)({},e,"boolean"!==typeof c[e]&&""))})}}},ae=a(293),ne=a(140),oe=a.n(ne),re=function(e){var t,a=e.className,n=e.value,o=e.onChange,l=e.canClear,c=e.children;return r.a.createElement("div",{className:"".concat(oe.a.inputGroup," ").concat(a||"")},r.a.createElement("input",Object.assign({},{readOnly:(t=e).readOnly,name:t.name,placeholder:t.placeholder,value:t.value,autoComplete:t.autoComplete},{onChange:o})),l&&n&&r.a.createElement(F.b,{icon:"cross",minimal:!0,onClick:function(){e.onClear(e.name)},tabIndex:-1}),c)};re.defaultProps={name:"",onClear:null,canClear:!1,className:null,children:null,onChange:null};var le=re,ce=a(141),ie=a.n(ce),ue=function(e){var t=e.icon,a=e.message;return r.a.createElement("div",{className:ie.a.root},r.a.createElement(R.a,{icon:t,iconSize:62}),r.a.createElement("p",null,a))},se=a(31),de=a.n(se),me=a(42),_e=a(14),fe=a(142),ve=a(153),pe=a(84),Ee=a.n(pe),ge=["chat","highlight","path-search","print","airplane","drive-time","envelope","people","camera","headset","mobile-video","briefcase","calculator","heart","office","shop","shopping-cart","tree","wrench","dollar"],be=function(e){var t=e.field,a=e.onSelect,n=function(e){a({target:{value:e.target.name,name:t}})};return r.a.createElement(fe.a,{className:Ee.a.grid},ge.map(function(e){return r.a.createElement(ve.a,{key:e,name:e,className:Ee.a.item,onClick:n,labelElement:r.a.createElement(R.a,{icon:e})})}))},ye=a(86),Te=a.n(ye),Oe=function(e){var t=e.icon,a=e.onSelect;return r.a.createElement(me.a,{canEscapeKeyClose:!0,closeOnSelection:!0,content:r.a.createElement(be,{onSelect:a,field:"icon"}),position:_e.a.BOTTOM},r.a.createElement(K,{large:!0,icon:t||"plus",disabled:!t,value:t,badge:t?r.a.createElement(R.a,{icon:"edit",size:"12",className:Te.a.badge}):r.a.createElement("span",{className:Te.a.required},"*")}))};Oe.defaultProps={icon:""};var he=Oe,Ce={1:"Business",2:"Personal",3:"Family",4:"Work"},De=a(87),Ne=a.n(De),je=function(e){var t=e.field,a=e.onSelect,n=function(e){a({target:{value:e.target.name,name:t}})};return r.a.createElement(fe.a,null,Object.keys(Ce).map(function(e){return r.a.createElement(ve.a,{key:e,text:Ce[e],name:e,labelElement:r.a.createElement(R.a,{icon:"symbol-circle"}),className:"".concat(Ne.a.category," ").concat(Ne.a[e]),onClick:n})}))},Ae=a(148),Se=a.n(Ae),ke=function(e){var t=e.category,a=e.onSelect;return r.a.createElement(me.a,{minimal:!0,canEscapeKeyClose:!0,content:r.a.createElement(je,{onSelect:a,field:"category"}),position:_e.a.BOTTOM_LEFT},r.a.createElement(le,{className:Se.a[t],value:Ce[t],canClear:!1,placeholder:"Category *",readOnly:!0},t&&r.a.createElement(R.a,{icon:"symbol-circle"})))};ke.defaultProps={category:"1"};var Le=ke,we=a(154),xe=a(294),Fe=function(e){var t=e.date,a=e.isAllDay,n=e.onSelect,o=new Date,l=a?void 0:we.b.MINUTE;return r.a.createElement("div",null,r.a.createElement(xe.a,{closeOnSelection:a,canClearSelection:!1,placeholder:"When? *",minDate:o,inputProps:{readOnly:!0},formatDate:function(e){return Object(v.format)(e,"MM/DD/YYYY".concat(a?"":" hh:mm a"))},parseDate:function(e){return new Date(e)},timePrecision:l,timePickerProps:{useAmPm:!0},popoverProps:{position:_e.a.TOP},onChange:n,value:t}))};Fe.defaultProps={date:null};var Ie=Fe,Pe={icon:"",description:"",category:"1",location:"",isAllDay:!1},Me=function(e){var t=e.addNewTodo,a=Object(o.useState)(null),n=Object(ee.a)(a,2),l=n[0],c=n[1],i=te({initialValue:Pe,onSubmit:function(e){t(Object(d.a)({id:"".concat(Date.now()),done:!1,date:l},e)),c(null)}}),u=i.values,s=i.handleChange,m=i.handleSubmit,_=i.reset,f=function(e){return _(e)},v=l&&u.description&&u.location&&u.icon;return r.a.createElement("form",{className:de.a.form,onSubmit:m},r.a.createElement("div",{className:de.a.todoIcon},r.a.createElement(he,{icon:u.icon,onSelect:s})),r.a.createElement("div",{className:de.a.category},r.a.createElement(Le,{category:u.category,onSelect:s})),r.a.createElement("div",null,r.a.createElement(le,{name:"description",placeholder:"What I have to do? *",value:u.description,autoComplete:"off",onChange:s,onClear:f})),r.a.createElement("div",null,r.a.createElement(le,{name:"location",placeholder:"Where? *",value:u.location,autoComplete:"off",onChange:s,onClear:f})),r.a.createElement("div",{className:de.a.date},r.a.createElement(Ie,{date:l,isAllDay:u.isAllDay,onSelect:function(e,t){t&&c(e)}}),r.a.createElement("div",{className:de.a.allDay},r.a.createElement(ae.a,{label:"All day",checked:u.isAllDay,name:"isAllDay",onChange:s}))),r.a.createElement("span",{className:de.a.hint},"* Required fields"),r.a.createElement(F.b,{large:!0,minimal:!0,fill:!0,className:de.a.saveButton,type:"submit",disabled:!v},"ADD TASK"))},Be=a(32),Ue=a.n(Be),Ve=function(e){var t=e.todos,a=e.toggleView;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Summary"),r.a.createElement("div",{className:Ue.a.summary},r.a.createElement("div",null,r.a.createElement("div",{className:Ue.a.label},"All things"),r.a.createElement("div",{className:Ue.a.value},t.filter(function(e){return!e.done}).length)),Object.keys(Ce).map(function(e){return r.a.createElement("div",{key:e},r.a.createElement("div",{className:Ue.a.label},Ce[e]),r.a.createElement("div",{className:"".concat(Ue.a.category," ").concat(Ue.a[e])},r.a.createElement(R.a,{icon:"symbol-circle"})),r.a.createElement("div",{className:Ue.a.value},(a=e,t.filter(function(e){return e.category===a}).length)));var a})),r.a.createElement(F.b,{large:!0,minimal:!0,className:"panel-button",onClick:a},"VIEW TASKS"))},We=a(147),Ge=a(56),He=a.n(Ge),Re=a(88),Ye=a.n(Re),Xe=["All","Done","Active"],qe=function(e){var t=e.value,a=e.onSelect,n=function(e){return a(e.target.name)};return r.a.createElement(H.a,{minimal:!0},Xe.map(function(e){return r.a.createElement(F.b,{key:e,text:e,name:e,className:"".concat(Ye.a.button," ").concat(t===e?Ye.a.active:""),onClick:n})}))},Qe=function(e){var t=e.statusFilter,a=e.onCompleteAll,n=e.onDeleteAll,o=e.onStatusFilterChange,l=e.scrolled;return r.a.createElement("div",{className:"".concat(He.a.toolbar," ").concat(l?He.a.scrolled:"")},r.a.createElement("div",{className:He.a.filter},r.a.createElement(qe,{value:t,onSelect:o})),r.a.createElement("div",{className:He.a.actions},r.a.createElement(H.a,{minimal:!0},r.a.createElement(We.a,{content:"Complete All",position:_e.a.BOTTOM},r.a.createElement(F.b,{icon:"tick",onClick:a})),r.a.createElement(We.a,{content:"Remove All",position:_e.a.BOTTOM},r.a.createElement(F.b,{icon:"trash",onClick:n})))))};Qe.defaultProps={scrolled:!1};var Ke=Qe,ze=(a(138),a(150),a(152)),Je=function(e,t){return e.filter(t).reduce(function(e,t){var a,n=(a=t.date,Object(v.isToday)(a)?"Today":Object(v.isTomorrow)(a)?"Tomorrow":Object(v.isThisWeek)(a)?Object(v.format)(a,"dddd"):Object(v.format)(a,"MMM Do".concat(Object(v.isThisYear)(a)?"":", YYYY"))),o=e;return o[n]=[].concat(Object(f.a)(o[n]||[]),[t]),o},{})},Ze=a(89),$e=a.n(Ze),et=function(e,t){return Object.keys(e).map(function(a){return r.a.createElement(ve.a,{key:a,text:a,label:e[a].length,name:a,className:$e.a.date,onClick:t})})},tt=Object(o.memo)(function(e){var t,a=e.todos,n={totalToday:(t=a).filter(function(e){return Object(v.isToday)(e.date)}).length,thisWeek:Je(t,function(e){return Object(v.isAfter)(e.date,new Date)&&Object(v.isBefore)(e.date,Object(v.endOfWeek)(new Date))}),upcoming:Je(t,function(e){return!Object(v.isThisWeek)(e.date)})},o=n.totalToday,l=n.thisWeek,c=n.upcoming,i=e.onSelect,u=function(e){var t=l[e.target.name]||c[e.target.name],a=Object(ee.a)(t,1)[0];i({key:e.target.name,value:a.date})};return r.a.createElement(fe.a,{className:$e.a.root},r.a.createElement(ve.a,{text:"Today",label:o,onClick:function(){return i({key:"Today",value:new Date})}}),et(l,u),r.a.createElement(ze.a,{title:"Upcoming"}),et(c,u),!Object.entries(c).length&&r.a.createElement(ve.a,{text:"Nothing yet!",disabled:!0}))}),at=a(151),nt=a.n(at),ot=function(e){var t=e.todos,a=e.onDateFilterChange,n=e.value;return r.a.createElement("div",null,r.a.createElement(me.a,{content:r.a.createElement(tt,{todos:t,onSelect:a}),position:_e.a.BOTTOM_LEFT,minimal:!0},r.a.createElement(F.a,{minimal:!0,rightIcon:"caret-down",icon:"time",className:nt.a.button},n.key)))},rt=a(57),lt=Object(rt.a)(function(e){return e.todos.todos},function(e){return e.todos.filters.date},function(e){return e.todos.filters.status},function(e,t,a){var n=e.filter(function(e){return Object(v.isSameDay)(e.date,t.value)}),o=n.filter(function(e){return!e.done}).length,r="All"===a?n:n.filter(function(e){return"Done"===a?e.done:!e.done});return{todos:e,dateFilter:t,statusFilter:a,totalTodosByDate:n.length,totalPendingTodos:o,filteredTodos:r}}),ct=Object(rt.a)(function(e){return e.todos.todos.filter(function(e){return(Object(v.isToday)(e.date)||Object(v.isFuture)(e.date))&&!e.done})},function(e){return{pendingTodos:e}}),it=Object(rt.a)(function(e){return e.todos.todos.filter(function(e){return Object(v.isToday)(e.date)}).length},function(e){return{totalTodosToday:e}}),ut=Object(rt.a)(function(e){return e.root.viewAll},function(e){return{viewAll:e}}),st=function(){return{type:"TOGGLE_VIEW"}},dt=a(90),mt=a.n(dt),_t=function(e){var t=e.listProps,a=e.toolbarProps;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{classNames:"item",timeout:300,in:!t.todos.length,exit:!1,unmountOnExit:!0},r.a.createElement(ue,{icon:"property",message:"No '".concat(a.statusFilter,"' Tasks")})),t.todos.length?r.a.createElement($,t):null,r.a.createElement(Ke,a))},ft=Object(i.b)(function(e){return lt(e)},function(e){return{completeAll:function(t){return e(function(e){return{type:"COMPLETE_ALL_TODOS",payload:{date:e}}}(t))},deleteAll:function(t){return e(function(e){return{type:"DELETE_ALL_TODOS",payload:{date:e}}}(t))},deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",payload:{id:e}}}(t))},toggleTodoStatus:function(t){return e(function(e){return{type:"TOGGLE_TODO_STATUS",payload:{id:e}}}(t))},updateDateFilter:function(t){return e({type:"UPDATE_TODO_DATE_FILTER",payload:{key:(a=t).key,value:a.value}});var a},updateStatusFilter:function(t){return e(function(e){return{type:"UPDATE_TODO_STATUS_FILTER",payload:{status:e}}}(t))}}})(function(e){var t=Object(o.useState)(!1),a=Object(ee.a)(t,2),n=a[0],l=a[1],c=e.todos,i=e.filteredTodos,u=e.dateFilter,s=e.statusFilter,d=e.totalTodosByDate,m=e.totalPendingTodos,_={onScroll:function(e){var t=e.target;t.scrollHeight-t.scrollTop>t.offsetHeight+5?l(!0):l(!1)},todos:i,toggleTodoStatus:e.toggleTodoStatus,deleteTodo:e.deleteTodo},f={statusFilter:s,todos:c,onStatusFilterChange:function(t){return e.updateStatusFilter(t)},scrolled:n,onCompleteAll:function(){return e.completeAll(u.value)},onDeleteAll:function(){return e.deleteAll(u.value)}},v=d>0;return r.a.createElement("div",{className:mt.a.root},r.a.createElement(D,{title:"My Tasks",rightContent:v&&r.a.createElement("div",{className:mt.a.totals},"".concat(m," of ").concat(d))},r.a.createElement("div",null,r.a.createElement(ot,{todos:c,value:u,onDateFilterChange:function(t){return e.updateDateFilter(t)}}))),r.a.createElement(V.a,{classNames:"item",timeout:300,in:v,exit:!1,unmountOnExit:!0},r.a.createElement(_t,{listProps:_,toolbarProps:f})),r.a.createElement(V.a,{classNames:"item",timeout:300,in:!v,exit:!1,unmountOnExit:!0},r.a.createElement(ue,{icon:"timeline-events",message:"No Tasks for ".concat(u.key)})))}),vt=Object(i.b)(function(e){return it(e)},function(e){return{addNewTodo:function(t){return e({type:"ADD_TODO",payload:{todo:t}})}}})(function(e){var t=e.totalTodosToday,a=e.addNewTodo,n="".concat(t," task").concat(1!==t?"s":""," for today");return r.a.createElement(o.Fragment,null,r.a.createElement(D,{title:"New Task",subtitle:n,invert:!0}),r.a.createElement(Me,{addNewTodo:a}))}),pt=function(e){var t=e.viewAll,a=e.pendingTodos,n=e.changeView,o=r.a.createElement(x,{left:r.a.createElement(Ve,{todos:a,toggleView:n}),right:r.a.createElement(B,{toggleView:n,hasTasks:!!a.length})});return r.a.createElement(k,{activeRight:!t,left:r.a.createElement(vt,null),right:r.a.createElement(ft,null),overlay:o})};pt.defaultProps={viewAll:!1,pendingTodos:[]};var Et=Object(i.b)(function(e){return Object(d.a)({},ut(e),ct(e))},function(e){return{changeView:function(){return e(st())}}})(pt),gt=function(){return r.a.createElement("div",{className:"root","data-test":"root"},r.a.createElement(Et,null))};c.a.render(r.a.createElement(i.a,{store:T},r.a.createElement(gt,null)),document.getElementById("root"))},31:function(e,t,a){e.exports={baseInput:"TodoForm_baseInput__1vFwD",date:"TodoForm_date__kjfpj",todoIcon:"TodoForm_todoIcon__1rODs",form:"TodoForm_form__2716-",allDay:"TodoForm_allDay__BXMpp",category:"TodoForm_category__2CzyQ",saveButton:"TodoForm_saveButton__24LVH",hint:"TodoForm_hint__11hlY"}},32:function(e,t,a){e.exports={1:"Summary_1__1EnRv",2:"Summary_2__V8MPq",3:"Summary_3__3uOfe",4:"Summary_4__3qrXd",summary:"Summary_summary__1GCN6",label:"Summary_label__2XinN",category:"Summary_category__1UEsC",value:"Summary_value__3I46i"}},43:function(e,t,a){e.exports={background:"Header_background__3BYRQ",container:"Header_container__SMgHA",left:"Header_left__1XDFt",invert:"Header_invert__2YLCN",right:"Header_right__2lFfq"}},44:function(e,t,a){e.exports={overlay:"Overlay_overlay__8_TCZ",panel:"Overlay_panel__3A6wL",left:"Overlay_left__EI0Yf",right:"Overlay_right__1m_pz"}},54:function(e,t,a){e.exports={bubbleBackground:"ContentLayout_bubbleBackground__160a1",root:"ContentLayout_root__3lL-9",form:"ContentLayout_form__3LvKW",rightContainer:"ContentLayout_rightContainer__38HpQ",leftContainer:"ContentLayout_leftContainer__6DLpk",overlayContainer:"ContentLayout_overlayContainer__TUTvH",show:"ContentLayout_show__17BGh"}},56:function(e,t,a){e.exports={toolbar:"Toolbar_toolbar__3C50c",scrolled:"Toolbar_scrolled__1CrSP",filter:"Toolbar_filter__JCwlD",actions:"Toolbar_actions__28ixl"}},84:function(e,t,a){e.exports={grid:"AvatarMenu_grid__2dFan",item:"AvatarMenu_item__2vpda"}},86:function(e,t,a){e.exports={badge:"AvatarInput_badge__2JZRt",required:"AvatarInput_required__1kUe6"}},87:function(e,t,a){e.exports={1:"CategoryMenu_1__3zuc8",2:"CategoryMenu_2__2O9up",3:"CategoryMenu_3__1rQ8E",4:"CategoryMenu_4__3pqQX",category:"CategoryMenu_category__3vpKv"}},88:function(e,t,a){e.exports={button:"StatusFilter_button__1OtDN",active:"StatusFilter_active__pQnUk"}},89:function(e,t,a){e.exports={root:"DateSelector_root__3hh9C",date:"DateSelector_date__2sDay"}},90:function(e,t,a){e.exports={root:"MyDay_root__1oTHy",subtitleWrapper:"MyDay_subtitleWrapper__2lmXx",totals:"MyDay_totals__2tQuw"}}},[[159,1,2]]]);
//# sourceMappingURL=main.5a30d0eb.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,a,t){e.exports=t(95)},46:function(e,a,t){},51:function(e,a,t){},95:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(36),o=t.n(c),l=(t(46),t(5)),s=t(6),i=t(8),m=t(7),u=t(9),p=t(14),d=t(15),h=(t(47),t(48),t(51),t(11)),b=t.n(h),v=t(16),f=t(40),E=t(20),y=t(13),g=t.n(y),C=t(19),N=t.n(C),O=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[a.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],loader:!1,dispatch:function(e){t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loader:!0}),e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users");case 3:a=e.sent,this.setState({contacts:a.data}),this.setState({loader:!1});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.loader;return r.a.createElement("div",{className:""},e&&r.a.createElement(N.a,{type:"Puff",color:"#000000",height:"100",width:"100"}),r.a.createElement(O.Provider,{value:this.state},this.props.children))}}]),a}(n.Component),k=O.Consumer,S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1,loader:!1},t.onShowClick=function(e,a){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(){var e=Object(v.a)(b.a.mark(function e(a,n){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loader:!0}),e.prev=1,e.next=4,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 4:n({type:"DELETE_CONTACT",payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n({type:"DELETE_CONTACT",payload:a});case 10:t.setState({loader:!1});case 11:case"end":return e.stop()}},e,null,[[1,7]])}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state,s=l.showContactInfo,i=l.loader;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"container "},i&&r.a.createElement(N.a,{type:"Puff",color:"#000000",height:"100",width:"100"}),r.a.createElement("div",{className:"flex-c"},r.a.createElement("div",{className:"card",style:{width:500}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{style:{cursor:"pointer"},className:"card-title fa fa-sort-down ",onClick:e.onShowClick.bind(e)},n),r.a.createElement("i",{className:"fa fa-times",style:{float:"right",color:"red",cursor:"pointer"},onClick:e.onDeleteClick.bind(e,t,l)}),r.a.createElement(p.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{float:"right",marginRight:"1rem",color:"red",cursor:"pointer"}})),s?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{id:"asd",className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null))))})}}]),a}(n.Component),x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).deleteContact=function(e){},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,a.map(function(e){return r.a.createElement(S,{key:e.id,contact:e})}))})}}]),a}(n.Component),A=t(17),T=t(39),D=t.n(T),P=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:D()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};P.defaultProps={type:"text"};var _=P,q=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(e,a){a.preventDefault();var n=t.state,r=n.name,c=n.email,o=n.phone;if(""!==r)if(""!==c)if(""!==o){var l={name:r,email:c,phone:o};g.a.post("https://jsonplaceholder.typicode.com/users/",l).then(function(a){return e({type:"ADD_CONTACT",payload:a.data})}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/")}else t.setState({errors:{phone:"Phone is required"}});else t.setState({errors:{email:"Email is required"}});else t.setState({errors:{name:"Name is required"}})},t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onSubmit=function(){var e=Object(v.a)(b.a.mark(function e(a,n){var r,c,o,l,s,i,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=16,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 16:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 20:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var a,t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{label:"Email",name:"email",type:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(_,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component);function L(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{className:"nav-link",to:"/contact/addcontact"},"Add Contact",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled",href:"#"},"Disabled"))))))}function M(){return r.a.createElement("div",null,r.a.createElement("div",{className:"display-4"},r.a.createElement("h1",null,"about ",r.a.createElement("span",{className:"text-danger"},"page"))))}L.defaultProps={branding:"My app"};var U=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(p.a,{basename:"/react-brad"},r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement("div",{className:"container"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:x}),r.a.createElement(d.a,{exact:!0,path:"/contact/addcontact",component:q}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:I}),r.a.createElement(d.a,{exact:!0,path:"/about",component:M}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.b01e9838.chunk.js.map
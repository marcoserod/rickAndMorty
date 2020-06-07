(this["webpackJsonprick-morty"]=this["webpackJsonprick-morty"]||[]).push([[0],{20:function(e,t,a){},27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},33:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),i=a.n(c),s=(a(32),a(3)),l=a(4),o=a(6),m=a(5),u=a(7),d=(a(33),a(12)),h=(a(20),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card My-Card text-white"},r.a.createElement("img",{className:"card-img-top",src:this.props.img,alt:this.props.name}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.name)))}}]),t}(n.Component)),p=a(10),v=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("svg",{className:"Loading"},r.a.createElement("g",null,r.a.createElement("path",{d:"M31.6 8.98a4.02 4.02 0 0 0 1.7 5.3l6.12 3.22a52.56 52.56 0 1 0 63.13 10.73L96 33.97a43.88 43.88 0 1 1-53-8.5l-3.65 7.4a4.02 4.02 0 0 0 1.72 5.3 3.73 3.73 0 0 0 5.13-1.67l7.66-15.63a4.18 4.18 0 0 0-1.75-5.4L36.74 7.32a3.73 3.73 0 0 0-5.13 1.66z",fill:"#000000",fillOpacity:"1"}),r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"1800ms",repeatCount:"indefinite"}))))}}]),t}(r.a.Component),g=a(23),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={name:a.props.name,status:a.props.status,gender:a.props.gender},a.handleFiltering=a.handleFiltering.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleFiltering",value:function(e){e.preventDefault();var t=e.target,a=t.value,n=t.name;this.setState(Object(g.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleSubmit(this.state.status,this.state.gender,this.state.name)}},{key:"render",value:function(){return r.a.createElement("form",{className:"form-group row justify-content-center ",onSubmit:this.handleSubmit.bind(this)},r.a.createElement("input",{type:"text",id:"search",className:"form-control",placeholder:"Search",name:"name",value:this.state.name,onChange:this.handleFiltering}),r.a.createElement("select",{className:"custom-select",id:"status",name:"status",value:this.state.status,onChange:this.handleFiltering},r.a.createElement("option",{value:""},"status"),r.a.createElement("option",{value:"alive"},"alive"),r.a.createElement("option",{value:"dead"},"dead"),r.a.createElement("option",{value:"unknown"},"unknown")),r.a.createElement("select",{className:"custom-select",id:"gender",name:"gender",value:this.state.gender,onChange:this.handleFiltering},r.a.createElement("option",{value:""},"gender"),r.a.createElement("option",{value:"male"},"male"),r.a.createElement("option",{value:"female"},"female"),r.a.createElement("option",{value:"genderless"},"genderless"),r.a.createElement("option",{value:"unknown"},"unknown")),r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Go"}))}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.state={characters:[],isLoading:!0,selectedStatus:"",selectedGender:"",enteredName:"",error:!1,errorMSG:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,characters:t.results})}))}},{key:"handleSubmit",value:function(e,t,a){var n=this;this.setState({isLoading:!0,selectedStatus:e,selectedGender:t,enteredName:a}),fetch("https://rickandmortyapi.com/api/character/?status=".concat(e,"&gender=").concat(t,"&name=").concat(a)).then((function(e){200!==e.status?(console.log(e.error),n.setState({error:!0})):e.json().then((function(e){n.setState({isLoading:!1,characters:e.results})}))}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.characters,n=e.error;e.errorMSG;return n?r.a.createElement("div",{id:"nothingHere"},r.a.createElement("p",null,"No results have been found, please, refresh and try again")):t?r.a.createElement("div",null,r.a.createElement(v,null)):r.a.createElement("section",{className:"App-Home container-fluid"},document.querySelector("#home").classList.add("selected"),r.a.createElement(f,{name:this.state.enteredName,gender:this.state.selectedGender,status:this.state.selectedStatus,handleSubmit:this.handleSubmit}),r.a.createElement("div",{className:"row justify-content-around"},a.map((function(e){return r.a.createElement(p.b,{to:"/".concat(e.id)},r.a.createElement(h,{key:e.id,className:"Big",id:e.id,name:e.name,img:e.image}))}))))}}]),t}(r.a.Component),E=a(11),y=function(e){return r.a.createElement("nav",{id:"NavHeader",class:"navbar sticky-top navbar-expand-lg navbar-light bg-light"},r.a.createElement(p.b,{to:"/"},r.a.createElement("a",{class:"navbar-brand",href:"#"},"The Rick & Morty")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.b,{to:"/"},r.a.createElement("a",{className:"nav-link",id:"home",href:"#"},"Home ",r.a.createElement("span",{class:"sr-only"},"(current)")))),r.a.createElement(p.b,{to:"".concat(Object(E.f)().pathname)},"/"!==Object(E.f)().pathname?r.a.createElement("li",{className:"nav-item"}," ",r.a.createElement("a",{className:"nav-link",id:"chdetail"},"Character Detail")," "):r.a.createElement("li",null)),r.a.createElement("li",{className:"nav-item"}," ",r.a.createElement(p.b,{to:"/About"},r.a.createElement("a",{className:"nav-link"}," About ")," ")))))},j=a(18),N=a.n(j),k=a(26),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoading:!0,item:{},id:a.props.match.params.id},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(k.a)(N.a.mark((function e(){var t=this;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://rickandmortyapi.com/api/character/".concat(this.state.id)).then((function(e){return e.json()})).then((function(e){t.setState({isLoading:!1,item:e,origin:e.origin})}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item;return this.state.isLoading?r.a.createElement(v,null):r.a.createElement("section",{className:"App-Home container-fluid Card-Detail row justify-content-center align-items-start"},r.a.createElement(h,{className:"My-Card-Detail",id:e.id,name:e.name,img:e.image}),r.a.createElement("div",{class:"card"},r.a.createElement("ul",{class:"list-group list-group-flush"},r.a.createElement("li",{class:"list-group-item"},"id: ",e.id),r.a.createElement("li",{class:"list-group-item"},"status: ",e.status),r.a.createElement("li",{class:"list-group-item"},"species: ",e.species),r.a.createElement("li",{class:"list-group-item"},"type: ",e.type),r.a.createElement("li",{class:"list-group-item"},"gender: ",e.gender),r.a.createElement("li",{class:"list-group-item"},"origin: ",e.origin.name),r.a.createElement("li",{class:"list-group-item"},"location: ",e.location.name))),document.querySelector("#home").classList.remove("selected"),document.querySelector("#chdetail").classList.add("selected"))}}]),t}(r.a.Component);var w=function(e){return r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters "},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:"https://media-exp1.licdn.com/dms/image/C4E03AQE3zjE9_vYFmA/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=i9YqJaRlA_1nc0w0df2fVOySbGpZXP3XbwvyiBsl1ys",className:"card-img col-lg pic",alt:"ss"})),r.a.createElement("div",{className:"col-md-8 "},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Hi! I'm Marcos!"),r.a.createElement("p",{className:"card-text"},"I'm a Business Analyst who is on the pursuit of becoming a web developer"),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{class:"text-muted"},"Thanks for visiting my app")))))))},S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(y,{text:"The Rick and Morty"}),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/",exact:!0,component:b}),r.a.createElement(E.a,{path:"/About",exact:!0,component:w}),r.a.createElement(E.a,{path:"/:id",exact:!0,component:O})))}}]),t}(r.a.Component),C=(a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[27,1,2]]]);
//# sourceMappingURL=main.5dae95e6.chunk.js.map
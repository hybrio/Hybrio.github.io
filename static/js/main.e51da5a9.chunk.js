(this["webpackJsonpsinge-page-site"]=this["webpackJsonpsinge-page-site"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),c=a.n(i),o=(a(28),a(10)),l=a(1),s=(a(29),a(30),a(3)),m=a(4),u=a(6),d=a(5),p=a.p+"static/media/Alexander-CV.d1178bb9.pdf",h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleType=function(){var e=n.props.dataText,t=n.state,a=t.isDeleting,r=t.loopNum,i=t.text,c=t.typingSpeed,o=e[r%e.length];n.setState({text:a?o.substring(0,i.length-1):o.substring(0,i.length+1),typingSpeed:a?20:100}),a||i!==o?a&&""===i&&n.setState({isDeleting:!1,loopNum:r+1}):setTimeout((function(){return n.setState({isDeleting:!0})}),500),setTimeout(n.handleType,c)},n.state={text:"",isDeleting:!1,loopNum:0,typingSpeed:100},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){return r.a.createElement("div",{id:"test"},r.a.createElement("h2",{className:"typer"},this.props.heading,"\xa0",r.a.createElement("span",null,this.state.text),r.a.createElement("span",{id:"cursor"})))}}]),a}(r.a.Component);h.defaultProps={heading:"",dataText:[]};var g=h,v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"homePageNav"},r.a.createElement("ul",{className:"homeNavList"},r.a.createElement("li",{className:"homePageNavItem"}," ",r.a.createElement("a",{href:p,without:!0,rel:"noopener noreferrer",target:"_blank",className:"link"},r.a.createElement("h1",{className:"grow"},"Curriculum vitae."))," "),r.a.createElement("li",{className:"homePageNavItem"},r.a.createElement(o.b,{to:"/projects",className:"link"},r.a.createElement("h1",{className:"grow"},"Projects."))),r.a.createElement("li",{className:"homePageNavItem"},r.a.createElement(o.b,{to:"/about",className:"link"},r.a.createElement("h1",{className:"grow"},"About."))))),r.a.createElement("div",{id:"content"},r.a.createElement(g,{heading:"My name is Alexander,",dataText:["I make things.","I develop applications.","I design backend systems.","I build tooling.","I integrate cloud platforms."]})))}}]),a}(r.a.Component),E=a(13),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e;return e=this.props.archived?r.a.createElement("div",{className:"Archived"}," Archived "):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:"Repository"},"\xa0",this.props.name,"  ",e)}}]),a}(r.a.Component),f=a(36),j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={projects:[],width:0,height:0,previewData:'<div style="  display: flex;  align-items: center;justify-content: center; height:50vw">please hover a repository to view it\'s README.md file</div>'},e.updateWindowDimensions=e.updateWindowDimensions.bind(Object(E.a)(e)),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Request("https://api.github.com/users/hybrio/starred");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({projects:t}),e.state.projects.forEach((function(t,a){var n=new Request(t.url+"/readme",{method:"Get",headers:{Accept:"application/vnd.github.VERSION.html"}});fetch(n).then((function(e){return e.text()})).then((function(t){var n=e.state.projects;n[a].data=t,e.setState({projects:n})})),console.log(e.state.projects)}))})),this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"updatePreview",value:function(e){this.setState({previewData:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{class:"pageNav"},r.a.createElement("ul",{class:"pageNavList"},r.a.createElement("li",null,r.a.createElement("h1",{className:"Heading"},"Projects.")),r.a.createElement("li",{id:"noPaddingOrMargin"},r.a.createElement(o.b,{to:"/",id:"noPaddingOrMargin"},r.a.createElement("h1",{id:"noPaddingOrMargin",className:"grow"},"<")))),r.a.createElement("ul",{class:"projectList"},this.state.projects.map((function(t){return r.a.createElement("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",onMouseEnter:function(){return e.updatePreview(t.data)}},r.a.createElement(b,{key:"project-".concat(t.id),name:t.name,target:t.html_url,data:t.data},t.name))})))),r.a.createElement("div",{id:"projects"},this.state.width>=768?r.a.createElement("div",{class:"markdown-body"},f(this.state.previewData)):r.a.createElement(r.a.Fragment,null)))}}]),a}(r.a.Component),w=a.p+"static/media/me-grey.fe557ed0.jpg",y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{class:"pageNav"},r.a.createElement("ul",{class:"pageNavList"},r.a.createElement("li",null,r.a.createElement("h1",{className:"Heading"},"About me.")),r.a.createElement("li",{id:"noPaddingOrMargin"},r.a.createElement(o.b,{to:"/",id:"noPaddingOrMargin"},r.a.createElement("h1",{id:"noPaddingOrMargin",className:"grow"},"<"))))),r.a.createElement("div",{id:"about"},r.a.createElement("img",{class:"portrait",src:w,alt:"image of me"}),r.a.createElement("p",{id:"about-text"},"Hi I'm Alexander",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"I am a software developer from Auckland, New Zealand who enjoys writing code and solving problems.",r.a.createElement("br",null),r.a.createElement("br",null),"I will soon be (covid permitting) a 2020 Computer Systems Engineering (Hons) Graduate from the University of Auckland.",r.a.createElement("br",null),r.a.createElement("br",null),"Unfortunately I don\u2019t have anything too exciting to show you as of yet (I\u2019m still retrieving my older uni projects) but watch this space.")))}}]),a}(r.a.Component),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"MenuText"},"\xa0",this.props.name)}}]),a}(r.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"\xa0Insert tag Checker",r.a.createElement(O,null))}}]),a}(r.a.Component);var k=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/about",component:y}),r.a.createElement(l.a,{exact:!0,path:"/projects",component:j}),r.a.createElement(l.a,{path:"/",component:v}),r.a.createElement(l.a,{exact:!0,path:"/tag_checker",component:N}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.e51da5a9.chunk.js.map
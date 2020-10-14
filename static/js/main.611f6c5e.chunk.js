(this["webpackJsonpsinge-page-site"]=this["webpackJsonpsinge-page-site"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/Alexander-CV.c59b5569.pdf"},21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),c=n.n(l),i=(n(26),n(10)),o=n(1),u=(n(27),n(3)),s=n(4),m=n(6),p=n(5),d=n(19),h=n.n(d),g=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleType=function(){var e=a.props.dataText,t=a.state,n=t.isDeleting,r=t.loopNum,l=t.text,c=t.typingSpeed,i=e[r%e.length];a.setState({text:n?i.substring(0,l.length-1):i.substring(0,l.length+1),typingSpeed:n?20:100}),n||l!==i?n&&""===l&&a.setState({isDeleting:!1,loopNum:r+1}):setTimeout((function(){return a.setState({isDeleting:!0})}),500),setTimeout(a.handleType,c)},a.state={text:"",isDeleting:!1,loopNum:0,typingSpeed:100},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.handleType()}},{key:"render",value:function(){return r.a.createElement("div",{id:"test"},r.a.createElement("h2",null,this.props.heading,"\xa0",r.a.createElement("span",null,this.state.text),r.a.createElement("span",{id:"cursor"})))}}]),n}(r.a.Component);g.defaultProps={heading:"",dataText:[]};var E=g,b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement("a",{href:h.a,without:!0,rel:"noopener noreferrer",target:"_blank"},"Curriculum vitae. ")," "),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/projects"},"Projects.")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about"},"About.")))),r.a.createElement("div",{id:"content"},r.a.createElement(E,{heading:"My name is Alexander,",dataText:["I make things.","I develop applications.","I design backend systems.","I build tooling.","I integrate cloud platforms."]})))}}]),n}(r.a.Component),v=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e;return e=this.props.archived?r.a.createElement("div",{className:"Archived"}," Archived "):r.a.createElement(r.a.Fragment,null),r.a.createElement("a",{href:this.props.target,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"Repository"},"\xa0",this.props.name,"  ",e))}}]),n}(r.a.Component),f=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={projects:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new Request("https://api.github.com/users/hybrio/starred");fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({projects:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{id:"pageNav"},r.a.createElement("ul",{id:"pageNavList"},r.a.createElement("li",null,r.a.createElement("h1",null,"Projects.")),r.a.createElement("li",{id:"noPaddingOrMargin"},r.a.createElement(i.b,{to:"/",id:"noPaddingOrMargin"},r.a.createElement("h1",{id:"noPaddingOrMargin"},"<"))))),r.a.createElement("div",{id:"projects"},r.a.createElement("ul",null,this.state.projects.map((function(e){return r.a.createElement(v,{key:"project-".concat(e.id),name:e.name,target:e.html_url},e.name)})))))}}]),n}(r.a.Component),j=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{id:"pageNav"},r.a.createElement("ul",{id:"pageNavList"},r.a.createElement("li",null,r.a.createElement("h1",null,"About me.")),r.a.createElement("li",{id:"noPaddingOrMargin"},r.a.createElement(i.b,{to:"/",id:"noPaddingOrMargin"},r.a.createElement("h1",{id:"noPaddingOrMargin"},"<"))))),r.a.createElement("div",{id:"about"},r.a.createElement("p",{id:"about-text"},"Hi I'm Alexander",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"I am a software developer from Auckland, New Zealand who enjoys writing code and solving problems.",r.a.createElement("br",null),r.a.createElement("br",null),"I will soon be (covid permitting) a 2020 Computer Systems Engineering (Hons) Graduate from the University of Auckland.",r.a.createElement("br",null),r.a.createElement("br",null),"Unfortunately I don\u2019t have anything too exciting to show you as of yet (I\u2019m still retrieving my older uni projects) but watch this space.")))}}]),n}(r.a.Component),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"MenuText"},"\xa0",this.props.name)}}]),n}(r.a.Component),O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"\xa0Insert tag Checker",r.a.createElement(y,null))}}]),n}(r.a.Component);var k=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/about",component:j}),r.a.createElement(o.a,{exact:!0,path:"/projects",component:f}),r.a.createElement(o.a,{path:"/",component:b}),r.a.createElement(o.a,{exact:!0,path:"/tag_checker",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.611f6c5e.chunk.js.map
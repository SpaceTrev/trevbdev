(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},129:function(e,t,a){var n={"./videos/friendfinder.mov":130,"./videos/mssdemo.mov":131};function c(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=129},130:function(e,t,a){e.exports=a.p+"static/media/friendfinder.e5f8bc61.mov"},131:function(e,t,a){e.exports=a.p+"static/media/mssdemo.fcb70bed.mov"},139:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),o=a.n(r),l=(a(93),a(22)),s=a(23),i=a(26),m=a(24),d=a(25),u=a(84),p=a(28),b=a(19),f=a(141),E=a(142),v=a(143),h=a(157),g=a(144),N=a(145),k=a(146),y=a(29),x=a(30),C=(a(99),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(a)),a.state={isOpen:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return c.a.createElement("div",{className:"body"},c.a.createElement("div",null,c.a.createElement(f.a,{id:"dashboard",color:"dark",dark:!0,expand:"md"},c.a.createElement(E.a,{className:"text-white"},"Deep Space"),c.a.createElement(v.a,{onClick:this.toggle}),c.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(g.a,{className:"menu",navbar:!0},c.a.createElement(N.a,{className:"my-2 mx-1"},c.a.createElement(k.a,{className:"navlink",target:"_blank",href:"https://github.com/spacetrev"},c.a.createElement(y.a,{size:"lg",className:"iconz",icon:x.a}))),c.a.createElement(N.a,{className:"my-2 mx-1"},c.a.createElement(k.a,{className:"navlink",target:"_blank",href:"https://linkedin.com/in/spacetrev"},c.a.createElement(y.a,{size:"lg",className:"iconz",icon:x.b}))))))))}}]),t}(c.a.Component)),O=(a(51),a(107),a(147)),w=[{id:"1",btnID:"toggle1",name:"MSS",info:"E-commerce/Subscription platform with interactive map & ticketing Service.",techUsed:"Javascript, Express, Node, Firebase, Google Maps API, Shopify API, Paypal API",video:"/mssdemo.mov"},{id:"2",btnID:"toggle2",name:"Crypto Link",info:"A cryptocurrency portfolio tracking web app that utilizes a login system.",techUsed:"Javascript, Express, Node, Firebase, Coin Market Cap API, Chartist.js, OAuth",video:"/friendfinder.mov"},{id:"3",btnID:"toggle5",name:"Cryptdux",info:"A cross-platform cryptocurrency portfolio tracking application.",techUsed:"Expo, React-Native, React Navigation, CryptoTracker API, Redux, Thunk, Chartist.js",video:"/mssdemo.mov"},{id:"4",btnID:"toggle3",name:"Creation Station",info:"A classfied ad service for creative professionals such as musicians & artists.",techUsed:"Javascript, Express, Node, MongoDB, React.",video:"/mssdemo.mov"},{id:"5",btnID:"toggle4",name:"Bamazon",info:"A backend command line app built to immitate an administrative view for a web store.",techUsed:"Node",video:"/friendfinder.mov"},{id:"6",btnID:"toggle6",name:"Hot Scheduler",info:"A full stack application for scheduling and keeping track of a restaurants wait list.",techUsed:"Javascript, Express, Node, React, MongoDB",video:"/friendfinder.mov"}],j=a(82),z=a.n(j),D=(a(108),a(31)),I=a(148),A=a(149),S=a(150),T=a(151),B=a(152),P=a(153),U=a(154),H=a(155),M=a(156),_=a(42),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).cards=[],a.tl=new O.a({paused:!0}),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.tl.staggerTo(this.cards,.5,{autoAlpha:1,y:-20},.1)}},{key:"render",value:function(){var e=this,t=w.map(function(t,n){return c.a.createElement("div",{key:t.id,className:"col-10 col-sm-10 col-md-10 col-lg-6 col-xl-4 card-element mt-4 mb-4 mx-auto",ref:function(t){return e.cards[n]=t}},c.a.createElement(D.c,{id:n,ref:function(e){return t.flippyHorizontal=e},flipOnClick:!1,flipDirection:"horizontal"},c.a.createElement(D.b,{style:{backgroundColor:"#333",borderColor:"#333"}},c.a.createElement(I.a,{className:"m-1 p-0",body:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"}},c.a.createElement(A.a,{className:"mt-0"},t.name),c.a.createElement(S.a,{className:"info"},t.info),c.a.createElement(S.a,{className:"techused"},"Technologies Used: ",t.techUsed),c.a.createElement(T.a,{className:"btn-sm",id:t.btnID,style:{marginBottom:".5rem"},onClick:function(){return t.flippyHorizontal.toggle()}},"Click For Demo"))),c.a.createElement(D.a,{className:"container bkSide text-center",style:{backgroundColor:"#333",borderColor:"#333"}},c.a.createElement("div",{className:"container text-center"},c.a.createElement(_.Player,{className:"picsTest",fluid:!1,playsInline:!0},c.a.createElement("source",{src:a(129)("./videos"+t.video)}),c.a.createElement(_.ControlBar,{disableCompletely:!0,className:"my-class"}))),c.a.createElement("div",null,c.a.createElement(T.a,{id:t.btnID,onClick:function(){return t.flippyHorizontal.toggle()},className:"btn btn-md btnBack mx-auto"},"Go Back")))))});return this.tl.kill().clear().pause(0),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-3"},c.a.createElement("div",{className:"mx-auto col-10 col-sm-10 col-md-8 col-lg-7 col-xl-6 mx-auto"},c.a.createElement(D.c,{ref:function(t){return e.flippyHorizontal=t},flipOnClick:!1,flipDirection:"horizontal"},c.a.createElement(D.b,null,c.a.createElement(I.a,{body:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"}},c.a.createElement(B.a,{className:"mx-auto mb-4"},c.a.createElement(B.a,{className:"headshot",src:z.a,object:!0,alt:"headshot of spacetrev"})),c.a.createElement(T.a,{className:"text-center btn btn-sm m-1",onClick:function(){return e.flippyHorizontal.toggle()}},"Flip for contact"),c.a.createElement(A.a,{className:"mx-auto cardtitle"},c.a.createElement("h1",{className:"cardTitle"},"Trevor Benavides")),c.a.createElement(S.a,{className:"mx-auto cardText"},"Software Developer"),c.a.createElement(S.a,{className:"mx-auto cardText2"},"Apps/Projects"),c.a.createElement("div",{className:"mx-auto"},c.a.createElement(T.a,{className:"btn-md m-1",onClick:function(){return e.tl.play()}},"Show"),c.a.createElement(T.a,{className:"btn-md m-1",onClick:function(){return e.tl.reverse()}},"Hide")))),c.a.createElement(D.a,null,c.a.createElement(I.a,{body:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"}},c.a.createElement(A.a,{className:"mx-auto cardtitle"},c.a.createElement("h1",{id:"backTitle",className:"cardTitle"},"Contact")),c.a.createElement(P.a,{className:"listgroup"},c.a.createElement("h5",{className:"text-center mt-3 links"},"Links"),c.a.createElement("div",{className:"row mx-auto"},c.a.createElement(U.a,{style:{backgroundColor:"#333",borderColor:"#333"},className:"text-center contact-icons"},c.a.createElement(H.a,null," ",c.a.createElement(y.a,{size:"lg",className:"iconz mx-auto",icon:x.b})),c.a.createElement(T.a,{target:"_blank",href:"https://linkedin.com/in/spacetrev",className:"btn btn-sm",outline:!0},"Go")),c.a.createElement(U.a,{style:{backgroundColor:"#333",borderColor:"#333"},className:"text-center contact-icons"},c.a.createElement(H.a,null," ",c.a.createElement(y.a,{size:"lg",className:"iconz mx-auto",icon:x.a})),c.a.createElement(T.a,{target:"_blank",href:"https://github.com/spacetrev",className:"btn btn-sm",outline:!0},"Go")),c.a.createElement(U.a,{style:{backgroundColor:"#333",borderColor:"#333"},className:"text-center contact-icons"},c.a.createElement(H.a,null," ",c.a.createElement(y.a,{size:"lg",className:"iconz mx-auto",icon:x.c})),c.a.createElement(T.a,{target:"_blank",href:"http://stackoverflow.com/story/spacetrev",className:"btn btn-sm",outline:!0},"Go"))),c.a.createElement("div",{className:"row mx-auto"},c.a.createElement(U.a,{style:{backgroundColor:"#333",borderColor:"#333"},className:"text-center contact-item"},c.a.createElement(H.a,null,"Email"),c.a.createElement(M.a,{className:"contact-txt"},"trevbdev@gmail.com")),c.a.createElement(U.a,{style:{backgroundColor:"#333",borderColor:"#333"},className:"text-center contact-item"},c.a.createElement(H.a,null,"Phone"),c.a.createElement(M.a,{className:"contact-txt"},"(303)829-9013")))),c.a.createElement(T.a,{className:"text-center btn btn-sm m-1 mt-2 mb-4 flip-for-face",onClick:function(){return e.flippyHorizontal.toggle()}},"Flip for my face"),c.a.createElement(S.a,{className:"mx-auto cardText2 mt-1"},"Apps/Projects"),c.a.createElement("div",{className:"mx-auto"},c.a.createElement(T.a,{className:"btn-md m-1",onClick:function(){return e.tl.play()}},"Show"),c.a.createElement(T.a,{className:"btn-md m-1",onClick:function(){return e.tl.reverse()}},"Hide"))))))),c.a.createElement("div",{className:"row mt-3"},t))}}]),t}(n.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(F,null))}}]),t}(n.Component),G=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(C,null),c.a.createElement("div",{className:"content"},c.a.createElement(p.a,{exact:!0,path:"/",component:J})))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(138);o.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a.p+"static/media/tface.5a5994c1.jpg"},88:function(e,t,a){e.exports=a(139)},93:function(e,t,a){},99:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.17218fa7.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(12),c=a.n(o),i=a(13),s=a(14),r=a(17),m=a(15),d=a(18),u=a(2),p=a(4),h=a.n(p),E=a(16),v=a.n(E),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={movies:[],content:{},showPopup:!1},a.handleOnClick=a.handleOnClick.bind(Object(u.a)(Object(u.a)(a))),a.handleOnClose=a.handleOnClose.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://www.omdbapi.com/?i=tt3896198&apikey=81f5bea7&s=marvel").then(function(t){e.setState({movies:t.data.Search})}).catch(function(e){console.error(e)})}},{key:"handleOnClick",value:function(e){var t=this,a="http://www.omdbapi.com/?apikey=81f5bea7&i="+e;h.a.get(a).then(function(e){t.setState({content:e.data})}),document.body.classList.add("open"),this.setState({showPopup:!0})}},{key:"handleOnClose",value:function(){document.body.classList.remove("open"),this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this,t=v.a.map(this.state.movies,function(t,a){return l.a.createElement("li",{key:"movie-"+a,className:"Movie-items"},l.a.createElement("figure",{className:"Movie-items-img"},"N/A"===t.Poster?l.a.createElement("img",{src:"img/no-image.jpg"}):l.a.createElement("img",{src:t.Poster})),l.a.createElement("h3",{className:"Movie-items-title"},t.Title),l.a.createElement("p",{className:"Movie-items-text"},t.Year,l.a.createElement("button",{onClick:function(a){return e.handleOnClick(t.imdbID)}},"MORE INFO")))}),a="";this.state.showPopup&&(a="show");var n=this.state.content;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"MARVEL ARCHIVES")),l.a.createElement("section",null,l.a.createElement("ul",{className:"Movie"},t)),l.a.createElement("div",{id:"PopUp",className:a},l.a.createElement("div",{className:"PopUp-wrapper"},l.a.createElement("button",{onClick:this.handleOnClose},"close"),l.a.createElement("div",{className:"PopUp-inner"},l.a.createElement("figure",{className:"PopUp-inner-img"},l.a.createElement("img",{src:n.Poster})),l.a.createElement("div",{className:"PopUp-inner-details"},l.a.createElement("h3",null,n.Title),l.a.createElement("dl",null,l.a.createElement("dt",null,"Year"),l.a.createElement("dd",null,n.Year),l.a.createElement("dt",null,"Actors"),l.a.createElement("dd",null,n.Actors),l.a.createElement("dt",null,"Type"),l.a.createElement("dd",null,n.Type)))))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w,{title:"Movie List"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.b628a005.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(12),l=a.n(i),c=a(13),s=a(14),r=a(17),m=a(15),p=a(18),d=a(2),u=a(4),h=a.n(u),v=a(16),E=a.n(v),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={movies:[],content:{},showPopup:!1},a.handleOnClick=a.handleOnClick.bind(Object(d.a)(Object(d.a)(a))),a.handleOnClose=a.handleOnClose.bind(Object(d.a)(Object(d.a)(a))),a.updatePopUp=a.updatePopUp.bind(Object(d.a)(Object(d.a)(a))),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://www.omdbapi.com/?i=tt3896198&apikey=81f5bea7&s=marvel").then(function(t){e.setState({movies:t.data.Search})}).catch(function(e){console.error(e)})}},{key:"updatePopUp",value:function(e){var t=this,a="http://www.omdbapi.com/?apikey=81f5bea7&i="+e;h.a.get(a).then(function(e){t.setState({content:e.data})}),document.body.classList.add("open"),this.setState({showPopup:!0})}},{key:"handleOnClick",value:function(e){var t=this;this.setState({content:{Poster:"img/loading.gif"}},function(){t.updatePopUp(e)})}},{key:"handleOnClose",value:function(){document.body.classList.remove("open"),this.setState({showPopup:!1})}},{key:"render",value:function(){var e=this,t=E.a.map(this.state.movies,function(t,a){var n="N/A"===t.Poster?"img/no-image.jpg":t.Poster;return o.a.createElement("li",{key:"movie-"+a,className:"Movie-items"},o.a.createElement("figure",{className:"Movie-items-img"},o.a.createElement("img",{alt:"movie-items-img",src:n})),o.a.createElement("h3",{className:"Movie-items-title"},t.Title),o.a.createElement("p",{className:"Movie-items-text"},t.Year,o.a.createElement("button",{onClick:function(a){return e.handleOnClick(t.imdbID)}},"MORE INFO")))}),a="";this.state.showPopup&&(a="show");var n=this.state.content,i="N/A"===n.Poster?"img/no-image.jpg":n.Poster;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"MARVEL ARCHIVES")),o.a.createElement("section",null,o.a.createElement("ul",{className:"Movie"},t)),o.a.createElement("div",{id:"PopUp",className:a},o.a.createElement("div",{className:"PopUp-wrapper"},o.a.createElement("button",{onClick:this.handleOnClose},"close"),o.a.createElement("div",{className:"PopUp-inner"},o.a.createElement("figure",{className:"PopUp-inner-img"},o.a.createElement("img",{alt:"img-poster",src:i})),o.a.createElement("div",{className:"PopUp-inner-details"},o.a.createElement("h3",null,n.Title),o.a.createElement("dl",null,o.a.createElement("dt",null,"Year"),o.a.createElement("dd",null,n.Year),o.a.createElement("dt",null,"Actors"),o.a.createElement("dd",null,n.Actors),o.a.createElement("dt",null,"Type"),o.a.createElement("dd",null,n.Type)))))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b,{title:"Movie List"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.deccd9ce.chunk.js.map
(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{40:function(e,t,c){},52:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(31),i=c.n(n),r=(c(40),c(12)),l=c.n(r),j=c(15),o=c(11),d=(c(42),c(43),c(44),c(34)),b=c(35),v=c(32),m=c.p+"static/media/vmovee.ae65bbe0.png",u=c(6),h=c(1);var O=function(e){var t=e.navopen,c=(e.tvopen,e.settvopen),a=e.setnavopen,n=e.setcurrentpage,i=e.setmovies,r=e.refrespage,l=e.setrefrespage,j=Object(s.useRef)(null),o=Object(s.useRef)(null),O=Object(s.useRef)(null);function x(e){"home"==e?(j.current.classList.add("active"),o.current.classList.remove("active"),O.current.classList.remove("active")):"movie"==e?(o.current.classList.add("active"),j.current.classList.remove("active"),O.current.classList.remove("active")):"tv"==e&&(O.current.classList.add("active"),j.current.classList.remove("active"),o.current.classList.remove("active"))}return Object(h.jsx)("div",{className:"topnav",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navcontent",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)(v.a,{onClick:function(){return a(!t)}}),Object(h.jsx)("img",{src:m,alt:"",className:"img-fluid"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/home",onClick:function(){return c(!1),n(1),i([]),l(r+1),x("home")},ref:j,children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/home",onClick:function(){return c(!1),n(1),i([]),l(r+1),x("movie")},ref:o,children:"Movies"})}),Object(h.jsx)("li",{children:Object(h.jsx)(u.b,{to:"/home",onClick:function(){return c(!0),n(1),i([]),l(r+1),x("tv")},ref:O,children:"Tv Shows"})})]})]}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)("div",{className:"img",children:Object(h.jsx)(d.a,{})}),Object(h.jsx)(b.a,{})]})]})})})},x=c(3);var p=function(e){var t=e.navopen,c=(e.tvopen,e.settvopen),a=e.setnavopen,n=e.setcurrentpage,i=e.setmovies,r=e.refrespage,l=e.setrefrespage,j=Object(s.useRef)(null),o=Object(s.useRef)(null),d=Object(s.useRef)(null);function b(e){"home"==e?(j.current.classList.add("active"),o.current.classList.remove("active"),d.current.classList.remove("active")):"movie"==e?(o.current.classList.add("active"),j.current.classList.remove("active"),d.current.classList.remove("active")):"tv"==e&&(d.current.classList.add("active"),j.current.classList.remove("active"),o.current.classList.remove("active"))}return Object(h.jsxs)("div",{className:"sidenav ".concat(t?"navopen":null),children:[Object(h.jsx)("div",{className:"sidenavcontent",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{ref:j,onClick:function(){return c(!1),n(1),i([]),l(r+1),b("home")},children:Object(h.jsx)(u.b,{to:"/home",children:"Home"})}),Object(h.jsx)("li",{ref:o,onClick:function(){return c(!1),n(1),i([]),l(r+1),b("movie")},children:Object(h.jsx)(u.b,{to:"/home",children:"Movies"})}),Object(h.jsx)("li",{ref:d,onClick:function(){return c(!0),n(1),i([]),l(r+1),b("tv")},children:Object(h.jsx)(u.b,{to:"/home",children:"Tv Shows"})})]})}),Object(h.jsx)(x.a,{className:"close",onClick:function(){return a(!t)}})]})},g=c(4);c(52),c.p;var f=function(e){for(var t=e.movies,c=e.currentpage,s=e.setcurrentpage,a=e.allnoofpage,n=e.tvopen,i=[],r=function(e){var t=c==e?"active":null;i.push(Object(h.jsx)("a",{className:"".concat(t," paglink"),onClick:function(){return function(e){s(e),window.scrollTo(0,0)}(e)},children:e}))},l=1;l<=a;l++)r(l);return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(h.jsx)("div",{className:"col-6 col-md-3 col-lg-3",children:Object(h.jsxs)("div",{className:"movie-item mt-3 mb-2",children:[Object(h.jsx)(u.b,{to:"/home/".concat(e.id),children:Object(h.jsxs)("div",{className:"card position-relative",children:[Object(h.jsx)("div",{className:"cardimg",children:Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"",className:"img-fluid"})}),Object(h.jsx)("div",{className:"hd",children:Object(h.jsxs)("h6",{className:"d-inline-block",children:[" ",e.vote_average]})})]})}),Object(h.jsxs)("h6",{className:"movtitle",children:[n?e.name:e.title," "]}),Object(h.jsxs)("h6",{className:"moviedate",children:[e.release_date," "]})]})},t)}))}),Object(h.jsxs)("div",{className:"paginaton",children:[Object(h.jsx)("a",{className:"paglink",onClick:function(){c<=1||(s(c-1),window.scrollTo(0,0))},children:"prev"}),1==c?i.slice(c-1,c+4):c>1?i.slice(c-2,c+4):null,Object(h.jsx)("a",{className:"paglink",onClick:function(){c>=a||(s(c+1),window.scrollTo(0,0))},children:"next"})]})]})})},N=(c.p,c(13)),k=c.n(N);var _=function(e){var t=e.id,c=e.tvopen,a=Object(s.useState)([]),n=Object(o.a)(a,2),i=n[0],r=n[1];return Object(s.useEffect)(Object(j.a)(l.a.mark((function e(){var s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return e.next=3,k.a.get("https://api.themoviedb.org/3/tv/".concat(t,"/similar?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US&page=1"));case 3:s=e.sent,r(s.data.results.slice(1,13)),e.next=11;break;case 7:return e.next=9,k.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/similar?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US&page=1"));case 9:a=e.sent,r(a.data.results.slice(1,13));case 11:case"end":return e.stop()}}),e)}))),[t,c]),Object(h.jsxs)("div",{className:"container",children:[i.length>0?Object(h.jsxs)("h2",{className:"similartitle",children:[" ",c?"Similar tv":"Similar Movies"," "]}):null,Object(h.jsx)("div",{className:"row",children:i.map((function(e,t){return Object(h.jsx)("div",{className:"col-6 col-md-2 col-lg-2",children:Object(h.jsx)("div",{className:"movie-item mt-3 mb-2",children:Object(h.jsxs)(u.b,{to:"/home/".concat(e.id),onClick:function(){window.scrollTo(0,0)},children:[Object(h.jsxs)("div",{className:"card position-relative",children:[Object(h.jsx)("div",{className:"cardimg",children:Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+e.poster_path,alt:"",className:"img-fluid"})}),Object(h.jsx)("div",{className:"hd",children:Object(h.jsxs)("h6",{className:"d-inline-block",children:[" ",e.vote_average]})})]}),Object(h.jsxs)("h6",{className:"movtitle",children:[e.title," "]})]})})},t)}))})]})};var w=function(e){var t=e.tvopen,c=Object(s.useState)([]),a=Object(o.a)(c,2),n=a[0],i=a[1],r=Object(g.h)().id;return Object(s.useEffect)(Object(j.a)(l.a.mark((function e(){var c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,k.a.get("https://api.themoviedb.org/3/tv/".concat(r,"?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US"));case 3:c=e.sent,i(c),e.next=11;break;case 7:return e.next=9,k.a.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US"));case 9:s=e.sent,i(s);case 11:case"end":return e.stop()}}),e)}))),[r,t]),200==n.status?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"movieinfo",children:[Object(h.jsx)("div",{className:"backimg",children:n.data.backdrop_path?Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.data.backdrop_path),alt:""}):null}),Object(h.jsx)("div",{className:"overlay"}),Object(h.jsx)("div",{className:"container allinfo",children:Object(h.jsxs)("div",{className:"row ",children:[Object(h.jsx)("div",{className:"col-4 col-md-4 ",children:Object(h.jsx)("div",{className:"movieposter my-3 ",children:Object(h.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.data.poster_path),alt:"",className:"img-fluid"})})}),Object(h.jsx)("div",{className:"col-8 col-md-8 my-5",children:Object(h.jsxs)("div",{className:"movie-info my-3",children:[Object(h.jsx)("h2",{children:t?n.data.name:n.data.title}),Object(h.jsxs)("h4",{children:[n.data.release_date,".(",n.data.original_language,") .",Object(h.jsx)("span",{className:"gener mx-1",children:n.data.genres.map((function(e){return Object(h.jsxs)("a",{href:"#",children:[" ",e.name]})}))}),".",Object(h.jsxs)("span",{className:"duration",children:[t?null:n.data.runtime,t?null:"min"]})]}),Object(h.jsx)("h3",{children:"overview"}),Object(h.jsx)("p",{children:n.data.overview}),Object(h.jsx)("div",{className:"rating",children:10==n.data.vote_average?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{})]}):n.data.vote_average>8?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.c,{})]}):n.data.vote_average>6?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.c,{}),Object(h.jsx)(x.c,{})]}):n.data.vote_average>4?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x.b,{}),Object(h.jsx)(x.b,{}),Object(h.jsx)(x.c,{}),Object(h.jsx)(x.c,{}),Object(h.jsx)(x.c,{})]}):n.data.vote_average>2?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x.b,{}),Object(h.jsx)(x.c,{}),Object(h.jsx)(x.c,{}),Object(h.jsx)(x.c,{}),Object(h.jsx)(x.c,{})]}):null})]})})]})})]}),Object(h.jsx)(_,{id:n.data.id,tvopen:t})]}):Object(h.jsx)("h2",{children:"movie not found"})};var L=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(o.a)(n,2),r=i[0],d=i[1],b=Object(s.useState)(1),v=Object(o.a)(b,2),m=v[0],u=v[1],x=Object(s.useState)(0),N=Object(o.a)(x,2),_=N[0],L=N[1],S=Object(s.useState)(!1),y=Object(o.a)(S,2),C=y[0],F=y[1],R=Object(s.useState)(0),T=Object(o.a)(R,2),U=T[0],E=T[1],M=Object(g.g)();return console.log(M),Object(s.useEffect)(Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=9;break}return e.next=3,k.a.get("https://api.themoviedb.org/3/discover/tv?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US&sort_by=popularity.desc&page=".concat(m,"&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate"));case 3:t=e.sent,console.log(t),L(t.data.total_pages),d(t.data.results),e.next=16;break;case 9:return e.next=11,k.a.get("https://api.themoviedb.org/3/discover/movie?api_key=67e75815b2f7e5b64d07c99494748135&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=".concat(m,"&with_watch_monetization_types=flatrate"));case 11:c=e.sent,console.log(c),L(c.data.total_pages),d(c.data.results),console.log(m);case 16:case"end":return e.stop()}}),e)}))),[m,C,U]),"/"==M.pathname?Object(h.jsx)(g.a,{to:"/home"}):Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(O,{navopen:c,setnavopen:a,settvopen:F,setcurrentpage:u,tvopen:C,setmovies:d,refrespage:U,setrefrespage:E}),Object(h.jsx)(p,{navopen:c,setnavopen:a,settvopen:F,setcurrentpage:u,tvopen:C,setmovies:d,refrespage:U,setrefrespage:E}),r.length<=0?Object(h.jsx)("div",{className:"vh-100 d-flex justify-content-center align-items-center",children:Object(h.jsx)("h3",{children:".....Loading"})}):Object(h.jsxs)(g.d,{children:[Object(h.jsx)(g.b,{exact:!0,path:"/home",children:Object(h.jsx)(f,{movies:r,currentpage:m,setcurrentpage:u,allnoofpage:_,tvopen:C})}),Object(h.jsx)(g.b,{exact:!0,path:"/home/:id",children:Object(h.jsx)(w,{tvopen:C})})]})]})};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u.a,{children:Object(h.jsx)(L,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.3ec32c53.chunk.js.map
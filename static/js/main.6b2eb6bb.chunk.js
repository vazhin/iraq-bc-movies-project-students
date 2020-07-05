(this["webpackJsonpmovie-project"]=this["webpackJsonpmovie-project"]||[]).push([[0],{29:function(e,t,a){},54:function(e,t,a){e.exports=a(68)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(25),l=a.n(c),m=a(11),s=a(50),o=a(76),i=a(44),u=a(71),p=a(6);function E(){const e=r.a.useRef(),t=Object(p.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{inline:!0,onSubmit:a=>{a.preventDefault();let n=a.target.children[0].value;t.push("/search?query=".concat(n)),e.current.value=""}},r.a.createElement(i.a,{type:"text",placeholder:"Search",className:"mr-s w-auto",ref:e}),r.a.createElement(u.a,{type:"submit",variant:"outline-primary",className:"m-1"},"Search")))}var d=a(79),h=a(77),g=a(8),v=a(27);function b(e){let t=((e,t)=>"".concat("https://api.themoviedb.org/3","/").concat(e,"?api_key=").concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="),"&query=").concat(t))("search/movie",e);return fetch(t).then(e=>e.json())}const f=Object(n.createContext)(),y=e=>{const t=Object(n.useReducer)((function(e,t){switch(t.type){case"SET_MOVIES":return Object(v.a)(Object(v.a)({},e),{},{moviesList:[...t.moviesList]});case"SET_GENRES":return Object(v.a)(Object(v.a)({},e),{},{genresList:[...t.genresList]});default:throw new Error}}),{moviesList:[],genresList:[]}),a=Object(g.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)(()=>{fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="))).then(e=>e.json()).then(e=>{l({type:"SET_GENRES",genresList:e.genres})})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f.Provider,{value:[c,l]},e.children))};function j(){const e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(f),m=Object(g.a)(l,2),s=m[0],i=m[1],u=Object(p.f)();return Object(n.useEffect)(()=>{fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="),"&language=en-US&page=100")).then(e=>e.json()).then(e=>{i({type:"SET_MOVIES",moviesList:e.results}),c(e.results)})},[]),r.a.createElement(h.a,{className:"mr-auto mb-0"},r.a.createElement(o.a.Group,{className:"mb-0",controlId:"exampleForm.ControlSelect1"},r.a.createElement(o.a.Control,{as:"select",onChange:e=>{u.push("/");let t=Number(e.target.value);if(0!==t){const e=a.filter(e=>e.genre_ids.includes(t));i({type:"SET_MOVIES",moviesList:e})}else i({type:"SET_MOVIES",moviesList:a})}},r.a.createElement("option",{key:0,value:0},"All genres"),s.genresList&&s.genresList.map(e=>r.a.createElement("option",{key:e.id,value:e.id},e.name)))))}function N(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{expand:"lg",style:{boxShadow:"0px 3px 3px -1px rgba(240,240,240,1)"}},r.a.createElement(d.a.Brand,{href:"#home"},r.a.createElement(m.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement("div",{className:"m-2 mr-3"},r.a.createElement(s.a,{size:"2.5rem",className:"text-primary mb-1"}),r.a.createElement("span",{className:"text-info display-3 text-dark",style:{fontSize:"1.7rem"}}," ","Cinemagic")))),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(j,null)),r.a.createElement(E,null))))}a(65);var k=a(52),x=a(80),w=a(72);function Z(e){let t=new Date(e).toDateString();return t.slice(4,10)+", "+t.slice(11)}function S({movie:e}){let t="https://image.tmdb.org/t/p/original"+e.poster_path;const a=Object(n.useContext)(f),c=Object(g.a)(a,1)[0];return r.a.createElement("li",{className:"m-5 tilt-in-top-1"},r.a.createElement(m.b,{to:"movie/".concat(e.id),style:{textDecoration:"none"}},r.a.createElement(k.a.div,{whileHover:{scale:1.08},whileTap:{scale:.9}},r.a.createElement(x.a,{style:{width:"17rem",border:"none"},className:"align-items-center justify-content-center shadow-sm movie-item"},r.a.createElement(x.a.Img,{variant:"top",src:t,onError:e=>{e.target.src="https://www.pinclipart.com/picdir/big/134-1340367_movie-icons-free-download-software-icon-png-blue.png"}}),r.a.createElement(x.a.Body,{className:"w-100"},r.a.createElement(x.a.Title,{style:{fontSize:"1.6rem",color:"black"}},e.title),r.a.createElement(x.a.Text,null,(l=e.genre_ids,s=c.genresList,l.map((e,t)=>{let a=s.find(t=>t.id===e);return a?r.a.createElement(w.a,{className:"mr-1 text-dark",key:"".concat(e),style:{fontSize:"0.85rem",backgroundColor:"#e9ecef"}},a.name):r.a.createElement("span",{key:"".concat(t)})}))),r.a.createElement(x.a.Text,null,r.a.createElement(w.a,{variant:"warning",style:{fontSize:"0.85rem"},className:"mr-2"},"Rating ",e.vote_average),r.a.createElement(w.a,{variant:"primary",style:{fontSize:"0.85rem"}},Z(e.release_date))))))));var l,s}function O({moviesList:e}){return r.a.createElement("ul",{style:{listStyle:"none",padding:"0"},className:"d-flex align-items-center justify-content-center flex-wrap"},e&&e.map((e,t)=>r.a.createElement(S,{key:"".concat(t),movie:e})))}var _=a(22),D=a(73),z=a(74),M=a(45);function T(){return r.a.createElement("div",{className:"py-3",style:F},r.a.createElement(D.a,null,r.a.createElement(z.a,{className:"mb-3"},r.a.createElement(M.a,{className:"text-dark"},"Made with ",r.a.createElement(_.b,null)," by :")),r.a.createElement(z.a,null,r.a.createElement(M.a,{className:"text-dark"},r.a.createElement("a",{className:"m-2 text-dark",href:"https://github.com/Hewr-Srood",style:I},r.a.createElement(_.a,null)," Hewr"),r.a.createElement("a",{className:"m-2 text-dark",href:"https://github.com/neven2",style:I},r.a.createElement(_.a,null)," Neven"),r.a.createElement("a",{className:"m-2 text-dark",href:"https://github.com/Arvinalhissou",style:I},r.a.createElement(_.a,null)," Arvin"),r.a.createElement("a",{className:"m-2 text-dark",href:"https://github.com/vazhin",style:I},r.a.createElement(_.a,null)," Vazhin"),r.a.createElement("a",{className:"m-2 text-dark",href:"https://github.com/Zainab98Azzam",style:I},r.a.createElement(_.a,null)," Zainab")))))}const F={backgroundColor:"#F0F0F0",fontSize:"0.82rem",textAlign:"center",width:"100%"},I={color:"#34495E ",textDecoration:"none"};function L(){const e=Object(n.useContext)(f),t=Object(g.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{moviesList:t.moviesList}),0!==t.moviesList.length&&r.a.createElement(T,null))}a(29);function C({movieId:e}){const t=Object(n.useState)(),a=Object(g.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)(()=>{fetch("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="),"&language=en-US")).then(e=>e.json()).then(e=>{l(e.results[0])})},[]),r.a.createElement(r.a.Fragment,null,c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"text-center display-3 my-4",style:{fontSize:"3rem"}},"Trailer"),r.a.createElement("div",{className:"w-100 videoWrapper"},r.a.createElement("iframe",{className:"embed-responsive-item",title:"".concat(c.id),src:"https://www.youtube.com/embed/".concat(c.key),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))}var Q=a(78);a(66);function Y({movieId:e}){const t=Object(n.useState)(),a=Object(g.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)(()=>{fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="))).then(e=>e.json()).then(e=>{l(e.cast)})},[]),r.a.createElement(Q.a,null,c&&c.map(e=>r.a.createElement(Q.a.Item,{key:e.cast_id,style:{minHeight:"370px",maxHeight:"600px"}},r.a.createElement(m.b,{to:"/people/".concat(e.id)},r.a.createElement("img",{className:"d-block w-100 ",alt:"cast",style:{opacity:0},src:"https://mcdn.wallpapersafari.com/medium/50/19/l7d5Aq.png"}),r.a.createElement(Q.a.Caption,{className:"text-dark"},r.a.createElement("img",{className:"d-block mx-auto img-fluid",alt:"cast",style:{width:"110px",height:"auto",borderRadius:"15px"},src:"".concat("https://image.tmdb.org/t/p/original"+e.profile_path),onError:e=>{e.target.src="https://www.pinclipart.com/picdir/big/195-1955082_theatre-mask-icon-clipart.png"}}),r.a.createElement("h3",{className:"mt-2 display-3",style:{fontSize:"1.5rem"}},e.name),r.a.createElement("h6",null,e.character))))))}function A({currentMovie:e}){const t="https://image.tmdb.org/t/p/original"+e.poster_path;return r.a.createElement("div",{fluid:"md",className:"movie-page-style w-100"},r.a.createElement("img",{src:t,alt:"movie",className:"mx-auto",style:{borderRadius:"15px",width:"80%",height:"auto"}}))}function U({currentMovie:e}){return r.a.createElement("div",null,e.genres&&e.genres.map(e=>r.a.createElement(w.a,{className:"ml-2",variant:R(),key:"".concat(e.id),style:{fontSize:"0.85rem"}},e.name)))}let J=-1;function R(){J++;let e=["primary","secondary","dark","info","danger","success"];return J<e.length||(J=0),e[J]}function B({currentMovie:e,movieId:t}){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{className:"w-100"},r.a.createElement(M.a,{lg:"4",className:"movie-page-style"},r.a.createElement(A,{currentMovie:e})),r.a.createElement(M.a,{lg:"4",className:"movie-page-style",style:{justifyContent:"space-around"}},r.a.createElement("h3",{className:"text-center display-3 my-3",style:{fontSize:"3rem"}},"Overview:"),r.a.createElement("p",null,e.overview),r.a.createElement("div",null,r.a.createElement(w.a,{variant:"primary",style:{fontSize:"0.85rem"}},Z(e.release_date)),r.a.createElement(w.a,{variant:"warning",className:"ml-2",style:{fontSize:"0.85rem"}},"Rating :",e.vote_average)),r.a.createElement(U,{currentMovie:e})),r.a.createElement(M.a,{lg:"4",className:"movie-page-style mx-auto",style:{width:"450px"}},r.a.createElement("h3",{className:"text-center display-3 m-0 mt-3",style:{fontSize:"3rem"}},"Cast"),r.a.createElement(Y,{movieId:t}))))}function V(){const e=Object(n.useState)("e"),t=Object(g.a)(e,2),a=t[0],c=t[1],l=Object(p.h)().movieId;return Object(n.useEffect)(()=>{fetch("\n    https://api.themoviedb.org/3/movie/".concat(l,"?api_key=").concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="),"&language=en-US")).then(e=>e.json()).then(e=>{c(e)})},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"w-100 movie-page-style"},r.a.createElement(D.a,{className:"movie-page-style my-4 mx-0 p-0 w-100"},r.a.createElement("h1",{className:"text-center my-5",style:{fontSize:"3rem"}},a.title),r.a.createElement(z.a,{className:"w-100"},r.a.createElement(M.a,{lg:"12",className:"d-flex flex-column justify-content-center align-items-center p-0"},r.a.createElement(B,{currentMovie:a,movieId:l})))),r.a.createElement(D.a,{className:"movie-page-style my-5 mx-auto p-0"},r.a.createElement(z.a,{className:"w-100 h-100"},r.a.createElement(M.a,{className:"m-auto"},r.a.createElement(C,{movieId:l}))))))}var H=a(75);a(67);function q(){const e=Object(n.useState)(),t=Object(g.a)(e,2),a=t[0],c=t[1],l=Object(p.f)(),m=Object(p.h)().castId;return Object(n.useEffect)(()=>{(function(e){return fetch("https://api.themoviedb.org/3/person/".concat(e,"?api_key=").concat(atob("ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="),"&language=en-US")).then(e=>e.json())})(m).then(e=>{c(e)})},[]),r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(D.a,null,r.a.createElement(z.a,null,a.profile_path&&r.a.createElement(M.a,{lg:"5",className:"actor-image-container"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original"+a.profile_path,alt:"actor",className:"actor-image"})),r.a.createElement(M.a,{lg:"7",className:"actor-info-container m-auto"},r.a.createElement(H.a,{className:"actor-info-container mx-auto my-3 py-5"},r.a.createElement("h1",{className:"display-3 mb-3 actor-name"},a.name),r.a.createElement("div",{className:"align-self-md-start"},a.birthday&&r.a.createElement("p",null,"Date of birth:"," ",r.a.createElement(w.a,{className:"actor-badge",variant:"light"},Z(a.birthday))),a.place_of_birth&&r.a.createElement("p",null,"Born in:"," ",r.a.createElement(w.a,{className:"actor-badge",variant:"light"},a.place_of_birth)),a.known_for_department&&r.a.createElement("p",null,"Known for:"," ",r.a.createElement(w.a,{className:"actor-badge",variant:"light"},a.known_for_department))),a.biography&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"mb-3"},"Biography"),r.a.createElement("p",null,a.biography)),r.a.createElement(u.a,{className:"mt-3",onClick:()=>l.goBack(),variant:"light"},"Go Back To Movie"))))))}function G(){const e=Object(n.useContext)(f),t=Object(g.a)(e,2)[1],a=Object(p.g)().search,c=new URLSearchParams(a).get("query");return Object(n.useEffect)(()=>{b(c).then(e=>{t({type:"SET_MOVIES",moviesList:e.results})})},[c]),r.a.createElement(L,null)}function P(){return r.a.createElement(y,null,r.a.createElement(N,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:L}),r.a.createElement(p.a,{path:"/movie/:movieId",component:V}),r.a.createElement(p.a,{path:"/people/:castId",component:q}),r.a.createElement(p.a,{exact:!0,path:"/search",component:G})))}const K=document.getElementById("root");l.a.render(r.a.createElement(m.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null))),K)}},[[54,1,2]]]);
//# sourceMappingURL=main.6b2eb6bb.chunk.js.map
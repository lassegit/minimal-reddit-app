(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,n,t){e.exports=t(46)},46:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),o=t.n(c),u=t(50),l=t(51),i=t(47),s=t(7),m=t(8),d=t(9),p=t(11),f=t(10),b=t(12),h=t(2),v=t(3),E=t(49),g=t(44);function O(){var e=Object(h.a)(["\n  ","\n"]);return O=function(){return e},e}function j(){var e=Object(h.a)(["\n  ","\n"]);return j=function(){return e},e}function y(){var e=Object(h.a)(["\n  ","\n"]);return y=function(){return e},e}function S(){var e=Object(h.a)(["\n      font-size: 18px;\n    "]);return S=function(){return e},e}function x(){var e=Object(h.a)(["\n  color: #1d97ff;\n  text-decoration: none;\n  &:visited {\n    color: #125d9c;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  ","\n"]);return x=function(){return e},e}var k=Object(v.b)(x(),function(e){return e.large&&Object(v.b)(S())}),w=Object(v.c)(E.a)(y(),k),_=Object(v.c)(g.a)(j(),k),C=v.c.a(O(),k),M=function(e){var n=e.type;return"a"===n?a.a.createElement(C,e):"nav"===n?a.a.createElement(w,e):a.a.createElement(_,e)};M.defaultProps={type:"link"};var R=M;function L(){var e=Object(h.a)(["\n  color: '#f2f2f2';\n  line-height: 23px;\n  white-space: pre-line;\n"]);return L=function(){return e},e}var T=v.c.p(L());function U(){var e=Object(h.a)(["\n  margin-right: 10px;\n"]);return U=function(){return e},e}function D(){var e=Object(h.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: -10px 0 5px 0;\n  font-size: 12px;\n"]);return D=function(){return e},e}function F(){var e=Object(h.a)(["\n  display: block;\n  margin: 15px 0;\n  padding: 15px 0;\n  border-bottom: 1px dashed #ddd;\n"]);return F=function(){return e},e}var P=v.c.div(F()),B=v.c.ul(D()),N=v.c.li(U()),z=function(e){var n=e.comment;return a.a.createElement(P,null,a.a.createElement(T,null,n.body),a.a.createElement(B,null,a.a.createElement(N,null,a.a.createElement(R,{href:"https://old.reddit.com/".concat(n.permalink),target:"_blank",type:"a"},"permalink"))))};function A(){var e=Object(h.a)(["\n  flex: 0 1 700px;\n  margin-left: 200px;\n"]);return A=function(){return e},e}function I(){var e=Object(h.a)(["\n  width: 200px;\n  overflow: hidden;\n  position: fixed;\n  top: 25px;\n  left: 15px;\n"]);return I=function(){return e},e}function J(){var e=Object(h.a)(["\n  display: flex;\n"]);return J=function(){return e},e}var Q=v.c.div(J()),V=v.c.div(I()),W=v.c.div(A()),G=function(e){var n=e.column1,t=e.column2;return a.a.createElement(Q,null,n&&a.a.createElement(V,null,n),t&&a.a.createElement(W,null,t))};G.defaultProps={column1:null,column2:null};var H=G;function $(){var e=Object(h.a)(["\n  background-color: #808080;\n  border-color: #808080;\n  color: #000;\n  border-radius: 2px;\n  padding: 2px 4px;\n"]);return $=function(){return e},e}var q=v.c.button($()),K=function(e){return a.a.createElement(q,e)};function X(){var e=Object(h.a)(["\n  border-radius: 2px;\n  padding: 3px 4px;\n  border: none;\n"]);return X=function(){return e},e}var Y=v.c.input(X()),Z=function(e){function n(){var e;return Object(m.a)(this,n),(e=Object(p.a)(this,Object(f.a)(n).call(this))).state={value:""},e}return Object(b.a)(n,e),Object(d.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var n=this.props.dispatch,t=this.state.value;t&&(n({type:"SUB_ADD",sub:t}),this.setState({value:""}))}},{key:"render",value:function(){var e=this,n=this.state.value;return a.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},a.a.createElement(Y,{type:"text",placeholder:"Add subreddit",value:n,onChange:function(n){return e.setState({value:n.target.value})}})," ",a.a.createElement(K,{type:"submit"},"Add"))}}]),n}(a.a.Component),ee=Object(s.b)()(Z);function ne(){var e=Object(h.a)(["\n  margin: 0 0 5px 0;\n"]);return ne=function(){return e},e}function te(){var e=Object(h.a)(["\n  list-style: none;\n  padding: 0;\n"]);return te=function(){return e},e}var re=v.c.ul(te()),ae=v.c.li(ne()),ce=Object(s.b)(function(e){return{subs:e.sub}})(function(e){var n=e.subs;return a.a.createElement(re,null,n.map(function(e,n){return a.a.createElement(ae,{key:n},a.a.createElement(R,{to:"/r/".concat(e),large:"true"},e)," ")}))});function oe(){var e=Object(h.a)(["\n  ","\n  font-size: 1.7rem;\n"]);return oe=function(){return e},e}function ue(){var e=Object(h.a)(["\n  ","\n  font-size: 2rem;\n"]);return ue=function(){return e},e}function le(){var e=Object(h.a)(["\n  ","\n  font-size: 2.5rem;\n"]);return le=function(){return e},e}var ie="\n  color: #f2f2f2;\n  margin: 0 0 10px 0;\n  line-height: 1.2;\n  font-weight: 200;\n",se=v.c.h1(le(),ie),me=(v.c.h2(ue(),ie),v.c.h3(oe(),ie));function de(){var e=Object(h.a)(["\n  margin-right: 10px;\n"]);return de=function(){return e},e}function pe(){var e=Object(h.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  font-size: 12px;\n"]);return pe=function(){return e},e}var fe=v.c.ul(pe()),be=v.c.li(de()),he=function(e){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e,n,t=this.props,r=t.dispatch,a=t.match;r((e=a.params.sub,n=a.params.id,function(t){return t({type:"COMMENTS_REQUEST"}),fetch("".concat("https://ssl.reddit.com/r","/").concat(e,"/comments/").concat(n,"/comments.json?sort=top")).then(function(e){if(!e.ok)throw new Error("".concat(e.status," error occured."));return e.json()}).then(function(e){return t({type:"COMMENTS_SUCCESS",comments:e})}).catch(function(e){return t({type:"COMMENTS_ERROR",err:e})})}))}},{key:"render",value:function(){var e=this.props,n=e.comments,t=e.post,r=e.isLoading,c=e.error;if(r||c)return a.a.createElement(H,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(ee,null)," ",a.a.createElement(ce,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(T,null,r&&"Loading comments\u2026"),a.a.createElement(T,null,c&&c))});var o=t.title,u=t.permalink,l=t.num_comments;return a.a.createElement(H,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(ee,null)," ",a.a.createElement(ce,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(me,null,o),a.a.createElement(fe,null,a.a.createElement(be,null,l," comments"),a.a.createElement(be,null,a.a.createElement(R,{href:"https://old.reddit.com/".concat(u),target:"_blank",type:"a"},"permalink"))),n.map(function(e){return a.a.createElement(z,{key:e.data.id,comment:e.data})}))})}}]),n}(a.a.Component);he.defaultProps={error:null};var ve=Object(s.b)(function(e){return{comments:e.comment.comments,post:e.comment.post,isLoading:e.comment.isLoading,error:e.comment.error}})(he);function Ee(){var e=Object(h.a)(["\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    background: #292929;\n    color: #f3f3f3;\n    margin: 0;\n    padding: 20px;\n  }\n"]);return Ee=function(){return e},e}var ge=Object(v.a)(Ee()),Oe=t(52),je=function(e){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this.props.sub;if(e.length){var n=e[Math.floor(Math.random()*e.length)];return a.a.createElement(Oe.a,{push:!0,to:"/r/".concat(n)})}return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(ee,null)," ",a.a.createElement(ce,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(se,null,"Casually read the most popular posts on selected subreddits"),a.a.createElement(T,null,"Only posts above a certain popularity are shown and then sorted by date."),a.a.createElement(T,null,"Visited links are slighty darker."))}))}}]),n}(a.a.Component),ye=Object(s.b)(function(e){return{sub:e.sub}})(je);function Se(){var e=Object(h.a)(["\n  margin-right: 10px;\n"]);return Se=function(){return e},e}function xe(){var e=Object(h.a)(["\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin: 5px 0;\n  font-size: 12px;\n"]);return xe=function(){return e},e}function ke(){var e=Object(h.a)(["\n  display: block;\n  margin: 15px 0;\n  padding: 15px 0;\n  border-bottom: 1px dashed #ddd;\n"]);return ke=function(){return e},e}var we=v.c.div(ke()),_e=v.c.ul(xe()),Ce=v.c.li(Se()),Me=function(e){var n=e.post,t=n.id,r=n.subreddit,c=n.url,o=n.title,u=n.created_utc,l=n.domain,i=n.author,s=n.num_comments,m=new Date(1e3*u).toLocaleDateString(navigator.language||navigator.userLanguage,{weekday:"long",year:"2-digit",month:"short",day:"numeric"});return a.a.createElement(we,null,a.a.createElement(R,{href:c,target:"_blank",type:"a",large:!0},o),a.a.createElement(_e,null,a.a.createElement(Ce,null,m),a.a.createElement(Ce,null,a.a.createElement(R,{to:"/comments/".concat(r,"/").concat(t)},"comments (",s,")")),a.a.createElement(Ce,null,a.a.createElement(R,{href:"https://old.reddit.com/user/".concat(i),target:"_blank",type:"a"},i)),a.a.createElement(Ce,null,a.a.createElement(R,{href:"https://old.reddit.com/domain/".concat(l,"/"),type:"a"},l))))},Re=function(e){return function(n){return n({type:"POSTS_REQUEST",sub:e}),fetch("".concat("https://ssl.reddit.com/r","/").concat(e,"/top.json?sort=top&t=week")).then(function(e){if(!e.ok)throw new Error("".concat(e.status," error occured."));return e.json()}).then(function(t){return n({type:"POSTS_SUCCESS",posts:t,sub:e})}).catch(function(t){return n({type:"POSTS_ERROR",err:t,sub:e})})}},Le=function(e){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.dispatch,t=e.match,r=e.sub,a=t.params.id;a!==r&&n(Re(a))}},{key:"componentDidUpdate",value:function(e){var n=this.props,t=n.dispatch,r=n.match,a=n.sub,c=r.params.id;c!==e.match.params.id&&c!==a&&t(Re(c))}},{key:"render",value:function(){var e=this.props,n=e.match,t=e.isLoading,r=e.posts,c=e.dispatch,o=e.error;return a.a.createElement("div",null,a.a.createElement(H,{column1:a.a.createElement(a.a.Fragment,null,a.a.createElement(ee,null)," ",a.a.createElement(ce,null)),column2:a.a.createElement(a.a.Fragment,null,a.a.createElement(me,null,"/r/",n.params.id," ",a.a.createElement(K,{onClick:function(){return c({type:"SUB_REMOVE",sub:n.params.id})}},"Remove")),a.a.createElement(T,null,t&&"Loading"),a.a.createElement(T,null,o&&o),!t&&r.map(function(e,n){return a.a.createElement(Me,{key:n,post:e.data})}))}))}}]),n}(a.a.Component);Le.defaultProps={error:null,sub:""};var Te=Object(s.b)(function(e){return{posts:e.post.posts,sub:e.post.sub,isLoading:e.post.isLoading,error:e.post.error}})(Le),Ue=t(31),De=t(16),Fe=(t(45),t(14)),Pe={comments:[],post:{},isLoading:!0,error:null},Be={posts:[],sub:"",isLoading:!1,error:null},Ne=t(25),ze=[],Ae=Object(De.c)({comment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"COMMENTS_REQUEST":return Object(Fe.a)({},e,{post:{},comments:[],isLoading:!0,error:null});case"COMMENTS_SUCCESS":return Object(Fe.a)({},e,{post:n.comments[0].data.children[0].data,comments:n.comments[1].data.children,isLoading:!1});case"COMMENTS_ERROR":return Object(Fe.a)({},e,{comments:[],isLoading:!1,error:!0});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"POSTS_REQUEST":return Object(Fe.a)({},e,{posts:[],sub:n.sub,isLoading:!0,error:!1});case"POSTS_SUCCESS":var t=n.posts.data.children.sort(function(e,n){return e.data.created_utc-n.data.created_utc}).reverse();return Object(Fe.a)({},e,{posts:t,isLoading:!1});case"POSTS_ERROR":return Object(Fe.a)({},e,{error:n.err.message,isLoading:!1});default:return e}},sub:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SUB_ADD":return Object(Ne.a)(new Set([].concat(Object(Ne.a)(e),[n.sub]))).sort();case"SUB_REMOVE":return e.filter(function(e){return n.sub!==e});case"SUBS_GET":default:return e}}}),Ie=[Ue.a];var Je={sub:JSON.parse(localStorage.getItem("subs")||"[]")},Qe=Object(De.d)(Ae,Je,De.a.apply(void 0,Ie));Qe.subscribe(function(){localStorage.setItem("subs",JSON.stringify(Qe.getState().sub))});var Ve=Qe;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(s.a,{store:Ve},a.a.createElement(u.a,null,a.a.createElement(l.a,null,a.a.createElement(i.a,{path:"/r/:id",component:Te}),a.a.createElement(i.a,{path:"/comments/:sub/:id",component:ve}),a.a.createElement(i.a,{path:"/",exact:!0,component:ye}))),a.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,2,1]]]);
//# sourceMappingURL=main.b1c213a7.chunk.js.map
(this.webpackJsonpf1=this.webpackJsonpf1||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"*national":"\ud83c\uddfa\ud83c\uddf3","germany":"\ud83c\udde9\ud83c\uddea","italy":"\ud83c\uddee\ud83c\uddf9","united_kingdom":"\ud83c\uddec\ud83c\udde7","argentina":"\ud83c\udde6\ud83c\uddf7","switzerland":"\ud83c\udde8\ud83c\udded","france":"\ud83c\uddeb\ud83c\uddf7"}')},20:function(e){e.exports=JSON.parse('{"ferrari":{"id":"ferrari","title":"Scuderia Ferrari","country":"italy","color1":"#ee161f","color2":"#fff200"},"benetton":{"id":"benetton","title":"Benetton Formula","country":"united_kingdom","color1":"#006afd","color2":"#fdfc01"},"mercedes":{"id":"mercedes","title":"Mercedes-Benz","country":"germany","color1":"#f5f6f6","color2":"#0ea7a1"},"mclaren":{"id":"mclaren","title":"McLaren","country":"united_kingdom","color1":"#ff8100","color2":"#9dcde5"},"alfaromeo":{"id":"alfaromeo","title":"Alfa Romeo","country":"switzerland","color1":"#ffffff","color2":"#9d1b32"},"maserati":{"id":"maserati","title":"McLaren","country":"italy","color1":"#d60f1a","color2":"#042853"},"renault":{"id":"renault","title":"Renault","country":"france","color1":"#ecae01","color2":"#000000"},"williams":{"id":"williams","title":"Williams Racing","country":"united_kingdom","color1":"#169be0","color2":"#ffffff"}}')},21:function(e){e.exports=JSON.parse('{"schumacher":{"name":"Michael Schumacher","teams":["benetton","ferrari","mercedes"],"country":"germany","retired":true,"championships":7},"hamilton":{"name":"Lewis Hamilton","teams":["mclaren","mercedes"],"country":"united_kingdom","retired":false,"championships":7},"fangio":{"name":"Juan Manuel Fangio","teams":["alfaromeo","maserati","mercedes","ferrari"],"last":"maserati","country":"argentina","retired":true,"championships":5},"prost":{"name":"Alain Prost","teams":["mclaren","renault","ferrari","williams"],"country":"france","retired":true,"championships":4}}')},32:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),c=r(12),i=r.n(c),l=(r(32),r(11)),o=r(18),s=r(27),u=r(24),d=r.n(u),f=r(3),m=["children","options"],b=function(e){var t=e.children,r=e.options,a=Object(s.a)(e,m),c=Object(n.useRef)();return Object(n.useEffect)((function(){d.a.init(c.current,r)})),Object(f.jsx)("div",Object(o.a)(Object(o.a)({ref:c},a),{},{children:t}))},h=a.a.memo(b),j=function(e){var t=e.children,r=e.flipped,a=Object(n.useState)(!1),c=Object(l.a)(a,2),i=c[0],o=c[1];return Object(n.useEffect)((function(){o(r)}),[r]),Object(f.jsx)("div",{onClick:function(){return o(!i)},className:"bg-transparent w-full h-full perspective-wide",children:Object(f.jsxs)("div",{className:"relative w-full h-full style-preserve-3d transition-transform shadow hover:shadow-lg rounded-lg "+(i?"rotate-y-half":"rotate-y-none"),children:[Object(f.jsx)("div",{className:"absolute w-full h-full rounded-lg overflow-hidden backface-hidden",children:t[0]}),Object(f.jsx)("div",{className:"absolute w-full h-full rotate-y-half rounded-lg overflow-hidden backface-hidden",children:t[1]})]})})},x=a.a.memo(j),p=r(19),v=r(20),O=r(21),y=function(e){return"".concat("/f1","/images/logos/").concat(e,".png")},g=function(e,t){return"".concat("/f1","/images/drivers/").concat(e,"/").concat(t,".png")},w=function(e){var t=e.id,r=e.driver,n=e.team;return Object(f.jsxs)("div",{className:"w-full h-full bg-cover bg-no-repeat bg-center select-none transition-all",style:{backgroundColor:n.color1,backgroundImage:'url("'.concat(g(t,n.id),'")')},children:[Object(f.jsx)("div",{className:"absolute top-0 left-0 h-10 w-20 m-2 opacity-50 flex items-center transition-all",children:Object(f.jsx)("img",{src:y(n.id),alt:n.title,className:"max-w-full max-h-full transition-all"})}),Object(f.jsx)("div",{className:"absolute bottom-0 pb-3",style:{color:n.color1},children:Object(f.jsx)("p",{className:"font-bungee font-black tracking-tighter text-lg",style:{backgroundColor:n.color2},children:r.name.split(" ").map((function(e,t,r){return r.length!==t+1?Object(f.jsx)("span",{className:"text-xs",children:e},t):Object(f.jsx)("span",{children:e.replace(/\|/g," ")},t)}))})}),!1!==r.signature&&Object(f.jsx)("div",{className:"w-12 h-12 flex items-center justify-center absolute right-0 bottom-0 mb-12 mr-5",children:Object(f.jsx)("img",{src:g(t,"signature"),alt:t,className:"signature-filter max-w-full max-h-full"})}),Object(f.jsx)("div",{className:"flex items-center justify-center absolute right-0 top-0 mr-2 text-2xs text-shadow",children:p[r.country]}),Object(f.jsx)("div",{className:"flex flex-row-reverse items-center justify-center absolute right-0 bottom-0 mr-2 text-2xs text-shadow",children:r.championships>0&&Object(f.jsx)("span",{className:"text-yellow-400",children:"\u2605".repeat(r.championships)})})]})},N=a.a.memo(w),k=function(e){var t=e.team;return Object(f.jsx)("div",{className:"relative w-full border-l-4 border-r-4 h-full inline-flex items-center select-none transition-all",style:{backgroundColor:t.color1,borderColor:t.color2},children:Object(f.jsx)("div",{className:"mx-auto h-10 w-24 flex items-center transition-all",children:Object(f.jsx)("img",{src:y(t.id),alt:t.title,className:"max-w-full max-h-full mx-auto transition-all"})})})},S=a.a.memo(k),C=function(e){var t=e.driver,r=e.teams,n=e.setSelectedTeam,a=e.selectedTeam;return Object(f.jsx)("div",{className:"overflow-x-hidden h-full scrollbar-hide transition-all",children:t.teams.map((function(e){var t=r[e];return Object(f.jsx)("div",{onClick:function(){return n(e)},className:"w-8 h-8 p-1 flex items-center cursor-pointer transition-all "+(a===e?"":"filter-grayscale hover:filter-none opacity-25 hover:opacity-100"),children:Object(f.jsx)("img",{src:y(t.id),alt:t.title,className:"max-w-full max-h-full mx-auto"})},e)}))})},I=a.a.memo(C),T=function(e){var t=e.id,r=e.driver,a=e.teamId,c=e.teams,i=e.flipped,o=Object(n.useState)(a),s=Object(l.a)(o,2),u=s[0],d=s[1];Object(n.useEffect)((function(){d(a)}),[a]);var m=c[u];return Object(f.jsxs)("div",{className:"flex my-2 h-64",children:[Object(f.jsx)(h,{className:"w-48 h-64 z-10",options:{max:10,speed:300,scale:1.05,gyroscope:!1,glare:!0,"max-glare":.4},children:Object(f.jsxs)(x,{flipped:i,children:[Object(f.jsx)(N,{id:t,driver:r,team:m}),Object(f.jsx)(S,{driver:r,team:m})]})}),Object(f.jsx)(I,{driver:r,team:m,teams:c,setSelectedTeam:d,selectedTeam:u})]})},L=a.a.memo(T),M=r(15),A=r.n(M),R=r(17),E=function(e){var t=e.search,r=e.team,n=e.drivers,a=e.teams,c=e.sort,i=e.direction,l=e.preference,o=e.flipped,s=e.country,u=Object.keys(n).map((function(e){var t=n[e];return t.id=e,t})).filter((function(e){return!s||e.country===s})).filter((function(e){return!r||e.teams.includes(r)})).filter((function(e){return!t||e.id.includes(t.toLowerCase().replace(" ",""))||e.name.toLowerCase().includes(t.toLowerCase())||A()(e.name.toLowerCase()).includes(t.toLowerCase())||e.number===parseInt(t)})).sort((function(e,t){var r=e.name.split(" "),n=t.name.split(" "),a=A()(r[r.length-1]).toLowerCase(),i=A()(n[n.length-1]).toLowerCase(),l=0,o=0;return"COUNTRY"===c&&(a=e.country+a,i=t.country+i),"CHAMPIONSHIPS"===c&&(l=e.championships,o=t.championships),l>o?-1:l<o||e.ca>i?1:a<i?-1:0}));return i&&u.reverse(),Object(f.jsx)("div",{className:"bg-gray-800 px-2 py-2 mt-4",children:Object(f.jsx)("div",{style:{minHeight:"250px"},className:"border-4 border-white rounded-lg border-dashed px-6 py-5 relative overflow-hidden",children:u.length>0?Object(f.jsx)(R.a,{disableHeight:!0,children:function(e){var t=e.width,c=Math.floor(t/224),i=Math.ceil(u.length/c);return Object(f.jsx)(R.b,{className:"focus:outline-none",width:t,height:i>1?528:264,rowCount:i,rowHeight:264,rowRenderer:function(e){var t=e.key,i=e.index,s=e.style;return Object(f.jsx)("div",{style:s,className:"flex items-center justify-center",children:u.slice(i*c,i*c+c).map((function(e){var t="FIRST"===l?e.teams[0]:"LAST"===l?e.last?e.last:e.teams[e.teams.length-1]:r||e.teams[0];return Object(f.jsx)(L,{id:e.id,driver:n[e.id],teamId:t,teams:a,flipped:o},e.id)}))},t)}})}}):Object(f.jsxs)("div",{className:"text-center absolute w-full h-full top-0 left-0 flex-wrap text-green-500 flex flex-col justify-center items-center font-bungee font-bold",children:[Object(f.jsx)("div",{className:"text-5xl leading-none",children:"No drivers found"}),Object(f.jsx)("div",{className:"text-lg",children:"Change filters criteria for other results"})]})})})},F=a.a.memo(E),H=function(e){var t=e.search,r=e.setSearch,a=Object(n.useRef)();return Object(f.jsx)("div",{className:"px-6 py-3 flex",children:Object(f.jsxs)("div",{className:"relative flex items-center justify-center",children:[Object(f.jsx)("input",{ref:a,placeholder:"Search by name or number...",className:"font-bungee text-lg font-bold p-2 focus:bg-cyan-400 outline-none placeholder-cyan-600 focus:text-white focus:placeholder-cyan-200 "+(t?"text-white bg-cyan-400":"bg-transparent text-cyan-600"),value:t,onChange:function(e){return r(e.target.value)}}),t&&Object(f.jsx)("button",{onClick:function(){r(""),a.current.focus()},className:"text-cyan-300 hover:text-cyan-200 font-bold text-xl absolute w-8 h-8 right-0 mr-1",children:"\xd7"})]})})},P=a.a.memo(H),J=function(e){var t=e.team,r=e.setTeam,n=e.teams,a=e.flags,c=e.drivers,i=e.country,o=e.setCountry,s=[];Object.entries(c).forEach((function(e){var t=Object(l.a)(e,2)[1];s.includes(t.country)||s.push(t.country)}));var u={"*national":s.sort((function(e,t){return e>t?1:e<t?-1:0}))};return Object.entries(n).forEach((function(e){var t=Object(l.a)(e,2)[1];u[t.country]||(u[t.country]=[]),u[t.country].push(t)})),Object(f.jsx)("div",{className:"px-6 overflow-x-auto scrollbar-hide flex flex-nowrap",children:Object.keys(u).sort((function(e,t){return e>t?1:e<t?-1:0})).map((function(e){var n=u[e];return Object(f.jsxs)("div",{className:"inline-block m-1",children:[Object(f.jsx)("div",{className:"text-lg pb-1 text-center border-b border-dashed border-cyan-200",children:a[e]}),"*national"===e?Object(f.jsx)("div",{className:"w-48 h-32 scrollbar-hide justify-center overflow-auto pt-3 flex flex-wrap",children:n.map((function(e){return Object(f.jsx)("div",{title:e,onClick:function(){return o(i===e?null:e)},className:"inline-flex items-center justify-center m-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full "+(i===e?"border-cyan-400":"border-transparent bg-cyan-200 hover:bg-cyan-300"),children:a[e]},e)}))}):Object(f.jsx)("div",{className:"w-48 h-32 scrollbar-hide justify-center overflow-auto pt-3 flex flex-wrap",children:n.sort((function(e,t){var r=(e.country||"1")+e.title,n=(t.country||"1")+t.title;return r>n?1:r<n?-1:0})).map((function(e){return Object(f.jsx)("div",{title:e.title,onClick:function(){return r(t===e.id?null:e.id)},className:"inline-flex items-center m-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full "+(t===e.id?"border-cyan-400":"border-transparent bg-cyan-200 hover:bg-cyan-300"),children:Object(f.jsx)("img",{src:y(e.id),alt:e.title,className:"max-h-full max-w-full mx-auto"})},e.id)}))})]},e)}))})},z=a.a.memo(J),_=["NAME","COUNTRY","CHAMPIONSHIPS"],B=function(e){var t=e.sort,r=e.setSort,n=e.direction,a=e.setDirection;return Object(f.jsxs)("div",{className:"font-bungee px-6 py-3 flex flex-wrap",children:[Object(f.jsx)("div",{onClick:function(){return a(!n)},className:"hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer",children:n?"\u25b2":"\u25bc"}),_.map((function(e){return Object(f.jsx)("div",{onClick:function(){return r(e)},className:"inline-flex text-base items-center font-bold px-2 cursor-pointer "+(t===e?"text-white bg-cyan-400":"hover:bg-cyan-200 text-cyan-600"),children:e},e)}))]})},W=a.a.memo(B),D=function(e){var t=e.flipped,r=e.setFlipped,n=e.setPreference;return Object(f.jsxs)("div",{className:"font-bungee px-6 pt-3 flex flex-wrap justify-end",children:[Object(f.jsx)("div",{className:"outline-none hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer",onClick:function(){return n("FIRST")},children:"FIRST"}),Object(f.jsx)("div",{className:"outline-none hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer",onClick:function(){return n("LAST")},children:"LAST"}),Object(f.jsx)("div",{className:"outline-none hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer",onClick:function(){return r(!t)},children:"FLIP"})]})},Y=a.a.memo(D),U=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(),i=Object(l.a)(c,2),o=i[0],s=i[1],u=Object(n.useState)(),d=Object(l.a)(u,2),m=d[0],b=d[1],h=Object(n.useState)("NAME"),j=Object(l.a)(h,2),x=j[0],y=j[1],g=Object(n.useState)(!1),w=Object(l.a)(g,2),N=w[0],k=w[1],S=Object(n.useState)(),C=Object(l.a)(S,2),I=C[0],T=C[1],L=Object(n.useState)(!1),M=Object(l.a)(L,2),A=M[0],R=M[1];return Object(f.jsxs)("div",{className:"w-full h-full",children:[Object(f.jsx)("div",{className:"z-50 font-bungee bg-cyan-600 text-white text-base font-bold fixed bottom-0 right-0",children:"I DO NOT OWN ANY IMAGE"}),Object(f.jsx)(P,{search:r,setSearch:a}),Object(f.jsx)(z,{teams:v,team:o,setTeam:s,flags:p,drivers:O,country:m,setCountry:b}),Object(f.jsx)(W,{sort:x,setSort:y,direction:N,setDirection:k}),Object(f.jsx)(Y,{flipped:A,setFlipped:R,setPreference:T}),Object(f.jsx)(F,{drivers:O,teams:v,search:r,team:o,sort:x,direction:N,preference:I,flipped:A,country:m})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(f.jsx)(U,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.1872422e.chunk.js.map
(this.webpackJsonpf1=this.webpackJsonpf1||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"*national":"\ud83c\uddfa\ud83c\uddf3","germany":"\ud83c\udde9\ud83c\uddea","italy":"\ud83c\uddee\ud83c\uddf9","unitedkingdom":"\ud83c\uddec\ud83c\udde7"}')},20:function(e){e.exports=JSON.parse('{"ferrari":{"id":"ferrari","title":"Scuderia Ferrari","country":"italy","color1":"#ee161f","color2":"#fff200"},"benetton":{"id":"benetton","title":"Benetton Formula","country":"unitedkingdom","color1":"#006afd","color2":"#fdfc01"},"mercedes":{"id":"mercedes","title":"Mercedes-Benz","country":"germany","color1":"#f5f6f6","color2":"#0ea7a1"},"mclaren":{"id":"mclaren","title":"McLaren","country":"unitedkingdom","color1":"#ff8100","color2":"#9dcde5"}}')},21:function(e){e.exports=JSON.parse('{"schumacher":{"name":"Michael Schumacher","teams":["benetton","ferrari","mercedes"],"country":"germany","retired":true,"championships":7},"hamilton":{"name":"Lewis Hamilton","teams":["mclaren","mercedes"],"country":"unitedkingdom","retired":false,"championships":7}}')},32:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(12),s=r.n(a),i=(r(32),r(11)),l=r(18),o=r(27),d=r(24),u=r.n(d),f=r(3),m=["children","options"],b=function(e){var t=e.children,r=e.options,c=Object(o.a)(e,m),a=Object(n.useRef)();return Object(n.useEffect)((function(){u.a.init(a.current,r)})),Object(f.jsx)("div",Object(l.a)(Object(l.a)({ref:a},c),{},{children:t}))},h=c.a.memo(b),j=function(e){var t=e.children,r=e.flipped,c=Object(n.useState)(!1),a=Object(i.a)(c,2),s=a[0],l=a[1];return Object(n.useEffect)((function(){l(r)}),[r]),Object(f.jsx)("div",{onClick:function(){return l(!s)},className:"bg-transparent w-full h-full perspective-wide",children:Object(f.jsxs)("div",{className:"relative w-full h-full style-preserve-3d transition-transform shadow hover:shadow-lg rounded-lg "+(s?"rotate-y-half":"rotate-y-none"),children:[Object(f.jsx)("div",{className:"absolute w-full h-full rounded-lg overflow-hidden backface-hidden",children:t[0]}),Object(f.jsx)("div",{className:"absolute w-full h-full rotate-y-half rounded-lg overflow-hidden backface-hidden",children:t[1]})]})})},x=c.a.memo(j),p=r(19),v=r(20),O=r(21),g=function(e){return"".concat("/f1","/images/logos/").concat(e,".png")},y=function(e,t){return"".concat("/f1","/images/drivers/").concat(e,"/").concat(t,".png")},w=function(e){var t=e.id,r=e.driver,n=e.team;return Object(f.jsxs)("div",{className:"w-full h-full bg-cover bg-no-repeat bg-center select-none transition-all",style:{backgroundColor:n.color1,backgroundImage:'url("'.concat(y(t,n.id),'")')},children:[Object(f.jsx)("div",{className:"absolute top-0 left-0 h-10 w-20 m-2 opacity-50 flex items-center transition-all",children:Object(f.jsx)("img",{src:g(n.id),alt:n.title,className:"max-w-full max-h-full transition-all"})}),Object(f.jsx)("div",{className:"absolute bottom-0 pb-3",style:{color:n.color1},children:Object(f.jsx)("p",{className:"font-bungee font-black tracking-tighter text-lg",style:{backgroundColor:n.color2},children:r.name.split(" ").map((function(e,t,r){return r.length!==t+1?Object(f.jsx)("span",{className:"text-xs",children:e},t):Object(f.jsx)("span",{children:e.replace(/\|/g," ")},t)}))})}),!1!==r.signature&&Object(f.jsx)("div",{className:"w-12 h-12 flex items-center justify-center absolute right-0 bottom-0 mb-12 mr-5",children:Object(f.jsx)("img",{src:y(t,"signature"),alt:t,className:"signature-filter max-w-full max-h-full"})}),Object(f.jsx)("div",{className:"flex items-center justify-center absolute right-0 top-0 mr-2 text-2xs text-shadow",children:p[r.country]}),Object(f.jsx)("div",{className:"flex flex-row-reverse items-center justify-center absolute right-0 bottom-0 mr-2 text-2xs text-shadow",children:r.championships>0&&Object(f.jsx)("span",{className:"text-yellow-400",children:"\u2605".repeat(r.championships)})})]})},N=c.a.memo(w),S=function(e){var t=e.team;return Object(f.jsx)("div",{className:"relative w-full border-l-4 border-r-4 h-full inline-flex items-center select-none transition-all",style:{backgroundColor:t.color1,borderColor:t.color2},children:Object(f.jsx)("div",{className:"mx-auto h-10 w-24 flex items-center transition-all",children:Object(f.jsx)("img",{src:g(t.id),alt:t.title,className:"max-w-full max-h-full mx-auto transition-all"})})})},k=c.a.memo(S),C=function(e){var t=e.driver,r=e.teams,n=e.setSelectedTeam,c=e.selectedTeam;return Object(f.jsx)("div",{className:"overflow-x-hidden h-full scrollbar-hide transition-all",children:t.teams.map((function(e){var t=r[e];return Object(f.jsx)("div",{onClick:function(){return n(e)},className:"w-8 h-8 p-1 flex items-center cursor-pointer transition-all "+(c===e?"":"filter-grayscale hover:filter-none opacity-25 hover:opacity-100"),children:Object(f.jsx)("img",{src:g(t.id),alt:t.title,className:"max-w-full max-h-full mx-auto"})},e)}))})},I=c.a.memo(C),T=function(e){var t=e.id,r=e.driver,c=e.teamId,a=e.teams,s=e.flipped,l=Object(n.useState)(c),o=Object(i.a)(l,2),d=o[0],u=o[1];Object(n.useEffect)((function(){u(c)}),[c]);var m=a[d];return Object(f.jsxs)("div",{className:"flex my-2 h-64",children:[Object(f.jsx)(h,{className:"w-48 h-64 z-10",options:{max:10,speed:300,scale:1.05,gyroscope:!1,glare:!0,"max-glare":.4},children:Object(f.jsxs)(x,{flipped:s,children:[Object(f.jsx)(N,{id:t,driver:r,team:m}),Object(f.jsx)(k,{driver:r,team:m})]})}),Object(f.jsx)(I,{driver:r,team:m,teams:a,setSelectedTeam:u,selectedTeam:d})]})},L=c.a.memo(T),M=r(15),A=r.n(M),E=r(17),F=function(e){var t=e.search,r=e.team,n=e.drivers,c=e.teams,a=e.sort,s=e.direction,i=e.preference,l=e.flipped,o=e.country,d=Object.keys(n).map((function(e){var t=n[e];return t.id=e,t})).filter((function(e){return!o||e.country===o})).filter((function(e){return!r||e.teams.includes(r)})).filter((function(e){return!t||e.id.includes(t.toLowerCase().replace(" ",""))||e.name.toLowerCase().includes(t.toLowerCase())||A()(e.name.toLowerCase()).includes(t.toLowerCase())||e.number===parseInt(t)})).sort((function(e,t){var r=e.name.split(" "),n=t.name.split(" "),c=A()(r[r.length-1]).toLowerCase(),s=A()(n[n.length-1]).toLowerCase();return"COUNTRY"===a&&(c=e.country+c,s=t.country+s),"CHAMPIONSHIPS"===a&&(c=e.championships+c,s=t.championships+s),e.ca>s?1:c<s?-1:0}));return s&&d.reverse(),Object(f.jsx)("div",{className:"bg-gray-800 px-2 py-2 mt-4",children:Object(f.jsx)("div",{style:{minHeight:"250px"},className:"border-4 border-white rounded-lg border-dashed px-6 py-5 relative overflow-hidden",children:d.length>0?Object(f.jsx)(E.a,{disableHeight:!0,children:function(e){var t=e.width,a=Math.floor(t/224),s=Math.ceil(d.length/a);return Object(f.jsx)(E.b,{className:"focus:outline-none",width:t,height:s>1?528:264,rowCount:s,rowHeight:264,rowRenderer:function(e){var t=e.key,s=e.index,o=e.style;return Object(f.jsx)("div",{style:o,className:"flex items-center justify-center",children:d.slice(s*a,s*a+a).map((function(e){var t="FIRST"===i?e.teams[0]:"LAST"===i?e.last?e.last:e.teams[e.teams.length-1]:r||e.teams[0];return Object(f.jsx)(L,{id:e.id,driver:n[e.id],teamId:t,teams:c,flipped:l},e.id)}))},t)}})}}):Object(f.jsxs)("div",{className:"text-center absolute w-full h-full top-0 left-0 flex-wrap text-green-500 flex flex-col justify-center items-center font-bungee font-bold",children:[Object(f.jsx)("div",{className:"text-5xl leading-none",children:"No drivers found"}),Object(f.jsx)("div",{className:"text-lg",children:"Change filters criteria for other results"})]})})})},H=c.a.memo(F),R=function(e){var t=e.search,r=e.setSearch,c=Object(n.useRef)();return Object(f.jsx)("div",{className:"px-6 py-3 flex",children:Object(f.jsxs)("div",{className:"relative flex items-center justify-center",children:[Object(f.jsx)("input",{ref:c,placeholder:"Search by name or number...",className:"font-bungee text-lg font-bold p-2 focus:bg-cyan-400 outline-none placeholder-cyan-600 focus:text-white focus:placeholder-cyan-200 "+(t?"text-white bg-cyan-400":"bg-transparent text-cyan-600"),value:t,onChange:function(e){return r(e.target.value)}}),t&&Object(f.jsx)("button",{onClick:function(){r(""),c.current.focus()},className:"text-cyan-300 hover:text-cyan-200 font-bold text-xl absolute w-8 h-8 right-0 mr-1",children:"\xd7"})]})})},P=c.a.memo(R),J=function(e){var t=e.team,r=e.setTeam,n=e.teams,c=e.flags,a=e.drivers,s=e.country,l=e.setCountry,o=[];Object.entries(a).forEach((function(e){var t=Object(i.a)(e,2)[1];o.includes(t.country)||o.push(t.country)}));var d={"*national":o.sort((function(e,t){return e>t?1:e<t?-1:0}))};return Object.entries(n).forEach((function(e){var t=Object(i.a)(e,2)[1];d[t.country]||(d[t.country]=[]),d[t.country].push(t)})),Object(f.jsx)("div",{className:"px-6 overflow-x-auto scrollbar-hide flex flex-nowrap",children:Object.keys(d).sort((function(e,t){return e>t?1:e<t?-1:0})).map((function(e){var n=d[e];return Object(f.jsxs)("div",{className:"inline-block m-1",children:[Object(f.jsx)("div",{className:"text-lg pb-1 text-center border-b border-dashed border-cyan-200",children:c[e]}),"*national"===e?Object(f.jsx)("div",{className:"w-48 h-32 scrollbar-hide justify-center overflow-auto pt-3 flex flex-wrap",children:n.map((function(e){return Object(f.jsx)("div",{title:e,onClick:function(){return l(s===e?null:e)},className:"inline-flex items-center justify-center m-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full "+(s===e?"border-cyan-400":"border-transparent bg-cyan-200 hover:bg-cyan-300"),children:c[e]},e)}))}):Object(f.jsx)("div",{className:"w-48 h-32 scrollbar-hide justify-center overflow-auto pt-3 flex flex-wrap",children:n.sort((function(e,t){var r=(e.country||"1")+e.title,n=(t.country||"1")+t.title;return r>n?1:r<n?-1:0})).map((function(e){return Object(f.jsx)("div",{title:e.title,onClick:function(){return r(t===e.id?null:e.id)},className:"inline-flex items-center m-1 w-12 h-12 p-2 border-2 cursor-pointer rounded-full "+(t===e.id?"border-cyan-400":"border-transparent bg-cyan-200 hover:bg-cyan-300"),children:Object(f.jsx)("img",{src:g(e.id),alt:e.title,className:"max-h-full max-w-full mx-auto"})},e.id)}))})]},e)}))})},B=c.a.memo(J),z=["NAME","COUNTRY","CHAMPIONSHIPS"],D=function(e){var t=e.sort,r=e.setSort,n=e.direction,c=e.setDirection;return Object(f.jsxs)("div",{className:"font-bungee px-6 py-3 flex flex-wrap",children:[Object(f.jsx)("div",{onClick:function(){return c(!n)},className:"hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer",children:n?"\u25b2":"\u25bc"}),z.map((function(e){return Object(f.jsx)("div",{onClick:function(){return r(e)},className:"inline-flex text-base items-center font-bold px-2 cursor-pointer "+(t===e?"text-white bg-cyan-400":"hover:bg-cyan-200 text-cyan-600"),children:e},e)}))]})},W=c.a.memo(D),Y=function(e){var t=e.flipped,r=e.setFlipped,n=e.setPreference;return Object(f.jsxs)("div",{className:"font-bungee px-6 pt-3 flex flex-wrap justify-end",children:[Object(f.jsx)("div",{className:"outline-none hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer",onClick:function(){return n("FIRST")},children:"FIRST"}),Object(f.jsx)("div",{className:"outline-none hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer",onClick:function(){return n("LAST")},children:"LAST"}),Object(f.jsx)("div",{className:"outline-none hover:bg-cyan-200 text-cyan-600 inline-flex text-base items-center font-bold px-2 cursor-pointer",onClick:function(){return r(!t)},children:"FLIP"})]})},U=c.a.memo(Y),G=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(),s=Object(i.a)(a,2),l=s[0],o=s[1],d=Object(n.useState)(),u=Object(i.a)(d,2),m=u[0],b=u[1],h=Object(n.useState)("NAME"),j=Object(i.a)(h,2),x=j[0],g=j[1],y=Object(n.useState)(!1),w=Object(i.a)(y,2),N=w[0],S=w[1],k=Object(n.useState)(),C=Object(i.a)(k,2),I=C[0],T=C[1],L=Object(n.useState)(!1),M=Object(i.a)(L,2),A=M[0],E=M[1];return Object(f.jsxs)("div",{className:"w-full h-full",children:[Object(f.jsx)("div",{className:"z-50 font-bungee bg-cyan-600 text-white text-base font-bold fixed bottom-0 right-0",children:"I DO NOT OWN ANY IMAGE"}),Object(f.jsx)(P,{search:r,setSearch:c}),Object(f.jsx)(B,{teams:v,team:l,setTeam:o,flags:p,drivers:O,country:m,setCountry:b}),Object(f.jsx)(W,{sort:x,setSort:g,direction:N,setDirection:S}),Object(f.jsx)(U,{flipped:A,setFlipped:E,setPreference:T}),Object(f.jsx)(H,{drivers:O,teams:v,search:r,team:l,sort:x,direction:N,preference:I,flipped:A,country:m})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(f.jsx)(G,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.7d801bba.chunk.js.map
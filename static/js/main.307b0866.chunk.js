(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{101:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},121:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),c=a(82),i=a.n(c);a(101),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102);var l=a(16),o=(a(103),a(11)),m=a(12),d=a(14),p=a(13),u=a(6),h=a(15),k=(a(104),a(37)),g=a.n(k),v=a(177),E=(a(121),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"cardClick",value:function(e){e.target;this.props.history.push("/pokemon/"+this.props.id)}},{key:"renderTypes",value:function(){return this.props.types.map((function(e){return r.a.createElement("div",{key:e.key,className:"type "+e},r.a.createElement("div",{className:"text"},e))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card",onClick:this.cardClick.bind(this)},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("div",{className:"title"},this.props.name)),r.a.createElement("div",{className:"imageContainer"},r.a.createElement("img",{height:"104px",width:"104px",className:"image",alt:"pokemon",src:this.props.image})),r.a.createElement("div",{className:"typeContainer"},this.renderTypes()))}}]),t}(n.Component)),f=Object(l.g)(E),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).search=function(e){"Enter"===e.key&&void 0!==a.searchValue&&(a.URL="https://intern-pokedex.myriadapps.com/api/v1/pokemon?name="+a.searchValue,a.getPokemon(),document.getElementById("closeIcon").style.display="inline-block")},a.state={pokemon:""},a.URL="https://intern-pokedex.myriadapps.com/api/v1/pokemon",a.prevLink="",a.nextLink="",a.leftArrowClick=a.leftArrowClick.bind(Object(u.a)(a)),a.rightArrowClick=a.rightArrowClick.bind(Object(u.a)(a)),a.search=a.search.bind(Object(u.a)(a)),a.onSearchChange=a.onSearchChange.bind(Object(u.a)(a)),a.closeSearch=a.closeSearch.bind(Object(u.a)(a)),document.documentElement.style.setProperty("--primary-color","rgba(85, 166, 156, 1)"),a.getPokemon(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"getPokemon",value:function(){var e=this;g.a.get(this.URL).then((function(t){try{e.prevLink=t.data.links.prev,e.nextLink=t.data.links.next,e.setState({pokemon:r.a.createElement("ul",{className:"cardList"},t.data.data.map((function(e){return r.a.createElement("li",{className:"cardListItem"},r.a.createElement(f,{id:e.id,name:e.name,image:e.image,types:e.types}))})))})}catch(a){console.log(a)}}))}},{key:"leftArrowClick",value:function(){null!==this.prevLink&&(this.URL=this.prevLink,this.getPokemon())}},{key:"rightArrowClick",value:function(){null!==this.nextLink&&(this.URL=this.nextLink,this.getPokemon())}},{key:"onSearchChange",value:function(e){var t=e.target;this.searchValue=t.value}},{key:"closeSearch",value:function(){document.getElementById("search").value="",document.getElementById("closeIcon").style.display="none",this.URL="https://intern-pokedex.myriadapps.com/api/v1/pokemon",this.getPokemon()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Content"},r.a.createElement("div",{className:"navigationPanel"},r.a.createElement("div",{className:"leftArrow",onClick:this.leftArrowClick},r.a.createElement(v.a,{type:"arrow-left"})),r.a.createElement("div",{className:"searchBar"},r.a.createElement("div",{className:"searchIcon"},r.a.createElement(v.a,{type:"search"})),r.a.createElement("input",{type:"text",id:"search",className:"search",placeholder:"Pok\xe9dex",onKeyPress:this.search,onChangeCapture:this.onSearchChange}),r.a.createElement("div",{id:"closeIcon",className:"closeIcon",onClick:this.closeSearch},r.a.createElement(v.a,{type:"close"}))),r.a.createElement("div",{className:"rightArrow",onClick:this.rightArrowClick},r.a.createElement(v.a,{type:"arrow-right"}))),r.a.createElement("div",{className:"cardPanel"},this.state.pokemon))}}]),t}(n.Component),b=(a(167),a(92)),N=a(93),C=(a(168),a(90)),w=a.n(C),O=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(d.a)(this,Object(p.a)(t).call(this,e));var n=new w.a,r=new Image;r.addEventListener("load",(function(){var e=n.getColor(r);document.documentElement.style.setProperty("--primary-color","rgb("+e[0]+","+e[1]+","+e[2]+")")}));var s=a.props.image;return r.crossOrigin="Anonymous",r.src="https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url="+encodeURIComponent(s),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"renderTypes",value:function(){return this.props.types.map((function(e){return r.a.createElement("div",{key:e.key,className:"type "+e},r.a.createElement("div",{className:"text"},e))}))}},{key:"renderStats",value:function(){for(var e=this,t=Object.values(this.props.stats),a=0,n=0;n<t.length;n++)a<t[n]&&(a=t[n]);return r.a.createElement("table",{className:"statTable"},Object.entries(this.props.stats).map((function(t){var n=Object(b.a)(t,2),s=n[0],c=n[1];return r.a.createElement("tr",null,r.a.createElement("td",{className:"statName"},e.getStatHeader(s)),r.a.createElement("td",{className:"statValue"},c),r.a.createElement("td",{className:"statBar"},r.a.createElement(N.a,{now:c,max:a})))})))}},{key:"getStatHeader",value:function(e){switch(e){case"hp":return"HP";case"speed":return"Speed";case"attack":return"Attack";case"defense":return"Defense";case"special-attack":return"Sp Atk";case"special-defense":return"Sp Def"}}},{key:"renderProfile",value:function(){return r.a.createElement("table",{className:"profileTable"},r.a.createElement("tr",null,r.a.createElement("td",{className:"abilityHeader"},"Height:"),r.a.createElement("td",null,this.props.height," m"),r.a.createElement("td",{className:"abilityHeader"},"Weight:"),r.a.createElement("td",null,this.props.weight," kg")),r.a.createElement("tr",null,r.a.createElement("td",{className:"abilityHeader"},"Egg Groups:"),r.a.createElement("td",null,r.a.createElement("ul",null,this.props.eggGroups.map((function(e){return r.a.createElement("li",null,e)})))),r.a.createElement("td",{className:"abilityHeader"},"Abilities:"),r.a.createElement("td",null,r.a.createElement("ul",null,this.props.abilities.map((function(e){return r.a.createElement("li",null,e)}))))))}},{key:"render",value:function(){return r.a.createElement("div",{className:"detailCard"},r.a.createElement("div",{className:"titlePanel"},r.a.createElement("div",{className:"nameContainer"},this.props.name,r.a.createElement("span",{className:"pokedexNumber"},"#",this.props.id)),r.a.createElement("div",{className:"typeContainer"},this.renderTypes())),r.a.createElement("div",{className:"statsPanel"},r.a.createElement("img",{id:"image",height:"130px",width:"130px",className:"image",alt:"pokemon",src:this.props.image}),r.a.createElement("div",{className:"stats"},this.renderStats())),r.a.createElement("div",{className:"descriptionPanel"},r.a.createElement("div",{className:"genus"},this.props.genus),r.a.createElement("div",{className:"description"},this.props.description)),r.a.createElement("div",{className:"profilePanel"},r.a.createElement("div",{className:"profileHeader"},r.a.createElement("span",{className:"profileHeaderText"},"Profile")),this.renderProfile()))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={detailView:""},a.URL="https://intern-pokedex.myriadapps.com/api/v1/pokemon/"+a.props.match.params.id,a.name="",a.leftArrowClick=a.leftArrowClick.bind(Object(u.a)(a)),a.getDetail(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"getDetail",value:function(){var e=this;g.a.get(this.URL).then((function(t){try{e.name=t.data.data.name;var a=t.data.data.image,n=t.data.data.types,s=t.data.data.height,c=t.data.data.weight,i=t.data.data.abilities,l=t.data.data.egg_groups,o=t.data.data.stats,m=t.data.data.genus,d=t.data.data.description;e.setState({PokemonDetail:r.a.createElement(O,{id:e.props.match.params.id,name:e.name,image:a,types:n,height:s,weight:c,abilities:i,eggGroups:l,stats:o,genus:m,description:d})})}catch(p){console.log(p)}}))}},{key:"leftArrowClick",value:function(){this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"detailContent"},r.a.createElement("div",{className:"headerPanel"},r.a.createElement("div",{className:"leftArrow",onClick:this.leftArrowClick},r.a.createElement(v.a,{type:"arrow-left"})),r.a.createElement("div",{className:"header"},this.name)),this.state.PokemonDetail)}}]),t}(n.Component),x=Object(l.g)(j);var P=function(){return r.a.createElement("div",null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:y}),r.a.createElement(l.b,{path:"/pokemon/:id",component:x}),r.a.createElement(l.a,{from:"*",to:"/"})))};i.a.render(r.a.createElement(s.a,{basename:"/Pokedex"},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){e.exports=a(176)}},[[96,1,2]]]);
//# sourceMappingURL=main.307b0866.chunk.js.map
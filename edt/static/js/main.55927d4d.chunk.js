(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(16),l=a.n(s),o=a(15),i=a(18),u=a(19),c=a(22),p=a(20),h=a(21),d=(a(95),a(41)),m=a.n(d),f=a(31),g=a.n(f),v=a(89),b=a.n(v),E=a(32),k=a.n(E),y=[["1A","1B","2A","2B","3A","3B","4A","4B"],["1A","1B","2A","2B","3A","3B","4A","LP"]],C=["1",,"2",,"3",,"4"],O=["1A","2A   LP"],w=[["08h00","09h25"],["09h30","10h55"],["11h05","12h30"],[,],["14h15","15h40"],["15h45","17h10"],["17h15","18h40"]],T=["TOUS"],j=["TOUS"],S=["TOUTES"];var D=new Date;D.setUTCDate(D.getUTCDate()+2);var N=function(e){(e=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))).setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));var t=new Date(Date.UTC(e.getUTCFullYear(),0,1)),a=Math.ceil(((e-t)/864e5+1)/7);return[e.getUTCFullYear(),a]}(D),M=N[0],F=N[1],x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={week:a.props.week,year:a.props.year},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onWeekChanged",value:function(e){var t=this;if(isNaN(e))this.setState({week:e});else{var a=this.state.year;e<2&&(e+=50,a--),e>51&&(e-=50,a++),this.setState({week:e,year:a}),this.changeTimeout&&clearTimeout(this.changeTimeout),this.changeTimeout=setTimeout(function(){t.props.onWeekChanged({week:t.state.week,year:t.state.year})},500)}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(t){return e.onWeekChanged(e.state.week-1)}},n.a.createElement(k.a,null,"arrow_left")),n.a.createElement(b.a,{InputProps:{classes:{root:this.props.isDarkMode?"whiteTxt":""}},className:"input",type:"number",min:"-52",max:"52",value:this.state.week,onChange:function(t){return e.onWeekChanged(Number.parseInt(t.target.value))}}),n.a.createElement("button",{class:"button",onClick:function(t){return e.onWeekChanged(e.state.week+1)}},n.a.createElement(k.a,null,"arrow_right")),n.a.createElement("p",null,"Ann\xe9e : ",n.a.createElement("span",{style:{fontWeight:"bold"}},this.state.year)))}}]),t}(r.Component),U={textAlign:"center"},B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).dayIndexes=["Lun.","Mar.","Mer.","Jeu.","Ven."],a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=1,a=this.props.filter.groups[0].length>0?0:1,r={textAlign:"center",overflow:"hidden"},s=[];console.log(this.props.edt);for(var l=0;l<this.props.edt.length;l++){console.log(l);for(var o=0;o<this.props.edt[l].length;o++)0==o&&(3!=l?s.push(n.a.createElement("div",{className:"promos"},this.props.filter.groups[0].length>0&&n.a.createElement("div",null,n.a.createElement("span",null,O[0])),this.props.filter.groups[1].length>0&&n.a.createElement("div",null,n.a.createElement("span",null,O[1])))):s.push(n.a.createElement("div",null))),3==l?s.push(n.a.createElement(A,{data:this.props.edt[l][o],isMobile:this.props.isMobile})):s.push(n.a.createElement(I,{isDarkMode:this.props.isDarkMode,isFirstTop:0==l||4==l,isFirstLeft:0==o,debug:1==t--,filter:this.props.filter,data:this.props.edt[l][o]})),o==this.props.edt[l].length-1&&s.push(n.a.createElement("div",{className:"heures"},n.a.createElement("div",{className:"start"},w[l][0]),n.a.createElement("div",{className:"end"},w[l][1])))}return n.a.createElement("div",null,n.a.createElement("div",{id:"schedule"},n.a.createElement("div",null),this.dayIndexes.map(function(t,a){return n.a.createElement("div",null,n.a.createElement("h2",{key:t,style:U},t+" "+e.props.days[a]))}),n.a.createElement("div",null),n.a.createElement("div",null),this.dayIndexes.map(function(t){return n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+e.props.filter.groups[a].length+", 1fr)"}},e.props.filter.groups[a].map(function(e){return n.a.createElement("span",{style:r,key:"1A"+t+"-gr"+e},y[a][e])}))}),n.a.createElement("div",null),s,n.a.createElement("div",null),this.props.filter.groups[0].length>0&&this.dayIndexes.map(function(t){return n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+e.props.filter.groups[1].length+", 1fr)"}},e.props.filter.groups[1].map(function(e){return n.a.createElement("span",{style:r,key:"2A"+t+"-gr"+e},y[1][e])}))})))}}]),t}(r.Component),A=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.data;return n.a.createElement("div",{className:"infoCase"},e.length>0&&this.props.isMobile?n.a.createElement("div",{className:"infoButton",onClick:function(){return W.show(e)}},n.a.createElement("span",null,"Infos")):e.map(function(e){return e.url?n.a.createElement("a",{href:e.url,style:{backgroundColor:e.fillColor,color:e.txtColor}},e.txt):n.a.createElement("span",{style:{backgroundColor:e.fillColor,color:e.txtColor}},e.txt)}))}}]),t}(r.Component),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).classes=["case"],e.isDarkMode?a.classes.push("lightBorders"):a.classes.push("darkBorders"),e.isFirstLeft&&a.classes.push("firstLeft"),e.isFirstTop&&a.classes.push("firstTop"),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getOpacity",value:function(e){var t=this.props.filter;return"TOUS"!=t.module&&t.module!=e.module||"TOUS"!=t.profNom&&t.profNom!=e.profNom||"TOUTES"!=t.salle&&t.salle!=e.salle?.3:1}},{key:"render",value:function(){for(var e=this,t=this.props.filter,a=this.props.data,r=0;r<a.length;r++)for(var s=0,l=0;l<a[r].length;l++){var o=a[r][l];o.visible=this.props.filter.groups[r].includes(l);var i=this.props.filter.groups[r].indexOf(l)+1;o.columnStart=i,o.columnEnd=i,o.row=r+1,2==o.row&&0==this.props.filter.groups[0].length&&(o.row=1),0!=l?(o.profNom&&o.visible&&o.profNom==a[r][s].profNom&&(o.columnStart=a[r][s].visible?a[r][s].columnStart:a[r][l].columnStart,a[r][s].visible=!1,o.columnEnd++),o.visible&&(s=l)):o.visible&&(s=l)}return this.props.isDarkMode?this.classes[1]="lightBorders":this.classes[1]="darkBorders",n.a.createElement("div",{className:this.classes.join(" ")},this.props.data.map(function(a,r){return 0!=t.groups[r].length?n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+t.groups[r].length+", 1fr)"}},a.map(function(a,s){return t.groups[r].includes(s)&&a.visible?n.a.createElement("div",{className:"subCase",style:{gridRow:a.row,gridColumnStart:a.columnStart,gridColumnEnd:a.columnEnd,backgroundColor:a.bgColor,color:a.txtColor,opacity:e.getOpacity(a)}},n.a.createElement("div",null,n.a.createElement("span",null,a.module),n.a.createElement("span",null,a.profNom),n.a.createElement("span",null,a.salle))):null})):null}))}}]),t}(r.Component),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={visible:!1},a.hide=a.hide.bind(Object(o.a)(Object(o.a)(a))),t.instance=Object(o.a)(Object(o.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"show",value:function(e){this.setState({visible:!0,lines:e})}},{key:"hide",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){var e=this.state.lines;return this.state.visible?n.a.createElement("div",{id:"msgBoxBg",onClick:this.hide},n.a.createElement("div",{id:"msgBox"},e.map(function(e,t){return e.url?n.a.createElement("a",{key:"msgBoxLine-"+t,href:e.url,target:"_blank"},e.txt):n.a.createElement("span",{key:"msgBoxLine-"+t},e.txt)}))):null}}],[{key:"show",value:function(e){t.instance.show(e)}}]),t}(r.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"filterBox"},n.a.createElement("h3",null,"Filtres : "),n.a.createElement("div",{id:"groups"},n.a.createElement("h4",null,"Groupe : "),n.a.createElement("div",null,"   ",n.a.createElement("h5",null,"1ere ann\xe9e :"),n.a.createElement("div",{className:"groupChooser"},y[0].map(function(t,a){return n.a.createElement("div",{onClick:function(){return e.props.onFilterChanged("group",{promo:0,group:a})},className:e.props.filter.groups[0].includes(a)&&!e.props.isFirstFilter?"selected":""},t)}))),n.a.createElement("div",null,n.a.createElement("h5",null,"2nde ann\xe9e :"),n.a.createElement("div",{className:"groupChooser"},y[1].map(function(t,a){return n.a.createElement("div",{onClick:function(){return e.props.onFilterChanged("group",{promo:1,group:a})},className:e.props.filter.groups[1].includes(a)&&!e.props.isFirstFilter?"selected":""},t)})))),n.a.createElement("div",null,n.a.createElement("h4",null,"Semaine : "),n.a.createElement(x,{isDarkMode:this.props.isDarkMode,week:this.props.filter.week,year:this.props.filter.year,onWeekChanged:function(t){return e.props.onFilterChanged("week",t)}})),n.a.createElement("div",null,n.a.createElement("h4",null,"Professeur : "),n.a.createElement(g.a,{classes:{root:this.props.isDarkMode?"whiteTxt":""},value:this.props.filter.profNom,onChange:function(t){return e.props.onFilterChanged("profNom",t.target.value)}},T.map(function(e){return n.a.createElement(m.a,{value:e},e)}))),n.a.createElement("div",null,n.a.createElement("h4",null,"Salle : "),n.a.createElement(g.a,{classes:{root:this.props.isDarkMode?"whiteTxt":""},value:this.props.filter.salle,onChange:function(t){return e.props.onFilterChanged("salle",t.target.value)}},S.map(function(e){return n.a.createElement(m.a,{value:e},e)}))),n.a.createElement("div",null,n.a.createElement("h4",null,"Module : "),n.a.createElement(g.a,{classes:{root:this.props.isDarkMode?"whiteTxt":""},value:this.props.filter.module,onChange:function(t){return e.props.onFilterChanged("module",t.target.value)}},j.map(function(e){return n.a.createElement(m.a,{value:e},e)}))))}}]),t}(r.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.isDarkMode?n.a.createElement("div",{id:"themeSelector",className:"lightBorders",onClick:function(){return e.props.onThemeChanged(!1)}},n.a.createElement(k.a,null,"wb_sunny")):n.a.createElement("div",{id:"themeSelector",className:"darkBorders",onClick:function(){return e.props.onThemeChanged(!0)}},n.a.createElement(k.a,null,"brightness_3"))}}]),t}(r.Component),G=function(e){function t(e){var a,r;Object(i.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).onFilterChanged=a.onFilterChanged.bind(Object(o.a)(Object(o.a)(a))),a.setTheme=a.setTheme.bind(Object(o.a)(Object(o.a)(a)));var n=localStorage.getItem("lastGroupFilter"),s=localStorage.getItem("backup"),l=localStorage.getItem("isDarkMode");return r=n?JSON.parse(n):[[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7]],console.error(l),a.state={isDarkMode:void 0!=l,isFirstFilter:void 0==n,edtData:[],filter:{week:F,year:M,groups:r,module:"TOUS",profNom:"TOUS",salle:"TOUTES"},isMobile:!1},s&&setTimeout(function(){return a.onDataLoaded(JSON.parse(s),F,M,!0)},0),a.loadData(F,M),a.onWindowResized=a.onWindowResized.bind(Object(o.a)(Object(o.a)(a))),window.addEventListener("resize",a.onWindowResized),a.setTheme(void 0!=l),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onWindowResized",value:function(e){var t=window.innerWidth<640;this.state&&this.state.isMobile!=t&&this.setState({isMobile:t});var a=this.adaptGroupsPreferredSelectedAmount(0),r=this.adaptGroupsPreferredSelectedAmount(1);(a||r)&&this.setState({filter:this.state.filter})}},{key:"loadData",value:function(e,t){var a=this;fetch("https://edt-relai.yo.fr/fetch.php?infos=1&year="+t+"&week="+e).then(function(r){return r.text().then(function(r){return a.onDataLoaded(r,e,t)})}).catch(function(e){return console.log(e)})}},{key:"onDataLoaded",value:function(e,t,a,r){r||localStorage.setItem("backup",JSON.stringify(e)),T=["TOUS"],j=["TOUS"],S=["TOUTES"];var n=[],s=e.split("\n");s.shift();for(var l=[],o=[],i=0,u=s[i++];u;)l.push(u.split(",")),u=s[i++];for(u=s[++i];u;)o.push(u.split(",")),u=s[i++];for(var c=0;c<7;c++){n[c]=[];for(var p=0;p<5;p++)if(n[c][p]=[],3!=c)for(var h=0;h<2;h++){n[c][p][h]=[];for(var d=0;d<8;d++)n[c][p][h][d]=[]}}for(var m=0;m<l.length;m++){var f=l[m][6],g=l[m][7];g>=3&&g++;var v=Number.parseInt(l[m][4].replace("INFO",""))-1,b=[];if("LP"==l[m][3])v=1,b[0]=7;else if("CE"==l[m][3])b=[0,1,2,3,4,5,6],0==v&&b.push(7);else if(2==l[m][3].length)b[0]=y[0].indexOf(l[m][3]);else{var E=l[m][3].split(""),k=!0,O=!1,w=void 0;try{for(var D,N=E[Symbol.iterator]();!(k=(D=N.next()).done);k=!0){var M=D.value,F=C.indexOf(M);b.push(F),(0==v||1==v&&"4"!=M)&&b.push(F+1)}}catch(R){O=!0,w=R}finally{try{k||null==N.return||N.return()}finally{if(O)throw w}}}for(var x=0;x<b.length;x++){var U=b[x];n[g][f][v][U]={module:l[m][5],profNom:l[m][2],salle:l[m][8],bgColor:l[m][10],txtColor:l[m][11]},T.includes(l[m][2])||T.push(l[m][2]),S.includes(l[m][8])||S.push(l[m][8]),j.includes(l[m][5])||j.push(l[m][5])}}for(var B=0;B<o.length;B++){var A=Number.parseInt(o[B][1]),I=Number.parseInt(o[B][3])||0;n[3][A][I]||(n[3][A][I]={}),n[3][A][I].txt=o[B][4],n[3][A][I].fillColor=o[B][6],n[3][A][I].txtColor=o[B][7],n[3][A][I].url=o[B][5]}for(var W=[],L=new Date(a,0,1+7*(t-1)),P=0;P<5;P++){var G=L.getUTCDate(),J=L.getUTCMonth()+1;G<10&&(G="0"+G),J<10&&(J="0"+J),W[P]=G+"/"+J,L.setUTCDate(L.getUTCDate()+1)}this.setState({edtData:n,days:W}),this.onWindowResized()}},{key:"onFilterChanged",value:function(e,t){var a=this.state.filter,r=this.state.isFirstFilter;if("group"==e){var n=t.promo,s=t.group;if(this.state.isFirstFilter)a.groups[n]=[s],a.groups[1==n?0:1]=[];else{var l=a.groups[n].indexOf(s);l>=0?a.groups[n].splice(l,1):(a.groups[n].push(s),this.adaptGroupsPreferredSelectedAmount(n)),a.groups[n].sort()}localStorage.setItem("lastGroupFilter",JSON.stringify(a.groups)),r=!1}else"week"==e?this.loadData(t.week,t.year):a[e]=t;this.setState({filter:a,isFirstFilter:r})}},{key:"adaptGroupsPreferredSelectedAmount",value:function(e){console.log("adapt");for(var t=!1;24*this.state.filter.groups[e].length*5+30+40>window.innerWidth;)this.state.filter.groups[e].shift(),t=!0;return t}},{key:"setTheme",value:function(e){var t=document.getElementsByTagName("body")[0];e?(localStorage.setItem("isDarkMode",!0),t.style.backgroundColor="#444",t.style.color="white"):(localStorage.removeItem("isDarkMode"),t.style.backgroundColor="white",t.style.color="black"),this.setState(function(t,a){return{isDarkMode:e}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{id:"title"},"Emploi du temps - IUT de Blagnac"),n.a.createElement("div",{id:"info"},n.a.createElement("p",null,"Alpha 3.0"),n.a.createElement("a",{href:"https://github.com/Feavy/EDT-React",target:"_blank"},"Code Source")),n.a.createElement(P,{isDarkMode:this.state.isDarkMode,onThemeChanged:this.setTheme}),n.a.createElement(L,{isDarkMode:this.state.isDarkMode,filter:this.state.filter,onFilterChanged:this.onFilterChanged}),this.state.days&&n.a.createElement(B,{isDarkMode:this.state.isDarkMode,filter:this.state.filter,days:this.state.days,isMobile:this.state.isMobile,edt:this.state.edtData}),n.a.createElement(W,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,a){e.exports=a(252)},95:function(e,t,a){}},[[90,2,1]]]);
//# sourceMappingURL=main.55927d4d.chunk.js.map
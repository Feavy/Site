(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=a(17),s=a(19),u=a(20),c=a(23),p=a(21),h=a(22),m=(a(94),a(39)),d=a.n(m),f=a(31),g=a.n(f),v=a(87),b=a.n(v),E=["1A","1B","2A","2B","3A","3B","4A","4B"],C=["1",,"2",,"3",,"4"],y=["1A","1B","2A","2B","3A","3B","4A","LP"],k=["TOUS"],O=["TOUS"],w=["TOUTES"];var T=function(e){(e=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))).setUTCDate(e.getUTCDate()+4-(e.getUTCDay()||7));var t=new Date(Date.UTC(e.getUTCFullYear(),0,1)),a=Math.ceil(((e-t)/864e5+1)/7);return[e.getUTCFullYear(),a]}(new Date),x=T[0],j=T[1],S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={value:a.props.value,year:x},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onWeekChanged",value:function(e){var t=this;if(!isNaN(e)){for(var a=this.state.year;e<2;)e+=50,a--;for(;e>51;)e-=50,a++;this.setState({value:e,year:a}),this.changeTimeout&&clearTimeout(this.changeTimeout),this.changeTimeout=setTimeout(function(){t.props.onWeekChanged({week:t.state.value,year:t.state.year})},500)}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.onWeekChanged(e.state.value-1)}},"\u25c0"),r.a.createElement(b.a,{className:"input",type:"number",value:this.state.value,onChange:function(t){return e.onWeekChanged(Number.parseInt(t.target.value))}}),r.a.createElement("button",{class:"button",onClick:function(t){return e.onWeekChanged(e.state.value+1)}},"\u25b6"),r.a.createElement("p",null,"Ann\xe9e : ",r.a.createElement("span",{style:{fontWeight:"bold"}},this.state.year)))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).updateData=a.updateData.bind(Object(i.a)(Object(i.a)(a))),a.updateData(),a.classes=["case"],a.props.isFirstLeft&&a.classes.push("firstLeft"),a.props.isFirstTop&&a.classes.push("firstTop"),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"updateData",value:function(){for(var e=this.props.data,t=0;t<e.length;t++)for(var a=0,n=0;n<e[t].length;n++){var r=e[t][n];r.columnStart=n+1,r.visible=this.props.filter.groups[t].includes(n);var o=Math.max(this.props.filter.groups[t].indexOf(n),this.props.filter.groups[0==t?1:0].indexOf(n))+1;r.columnStart=o,r.columnEnd=o,r.row=t+1,2==r.row&&0==this.props.filter.groups[0].length&&(r.row=1),0!=n?(r.profNom&&r.visible&&r.profNom==e[t][a].profNom&&(r.columnStart=e[t][a].visible?e[t][a].columnStart:e[t][n].columnStart,e[t][a].visible=!1,r.columnEnd++),r.visible&&(a=n)):r.visible&&(a=n)}}},{key:"componentWillReceiveProps",value:function(e){this.props=e,this.updateData()}},{key:"render",value:function(){var e=this.props.filter,t=Math.max(this.props.filter.groups[0].length,this.props.filter.groups[1].length);return r.a.createElement("div",{className:this.classes.join(" "),style:{gridTemplateColumns:"repeat("+t+", 1fr)"}},this.props.data.map(function(t,a){return t.map(function(t,n){return e.groups[a].includes(n)&&t.visible?r.a.createElement("div",{style:{gridRow:t.row,gridColumnStart:t.columnStart,gridColumnEnd:t.columnEnd,backgroundColor:t.bgColor,color:t.txtColor,opacity:"TOUS"!=e.module&&e.module!=t.module||"TOUS"!=e.profNom&&e.profNom!=t.profNom||"TOUTES"!=e.salle&&e.salle!=t.salle?.3:1},className:"subCase"},r.a.createElement("div",null,r.a.createElement("span",null,t.module),r.a.createElement("span",null,t.profNom),r.a.createElement("span",null,t.salle))):null})}))}}]),t}(n.Component),B=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).hideMessageBox=a.hideMessageBox.bind(Object(i.a)(Object(i.a)(a)));var n=[];for(var r in a.props.filter.groups[0])n.push(E[r]);return a.state={msgBoxVisible:!1,msgBoxLines:void 0,groupsLabels:n},a.dayIndexes=["Lun.","Mar.","Mer.","Jeu.","Ven."],a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"showMessageBox",value:function(e){console.log("click detected"),this.setState({msgBoxVisible:!0,msgBoxLines:e})}},{key:"hideMessageBox",value:function(){this.setState({msgBoxVisible:!1})}},{key:"render",value:function(){var e=this,t=1,a=this.props.firstDay;return console.log(a),r.a.createElement("div",{id:"schedule"},this.props.days&&this.dayIndexes.map(function(t,a){return r.a.createElement("div",null,r.a.createElement("h2",{key:t,style:{textAlign:"center"}},t+" "+e.props.days[a]))}),this.dayIndexes.map(function(t){return r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat("+e.props.filter.groups[0].length+", 1fr)"}},e.props.filter.groups[0].map(function(e){return r.a.createElement("span",{style:{textAlign:"center",overflow:"hidden"},key:t+"-gr"+e},E[e])}))}),this.props.edt.map(function(a,n){return a.map(function(a,o){return 3==n?r.a.createElement("div",{key:n+";"+o,className:"infoCase"},a.lines.length>0&&e.props.isMobile?r.a.createElement("div",{key:n+";"+o+"-i",className:"infoButton",onClick:function(){return e.showMessageBox(a.lines)}},r.a.createElement("span",null,"Infos")):a.lines.map(function(e){return e.url?r.a.createElement("a",{href:e.url,style:{backgroundColor:e.fillColor,color:e.txtColor}},e.txt):r.a.createElement("span",{style:{backgroundColor:e.fillColor,color:e.txtColor}},e.txt)})):r.a.createElement(N,{isFirstTop:0==n||4==n,isFirstLeft:0==o,debug:1==t--,filter:e.props.filter,data:a})})}),this.state.msgBoxVisible&&r.a.createElement(F,{onClose:this.hideMessageBox,lines:this.state.msgBoxLines}))}}]),t}(n.Component),F=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(p.a)(t).call(this,e))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.lines;return r.a.createElement("div",{id:"msgBoxBg",onClick:this.props.onClose},r.a.createElement("div",{id:"msgBox"},e.map(function(e,t){return e.url?r.a.createElement("a",{key:"msgBoxLine-"+t,href:e.url,target:"_blank"},e.txt):r.a.createElement("span",{key:"msgBoxLine-"+t},e.txt)})))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={week:a.props.filter.week},a.currentWeekTimeout=void 0,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"weekChosen",value:function(e){var t=this;this.setState({week:Number.parseInt(e)}),this.currentWeekTimeout&&clearTimeout(this.currentWeekTimeout),this.currentWeekTimeout=setTimeout(function(){t.props.onFilterChanged("week",t.state.week)},2e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"filterBox"},r.a.createElement("h3",null,"Filtres : "),r.a.createElement("div",{id:"groups"},r.a.createElement("h4",null,"Groupe : "),r.a.createElement("div",null,r.a.createElement("h5",null,"1ere ann\xe9e :"),r.a.createElement("div",{className:"groupChooser"},E.map(function(t,a){return r.a.createElement("div",{onClick:function(){return e.props.onFilterChanged("group",{promo:0,group:a})},className:e.props.filter.groups[0].includes(a)&&!e.props.firstFilter?"selected":""},t)}))),r.a.createElement("div",null,r.a.createElement("h5",null,"2nde ann\xe9e :"),r.a.createElement("div",{className:"groupChooser"},y.map(function(t,a){return r.a.createElement("div",{onClick:function(){return e.props.onFilterChanged("group",{promo:1,group:a})},className:e.props.filter.groups[1].includes(a)&&!e.props.firstFilter?"selected":""},t)})))),r.a.createElement("div",null,r.a.createElement("h4",null,"Semaine : "),r.a.createElement(S,{value:this.state.week,onWeekChanged:function(t){return e.props.onFilterChanged("week",t)}})),r.a.createElement("div",null,r.a.createElement("h4",null,"Professeur : "),r.a.createElement(g.a,{value:this.props.filter.profNom,onChange:function(t){return e.props.onFilterChanged("profNom",t.target.value)}},k.map(function(e){return r.a.createElement(d.a,{value:e},e)}))),r.a.createElement("div",null,r.a.createElement("h4",null,"Salle : "),r.a.createElement(g.a,{value:this.props.filter.salle,onChange:function(t){return e.props.onFilterChanged("salle",t.target.value)}},w.map(function(e){return r.a.createElement(d.a,{value:e},e)}))),r.a.createElement("div",null,r.a.createElement("h4",null,"Module : "),r.a.createElement(g.a,{value:this.props.filter.module,onChange:function(t){return e.props.onFilterChanged("module",t.target.value)}},O.map(function(e){return r.a.createElement(d.a,{value:e},e)}))))}}]),t}(n.Component),U=function(e){function t(e){var a,n;Object(s.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).onFilterChanged=a.onFilterChanged.bind(Object(i.a)(Object(i.a)(a)));var r=localStorage.getItem("lastGroupFilter");return n=r?JSON.parse(r):[[0,1,2,3,4,5,6,7],[0,1,2,3,4,5,6,7]],a.state={firstFilter:void 0==r,edtData:[],filter:{week:j,year:x,groups:n,module:"TOUS",profNom:"TOUS",salle:"TOUTES"},isMobile:!1},fetch("https://edt-relai.yo.fr/fetch.php?infos=1&year="+x+"&week="+a.state.filter.week).then(function(e){return e.text().then(function(e){return a.onDataLoaded(e,j,x)})}).catch(function(e){return console.log(e)}),a.onWindowResized=a.onWindowResized.bind(Object(i.a)(Object(i.a)(a))),window.addEventListener("resize",a.onWindowResized),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onWindowResized",value:function(e){var t=window.innerWidth<640;this.state&&this.state.isMobile!=t&&this.setState({isMobile:t})}},{key:"onDataLoaded",value:function(e,t,a){k=["TOUS"],O=["TOUS"],w=["TOUTES"];var n=[],r=e.split("\n");r.shift();for(var o=[],l=[],i=0,s=r[i++];s;)o.push(s.split(",")),s=r[i++];for(s=r[++i];s;)l.push(s.split(",")),s=r[i++];for(var u=0;u<7;u++){n[u]=[];for(var c=0;c<5;c++)if(3!=u){n[u][c]=[];for(var p=0;p<2;p++){n[u][c][p]=[];for(var h=0;h<8;h++)n[u][c][p][h]=[]}}else n[u][c]={lines:[]}}for(var m=0;m<o.length;m++){var d=o[m][6],f=o[m][7];f>=3&&f++;var g=Number.parseInt(o[m][4].replace("INFO",""))-1,v=[];if("LP"==o[m][3])g=1,v[0]=7;else if("CE"==o[m][3])v=[0,1,2,3,4,5,6],0==g&&v.push(7);else if(2==o[m][3].length)v[0]=E.indexOf(o[m][3]);else{var b=o[m][3].split(""),y=!0,T=!1,x=void 0;try{for(var j,S=b[Symbol.iterator]();!(y=(j=S.next()).done);y=!0){var N=j.value,B=C.indexOf(N);v.push(B),(0==g||1==g&&"4"!=N)&&v.push(B+1)}}catch(J){T=!0,x=J}finally{try{y||null==S.return||S.return()}finally{if(T)throw x}}}for(var F=0;F<v.length;F++){var D=v[F];3==f&&console.error("wtf"),n[f][d][g][D]={module:o[m][5],profNom:o[m][2],salle:o[m][8],bgColor:o[m][10],txtColor:o[m][11]},k.includes(o[m][2])||k.push(o[m][2]),w.includes(o[m][8])||w.push(o[m][8]),O.includes(o[m][5])||O.push(o[m][5])}}for(var U=0;U<l.length;U++){var M=Number.parseInt(l[U][1]),W=Number.parseInt(l[U][3])||0;n[3][M].lines[W]||(n[3][M].lines[W]={}),n[3][M].lines[W].txt=l[U][4],n[3][M].lines[W].fillColor=l[U][6],n[3][M].lines[W].txtColor=l[U][7],n[3][M].lines[W].url=l[U][5]}var L=[],I=new Date(a,0,1+7*(t-1));console.log(I);for(var A=0;A<5;A++){var R=I.getUTCDate(),z=I.getUTCMonth()+1;R<10&&(R="0"+R),z<10&&(z="0"+z),L[A]=R+"/"+z,I.setUTCDate(I.getUTCDate()+1)}this.setState({edtData:n,days:L}),this.onWindowResized()}},{key:"onFilterChanged",value:function(e,t){var a=this,n=this.state.filter,r=this.state.firstFilter;if("group"==e){var o=t.promo,l=t.group;if(this.state.firstFilter)n.groups[o]=[l],n.groups[1==o?0:1]=[];else{var i=n.groups[o].indexOf(l);i>=0?n.groups[o].splice(i,1):n.groups[o].push(l),n.groups[o].sort()}localStorage.setItem("lastGroupFilter",JSON.stringify(n.groups)),r=!1}else"week"==e?fetch("https://edt-relai.yo.fr/fetch.php?infos=1&year="+t.year+"&week="+t.week).then(function(e){return e.text().then(function(e){return a.onDataLoaded(e,t.week,t.year)})}).catch(function(e){return console.log(e)}):n[e]=t;this.setState({filter:n,firstFilter:r})}},{key:"render",value:function(){return console.log(this.state.filter),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{id:"title"},"Emploi du temps - IUT de Blagnac"),r.a.createElement("div",{id:"info"},r.a.createElement("p",null,"Alpha 2.1"),r.a.createElement("a",{href:"https://github.com/Feavy/EDT-React",target:"_blank"},"Code Source")),r.a.createElement(D,{filter:this.state.filter,onFilterChanged:this.onFilterChanged}),r.a.createElement(B,{days:this.state.days,isMobile:this.state.isMobile,filter:this.state.filter,edt:this.state.edtData}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){e.exports=a(250)},94:function(e,t,a){}},[[89,2,1]]]);
//# sourceMappingURL=main.1a5048f4.chunk.js.map
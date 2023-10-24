"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[334],{36334:function($e,zt,Q){Q.r(zt),Q.d(zt,{diagram:function(){return Ke}});var qt=Q(17967),P=Q(19421),et=Q(97706),Jt="isoweek",Kt=function(t,s,e){var i=function(y,_){var D=(_?e.utc:e)().year(y).startOf(et.Y),S=4-D.isoWeekday();return D.isoWeekday()>4&&(S+=7),D.add(S,et.D)},n=function(y){return y.add(4-y.isoWeekday(),et.D)},a=s.prototype;a.isoWeekYear=function(){var g=n(this);return g.year()},a.isoWeek=function(g){if(!this.$utils().u(g))return this.add((g-this.isoWeek())*7,et.D);var y=n(this),_=i(this.isoWeekYear(),this.$u);return y.diff(_,et.W)+1},a.isoWeekday=function(g){return this.$utils().u(g)?this.day()||7:this.day(this.day()%7?g:g-7)};var d=a.startOf;a.startOf=function(g,y){var _=this.$utils(),D=_.u(y)?!0:y,S=_.p(g);return S===Jt?D?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):d.bind(this)(g,y)}},$t=function(s){return s.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(e,i,n){return i||n.slice(1)})},te={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},ee=function(s,e){return s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(i,n,a){var d=a&&a.toUpperCase();return n||e[a]||te[a]||$t(e[d])})},ie=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,re=/\d/,dt=/\d\d/,ne=/\d{3}/,se=/\d{4}/,R=/\d\d?/,ae=/[+-]?\d+/,ce=/[+-]\d\d:?(\d\d)?|Z/,at=/\d*[^-_:/,()\s\d]+/,q={},Ot=function(s){return s=+s,s+(s>68?1900:2e3)};function oe(t){if(!t||t==="Z")return 0;var s=t.match(/([+-]|\d\d)/g),e=+(s[1]*60)+(+s[2]||0);return e===0?0:s[0]==="+"?-e:e}var O=function(s){return function(e){this[s]=+e}},Wt=[ce,function(t){var s=this.zone||(this.zone={});s.offset=oe(t)}],pt=function(s){var e=q[s];return e&&(e.indexOf?e:e.s.concat(e.f))},Vt=function(s,e){var i,n=q,a=n.meridiem;if(!a)i=s===(e?"pm":"PM");else for(var d=1;d<=24;d+=1)if(s.indexOf(a(d,0,e))>-1){i=d>12;break}return i},le={A:[at,function(t){this.afternoon=Vt(t,!1)}],a:[at,function(t){this.afternoon=Vt(t,!0)}],S:[re,function(t){this.milliseconds=+t*100}],SS:[dt,function(t){this.milliseconds=+t*10}],SSS:[ne,function(t){this.milliseconds=+t}],s:[R,O("seconds")],ss:[R,O("seconds")],m:[R,O("minutes")],mm:[R,O("minutes")],H:[R,O("hours")],h:[R,O("hours")],HH:[R,O("hours")],hh:[R,O("hours")],D:[R,O("day")],DD:[dt,O("day")],Do:[at,function(t){var s=q,e=s.ordinal,i=t.match(/\d+/);if(this.day=i[0],!!e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],M:[R,O("month")],MM:[dt,O("month")],MMM:[at,function(t){var s=pt("months"),e=pt("monthsShort"),i=(e||s.map(function(n){return n.slice(0,3)})).indexOf(t)+1;if(i<1)throw new Error;this.month=i%12||i}],MMMM:[at,function(t){var s=pt("months"),e=s.indexOf(t)+1;if(e<1)throw new Error;this.month=e%12||e}],Y:[ae,O("year")],YY:[dt,function(t){this.year=Ot(t)}],YYYY:[se,O("year")],Z:Wt,ZZ:Wt};function ue(t){var s=t.afternoon;if(s!==void 0){var e=t.hours;s?e<12&&(t.hours+=12):e===12&&(t.hours=0),delete t.afternoon}}function fe(t){t=ee(t,q&&q.formats);for(var s=t.match(ie),e=s.length,i=0;i<e;i+=1){var n=s[i],a=le[n],d=a&&a[0],g=a&&a[1];g?s[i]={regex:d,parser:g}:s[i]=n.replace(/^\[|\]$/g,"")}return function(y){for(var _={},D=0,S=0;D<e;D+=1){var F=s[D];if(typeof F=="string")S+=F.length;else{var Y=F.regex,M=F.parser,T=y.slice(S),W=Y.exec(T),Z=W[0];M.call(_,Z),y=y.replace(Z,"")}}return ue(_),_}}var de=function(s,e,i){try{if(["x","X"].indexOf(e)>-1)return new Date((e==="X"?1e3:1)*s);var n=fe(e),a=n(s),d=a.year,g=a.month,y=a.day,_=a.hours,D=a.minutes,S=a.seconds,F=a.milliseconds,Y=a.zone,M=new Date,T=y||(!d&&!g?M.getDate():1),W=d||M.getFullYear(),Z=0;d&&!g||(Z=g>0?g-1:M.getMonth());var J=_||0,K=D||0,$=S||0,U=F||0;return Y?new Date(Date.UTC(W,Z,T,J,K,$,U+Y.offset*60*1e3)):i?new Date(Date.UTC(W,Z,T,J,K,$,U)):new Date(W,Z,T,J,K,$,U)}catch(gt){return new Date("")}},he=function(t,s,e){e.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(Ot=t.parseTwoDigitYear);var i=s.prototype,n=i.parse;i.parse=function(a){var d=a.date,g=a.utc,y=a.args;this.$u=g;var _=y[1];if(typeof _=="string"){var D=y[2]===!0,S=y[3]===!0,F=D||S,Y=y[2];S&&(Y=y[2]),q=this.$locale(),!D&&Y&&(q=e.Ls[Y]),this.$d=de(d,_,g),this.init(),Y&&Y!==!0&&(this.$L=this.locale(Y).$L),F&&d!=this.format(_)&&(this.$d=new Date("")),q={}}else if(_ instanceof Array)for(var M=_.length,T=1;T<=M;T+=1){y[1]=_[T-1];var W=e.apply(this,y);if(W.isValid()){this.$d=W.$d,this.$L=W.$L,this.init();break}T===M&&(this.$d=new Date(""))}else n.call(this,a)}},me=function(t,s){var e=s.prototype,i=e.format;e.format=function(n){var a=this,d=this.$locale();if(!this.isValid())return i.bind(this)(n);var g=this.$utils(),y=n||et.r0,_=y.replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(D){switch(D){case"Q":return Math.ceil((a.$M+1)/3);case"Do":return d.ordinal(a.$D);case"gggg":return a.weekYear();case"GGGG":return a.isoWeekYear();case"wo":return d.ordinal(a.week(),"W");case"w":case"ww":return g.s(a.week(),D==="w"?1:2,"0");case"W":case"WW":return g.s(a.isoWeek(),D==="W"?1:2,"0");case"k":case"kk":return g.s(String(a.$H===0?24:a.$H),D==="k"?1:2,"0");case"X":return Math.floor(a.$d.getTime()/1e3);case"x":return a.$d.getTime();case"z":return"["+a.offsetName()+"]";case"zzz":return"["+a.offsetName("long")+"]";default:return D}});return i.bind(this)(_)}},A=Q(81650),C=Q(31539),ti=Q(27856),Tt=function(){var t=function(m,l,u,h){for(u=u||{},h=m.length;h--;u[m[h]]=l);return u},s=[1,3],e=[1,5],i=[7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],n=[1,15],a=[1,16],d=[1,17],g=[1,18],y=[1,19],_=[1,20],D=[1,21],S=[1,22],F=[1,23],Y=[1,24],M=[1,25],T=[1,26],W=[1,27],Z=[1,29],J=[1,31],K=[1,34],$=[5,7,9,11,12,13,14,15,16,17,18,19,20,21,23,25,26,28,35,40],U={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,dateFormat:12,inclusiveEndDates:13,topAxis:14,axisFormat:15,tickInterval:16,excludes:17,includes:18,todayMarker:19,title:20,acc_title:21,acc_title_value:22,acc_descr:23,acc_descr_value:24,acc_descr_multiline_value:25,section:26,clickStatement:27,taskTxt:28,taskData:29,openDirective:30,typeDirective:31,closeDirective:32,":":33,argDirective:34,click:35,callbackname:36,callbackargs:37,href:38,clickStatementDebug:39,open_directive:40,type_directive:41,arg_directive:42,close_directive:43,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",12:"dateFormat",13:"inclusiveEndDates",14:"topAxis",15:"axisFormat",16:"tickInterval",17:"excludes",18:"includes",19:"todayMarker",20:"title",21:"acc_title",22:"acc_title_value",23:"acc_descr",24:"acc_descr_value",25:"acc_descr_multiline_value",26:"section",28:"taskTxt",29:"taskData",33:":",35:"click",36:"callbackname",37:"callbackargs",38:"href",40:"open_directive",41:"type_directive",42:"arg_directive",43:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[27,2],[27,3],[27,3],[27,4],[27,3],[27,4],[27,2],[39,2],[39,3],[39,3],[39,4],[39,3],[39,4],[39,2],[30,1],[31,1],[34,1],[32,1]],performAction:function(l,u,h,c,k,r,w){var o=r.length-1;switch(k){case 2:return r[o-1];case 3:this.$=[];break;case 4:r[o-1].push(r[o]),this.$=r[o-1];break;case 5:case 6:this.$=r[o];break;case 7:case 8:this.$=[];break;case 9:c.setDateFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 10:c.enableInclusiveEndDates(),this.$=r[o].substr(18);break;case 11:c.TopAxis(),this.$=r[o].substr(8);break;case 12:c.setAxisFormat(r[o].substr(11)),this.$=r[o].substr(11);break;case 13:c.setTickInterval(r[o].substr(13)),this.$=r[o].substr(13);break;case 14:c.setExcludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 15:c.setIncludes(r[o].substr(9)),this.$=r[o].substr(9);break;case 16:c.setTodayMarker(r[o].substr(12)),this.$=r[o].substr(12);break;case 17:c.setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 18:this.$=r[o].trim(),c.setAccTitle(this.$);break;case 19:case 20:this.$=r[o].trim(),c.setAccDescription(this.$);break;case 21:c.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 23:c.addTask(r[o-1],r[o]),this.$="task";break;case 27:this.$=r[o-1],c.setClickEvent(r[o-1],r[o],null);break;case 28:this.$=r[o-2],c.setClickEvent(r[o-2],r[o-1],r[o]);break;case 29:this.$=r[o-2],c.setClickEvent(r[o-2],r[o-1],null),c.setLink(r[o-2],r[o]);break;case 30:this.$=r[o-3],c.setClickEvent(r[o-3],r[o-2],r[o-1]),c.setLink(r[o-3],r[o]);break;case 31:this.$=r[o-2],c.setClickEvent(r[o-2],r[o],null),c.setLink(r[o-2],r[o-1]);break;case 32:this.$=r[o-3],c.setClickEvent(r[o-3],r[o-1],r[o]),c.setLink(r[o-3],r[o-2]);break;case 33:this.$=r[o-1],c.setLink(r[o-1],r[o]);break;case 34:case 40:this.$=r[o-1]+" "+r[o];break;case 35:case 36:case 38:this.$=r[o-2]+" "+r[o-1]+" "+r[o];break;case 37:case 39:this.$=r[o-3]+" "+r[o-2]+" "+r[o-1]+" "+r[o];break;case 41:c.parseDirective("%%{","open_directive");break;case 42:c.parseDirective(r[o],"type_directive");break;case 43:r[o]=r[o].trim().replace(/'/g,'"'),c.parseDirective(r[o],"arg_directive");break;case 44:c.parseDirective("}%%","close_directive","gantt");break}},table:[{3:1,4:2,5:s,30:4,40:e},{1:[3]},{3:6,4:2,5:s,30:4,40:e},t(i,[2,3],{6:7}),{31:8,41:[1,9]},{41:[2,41]},{1:[2,1]},{4:30,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:n,13:a,14:d,15:g,16:y,17:_,18:D,19:S,20:F,21:Y,23:M,25:T,26:W,27:28,28:Z,30:4,35:J,40:e},{32:32,33:[1,33],43:K},t([33,43],[2,42]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:30,10:35,12:n,13:a,14:d,15:g,16:y,17:_,18:D,19:S,20:F,21:Y,23:M,25:T,26:W,27:28,28:Z,30:4,35:J,40:e},t(i,[2,6]),t(i,[2,7]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),t(i,[2,17]),{22:[1,36]},{24:[1,37]},t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),{29:[1,38]},t(i,[2,24]),{36:[1,39],38:[1,40]},{11:[1,41]},{34:42,42:[1,43]},{11:[2,44]},t(i,[2,5]),t(i,[2,18]),t(i,[2,19]),t(i,[2,23]),t(i,[2,27],{37:[1,44],38:[1,45]}),t(i,[2,33],{36:[1,46]}),t($,[2,25]),{32:47,43:K},{43:[2,43]},t(i,[2,28],{38:[1,48]}),t(i,[2,29]),t(i,[2,31],{37:[1,49]}),{11:[1,50]},t(i,[2,30]),t(i,[2,32]),t($,[2,26])],defaultActions:{5:[2,41],6:[2,1],34:[2,44],43:[2,43]},parseError:function(l,u){if(u.recoverable)this.trace(l);else{var h=new Error(l);throw h.hash=u,h}},parse:function(l){var u=this,h=[0],c=[],k=[null],r=[],w=this.table,o="",V=0,N=0,ft=2,f=1,v=r.slice.call(arguments,1),p=Object.create(this.lexer),x={yy:{}};for(var b in this.yy)Object.prototype.hasOwnProperty.call(this.yy,b)&&(x.yy[b]=this.yy[b]);p.setInput(l,x.yy),x.yy.lexer=p,x.yy.parser=this,typeof p.yylloc=="undefined"&&(p.yylloc={});var L=p.yylloc;r.push(L);var E=p.options&&p.options.ranges;typeof x.yy.parseError=="function"?this.parseError=x.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function It(){var j;return j=c.pop()||p.lex()||f,typeof j!="number"&&(j instanceof Array&&(c=j,j=c.pop()),j=u.symbols_[j]||j),j}for(var z,tt,B,Lt,st={},yt,H,Qt,vt;;){if(tt=h[h.length-1],this.defaultActions[tt]?B=this.defaultActions[tt]:((z===null||typeof z=="undefined")&&(z=It()),B=w[tt]&&w[tt][z]),typeof B=="undefined"||!B.length||!B[0]){var Ft="";vt=[];for(yt in w[tt])this.terminals_[yt]&&yt>ft&&vt.push("'"+this.terminals_[yt]+"'");p.showPosition?Ft="Parse error on line "+(V+1)+`:
`+p.showPosition()+`
Expecting `+vt.join(", ")+", got '"+(this.terminals_[z]||z)+"'":Ft="Parse error on line "+(V+1)+": Unexpected "+(z==f?"end of input":"'"+(this.terminals_[z]||z)+"'"),this.parseError(Ft,{text:p.match,token:this.terminals_[z]||z,line:p.yylineno,loc:L,expected:vt})}if(B[0]instanceof Array&&B.length>1)throw new Error("Parse Error: multiple actions possible at state: "+tt+", token: "+z);switch(B[0]){case 1:h.push(z),k.push(p.yytext),r.push(p.yylloc),h.push(B[1]),z=null,N=p.yyleng,o=p.yytext,V=p.yylineno,L=p.yylloc;break;case 2:if(H=this.productions_[B[1]][1],st.$=k[k.length-H],st._$={first_line:r[r.length-(H||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(H||1)].first_column,last_column:r[r.length-1].last_column},E&&(st._$.range=[r[r.length-(H||1)].range[0],r[r.length-1].range[1]]),Lt=this.performAction.apply(st,[o,N,V,x.yy,B[1],k,r].concat(v)),typeof Lt!="undefined")return Lt;H&&(h=h.slice(0,-1*H*2),k=k.slice(0,-1*H),r=r.slice(0,-1*H)),h.push(this.productions_[B[1]][0]),k.push(st.$),r.push(st._$),Qt=w[h[h.length-2]][h[h.length-1]],h.push(Qt);break;case 3:return!0}}return!0}},gt=function(){var m={EOF:1,parseError:function(u,h){if(this.yy.parser)this.yy.parser.parseError(u,h);else throw new Error(u)},setInput:function(l,u){return this.yy=u||this.yy||{},this._input=l,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var l=this._input[0];this.yytext+=l,this.yyleng++,this.offset++,this.match+=l,this.matched+=l;var u=l.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),l},unput:function(l){var u=l.length,h=l.split(/(?:\r\n?|\n)/g);this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var c=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var k=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===c.length?this.yylloc.first_column:0)+c[c.length-h.length].length-h[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[k[0],k[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(l){this.unput(this.match.slice(l))},pastInput:function(){var l=this.matched.substr(0,this.matched.length-this.match.length);return(l.length>20?"...":"")+l.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var l=this.match;return l.length<20&&(l+=this._input.substr(0,20-l.length)),(l.substr(0,20)+(l.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var l=this.pastInput(),u=new Array(l.length+1).join("-");return l+this.upcomingInput()+`
`+u+"^"},test_match:function(l,u){var h,c,k;if(this.options.backtrack_lexer&&(k={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(k.yylloc.range=this.yylloc.range.slice(0))),c=l[0].match(/(?:\r\n?|\n).*/g),c&&(this.yylineno+=c.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:c?c[c.length-1].length-c[c.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+l[0].length},this.yytext+=l[0],this.match+=l[0],this.matches=l,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(l[0].length),this.matched+=l[0],h=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var r in k)this[r]=k[r];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var l,u,h,c;this._more||(this.yytext="",this.match="");for(var k=this._currentRules(),r=0;r<k.length;r++)if(h=this._input.match(this.rules[k[r]]),h&&(!u||h[0].length>u[0].length)){if(u=h,c=r,this.options.backtrack_lexer){if(l=this.test_match(h,k[r]),l!==!1)return l;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(l=this.test_match(u,k[c]),l!==!1?l:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var u=this.next();return u||this.lex()},begin:function(u){this.conditionStack.push(u)},popState:function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},pushState:function(u){this.begin(u)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(u,h,c,k){switch(c){case 0:return this.begin("open_directive"),40;case 1:return this.begin("type_directive"),41;case 2:return this.popState(),this.begin("arg_directive"),33;case 3:return this.popState(),this.popState(),43;case 4:return 42;case 5:return this.begin("acc_title"),21;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),23;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:break;case 13:break;case 14:break;case 15:return 11;case 16:break;case 17:break;case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 38;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 36;case 26:this.popState();break;case 27:return 37;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 35;case 31:return 5;case 32:return 12;case 33:return 13;case 34:return 14;case 35:return 15;case 36:return 16;case 37:return 18;case 38:return 17;case 39:return 19;case 40:return"date";case 41:return 20;case 42:return"accDescription";case 43:return 26;case 44:return 28;case 45:return 29;case 46:return 33;case 47:return 7;case 48:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],inclusive:!0}}};return m}();U.lexer=gt;function ut(){this.yy={}}return ut.prototype=U,U.Parser=ut,new ut}();Tt.parser=Tt;const ke=Tt;P.Z.extend(Kt),P.Z.extend(he),P.Z.extend(me);let G="",xt="",bt,Dt="",ct=[],ot=[],wt={},_t=[],ht=[],it="",St="";const Pt=["active","done","crit","milestone"];let Ct=[],lt=!1,Et=!1,Mt=0;const ge=function(t,s,e){A.m.parseDirective(this,t,s,e)},ye=function(){_t=[],ht=[],it="",Ct=[],mt=0,Yt=void 0,kt=void 0,I=[],G="",xt="",St="",bt=void 0,Dt="",ct=[],ot=[],lt=!1,Et=!1,Mt=0,wt={},(0,A.v)()},ve=function(t){xt=t},pe=function(){return xt},Te=function(t){bt=t},xe=function(){return bt},be=function(t){Dt=t},De=function(){return Dt},we=function(t){G=t},_e=function(){lt=!0},Se=function(){return lt},Ce=function(){Et=!0},Ee=function(){return Et},Me=function(t){St=t},Ae=function(){return St},Ye=function(){return G},Ie=function(t){ct=t.toLowerCase().split(/[\s,]+/)},Le=function(){return ct},Fe=function(t){ot=t.toLowerCase().split(/[\s,]+/)},ze=function(){return ot},Oe=function(){return wt},We=function(t){it=t,_t.push(t)},Ve=function(){return _t},Pe=function(){let t=Xt();const s=10;let e=0;for(;!t&&e<s;)t=Xt(),e++;return ht=I,ht},Nt=function(t,s,e,i){return i.includes(t.format(s.trim()))?!1:t.isoWeekday()>=6&&e.includes("weekends")||e.includes(t.format("dddd").toLowerCase())?!0:e.includes(t.format(s.trim()))},Zt=function(t,s,e,i){if(!e.length||t.manualEndTime)return;let n;t.startTime instanceof Date?n=(0,P.Z)(t.startTime):n=(0,P.Z)(t.startTime,s,!0),n=n.add(1,"d");let a;t.endTime instanceof Date?a=(0,P.Z)(t.endTime):a=(0,P.Z)(t.endTime,s,!0);const[d,g]=Ne(n,a,s,e,i);t.endTime=d.toDate(),t.renderEndTime=g},Ne=function(t,s,e,i,n){let a=!1,d=null;for(;t<=s;)a||(d=s.toDate()),a=Nt(t,e,i,n),a&&(s=s.add(1,"d")),t=t.add(1,"d");return[s,d]},At=function(t,s,e){e=e.trim();const n=/^after\s+([\d\w- ]+)/.exec(e.trim());if(n!==null){let d=null;if(n[1].split(" ").forEach(function(g){let y=nt(g);y!==void 0&&(d?y.endTime>d.endTime&&(d=y):d=y)}),d)return d.endTime;{const g=new Date;return g.setHours(0,0,0,0),g}}let a=(0,P.Z)(e,s.trim(),!0);if(a.isValid())return a.toDate();{A.l.debug("Invalid date:"+e),A.l.debug("With date format:"+s.trim());const d=new Date(e);if(d===void 0||isNaN(d.getTime())||d.getFullYear()<-1e4||d.getFullYear()>1e4)throw new Error("Invalid date:"+e);return d}},Bt=function(t){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},Rt=function(t,s,e,i=!1){e=e.trim();let n=(0,P.Z)(e,s.trim(),!0);if(n.isValid())return i&&(n=n.add(1,"d")),n.toDate();let a=(0,P.Z)(t);const[d,g]=Bt(e);if(!Number.isNaN(d)){const y=a.add(d,g);y.isValid()&&(a=y)}return a.toDate()};let mt=0;const rt=function(t){return t===void 0?(mt=mt+1,"task"+mt):t},Ze=function(t,s){let e;s.substr(0,1)===":"?e=s.substr(1,s.length):e=s;const i=e.split(","),n={};jt(i,n,Pt);for(let d=0;d<i.length;d++)i[d]=i[d].trim();let a="";switch(i.length){case 1:n.id=rt(),n.startTime=t.endTime,a=i[0];break;case 2:n.id=rt(),n.startTime=At(void 0,G,i[0]),a=i[1];break;case 3:n.id=rt(i[0]),n.startTime=At(void 0,G,i[1]),a=i[2];break}return a&&(n.endTime=Rt(n.startTime,G,a,lt),n.manualEndTime=(0,P.Z)(a,"YYYY-MM-DD",!0).isValid(),Zt(n,G,ot,ct)),n},Be=function(t,s){let e;s.substr(0,1)===":"?e=s.substr(1,s.length):e=s;const i=e.split(","),n={};jt(i,n,Pt);for(let a=0;a<i.length;a++)i[a]=i[a].trim();switch(i.length){case 1:n.id=rt(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:i[0]};break;case 2:n.id=rt(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=rt(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]};break}return n};let Yt,kt,I=[];const Gt={},Re=function(t,s){const e={section:it,type:it,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:t,classes:[]},i=Be(kt,s);e.raw.startTime=i.startTime,e.raw.endTime=i.endTime,e.id=i.id,e.prevTaskId=kt,e.active=i.active,e.done=i.done,e.crit=i.crit,e.milestone=i.milestone,e.order=Mt,Mt++;const n=I.push(e);kt=e.id,Gt[e.id]=n-1},nt=function(t){const s=Gt[t];return I[s]},Ge=function(t,s){const e={section:it,type:it,description:t,task:t,classes:[]},i=Ze(Yt,s);e.startTime=i.startTime,e.endTime=i.endTime,e.id=i.id,e.active=i.active,e.done=i.done,e.crit=i.crit,e.milestone=i.milestone,Yt=e,ht.push(e)},Xt=function(){const t=function(e){const i=I[e];let n="";switch(I[e].raw.startTime.type){case"prevTaskEnd":{const a=nt(i.prevTaskId);i.startTime=a.endTime;break}case"getStartDate":n=At(void 0,G,I[e].raw.startTime.startData),n&&(I[e].startTime=n);break}return I[e].startTime&&(I[e].endTime=Rt(I[e].startTime,G,I[e].raw.endTime.data,lt),I[e].endTime&&(I[e].processed=!0,I[e].manualEndTime=(0,P.Z)(I[e].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Zt(I[e],G,ot,ct))),I[e].processed};let s=!0;for(const[e,i]of I.entries())t(e),s=s&&i.processed;return s},Xe=function(t,s){let e=s;(0,A.c)().securityLevel!=="loose"&&(e=(0,qt.N)(s)),t.split(",").forEach(function(i){nt(i)!==void 0&&(Ht(i,()=>{window.open(e,"_self")}),wt[i]=e)}),Ut(t,"clickable")},Ut=function(t,s){t.split(",").forEach(function(e){let i=nt(e);i!==void 0&&i.classes.push(s)})},Ue=function(t,s,e){if((0,A.c)().securityLevel!=="loose"||s===void 0)return;let i=[];if(typeof e=="string"){i=e.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let a=0;a<i.length;a++){let d=i[a].trim();d.charAt(0)==='"'&&d.charAt(d.length-1)==='"'&&(d=d.substr(1,d.length-2)),i[a]=d}}i.length===0&&i.push(t),nt(t)!==void 0&&Ht(t,()=>{A.u.runFunc(s,...i)})},Ht=function(t,s){Ct.push(function(){const e=document.querySelector(`[id="${t}"]`);e!==null&&e.addEventListener("click",function(){s()})},function(){const e=document.querySelector(`[id="${t}-text"]`);e!==null&&e.addEventListener("click",function(){s()})})},He=function(t,s,e){t.split(",").forEach(function(i){Ue(i,s,e)}),Ut(t,"clickable")},je=function(t){Ct.forEach(function(s){s(t)})},Qe={parseDirective:ge,getConfig:()=>(0,A.c)().gantt,clear:ye,setDateFormat:we,getDateFormat:Ye,enableInclusiveEndDates:_e,endDatesAreInclusive:Se,enableTopAxis:Ce,topAxisEnabled:Ee,setAxisFormat:ve,getAxisFormat:pe,setTickInterval:Te,getTickInterval:xe,setTodayMarker:be,getTodayMarker:De,setAccTitle:A.s,getAccTitle:A.g,setDiagramTitle:A.r,getDiagramTitle:A.t,setDisplayMode:Me,getDisplayMode:Ae,setAccDescription:A.b,getAccDescription:A.a,addSection:We,getSections:Ve,getTasks:Pe,addTask:Re,findTaskById:nt,addTaskOrg:Ge,setIncludes:Ie,getIncludes:Le,setExcludes:Fe,getExcludes:ze,setClickEvent:He,setLink:Xe,getLinks:Oe,bindFunctions:je,parseDuration:Bt,isInvalidDate:Nt};function jt(t,s,e){let i=!0;for(;i;)i=!1,e.forEach(function(n){const a="^\\s*"+n+"\\s*$",d=new RegExp(a);t[0].match(d)&&(s[n]=!0,t.shift(1),i=!0)})}const qe=function(){A.l.debug("Something is calling, setConf, remove the call")},Je=(t,s)=>{let e=[...t].map(()=>-1/0),i=[...t].sort((a,d)=>a.startTime-d.startTime||a.order-d.order),n=0;for(const a of i)for(let d=0;d<e.length;d++)if(a.startTime>=e[d]){e[d]=a.endTime,a.order=d+s,d>n&&(n=d);break}return n};let X;const Ke={parser:ke,db:Qe,renderer:{setConf:qe,draw:function(t,s,e,i){const n=(0,A.c)().gantt,a=(0,A.c)().securityLevel;let d;a==="sandbox"&&(d=(0,C.Ys)("#i"+s));const g=a==="sandbox"?(0,C.Ys)(d.nodes()[0].contentDocument.body):(0,C.Ys)("body"),y=a==="sandbox"?d.nodes()[0].contentDocument:document,_=y.getElementById(s);X=_.parentElement.offsetWidth,X===void 0&&(X=1200),n.useWidth!==void 0&&(X=n.useWidth);const D=i.db.getTasks();let S=[];for(const m of D)S.push(m.type);S=ut(S);const F={};let Y=2*n.topPadding;if(i.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const m={};for(const u of D)m[u.section]===void 0?m[u.section]=[u]:m[u.section].push(u);let l=0;for(const u of Object.keys(m)){const h=Je(m[u],l)+1;l+=h,Y+=h*(n.barHeight+n.barGap),F[u]=h}}else{Y+=D.length*(n.barHeight+n.barGap);for(const m of S)F[m]=D.filter(l=>l.type===m).length}_.setAttribute("viewBox","0 0 "+X+" "+Y);const M=g.select(`[id="${s}"]`),T=(0,C.Xf)().domain([(0,C.VV$)(D,function(m){return m.startTime}),(0,C.Fp7)(D,function(m){return m.endTime})]).rangeRound([0,X-n.leftPadding-n.rightPadding]);function W(m,l){const u=m.startTime,h=l.startTime;let c=0;return u>h?c=1:u<h&&(c=-1),c}D.sort(W),Z(D,X,Y),(0,A.i)(M,Y,X,n.useMaxWidth),M.append("text").text(i.db.getDiagramTitle()).attr("x",X/2).attr("y",n.titleTopMargin).attr("class","titleText");function Z(m,l,u){const h=n.barHeight,c=h+n.barGap,k=n.topPadding,r=n.leftPadding,w=(0,C.BYU)().domain([0,S.length]).range(["#00B9FA","#F95002"]).interpolate(C.JHv);K(c,k,r,l,u,m,i.db.getExcludes(),i.db.getIncludes()),$(r,k,l,u),J(m,c,k,r,h,w,l),U(c,k),gt(r,k,l,u)}function J(m,l,u,h,c,k,r){const o=[...new Set(m.map(f=>f.order))].map(f=>m.find(v=>v.order===f));M.append("g").selectAll("rect").data(o).enter().append("rect").attr("x",0).attr("y",function(f,v){return v=f.order,v*l+u-2}).attr("width",function(){return r-n.rightPadding/2}).attr("height",l).attr("class",function(f){for(const[v,p]of S.entries())if(f.type===p)return"section section"+v%n.numberSectionStyles;return"section section0"});const V=M.append("g").selectAll("rect").data(m).enter(),N=i.db.getLinks();if(V.append("rect").attr("id",function(f){return f.id}).attr("rx",3).attr("ry",3).attr("x",function(f){return f.milestone?T(f.startTime)+h+.5*(T(f.endTime)-T(f.startTime))-.5*c:T(f.startTime)+h}).attr("y",function(f,v){return v=f.order,v*l+u}).attr("width",function(f){return f.milestone?c:T(f.renderEndTime||f.endTime)-T(f.startTime)}).attr("height",c).attr("transform-origin",function(f,v){return v=f.order,(T(f.startTime)+h+.5*(T(f.endTime)-T(f.startTime))).toString()+"px "+(v*l+u+.5*c).toString()+"px"}).attr("class",function(f){const v="task";let p="";f.classes.length>0&&(p=f.classes.join(" "));let x=0;for(const[L,E]of S.entries())f.type===E&&(x=L%n.numberSectionStyles);let b="";return f.active?f.crit?b+=" activeCrit":b=" active":f.done?f.crit?b=" doneCrit":b=" done":f.crit&&(b+=" crit"),b.length===0&&(b=" task"),f.milestone&&(b=" milestone "+b),b+=x,b+=" "+p,v+b}),V.append("text").attr("id",function(f){return f.id+"-text"}).text(function(f){return f.task}).attr("font-size",n.fontSize).attr("x",function(f){let v=T(f.startTime),p=T(f.renderEndTime||f.endTime);f.milestone&&(v+=.5*(T(f.endTime)-T(f.startTime))-.5*c),f.milestone&&(p=v+c);const x=this.getBBox().width;return x>p-v?p+x+1.5*n.leftPadding>r?v+h-5:p+h+5:(p-v)/2+v+h}).attr("y",function(f,v){return v=f.order,v*l+n.barHeight/2+(n.fontSize/2-2)+u}).attr("text-height",c).attr("class",function(f){const v=T(f.startTime);let p=T(f.endTime);f.milestone&&(p=v+c);const x=this.getBBox().width;let b="";f.classes.length>0&&(b=f.classes.join(" "));let L=0;for(const[It,z]of S.entries())f.type===z&&(L=It%n.numberSectionStyles);let E="";return f.active&&(f.crit?E="activeCritText"+L:E="activeText"+L),f.done?f.crit?E=E+" doneCritText"+L:E=E+" doneText"+L:f.crit&&(E=E+" critText"+L),f.milestone&&(E+=" milestoneText"),x>p-v?p+x+1.5*n.leftPadding>r?b+" taskTextOutsideLeft taskTextOutside"+L+" "+E:b+" taskTextOutsideRight taskTextOutside"+L+" "+E+" width-"+x:b+" taskText taskText"+L+" "+E+" width-"+x}),(0,A.c)().securityLevel==="sandbox"){let f;f=(0,C.Ys)("#i"+s);const v=f.nodes()[0].contentDocument;V.filter(function(p){return N[p.id]!==void 0}).each(function(p){var x=v.querySelector("#"+p.id),b=v.querySelector("#"+p.id+"-text");const L=x.parentNode;var E=v.createElement("a");E.setAttribute("xlink:href",N[p.id]),E.setAttribute("target","_top"),L.appendChild(E),E.appendChild(x),E.appendChild(b)})}}function K(m,l,u,h,c,k,r,w){const o=k.reduce((x,{startTime:b})=>x?Math.min(x,b):b,0),V=k.reduce((x,{endTime:b})=>x?Math.max(x,b):b,0),N=i.db.getDateFormat();if(!o||!V)return;const ft=[];let f=null,v=(0,P.Z)(o);for(;v.valueOf()<=V;)i.db.isInvalidDate(v,N,r,w)?f?f.end=v:f={start:v,end:v}:f&&(ft.push(f),f=null),v=v.add(1,"d");M.append("g").selectAll("rect").data(ft).enter().append("rect").attr("id",function(x){return"exclude-"+x.start.format("YYYY-MM-DD")}).attr("x",function(x){return T(x.start)+u}).attr("y",n.gridLineStartPadding).attr("width",function(x){const b=x.end.add(1,"day");return T(b)-T(x.start)}).attr("height",c-l-n.gridLineStartPadding).attr("transform-origin",function(x,b){return(T(x.start)+u+.5*(T(x.end)-T(x.start))).toString()+"px "+(b*m+.5*c).toString()+"px"}).attr("class","exclude-range")}function $(m,l,u,h){let c=(0,C.LLu)(T).tickSize(-h+l+n.gridLineStartPadding).tickFormat((0,C.i$Z)(i.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));const r=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||n.tickInterval);if(r!==null){const w=r[1];switch(r[2]){case"minute":c.ticks(C.Z_i.every(w));break;case"hour":c.ticks(C.WQD.every(w));break;case"day":c.ticks(C.rr1.every(w));break;case"week":c.ticks(C.NGh.every(w));break;case"month":c.ticks(C.F0B.every(w));break}}if(M.append("g").attr("class","grid").attr("transform","translate("+m+", "+(h-50)+")").call(c).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||n.topAxis){let w=(0,C.F5q)(T).tickSize(-h+l+n.gridLineStartPadding).tickFormat((0,C.i$Z)(i.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));if(r!==null){const o=r[1];switch(r[2]){case"minute":w.ticks(C.Z_i.every(o));break;case"hour":w.ticks(C.WQD.every(o));break;case"day":w.ticks(C.rr1.every(o));break;case"week":w.ticks(C.NGh.every(o));break;case"month":w.ticks(C.F0B.every(o));break}}M.append("g").attr("class","grid").attr("transform","translate("+m+", "+l+")").call(w).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function U(m,l){let u=0;const h=Object.keys(F).map(c=>[c,F[c]]);M.append("g").selectAll("text").data(h).enter().append(function(c){const k=c[0].split(A.e.lineBreakRegex),r=-(k.length-1)/2,w=y.createElementNS("http://www.w3.org/2000/svg","text");w.setAttribute("dy",r+"em");for(const[o,V]of k.entries()){const N=y.createElementNS("http://www.w3.org/2000/svg","tspan");N.setAttribute("alignment-baseline","central"),N.setAttribute("x","10"),o>0&&N.setAttribute("dy","1em"),N.textContent=V,w.appendChild(N)}return w}).attr("x",10).attr("y",function(c,k){if(k>0)for(let r=0;r<k;r++)return u+=h[k-1][1],c[1]*m/2+u*m+l;else return c[1]*m/2+l}).attr("font-size",n.sectionFontSize).attr("class",function(c){for(const[k,r]of S.entries())if(c[0]===r)return"sectionTitle sectionTitle"+k%n.numberSectionStyles;return"sectionTitle"})}function gt(m,l,u,h){const c=i.db.getTodayMarker();if(c==="off")return;const k=M.append("g").attr("class","today"),r=new Date,w=k.append("line");w.attr("x1",T(r)+m).attr("x2",T(r)+m).attr("y1",n.titleTopMargin).attr("y2",h-n.titleTopMargin).attr("class","today"),c!==""&&w.attr("style",c.replace(/,/g,";"))}function ut(m){const l={},u=[];for(let h=0,c=m.length;h<c;++h)Object.prototype.hasOwnProperty.call(l,m[h])||(l[m[h]]=!0,u.push(m[h]));return u}}},styles:t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`}}}]);

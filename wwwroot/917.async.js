"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[917],{23917:function(Ut,it,N){N.r(it),N.d(it,{diagram:function(){return Ft}});var b=N(81650),V=N(31539),bt=N(91619),kt=N(12281),wt=N(7201),jt=N(19421),Kt=N(17967),Zt=N(27856),X=function(){var n=function(x,r,a,h){for(a=a||{},h=x.length;h--;a[x[h]]=r);return a},t=[1,2],e=[1,5],s=[6,9,11,17,18,20,22,23,26,27,28],i=[1,15],o=[1,16],c=[1,17],y=[1,18],d=[1,19],p=[1,23],m=[1,24],S=[1,27],E=[4,6,9,11,17,18,20,22,23,26,27,28],_={trace:function(){},yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,period_statement:24,event_statement:25,period:26,event:27,open_directive:28,type_directive:29,arg_directive:30,close_directive:31,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",26:"period",27:"event",28:"open_directive",29:"type_directive",30:"arg_directive",31:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,1],[10,1],[24,1],[25,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(r,a,h,u,g,l,T){var f=l.length-1;switch(g){case 1:return l[f-1];case 3:this.$=[];break;case 4:l[f-1].push(l[f]),this.$=l[f-1];break;case 5:case 6:this.$=l[f];break;case 7:case 8:this.$=[];break;case 11:u.getCommonDb().setDiagramTitle(l[f].substr(6)),this.$=l[f].substr(6);break;case 12:this.$=l[f].trim(),u.getCommonDb().setAccTitle(this.$);break;case 13:case 14:this.$=l[f].trim(),u.getCommonDb().setAccDescription(this.$);break;case 15:u.addSection(l[f].substr(8)),this.$=l[f].substr(8);break;case 19:u.addTask(l[f],0,""),this.$=l[f];break;case 20:u.addEvent(l[f].substr(2)),this.$=l[f];break;case 21:u.parseDirective("%%{","open_directive");break;case 22:u.parseDirective(l[f],"type_directive");break;case 23:l[f]=l[f].trim().replace(/'/g,'"'),u.parseDirective(l[f],"arg_directive");break;case 24:u.parseDirective("}%%","close_directive","timeline");break}},table:[{3:1,4:t,7:3,12:4,28:e},{1:[3]},n(s,[2,3],{5:6}),{3:7,4:t,7:3,12:4,28:e},{13:8,29:[1,9]},{29:[2,21]},{6:[1,10],7:22,8:11,9:[1,12],10:13,11:[1,14],12:4,17:i,18:o,20:c,22:y,23:d,24:20,25:21,26:p,27:m,28:e},{1:[2,2]},{14:25,15:[1,26],31:S},n([15,31],[2,22]),n(s,[2,8],{1:[2,1]}),n(s,[2,4]),{7:22,10:28,12:4,17:i,18:o,20:c,22:y,23:d,24:20,25:21,26:p,27:m,28:e},n(s,[2,6]),n(s,[2,7]),n(s,[2,11]),{19:[1,29]},{21:[1,30]},n(s,[2,14]),n(s,[2,15]),n(s,[2,16]),n(s,[2,17]),n(s,[2,18]),n(s,[2,19]),n(s,[2,20]),{11:[1,31]},{16:32,30:[1,33]},{11:[2,24]},n(s,[2,5]),n(s,[2,12]),n(s,[2,13]),n(E,[2,9]),{14:34,31:S},{31:[2,23]},{11:[1,35]},n(E,[2,10])],defaultActions:{5:[2,21],7:[2,2],27:[2,24],33:[2,23]},parseError:function(r,a){if(a.recoverable)this.trace(r);else{var h=new Error(r);throw h.hash=a,h}},parse:function(r){var a=this,h=[0],u=[],g=[null],l=[],T=this.table,f="",$=0,B=0,K=2,et=1,J=l.slice.call(arguments,1),v=Object.create(this.lexer),A={yy:{}};for(var C in this.yy)Object.prototype.hasOwnProperty.call(this.yy,C)&&(A.yy[C]=this.yy[C]);v.setInput(r,A.yy),A.yy.lexer=v,A.yy.parser=this,typeof v.yylloc=="undefined"&&(v.yylloc={});var w=v.yylloc;l.push(w);var O=v.options&&v.options.ranges;typeof A.yy.parseError=="function"?this.parseError=A.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function z(){var H;return H=u.pop()||v.lex()||et,typeof H!="number"&&(H instanceof Array&&(u=H,H=u.pop()),H=a.symbols_[H]||H),H}for(var k,I,P,Z,j={},Q,R,vt,Y;;){if(I=h[h.length-1],this.defaultActions[I]?P=this.defaultActions[I]:((k===null||typeof k=="undefined")&&(k=z()),P=T[I]&&T[I][k]),typeof P=="undefined"||!P.length||!P[0]){var nt="";Y=[];for(Q in T[I])this.terminals_[Q]&&Q>K&&Y.push("'"+this.terminals_[Q]+"'");v.showPosition?nt="Parse error on line "+($+1)+`:
`+v.showPosition()+`
Expecting `+Y.join(", ")+", got '"+(this.terminals_[k]||k)+"'":nt="Parse error on line "+($+1)+": Unexpected "+(k==et?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(nt,{text:v.match,token:this.terminals_[k]||k,line:v.yylineno,loc:w,expected:Y})}if(P[0]instanceof Array&&P.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+k);switch(P[0]){case 1:h.push(k),g.push(v.yytext),l.push(v.yylloc),h.push(P[1]),k=null,B=v.yyleng,f=v.yytext,$=v.yylineno,w=v.yylloc;break;case 2:if(R=this.productions_[P[1]][1],j.$=g[g.length-R],j._$={first_line:l[l.length-(R||1)].first_line,last_line:l[l.length-1].last_line,first_column:l[l.length-(R||1)].first_column,last_column:l[l.length-1].last_column},O&&(j._$.range=[l[l.length-(R||1)].range[0],l[l.length-1].range[1]]),Z=this.performAction.apply(j,[f,B,$,A.yy,P[1],g,l].concat(J)),typeof Z!="undefined")return Z;R&&(h=h.slice(0,-1*R*2),g=g.slice(0,-1*R),l=l.slice(0,-1*R)),h.push(this.productions_[P[1]][0]),g.push(j.$),l.push(j._$),vt=T[h[h.length-2]][h[h.length-1]],h.push(vt);break;case 3:return!0}}return!0}},M=function(){var x={EOF:1,parseError:function(a,h){if(this.yy.parser)this.yy.parser.parseError(a,h);else throw new Error(a)},setInput:function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var a=r.length,h=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var g=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===u.length?this.yylloc.first_column:0)+u[u.length-h.length].length-h[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[g[0],g[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},test_match:function(r,a){var h,u,g;if(this.options.backtrack_lexer&&(g={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(g.yylloc.range=this.yylloc.range.slice(0))),u=r[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],h=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var l in g)this[l]=g[l];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,h,u;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),l=0;l<g.length;l++)if(h=this._input.match(this.rules[g[l]]),h&&(!a||h[0].length>a[0].length)){if(a=h,u=l,this.options.backtrack_lexer){if(r=this.test_match(h,g[l]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,g[u]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,h,u,g){switch(u){case 0:return this.begin("open_directive"),28;case 1:return this.begin("type_directive"),29;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),31;case 4:return 30;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 27;case 21:return 26;case 22:return 6;case 23:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?::\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23],inclusive:!0}}};return x}();_.lexer=M;function L(){this.yy={}}return L.prototype=_,_.Parser=L,new L}();X.parser=X;const Et=X;let F="",st=0;const q=[],G=[],U=[],rt=()=>b.I,at=(n,t,e)=>{(0,b.J)(globalThis,n,t,e)},lt=function(){q.length=0,G.length=0,F="",U.length=0,(0,b.v)()},ct=function(n){F=n,q.push(n)},ot=function(){return q},ht=function(){let n=yt();const t=100;let e=0;for(;!n&&e<t;)n=yt(),e++;return G.push(...U),G},dt=function(n,t,e){const s={id:st++,section:F,type:F,task:n,score:t||0,events:e?[e]:[]};U.push(s)},ut=function(n){U.find(e=>e.id===st-1).events.push(n)},pt=function(n){const t={section:F,type:F,description:n,task:n,classes:[]};G.push(t)},yt=function(){const n=function(e){return U[e].processed};let t=!0;for(const[e,s]of U.entries())n(e),t=t&&s.processed;return t},St=Object.freeze(Object.defineProperty({__proto__:null,addEvent:ut,addSection:ct,addTask:dt,addTaskOrg:pt,clear:lt,default:{clear:lt,getCommonDb:rt,addSection:ct,getSections:ot,getTasks:ht,addTask:dt,addTaskOrg:pt,addEvent:ut,parseDirective:at},getCommonDb:rt,getSections:ot,getTasks:ht,parseDirective:at},Symbol.toStringTag,{value:"Module"})),Mt=12,D=function(n,t){const e=n.append("rect");return e.attr("x",t.x),e.attr("y",t.y),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("width",t.width),e.attr("height",t.height),e.attr("rx",t.rx),e.attr("ry",t.ry),t.class!==void 0&&e.attr("class",t.class),e},Tt=function(n,t){const s=n.append("circle").attr("cx",t.cx).attr("cy",t.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=n.append("g");i.append("circle").attr("cx",t.cx-15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",t.cx+15/3).attr("cy",t.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function o(d){const p=(0,V.Nb1)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);d.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+t.cx+","+(t.cy+2)+")")}function c(d){const p=(0,V.Nb1)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);d.append("path").attr("class","mouth").attr("d",p).attr("transform","translate("+t.cx+","+(t.cy+7)+")")}function y(d){d.append("line").attr("class","mouth").attr("stroke",2).attr("x1",t.cx-5).attr("y1",t.cy+7).attr("x2",t.cx+5).attr("y2",t.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return t.score>3?o(i):t.score<3?c(i):y(i),s},It=function(n,t){const e=n.append("circle");return e.attr("cx",t.cx),e.attr("cy",t.cy),e.attr("class","actor-"+t.pos),e.attr("fill",t.fill),e.attr("stroke",t.stroke),e.attr("r",t.r),e.class!==void 0&&e.attr("class",e.class),t.title!==void 0&&e.append("title").text(t.title),e},gt=function(n,t){const e=t.text.replace(/<br\s*\/?>/gi," "),s=n.append("text");s.attr("x",t.x),s.attr("y",t.y),s.attr("class","legend"),s.style("text-anchor",t.anchor),t.class!==void 0&&s.attr("class",t.class);const i=s.append("tspan");return i.attr("x",t.x+t.textMargin*2),i.text(e),s},Pt=function(n,t){function e(i,o,c,y,d){return i+","+o+" "+(i+c)+","+o+" "+(i+c)+","+(o+y-d)+" "+(i+c-d*1.2)+","+(o+y)+" "+i+","+(o+y)}const s=n.append("polygon");s.attr("points",e(t.x,t.y,50,20,7)),s.attr("class","labelBox"),t.y=t.y+t.labelMargin,t.x=t.x+.5*t.labelMargin,gt(n,t)},Lt=function(n,t,e){const s=n.append("g"),i=tt();i.x=t.x,i.y=t.y,i.fill=t.fill,i.width=e.width,i.height=e.height,i.class="journey-section section-type-"+t.num,i.rx=3,i.ry=3,D(s,i),mt(e)(t.text,s,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+t.num},e,t.colour)};let ft=-1;const Nt=function(n,t,e){const s=t.x+e.width/2,i=n.append("g");ft++;const o=300+5*30;i.append("line").attr("id","task"+ft).attr("x1",s).attr("y1",t.y).attr("x2",s).attr("y2",o).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),Tt(i,{cx:s,cy:300+(5-t.score)*30,score:t.score});const c=tt();c.x=t.x,c.y=t.y,c.fill=t.fill,c.width=e.width,c.height=e.height,c.class="task task-type-"+t.num,c.rx=3,c.ry=3,D(i,c),t.x+14,mt(e)(t.task,i,c.x,c.y,c.width,c.height,{class:"task"},e,t.colour)},At=function(n,t){D(n,{x:t.startx,y:t.starty,width:t.stopx-t.startx,height:t.stopy-t.starty,fill:t.fill,class:"rect"}).lower()},Ct=function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},tt=function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},mt=function(){function n(i,o,c,y,d,p,m,S){const E=o.append("text").attr("x",c+d/2).attr("y",y+p/2+5).style("font-color",S).style("text-anchor","middle").text(i);s(E,m)}function t(i,o,c,y,d,p,m,S,E){const{taskFontSize:_,taskFontFamily:M}=S,L=i.split(/<br\s*\/?>/gi);for(let x=0;x<L.length;x++){const r=x*_-_*(L.length-1)/2,a=o.append("text").attr("x",c+d/2).attr("y",y).attr("fill",E).style("text-anchor","middle").style("font-size",_).style("font-family",M);a.append("tspan").attr("x",c+d/2).attr("dy",r).text(L[x]),a.attr("y",y+p/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(a,m)}}function e(i,o,c,y,d,p,m,S){const E=o.append("switch"),M=E.append("foreignObject").attr("x",c).attr("y",y).attr("width",d).attr("height",p).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");M.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),t(i,E,c,y,d,p,m,S),s(M,m)}function s(i,o){for(const c in o)c in o&&i.attr(c,o[c])}return function(i){return i.textPlacement==="fo"?e:i.textPlacement==="old"?n:t}}(),$t=function(n){n.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")};function _t(n,t){n.each(function(){var e=(0,V.Ys)(this),s=e.text().split(/(\s+|<br>)/).reverse(),i,o=[],c=1.1,y=e.attr("y"),d=parseFloat(e.attr("dy")),p=e.text(null).append("tspan").attr("x",0).attr("y",y).attr("dy",d+"em");for(let m=0;m<s.length;m++)i=s[s.length-1-m],o.push(i),p.text(o.join(" ").trim()),(p.node().getComputedTextLength()>t||i==="<br>")&&(o.pop(),p.text(o.join(" ").trim()),i==="<br>"?o=[""]:o=[i],p=e.append("tspan").attr("x",0).attr("y",y).attr("dy",c+"em").text(i))})}const Ot=function(n,t,e,s){const i=e%Mt-1,o=n.append("g");t.section=i,o.attr("class",(t.class?t.class+" ":"")+"timeline-node "+("section-"+i));const c=o.append("g"),y=o.append("g"),p=y.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(_t,t.width).node().getBBox(),m=s.fontSize&&s.fontSize.replace?s.fontSize.replace("px",""):s.fontSize;return t.height=p.height+m*1.1*.5+t.padding,t.height=Math.max(t.height,t.maxHeight),t.width=t.width+2*t.padding,y.attr("transform","translate("+t.width/2+", "+t.padding/2+")"),Ht(c,t,i),t},Rt=function(n,t,e){const s=n.append("g"),o=s.append("text").text(t.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(_t,t.width).node().getBBox(),c=e.fontSize&&e.fontSize.replace?e.fontSize.replace("px",""):e.fontSize;return s.remove(),o.height+c*1.1*.5+t.padding},Ht=function(n,t,e){n.append("path").attr("id","node-"+t.id).attr("class","node-bkg node-"+t.type).attr("d",`M0 ${t.height-5} v${-t.height+2*5} q0,-5 5,-5 h${t.width-2*5} q5,0 5,5 v${t.height-5} H0 Z`),n.append("line").attr("class","node-line-"+e).attr("x1",0).attr("y1",t.height).attr("x2",t.width).attr("y2",t.height)},W={drawRect:D,drawCircle:It,drawSection:Lt,drawText:gt,drawLabel:Pt,drawTask:Nt,drawBackgroundRect:At,getTextObj:Ct,getNoteRect:tt,initGraphics:$t,drawNode:Ot,getVirtualNodeHeight:Rt},Wt=function(n,t,e,s){var J,v,A;var i,o,c,y;const d=(0,b.c)(),p=(J=d.leftMargin)!=null?J:50;(o=(i=s.db).clear)==null||o.call(i),s.parser.parse(n+`
`),b.l.debug("timeline",s.db);const m=d.securityLevel;let S;m==="sandbox"&&(S=(0,V.Ys)("#i"+t));const _=(m==="sandbox"?(0,V.Ys)(S.nodes()[0].contentDocument.body):(0,V.Ys)("body")).select("#"+t);_.append("g");const M=s.db.getTasks(),L=s.db.getCommonDb().getDiagramTitle();b.l.debug("task",M),W.initGraphics(_);const x=s.db.getSections();b.l.debug("sections",x);let r=0,a=0,h=0,u=0,g=50+p,l=50;u=50;let T=0,f=!0;x.forEach(function(C){const w={number:T,descr:C,section:T,width:150,padding:20,maxHeight:r},O=W.getVirtualNodeHeight(_,w,d);b.l.debug("sectionHeight before draw",O),r=Math.max(r,O+20)});let $=0,B=0;b.l.debug("tasks.length",M.length);for(const[C,w]of M.entries()){const O={number:C,descr:w,section:w.section,width:150,padding:20,maxHeight:a},z=W.getVirtualNodeHeight(_,O,d);b.l.debug("taskHeight before draw",z),a=Math.max(a,z+20),$=Math.max($,w.events.length);let k=0;for(let I=0;I<w.events.length;I++){const Z={descr:w.events[I],section:w.section,number:w.section,width:150,padding:20,maxHeight:50};k+=W.getVirtualNodeHeight(_,Z,d)}B=Math.max(B,k)}b.l.debug("maxSectionHeight before draw",r),b.l.debug("maxTaskHeight before draw",a),x&&x.length>0?x.forEach(C=>{const w=M.filter(I=>I.section===C),O={number:T,descr:C,section:T,width:200*Math.max(w.length,1)-50,padding:20,maxHeight:r};b.l.debug("sectionNode",O);const z=_.append("g"),k=W.drawNode(z,O,T,d);b.l.debug("sectionNode output",k),z.attr("transform",`translate(${g}, ${u})`),l+=r+50,w.length>0&&xt(_,w,T,g,l,a,d,$,B,r,!1),g+=200*Math.max(w.length,1),l=u,T++}):(f=!1,xt(_,M,T,g,l,a,d,$,B,r,!0));const K=_.node().getBBox();b.l.debug("bounds",K),L&&_.append("text").text(L).attr("x",K.width/2-p).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),h=f?r+a+150:a+100,_.append("g").attr("class","lineWrapper").append("line").attr("x1",p).attr("y1",h).attr("x2",K.width+3*p).attr("y2",h).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,b.p)(void 0,_,(v=(c=d.timeline)==null?void 0:c.padding)!=null?v:50,(A=(y=d.timeline)==null?void 0:y.useMaxWidth)!=null?A:!1)},xt=function(n,t,e,s,i,o,c,y,d,p,m){var S;for(const E of t){const _={descr:E.task,section:e,number:e,width:150,padding:20,maxHeight:o};b.l.debug("taskNode",_);const M=n.append("g").attr("class","taskWrapper"),x=W.drawNode(M,_,e,c).height;if(b.l.debug("taskHeight after draw",x),M.attr("transform",`translate(${s}, ${i})`),o=Math.max(o,x),E.events){const r=n.append("g").attr("class","lineWrapper");let a=o;i+=100,a=a+Bt(n,E.events,e,s,i,c),i-=100,r.append("line").attr("x1",s+190/2).attr("y1",i+o).attr("x2",s+190/2).attr("y2",i+o+(m?o:p)+d+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s=s+200,m&&!((S=c.timeline)!=null&&S.disableMulticolor)&&e++}i=i-10},Bt=function(n,t,e,s,i,o){let c=0;const y=i;i=i+100;for(const d of t){const p={descr:d,section:e,number:e,width:150,padding:20,maxHeight:50};b.l.debug("eventNode",p);const m=n.append("g").attr("class","eventWrapper"),E=W.drawNode(m,p,e,o).height;c=c+E,m.attr("transform",`translate(${s}, ${i})`),i=i+10+E}return i=y,c},zt={setConf:()=>{},draw:Wt},Vt=n=>{let t="";for(let e=0;e<n.THEME_COLOR_LIMIT;e++)n["lineColor"+e]=n["lineColor"+e]||n["cScaleInv"+e],(0,bt.Z)(n["lineColor"+e])?n["lineColor"+e]=(0,kt.Z)(n["lineColor"+e],20):n["lineColor"+e]=(0,wt.Z)(n["lineColor"+e],20);for(let e=0;e<n.THEME_COLOR_LIMIT;e++){const s=""+(17-3*e);t+=`
    .section-${e-1} rect, .section-${e-1} path, .section-${e-1} circle, .section-${e-1} path  {
      fill: ${n["cScale"+e]};
    }
    .section-${e-1} text {
     fill: ${n["cScaleLabel"+e]};
    }
    .node-icon-${e-1} {
      font-size: 40px;
      color: ${n["cScaleLabel"+e]};
    }
    .section-edge-${e-1}{
      stroke: ${n["cScale"+e]};
    }
    .edge-depth-${e-1}{
      stroke-width: ${s};
    }
    .section-${e-1} line {
      stroke: ${n["cScaleInv"+e]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${n["cScaleLabel"+e]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return t},Ft={db:St,renderer:zt,parser:Et,styles:n=>`
  .edge {
    stroke-width: 3;
  }
  ${Vt(n)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${n.git0};
  }
  .section-root text {
    fill: ${n.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`}}}]);
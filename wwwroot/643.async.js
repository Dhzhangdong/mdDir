"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[643],{78643:function(_t,X,V){V.r(X),V.d(X,{diagram:function(){return Ot}});var E=V(81650),O=V(31539),B=V(38770),rt=V(19421),at=V(17967),ct=V(27856),Y=function(){var t=function(v,s,a,h){for(a=a||{},h=v.length;h--;a[v[h]]=s);return a},e=[1,2],n=[1,5],r=[6,9,11,17,18,20,22,23,24,26],i=[1,15],o=[1,16],c=[1,17],d=[1,18],y=[1,19],k=[1,20],x=[1,24],g=[4,6,9,11,17,18,20,22,23,24,26],f={trace:function(){},yy:{},symbols_:{error:2,start:3,journey:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,title:17,acc_title:18,acc_title_value:19,acc_descr:20,acc_descr_value:21,acc_descr_multiline_value:22,section:23,taskName:24,taskData:25,open_directive:26,type_directive:27,arg_directive:28,close_directive:29,$accept:0,$end:1},terminals_:{2:"error",4:"journey",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",17:"title",18:"acc_title",19:"acc_title_value",20:"acc_descr",21:"acc_descr_value",22:"acc_descr_multiline_value",23:"section",24:"taskName",25:"taskData",26:"open_directive",27:"type_directive",28:"arg_directive",29:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,2],[10,2],[10,1],[10,1],[10,2],[10,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(s,a,h,p,_,l,G){var w=l.length-1;switch(_){case 1:return l[w-1];case 3:this.$=[];break;case 4:l[w-1].push(l[w]),this.$=l[w-1];break;case 5:case 6:this.$=l[w];break;case 7:case 8:this.$=[];break;case 11:p.setDiagramTitle(l[w].substr(6)),this.$=l[w].substr(6);break;case 12:this.$=l[w].trim(),p.setAccTitle(this.$);break;case 13:case 14:this.$=l[w].trim(),p.setAccDescription(this.$);break;case 15:p.addSection(l[w].substr(8)),this.$=l[w].substr(8);break;case 16:p.addTask(l[w-1],l[w]),this.$="task";break;case 18:p.parseDirective("%%{","open_directive");break;case 19:p.parseDirective(l[w],"type_directive");break;case 20:l[w]=l[w].trim().replace(/'/g,'"'),p.parseDirective(l[w],"arg_directive");break;case 21:p.parseDirective("}%%","close_directive","journey");break}},table:[{3:1,4:e,7:3,12:4,26:n},{1:[3]},t(r,[2,3],{5:6}),{3:7,4:e,7:3,12:4,26:n},{13:8,27:[1,9]},{27:[2,18]},{6:[1,10],7:21,8:11,9:[1,12],10:13,11:[1,14],12:4,17:i,18:o,20:c,22:d,23:y,24:k,26:n},{1:[2,2]},{14:22,15:[1,23],29:x},t([15,29],[2,19]),t(r,[2,8],{1:[2,1]}),t(r,[2,4]),{7:21,10:25,12:4,17:i,18:o,20:c,22:d,23:y,24:k,26:n},t(r,[2,6]),t(r,[2,7]),t(r,[2,11]),{19:[1,26]},{21:[1,27]},t(r,[2,14]),t(r,[2,15]),{25:[1,28]},t(r,[2,17]),{11:[1,29]},{16:30,28:[1,31]},{11:[2,21]},t(r,[2,5]),t(r,[2,12]),t(r,[2,13]),t(r,[2,16]),t(g,[2,9]),{14:32,29:x},{29:[2,20]},{11:[1,33]},t(g,[2,10])],defaultActions:{5:[2,18],7:[2,2],24:[2,21],31:[2,20]},parseError:function(s,a){if(a.recoverable)this.trace(s);else{var h=new Error(s);throw h.hash=a,h}},parse:function(s){var a=this,h=[0],p=[],_=[null],l=[],G=this.table,w="",Z=0,gt=0,Bt=2,mt=1,Nt=l.slice.call(arguments,1),T=Object.create(this.lexer),j={yy:{}};for(var et in this.yy)Object.prototype.hasOwnProperty.call(this.yy,et)&&(j.yy[et]=this.yy[et]);T.setInput(s,j.yy),j.yy.lexer=T,j.yy.parser=this,typeof T.yylloc=="undefined"&&(T.yylloc={});var it=T.yylloc;l.push(it);var jt=T.options&&T.options.ranges;typeof j.yy.parseError=="function"?this.parseError=j.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function zt(){var F;return F=p.pop()||T.lex()||mt,typeof F!="number"&&(F instanceof Array&&(p=F,F=p.pop()),F=a.symbols_[F]||F),F}for(var S,z,A,nt,W={},D,R,xt,J;;){if(z=h[h.length-1],this.defaultActions[z]?A=this.defaultActions[z]:((S===null||typeof S=="undefined")&&(S=zt()),A=G[z]&&G[z][S]),typeof A=="undefined"||!A.length||!A[0]){var st="";J=[];for(D in G[z])this.terminals_[D]&&D>Bt&&J.push("'"+this.terminals_[D]+"'");T.showPosition?st="Parse error on line "+(Z+1)+`:
`+T.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[S]||S)+"'":st="Parse error on line "+(Z+1)+": Unexpected "+(S==mt?"end of input":"'"+(this.terminals_[S]||S)+"'"),this.parseError(st,{text:T.match,token:this.terminals_[S]||S,line:T.yylineno,loc:it,expected:J})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+S);switch(A[0]){case 1:h.push(S),_.push(T.yytext),l.push(T.yylloc),h.push(A[1]),S=null,gt=T.yyleng,w=T.yytext,Z=T.yylineno,it=T.yylloc;break;case 2:if(R=this.productions_[A[1]][1],W.$=_[_.length-R],W._$={first_line:l[l.length-(R||1)].first_line,last_line:l[l.length-1].last_line,first_column:l[l.length-(R||1)].first_column,last_column:l[l.length-1].last_column},jt&&(W._$.range=[l[l.length-(R||1)].range[0],l[l.length-1].range[1]]),nt=this.performAction.apply(W,[w,gt,Z,j.yy,A[1],_,l].concat(Nt)),typeof nt!="undefined")return nt;R&&(h=h.slice(0,-1*R*2),_=_.slice(0,-1*R),l=l.slice(0,-1*R)),h.push(this.productions_[A[1]][0]),_.push(W.$),l.push(W._$),xt=G[h[h.length-2]][h[h.length-1]],h.push(xt);break;case 3:return!0}}return!0}},$=function(){var v={EOF:1,parseError:function(a,h){if(this.yy.parser)this.yy.parser.parseError(a,h);else throw new Error(a)},setInput:function(s,a){return this.yy=a||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var a=s.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},unput:function(s){var a=s.length,h=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),h.length-1&&(this.yylineno-=h.length-1);var _=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:h?(h.length===p.length?this.yylloc.first_column:0)+p[p.length-h.length].length-h[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[_[0],_[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(s){this.unput(this.match.slice(s))},pastInput:function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var s=this.pastInput(),a=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+a+"^"},test_match:function(s,a){var h,p,_;if(this.options.backtrack_lexer&&(_={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(_.yylloc.range=this.yylloc.range.slice(0))),p=s[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],h=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),h)return h;if(this._backtrack){for(var l in _)this[l]=_[l];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,a,h,p;this._more||(this.yytext="",this.match="");for(var _=this._currentRules(),l=0;l<_.length;l++)if(h=this._input.match(this.rules[_[l]]),h&&(!a||h[0].length>a[0].length)){if(a=h,p=l,this.options.backtrack_lexer){if(s=this.test_match(h,_[l]),s!==!1)return s;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(s=this.test_match(a,_[p]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,h,p,_){switch(p){case 0:return this.begin("open_directive"),26;case 1:return this.begin("type_directive"),27;case 2:return this.popState(),this.begin("arg_directive"),15;case 3:return this.popState(),this.popState(),29;case 4:return 28;case 5:break;case 6:break;case 7:return 11;case 8:break;case 9:break;case 10:return 4;case 11:return 17;case 12:return this.begin("acc_title"),18;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),20;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:return 23;case 20:return 24;case 21:return 25;case 22:return 15;case 23:return 6;case 24:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:journey\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{open_directive:{rules:[1],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,11,12,14,16,19,20,21,22,23,24],inclusive:!0}}};return v}();f.lexer=$;function M(){this.yy={}}return M.prototype=f,f.Parser=M,new M}();Y.parser=Y;const Q=Y;let P="";const u=[],m=[],b=[],I=function(t,e,n){E.m.parseDirective(this,t,e,n)},U=function(){u.length=0,m.length=0,P="",b.length=0,(0,E.v)()},kt=function(t){P=t,u.push(t)},vt=function(){return u},bt=function(){let t=lt();const e=100;let n=0;for(;!t&&n<e;)t=lt(),n++;return m.push(...b),m},wt=function(){const t=[];return m.forEach(n=>{n.people&&t.push(...n.people)}),[...new Set(t)].sort()},Et=function(t,e){const n=e.substr(1).split(":");let r=0,i=[];n.length===1?(r=Number(n[0]),i=[]):(r=Number(n[0]),i=n[1].split(","));const o=i.map(d=>d.trim()),c={section:P,type:P,people:o,task:t,score:r};b.push(c)},Mt=function(t){const e={section:P,type:P,description:t,task:t,classes:[]};m.push(e)},lt=function(){const t=function(n){return b[n].processed};let e=!0;for(const[n,r]of b.entries())t(n),e=e&&r.processed;return e},Tt=function(){return wt()},ot={parseDirective:I,getConfig:()=>(0,E.c)().journey,clear:U,setDiagramTitle:E.r,getDiagramTitle:E.t,setAccTitle:E.s,getAccTitle:E.g,setAccDescription:E.b,getAccDescription:E.a,addSection:kt,getSections:vt,getTasks:bt,addTask:Et,addTaskOrg:Mt,getActors:Tt},Pt=t=>`.label {
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    color: ${t.textColor};
  }
  .mouth {
    stroke: #666;
  }

  line {
    stroke: ${t.textColor}
  }

  .legend {
    fill: ${t.textColor};
  }

  .label text {
    fill: #333;
  }
  .label {
    color: ${t.textColor}
  }

  .face {
    ${t.faceColor?`fill: ${t.faceColor}`:"fill: #FFF8DC"};
    stroke: #999;
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 1.5px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
    }
    text-align: center;
  }

  .cluster rect {
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .task-type-0, .section-type-0  {
    ${t.fillType0?`fill: ${t.fillType0}`:""};
  }
  .task-type-1, .section-type-1  {
    ${t.fillType0?`fill: ${t.fillType1}`:""};
  }
  .task-type-2, .section-type-2  {
    ${t.fillType0?`fill: ${t.fillType2}`:""};
  }
  .task-type-3, .section-type-3  {
    ${t.fillType0?`fill: ${t.fillType3}`:""};
  }
  .task-type-4, .section-type-4  {
    ${t.fillType0?`fill: ${t.fillType4}`:""};
  }
  .task-type-5, .section-type-5  {
    ${t.fillType0?`fill: ${t.fillType5}`:""};
  }
  .task-type-6, .section-type-6  {
    ${t.fillType0?`fill: ${t.fillType6}`:""};
  }
  .task-type-7, .section-type-7  {
    ${t.fillType0?`fill: ${t.fillType7}`:""};
  }

  .actor-0 {
    ${t.actor0?`fill: ${t.actor0}`:""};
  }
  .actor-1 {
    ${t.actor1?`fill: ${t.actor1}`:""};
  }
  .actor-2 {
    ${t.actor2?`fill: ${t.actor2}`:""};
  }
  .actor-3 {
    ${t.actor3?`fill: ${t.actor3}`:""};
  }
  .actor-4 {
    ${t.actor4?`fill: ${t.actor4}`:""};
  }
  .actor-5 {
    ${t.actor5?`fill: ${t.actor5}`:""};
  }
`,q=function(t,e){return(0,B.d)(t,e)},St=function(t,e){const r=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),i=t.append("g");i.append("circle").attr("cx",e.cx-15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),i.append("circle").attr("cx",e.cx+15/3).attr("cy",e.cy-15/3).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666");function o(y){const k=(0,O.Nb1)().startAngle(Math.PI/2).endAngle(3*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",k).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function c(y){const k=(0,O.Nb1)().startAngle(3*Math.PI/2).endAngle(5*(Math.PI/2)).innerRadius(7.5).outerRadius(6.8181818181818175);y.append("path").attr("class","mouth").attr("d",k).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function d(y){y.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return e.score>3?o(i):e.score<3?c(i):d(i),r},ht=function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),n.class!==void 0&&n.attr("class",n.class),e.title!==void 0&&n.append("title").text(e.title),n},ut=function(t,e){return(0,B.f)(t,e)},$t=function(t,e){function n(i,o,c,d,y){return i+","+o+" "+(i+c)+","+o+" "+(i+c)+","+(o+d-y)+" "+(i+c-y*1.2)+","+(o+d)+" "+i+","+(o+d)}const r=t.append("polygon");r.attr("points",n(e.x,e.y,50,20,7)),r.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,ut(t,e)},It=function(t,e,n){const r=t.append("g"),i=(0,B.g)();i.x=e.x,i.y=e.y,i.fill=e.fill,i.width=n.width*e.taskCount+n.diagramMarginX*(e.taskCount-1),i.height=n.height,i.class="journey-section section-type-"+e.num,i.rx=3,i.ry=3,q(r,i),dt(n)(e.text,r,i.x,i.y,i.width,i.height,{class:"journey-section section-type-"+e.num},n,e.colour)};let yt=-1;const Ct=function(t,e,n){const r=e.x+n.width/2,i=t.append("g");yt++;const o=300+5*30;i.append("line").attr("id","task"+yt).attr("x1",r).attr("y1",e.y).attr("x2",r).attr("y2",o).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),St(i,{cx:r,cy:300+(5-e.score)*30,score:e.score});const c=(0,B.g)();c.x=e.x,c.y=e.y,c.fill=e.fill,c.width=n.width,c.height=n.height,c.class="task task-type-"+e.num,c.rx=3,c.ry=3,q(i,c);let d=e.x+14;e.people.forEach(y=>{const k=e.actors[y].color,x={cx:d,cy:e.y,r:7,fill:k,stroke:"#000",title:y,pos:e.actors[y].position};ht(i,x),d+=10}),dt(n)(e.task,i,c.x,c.y,c.width,c.height,{class:"task"},n,e.colour)},At=function(t,e){(0,B.a)(t,e)},dt=function(){function t(i,o,c,d,y,k,x,g){const f=o.append("text").attr("x",c+y/2).attr("y",d+k/2+5).style("font-color",g).style("text-anchor","middle").text(i);r(f,x)}function e(i,o,c,d,y,k,x,g,f){const{taskFontSize:$,taskFontFamily:M}=g,v=i.split(/<br\s*\/?>/gi);for(let s=0;s<v.length;s++){const a=s*$-$*(v.length-1)/2,h=o.append("text").attr("x",c+y/2).attr("y",d).attr("fill",f).style("text-anchor","middle").style("font-size",$).style("font-family",M);h.append("tspan").attr("x",c+y/2).attr("dy",a).text(v[s]),h.attr("y",d+k/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),r(h,x)}}function n(i,o,c,d,y,k,x,g){const f=o.append("switch"),M=f.append("foreignObject").attr("x",c).attr("y",d).attr("width",y).attr("height",k).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");M.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(i),e(i,f,c,d,y,k,x,g),r(M,x)}function r(i,o){for(const c in o)c in o&&i.attr(c,o[c])}return function(i){return i.textPlacement==="fo"?n:i.textPlacement==="old"?t:e}}(),K={drawRect:q,drawCircle:ht,drawSection:It,drawText:ut,drawLabel:$t,drawTask:Ct,drawBackgroundRect:At,initGraphics:function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}},Vt=function(t){Object.keys(t).forEach(function(n){H[n]=t[n]})},L={};function Lt(t){const e=(0,E.c)().journey;let n=60;Object.keys(L).forEach(r=>{const i=L[r].color,o={cx:20,cy:n,r:7,fill:i,stroke:"#000",pos:L[r].position};K.drawCircle(t,o);const c={x:40,y:n+7,fill:"#666",text:r,textMargin:e.boxTextMargin|5};K.drawText(t,c),n+=20})}const H=(0,E.c)().journey,N=H.leftMargin,Rt=function(t,e,n,r){const i=(0,E.c)().journey;r.db.clear(),r.parser.parse(t+`
`);const o=(0,E.c)().securityLevel;let c;o==="sandbox"&&(c=(0,O.Ys)("#i"+e));const d=o==="sandbox"?(0,O.Ys)(c.nodes()[0].contentDocument.body):(0,O.Ys)("body");C.init();const y=d.select("#"+e);K.initGraphics(y);const k=r.db.getTasks(),x=r.db.getDiagramTitle(),g=r.db.getActors();for(const a in L)delete L[a];let f=0;g.forEach(a=>{L[a]={color:i.actorColours[f%i.actorColours.length],position:f},f++}),Lt(y),C.insert(0,0,N,Object.keys(L).length*50),Ft(y,k,0);const $=C.getBounds();x&&y.append("text").text(x).attr("x",N).attr("font-size","4ex").attr("font-weight","bold").attr("y",25);const M=$.stopy-$.starty+2*i.diagramMarginY,v=N+$.stopx+2*i.diagramMarginX;(0,E.i)(y,M,v,i.useMaxWidth),y.append("line").attr("x1",N).attr("y1",i.height*4).attr("x2",v-N-4).attr("y2",i.height*4).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)");const s=x?70:0;y.attr("viewBox",`${$.startx} -25 ${v} ${M+s}`),y.attr("preserveAspectRatio","xMinYMin meet"),y.attr("height",M+s+25)},C={data:{startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},verticalPos:0,sequenceItems:[],init:function(){this.sequenceItems=[],this.data={startx:void 0,stopx:void 0,starty:void 0,stopy:void 0},this.verticalPos=0},updateVal:function(t,e,n,r){t[e]===void 0?t[e]=n:t[e]=r(n,t[e])},updateBounds:function(t,e,n,r){const i=(0,E.c)().journey,o=this;let c=0;function d(y){return function(x){c++;const g=o.sequenceItems.length-c+1;o.updateVal(x,"starty",e-g*i.boxMargin,Math.min),o.updateVal(x,"stopy",r+g*i.boxMargin,Math.max),o.updateVal(C.data,"startx",t-g*i.boxMargin,Math.min),o.updateVal(C.data,"stopx",n+g*i.boxMargin,Math.max),y!=="activation"&&(o.updateVal(x,"startx",t-g*i.boxMargin,Math.min),o.updateVal(x,"stopx",n+g*i.boxMargin,Math.max),o.updateVal(C.data,"starty",e-g*i.boxMargin,Math.min),o.updateVal(C.data,"stopy",r+g*i.boxMargin,Math.max))}}this.sequenceItems.forEach(d())},insert:function(t,e,n,r){const i=Math.min(t,n),o=Math.max(t,n),c=Math.min(e,r),d=Math.max(e,r);this.updateVal(C.data,"startx",i,Math.min),this.updateVal(C.data,"starty",c,Math.min),this.updateVal(C.data,"stopx",o,Math.max),this.updateVal(C.data,"stopy",d,Math.max),this.updateBounds(i,c,o,d)},bumpVerticalPos:function(t){this.verticalPos=this.verticalPos+t,this.data.stopy=this.verticalPos},getVerticalPos:function(){return this.verticalPos},getBounds:function(){return this.data}},tt=H.sectionFills,ft=H.sectionColours,Ft=function(t,e,n){const r=(0,E.c)().journey;let i="";const o=r.height*2+r.diagramMarginY,c=n+o;let d=0,y="#CCC",k="black",x=0;for(const[g,f]of e.entries()){if(i!==f.section){y=tt[d%tt.length],x=d%tt.length,k=ft[d%ft.length];let M=0;const v=f.section;for(let a=g;a<e.length&&e[a].section==v;a++)M=M+1;const s={x:g*r.taskMargin+g*r.width+N,y:50,text:f.section,fill:y,num:x,colour:k,taskCount:M};K.drawSection(t,s,r),i=f.section,d++}const $=f.people.reduce((M,v)=>(L[v]&&(M[v]=L[v]),M),{});f.x=g*r.taskMargin+g*r.width+N,f.y=c,f.width=r.diagramMarginX,f.height=r.diagramMarginY,f.colour=k,f.fill=y,f.num=x,f.actors=$,K.drawTask(t,f,r),C.insert(f.x,f.y,f.x+f.width+r.taskMargin,300+5*30)}},pt={setConf:Vt,draw:Rt},Ot={parser:Q,db:ot,renderer:pt,styles:Pt,init:t=>{pt.setConf(t.journey),ot.clear()}}},38770:function(_t,X,V){V.d(X,{a:function(){return B},b:function(){return ct},c:function(){return at},d:function(){return O},e:function(){return Q},f:function(){return rt},g:function(){return Y}});var E=V(17967);const O=function(P,u){const m=P.append("rect");if(m.attr("x",u.x),m.attr("y",u.y),m.attr("fill",u.fill),m.attr("stroke",u.stroke),m.attr("width",u.width),m.attr("height",u.height),m.attr("rx",u.rx),m.attr("ry",u.ry),u.attrs!=="undefined"&&u.attrs!==null)for(let b in u.attrs)m.attr(b,u.attrs[b]);return u.class!=="undefined"&&m.attr("class",u.class),m},B=function(P,u){O(P,{x:u.startx,y:u.starty,width:u.stopx-u.startx,height:u.stopy-u.starty,fill:u.fill,stroke:u.stroke,class:"rect"}).lower()},rt=function(P,u){const m=u.text.replace(/<br\s*\/?>/gi," "),b=P.append("text");b.attr("x",u.x),b.attr("y",u.y),b.attr("class","legend"),b.style("text-anchor",u.anchor),u.class!==void 0&&b.attr("class",u.class);const I=b.append("tspan");return I.attr("x",u.x+u.textMargin*2),I.text(m),b},at=function(P,u,m,b){const I=P.append("image");I.attr("x",u),I.attr("y",m);var U=(0,E.N)(b);I.attr("xlink:href",U)},ct=function(P,u,m,b){const I=P.append("use");I.attr("x",u),I.attr("y",m);const U=(0,E.N)(b);I.attr("xlink:href","#"+U)},Y=function(){return{x:0,y:0,width:100,height:100,fill:"#EDF2AE",stroke:"#666",anchor:"start",rx:0,ry:0}},Q=function(){return{x:0,y:0,width:100,height:100,fill:void 0,anchor:void 0,"text-anchor":"start",style:"#666",textMargin:0,rx:0,ry:0,tspan:!0,valign:void 0}}}}]);

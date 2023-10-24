"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[372],{40372:function(mt,rt,w){w.r(rt),w.d(rt,{diagram:function(){return dt}});var c=w(81650),T=w(31539),vt=w(19421),bt=w(17967),kt=w(27856),X=function(){var e=function(y,t,i,n){for(i=i||{},n=y.length;n--;i[y[n]]=t);return i},p=[1,4],A=[1,5],m=[1,6],I=[1,7],P=[1,9],d=[1,11,13,15,17,19,20,26,27,28,29],V=[2,5],S=[1,6,11,13,15,17,19,20,26,27,28,29],h=[26,27,28],L=[2,8],F=[1,18],z=[1,19],D=[1,20],U=[1,21],K=[1,22],C=[1,23],Y=[1,28],R=[6,26,27,28,29],W={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(t,i,n,a,r,s,_){var l=s.length-1;switch(r){case 4:a.setShowData(!0);break;case 7:this.$=s[l-1];break;case 9:a.addSection(s[l-1],a.cleanupValue(s[l]));break;case 10:this.$=s[l].trim(),a.setDiagramTitle(this.$);break;case 11:this.$=s[l].trim(),a.setAccTitle(this.$);break;case 12:case 13:this.$=s[l].trim(),a.setAccDescription(this.$);break;case 14:a.addSection(s[l].substr(8)),this.$=s[l].substr(8);break;case 21:a.parseDirective("%%{","open_directive");break;case 22:a.parseDirective(s[l],"type_directive");break;case 23:s[l]=s[l].trim().replace(/'/g,'"'),a.parseDirective(s[l],"arg_directive");break;case 24:a.parseDirective("}%%","close_directive","pie");break}},table:[{3:1,4:2,5:3,6:p,21:8,26:A,27:m,28:I,29:P},{1:[3]},{3:10,4:2,5:3,6:p,21:8,26:A,27:m,28:I,29:P},{3:11,4:2,5:3,6:p,21:8,26:A,27:m,28:I,29:P},e(d,V,{7:12,8:[1,13]}),e(S,[2,18]),e(S,[2,19]),e(S,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},e(h,L,{21:8,9:16,10:17,5:24,1:[2,3],11:F,13:z,15:D,17:U,19:K,20:C,29:P}),e(d,V,{7:25}),{23:26,24:[1,27],32:Y},e([24,32],[2,22]),e(d,[2,6]),{4:29,26:A,27:m,28:I},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},e(h,[2,13]),e(h,[2,14]),e(h,[2,15]),e(h,L,{21:8,9:16,10:17,5:24,1:[2,4],11:F,13:z,15:D,17:U,19:K,20:C,29:P}),e(R,[2,16]),{25:34,31:[1,35]},e(R,[2,24]),e(d,[2,7]),e(h,[2,9]),e(h,[2,10]),e(h,[2,11]),e(h,[2,12]),{23:36,32:Y},{32:[2,23]},e(R,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(t,i){if(i.recoverable)this.trace(t);else{var n=new Error(t);throw n.hash=i,n}},parse:function(t){var i=this,n=[0],a=[],r=[null],s=[],_=this.table,l="",v=0,j=0,q=2,H=1,tt=s.slice.call(arguments,1),o=Object.create(this.lexer),$={yy:{}};for(var et in this.yy)Object.prototype.hasOwnProperty.call(this.yy,et)&&($.yy[et]=this.yy[et]);o.setInput(t,$.yy),$.yy.lexer=o,$.yy.parser=this,typeof o.yylloc=="undefined"&&(o.yylloc={});var it=o.yylloc;s.push(it);var _t=o.options&&o.options.ranges;typeof $.yy.parseError=="function"?this.parseError=$.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function gt(){var E;return E=a.pop()||o.lex()||H,typeof E!="number"&&(E instanceof Array&&(a=E,E=a.pop()),E=i.symbols_[E]||E),E}for(var u,O,f,st,M={},J,x,at,Q;;){if(O=n[n.length-1],this.defaultActions[O]?f=this.defaultActions[O]:((u===null||typeof u=="undefined")&&(u=gt()),f=_[O]&&_[O][u]),typeof f=="undefined"||!f.length||!f[0]){var nt="";Q=[];for(J in _[O])this.terminals_[J]&&J>q&&Q.push("'"+this.terminals_[J]+"'");o.showPosition?nt="Parse error on line "+(v+1)+`:
`+o.showPosition()+`
Expecting `+Q.join(", ")+", got '"+(this.terminals_[u]||u)+"'":nt="Parse error on line "+(v+1)+": Unexpected "+(u==H?"end of input":"'"+(this.terminals_[u]||u)+"'"),this.parseError(nt,{text:o.match,token:this.terminals_[u]||u,line:o.yylineno,loc:it,expected:Q})}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+u);switch(f[0]){case 1:n.push(u),r.push(o.yytext),s.push(o.yylloc),n.push(f[1]),u=null,j=o.yyleng,l=o.yytext,v=o.yylineno,it=o.yylloc;break;case 2:if(x=this.productions_[f[1]][1],M.$=r[r.length-x],M._$={first_line:s[s.length-(x||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(x||1)].first_column,last_column:s[s.length-1].last_column},_t&&(M._$.range=[s[s.length-(x||1)].range[0],s[s.length-1].range[1]]),st=this.performAction.apply(M,[l,j,v,$.yy,f[1],r,s].concat(tt)),typeof st!="undefined")return st;x&&(n=n.slice(0,-1*x*2),r=r.slice(0,-1*x),s=s.slice(0,-1*x)),n.push(this.productions_[f[1]][0]),r.push(M.$),s.push(M._$),at=_[n[n.length-2]][n[n.length-1]],n.push(at);break;case 3:return!0}}return!0}},G=function(){var y={EOF:1,parseError:function(i,n){if(this.yy.parser)this.yy.parser.parseError(i,n);else throw new Error(i)},setInput:function(t,i){return this.yy=i||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var i=t.match(/(?:\r\n?|\n).*/g);return i?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var i=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-i),this.offset-=i;var a=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===a.length?this.yylloc.first_column:0)+a[a.length-n.length].length-n[0].length:this.yylloc.first_column-i},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-i]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),i=new Array(t.length+1).join("-");return t+this.upcomingInput()+`
`+i+"^"},test_match:function(t,i){var n,a,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),a=t[0].match(/(?:\r\n?|\n).*/g),a&&(this.yylineno+=a.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:a?a[a.length-1].length-a[a.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,i,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,i,n,a;this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if(n=this._input.match(this.rules[r[s]]),n&&(!i||n[0].length>i[0].length)){if(i=n,a=s,this.options.backtrack_lexer){if(t=this.test_match(n,r[s]),t!==!1)return t;if(this._backtrack){i=!1;continue}else return!1}else if(!this.options.flex)break}return i?(t=this.test_match(i,r[a]),t!==!1?t:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var i=this.next();return i||this.lex()},begin:function(i){this.conditionStack.push(i)},popState:function(){var i=this.conditionStack.length-1;return i>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(i){return i=this.conditionStack.length-1-Math.abs(i||0),i>=0?this.conditionStack[i]:"INITIAL"},pushState:function(i){this.begin(i)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(i,n,a,r){switch(a){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:break;case 6:break;case 7:return 26;case 8:break;case 9:break;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 20:this.popState();break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}};return y}();W.lexer=G;function k(){this.yy={}}return k.prototype=W,W.Parser=k,new k}();X.parser=X;const lt=X;let B={},Z=!1;const ct=function(e,p,A){c.m.parseDirective(this,e,p,A)},ot=function(e,p){e=c.e.sanitizeText(e,(0,c.c)()),B[e]===void 0&&(B[e]=p,c.l.debug("Added new section :",e))},ht=()=>B,ut=function(e){Z=e},yt=function(){return Z},ft={parseDirective:ct,getConfig:()=>(0,c.c)().pie,addSection:ot,getSections:ht,cleanupValue:function(e){return e.substring(0,1)===":"&&(e=e.substring(1).trim()),Number(e.trim())},clear:function(){B={},Z=!1,(0,c.v)()},setAccTitle:c.s,getAccTitle:c.g,setDiagramTitle:c.r,getDiagramTitle:c.t,setShowData:ut,getShowData:yt,getAccDescription:c.a,setAccDescription:c.b},pt=e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`;let g=(0,c.c)(),b;const N=450,dt={parser:lt,db:ft,renderer:{draw:(e,p,A,m)=>{var G;var I;try{g=(0,c.c)(),c.l.debug(`Rendering info diagram
`+e);const k=(0,c.c)().securityLevel;let y;k==="sandbox"&&(y=(0,T.Ys)("#i"+p));const t=k==="sandbox"?(0,T.Ys)(y.nodes()[0].contentDocument.body):(0,T.Ys)("body"),i=k==="sandbox"?y.nodes()[0].contentDocument:document;m.db.clear(),m.parser.parse(e),c.l.debug("Parsed info diagram");const n=i.getElementById(p);b=n.parentElement.offsetWidth,b===void 0&&(b=1200),g.useWidth!==void 0&&(b=g.useWidth),g.pie.useWidth!==void 0&&(b=g.pie.useWidth);const a=t.select("#"+p);(0,c.i)(a,N,b,g.pie.useMaxWidth),n.setAttribute("viewBox","0 0 "+b+" "+N);var P=40,d=18,V=4,S=Math.min(b,N)/2-P,h=a.append("g").attr("transform","translate("+b/2+","+N/2+")"),L=m.db.getSections(),F=0;Object.keys(L).forEach(function(l){F+=L[l]});const r=g.themeVariables;var z=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12];const s=(G=(I=g.pie)==null?void 0:I.textPosition)!=null?G:.75;let[_]=(0,c.B)(r.pieOuterStrokeWidth);_!=null||(_=2);var D=(0,T.PKp)().range(z),U=Object.entries(L).map(function(l,v){return{order:v,name:l[0],value:l[1]}}),K=(0,T.ve8)().value(function(l){return l.value}).sort(function(l,v){return l.order-v.order}),C=K(U),Y=(0,T.Nb1)().innerRadius(0).outerRadius(S),R=(0,T.Nb1)().innerRadius(S*s).outerRadius(S*s);h.append("circle").attr("cx",0).attr("cy",0).attr("r",S+_/2).attr("class","pieOuterCircle"),h.selectAll("mySlices").data(C).enter().append("path").attr("d",Y).attr("fill",function(l){return D(l.data.name)}).attr("class","pieCircle"),h.selectAll("mySlices").data(C).enter().append("text").text(function(l){return(l.data.value/F*100).toFixed(0)+"%"}).attr("transform",function(l){return"translate("+R.centroid(l)+")"}).style("text-anchor","middle").attr("class","slice"),h.append("text").text(m.db.getDiagramTitle()).attr("x",0).attr("y",-(N-50)/2).attr("class","pieTitleText");var W=h.selectAll(".legend").data(D.domain()).enter().append("g").attr("class","legend").attr("transform",function(l,v){const j=d+V,q=j*D.domain().length/2,H=12*d,tt=v*j-q;return"translate("+H+","+tt+")"});W.append("rect").attr("width",d).attr("height",d).style("fill",D).style("stroke",D),W.data(C).append("text").attr("x",d+V).attr("y",d-V).text(function(l){return m.db.getShowData()||g.showData||g.pie.showData?l.data.name+" ["+l.data.value+"]":l.data.name})}catch(k){c.l.error("Error while rendering info diagram"),c.l.error(k)}}},styles:pt}}}]);
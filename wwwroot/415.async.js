"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[415],{77415:function(Te,Ut,Dt){Dt.d(Ut,{D:function(){return G},S:function(){return ft},a:function(){return Ct},b:function(){return Y},c:function(){return Ht},d:function(){return ye},p:function(){return Mt},s:function(){return Se}});var f=Dt(81650),ht=function(){var t=function(D,r,a,i){for(a=a||{},i=D.length;i--;a[D[i]]=r);return a},s=[1,2],n=[1,3],u=[1,5],h=[1,7],p=[2,5],y=[1,15],x=[1,17],d=[1,21],b=[1,22],k=[1,23],H=[1,24],P=[1,37],K=[1,25],W=[1,26],X=[1,27],J=[1,28],q=[1,29],Q=[1,32],Z=[1,33],tt=[1,34],et=[1,35],st=[1,36],it=[1,39],rt=[1,40],nt=[1,41],at=[1,42],V=[1,38],Yt=[1,45],o=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],ct=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],gt=[1,4,5,7,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],Gt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],mt={trace:function(){},yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,directive:6,SD:7,document:8,line:9,statement:10,classDefStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,class:42,CLASSENTITY_IDS:43,STYLECLASS:44,openDirective:45,typeDirective:46,closeDirective:47,":":48,argDirective:49,direction_tb:50,direction_bt:51,direction_rl:52,direction_lr:53,eol:54,";":55,EDGE_STATE:56,STYLE_SEPARATOR:57,left_of:58,right_of:59,open_directive:60,type_directive:61,arg_directive:62,close_directive:63,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",7:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"class",43:"CLASSENTITY_IDS",44:"STYLECLASS",48:":",50:"direction_tb",51:"direction_bt",52:"direction_rl",53:"direction_lr",55:";",56:"EDGE_STATE",57:"STYLE_SEPARATOR",58:"left_of",59:"right_of",60:"open_directive",61:"type_directive",62:"arg_directive",63:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,2],[8,0],[8,2],[9,2],[9,1],[9,1],[10,1],[10,1],[10,1],[10,2],[10,3],[10,4],[10,1],[10,2],[10,1],[10,4],[10,3],[10,6],[10,1],[10,1],[10,1],[10,1],[10,4],[10,4],[10,1],[10,1],[10,2],[10,2],[10,1],[11,3],[11,3],[12,3],[6,3],[6,5],[32,1],[32,1],[32,1],[32,1],[54,1],[54,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1],[45,1],[46,1],[49,1],[47,1]],performAction:function(r,a,i,l,S,e,$){var c=e.length-1;switch(S){case 4:return l.setRootDoc(e[c]),e[c];case 5:this.$=[];break;case 6:e[c]!="nl"&&(e[c-1].push(e[c]),this.$=e[c-1]);break;case 7:case 8:this.$=e[c];break;case 9:this.$="nl";break;case 12:this.$=e[c];break;case 13:const F=e[c-1];F.description=l.trimColon(e[c]),this.$=F;break;case 14:this.$={stmt:"relation",state1:e[c-2],state2:e[c]};break;case 15:const kt=l.trimColon(e[c]);this.$={stmt:"relation",state1:e[c-3],state2:e[c-1],description:kt};break;case 19:this.$={stmt:"state",id:e[c-3],type:"default",description:"",doc:e[c-1]};break;case 20:var A=e[c],O=e[c-2].trim();if(e[c].match(":")){var lt=e[c].split(":");A=lt[0],O=[O,lt[1]]}this.$={stmt:"state",id:A,type:"default",description:O};break;case 21:this.$={stmt:"state",id:e[c-3],type:"default",description:e[c-5],doc:e[c-1]};break;case 22:this.$={stmt:"state",id:e[c],type:"fork"};break;case 23:this.$={stmt:"state",id:e[c],type:"join"};break;case 24:this.$={stmt:"state",id:e[c],type:"choice"};break;case 25:this.$={stmt:"state",id:l.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:e[c-1].trim(),note:{position:e[c-2].trim(),text:e[c].trim()}};break;case 30:this.$=e[c].trim(),l.setAccTitle(this.$);break;case 31:case 32:this.$=e[c].trim(),l.setAccDescription(this.$);break;case 33:case 34:this.$={stmt:"classDef",id:e[c-1].trim(),classes:e[c].trim()};break;case 35:this.$={stmt:"applyClass",id:e[c-1].trim(),styleClass:e[c].trim()};break;case 38:l.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:l.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:l.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:l.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:e[c].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:e[c-2].trim(),classes:[e[c].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:e[c-2].trim(),classes:[e[c].trim()],type:"default",description:""};break;case 50:l.parseDirective("%%{","open_directive");break;case 51:l.parseDirective(e[c],"type_directive");break;case 52:e[c]=e[c].trim().replace(/'/g,'"'),l.parseDirective(e[c],"arg_directive");break;case 53:l.parseDirective("}%%","close_directive","state");break}},table:[{3:1,4:s,5:n,6:4,7:u,45:6,60:h},{1:[3]},{3:8,4:s,5:n,6:4,7:u,45:6,60:h},{3:9,4:s,5:n,6:4,7:u,45:6,60:h},{3:10,4:s,5:n,6:4,7:u,45:6,60:h},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,50,51,52,53,56,60],p,{8:11}),{46:12,61:[1,13]},{61:[2,50]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{1:[2,4],4:y,5:x,6:30,9:14,10:16,11:18,12:19,13:20,16:d,17:b,19:k,22:H,24:P,25:K,26:W,27:X,28:J,29:q,32:31,33:Q,35:Z,37:tt,38:et,42:st,45:6,50:it,51:rt,52:nt,53:at,56:V,60:h},{47:43,48:[1,44],63:Yt},t([48,63],[2,51]),t(o,[2,6]),{6:30,10:46,11:18,12:19,13:20,16:d,17:b,19:k,22:H,24:P,25:K,26:W,27:X,28:J,29:q,32:31,33:Q,35:Z,37:tt,38:et,42:st,45:6,50:it,51:rt,52:nt,53:at,56:V,60:h},t(o,[2,8]),t(o,[2,9]),t(o,[2,10]),t(o,[2,11]),t(o,[2,12],{14:[1,47],15:[1,48]}),t(o,[2,16]),{18:[1,49]},t(o,[2,18],{20:[1,50]}),{23:[1,51]},t(o,[2,22]),t(o,[2,23]),t(o,[2,24]),t(o,[2,25]),{30:52,31:[1,53],58:[1,54],59:[1,55]},t(o,[2,28]),t(o,[2,29]),{34:[1,56]},{36:[1,57]},t(o,[2,32]),{39:[1,58],41:[1,59]},{43:[1,60]},t(ct,[2,44],{57:[1,61]}),t(ct,[2,45],{57:[1,62]}),t(o,[2,38]),t(o,[2,39]),t(o,[2,40]),t(o,[2,41]),t(gt,[2,36]),{49:63,62:[1,64]},t(gt,[2,53]),t(o,[2,7]),t(o,[2,13]),{13:65,24:P,56:V},t(o,[2,17]),t(Gt,p,{8:66}),{24:[1,67]},{24:[1,68]},{23:[1,69]},{24:[2,48]},{24:[2,49]},t(o,[2,30]),t(o,[2,31]),{40:[1,70]},{40:[1,71]},{44:[1,72]},{24:[1,73]},{24:[1,74]},{47:75,63:Yt},{63:[2,52]},t(o,[2,14],{14:[1,76]}),{4:y,5:x,6:30,9:14,10:16,11:18,12:19,13:20,16:d,17:b,19:k,21:[1,77],22:H,24:P,25:K,26:W,27:X,28:J,29:q,32:31,33:Q,35:Z,37:tt,38:et,42:st,45:6,50:it,51:rt,52:nt,53:at,56:V,60:h},t(o,[2,20],{20:[1,78]}),{31:[1,79]},{24:[1,80]},t(o,[2,33]),t(o,[2,34]),t(o,[2,35]),t(ct,[2,46]),t(ct,[2,47]),t(gt,[2,37]),t(o,[2,15]),t(o,[2,19]),t(Gt,p,{8:81}),t(o,[2,26]),t(o,[2,27]),{4:y,5:x,6:30,9:14,10:16,11:18,12:19,13:20,16:d,17:b,19:k,21:[1,82],22:H,24:P,25:K,26:W,27:X,28:J,29:q,32:31,33:Q,35:Z,37:tt,38:et,42:st,45:6,50:it,51:rt,52:nt,53:at,56:V,60:h},t(o,[2,21])],defaultActions:{7:[2,50],8:[2,1],9:[2,2],10:[2,3],54:[2,48],55:[2,49],64:[2,52]},parseError:function(r,a){if(a.recoverable)this.trace(r);else{var i=new Error(r);throw i.hash=a,i}},parse:function(r){var a=this,i=[0],l=[],S=[null],e=[],$=this.table,c="",A=0,O=0,lt=2,F=1,kt=e.slice.call(arguments,1),_=Object.create(this.lexer),L={yy:{}};for(var bt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,bt)&&(L.yy[bt]=this.yy[bt]);_.setInput(r,L.yy),L.yy.lexer=_,L.yy.parser=this,typeof _.yylloc=="undefined"&&(_.yylloc={});var Et=_.yylloc;e.push(Et);var ge=_.options&&_.options.ranges;typeof L.yy.parseError=="function"?this.parseError=L.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function me(){var v;return v=l.pop()||_.lex()||F,typeof v!="number"&&(v instanceof Array&&(l=v,v=l.pop()),v=a.symbols_[v]||v),v}for(var m,I,T,vt,N={},ot,E,jt,ut;;){if(I=i[i.length-1],this.defaultActions[I]?T=this.defaultActions[I]:((m===null||typeof m=="undefined")&&(m=me()),T=$[I]&&$[I][m]),typeof T=="undefined"||!T.length||!T[0]){var xt="";ut=[];for(ot in $[I])this.terminals_[ot]&&ot>lt&&ut.push("'"+this.terminals_[ot]+"'");_.showPosition?xt="Parse error on line "+(A+1)+`:
`+_.showPosition()+`
Expecting `+ut.join(", ")+", got '"+(this.terminals_[m]||m)+"'":xt="Parse error on line "+(A+1)+": Unexpected "+(m==F?"end of input":"'"+(this.terminals_[m]||m)+"'"),this.parseError(xt,{text:_.match,token:this.terminals_[m]||m,line:_.yylineno,loc:Et,expected:ut})}if(T[0]instanceof Array&&T.length>1)throw new Error("Parse Error: multiple actions possible at state: "+I+", token: "+m);switch(T[0]){case 1:i.push(m),S.push(_.yytext),e.push(_.yylloc),i.push(T[1]),m=null,O=_.yyleng,c=_.yytext,A=_.yylineno,Et=_.yylloc;break;case 2:if(E=this.productions_[T[1]][1],N.$=S[S.length-E],N._$={first_line:e[e.length-(E||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(E||1)].first_column,last_column:e[e.length-1].last_column},ge&&(N._$.range=[e[e.length-(E||1)].range[0],e[e.length-1].range[1]]),vt=this.performAction.apply(N,[c,O,A,L.yy,T[1],S,e].concat(kt)),typeof vt!="undefined")return vt;E&&(i=i.slice(0,-1*E*2),S=S.slice(0,-1*E),e=e.slice(0,-1*E)),i.push(this.productions_[T[1]][0]),S.push(N.$),e.push(N._$),jt=$[i[i.length-2]][i[i.length-1]],i.push(jt);break;case 3:return!0}}return!0}},_e=function(){var D={EOF:1,parseError:function(a,i){if(this.yy.parser)this.yy.parser.parseError(a,i);else throw new Error(a)},setInput:function(r,a){return this.yy=a||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var a=r.match(/(?:\r\n?|\n).*/g);return a?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},unput:function(r){var a=r.length,i=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-a),this.offset-=a;var l=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var S=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===l.length?this.yylloc.first_column:0)+l[l.length-i.length].length-i[0].length:this.yylloc.first_column-a},this.options.ranges&&(this.yylloc.range=[S[0],S[0]+this.yyleng-a]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(r){this.unput(this.match.slice(r))},pastInput:function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var r=this.pastInput(),a=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+a+"^"},test_match:function(r,a){var i,l,S;if(this.options.backtrack_lexer&&(S={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(S.yylloc.range=this.yylloc.range.slice(0))),l=r[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],i=this.performAction.call(this,this.yy,this,a,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var e in S)this[e]=S[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,a,i,l;this._more||(this.yytext="",this.match="");for(var S=this._currentRules(),e=0;e<S.length;e++)if(i=this._input.match(this.rules[S[e]]),i&&(!a||i[0].length>a[0].length)){if(a=i,l=e,this.options.backtrack_lexer){if(r=this.test_match(i,S[e]),r!==!1)return r;if(this._backtrack){a=!1;continue}else return!1}else if(!this.options.flex)break}return a?(r=this.test_match(a,S[l]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return a||this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){var a=this.conditionStack.length-1;return a>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(a){return a=this.conditionStack.length-1-Math.abs(a||0),a>=0?this.conditionStack[a]:"INITIAL"},pushState:function(a){this.begin(a)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(a,i,l,S){switch(l){case 0:return 41;case 1:return 50;case 2:return 51;case 3:return 52;case 4:return 53;case 5:return this.begin("open_directive"),60;case 6:return this.begin("type_directive"),61;case 7:return this.popState(),this.begin("arg_directive"),48;case 8:return this.popState(),this.popState(),63;case 9:return 62;case 10:break;case 11:break;case 12:return 5;case 13:break;case 14:break;case 15:break;case 16:break;case 17:return this.pushState("SCALE"),17;case 18:return 18;case 19:this.popState();break;case 20:return this.begin("acc_title"),33;case 21:return this.popState(),"acc_title_value";case 22:return this.begin("acc_descr"),35;case 23:return this.popState(),"acc_descr_value";case 24:this.begin("acc_descr_multiline");break;case 25:this.popState();break;case 26:return"acc_descr_multiline_value";case 27:return this.pushState("CLASSDEF"),38;case 28:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 29:return this.popState(),this.pushState("CLASSDEFID"),39;case 30:return this.popState(),40;case 31:return this.pushState("CLASS"),42;case 32:return this.popState(),this.pushState("CLASS_STYLE"),43;case 33:return this.popState(),44;case 34:return this.pushState("SCALE"),17;case 35:return 18;case 36:this.popState();break;case 37:this.pushState("STATE");break;case 38:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),25;case 39:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),26;case 40:return this.popState(),i.yytext=i.yytext.slice(0,-10).trim(),27;case 41:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),25;case 42:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),26;case 43:return this.popState(),i.yytext=i.yytext.slice(0,-10).trim(),27;case 44:return 50;case 45:return 51;case 46:return 52;case 47:return 53;case 48:this.pushState("STATE_STRING");break;case 49:return this.pushState("STATE_ID"),"AS";case 50:return this.popState(),"ID";case 51:this.popState();break;case 52:return"STATE_DESCR";case 53:return 19;case 54:this.popState();break;case 55:return this.popState(),this.pushState("struct"),20;case 56:break;case 57:return this.popState(),21;case 58:break;case 59:return this.begin("NOTE"),29;case 60:return this.popState(),this.pushState("NOTE_ID"),58;case 61:return this.popState(),this.pushState("NOTE_ID"),59;case 62:this.popState(),this.pushState("FLOATING_NOTE");break;case 63:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 64:break;case 65:return"NOTE_TEXT";case 66:return this.popState(),"ID";case 67:return this.popState(),this.pushState("NOTE_TEXT"),24;case 68:return this.popState(),i.yytext=i.yytext.substr(2).trim(),31;case 69:return this.popState(),i.yytext=i.yytext.slice(0,-8).trim(),31;case 70:return 7;case 71:return 7;case 72:return 16;case 73:return 56;case 74:return 24;case 75:return i.yytext=i.yytext.trim(),14;case 76:return 15;case 77:return 28;case 78:return 57;case 79:return 5;case 80:return"INVALID"}},rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[14,15],inclusive:!1},close_directive:{rules:[14,15],inclusive:!1},arg_directive:{rules:[8,9,14,15],inclusive:!1},type_directive:{rules:[7,8,14,15],inclusive:!1},open_directive:{rules:[6,14,15],inclusive:!1},struct:{rules:[14,15,27,31,37,44,45,46,47,56,57,58,59,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[66],inclusive:!1},FLOATING_NOTE:{rules:[63,64,65],inclusive:!1},NOTE_TEXT:{rules:[68,69],inclusive:!1},NOTE_ID:{rules:[67],inclusive:!1},NOTE:{rules:[60,61,62],inclusive:!1},CLASS_STYLE:{rules:[33],inclusive:!1},CLASS:{rules:[32],inclusive:!1},CLASSDEFID:{rules:[30],inclusive:!1},CLASSDEF:{rules:[28,29],inclusive:!1},acc_descr_multiline:{rules:[25,26],inclusive:!1},acc_descr:{rules:[23],inclusive:!1},acc_title:{rules:[21],inclusive:!1},SCALE:{rules:[18,19,35,36],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[50],inclusive:!1},STATE_STRING:{rules:[51,52],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[14,15,38,39,40,41,42,43,48,49,53,54,55],inclusive:!1},ID:{rules:[14,15],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,10,11,12,13,15,16,17,20,22,24,27,31,34,37,55,59,70,71,72,73,74,75,76,78,79,80],inclusive:!0}}};return D}();mt.lexer=_e;function Tt(){this.yy={}}return Tt.prototype=mt,mt.Parser=Tt,new Tt}();ht.parser=ht;const Mt=ht,zt="LR",Ht="TB",Y="state",ft="relation",Kt="classDef",Wt="applyClass",G="default",Ct="divider",dt="[*]",At="start",Lt=dt,It="end",Ot="color",Nt="fill",Xt="bgFill",Jt=",";function Rt(){return{}}let wt=zt,j=[],R=Rt();const Bt=()=>({relations:[],states:{},documents:{}});let U={root:Bt()},g=U.root,w=0,Pt=0;const qt={LINE:0,DOTTED_LINE:1},Qt={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},M=t=>JSON.parse(JSON.stringify(t)),Zt=function(t,s,n){f.m.parseDirective(this,t,s,n)},te=t=>{f.l.info("Setting root doc",t),j=t},ee=()=>j,z=(t,s,n)=>{if(s.stmt===ft)z(t,s.state1,!0),z(t,s.state2,!1);else if(s.stmt===Y&&(s.id==="[*]"?(s.id=n?t.id+"_start":t.id+"_end",s.start=n):s.id=s.id.trim()),s.doc){const u=[];let h=[],p;for(p=0;p<s.doc.length;p++)if(s.doc[p].type===Ct){const y=M(s.doc[p]);y.doc=M(h),u.push(y),h=[]}else h.push(s.doc[p]);if(u.length>0&&h.length>0){const y={stmt:Y,id:(0,f.F)(),type:"divider",doc:M(h)};u.push(M(y)),s.doc=u}s.doc.forEach(y=>z(s,y,!0))}},se=()=>(z({id:"root"},{id:"root",doc:j},!0),{id:"root",doc:j}),ie=t=>{let s;t.doc?s=t.doc:s=t,f.l.info(s),Vt(!0),f.l.info("Extract",s),s.forEach(n=>{switch(n.stmt){case Y:C(n.id.trim(),n.type,n.doc,n.description,n.note,n.classes,n.styles,n.textStyles);break;case ft:$t(n.state1,n.state2,n.description);break;case Kt:Ft(n.id.trim(),n.classes);break;case Wt:_t(n.id.trim(),n.styleClass);break}})},C=function(t,s=G,n=null,u=null,h=null,p=null,y=null,x=null){const d=t==null?void 0:t.trim();g.states[d]===void 0?(f.l.info("Adding state ",d,u),g.states[d]={id:d,descriptions:[],type:s,doc:n,note:h,classes:[],styles:[],textStyles:[]}):(g.states[d].doc||(g.states[d].doc=n),g.states[d].type||(g.states[d].type=s)),u&&(f.l.info("Setting state description",d,u),typeof u=="string"&&St(d,u.trim()),typeof u=="object"&&u.forEach(b=>St(d,b.trim()))),h&&(g.states[d].note=h,g.states[d].note.text=f.e.sanitizeText(g.states[d].note.text,(0,f.c)())),p&&(f.l.info("Setting state classes",d,p),(typeof p=="string"?[p]:p).forEach(k=>_t(d,k.trim()))),y&&(f.l.info("Setting state styles",d,y),(typeof y=="string"?[y]:y).forEach(k=>de(d,k.trim()))),x&&(f.l.info("Setting state styles",d,y),(typeof x=="string"?[x]:x).forEach(k=>pe(d,k.trim())))},Vt=function(t){U={root:Bt()},g=U.root,w=0,R=Rt(),t||(0,f.v)()},B=function(t){return g.states[t]},re=function(){return g.states},ne=function(){f.l.info("Documents = ",U)},ae=function(){return g.relations};function pt(t=""){let s=t;return t===dt&&(w++,s=`${At}${w}`),s}function yt(t="",s=G){return t===dt?At:s}function ce(t=""){let s=t;return t===Lt&&(w++,s=`${It}${w}`),s}function le(t="",s=G){return t===Lt?It:s}function oe(t,s,n){let u=pt(t.id.trim()),h=yt(t.id.trim(),t.type),p=pt(s.id.trim()),y=yt(s.id.trim(),s.type);C(u,h,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),C(p,y,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),g.relations.push({id1:u,id2:p,relationTitle:f.e.sanitizeText(n,(0,f.c)())})}const $t=function(t,s,n){if(typeof t=="object")oe(t,s,n);else{const u=pt(t.trim()),h=yt(t),p=ce(s.trim()),y=le(s);C(u,h),C(p,y),g.relations.push({id1:u,id2:p,title:f.e.sanitizeText(n,(0,f.c)())})}},St=function(t,s){const n=g.states[t],u=s.startsWith(":")?s.replace(":","").trim():s;n.descriptions.push(f.e.sanitizeText(u,(0,f.c)()))},ue=function(t){return t.substring(0,1)===":"?t.substr(2).trim():t.trim()},he=()=>(Pt++,"divider-id-"+Pt),Ft=function(t,s=""){R[t]===void 0&&(R[t]={id:t,styles:[],textStyles:[]});const n=R[t];s!=null&&s.split(Jt).forEach(u=>{const h=u.replace(/([^;]*);/,"$1").trim();if(u.match(Ot)){const y=h.replace(Nt,Xt).replace(Ot,Nt);n.textStyles.push(y)}n.styles.push(h)})},fe=function(){return R},_t=function(t,s){t.split(",").forEach(function(n){let u=B(n);if(u===void 0){const h=n.trim();C(h),u=B(h)}u.classes.push(s)})},de=function(t,s){const n=B(t);n!==void 0&&n.textStyles.push(s)},pe=function(t,s){const n=B(t);n!==void 0&&n.textStyles.push(s)},ye={parseDirective:Zt,getConfig:()=>(0,f.c)().state,addState:C,clear:Vt,getState:B,getStates:re,getRelations:ae,getClasses:fe,getDirection:()=>wt,addRelation:$t,getDividerId:he,setDirection:t=>{wt=t},cleanupLabel:ue,lineType:qt,relationType:Qt,logDocuments:ne,getRootDoc:ee,setRootDoc:te,getRootDocV2:se,extract:ie,trimColon:t=>t&&t[0]===":"?t.substr(1).trim():t.trim(),getAccTitle:f.g,setAccTitle:f.s,getAccDescription:f.a,setAccDescription:f.b,addStyleClass:Ft,setCssClass:_t,addDescription:St,setDiagramTitle:f.r,getDiagramTitle:f.t},Se=t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`}}]);

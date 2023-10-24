"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[220],{59220:function(at,T,m){m.r(T),m.d(T,{diagram:function(){return et}});var _=m(77415),k=m(31539),R=m(42494),O=m(45625),t=m(81650),nt=m(19421),it=m(17967),st=m(27856);const N={},W=(e,n)=>{N[e]=n},U=e=>N[e],H=()=>Object.keys(N),v={get:U,set:W,keys:H,size:()=>H().length},D=e=>e.append("circle").attr("class","start-state").attr("r",(0,t.c)().state.sizeUnit).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit),I=e=>e.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,t.c)().state.textHeight).attr("class","divider").attr("x2",(0,t.c)().state.textHeight*2).attr("y1",0).attr("y2",0),G=(e,n)=>{const r=e.append("text").attr("x",2*(0,t.c)().state.padding).attr("y",(0,t.c)().state.textHeight+2*(0,t.c)().state.padding).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(n.id),o=r.node().getBBox();return e.insert("rect",":first-child").attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding).attr("width",o.width+2*(0,t.c)().state.padding).attr("height",o.height+2*(0,t.c)().state.padding).attr("rx",(0,t.c)().state.radius),r},K=(e,n)=>{const r=function(c,B,f){const b=c.append("tspan").attr("x",2*(0,t.c)().state.padding).text(B);f||b.attr("dy",(0,t.c)().state.textHeight)},s=e.append("text").attr("x",2*(0,t.c)().state.padding).attr("y",(0,t.c)().state.textHeight+1.3*(0,t.c)().state.padding).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(n.descriptions[0]).node().getBBox(),g=s.height,p=e.append("text").attr("x",(0,t.c)().state.padding).attr("y",g+(0,t.c)().state.padding*.4+(0,t.c)().state.dividerMargin+(0,t.c)().state.textHeight).attr("class","state-description");let a=!0,d=!0;n.descriptions.forEach(function(c){a||(r(p,c,d),d=!1),a=!1});const w=e.append("line").attr("x1",(0,t.c)().state.padding).attr("y1",(0,t.c)().state.padding+g+(0,t.c)().state.dividerMargin/2).attr("y2",(0,t.c)().state.padding+g+(0,t.c)().state.dividerMargin/2).attr("class","descr-divider"),x=p.node().getBBox(),l=Math.max(x.width,s.width);return w.attr("x2",l+3*(0,t.c)().state.padding),e.insert("rect",":first-child").attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding).attr("width",l+2*(0,t.c)().state.padding).attr("height",x.height+g+2*(0,t.c)().state.padding).attr("rx",(0,t.c)().state.radius),e},j=(e,n,r)=>{const o=(0,t.c)().state.padding,s=2*(0,t.c)().state.padding,g=e.node().getBBox(),p=g.width,a=g.x,d=e.append("text").attr("x",0).attr("y",(0,t.c)().state.titleShift).attr("font-size",(0,t.c)().state.fontSize).attr("class","state-title").text(n.id),x=d.node().getBBox().width+s;let l=Math.max(x,p);l===p&&(l=l+s);let c;const B=e.node().getBBox();n.doc,c=a-o,x>p&&(c=(p-l)/2+o),Math.abs(a-B.x)<o&&x>p&&(c=a-(x-p)/2);const f=1-(0,t.c)().state.textHeight;return e.insert("rect",":first-child").attr("x",c).attr("y",f).attr("class",r?"alt-composit":"composit").attr("width",l).attr("height",B.height+(0,t.c)().state.textHeight+(0,t.c)().state.titleShift+1).attr("rx","0"),d.attr("x",c+o),x<=p&&d.attr("x",a+(l-s)/2-x/2+o),e.insert("rect",":first-child").attr("x",c).attr("y",(0,t.c)().state.titleShift-(0,t.c)().state.textHeight-(0,t.c)().state.padding).attr("width",l).attr("height",(0,t.c)().state.textHeight*3).attr("rx",(0,t.c)().state.radius),e.insert("rect",":first-child").attr("x",c).attr("y",(0,t.c)().state.titleShift-(0,t.c)().state.textHeight-(0,t.c)().state.padding).attr("width",l).attr("height",B.height+3+2*(0,t.c)().state.textHeight).attr("rx",(0,t.c)().state.radius),e},F=e=>(e.append("circle").attr("class","end-state-outer").attr("r",(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+(0,t.c)().state.miniPadding),e.append("circle").attr("class","end-state-inner").attr("r",(0,t.c)().state.sizeUnit).attr("cx",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+2).attr("cy",(0,t.c)().state.padding+(0,t.c)().state.sizeUnit+2)),Y=(e,n)=>{let r=(0,t.c)().state.forkWidth,o=(0,t.c)().state.forkHeight;if(n.parentId){let s=r;r=o,o=s}return e.append("rect").style("stroke","black").style("fill","black").attr("width",r).attr("height",o).attr("x",(0,t.c)().state.padding).attr("y",(0,t.c)().state.padding)},X=(e,n,r,o)=>{let s=0;const g=o.append("text");g.style("text-anchor","start"),g.attr("class","noteText");let p=e.replace(/\r\n/g,"<br/>");p=p.replace(/\n/g,"<br/>");const a=p.split(t.e.lineBreakRegex);let d=1.25*(0,t.c)().state.noteMargin;for(const w of a){const x=w.trim();if(x.length>0){const l=g.append("tspan");if(l.text(x),d===0){const c=l.node().getBBox();d+=c.height}s+=d,l.attr("x",n+(0,t.c)().state.noteMargin),l.attr("y",r+s+1.25*(0,t.c)().state.noteMargin)}}return{textWidth:g.node().getBBox().width,textHeight:s}},$=(e,n)=>{n.attr("class","state-note");const r=n.append("rect").attr("x",0).attr("y",(0,t.c)().state.padding),o=n.append("g"),{textWidth:s,textHeight:g}=X(e,0,0,o);return r.attr("height",g+2*(0,t.c)().state.noteMargin),r.attr("width",s+(0,t.c)().state.noteMargin*2),r},z=function(e,n){const r=n.id,o={id:r,label:n.id,width:0,height:0},s=e.append("g").attr("id",r).attr("class","stateGroup");n.type==="start"&&D(s),n.type==="end"&&F(s),(n.type==="fork"||n.type==="join")&&Y(s,n),n.type==="note"&&$(n.note.text,s),n.type==="divider"&&I(s),n.type==="default"&&n.descriptions.length===0&&G(s,n),n.type==="default"&&n.descriptions.length>0&&K(s,n);const g=s.node().getBBox();return o.width=g.width+2*(0,t.c)().state.padding,o.height=g.height+2*(0,t.c)().state.padding,v.set(r,o),o};let A=0;const J=function(e,n,r){const o=function(d){switch(d){case _.d.relationType.AGGREGATION:return"aggregation";case _.d.relationType.EXTENSION:return"extension";case _.d.relationType.COMPOSITION:return"composition";case _.d.relationType.DEPENDENCY:return"dependency"}};n.points=n.points.filter(d=>!Number.isNaN(d.y));const s=n.points,g=(0,k.jvg)().x(function(d){return d.x}).y(function(d){return d.y}).curve(k.$0Z),p=e.append("path").attr("d",g(s)).attr("id","edge"+A).attr("class","transition");let a="";if((0,t.c)().state.arrowMarkerAbsolute&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),p.attr("marker-end","url("+a+"#"+o(_.d.relationType.DEPENDENCY)+"End)"),r.title!==void 0){const d=e.append("g").attr("class","stateLabel"),{x:w,y:x}=t.u.calcLabelPosition(n.points),l=t.e.getRows(r.title);let c=0;const B=[];let f=0,b=0;for(let u=0;u<=l.length;u++){const h=d.append("text").attr("text-anchor","middle").text(l[u]).attr("x",w).attr("y",x+c),y=h.node().getBBox();f=Math.max(f,y.width),b=Math.min(b,y.x),t.l.info(y.x,w,x+c),c===0&&(c=h.node().getBBox().height,t.l.info("Title height",c,x)),B.push(h)}let S=c*l.length;if(l.length>1){const u=(l.length-1)*c*.5;B.forEach((h,y)=>h.attr("y",x+y*c-u)),S=c*l.length}const i=d.node().getBBox();d.insert("rect",":first-child").attr("class","box").attr("x",w-f/2-(0,t.c)().state.padding/2).attr("y",x-S/2-(0,t.c)().state.padding/2-3.5).attr("width",f+(0,t.c)().state.padding).attr("height",S+(0,t.c)().state.padding),t.l.info(i)}A++};let E;const L={},Z=function(){},Q=function(e){e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},V=function(e,n,r,o){E=(0,t.c)().state;const s=(0,t.c)().securityLevel;let g;s==="sandbox"&&(g=(0,k.Ys)("#i"+n));const p=s==="sandbox"?(0,k.Ys)(g.nodes()[0].contentDocument.body):(0,k.Ys)("body"),a=s==="sandbox"?g.nodes()[0].contentDocument:document;t.l.debug("Rendering diagram "+e);const d=p.select(`[id='${n}']`);Q(d),new O.k({multigraph:!0,compound:!0,rankdir:"RL"}).setDefaultEdgeLabel(function(){return{}});const x=o.db.getRootDoc();C(x,d,void 0,!1,p,a,o);const l=E.padding,c=d.node().getBBox(),B=c.width+l*2,f=c.height+l*2,b=B*1.75;(0,t.i)(d,f,b,E.useMaxWidth),d.attr("viewBox",`${c.x-E.padding}  ${c.y-E.padding} `+B+" "+f)},q=e=>e?e.length*E.fontSizeFactor:1,C=(e,n,r,o,s,g,p)=>{const a=new O.k({compound:!0,multigraph:!0});let d,w=!0;for(d=0;d<e.length;d++)if(e[d].stmt==="relation"){w=!1;break}r?a.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:w?1:E.edgeLengthFactor,nodeSep:w?1:50,isMultiGraph:!0}):a.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:w?1:E.edgeLengthFactor,nodeSep:w?1:50,ranker:"tight-tree",isMultiGraph:!0}),a.setDefaultEdgeLabel(function(){return{}}),p.db.extract(e);const x=p.db.getStates(),l=p.db.getRelations(),c=Object.keys(x);for(const i of c){const u=x[i];r&&(u.parentId=r);let h;if(u.doc){let y=n.append("g").attr("id",u.id).attr("class","stateGroup");h=C(u.doc,y,u.id,!o,s,g,p);{y=j(y,u,o);let M=y.node().getBBox();h.width=M.width,h.height=M.height+E.padding/2,L[u.id]={y:E.compositTitleSize}}}else h=z(n,u);if(u.note){const y={descriptions:[],id:u.id+"-note",note:u.note,type:"note"},M=z(n,y);u.note.position==="left of"?(a.setNode(h.id+"-note",M),a.setNode(h.id,h)):(a.setNode(h.id,h),a.setNode(h.id+"-note",M)),a.setParent(h.id,h.id+"-group"),a.setParent(h.id+"-note",h.id+"-group")}else a.setNode(h.id,h)}t.l.debug("Count=",a.nodeCount(),a);let B=0;l.forEach(function(i){B++,t.l.debug("Setting edge",i),a.setEdge(i.id1,i.id2,{relation:i,width:q(i.title),height:E.labelHeight*t.e.getRows(i.title).length,labelpos:"c"},"id"+B)}),(0,R.bK)(a),t.l.debug("Graph after layout",a.nodes());const f=n.node();a.nodes().forEach(function(i){i!==void 0&&a.node(i)!==void 0?(t.l.warn("Node "+i+": "+JSON.stringify(a.node(i))),s.select("#"+f.id+" #"+i).attr("transform","translate("+(a.node(i).x-a.node(i).width/2)+","+(a.node(i).y+(L[i]?L[i].y:0)-a.node(i).height/2)+" )"),s.select("#"+f.id+" #"+i).attr("data-x-shift",a.node(i).x-a.node(i).width/2),g.querySelectorAll("#"+f.id+" #"+i+" .divider").forEach(h=>{const y=h.parentElement;let M=0,P=0;y&&(y.parentElement&&(M=y.parentElement.getBBox().width),P=parseInt(y.getAttribute("data-x-shift"),10),Number.isNaN(P)&&(P=0)),h.setAttribute("x1",0-P+8),h.setAttribute("x2",M-P-8)})):t.l.debug("No Node "+i+": "+JSON.stringify(a.node(i)))});let b=f.getBBox();a.edges().forEach(function(i){i!==void 0&&a.edge(i)!==void 0&&(t.l.debug("Edge "+i.v+" -> "+i.w+": "+JSON.stringify(a.edge(i))),J(n,a.edge(i),a.edge(i).relation))}),b=f.getBBox();const S={id:r||"root",label:r||"root",width:0,height:0};return S.width=b.width+2*E.padding,S.height=b.height+2*E.padding,t.l.debug("Doc rendered",S,a),S},tt={setConf:Z,draw:V},et={parser:_.p,db:_.d,renderer:tt,styles:_.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,_.d.clear()}}}}]);

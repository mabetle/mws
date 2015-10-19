/*
 Highcharts JS v4.1.8-modified ()

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(n,G){function K(a,b,c){this.init.call(this,a,b,c)}var P=n.arrayMin,Q=n.arrayMax,r=n.each,H=n.extend,s=n.merge,R=n.map,p=n.pick,y=n.pInt,o=n.getOptions().plotOptions,h=n.seriesTypes,u=n.extendClass,L=n.splat,q=n.wrap,M=n.Axis,z=n.Tick,I=n.Point,S=n.Pointer,T=n.CenteredSeriesMixin,x=n.TrackerMixin,w=n.Series,v=Math,E=v.round,B=v.floor,N=v.max,U=n.Color,t=function(){};H(K.prototype,{init:function(a,b,c){var d=this,e=d.defaultOptions;d.chart=b;d.options=a=s(e,b.angular?{background:{}}:void 0,
a);(a=a.background)&&r([].concat(L(a)).reverse(),function(a){var g=a.backgroundColor,b=c.userOptions,a=s(d.defaultBackgroundOptions,a);if(g)a.backgroundColor=g;a.color=a.backgroundColor;c.options.plotBands.unshift(a);b.plotBands=b.plotBands||[];b.plotBands.unshift(a)})},defaultOptions:{center:["50%","50%"],size:"85%",startAngle:0},defaultBackgroundOptions:{shape:"circle",borderWidth:1,borderColor:"silver",backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#FFF"],[1,"#DDD"]]},from:-Number.MAX_VALUE,
innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"}});var A=M.prototype,z=z.prototype,V={getOffset:t,redraw:function(){this.isDirty=!1},render:function(){this.isDirty=!1},setScale:t,setCategories:t,setTitle:t},O={isRadial:!0,defaultRadialGaugeOptions:{labels:{align:"center",x:0,y:null},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2},defaultRadialXOptions:{gridLineWidth:1,
labels:{align:null,distance:15,x:0,y:null},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0},defaultRadialYOptions:{gridLineInterpolation:"circle",labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}},setOptions:function(a){a=this.options=s(this.defaultOptions,this.defaultRadialOptions,a);if(!a.plotBands)a.plotBands=[]},getOffset:function(){A.getOffset.call(this);this.chart.axisOffset[this.side]=0;this.center=this.pane.center=T.getCenter.call(this.pane)},getLinePath:function(a,
b){var c=this.center,b=p(b,c[2]/2-this.offset);return this.chart.renderer.symbols.arc(this.left+c[0],this.top+c[1],b,b,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0})},setAxisTranslation:function(){A.setAxisTranslation.call(this);if(this.center)this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):this.center[2]/2/(this.max-this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0},beforeSetTickPositions:function(){this.autoConnect&&
(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)},setAxisSize:function(){A.setAxisSize.call(this);if(this.isRadial){this.center=this.pane.center=n.CenteredSeriesMixin.getCenter.call(this.pane);if(this.isCircular)this.sector=this.endAngleRad-this.startAngleRad;this.len=this.width=this.height=this.center[2]*p(this.sector,1)/2}},getPosition:function(a,b){return this.postTranslate(this.isCircular?this.translate(a):0,p(this.isCircular?b:this.translate(a),this.center[2]/2)-this.offset)},
postTranslate:function(a,b){var c=this.chart,d=this.center,a=this.startAngleRad+a;return{x:c.plotLeft+d[0]+Math.cos(a)*b,y:c.plotTop+d[1]+Math.sin(a)*b}},getPlotBandPath:function(a,b,c){var d=this.center,e=this.startAngleRad,f=d[2]/2,g=[p(c.outerRadius,"100%"),c.innerRadius,p(c.thickness,10)],i=/%$/,k,l=this.isCircular;this.options.gridLineInterpolation==="polygon"?d=this.getPlotLinePath(a).concat(this.getPlotLinePath(b,!0)):(a=Math.max(a,this.min),b=Math.min(b,this.max),l||(g[0]=this.translate(a),
g[1]=this.translate(b)),g=R(g,function(a){i.test(a)&&(a=y(a,10)*f/100);return a}),c.shape==="circle"||!l?(a=-Math.PI/2,b=Math.PI*1.5,k=!0):(a=e+this.translate(a),b=e+this.translate(b)),d=this.chart.renderer.symbols.arc(this.left+d[0],this.top+d[1],g[0],g[0],{start:Math.min(a,b),end:Math.max(a,b),innerR:p(g[1],g[0]-g[2]),open:k}));return d},getPlotLinePath:function(a,b){var c=this,d=c.center,e=c.chart,f=c.getPosition(a),g,i,k;c.isCircular?k=["M",d[0]+e.plotLeft,d[1]+e.plotTop,"L",f.x,f.y]:c.options.gridLineInterpolation===
"circle"?(a=c.translate(a))&&(k=c.getLinePath(0,a)):(r(e.xAxis,function(a){a.pane===c.pane&&(g=a)}),k=[],a=c.translate(a),d=g.tickPositions,g.autoConnect&&(d=d.concat([d[0]])),b&&(d=[].concat(d).reverse()),r(d,function(f,c){i=g.getPosition(f,a);k.push(c?"L":"M",i.x,i.y)}));return k},getTitlePosition:function(){var a=this.center,b=this.chart,c=this.options.title;return{x:b.plotLeft+a[0]+(c.x||0),y:b.plotTop+a[1]-{high:0.5,middle:0.25,low:0}[c.align]*a[2]+(c.y||0)}}};q(A,"init",function(a,b,c){var j;
var d=b.angular,e=b.polar,f=c.isX,g=d&&f,i,k;k=b.options;var l=c.pane||0;if(d){if(H(this,g?V:O),i=!f)this.defaultRadialOptions=this.defaultRadialGaugeOptions}else if(e)H(this,O),this.defaultRadialOptions=(i=f)?this.defaultRadialXOptions:s(this.defaultYAxisOptions,this.defaultRadialYOptions);a.call(this,b,c);if(!g&&(d||e)){a=this.options;if(!b.panes)b.panes=[];this.pane=(j=b.panes[l]=b.panes[l]||new K(L(k.pane)[l],b,this),l=j);l=l.options;b.inverted=!1;k.chart.zoomType=null;this.startAngleRad=b=(l.startAngle-
90)*Math.PI/180;this.endAngleRad=k=(p(l.endAngle,l.startAngle+360)-90)*Math.PI/180;this.offset=a.offset||0;if((this.isCircular=i)&&c.max===G&&k-b===2*Math.PI)this.autoConnect=!0}});q(z,"getPosition",function(a,b,c,d,e){var f=this.axis;return f.getPosition?f.getPosition(c):a.call(this,b,c,d,e)});q(z,"getLabelPosition",function(a,b,c,d,e,f,g,i,k){var l=this.axis,j=f.y,m=20,D=f.align,h=(l.translate(this.pos)+l.startAngleRad+Math.PI/2)/Math.PI*180%360;l.isRadial?(a=l.getPosition(this.pos,l.center[2]/
2+p(f.distance,-25)),f.rotation==="auto"?d.attr({rotation:h}):j===null&&(j=l.chart.renderer.fontMetrics(d.styles.fontSize).b-d.getBBox().height/2),D===null&&(l.isCircular?(this.label.getBBox().width>l.len*l.tickInterval/(l.max-l.min)&&(m=0),D=h>m&&h<180-m?"left":h>180+m&&h<360-m?"right":"center"):D="center",d.attr({align:D})),a.x+=f.x,a.y+=j):a=a.call(this,b,c,d,e,f,g,i,k);return a});q(z,"getMarkPath",function(a,b,c,d,e,f,g){var i=this.axis;i.isRadial?(a=i.getPosition(this.pos,i.center[2]/2+d),b=
["M",b,c,"L",a.x,a.y]):b=a.call(this,b,c,d,e,f,g);return b});o.arearange=s(o.area,{lineWidth:1,marker:null,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:null,verticalAlign:null,xLow:0,xHigh:0,yLow:0,yHigh:0},states:{hover:{halo:!1}}});h.arearange=u(h.area,{type:"arearange",pointArrayMap:["low","high"],dataLabelCollections:["dataLabel","dataLabelUpper"],toYData:function(a){return[a.low,
a.high]},pointValKey:"low",deferTranslatePolar:!0,highToXY:function(a){var b=this.chart,c=this.xAxis.postTranslate(a.rectPlotX,this.yAxis.len-a.plotHigh);a.plotHighX=c.x-b.plotLeft;a.plotHigh=c.y-b.plotTop},getSegments:function(){var a=this;r(a.points,function(b){if(!a.options.connectNulls&&(b.low===null||b.high===null))b.y=null;else if(b.low===null&&b.high!==null)b.y=b.high});w.prototype.getSegments.call(this)},translate:function(){var a=this,b=a.yAxis;h.area.prototype.translate.apply(a);r(a.points,
function(a){var d=a.low,e=a.high,f=a.plotY;e===null&&d===null?a.y=null:d===null?(a.plotLow=a.plotY=null,a.plotHigh=b.translate(e,0,1,0,1)):e===null?(a.plotLow=f,a.plotHigh=null):(a.plotLow=f,a.plotHigh=b.translate(e,0,1,0,1))});this.chart.polar&&r(this.points,function(c){a.highToXY(c)})},getSegmentPath:function(a){var b,c=[],d=a.length,e=w.prototype.getSegmentPath,f,g;g=this.options;var i=g.step;for(b=HighchartsAdapter.grep(a,function(a){return a.plotLow!==null});d--;)f=a[d],f.plotHigh!==null&&c.push({plotX:f.plotHighX||
f.plotX,plotY:f.plotHigh});a=e.call(this,b);if(i)i===!0&&(i="left"),g.step={left:"right",center:"center",right:"left"}[i];c=e.call(this,c);g.step=i;g=[].concat(a,c);this.chart.polar||(c[0]="L");this.areaPath=this.areaPath.concat(a,c);return g},drawDataLabels:function(){var a=this.data,b=a.length,c,d=[],e=w.prototype,f=this.options.dataLabels,g=f.align,i,k,l=this.chart.inverted;if(f.enabled||this._hasPointLabels){for(c=b;c--;)if(i=a[c])if(k=i.plotHigh>i.plotLow,i.y=i.high,i._plotY=i.plotY,i.plotY=
i.plotHigh,d[c]=i.dataLabel,i.dataLabel=i.dataLabelUpper,i.below=k,l){if(!g)f.align=k?"right":"left";f.x=f.xHigh}else f.y=f.yHigh;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments);for(c=b;c--;)if(i=a[c])if(k=i.plotHigh>i.plotLow,i.dataLabelUpper=i.dataLabel,i.dataLabel=d[c],i.y=i.low,i.plotY=i._plotY,i.below=!k,l){if(!g)f.align=k?"left":"right";f.x=f.xLow}else f.y=f.yLow;e.drawDataLabels&&e.drawDataLabels.apply(this,arguments)}f.align=g},alignDataLabel:function(){h.column.prototype.alignDataLabel.apply(this,
arguments)},setStackedPoints:t,getSymbol:t,drawPoints:t});o.areasplinerange=s(o.arearange);h.areasplinerange=u(h.arearange,{type:"areasplinerange",getPointSpline:h.spline.prototype.getPointSpline});(function(){var a=h.column.prototype;o.columnrange=s(o.column,o.arearange,{lineWidth:1,pointRange:null});h.columnrange=u(h.arearange,{type:"columnrange",translate:function(){var b=this,c=b.yAxis,d;a.translate.apply(b);r(b.points,function(a){var f=a.shapeArgs,g=b.options.minPointLength,i;a.tooltipPos=null;
a.plotHigh=d=c.translate(a.high,0,1,0,1);a.plotLow=a.plotY;i=d;a=a.plotY-d;Math.abs(a)<g?(g-=a,a+=g,i-=g/2):a<0&&(a*=-1,i-=a);f.height=a;f.y=i})},directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:t,pointAttrToOptions:a.pointAttrToOptions,drawPoints:a.drawPoints,drawTracker:a.drawTracker,animate:a.animate,getColumnMetrics:a.getColumnMetrics})})();o.gauge=s(o.line,{dataLabels:{enabled:!0,defer:!1,y:15,borderWidth:1,borderColor:"silver",borderRadius:3,crop:!1,verticalAlign:"top",zIndex:2},
dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});x={type:"gauge",pointClass:u(I,{setState:function(a){this.state=a}}),angular:!0,drawGraph:t,fixedBox:!0,forceDL:!0,trackerGroups:["group","dataLabelsGroup"],translate:function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints();r(this.points,function(d){var e=s(b.dial,d.dial),f=y(p(e.radius,80))*c[2]/200,g=y(p(e.baseLength,70))*f/100,i=y(p(e.rearLength,10))*f/100,k=e.baseWidth||3,l=e.topWidth||1,j=b.overshoot,m=a.startAngleRad+
a.translate(d.y,null,null,null,!0);j&&typeof j==="number"?(j=j/180*Math.PI,m=Math.max(a.startAngleRad-j,Math.min(a.endAngleRad+j,m))):b.wrap===!1&&(m=Math.max(a.startAngleRad,Math.min(a.endAngleRad,m)));m=m*180/Math.PI;d.shapeType="path";d.shapeArgs={d:e.path||["M",-i,-k/2,"L",g,-k/2,f,-l/2,f,l/2,g,k/2,-i,k/2,"z"],translateX:c[0],translateY:c[1],rotation:m};d.plotX=c[0];d.plotY=c[1]})},drawPoints:function(){var a=this,b=a.yAxis.center,c=a.pivot,d=a.options,e=d.pivot,f=a.chart.renderer;r(a.points,
function(g){var c=g.graphic,b=g.shapeArgs,e=b.d,j=s(d.dial,g.dial);c?(c.animate(b),b.d=e):g.graphic=f[g.shapeType](b).attr({stroke:j.borderColor||"none","stroke-width":j.borderWidth||0,fill:j.backgroundColor||"black",rotation:b.rotation}).add(a.group)});c?c.animate({translateX:b[0],translateY:b[1]}):a.pivot=f.circle(0,0,p(e.radius,5)).attr({"stroke-width":e.borderWidth||0,stroke:e.borderColor||"silver",fill:e.backgroundColor||"black"}).translate(b[0],b[1]).add(a.group)},animate:function(a){var b=
this;if(!a)r(b.points,function(a){var d=a.graphic;d&&(d.attr({rotation:b.yAxis.startAngleRad*180/Math.PI}),d.animate({rotation:a.shapeArgs.rotation},b.options.animation))}),b.animate=null},render:function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);w.prototype.render.call(this);this.group.clip(this.chart.clipRect)},setData:function(a,b){w.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();p(b,!0)&&
this.chart.redraw()},drawTracker:x&&x.drawTrackerPoint};h.gauge=u(h.line,x);o.boxplot=s(o.column,{fillColor:"#FFFFFF",lineWidth:1,medianWidth:2,states:{hover:{brightness:-0.3}},threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},whiskerLength:"50%",whiskerWidth:2});h.boxplot=u(h.column,{type:"boxplot",
pointArrayMap:["low","q1","median","q3","high"],toYData:function(a){return[a.low,a.q1,a.median,a.q3,a.high]},pointValKey:"high",pointAttrToOptions:{fill:"fillColor",stroke:"color","stroke-width":"lineWidth"},drawDataLabels:t,translate:function(){var a=this.yAxis,b=this.pointArrayMap;h.column.prototype.translate.apply(this);r(this.points,function(c){r(b,function(b){c[b]!==null&&(c[b+"Plot"]=a.translate(c[b],0,1,0,1))})})},drawPoints:function(){var a=this,b=a.points,c=a.options,d=a.chart.renderer,e,
f,g,i,k,l,j,m,h,n,o,J,s,q,t,u,w,v,y,x,z,A,F=a.doQuartiles!==!1,C=parseInt(a.options.whiskerLength,10)/100;r(b,function(b){h=b.graphic;z=b.shapeArgs;o={};q={};u={};A=b.color||a.color;if(b.plotY!==G)if(e=b.pointAttr[b.selected?"selected":""],w=z.width,v=B(z.x),y=v+w,x=E(w/2),f=B(F?b.q1Plot:b.lowPlot),g=B(F?b.q3Plot:b.lowPlot),i=B(b.highPlot),k=B(b.lowPlot),o.stroke=b.stemColor||c.stemColor||A,o["stroke-width"]=p(b.stemWidth,c.stemWidth,c.lineWidth),o.dashstyle=b.stemDashStyle||c.stemDashStyle,q.stroke=
b.whiskerColor||c.whiskerColor||A,q["stroke-width"]=p(b.whiskerWidth,c.whiskerWidth,c.lineWidth),u.stroke=b.medianColor||c.medianColor||A,u["stroke-width"]=p(b.medianWidth,c.medianWidth,c.lineWidth),j=o["stroke-width"]%2/2,m=v+x+j,n=["M",m,g,"L",m,i,"M",m,f,"L",m,k],F&&(j=e["stroke-width"]%2/2,m=B(m)+j,f=B(f)+j,g=B(g)+j,v+=j,y+=j,J=["M",v,g,"L",v,f,"L",y,f,"L",y,g,"L",v,g,"z"]),C&&(j=q["stroke-width"]%2/2,i+=j,k+=j,s=["M",m-x*C,i,"L",m+x*C,i,"M",m-x*C,k,"L",m+x*C,k]),j=u["stroke-width"]%2/2,l=E(b.medianPlot)+
j,t=["M",v,l,"L",y,l],h)b.stem.animate({d:n}),C&&b.whiskers.animate({d:s}),F&&b.box.animate({d:J}),b.medianShape.animate({d:t});else{b.graphic=h=d.g().add(a.group);b.stem=d.path(n).attr(o).add(h);if(C)b.whiskers=d.path(s).attr(q).add(h);if(F)b.box=d.path(J).attr(e).add(h);b.medianShape=d.path(t).attr(u).add(h)}})},setStackedPoints:t});o.errorbar=s(o.boxplot,{color:"#000000",grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
whiskerWidth:null});h.errorbar=u(h.boxplot,{type:"errorbar",pointArrayMap:["low","high"],toYData:function(a){return[a.low,a.high]},pointValKey:"high",doQuartiles:!1,drawDataLabels:h.arearange?h.arearange.prototype.drawDataLabels:t,getColumnMetrics:function(){return this.linkedParent&&this.linkedParent.columnMetrics||h.column.prototype.getColumnMetrics.call(this)}});o.waterfall=s(o.column,{lineWidth:1,lineColor:"#333",dashStyle:"dot",borderColor:"#333",dataLabels:{inside:!0},states:{hover:{lineWidthPlus:0}}});
h.waterfall=u(h.column,{type:"waterfall",upColorProp:"fill",pointValKey:"y",translate:function(){var a=this.options,b=this.yAxis,c,d,e,f,g,i,k,l,j,m=a.threshold,D=a.stacking;h.column.prototype.translate.apply(this);k=l=m;d=this.points;for(c=0,a=d.length;c<a;c++){e=d[c];i=this.processedYData[c];f=e.shapeArgs;j=(g=D&&b.stacks[(this.negStacks&&i<m?"-":"")+this.stackKey])?g[e.x].points[this.index+","+c]:[0,i];if(e.isSum)e.y=i;else if(e.isIntermediateSum)e.y=i-l;g=N(k,k+e.y)+j[0];f.y=b.translate(g,0,1);
if(e.isSum)f.y=b.translate(j[1],0,1),f.height=Math.min(b.translate(j[0],0,1),b.len)-f.y;else if(e.isIntermediateSum)f.y=b.translate(j[1],0,1),f.height=Math.min(b.translate(l,0,1),b.len)-f.y,l=j[1];else{if(k!==0)f.height=i>0?b.translate(k,0,1)-f.y:b.translate(k,0,1)-b.translate(k-i,0,1);k+=i}f.height<0&&(f.y+=f.height,f.height*=-1);e.plotY=f.y=E(f.y)-this.borderWidth%2/2;f.height=N(E(f.height),0.001);e.yBottom=f.y+f.height;f=e.plotY+(e.negative?f.height:0);this.chart.inverted?e.tooltipPos[0]=b.len-
f:e.tooltipPos[1]=f}},processData:function(a){var b=this.yData,c=this.options.data,d,e=b.length,f,g,i,k,l,j;g=f=i=k=this.options.threshold||0;for(j=0;j<e;j++)l=b[j],d=c&&c[j]?c[j]:{},l==="sum"||d.isSum?b[j]=g:l==="intermediateSum"||d.isIntermediateSum?b[j]=f:(g+=l,f+=l),i=Math.min(g,i),k=Math.max(g,k);w.prototype.processData.call(this,a);this.dataMin=i;this.dataMax=k},toYData:function(a){if(a.isSum)return a.x===0?null:"sum";else if(a.isIntermediateSum)return a.x===0?null:"intermediateSum";return a.y},
getAttribs:function(){h.column.prototype.getAttribs.apply(this,arguments);var a=this,b=a.options,c=b.states,d=b.upColor||a.color,b=n.Color(d).brighten(0.1).get(),e=s(a.pointAttr),f=a.upColorProp;e[""][f]=d;e.hover[f]=c.hover.upColor||b;e.select[f]=c.select.upColor||d;r(a.points,function(b){if(!b.options.color)b.y>0?(b.pointAttr=e,b.color=d):b.pointAttr=a.pointAttr})},getGraphPath:function(){var a=this.data,b=a.length,c=E(this.options.lineWidth+this.borderWidth)%2/2,d=[],e,f,g;for(g=1;g<b;g++)f=a[g].shapeArgs,
e=a[g-1].shapeArgs,f=["M",e.x+e.width,e.y+c,"L",f.x,e.y+c],a[g-1].y<0&&(f[2]+=e.height,f[5]+=e.height),d=d.concat(f);return d},getExtremes:t,drawGraph:w.prototype.drawGraph});o.polygon=s(o.scatter,{marker:{enabled:!1}});h.polygon=u(h.scatter,{type:"polygon",fillGraph:!0,getSegmentPath:function(a){return w.prototype.getSegmentPath.call(this,a).concat("z")},drawGraph:w.prototype.drawGraph,drawLegendSymbol:n.LegendSymbolMixin.drawRectangle});o.bubble=s(o.scatter,{dataLabels:{formatter:function(){return this.point.z},
inside:!0,verticalAlign:"middle"},marker:{lineColor:null,lineWidth:1},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"});x=u(I,{haloPath:function(){return I.prototype.haloPath.call(this,this.shapeArgs.r+this.series.options.states.hover.halo.size)},ttBelow:!1});h.bubble=u(h.scatter,{type:"bubble",pointClass:x,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],trackerGroups:["group",
"dataLabelsGroup"],bubblePadding:!0,zoneAxis:"z",pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor"},applyOpacity:function(a){var b=this.options.marker,c=p(b.fillOpacity,0.5),a=a||b.fillColor||this.color;c!==1&&(a=U(a).setOpacity(c).get("rgba"));return a},convertAttribs:function(){var a=w.prototype.convertAttribs.apply(this,arguments);a.fill=this.applyOpacity(a.fill);return a},getRadii:function(a,b,c,d){var e,f,g,i=this.zData,k=[],l=this.options,j=l.sizeBy!=="width",
m=l.zThreshold,h=b-a;for(f=0,e=i.length;f<e;f++)g=i[f],l.sizeByAbsoluteValue&&(g=Math.abs(g-m),b=Math.max(b-m,Math.abs(a-m)),a=0),g===null?g=null:g<a?g=c/2-1:(g=h>0?(g-a)/h:0.5,j&&g>=0&&(g=Math.sqrt(g)),g=v.ceil(c+g*(d-c))/2),k.push(g);this.radii=k},animate:function(a){var b=this.options.animation;if(!a)r(this.points,function(a){var d=a.graphic,a=a.shapeArgs;d&&a&&(d.attr("r",1),d.animate({r:a.r},b))}),this.animate=null},translate:function(){var a,b=this.data,c,d,e=this.radii;h.scatter.prototype.translate.call(this);
for(a=b.length;a--;)c=b[a],d=e?e[a]:0,typeof d==="number"&&d>=this.minPxSize/2?(c.shapeType="circle",c.shapeArgs={x:c.plotX,y:c.plotY,r:d},c.dlBox={x:c.plotX-d,y:c.plotY-d,width:2*d,height:2*d}):c.shapeArgs=c.plotY=c.dlBox=G},drawLegendSymbol:function(a,b){var c=y(a.itemStyle.fontSize)/2;b.legendSymbol=this.chart.renderer.circle(c,a.baseline-c,c).attr({zIndex:3}).add(b.legendGroup);b.legendSymbol.isMarker=!0},drawPoints:h.column.prototype.drawPoints,alignDataLabel:h.column.prototype.alignDataLabel,
buildKDTree:t,applyZones:t});M.prototype.beforePadding=function(){var a=this,b=this.len,c=this.chart,d=0,e=b,f=this.isXAxis,g=f?"xData":"yData",i=this.min,k={},l=v.min(c.plotWidth,c.plotHeight),j=Number.MAX_VALUE,m=-Number.MAX_VALUE,h=this.max-i,n=b/h,o=[];r(this.series,function(b){var g=b.options;if(b.bubblePadding&&(b.visible||!c.options.chart.ignoreHiddenSeries))if(a.allowZoomOutside=!0,o.push(b),f)r(["minSize","maxSize"],function(a){var b=g[a],f=/%$/.test(b),b=y(b);k[a]=f?l*b/100:b}),b.minPxSize=
k.minSize,b.maxPxSize=k.maxSize,b=b.zData,b.length&&(j=p(g.zMin,v.min(j,v.max(P(b),g.displayNegative===!1?g.zThreshold:-Number.MAX_VALUE))),m=p(g.zMax,v.max(m,Q(b))))});r(o,function(a){var b=a[g],c=b.length,k;f&&a.getRadii(j,m,a.minPxSize,a.maxPxSize);if(h>0)for(;c--;)typeof b[c]==="number"&&(k=a.radii[c],d=Math.min((b[c]-i)*n-k,d),e=Math.max((b[c]-i)*n+k,e))});o.length&&h>0&&!this.isLog&&(e-=b,n*=(b+d-e)/b,r([["min","userMin",d],["max","userMax",e]],function(b){p(a.options[b[0]],a[b[1]])===G&&(a[b[0]]+=
b[2]/n)}))};(function(){function a(a,b,c){a.call(this,b,c);if(this.chart.polar)this.closeSegment=function(a){var b=this.xAxis.center;a.push("L",b[0],b[1])},this.closedStacks=!0}function b(a,b){var c=this.chart,d=this.options.animation,e=this.group,j=this.markerGroup,m=this.xAxis.center,h=c.plotLeft,n=c.plotTop;if(c.polar){if(c.renderer.isSVG)d===!0&&(d={}),b?(c={translateX:m[0]+h,translateY:m[1]+n,scaleX:0.001,scaleY:0.001},e.attr(c),j&&j.attr(c)):(c={translateX:h,translateY:n,scaleX:1,scaleY:1},
e.animate(c,d),j&&j.animate(c,d),this.animate=null)}else a.call(this,b)}var c=w.prototype,d=S.prototype,e;c.searchPointByAngle=function(a){var b=this.chart,c=this.xAxis.pane.center;return this.searchKDTree({clientX:180+Math.atan2(a.chartX-c[0]-b.plotLeft,a.chartY-c[1]-b.plotTop)*(-180/Math.PI)})};q(c,"buildKDTree",function(a){if(this.chart.polar)this.kdByAngle?this.searchPoint=this.searchPointByAngle:this.kdDimensions=2;a.apply(this)});c.toXY=function(a){var b,c=this.chart,d=a.plotX;b=a.plotY;a.rectPlotX=
d;a.rectPlotY=b;b=this.xAxis.postTranslate(a.plotX,this.yAxis.len-b);a.plotX=a.polarPlotX=b.x-c.plotLeft;a.plotY=a.polarPlotY=b.y-c.plotTop;this.kdByAngle?(c=(d/Math.PI*180+this.xAxis.pane.options.startAngle)%360,c<0&&(c+=360),a.clientX=c):a.clientX=a.plotX};h.area&&q(h.area.prototype,"init",a);h.areaspline&&q(h.areaspline.prototype,"init",a);h.spline&&q(h.spline.prototype,"getPointSpline",function(a,b,c,d){var e,j,m,h,n,o,p;if(this.chart.polar){e=c.plotX;j=c.plotY;a=b[d-1];m=b[d+1];this.connectEnds&&
(a||(a=b[b.length-2]),m||(m=b[1]));if(a&&m)h=a.plotX,n=a.plotY,b=m.plotX,o=m.plotY,h=(1.5*e+h)/2.5,n=(1.5*j+n)/2.5,m=(1.5*e+b)/2.5,p=(1.5*j+o)/2.5,b=Math.sqrt(Math.pow(h-e,2)+Math.pow(n-j,2)),o=Math.sqrt(Math.pow(m-e,2)+Math.pow(p-j,2)),h=Math.atan2(n-j,h-e),n=Math.atan2(p-j,m-e),p=Math.PI/2+(h+n)/2,Math.abs(h-p)>Math.PI/2&&(p-=Math.PI),h=e+Math.cos(p)*b,n=j+Math.sin(p)*b,m=e+Math.cos(Math.PI+p)*o,p=j+Math.sin(Math.PI+p)*o,c.rightContX=m,c.rightContY=p;d?(c=["C",a.rightContX||a.plotX,a.rightContY||
a.plotY,h||e,n||j,e,j],a.rightContX=a.rightContY=null):c=["M",e,j]}else c=a.call(this,b,c,d);return c});q(c,"translate",function(a){var b=this.chart;a.call(this);if(b.polar&&(this.kdByAngle=b.tooltip&&b.tooltip.shared,!this.preventPostTranslate)){a=this.points;for(b=a.length;b--;)this.toXY(a[b])}});q(c,"getSegmentPath",function(a,b){var c=this.points;if(this.chart.polar&&this.options.connectEnds!==!1&&b[b.length-1]===c[c.length-1]&&c[0].y!==null)this.connectEnds=!0,b=[].concat(b,[c[0]]);return a.call(this,
b)});q(c,"animate",b);if(h.column)e=h.column.prototype,q(e,"animate",b),q(e,"translate",function(a){var b=this.xAxis,c=this.yAxis.len,d=b.center,e=b.startAngleRad,j=this.chart.renderer,h,n;this.preventPostTranslate=!0;a.call(this);if(b.isRadial){b=this.points;for(n=b.length;n--;)h=b[n],a=h.barX+e,h.shapeType="path",h.shapeArgs={d:j.symbols.arc(d[0],d[1],c-h.plotY,null,{start:a,end:a+h.pointWidth,innerR:c-p(h.yBottom,c)})},this.toXY(h),h.tooltipPos=[h.plotX,h.plotY],h.ttBelow=h.plotY>d[1]}}),q(e,"alignDataLabel",
function(a,b,d,e,h,j){if(this.chart.polar){a=b.rectPlotX/Math.PI*180;if(e.align===null)e.align=a>20&&a<160?"left":a>200&&a<340?"right":"center";if(e.verticalAlign===null)e.verticalAlign=a<45||a>315?"bottom":a>135&&a<225?"top":"middle";c.alignDataLabel.call(this,b,d,e,h,j)}else a.call(this,b,d,e,h,j)});q(d,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};c.polar?r(c.axes,function(a){var e=a.isXAxis,f=a.center,h=b.chartX-f[0]-c.plotLeft,f=b.chartY-f[1]-c.plotTop;d[e?"xAxis":"yAxis"].push({axis:a,
value:a.translate(e?Math.PI-Math.atan2(h,f):Math.sqrt(Math.pow(h,2)+Math.pow(f,2)),!0)})}):d=a.call(this,b);return d})})()})(Highcharts);

(()=>{"use strict";function t(t){let e=Object.values(t).reduce(((t,e)=>t+e),0),i=Object.values(t).reduce(((t,i,r)=>[...t,i/e+(t[r-1]||0)]),[]);return function(){let e=Math.random(),r=i.findIndex((t=>e<t));return Object.keys(t)[r]}}const e=[44,44];function i(t,e,i,r,o){for(var n=-1;n<=1;n++)for(var a=-1;a<=1;a++){if(0==n&&0==a)continue;o[0]=(Math.abs(n)+Math.abs(a))%2,o[t.time%4+1]=-1==n?1:0,o[(1+t.time)%4+1]=-1==a?1:0,o[(2+t.time)%4+1]=1==n?1:0,o[(3+t.time)%4+1]=1==a?1:0;let d=t.findNeighbour(t,e,i,n,a),s=d[0],h=d[1],g=t.grid.get(s,h),u=g%4,c=Math.floor(g%16/4);if(1==u){r[0][0]+=1;for(var l=0;l<o.length;l++)r[0][4+8*l]+=o[l],r[0][8*(l+1)]+=1-o[l]}else if(2==u){r[0][2]+=1;for(l=0;l<o.length;l++)r[0][4+8*l+2]+=o[l],r[0][8*(l+1)+2]+=1-o[l]}else if(3==u){r[0][3]+=1;for(l=0;l<o.length;l++)r[0][4+8*l+3]+=o[l],r[0][8*(l+1)+3]+=1-o[l]}if(Math.floor(0==c)){r[1][0]+=1;for(l=0;l<o.length;l++)r[1][4+8*l]+=o[l],r[1][8*(l+1)]+=1-o[l]}else if(Math.floor(1==c)){r[1][1]+=1;for(l=0;l<o.length;l++)r[1][4+8*l+1]+=o[l],r[1][8*(l+1)+1]+=1-o[l]}else if(Math.floor(2==c)){r[1][2]+=1;for(l=0;l<o.length;l++)r[1][4+8*l+2]+=o[l],r[1][8*(l+1)+2]+=1-o[l]}else if(Math.floor(3==c)){r[1][3]+=1;for(l=0;l<o.length;l++)r[1][4+8*l+3]+=o[l],r[1][8*(l+1)+3]+=1-o[l]}}r[0][1]=r[0][0]+r[0][3];for(l=0;l<o.length+1;l++)r[0][4*l+1]+=r[0][4*l]+r[0][4*l+3];return r}const r={mix:.3,isotropic:.3,xcross:.05,vcross:.05,xvcross:.05,directional1:.05,directional2:.05,directional3:.05,directional2b:.05,directional:.05};class o{constructor(t,e,i,r,o,n=null){this.type=t,this.threshold=e,this.neighbourType=i,this.inactivation=r,this.modulo=o,this.periodicity=n,this.testInactive=function(t,e){return"Cond"==t?function(t){return 0==t}:"Abs"==t?function(t){return t%e==0}:function(t){return!0}}(this.inactivation,this.modulo),this.testValue=function(t,e,i){return"Eq"==e?function(e){return e[i[0]][i[1]]==t}:"Bigger"==e?function(e){return e[i[0]][i[1]]>t}:void 0}(this.threshold,this.type,this.neighbourType),this.testPeriodicity=function(t){let e;return e=null==t?function(t){return!0}:function(e){return t[e%t.length]},e}(n)}test(t,e,i){var r=this.testPeriodicity(i);return this.testValue(t)&&this.testInactive(e)&&r}name(){var t="";return null!=this.periodicity&&(t=this.periodicity.map((t=>t?"1":"0")).join("")),`${this.type}${this.threshold}${this.inactivation}NT${this.neighbourType[0]}|${this.neighbourType[1]}P${t}`}static fromName(t,e=4){var i=null;t.startsWith("Eq")?i="Eq":t.startsWith("Bigger")&&(i="Bigger");var r=t.substring(i.length),n=parseInt(r.substring(0,1)),a=null;(r=r.substring(1)).startsWith("Cond")?a="Cond":r.startsWith("Abs")?a="Abs":r.startsWith("None")&&(a="None");var l=(r=r.substring(a.length)).split("|").map(Number);return new o(i,n,l,a,e)}static randomSample(i=null,r=4,n="mix",a=null){const l=["Eq","Bigger"],d=l[Math.floor(Math.random()*l.length)];var s=0;s="Eq"===d?Math.floor(8*Math.random())+1:Math.floor(9*Math.random());const h=["Cond","Abs","None"],g=h[Math.floor(Math.random()*h.length)];null===i&&(i={0:2/3,1:1/3});const u=t(i)(),c=function(t,i){var r=i;if("mix"==r){var o=Math.random();return r=o<.5?"isotropic":o<.7?"xcross":o<.9?"vcross":"directional",Math.floor(Math.random()*e[t])}if("isotropic"==r)return Math.floor(4*Math.random());if("vcross"==r)return Math.floor(4*Math.random()+4);if("xcross"==r)return Math.floor(4*Math.random()+8);if("xvcross"==r)return Math.floor(8*Math.random()+4);if("directional1"==r)return Math.floor(4*Math.random()+12);if("directional2"==r)return Math.floor(8*Math.random()+12);if("directional3"==r)return Math.floor(12*Math.random()+12);if("directional2b"==r){var n=Math.floor(8*Math.random()+12);return n>=16&&(n+=4),n}return"directional"==r?Math.floor(16*Math.random()+12):void 0}(u,n),m=[u,c];if(Math.random()<.5)f=null;else{var f;null==a&&(a=Math.floor(4*Math.random())+2);do{f=new Array(a).fill(0).map((()=>Math.random()<.5))}while(!f.includes(!0))}return new o(d,s,m,g,r,f)}}class n{constructor(){this.nStates}updateRule(t,e,i,r){throw new Error("Must override method")}}class a extends n{constructor(){super(),this.nStates=4}updateRule(t,e,i,r){var o=t%4;return 1==o||3==o?e=2:2==o?e=0:0==o&&2==i[0][0]?e=1:0==o&&i[0][0]>2&&(e=3),e}}class l extends n{constructor(t,e,i,r){super(),this.nColors=e,this.conditions=t,this.nStates=this.nColors,this.neighbourhoodGeometryType=i,this.periodicityLength=r}updateRule(t,e,i,r){e=0;for(let o=0;o<this.conditions.length;o++)if(this.conditions[o].test(i,t,r)){e=(o+1)%this.nColors;break}return e}getName(){return this.conditions.map((t=>t.name())).join(", ")}static sampleRule(e=null,i=null,n=4,a=4){var d=[];null==e&&(e=Math.floor(8*Math.random())+2);var s=t(r)(),h=this.samplePeriodicityLength();for(let t=0;t<e;t++)d.push(o.randomSample(i,n,s,h));return console.log((new Date).toLocaleTimeString()+" Sampling coloring rule "+s+": "+d.map((t=>t.name())).join(", ")),new l(d,a,s,h)}static samplePeriodicityLength(){var t=Math.random();return t<.3?null:t<.6?1:t<.7?2:t<.8?3:t<.9?4:Math.floor(5*Math.random())+5}static ruleFromNames(t){var e=t.split(", ").map((t=>o.fromName(t)));return new l(e,nColors,"mix",null)}evolveRule(){var t,e=this.conditions.length;0==(t=2==e?Math.floor(2*Math.random())+1:10==e?Math.floor(2*Math.random()):Math.floor(3*Math.random()))?this.removeCondition():1==t?this.changeCondition():this.addCondition()}addCondition(){var t=this.conditions.slice();t.push(o.randomSample(null,4,this.neighbourhoodGeometryType,this.periodicityLength)),console.log((new Date).toLocaleTimeString()+" Adding condition "+this.neighbourhoodGeometryType+": "+t.map((t=>t.name())).join(", ")),this.conditions=t}removeCondition(){var t=this.conditions.slice(),e=Math.floor(Math.random()*t.length);t.splice(e,1)[0],console.log((new Date).toLocaleTimeString()+" Removing condition: "+t.map((t=>t.name())).join(", ")),this.conditions=t}changeCondition(){var t=this.conditions.slice(),e=Math.floor(Math.random()*t.length);t[e]=o.randomSample(null,4,this.neighbourhoodGeometryType,this.periodicityLength),console.log((new Date).toLocaleTimeString()+" Changing condition "+e+" to "+this.neighbourhoodGeometryType+": "+t.map((t=>t.name())).join(", ")),this.conditions=t}}class d extends n{constructor(t,e){super(),this.nColors=e,this.conditions=t,this.nStates=this.nColors}updateRule(t,e,i,r){e=0;var o=this.conditions[t%4];for(let r=0;r<o.length;r++)if(o[r].test(i,t)){e=(r+1)%this.nColors;break}return e}getName(){return this.conditions.map((t=>t.map((t=>t.name())).join(", "))).join(" || ")}static sampleRule(t=null,e=null,i=4,r=4){var n=[];for(let r=0;r<4;r++){n.push([]),null==t&&(t=Math.floor(8*Math.random())+2);for(let a=0;a<t;a++)n[r].push(o.randomSample(e,i))}return console.log("Sampling sparse four state rule: "+n.map((t=>t.map((t=>t.name())).join(", "))).join(" || ")),new d(n,r)}static ruleFromNames(t,e=4){var i=[],r=t.split(" || ");for(let t=0;t<r.length;t++){i.push([]);var n=r[t].split(", ");i[t]=n.map((t=>o.fromName(t)))}return new d(i,e)}}class s{getRuleChain(){throw new Error("Must override method")}getUpdateRule(){return function(t,e,i,r){e=this.ruleChain[0].updateRule(t%this.ruleChain[0].nStates,e,i,r);var o=this.ruleChain[0].nStates;for(let n=1;n<this.ruleChain.length;n++)e+=o*this.ruleChain[n].updateRule(Math.floor(t/o)%this.ruleChain[n].nStates,e,i,r),e%=o*=this.ruleChain[n].nStates;return e%o}}evolveRuleChain(){throw new Error("Must override method")}}class h extends s{constructor(t,e){super(),this.preset=t,this.neighbourTypes=e,null==e&&(this.neighbourTypes="safe"==t?{0:1,1:0}:"mix"==t?{0:.8,1:.2}:{0:.5,1:.5}),this.colorUnit=4,this.ruleChain=this.getRuleChain(),this.updateRule=this.getUpdateRule()}getRuleChain(){var t=[];return t.push(new a),t.push(l.sampleRule(null,this.neighbourTypes)),t}evolveRuleChain(){this.ruleChain[1].evolveRule()}}class g extends s{constructor(t){super(),this.neighbourTypes=t,null==t&&(this.neighbourTypes={0:1/3,1:1/3,2:1/3}),this.colorUnit=1,this.ruleChain=this.getRuleChain(),this.updateRule=this.getUpdateRule()}getRuleChain(){var t=[];return t.push(d.sampleRule(4,this.neighbourTypes)),t}evolveRuleChain(){}}function u(t,e=!1){Math.random()<Math.exp(t.ruleLogSwitchProbability)||e||t.changeColoringRuleFlag?("VariableGR"==t.rule?(t.ruleClass=new h("safe"),t.ruleClass2=new h("safe")):"Variable"==t.rule?t.ruleClass=new h("safe"):"VariableMix"==t.rule?t.ruleClass=new h("mix"):"VariableUnsafe"==t.rule?t.ruleClass=new h("general"):"SparseFourStates"==t.rule&&(t.ruleClass=new g),t.ruleLogSwitchProbability=-25):Math.random()<Math.exp(t.ruleLogEvolveProbability)&&(t.ruleClass.evolveRuleChain(),t.ruleLogEvolveProbability=-25),t.ruleLogSwitchProbability=t.ruleLogSwitchProbability+t.logMultiplicativeFactor,t.ruleLogSwitchProbability>0&&(t.ruleLogSwitchProbability=0),t.ruleLogEvolveProbability=t.ruleLogEvolveProbability+t.logMultiplicativeEvolveFactor,t.ruleLogEvolveProbability>0&&(t.ruleLogEvolveProbability=0),t.changeColoringRuleFlag=!1}function c(t){let e={};for(let i in t){let r=Math.floor(3*Math.random())-1,o=t[i]+r;o=Math.max(0,Math.min(255,o)),e[i]=o}return e}function m(t){var e={r:247,g:255,b:28},i={r:13,g:112,b:255},r={r:240,g:239,b:239},o={r:0,g:0,b:0},n={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random())},a={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random())};"yellow"==t.colorPalette?(t.backgroundColor=e,t.activatedColor=o,t.deadColor=i,t.superActivatedColor=r):"blue"==t.colorPalette?(t.backgroundColor=i,t.activatedColor=r,t.deadColor=o,t.superActivatedColor=e):"blue2"==t.colorPalette?(t.backgroundColor=i,t.activatedColor=e,t.deadColor=o,t.superActivatedColor=r):"grey"==t.colorPalette?(t.backgroundColor=r,t.activatedColor=o,t.deadColor=i,t.superActivatedColor=e):"grey2"==t.colorPalette?(t.backgroundColor=r,t.activatedColor=e,t.deadColor=o,t.superActivatedColor=i):"black"==t.colorPalette?(t.backgroundColor=o,t.activatedColor=i,t.deadColor=e,t.superActivatedColor=r):"black2"==t.colorPalette?(t.backgroundColor=o,t.activatedColor=i,t.deadColor=r,t.superActivatedColor=e):"blackTrace"==t.colorPalette?(t.backgroundColor=o,t.activatedColor=r,t.deadColor=o,t.superActivatedColor=r):"blackTrace2"==t.colorPalette?(t.backgroundColor=o,t.activatedColor=o,t.deadColor=o,t.superActivatedColor=r):"blackTrace3"==t.colorPalette?(t.backgroundColor=o,t.activatedColor=o,t.deadColor=r,t.superActivatedColor=r):"variable"==t.colorPalette&&(t.backgroundColor=o,t.activatedColor={r:240,g:240,b:240},t.deadColor=n,t.superActivatedColor=a)}function f(t,e,i,r,o){let n=(e+r+t.gridHeight)%t.gridHeight,a=(i+o+t.gridWidth)%t.gridWidth,l=n,d=a;return(n-e-r>0||n-e-r<0)&&(d=(t.gridWidth-a-t.gridPeriodicityShiftX+t.gridWidth)%t.gridWidth),(a-i-o>0||a-i-o<0)&&(l=(t.gridHeight-n-t.gridPeriodicityShiftY+t.gridHeight)%t.gridHeight),[l,d]}function v(t,e,i,r,o){let n=(e+r+t.gridHeight)%t.gridHeight,a=(i+o+t.gridWidth)%t.gridWidth,l=n,d=a;return(n-e-r>0||n-e-r<0)&&(d=(t.gridWidth-a-t.gridPeriodicityShiftX+t.gridWidth)%t.gridWidth),a-i-o>0?l=(n+t.gridPeriodicityShiftY+t.gridHeight)%t.gridHeight:a-i-o<0&&(l=(n-t.gridPeriodicityShiftY+t.gridHeight)%t.gridHeight),[l,d]}function p(t,e,i,r,o){let n=(e+r+t.gridHeight)%t.gridHeight,a=(i+o+t.gridWidth)%t.gridWidth,l=n,d=a;return n-e-r>0?d=(a+t.gridPeriodicityShiftX+t.gridWidth)%t.gridWidth:n-e-r<0&&(d=(a-t.gridPeriodicityShiftX+t.gridWidth)%t.gridWidth),(a-i-o>0||a-i-o<0)&&(l=(t.gridHeight-n-t.gridPeriodicityShiftY+t.gridHeight)%t.gridHeight),[l,d]}function C(t,e,i,r,o){let n=(e+r+t.gridHeight)%t.gridHeight,a=(i+o+t.gridWidth)%t.gridWidth,l=n,d=a;return n-e-r>0?d=(a+t.gridPeriodicityShiftX+t.gridWidth)%t.gridWidth:n-e-r<0&&(d=(a-t.gridPeriodicityShiftX+t.gridWidth)%t.gridWidth),a-i-o>0?l=(n+t.gridPeriodicityShiftY+t.gridHeight)%t.gridHeight:a-i-o<0&&(l=(n-t.gridPeriodicityShiftY+t.gridHeight)%t.gridHeight),[l,d]}function y(t){t.gridFlipX&&t.gridFlipY?t.findNeighbour=f:t.gridFlipX?t.findNeighbour=v:t.gridFlipY?t.findNeighbour=p:t.findNeighbour=C}function M(t){u(t,!0)}function b(t,e){if(t.saveEventData){var i={...t.ruleDefinition};delete i.secondaryRule,delete i.conditions;var r={...i,event:e},o=Object.keys(r).join(",")+"\n";o+=Object.values(r).join(",");var n=new Blob([o],{type:"text/csv"}),a=URL.createObjectURL(n),l=document.createElement("a");l.href=a,l.download="dataAutomata.csv",l.click()}}class S{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(t*e),this.rows=new Array(e)}get(t,e){return this.data[t*this.width+e]}set(t,e,i){this.data[t*this.width+e]=i}}let w={waveSquare:{prob:2,mask:[[1,1],[1,1]]},star:{prob:1,mask:[[1,0,1],[0,0,0],[1,0,1]]},random2:{prob:40,mask:null}},I=Object.keys(w).map((t=>w[t].mask)),E=t(Object.keys(w).map((t=>w[t].prob)));function H(t,e,i,r,o){for(var n=function(t){var e=Math.exp(-t),i=1,r=0;do{r++,i*=Math.random()}while(i>e);return r-1}(10**t.randomnessAmount),a=0;a<n;a++){e=Math.floor(Math.random()*t.gridHeight),i=Math.floor(Math.random()*t.gridWidth);P(r,t,I[E()],e,i,o)}return{i:e,j:i}}function P(t,e,i,r,o,n){null===i&&(i=function(){let t=Math.floor(10*Math.random())+1,e=Math.floor(10*Math.random())+1,i=[];for(let r=0;r<t;r++){i.push([]);for(let t=0;t<e;t++)i[r].push(Math.floor(4*Math.random()))}return i}());let a=i.length,l=i[0].length;for(let d=0;d<a;d++)for(let s=0;s<l;s++){let h=n(e,r,o,d-Math.floor(a/2),s-Math.floor(l/2));t.set(h[0],h[1],i[d][s])}}function W(t){!function(t){let e=t.ctx,i=t.imageData;for(var r=0,o=0;o<t.gridHeight;o++)for(var n=0;n<t.gridWidth;n++){if(0==t.redraw.get(o,n))continue;r+=1;var a=Math.floor(t.grid.get(o,n)/t.ruleClass.colorUnit)%4;let e;if(0==a)e=t.backgroundColor;else if(1==a)e=t.activatedColor;else if(2==a)e=t.deadColor;else{if(3!=a)continue;e=t.superActivatedColor}let l=4*(o*t.gridWidth+n);i.data[l+0]=e.r,i.data[l+1]=e.g,i.data[l+2]=e.b,i.data[l+3]=255}if(t.nCellChangedHistoric=.01*r+.99*t.nCellChangedHistoric,t.nCellChangedHistoric>.5*t.gridHeight*t.gridWidth){t.changeColoringRuleFlag=!0;var l=t.nCellChangedHistoric/(t.gridHeight*t.gridWidth);console.log("Changing rule because suspected oscillation (running proportion of cells changed: "+l.toFixed(1)+")."),t.nCellChangedHistoric=15,b(t,"oscillation")}t.nCellChangedHistoric<3&&(t.changeColoringRuleFlag=!0,console.log("Changing rule because not enough cells changed ("+t.nCellChangedHistoric+")."),t.nCellChangedHistoric=20,b(t,"blackout")),e.putImageData(i,t.canvasCornerX,t.canvasCornerY)}(t),function(t){for(var r=[new Array(e[0]).fill(0),new Array(e[1]).fill(0)],o=[0,0,0,0,0],n=new S(t.gridWidth,t.gridHeight),a=0;a<t.gridHeight;a++)for(var l=0;l<t.gridWidth;l++){var d=i(t,a,l,r,o);let e=t.grid.get(a,l);var s=e;s="VariableGR"!=t.rule||0==t.mask.get(a,l)?t.ruleClass.updateRule(e,s,d,t.time):t.ruleClass2.updateRule(e,s,d,t.time),Math.floor(s/t.ruleClass.colorUnit)%4!=Math.floor(e/t.ruleClass.colorUnit)%4?t.redraw.set(a,l,1):t.redraw.set(a,l,0),n.set(a,l,s);for(let t=0;t<r.length;t++)r[t].fill(0);o.fill(0)}if(t.addRandomness)var{i:a,j:l}=H(t,a,l,n,t.findNeighbour);t.grid=n}(t),u(t),t.time=(t.time+1)%166320,function(t){Math.random()<1e-4&&(t.gridPeriodicityShiftX=Math.floor(Math.random()*t.gridWidth),console.log("Periodicity shift X: "+t.gridPeriodicityShiftX)),Math.random()<1e-4&&(t.gridPeriodicityShiftY=Math.floor(Math.random()*t.gridHeight),console.log("Periodicity shift Y: "+t.gridPeriodicityShiftY)),Math.random()<1e-4&&(t.gridFlipX=!t.gridFlipX,y(t),console.log("Flip X: "+t.gridFlipX)),Math.random()<1e-4&&(t.gridFlipY=!t.gridFlipY,y(t),console.log("Flip Y: "+t.gridFlipY))}(t),"variable"==t.colorPalette&&function(t){Math.random()<1&&(t.superActivatedColor=c(t.superActivatedColor),t.deadColor=c(t.deadColor))}(t),setTimeout((function(){requestAnimationFrame((()=>W(t)))}),t.timeout)}function R(t,e){return console.log("Attempting to load image"),(i="grLogoLarge.png",console.log("Loading image:",i),new Promise(((t,e)=>{const r=new Image;r.onload=()=>{console.log("Image loaded:",i);const e=document.createElement("canvas");e.width=r.width,e.height=r.height;const o=e.getContext("2d");o.drawImage(r,0,0,r.width,r.height);const n=o.getImageData(0,0,e.width,e.height).data,a=[];for(let t=0;t<r.height;t++){const e=[];for(let i=0;i<r.width;i++){const o=4*(t*r.width+i),a=(n[o]+n[o+1]+n[o+2])/3;e.push(a>128?1:0)}a.push(e)}t(a)},r.onerror=()=>{console.error("Error loading image:",i),e(new Error("Error loading image"))},r.src=i}))).then((e=>{new S(t.gridWidth,t.gridHeight);const i=new S(t.gridWidth,t.gridHeight),r=e[0].length/t.gridWidth,o=e.length/t.gridHeight,n=Math.max(r,o),a=Math.floor((t.gridWidth-e[0].length/n)/2),l=Math.floor((t.gridHeight-e.length/n)/2);for(let r=0;r<t.gridHeight;r++)for(let o=0;o<t.gridWidth;o++){if(r<l||(r-l)*n>=e.length){i.set(r,o,1);continue}let t=Math.floor((o-a)*n);0===e[Math.floor((r-l)*n)][t]?i.set(r,o,0):i.set(r,o,1)}t.mask=i})).catch((e=>{console.log("Image loading failed, not using a mask."),console.error("Error loading image:",e),t.mask=new S(t.gridWidth,t.gridHeight)}));var i}async function k(t,e){return await R(t),function(t,e=64){return Promise.resolve().then((()=>{t.grid=new S(t.gridWidth,t.gridHeight),t.redraw=new S(t.gridWidth,t.gridHeight);for(var i=0;i<t.gridHeight;i++)for(var r=0;r<t.gridWidth;r++)if("gr"!=t.initialisation||1!==t.mask.get(i,r)){for(var o=Math.random(),n=0;n<e;n++)if(o<(n+1)/(e+1)){t.grid.set(i,r,n);break}t.redraw.set(i,r,1)}else t.grid.set(i,r,0)}))}(t)}function F(t){document.getElementById("submitButton").addEventListener("click",(function(){var t,e,i,r,o,n,a,l,d,s,h;t=document.getElementById("userGridHeight").value,e=document.getElementById("userGridWidth").value,i=document.getElementById("userTimeout").value,r=document.getElementById("userXShift").value,o=document.getElementById("userYShift").value,n=document.getElementById("userFlipX").checked,a=document.getElementById("userFlipY").checked,l=document.getElementById("userColorPalette").value,d=document.getElementById("randomnessCheckbox").checked,s=document.getElementById("randomnessSlider").value,h=document.getElementById("userRule").value,localStorage.setItem("userGridHeight",t),localStorage.setItem("userGridWidth",e),localStorage.setItem("userTimeout",i),localStorage.setItem("userXShift",r),localStorage.setItem("userYShift",o),localStorage.setItem("userFlipX",n),localStorage.setItem("userFlipY",a),localStorage.setItem("userColorPalette",l),localStorage.setItem("userRandomnessOn",d),localStorage.setItem("userRandomnessAmount",s),localStorage.setItem("userRule",h),location.reload()}))}function B(t){document.getElementById("randomnessSlider").addEventListener("input",(function(){!function(t,e){t.randomnessAmount=e,document.getElementById("randomnessAmountValue").textContent=e}(t,this.value)}))}console.log("Loading main.js");var x=document.getElementById("gameCanvas"),L=x.getContext("2d"),X=128,Y=128,A=20,N=!0,T=-1,j=0,G=0,q=!1,D=!1,U="black2",V="VariableGR",O="random",K=6,$=new class{constructor(t,e,i=200,r=200,o=20,n=!0,a=-2,l=0,d=0,s=!1,h=!1,g="black2",u="VariableGR",c="random",m=6,f=3e4,v=3e3){this.gridHeight=i,this.gridWidth=r,this.canvasCornerX=0,this.canvasCornerY=0,this.timeout=o,this.grid=null,this.redraw=null,this.imageData=null,this.canvas=t,this.ctx=e,this.addRandomness=n,this.randomnessAmount=a,this.gridPeriodicityShiftX=l,this.gridPeriodicityShiftY=d,this.gridFlipX=s,this.gridFlipY=h,this.colorPalette=g,this.rule=u,this.initialisation=c,this.maxNColors=m,this.updateCellValue=null,this.updateCellValueAuxiliary=null,this.findNeighbour=null,this.mask=null,this.ruleSwitchPeriod=f,this.ruleEvolvePeriod=v,this.ruleLogSwitchProbability=-25,this.ruleLogEvolveProbability=-25,this.logMultiplicativeFactor=25/this.ruleSwitchPeriod,this.logMultiplicativeEvolveFactor=25/this.ruleEvolvePeriod,this.canvas.width=this.gridWidth,this.canvas.height=this.gridHeight,this.imageData=e.createImageData(t.width,t.height),this.changeColoringRuleFlag=!0,this.nCellChangedHistoric=0,this.saveEventData=!1,this.time=0}}(x,L,X,Y,A,N,T,j,G,q,D,U,V,O,K);window.onload=function(){!function(t){document.getElementById("randomnessCheckbox").addEventListener("change",(function(){t.addRandomness=this.checked}))}($),function(t){document.getElementById("fullscreenButton").addEventListener("click",(function(){t.canvas.requestFullscreen?t.canvas.requestFullscreen():t.canvas.mozRequestFullScreen?t.canvas.mozRequestFullScreen():t.canvas.webkitRequestFullscreen?t.canvas.webkitRequestFullscreen():t.canvas.msRequestFullscreen&&t.canvas.msRequestFullscreen()}))}($),function(t){t.canvas.addEventListener("mousemove",(function(e){if(e.shiftKey){var i=t.canvas.getBoundingClientRect(),r=e.clientX-i.left,o=e.clientY-i.top,n=i.width/t.gridWidth,a=i.height/t.gridHeight,l=Math.floor(r/n),d=Math.floor(o/a);t.grid.set(d,l,1)}}))}($),function(t){t.canvas.addEventListener("mousedown",(function(e){var i=t.canvas.getBoundingClientRect(),r=e.clientX-i.left,o=e.clientY-i.top,n=i.width/t.gridWidth,a=i.height/t.gridHeight,l=Math.floor(r/n),d=Math.floor(o/a);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(d,(l+1)%t.gridWidth,1),t.grid.set(d,l,1),t.grid.set((d+1)%t.gridHeight,l,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(d,l,1),t.grid.set((d+1)%t.gridHeight,l,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(d,l,1),t.grid.set(d,(l+1)%t.gridWidth,1)):(t.grid.set((d+1)%t.gridHeight,(l+1)%t.gridWidth,1),t.grid.set((d-1+t.gridHeight)%t.gridHeight,(l+1)%t.gridWidth,1),t.grid.set((d-1+t.gridHeight)%t.gridHeight,(l-1+t.gridWidth)%t.gridWidth,1),t.grid.set((d+1)%t.gridHeight,(l-1+t.gridWidth)%t.gridWidth,1))}))}($),F(),B($),function(t){document.getElementById("userXShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.gridPeriodicityShiftX=e,y(t)})),document.getElementById("userYShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.gridPeriodicityShiftY=e,y(t)})),document.getElementById("userFlipX").addEventListener("change",(function(){t.gridFlipX=this.checked,y(t)})),document.getElementById("userFlipY").addEventListener("change",(function(){t.gridFlipY=this.checked,y(t)}))}($),function(t){document.getElementById("userTimeout").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.timeout=e}))}($),function(t){document.getElementById("userColorPalette").addEventListener("change",(function(){t.colorPalette=this.value,m(t)}))}($),function(t){document.getElementById("userRule").addEventListener("change",(async function(){t.rule=this.value,M(t)}))}($),function(t){null!==localStorage.getItem("userGridHeight")?(t.gridHeight=parseInt(localStorage.getItem("userGridHeight")),t.gridWidth=parseInt(localStorage.getItem("userGridWidth")),t.gridHeight>1e3&&(t.gridHeight=1e3),t.gridWidth>1e3&&(t.gridWidth=1e3),t.imageData=t.ctx.createImageData(t.gridWidth,t.gridHeight),t.timeout=parseInt(localStorage.getItem("userTimeout")),t.gridPeriodicityShiftX=parseInt(localStorage.getItem("userXShift")),isNaN(t.gridPeriodicityShiftX)&&(t.gridPeriodicityShiftX=0),isNaN(t.gridPeriodicityShiftY)&&(t.gridPeriodicityShiftY=0),t.gridPeriodicityShiftY=parseInt(localStorage.getItem("userYShift")),t.gridFlipX="true"===localStorage.getItem("userFlipX"),t.gridFlipY="true"===localStorage.getItem("userFlipY"),t.colorPalette=localStorage.getItem("userColorPalette"),t.addRandomness="true"===localStorage.getItem("userRandomnessOn"),t.randomnessAmount=parseFloat(localStorage.getItem("userRandomnessAmount")),t.rule=localStorage.getItem("userRule"),console.log("Retrieved value from previous session: ...")):console.log("No value in localStorage"),document.getElementById("userGridHeight").value=t.gridHeight,document.getElementById("userGridWidth").value=t.gridWidth,document.getElementById("userTimeout").value=t.timeout,document.getElementById("userXShift").value=t.gridPeriodicityShiftX,document.getElementById("userYShift").value=t.gridPeriodicityShiftY,document.getElementById("userFlipX").checked=t.gridFlipX,document.getElementById("userFlipY").checked=t.gridFlipY,document.getElementById("userColorPalette").value=t.colorPalette,document.getElementById("randomnessCheckbox").checked=t.addRandomness,document.getElementById("randomnessSlider").value=t.randomnessAmount,document.getElementById("userRule").value=t.rule,t.canvas.width=Math.max(t.gridHeight,t.gridWidth),t.canvas.height=Math.max(t.gridHeight,t.gridWidth),t.canvasCornerX=0,t.canvasCornerY=0;var e=document.getElementById("gameCanvas");if(t.gridHeight>t.gridWidth){var i=Math.floor(t.gridWidth/t.gridHeight*800);e.style.width=i+"px",e.style.height="800px",e.width=i*t.gridHeight/800,e.height=t.gridHeight}else{var r=Math.floor(t.gridHeight/t.gridWidth*800);e.style.width="800px",e.style.height=r+"px",e.width=t.gridWidth,e.height=r*t.gridWidth/800}}($),m($),y($),M($),k($).then((()=>{W($)})).catch((t=>{console.error("Error initialising the grid: ",t)}))}})();
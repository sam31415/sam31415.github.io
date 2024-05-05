(()=>{"use strict";function t(t){let e=Object.values(t).reduce(((t,e)=>t+e),0),n=Object.values(t).reduce(((t,n,i)=>[...t,n/e+(t[i-1]||0)]),[]);return function(){let e=Math.random(),i=n.findIndex((t=>e<t));return Object.keys(t)[i]}}const e=[44,44];function n(t,e,n,i,r){for(var o=-1;o<=1;o++)for(var a=-1;a<=1;a++){if(0==o&&0==a)continue;r[0]=(Math.abs(o)+Math.abs(a))%2,r[t.time%4+1]=-1==o?1:0,r[(1+t.time)%4+1]=-1==a?1:0,r[(2+t.time)%4+1]=1==o?1:0,r[(3+t.time)%4+1]=1==a?1:0;let u=t.t(t,e,n,o,a),l=u[0],h=u[1],c=t.grid.get(l,h),f=c%4,d=Math.floor(c%16/4);if(1==f){i[0][0]+=1;for(var s=0;s<r.length;s++)i[0][4+8*s]+=r[s],i[0][8*(s+1)]+=1-r[s]}else if(2==f){i[0][2]+=1;for(s=0;s<r.length;s++)i[0][4+8*s+2]+=r[s],i[0][8*(s+1)+2]+=1-r[s]}else if(3==f){i[0][3]+=1;for(s=0;s<r.length;s++)i[0][4+8*s+3]+=r[s],i[0][8*(s+1)+3]+=1-r[s]}if(Math.floor(0==d)){i[1][0]+=1;for(s=0;s<r.length;s++)i[1][4+8*s]+=r[s],i[1][8*(s+1)]+=1-r[s]}else if(Math.floor(1==d)){i[1][1]+=1;for(s=0;s<r.length;s++)i[1][4+8*s+1]+=r[s],i[1][8*(s+1)+1]+=1-r[s]}else if(Math.floor(2==d)){i[1][2]+=1;for(s=0;s<r.length;s++)i[1][4+8*s+2]+=r[s],i[1][8*(s+1)+2]+=1-r[s]}else if(Math.floor(3==d)){i[1][3]+=1;for(s=0;s<r.length;s++)i[1][4+8*s+3]+=r[s],i[1][8*(s+1)+3]+=1-r[s]}}i[0][1]=i[0][0]+i[0][3];for(s=0;s<r.length+1;s++)i[0][4*s+1]+=i[0][4*s]+i[0][4*s+3];return i}const i={i:.3,o:.3,u:.05,l:.05,h:.05,M:.05,m:.05,v:.05,p:.05,S:.05};class r{constructor(t,e,n,i,r,o=null){this.type=t,this.threshold=e,this.C=n,this.R=i,this.k=r,this.N=o,this.F=function(t,e){return"Cond"==t?function(t){return 0==t}:"Abs"==t?function(t){return t%e==0}:function(t){return!0}}(this.R,this.k),this.A=function(t,e,n){return"Eq"==e?function(e){return e[n[0]][n[1]]==t}:"Bigger"==e?function(e){return e[n[0]][n[1]]>t}:void 0}(this.threshold,this.type,this.C),this.G=function(t){let e;return e=null==t?function(t){return!0}:function(e){return t[e%t.length]},e}(o)}test(t,e,n){var i=this.G(n);return this.A(t)&&this.F(e)&&i}name(){var t="";return null!=this.N&&(t=this.N.map((t=>t?"1":"0")).join("")),`${this.type}${this.threshold}${this.R}NT${this.C[0]}|${this.C[1]}P${t}`}static I(t,e=4){var n=null;t.startsWith("Eq")?n="Eq":t.startsWith("Bigger")&&(n="Bigger");var i=t.substring(n.length),o=parseInt(i.substring(0,1)),a=null;(i=i.substring(1)).startsWith("Cond")?a="Cond":i.startsWith("Abs")?a="Abs":i.startsWith("None")&&(a="None");var s=(i=i.substring(a.length)).split("|").map(Number);return new r(n,o,s,a,e)}static X(n=null,i=4,o="mix",a=null){const s=["Eq","Bigger"],u=s[Math.floor(Math.random()*s.length)];var l=0;l="Eq"===u?Math.floor(8*Math.random())+1:Math.floor(9*Math.random());const h=["Cond","Abs","None"],c=h[Math.floor(Math.random()*h.length)];null===n&&(n={0:2/3,1:1/3});const f=t(n)(),d=function(t,n){var i=n;if("mix"==i){var r=Math.random();return i=r<.5?"isotropic":r<.7?"xcross":r<.9?"vcross":"directional",Math.floor(Math.random()*e[t])}if("isotropic"==i)return Math.floor(4*Math.random());if("vcross"==i)return Math.floor(4*Math.random()+4);if("xcross"==i)return Math.floor(4*Math.random()+8);if("xvcross"==i)return Math.floor(8*Math.random()+4);if("directional1"==i)return Math.floor(4*Math.random()+12);if("directional2"==i)return Math.floor(8*Math.random()+12);if("directional3"==i)return Math.floor(12*Math.random()+12);if("directional2b"==i){var o=Math.floor(8*Math.random()+12);return o>=16&&(o+=4),o}return"directional"==i?Math.floor(16*Math.random()+12):void 0}(f,o),M=[f,d];if(Math.random()<.5)m=null;else{var m;null==a&&(a=Math.floor(4*Math.random())+2);do{m=new Array(a).fill(0).map((()=>Math.random()<.5))}while(!m.includes(!0))}return new r(u,l,M,c,i,m)}}class o{constructor(){this.Y}P(t,e,n,i){throw new Error("Must override method")}}class a extends o{constructor(){super(),this.Y=4}P(t,e,n,i){var r=t%4;return 1==r||3==r?e=2:2==r?e=0:0==r&&2==n[0][0]?e=1:0==r&&n[0][0]>2&&(e=3),e}}class s extends o{constructor(t,e,n,i){super(),this.T=e,this.j=t,this.Y=this.T,this.B=n,this.O=i}P(t,e,n,i){e=0;for(let r=0;r<this.j.length;r++)if(this.j[r].test(n,t,i)){e=(r+1)%this.T;break}return e}V(){return this.j.map((t=>t.name())).join(", ")}static q(e=null,n=null,o=4,a=4){var u=[];null==e&&(e=Math.floor(8*Math.random())+2);var l=t(i)(),h=this.L();for(let t=0;t<e;t++)u.push(r.X(n,o,l,h));return console.log((new Date).toLocaleTimeString()+" Sampling coloring rule "+l+": "+u.map((t=>t.name())).join(", ")),new s(u,a,l,h)}static L(){var t=Math.random();return t<.3?null:t<.6?1:t<.7?2:t<.8?3:t<.9?4:Math.floor(5*Math.random())+5}static H(t){var e=t.split(", ").map((t=>r.I(t)));return new s(e,nColors,"mix",null)}$(){var t,e=this.j.length;0==(t=2==e?Math.floor(2*Math.random())+1:10==e?Math.floor(2*Math.random()):Math.floor(3*Math.random()))?this.U():1==t?this.D():this.W()}W(){var t=this.j.slice();t.push(r.X(null,4,this.B,this.O)),console.log((new Date).toLocaleTimeString()+" Adding condition "+this.B+": "+t.map((t=>t.name())).join(", ")),this.j=t}U(){var t=this.j.slice(),e=Math.floor(Math.random()*t.length);t.splice(e,1)[0],console.log((new Date).toLocaleTimeString()+" Removing condition: "+t.map((t=>t.name())).join(", ")),this.j=t}D(){var t=this.j.slice(),e=Math.floor(Math.random()*t.length);t[e]=r.X(null,4,this.B,this.O),console.log((new Date).toLocaleTimeString()+" Changing condition "+e+" to "+this.B+": "+t.map((t=>t.name())).join(", ")),this.j=t}}class u extends o{constructor(t,e){super(),this.T=e,this.j=t,this.Y=this.T}P(t,e,n,i){e=0;var r=this.j[t%4];for(let i=0;i<r.length;i++)if(r[i].test(n,t)){e=(i+1)%this.T;break}return e}V(){return this.j.map((t=>t.map((t=>t.name())).join(", "))).join(" || ")}static q(t=null,e=null,n=4,i=4){var o=[];for(let i=0;i<4;i++){o.push([]),null==t&&(t=Math.floor(8*Math.random())+2);for(let a=0;a<t;a++)o[i].push(r.X(e,n))}return console.log("Sampling sparse four state rule: "+o.map((t=>t.map((t=>t.name())).join(", "))).join(" || ")),new u(o,i)}static H(t,e=4){var n=[],i=t.split(" || ");for(let t=0;t<i.length;t++){n.push([]);var o=i[t].split(", ");n[t]=o.map((t=>r.I(t)))}return new u(n,e)}}class l{Z(){throw new Error("Must override method")}J(){return function(t,e,n,i){e=this.K[0].P(t%this.K[0].Y,e,n,i);var r=this.K[0].Y;for(let o=1;o<this.K.length;o++)e+=r*this.K[o].P(Math.floor(t/r)%this.K[o].Y,e,n,i),e%=r*=this.K[o].Y;return e%r}}_(){throw new Error("Must override method")}}class h extends l{constructor(t,e){super(),this.tt=t,this.et=e,null==e&&(this.et="safe"==t?{0:1,1:0}:"mix"==t?{0:.8,1:.2}:{0:.5,1:.5}),this.nt=4,this.K=this.Z(),this.P=this.J()}Z(){var t=[];return t.push(new a),t.push(s.q(null,this.et)),t}_(){this.K[1].$()}}class c extends l{constructor(t){super(),this.et=t,null==t&&(this.et={0:1/3,1:1/3,2:1/3}),this.nt=1,this.K=this.Z(),this.P=this.J()}Z(){var t=[];return t.push(u.q(4,this.et)),t}_(){}}function f(t,e=!1){Math.random()<Math.exp(t.it)||e||t.rt?("VariableGR"==t.ot?(t.st=new h("safe"),t.ut=new h("safe")):"Variable"==t.ot?t.st=new h("safe"):"VariableMix"==t.ot?t.st=new h("mix"):"VariableUnsafe"==t.ot?t.st=new h("general"):"SparseFourStates"==t.ot&&(t.st=new c),t.it=-25):Math.random()<Math.exp(t.lt)&&(t.st._(),t.lt=-25),t.it=t.it+t.ht,t.it>0&&(t.it=0),t.lt=t.lt+t.ct,t.lt>0&&(t.lt=0),t.rt=!1}function d(t){let e={};for(let n in t){let i=Math.floor(3*Math.random())-1,r=t[n]+i;r=Math.max(0,Math.min(255,r)),e[n]=r}return e}function M(t){var e={r:247,g:255,b:28},n={r:13,g:112,b:255},i={r:240,g:239,b:239},r={r:0,g:0,b:0},o={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random())},a={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random())};"yellow"==t.ft?(t.backgroundColor=e,t.dt=r,t.Mt=n,t.gt=i):"blue"==t.ft?(t.backgroundColor=n,t.dt=i,t.Mt=r,t.gt=e):"blue2"==t.ft?(t.backgroundColor=n,t.dt=e,t.Mt=r,t.gt=i):"grey"==t.ft?(t.backgroundColor=i,t.dt=r,t.Mt=n,t.gt=e):"grey2"==t.ft?(t.backgroundColor=i,t.dt=e,t.Mt=r,t.gt=n):"black"==t.ft?(t.backgroundColor=r,t.dt=n,t.Mt=e,t.gt=i):"black2"==t.ft?(t.backgroundColor=r,t.dt=n,t.Mt=i,t.gt=e):"blackTrace"==t.ft?(t.backgroundColor=r,t.dt=i,t.Mt=r,t.gt=i):"blackTrace2"==t.ft?(t.backgroundColor=r,t.dt=r,t.Mt=r,t.gt=i):"blackTrace3"==t.ft?(t.backgroundColor=r,t.dt=r,t.Mt=i,t.gt=i):"variable"==t.ft&&(t.backgroundColor=r,t.dt={r:240,g:240,b:240},t.Mt=o,t.gt=a)}function m(t,e,n,i,r){let o=(e+i+t.vt)%t.vt,a=(n+r+t.bt)%t.bt,s=o,u=a;return(o-e-i>0||o-e-i<0)&&(u=(t.bt-a-t.wt+t.bt)%t.bt),(a-n-r>0||a-n-r<0)&&(s=(t.vt-o-t.St+t.vt)%t.vt),[s,u]}function g(t,e,n,i,r){let o=(e+i+t.vt)%t.vt,a=(n+r+t.bt)%t.bt,s=o,u=a;return(o-e-i>0||o-e-i<0)&&(u=(t.bt-a-t.wt+t.bt)%t.bt),a-n-r>0?s=(o+t.St+t.vt)%t.vt:a-n-r<0&&(s=(o-t.St+t.vt)%t.vt),[s,u]}function v(t,e,n,i,r){let o=(e+i+t.vt)%t.vt,a=(n+r+t.bt)%t.bt,s=o,u=a;return o-e-i>0?u=(a+t.wt+t.bt)%t.bt:o-e-i<0&&(u=(a-t.wt+t.bt)%t.bt),(a-n-r>0||a-n-r<0)&&(s=(t.vt-o-t.St+t.vt)%t.vt),[s,u]}function p(t,e,n,i,r){let o=(e+i+t.vt)%t.vt,a=(n+r+t.bt)%t.bt,s=o,u=a;return o-e-i>0?u=(a+t.wt+t.bt)%t.bt:o-e-i<0&&(u=(a-t.wt+t.bt)%t.bt),a-n-r>0?s=(o+t.St+t.vt)%t.vt:a-n-r<0&&(s=(o-t.St+t.vt)%t.vt),[s,u]}function b(t){t.Ct&&t.Rt?t.t=m:t.Ct?t.t=g:t.Rt?t.t=v:t.t=p}function w(t){f(t,!0)}function S(t,e){if(t.kt){var n={...t.xt};delete n.Nt,delete n.j;var i={...n,event:e},r=Object.keys(i).join(",")+"\n";r+=Object.values(i).join(",");var o=new Blob([r],{type:"text/csv"}),a=URL.createObjectURL(o),s=document.createElement("a");s.href=a,s.download="dataAutomata.csv",s.click()}}class C{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(t*e),this.rows=new Array(e)}get(t,e){return this.data[t*this.width+e]}set(t,e,n){this.data[t*this.width+e]=n}}let R={Ft:{At:2,mask:[[1,1],[1,1]]},Et:{At:1,mask:[[1,0,1],[0,0,0],[1,0,1]]},yt:{At:40,mask:null}},k=Object.keys(R).map((t=>R[t].mask)),x=t(Object.keys(R).map((t=>R[t].At)));function N(t,e,n,i,r){for(var o=function(t){var e=Math.exp(-t),n=1,i=0;do{i++,n*=Math.random()}while(n>e);return i-1}(10**t.Gt),a=0;a<o;a++){e=Math.floor(Math.random()*t.vt),n=Math.floor(Math.random()*t.bt);F(i,t,k[x()],e,n,r)}return{It:e,Xt:n}}function F(t,e,n,i,r,o){null===n&&(n=function(){let t=Math.floor(10*Math.random())+1,e=Math.floor(10*Math.random())+1,n=[];for(let i=0;i<t;i++){n.push([]);for(let t=0;t<e;t++)n[i].push(Math.floor(4*Math.random()))}return n}());let a=n.length,s=n[0].length;for(let u=0;u<a;u++)for(let l=0;l<s;l++){let h=o(e,i,r,u-Math.floor(a/2),l-Math.floor(s/2));t.set(h[0],h[1],n[u][l])}}function A(t){!function(t){let e=t.Yt,n=t.Pt;for(var i=0,r=0;r<t.vt;r++)for(var o=0;o<t.bt;o++){if(0==t.Tt.get(r,o))continue;i+=1;var a=Math.floor(t.grid.get(r,o)/t.st.nt)%4;let e;if(0==a)e=t.backgroundColor;else if(1==a)e=t.dt;else if(2==a)e=t.Mt;else{if(3!=a)continue;e=t.gt}let s=4*(r*t.bt+o);n.data[s+0]=e.r,n.data[s+1]=e.g,n.data[s+2]=e.b,n.data[s+3]=255}if(t.jt=.01*i+.99*t.jt,t.jt>.5*t.vt*t.bt){t.rt=!0;var s=t.jt/(t.vt*t.bt);console.log("Changing rule because suspected oscillation (running proportion of cells changed: "+s.toFixed(1)+")."),t.jt=15,S(t,"oscillation")}t.jt<3&&(t.rt=!0,console.log("Changing rule because not enough cells changed ("+t.jt+")."),t.jt=20,S(t,"blackout")),e.putImageData(n,t.Bt,t.Ot)}(t),function(t){for(var i=[new Array(e[0]).fill(0),new Array(e[1]).fill(0)],r=[0,0,0,0,0],o=new C(t.bt,t.vt),a=0;a<t.vt;a++)for(var s=0;s<t.bt;s++){var u=n(t,a,s,i,r);let e=t.grid.get(a,s);var l=e;l="VariableGR"!=t.ot||0==t.mask.get(a,s)?t.st.P(e,l,u,t.time):t.ut.P(e,l,u,t.time),Math.floor(l/t.st.nt)%4!=Math.floor(e/t.st.nt)%4?t.Tt.set(a,s,1):t.Tt.set(a,s,0),o.set(a,s,l);for(let t=0;t<i.length;t++)i[t].fill(0);r.fill(0)}if(t.Vt)var{It:a,Xt:s}=N(t,a,s,o,t.t);t.grid=o}(t),f(t),t.time=(t.time+1)%166320,function(t){Math.random()<1e-4&&(t.wt=Math.floor(Math.random()*t.bt),console.log("Periodicity shift X: "+t.wt)),Math.random()<1e-4&&(t.St=Math.floor(Math.random()*t.vt),console.log("Periodicity shift Y: "+t.St)),Math.random()<1e-4&&(t.Ct=!t.Ct,b(t),console.log("Flip X: "+t.Ct)),Math.random()<1e-4&&(t.Rt=!t.Rt,b(t),console.log("Flip Y: "+t.Rt))}(t),"variable"==t.ft&&function(t){Math.random()<1&&(t.gt=d(t.gt),t.Mt=d(t.Mt))}(t),setTimeout((function(){requestAnimationFrame((()=>A(t)))}),t.timeout)}function E(t,e){return console.log("Attempting to load image"),(n="grLogoLarge.png",console.log("Loading image:",n),new Promise(((t,e)=>{const i=new Image;i.onload=()=>{console.log("Image loaded:",n);const e=document.createElement("canvas");e.width=i.width,e.height=i.height;const r=e.getContext("2d");r.drawImage(i,0,0,i.width,i.height);const o=r.getImageData(0,0,e.width,e.height).data,a=[];for(let t=0;t<i.height;t++){const e=[];for(let n=0;n<i.width;n++){const r=4*(t*i.width+n),a=(o[r]+o[r+1]+o[r+2])/3;e.push(a>128?1:0)}a.push(e)}t(a)},i.onerror=()=>{console.error("Error loading image:",n),e(new Error("Error loading image"))},i.src=n}))).then((e=>{new C(t.bt,t.vt);const n=new C(t.bt,t.vt),i=e[0].length/t.bt,r=e.length/t.vt,o=Math.max(i,r),a=Math.floor((t.bt-e[0].length/o)/2),s=Math.floor((t.vt-e.length/o)/2);for(let i=0;i<t.vt;i++)for(let r=0;r<t.bt;r++){if(i<s||(i-s)*o>=e.length){n.set(i,r,1);continue}let t=Math.floor((r-a)*o);0===e[Math.floor((i-s)*o)][t]?n.set(i,r,0):n.set(i,r,1)}t.mask=n})).catch((e=>{console.log("Image loading failed, not using a mask."),console.error("Error loading image:",e),t.mask=new C(t.bt,t.vt)}));var n}async function y(t,e){return await E(t),function(t,e=64){return Promise.resolve().then((()=>{t.grid=new C(t.bt,t.vt),t.Tt=new C(t.bt,t.vt);for(var n=0;n<t.vt;n++)for(var i=0;i<t.bt;i++)if("gr"!=t.qt||1!==t.mask.get(n,i)){for(var r=Math.random(),o=0;o<e;o++)if(r<(o+1)/(e+1)){t.grid.set(n,i,o);break}t.Tt.set(n,i,1)}else t.grid.set(n,i,0)}))}(t)}function G(t){document.getElementById("submitButton").addEventListener("click",(function(){var t,e,n,i,r,o,a,s,u,l,h;t=document.getElementById("userGridHeight").value,e=document.getElementById("userGridWidth").value,n=document.getElementById("userTimeout").value,i=document.getElementById("userXShift").value,r=document.getElementById("userYShift").value,o=document.getElementById("userFlipX").checked,a=document.getElementById("userFlipY").checked,s=document.getElementById("userColorPalette").value,u=document.getElementById("randomnessCheckbox").checked,l=document.getElementById("randomnessSlider").value,h=document.getElementById("userRule").value,localStorage.setItem("userGridHeight",t),localStorage.setItem("userGridWidth",e),localStorage.setItem("userTimeout",n),localStorage.setItem("userXShift",i),localStorage.setItem("userYShift",r),localStorage.setItem("userFlipX",o),localStorage.setItem("userFlipY",a),localStorage.setItem("userColorPalette",s),localStorage.setItem("userRandomnessOn",u),localStorage.setItem("userRandomnessAmount",l),localStorage.setItem("userRule",h),location.reload()}))}function I(t){document.getElementById("randomnessSlider").addEventListener("input",(function(){!function(t,e){t.Gt=e,document.getElementById("randomnessAmountValue").textContent=e}(t,this.value)}))}console.log("Loading main.js");var X=document.getElementById("gameCanvas"),Y=X.getContext("2d"),P=192,T=192,j=30,B=!0,O=-1.5,V=0,q=0,L=!1,H=!1,$="variable",U="Variable",D="random",W=8,z=3e4,Z=3e3,J=new class{constructor(t,e,n=200,i=200,r=20,o=!0,a=-2,s=0,u=0,l=!1,h=!1,c="black2",f="VariableGR",d="random",M=6,m=3e4,g=3e3){this.vt=n,this.bt=i,this.Bt=0,this.Ot=0,this.timeout=r,this.grid=null,this.Tt=null,this.Pt=null,this.canvas=t,this.Yt=e,this.Vt=o,this.Gt=a,this.wt=s,this.St=u,this.Ct=l,this.Rt=h,this.ft=c,this.ot=f,this.qt=d,this.Lt=M,this.Ht=null,this.$t=null,this.t=null,this.mask=null,this.Ut=m,this.Dt=g,this.it=-25,this.lt=-25,this.ht=25/this.Ut,this.ct=25/this.Dt,this.canvas.width=this.bt,this.canvas.height=this.vt,this.Pt=e.createImageData(t.width,t.height),this.rt=!0,this.jt=0,this.kt=!1,this.time=0}}(X,Y,P,T,j,B,O,V,q,L,H,$,U,D,W,z,Z);window.onload=function(){!function(t){document.getElementById("randomnessCheckbox").addEventListener("change",(function(){t.Vt=this.checked}))}(J),function(t){document.getElementById("fullscreenButton").addEventListener("click",(function(){t.canvas.requestFullscreen?t.canvas.requestFullscreen():t.canvas.mozRequestFullScreen?t.canvas.mozRequestFullScreen():t.canvas.webkitRequestFullscreen?t.canvas.webkitRequestFullscreen():t.canvas.msRequestFullscreen&&t.canvas.msRequestFullscreen()}))}(J),function(t){t.canvas.addEventListener("mousemove",(function(e){if(e.shiftKey){var n=t.canvas.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top,o=n.width/t.bt,a=n.height/t.vt,s=Math.floor(i/o),u=Math.floor(r/a);t.grid.set(u,s,1)}}))}(J),function(t){t.canvas.addEventListener("mousedown",(function(e){var n=t.canvas.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top,o=n.width/t.bt,a=n.height/t.vt,s=Math.floor(i/o),u=Math.floor(r/a);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(u,(s+1)%t.bt,1),t.grid.set(u,s,1),t.grid.set((u+1)%t.vt,s,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(u,s,1),t.grid.set((u+1)%t.vt,s,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(u,s,1),t.grid.set(u,(s+1)%t.bt,1)):(t.grid.set((u+1)%t.vt,(s+1)%t.bt,1),t.grid.set((u-1+t.vt)%t.vt,(s+1)%t.bt,1),t.grid.set((u-1+t.vt)%t.vt,(s-1+t.bt)%t.bt,1),t.grid.set((u+1)%t.vt,(s-1+t.bt)%t.bt,1))}))}(J),G(),I(J),function(t){document.getElementById("userXShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.wt=e,b(t)})),document.getElementById("userYShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.St=e,b(t)})),document.getElementById("userFlipX").addEventListener("change",(function(){t.Ct=this.checked,b(t)})),document.getElementById("userFlipY").addEventListener("change",(function(){t.Rt=this.checked,b(t)}))}(J),function(t){document.getElementById("userTimeout").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.timeout=e}))}(J),function(t){document.getElementById("userColorPalette").addEventListener("change",(function(){t.ft=this.value,M(t)}))}(J),function(t){document.getElementById("userRule").addEventListener("change",(async function(){t.ot=this.value,w(t)}))}(J),function(t){document.getElementById("changeColoringRule").addEventListener("click",(function(){t.rt=!0}))}(J),function(t){document.getElementById("changeColor").addEventListener("click",(function(){M(t)}))}(J),function(t){document.getElementById("saveEventCheckbox").addEventListener("change",(function(){t.kt=this.checked})),document.getElementById("likeButton").addEventListener("click",(function(){S(t,"like")})),document.getElementById("dislikeButton").addEventListener("click",(function(){S(t,"dislike")}))}(J),function(t){null!==localStorage.getItem("userGridHeight")?(t.vt=parseInt(localStorage.getItem("userGridHeight")),t.bt=parseInt(localStorage.getItem("userGridWidth")),t.vt>1e3&&(t.vt=1e3),t.bt>1e3&&(t.bt=1e3),t.Pt=t.Yt.createImageData(t.bt,t.vt),t.timeout=parseInt(localStorage.getItem("userTimeout")),t.wt=parseInt(localStorage.getItem("userXShift")),isNaN(t.wt)&&(t.wt=0),isNaN(t.St)&&(t.St=0),t.St=parseInt(localStorage.getItem("userYShift")),t.Ct="true"===localStorage.getItem("userFlipX"),t.Rt="true"===localStorage.getItem("userFlipY"),t.ft=localStorage.getItem("userColorPalette"),t.Vt="true"===localStorage.getItem("userRandomnessOn"),t.Gt=parseFloat(localStorage.getItem("userRandomnessAmount")),t.ot=localStorage.getItem("userRule"),console.log("Retrieved value from previous session: ...")):console.log("No value in localStorage"),document.getElementById("userGridHeight").value=t.vt,document.getElementById("userGridWidth").value=t.bt,document.getElementById("userTimeout").value=t.timeout,document.getElementById("userXShift").value=t.wt,document.getElementById("userYShift").value=t.St,document.getElementById("userFlipX").checked=t.Ct,document.getElementById("userFlipY").checked=t.Rt,document.getElementById("userColorPalette").value=t.ft,document.getElementById("randomnessCheckbox").checked=t.Vt,document.getElementById("randomnessSlider").value=t.Gt,document.getElementById("userRule").value=t.ot,t.canvas.width=Math.max(t.vt,t.bt),t.canvas.height=Math.max(t.vt,t.bt),t.Bt=0,t.Ot=0;var e=document.getElementById("gameCanvas");if(t.vt>t.bt){var n=Math.floor(t.bt/t.vt*800);e.style.width=n+"px",e.style.height="800px",e.width=n*t.vt/800,e.height=t.vt}else{var i=Math.floor(t.vt/t.bt*800);e.style.width="800px",e.style.height=i+"px",e.width=t.bt,e.height=i*t.bt/800}}(J),M(J),b(J),w(J);let t=atob("c2FtMzE0MTUuZ2l0aHViLmlv");window.location.hostname!==t&&""!==window.location.hostname||y(J).then((()=>{A(J)})).catch((t=>{console.error("Error initialising the grid: ",t)}))}})();
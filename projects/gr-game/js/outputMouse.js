(()=>{"use strict";function t(t){let e=Object.values(t).reduce(((t,e)=>t+e),0),s=Object.values(t).reduce(((t,s,i)=>[...t,s/e+(t[i-1]||0)]),[]);return function(){let e=Math.random(),i=s.findIndex((t=>e<t));return Object.keys(t)[i]}}const e=[44,44];function s(t,e,s,i,n,r,a){const h=i.height-1,o=i.width-1,u=i.data,l=i.width;for(var c=n[0],f=n[1],M=-1;M<=1;M++)for(var m=-1;m<=1;m++){if(0==M&&0==m)continue;if(r[0]=((-1===M?1:M)+(-1===m?1:m))%2,r[1+(3&a)]=-1==M?1:0,r[1+(1+a&3)]=-1==m?1:0,r[1+(2+a&3)]=1==M?1:0,r[1+(3+a&3)]=1==m?1:0,0==e||0==s||e==h||s==o)var[d,b]=t.t(t,e,s,M,m);else var d=e+M,b=s+m;const i=u[d*l+b],n=3&i,v=(15&i)>>2;if(1==n){c[0]+=1;for(var g=0;g<r.length;g++)c[4+8*g]+=r[g],c[8*(g+1)]+=1-r[g]}else if(2==n){c[2]+=1;for(g=0;g<r.length;g++)c[4+8*g+2]+=r[g],c[8*(g+1)+2]+=1-r[g]}else if(3==n){c[3]+=1;for(g=0;g<r.length;g++)c[4+8*g+3]+=r[g],c[8*(g+1)+3]+=1-r[g]}if(0==v){f[0]+=1;for(g=0;g<r.length;g++)f[4+8*g]+=r[g],f[8*(g+1)]+=1-r[g]}else if(1==v){f[1]+=1;for(g=0;g<r.length;g++)f[4+8*g+1]+=r[g],f[8*(g+1)+1]+=1-r[g]}else if(2==v){f[2]+=1;for(g=0;g<r.length;g++)f[4+8*g+2]+=r[g],f[8*(g+1)+2]+=1-r[g]}else if(3==v){f[3]+=1;for(g=0;g<r.length;g++)f[4+8*g+3]+=r[g],f[8*(g+1)+3]+=1-r[g]}}for(g=0;g<r.length+1;g++)c[4*g+1]+=c[4*g]+c[4*g+3];return[c,f]}const i="mix",n="isotropic",r="xcross",a="vcross",h="xvcross",o="directional1",u="directional2",l="directional3",c="directional2b",f="directional",M={[i]:.2,[n]:.4,[r]:.05,[a]:.05,[h]:.05,[o]:.05,[u]:.05,[l]:.05,[c]:.05,[f]:.05};const m="A",d="C",b="E",g="B";class v{constructor(t,e,s,i,n,r=null){this.type=t,this.threshold=e,this.i=s,this.h=i,this.o=n,this.u=r,this.l=function(t,e){return t==d?function(t){return 0==t}:t==m?function(t){return t%e==0}:function(t){return!0}}(this.h,this.o),this.M=function(t,e,s){return e==b?function(e){return e[s[0]][s[1]]==t}:e==g?function(e){return e[s[0]][s[1]]>t}:void 0}(this.threshold,this.type,this.i),this.m=function(t){let e;return e=null==t?function(t){return!0}:function(e){return t[e%t.length]},e}(r)}test(t,e,s){var i=this.m(s);return this.M(t)&&this.l(e)&&i}name(){var t="";return null!=this.u&&(t=this.u.map((t=>t?"1":"0")).join("")),`${this.type}${this.threshold}${this.h}[${this.i[0]}|${this.i[1]}]${t}`}static v(t,e=4){var s=null;t.startsWith(b)?s=b:t.startsWith(g)&&(s=g);var i=t.substring(s.length),n=parseInt(i.substring(0,1)),r=null;(i=i.substring(1)).startsWith(d)?r=d:i.startsWith(m)?r=m:i.startsWith("N")&&(r="N");var a=(i=i.substring(r.length)).split("[")[1].split("]")[0].split("|").map(Number),h=null;return(i=i.split("]")[1]).length>0&&(h=i.split("").map((t=>"1"===t))),new v(s,n,a,r,e,h)}static p(e=null,s=4,M=i,w=null){const p=[b,g],k=p[Math.floor(Math.random()*p.length)],R=[d,m,"N"],C=R[Math.floor(Math.random()*R.length)];null===e&&(e={0:2/3,1:1/3});const S=t(e)(),N=function(t,e){var s=e;if(s==i){var M=Math.random();s=M<.5?n:M<.7?r:M<.9?a:f}if(s==n)return Math.floor(4*Math.random());if(s==a)return Math.floor(4*Math.random()+4);if(s==r)return Math.floor(4*Math.random()+8);if(s==h)return Math.floor(8*Math.random()+4);if(s==o)return Math.floor(4*Math.random()+12);if(s==u)return Math.floor(8*Math.random()+12);if(s==l)return Math.floor(12*Math.random()+12);if(s==c){var m=Math.floor(8*Math.random()+12);return m>=16&&(m+=4),m}return s==f?Math.floor(16*Math.random()+12):void 0}(0,M),y=[S,N];var B=0,x=8;if(0==y[0]&&y[1]%4!=1?x=5:y[1]>4&&y[1]<=16?x=4:y[1]>16&&(x=3),B=k===g?Math.floor(Math.random()*x):Math.floor(Math.random()*x)+1,Math.random()<.2)A=null;else{var A;null==w&&(w=Math.floor(20*Math.random())+2);do{A=new Array(w).fill(0).map((()=>Math.random()<.5))}while(!A.includes(!0))}return new v(k,B,y,C,s,A)}}class w{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(this.width*this.height),this.rows=new Array(this.height),this.k=!1,this.get=this.R,this.set=this.C}static S(t,e=!1,s=!1,i=!1){const n=t.length,r=t[0].length,a=new w(r,n);for(let e=0;e<n;e++){i&&(e=n-e-1);for(let i=0;i<r;i++)s&&(i=r-i-1),a.set(e,i,t[e][i])}return e&&a.N(),a}N(){[this.width,this.height]=[this.height,this.width],[this.get,this.set]=this.k?[this.R,this.C]:[this.B,this.A],this.k=!this.k}flipX(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width/2;e++){const s=this.get(t,e);this.set(t,e,this.get(t,this.width-e-1)),this.set(t,this.width-e-1,s)}}flipY(){for(let t=0;t<this.height/2;t++)for(let e=0;e<this.width;e++){const s=this.get(t,e);this.set(t,e,this.get(this.height-t-1,e)),this.set(this.height-t-1,e,s)}}R(t,e){return this.data[t*this.width+e]}C(t,e,s){this.data[t*this.width+e]=s}B(t,e){return this.data[e*this.height+t]}A(t,e,s){this.data[e*this.height+t]=s}}class p{constructor(){this.U=void 0}V(t,e,s,i){throw new Error("Must override method")}O(){throw new Error("Must override method")}}class k extends p{constructor(){super(),this.T=this.P(),this.j(),this.W=0}P(){throw new Error("Must override method")}j(){this.D=Object.keys(this.T).map((t=>this.T[t].mask));let e=Object.keys(this.T).map((t=>this.T[t].$));this.F=t(e)}}class R extends k{constructor(){super(),this.U=4}V(t,e,s,i){var n=t%4;return 1==n||3==n?e=2:2==n?e=0:0==n&&2==s[0][0]?e=1:0==n&&s[0][0]>2&&(e=3),e}O(){return"BB"}P(){return{random:{$:10,mask:null},G:{$:2,mask:w.S([[1,0],[0,1]])},I:{$:2,mask:w.S([[0,1],[1,0]])},q:{$:2,mask:w.S([[1,0],[0,1]])},L:{$:4,mask:w.S([[1,1],[1,1]])},X:{$:4,mask:new w([[1,0,1],[0,0,0],[1,0,1]])},Y:{$:2,mask:w.S([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},H:{$:2,mask:w.S([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},J:{$:2,mask:w.S([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},K:{$:2,mask:w.S([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]],!0)}}}}class C extends k{constructor(){super(),this.U=4,this.W=-1}V(t,e,s,i){var n=t%4;return 3==n&&(n=0),1==n?e=2:2==n||3==n?e=0:0!=n&&3!=n||2!=s[0][0]?0==n&&s[0][0]>2&&(e=3):e=1,e}O(){return"TBB"}P(){return{random:{$:10,mask:null},J:{$:1,mask:w.S([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},Y:{$:2,mask:w.S([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},H:{$:2,mask:w.S([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},L:{$:4,mask:w.S([[1,1],[1,1]])},Z:{$:1e4,mask:w.S([[0,2,1,0,0,0,0,0],[0,0,2,1,0,0,0,0],[2,0,0,2,1,0,0,0],[1,2,0,0,2,1,0,0],[0,1,0,2,1,0,2,1],[0,0,2,1,0,0,2,1]])}}}}class S extends k{constructor(){super(),this.U=4,this.W=-1}V(t,e,s,i){var n=t%4;return 1==n&&(s[0][0]<3||s[0][0]>5)?e=2:2==n?e=3:3==n?e=0:0==n&&2==s[0][0]&&(e=1),e}O(){return"SW"}P(){let t=.2;return{random:{$:3,mask:null},_:{$:1,mask:w.S([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},tt:{$:t,mask:w.S([[1,2,3],[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,0],[0,1,2],[3,0,1]])},et:{$:t,mask:w.S([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},st:{$:t,mask:w.S([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},it:{$:t,mask:w.S([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},nt:{$:t,mask:w.S([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},rt:{$:t,mask:w.S([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},ht:{$:t,mask:w.S([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},ot:{$:t,mask:w.S([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},ut:{$:t,mask:w.S([[0,0,0,0,3,2,0,0],[0,0,0,0,1,0,3,0],[0,0,1,2,0,1,0,0],[0,0,2,3,1,1,0,0],[3,1,0,1,0,1,1,1],[2,0,1,1,1,0,1,3],[0,3,0,0,1,1,1,0],[0,0,0,0,1,3,0,0]])},lt:{$:t,mask:w.S([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},ct:{$:t,mask:w.S([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},ft:{$:t,mask:w.S([[0,3,2,1,1,2,3,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[2,3,0,0,0,0,3,2]])},Mt:{$:t,mask:w.S([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},dt:{$:t,mask:w.S([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},bt:{$:t,mask:w.S([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])},gt:{$:t,mask:w.S([[0,1,0,0,0,0],[1,1,1,0,0,0],[0,1,0,0,1,0],[0,0,0,1,1,1],[0,0,0,0,1,0]])},X:{$:2,mask:w.S([[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[1,1,0,0,0,1,1],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]])}}}}class N extends k{constructor(t){super(),this.vt=t;const e=this.vt.split("/");this.wt=new Uint8Array(e[0].substring(1).split("").map(Number)),this.kt=new Uint8Array(e[1].substring(1).split("").map(Number)),"I"==e[2][0]?(this.Rt=new Uint8Array(e[2].substring(1).split("").map(Number)),this.U=Number(e[3])):this.U=Number(e[2])}V(t,e,s,i){var n=t%this.U;return 1==n&&this.kt.includes(s[0][0])?e=1:n>0&&n<this.U-1?e+=1:n==this.U-1?e=0:0==n&&this.wt.includes(s[0][0])?e=1:0==n&&this.Rt.includes(s[0][0])&&(e=this.U-1),e}O(){return this.vt}P(){return{random:{$:1,mask:null}}}}class y extends k{constructor(){super(),this.U=4,this.W=.4}V(t,e,s,i){var n=t%4,r=s[0][1];return 1!=n&&3!=n||!(r<2||r>3)?1!=n&&3!=n||2!=r&&3!=r?0!=n&&2!=n||3!=r?2==n&&(e=0):e=3:e=1:e=2,e}P(){return{Ct:{$:1,mask:null}}}O(){return"CW"}}class B extends p{constructor(t,e,s,i,n){super(),this.St=e,this.Nt=t,this.U=this.St,this.yt=s,this.Bt=i,this.xt=n}V(t,e,s,i){e=0;for(let n=0;n<this.Nt.length;n++)if(this.Nt[n].test(s,t,i)){e=(n+1)%this.St;break}return e}O(){return this.Nt.map((t=>t.name())).join("||")}static At(e=null,s=null,i=null,n=4,r=4,a=null){var h=[];null==e&&(e=Math.floor(8*Math.random())+2),null==i&&(i=t(M)()),null==a&&(a=this.Ut());for(let t=0;t<e;t++)h.push(v.p(s,n,i,a));return console.log((new Date).toLocaleTimeString()+" Sampling coloring rule "+i+": "+h.map((t=>t.name())).join(", ")),new B(h,r,s,i,a)}static Ut(){var t=Math.random();return t<.2?null:t<.6?1:t<.7?2:t<.8?3:t<.9?4:Math.floor(20*Math.random())+5}static Vt(t,e=4){var s=t.split("||").map((t=>v.v(t)));return new B(s,e,null,i,null)}Ot(t=null){var e,s=this.Nt.length;null==t&&(t=this.yt),0==(e=2==s?Math.floor(2*Math.random())+1:10==s?Math.floor(2*Math.random()):Math.floor(3*Math.random()))?this.Tt():1==e?this.Pt(t):this.jt(t)}jt(t){var e=this.Nt.slice();e.push(v.p(t,4,this.Bt,this.xt)),console.log((new Date).toLocaleTimeString()+" Adding condition "+this.Bt+": "+e.map((t=>t.name())).join("||")),this.Nt=e}Tt(){var t=this.Nt.slice(),e=Math.floor(Math.random()*t.length);t.splice(e,1)[0],console.log((new Date).toLocaleTimeString()+" Removing condition: "+t.map((t=>t.name())).join("||")),this.Nt=t}Pt(t){var e=this.Nt.slice(),s=Math.floor(Math.random()*e.length);e[s]=v.p(t,4,this.Bt,this.xt),console.log((new Date).toLocaleTimeString()+" Changing condition "+s+" to "+this.Bt+": "+e.map((t=>t.name())).join("||")),this.Nt=e}}const x="gr",A="safe",U="mix",V="general",O="test";class T{Wt;Dt;V;Et(){throw new Error("Must override method")}$t(){return function(t,e,s,i){e=this.Dt[0].V(t%this.Dt[0].U,e,s,i);var n=this.Dt[0].U;for(let r=1;r<this.Dt.length;r++)e+=n*this.Dt[r].V(Math.floor(t/n)%this.Dt[r].U,e,s,i),e%=n*=this.Dt[r].U;return e%n}}Ft(){throw new Error("Must override method")}O(){return this.Dt.map((t=>t.O())).join("-")}}class P extends T{constructor(t){super(),this.Gt=t,this.Wt=1,this.Dt=this.Et(),this.V=this.$t()}Et(){var t=[];return"Original"==this.Gt?t.push(new C):"StarWars"==this.Gt?t.push(new S):"Modified"==this.Gt?t.push(new R):"Conway"==this.Gt?t.push(new y):t.push(new N(this.Gt)),t}Ft(){}}class j extends T{constructor(t,e,s=null){super(),this.Gt=t,this.yt=e,this.xt=null,this.It=null,null==e&&(t==A||t==x||t==O?this.yt={0:1,1:0}:t==U?(Math.random()<.5?this.yt={0:.8,1:.2}:this.yt={0:1,1:0},this.yt={0:.8,1:.2}):this.yt={0:.5,1:.5}),t==x&&(this.xt=1),this.Wt=4,this.Dt=null==s?this.Et():this.qt(s),this.V=this.$t()}Et(){var t=[],e=Math.random();return this.Gt==x?t.push(new R):this.Gt==A?e<.3?t.push(new R):e<.4?t.push(new C):e<.7?t.push(new S):t.push(new y):(e<.3?t.push(new R):e<.4?t.push(new C):e<.7?t.push(new S):e<1?t.push(new y):this.Gt,0==t.length&&t.push(new R)),t.push(B.At(null,this.yt,this.It,4,4,this.xt)),this.Gt==O&&((t=[]).push(new N("B2/S245678/I1/4")),t.push(B.At(null,this.yt,this.It,4,4,this.xt))),t}Ft(){this.Dt[1].Ot(this.yt)}qt(t){var e=[],[s,i]=t.split("-");return"BB"==s?e.push(new R):"TBB"==s?e.push(new C):"SW"==s&&e.push(new S),e.push(new S),e.push(B.Vt(i)),e}}class W extends T{constructor(t,e,s=null){super(),this.Gt=t,this.yt=e,this.xt=null,this.It=null,null==e&&(t==A?this.yt={0:1,1:0}:t==U?(Math.random()<.5?this.yt={0:.8,1:.2}:this.yt={0:1,1:0},this.yt={0:.8,1:.2}):this.yt={0:.5,1:.5}),this.Wt=16,this.Dt=null==s?this.Et():this.qt(s),this.V=this.$t()}Et(){var t=[];return t.push(new R),t.push(B.At(null,this.yt,this.It,4,4,this.u)),t.push(B.At(null,this.yt,this.It,16,4,this.u)),t}Ft(){this.Dt[1].Ot(this.yt),this.Dt[2].Ot(this.yt)}qt(t){var e=[],s=t.split("-")[1];return e.push(new R),e.push(B.Vt(s)),e}}function D(t,e=!1){Math.random()<Math.exp(t.zt)||e||t.Lt?("VariableGR"==t.Xt?(t.Yt=new j(x),t.Ht=new j(x)):"VariableDemo"==t.Xt?t.Yt=new j(x):"Variable"==t.Xt?t.Yt=new j(A):"VariableMix"==t.Xt?t.Yt=new j(U):"VariableUnsafe"==t.Xt?t.Yt=new j(V):"VariableTest"==t.Xt?t.Yt=new j(O):"Variable2Unsafe"==t.Xt?t.Yt=new W(V):"CustomRule"==t.Xt?t.Yt=new j(null,null,t.Jt):"OriginalBB"==t.Xt?t.Yt=new P("Original"):"ModifiedBB"==t.Xt?t.Yt=new P("Modified"):"StarWars"==t.Xt?t.Yt=new P("StarWars"):"Conway"==t.Xt?t.Yt=new P("Conway"):"SparseFourStates"==t.Xt?t.Yt=new P("B2/S245678/I1/4"):t.Yt=new j(U),t.zt=-25,t.Kt=-25,t.Lt=!1,E(t)):(Math.random()<Math.exp(t.Kt)||t.Qt)&&"CustomRule"!=t.Xt&&(t.Yt.Ft(),"VariableGR"==t.Xt&&t.Ht.Ft(),t.Kt=-25,t.Qt=!1,E(t)),t.zt=t.zt+t.Zt,t.zt>0&&(t.zt=0),t.Kt=t.Kt+t._t,t.Kt>0&&(t.Kt=0)}function E(t){var e=document.getElementById("currentStyle");e&&(e.value=t.Yt.O())}function $(t){let e={};for(let s in t){if("t"==s)continue;let i=Math.floor(3*Math.random())-1,n=t[s]+i;n=Math.max(0,Math.min(255,n)),e[s]=n}return e.te=t.te,e}function F(t,e,s,i,n){let r=(e+i+t.ee)%t.ee,a=(s+n+t.se)%t.se,h=r,o=a;return(r-e-i>0||r-e-i<0)&&(o=(t.se-a-t.ie+t.se)%t.se),(a-s-n>0||a-s-n<0)&&(h=(t.ee-r-t.ne+t.ee)%t.ee),[h,o]}function G(t,e,s,i,n){let r=(e+i+t.ee)%t.ee,a=(s+n+t.se)%t.se,h=r,o=a;return(r-e-i>0||r-e-i<0)&&(o=(t.se-a-t.ie+t.se)%t.se),a-s-n>0?h=(r+t.ne+t.ee)%t.ee:a-s-n<0&&(h=(r-t.ne+t.ee)%t.ee),[h,o]}function I(t,e,s,i,n){let r=(e+i+t.ee)%t.ee,a=(s+n+t.se)%t.se,h=r,o=a;return r-e-i>0?o=(a+t.ie+t.se)%t.se:r-e-i<0&&(o=(a-t.ie+t.se)%t.se),(a-s-n>0||a-s-n<0)&&(h=(t.ee-r-t.ne+t.ee)%t.ee),[h,o]}function q(t,e,s,i,n){let r=(e+i+t.ee)%t.ee,a=(s+n+t.se)%t.se,h=r,o=a;return r-e-i>0?o=(a+t.ie+t.se)%t.se:r-e-i<0&&(o=(a-t.ie+t.se)%t.se),a-s-n>0?h=(r+t.ne+t.ee)%t.ee:a-s-n<0&&(h=(r-t.ne+t.ee)%t.ee),[h,o]}function z(t){t.re&&t.ae?t.t=F:t.re?t.t=G:t.ae?t.t=I:t.t=q}function L(t,e){if(t.he){var s={...t.oe};delete s.ue,delete s.Nt;var i={...s,event:e},n=Object.keys(i).join(",")+"\n";n+=Object.values(i).join(",");var r=new Blob([n],{type:"text/csv"}),a=URL.createObjectURL(r),h=document.createElement("a");h.href=a,h.download="dataAutomata.csv",h.click()}}function X(t,e,s){for(var i=function(t){var e=Math.exp(-t),s=1,i=0;do{i++,s*=Math.random()}while(s>e);return i-1}(10**(t.le+t.Yt.Dt[0].W)),n=t.Yt.Dt[0].F,r=t.Yt.Dt[0].D,a=0;a<i;a++){var h=Math.floor(Math.random()*t.ee),o=Math.floor(Math.random()*t.se);Y(e,t,r[n()],h,o,s)}}function Y(t,e,s,i,n,r){null===s?s=function(){let t=Math.floor(10*Math.random())+1,e=Math.floor(10*Math.random())+1,s=new w(e,t);for(let i=0;i<t;i++)for(let t=0;t<e;t++)s.set(i,t,Math.floor(1e5*Math.random()));return s}():(Math.random()<.5&&s.N(),Math.random()<.5&&s.flipX(),Math.random()<.5&&s.flipY());let a=s.height,h=s.width;for(let o=0;o<a;o++)for(let u=0;u<h;u++){let l=r(e,i,n,o-Math.floor(a/2),u-Math.floor(h/2));t.set(l[0],l[1],s.get(o,u))}}function H(t){!function(t){let e=t.ce,s=t.fe;for(var i=0,n=0;n<t.ee;n++)for(var r=0;r<t.se;r++){if(0==t.Me.get(n,r))continue;i+=1;var a=Math.floor(t.grid.get(n,r)/t.Yt.Wt)%4;let e;if(0==a)e=t.backgroundColor;else if(1==a)e=t.me;else if(2==a)e=t.de;else{if(3!=a)continue;e=t.be}let h=4*(n*t.se+r);s.data[h+0]=e.r,s.data[h+1]=e.g,s.data[h+2]=e.b,s.data[h+3]=e.te}if(t.ge=.01*i+.99*t.ge,t.ge>.5*t.ee*t.se){t.Lt=!0;var h=t.ge/(t.ee*t.se);console.log("Changing rule because suspected oscillation (running proportion of cells changed: "+h.toFixed(1)+")."),t.ge=15,L(t,"oscillation")}t.ge<3&&(t.Lt=!0,console.log("Changing rule because not enough cells changed ("+t.ge+")."),t.ge=20,L(t,"blackout")),e.putImageData(s,t.ve,t.we)}(t),function(t){var i=[new Uint8Array(e[0]).fill(0),new Uint8Array(e[1]).fill(0)],n=new Uint8Array(5).fill(0),r=new w(t.se,t.ee),a=t.grid;const h=t.time;for(var o=0;o<t.ee;o++)for(var u=0;u<t.se;u++){var l=s(t,o,u,a,i,n,h);const e=t.grid.get(o,u);var c=e;c="VariableGR"!=t.Xt||0==t.mask.get(o,u)?t.Yt.V(e,c,l,t.time):t.Ht.V(e,c,l,t.time),Math.floor(c/t.Yt.Wt)%4!=Math.floor(e/t.Yt.Wt)%4?t.Me.set(o,u,1):t.Me.set(o,u,0),r.set(o,u,c);for(let t=0;t<i.length;t++)i[t].fill(0);n.fill(0)}t.pe&&X(t,r,t.t),t.grid=r}(t),D(t),t.time=(t.time+1)%166320,t.ke&&function(t){Math.random()<1e-4&&(t.ie=Math.floor(Math.random()*t.se),console.log("Periodicity shift X: "+t.ie)),Math.random()<1e-4&&(t.ne=Math.floor(Math.random()*t.ee),console.log("Periodicity shift Y: "+t.ne)),Math.random()<1e-4&&(t.re=!t.re,z(t),console.log("Flip X: "+t.re)),Math.random()<1e-4&&(t.ae=!t.ae,z(t),console.log("Flip Y: "+t.ae))}(t),"variable"==t.Re&&function(t){Math.random()<1&&(t.be=$(t.be),t.de=$(t.de))}(t),setTimeout((function(){requestAnimationFrame((()=>H(t)))}),t.timeout)}console.log("Loading main.js");var J=document.getElementById("gameCanvas"),K=J.getContext("2d"),Q=29,Z=78,_=80,tt=!1,et=-0,st=!1,it=0,nt=0,rt=!1,at=!1,ht="mouseAnimation",ot="ModifiedBB",ut="zero",lt=6,ct=new class{constructor(t,e,s=200,i=200,n=20,r=!0,a=-2,h=!0,o=0,u=0,l=!1,c=!1,f="black2",M="VariableGR",m="random",d=6,b=2e4,g=2e3){this.ee=s,this.se=i,this.ve=0,this.we=0,this.timeout=n,this.grid=null,this.Me=null,this.fe=null,this.canvas=t,this.ce=e,this.pe=r,this.le=a,this.ke=h,this.ie=o,this.ne=u,this.re=l,this.ae=c,this.Re=f,this.Xt=M,this.Ce=m,this.Se=d,this.Ne=null,this.ye=null,this.t=null,this.mask=null,this.Be=b,this.xe=g,this.zt=-25,this.Kt=-25,this.Zt=25/this.Be,this._t=25/this.xe,this.canvas.width=this.se,this.canvas.height=this.ee,this.fe=e.createImageData(t.width,t.height),this.Lt=!0,this.Qt=!1,this.ge=0,this.he=!1,this.time=0}}(J,K,Q,Z,_,tt,et,st,it,nt,rt,at,ht,ot,ut,lt);window.onload=function(){ct.grid=new w(ct.se,ct.ee),ct.Me=new w(ct.se,ct.ee);const t=document.getElementById("background"),e=t.getContext("2d");ct.Ae=t;const s=new Image;s.src="./grWebsiteBackgroundTransp.png?"+(new Date).getTime(),s.onload=function(){e.drawImage(s,0,0,t.width,t.height)},function(t){t.Ae.addEventListener("mousemove",(function(e){var s=t.canvas.getBoundingClientRect(),i=e.clientX-s.left,n=e.clientY-s.top,r=s.width/t.se,a=s.height/t.ee,h=Math.floor(i/r),o=Math.floor(n/a);t.grid.set(o,h,1)}))}(ct),function(t){t.Ae.addEventListener("mousedown",(function(e){var s=t.canvas.getBoundingClientRect(),i=e.clientX-s.left,n=e.clientY-s.top,r=s.width/t.se,a=s.height/t.ee,h=Math.floor(i/r),o=Math.floor(n/a);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(o,(h+1)%t.se,1),t.grid.set(o,h,1),t.grid.set((o+1)%t.ee,h,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(o,h,1),t.grid.set((o+1)%t.ee,h,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(o,h,1),t.grid.set(o,(h+1)%t.se,1)):(t.grid.set((o+1)%t.ee,(h+1)%t.se,1),t.grid.set((o-1+t.ee)%t.ee,(h+1)%t.se,1),t.grid.set((o-1+t.ee)%t.ee,(h-1+t.se)%t.se,1),t.grid.set((o+1)%t.ee,(h-1+t.se)%t.se,1))}))}(ct),function(t){var e={r:247,g:255,b:28,te:255},s={r:13,g:112,b:255,te:255},i={r:240,g:239,b:239,te:255},n={r:0,g:0,b:0,te:255},r={r:240,g:240,b:240,te:255},a={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),te:255},h={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),te:255};"yellow"==t.Re?(t.backgroundColor=e,t.me=n,t.de=s,t.be=i):"blue"==t.Re?(t.backgroundColor=s,t.me=i,t.de=n,t.be=e):"blue2"==t.Re?(t.backgroundColor=s,t.me=e,t.de=n,t.be=i):"grey"==t.Re?(t.backgroundColor=i,t.me=n,t.de=s,t.be=e):"grey2"==t.Re?(t.backgroundColor=i,t.me=e,t.de=n,t.be=s):"black"==t.Re?(t.backgroundColor=n,t.me=s,t.de=e,t.be=i):"black2"==t.Re?(t.backgroundColor=n,t.me=s,t.de=i,t.be=e):"blackTrace"==t.Re?(t.backgroundColor=n,t.me=i,t.de=n,t.be=i):"blackTrace2"==t.Re?(t.backgroundColor=n,t.me=n,t.de=n,t.be=i):"blackTrace3"==t.Re?(t.backgroundColor=n,t.me=n,t.de=i,t.be=i):"redblue"==t.Re?(t.backgroundColor=n,t.me=r,t.de={r:221,g:85,b:12,te:255},t.be={r:49,g:130,b:189,te:255}):"variable"==t.Re?(t.backgroundColor=n,t.me=r,t.de=a,t.be=h):"mouseAnimation"==t.Re&&(t.backgroundColor={r:0,g:0,b:0,te:0},t.me=s,t.de=n,t.be=e)}(ct),z(ct),function(t){D(t,!0)}(ct),H(ct)}})();
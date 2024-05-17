(()=>{"use strict";function t(t){let e=Object.values(t).reduce(((t,e)=>t+e),0),r=Object.values(t).reduce(((t,r,n)=>[...t,r/e+(t[n-1]||0)]),[]);return function(){let e=Math.random(),n=r.findIndex((t=>e<t));return Object.keys(t)[n]}}const e=[44,44];function r(t,e,r,n,s,i,a){const o=n.height-1,h=n.width-1,u=n.data,l=n.width;for(var c=s[0],m=s[1],f=-1;f<=1;f++)for(var d=-1;d<=1;d++){if(0==f&&0==d)continue;if(i[0]=((-1===f?1:f)+(-1===d?1:d))%2,i[1+(3&a)]=-1==f?1:0,i[1+(1+a&3)]=-1==d?1:0,i[1+(2+a&3)]=1==f?1:0,i[1+(3+a&3)]=1==d?1:0,0==e||0==r||e==o||r==h)var[p,M]=t.t(t,e,r,f,d);else var p=e+f,M=r+d;const n=u[p*l+M],s=3&n,b=(15&n)>>2;if(1==s){c[0]+=1;for(var g=0;g<i.length;g++)c[4+8*g]+=i[g],c[8*(g+1)]+=1-i[g]}else if(2==s){c[2]+=1;for(g=0;g<i.length;g++)c[4+8*g+2]+=i[g],c[8*(g+1)+2]+=1-i[g]}else if(3==s){c[3]+=1;for(g=0;g<i.length;g++)c[4+8*g+3]+=i[g],c[8*(g+1)+3]+=1-i[g]}if(0==b){m[0]+=1;for(g=0;g<i.length;g++)m[4+8*g]+=i[g],m[8*(g+1)]+=1-i[g]}else if(1==b){m[1]+=1;for(g=0;g<i.length;g++)m[4+8*g+1]+=i[g],m[8*(g+1)+1]+=1-i[g]}else if(2==b){m[2]+=1;for(g=0;g<i.length;g++)m[4+8*g+2]+=i[g],m[8*(g+1)+2]+=1-i[g]}else if(3==b){m[3]+=1;for(g=0;g<i.length;g++)m[4+8*g+3]+=i[g],m[8*(g+1)+3]+=1-i[g]}}for(g=0;g<i.length+1;g++)c[4*g+1]+=c[4*g]+c[4*g+3];return[c,m]}const n="mix",s="isotropic",i="xcross",a="vcross",o="xvcross",h="directional1",u="directional2",l="directional3",c="directional2b",m="directional",f={[n]:.2,[s]:.4,[i]:.05,[a]:.05,[o]:.05,[h]:.05,[u]:.05,[l]:.05,[c]:.05,[m]:.05};const d="A",p="C",M="E",g="B";class b{constructor(t,e,r,n,s,i=null){this.type=t,this.threshold=e,this.i=r,this.o=n,this.h=s,this.u=i,this.l=function(t,e){return t==p?function(t){return 0==t}:t==d?function(t){return t%e==0}:function(t){return!0}}(this.o,this.h),this.m=function(t,e,r){return e==M?function(e){return e[r[0]][r[1]]==t}:e==g?function(e){return e[r[0]][r[1]]>t}:void 0}(this.threshold,this.type,this.i),this.p=function(t){let e;return e=null==t?function(t){return!0}:function(e){return t[e%t.length]},e}(i)}test(t,e,r){var n=this.p(r);return this.m(t)&&this.l(e)&&n}name(){var t="";return null!=this.u&&(t=this.u.map((t=>t?"1":"0")).join("")),`${this.type}${this.threshold}${this.o}[${this.i[0]}|${this.i[1]}]${t}`}static M(t,e=4){var r=null;t.startsWith(M)?r=M:t.startsWith(g)&&(r=g);var n=t.substring(r.length),s=parseInt(n.substring(0,1)),i=null;(n=n.substring(1)).startsWith(p)?i=p:n.startsWith(d)?i=d:n.startsWith("N")&&(i="N");var a=(n=n.substring(i.length)).split("[")[1].split("]")[0].split("|").map(Number),o=null;return(n=n.split("]")[1]).length>0&&(o=n.split("").map((t=>"1"===t))),new b(r,s,a,i,e,o)}static k(e=null,r=4,f=n,w=null){const k=[M,g],v=k[Math.floor(Math.random()*k.length)],S=[p,d,"N"],R=S[Math.floor(Math.random()*S.length)];null===e&&(e={0:2/3,1:1/3});const C=t(e)(),N=function(t,e){var r=e;if(r==n){var f=Math.random();r=f<.5?s:f<.7?i:f<.9?a:m}if(r==s)return Math.floor(4*Math.random());if(r==a)return Math.floor(4*Math.random()+4);if(r==i)return Math.floor(4*Math.random()+8);if(r==o)return Math.floor(8*Math.random()+4);if(r==h)return Math.floor(4*Math.random()+12);if(r==u)return Math.floor(8*Math.random()+12);if(r==l)return Math.floor(12*Math.random()+12);if(r==c){var d=Math.floor(8*Math.random()+12);return d>=16&&(d+=4),d}return r==m?Math.floor(16*Math.random()+12):void 0}(0,f),y=[C,N];var x=0,A=8;if(0==y[0]&&y[1]%4!=1?A=5:y[1]>4&&y[1]<=16?A=4:y[1]>16&&(A=3),x=v===g?Math.floor(Math.random()*A):Math.floor(Math.random()*A)+1,Math.random()<.2)B=null;else{var B;null==w&&(w=Math.floor(20*Math.random())+2);do{B=new Array(w).fill(0).map((()=>Math.random()<.5))}while(!B.includes(!0))}return new b(v,x,y,R,r,B)}}class w{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(this.width*this.height),this.rows=new Array(this.height),this.v=!1,this.get=this.S,this.set=this.R}static C(t,e=!1,r=!1,n=!1){const s=t.length,i=t[0].length,a=new w(i,s);for(let e=0;e<s;e++){n&&(e=s-e-1);for(let n=0;n<i;n++)r&&(n=i-n-1),a.set(e,n,t[e][n])}return e&&a.N(),a}N(){[this.width,this.height]=[this.height,this.width],[this.get,this.set]=this.v?[this.S,this.R]:[this.A,this.B],this.v=!this.v}flipX(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width/2;e++){const r=this.get(t,e);this.set(t,e,this.get(t,this.width-e-1)),this.set(t,this.width-e-1,r)}}flipY(){for(let t=0;t<this.height/2;t++)for(let e=0;e<this.width;e++){const r=this.get(t,e);this.set(t,e,this.get(this.height-t-1,e)),this.set(this.height-t-1,e,r)}}S(t,e){return this.data[t*this.width+e]}R(t,e,r){this.data[t*this.width+e]=r}A(t,e){return this.data[e*this.height+t]}B(t,e,r){this.data[e*this.height+t]=r}}class k{constructor(){this.F=void 0}P(t,e,r,n){throw new Error("Must override method")}G(){throw new Error("Must override method")}}class v extends k{constructor(){super(),this.I=this.T(),this.V(),this.X=0}T(){throw new Error("Must override method")}V(){this.Y=Object.keys(this.I).map((t=>this.I[t].mask));let e=Object.keys(this.I).map((t=>this.I[t].O));this.U=t(e)}}class S extends v{constructor(){super(),this.F=4}P(t,e,r,n){var s=t%4;return 1==s||3==s?e=2:2==s?e=0:0==s&&2==r[0][0]?e=1:0==s&&r[0][0]>2&&(e=3),e}G(){return"BB"}T(){return{random:{O:15,mask:null},W:{O:4,mask:w.C([[1,1],[1,1]])},$:{O:4,mask:new w([[1,0,1],[0,0,0],[1,0,1]])},j:{O:2,mask:w.C([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},H:{O:2,mask:w.C([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},L:{O:2,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},D:{O:2,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]],!0)}}}}class R extends v{constructor(){super(),this.F=4,this.X=-1}P(t,e,r,n){var s=t%4;return 3==s&&(s=0),1==s?e=2:2==s||3==s?e=0:0!=s&&3!=s||2!=r[0][0]?0==s&&r[0][0]>2&&(e=3):e=1,e}G(){return"TBB"}T(){return{random:{O:15,mask:null},L:{O:1,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},j:{O:2,mask:w.C([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},H:{O:2,mask:w.C([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},W:{O:4,mask:w.C([[1,1],[1,1]])},q:{O:1e4,mask:w.C([[0,2,1,0,0,0,0,0],[0,0,2,1,0,0,0,0],[2,0,0,2,1,0,0,0],[1,2,0,0,2,1,0,0],[0,1,0,2,1,0,2,1],[0,0,2,1,0,0,2,1]])}}}}class C extends v{constructor(){super(),this.F=4,this.X=-1}P(t,e,r,n){var s=t%4;return 1==s&&(r[0][0]<3||r[0][0]>5)?e=2:2==s?e=3:3==s?e=0:0==s&&2==r[0][0]&&(e=1),e}G(){return"SW"}T(){let t=.2;return{random:{O:6,mask:null},J:{O:1,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},K:{O:t,mask:w.C([[1,2,3],[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,0],[0,1,2],[3,0,1]])},Z:{O:t,mask:w.C([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},_:{O:t,mask:w.C([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},tt:{O:t,mask:w.C([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},et:{O:t,mask:w.C([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},rt:{O:t,mask:w.C([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},nt:{O:t,mask:w.C([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},st:{O:t,mask:w.C([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},it:{O:t,mask:w.C([[0,0,0,0,3,2,0,0],[0,0,0,0,1,0,3,0],[0,0,1,2,0,1,0,0],[0,0,2,3,1,1,0,0],[3,1,0,1,0,1,1,1],[2,0,1,1,1,0,1,3],[0,3,0,0,1,1,1,0],[0,0,0,0,1,3,0,0]])},ot:{O:t,mask:w.C([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},ht:{O:t,mask:w.C([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},ut:{O:t,mask:w.C([[0,3,2,1,1,2,3,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[2,3,0,0,0,0,3,2]])},lt:{O:t,mask:w.C([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},ct:{O:t,mask:w.C([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},ft:{O:t,mask:w.C([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])},dt:{O:t,mask:w.C([[0,1,0,0,0,0],[1,1,1,0,0,0],[0,1,0,0,1,0],[0,0,0,1,1,1],[0,0,0,0,1,0]])},$:{O:2,mask:w.C([[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[1,1,0,0,0,1,1],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]])}}}}class N extends v{constructor(t){super(),this.Mt=t;const e=this.Mt.split("/");this.gt=new Uint8Array(e[0].substring(1).split("").map(Number)),this.bt=new Uint8Array(e[1].substring(1).split("").map(Number)),"I"==e[2][0]?(this.wt=new Uint8Array(e[2].substring(1).split("").map(Number)),this.F=Number(e[3])):(this.wt=[],this.F=Number(e[2]))}P(t,e,r,n){var s=t%this.F;return 1==s&&this.bt.includes(r[0][0])?e=1:s>0&&s<this.F-1?e+=1:s==this.F-1?e=0:0==s&&this.gt.includes(r[0][0])?e=1:0==s&&this.wt.includes(r[0][0])&&(e=this.F-1),e}G(){return this.Mt}T(){return{random:{O:1,mask:null}}}}class y extends N{constructor(){super(y.kt()),this.X=0}static kt(){let t=y.vt(4,8),e=y.vt(4,8),r=y.vt(4,8),n=e.reduce(((t,e)=>t+(8-e)),0),s=t.reduce(((t,e)=>t+(8-e)),0);for(;n>8||2*n+s>20;)e=y.vt(4,8),t=y.vt(4,8),n=e.reduce(((t,e)=>t+(8-e)),0),s=t.reduce(((t,e)=>t+(8-e)),0);return console.log(n+s,n,s),r=r.filter((r=>!t.includes(r)&&!e.includes(r))),`B2${t.join("")}/S3${e.join("")}/I1${r.join("")}/4`}static vt(t,e){let r=[];for(let n=t;n<=e;n++)Math.random()<.5&&r.push(n);return r}T(){let t=.2;return{random:{O:20,mask:null},St:{O:1,mask:w.C([[1,1],[1,1]])},Rt:{O:t,mask:w.C([[1,1]])},Ct:{O:1,mask:w.C([[1,0],[1,1]])},Nt:{O:t,mask:w.C([[1,1],[2,2]])},yt:{O:1,mask:w.C([[0,1,0],[1,1,1],[0,1,0]])},xt:{O:1,mask:w.C([[1,0,1],[0,0,0],[1,0,1]])},At:{O:t,mask:w.C([[1,0,0],[1,1,0],[0,1,1]])},Bt:{O:t,mask:w.C([[0,1,1,1,1,1,0],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[0,1,1,1,1,1,0]])},Ft:{O:1,mask:w.C([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},Pt:{O:1,mask:w.C([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},Gt:{O:1,mask:w.C([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},It:{O:t,mask:w.C([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},Tt:{O:t,mask:w.C([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},Vt:{O:t,mask:w.C([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])}}}}class x extends N{constructor(){super("B24/S34/I15678/4"),this.X=0}G(){return"FS"}T(){let t=.2;return{random:{O:20,mask:null},St:{O:1,mask:w.C([[1,1],[1,1]])},Rt:{O:t,mask:w.C([[1,1]])},Ct:{O:1,mask:w.C([[1,0],[1,1]])},Nt:{O:t,mask:w.C([[1,1],[2,2]])},yt:{O:1,mask:w.C([[0,1,0],[1,1,1],[0,1,0]])},xt:{O:1,mask:w.C([[1,0,1],[0,0,0],[1,0,1]])},At:{O:t,mask:w.C([[1,0,0],[1,1,0],[0,1,1]])},Bt:{O:t,mask:w.C([[0,1,1,1,1,1,0],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[0,1,1,1,1,1,0]])},Ft:{O:1,mask:w.C([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},Pt:{O:1,mask:w.C([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},Gt:{O:1,mask:w.C([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},It:{O:t,mask:w.C([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},Tt:{O:t,mask:w.C([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},Vt:{O:t,mask:w.C([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])}}}}class A extends N{constructor(){super("B2/S245678/I1/4"),this.X=0}G(){return"SS"}T(){let t=.2;return{random:{O:10,mask:null},St:{O:1,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},Rt:{O:t,mask:w.C([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},Nt:{O:t,mask:w.C([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},At:{O:t,mask:w.C([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},Bt:{O:t,mask:w.C([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},It:{O:t,mask:w.C([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},Tt:{O:t,mask:w.C([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},Ft:{O:1,mask:w.C([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},Vt:{O:t,mask:w.C([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},Xt:{O:t,mask:w.C([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},Pt:{O:1,mask:w.C([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},Yt:{O:1,mask:w.C([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},Ot:{O:1,mask:w.C([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])}}}}class B extends v{constructor(){super(),this.F=4,this.X=.4}P(t,e,r,n){var s=t%4,i=r[0][1];return 1!=s&&3!=s||!(i<2||i>3)?1!=s&&3!=s||2!=i&&3!=i?0!=s&&2!=s||3!=i?2==s&&(e=0):e=3:e=1:e=2,e}T(){return{Ut:{O:1,mask:null}}}G(){return"CW"}}class F extends k{constructor(t,e,r,n,s){super(),this.Et=e,this.Wt=t,this.F=this.Et,this.$t=r,this.jt=n,this.Ht=s}P(t,e,r,n){e=0;for(let s=0;s<this.Wt.length;s++)if(this.Wt[s].test(r,t,n)){e=(s+1)%this.Et;break}return e}G(){return this.Wt.map((t=>t.name())).join("||")}static Lt(e=null,r=null,n=null,s=4,i=4,a=null){var o=[];null==e&&(e=Math.floor(8*Math.random())+2),null==n&&(n=t(f)()),null==a&&(a=this.Dt());for(let t=0;t<e;t++)o.push(b.k(r,s,n,a));return console.log((new Date).toLocaleTimeString()+" Sampling coloring rule "+n+": "+o.map((t=>t.name())).join(", ")),new F(o,i,r,n,a)}static Dt(){var t=Math.random();return t<.2?null:t<.6?1:t<.7?2:t<.8?3:t<.9?4:Math.floor(20*Math.random())+5}static qt(t,e=4){var r=t.split("||").map((t=>b.M(t)));return new F(r,e,null,n,null)}zt(t=null){var e,r=this.Wt.length;null==t&&(t=this.$t),0==(e=2==r?Math.floor(2*Math.random())+1:10==r?Math.floor(2*Math.random()):Math.floor(3*Math.random()))?this.Jt():1==e?this.Kt(t):this.Qt(t)}Qt(t){var e=this.Wt.slice();e.push(b.k(t,4,this.jt,this.Ht)),console.log((new Date).toLocaleTimeString()+" Adding condition "+this.jt+": "+e.map((t=>t.name())).join("||")),this.Wt=e}Jt(){var t=this.Wt.slice(),e=Math.floor(Math.random()*t.length);t.splice(e,1)[0],console.log((new Date).toLocaleTimeString()+" Removing condition: "+t.map((t=>t.name())).join("||")),this.Wt=t}Kt(t){var e=this.Wt.slice(),r=Math.floor(Math.random()*e.length);e[r]=b.k(t,4,this.jt,this.Ht),console.log((new Date).toLocaleTimeString()+" Changing condition "+r+" to "+this.jt+": "+e.map((t=>t.name())).join("||")),this.Wt=e}}const P="gr",G="safe",I="mix",T="general",V="test";class X{Zt;_t;P;te(){throw new Error("Must override method")}ee(){return function(t,e,r,n){e=this._t[0].P(t%this._t[0].F,e,r,n);var s=this._t[0].F;for(let i=1;i<this._t.length;i++)e+=s*this._t[i].P(Math.floor(t/s)%this._t[i].F,e,r,n),e%=s*=this._t[i].F;return e%s}}re(){throw new Error("Must override method")}G(){return this._t.map((t=>t.G())).join("-")}}class Y extends X{constructor(t){super(),this.ne=t,this.Zt=1,this._t=this.te(),this.P=this.ee()}te(){var t=[];return"Original"==this.ne?t.push(new R):"StarWars"==this.ne?t.push(new C):"Modified"==this.ne?t.push(new S):"Conway"==this.ne?t.push(new B):t.push(new N(this.ne)),t}re(){}}class O extends X{constructor(t,e,r=null){super(),this.ne=t,this.$t=e,this.Ht=null,this.se=null,null==e&&(t==G||t==P||t==V?this.$t={0:1,1:0}:t==I?(Math.random()<.5?this.$t={0:.8,1:.2}:this.$t={0:1,1:0},this.$t={0:.8,1:.2}):this.$t={0:.5,1:.5}),t==P&&(this.Ht=1),this.Zt=4,this._t=null==r?this.te():this.ie(r),this.P=this.ee()}te(){var t=[],e=Math.random();return this.ne==P?t.push(new S):this.ne==G?e<.5?t.push(new y):e<.65?t.push(new S):e<.7?t.push(new R):e<.8?t.push(new C):e<.85?t.push(new A):e<.9?t.push(new x):t.push(new B):(e<.5?t.push(new y):e<.65?t.push(new S):e<.7?t.push(new R):e<.8?t.push(new C):e<.85?t.push(new A):e<.9?t.push(new x):t.push(new B),0==t.length&&t.push(new y)),t.push(F.Lt(null,this.$t,this.se,4,4,this.Ht)),this.ne==V&&((t=[]).push(new y),this.Zt=4,t.push(F.Lt(null,this.$t,this.se,4,4,this.Ht))),t}re(){this._t[1]&&"function"==typeof this._t[1].zt&&this._t[1].zt(this.$t)}ie(t){var e=[],[r,n]=t.split("-");return"BB"==r?e.push(new S):"TBB"==r?e.push(new R):"SW"==r&&e.push(new C),e.push(new C),e.push(F.qt(n)),e}}class U extends X{constructor(t,e,r=null){super(),this.ne=t,this.$t=e,this.Ht=null,this.se=null,null==e&&(t==G?this.$t={0:1,1:0}:t==I?(Math.random()<.5?this.$t={0:.8,1:.2}:this.$t={0:1,1:0},this.$t={0:.8,1:.2}):this.$t={0:.5,1:.5}),this.Zt=16,this._t=null==r?this.te():this.ie(r),this.P=this.ee()}te(){var t=[];return t.push(new S),t.push(F.Lt(null,this.$t,this.se,4,4,this.u)),t.push(F.Lt(null,this.$t,this.se,16,4,this.u)),t}re(){this._t[1].zt(this.$t),this._t[2].zt(this.$t)}ie(t){var e=[],r=t.split("-")[1];return e.push(new S),e.push(F.qt(r)),e}}function E(t,e=!1){Math.random()<Math.exp(t.ae)||e||t.oe?("VariableGR"==t.he?(t.ue=new O(P),t.le=new O(P)):"VariableDemo"==t.he?t.ue=new O(P):"Variable"==t.he?t.ue=new O(G):"VariableMix"==t.he?t.ue=new O(I):"VariableUnsafe"==t.he?t.ue=new O(T):"VariableTest"==t.he?t.ue=new O(V):"Variable2Unsafe"==t.he?t.ue=new U(T):"CustomRule"==t.he?t.ue=new O(null,null,t.ce):"OriginalBB"==t.he?t.ue=new Y("Original"):"ModifiedBB"==t.he?t.ue=new Y("Modified"):"StarWars"==t.he?t.ue=new Y("StarWars"):"Conway"==t.he?t.ue=new Y("Conway"):"SparseFourStates"==t.he?t.ue=new Y("B378/S124567/4"):t.ue=new O(I),t.ae=-25,t.me=-25,t.oe=!1,W(t)):(Math.random()<Math.exp(t.me)||t.fe)&&"CustomRule"!=t.he&&(t.ue.re(),"VariableGR"==t.he&&t.le.re(),t.me=-25,t.fe=!1,W(t)),t.ae=t.ae+t.de,t.ae>0&&(t.ae=0),t.me=t.me+t.pe,t.me>0&&(t.me=0)}function W(t){var e=document.getElementById("currentStyle");e&&(e.value=t.ue.G())}function $(t){let e={};for(let r in t){if("t"==r)continue;let n=Math.floor(3*Math.random())-1,s=t[r]+n;s=Math.max(0,Math.min(255,s)),e[r]=s}return e.Me=t.Me,e}function j(t){var e={r:247,g:255,b:28,Me:255},r={r:13,g:112,b:255,Me:255},n={r:240,g:239,b:239,Me:255},s={r:0,g:0,b:0,Me:255},i={r:240,g:240,b:240,Me:255},a={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),Me:255},o={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),Me:255};"yellow"==t.ge?(t.backgroundColor=e,t.be=s,t.we=r,t.ke=n):"blue"==t.ge?(t.backgroundColor=r,t.be=n,t.we=s,t.ke=e):"blue2"==t.ge?(t.backgroundColor=r,t.be=e,t.we=s,t.ke=n):"grey"==t.ge?(t.backgroundColor=n,t.be=s,t.we=r,t.ke=e):"grey2"==t.ge?(t.backgroundColor=n,t.be=e,t.we=s,t.ke=r):"black"==t.ge?(t.backgroundColor=s,t.be=r,t.we=e,t.ke=n):"black2"==t.ge?(t.backgroundColor=s,t.be=r,t.we=n,t.ke=e):"blackTrace"==t.ge?(t.backgroundColor=s,t.be=n,t.we=s,t.ke=n):"blackTrace2"==t.ge?(t.backgroundColor=s,t.be=s,t.we=s,t.ke=n):"blackTrace3"==t.ge?(t.backgroundColor=s,t.be=s,t.we=n,t.ke=n):"redblue"==t.ge?(t.backgroundColor=s,t.be=i,t.we={r:221,g:85,b:12,Me:255},t.ke={r:49,g:130,b:189,Me:255}):"variable"==t.ge?(t.backgroundColor=s,t.be=i,t.we=a,t.ke=o):"mouseAnimation"==t.ge&&(t.backgroundColor={r:0,g:0,b:0,Me:0},t.be=r,t.we=s,t.ke=e)}function H(t,e,r,n,s){let i=(e+n+t.ve)%t.ve,a=(r+s+t.Se)%t.Se,o=i,h=a;return(i-e-n>0||i-e-n<0)&&(h=(t.Se-a-t.Re+t.Se)%t.Se),(a-r-s>0||a-r-s<0)&&(o=(t.ve-i-t.Ce+t.ve)%t.ve),[o,h]}function L(t,e,r,n,s){let i=(e+n+t.ve)%t.ve,a=(r+s+t.Se)%t.Se,o=i,h=a;return(i-e-n>0||i-e-n<0)&&(h=(t.Se-a-t.Re+t.Se)%t.Se),a-r-s>0?o=(i+t.Ce+t.ve)%t.ve:a-r-s<0&&(o=(i-t.Ce+t.ve)%t.ve),[o,h]}function D(t,e,r,n,s){let i=(e+n+t.ve)%t.ve,a=(r+s+t.Se)%t.Se,o=i,h=a;return i-e-n>0?h=(a+t.Re+t.Se)%t.Se:i-e-n<0&&(h=(a-t.Re+t.Se)%t.Se),(a-r-s>0||a-r-s<0)&&(o=(t.ve-i-t.Ce+t.ve)%t.ve),[o,h]}function q(t,e,r,n,s){let i=(e+n+t.ve)%t.ve,a=(r+s+t.Se)%t.Se,o=i,h=a;return i-e-n>0?h=(a+t.Re+t.Se)%t.Se:i-e-n<0&&(h=(a-t.Re+t.Se)%t.Se),a-r-s>0?o=(i+t.Ce+t.ve)%t.ve:a-r-s<0&&(o=(i-t.Ce+t.ve)%t.ve),[o,h]}function z(t){t.Ne&&t.ye?t.t=H:t.Ne?t.t=L:t.ye?t.t=D:t.t=q}function J(t){E(t,!0)}function K(t,e){if(t.xe){var r={...t.Ae};delete r.Be,delete r.Wt;var n={...r,event:e},s=Object.keys(n).join(",")+"\n";s+=Object.values(n).join(",");var i=new Blob([s],{type:"text/csv"}),a=URL.createObjectURL(i),o=document.createElement("a");o.href=a,o.download="dataAutomata.csv",o.click()}}function Q(t,e,r){var n=function(t){var e=Math.exp(-t),r=1,n=0;do{n++,r*=Math.random()}while(r>e);return n-1}(10**(t.Fe+t.ue._t[0].X));if(0!=n)for(var s=t.ue._t[0].U,i=t.ue._t[0].Y,a=0;a<n;a++){var o=Math.floor(Math.random()*t.ve),h=Math.floor(Math.random()*t.Se);Z(e,t,i[s()],o,h,r)}}function Z(t,e,r,n,s,i){null===r?r=function(){let t,e=Math.floor(10*Math.random())+1;if(Math.random()<.7)t=function(t){let e=Math.random();return e<.1?nt(t,t):e<.2?tt(t,t):e<.3?_(t,t):e<.4?function(t){let e=new w(t,t);for(let r=0;r<t;r++)for(let n=r;n<t;n++)e.set(r,n,Math.floor(1e5*Math.random())),e.set(n,r,e.get(r,n));return e}(t):e<.5?function(t){let e=new w(t,t);for(let r=0;r<t;r++)for(let n=r;n<t;n++)e.set(r,n,Math.floor(1e5*Math.random())),e.set(t-1-n,t-1-r,e.get(r,n));return e}(t):e<.6?et(t,t):e<.7?rt(t,t):e<.8?function(t){let e=new w(t,t);for(let r=0;r<t;r++)for(let n=Math.max(r,t-r);n<t;n++)e.set(r,n,Math.floor(1e5*Math.random())),e.set(n,r,e.get(r,n)),e.set(t-1-n,t-1-r,e.get(r,n)),e.set(t-1-r,t-1-n,e.get(r,n));return e}(t):e<.9?function(t){let e=new w(t,t);for(let r=0;r<Math.ceil(t/2);r++)for(let n=0;n<Math.ceil(t/2);n++)e.set(r,n,Math.floor(1e5*Math.random())),e.set(n,t-1-r,e.get(r,n)),e.set(t-1-r,t-1-n,e.get(r,n)),e.set(t-1-n,r,e.get(r,n));return e}(t):function(t){let e=new w(t,t);for(let r=0;r<Math.ceil(t/2);r++)for(let n=0;n<Math.ceil(t/2);n++)e.set(r,n,Math.floor(1e5*Math.random())),e.set(n,t-1-r,e.get(r,n)),e.set(t-1-r,t-1-n,e.get(r,n)),e.set(t-1-n,r,e.get(r,n)),e.set(t-1-r,n,e.get(r,n)),e.set(t-1-n,t-1-r,e.get(r,n)),e.set(r,t-1-n,e.get(r,n)),e.set(n,r,e.get(r,n));return e}(t)}(e);else{t=function(t,e){let r=Math.random();return r<.2?nt(t,e):r<.4?tt(t,e):r<.6?_(t,e):r<.8?et(t,e):rt(t,e)}(e,Math.floor(10*Math.random())+1)}return t}():(Math.random()<.25&&r.N(),Math.random()<.5&&r.flipX(),Math.random()<.75&&r.flipY());let a=r.height,o=r.width;for(let h=0;h<a;h++)for(let u=0;u<o;u++){let l=i(e,n,s,h-Math.floor(a/2),u-Math.floor(o/2));t.set(l[0],l[1],r.get(h,u))}}function _(t,e){let r=new w(e,t);for(let n=0;n<t;n++)for(let t=0;t<Math.ceil(e/2);t++)r.set(n,t,Math.floor(1e5*Math.random())),r.set(n,e-1-t,r.get(n,t));return r}function tt(t,e){let r=new w(e,t);for(let n=0;n<Math.ceil(t/2);n++)for(let s=0;s<e;s++)r.set(n,s,Math.floor(1e5*Math.random())),r.set(t-1-n,s,r.get(n,s));return r}function et(t,e){let r=new w(e,t);for(let n=0;n<t;n++)for(let s=0;s<Math.ceil(e/2);s++)r.set(n,s,Math.floor(1e5*Math.random())),r.set(t-1-n,e-1-s,r.get(n,s));return r}function rt(t,e){let r=new w(e,t);for(let n=0;n<Math.ceil(t/2);n++)for(let s=0;s<Math.ceil(e/2);s++)r.set(n,s,Math.floor(1e5*Math.random())),r.set(t-1-n,s,r.get(n,s)),r.set(n,e-1-s,r.get(n,s)),r.set(t-1-n,e-1-s,r.get(n,s));return r}function nt(t,e){let r=new w(e,t);for(let n=0;n<t;n++)for(let t=0;t<e;t++)r.set(n,t,Math.floor(1e5*Math.random()));return r}function st(t){!function(t){let e=t.Pe,r=t.Ge;for(var n=0,s=0;s<t.ve;s++)for(var i=0;i<t.Se;i++){if(0==t.Ie.get(s,i))continue;n+=1;var a=Math.floor(t.grid.get(s,i)/t.ue.Zt)%4;let e;if(0==a)e=t.backgroundColor;else if(1==a)e=t.be;else if(2==a)e=t.we;else{if(3!=a)continue;e=t.ke}let o=4*(s*t.Se+i);r.data[o+0]=e.r,r.data[o+1]=e.g,r.data[o+2]=e.b,r.data[o+3]=e.Me}if(t.Te=.01*n+.99*t.Te,t.Te>.5*t.ve*t.Se){t.oe=!0;var o=t.Te/(t.ve*t.Se);console.log("Changing rule because suspected oscillation (running proportion of cells changed: "+o.toFixed(1)+")."),t.Te=15,K(t,"oscillation")}t.Te<3&&(t.oe=!0,console.log("Changing rule because not enough cells changed ("+t.Te+")."),t.Te=20,K(t,"blackout")),e.putImageData(r,t.Ve,t.Xe)}(t),function(t){var n=[new Uint8Array(e[0]).fill(0),new Uint8Array(e[1]).fill(0)],s=new Uint8Array(5).fill(0),i=new w(t.Se,t.ve),a=t.grid;const o=t.time;for(var h=0;h<t.ve;h++)for(var u=0;u<t.Se;u++){var l=r(t,h,u,a,n,s,o);const e=t.grid.get(h,u);var c=e;c="VariableGR"!=t.he||0==t.mask.get(h,u)?t.ue.P(e,c,l,t.time):t.le.P(e,c,l,t.time),Math.floor(c/t.ue.Zt)%4!=Math.floor(e/t.ue.Zt)%4?t.Ie.set(h,u,1):t.Ie.set(h,u,0),i.set(h,u,c);for(let t=0;t<n.length;t++)n[t].fill(0);s.fill(0)}t.Ye&&Q(t,i,t.t),t.grid=i}(t),E(t),t.time=(t.time+1)%166320,t.Oe&&function(t){Math.random()<1e-4&&(t.Re=Math.floor(Math.random()*t.Se),console.log("Periodicity shift X: "+t.Re)),Math.random()<1e-4&&(t.Ce=Math.floor(Math.random()*t.ve),console.log("Periodicity shift Y: "+t.Ce)),Math.random()<1e-4&&(t.Ne=!t.Ne,z(t),console.log("Flip X: "+t.Ne)),Math.random()<1e-4&&(t.ye=!t.ye,z(t),console.log("Flip Y: "+t.ye))}(t),"variable"==t.ge&&function(t){Math.random()<1&&(t.ke=$(t.ke),t.we=$(t.we))}(t),setTimeout((function(){requestAnimationFrame((()=>st(t)))}),t.timeout)}function it(t,e){return console.log("Attempting to load image"),(r="grLogoLarge.png",console.log("Loading image:",r),new Promise(((t,e)=>{const n=new Image;n.onload=()=>{console.log("Image loaded:",r);const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const s=e.getContext("2d");s.drawImage(n,0,0,n.width,n.height);const i=s.getImageData(0,0,e.width,e.height).data,a=[];for(let t=0;t<n.height;t++){const e=[];for(let r=0;r<n.width;r++){const s=4*(t*n.width+r),a=(i[s]+i[s+1]+i[s+2])/3;e.push(a>128?1:0)}a.push(e)}t(a)},n.onerror=()=>{console.error("Error loading image:",r),e(new Error("Error loading image"))},n.src=r}))).then((e=>{new w(t.Se,t.ve);const r=new w(t.Se,t.ve),n=e[0].length/t.Se,s=e.length/t.ve,i=Math.max(n,s),a=Math.floor((t.Se-e[0].length/i)/2),o=Math.floor((t.ve-e.length/i)/2);for(let n=0;n<t.ve;n++)for(let s=0;s<t.Se;s++){if(n<o||(n-o)*i>=e.length){r.set(n,s,1);continue}let t=Math.floor((s-a)*i);0===e[Math.floor((n-o)*i)][t]?r.set(n,s,0):r.set(n,s,1)}t.mask=r})).catch((e=>{console.log("Image loading failed, not using a mask."),console.error("Error loading image:",e),t.mask=new w(t.Se,t.ve)}));var r}async function at(t,e){if("VariableGR"==t.he&&await it(t),"zero"!=t.Ue)return function(t,e=1e4){return Promise.resolve().then((()=>{t.grid=new w(t.Se,t.ve),t.Ie=new w(t.Se,t.ve);for(var r=0;r<t.ve;r++)for(var n=0;n<t.Se;n++)if("gr"!=t.Ue||1!==t.mask.get(r,n)){for(var s=Math.random(),i=0;i<e;i++)if(s<(i+1)/(e+1)){t.grid.set(r,n,i);break}t.Ie.set(r,n,1)}else t.grid.set(r,n,0)}))}(t);t.grid=new Grid(t.Se,t.ve),t.Ie=new Grid(t.Se,t.ve)}function ot(t){document.getElementById("submitButton").addEventListener("click",(function(){!function(t){var e=document.getElementById("userGridHeight").value,r=document.getElementById("userGridWidth").value,n=document.getElementById("userTimeout").value,s=document.getElementById("userXShift"),i=s?s.value:t.Ee,a=document.getElementById("userYShift"),o=a?a.value:t.We,h=document.getElementById("userFlipX"),u=h?h.checked:t.$e,l=document.getElementById("userFlipY"),c=l?l.checked:t.je,m=document.getElementById("randomnessCheckbox"),f=m?m.checked:t.Ye,d=document.getElementById("randomnessSlider"),p=d?parseFloat(d.value):t.Fe,M=document.getElementById("userColorPalette").value,g=document.getElementById("metaRule").value,b=null;document.getElementById("currentStyle")&&(b=document.getElementById("currentStyle").value),localStorage.setItem("userGridHeight",e),localStorage.setItem("userGridWidth",r),localStorage.setItem("userTimeout",n),localStorage.setItem("userXShift",i),localStorage.setItem("userYShift",o),localStorage.setItem("userFlipX",u),localStorage.setItem("userFlipY",c),localStorage.setItem("userColorPalette",M),localStorage.setItem("userRandomnessOn",f),localStorage.setItem("userRandomnessAmount",p),localStorage.setItem("metaRule",g),localStorage.setItem("currentStyle",b),location.reload()}(t)}))}function ht(t){document.getElementById("randomnessSlider").addEventListener("input",(function(){!function(t,e){t.Fe=parseFloat(e),document.getElementById("randomnessAmountValue").textContent=e}(t,this.value)}))}console.log("Loading main.js");var ut=document.getElementById("gameCanvas"),lt=ut.getContext("2d"),ct=128,mt=128,ft=20,dt=!0,pt=-1,Mt=!0,gt=0,bt=0,wt=!1,kt=!1,vt="black2",St="VariableGR",Rt="random",Ct=6,Nt=new class{constructor(t,e,r=200,n=200,s=20,i=!0,a=-2,o=!0,h=0,u=0,l=!1,c=!1,m="black2",f="VariableGR",d="random",p=6,M=2e4,g=2e3){this.ve=r,this.Se=n,this.Ve=0,this.Xe=0,this.timeout=s,this.grid=null,this.Ie=null,this.Ge=null,this.canvas=t,this.Pe=e,this.Ye=i,this.Fe=a,this.Oe=o,this.Re=h,this.Ce=u,this.Ne=l,this.ye=c,this.ge=m,this.he=f,this.Ue=d,this.He=p,this.Le=null,this.De=null,this.t=null,this.mask=null,this.qe=M,this.ze=g,this.ae=-25,this.me=-25,this.de=25/this.qe,this.pe=25/this.ze,this.canvas.width=this.Se,this.canvas.height=this.ve,this.Ge=e.createImageData(t.width,t.height),this.oe=!0,this.fe=!1,this.Te=0,this.xe=!1,this.time=0}}(ut,lt,ct,mt,ft,dt,pt,Mt,gt,bt,wt,kt,vt,St,Rt,Ct);window.onload=function(){!function(t){document.getElementById("randomnessCheckbox").addEventListener("change",(function(){t.Ye=this.checked}))}(Nt),function(t){document.getElementById("fullscreenButton").addEventListener("click",(function(){t.canvas.requestFullscreen?t.canvas.requestFullscreen():t.canvas.mozRequestFullScreen?t.canvas.mozRequestFullScreen():t.canvas.webkitRequestFullscreen?t.canvas.webkitRequestFullscreen():t.canvas.msRequestFullscreen&&t.canvas.msRequestFullscreen()}))}(Nt),function(t){t.canvas.addEventListener("mousemove",(function(e){if(e.shiftKey){var r=t.canvas.getBoundingClientRect(),n=e.clientX-r.left,s=e.clientY-r.top,i=r.width/t.Se,a=r.height/t.ve,o=Math.floor(n/i),h=Math.floor(s/a);t.grid.set(h,o,1)}}))}(Nt),function(t){t.canvas.addEventListener("mousedown",(function(e){var r=t.canvas.getBoundingClientRect(),n=e.clientX-r.left,s=e.clientY-r.top,i=r.width/t.Se,a=r.height/t.ve,o=Math.floor(n/i),h=Math.floor(s/a);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(h,(o+1)%t.Se,1),t.grid.set(h,o,1),t.grid.set((h+1)%t.ve,o,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(h,o,1),t.grid.set((h+1)%t.ve,o,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(h,o,1),t.grid.set(h,(o+1)%t.Se,1)):(t.grid.set((h+1)%t.ve,(o+1)%t.Se,1),t.grid.set((h-1+t.ve)%t.ve,(o+1)%t.Se,1),t.grid.set((h-1+t.ve)%t.ve,(o-1+t.Se)%t.Se,1),t.grid.set((h+1)%t.ve,(o-1+t.Se)%t.Se,1))}))}(Nt),ot(Nt),ht(Nt),function(t){document.getElementById("userXShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.Re=e,z(t)})),document.getElementById("userYShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.Ce=e,z(t)})),document.getElementById("userFlipX").addEventListener("change",(function(){t.Ne=this.checked,z(t)})),document.getElementById("userFlipY").addEventListener("change",(function(){t.ye=this.checked,z(t)}))}(Nt),function(t){document.getElementById("userTimeout").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.timeout=e}))}(Nt),function(t){document.getElementById("userColorPalette").addEventListener("change",(function(){t.ge=this.value,j(t)}))}(Nt),function(t){document.getElementById("metaRule").addEventListener("change",(async function(){t.he=this.value,J(t)}))}(Nt),function(t){document.getElementById("changeColoringRule").addEventListener("click",(function(){t.oe=!0})),document.getElementById("evolveColoringRule").addEventListener("click",(function(){t.fe=!0}))}(Nt),function(t){null!==localStorage.getItem("userGridHeight")?(t.ve=parseInt(localStorage.getItem("userGridHeight")),t.Se=parseInt(localStorage.getItem("userGridWidth")),t.ve>1e3&&(t.ve=1e3),t.Se>1e3&&(t.Se=1e3),t.Ge=t.Pe.createImageData(t.Se,t.ve),t.timeout=parseInt(localStorage.getItem("userTimeout")),t.Re=parseInt(localStorage.getItem("userXShift")),isNaN(t.Re)&&(t.Re=0),isNaN(t.Ce)&&(t.Ce=0),t.Ce=parseInt(localStorage.getItem("userYShift")),t.Ne="true"===localStorage.getItem("userFlipX"),t.ye="true"===localStorage.getItem("userFlipY"),t.ge=localStorage.getItem("userColorPalette"),t.Ye="true"===localStorage.getItem("userRandomnessOn"),t.Fe=parseFloat(localStorage.getItem("userRandomnessAmount")),t.he=localStorage.getItem("metaRule"),t.ce=localStorage.getItem("currentStyle"),console.log("Retrieved value from previous session: ...")):console.log("No value in localStorage"),document.getElementById("userGridHeight").value=t.ve,document.getElementById("userGridWidth").value=t.Se,document.getElementById("userTimeout").value=t.timeout;let e=document.getElementById("userXShift");e&&(e.value=t.Re);let r=document.getElementById("userYShift");r&&(r.value=t.Ce);let n=document.getElementById("userFlipX");n&&(n.checked=t.Ne);let s=document.getElementById("userFlipY");s&&(s.checked=t.ye);let i=document.getElementById("randomnessCheckbox");i&&(i.checked=t.Ye);let a=document.getElementById("randomnessSlider");a&&(a.value=t.Fe),document.getElementById("userColorPalette").value=t.ge,document.getElementById("metaRule").value=t.he,t.canvas.width=Math.max(t.ve,t.Se),t.canvas.height=Math.max(t.ve,t.Se),t.Ve=0,t.Xe=0;var o=document.getElementById("gameCanvas");if(t.ve>t.Se){var h=Math.floor(t.Se/t.ve*800);o.style.width=h+"px",o.style.height="800px",o.width=h*t.ve/800,o.height=t.ve}else{var u=Math.floor(t.ve/t.Se*800);o.style.width="800px",o.style.height=u+"px",o.width=t.Se,o.height=u*t.Se/800}}(Nt),j(Nt),z(Nt),J(Nt),at(Nt).then((()=>{st(Nt)})).catch((t=>{console.error("Error initialising the grid: ",t)}))}})();
(()=>{"use strict";function t(t){let e=Object.values(t).reduce(((t,e)=>t+e),0),n=Object.values(t).reduce(((t,n,r)=>[...t,n/e+(t[r-1]||0)]),[]);return function(){let e=Math.random(),r=n.findIndex((t=>e<t));return Object.keys(t)[r]}}const e=[44,44];function n(t,e,n,r,s,i,a){const o=r.height-1,h=r.width-1,u=r.data,l=r.width;for(var c=s[0],f=s[1],m=-1;m<=1;m++)for(var d=-1;d<=1;d++){if(0==m&&0==d)continue;if(i[0]=((-1===m?1:m)+(-1===d?1:d))%2,i[1+(3&a)]=-1==m?1:0,i[1+(1+a&3)]=-1==d?1:0,i[1+(2+a&3)]=1==m?1:0,i[1+(3+a&3)]=1==d?1:0,0==e||0==n||e==o||n==h)var[M,g]=t.t(t,e,n,m,d);else var M=e+m,g=n+d;const r=u[M*l+g],s=3&r,b=(15&r)>>2;if(1==s){c[0]+=1;for(var p=0;p<i.length;p++)c[4+8*p]+=i[p],c[8*(p+1)]+=1-i[p]}else if(2==s){c[2]+=1;for(p=0;p<i.length;p++)c[4+8*p+2]+=i[p],c[8*(p+1)+2]+=1-i[p]}else if(3==s){c[3]+=1;for(p=0;p<i.length;p++)c[4+8*p+3]+=i[p],c[8*(p+1)+3]+=1-i[p]}if(0==b){f[0]+=1;for(p=0;p<i.length;p++)f[4+8*p]+=i[p],f[8*(p+1)]+=1-i[p]}else if(1==b){f[1]+=1;for(p=0;p<i.length;p++)f[4+8*p+1]+=i[p],f[8*(p+1)+1]+=1-i[p]}else if(2==b){f[2]+=1;for(p=0;p<i.length;p++)f[4+8*p+2]+=i[p],f[8*(p+1)+2]+=1-i[p]}else if(3==b){f[3]+=1;for(p=0;p<i.length;p++)f[4+8*p+3]+=i[p],f[8*(p+1)+3]+=1-i[p]}}for(p=0;p<i.length+1;p++)c[4*p+1]+=c[4*p]+c[4*p+3];return[c,f]}const r="mix",s="isotropic",i="xcross",a="vcross",o="xvcross",h="directional1",u="directional2",l="directional3",c="directional2b",f="directional",m={[r]:.2,[s]:.4,[i]:.05,[a]:.05,[o]:.05,[h]:.05,[u]:.05,[l]:.05,[c]:.05,[f]:.05};const d="A",M="C",g="E",p="B";class b{constructor(t,e,n,r,s,i=null){this.type=t,this.threshold=e,this.i=n,this.o=r,this.h=s,this.u=i,this.l=function(t,e){return t==M?function(t){return 0==t}:t==d?function(t){return t%e==0}:function(t){return!0}}(this.o,this.h),this.m=function(t,e,n){return e==g?function(e){return e[n[0]][n[1]]==t}:e==p?function(e){return e[n[0]][n[1]]>t}:void 0}(this.threshold,this.type,this.i),this.M=function(t){let e;return e=null==t?function(t){return!0}:function(e){return t[e%t.length]},e}(i)}test(t,e,n){var r=this.M(n);return this.m(t)&&this.l(e)&&r}name(){var t="";return null!=this.u&&(t=this.u.map((t=>t?"1":"0")).join("")),`${this.type}${this.threshold}${this.o}[${this.i[0]}|${this.i[1]}]${t}`}static p(t,e=4){var n=null;t.startsWith(g)?n=g:t.startsWith(p)&&(n=p);var r=t.substring(n.length),s=parseInt(r.substring(0,1)),i=null;(r=r.substring(1)).startsWith(M)?i=M:r.startsWith(d)?i=d:r.startsWith("N")&&(i="N");var a=(r=r.substring(i.length)).split("[")[1].split("]")[0].split("|").map(Number),o=null;return(r=r.split("]")[1]).length>0&&(o=r.split("").map((t=>"1"===t))),new b(n,s,a,i,e,o)}static v(e=null,n=4,m=r,w=null){const v=[g,p],k=v[Math.floor(Math.random()*v.length)],S=[M,d,"N"],R=S[Math.floor(Math.random()*S.length)];null===e&&(e={0:2/3,1:1/3});const C=t(e)(),N=function(t,e){var n=e;if(n==r){var m=Math.random();n=m<.5?s:m<.7?i:m<.9?a:f}if(n==s)return Math.floor(4*Math.random());if(n==a)return Math.floor(4*Math.random()+4);if(n==i)return Math.floor(4*Math.random()+8);if(n==o)return Math.floor(8*Math.random()+4);if(n==h)return Math.floor(4*Math.random()+12);if(n==u)return Math.floor(8*Math.random()+12);if(n==l)return Math.floor(12*Math.random()+12);if(n==c){var d=Math.floor(8*Math.random()+12);return d>=16&&(d+=4),d}return n==f?Math.floor(16*Math.random()+12):void 0}(0,m),y=[C,N];var x=0,A=8;if(0==y[0]&&y[1]%4!=1?A=5:y[1]>4&&y[1]<=16?A=4:y[1]>16&&(A=3),x=k===p?Math.floor(Math.random()*A):Math.floor(Math.random()*A)+1,Math.random()<.2)B=null;else{var B;null==w&&(w=Math.floor(20*Math.random())+2);do{B=new Array(w).fill(0).map((()=>Math.random()<.5))}while(!B.includes(!0))}return new b(k,x,y,R,n,B)}}class w{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(this.width*this.height),this.rows=new Array(this.height),this.k=!1,this.get=this.S,this.set=this.R}static C(t,e=!1,n=!1,r=!1){const s=t.length,i=t[0].length,a=new w(i,s);for(let e=0;e<s;e++){r&&(e=s-e-1);for(let r=0;r<i;r++)n&&(r=i-r-1),a.set(e,r,t[e][r])}return e&&a.N(),a}N(){[this.width,this.height]=[this.height,this.width],[this.get,this.set]=this.k?[this.S,this.R]:[this.A,this.B],this.k=!this.k}flipX(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width/2;e++){const n=this.get(t,e);this.set(t,e,this.get(t,this.width-e-1)),this.set(t,this.width-e-1,n)}}flipY(){for(let t=0;t<this.height/2;t++)for(let e=0;e<this.width;e++){const n=this.get(t,e);this.set(t,e,this.get(this.height-t-1,e)),this.set(this.height-t-1,e,n)}}S(t,e){return this.data[t*this.width+e]}R(t,e,n){this.data[t*this.width+e]=n}A(t,e){return this.data[e*this.height+t]}B(t,e,n){this.data[e*this.height+t]=n}}class v{constructor(){this.F=void 0}G(t,e,n,r){throw new Error("Must override method")}P(){throw new Error("Must override method")}}class k extends v{constructor(){super(),this.I=this.T(),this.V(),this.X=0}T(){throw new Error("Must override method")}V(){this.Y=Object.keys(this.I).map((t=>this.I[t].mask));let e=Object.keys(this.I).map((t=>this.I[t].O));this.U=t(e)}}class S extends k{constructor(){super(),this.F=4}G(t,e,n,r){var s=t%4;return 1==s||3==s?e=2:2==s?e=0:0==s&&2==n[0][0]?e=1:0==s&&n[0][0]>2&&(e=3),e}P(){return"BB"}T(){return{random:{O:15,mask:null},W:{O:4,mask:w.C([[1,1],[1,1]])},j:{O:4,mask:new w([[1,0,1],[0,0,0],[1,0,1]])},H:{O:2,mask:w.C([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},L:{O:2,mask:w.C([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},$:{O:2,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},D:{O:2,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]],!0)}}}}class R extends k{constructor(){super(),this.F=4,this.X=-1}G(t,e,n,r){var s=t%4;return 3==s&&(s=0),1==s?e=2:2==s||3==s?e=0:0!=s&&3!=s||2!=n[0][0]?0==s&&n[0][0]>2&&(e=3):e=1,e}P(){return"TBB"}T(){return{random:{O:15,mask:null},$:{O:1,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},H:{O:2,mask:w.C([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},L:{O:2,mask:w.C([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},W:{O:4,mask:w.C([[1,1],[1,1]])},q:{O:1e4,mask:w.C([[0,2,1,0,0,0,0,0],[0,0,2,1,0,0,0,0],[2,0,0,2,1,0,0,0],[1,2,0,0,2,1,0,0],[0,1,0,2,1,0,2,1],[0,0,2,1,0,0,2,1]])}}}}class C extends k{constructor(){super(),this.F=4,this.X=-1}G(t,e,n,r){var s=t%4;return 1==s&&(n[0][0]<3||n[0][0]>5)?e=2:2==s?e=3:3==s?e=0:0==s&&2==n[0][0]&&(e=1),e}P(){return"SW"}T(){let t=.2;return{random:{O:6,mask:null},J:{O:1,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},K:{O:t,mask:w.C([[1,2,3],[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,0],[0,1,2],[3,0,1]])},Z:{O:t,mask:w.C([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},_:{O:t,mask:w.C([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},tt:{O:t,mask:w.C([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},et:{O:t,mask:w.C([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},nt:{O:t,mask:w.C([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},rt:{O:t,mask:w.C([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},st:{O:t,mask:w.C([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},it:{O:t,mask:w.C([[0,0,0,0,3,2,0,0],[0,0,0,0,1,0,3,0],[0,0,1,2,0,1,0,0],[0,0,2,3,1,1,0,0],[3,1,0,1,0,1,1,1],[2,0,1,1,1,0,1,3],[0,3,0,0,1,1,1,0],[0,0,0,0,1,3,0,0]])},ot:{O:t,mask:w.C([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},ht:{O:t,mask:w.C([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},ut:{O:t,mask:w.C([[0,3,2,1,1,2,3,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[2,3,0,0,0,0,3,2]])},lt:{O:t,mask:w.C([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},ct:{O:t,mask:w.C([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},ft:{O:t,mask:w.C([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])},dt:{O:t,mask:w.C([[0,1,0,0,0,0],[1,1,1,0,0,0],[0,1,0,0,1,0],[0,0,0,1,1,1],[0,0,0,0,1,0]])},j:{O:2,mask:w.C([[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[1,1,0,0,0,1,1],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]])}}}}class N extends k{constructor(t){super(),this.Mt=t;const e=this.Mt.split("/");this.gt=new Uint8Array(e[0].substring(1).split("").map(Number)),this.bt=new Uint8Array(e[1].substring(1).split("").map(Number)),"I"==e[2][0]?(this.wt=new Uint8Array(e[2].substring(1).split("").map(Number)),this.F=Number(e[3])):this.F=Number(e[2])}G(t,e,n,r){var s=t%this.F;return 1==s&&this.bt.includes(n[0][0])?e=1:s>0&&s<this.F-1?e+=1:s==this.F-1?e=0:0==s&&this.gt.includes(n[0][0])?e=1:0==s&&this.wt.includes(n[0][0])&&(e=this.F-1),e}P(){return this.Mt}T(){return{random:{O:1,mask:null}}}}class y extends N{constructor(){super("B2/S245678/I1/4"),this.X=0}P(){return"SS"}T(){let t=.2;return{random:{O:10,mask:null},vt:{O:1,mask:w.C([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},kt:{O:t,mask:w.C([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},St:{O:t,mask:w.C([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},Rt:{O:t,mask:w.C([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},Ct:{O:t,mask:w.C([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},Nt:{O:t,mask:w.C([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},yt:{O:t,mask:w.C([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},xt:{O:1,mask:w.C([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},At:{O:t,mask:w.C([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},Bt:{O:t,mask:w.C([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},Ft:{O:1,mask:w.C([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},Gt:{O:1,mask:w.C([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},Pt:{O:1,mask:w.C([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])}}}}class x extends k{constructor(){super(),this.F=4,this.X=.4}G(t,e,n,r){var s=t%4,i=n[0][1];return 1!=s&&3!=s||!(i<2||i>3)?1!=s&&3!=s||2!=i&&3!=i?0!=s&&2!=s||3!=i?2==s&&(e=0):e=3:e=1:e=2,e}T(){return{It:{O:1,mask:null}}}P(){return"CW"}}class A extends v{constructor(t,e,n,r,s){super(),this.Tt=e,this.Vt=t,this.F=this.Tt,this.Xt=n,this.Yt=r,this.Ot=s}G(t,e,n,r){e=0;for(let s=0;s<this.Vt.length;s++)if(this.Vt[s].test(n,t,r)){e=(s+1)%this.Tt;break}return e}P(){return this.Vt.map((t=>t.name())).join("||")}static Ut(e=null,n=null,r=null,s=4,i=4,a=null){var o=[];null==e&&(e=Math.floor(8*Math.random())+2),null==r&&(r=t(m)()),null==a&&(a=this.Et());for(let t=0;t<e;t++)o.push(b.v(n,s,r,a));return console.log((new Date).toLocaleTimeString()+" Sampling coloring rule "+r+": "+o.map((t=>t.name())).join(", ")),new A(o,i,n,r,a)}static Et(){var t=Math.random();return t<.2?null:t<.6?1:t<.7?2:t<.8?3:t<.9?4:Math.floor(20*Math.random())+5}static Wt(t,e=4){var n=t.split("||").map((t=>b.p(t)));return new A(n,e,null,r,null)}jt(t=null){var e,n=this.Vt.length;null==t&&(t=this.Xt),0==(e=2==n?Math.floor(2*Math.random())+1:10==n?Math.floor(2*Math.random()):Math.floor(3*Math.random()))?this.Ht():1==e?this.Lt(t):this.$t(t)}$t(t){var e=this.Vt.slice();e.push(b.v(t,4,this.Yt,this.Ot)),console.log((new Date).toLocaleTimeString()+" Adding condition "+this.Yt+": "+e.map((t=>t.name())).join("||")),this.Vt=e}Ht(){var t=this.Vt.slice(),e=Math.floor(Math.random()*t.length);t.splice(e,1)[0],console.log((new Date).toLocaleTimeString()+" Removing condition: "+t.map((t=>t.name())).join("||")),this.Vt=t}Lt(t){var e=this.Vt.slice(),n=Math.floor(Math.random()*e.length);e[n]=b.v(t,4,this.Yt,this.Ot),console.log((new Date).toLocaleTimeString()+" Changing condition "+n+" to "+this.Yt+": "+e.map((t=>t.name())).join("||")),this.Vt=e}}const B="gr",F="safe",G="mix",P="general",I="test";class T{Dt;qt;G;zt(){throw new Error("Must override method")}Jt(){return function(t,e,n,r){e=this.qt[0].G(t%this.qt[0].F,e,n,r);var s=this.qt[0].F;for(let i=1;i<this.qt.length;i++)e+=s*this.qt[i].G(Math.floor(t/s)%this.qt[i].F,e,n,r),e%=s*=this.qt[i].F;return e%s}}Kt(){throw new Error("Must override method")}P(){return this.qt.map((t=>t.P())).join("-")}}class V extends T{constructor(t){super(),this.Qt=t,this.Dt=1,this.qt=this.zt(),this.G=this.Jt()}zt(){var t=[];return"Original"==this.Qt?t.push(new R):"StarWars"==this.Qt?t.push(new C):"Modified"==this.Qt?t.push(new S):"Conway"==this.Qt?t.push(new x):t.push(new N(this.Qt)),t}Kt(){}}class X extends T{constructor(t,e,n=null){super(),this.Qt=t,this.Xt=e,this.Ot=null,this.Zt=null,null==e&&(t==F||t==B||t==I?this.Xt={0:1,1:0}:t==G?(Math.random()<.5?this.Xt={0:.8,1:.2}:this.Xt={0:1,1:0},this.Xt={0:.8,1:.2}):this.Xt={0:.5,1:.5}),t==B&&(this.Ot=1),this.Dt=4,this.qt=null==n?this.zt():this._t(n),this.G=this.Jt()}zt(){var t=[],e=Math.random();return this.Qt==B?t.push(new S):this.Qt==F?e<.3?t.push(new S):e<.4?t.push(new R):e<.6?t.push(new C):e<.8?t.push(new y):t.push(new x):(e<.3?t.push(new S):e<.4?t.push(new R):e<.6?t.push(new C):e<.8?t.push(new y):e<1?t.push(new x):this.Qt,0==t.length&&t.push(new S)),t.push(A.Ut(null,this.Xt,this.Zt,4,4,this.Ot)),this.Qt==I&&((t=[]).push(new y),this.Dt=1,t.push(A.Ut(null,this.Xt,this.Zt,4,4,this.Ot))),t}Kt(){this.qt[1].jt(this.Xt)}_t(t){var e=[],[n,r]=t.split("-");return"BB"==n?e.push(new S):"TBB"==n?e.push(new R):"SW"==n&&e.push(new C),e.push(new C),e.push(A.Wt(r)),e}}class Y extends T{constructor(t,e,n=null){super(),this.Qt=t,this.Xt=e,this.Ot=null,this.Zt=null,null==e&&(t==F?this.Xt={0:1,1:0}:t==G?(Math.random()<.5?this.Xt={0:.8,1:.2}:this.Xt={0:1,1:0},this.Xt={0:.8,1:.2}):this.Xt={0:.5,1:.5}),this.Dt=16,this.qt=null==n?this.zt():this._t(n),this.G=this.Jt()}zt(){var t=[];return t.push(new S),t.push(A.Ut(null,this.Xt,this.Zt,4,4,this.u)),t.push(A.Ut(null,this.Xt,this.Zt,16,4,this.u)),t}Kt(){this.qt[1].jt(this.Xt),this.qt[2].jt(this.Xt)}_t(t){var e=[],n=t.split("-")[1];return e.push(new S),e.push(A.Wt(n)),e}}function O(t,e=!1){Math.random()<Math.exp(t.te)||e||t.ee?("VariableGR"==t.ne?(t.re=new X(B),t.se=new X(B)):"VariableDemo"==t.ne?t.re=new X(B):"Variable"==t.ne?t.re=new X(F):"VariableMix"==t.ne?t.re=new X(G):"VariableUnsafe"==t.ne?t.re=new X(P):"VariableTest"==t.ne?t.re=new X(I):"Variable2Unsafe"==t.ne?t.re=new Y(P):"CustomRule"==t.ne?t.re=new X(null,null,t.ie):"OriginalBB"==t.ne?t.re=new V("Original"):"ModifiedBB"==t.ne?t.re=new V("Modified"):"StarWars"==t.ne?t.re=new V("StarWars"):"Conway"==t.ne?t.re=new V("Conway"):"SparseFourStates"==t.ne?t.re=new V("B378/S124567/4"):t.re=new X(G),t.te=-25,t.ae=-25,t.ee=!1,U(t)):(Math.random()<Math.exp(t.ae)||t.oe)&&"CustomRule"!=t.ne&&(t.re.Kt(),"VariableGR"==t.ne&&t.se.Kt(),t.ae=-25,t.oe=!1,U(t)),t.te=t.te+t.he,t.te>0&&(t.te=0),t.ae=t.ae+t.ue,t.ae>0&&(t.ae=0)}function U(t){var e=document.getElementById("currentStyle");e&&(e.value=t.re.P())}function E(t){let e={};for(let n in t){if("t"==n)continue;let r=Math.floor(3*Math.random())-1,s=t[n]+r;s=Math.max(0,Math.min(255,s)),e[n]=s}return e.le=t.le,e}function W(t){var e={r:247,g:255,b:28,le:255},n={r:13,g:112,b:255,le:255},r={r:240,g:239,b:239,le:255},s={r:0,g:0,b:0,le:255},i={r:240,g:240,b:240,le:255},a={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),le:255},o={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),le:255};"yellow"==t.ce?(t.backgroundColor=e,t.fe=s,t.me=n,t.de=r):"blue"==t.ce?(t.backgroundColor=n,t.fe=r,t.me=s,t.de=e):"blue2"==t.ce?(t.backgroundColor=n,t.fe=e,t.me=s,t.de=r):"grey"==t.ce?(t.backgroundColor=r,t.fe=s,t.me=n,t.de=e):"grey2"==t.ce?(t.backgroundColor=r,t.fe=e,t.me=s,t.de=n):"black"==t.ce?(t.backgroundColor=s,t.fe=n,t.me=e,t.de=r):"black2"==t.ce?(t.backgroundColor=s,t.fe=n,t.me=r,t.de=e):"blackTrace"==t.ce?(t.backgroundColor=s,t.fe=r,t.me=s,t.de=r):"blackTrace2"==t.ce?(t.backgroundColor=s,t.fe=s,t.me=s,t.de=r):"blackTrace3"==t.ce?(t.backgroundColor=s,t.fe=s,t.me=r,t.de=r):"redblue"==t.ce?(t.backgroundColor=s,t.fe=i,t.me={r:221,g:85,b:12,le:255},t.de={r:49,g:130,b:189,le:255}):"variable"==t.ce?(t.backgroundColor=s,t.fe=i,t.me=a,t.de=o):"mouseAnimation"==t.ce&&(t.backgroundColor={r:0,g:0,b:0,le:0},t.fe=n,t.me=s,t.de=e)}function j(t,e,n,r,s){let i=(e+r+t.Me)%t.Me,a=(n+s+t.ge)%t.ge,o=i,h=a;return(i-e-r>0||i-e-r<0)&&(h=(t.ge-a-t.pe+t.ge)%t.ge),(a-n-s>0||a-n-s<0)&&(o=(t.Me-i-t.be+t.Me)%t.Me),[o,h]}function H(t,e,n,r,s){let i=(e+r+t.Me)%t.Me,a=(n+s+t.ge)%t.ge,o=i,h=a;return(i-e-r>0||i-e-r<0)&&(h=(t.ge-a-t.pe+t.ge)%t.ge),a-n-s>0?o=(i+t.be+t.Me)%t.Me:a-n-s<0&&(o=(i-t.be+t.Me)%t.Me),[o,h]}function L(t,e,n,r,s){let i=(e+r+t.Me)%t.Me,a=(n+s+t.ge)%t.ge,o=i,h=a;return i-e-r>0?h=(a+t.pe+t.ge)%t.ge:i-e-r<0&&(h=(a-t.pe+t.ge)%t.ge),(a-n-s>0||a-n-s<0)&&(o=(t.Me-i-t.be+t.Me)%t.Me),[o,h]}function $(t,e,n,r,s){let i=(e+r+t.Me)%t.Me,a=(n+s+t.ge)%t.ge,o=i,h=a;return i-e-r>0?h=(a+t.pe+t.ge)%t.ge:i-e-r<0&&(h=(a-t.pe+t.ge)%t.ge),a-n-s>0?o=(i+t.be+t.Me)%t.Me:a-n-s<0&&(o=(i-t.be+t.Me)%t.Me),[o,h]}function D(t){t.we&&t.ve?t.t=j:t.we?t.t=H:t.ve?t.t=L:t.t=$}function q(t){O(t,!0)}function z(t,e){if(t.ke){var n={...t.Se};delete n.Re,delete n.Vt;var r={...n,event:e},s=Object.keys(r).join(",")+"\n";s+=Object.values(r).join(",");var i=new Blob([s],{type:"text/csv"}),a=URL.createObjectURL(i),o=document.createElement("a");o.href=a,o.download="dataAutomata.csv",o.click()}}function J(t,e,n){for(var r=function(t){var e=Math.exp(-t),n=1,r=0;do{r++,n*=Math.random()}while(n>e);return r-1}(10**(t.Ce+t.re.qt[0].X)),s=t.re.qt[0].U,i=t.re.qt[0].Y,a=0;a<r;a++){var o=Math.floor(Math.random()*t.Me),h=Math.floor(Math.random()*t.ge);K(e,t,i[s()],o,h,n)}}function K(t,e,n,r,s,i){null===n?n=function(){let t,e=Math.floor(10*Math.random())+1;if(Math.random()<.7)t=function(t){let e=Math.random();return e<.1?et(t,t):e<.2?Z(t,t):e<.3?Q(t,t):e<.4?function(t){let e=new w(t,t);for(let n=0;n<t;n++)for(let r=n;r<t;r++)e.set(n,r,Math.floor(1e5*Math.random())),e.set(r,n,e.get(n,r));return e}(t):e<.5?function(t){let e=new w(t,t);for(let n=0;n<t;n++)for(let r=n;r<t;r++)e.set(n,r,Math.floor(1e5*Math.random())),e.set(t-1-r,t-1-n,e.get(n,r));return e}(t):e<.6?_(t,t):e<.7?tt(t,t):e<.8?function(t){let e=new w(t,t);for(let n=0;n<t;n++)for(let r=Math.max(n,t-n);r<t;r++)e.set(n,r,Math.floor(1e5*Math.random())),e.set(r,n,e.get(n,r)),e.set(t-1-r,t-1-n,e.get(n,r)),e.set(t-1-n,t-1-r,e.get(n,r));return e}(t):e<.9?function(t){let e=new w(t,t);for(let n=0;n<Math.ceil(t/2);n++)for(let r=0;r<Math.ceil(t/2);r++)e.set(n,r,Math.floor(1e5*Math.random())),e.set(r,t-1-n,e.get(n,r)),e.set(t-1-n,t-1-r,e.get(n,r)),e.set(t-1-r,n,e.get(n,r));return e}(t):function(t){let e=new w(t,t);for(let n=0;n<Math.ceil(t/2);n++)for(let r=0;r<Math.ceil(t/2);r++)e.set(n,r,Math.floor(1e5*Math.random())),e.set(r,t-1-n,e.get(n,r)),e.set(t-1-n,t-1-r,e.get(n,r)),e.set(t-1-r,n,e.get(n,r)),e.set(t-1-n,r,e.get(n,r)),e.set(t-1-r,t-1-n,e.get(n,r)),e.set(n,t-1-r,e.get(n,r)),e.set(r,n,e.get(n,r));return e}(t)}(e);else{t=function(t,e){let n=Math.random();return n<.2?et(t,e):n<.4?Z(t,e):n<.6?Q(t,e):n<.8?_(t,e):tt(t,e)}(e,Math.floor(10*Math.random())+1)}return t}():(Math.random()<.5&&n.N(),Math.random()<.5&&n.flipX(),Math.random()<.5&&n.flipY());let a=n.height,o=n.width;for(let h=0;h<a;h++)for(let u=0;u<o;u++){let l=i(e,r,s,h-Math.floor(a/2),u-Math.floor(o/2));t.set(l[0],l[1],n.get(h,u))}}function Q(t,e){let n=new w(e,t);for(let r=0;r<t;r++)for(let t=0;t<Math.ceil(e/2);t++)n.set(r,t,Math.floor(1e5*Math.random())),n.set(r,e-1-t,n.get(r,t));return n}function Z(t,e){let n=new w(e,t);for(let r=0;r<Math.ceil(t/2);r++)for(let s=0;s<e;s++)n.set(r,s,Math.floor(1e5*Math.random())),n.set(t-1-r,s,n.get(r,s));return n}function _(t,e){let n=new w(e,t);for(let r=0;r<t;r++)for(let s=0;s<Math.ceil(e/2);s++)n.set(r,s,Math.floor(1e5*Math.random())),n.set(t-1-r,e-1-s,n.get(r,s));return n}function tt(t,e){let n=new w(e,t);for(let r=0;r<Math.ceil(t/2);r++)for(let s=0;s<Math.ceil(e/2);s++)n.set(r,s,Math.floor(1e5*Math.random())),n.set(t-1-r,s,n.get(r,s)),n.set(r,e-1-s,n.get(r,s)),n.set(t-1-r,e-1-s,n.get(r,s));return n}function et(t,e){let n=new w(e,t);for(let r=0;r<t;r++)for(let t=0;t<e;t++)n.set(r,t,Math.floor(1e5*Math.random()));return n}function nt(t){!function(t){let e=t.Ne,n=t.ye;for(var r=0,s=0;s<t.Me;s++)for(var i=0;i<t.ge;i++){if(0==t.xe.get(s,i))continue;r+=1;var a=Math.floor(t.grid.get(s,i)/t.re.Dt)%4;let e;if(0==a)e=t.backgroundColor;else if(1==a)e=t.fe;else if(2==a)e=t.me;else{if(3!=a)continue;e=t.de}let o=4*(s*t.ge+i);n.data[o+0]=e.r,n.data[o+1]=e.g,n.data[o+2]=e.b,n.data[o+3]=e.le}if(t.Ae=.01*r+.99*t.Ae,t.Ae>.5*t.Me*t.ge){t.ee=!0;var o=t.Ae/(t.Me*t.ge);console.log("Changing rule because suspected oscillation (running proportion of cells changed: "+o.toFixed(1)+")."),t.Ae=15,z(t,"oscillation")}t.Ae<3&&(t.ee=!0,console.log("Changing rule because not enough cells changed ("+t.Ae+")."),t.Ae=20,z(t,"blackout")),e.putImageData(n,t.Be,t.Fe)}(t),function(t){var r=[new Uint8Array(e[0]).fill(0),new Uint8Array(e[1]).fill(0)],s=new Uint8Array(5).fill(0),i=new w(t.ge,t.Me),a=t.grid;const o=t.time;for(var h=0;h<t.Me;h++)for(var u=0;u<t.ge;u++){var l=n(t,h,u,a,r,s,o);const e=t.grid.get(h,u);var c=e;c="VariableGR"!=t.ne||0==t.mask.get(h,u)?t.re.G(e,c,l,t.time):t.se.G(e,c,l,t.time),Math.floor(c/t.re.Dt)%4!=Math.floor(e/t.re.Dt)%4?t.xe.set(h,u,1):t.xe.set(h,u,0),i.set(h,u,c);for(let t=0;t<r.length;t++)r[t].fill(0);s.fill(0)}t.Ge&&J(t,i,t.t),t.grid=i}(t),O(t),t.time=(t.time+1)%166320,t.Pe&&function(t){Math.random()<1e-4&&(t.pe=Math.floor(Math.random()*t.ge),console.log("Periodicity shift X: "+t.pe)),Math.random()<1e-4&&(t.be=Math.floor(Math.random()*t.Me),console.log("Periodicity shift Y: "+t.be)),Math.random()<1e-4&&(t.we=!t.we,D(t),console.log("Flip X: "+t.we)),Math.random()<1e-4&&(t.ve=!t.ve,D(t),console.log("Flip Y: "+t.ve))}(t),"variable"==t.ce&&function(t){Math.random()<1&&(t.de=E(t.de),t.me=E(t.me))}(t),setTimeout((function(){requestAnimationFrame((()=>nt(t)))}),t.timeout)}function rt(t,e){return console.log("Attempting to load image"),(n="grLogoLarge.png",console.log("Loading image:",n),new Promise(((t,e)=>{const r=new Image;r.onload=()=>{console.log("Image loaded:",n);const e=document.createElement("canvas");e.width=r.width,e.height=r.height;const s=e.getContext("2d");s.drawImage(r,0,0,r.width,r.height);const i=s.getImageData(0,0,e.width,e.height).data,a=[];for(let t=0;t<r.height;t++){const e=[];for(let n=0;n<r.width;n++){const s=4*(t*r.width+n),a=(i[s]+i[s+1]+i[s+2])/3;e.push(a>128?1:0)}a.push(e)}t(a)},r.onerror=()=>{console.error("Error loading image:",n),e(new Error("Error loading image"))},r.src=n}))).then((e=>{new w(t.ge,t.Me);const n=new w(t.ge,t.Me),r=e[0].length/t.ge,s=e.length/t.Me,i=Math.max(r,s),a=Math.floor((t.ge-e[0].length/i)/2),o=Math.floor((t.Me-e.length/i)/2);for(let r=0;r<t.Me;r++)for(let s=0;s<t.ge;s++){if(r<o||(r-o)*i>=e.length){n.set(r,s,1);continue}let t=Math.floor((s-a)*i);0===e[Math.floor((r-o)*i)][t]?n.set(r,s,0):n.set(r,s,1)}t.mask=n})).catch((e=>{console.log("Image loading failed, not using a mask."),console.error("Error loading image:",e),t.mask=new w(t.ge,t.Me)}));var n}async function st(t,e){if("VariableGR"==t.ne&&await rt(t),"zero"!=t.Ie)return function(t,e=1e4){return Promise.resolve().then((()=>{t.grid=new w(t.ge,t.Me),t.xe=new w(t.ge,t.Me);for(var n=0;n<t.Me;n++)for(var r=0;r<t.ge;r++)if("gr"!=t.Ie||1!==t.mask.get(n,r)){for(var s=Math.random(),i=0;i<e;i++)if(s<(i+1)/(e+1)){t.grid.set(n,r,i);break}t.xe.set(n,r,1)}else t.grid.set(n,r,0)}))}(t);t.grid=new Grid(t.ge,t.Me),t.xe=new Grid(t.ge,t.Me)}function it(t){document.getElementById("submitButton").addEventListener("click",(function(){!function(t){var e=document.getElementById("userGridHeight").value,n=document.getElementById("userGridWidth").value,r=document.getElementById("userTimeout").value,s=document.getElementById("userXShift"),i=s?s.value:t.Te,a=document.getElementById("userYShift"),o=a?a.value:t.Ve,h=document.getElementById("userFlipX"),u=h?h.checked:t.Xe,l=document.getElementById("userFlipY"),c=l?l.checked:t.Ye,f=document.getElementById("randomnessCheckbox"),m=f?f.checked:t.Ge,d=document.getElementById("randomnessSlider"),M=d?parseFloat(d.value):t.Ce,g=document.getElementById("userColorPalette").value,p=document.getElementById("metaRule").value,b=null;document.getElementById("currentStyle")&&(b=document.getElementById("currentStyle").value),localStorage.setItem("userGridHeight",e),localStorage.setItem("userGridWidth",n),localStorage.setItem("userTimeout",r),localStorage.setItem("userXShift",i),localStorage.setItem("userYShift",o),localStorage.setItem("userFlipX",u),localStorage.setItem("userFlipY",c),localStorage.setItem("userColorPalette",g),localStorage.setItem("userRandomnessOn",m),localStorage.setItem("userRandomnessAmount",M),localStorage.setItem("metaRule",p),localStorage.setItem("currentStyle",b),location.reload()}(t)}))}function at(t){document.getElementById("randomnessSlider").addEventListener("input",(function(){!function(t,e){t.Ce=parseFloat(e),document.getElementById("randomnessAmountValue").textContent=e}(t,this.value)}))}console.log("Loading main.js");var ot=document.getElementById("gameCanvas"),ht=ot.getContext("2d"),ut=128,lt=128,ct=20,ft=!0,mt=-1,dt=!0,Mt=0,gt=0,pt=!1,bt=!1,wt="black2",vt="VariableGR",kt="random",St=6,Rt=new class{constructor(t,e,n=200,r=200,s=20,i=!0,a=-2,o=!0,h=0,u=0,l=!1,c=!1,f="black2",m="VariableGR",d="random",M=6,g=2e4,p=2e3){this.Me=n,this.ge=r,this.Be=0,this.Fe=0,this.timeout=s,this.grid=null,this.xe=null,this.ye=null,this.canvas=t,this.Ne=e,this.Ge=i,this.Ce=a,this.Pe=o,this.pe=h,this.be=u,this.we=l,this.ve=c,this.ce=f,this.ne=m,this.Ie=d,this.Oe=M,this.Ue=null,this.Ee=null,this.t=null,this.mask=null,this.We=g,this.je=p,this.te=-25,this.ae=-25,this.he=25/this.We,this.ue=25/this.je,this.canvas.width=this.ge,this.canvas.height=this.Me,this.ye=e.createImageData(t.width,t.height),this.ee=!0,this.oe=!1,this.Ae=0,this.ke=!1,this.time=0}}(ot,ht,ut,lt,ct,ft,mt,dt,Mt,gt,pt,bt,wt,vt,kt,St);window.onload=function(){!function(t){document.getElementById("randomnessCheckbox").addEventListener("change",(function(){t.Ge=this.checked}))}(Rt),function(t){document.getElementById("fullscreenButton").addEventListener("click",(function(){t.canvas.requestFullscreen?t.canvas.requestFullscreen():t.canvas.mozRequestFullScreen?t.canvas.mozRequestFullScreen():t.canvas.webkitRequestFullscreen?t.canvas.webkitRequestFullscreen():t.canvas.msRequestFullscreen&&t.canvas.msRequestFullscreen()}))}(Rt),function(t){t.canvas.addEventListener("mousemove",(function(e){if(e.shiftKey){var n=t.canvas.getBoundingClientRect(),r=e.clientX-n.left,s=e.clientY-n.top,i=n.width/t.ge,a=n.height/t.Me,o=Math.floor(r/i),h=Math.floor(s/a);t.grid.set(h,o,1)}}))}(Rt),function(t){t.canvas.addEventListener("mousedown",(function(e){var n=t.canvas.getBoundingClientRect(),r=e.clientX-n.left,s=e.clientY-n.top,i=n.width/t.ge,a=n.height/t.Me,o=Math.floor(r/i),h=Math.floor(s/a);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(h,(o+1)%t.ge,1),t.grid.set(h,o,1),t.grid.set((h+1)%t.Me,o,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(h,o,1),t.grid.set((h+1)%t.Me,o,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(h,o,1),t.grid.set(h,(o+1)%t.ge,1)):(t.grid.set((h+1)%t.Me,(o+1)%t.ge,1),t.grid.set((h-1+t.Me)%t.Me,(o+1)%t.ge,1),t.grid.set((h-1+t.Me)%t.Me,(o-1+t.ge)%t.ge,1),t.grid.set((h+1)%t.Me,(o-1+t.ge)%t.ge,1))}))}(Rt),it(Rt),at(Rt),function(t){document.getElementById("userXShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.pe=e,D(t)})),document.getElementById("userYShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.be=e,D(t)})),document.getElementById("userFlipX").addEventListener("change",(function(){t.we=this.checked,D(t)})),document.getElementById("userFlipY").addEventListener("change",(function(){t.ve=this.checked,D(t)}))}(Rt),function(t){document.getElementById("userTimeout").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.timeout=e}))}(Rt),function(t){document.getElementById("userColorPalette").addEventListener("change",(function(){t.ce=this.value,W(t)}))}(Rt),function(t){document.getElementById("metaRule").addEventListener("change",(async function(){t.ne=this.value,q(t)}))}(Rt),function(t){document.getElementById("changeColoringRule").addEventListener("click",(function(){t.ee=!0})),document.getElementById("evolveColoringRule").addEventListener("click",(function(){t.oe=!0}))}(Rt),function(t){null!==localStorage.getItem("userGridHeight")?(t.Me=parseInt(localStorage.getItem("userGridHeight")),t.ge=parseInt(localStorage.getItem("userGridWidth")),t.Me>1e3&&(t.Me=1e3),t.ge>1e3&&(t.ge=1e3),t.ye=t.Ne.createImageData(t.ge,t.Me),t.timeout=parseInt(localStorage.getItem("userTimeout")),t.pe=parseInt(localStorage.getItem("userXShift")),isNaN(t.pe)&&(t.pe=0),isNaN(t.be)&&(t.be=0),t.be=parseInt(localStorage.getItem("userYShift")),t.we="true"===localStorage.getItem("userFlipX"),t.ve="true"===localStorage.getItem("userFlipY"),t.ce=localStorage.getItem("userColorPalette"),t.Ge="true"===localStorage.getItem("userRandomnessOn"),t.Ce=parseFloat(localStorage.getItem("userRandomnessAmount")),t.ne=localStorage.getItem("metaRule"),t.ie=localStorage.getItem("currentStyle"),console.log("Retrieved value from previous session: ...")):console.log("No value in localStorage"),document.getElementById("userGridHeight").value=t.Me,document.getElementById("userGridWidth").value=t.ge,document.getElementById("userTimeout").value=t.timeout;let e=document.getElementById("userXShift");e&&(e.value=t.pe);let n=document.getElementById("userYShift");n&&(n.value=t.be);let r=document.getElementById("userFlipX");r&&(r.checked=t.we);let s=document.getElementById("userFlipY");s&&(s.checked=t.ve);let i=document.getElementById("randomnessCheckbox");i&&(i.checked=t.Ge);let a=document.getElementById("randomnessSlider");a&&(a.value=t.Ce),document.getElementById("userColorPalette").value=t.ce,document.getElementById("metaRule").value=t.ne,t.canvas.width=Math.max(t.Me,t.ge),t.canvas.height=Math.max(t.Me,t.ge),t.Be=0,t.Fe=0;var o=document.getElementById("gameCanvas");if(t.Me>t.ge){var h=Math.floor(t.ge/t.Me*800);o.style.width=h+"px",o.style.height="800px",o.width=h*t.Me/800,o.height=t.Me}else{var u=Math.floor(t.Me/t.ge*800);o.style.width="800px",o.style.height=u+"px",o.width=t.ge,o.height=u*t.ge/800}}(Rt),W(Rt),D(Rt),q(Rt),st(Rt).then((()=>{nt(Rt)})).catch((t=>{console.error("Error initialising the grid: ",t)}))}})();
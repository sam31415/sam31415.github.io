(()=>{"use strict";function t(t){let e=Object.values(t).reduce(((t,e)=>t+e),0),r=Object.values(t).reduce(((t,r,s)=>[...t,r/e+(t[s-1]||0)]),[]);return function(){let e=Math.random(),s=r.findIndex((t=>e<t));return Object.keys(t)[s]}}const e=[11,44];function r(t,e,r,s,n,i,a,h,o){const u=s.height-1,l=s.width-1,c=s.data,M=s.width;var f=n[0],m=n[1];let b;for(var p=-1;p<=1;p++)for(var w=-1;w<=1;w++){if(0==p&&0==w)continue;if(i[0]=((-1===p?1:p)+(-1===w?1:w))%2,i[2+(3&a)]=-1==p?1:0,i[(1+a)%4+1]=-1==w?1:0,i[(2+a)%4+1]=1==p?1:0,i[(3+a)%4+1]=1==w?1:0,0==e||0==r||e==u||r==l)var[d,g]=t.t(t,e,r,p,w);else var d=e+p,g=r+w;const s=c[d*M+g],n=s%h,k=Math.floor(s/h)%o;b=h;for(var v=0;v<h-1;v++)n==v+1&&(f[v]+=1,f[b+v]+=i[0],b+=h,f[b+v]+=1-i[0],f[h+b+v]+=i[1],b+=h,f[b+v]+=1-i[1],f[h+b+v]+=i[2],b+=h,f[b+v]+=1-i[2],f[h+b+v]+=i[3],b+=h,f[b+v]+=1-i[3],f[h+b+v]+=i[4],b+=h,f[b+v]+=1-i[4]),b=h;b=o;for(v=0;v<o;v++)m[v]+=1,k==v&&(m[o+v]+=i[0],b+=o,m[b+v]+=1-i[0],m[o+b+v]+=i[1],b+=o,m[b+v]+=1-i[1],m[o+b+v]+=i[2],b+=o,m[b+v]+=1-i[2],m[o+b+v]+=i[3],b+=o,m[b+v]+=1-i[3],m[o+b+v]+=i[4],b+=o,m[b+v]+=1-i[4]),b=o}return[f,m]}const s="mix",n="isotropic",i="xcross",a="vcross",h="xvcross",o="directional1",u="directional2",l="directional3",c="directional2b",M="directional",f={[s]:.2,[n]:.4,[i]:.05,[a]:.05,[h]:.05,[o]:.05,[u]:.05,[l]:.05,[c]:.05,[M]:.05};const m="A",b="C",p="E",w="B";class d{constructor(t,e,r,s,n,i=null){this.type=t,this.threshold=e,this.i=r,this.h=s,this.o=n,this.u=i,this.l=function(t,e){return t==b?function(t){return 0==t}:t==m?function(t){return t%e==0}:function(t){return!0}}(this.h,this.o),this.M=function(t,e,r){return e==p&&2==r.length?function(e){return e[r[0]][r[1]]==t}:e==w&&2==r.length?function(e){return e[r[0]][r[1]]>t}:e==p&&3==r.length?function(e){return e[r[0]][r[1]]+e[r[0]][r[2]]==t}:e==w&&3==r.length?function(e){return e[r[0]][r[1]]+e[r[0]][r[2]]>t}:void 0}(this.threshold,this.type,this.i),this.m=function(t){let e;return e=null==t?function(t){return!0}:function(e){return t[e%t.length]},e}(i)}test(t,e,r){var s=this.m(r);return this.M(t)&&this.l(e)&&s}name(){var t="";null!=this.u&&(t=this.u.map((t=>t?"1":"0")).join(""));var e=this.i.join("|");return`${this.type}${this.threshold}${this.h}[${e}]${t}`}static p(t,e=4){var r=null;t.startsWith(p)?r=p:t.startsWith(w)&&(r=w);var s=t.substring(r.length),n=parseInt(s.substring(0,1)),i=null;(s=s.substring(1)).startsWith(b)?i=b:s.startsWith(m)?i=m:s.startsWith("N")&&(i="N");var a=(s=s.substring(i.length)).split("[")[1].split("]")[0].split("|").map(Number),h=null;return(s=s.split("]")[1]).length>0&&(h=s.split("").map((t=>"1"===t))),new d(r,n,a,i,e,h)}static v(e=null,r=4,f=s,g=null){const v=[p,w],k=v[Math.floor(Math.random()*v.length)],S=[b,m,"N"],B=S[Math.floor(Math.random()*S.length)];null===e&&(e={0:2/3,1:1/3});const N=t(e)(),I=function(t,e){var r=e;if(r==s){var f=Math.random();r=f<.5?n:f<.7?i:f<.9?a:M}if(r==n)return Math.floor(4*Math.random());if(r==a)return Math.floor(4*Math.random()+4);if(r==i)return Math.floor(4*Math.random()+8);if(r==h)return Math.floor(8*Math.random()+4);if(r==o)return Math.floor(4*Math.random()+12);if(r==u)return Math.floor(8*Math.random()+12);if(r==l)return Math.floor(12*Math.random()+12);if(r==c){var m=Math.floor(8*Math.random()+12);return m>=16&&(m+=4),m}return r==M?Math.floor(16*Math.random()+12):void 0}(0,f);var R=void 0;if(Math.random()<.5){R=[N,I,function(t){for(var e=4*Math.floor(t/4),r=t;r==t;)r=e+Math.floor(4*Math.random());return r}(I)]}else R=[N,I];var C=0,y=8;if(0==R[0]&&R[1]%4!=1?y=5:R[1]>4&&R[1]<=16?y=4:R[1]>16&&(y=3),C=k===w?Math.floor(Math.random()*y):Math.floor(Math.random()*y)+1,Math.random()<.2)x=null;else{var x;null==g&&(g=Math.floor(20*Math.random())+2);do{x=new Array(g).fill(0).map((()=>Math.random()<.5))}while(!x.includes(!0))}return new d(k,C,R,B,r,x)}}class g{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(this.width*this.height),this.rows=new Array(this.height),this.k=!1,this.get=this.S,this.set=this.B}static N(t,e=!1,r=!1,s=!1){const n=t.length,i=t[0].length,a=new g(i,n);for(let e=0;e<n;e++){s&&(e=n-e-1);for(let s=0;s<i;s++)r&&(s=i-s-1),a.set(e,s,t[e][s])}return e&&a.I(),a}I(){[this.width,this.height]=[this.height,this.width],[this.get,this.set]=this.k?[this.S,this.B]:[this.R,this.C],this.k=!this.k}flipX(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width/2;e++){const r=this.get(t,e);this.set(t,e,this.get(t,this.width-e-1)),this.set(t,this.width-e-1,r)}}flipY(){for(let t=0;t<this.height/2;t++)for(let e=0;e<this.width;e++){const r=this.get(t,e);this.set(t,e,this.get(this.height-t-1,e)),this.set(this.height-t-1,e,r)}}S(t,e){return this.data[t*this.width+e]}B(t,e,r){this.data[t*this.width+e]=r}R(t,e){return this.data[e*this.height+t]}C(t,e,r){this.data[e*this.height+t]=r}}class v{constructor(){this.A=void 0}P(t,e,r,s){throw new Error("Must override method")}U(){throw new Error("Must override method")}}class k extends v{constructor(){super(),this.V=this.T(),this.$(),this.O=0}T(){throw new Error("Must override method")}$(){this.W=Object.keys(this.V).map((t=>this.V[t].mask));let e=Object.keys(this.V).map((t=>this.V[t].F));this.j=t(e)}}class S extends k{constructor(){super(),this.A=4}P(t,e,r,s){var n=t%4;return 1==n||3==n?e=2:2==n?e=0:0==n&&2==r[0][0]?e=1:0==n&&r[0][0]>2&&(e=3),e}U(){return"BB"}T(){return{random:{F:15,mask:null},D:{F:4,mask:g.N([[1,1],[1,1]])},G:{F:4,mask:new g([[1,0,1],[0,0,0],[1,0,1]])},q:{F:2,mask:g.N([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},L:{F:2,mask:g.N([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},X:{F:2,mask:g.N([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},Y:{F:2,mask:g.N([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]],!0)}}}}class B extends k{constructor(){super(),this.A=4,this.O=-1}P(t,e,r,s){var n=t%4;return 3==n&&(n=0),1==n?e=2:2==n||3==n?e=0:0!=n&&3!=n||2!=r[0][0]?0==n&&r[0][0]>2&&(e=3):e=1,e}U(){return"TBB"}T(){return{random:{F:15,mask:null},X:{F:1,mask:g.N([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},q:{F:2,mask:g.N([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},L:{F:2,mask:g.N([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},D:{F:4,mask:g.N([[1,1],[1,1]])},H:{F:1e4,mask:g.N([[0,2,1,0,0,0,0,0],[0,0,2,1,0,0,0,0],[2,0,0,2,1,0,0,0],[1,2,0,0,2,1,0,0],[0,1,0,2,1,0,2,1],[0,0,2,1,0,0,2,1]])}}}}class N extends k{constructor(){super(),this.A=4,this.O=-1}P(t,e,r,s){var n=t%4;return 1==n&&(r[0][0]<3||r[0][0]>5)?e=2:2==n?e=3:3==n?e=0:0==n&&2==r[0][0]&&(e=1),e}U(){return"SW"}T(){let t=.2;return{random:{F:6,mask:null},J:{F:1,mask:g.N([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},K:{F:t,mask:g.N([[1,2,3],[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,0],[0,1,2],[3,0,1]])},Z:{F:t,mask:g.N([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},_:{F:t,mask:g.N([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},tt:{F:t,mask:g.N([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},et:{F:t,mask:g.N([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},rt:{F:t,mask:g.N([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},st:{F:t,mask:g.N([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},nt:{F:t,mask:g.N([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},it:{F:t,mask:g.N([[0,0,0,0,3,2,0,0],[0,0,0,0,1,0,3,0],[0,0,1,2,0,1,0,0],[0,0,2,3,1,1,0,0],[3,1,0,1,0,1,1,1],[2,0,1,1,1,0,1,3],[0,3,0,0,1,1,1,0],[0,0,0,0,1,3,0,0]])},ht:{F:t,mask:g.N([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},ot:{F:t,mask:g.N([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},ut:{F:t,mask:g.N([[0,3,2,1,1,2,3,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[2,3,0,0,0,0,3,2]])},lt:{F:t,mask:g.N([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},ct:{F:t,mask:g.N([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},Mt:{F:t,mask:g.N([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])},ft:{F:t,mask:g.N([[0,1,0,0,0,0],[1,1,1,0,0,0],[0,1,0,0,1,0],[0,0,0,1,1,1],[0,0,0,0,1,0]])},G:{F:2,mask:g.N([[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[1,1,0,0,0,1,1],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]])}}}}class I extends k{constructor(t){super(),this.bt=t;const e=this.bt.split("/");for(var r of(this.wt=0,this.dt=[],e))"N"==r[0]?this.wt=Number(e[0].substring(1)):"B"==r[0]?this.gt=new Uint8Array(r.substring(1).split("").map(Number)):"S"==r[0]?this.vt=new Uint8Array(r.substring(1).split("").map(Number)):"I"==r[0]?this.dt=new Uint8Array(e[2].substring(1).split("").map(Number)):this.A=Number(r)}P(t,e,r,s){var n=t%this.A;return 1==n&&this.vt.includes(r[0][this.wt])?e=1:n>0&&n<this.A-1?e+=1:n==this.A-1?e=0:0==n&&this.gt.includes(r[0][this.wt])?e=1:0==n&&this.dt.includes(r[0][this.wt])&&(e=this.A-1),e}U(){return this.bt}T(){return{random:{F:1,mask:null}}}}class R extends I{constructor(t=!0){t?super(R.kt()):(super(R.St()),this.O=0)}static kt(){let e=t({Bt:5,Nt:1,It:1,Rt:1,Ct:1,yt:1,xt:1,At:1,Pt:1,Ut:1,Vt:1,Tt:1,$t:1,Ot:1,Wt:1,Ft:1,jt:1,Dt:1,Et:1,Gt:1,qt:1,zt:1,Lt:1,Xt:1,Yt:1,Ht:1,Jt:1,Kt:1,Qt:1})();for(;e.split("/").length<5;)if("N"!=e[0])e="N0/"+e;else{e=e+"/"+(Math.floor(10*Math.random())+3)}return e}static St(){let t=Math.floor(10*Math.random())+3,e=Math.floor(5*Math.random()*t),r=Math.floor(e/t)%5;var s=8;[1,2].includes(r)?s=4:3==r?s=3:4==r&&(s=5);let n=R.Zt(3,s),i=R.Zt(2,s),a=R.Zt(1,s);return a=a.filter((t=>!n.includes(t)&&!i.includes(t)&&2!=t)),`N${e}/B2${n.join("")}/S${i.join("")}/I${a.join("")}/${t}`}static Zt(t,e){let r=[];for(let s=t;s<=e;s++)Math.random()<.5&&r.push(s);return r}T(){return{random:{F:1,mask:null}}}}class C extends I{constructor(){super("B24/S34/I15678/4"),this.O=0}U(){return"FS"}T(){let t=.2;return{random:{F:20,mask:null},_t:{F:1,mask:g.N([[1,1],[1,1]])},te:{F:t,mask:g.N([[1,1]])},ee:{F:1,mask:g.N([[1,0],[1,1]])},re:{F:t,mask:g.N([[1,1],[2,2]])},se:{F:1,mask:g.N([[0,1,0],[1,1,1],[0,1,0]])},ne:{F:1,mask:g.N([[1,0,1],[0,0,0],[1,0,1]])},ie:{F:t,mask:g.N([[1,0,0],[1,1,0],[0,1,1]])},ae:{F:t,mask:g.N([[0,1,1,1,1,1,0],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[0,1,1,1,1,1,0]])},he:{F:1,mask:g.N([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},oe:{F:1,mask:g.N([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},ue:{F:1,mask:g.N([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},le:{F:t,mask:g.N([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},ce:{F:t,mask:g.N([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},Me:{F:t,mask:g.N([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])}}}}class y extends I{constructor(){super("B2/S245678/I1/4"),this.O=0}U(){return"SS"}T(){let t=.2;return{random:{F:10,mask:null},_t:{F:1,mask:g.N([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},te:{F:t,mask:g.N([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},re:{F:t,mask:g.N([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},ie:{F:t,mask:g.N([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},ae:{F:t,mask:g.N([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},le:{F:t,mask:g.N([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},ce:{F:t,mask:g.N([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},he:{F:1,mask:g.N([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},Me:{F:t,mask:g.N([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},fe:{F:t,mask:g.N([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},oe:{F:1,mask:g.N([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},me:{F:1,mask:g.N([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},be:{F:1,mask:g.N([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])}}}}class x extends k{constructor(){super(),this.A=4,this.O=.4}P(t,e,r,s){var n=t%4,i=r[0][0]+r[0][2];return 1!=n&&3!=n||!(i<2||i>3)?1!=n&&3!=n||2!=i&&3!=i?0!=n&&2!=n||3!=i?2==n&&(e=0):e=3:e=1:e=2,e}T(){return{pe:{F:1,mask:null}}}U(){return"CW"}}class A extends v{constructor(t,e,r,s,n){super(),this.we=e,this.de=t,this.A=this.we,this.ge=r,this.ve=s,this.ke=n}P(t,e,r,s){e=0;for(let n=0;n<this.de.length;n++)if(this.de[n].test(r,t,s)){e=(n+1)%this.we;break}return e}U(){return this.de.map((t=>t.name())).join("||")}static Se(e=null,r=null,s=null,n=4,i=4,a=null){var h=[];null==e&&(e=Math.floor(8*Math.random())+2),null==s&&(s=t(f)()),null==a&&(a=this.Be());for(let t=0;t<e;t++)h.push(d.v(r,n,s,a));return console.log((new Date).toLocaleTimeString()+" Sampling coloring rule "+s+": "+h.map((t=>t.name())).join(", ")),new A(h,i,r,s,a)}static Be(){var t=Math.random();return t<.2?null:t<.6?1:t<.7?2:t<.8?3:t<.9?4:Math.floor(20*Math.random())+5}static Ne(t,e=4){var r=t.split("||").map((t=>d.p(t)));return new A(r,e,null,s,null)}Ie(t=null){var e,r=this.de.length;null==t&&(t=this.ge),0==(e=2==r?Math.floor(2*Math.random())+1:10==r?Math.floor(2*Math.random()):Math.floor(3*Math.random()))?this.Re():1==e?this.Ce(t):this.ye(t)}ye(t){var e=this.de.slice();e.push(d.v(t,4,this.ve,this.ke)),console.log((new Date).toLocaleTimeString()+" Adding condition "+this.ve+": "+e.map((t=>t.name())).join("||")),this.de=e}Re(){var t=this.de.slice(),e=Math.floor(Math.random()*t.length);t.splice(e,1)[0],console.log((new Date).toLocaleTimeString()+" Removing condition: "+t.map((t=>t.name())).join("||")),this.de=t}Ce(t){var e=this.de.slice(),r=Math.floor(Math.random()*e.length);e[r]=d.v(t,4,this.ve,this.ke),console.log((new Date).toLocaleTimeString()+" Changing condition "+r+" to "+this.ve+": "+e.map((t=>t.name())).join("||")),this.de=e}}const P="gr",U="safe",V="mix",T="general",$="test";class O{xe;Ae;P;Pe(){throw new Error("Must override method")}Ue(){return function(t,e,r,s){e=this.Ae[0].P(t%this.Ae[0].A,e,r,s);var n=this.Ae[0].A;for(let i=1;i<this.Ae.length;i++)e+=n*this.Ae[i].P(Math.floor(t/n)%this.Ae[i].A,e,r,s),e%=n*=this.Ae[i].A;return e%n}}Ve(){throw new Error("Must override method")}U(){return this.Ae.map((t=>t.U())).join("-")}}class W extends O{constructor(t){super(),this.Te=t,this.xe=1,this.Ae=this.Pe(),this.P=this.Ue()}Pe(){var t=[];return"Original"==this.Te?t.push(new B):"StarWars"==this.Te?t.push(new N):"Modified"==this.Te?t.push(new S):"Conway"==this.Te?t.push(new x):t.push(new I(this.Te)),t}Ve(){}}class F extends O{constructor(t,e,r=null){super(),this.Te=t,this.ge=e,this.ke=null,this.$e=null,null==e&&(t==U||t==P||t==$?this.ge={0:1,1:0}:t==V?(Math.random()<.5?this.ge={0:.8,1:.2}:this.ge={0:1,1:0},this.ge={0:.8,1:.2}):this.ge={0:.5,1:.5}),t==P&&(this.ke=1),this.xe=4,this.Ae=null==r?this.Pe():this.Oe(r),this.P=this.Ue()}Pe(){var t=[],e=Math.random();return this.Te==P?t.push(new S):this.Te==U?e<.5?t.push(new R):e<.65?t.push(new S):e<.7?t.push(new B):e<.8?t.push(new N):e<.85?t.push(new y):e<.9?t.push(new C):t.push(new x):(e<.5?t.push(new R):e<.65?t.push(new S):e<.7?t.push(new B):e<.8?t.push(new N):e<.85?t.push(new y):e<.9?t.push(new C):t.push(new x),0==t.length&&t.push(new R)),t.push(A.Se(null,this.ge,this.$e,t[0].A,4,this.ke)),this.Te==$&&((t=[]).push(new R(!1)),this.xe=1),t}Ve(){this.Ae[1]&&"function"==typeof this.Ae[1].Ie&&this.Ae[1].Ie(this.ge)}Oe(t){var e=[],[r,s]=t.split("-");return"BB"==r?e.push(new S):"TBB"==r?e.push(new B):"SW"==r?e.push(new N):"SS"==r?e.push(new y):"FS"==r?e.push(new C):"CW"==r?e.push(new x):e.push(new I(r)),e.push(A.Ne(s)),e}}class j extends O{constructor(t,e,r=null){super(),this.Te=t,this.ge=e,this.ke=null,this.$e=null,null==e&&(t==U?this.ge={0:1,1:0}:t==V?(Math.random()<.5?this.ge={0:.8,1:.2}:this.ge={0:1,1:0},this.ge={0:.8,1:.2}):this.ge={0:.5,1:.5}),this.xe=16,this.Ae=null==r?this.Pe():this.Oe(r),this.P=this.Ue()}Pe(){var t=[];return t.push(new S),t.push(A.Se(null,this.ge,this.$e,4,4,this.u)),t.push(A.Se(null,this.ge,this.$e,16,4,this.u)),t}Ve(){this.Ae[1].Ie(this.ge),this.Ae[2].Ie(this.ge)}Oe(t){var e=[],r=t.split("-")[1];return e.push(new S),e.push(A.Ne(r)),e}}function D(t,e=!1){Math.random()<Math.exp(t.We)||e||t.Fe?("VariableGR"==t.je?(t.De=new F(P),t.Ee=new F(P)):"VariableDemo"==t.je?t.De=new F(P):"Variable"==t.je?t.De=new F(U):"VariableMix"==t.je?t.De=new F(V):"VariableUnsafe"==t.je?t.De=new F(T):"VariableTest"==t.je?t.De=new F($):"Variable2Unsafe"==t.je?t.De=new j(T):"CustomRule"==t.je?t.De=new F(null,null,t.Ge):"OriginalBB"==t.je?t.De=new W("Original"):"ModifiedBB"==t.je?t.De=new W("Modified"):"StarWars"==t.je?t.De=new W("StarWars"):"Conway"==t.je?t.De=new W("Conway"):"SparseFourStates"==t.je?t.De=new W("B378/S124567/4"):t.De=new F(V),t.We=-25,t.qe=-25,t.Fe=!1,E(t)):(Math.random()<Math.exp(t.qe)||t.ze)&&"CustomRule"!=t.je&&(t.De.Ve(),"VariableGR"==t.je&&t.Ee.Ve(),t.qe=-25,t.ze=!1,E(t));let r=Math.max(t.Le/200,1);t.We=t.We+t.Xe*r,t.We>0&&(t.We=0),t.qe=t.qe+t.Ye*r,t.qe>0&&(t.qe=0)}function E(t){var e=document.getElementById("currentStyle");e&&(e.value=t.De.U())}function G(t){let e={};for(let r in t){if("t"==r)continue;let s=Math.floor(3*Math.random())-1,n=t[r]+s;n=Math.max(0,Math.min(255,n)),e[r]=n}return e.He=t.He,e}function q(t,e,r,s,n){let i=(e+s+t.Je)%t.Je,a=(r+n+t.Ke)%t.Ke,h=i,o=a;return(i-e-s>0||i-e-s<0)&&(o=(t.Ke-a-t.Qe+t.Ke)%t.Ke),(a-r-n>0||a-r-n<0)&&(h=(t.Je-i-t.Ze+t.Je)%t.Je),[h,o]}function z(t,e,r,s,n){let i=(e+s+t.Je)%t.Je,a=(r+n+t.Ke)%t.Ke,h=i,o=a;return(i-e-s>0||i-e-s<0)&&(o=(t.Ke-a-t.Qe+t.Ke)%t.Ke),a-r-n>0?h=(i+t.Ze+t.Je)%t.Je:a-r-n<0&&(h=(i-t.Ze+t.Je)%t.Je),[h,o]}function L(t,e,r,s,n){let i=(e+s+t.Je)%t.Je,a=(r+n+t.Ke)%t.Ke,h=i,o=a;return i-e-s>0?o=(a+t.Qe+t.Ke)%t.Ke:i-e-s<0&&(o=(a-t.Qe+t.Ke)%t.Ke),(a-r-n>0||a-r-n<0)&&(h=(t.Je-i-t.Ze+t.Je)%t.Je),[h,o]}function X(t,e,r,s,n){let i=(e+s+t.Je)%t.Je,a=(r+n+t.Ke)%t.Ke,h=i,o=a;return i-e-s>0?o=(a+t.Qe+t.Ke)%t.Ke:i-e-s<0&&(o=(a-t.Qe+t.Ke)%t.Ke),a-r-n>0?h=(i+t.Ze+t.Je)%t.Je:a-r-n<0&&(h=(i-t.Ze+t.Je)%t.Je),[h,o]}function Y(t){t._e&&t.tr?t.t=q:t._e?t.t=z:t.tr?t.t=L:t.t=X}function H(t,e){if(t.er){var r=t.De.Ae[0].U(),s=new Blob([r],{type:"text/plain"}),n=URL.createObjectURL(s),i=document.createElement("a");i.href=n,i.download="dataAutomata.txt",i.click()}}function J(t,e,r){var s=function(t){var e=Math.exp(-t),r=1,s=0;do{s++,r*=Math.random()}while(r>e);return s-1}(10**(t.rr+t.De.Ae[0].O));if(0!=s)for(var n=t.De.Ae[0].j,i=t.De.Ae[0].W,a=0;a<s;a++){var h=Math.floor(Math.random()*t.Je),o=Math.floor(Math.random()*t.Ke);K(e,t,i[n()],h,o,r)}}function K(t,e,r,s,n,i){null===r?r=function(){let t,e=Math.floor(10*Math.random())+1;if(Math.random()<.7)t=function(t){let e=Math.random();return e<.1?et(t,t):e<.2?Z(t,t):e<.3?Q(t,t):e<.4?function(t){let e=new g(t,t);for(let r=0;r<t;r++)for(let s=r;s<t;s++)e.set(r,s,Math.floor(1e5*Math.random())),e.set(s,r,e.get(r,s));return e}(t):e<.5?function(t){let e=new g(t,t);for(let r=0;r<t;r++)for(let s=r;s<t;s++)e.set(r,s,Math.floor(1e5*Math.random())),e.set(t-1-s,t-1-r,e.get(r,s));return e}(t):e<.6?_(t,t):e<.7?tt(t,t):e<.8?function(t){let e=new g(t,t);for(let r=0;r<t;r++)for(let s=Math.max(r,t-r);s<t;s++)e.set(r,s,Math.floor(1e5*Math.random())),e.set(s,r,e.get(r,s)),e.set(t-1-s,t-1-r,e.get(r,s)),e.set(t-1-r,t-1-s,e.get(r,s));return e}(t):e<.9?function(t){let e=new g(t,t);for(let r=0;r<Math.ceil(t/2);r++)for(let s=0;s<Math.ceil(t/2);s++)e.set(r,s,Math.floor(1e5*Math.random())),e.set(s,t-1-r,e.get(r,s)),e.set(t-1-r,t-1-s,e.get(r,s)),e.set(t-1-s,r,e.get(r,s));return e}(t):function(t){let e=new g(t,t);for(let r=0;r<Math.ceil(t/2);r++)for(let s=0;s<Math.ceil(t/2);s++)e.set(r,s,Math.floor(1e5*Math.random())),e.set(s,t-1-r,e.get(r,s)),e.set(t-1-r,t-1-s,e.get(r,s)),e.set(t-1-s,r,e.get(r,s)),e.set(t-1-r,s,e.get(r,s)),e.set(t-1-s,t-1-r,e.get(r,s)),e.set(r,t-1-s,e.get(r,s)),e.set(s,r,e.get(r,s));return e}(t)}(e);else{t=function(t,e){let r=Math.random();return r<.2?et(t,e):r<.4?Z(t,e):r<.6?Q(t,e):r<.8?_(t,e):tt(t,e)}(e,Math.floor(10*Math.random())+1)}return t}():(Math.random()<.25&&r.I(),Math.random()<.5&&r.flipX(),Math.random()<.75&&r.flipY());let a=r.height,h=r.width;for(let o=0;o<a;o++)for(let u=0;u<h;u++){let l=i(e,s,n,o-Math.floor(a/2),u-Math.floor(h/2));t.set(l[0],l[1],r.get(o,u))}}function Q(t,e){let r=new g(e,t);for(let s=0;s<t;s++)for(let t=0;t<Math.ceil(e/2);t++)r.set(s,t,Math.floor(1e5*Math.random())),r.set(s,e-1-t,r.get(s,t));return r}function Z(t,e){let r=new g(e,t);for(let s=0;s<Math.ceil(t/2);s++)for(let n=0;n<e;n++)r.set(s,n,Math.floor(1e5*Math.random())),r.set(t-1-s,n,r.get(s,n));return r}function _(t,e){let r=new g(e,t);for(let s=0;s<t;s++)for(let n=0;n<Math.ceil(e/2);n++)r.set(s,n,Math.floor(1e5*Math.random())),r.set(t-1-s,e-1-n,r.get(s,n));return r}function tt(t,e){let r=new g(e,t);for(let s=0;s<Math.ceil(t/2);s++)for(let n=0;n<Math.ceil(e/2);n++)r.set(s,n,Math.floor(1e5*Math.random())),r.set(t-1-s,n,r.get(s,n)),r.set(s,e-1-n,r.get(s,n)),r.set(t-1-s,e-1-n,r.get(s,n));return r}function et(t,e){let r=new g(e,t);for(let s=0;s<t;s++)for(let t=0;t<e;t++)r.set(s,t,Math.floor(1e5*Math.random()));return r}function rt(t){!function(t){let e=t.sr,r=t.nr;for(var s=0,n=0,i=0;i<t.Je;i++)for(var a=0;a<t.Ke;a++){if(0==t.ir.get(i,a))continue;s+=1;var h=Math.floor(t.grid.get(i,a)/t.De.xe)%4;let e;if(0==h)e=t.backgroundColor;else if(1==h)e=t.ar;else if(2==h)e=t.hr;else{if(3!=h)continue;e=t.ur}let o=4*(i*t.Ke+a);n+=Math.sqrt((r.data[o+0]-e.r)**2+(r.data[o+1]-e.g)**2+(r.data[o+2]-e.b)**2),r.data[o+0]=e.r,r.data[o+1]=e.g,r.data[o+2]=e.b,r.data[o+3]=e.He}t.lr=.01*s+.99*t.lr,t.Le=.01*n/(s+t.Je*t.Ke/30)+.99*t.Le,t.Le>330&&(t.Fe=!0,t.lr,t.Je,t.Ke,console.log("Changing rule because suspected oscillation (std of color change: "+t.Le.toFixed(1)+")."),t.lr=15,t.Le=10,H(t));t.lr<3&&(t.Fe=!0,console.log("Changing rule because not enough cells changed ("+t.lr+")."),t.lr=20,H(t)),e.putImageData(r,t.cr,t.Mr)}(t),function(t){var s=[new Uint8Array(e[0]*t.De.Ae[0].A).fill(0),new Uint8Array(e[1]).fill(0)],n=new Uint8Array(5).fill(0),i=new g(t.Ke,t.Je),a=t.grid;const h=t.time,o=t.De.Ae[0].A;for(var u=0;u<t.Je;u++)for(var l=0;l<t.Ke;l++){var c=r(t,u,l,a,s,n,h,o,4);const e=t.grid.get(u,l);var M=e;M="VariableGR"!=t.je||0==t.mask.get(u,l)?t.De.P(e,M,c,t.time):t.Ee.P(e,M,c,t.time),Math.floor(M/t.De.xe)%4!=Math.floor(e/t.De.xe)%4?t.ir.set(u,l,1):t.ir.set(u,l,0),i.set(u,l,M);for(let t=0;t<s.length;t++)s[t].fill(0);n.fill(0)}t.mr&&J(t,i,t.t),t.grid=i}(t),D(t),t.time=(t.time+1)%166320,t.br&&function(t){Math.random()<1e-4&&(t.Qe=Math.floor(Math.random()*t.Ke),console.log("Periodicity shift X: "+t.Qe)),Math.random()<1e-4&&(t.Ze=Math.floor(Math.random()*t.Je),console.log("Periodicity shift Y: "+t.Ze)),Math.random()<1e-4&&(t._e=!t._e,Y(t),console.log("Flip X: "+t._e)),Math.random()<1e-4&&(t.tr=!t.tr,Y(t),console.log("Flip Y: "+t.tr))}(t),"variable"==t.pr&&function(t){Math.random()<1&&(t.ur=G(t.ur),t.hr=G(t.hr))}(t),setTimeout((function(){requestAnimationFrame((()=>rt(t)))}),t.timeout)}console.log("Loading main.js");var st=document.getElementById("gameCanvas"),nt=st.getContext("2d"),it=29,at=78,ht=80,ot=!1,ut=-0,lt=!1,ct=0,Mt=0,ft=!1,mt=!1,bt="mouseAnimation",pt="Variable",wt="zero",dt=6,gt=new class{constructor(t,e,r=200,s=200,n=20,i=!0,a=-2,h=!0,o=0,u=0,l=!1,c=!1,M="black2",f="VariableGR",m="random",b=6,p=2e4,w=2e3){this.Je=r,this.Ke=s,this.cr=0,this.Mr=0,this.timeout=n,this.grid=null,this.ir=null,this.nr=null,this.canvas=t,this.sr=e,this.mr=i,this.rr=a,this.br=h,this.Qe=o,this.Ze=u,this._e=l,this.tr=c,this.pr=M,this.je=f,this.wr=m,this.dr=b,this.gr=null,this.vr=null,this.t=null,this.mask=null,this.kr=p,this.Sr=w,this.We=-25,this.qe=-25,this.Xe=25/this.kr,this.Ye=25/this.Sr,this.canvas.width=this.Ke,this.canvas.height=this.Je,this.nr=e.createImageData(t.width,t.height),this.Fe=!0,this.ze=!1,this.lr=0,this.Le=0,this.er=!1,this.time=0}}(st,nt,it,at,ht,ot,ut,lt,ct,Mt,ft,mt,bt,pt,wt,dt);window.onload=function(){gt.grid=new g(gt.Ke,gt.Je),gt.ir=new g(gt.Ke,gt.Je);const t=document.getElementById("background"),e=t.getContext("2d");gt.Br=t;const r=new Image;r.src="./grWebsiteBackgroundTransp.png?"+(new Date).getTime(),r.onload=function(){e.drawImage(r,0,0,t.width,t.height)},function(t){t.Br.addEventListener("mousemove",(function(e){var r=t.canvas.getBoundingClientRect(),s=e.clientX-r.left,n=e.clientY-r.top,i=r.width/t.Ke,a=r.height/t.Je,h=Math.floor(s/i),o=Math.floor(n/a);t.grid.set(o,h,1)}))}(gt),function(t){t.Br.addEventListener("mousedown",(function(e){var r=t.canvas.getBoundingClientRect(),s=e.clientX-r.left,n=e.clientY-r.top,i=r.width/t.Ke,a=r.height/t.Je,h=Math.floor(s/i),o=Math.floor(n/a);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(o,(h+1)%t.Ke,1),t.grid.set(o,h,1),t.grid.set((o+1)%t.Je,h,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(o,h,1),t.grid.set((o+1)%t.Je,h,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(o,h,1),t.grid.set(o,(h+1)%t.Ke,1)):(t.grid.set((o+1)%t.Je,(h+1)%t.Ke,1),t.grid.set((o-1+t.Je)%t.Je,(h+1)%t.Ke,1),t.grid.set((o-1+t.Je)%t.Je,(h-1+t.Ke)%t.Ke,1),t.grid.set((o+1)%t.Je,(h-1+t.Ke)%t.Ke,1))}))}(gt),function(t){var e={r:247,g:255,b:28,He:255},r={r:13,g:112,b:255,He:255},s={r:240,g:239,b:239,He:255},n={r:0,g:0,b:0,He:255},i={r:240,g:240,b:240,He:255},a={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),He:255},h={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),He:255};"yellow"==t.pr?(t.backgroundColor=e,t.ar=n,t.hr=r,t.ur=s):"blue"==t.pr?(t.backgroundColor=r,t.ar=s,t.hr=n,t.ur=e):"blue2"==t.pr?(t.backgroundColor=r,t.ar=e,t.hr=n,t.ur=s):"grey"==t.pr?(t.backgroundColor=s,t.ar=n,t.hr=r,t.ur=e):"grey2"==t.pr?(t.backgroundColor=s,t.ar=e,t.hr=n,t.ur=r):"black"==t.pr?(t.backgroundColor=n,t.ar=r,t.hr=e,t.ur=s):"black2"==t.pr?(t.backgroundColor=n,t.ar=r,t.hr=s,t.ur=e):"blackTrace"==t.pr?(t.backgroundColor=n,t.ar=s,t.hr=n,t.ur=s):"blackTrace2"==t.pr?(t.backgroundColor=n,t.ar=n,t.hr=n,t.ur=s):"blackTrace3"==t.pr?(t.backgroundColor=n,t.ar=n,t.hr=s,t.ur=s):"redblue"==t.pr?(t.backgroundColor=n,t.ar=i,t.hr={r:221,g:85,b:12,He:255},t.ur={r:49,g:130,b:189,He:255}):"variable"==t.pr?(t.backgroundColor=n,t.ar=i,t.hr=a,t.ur=h):"mouseAnimation"==t.pr&&(t.backgroundColor={r:0,g:0,b:0,He:0},t.ar=r,t.hr=n,t.ur=e)}(gt),Y(gt),function(t){D(t,!0)}(gt),rt(gt)}})();
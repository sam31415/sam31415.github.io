(()=>{"use strict";function t(t){let e=Object.values(t).reduce(((t,e)=>t+e),0),s=Object.values(t).reduce(((t,s,r)=>[...t,s/e+(t[r-1]||0)]),[]);return function(){let e=Math.random(),r=s.findIndex((t=>e<t));return Object.keys(t)[r]}}const e=[11,44];function s(t,e,s,r,i,n,a,h,o){const l=r.height-1,u=r.width-1,c=r.data,M=r.width;var f=i[0],m=i[1];let g;for(var p=-1;p<=1;p++)for(var d=-1;d<=1;d++){if(0==p&&0==d)continue;if(n[0]=((-1===p?1:p)+(-1===d?1:d))%2,n[2+(3&a)]=-1==p?1:0,n[(1+a)%4+1]=-1==d?1:0,n[(2+a)%4+1]=1==p?1:0,n[(3+a)%4+1]=1==d?1:0,0==e||0==s||e==l||s==u)var[b,S]=t.t(t,e,s,p,d);else var b=e+p,S=s+d;const r=c[b*M+S],i=r%h,v=Math.floor(r/h)%o;g=h;for(var w=0;w<h-1;w++)i==w+1&&(f[w]+=1,f[g+w]+=n[0],g+=h,f[g+w]+=1-n[0],f[h+g+w]+=n[1],g+=h,f[g+w]+=1-n[1],f[h+g+w]+=n[2],g+=h,f[g+w]+=1-n[2],f[h+g+w]+=n[3],g+=h,f[g+w]+=1-n[3],f[h+g+w]+=n[4],g+=h,f[g+w]+=1-n[4]),g=h;g=o;for(w=0;w<o;w++)m[w]+=1,v==w&&(m[o+w]+=n[0],g+=o,m[g+w]+=1-n[0],m[o+g+w]+=n[1],g+=o,m[g+w]+=1-n[1],m[o+g+w]+=n[2],g+=o,m[g+w]+=1-n[2],m[o+g+w]+=n[3],g+=o,m[g+w]+=1-n[3],m[o+g+w]+=n[4],g+=o,m[g+w]+=1-n[4]),g=o}return[f,m]}const r="mix",i="isotropic",n="xcross",a="vcross",h="xvcross",o="directional1",l="directional2",u="directional3",c="directional2b",M="directional",f={[r]:.2,[i]:.4,[n]:.05,[a]:.05,[h]:.05,[o]:.05,[l]:.05,[u]:.05,[c]:.05,[M]:.05};const m="A",g="C",p="E",d="B";class b{constructor(t,e,s,r,i,n=null){this.type=t,this.threshold=e,this.i=s,this.h=r,this.o=i,this.l=n,this.u=function(t,e){return t==g?function(t){return 0==t}:t==m?function(t){return t%e==0}:function(t){return!0}}(this.h,this.o),this.M=function(t,e,s){return e==p&&2==s.length?function(e){return e[s[0]][s[1]]==t}:e==d&&2==s.length?function(e){return e[s[0]][s[1]]>t}:e==p&&3==s.length?function(e){return e[s[0]][s[1]]+e[s[0]][s[2]]==t}:e==d&&3==s.length?function(e){return e[s[0]][s[1]]+e[s[0]][s[2]]>t}:void 0}(this.threshold,this.type,this.i),this.m=function(t){let e;return e=null==t?function(t){return!0}:function(e){return t[e%t.length]},e}(n)}test(t,e,s){var r=this.m(s);return this.M(t)&&this.u(e)&&r}name(){var t="";null!=this.l&&(t=this.l.map((t=>t?"1":"0")).join(""));var e=this.i.join("|");return`${this.type}${this.threshold}${this.h}[${e}]${t}`}static p(t,e=4){var s=null;t.startsWith(p)?s=p:t.startsWith(d)&&(s=d);var r=t.substring(s.length),i=parseInt(r.substring(0,1)),n=null;(r=r.substring(1)).startsWith(g)?n=g:r.startsWith(m)?n=m:r.startsWith("N")&&(n="N");var a=(r=r.substring(n.length)).split("[")[1].split("]")[0].split("|").map(Number),h=null;return(r=r.split("]")[1]).length>0&&(h=r.split("").map((t=>"1"===t))),new b(s,i,a,n,e,h)}static S(e=null,s=4,f=r,S=null){const w=[p,d],v=w[Math.floor(Math.random()*w.length)],B=[g,m,"N"],N=B[Math.floor(Math.random()*B.length)];null===e&&(e={0:2/3,1:1/3});const k=t(e)(),I=function(t,e){var s=e;if(s==r){var f=Math.random();s=f<.5?i:f<.7?n:f<.9?a:M}if(s==i)return Math.floor(4*Math.random());if(s==a)return Math.floor(4*Math.random()+4);if(s==n)return Math.floor(4*Math.random()+8);if(s==h)return Math.floor(8*Math.random()+4);if(s==o)return Math.floor(4*Math.random()+12);if(s==l)return Math.floor(8*Math.random()+12);if(s==u)return Math.floor(12*Math.random()+12);if(s==c){var m=Math.floor(8*Math.random()+12);return m>=16&&(m+=4),m}return s==M?Math.floor(16*Math.random()+12):void 0}(0,f);var R=void 0;if(Math.random()<.5){R=[k,I,function(t){for(var e=4*Math.floor(t/4),s=t;s==t;)s=e+Math.floor(4*Math.random());return s}(I)]}else R=[k,I];var y=0,C=8;if(0==R[0]&&R[1]%4!=1?C=5:R[1]>4&&R[1]<=16?C=4:R[1]>16&&(C=3),y=v===d?Math.floor(Math.random()*C):Math.floor(Math.random()*C)+1,Math.random()<.2)A=null;else{var A;null==S&&(S=Math.floor(20*Math.random())+2);do{A=new Array(S).fill(0).map((()=>Math.random()<.5))}while(!A.includes(!0))}return new b(v,y,R,N,s,A)}}class S{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(this.width*this.height),this.rows=new Array(this.height),this.v=!1,this.get=this.B,this.set=this.N}static k(t,e=!1,s=!1,r=!1){const i=t.length,n=t[0].length,a=new S(n,i);for(let e=0;e<i;e++){r&&(e=i-e-1);for(let r=0;r<n;r++)s&&(r=n-r-1),a.set(e,r,t[e][r])}return e&&a.I(),a}I(){[this.width,this.height]=[this.height,this.width],[this.get,this.set]=this.v?[this.B,this.N]:[this.R,this.C],this.v=!this.v}flipX(){for(let t=0;t<this.height;t++)for(let e=0;e<this.width/2;e++){const s=this.get(t,e);this.set(t,e,this.get(t,this.width-e-1)),this.set(t,this.width-e-1,s)}}flipY(){for(let t=0;t<this.height/2;t++)for(let e=0;e<this.width;e++){const s=this.get(t,e);this.set(t,e,this.get(this.height-t-1,e)),this.set(this.height-t-1,e,s)}}B(t,e){return this.data[t*this.width+e]}N(t,e,s){this.data[t*this.width+e]=s}R(t,e){return this.data[e*this.height+t]}C(t,e,s){this.data[e*this.height+t]=s}}class w{constructor(){this.A=void 0}P(t,e,s,r){throw new Error("Must override method")}$(){throw new Error("Must override method")}}class v extends w{constructor(){super(),this.U=this.G(),this.T(),this.F=0}G(){throw new Error("Must override method")}T(){this.V=Object.keys(this.U).map((t=>this.U[t].mask));let e=Object.keys(this.U).map((t=>this.U[t].W));this.O=t(e)}}class B extends v{constructor(){super(),this.A=4}P(t,e,s,r){var i=t%4;return 1==i||3==i?e=2:2==i?e=0:0==i&&2==s[0][0]?e=1:0==i&&s[0][0]>2&&(e=3),e}$(){return"BB"}G(){return{random:{W:15,mask:null},X:{W:4,mask:S.k([[1,1],[1,1]])},Y:{W:4,mask:new S([[1,0,1],[0,0,0],[1,0,1]])},j:{W:2,mask:S.k([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},D:{W:2,mask:S.k([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},q:{W:2,mask:S.k([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},H:{W:2,mask:S.k([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]],!0)}}}}class N extends v{constructor(){super(),this.A=4,this.F=-1}P(t,e,s,r){var i=t%4;return 3==i&&(i=0),1==i?e=2:2==i||3==i?e=0:0!=i&&3!=i||2!=s[0][0]?0==i&&s[0][0]>2&&(e=3):e=1,e}$(){return"TBB"}G(){return{random:{W:15,mask:null},q:{W:1,mask:S.k([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},j:{W:2,mask:S.k([[0,0,1,0],[1,2,2,0],[0,2,2,1],[0,1,0,0]])},D:{W:2,mask:S.k([[0,0,2,0,0,0,0],[0,1,1,0,0,1,0],[0,0,2,1,2,1,2],[0,0,1,0,1,0,0],[2,1,2,1,2,0,0],[0,1,0,0,1,1,0],[0,0,0,0,2,0,0]])},X:{W:4,mask:S.k([[1,1],[1,1]])},L:{W:1e4,mask:S.k([[0,2,1,0,0,0,0,0],[0,0,2,1,0,0,0,0],[2,0,0,2,1,0,0,0],[1,2,0,0,2,1,0,0],[0,1,0,2,1,0,2,1],[0,0,2,1,0,0,2,1]])}}}}class k extends v{constructor(){super(),this.A=4,this.F=-1}P(t,e,s,r){var i=t%4;return 1==i&&(s[0][0]<3||s[0][0]>5)?e=2:2==i?e=3:3==i?e=0:0==i&&2==s[0][0]&&(e=1),e}$(){return"SW"}G(){let t=.2;return{random:{W:6,mask:null},_:{W:1,mask:S.k([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},J:{W:t,mask:S.k([[1,2,3],[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,0],[0,1,2],[3,0,1]])},K:{W:t,mask:S.k([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},Z:{W:t,mask:S.k([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},tt:{W:t,mask:S.k([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},et:{W:t,mask:S.k([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},st:{W:t,mask:S.k([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},rt:{W:t,mask:S.k([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},it:{W:t,mask:S.k([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},nt:{W:t,mask:S.k([[0,0,0,0,3,2,0,0],[0,0,0,0,1,0,3,0],[0,0,1,2,0,1,0,0],[0,0,2,3,1,1,0,0],[3,1,0,1,0,1,1,1],[2,0,1,1,1,0,1,3],[0,3,0,0,1,1,1,0],[0,0,0,0,1,3,0,0]])},ht:{W:t,mask:S.k([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},ot:{W:t,mask:S.k([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},lt:{W:t,mask:S.k([[0,3,2,1,1,2,3,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[2,3,0,0,0,0,3,2]])},ut:{W:t,mask:S.k([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},ct:{W:t,mask:S.k([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},Mt:{W:t,mask:S.k([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])},ft:{W:t,mask:S.k([[0,1,0,0,0,0],[1,1,1,0,0,0],[0,1,0,0,1,0],[0,0,0,1,1,1],[0,0,0,0,1,0]])},Y:{W:2,mask:S.k([[0,0,0,1,0,0,0],[0,0,1,1,1,0,0],[0,1,0,0,0,1,0],[1,1,0,0,0,1,1],[0,1,0,0,0,1,0],[0,0,1,1,1,0,0],[0,0,0,1,0,0,0]])}}}}class I extends v{constructor(t){super(),null==t&&(t=I.gt()),this.dt(t)}P(t,e,s,r){var i=t%this.A;return 1==i&&this.bt.includes(s[0][this.St])?e=1:i>0&&i<this.A-1?e+=1:i==this.A-1?e=0:0==i&&this.wt.includes(s[0][this.St])?e=1:0==i&&this.vt.includes(s[0][this.St])&&(e=this.A-1),e}dt(t){this.Bt=t;const e=this.Bt.split("/");for(var s of(this.St=0,this.vt=[],e))"N"==s[0]?this.St=Number(e[0].substring(1)):"B"==s[0]?this.wt=new Uint8Array(s.substring(1).split("").map(Number)):"S"==s[0]?this.bt=new Uint8Array(s.substring(1).split("").map(Number)):"I"==s[0]?this.vt=new Uint8Array(e[2].substring(1).split("").map(Number)):this.A=Number(s)}static gt(t){let e=Math.floor(10*Math.random())+3;null==t&&(t=Math.floor(5*Math.random()*e));let s=Math.floor(t/e)%5;var r=8;[1,2].includes(s)?r=4:3==s?r=3:4==s&&(r=5);let i=y.Nt(1,r);0==i.length&&(i=[2]);let n=y.Nt(1,r),a=y.Nt(1,r);return a=a.filter((t=>!i.includes(t)&&!n.includes(t)&&2!=t)),`N${t}/B${i.join("")}/S${n.join("")}/I${a.join("")}/${e}`}static Nt(t,e){let s=[];for(let r=t;r<=e;r++)Math.random()<.5&&s.push(r);return s}$(){return this.Bt}G(){return{random:{W:1,mask:null}}}}class R extends I{constructor(t,e=null){if(super(t),"ships"==e){let t=R.gt(0);this.dt(t);let e=Array.from(this.wt).indexOf(1);if(-1!==e){let t=new Uint8Array(this.wt.length-1);t.set(this.wt.subarray(0,e),0),t.set(this.wt.subarray(e+1),e),this.wt=t}if(-1===this.wt.indexOf(2)){let t=new Uint8Array(this.wt.length+1);t[0]=2,t.set(this.wt,1),this.wt=t}if(e=Array.from(this.bt).indexOf(1),-1!==e){let t=new Uint8Array(this.bt.length-1);t.set(this.bt.subarray(0,e),0),t.set(this.bt.subarray(e+1),e),this.bt=t}this.vt=this.vt.filter((t=>!this.wt.includes(t)&&!this.bt.includes(t)&&2!=t)),this.Bt=`N${this.St}/B${this.wt.join("")}/S${this.bt.join("")}/I${this.vt.join("")}/${this.A}`,this.kt=1,this.F=.5}else this.kt=20/this.wt[0]**3,this.F=1}P(t,e,s,r,i){var n=t%this.A;return 1==n&&this.bt.includes(s[0][this.St])?e=1:n>0&&n<this.A-1?e+=1:n==this.A-1?e=0:0==n&&this.wt.includes(s[0][this.St])&&Math.random()>this.kt*i-.01?e=1:0==n&&this.vt.includes(s[0][this.St])&&(e=this.A-1),e}$(){return`SGen/${this.Bt}`}dt(t){"SGen"==t.substring(0,4)?super.dt(t.substring(5)):super.dt(t)}}class y extends I{constructor(t=null,e=!0){super(null==t?e?y.It():y.gt():t)}static It(){let e=t({Rt:5,yt:1,Ct:1,At:1,xt:1,Pt:1,$t:1,Ut:3,Gt:1,Tt:1,Ft:1,Vt:1,Wt:1,Ot:1,Et:1,Xt:1,Yt:1,jt:1,Dt:1,qt:1,Ht:1,Lt:3,zt:1,_t:1,Jt:1,Kt:1,Qt:1,Zt:1,te:1,ee:3,se:1,re:1,ie:10,ne:3,ae:1,he:1,oe:1,le:1,ue:1,ce:3,Me:1,fe:1,me:1,ge:1,pe:1,de:1,be:1,Se:1,we:1,ve:1,Be:1,Ne:1,ke:1,Ie:1,Re:1,ye:1,Ce:1,Ae:1,xe:1,Pe:1,$e:1,Ue:1,Ge:1,Te:1,Fe:1,Ve:1,We:1,Oe:1,Ee:1})();for(;e.split("/").length<5;)if("N"!=e[0])e="N0/"+e;else{e=e+"/"+(Math.floor(10*Math.random())+3)}return e}G(){return{random:{W:1,mask:null}}}$(){return`GGShips/${this.Bt}`}dt(t){"GGShips/"==t.substring(0,7)?super.dt(t.substring(8)):super.dt(t)}}class C extends I{constructor(){super("B24/S34/I15678/4"),this.F=0}$(){return"FS"}G(){let t=.2;return{random:{W:20,mask:null},Xe:{W:1,mask:S.k([[1,1],[1,1]])},Ye:{W:t,mask:S.k([[1,1]])},je:{W:1,mask:S.k([[1,0],[1,1]])},De:{W:t,mask:S.k([[1,1],[2,2]])},qe:{W:1,mask:S.k([[0,1,0],[1,1,1],[0,1,0]])},He:{W:1,mask:S.k([[1,0,1],[0,0,0],[1,0,1]])},Le:{W:t,mask:S.k([[1,0,0],[1,1,0],[0,1,1]])},ze:{W:t,mask:S.k([[0,1,1,1,1,1,0],[1,1,0,1,0,1,1],[1,1,0,1,0,1,1],[0,1,1,1,1,1,0]])},_e:{W:1,mask:S.k([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},Je:{W:1,mask:S.k([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},Ke:{W:1,mask:S.k([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},Qe:{W:t,mask:S.k([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},Ze:{W:t,mask:S.k([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},ts:{W:t,mask:S.k([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])}}}}class A extends I{constructor(){super("B2/S245678/I1/4"),this.F=0}$(){return"SS"}G(){let t=.2;return{random:{W:10,mask:null},Xe:{W:1,mask:S.k([[0,1,2,1,2,1,0],[1,2,0,1,0,2,1],[1,2,0,1,0,2,1],[0,1,2,1,2,1,0]])},Ye:{W:t,mask:S.k([[0,0,1,0,0,0,0,0,0],[0,1,1,1,0,0,1,2,0],[3,0,1,0,0,0,1,0,3],[0,0,1,1,0,1,1,1,0],[0,0,1,1,0,0,1,0,0],[0,0,2,0,0,3,2,1,0]])},De:{W:t,mask:S.k([[0,0,0,1,0,1,0,0],[0,1,2,0,1,1,1,0],[1,2,3,1,1,0,1,1],[1,2,3,0,0,1,1,0],[0,0,0,0,1,2,0,0]])},Le:{W:t,mask:S.k([[0,0,0,0,0,3,2,0],[0,0,1,0,0,1,0,0],[1,1,1,1,1,1,1,1],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[1,1,1,0,0,1,1,1],[0,1,0,0,0,0,1,0]])},ze:{W:t,mask:S.k([[0,0,0,1,0,0],[0,0,1,1,1,3],[0,0,0,1,0,2],[0,0,0,0,0,1],[0,1,0,1,1,0],[1,1,1,1,1,1],[0,1,0,0,1,0]])},Qe:{W:t,mask:S.k([[0,1,1,2,0],[2,0,1,0,3],[3,1,1,1,0],[0,1,0,2,1]])},Ze:{W:t,mask:S.k([[0,0,0,2,0],[3,0,1,1,0],[2,1,1,1,3],[1,0,1,0,2],[0,0,0,1,0]])},_e:{W:1,mask:S.k([[0,1,0,0,1,0,0,0,0,0],[1,1,1,2,2,1,0,3,2,0],[0,1,0,2,0,1,0,0,1,0],[0,1,2,2,1,1,1,1,1,1],[0,0,1,0,0,1,0,0,1,0]])},ts:{W:t,mask:S.k([[0,0,0,1,0,3,0,0],[0,0,2,0,1,0,2,1],[0,0,3,1,1,1,2,1],[0,0,1,0,1,0,3,0],[3,0,1,0,1,0,0,0],[2,1,1,1,3,0,0,0],[1,0,1,0,2,0,0,0],[0,0,0,0,1,3,0,0]])},es:{W:t,mask:S.k([[0,0,1,1,3,0,1,0],[0,1,0,2,2,1,1,1],[1,1,1,0,0,0,1,0],[0,1,0,0,0,0,3,0]])},Je:{W:1,mask:S.k([[0,2,3,0,0,1,0,0,0],[1,0,1,1,1,1,0,3,0],[0,1,1,0,0,1,1,2,1],[0,0,1,1,1,1,0,2,1],[0,1,2,0,0,0,3,0,0]])},ss:{W:1,mask:S.k([[0,0,0,0,3,0,0,0,0],[0,0,0,0,2,0,0,0,0],[0,0,1,0,1,0,1,0,0],[0,2,3,1,1,1,3,2,0],[1,0,1,0,0,0,1,0,1],[1,1,1,1,0,1,1,1,1],[2,0,1,0,2,0,1,0,2],[0,3,0,1,0,1,0,3,0]])},rs:{W:1,mask:S.k([[0,0,0,1,0,1,0,0,0],[1,0,1,0,1,0,1,0,1],[2,1,1,1,1,1,1,1,2],[0,1,0,1,0,1,0,1,0],[0,1,0,0,1,0,0,1,0],[1,1,1,1,1,1,1,1,1],[0,1,0,0,1,0,0,1,0]])}}}}class x extends v{constructor(){super(),this.A=4,this.F=.4}P(t,e,s,r){var i=t%4,n=s[0][0]+s[0][2];return 1!=i&&3!=i||!(n<2||n>3)?1!=i&&3!=i||2!=n&&3!=n?0!=i&&2!=i||3!=n?2==i&&(e=0):e=3:e=1:e=2,e}G(){return{ns:{W:1,mask:null}}}$(){return"CW"}}class P extends w{constructor(t,e,s,r,i){super(),this.hs=e,this.os=t,this.A=this.hs,this.ls=s,this.us=r,this.cs=i}P(t,e,s,r){e=0;for(let i=0;i<this.os.length;i++)if(this.os[i].test(s,t,r)){e=(i+1)%this.hs;break}return e}$(){return this.os.map((t=>t.name())).join("||")}static Ms(e=null,s=null,r=null,i=4,n=4,a=null){var h=[];null==e&&(e=Math.floor(8*Math.random())+2),null==r&&(r=t(f)()),null==a&&(a=this.fs());for(let t=0;t<e;t++)h.push(b.S(s,i,r,a));return console.log((new Date).toLocaleTimeString()+" Sampling coloring rule "+r+": "+h.map((t=>t.name())).join(", ")),new P(h,n,s,r,a)}static fs(){var t=Math.random();return t<.2?null:t<.6?1:t<.7?2:t<.8?3:t<.9?4:Math.floor(20*Math.random())+5}static gs(t,e=4){var s=t.split("||").map((t=>b.p(t)));return new P(s,e,null,r,null)}ps(t=null){var e,s=this.os.length;null==t&&(t=this.ls),0==(e=2==s?Math.floor(2*Math.random())+1:10==s?Math.floor(2*Math.random()):Math.floor(3*Math.random()))?this.ds():1==e?this.bs(t):this.Ss(t)}Ss(t){var e=this.os.slice();e.push(b.S(t,4,this.us,this.cs)),console.log((new Date).toLocaleTimeString()+" Adding condition "+this.us+": "+e.map((t=>t.name())).join("||")),this.os=e}ds(){var t=this.os.slice(),e=Math.floor(Math.random()*t.length);t.splice(e,1)[0],console.log((new Date).toLocaleTimeString()+" Removing condition: "+t.map((t=>t.name())).join("||")),this.os=t}bs(t){var e=this.os.slice(),s=Math.floor(Math.random()*e.length);e[s]=b.S(t,4,this.us,this.cs),console.log((new Date).toLocaleTimeString()+" Changing condition "+s+" to "+this.us+": "+e.map((t=>t.name())).join("||")),this.os=e}}const $="gr",U="safe",G="mix",T="general",F="test";class V{ws;vs;P;Bs(){throw new Error("Must override method")}Ns(){return function(t,e,s,r,i){e=this.vs[0].P(t%this.vs[0].A,e,s,r,i);var n=this.vs[0].A;for(let i=1;i<this.vs.length;i++)e+=n*this.vs[i].P(Math.floor(t/n)%this.vs[i].A,e,s,r),e%=n*=this.vs[i].A;return e%n}}ks(){throw new Error("Must override method")}$(){return this.vs.map((t=>t.$())).join("-")}}class W extends V{constructor(t){super(),this.Is=t,this.ws=1,this.vs=this.Bs(),this.P=this.Ns()}Bs(){var t=[];return"Original"==this.Is?t.push(new N):"StarWars"==this.Is?t.push(new k):"Modified"==this.Is?t.push(new B):"Conway"==this.Is?t.push(new x):t.push(new I(this.Is)),t}ks(){}}class O extends V{constructor(t,e,s=null){super(),this.Is=t,this.ls=e,this.cs=null,this.Rs=null,null==e&&(t==U||t==$||t==F?this.ls={0:1,1:0}:t==G?(Math.random()<.5?this.ls={0:.8,1:.2}:this.ls={0:1,1:0},this.ls={0:.8,1:.2}):this.ls={0:.5,1:.5}),t==$&&(this.cs=1),this.ws=4,this.vs=null==s?this.Bs():this.ys(s),this.P=this.Ns()}Cs=[{As:R,xs:[null,"ships"],weight:4},{As:R,xs:[],weight:2},{As:y,xs:[],weight:2},{As:B,xs:[],weight:4},{As:N,xs:[],weight:1},{As:k,xs:[],weight:1},{As:A,xs:[],weight:1},{As:C,xs:[],weight:1},{As:x,xs:[],weight:1}];Ps=[{As:B,xs:[],weight:1}];Bs(){let t=this.Cs;this.Is==$&&(t=this.Ps);let e=t.reduce(((t,e)=>t+e.weight),0);var s=[];let r=Math.random()*e;for(let e=0;e<t.length;e++){if(r<t[e].weight){s.push(new t[e].As(...t[e].xs));break}r-=t[e].weight}return s.push(P.Ms(null,this.ls,this.Rs,s[0].A,4,this.cs)),this.Is==F&&((s=[]).push(new R(null,"ships")),this.ws=s[0].A,s.push(P.Ms(null,this.ls,this.Rs,4,4,this.cs))),s}ks(){this.vs[1]&&"function"==typeof this.vs[1].ps&&this.vs[1].ps(this.ls)}ys(t){var e=[],[s,r]=t.split("-");return"BB"==s?e.push(new B):"TBB"==s?e.push(new N):"SW"==s?e.push(new k):"SS"==s?e.push(new A):"FS"==s?e.push(new C):"CW"==s?e.push(new x):s.startsWith("SGen")?e.push(new R(s,"ships")):s.startsWith("GGShips")?e.push(new y(s)):e.push(new I(s)),e.push(P.gs(r)),e}}class E extends V{constructor(t,e,s=null){super(),this.Is=t,this.ls=e,this.cs=null,this.Rs=null,null==e&&(t==U?this.ls={0:1,1:0}:t==G?(Math.random()<.5?this.ls={0:.8,1:.2}:this.ls={0:1,1:0},this.ls={0:.8,1:.2}):this.ls={0:.5,1:.5}),this.ws=16,this.vs=null==s?this.Bs():this.ys(s),this.P=this.Ns()}Bs(){var t=[];return t.push(new B),t.push(P.Ms(null,this.ls,this.Rs,4,4,this.l)),t.push(P.Ms(null,this.ls,this.Rs,16,4,this.l)),t}ks(){this.vs[1].ps(this.ls),this.vs[2].ps(this.ls)}ys(t){var e=[],s=t.split("-")[1];return e.push(new B),e.push(P.gs(s)),e}}function X(t,e=!1){Math.random()<Math.exp(t.$s)||e||t.Us?("VariableGR"==t.Gs?(t.Ts=new O($),t.Fs=new O($),t.Vs=!0):"VariableDemo"==t.Gs?(t.Ts=new O($),t.Fs=null,t.Vs=!1):"Variable"==t.Gs?t.Ts=new O(U):"VariableMix"==t.Gs?t.Ts=new O(G):"VariableUnsafe"==t.Gs?t.Ts=new O(T):"VariableTest"==t.Gs?t.Ts=new O(F):"Variable2Unsafe"==t.Gs?t.Ts=new E(T):"CustomRule"==t.Gs?t.Ts=new O(null,null,t.Ws):"OriginalBB"==t.Gs?t.Ts=new W("Original"):"ModifiedBB"==t.Gs?t.Ts=new W("Modified"):"StarWars"==t.Gs?t.Ts=new W("StarWars"):"Conway"==t.Gs?t.Ts=new W("Conway"):"SparseFourStates"==t.Gs?t.Ts=new W("B378/S124567/4"):t.Ts=new O(G),t.$s=-25,t.Os=-25,t.Us=!1,Y(t)):(Math.random()<Math.exp(t.Os)||t.Es)&&"CustomRule"!=t.Gs&&(t.Ts.ks(),t.Vs&&null!==t.Fs&&t.Fs.ks(),t.Os=-25,t.Es=!1,Y(t));let s=Math.max(t.Xs/200,1);t.$s=t.$s+t.Ys*s,t.$s>0&&(t.$s=0),t.Os=t.Os+t.js*s,t.Os>0&&(t.Os=0)}function Y(t){var e=document.getElementById("currentStyle");e&&(t.Vs&&null!==t.Fs?e.value=t.Ts.$()+"__"+t.Fs.$():e.value=t.Ts.$())}function j(t){let e={};for(let s in t){if("t"==s)continue;let r=Math.floor(3*Math.random())-1,i=t[s]+r;i=Math.max(0,Math.min(255,i)),e[s]=i}return e.Ds=t.Ds,e}function D(t,e,s,r,i){let n=(e+r+t.qs)%t.qs,a=(s+i+t.Hs)%t.Hs,h=n,o=a;return(n-e-r>0||n-e-r<0)&&(o=(t.Hs-a-t.Ls+t.Hs)%t.Hs),(a-s-i>0||a-s-i<0)&&(h=(t.qs-n-t.zs+t.qs)%t.qs),[h,o]}function q(t,e,s,r,i){let n=(e+r+t.qs)%t.qs,a=(s+i+t.Hs)%t.Hs,h=n,o=a;return(n-e-r>0||n-e-r<0)&&(o=(t.Hs-a-t.Ls+t.Hs)%t.Hs),a-s-i>0?h=(n+t.zs+t.qs)%t.qs:a-s-i<0&&(h=(n-t.zs+t.qs)%t.qs),[h,o]}function H(t,e,s,r,i){let n=(e+r+t.qs)%t.qs,a=(s+i+t.Hs)%t.Hs,h=n,o=a;return n-e-r>0?o=(a+t.Ls+t.Hs)%t.Hs:n-e-r<0&&(o=(a-t.Ls+t.Hs)%t.Hs),(a-s-i>0||a-s-i<0)&&(h=(t.qs-n-t.zs+t.qs)%t.qs),[h,o]}function L(t,e,s,r,i){let n=(e+r+t.qs)%t.qs,a=(s+i+t.Hs)%t.Hs,h=n,o=a;return n-e-r>0?o=(a+t.Ls+t.Hs)%t.Hs:n-e-r<0&&(o=(a-t.Ls+t.Hs)%t.Hs),a-s-i>0?h=(n+t.zs+t.qs)%t.qs:a-s-i<0&&(h=(n-t.zs+t.qs)%t.qs),[h,o]}function z(t){t._s&&t.Js?t.t=D:t._s?t.t=q:t.Js?t.t=H:t.t=L}function _(t,e){if(t.Ks){var s=t.Ts.vs[0].$(),r=new Blob([s],{type:"text/plain"}),i=URL.createObjectURL(r),n=document.createElement("a");n.href=i,n.download="dataAutomata.txt",n.click()}}function J(t,e,s){var r=function(t){var e=Math.exp(-t),s=1,r=0;do{r++,s*=Math.random()}while(s>e);return r-1}(10**(t.Qs+t.Ts.vs[0].F));if(0!=r)for(var i=t.Ts.vs[0].O,n=t.Ts.vs[0].V,a=0;a<r;a++){var h=Math.floor(Math.random()*t.qs),o=Math.floor(Math.random()*t.Hs);K(e,t,n[i()],h,o,s)}}function K(t,e,s,r,i,n){null===s?s=function(){let t,e=Math.floor(10*Math.random())+1;if(Math.random()<.7)t=function(t){let e=Math.random();return e<.1?st(t,t):e<.2?Z(t,t):e<.3?Q(t,t):e<.4?function(t){let e=new S(t,t);for(let s=0;s<t;s++)for(let r=s;r<t;r++)e.set(s,r,Math.floor(1e5*Math.random())),e.set(r,s,e.get(s,r));return e}(t):e<.5?function(t){let e=new S(t,t);for(let s=0;s<t;s++)for(let r=s;r<t;r++)e.set(s,r,Math.floor(1e5*Math.random())),e.set(t-1-r,t-1-s,e.get(s,r));return e}(t):e<.6?tt(t,t):e<.7?et(t,t):e<.8?function(t){let e=new S(t,t);for(let s=0;s<t;s++)for(let r=Math.max(s,t-s);r<t;r++)e.set(s,r,Math.floor(1e5*Math.random())),e.set(r,s,e.get(s,r)),e.set(t-1-r,t-1-s,e.get(s,r)),e.set(t-1-s,t-1-r,e.get(s,r));return e}(t):e<.9?function(t){let e=new S(t,t);for(let s=0;s<Math.ceil(t/2);s++)for(let r=0;r<Math.ceil(t/2);r++)e.set(s,r,Math.floor(1e5*Math.random())),e.set(r,t-1-s,e.get(s,r)),e.set(t-1-s,t-1-r,e.get(s,r)),e.set(t-1-r,s,e.get(s,r));return e}(t):function(t){let e=new S(t,t);for(let s=0;s<Math.ceil(t/2);s++)for(let r=0;r<Math.ceil(t/2);r++)e.set(s,r,Math.floor(1e5*Math.random())),e.set(r,t-1-s,e.get(s,r)),e.set(t-1-s,t-1-r,e.get(s,r)),e.set(t-1-r,s,e.get(s,r)),e.set(t-1-s,r,e.get(s,r)),e.set(t-1-r,t-1-s,e.get(s,r)),e.set(s,t-1-r,e.get(s,r)),e.set(r,s,e.get(s,r));return e}(t)}(e);else{t=function(t,e){let s=Math.random();return s<.2?st(t,e):s<.4?Z(t,e):s<.6?Q(t,e):s<.8?tt(t,e):et(t,e)}(e,Math.floor(10*Math.random())+1)}return t}():(Math.random()<.25&&s.I(),Math.random()<.5&&s.flipX(),Math.random()<.75&&s.flipY());let a=s.height,h=s.width;for(let o=0;o<a;o++)for(let l=0;l<h;l++){let u=n(e,r,i,o-Math.floor(a/2),l-Math.floor(h/2));t.set(u[0],u[1],s.get(o,l))}}function Q(t,e){let s=new S(e,t);for(let r=0;r<t;r++)for(let t=0;t<Math.ceil(e/2);t++)s.set(r,t,Math.floor(1e5*Math.random())),s.set(r,e-1-t,s.get(r,t));return s}function Z(t,e){let s=new S(e,t);for(let r=0;r<Math.ceil(t/2);r++)for(let i=0;i<e;i++)s.set(r,i,Math.floor(1e5*Math.random())),s.set(t-1-r,i,s.get(r,i));return s}function tt(t,e){let s=new S(e,t);for(let r=0;r<t;r++)for(let i=0;i<Math.ceil(e/2);i++)s.set(r,i,Math.floor(1e5*Math.random())),s.set(t-1-r,e-1-i,s.get(r,i));return s}function et(t,e){let s=new S(e,t);for(let r=0;r<Math.ceil(t/2);r++)for(let i=0;i<Math.ceil(e/2);i++)s.set(r,i,Math.floor(1e5*Math.random())),s.set(t-1-r,i,s.get(r,i)),s.set(r,e-1-i,s.get(r,i)),s.set(t-1-r,e-1-i,s.get(r,i));return s}function st(t,e){let s=new S(e,t);for(let r=0;r<t;r++)for(let t=0;t<e;t++)s.set(r,t,Math.floor(1e5*Math.random()));return s}function rt(t){!function(t){let e=t.Zs,s=t.tr;for(var r=0,i=0,n=0;n<t.qs;n++)for(var a=0;a<t.Hs;a++){if(0==t.er.get(n,a))continue;r+=1;var h=Math.floor(t.grid.get(n,a)/t.Ts.ws)%4;let e;if(0==h)e=t.backgroundColor;else if(1==h)e=t.sr;else if(2==h)e=t.rr;else{if(3!=h)continue;e=t.ir}let o=4*(n*t.Hs+a);i+=Math.sqrt((s.data[o+0]-e.r)**2+(s.data[o+1]-e.g)**2+(s.data[o+2]-e.b)**2),s.data[o+0]=e.r,s.data[o+1]=e.g,s.data[o+2]=e.b,s.data[o+3]=e.Ds}t.nr=.8*t.nr+r/(t.qs*t.Hs)/5,t.ar=.01*r+.99*t.ar,t.Xs=.01*i/(r+t.qs*t.Hs/30)+.99*t.Xs,t.Xs>330&&(t.Us=!0,t.ar,t.qs,t.Hs,console.log("Changing rule because suspected oscillation (std of color change: "+t.Xs.toFixed(1)+")."),t.ar=15,t.Xs=10,_(t));t.ar<3&&(t.Us=!0,console.log("Changing rule because not enough cells changed ("+t.ar+")."),t.ar=20,_(t)),e.putImageData(s,t.hr,t.lr)}(t),function(t){var r=[new Uint8Array(e[0]*t.Ts.vs[0].A).fill(0),new Uint8Array(e[1]).fill(0)],i=new Uint8Array(5).fill(0),n=new S(t.Hs,t.qs),a=t.grid;const h=t.time,o=t.Ts.vs[0].A;for(var l=0;l<t.qs;l++)for(var u=0;u<t.Hs;u++){var c=s(t,l,u,a,r,i,h,o,4);const e=t.grid.get(l,u);var M=e;M=t.Vs&&0!=t.mask.get(l,u)?t.Fs.P(e,M,c,t.time,t.nr):t.Ts.P(e,M,c,t.time,t.nr),Math.floor(M/t.Ts.ws)%4!=Math.floor(e/t.Ts.ws)%4?t.er.set(l,u,1):t.er.set(l,u,0),n.set(l,u,M);for(let t=0;t<r.length;t++)r[t].fill(0);i.fill(0)}t.ur&&J(t,n,t.t),t.grid=n}(t),X(t),t.time=(t.time+1)%166320,t.cr&&function(t){Math.random()<1e-4&&(t.Ls=Math.floor(Math.random()*t.Hs),console.log("Periodicity shift X: "+t.Ls)),Math.random()<1e-4&&(t.zs=Math.floor(Math.random()*t.qs),console.log("Periodicity shift Y: "+t.zs)),Math.random()<1e-4&&(t._s=!t._s,z(t),console.log("Flip X: "+t._s)),Math.random()<1e-4&&(t.Js=!t.Js,z(t),console.log("Flip Y: "+t.Js))}(t),"variable"==t.Mr&&function(t){Math.random()<1&&(t.ir=j(t.ir),t.rr=j(t.rr))}(t),setTimeout((function(){requestAnimationFrame((()=>rt(t)))}),t.timeout)}console.log("Loading main.js");var it={canvas:document.getElementById("gameCanvas"),Zs:document.getElementById("gameCanvas").getContext("2d"),qs:29,Hs:78,timeout:80,ur:!1,cr:!1,Ls:0,zs:0,_s:!1,Js:!1,Mr:"mouseAnimation",Gs:"Variable",mr:"zero"},nt=new class{constructor({canvas:t,Zs:e,qs:s=200,Hs:r=200,timeout:i=20,ur:n=!0,Qs:a=-2,cr:h=!0,Ls:o=0,zs:l=0,_s:u=!1,Js:c=!1,Mr:M="black2",Gs:f="VariableGR",mr:m="random",gr:g=2e4,pr:p=2e3,dr:d=null,Vs:b=!1}={}){this.grid=null,this.qs=s,this.Hs=r,this.Ls=o,this.zs=l,this._s=u,this.Js=c,this.mask=null,this.t=null,this.canvas=t,this.Zs=e,this.hr=0,this.lr=0,this.canvas.width=this.Hs,this.canvas.height=this.qs,this.er=null,this.tr=e.createImageData(t.width,t.height),this.Mr=M,this.mr=m,this.dr=d,this.Vs=b,this.timeout=i,this.ur=n,this.Qs=a,this.cr=h,this.Gs=f,this.br=null,this.Sr=null,this.gr=g,this.pr=p,this.time=0,this.$s=-25,this.Os=-25,this.Ys=25/this.gr,this.js=25/this.pr,this.Us=!0,this.Es=!1,this.nr=0,this.ar=0,this.Xs=0,this.Ks=!1}}(it);window.onload=function(){nt.grid=new S(nt.Hs,nt.qs),nt.er=new S(nt.Hs,nt.qs);const t=document.getElementById("background"),e=t.getContext("2d");nt.wr=t;const s=new Image;s.src="./grWebsiteBackgroundTransp.png?"+(new Date).getTime(),s.onload=function(){e.drawImage(s,0,0,t.width,t.height)},function(t){t.wr.addEventListener("mousemove",(function(e){var s=t.canvas.getBoundingClientRect(),r=e.clientX-s.left,i=e.clientY-s.top,n=s.width/t.Hs,a=s.height/t.qs,h=Math.floor(r/n),o=Math.floor(i/a);t.grid.set(o,h,1)}))}(nt),function(t){t.wr.addEventListener("mousedown",(function(e){var s=t.canvas.getBoundingClientRect(),r=e.clientX-s.left,i=e.clientY-s.top,n=s.width/t.Hs,a=s.height/t.qs,h=Math.floor(r/n),o=Math.floor(i/a);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(o,(h+1)%t.Hs,1),t.grid.set(o,h,1),t.grid.set((o+1)%t.qs,h,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(o,h,1),t.grid.set((o+1)%t.qs,h,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(o,h,1),t.grid.set(o,(h+1)%t.Hs,1)):(t.grid.set((o+1)%t.qs,(h+1)%t.Hs,1),t.grid.set((o-1+t.qs)%t.qs,(h+1)%t.Hs,1),t.grid.set((o-1+t.qs)%t.qs,(h-1+t.Hs)%t.Hs,1),t.grid.set((o+1)%t.qs,(h-1+t.Hs)%t.Hs,1))}))}(nt),function(t){var e={r:247,g:255,b:28,Ds:255},s={r:13,g:112,b:255,Ds:255},r={r:240,g:239,b:239,Ds:255},i={r:0,g:0,b:0,Ds:255},n={r:240,g:240,b:240,Ds:255},a={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),Ds:255},h={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random()),Ds:255};"yellow"==t.Mr?(t.backgroundColor=e,t.sr=i,t.rr=s,t.ir=r):"blue"==t.Mr?(t.backgroundColor=s,t.sr=r,t.rr=i,t.ir=e):"blue2"==t.Mr?(t.backgroundColor=s,t.sr=e,t.rr=i,t.ir=r):"grey"==t.Mr?(t.backgroundColor=r,t.sr=i,t.rr=s,t.ir=e):"grey2"==t.Mr?(t.backgroundColor=r,t.sr=e,t.rr=i,t.ir=s):"black"==t.Mr?(t.backgroundColor=i,t.sr=s,t.rr=e,t.ir=r):"black2"==t.Mr?(t.backgroundColor=i,t.sr=s,t.rr=r,t.ir=e):"blackTrace"==t.Mr?(t.backgroundColor=i,t.sr=r,t.rr=i,t.ir=r):"blackTrace2"==t.Mr?(t.backgroundColor=i,t.sr=i,t.rr=i,t.ir=r):"blackTrace3"==t.Mr?(t.backgroundColor=i,t.sr=i,t.rr=r,t.ir=r):"redBlue"==t.Mr?(t.backgroundColor=i,t.sr=n,t.rr={r:221,g:12,b:12,Ds:255},t.ir={r:29,g:29,b:189,Ds:255}):"turquoiseRed"==t.Mr?(t.backgroundColor=i,t.sr=n,t.rr={r:39,g:192,b:177,Ds:255},t.ir={r:252,g:53,b:47,Ds:255}):"magentaCyan"==t.Mr?(t.backgroundColor=i,t.sr=n,t.rr={r:156,g:36,b:150,Ds:255},t.ir={r:114,g:223,b:174,Ds:255}):"variable"==t.Mr?(t.backgroundColor=i,t.sr=n,t.rr=a,t.ir=h):"mouseAnimation"==t.Mr&&(t.backgroundColor={r:0,g:0,b:0,Ds:0},t.sr=s,t.rr=i,t.ir=e)}(nt),z(nt),function(t){X(t,!0)}(nt),rt(nt)}})();
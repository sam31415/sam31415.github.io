(()=>{"use strict";function t(t){return 0==t?function(t){return 0==t}:1==t?function(t){return t%4==0}:function(t){return!0}}var e=[1,2,3,4,5,6,7,8].map((t=>{return e=t,function(t){return t==e};var e})),a=[0,1,2,3,4,5,6,7,8].map((t=>function(t){return function(e){return e>t}}(t))),n=e.concat(a);function r(t,e,a){return 1==t||3==t?e=2:2==t?e=0:0==t&&2==a?e=1:0==t&&a>2&&(e=3),e}function o(t,e,a){var n=a[0];a[1],a[2];e=r(t%4,e,n);Math.floor(t/4);return n>1&&(e=(e+4)%8),e}function i(t,e,a){var n=a[0];a[1],a[2];e=r(t%4,e,n);Math.floor(t/4);return n>3?e=(e+4)%16:3==n?e=(e+12)%16:2==n&&(e=(e+8)%16),e}function u(t,e,a){var n=a[0],o=a[1];a[2];e=r(t%4,e,n);var i=Math.floor(t/4);return 0==i&&o>3?e=(e+4)%16:0==i&&3==n?e=(e+12)%16:0==i&&2==n&&(e=(e+8)%16),e}function c(t,e,a){var n=a[0],o=a[1];a[2];e=r(t%4,e,n);var i=Math.floor(t/4);return 0==i&&o<1?e=(e+4)%16:0==i&&3==n?e=(e+12)%16:0==i&&2==n&&(e=(e+8)%16),e}function l(t,e,a){var n=a[0],r=a[1];a[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&r<1||t%4==0&&1==n)&&(e=3):e=1,e}function s(t,e,a){var n=a[0],r=a[1];a[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&r<1||t%4==0&&2==n)&&(e=3):e=1,e}function h(t,e,a){var n=a[0],r=a[1];a[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&r<1||t%4==0&&3==n)&&(e=3):e=1,e}function f(t,e,a){var n=a[0],r=a[1],o=a[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&r<1||t%4==0&&3==o)&&(e=3):e=1,e}function M(t,e,a){var n=a[0],r=a[1],o=a[2];return 1==t?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&r<3||t%4==0&&3==o)&&(e=3):e=1,e}function d(t,e,a){var n=a[0],r=a[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&n>2||t%4==0&&3==r)&&(e=3):e=1,e}function m(t,e,a){var n=a[0],r=a[2];return 1==t?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&n>2||t%4==0&&1==r)&&(e=3):e=1,e}function v(t,e,a){var n=a[0],r=a[1];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&n>2||t%4==0&&3==r)&&(e=3):e=1,e}function g(t,e,a){var n=a[0],r=a[1];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0&&n>2||t%4==0&&1==r)&&(e=3):e=1,e}function b(t,e,a){var n=a[0];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0||t%4==3)&&n>2&&(e=3):e=1,e}function S(t,e,a){var n=a[0];return t%4==1?e=2:t%4==2||t%4==3?e=0:t%4!=0&&t%4!=3||2!=n?(t%4==0||t%4==3)&&n>2&&(e=3):e=1,e}function p(t,e,a){var n=a[0];return t%4==1||t%4==3?e=2:t%4==2?e=0:t%4==0&&2==n?e=1:t%4==0&&n>2&&(e=3),e}function y(t,e,a){var n=a[1];return(t%4==1||t%4==3)&&n<2?e=2:t%4!=1&&t%4!=3||2!=n&&3!=n?(t%4==1||t%4==3)&&n>5?e=2:t%4!=0&&t%4!=2||3!=n?t%4==2&&(e=0):e=3:e=1,e}function T(t,e,a){var n=a[0];return 2==t?e=0:1!=t&&3!=t||1!=n?(1==t||3==t)&&n>3?e=2:0!=t&&2!=t||4!=n||(e=1):e=1,e}function B(t,e,a){var n=a[0];return 2==t?e=0:1!=t&&3!=t||2!=n?(1==t||3==t)&&n>4?e=2:0!=t&&2!=t||4!=n||(e=1):e=1,e}function C(t){const[e,a]=t.split("S");return[e.slice(1).split("").map(Number),a.split("").map(Number)]}function R(t){const[e,a]=C(t);return function(t,n,r){return t%4==1||t%4==3?n=a.includes(r)?1:2:t%4!=0&&t%4!=2||e.includes(r)&&(n=3),n}}function w(t,e=null){const[a,n]=C(t);return null==e?function(t,e,r){return t%4==1||t%4==3?e=n.includes(r)?1:2:t%4==2?e=0:t%4==0&&a.includes(r)&&(e=3),e}:function(t,r,o){return o=o[e],t%4==1||t%4==3?r=n.includes(o)?1:2:t%4==2?r=0:t%4==0&&a.includes(o)&&(r=3),r}}var F=["B3S1234"];function k(t=!1,e=!1){var a,n,r,o,i;if(e){var u=Math.floor(Math.random()*F.length);a=F[u]}else n=V(1,8),r=V(1,8),o=n.join(""),i=r.join(""),a="B"+o+"S"+i;return t?[a,w(a)]:[a,R(a)]}function V(t,e){for(var a=[],n=t;n<=e;n++)Math.random()<.5&&a.push(n);return a}function G(t=4,e=0,a=!1){var o,i,u=r,c=Math.random()<.5;[o,i]=k(c,a);var l,s,h,f=Math.floor(8*Math.random()),M=4*(Math.floor(12*Math.random())+4),d=Math.random()<e,m=[];for(let e=0;e<t-1;e++)m.push((l=void 0,s=void 0,h=void 0,l=Math.floor(Math.random()*n.length),s=Math.floor(3*Math.random()),h=Math.floor(3*Math.random()),{t:n[l],o:s,i:h,u:`CI: ${l}, NT: ${s}, IO: ${h}`}));return{l:u,h:o,M:i,m:c,v:d,o:f,S:M,p:m}}function I(e,a,n=!1,r=!1,o=0,i=!1){if(Math.random()<e.T||r){var u=G(a,o,i),c=function(e){var a=e.l,n=e.M,r=e.o,o=e.S,i=e.v,u=e.p;return function(e,c,l){c=a(e%4,c,l[0]),i&&(c=c%o+n(Math.floor(e/4)%4,c,l[r])%4*4);for(let a=0;a<u.length;a++){const{t:n,o:r,i:o}=u[a];n(l[r])&&t(o)(e)&&(c=(c+4*(a+1))%16)}return c}}(u),l="Rule";n?(e.B=c,l="Auxiliary rule"):e.C=c;var s=u.p.map((t=>t.u)).join(" | ");console.log(l+" changed to:"),u.v&&console.log("  - "+u.h+" dead cells "+u.m+" ntype "+u.o+" modulo "+u.S),console.log("  - "+a+" colors "+s),e.T=0,e.R=u}}function A(e,a,n=!1,r=!1,o=0,i=!1){if(Math.random()<e.T||r){var u=G(a,o,i),c=function(e){var a=e.l,n=e.M,r=e.o,o=e.S,i=e.v,u=e.p;return function(e,c,l){c=a(e%4,c,l[0]),i&&(c=c%o+n(Math.floor(e/4)%4,c,l[r])%4*4);for(let e=0;e<u.length;e++){const{t:a,o:n,i:r}=u[e];a(l[n])&&t(r)(c)&&(c=(c+16*(e+1))%64)}return c}}(u),l="Rule";n?(e.B=c,l="Auxiliary rule"):e.C=c;var s=u.p.map((t=>t.u)).join(" | ");console.log(l+" changed to:"),u.v&&console.log("  - "+u.h+" ntype "+u.o+" modulo "+u.S),console.log("  - "+a+" colors "+s),e.T=0,e.R=u}}function N(e,a=!1,o=!1){if(Math.random()<e.T||o){var i=Math.floor(Math.random()*n.length),u=Math.floor(3*Math.random()),c=Math.floor(3*Math.random()),l=Math.floor(Math.random()*n.length),s=Math.floor(3*Math.random()),h=Math.floor(3*Math.random()),f=Math.floor(Math.random()*n.length),M=Math.floor(3*Math.random()),d=Math.floor(3*Math.random());i=Math.floor(Math.random()*n.length),l=Math.floor(Math.random()*n.length),f=Math.floor(Math.random()*n.length);var m=n[i],v=n[l],g=n[f],b=Math.floor(Math.random()*n.length),S=Math.floor(4*Math.random())+3,p=Math.floor(3*Math.random()),y=Math.floor(Math.random()*n.length),T=Math.floor(4*Math.random())+3,B=Math.floor(3*Math.random()),C=Math.floor(Math.random()*n.length),R=Math.floor(4*Math.random())+3,w=Math.floor(3*Math.random());b=Math.floor(Math.random()*n.length),y=Math.floor(Math.random()*n.length),C=Math.floor(Math.random()*n.length);var F=n[b],k=n[y],V=n[C],G=0;"TertiaryFancySpcshp"==e.F&&(G=1);var I=function(e,a,n,o,i,u,c,l,s,h,f,M,d,m,v,g,b,S,p=0){return function(M,v,S){return v=r(M%4,v,S[0]),0==p&&(v%=16),1==p&&(v=v%4+16*Math.floor(v/16)),e(S[a])&&t(n)(M)?v=(v+4)%16:o(S[i])&&t(u)(M)?v=(v+8)%16:c(S[l])&&t(s)(M)&&(v=(v+12)%16),v%=16,h(S[f])?v=(v+16)%64:d(S[m])?v=(v+32)%64:g(S[b])&&(v=(v+48)%64),v}}(m,u,c,v,s,h,g,M,d,F,S,0,k,T,0,V,R,0,G),A="Rule";a?(e.B=I,A="Auxiliary rule"):e.C=I,console.log(A+"changed to rule ("+i+"-"+u+"-"+c+", "+l+"-"+s+"-"+h+", "+f+"-"+M+"-"+d+", "+b+"-"+S+"-"+p+", "+y+"-"+T+"-"+B+", "+C+"-"+R+"-"+w+")"),e.T=0}}function X(t){let e={};for(let a in t){let n=Math.floor(3*Math.random())-1,r=t[a]+n;r=Math.max(0,Math.min(255,r)),e[a]=r}return e}function Y(t){var e={r:247,g:255,b:28},a={r:13,g:112,b:255},n={r:240,g:239,b:239},r={r:0,g:0,b:0},o={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random())},i={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random())};"yellow"==t.k?(t.backgroundColor=e,t.V=r,t.G=a,t.I=n):"blue"==t.k?(t.backgroundColor=a,t.V=n,t.G=r,t.I=e):"blue2"==t.k?(t.backgroundColor=a,t.V=e,t.G=r,t.I=n):"grey"==t.k?(t.backgroundColor=n,t.V=r,t.G=a,t.I=e):"grey2"==t.k?(t.backgroundColor=n,t.V=e,t.G=r,t.I=a):"black"==t.k?(t.backgroundColor=r,t.V=a,t.G=e,t.I=n):"black2"==t.k?(t.backgroundColor=r,t.V=a,t.G=n,t.I=e):"blackTrace"==t.k?(t.backgroundColor=r,t.V=n,t.G=r,t.I=n):"blackTrace2"==t.k?(t.backgroundColor=r,t.V=r,t.G=r,t.I=n):"blackTrace3"==t.k?(t.backgroundColor=r,t.V=r,t.G=n,t.I=n):"variable"==t.k&&(t.backgroundColor=r,t.V={r:240,g:240,b:240},t.G=o,t.I=i)}function x(t,e,a,n,r){let o=(e+n+t.A)%t.A,i=(a+r+t.N)%t.N,u=o,c=i;return(o-e-n>0||o-e-n<0)&&(c=(t.N-i-t.X+t.N)%t.N),(i-a-r>0||i-a-r<0)&&(u=(t.A-o-t.Y+t.A)%t.A),[u,c]}function O(t,e,a,n,r){let o=(e+n+t.A)%t.A,i=(a+r+t.N)%t.N,u=o,c=i;return(o-e-n>0||o-e-n<0)&&(c=(t.N-i-t.X+t.N)%t.N),i-a-r>0?u=(o+t.Y+t.A)%t.A:i-a-r<0&&(u=(o-t.Y+t.A)%t.A),[u,c]}function P(t,e,a,n,r){let o=(e+n+t.A)%t.A,i=(a+r+t.N)%t.N,u=o,c=i;return o-e-n>0?c=(i+t.X+t.N)%t.N:o-e-n<0&&(c=(i-t.X+t.N)%t.N),(i-a-r>0||i-a-r<0)&&(u=(t.A-o-t.Y+t.A)%t.A),[u,c]}function j(t,e,a,n,r){let o=(e+n+t.A)%t.A,i=(a+r+t.N)%t.N,u=o,c=i;return o-e-n>0?c=(i+t.X+t.N)%t.N:o-e-n<0&&(c=(i-t.X+t.N)%t.N),i-a-r>0?u=(o+t.Y+t.A)%t.A:i-a-r<0&&(u=(o-t.Y+t.A)%t.A),[u,c]}function E(t){t.O&&t.P?t.j=x:t.O?t.j=O:t.P?t.j=P:t.j=j}function H(t){if("Conway"==t.F)t.C=y;else if("BB"==t.F)t.C=S;else if("BBMod"==t.F)t.C=p;else if("BBTrace"==t.F)t.C=b;else if("BBTrace2"==t.F)t.C=g;else if("BBTrace3"==t.F)t.C=v;else if("BBTrace4"==t.F)t.C=m;else if("BBTrace5"==t.F)t.C=d;else if("BBTrace6"==t.F)t.C=M;else if("BBTrace7"==t.F)t.C=f;else if("BBTrace8"==t.F)t.C=h;else if("BBTrace9"==t.F)t.C=s;else if("BBTrace10"==t.F)t.C=l;else if("BBTraceSecondary1"==t.F)t.C=c;else if("BBTraceSecondary2"==t.F)t.C=u;else if("BBTraceSecondary3"==t.F)t.C=i;else if("Variable2Colors"==t.F)I(t,2,!1,!0);else if("Variable3Colors"==t.F)I(t,3,!1,!0);else if("Variable4Colors"==t.F)I(t,4,!1,!0);else if("Variable"==t.F){I(t,Math.floor(Math.random()*t.H)+2,!1,!0)}else if("VariableSecAutomata"==t.F){I(t,Math.floor(Math.random()*t.H)+2,!1,!0,1)}else if("TertiaryAutomata"==t.F){A(t,Math.floor(Math.random()*t.H)+2,!1,!0,1)}else if("TertiaryGood"==t.F){A(t,Math.floor(Math.random()*t.H)+2,!1,!0,.5,!0)}else if("Tertiary4Colors"==t.F||"TertiaryFancySpcshp"==t.F)N(t,!1,!0);else if("VariableGR"==t.F){I(t,Math.floor(Math.random()*t.H)+2,!1,!0),I(t,Math.floor(Math.random()*t.H)+2,!0,!0)}else"Stationary1"==t.F?t.C=T:"Stationary2"==t.F?t.C=B:"TestSecondary"==t.F&&(t.C=o)}function L(t,e){if(t.L){var a={...t.R};delete a.M,delete a.p;var n={...a,event:e},r=Object.keys(n).join(",")+"\n";r+=Object.values(n).join(",");var o=new Blob([r],{type:"text/csv"}),i=URL.createObjectURL(o),u=document.createElement("a");u.href=i,u.download="dataAutomata.csv",u.click()}}class W{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(t*e),this.rows=new Array(e)}get(t,e){return this.data[t*this.width+e]}set(t,e,a){this.data[t*this.width+e]=a}}let $={W:{$:.1,mask:[[1,1],[1,1]]},q:{$:1,mask:[[1,0,1],[0,0,0],[1,0,1]]},U:{$:40,mask:null}},q=Object.keys($).map((t=>$[t].mask)),U=Object.values($).reduce(((t,e)=>t+e.$),0),D=Object.keys($).map((t=>$[t].$/U)).reduce(((t,e,a)=>[...t,e+(t[a-1]||0)]),[]);function z(t,e,a,n,r){for(var o=function(t){var e=Math.exp(-t),a=1,n=0;do{n++,a*=Math.random()}while(a>e);return n-1}(10**t.D),i=0;i<o;i++){e=Math.floor(Math.random()*t.A),a=Math.floor(Math.random()*t.N);var u=Math.random();for(let o=0;o<q.length;o++)if(u<D[o]){J(n,t,q[o],e,a,r);break}}return{J:e,K:a}}function J(t,e,a,n,r,o){null===a&&(a=function(){let t=Math.floor(10*Math.random())+1,e=Math.floor(10*Math.random())+1,a=[];for(let n=0;n<t;n++){a.push([]);for(let t=0;t<e;t++)a[n].push(Math.floor(4*Math.random()))}return a}());let i=a.length,u=a[0].length;for(let c=0;c<i;c++)for(let l=0;l<u;l++){let s=o(e,n,r,c-Math.floor(i/2),l-Math.floor(u/2));t.set(s[0],s[1],a[c][l])}}function K(t){!function(t){let e=t.Z,a=t._;for(var n=0,r=0;r<t.A;r++)for(var o=0;o<t.N;o++){if(0==t.tt.get(r,o))continue;if(n+=1,2==t.et)var i=Math.floor(t.grid.get(r,o)/4)%4;else i=3==t.et?Math.floor(t.grid.get(r,o)/16)%4:t.grid.get(r,o)%4;let e;if(0==i)e=t.backgroundColor;else if(1==i)e=t.V;else if(2==i)e=t.G;else{if(3!=i)continue;e=t.I}let u=4*(r*t.N+o);a.data[u+0]=e.r,a.data[u+1]=e.g,a.data[u+2]=e.b,a.data[u+3]=255}if(t.nt=1/300*n+299/300*t.nt,t.nt>.2*t.A*t.N){t.rt=!0;var u=t.nt/(t.A*t.N);console.log("Changing rule because suspected oscillation (running proportion of cells changed: "+u.toFixed(1)+")."),t.nt=15,L(t,"oscillation")}t.nt<3&&(t.rt=!0,console.log("Changing rule because not enough cells changed ("+t.nt+")."),t.nt=20,L(t,"blackout")),e.putImageData(a,t.ot,t.it)}(t),function(t){for(var e=new W(t.N,t.A),a=0;a<t.A;a++)for(var n=0;n<t.N;n++){for(var r=0,o=0,i=0,u=0,c=0,l=0,s=0,h=-1;h<=1;h++)for(var f=-1;f<=1;f++){if(0==h&&0==f)continue;let e=t.j(t,a,n,h,f),M=e[0],d=e[1];t.grid.get(M,d)%4==1?(r+=1,o+=1):t.grid.get(M,d)%4==2?i+=1:t.grid.get(M,d)%4==3&&(o+=1),0==Math.floor(t.grid.get(M,d)%16/4)?u+=1:1==Math.floor(t.grid.get(M,d)%16/4)?c+=1:2==Math.floor(t.grid.get(M,d)%16/4)?l+=1:3==Math.floor(t.grid.get(M,d)%16/4)&&(s+=1)}let m=t.grid.get(a,n);var M=m,d=[r,o,i,u,c,l,s,c+s];M="VariableGR"!=t.F||0==t.mask.get(a,n)?t.C(m,M,d):t.B(m,M,d),1==t.et?M!=m?t.tt.set(a,n,1):t.tt.set(a,n,0):2==t.et?Math.floor(M/4)%4!=Math.floor(m/4)%4?t.tt.set(a,n,1):t.tt.set(a,n,0):3==t.et&&(Math.floor(M/16)!=Math.floor(m/16)?t.tt.set(a,n,1):t.tt.set(a,n,0)),e.set(a,n,M)}if(t.ut)var{J:a,K:n}=z(t,a,n,e,t.j);t.grid=e}(t),function(t){"Variable2Colors"==t.F?I(t,2,!1,t.rt):"Variable3Colors"==t.F?I(t,3,!1,t.rt):"Variable4Colors"==t.F?I(t,4,!1,t.rt):"Tertiary4Colors"==t.F||"TertiaryFancySpcshp"==t.F?N(t,t.rt):"VariableGR"==t.F?(I(t,Math.floor(Math.random()*t.H)+2,!1,t.rt),I(t,Math.floor(Math.random()*t.H)+2,!0,t.rt)):"Variable"==t.F?I(t,Math.floor(Math.random()*t.H)+2,!1,t.rt):"VariableSecAutomata"==t.F?I(t,Math.floor(Math.random()*t.H)+2,!1,t.rt,1):"TertiaryAutomata"==t.F?A(t,Math.floor(Math.random()*t.H)+2,!1,t.rt,1):"TertiaryGood"==t.F&&A(t,Math.floor(Math.random()*t.H)+2,!1,t.rt,.5,!0);t.T+=1/t.ct**2,t.T>1&&(t.T=1),t.rt=!1}(t),t.F.includes("Variable")&&function(t){Math.random()<1e-4&&(t.X=Math.floor(Math.random()*t.N),console.log("Periodicity shift X: "+t.X)),Math.random()<1e-4&&(t.Y=Math.floor(Math.random()*t.A),console.log("Periodicity shift Y: "+t.Y)),Math.random()<1e-4&&(t.O=!t.O,E(t),console.log("Flip X: "+t.O)),Math.random()<1e-4&&(t.P=!t.P,E(t),console.log("Flip Y: "+t.P))}(t),"variable"==t.k&&function(t){Math.random()<1&&(t.I=X(t.I),t.G=X(t.G))}(t),setTimeout((function(){requestAnimationFrame((()=>K(t)))}),t.timeout)}function Q(t,e){return console.log("Attempting to load image"),(a="grLogoLarge.png",console.log("Loading image:",a),new Promise(((t,e)=>{const n=new Image;n.onload=()=>{console.log("Image loaded:",a);const e=document.createElement("canvas");e.width=n.width,e.height=n.height;const r=e.getContext("2d");r.drawImage(n,0,0,n.width,n.height);const o=r.getImageData(0,0,e.width,e.height).data,i=[];for(let t=0;t<n.height;t++){const e=[];for(let a=0;a<n.width;a++){const r=4*(t*n.width+a),i=(o[r]+o[r+1]+o[r+2])/3;e.push(i>128?1:0)}i.push(e)}t(i)},n.onerror=()=>{console.error("Error loading image:",a),e(new Error("Error loading image"))},n.src=a}))).then((e=>{new W(t.N,t.A);const a=new W(t.N,t.A),n=e[0].length/t.N,r=e.length/t.A,o=Math.max(n,r),i=Math.floor((t.N-e[0].length/o)/2),u=Math.floor((t.A-e.length/o)/2);for(let n=0;n<t.A;n++)for(let r=0;r<t.N;r++){if(n<u||(n-u)*o>=e.length){a.set(n,r,1);continue}let t=Math.floor((r-i)*o);0===e[Math.floor((n-u)*o)][t]?a.set(n,r,0):a.set(n,r,1)}t.mask=a})).catch((e=>{console.log("Image loading failed, not using a mask."),console.error("Error loading image:",e),t.mask=new W(t.N,t.A)}));var a}async function Z(t,e){return await Q(t),function(t,e=64){return Promise.resolve().then((()=>{t.grid=new W(t.N,t.A),t.tt=new W(t.N,t.A);for(var a=0;a<t.A;a++)for(var n=0;n<t.N;n++)if("gr"!=t.lt||1!==t.mask.get(a,n)){for(var r=Math.random(),o=0;o<e;o++)if(r<(o+1)/(e+1)){t.grid.set(a,n,o);break}t.tt.set(a,n,1)}else t.grid.set(a,n,0)}))}(t)}function _(t){return t.includes("Secondary")||t.includes("Variable")?2:t.includes("Tertiary")?3:1}function tt(t){document.getElementById("submitButton").addEventListener("click",(function(){var t,e,a,n,r,o,i,u,c,l,s;t=document.getElementById("userGridHeight").value,e=document.getElementById("userGridWidth").value,a=document.getElementById("userTimeout").value,n=document.getElementById("userXShift").value,r=document.getElementById("userYShift").value,o=document.getElementById("userFlipX").checked,i=document.getElementById("userFlipY").checked,u=document.getElementById("userColorPalette").value,c=document.getElementById("randomnessCheckbox").checked,l=document.getElementById("randomnessSlider").value,s=document.getElementById("userRule").value,localStorage.setItem("userGridHeight",t),localStorage.setItem("userGridWidth",e),localStorage.setItem("userTimeout",a),localStorage.setItem("userXShift",n),localStorage.setItem("userYShift",r),localStorage.setItem("userFlipX",o),localStorage.setItem("userFlipY",i),localStorage.setItem("userColorPalette",u),localStorage.setItem("userRandomnessOn",c),localStorage.setItem("userRandomnessAmount",l),localStorage.setItem("userRule",s),location.reload()}))}function et(t){document.getElementById("randomnessSlider").addEventListener("input",(function(){!function(t,e){t.D=e,document.getElementById("randomnessAmountValue").textContent=e}(t,this.value)}))}console.log("Loading main.js");var at=document.getElementById("gameCanvas"),nt=at.getContext("2d"),rt=128,ot=128,it=20,ut=!0,ct=-1,lt=0,st=0,ht=!1,ft=!1,Mt="black2",dt="VariableGR",mt="random",vt=2,gt=6,bt=new class{constructor(t,e,a=200,n=200,r=20,o=!0,i=-2,u=0,c=0,l=!1,s=!1,h="black2",f="VariableGR",M="random",d=2,m=6,v=5e3){this.A=a,this.N=n,this.ot=0,this.it=0,this.timeout=r,this.grid=null,this.tt=null,this._=null,this.canvas=t,this.Z=e,this.ut=o,this.D=i,this.X=u,this.Y=c,this.O=l,this.P=s,this.k=h,this.F=f,this.lt=M,this.et=d,this.H=m,this.C=null,this.B=null,this.j=null,this.mask=null,this.ct=v,this.T=1/this.ct,this.canvas.width=this.N,this.canvas.height=this.A,this._=e.createImageData(t.width,t.height),this.rt=!0,this.nt=0,this.L=!1}}(at,nt,rt,ot,it,ut,ct,lt,st,ht,ft,Mt,dt,mt,vt,gt);window.onload=function(){!function(t){document.getElementById("randomnessCheckbox").addEventListener("change",(function(){t.ut=this.checked}))}(bt),function(t){document.getElementById("fullscreenButton").addEventListener("click",(function(){t.canvas.requestFullscreen?t.canvas.requestFullscreen():t.canvas.mozRequestFullScreen?t.canvas.mozRequestFullScreen():t.canvas.webkitRequestFullscreen?t.canvas.webkitRequestFullscreen():t.canvas.msRequestFullscreen&&t.canvas.msRequestFullscreen()}))}(bt),function(t){t.canvas.addEventListener("mousemove",(function(e){if(e.shiftKey){var a=t.canvas.getBoundingClientRect(),n=e.clientX-a.left,r=e.clientY-a.top,o=a.width/t.N,i=a.height/t.A,u=Math.floor(n/o),c=Math.floor(r/i);t.grid.set(c,u,1)}}))}(bt),function(t){t.canvas.addEventListener("mousedown",(function(e){var a=t.canvas.getBoundingClientRect(),n=e.clientX-a.left,r=e.clientY-a.top,o=a.width/t.N,i=a.height/t.A,u=Math.floor(n/o),c=Math.floor(r/i);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(c,(u+1)%t.N,1),t.grid.set(c,u,1),t.grid.set((c+1)%t.A,u,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(c,u,1),t.grid.set((c+1)%t.A,u,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(c,u,1),t.grid.set(c,(u+1)%t.N,1)):(t.grid.set((c+1)%t.A,(u+1)%t.N,1),t.grid.set((c-1+t.A)%t.A,(u+1)%t.N,1),t.grid.set((c-1+t.A)%t.A,(u-1+t.N)%t.N,1),t.grid.set((c+1)%t.A,(u-1+t.N)%t.N,1))}))}(bt),tt(),et(bt),function(t){document.getElementById("userXShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.X=e,E(t)})),document.getElementById("userYShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.Y=e,E(t)})),document.getElementById("userFlipX").addEventListener("change",(function(){t.O=this.checked,E(t)})),document.getElementById("userFlipY").addEventListener("change",(function(){t.P=this.checked,E(t)}))}(bt),function(t){document.getElementById("userTimeout").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.timeout=e}))}(bt),function(t){document.getElementById("userColorPalette").addEventListener("change",(function(){t.k=this.value,Y(t)}))}(bt),function(t){document.getElementById("userRule").addEventListener("change",(async function(){t.F=this.value,2==t.et^(t.F.includes("Secondary")||t.F.includes("Variable"))&&await Z(t),t.et=_(t.F),H(t)}))}(bt),function(t){null!==localStorage.getItem("userGridHeight")?(t.A=parseInt(localStorage.getItem("userGridHeight")),t.N=parseInt(localStorage.getItem("userGridWidth")),t.A>1e3&&(t.A=1e3),t.N>1e3&&(t.N=1e3),t._=t.Z.createImageData(t.N,t.A),t.timeout=parseInt(localStorage.getItem("userTimeout")),t.X=parseInt(localStorage.getItem("userXShift")),isNaN(t.X)&&(t.X=0),isNaN(t.Y)&&(t.Y=0),t.Y=parseInt(localStorage.getItem("userYShift")),t.O="true"===localStorage.getItem("userFlipX"),t.P="true"===localStorage.getItem("userFlipY"),t.k=localStorage.getItem("userColorPalette"),t.ut="true"===localStorage.getItem("userRandomnessOn"),t.D=parseFloat(localStorage.getItem("userRandomnessAmount")),t.F=localStorage.getItem("userRule"),t.et=_(t.F),console.log("Retrieved value from previous session: ...")):console.log("No value in localStorage"),document.getElementById("userGridHeight").value=t.A,document.getElementById("userGridWidth").value=t.N,document.getElementById("userTimeout").value=t.timeout,document.getElementById("userXShift").value=t.X,document.getElementById("userYShift").value=t.Y,document.getElementById("userFlipX").checked=t.O,document.getElementById("userFlipY").checked=t.P,document.getElementById("userColorPalette").value=t.k,document.getElementById("randomnessCheckbox").checked=t.ut,document.getElementById("randomnessSlider").value=t.D,document.getElementById("userRule").value=t.F,t.canvas.width=Math.max(t.A,t.N),t.canvas.height=Math.max(t.A,t.N),t.ot=0,t.it=0;var e=document.getElementById("gameCanvas");if(t.A>t.N){var a=Math.floor(t.N/t.A*800);e.style.width=a+"px",e.style.height="800px",e.width=a*t.A/800,e.height=t.A}else{var n=Math.floor(t.A/t.N*800);e.style.width="800px",e.style.height=n+"px",e.width=t.N,e.height=n*t.N/800}}(bt),Y(bt),E(bt),H(bt),Z(bt).then((()=>{K(bt)})).catch((t=>{console.error("Error initialising the grid: ",t)}))}})();
(()=>{"use strict";function t(t){return 0==t?function(t){return 0==t}:1==t?function(t){return t%4==0}:function(t){return!0}}var e=[1,2,3,4,5,6,7,8].map((t=>{return e=t,function(t){return t==e};var e})),n=[0,1,2,3,4,5,6,7,8].map((t=>function(t){return function(e){return e>t}}(t))),a=e.concat(n);function r(t,e,n){return 1==t||3==t?e=2:2==t?e=0:0==t&&2==n?e=1:0==t&&n>2&&(e=3),e}function o(t,e,n){var a=n[0];n[1],n[2];e=r(t%4,e,a);Math.floor(t/4);return a>1&&(e=(e+4)%8),e}function i(t,e,n){var a=n[0];n[1],n[2];e=r(t%4,e,a);Math.floor(t/4);return a>3?e=(e+4)%16:3==a?e=(e+12)%16:2==a&&(e=(e+8)%16),e}function u(t,e,n){var a=n[0],o=n[1];n[2];e=r(t%4,e,a);var i=Math.floor(t/4);return 0==i&&o>3?e=(e+4)%16:0==i&&3==a?e=(e+12)%16:0==i&&2==a&&(e=(e+8)%16),e}function c(t,e,n){var a=n[0],o=n[1];n[2];e=r(t%4,e,a);var i=Math.floor(t/4);return 0==i&&o<1?e=(e+4)%16:0==i&&3==a?e=(e+12)%16:0==i&&2==a&&(e=(e+8)%16),e}function l(t,e,n){var a=n[0],r=n[1];n[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&r<1||t%4==0&&1==a)&&(e=3):e=1,e}function s(t,e,n){var a=n[0],r=n[1];n[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&r<1||t%4==0&&2==a)&&(e=3):e=1,e}function h(t,e,n){var a=n[0],r=n[1];n[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&r<1||t%4==0&&3==a)&&(e=3):e=1,e}function f(t,e,n){var a=n[0],r=n[1],o=n[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&r<1||t%4==0&&3==o)&&(e=3):e=1,e}function M(t,e,n){var a=n[0],r=n[1],o=n[2];return 1==t?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&r<3||t%4==0&&3==o)&&(e=3):e=1,e}function d(t,e,n){var a=n[0],r=n[2];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&a>2||t%4==0&&3==r)&&(e=3):e=1,e}function m(t,e,n){var a=n[0],r=n[2];return 1==t?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&a>2||t%4==0&&1==r)&&(e=3):e=1,e}function v(t,e,n){var a=n[0],r=n[1];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&a>2||t%4==0&&3==r)&&(e=3):e=1,e}function g(t,e,n){var a=n[0],r=n[1];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0&&a>2||t%4==0&&1==r)&&(e=3):e=1,e}function b(t,e,n){var a=n[0];return t%4==1?e=2:t%4==2?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0||t%4==3)&&a>2&&(e=3):e=1,e}function S(t,e,n){var a=n[0];return t%4==1?e=2:t%4==2||t%4==3?e=0:t%4!=0&&t%4!=3||2!=a?(t%4==0||t%4==3)&&a>2&&(e=3):e=1,e}function p(t,e,n){var a=n[0];return t%4==1||t%4==3?e=2:t%4==2?e=0:t%4==0&&2==a?e=1:t%4==0&&a>2&&(e=3),e}function y(t,e,n){var a=n[1];return(t%4==1||t%4==3)&&a<2?e=2:t%4!=1&&t%4!=3||2!=a&&3!=a?(t%4==1||t%4==3)&&a>5?e=2:t%4!=0&&t%4!=2||3!=a?t%4==2&&(e=0):e=3:e=1,e}function T(t,e,n){var a=n[0];return 2==t?e=0:1!=t&&3!=t||1!=a?(1==t||3==t)&&a>3?e=2:0!=t&&2!=t||4!=a||(e=1):e=1,e}function B(t,e,n){var a=n[0];return 2==t?e=0:1!=t&&3!=t||2!=a?(1==t||3==t)&&a>4?e=2:0!=t&&2!=t||4!=a||(e=1):e=1,e}function k(t){const[e,n]=t.split("S");return[e.slice(1).split("").map(Number),n.split("").map(Number)]}function C(t){const[e,n]=k(t);return function(t,a,r){return t%4==1||t%4==3?a=n.includes(r)?1:2:t%4!=0&&t%4!=2||e.includes(r)&&(a=3),a}}function R(t,e=null){const[n,a]=k(t);return null==e?function(t,e,r){return t%4==1||t%4==3?e=a.includes(r)?1:2:t%4==2?e=0:t%4==0&&n.includes(r)&&(e=3),e}:function(t,r,o){return o=o[e],t%4==1||t%4==3?r=a.includes(o)?1:2:t%4==2?r=0:t%4==0&&n.includes(o)&&(r=3),r}}var w=["B3S1234"];function F(t=!1,e=!1){var n,a,r,o,i;if(e){var u=Math.floor(Math.random()*w.length);n=w[u]}else a=V(1,8),r=V(1,8),o=a.join(""),i=r.join(""),n="B"+o+"S"+i;return t?[n,R(n)]:[n,C(n)]}function V(t,e){for(var n=[],a=t;a<=e;a++)Math.random()<.5&&n.push(a);return n}function G(t=4,e=0,n=!1){var o,i,u=r,c=Math.random()<.5;[o,i]=F(c,n);var l,s,h,f=Math.floor(8*Math.random()),M=4*(Math.floor(12*Math.random())+4),d=Math.random()<e,m=[];for(let e=0;e<t-1;e++)m.push((l=void 0,s=void 0,h=void 0,l=Math.floor(Math.random()*a.length),s=Math.floor(3*Math.random()),h=Math.floor(3*Math.random()),{t:a[l],o:s,i:h,u:`CI: ${l}, NT: ${s}, IO: ${h}`}));return{l:u,h:o,M:i,m:c,v:d,o:f,S:M,p:m}}function I(e,n,a=!1,r=!1,o=0,i=!1){if(Math.random()<e.T||r){var u=G(n,o,i),c=function(e){var n=e.l,a=e.M,r=e.o,o=e.S,i=e.v,u=e.p;return function(e,c,l){c=n(e%4,c,l[0]),i&&(c=c%o+a(Math.floor(e/4)%4,c,l[r])%4*4);for(let n=0;n<u.length;n++){const{t:a,o:r,i:o}=u[n];a(l[r])&&t(o)(e)&&(c=(c+4*(n+1))%16)}return c}}(u),l="Rule";a?(e.B=c,l="Auxiliary rule"):e.k=c;var s=u.p.map((t=>t.u)).join(" | ");console.log(l+" changed to:"),u.v&&console.log("  - "+u.h+" dead cells "+u.m+" ntype "+u.o+" modulo "+u.S),console.log("  - "+n+" colors "+s),e.T=0,e.C=u}}function A(e,n,a=!1,r=!1,o=0,i=!1){if(Math.random()<e.T||r){var u=G(n,o,i),c=function(e){var n=e.l,a=e.M,r=e.o,o=e.S,i=e.v,u=e.p;return function(e,c,l){c=n(e%4,c,l[0]),i&&(c=c%o+a(Math.floor(e/4)%4,c,l[r])%4*4);for(let e=0;e<u.length;e++){const{t:n,o:a,i:r}=u[e];n(l[a])&&t(r)(c)&&(c=(c+16*(e+1))%64)}return c}}(u),l="Rule";a?(e.B=c,l="Auxiliary rule"):e.k=c;var s=u.p.map((t=>t.u)).join(" | ");console.log(l+" changed to:"),u.v&&console.log("  - "+u.h+" ntype "+u.o+" modulo "+u.S),console.log("  - "+n+" colors "+s),e.T=0,e.C=u}}function N(e,n=!1,o=!1){if(Math.random()<e.T||o){var i=Math.floor(Math.random()*a.length),u=Math.floor(3*Math.random()),c=Math.floor(3*Math.random()),l=Math.floor(Math.random()*a.length),s=Math.floor(3*Math.random()),h=Math.floor(3*Math.random()),f=Math.floor(Math.random()*a.length),M=Math.floor(3*Math.random()),d=Math.floor(3*Math.random());i=Math.floor(Math.random()*a.length),l=Math.floor(Math.random()*a.length),f=Math.floor(Math.random()*a.length);var m=a[i],v=a[l],g=a[f],b=Math.floor(Math.random()*a.length),S=Math.floor(4*Math.random())+3,p=Math.floor(3*Math.random()),y=Math.floor(Math.random()*a.length),T=Math.floor(4*Math.random())+3,B=Math.floor(3*Math.random()),k=Math.floor(Math.random()*a.length),C=Math.floor(4*Math.random())+3,R=Math.floor(3*Math.random());b=Math.floor(Math.random()*a.length),y=Math.floor(Math.random()*a.length),k=Math.floor(Math.random()*a.length);var w=a[b],F=a[y],V=a[k],G=0;"TertiaryFancySpcshp"==e.R&&(G=1);var I=function(e,n,a,o,i,u,c,l,s,h,f,M,d,m,v,g,b,S,p=0){return function(M,v,S){return v=r(M%4,v,S[0]),0==p&&(v%=16),1==p&&(v=v%4+16*Math.floor(v/16)),e(S[n])&&t(a)(M)?v=(v+4)%16:o(S[i])&&t(u)(M)?v=(v+8)%16:c(S[l])&&t(s)(M)&&(v=(v+12)%16),v%=16,h(S[f])?v=(v+16)%64:d(S[m])?v=(v+32)%64:g(S[b])&&(v=(v+48)%64),v}}(m,u,c,v,s,h,g,M,d,w,S,0,F,T,0,V,C,0,G),A="Rule";n?(e.B=I,A="Auxiliary rule"):e.k=I,console.log(A+"changed to rule ("+i+"-"+u+"-"+c+", "+l+"-"+s+"-"+h+", "+f+"-"+M+"-"+d+", "+b+"-"+S+"-"+p+", "+y+"-"+T+"-"+B+", "+k+"-"+C+"-"+R+")"),e.T=0}}function x(t){let e={};for(let n in t){let a=Math.floor(3*Math.random())-1,r=t[n]+a;r=Math.max(0,Math.min(255,r)),e[n]=r}return e}function X(t){var e={r:247,g:255,b:28},n={r:13,g:112,b:255},a={r:240,g:239,b:239},r={r:0,g:0,b:0},o={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random())},i={r:Math.floor(256*Math.random()),g:Math.floor(256*Math.random()),b:Math.floor(256*Math.random())};"yellow"==t.F?(t.backgroundColor=e,t.V=r,t.G=n,t.I=a):"blue"==t.F?(t.backgroundColor=n,t.V=a,t.G=r,t.I=e):"blue2"==t.F?(t.backgroundColor=n,t.V=e,t.G=r,t.I=a):"grey"==t.F?(t.backgroundColor=a,t.V=r,t.G=n,t.I=e):"grey2"==t.F?(t.backgroundColor=a,t.V=e,t.G=r,t.I=n):"black"==t.F?(t.backgroundColor=r,t.V=n,t.G=e,t.I=a):"black2"==t.F?(t.backgroundColor=r,t.V=n,t.G=a,t.I=e):"blackTrace"==t.F?(t.backgroundColor=r,t.V=a,t.G=r,t.I=a):"blackTrace2"==t.F?(t.backgroundColor=r,t.V=r,t.G=r,t.I=a):"blackTrace3"==t.F?(t.backgroundColor=r,t.V=r,t.G=a,t.I=a):"variable"==t.F&&(t.backgroundColor=r,t.V={r:240,g:240,b:240},t.G=o,t.I=i)}function Y(t,e,n,a,r){let o=(e+a+t.A)%t.A,i=(n+r+t.N)%t.N,u=o,c=i;return(o-e-a>0||o-e-a<0)&&(c=(t.N-i-t.X+t.N)%t.N),(i-n-r>0||i-n-r<0)&&(u=(t.A-o-t.Y+t.A)%t.A),[u,c]}function O(t,e,n,a,r){let o=(e+a+t.A)%t.A,i=(n+r+t.N)%t.N,u=o,c=i;return(o-e-a>0||o-e-a<0)&&(c=(t.N-i-t.X+t.N)%t.N),i-n-r>0?u=(o+t.Y+t.A)%t.A:i-n-r<0&&(u=(o-t.Y+t.A)%t.A),[u,c]}function P(t,e,n,a,r){let o=(e+a+t.A)%t.A,i=(n+r+t.N)%t.N,u=o,c=i;return o-e-a>0?c=(i+t.X+t.N)%t.N:o-e-a<0&&(c=(i-t.X+t.N)%t.N),(i-n-r>0||i-n-r<0)&&(u=(t.A-o-t.Y+t.A)%t.A),[u,c]}function j(t,e,n,a,r){let o=(e+a+t.A)%t.A,i=(n+r+t.N)%t.N,u=o,c=i;return o-e-a>0?c=(i+t.X+t.N)%t.N:o-e-a<0&&(c=(i-t.X+t.N)%t.N),i-n-r>0?u=(o+t.Y+t.A)%t.A:i-n-r<0&&(u=(o-t.Y+t.A)%t.A),[u,c]}function E(t){t.O&&t.P?t.j=Y:t.O?t.j=O:t.P?t.j=P:t.j=j}function H(t){if("Conway"==t.R)t.k=y;else if("BB"==t.R)t.k=S;else if("BBMod"==t.R)t.k=p;else if("BBTrace"==t.R)t.k=b;else if("BBTrace2"==t.R)t.k=g;else if("BBTrace3"==t.R)t.k=v;else if("BBTrace4"==t.R)t.k=m;else if("BBTrace5"==t.R)t.k=d;else if("BBTrace6"==t.R)t.k=M;else if("BBTrace7"==t.R)t.k=f;else if("BBTrace8"==t.R)t.k=h;else if("BBTrace9"==t.R)t.k=s;else if("BBTrace10"==t.R)t.k=l;else if("BBTraceSecondary1"==t.R)t.k=c;else if("BBTraceSecondary2"==t.R)t.k=u;else if("BBTraceSecondary3"==t.R)t.k=i;else if("Variable2Colors"==t.R)I(t,2,!1,!0);else if("Variable3Colors"==t.R)I(t,3,!1,!0);else if("Variable4Colors"==t.R)I(t,4,!1,!0);else if("Variable"==t.R){I(t,Math.floor(Math.random()*t.H)+2,!1,!0)}else if("VariableSecAutomata"==t.R){I(t,Math.floor(Math.random()*t.H)+2,!1,!0,1)}else if("TertiaryAutomata"==t.R){A(t,Math.floor(Math.random()*t.H)+2,!1,!0,1)}else if("TertiaryGood"==t.R){A(t,Math.floor(Math.random()*t.H)+2,!1,!0,.5,!0)}else if("Tertiary4Colors"==t.R||"TertiaryFancySpcshp"==t.R)N(t,!1,!0);else if("VariableGR"==t.R){I(t,Math.floor(Math.random()*t.H)+2,!1,!0),I(t,Math.floor(Math.random()*t.H)+2,!0,!0)}else"Stationary1"==t.R?t.k=T:"Stationary2"==t.R?t.k=B:"TestSecondary"==t.R&&(t.k=o)}function L(t,e){if(t.L){var n={...t.C};delete n.M,delete n.p;var a={...n,event:e},r=Object.keys(a).join(",")+"\n";r+=Object.values(a).join(",");var o=new Blob([r],{type:"text/csv"}),i=URL.createObjectURL(o),u=document.createElement("a");u.href=i,u.download="dataAutomata.csv",u.click()}}class W{constructor(t,e){this.width=t,this.height=e,this.data=new Uint8Array(t*e),this.rows=new Array(e)}get(t,e){return this.data[t*this.width+e]}set(t,e,n){this.data[t*this.width+e]=n}}let $={W:{$:.1,mask:[[1,1],[1,1]]},q:{$:1,mask:[[1,0,1],[0,0,0],[1,0,1]]},U:{$:40,mask:null}},q=Object.keys($).map((t=>$[t].mask)),U=Object.values($).reduce(((t,e)=>t+e.$),0),D=Object.keys($).map((t=>$[t].$/U)).reduce(((t,e,n)=>[...t,e+(t[n-1]||0)]),[]);function z(t,e,n,a,r){for(var o=function(t){var e=Math.exp(-t),n=1,a=0;do{a++,n*=Math.random()}while(n>e);return a-1}(10**t.D),i=0;i<o;i++){e=Math.floor(Math.random()*t.A),n=Math.floor(Math.random()*t.N);var u=Math.random();for(let o=0;o<q.length;o++)if(u<D[o]){J(a,t,q[o],e,n,r);break}}return{J:e,K:n}}function J(t,e,n,a,r,o){null===n&&(n=function(){let t=Math.floor(10*Math.random())+1,e=Math.floor(10*Math.random())+1,n=[];for(let a=0;a<t;a++){n.push([]);for(let t=0;t<e;t++)n[a].push(Math.floor(4*Math.random()))}return n}());let i=n.length,u=n[0].length;for(let c=0;c<i;c++)for(let l=0;l<u;l++){let s=o(e,a,r,c-Math.floor(i/2),l-Math.floor(u/2));t.set(s[0],s[1],n[c][l])}}function K(t){!function(t){let e=t.Z,n=t._;for(var a=0,r=0;r<t.A;r++)for(var o=0;o<t.N;o++){if(0==t.tt.get(r,o))continue;if(a+=1,2==t.et)var i=Math.floor(t.grid.get(r,o)/4)%4;else i=3==t.et?Math.floor(t.grid.get(r,o)/16)%4:t.grid.get(r,o)%4;let e;if(0==i)e=t.backgroundColor;else if(1==i)e=t.V;else if(2==i)e=t.G;else{if(3!=i)continue;e=t.I}let u=4*(r*t.N+o);n.data[u+0]=e.r,n.data[u+1]=e.g,n.data[u+2]=e.b,n.data[u+3]=255}if(t.nt=1/300*a+299/300*t.nt,t.nt>.2*t.A*t.N){t.rt=!0;var u=t.nt/(t.A*t.N);console.log("Changing rule because suspected oscillation (running proportion of cells changed: "+u.toFixed(1)+")."),t.nt=15,L(t,"oscillation")}t.nt<3&&(t.rt=!0,console.log("Changing rule because not enough cells changed ("+t.nt+")."),t.nt=20,L(t,"blackout")),e.putImageData(n,t.ot,t.it)}(t),function(t){for(var e=new W(t.N,t.A),n=0;n<t.A;n++)for(var a=0;a<t.N;a++){for(var r=0,o=0,i=0,u=0,c=0,l=0,s=0,h=-1;h<=1;h++)for(var f=-1;f<=1;f++){if(0==h&&0==f)continue;let e=t.j(t,n,a,h,f),M=e[0],d=e[1];t.grid.get(M,d)%4==1?(r+=1,o+=1):t.grid.get(M,d)%4==2?i+=1:t.grid.get(M,d)%4==3&&(o+=1),0==Math.floor(t.grid.get(M,d)%16/4)?u+=1:1==Math.floor(t.grid.get(M,d)%16/4)?c+=1:2==Math.floor(t.grid.get(M,d)%16/4)?l+=1:3==Math.floor(t.grid.get(M,d)%16/4)&&(s+=1)}let m=t.grid.get(n,a);var M=m,d=[r,o,i,u,c,l,s,c+s];M="VariableGR"!=t.R||0==t.mask.get(n,a)?t.k(m,M,d):t.B(m,M,d),1==t.et?M!=m?t.tt.set(n,a,1):t.tt.set(n,a,0):2==t.et?Math.floor(M/4)%4!=Math.floor(m/4)%4?t.tt.set(n,a,1):t.tt.set(n,a,0):3==t.et&&(Math.floor(M/16)!=Math.floor(m/16)?t.tt.set(n,a,1):t.tt.set(n,a,0)),e.set(n,a,M)}if(t.ut)var{J:n,K:a}=z(t,n,a,e,t.j);t.grid=e}(t),function(t){"Variable2Colors"==t.R?I(t,2,!1,t.rt):"Variable3Colors"==t.R?I(t,3,!1,t.rt):"Variable4Colors"==t.R?I(t,4,!1,t.rt):"Tertiary4Colors"==t.R||"TertiaryFancySpcshp"==t.R?N(t,t.rt):"VariableGR"==t.R?(I(t,Math.floor(Math.random()*t.H)+2,!1,t.rt),I(t,Math.floor(Math.random()*t.H)+2,!0,t.rt)):"Variable"==t.R?I(t,Math.floor(Math.random()*t.H)+2,!1,t.rt):"VariableSecAutomata"==t.R?I(t,Math.floor(Math.random()*t.H)+2,!1,t.rt,1):"TertiaryAutomata"==t.R?A(t,Math.floor(Math.random()*t.H)+2,!1,t.rt,1):"TertiaryGood"==t.R&&A(t,Math.floor(Math.random()*t.H)+2,!1,t.rt,.5,!0);t.T+=1/t.ct**2,t.T>1&&(t.T=1),t.rt=!1}(t),t.R.includes("Variable")&&function(t){Math.random()<1e-4&&(t.X=Math.floor(Math.random()*t.N),console.log("Periodicity shift X: "+t.X)),Math.random()<1e-4&&(t.Y=Math.floor(Math.random()*t.A),console.log("Periodicity shift Y: "+t.Y)),Math.random()<1e-4&&(t.O=!t.O,E(t),console.log("Flip X: "+t.O)),Math.random()<1e-4&&(t.P=!t.P,E(t),console.log("Flip Y: "+t.P))}(t),"variable"==t.F&&function(t){Math.random()<1&&(t.I=x(t.I),t.G=x(t.G))}(t),setTimeout((function(){requestAnimationFrame((()=>K(t)))}),t.timeout)}function Q(t,e){return console.log("Attempting to load image"),(n="grLogoLarge.png",console.log("Loading image:",n),new Promise(((t,e)=>{const a=new Image;a.onload=()=>{console.log("Image loaded:",n);const e=document.createElement("canvas");e.width=a.width,e.height=a.height;const r=e.getContext("2d");r.drawImage(a,0,0,a.width,a.height);const o=r.getImageData(0,0,e.width,e.height).data,i=[];for(let t=0;t<a.height;t++){const e=[];for(let n=0;n<a.width;n++){const r=4*(t*a.width+n),i=(o[r]+o[r+1]+o[r+2])/3;e.push(i>128?1:0)}i.push(e)}t(i)},a.onerror=()=>{console.error("Error loading image:",n),e(new Error("Error loading image"))},a.src=n}))).then((e=>{new W(t.N,t.A);const n=new W(t.N,t.A),a=e[0].length/t.N,r=e.length/t.A,o=Math.max(a,r),i=Math.floor((t.N-e[0].length/o)/2),u=Math.floor((t.A-e.length/o)/2);for(let a=0;a<t.A;a++)for(let r=0;r<t.N;r++){if(a<u||(a-u)*o>=e.length){n.set(a,r,1);continue}let t=Math.floor((r-i)*o);0===e[Math.floor((a-u)*o)][t]?n.set(a,r,0):n.set(a,r,1)}t.mask=n})).catch((e=>{console.log("Image loading failed, not using a mask."),console.error("Error loading image:",e),t.mask=new W(t.N,t.A)}));var n}async function Z(t,e){return await Q(t),function(t,e=64){return Promise.resolve().then((()=>{t.grid=new W(t.N,t.A),t.tt=new W(t.N,t.A);for(var n=0;n<t.A;n++)for(var a=0;a<t.N;a++)if("gr"!=t.lt||1!==t.mask.get(n,a)){for(var r=Math.random(),o=0;o<e;o++)if(r<(o+1)/(e+1)){t.grid.set(n,a,o);break}t.tt.set(n,a,1)}else t.grid.set(n,a,0)}))}(t)}function _(t){return t.includes("Secondary")||t.includes("Variable")?2:t.includes("Tertiary")?3:1}function tt(t){document.getElementById("submitButton").addEventListener("click",(function(){var t,e,n,a,r,o,i,u,c,l,s;t=document.getElementById("userGridHeight").value,e=document.getElementById("userGridWidth").value,n=document.getElementById("userTimeout").value,a=document.getElementById("userXShift").value,r=document.getElementById("userYShift").value,o=document.getElementById("userFlipX").checked,i=document.getElementById("userFlipY").checked,u=document.getElementById("userColorPalette").value,c=document.getElementById("randomnessCheckbox").checked,l=document.getElementById("randomnessSlider").value,s=document.getElementById("userRule").value,localStorage.setItem("userGridHeight",t),localStorage.setItem("userGridWidth",e),localStorage.setItem("userTimeout",n),localStorage.setItem("userXShift",a),localStorage.setItem("userYShift",r),localStorage.setItem("userFlipX",o),localStorage.setItem("userFlipY",i),localStorage.setItem("userColorPalette",u),localStorage.setItem("userRandomnessOn",c),localStorage.setItem("userRandomnessAmount",l),localStorage.setItem("userRule",s),location.reload()}))}function et(t){document.getElementById("randomnessSlider").addEventListener("input",(function(){!function(t,e){t.D=e,document.getElementById("randomnessAmountValue").textContent=e}(t,this.value)}))}console.log("Loading main.js");var nt=document.getElementById("gameCanvas"),at=nt.getContext("2d"),rt=200,ot=200,it=30,ut=!0,ct=-2,lt=0,st=0,ht=!1,ft=!1,Mt="variable",dt="TertiaryGood",mt="random",vt=3,gt=8,bt=new class{constructor(t,e,n=200,a=200,r=20,o=!0,i=-2,u=0,c=0,l=!1,s=!1,h="black2",f="VariableGR",M="random",d=2,m=6,v=5e3){this.A=n,this.N=a,this.ot=0,this.it=0,this.timeout=r,this.grid=null,this.tt=null,this._=null,this.canvas=t,this.Z=e,this.ut=o,this.D=i,this.X=u,this.Y=c,this.O=l,this.P=s,this.F=h,this.R=f,this.lt=M,this.et=d,this.H=m,this.k=null,this.B=null,this.j=null,this.mask=null,this.ct=v,this.T=1/this.ct,this.canvas.width=this.N,this.canvas.height=this.A,this._=e.createImageData(t.width,t.height),this.rt=!0,this.nt=0,this.L=!1}}(nt,at,rt,ot,it,ut,ct,lt,st,ht,ft,Mt,dt,mt,vt,gt);window.onload=function(){!function(t){document.getElementById("randomnessCheckbox").addEventListener("change",(function(){t.ut=this.checked}))}(bt),function(t){document.getElementById("fullscreenButton").addEventListener("click",(function(){t.canvas.requestFullscreen?t.canvas.requestFullscreen():t.canvas.mozRequestFullScreen?t.canvas.mozRequestFullScreen():t.canvas.webkitRequestFullscreen?t.canvas.webkitRequestFullscreen():t.canvas.msRequestFullscreen&&t.canvas.msRequestFullscreen()}))}(bt),function(t){t.canvas.addEventListener("mousemove",(function(e){if(e.shiftKey){var n=t.canvas.getBoundingClientRect(),a=e.clientX-n.left,r=e.clientY-n.top,o=n.width/t.N,i=n.height/t.A,u=Math.floor(a/o),c=Math.floor(r/i);t.grid.set(c,u,1)}}))}(bt),function(t){t.canvas.addEventListener("mousedown",(function(e){var n=t.canvas.getBoundingClientRect(),a=e.clientX-n.left,r=e.clientY-n.top,o=n.width/t.N,i=n.height/t.A,u=Math.floor(a/o),c=Math.floor(r/i);e.shiftKey||e.ctrlKey?e.shiftKey&&!e.ctrlKey?(t.grid.set(c,(u+1)%t.N,1),t.grid.set(c,u,1),t.grid.set((c+1)%t.A,u,1)):!e.shiftKey&&e.ctrlKey?(t.grid.set(c,u,1),t.grid.set((c+1)%t.A,u,1)):e.shiftKey&&e.ctrlKey&&(t.grid.set(c,u,1),t.grid.set(c,(u+1)%t.N,1)):(t.grid.set((c+1)%t.A,(u+1)%t.N,1),t.grid.set((c-1+t.A)%t.A,(u+1)%t.N,1),t.grid.set((c-1+t.A)%t.A,(u-1+t.N)%t.N,1),t.grid.set((c+1)%t.A,(u-1+t.N)%t.N,1))}))}(bt),tt(),et(bt),function(t){document.getElementById("userXShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.X=e,E(t)})),document.getElementById("userYShift").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.Y=e,E(t)})),document.getElementById("userFlipX").addEventListener("change",(function(){t.O=this.checked,E(t)})),document.getElementById("userFlipY").addEventListener("change",(function(){t.P=this.checked,E(t)}))}(bt),function(t){document.getElementById("userTimeout").addEventListener("input",(function(){let e=parseInt(this.value);isNaN(e)&&(e=0),t.timeout=e}))}(bt),function(t){document.getElementById("userColorPalette").addEventListener("change",(function(){t.F=this.value,X(t)}))}(bt),function(t){document.getElementById("userRule").addEventListener("change",(async function(){t.R=this.value,2==t.et^(t.R.includes("Secondary")||t.R.includes("Variable"))&&await Z(t),t.et=_(t.R),H(t)}))}(bt),function(t){document.getElementById("changeColoringRule").addEventListener("click",(function(){t.rt=!0}))}(bt),function(t){document.getElementById("changeColor").addEventListener("click",(function(){X(t)}))}(bt),function(t){document.getElementById("saveEventCheckbox").addEventListener("change",(function(){t.L=this.checked})),document.getElementById("likeButton").addEventListener("click",(function(){L(t,"like")})),document.getElementById("dislikeButton").addEventListener("click",(function(){L(t,"dislike")}))}(bt),function(t){null!==localStorage.getItem("userGridHeight")?(t.A=parseInt(localStorage.getItem("userGridHeight")),t.N=parseInt(localStorage.getItem("userGridWidth")),t.A>1e3&&(t.A=1e3),t.N>1e3&&(t.N=1e3),t._=t.Z.createImageData(t.N,t.A),t.timeout=parseInt(localStorage.getItem("userTimeout")),t.X=parseInt(localStorage.getItem("userXShift")),isNaN(t.X)&&(t.X=0),isNaN(t.Y)&&(t.Y=0),t.Y=parseInt(localStorage.getItem("userYShift")),t.O="true"===localStorage.getItem("userFlipX"),t.P="true"===localStorage.getItem("userFlipY"),t.F=localStorage.getItem("userColorPalette"),t.ut="true"===localStorage.getItem("userRandomnessOn"),t.D=parseFloat(localStorage.getItem("userRandomnessAmount")),t.R=localStorage.getItem("userRule"),t.et=_(t.R),console.log("Retrieved value from previous session: ...")):console.log("No value in localStorage"),document.getElementById("userGridHeight").value=t.A,document.getElementById("userGridWidth").value=t.N,document.getElementById("userTimeout").value=t.timeout,document.getElementById("userXShift").value=t.X,document.getElementById("userYShift").value=t.Y,document.getElementById("userFlipX").checked=t.O,document.getElementById("userFlipY").checked=t.P,document.getElementById("userColorPalette").value=t.F,document.getElementById("randomnessCheckbox").checked=t.ut,document.getElementById("randomnessSlider").value=t.D,document.getElementById("userRule").value=t.R,t.canvas.width=Math.max(t.A,t.N),t.canvas.height=Math.max(t.A,t.N),t.ot=0,t.it=0;var e=document.getElementById("gameCanvas");if(t.A>t.N){var n=Math.floor(t.N/t.A*800);e.style.width=n+"px",e.style.height="800px",e.width=n*t.A/800,e.height=t.A}else{var a=Math.floor(t.A/t.N*800);e.style.width="800px",e.style.height=a+"px",e.width=t.N,e.height=a*t.N/800}}(bt),X(bt),E(bt),H(bt),Z(bt).then((()=>{K(bt)})).catch((t=>{console.error("Error initialising the grid: ",t)}))}})();
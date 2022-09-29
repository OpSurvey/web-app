/*!
 * PSPDFKit for Web 2022.4.2 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2022 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(self.webpackChunkPSPDFKit=self.webpackChunkPSPDFKit||[]).push([[5635],{55635:function(t,r,e){e.r(r),e.d(r,{Sha256:function(){return u},bytes_to_hex:function(){return c}});"undefined"==typeof atob||atob,"undefined"==typeof btoa||btoa;function c(t){for(var r="",e=0;e<t.length;e++){var c=(255&t[e]).toString(16);c.length<2&&(r+="0"),r+=c}return r}function n(t,r,e,c,n){var i=t.length-r,o=i<n?i:n;return t.set(e.subarray(c,c+o),r),o}var i,o=(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])},function(t,r){function e(){this.constructor=t}i(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}),a=function(t){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var c=t.apply(this,r)||this;return Object.create(Error.prototype,{name:{value:"IllegalStateError"}}),c}return o(r,t),r}(Error),f=(function(t){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var c=t.apply(this,r)||this;return Object.create(Error.prototype,{name:{value:"IllegalArgumentError"}}),c}o(r,t)}(Error),function(t){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var c=t.apply(this,r)||this;return Object.create(Error.prototype,{name:{value:"SecurityError"}}),c}o(r,t)}(Error),function(){function t(){this.pos=0,this.len=0}return t.prototype.reset=function(){return this.result=null,this.pos=0,this.len=0,this.asm.reset(),this},t.prototype.process=function(t){if(null!==this.result)throw new a("state must be reset before processing new data");for(var r=this.asm,e=this.heap,c=this.pos,i=this.len,o=0,f=t.length,x=0;f>0;)i+=x=n(e,c+i,t,o,f),o+=x,f-=x,c+=x=r.process(c,i),(i-=x)||(c=0);return this.pos=c,this.len=i,this},t.prototype.finish=function(){if(null!==this.result)throw new a("state must be reset before processing new data");return this.asm.finish(this.pos,this.len,0),this.result=new Uint8Array(this.HASH_SIZE),this.result.set(this.heap.subarray(0,this.HASH_SIZE)),this.pos=0,this.len=0,this},t}()),x=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])};return function(r,e){function c(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),u=function(t){function r(){var r=t.call(this)||this;return r.NAME="sha256",r.BLOCK_SIZE=64,r.HASH_SIZE=32,r.heap=function(t,r){var e=t?t.byteLength:r||65536;if(4095&e||e<=0)throw new Error("heap size must be a positive integer and a multiple of 4096");return t||new Uint8Array(new ArrayBuffer(e))}(),r.asm=function(t,r,e){"use asm";var c=0,n=0,i=0,o=0,a=0,f=0,x=0,u=0,s=0,h=0,b=0,p=0,l=0,y=0,d=0,_=0,v=0,w=0,g=0,m=0,E=0,A=0,S=0,O=0,P=0,j=0,k=new t.Uint8Array(e);function H(t,r,e,s,h,b,p,l,y,d,_,v,w,g,m,E){t=t|0;r=r|0;e=e|0;s=s|0;h=h|0;b=b|0;p=p|0;l=l|0;y=y|0;d=d|0;_=_|0;v=v|0;w=w|0;g=g|0;m=m|0;E=E|0;var A=0,S=0,O=0,P=0,j=0,k=0,H=0,I=0;A=c;S=n;O=i;P=o;j=a;k=f;H=x;I=u;I=t+I+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(H^j&(k^H))+0x428a2f98|0;P=P+I|0;I=I+(A&S^O&(A^S))+(A>>>2^A>>>13^A>>>22^A<<30^A<<19^A<<10)|0;H=r+H+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(k^P&(j^k))+0x71374491|0;O=O+H|0;H=H+(I&A^S&(I^A))+(I>>>2^I>>>13^I>>>22^I<<30^I<<19^I<<10)|0;k=e+k+(O>>>6^O>>>11^O>>>25^O<<26^O<<21^O<<7)+(j^O&(P^j))+0xb5c0fbcf|0;S=S+k|0;k=k+(H&I^A&(H^I))+(H>>>2^H>>>13^H>>>22^H<<30^H<<19^H<<10)|0;j=s+j+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(P^S&(O^P))+0xe9b5dba5|0;A=A+j|0;j=j+(k&H^I&(k^H))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;P=h+P+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(O^A&(S^O))+0x3956c25b|0;I=I+P|0;P=P+(j&k^H&(j^k))+(j>>>2^j>>>13^j>>>22^j<<30^j<<19^j<<10)|0;O=b+O+(I>>>6^I>>>11^I>>>25^I<<26^I<<21^I<<7)+(S^I&(A^S))+0x59f111f1|0;H=H+O|0;O=O+(P&j^k&(P^j))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;S=p+S+(H>>>6^H>>>11^H>>>25^H<<26^H<<21^H<<7)+(A^H&(I^A))+0x923f82a4|0;k=k+S|0;S=S+(O&P^j&(O^P))+(O>>>2^O>>>13^O>>>22^O<<30^O<<19^O<<10)|0;A=l+A+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(I^k&(H^I))+0xab1c5ed5|0;j=j+A|0;A=A+(S&O^P&(S^O))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;I=y+I+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(H^j&(k^H))+0xd807aa98|0;P=P+I|0;I=I+(A&S^O&(A^S))+(A>>>2^A>>>13^A>>>22^A<<30^A<<19^A<<10)|0;H=d+H+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(k^P&(j^k))+0x12835b01|0;O=O+H|0;H=H+(I&A^S&(I^A))+(I>>>2^I>>>13^I>>>22^I<<30^I<<19^I<<10)|0;k=_+k+(O>>>6^O>>>11^O>>>25^O<<26^O<<21^O<<7)+(j^O&(P^j))+0x243185be|0;S=S+k|0;k=k+(H&I^A&(H^I))+(H>>>2^H>>>13^H>>>22^H<<30^H<<19^H<<10)|0;j=v+j+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(P^S&(O^P))+0x550c7dc3|0;A=A+j|0;j=j+(k&H^I&(k^H))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;P=w+P+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(O^A&(S^O))+0x72be5d74|0;I=I+P|0;P=P+(j&k^H&(j^k))+(j>>>2^j>>>13^j>>>22^j<<30^j<<19^j<<10)|0;O=g+O+(I>>>6^I>>>11^I>>>25^I<<26^I<<21^I<<7)+(S^I&(A^S))+0x80deb1fe|0;H=H+O|0;O=O+(P&j^k&(P^j))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;S=m+S+(H>>>6^H>>>11^H>>>25^H<<26^H<<21^H<<7)+(A^H&(I^A))+0x9bdc06a7|0;k=k+S|0;S=S+(O&P^j&(O^P))+(O>>>2^O>>>13^O>>>22^O<<30^O<<19^O<<10)|0;A=E+A+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(I^k&(H^I))+0xc19bf174|0;j=j+A|0;A=A+(S&O^P&(S^O))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;t=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(m>>>17^m>>>19^m>>>10^m<<15^m<<13)+t+d|0;I=t+I+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(H^j&(k^H))+0xe49b69c1|0;P=P+I|0;I=I+(A&S^O&(A^S))+(A>>>2^A>>>13^A>>>22^A<<30^A<<19^A<<10)|0;r=(e>>>7^e>>>18^e>>>3^e<<25^e<<14)+(E>>>17^E>>>19^E>>>10^E<<15^E<<13)+r+_|0;H=r+H+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(k^P&(j^k))+0xefbe4786|0;O=O+H|0;H=H+(I&A^S&(I^A))+(I>>>2^I>>>13^I>>>22^I<<30^I<<19^I<<10)|0;e=(s>>>7^s>>>18^s>>>3^s<<25^s<<14)+(t>>>17^t>>>19^t>>>10^t<<15^t<<13)+e+v|0;k=e+k+(O>>>6^O>>>11^O>>>25^O<<26^O<<21^O<<7)+(j^O&(P^j))+0x0fc19dc6|0;S=S+k|0;k=k+(H&I^A&(H^I))+(H>>>2^H>>>13^H>>>22^H<<30^H<<19^H<<10)|0;s=(h>>>7^h>>>18^h>>>3^h<<25^h<<14)+(r>>>17^r>>>19^r>>>10^r<<15^r<<13)+s+w|0;j=s+j+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(P^S&(O^P))+0x240ca1cc|0;A=A+j|0;j=j+(k&H^I&(k^H))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;h=(b>>>7^b>>>18^b>>>3^b<<25^b<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+h+g|0;P=h+P+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(O^A&(S^O))+0x2de92c6f|0;I=I+P|0;P=P+(j&k^H&(j^k))+(j>>>2^j>>>13^j>>>22^j<<30^j<<19^j<<10)|0;b=(p>>>7^p>>>18^p>>>3^p<<25^p<<14)+(s>>>17^s>>>19^s>>>10^s<<15^s<<13)+b+m|0;O=b+O+(I>>>6^I>>>11^I>>>25^I<<26^I<<21^I<<7)+(S^I&(A^S))+0x4a7484aa|0;H=H+O|0;O=O+(P&j^k&(P^j))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;p=(l>>>7^l>>>18^l>>>3^l<<25^l<<14)+(h>>>17^h>>>19^h>>>10^h<<15^h<<13)+p+E|0;S=p+S+(H>>>6^H>>>11^H>>>25^H<<26^H<<21^H<<7)+(A^H&(I^A))+0x5cb0a9dc|0;k=k+S|0;S=S+(O&P^j&(O^P))+(O>>>2^O>>>13^O>>>22^O<<30^O<<19^O<<10)|0;l=(y>>>7^y>>>18^y>>>3^y<<25^y<<14)+(b>>>17^b>>>19^b>>>10^b<<15^b<<13)+l+t|0;A=l+A+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(I^k&(H^I))+0x76f988da|0;j=j+A|0;A=A+(S&O^P&(S^O))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;y=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(p>>>17^p>>>19^p>>>10^p<<15^p<<13)+y+r|0;I=y+I+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(H^j&(k^H))+0x983e5152|0;P=P+I|0;I=I+(A&S^O&(A^S))+(A>>>2^A>>>13^A>>>22^A<<30^A<<19^A<<10)|0;d=(_>>>7^_>>>18^_>>>3^_<<25^_<<14)+(l>>>17^l>>>19^l>>>10^l<<15^l<<13)+d+e|0;H=d+H+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(k^P&(j^k))+0xa831c66d|0;O=O+H|0;H=H+(I&A^S&(I^A))+(I>>>2^I>>>13^I>>>22^I<<30^I<<19^I<<10)|0;_=(v>>>7^v>>>18^v>>>3^v<<25^v<<14)+(y>>>17^y>>>19^y>>>10^y<<15^y<<13)+_+s|0;k=_+k+(O>>>6^O>>>11^O>>>25^O<<26^O<<21^O<<7)+(j^O&(P^j))+0xb00327c8|0;S=S+k|0;k=k+(H&I^A&(H^I))+(H>>>2^H>>>13^H>>>22^H<<30^H<<19^H<<10)|0;v=(w>>>7^w>>>18^w>>>3^w<<25^w<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+v+h|0;j=v+j+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(P^S&(O^P))+0xbf597fc7|0;A=A+j|0;j=j+(k&H^I&(k^H))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;w=(g>>>7^g>>>18^g>>>3^g<<25^g<<14)+(_>>>17^_>>>19^_>>>10^_<<15^_<<13)+w+b|0;P=w+P+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(O^A&(S^O))+0xc6e00bf3|0;I=I+P|0;P=P+(j&k^H&(j^k))+(j>>>2^j>>>13^j>>>22^j<<30^j<<19^j<<10)|0;g=(m>>>7^m>>>18^m>>>3^m<<25^m<<14)+(v>>>17^v>>>19^v>>>10^v<<15^v<<13)+g+p|0;O=g+O+(I>>>6^I>>>11^I>>>25^I<<26^I<<21^I<<7)+(S^I&(A^S))+0xd5a79147|0;H=H+O|0;O=O+(P&j^k&(P^j))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;m=(E>>>7^E>>>18^E>>>3^E<<25^E<<14)+(w>>>17^w>>>19^w>>>10^w<<15^w<<13)+m+l|0;S=m+S+(H>>>6^H>>>11^H>>>25^H<<26^H<<21^H<<7)+(A^H&(I^A))+0x06ca6351|0;k=k+S|0;S=S+(O&P^j&(O^P))+(O>>>2^O>>>13^O>>>22^O<<30^O<<19^O<<10)|0;E=(t>>>7^t>>>18^t>>>3^t<<25^t<<14)+(g>>>17^g>>>19^g>>>10^g<<15^g<<13)+E+y|0;A=E+A+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(I^k&(H^I))+0x14292967|0;j=j+A|0;A=A+(S&O^P&(S^O))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;t=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(m>>>17^m>>>19^m>>>10^m<<15^m<<13)+t+d|0;I=t+I+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(H^j&(k^H))+0x27b70a85|0;P=P+I|0;I=I+(A&S^O&(A^S))+(A>>>2^A>>>13^A>>>22^A<<30^A<<19^A<<10)|0;r=(e>>>7^e>>>18^e>>>3^e<<25^e<<14)+(E>>>17^E>>>19^E>>>10^E<<15^E<<13)+r+_|0;H=r+H+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(k^P&(j^k))+0x2e1b2138|0;O=O+H|0;H=H+(I&A^S&(I^A))+(I>>>2^I>>>13^I>>>22^I<<30^I<<19^I<<10)|0;e=(s>>>7^s>>>18^s>>>3^s<<25^s<<14)+(t>>>17^t>>>19^t>>>10^t<<15^t<<13)+e+v|0;k=e+k+(O>>>6^O>>>11^O>>>25^O<<26^O<<21^O<<7)+(j^O&(P^j))+0x4d2c6dfc|0;S=S+k|0;k=k+(H&I^A&(H^I))+(H>>>2^H>>>13^H>>>22^H<<30^H<<19^H<<10)|0;s=(h>>>7^h>>>18^h>>>3^h<<25^h<<14)+(r>>>17^r>>>19^r>>>10^r<<15^r<<13)+s+w|0;j=s+j+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(P^S&(O^P))+0x53380d13|0;A=A+j|0;j=j+(k&H^I&(k^H))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;h=(b>>>7^b>>>18^b>>>3^b<<25^b<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+h+g|0;P=h+P+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(O^A&(S^O))+0x650a7354|0;I=I+P|0;P=P+(j&k^H&(j^k))+(j>>>2^j>>>13^j>>>22^j<<30^j<<19^j<<10)|0;b=(p>>>7^p>>>18^p>>>3^p<<25^p<<14)+(s>>>17^s>>>19^s>>>10^s<<15^s<<13)+b+m|0;O=b+O+(I>>>6^I>>>11^I>>>25^I<<26^I<<21^I<<7)+(S^I&(A^S))+0x766a0abb|0;H=H+O|0;O=O+(P&j^k&(P^j))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;p=(l>>>7^l>>>18^l>>>3^l<<25^l<<14)+(h>>>17^h>>>19^h>>>10^h<<15^h<<13)+p+E|0;S=p+S+(H>>>6^H>>>11^H>>>25^H<<26^H<<21^H<<7)+(A^H&(I^A))+0x81c2c92e|0;k=k+S|0;S=S+(O&P^j&(O^P))+(O>>>2^O>>>13^O>>>22^O<<30^O<<19^O<<10)|0;l=(y>>>7^y>>>18^y>>>3^y<<25^y<<14)+(b>>>17^b>>>19^b>>>10^b<<15^b<<13)+l+t|0;A=l+A+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(I^k&(H^I))+0x92722c85|0;j=j+A|0;A=A+(S&O^P&(S^O))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;y=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(p>>>17^p>>>19^p>>>10^p<<15^p<<13)+y+r|0;I=y+I+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(H^j&(k^H))+0xa2bfe8a1|0;P=P+I|0;I=I+(A&S^O&(A^S))+(A>>>2^A>>>13^A>>>22^A<<30^A<<19^A<<10)|0;d=(_>>>7^_>>>18^_>>>3^_<<25^_<<14)+(l>>>17^l>>>19^l>>>10^l<<15^l<<13)+d+e|0;H=d+H+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(k^P&(j^k))+0xa81a664b|0;O=O+H|0;H=H+(I&A^S&(I^A))+(I>>>2^I>>>13^I>>>22^I<<30^I<<19^I<<10)|0;_=(v>>>7^v>>>18^v>>>3^v<<25^v<<14)+(y>>>17^y>>>19^y>>>10^y<<15^y<<13)+_+s|0;k=_+k+(O>>>6^O>>>11^O>>>25^O<<26^O<<21^O<<7)+(j^O&(P^j))+0xc24b8b70|0;S=S+k|0;k=k+(H&I^A&(H^I))+(H>>>2^H>>>13^H>>>22^H<<30^H<<19^H<<10)|0;v=(w>>>7^w>>>18^w>>>3^w<<25^w<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+v+h|0;j=v+j+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(P^S&(O^P))+0xc76c51a3|0;A=A+j|0;j=j+(k&H^I&(k^H))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;w=(g>>>7^g>>>18^g>>>3^g<<25^g<<14)+(_>>>17^_>>>19^_>>>10^_<<15^_<<13)+w+b|0;P=w+P+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(O^A&(S^O))+0xd192e819|0;I=I+P|0;P=P+(j&k^H&(j^k))+(j>>>2^j>>>13^j>>>22^j<<30^j<<19^j<<10)|0;g=(m>>>7^m>>>18^m>>>3^m<<25^m<<14)+(v>>>17^v>>>19^v>>>10^v<<15^v<<13)+g+p|0;O=g+O+(I>>>6^I>>>11^I>>>25^I<<26^I<<21^I<<7)+(S^I&(A^S))+0xd6990624|0;H=H+O|0;O=O+(P&j^k&(P^j))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;m=(E>>>7^E>>>18^E>>>3^E<<25^E<<14)+(w>>>17^w>>>19^w>>>10^w<<15^w<<13)+m+l|0;S=m+S+(H>>>6^H>>>11^H>>>25^H<<26^H<<21^H<<7)+(A^H&(I^A))+0xf40e3585|0;k=k+S|0;S=S+(O&P^j&(O^P))+(O>>>2^O>>>13^O>>>22^O<<30^O<<19^O<<10)|0;E=(t>>>7^t>>>18^t>>>3^t<<25^t<<14)+(g>>>17^g>>>19^g>>>10^g<<15^g<<13)+E+y|0;A=E+A+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(I^k&(H^I))+0x106aa070|0;j=j+A|0;A=A+(S&O^P&(S^O))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;t=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(m>>>17^m>>>19^m>>>10^m<<15^m<<13)+t+d|0;I=t+I+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(H^j&(k^H))+0x19a4c116|0;P=P+I|0;I=I+(A&S^O&(A^S))+(A>>>2^A>>>13^A>>>22^A<<30^A<<19^A<<10)|0;r=(e>>>7^e>>>18^e>>>3^e<<25^e<<14)+(E>>>17^E>>>19^E>>>10^E<<15^E<<13)+r+_|0;H=r+H+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(k^P&(j^k))+0x1e376c08|0;O=O+H|0;H=H+(I&A^S&(I^A))+(I>>>2^I>>>13^I>>>22^I<<30^I<<19^I<<10)|0;e=(s>>>7^s>>>18^s>>>3^s<<25^s<<14)+(t>>>17^t>>>19^t>>>10^t<<15^t<<13)+e+v|0;k=e+k+(O>>>6^O>>>11^O>>>25^O<<26^O<<21^O<<7)+(j^O&(P^j))+0x2748774c|0;S=S+k|0;k=k+(H&I^A&(H^I))+(H>>>2^H>>>13^H>>>22^H<<30^H<<19^H<<10)|0;s=(h>>>7^h>>>18^h>>>3^h<<25^h<<14)+(r>>>17^r>>>19^r>>>10^r<<15^r<<13)+s+w|0;j=s+j+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(P^S&(O^P))+0x34b0bcb5|0;A=A+j|0;j=j+(k&H^I&(k^H))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;h=(b>>>7^b>>>18^b>>>3^b<<25^b<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+h+g|0;P=h+P+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(O^A&(S^O))+0x391c0cb3|0;I=I+P|0;P=P+(j&k^H&(j^k))+(j>>>2^j>>>13^j>>>22^j<<30^j<<19^j<<10)|0;b=(p>>>7^p>>>18^p>>>3^p<<25^p<<14)+(s>>>17^s>>>19^s>>>10^s<<15^s<<13)+b+m|0;O=b+O+(I>>>6^I>>>11^I>>>25^I<<26^I<<21^I<<7)+(S^I&(A^S))+0x4ed8aa4a|0;H=H+O|0;O=O+(P&j^k&(P^j))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;p=(l>>>7^l>>>18^l>>>3^l<<25^l<<14)+(h>>>17^h>>>19^h>>>10^h<<15^h<<13)+p+E|0;S=p+S+(H>>>6^H>>>11^H>>>25^H<<26^H<<21^H<<7)+(A^H&(I^A))+0x5b9cca4f|0;k=k+S|0;S=S+(O&P^j&(O^P))+(O>>>2^O>>>13^O>>>22^O<<30^O<<19^O<<10)|0;l=(y>>>7^y>>>18^y>>>3^y<<25^y<<14)+(b>>>17^b>>>19^b>>>10^b<<15^b<<13)+l+t|0;A=l+A+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(I^k&(H^I))+0x682e6ff3|0;j=j+A|0;A=A+(S&O^P&(S^O))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;y=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(p>>>17^p>>>19^p>>>10^p<<15^p<<13)+y+r|0;I=y+I+(j>>>6^j>>>11^j>>>25^j<<26^j<<21^j<<7)+(H^j&(k^H))+0x748f82ee|0;P=P+I|0;I=I+(A&S^O&(A^S))+(A>>>2^A>>>13^A>>>22^A<<30^A<<19^A<<10)|0;d=(_>>>7^_>>>18^_>>>3^_<<25^_<<14)+(l>>>17^l>>>19^l>>>10^l<<15^l<<13)+d+e|0;H=d+H+(P>>>6^P>>>11^P>>>25^P<<26^P<<21^P<<7)+(k^P&(j^k))+0x78a5636f|0;O=O+H|0;H=H+(I&A^S&(I^A))+(I>>>2^I>>>13^I>>>22^I<<30^I<<19^I<<10)|0;_=(v>>>7^v>>>18^v>>>3^v<<25^v<<14)+(y>>>17^y>>>19^y>>>10^y<<15^y<<13)+_+s|0;k=_+k+(O>>>6^O>>>11^O>>>25^O<<26^O<<21^O<<7)+(j^O&(P^j))+0x84c87814|0;S=S+k|0;k=k+(H&I^A&(H^I))+(H>>>2^H>>>13^H>>>22^H<<30^H<<19^H<<10)|0;v=(w>>>7^w>>>18^w>>>3^w<<25^w<<14)+(d>>>17^d>>>19^d>>>10^d<<15^d<<13)+v+h|0;j=v+j+(S>>>6^S>>>11^S>>>25^S<<26^S<<21^S<<7)+(P^S&(O^P))+0x8cc70208|0;A=A+j|0;j=j+(k&H^I&(k^H))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;w=(g>>>7^g>>>18^g>>>3^g<<25^g<<14)+(_>>>17^_>>>19^_>>>10^_<<15^_<<13)+w+b|0;P=w+P+(A>>>6^A>>>11^A>>>25^A<<26^A<<21^A<<7)+(O^A&(S^O))+0x90befffa|0;I=I+P|0;P=P+(j&k^H&(j^k))+(j>>>2^j>>>13^j>>>22^j<<30^j<<19^j<<10)|0;g=(m>>>7^m>>>18^m>>>3^m<<25^m<<14)+(v>>>17^v>>>19^v>>>10^v<<15^v<<13)+g+p|0;O=g+O+(I>>>6^I>>>11^I>>>25^I<<26^I<<21^I<<7)+(S^I&(A^S))+0xa4506ceb|0;H=H+O|0;O=O+(P&j^k&(P^j))+(P>>>2^P>>>13^P>>>22^P<<30^P<<19^P<<10)|0;m=(E>>>7^E>>>18^E>>>3^E<<25^E<<14)+(w>>>17^w>>>19^w>>>10^w<<15^w<<13)+m+l|0;S=m+S+(H>>>6^H>>>11^H>>>25^H<<26^H<<21^H<<7)+(A^H&(I^A))+0xbef9a3f7|0;k=k+S|0;S=S+(O&P^j&(O^P))+(O>>>2^O>>>13^O>>>22^O<<30^O<<19^O<<10)|0;E=(t>>>7^t>>>18^t>>>3^t<<25^t<<14)+(g>>>17^g>>>19^g>>>10^g<<15^g<<13)+E+y|0;A=E+A+(k>>>6^k>>>11^k>>>25^k<<26^k<<21^k<<7)+(I^k&(H^I))+0xc67178f2|0;j=j+A|0;A=A+(S&O^P&(S^O))+(S>>>2^S>>>13^S>>>22^S<<30^S<<19^S<<10)|0;c=c+A|0;n=n+S|0;i=i+O|0;o=o+P|0;a=a+j|0;f=f+k|0;x=x+H|0;u=u+I|0}function I(t){t=t|0;H(k[t|0]<<24|k[t|1]<<16|k[t|2]<<8|k[t|3],k[t|4]<<24|k[t|5]<<16|k[t|6]<<8|k[t|7],k[t|8]<<24|k[t|9]<<16|k[t|10]<<8|k[t|11],k[t|12]<<24|k[t|13]<<16|k[t|14]<<8|k[t|15],k[t|16]<<24|k[t|17]<<16|k[t|18]<<8|k[t|19],k[t|20]<<24|k[t|21]<<16|k[t|22]<<8|k[t|23],k[t|24]<<24|k[t|25]<<16|k[t|26]<<8|k[t|27],k[t|28]<<24|k[t|29]<<16|k[t|30]<<8|k[t|31],k[t|32]<<24|k[t|33]<<16|k[t|34]<<8|k[t|35],k[t|36]<<24|k[t|37]<<16|k[t|38]<<8|k[t|39],k[t|40]<<24|k[t|41]<<16|k[t|42]<<8|k[t|43],k[t|44]<<24|k[t|45]<<16|k[t|46]<<8|k[t|47],k[t|48]<<24|k[t|49]<<16|k[t|50]<<8|k[t|51],k[t|52]<<24|k[t|53]<<16|k[t|54]<<8|k[t|55],k[t|56]<<24|k[t|57]<<16|k[t|58]<<8|k[t|59],k[t|60]<<24|k[t|61]<<16|k[t|62]<<8|k[t|63])}function U(t){t=t|0;k[t|0]=c>>>24;k[t|1]=c>>>16&255;k[t|2]=c>>>8&255;k[t|3]=c&255;k[t|4]=n>>>24;k[t|5]=n>>>16&255;k[t|6]=n>>>8&255;k[t|7]=n&255;k[t|8]=i>>>24;k[t|9]=i>>>16&255;k[t|10]=i>>>8&255;k[t|11]=i&255;k[t|12]=o>>>24;k[t|13]=o>>>16&255;k[t|14]=o>>>8&255;k[t|15]=o&255;k[t|16]=a>>>24;k[t|17]=a>>>16&255;k[t|18]=a>>>8&255;k[t|19]=a&255;k[t|20]=f>>>24;k[t|21]=f>>>16&255;k[t|22]=f>>>8&255;k[t|23]=f&255;k[t|24]=x>>>24;k[t|25]=x>>>16&255;k[t|26]=x>>>8&255;k[t|27]=x&255;k[t|28]=u>>>24;k[t|29]=u>>>16&255;k[t|30]=u>>>8&255;k[t|31]=u&255}function Z(){c=0x6a09e667;n=0xbb67ae85;i=0x3c6ef372;o=0xa54ff53a;a=0x510e527f;f=0x9b05688c;x=0x1f83d9ab;u=0x5be0cd19;s=h=0}function C(t,r,e,b,p,l,y,d,_,v){t=t|0;r=r|0;e=e|0;b=b|0;p=p|0;l=l|0;y=y|0;d=d|0;_=_|0;v=v|0;c=t;n=r;i=e;o=b;a=p;f=l;x=y;u=d;s=_;h=v}function K(t,r){t=t|0;r=r|0;var e=0;if(t&63)return-1;while((r|0)>=64){I(t);t=t+64|0;r=r-64|0;e=e+64|0}s=s+e|0;if(s>>>0<e>>>0)h=h+1|0;return e|0}function B(t,r,e){t=t|0;r=r|0;e=e|0;var c=0,n=0;if(t&63)return-1;if(~e)if(e&31)return-1;if((r|0)>=64){c=K(t,r)|0;if((c|0)==-1)return-1;t=t+c|0;r=r-c|0}c=c+r|0;s=s+r|0;if(s>>>0<r>>>0)h=h+1|0;k[t|r]=0x80;if((r|0)>=56){for(n=r+1|0;(n|0)<64;n=n+1|0)k[t|n]=0x00;I(t);r=0;k[t|0]=0}for(n=r+1|0;(n|0)<59;n=n+1|0)k[t|n]=0;k[t|56]=h>>>21&255;k[t|57]=h>>>13&255;k[t|58]=h>>>5&255;k[t|59]=h<<3&255|s>>>29;k[t|60]=s>>>21&255;k[t|61]=s>>>13&255;k[t|62]=s>>>5&255;k[t|63]=s<<3&255;I(t);if(~e)U(e);return c|0}function D(){c=b;n=p;i=l;o=y;a=d;f=_;x=v;u=w;s=64;h=0}function F(){c=g;n=m;i=E;o=A;a=S;f=O;x=P;u=j;s=64;h=0}function L(t,r,e,k,I,U,C,K,B,D,F,L,M,N,z,q){t=t|0;r=r|0;e=e|0;k=k|0;I=I|0;U=U|0;C=C|0;K=K|0;B=B|0;D=D|0;F=F|0;L=L|0;M=M|0;N=N|0;z=z|0;q=q|0;Z();H(t^0x5c5c5c5c,r^0x5c5c5c5c,e^0x5c5c5c5c,k^0x5c5c5c5c,I^0x5c5c5c5c,U^0x5c5c5c5c,C^0x5c5c5c5c,K^0x5c5c5c5c,B^0x5c5c5c5c,D^0x5c5c5c5c,F^0x5c5c5c5c,L^0x5c5c5c5c,M^0x5c5c5c5c,N^0x5c5c5c5c,z^0x5c5c5c5c,q^0x5c5c5c5c);g=c;m=n;E=i;A=o;S=a;O=f;P=x;j=u;Z();H(t^0x36363636,r^0x36363636,e^0x36363636,k^0x36363636,I^0x36363636,U^0x36363636,C^0x36363636,K^0x36363636,B^0x36363636,D^0x36363636,F^0x36363636,L^0x36363636,M^0x36363636,N^0x36363636,z^0x36363636,q^0x36363636);b=c;p=n;l=i;y=o;d=a;_=f;v=x;w=u;s=64;h=0}function M(t,r,e){t=t|0;r=r|0;e=e|0;var s=0,h=0,b=0,p=0,l=0,y=0,d=0,_=0,v=0;if(t&63)return-1;if(~e)if(e&31)return-1;v=B(t,r,-1)|0;s=c,h=n,b=i,p=o,l=a,y=f,d=x,_=u;F();H(s,h,b,p,l,y,d,_,0x80000000,0,0,0,0,0,0,768);if(~e)U(e);return v|0}function N(t,r,e,s,h){t=t|0;r=r|0;e=e|0;s=s|0;h=h|0;var b=0,p=0,l=0,y=0,d=0,_=0,v=0,w=0,g=0,m=0,E=0,A=0,S=0,O=0,P=0,j=0;if(t&63)return-1;if(~h)if(h&31)return-1;k[t+r|0]=e>>>24;k[t+r+1|0]=e>>>16&255;k[t+r+2|0]=e>>>8&255;k[t+r+3|0]=e&255;M(t,r+4|0,-1)|0;b=g=c,p=m=n,l=E=i,y=A=o,d=S=a,_=O=f,v=P=x,w=j=u;s=s-1|0;while((s|0)>0){D();H(g,m,E,A,S,O,P,j,0x80000000,0,0,0,0,0,0,768);g=c,m=n,E=i,A=o,S=a,O=f,P=x,j=u;F();H(g,m,E,A,S,O,P,j,0x80000000,0,0,0,0,0,0,768);g=c,m=n,E=i,A=o,S=a,O=f,P=x,j=u;b=b^c;p=p^n;l=l^i;y=y^o;d=d^a;_=_^f;v=v^x;w=w^u;s=s-1|0}c=b;n=p;i=l;o=y;a=d;f=_;x=v;u=w;if(~h)U(h);return 0}return{reset:Z,init:C,process:K,finish:B,hmac_reset:D,hmac_init:L,hmac_finish:M,pbkdf2_generate_block:N}}({Uint8Array:Uint8Array},null,r.heap.buffer),r.reset(),r}return x(r,t),r.NAME="sha256",r}(f)}}]);
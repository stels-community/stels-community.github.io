(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){(function(t){var r=n(17),a="undefined"!==typeof window?{encode:function(e){return(new TextEncoder).encode(e)},decode:function(e){return(new TextDecoder).decode(Uint8Array.from(e))}}:{encode:function(e){return t.from(e)},decode:function(e){return t.from(e).toString("utf8")}};e.exports=function e(t){"use strict";function n(e,t){var n=e;t&=3;var r={add:function(e){for(var a=255,o=t;--o;)a|=a<<8;return n=n+e&a,r},sub:function(e){for(var a=255,o=t;--o;)a|=a<<8;return n=n>=e?n-e:a+1+n-e,r},xor:function(e){return n^=e,r},done:function(){return n}};return r}r(this,e),"string"===typeof t?t=a.encode(t):t instanceof ArrayBuffer?t=new Uint8Array(t):t instanceof Uint8Array||(t=Uint8Array.from(t)),t=Uint8Array.from(t).filter(function(e){return!!e}),this.encrypt=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"array",o=["add","sub","xor"];"string"===typeof e?e=a.encode(e):e instanceof ArrayBuffer?e=new Uint8Array(e):e instanceof Uint8Array||(e=Uint8Array.from(e));for(var c=Uint8Array.from(e),i=t.length,l=c.length,u=[],s=0,f=0;f<l;){var d=0,y=t[s++];s=s>=i?s-i:s;for(var m=0,v=void 0;192>>m;){var p=(y&192>>m)>>6-m;if(p){d||(d=l-f<p?l-f:p,v=n(c.slice(f,f+d).reduce(function(e,t){return e?e<<8|t:t},0),d));var h=t.slice(s,s+d).reduce(function(e,t){return e?e<<8|t:t},0);v=v[o[p-1]](h),s=(s+=d)>=i?s-i:s}m+=2}for(var g=v.done(),w=[],E=d;E--;)w.unshift(255&g),g>>=8;u=u.concat(w),f+=d}return"array"===r?u:"bytearray"===r?Uint8Array.from(u):a.decode(u)},this.decrypt=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",o=["sub","add","xor"];"string"===typeof e&&(e=a.encode(e)),e instanceof ArrayBuffer?e=new Uint8Array(e):e instanceof Uint8Array||(e=Uint8Array.from(e));for(var c=Uint8Array.from(e),i=t.length,l=c.length,u=[],s=0,f=0;f<l;){var d=0,y=t[s++];s=s>=i?s-i:s;for(var m=void 0,v=0,p=[];192>>v;){var h=(y&192>>v)>>6-v;if(h){d||(d=l-f<h?l-f:h,m=n(c.slice(f,f+d).reduce(function(e,t){return e?e<<8|t:t},0),d));var g=t.slice(s,s+d).reduce(function(e,t){return e?e<<8|t:t},0);p.unshift({fn:o[h-1],key:g}),s=(s+=d)>=i?s-i:s}v+=2}for(var w=p.reduce(function(e,t){var n=t.fn,r=t.key;return e[n](r)},m).done(),E=[],A=d;A--;)E.unshift(255&w),w>>=8;u=u.concat(E),f+=d}return"array"===r?u:"bytearray"===r?Uint8Array.from(u):a.decode(u)}}}).call(this,n(9).Buffer)},23:function(e,t,n){e.exports=n.p+"static/media/logo-te-logo.aaa32282.png"},26:function(e,t,n){e.exports=n(71)},31:function(e,t,n){},40:function(e,t){},42:function(e,t){},62:function(e,t,n){(function(t){var r=n(63),a=n(67),o=n(17),c=n(68),i="undefined"!==typeof window?{encode:function(e){return(new TextEncoder).encode(e)},decode:function(e){return(new TextDecoder).decode(Uint8Array.from(e))}}:{encode:function(e){return t.from(e)},decode:function(e){return t.from(e).toString("utf8")}},l=15,u=16,s=0,f=1,d=2,y=3,m=4,v=5,p=6,h=7,g=14,w=15,E=32,A=48,b=64,k=80,N=96,U=function(){"use strict";function e(t){var n,c=this;o(this,e),this.types=(a(n={},u,{twist:function(e){if("Boolean"===e.constructor.name)return[u|(e?w:g)];var t=e.toString(16),n=[Float64Array,h];/\./.test(t)||(e<0?-129<e?n=[Int8Array,y]:-32769<e?n=[Int16Array,m]:-2147483649<e&&(n=[Int32Array,v]):e<256?n=[Uint8Array,s]:e<65536?n=[Uint16Array,f]:e<4294967296&&(n=[Uint32Array,d]));var r=Array.from(new Uint8Array(n[0].from([e]).buffer));return r.unshift(u|n[1]),r},untwist:function(e,t,n){var r;return(r={},a(r,s,function(e,t){return[e[t],t+1]}),a(r,f,function(e,t){var n=new Uint8Array(e.slice(t,t+2)).buffer;return[new Uint16Array(n)[0],t+2]}),a(r,d,function(e,t){var n=new Uint8Array(e.slice(t,t+4)).buffer;return[new Uint32Array(n)[0],t+4]}),a(r,y,function(e,t){return[e[t],t+1]}),a(r,m,function(e,t){var n=new Uint8Array(e.slice(t,t+2)).buffer;return[new Int16Array(n)[0],t+2]}),a(r,v,function(e,t){var n=new Uint8Array(e.slice(t,t+4)).buffer;return[new Int32Array(n)[0],t+4]}),a(r,p,function(e,t){var n=new Uint8Array(e.slice(t,t+4)).buffer;return[new Float32Array(n)[0],t+4]}),a(r,h,function(e,t){var n=new Uint8Array(e.slice(t,t+8)).buffer;return[new Float64Array(n)[0],t+8]}),a(r,g,function(){return[!1,n]}),a(r,w,function(){return[!0,n]}),r)[e](t,n)}}),a(n,E,{twist:function(e){for(var t=Array.from(i.encode(e)),n=[],r=t.length;r;)n.unshift(255&r),r>>=8;return[E|n.length].concat(n).concat(t)},untwist:function(e,t,n){var r=t.slice(n,n+e).reduce(function(e,t){return e<<8|t},0);return[i.decode(new Uint8Array(t.slice(n+e,n+e+r))),n+e+r]}}),a(n,A,{twist:function(e){var t=c.types[E].twist(e.toString());return t[0]=A|t[0]&l,t},untwist:function(e,t,n){var r=c.types[E].untwist(e,t,n);return r[0]=new RegExp(r[0].replace(/^\/(.*)\/g?i?m?u?y?$/,"$1"),r[0].replace(/^\/.*\/(g?i?m?u?y?)$/,"$1")),r}}),a(n,b,{twist:function(e){for(var t=[],n=(e=Object.entries(e)).length;n;)t.unshift(255&n),n>>=8;return e.reduce(function(e,t){var n=r(t,2),a=n[0],o=n[1];return a=c.types[E].twist(a),e.concat(a).concat(c.twist(o))},[b|t.length].concat(t))},untwist:function(e,t,n){var a=t.slice(n,n+e).reduce(function(e,t){return e<<8|t},0);n+=e;for(var o={};a--;){var i=c.untwist(t,n),l=r(i,2),u=l[0],s=l[1],f=c.untwist(t,s),d=r(f,2),y=d[0],m=d[1];o[u]=y,n=m}return[o,n]}}),a(n,k,{twist:function(e){for(var t=[],n=(e=Array.from(e)).length;n;)t.unshift(255&n),n>>=8;return e.reduce(function(e,t){return e.concat(c.twist(t))},[k|t.length].concat(t))},untwist:function(e,t,n){var a=t.slice(n,n+e).reduce(function(e,t){return e<<8|t},0);n+=e;for(var o=[];a--;){var i=c.untwist(t,n),l=r(i,2),u=l[0],s=l[1];o.push(u),n=s}return[o,n]}}),a(n,N,{twist:function(e){for(var t=[],n=(e=Array.from(e)).length;n;)t.unshift(255&n),n>>=8;return[N|t.length].concat(t).concat(e)},untwist:function(e,t,n){var r=t.slice(n,n+e).reduce(function(e,t){return e<<8|t},0);return[t.slice(n+e,n+e+r),n+e+r]}}),n)}return c(e,[{key:"inspect",value:function(e){return null===e||"undefined"===typeof e?null:"string"===typeof e?E:"number"===typeof e||"boolean"===typeof e?u:e instanceof Uint8Array||"undefined"!==typeof t&&e instanceof t?N:e instanceof RegExp?A:e instanceof Array||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Float32Array||e instanceof Float64Array?k:b}},{key:"twist",value:function(e){return this.types[this.inspect(e)].twist(e)}},{key:"untwist",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e instanceof ArrayBuffer?e=new Uint8Array(e):e instanceof Uint8Array||(e=Uint8Array.from(e));var n=e[t],r=240&n,a=n&l;return this.types[r].untwist(a,e,t+1)}}]),e}();e.exports=U}).call(this,n(9).Buffer)},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(18),c=n.n(o),i=(n(31),n(19)),l=n(20),u=n(24),s=n(21),f=n(25),d=n(22),y=n.n(d),m=n(5),v=n.n(m),p=n(11),h=n.n(p),g=(n(62),n(23)),w=n.n(g),E=(n(69),"undefined"!==typeof window),A="undefined"!==typeof location?location.pathname.slice(1):"",b=E?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(console.log("LS",{id:e,value:t}),t)try{return t=JSON.stringify(t),localStorage.setItem(e,t),t}catch(n){console.error("Can not convert to JSON value",t,"\nerror:\n",n)}else{if("undefined"===typeof localStorage[e])return null;try{return JSON.parse(localStorage[e])}catch(n){console.error("Can not parse localStorage[".concat(e,"] as JSON:\n").concat(localStorage[e],",\nerror:\n"),n)}}return null}:function(){},k=function(e){function t(e){var n,r=e.path;return Object(i.a)(this,t),n=Object(u.a)(this,Object(s.a)(t).call(this)),r=r||A,n.ecdh=y()("secp521r1"),n.bc=new h.a(""),n.state={key:"",secret:"",peerMessage:"",message:""},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){E&&this.setupKeys()}},{key:"getState",value:function(){return this.state}},{key:"setupKeys",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e)this.ecdh.setPrivateKey(e),this.setState({key:this.ecdh.getPublicKey()}),this.privateKey=e;else{if(b&&(e=b("privateKey")),e)return this.setupKeys(e);this.setState({key:this.ecdh.generateKeys()}),this.privateKey=this.ecdh.getPrivateKey()}b&&b("privateKey",this.privateKey)}},{key:"onPeerPublicChange",value:function(e){var t=e.value,n=void 0===t?null:t;if(n)try{var r=this.ecdh.computeSecret(new Uint8Array(v.a.decode(n.trim())));this.setState({secret:r}),this.bc=new h.a(r)}catch(a){console.warn("wrong peer public:",n,v.a.decode(n),a)}}},{key:"onPeerMessageChange",value:function(e){var t=e.value,n=void 0===t?null:t;if(n)try{this.setState({peerMessage:this.bc.decrypt(new Uint8Array(v.a.decode(n.trim())))})}catch(r){console.warn("wrong peer message:",n,r)}}},{key:"onMessageChange",value:function(e){var t=e.value,n=void 0===t?null:t;if(n)try{this.setState({message:v.a.encode(this.bc.encrypt(n))})}catch(r){console.warn("wrong message:",n,r)}}},{key:"copy",value:function(e){var t=e.value;(void 0===t?null:t)&&console.log({navigator:navigator})}},{key:"render",value:function(){var e=this,t=this.state,n=t.key,r=t.secret,o=t.peerMessage,c=t.message,i=v.a.encode(n);return console.log({key:n,secret:r,publicKey:i}),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("span",null,"MEM Project"),a.a.createElement("span",null,a.a.createElement("img",{src:w.a,className:"App-logo",alt:"logo"})),a.a.createElement("span",null,"relative-chaos")),a.a.createElement("h4",null,"end-to-end content encryptyon lab"),a.a.createElement("div",{className:"App-ui"},a.a.createElement("div",{className:"h-box"},a.a.createElement("span",null,a.a.createElement("textarea",{className:"key-field",placeholder:"Paste partner public key here",onChange:function(t){var n=t.target,r=void 0===n?null:n;return r&&e.onPeerPublicChange(r)}})),a.a.createElement("span",null,a.a.createElement("div",{className:"key-field",title:"Copy to clipboard",onClick:function(e){var t=e.target,n=void 0===t?null:t;return n&&copy(n)}},i))),a.a.createElement("div",{className:"h-box"},a.a.createElement("span",null,a.a.createElement("textarea",{placeholder:"Paste partner encripted text here",onChange:function(t){var n=t.target,r=void 0===n?null:n;return r&&e.onPeerMessageChange(r)}})),a.a.createElement("span",null,a.a.createElement("textarea",{placeholder:"Write or paste you message in clear text here",onChange:function(t){var n=t.target,r=void 0===n?null:n;return r&&e.onMessageChange(r)}}))),a.a.createElement("div",{className:"h-box"},a.a.createElement("span",null,a.a.createElement("textarea",{onClick:function(t){var n=t.target,r=void 0===n?null:n;return r&&e.copy(r)},onChange:function(e){return e},title:"Copy to clipboard",placeholder:"Decrypted text from partner appears here",value:o})),a.a.createElement("span",null,a.a.createElement("textarea",{onClick:function(t){var n=t.target,r=void 0===n?null:n;return r&&e.copy(r)},onChange:function(e){return e},title:"Copy to clipboard",placeholder:"Your encrypted message",value:c})))),a.a.createElement("h5",null,"2018 \xa9 MEM COST Technologies"),a.a.createElement("div",{className:"footer"},a.a.createElement("div",{className:"top-2"},a.a.createElement("h3",null,"Want to be owner of You id`s?")),a.a.createElement("div",{className:"top-2"},"Contribute ( Self Security Hand Book comming soon. Please ",a.a.createElement("a",{className:"mail-link",href:"https://github.com/relative-chaos"},"follow on gihub")," )"),a.a.createElement("div",{className:"top-2"},"Or ",a.a.createElement("a",{className:"mail-link",href:"https://money.yandex.ru/to/41001821124082"},"Donate"),", if you understand, what we do:"),a.a.createElement("div",{className:"flex top-2"},a.a.createElement("div",{className:"key"},a.a.createElement("p",null,"ETH"),a.a.createElement("p",{className:"wallet"},"0xd0b9e1735ea2c1e2afec712089afc8fcad8906e0")),a.a.createElement("div",{className:"key left-2"},a.a.createElement("p",null,"BTC"),a.a.createElement("p",{className:"wallet"},"16ghju2oHehczLCcCjRszbYqMrpXpp1pnS")),a.a.createElement("div",{className:"key"},a.a.createElement("p",null,"DOGE"),a.a.createElement("p",{className:"wallet"},"DCiTowGc2dLLRwY1sEhEBzZ4ZniJL1Hvbn")),a.a.createElement("div",{className:"key left-2"},a.a.createElement("p",null,"LTC"),a.a.createElement("p",{className:"wallet"},"LNLcMkQD8jogMtfvjCFaMucyXoECUDn8pL"))),a.a.createElement("div",{className:"flex top-2"},a.a.createElement("div",{className:"key"},a.a.createElement("p",null,"XMR"),a.a.createElement("p",{className:"wallet"},"4BrL51JCc9NGQ71kWhnYoDRffsDZy7m1HUU7MRU4nUMXAHNFBEJhkTZV9HdaL4gfuNBxLPc3BeMkLGaPbF5vWtANQoshL4x66PkQf8usv5")),a.a.createElement("div",{className:"key left-2"},a.a.createElement("p",null,"ZEC"),a.a.createElement("p",{className:"wallet"},"t1LJnH6QFP59PL1UokvZ3YtyoJs6B9yQEiR")),a.a.createElement("div",{className:"key"},a.a.createElement("p",null,"BCH"),a.a.createElement("p",{className:"wallet"},"qzu0j3n5x48d338ngfgvv2h6frltjaxvcsw6347sr7")),a.a.createElement("div",{className:"key left-2"},a.a.createElement("p",null,"WAVES"),a.a.createElement("p",{className:"wallet"},"3PHcweuuz8mBZUKC6mNX4VNGhkPNX8a7jux")))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.f3be2775.chunk.js.map
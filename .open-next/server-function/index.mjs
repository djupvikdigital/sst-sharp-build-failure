import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);import bannerUrl from 'url';const __dirname = bannerUrl.fileURLToPath(new URL('.', import.meta.url));
import S from"node:fs";import l from"node:path";import B from"node:http";var d=class extends B.IncomingMessage{constructor({method:t,url:o,headers:r,body:n,remoteAddress:s}){super({encrypted:!0,readable:!1,remoteAddress:s,address:()=>({port:443}),end:Function.prototype,destroy:Function.prototype}),typeof r["content-length"]>"u"&&(r["content-length"]=Buffer.byteLength(n).toString()),Object.assign(this,{ip:s,complete:!0,httpVersion:"1.1",httpVersionMajor:"1",httpVersionMinor:"1",method:t,headers:r,body:n,url:o}),this._read=()=>{this.push(n),this.push(null)}}};import A from"node:http";var h=`\r
\r
`,u=Symbol(),p=Symbol();function C(e){if(Buffer.isBuffer(e))return e.toString("utf8");if(typeof e=="string")return e;throw new Error(`response.write() of unexpected type: ${typeof e}`)}function g(e,t){if(Buffer.isBuffer(t)||typeof t=="string"||t instanceof Uint8Array)e[u].push(Buffer.from(t));else throw new Error(`response.write() of unexpected type: ${typeof t}`)}var c=class extends A.ServerResponse{static from(t){let o=new c(t);return o.statusCode=t.statusCode,o[p]=t.headers,o[u]=[Buffer.from(t.body)],o.end(),o}static body(t){return Buffer.concat(t[u])}static headers(t){let o=typeof t.getHeaders=="function"?t.getHeaders():t._headers;return Object.assign(o,t[p])}get headers(){return this[p]}setHeader(t,o){this._wroteHeader?this[p][t]=o:super.setHeader(t,o)}writeHead(t,o,r){let n=typeof o=="string"?r:o;for(let s in n)if(this.setHeader(s,n[s]),!this._wroteHeader)break;super.writeHead(t,o,r)}constructor({method:t}){super({method:t}),this[u]=[],this[p]={},this.useChunkedEncodingByDefault=!1,this.chunkedEncoding=!1,this._header="",this.assignSocket({_writableState:{},writable:!0,on:Function.prototype,removeListener:Function.prototype,destroy:Function.prototype,cork:Function.prototype,uncork:Function.prototype,write:(o,r,n)=>{if(typeof r=="function"&&(n=r,r=null),this._header===""||this._wroteHeader)g(this,o);else{let s=C(o),i=s.indexOf(h);if(i!==-1){let f=s.slice(i+h.length);f&&g(this,f),this._wroteHeader=!0}}typeof n=="function"&&n()}}),this.once("finish",()=>{this.emit("close")})}};import M from"next/dist/server/next-server.js";import O from"node:fs";import H from"node:path";function w(){process.env.NODE_ENV=process.env.NODE_ENV??"production"}function b(e){let t=H.join(e,"required-server-files.json"),o=O.readFileSync(t,"utf-8"),{config:r}=JSON.parse(o);return r}var F=new Set(["application/octet-stream","application/epub+zip","application/msword","application/pdf","application/rtf","application/vnd.amazon.ebook","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","font/otf","font/woff","font/woff2","image/bmp","image/gif","image/jpeg","image/png","image/tiff","image/vnd.microsoft.icon","image/webp","audio/3gpp","audio/aac","audio/basic","audio/mpeg","audio/ogg","audio/wavaudio/webm","audio/x-aiff","audio/x-midi","audio/x-wav","video/3gpp","video/mp2t","video/mpeg","video/ogg","video/quicktime","video/webm","video/x-msvideo","application/java-archive","application/vnd.apple.installer+xml","application/x-7z-compressed","application/x-apple-diskimage","application/x-bzip","application/x-bzip2","application/x-gzip","application/x-java-archive","application/x-rar-compressed","application/x-tar","application/x-zip","application/zip"]);function x(e){if(!e)return!1;let t=e?.split(";")[0]??"";return F.has(t)}function a(...e){}function _(e){return e.version==="2.0"}function q(e){return e.version===void 0&&!v(e)}function v(e){return e.Records!==void 0}function E(e){if(v(e))return V(e);if(_(e))return R(e);if(q(e))return N(e);throw new Error("Unsupported event type")}function P(e){if(e.type==="v2")return I(e);if(e.type==="v1")return k(e);if(e.type==="cf")return z(e);throw new Error("Unsupported event type")}function N(e){let{path:t,body:o,httpMethod:r,requestContext:n,isBase64Encoded:s}=e;return{type:"v1",method:r,rawPath:t,url:t+T(e),body:Buffer.from(o??"",s?"base64":"utf8"),headers:L(e),remoteAddress:n.identity.sourceIp}}function R(e){let{rawPath:t,rawQueryString:o,requestContext:r}=e;return{type:"v2",method:r.http.method,rawPath:t,url:t+(o?`?${o}`:""),body:D(e),headers:G(e),remoteAddress:r.http.sourceIp}}function V(e){let{method:t,uri:o,querystring:r,body:n,headers:s,clientIp:i}=e.Records[0].cf.request;return{type:"cf",method:t,rawPath:o,url:o+(r?`?${r}`:""),body:Buffer.from(n?.data??"",n?.encoding==="base64"?"base64":"utf8"),headers:J(s),remoteAddress:i}}function k(e){let t={},o={};Object.entries(e.headers).forEach(([n,s])=>{if(Array.isArray(s))o[n]=s;else{if(s===null){t[n]="";return}t[n]=s}});let r={statusCode:e.statusCode,headers:t,body:e.body,isBase64Encoded:e.isBase64Encoded,multiValueHeaders:o};return a(r),r}function I(e){let t={};Object.entries(e.headers).filter(([r])=>r.toLowerCase()!=="set-cookie").forEach(([r,n])=>{if(n===null){t[r]="";return}t[r]=Array.isArray(n)?n.join(", "):n.toString()});let o={statusCode:e.statusCode,headers:t,cookies:e.headers["set-cookie"],body:e.body,isBase64Encoded:e.isBase64Encoded};return a(o),o}function z(e){let t={};Object.entries(e.headers).filter(([r])=>r.toLowerCase()!=="content-length").forEach(([r,n])=>{t[r]=[...t[r]||[],...Array.isArray(n)?n.map(s=>({key:r,value:s})):[{key:r,value:n.toString()}]]});let o={status:e.statusCode.toString(),statusDescription:"OK",headers:t,bodyEncoding:e.isBase64Encoded?"base64":"text",body:e.body};return a(o),o}function G(e){let{headers:t,cookies:o}=e,r={};Array.isArray(o)&&(r.cookie=o.join("; "));for(let[n,s]of Object.entries(t||{}))r[n.toLowerCase()]=s;return r}function D(e){let{body:t,isBase64Encoded:o}=e;return Buffer.isBuffer(t)?t:typeof t=="string"?Buffer.from(t,o?"base64":"utf8"):typeof t=="object"?Buffer.from(JSON.stringify(t)):Buffer.from("","utf8")}function T(e){let t=new URLSearchParams;if(e.multiValueQueryStringParameters){for(let[r,n]of Object.entries(e.multiValueQueryStringParameters))if(n!==void 0)for(let s of n)t.append(r,s)}if(e.queryStringParameters)for(let[r,n]of Object.entries(e.queryStringParameters))n!==void 0&&t.append(r,n);let o=t.toString();return o?`?${o}`:""}function L(e){e.multiValueHeaders;let t={};for(let[o,r]of Object.entries(e.multiValueHeaders))r&&(t[o.toLowerCase()]=r.join(","));for(let[o,r]of Object.entries(e.headers))r&&(t[o.toLowerCase()]=r);return t}function J(e){let t={};for(let[o,r]of Object.entries(e))for(let{value:n}of r)n&&(t[o.toLowerCase()]=n);return t}w();X();var m=l.join(__dirname,".next"),U=l.join(__dirname,".open-next"),$=b(m),Q=Y(),W=Z();a({nextDir:m});var K=new M.default({hostname:"localhost",port:Number(process.env.PORT)||3e3,conf:{...$,compress:!1},customServer:!1,dev:!1,dir:__dirname}).getRequestHandler();async function Pe(e){a("handler event",e);let t=E(e);if(W.files.includes(t.rawPath))return t.type==="cf"?oe(e):te();let o={method:t.method,url:t.url,headers:t.headers,body:t.body,remoteAddress:t.remoteAddress};a("IncomingMessage constructor props",o);let r=new d(o),n=new c({method:o.method});await ee(r,n);let s=n.statusCode||200,i=c.headers(n),f=x(Array.isArray(i["content-type"])?i["content-type"][0]:i["content-type"]),j=f?"base64":"utf8",y=c.body(n).toString(j);return a("ServerResponse data",{statusCode:s,headers:i,isBase64Encoded:f,body:y}),Q.includes(t.rawPath)&&i["cache-control"]&&(i["cache-control"]="public, max-age=0, s-maxage=31536000, must-revalidate"),P({type:t.type,statusCode:s,headers:i,isBase64Encoded:f,body:y})}function X(){process.chdir(__dirname)}function Y(){let e=l.join(m,"server","pages-manifest.json"),t=S.readFileSync(e,"utf-8");return Object.entries(JSON.parse(t)).filter(([o,r])=>r.endsWith(".html")).map(([o])=>o)}function Z(){let e=l.join(U,"public-files.json"),t=S.readFileSync(e,"utf-8");return JSON.parse(t)}async function ee(e,t){delete e.body;try{await K(e,t)}catch(o){console.error("NextJS request failed.",o),t.setHeader("Content-Type","application/json"),t.end(JSON.stringify({message:"Server failed to respond.",details:o},null,2))}}function te(){return{statusCode:503}}function oe(e){return e.Records[0].cf.request}export{Pe as handler};

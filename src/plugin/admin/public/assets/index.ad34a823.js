import{j as o,J as _,O as le,r as U,bZ as ae,cC as oe,cD as re,_ as f,F as ce,aa as L,a as Y,U as ie,cE as se,am as H,D as ee,a7 as ue,N as de,bq as K,f as ve,an as W,aQ as fe,aA as ye,ai as be}from"./index.e289dcd8.js";function k(l){return l!=null}var pe=function(e){var n=e.itemPrefixCls,t=e.component,r=e.span,a=e.labelStyle,u=e.contentStyle,p=e.bordered,i=e.label,s=e.content,c=e.colon,S=t;if(p){var d;return o(S,{class:[(d={},_(d,"".concat(n,"-item-label"),k(i)),_(d,"".concat(n,"-item-content"),k(s)),d)],colSpan:r},{default:function(){return[k(i)&&o("span",{style:a},[i]),k(s)&&o("span",{style:u},[s])]}})}return o(S,{class:["".concat(n,"-item")],colSpan:r},{default:function(){return[o("div",{class:"".concat(n,"-item-container")},[i&&o("span",{class:["".concat(n,"-item-label"),_({},"".concat(n,"-item-no-colon"),!c)],style:a},[i]),s&&o("span",{class:"".concat(n,"-item-content"),style:u},[s])])]}})},F=pe,me=function(e){var n=function(d,y,b){var P=y.colon,I=y.prefixCls,C=y.bordered,x=b.component,N=b.type,A=b.showLabel,O=b.showContent,h=b.labelStyle,j=b.contentStyle;return d.map(function(v,D){var g,$,m=v.props||{},M=m.prefixCls,R=M===void 0?I:M,T=m.span,q=T===void 0?1:T,J=m.labelStyle,Q=m.contentStyle,V=m.label,Z=V===void 0?($=(g=v.children)===null||g===void 0?void 0:g.label)===null||$===void 0?void 0:$.call(g):V,G=ae(v),E=oe(v),z=re(v),B=v.key;return typeof x=="string"?o(F,{key:"".concat(N,"-").concat(String(B)||D),class:E,style:z,labelStyle:f(f({},h.value),J),contentStyle:f(f({},j.value),Q),span:q,colon:P,component:x,itemPrefixCls:R,bordered:C,label:A?Z:null,content:O?G:null},null):[o(F,{key:"label-".concat(String(B)||D),class:E,style:f(f(f({},h.value),z),J),span:1,colon:P,component:x[0],itemPrefixCls:R,bordered:C,label:Z},null),o(F,{key:"content-".concat(String(B)||D),class:E,style:f(f(f({},j.value),z),Q),span:q*2-1,component:x[1],itemPrefixCls:R,bordered:C,content:G},null)]})},t=e.prefixCls,r=e.vertical,a=e.row,u=e.index,p=e.bordered,i=le(ne,{labelStyle:U({}),contentStyle:U({})}),s=i.labelStyle,c=i.contentStyle;return r?o(ce,null,[o("tr",{key:"label-".concat(u),class:"".concat(t,"-row")},[n(a,e,{component:"th",type:"label",showLabel:!0,labelStyle:s,contentStyle:c})]),o("tr",{key:"content-".concat(u),class:"".concat(t,"-row")},[n(a,e,{component:"td",type:"content",showContent:!0,labelStyle:s,contentStyle:c})])]):o("tr",{key:u,class:"".concat(t,"-row")},[n(a,e,{component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0,labelStyle:s,contentStyle:c})])},Se=me;L.any;var Ce=function(){return{prefixCls:String,label:L.any,labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0},span:{type:Number,default:1}}},xe=Y({name:"ADescriptionsItem",props:Ce(),slots:["label"],setup:function(e,n){var t=n.slots;return function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}}),te={xxxl:3,xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function he(l,e){if(typeof l=="number")return l;if(ee(l)==="object")for(var n=0;n<W.length;n++){var t=W[n];if(e[t]&&l[t]!==void 0)return l[t]||te[t]}return 3}function X(l,e,n){var t=l;return(e===void 0||e>n)&&(t=ye(l,{span:n}),be(e===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),t}function ge(l,e){var n=fe(l),t=[],r=[],a=e;return n.forEach(function(u,p){var i,s=(i=u.props)===null||i===void 0?void 0:i.span,c=s||1;if(p===n.length-1){r.push(X(u,s,a)),t.push(r);return}c<a?(a-=c,r.push(u)):(r.push(X(u,c,a)),t.push(r),a=e,r=[])}),t}var we=function(){return{prefixCls:String,bordered:{type:Boolean,default:void 0},size:{type:String,default:"default"},title:L.any,extra:L.any,column:{type:[Number,Object],default:function(){return te}},layout:String,colon:{type:Boolean,default:void 0},labelStyle:{type:Object,default:void 0},contentStyle:{type:Object,default:void 0}}},ne=Symbol("descriptionsContext"),w=Y({name:"ADescriptions",props:we(),slots:["title","extra"],Item:xe,setup:function(e,n){var t=n.slots,r=ie("descriptions",e),a=r.prefixCls,u=r.direction,p,i=U({});se(function(){p=H.subscribe(function(c){ee(e.column)==="object"&&(i.value=c)})}),ue(function(){H.unsubscribe(p)}),de(ne,{labelStyle:K(e,"labelStyle"),contentStyle:K(e,"contentStyle")});var s=ve(function(){return he(e.column,i.value)});return function(){var c,S,d,y,b=e.size,P=e.bordered,I=P===void 0?!1:P,C=e.layout,x=C===void 0?"horizontal":C,N=e.colon,A=N===void 0?!0:N,O=e.title,h=O===void 0?(S=t.title)===null||S===void 0?void 0:S.call(t):O,j=e.extra,v=j===void 0?(d=t.extra)===null||d===void 0?void 0:d.call(t):j,D=(y=t.default)===null||y===void 0?void 0:y.call(t),g=ge(D,s.value);return o("div",{class:[a.value,(c={},_(c,"".concat(a.value,"-").concat(b),b!=="default"),_(c,"".concat(a.value,"-bordered"),!!I),_(c,"".concat(a.value,"-rtl"),u.value==="rtl"),c)]},[(h||v)&&o("div",{class:"".concat(a.value,"-header")},[h&&o("div",{class:"".concat(a.value,"-title")},[h]),v&&o("div",{class:"".concat(a.value,"-extra")},[v])]),o("div",{class:"".concat(a.value,"-view")},[o("table",null,[o("tbody",null,[g.map(function($,m){return o(Se,{key:m,index:m,colon:A,prefixCls:a.value,vertical:x==="vertical",bordered:I,row:$},null)})])])])])}}});w.install=function(l){return l.component(w.name,w),l.component(w.Item.name,w.Item),l};var Pe=w;export{Pe as D};
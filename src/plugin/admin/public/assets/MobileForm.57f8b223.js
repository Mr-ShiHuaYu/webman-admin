var k=(g,l,s)=>new Promise((c,i)=>{var f=a=>{try{n(s.next(a))}catch(r){i(r)}},m=a=>{try{n(s.throw(a))}catch(r){i(r)}},n=a=>a.done?c(a.value):Promise.resolve(a.value).then(f,m);n((s=s.apply(g,l)).next())});import{a as I,c as B,r as _,m as L,f as h,k as e,o as S,h as w,j as o,p as t,I as z,B as x,q as y,t as b,F as R,aK as V}from"./index.108b3650.js";import{F as v}from"./index.e643dd2b.js";import"./index.175f92f1.js";import{C as E}from"./index.30128a3e.js";import{u as N,a as D,L as U,_ as j,b as q}from"./LoginFormTitle.7d5880ba.js";import"./_baseIteratee.0fa9033e.js";const H=I({setup(g){const l=v.Item,{t:s}=B(),{handleBackLogin:c,getLoginState:i}=N(),{getFormRules:f}=D(),m=_(),n=_(!1),a=L({mobile:"",sms:""}),{validForm:r}=q(m),C=h(()=>e(i)===U.MOBILE);function F(){return k(this,null,function*(){const d=yield r();!d||console.log(d)})}return(d,u)=>e(C)?(S(),w(R,{key:0},[o(j,{class:"enter-x"}),o(e(v),{class:"p-4 enter-x",model:e(a),rules:e(f),ref_key:"formRef",ref:m},{default:t(()=>[o(e(l),{name:"mobile",class:"enter-x"},{default:t(()=>[o(e(z),{size:"large",value:e(a).mobile,"onUpdate:value":u[0]||(u[0]=p=>e(a).mobile=p),placeholder:e(s)("sys.login.mobile"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),o(e(l),{name:"sms",class:"enter-x"},{default:t(()=>[o(e(E),{size:"large",class:"fix-auto-fill",value:e(a).sms,"onUpdate:value":u[1]||(u[1]=p=>e(a).sms=p),placeholder:e(s)("sys.login.smsCode")},null,8,["value","placeholder"])]),_:1}),o(e(l),{class:"enter-x"},{default:t(()=>[o(e(x),{type:"primary",size:"large",block:"",onClick:F,loading:n.value},{default:t(()=>[y(b(e(s)("sys.login.loginButton")),1)]),_:1},8,["loading"]),o(e(x),{size:"large",block:"",class:"mt-4",onClick:e(c)},{default:t(()=>[y(b(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):V("",!0)}});export{H as default};
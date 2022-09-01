var f=(t,p,n)=>new Promise((a,u)=>{var m=o=>{try{s(n.next(o))}catch(i){u(i)}},c=o=>{try{s(n.throw(o))}catch(i){u(i)}},s=o=>o.done?a(o.value):Promise.resolve(o.value).then(m,c);s((n=n.apply(t,p)).next())});import{B as R,u as k}from"./useTable.405e24a9.js";import{T as A}from"./BasicForm.916e1cdd.js";import{a as D,g as $,b as x}from"./common.ff3502ea.js";import{b as P}from"./index.6e8c7d2c.js";import U from"./Update.b11c25a4.js";import{aG as S,r as C,a as O,cE as G,dJ as N,ac as V,aI as h,o as j,h as q,j as b,p as v,cx as E,q as H,x as J}from"./index.108b3650.js";import"./index.231029bf.js";import"./useForm.36bc22c4.js";import"./index.953f7e4f.js";import"./index.e3609bb8.js";import"./index.598314dc.js";import"./index.175f92f1.js";import"./useWindowSizeFn.7499f353.js";import"./useContentViewHeight.184b200b.js";import"./ArrowLeftOutlined.e8086edf.js";import"./transButton.e45bcb8d.js";import"./index.d86e0097.js";import"./index.c225f064.js";import"./index.f552c070.js";import"./_baseIteratee.0fa9033e.js";import"./index.9a36eeaa.js";import"./sortable.esm.c20789c1.js";import"./RedoOutlined.ffacc1f1.js";import"./uniqBy.4a8aaebb.js";import"./scrollTo.97966baf.js";import"./index.92c277e7.js";import"./index.9af4cf7c.js";import"./index.e643dd2b.js";import"./index.30128a3e.js";import"./index.a6432c49.js";import"./download.c4ffbab8.js";import"./tree.696d2c4c.js";const F="/app/admin/auth/admin/select",T="/app/admin/auth/admin/insert",B="/app/admin/auth/admin/update",K="/app/admin/auth/admin/delete",g="/app/admin/auth/admin/schema",l=C({schemas:[]}),z=O({components:{ModalInserOrEdit:U,BasicTable:R,TableAction:A},setup(){const{createMessage:t}=J(),{success:p}=t,n=C([]),a=C("");G(()=>f(this,null,function*(){const r=yield D(g),y=r.columns;for(let e of y)if(e.primary_key){a.value=e.field;break}const I=r.forms;l.value.schemas=[];for(let e of I)if(e.searchable&&(e.search_type=="between"?(l.value.schemas.push({field:`${e.field}[0]`,component:"Input",label:e.comment||e.field,colProps:{offset:1,span:5}}),l.value.schemas.push({field:`${e.field}[1]`,component:"Input",label:"\u3000\u5230",colProps:{span:5}})):l.value.schemas.push({field:e.field,component:"Input",label:e.comment||e.field,colProps:{offset:1,span:10}})),e.list_show){let _={dataIndex:e.field,title:e.comment||e.field,sorter:e.enable_sort};n.value.push(_),e.field=="avatar"&&(_.width=50,_.customRender=({record:M})=>N("img",{src:M[e.field]}))}l.value.schemas.length||V(()=>{o({useSearchForm:!1})})}));const[u,{openModal:m}]=P(),[c,{reload:s,setProps:o}]=k({api:$(F),columns:n,useSearchForm:!0,bordered:!0,formConfig:l,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function i(r){return f(this,null,function*(){if(!a.value){E("\u5F53\u524D\u8868\u6CA1\u6709\u4E3B\u952E\uFF0C\u65E0\u6CD5\u7F16\u8F91");return}m(!0,{selectUrl:F,insertUrl:T,updateUrl:B,schemaUrl:g,column:a.value,value:r[a.value]})})}function d(r){return f(this,null,function*(){if(!a.value){E("\u5F53\u524D\u8868\u6CA1\u6709\u4E3B\u952E\uFF0C\u65E0\u6CD5\u5220\u9664");return}yield x(K,{column:a.value,value:r[a.value]}),p("\u5220\u9664\u6210\u529F"),s()})}function w(){m(!0,{selectUrl:F,insertUrl:T,updateUrl:B,schemaUrl:g})}return{registerTable:c,handleEdit:i,handleDelete:d,openRowModal:w,register:u,reload:s}}}),L={class:"p-4"},Q=H(" \u6DFB\u52A0\u8BB0\u5F55 ");function W(t,p,n,a,u,m){const c=h("a-button"),s=h("TableAction"),o=h("BasicTable"),i=h("ModalInserOrEdit");return j(),q("div",L,[b(o,{onRegister:t.registerTable,showTableSetting:""},{toolbar:v(()=>[b(c,{type:"primary",onClick:t.openRowModal},{default:v(()=>[Q]),_:1},8,["onClick"])]),action:v(({record:d})=>[b(s,{actions:[{label:"\u7F16\u8F91",onClick:t.handleEdit.bind(null,d)},{label:"\u5220\u9664",icon:"ic:outline-delete-outline",popConfirm:{title:"\u662F\u5426\u5220\u9664\uFF1F",confirm:t.handleDelete.bind(null,d)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),b(i,{onRegister:t.register,minHeight:300,onReload:t.reload},null,8,["onRegister","onReload"])])}var ke=S(z,[["render",W]]);export{ke as default};
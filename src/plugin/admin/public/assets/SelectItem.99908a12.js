import{aG as i,a as l,aN as r,b as p,f as m,aI as d,o as c,h as u,i as f,t as g,j as _,b5 as b,n as v}from"./index.108b3650.js";import{b as y}from"./index.b6a15cee.js";import"./index.a13b2ac8.js";import"./uniqBy.4a8aaebb.js";import"./_baseIteratee.0fa9033e.js";import"./index.b44416c6.js";import"./useWindowSizeFn.7499f353.js";import"./useContentViewHeight.184b200b.js";import"./index.be4d7d31.js";import"./RedoOutlined.ffacc1f1.js";import"./lock.1e7e993e.js";import"./ArrowLeftOutlined.e8086edf.js";import"./index.9a36eeaa.js";const C=l({name:"SelectItem",components:{Select:r},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item"),a=m(()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{});function n(s){e.event&&y(e.event,s)}return{prefixCls:t,handleChange:n,getBindValue:a}}});function S(e,t,a,n,s,h){const o=d("Select");return c(),u("div",{class:v(e.prefixCls)},[f("span",null,g(e.title),1),_(o,b(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}var P=i(C,[["render",S],["__scopeId","data-v-6707e46b"]]);export{P as default};
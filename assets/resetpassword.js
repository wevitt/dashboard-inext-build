import{d as n,n as l,w as e,p as c,e as i,b as t,a as r,f as p,q as m}from"./index.js";import{_ as u}from"./CenteredContainer.js";import{_ as g}from"./FormCard.js";const f={href:"#",class:"flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"},_=["src"],b=r("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Resetta password ",-1),x=r("form",{class:"space-y-4 md:space-y-6",action:"'/auth/login'"},[r("div",null,[r("label",{for:"password",class:"text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Nuova Password"),r("input",{type:"password",autocomplete:"current-password",name:"password",id:"password",placeholder:"••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""})]),r("div",null,[r("label",{for:"confirm_password",class:"text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Conferma Password"),r("input",{type:"password",autocomplete:"current-password",name:"confirm_password",id:"confirm_password",placeholder:"••••••••",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""})]),r("button",{type:"submit",class:"w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"},"Cambia Password")],-1),q=n({__name:"resetpassword",setup(y){const{getLogoUrl:o}=m();return(w,k)=>{const a=g,s=u,d=c;return i(),l(d,null,{default:e(()=>[t(s,null,{default:e(()=>[r("a",f,[r("img",{class:"h-8 mr-2",src:p(o)(),alt:"logo",title:"Logo"},null,8,_)]),t(a,null,{default:e(()=>[b,x]),_:1})]),_:1})]),_:1})}}});export{q as default};

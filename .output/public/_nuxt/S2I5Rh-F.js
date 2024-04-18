import{o as l,c as o,a as e,t as h,F as v,f as T,g as U,u as z,s as B,r as f,h as D,i as y,j as C,k as p,v as I,l as Q,n as q,m as x,A as $,q as A,b as F}from"./t0f9eMhd.js";import{u as E}from"./DACE-9z0.js";const G={class:"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-100 lg:aspect-none hover:opacity-75"},H=["src"],L={class:"mt-4 flex justify-between"},O={class:"text-md font-bold"},R={class:"text-md font-medium"},J={__name:"carditem",props:{imagesrc:String,title:String,price:Number},setup(a){return(i,d)=>(l(),o(v,null,[e("div",G,[e("img",{src:a.imagesrc,class:""},null,8,H)]),e("div",L,[e("div",null,[e("h3",O,h(a.title),1)]),e("p",R,"$"+h(a.price),1)])],64))}},K=J,W=T("cart",{state:()=>({items:[]}),getters:{totalItems(){return this.items.reduce((a,i)=>a+i.quantity,0)},totalPrice(){return this.items.reduce((a,i)=>a+i.price*i.quantity,0)}},actions:{addItem(a){const i=this.items.find(d=>d.id===a.id);i?i.quantity+=a.quantity:this.items.push(a)},removeItem(a){this.items=this.items.filter(i=>i.id!==a)},clearCart(){this.items=[]},updateItemQuantity(a,i){const d=this.items.find(k=>k.id===a);d&&(d.quantity=i),(d==null?void 0:d.quantity)==0&&this.removeItem(a)}}}),X={class:"flex h-screen"},Y={class:"grow h-screen overflow-y-auto p-4"},Z={key:0,class:"flex justify-center items-center h-full animate__animated animate__fadeIn"},ee=e("div",{class:"animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"},null,-1),te=[ee],se={key:1},ae={class:""},ie={class:"mt-2 pt-4 absolute top-0 left-0 w-full z-10 bg-pale-sky-100 dark:bg-pale-sky-800 rounded-full shadow-lg shadow-pale-sky-500/20"},le={class:"flex flex-wrap"},oe=["onClick"],ne={class:"mt-16 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-16"},de=["onClick"],re={class:"flex flex-row-reverse pt-1 animate__animated animate__fadeIn"},ce=["onClick"],ue={key:1,class:"mt-2 w-full middle none center rounded-full bg-white font-mono text-xs font-bold uppercase text-white shadow-md shadow-pale-sky-500/20 transition-all hover:shadow-lg"},me={class:"flex flex-row justify-between px-2"},_e=["onClick"],fe={class:"block font-medium text-gray-900 my-auto text-xl animate__animated animate__fadeIn",for:"quantity"},he=["onClick"],ve={key:1,class:"animate__animated animate__fadeIn"},ge={key:2,class:"fixed z-10 inset-0 overflow-y-auto animate__animated animate__fadeIn"},be={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 animate__animated animate__fadeIn"},ye=e("div",{class:"fixed inset-0 transition-opacity","aria-hidden":"true"},[e("div",{class:"absolute inset-0 bg-gray-500 opacity-75"})],-1),pe=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),xe={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},ke={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},we={class:"sm:flex sm:items-center"},Ce={class:"mt-3 sm:mt-0 sm:w-1/2 flex justify-center items-center"},Ie=["src"],qe={class:"mt-3 sm:mt-0 sm:ml-6 sm:w-1/2"},$e={class:"mb-4"},je=e("label",{for:"title",class:"block text-sm font-medium text-gray-700"},"Название",-1),Se={class:"mb-4"},Pe=e("label",{for:"category",class:"block text-sm font-medium text-gray-700"},"Категория",-1),Me=["value"],Ve={class:"mb-4"},Ne=e("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"Цена",-1),Te={class:"fixed bottom-0 left-0 w-full p-4"},Ue={class:"flex flex-row justify-between"},ze=e("div",null,"40min",-1),Be=e("div",null,"Заказ",-1),Ae=U({__name:"index",setup(a){z({title:"Store"});const i=W(),{items:d,totalItems:k,totalPrice:j}=B(i),m=f(0),b=f(!0),c=f([]),r=f(null);E();const u=f({count:0,results:[]}),_=f({count:0,results:[]});function S(){Promise.all([$.get("categories/"),$.get("products/")]).then(function([s,n]){_.value=s.data,u.value=n.data,_.value.count>0?(m.value=_.value.results[0].id,P()):u.value.count>0&&(c.value=u.value.results),b.value=!1}).catch(function(s){console.log(s),b.value=!0})}function P(){m.value===0?c.value=u.value.results:c.value=u.value.results.filter(s=>s.category===m.value)}D(m,s=>{s===0?c.value=u.value.results:c.value=u.value.results.filter(n=>n.category===s)});function M(s){r.value={...s}}function V(){r.value=null}function N(s){i.addItem({id:s.id,title:s.title,price:s.price,quantity:s.quantity})}function w(s){i.updateItemQuantity(s.id,s.quantity)}return S(),(s,n)=>(l(),o(v,null,[e("div",X,[e("div",Y,[b.value?(l(),o("div",Z,te)):(l(),o("div",se,[e("div",ae,[e("div",ie,[e("div",le,[_.value.count>0?(l(!0),o(v,{key:0},y(_.value.results,t=>(l(),o("button",{key:t.id,onClick:g=>m.value=t.id,class:q(["text-center bg-transparent hover:bg-pale-sky-200 my-auto shadow-lg dark:shadow-neutral-700/50 text-black-700 font-semibold p-1 border-2 border-pale-sky-900 dark:border-neutral-400 hover:dark:bg-neutral-500 rounded-lg animate__animated hovanimate__swing ml-3 mb-3",{"bg-neutral-400 dark:bg-pale-sky-600":t.id===m.value}])},h(t.title),11,oe))),128)):C("",!0)])])]),e("div",ne,[c.value.length!==0?(l(!0),o(v,{key:0},y(c.value,t=>(l(),o("div",{key:t.id,class:"group relative bg-pale-sky-200 dark:bg-pale-sky-800 p-3 rounded-md"},[e("a",{href:"",class:"animate__animated animate__fadeIn",onClick:A(g=>M(t),["prevent"])},[F(K,{imagesrc:"data:image/png;base64,"+t.images,title:t.title,price:t.price},null,8,["imagesrc","title","price"])],8,de),e("div",re,[t.quantity?(l(),o("div",ue,[e("div",me,[e("button",{onClick:g=>{t.quantity--,w(t)},class:"w-8 text-black bg-white text-2xl my-1 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out"},"-",8,_e),e("label",fe,h(t.quantity),1),e("button",{onClick:g=>{t.quantity++,w(t)},class:"w-8 text-black bg-white text-2xl my-1 rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out"},"+",8,he)])])):(l(),o("button",{key:0,onClick:g=>{t.quantity=1,N(t)},class:"mt-2 py-1 w-full middle none center rounded-full bg-white font-mono font-bold uppercase shadow-md shadow-pale-sky-500/20 transition-all duration-200 hover:shadow-lg active:bg-pale-sky-900 active:text-pale-sky-400 text-black text-2xl"},"+",8,ce))])]))),128)):(l(),o("div",ve,"Нет данных"))])])),r.value?(l(),o("div",ge,[e("div",be,[ye,pe,e("div",xe,[e("div",ke,[e("div",we,[e("div",Ce,[e("img",{src:"data:image/png;base64,"+r.value.images,class:"w-full"},null,8,Ie)]),e("div",qe,[e("div",$e,[je,p(e("input",{disabled:"",type:"text",id:"title","onUpdate:modelValue":n[0]||(n[0]=t=>r.value.title=t),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[I,r.value.title]])]),e("div",Se,[Pe,p(e("select",{disabled:"",id:"category","onUpdate:modelValue":n[1]||(n[1]=t=>r.value.category=t),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},[(l(!0),o(v,null,y(_.value.results,t=>(l(),o("option",{key:t.id,value:t.id},h(t.title),9,Me))),128))],512),[[Q,r.value.category]])]),e("div",Ve,[Ne,p(e("input",{disabled:"",type:"number",id:"price","onUpdate:modelValue":n[2]||(n[2]=t=>r.value.price=t),class:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[I,r.value.price,void 0,{number:!0}]])])])])]),e("div",{class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},[e("button",{type:"button",onClick:V,class:"my-3 md:my-0 lg:my-0 xl:my-0 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"}," Отмена ")])])])])):C("",!0)])]),e("div",Te,[e("button",{onClick:n[3]||(n[3]=()=>{}),class:q(["w-full py-3 px-6 bg-pale-sky-800 dark:bg-pale-sky-50 dark:text-black text-white font-semibold rounded-xl hover:bg-pale-sky-700 dark:hover:bg-pale-sky-600 transition duration-200 animate__animated shadow-md shadow-gray-400 dark:shadow-pale-sky-700 hover:shadow-lg",{animate__fadeInUp:x(d).length>0,animate__fadeOutDown:x(d).length===0}])},[e("div",Ue,[ze,Be,e("div",null,h(x(j))+"руб",1)])],2)])],64))}});export{Ae as default};

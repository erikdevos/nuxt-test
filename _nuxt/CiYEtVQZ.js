import{u as h,_ as b}from"./CbcHYbWT.js";import{_ as y,u as P,s as k,r as c,x,c as r,a as o,b as B,t as e,o as n}from"./BjYy0AQu.js";const S={class:"page-content"},w={class:"container"},C={key:0,class:"product-wrapper"},D={class:"product-info"},I={class:"product-label"},M={class:"product-price"},$=["src"],N={key:1},T={__name:"[slug]-[id]",setup(L){const _=P(),d=Number(_.params.id.split("-").pop()),u=h(),v=k(),t=c(null),i=c(""),s=c(null),p=c([{name:"Home",to:"/"},{name:"Products",to:"/products"},{name:"Loading...",to:"#"}]),m=async()=>{u.products.length===0&&(console.log("Fetching products..."),await u.fetchProducts()),console.log("Looking for product with ID:",d),t.value=u.getProductById(d),console.log("Matched Product:",t.value),t.value&&(p.value[2]={name:t.value.title,to:`/product/${t.value.slug}-${t.value.id}`})};function g(l){v.addToCart(l),i.value=`"${l.title}" has been added to your cart.`,s.value&&(s.value.showModal(),setTimeout(()=>s.value.close(),2e3))}return x(()=>{m()}),(l,a)=>{const f=b;return n(),r("section",S,[o("div",w,[B(f,{breadcrumbs:p.value},null,8,["breadcrumbs"]),t.value?(n(),r("div",C,[o("div",D,[o("h1",null,e(t.value.title),1),o("div",I,e(t.value.category),1),o("p",null,e(t.value.description),1),o("div",M,"€"+e(t.value.price),1),o("button",{onClick:a[0]||(a[0]=V=>g(t.value)),class:"btn pos"},"Add to cart")]),o("img",{class:"product-image",src:t.value.image||"https://picsum.photos/300",alt:"Product image"},null,8,$)])):(n(),r("div",N,a[1]||(a[1]=[o("p",null,"Product not found.",-1)]))),o("dialog",{ref_key:"cartDialog",ref:s,class:"cart-dialog"},[o("p",null,e(i.value),1)],512)])])}}},F=y(T,[["__scopeId","data-v-1a08b382"]]);export{F as default};
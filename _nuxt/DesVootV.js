import{_ as i,C as n,o as a,c,a as d,F as u,y as h,b as g,w as p,d as P,t as f,D as m}from"./Btk8pwoV.js";const _={"aria-label":"Breadcrumbs"},C={__name:"breadcrumb",props:{breadcrumbs:{type:Array,required:!0}},setup(t){return(o,e)=>{const r=n("router-link");return a(),c("nav",_,[d("ul",null,[(a(!0),c(u,null,h(t.breadcrumbs,(s,l)=>(a(),c("li",{key:l},[g(r,{to:s.to},{default:p(()=>[P(f(s.name),1)]),_:2},1032,["to"])]))),128))])])}}},y=i(C,[["__scopeId","data-v-db3fbb3d"]]),b=m("product",{state:()=>({products:[],allProducts:[],filteredProducts:[],totalProducts:0,pageSize:8,currentPage:1,allCategories:[]}),actions:{async fetchAllProducts(){try{const o=await(await fetch("https://dummyjson.com/products?limit=0")).json();this.allProducts=o.products.map(e=>({...e,slug:this.generateSlug(e.title)})),this.filteredProducts=this.allProducts,this.updateCategories(this.allProducts),console.log("Fetched All Products:",this.allProducts.length),console.log("Categories:",this.allCategories)}catch(t){console.error("Error fetching all products:",t)}},async fetchProducts(t=1,o=this.pageSize){try{const r=await(await fetch(`https://dummyjson.com/products?skip=${(t-1)*o}&limit=${o}`)).json();this.products=r.products.map(s=>({...s,slug:this.generateSlug(s.title)})),this.totalProducts=r.total,this.currentPage=t,console.log("Fetched Products for Page:",this.products)}catch(e){console.error("Error fetching products for page:",e)}},getProductById(t){console.log("Looking for product with ID:",t),console.log("All Products:",this.allProducts);const o=this.allProducts.find(e=>e.id===parseInt(t));return console.log("Matched Product:",o),o},filterProducts(t){if(!t)this.filteredProducts=this.allProducts;else{const o=t.toLowerCase();this.filteredProducts=this.allProducts.filter(e=>e.title.toLowerCase().includes(o)||e.description.toLowerCase().includes(o)||e.category.toLowerCase().includes(o))}console.log("Filtered Products:",this.filteredProducts)},updateCategories(t){const o=t.map(e=>e.category).filter((e,r,s)=>s.indexOf(e)===r);this.allCategories=o},generateSlug(t){return t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}},getters:{totalPages(){return Math.ceil(this.totalProducts/this.pageSize)}}});export{y as _,b as u};
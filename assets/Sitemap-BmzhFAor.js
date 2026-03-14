import{r as n}from"./vendor-CC4Y5KOy.js";import{s as p}from"./index-BRjo04K7.js";import"./ui-_FnEaxuS.js";import"./charts-BjD6jndi.js";import"./supabase-CV4rtS2H.js";const s="https://lepoa.online",h=()=>(n.useEffect(()=>{(async()=>{try{const{data:o,error:r}=await p.from("product_catalog").select("id, updated_at").eq("is_active",!0);if(r)throw r;const a=new Date().toISOString(),c=["","/catalogo","/meu-estilo","/quiz"];let t=`<?xml version="1.0" encoding="UTF-8"?>
`;t+=`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;for(const e of c)t+=`  <url>
`,t+=`    <loc>${s}${e}</loc>
`,t+=`    <lastmod>${a}</lastmod>
`,t+=`    <changefreq>daily</changefreq>
`,t+=`    <priority>${e===""?"1.0":"0.8"}</priority>
`,t+=`  </url>
`;if(o)for(const e of o){const i=e.updated_at?new Date(e.updated_at).toISOString():a;t+=`  <url>
`,t+=`    <loc>${s}/produto/${e.id}</loc>
`,t+=`    <lastmod>${i}</lastmod>
`,t+=`    <changefreq>weekly</changefreq>
`,t+=`    <priority>0.7</priority>
`,t+=`  </url>
`}t+="</urlset>",document.open("text/xml"),document.write(t),document.close()}catch(o){console.error("Erro ao gerar sitemap:",o),document.body.innerHTML="Erro ao gerar sitemap"}})()},[]),null);export{h as Sitemap};

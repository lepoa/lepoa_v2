const s="5562991223519";function c(t,e){let o,r;e===void 0?(o=s,r=t):(o=t,r=e);const a=u(o),n=encodeURIComponent(r);return`https://wa.me/${a}?text=${n}`}function u(t){const e=t.replace(/\D/g,"");return e.startsWith("55")&&e.length===13?e:e.length===11?`55${e}`:e}function i(t){return t?t.replace(/@/g,"").replace(/\s/g,"").toLowerCase().trim():""}function l(t){if(!t)return"";const e=i(t);return e?`@${e}`:""}function d(t){const e=i(t);return e?`https://www.instagram.com/${e}`:null}function p(t,e){return`Oi, tudo bem? 💛
Aqui é da LE.POÁ. Muito obrigada por participar da nossa Live Shop.

${e?`Sua sacola #${e} já está pronta.`:"Sua sacola já está pronta."}
Para manter tudo organizado, pedimos que finalize seu pedido pelo link abaixo:
👉 ${t}

Qualquer dúvida, fico à disposição.`}function g(t,e,o){const r=e.map(a=>{let n=`${a.name} tam ${a.size}`;return a.color&&(n+=` (${a.color})`),n+=` x${a.quantity}`,n}).join(", ");return`Oi! Quero ajuda com meu pedido #${t}. Itens: ${r}. Total: ${o}.`}function f(t){return`Oi! Quero falar sobre o pedido #${t}.`}function m(){return"Oi! Vim pelo Provador VIP e queria tirar uma dúvida 😊"}export{f as a,c as b,g as c,m as d,l as e,p as f,d as g};

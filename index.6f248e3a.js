const t=document.getElementById("app");(async()=>{let e=await fetch("https://api.escuelajs.co/api/v1/products?offset=5&limit=15"),a=await e.json(),i=a?.map(t=>`
      <article class="Card">
        <img src="${t.images[0]}" alt="${t.title}" />
        <h2>${t.title} <small>Precio $${t.price}</small></h2>
      </article>
    `).join(""),s=document.createElement("section");s.classList.add("Items"),s.innerHTML=i,t.appendChild(s)})();
//# sourceMappingURL=index.6f248e3a.js.map

//✏️ Actividad: Renderizando la barra de navegación del store

const navSelector = document.getElementById("nav-list");
const options = [
    { 
      title: "Ofertas de la semana", 
      linkTo: "./outlet.html", 
      opts: ["Laptops", "Audio", "Auticulares"] 
    },
    { 
      title: "Cómo comprar", 
      linkTo: "./how.html", 
      opts: ["Formas de pago", "Envios", "Devoluciones"] 
    },
    { 
      title: "Costos y tarifas", 
      linkTo: "./taxs.html", 
      opts: ["Impuestos", "Facturación"] 
    },
    { 
      title: "Mis pedidos", 
      linkTo: "./orders.html", 
      opts: ["Pedir nuevamente", "Lista de deseos"] 
    },
    { 
      title: "Garantía de Entrega", 
      linkTo: "./warranty.html", 
      opts: [] // No sub-options
    }
  ];
  

for (let option of options) {
     // Crear un elemento li
  const listItem = document.createElement("li");
 // Crear un elemento a
  const anchor = document.createElement("a");
//   anchor.className = "nav-button";
  anchor.textContent = option.title;
  anchor.href = option.linkTo;
   // Añadiendo el elemento a dentro de li
  listItem.appendChild(anchor);
  //Añadiendo el elemento li dentro de ul
  navSelector.appendChild(listItem);
}


// ✏️ Actividad: Renderizando el pie de página del store

const footerSelector = document.querySelector("#footer");
for (let option of options) {
    // Create the column div
    const colDiv = document.createElement("div");
    colDiv.classList.add("col");
  
    // Create the unordered list
    const ul = document.createElement("ul");
  
    // Create the main list item with title
    const mainLi = document.createElement("li");
    mainLi.classList.add("col-main-item");
  
    const mainLink = document.createElement("a");
    mainLink.href = option.linkTo;
    mainLink.textContent = option.title;
  
    mainLi.appendChild(mainLink);
    ul.appendChild(mainLi);
  
    // Create list items for each opt
    for (let opt of option.opts) {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = "#"; // Assuming '#' as the default href, you can change this as needed
      link.textContent = opt;
      li.appendChild(link);
      ul.appendChild(li);
    }
  
    // Append the ul to the column div
    colDiv.appendChild(ul);
  
    // Append the column div to the footer
    footerSelector.appendChild(colDiv);
  }
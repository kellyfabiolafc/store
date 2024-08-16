//✏️ Actividad: Renderizando la barra de navegación del store

const navSelector = document.getElementById("nav-list");
const options = [
  { title: "Ofertas ", linkTo: "./outlet.html" },
  { title: "Como comprar", linkTo: "./how.html" },
  { title: "Costos y tarifas", linkTo: "./taxs.html" },
  { title: "Mis pedidos", linkTo: "./orders.html" },
  { title: "Garantia", linkTo: "./warranty.html" }
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


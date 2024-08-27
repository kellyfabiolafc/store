import { products } from "./products.js";


const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

// ✏️Actividad: Renderizar dinámicamente la vista de detalle

function printDetails(id, products) {
  console.log("ID:", id);
  console.log("Products:", products);
  const product = products.find((each) => each.id == id);
  console.log(product);
  const detailsTemplate = `
          <div class="product-images"">
            <div class="thumbnails">
              ${product.images
                .map(
                  (img, index) => `
                <div class="thumbnail-container">
                  <img
                    src="${img}"
                    alt="Thumbnail ${index + 1}"
                    class="thumbnail"
                  />
                </div>
              `
                )
                .join("")}

            </div>
            <img
            src="${product.images[0]}"
               id="bigImg"
              alt="Producto"
              id="product-image"
              class="main-image"
            />
          </div>

          <div class="product-description">
            <h2>${product.title}</h2>
            <form class="selector">
              <fieldset>
                <label class="label" for="color">Color</label>
              <select type="text" id="color-${id}"  placeholder="Selecciona un color">
//          ${product.colors
    .map((each) => `<option value=${each}>${each}</option>`)
    .join("")}
      </select>
              </fieldset>
            </form>
            <div>
              <span>Descripción</span>
              <p>
                Experience the power of creativity with the MacBook Pro 13'4.
                Featuring 8GB of RAM and 512GB of storage, this laptop provides
                the performance and storage capacity needed for demanding tasks.
                The sleek design in silver and space gray adds a touch of
                sophistication. The high-resolution Retina display brings your
                visuals to life, whether you're editing photos, creating videos,
                or simply browsing the web. With the latest technology and a
                lightweight build, the MacBook Pro 13'4 is the perfect companion
                for professionals and creative individuals alike.
              </p>
            </div>
          </div>

          <div class="product-details">
            <p><strong>Total:</strong></p>
            <p id="totalPrice"class="price">$${product.price}</p>
            <p>
              ${product.description}.  Podés recuperar ARS 50711
              haciendo la solicitud en AFIP.
            </p>
            <ul>
              <li>
                <i class="fas fa-shipping-fast"></i>Agrega el producto al
                carrito para conocer los costos de envío
              </li>
              <li>
                <i class="fas fa-plane"></i>Recibí aproximadamente entre 10 y 15
                días hábiles, seleccionando envío normal
              </li>
            </ul>
            <div class="actions">
              <div class="top-button">
               <input   id="quantity-${id}"  type="number"  value="1" min="1" />
                <button>Comprar</button>
              </div>
              <div class="bottom-button">
                <button id="savedProduct">Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>
          </div>
   `;

  const detailsSelector = document.getElementById("details");
  if (detailsSelector) {
    detailsSelector.innerHTML = detailsTemplate;

    const thumbnails = document.querySelectorAll(".thumbnail");
    thumbnails.forEach((thumbnail) => (thumbnail.onclick = changeMini));

    // Handle input changes for quantity
    const inputSelect = document.querySelector("#quantity-" + id);
    if (inputSelect) {
      inputSelect.oninput = changeSubtotal;
    } else {
      console.error('Element with id "quantity" not found');
    };

    const buttonSelect = document.getElementById("savedProduct");
    if (buttonSelect) {
      buttonSelect.onclick = () => saveProduct(id);
    } else {
      console.error("Element with id savedProduct not found");
    };
  } else {
    console.error('Element with id "details" not found');
  }
}

printDetails(id, products);

// ✏️Actividad: Renderizar dinámicamente el select de color

// ✏️Actividad: Renderizar dinámicamente las miniaturas

console.log("Evento de click");
//  ✏️ Actividad: Programar las miniaturas de la vista de detalle

// A modo de ejemplo:

function changeMini(event) {
  const selectedSrc = event.target.src;
  const bigSelector = document.querySelector("#bigImg");
  bigSelector.src = selectedSrc;
}

console.log("✏️ Actividad: Calcular el subtotal a pagar")

// guarde en una variable la cantidad de productos a comprar

// busque el producto
// // calcule el subtotal
// Function to update the subtotal
function changeSubtotal(e) {
  const cantidadDeProductos = e.target.value;
  const product = products.find((each) => each.id == id);
  if (product) {
    const subTotal = cantidadDeProductos * product.price;
    const totalSelect = document.querySelector("#totalPrice");
    if (totalSelect) {
      totalSelect.innerHTML = `$${subTotal}`;
    } else {
      console.error('Element with id "totalPrice" not found');
    }
  } else {
    console.error("Product not found");
  }
};
// seleccione la etiqueta donde se renderizar el subtotal

// actualice la vista con la imagen agrandada seleccionada
// Guardando información en LocalStorage-----------------------------------
console.log("✏️ Actividad: Agregar un producto al carrito");

// Define la función saveProduct para que:
// dependa del id del botón
console.log(products)
function saveProduct(id) {
  // busque un producto con el id
  const found = products.find((each) => each.id == id);
  console.log(found);
  // defina un objeto con las propiedades especificadas en la compra
console.log("aun funciono")
  const product = {
    id: id,
    title: found.title,
    price: found.price,
    description:found.description,
    image: found.images[0],
    color: document.querySelector("#color-" + id).value,
    quantity: document.querySelector("#quantity-" + id).value,
  };
 // Obtenga el carrito actual del localStorage (o cree uno nuevo si no existe)
 let cart = JSON.parse(localStorage.getItem("cart")) || [];

 // Asegúrese de que cart sea un array
 if (!Array.isArray(cart)) {
   cart = [];
 }

 // Elimina el producto si ya está en el carrito (para actualizarlo después)
 cart = cart.filter(item => item.id !== id);

 // Agregue el nuevo producto al carrito
 cart.push(product);

 // Convierta a JSON el carrito actualizado
 localStorage.setItem("cart", JSON.stringify(cart));

console.log("Producto guardado en el carrito", cart);
  
}


// ✏️ Actividad: Agregar un producto al carrito
// La función saveProduct guarda en la clave cart del localStorage un producto. Cuando quieres agregar otro producto, la funcionalidad desarrollada “sobre-escribe” la clave cart con el producto recientemente “añadido” (borrando los datos del producto añadido con anterioridad). 

// Modifica la función saveProduct para que además de lo que ya hacía:

// busque y verifique si existe la clave cart en localstorage

// si la clave existe debe agregar el nuevo producto al array de productos y guardarlo en el storage

// si la clave no existe debe crear un array con el producto y guardarlo en el storage

// Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.
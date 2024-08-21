import { products } from "./products.js";

const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
alert(id);
// ✏️Actividad: Renderizar dinámicamente la vista de detalle


// A modo de ejemplo:

function printDetails(id,products) {
    console.log('ID:', id);
    console.log('Products:', products);
   const product = products.find((each) => each.id == id);
   console.log(product);
   const detailsTemplate = `
     <div class="columns-container">
          <div class="class="product-images"">
            <div class="thumbnails">
              <div class="thumbnail-container">
              ${product.images.map((img, index) => `
                <div class="thumbnail-container">
                  <img
                    src="${img}"
                    alt="Thumbnail ${index + 1}"
                    class="thumbnail"
                  />
                </div>
              `).join('')}
              </div>
              <div class="thumbnail-container">
                <img
                  src="../assets/mock2.jpg"
                  alt="Descripción de la imagen 2"
                  class="thumbnail"
                />
              </div>
            </div>
            <img
              src="/assets/MacbookPro15'4.jpg"
              alt="Producto"
              id="product-image"
              class="main-image"
            />
          </div>

          <div class="product-description">
            <h2>MacBook Pro 13'4</h2>
            <form class="selector">
              <fieldset>
                <label class="label" for="color">Color</label>
                <select
                  id="color"
                  type="text"
                  placeholder="Selecciona un color"
                >
                  <option value="color plata">Silver color</option>
                  <option value="blanco estelar">Stellar white</option>
                  <option value="gris espacial">Space gray</option>
                  <option value="Media noche">Midnight</option>
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
            <p class="price">$750000</p>
            <p>
              Incluye impuesto PAIS y percepción AFIP. Podés recuperar ARS 50711
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
                <input type="number" value="1" min="1" />
                <button>Comprar</button>
              </div>
              <div class="bottom-button">
                <button>Agregar al Carrito</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenedor de seccion ofertas -->

        <div class="sales-block">
          <h2>Ofertas de la semana</h2>
          <!-- Contenedor de productos en ofertas -->
          <div class="offers">
            <article class="product-card">
              <img
                class="product-img"
                src="/assets/nuevos/tabletnegra.png"
                alt="Macbook Pro"
              />
              <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                  <span class="price">$750.000</span>
                  <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </article>

            <article class="product-card">
              <img
                class="product-img"
                src="/assets/nuevos/audifono.png"
                alt="Macbook Pro"
              />
              <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                  <span class="price">$750.000</span>
                  <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </article>

            <article class="product-card">
              <img
                class="product-img"
                src="/assets/nuevos/iphat.png"
                alt="Macbook Pro"
              />
              <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                  <span class="price">$750.000</span>
                  <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                  Incluye impuesto País y percepción AFIP
                </div>
              </div>
            </article>
          </div>
        </div>
   `;
  

   const detailsSelector = document.getElementById("details");

   if (detailsSelector) {
       detailsSelector.innerHTML = detailsTemplate;
   } else {
       console.error('Element with id "details" not found');
   }
}
printDetails(id,products);
// Abre con live server el archivo index.html el archivo index.html, prueba el direccionamiento de los links y verifica la correcta renderización de la vista de detalle.

// Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice correctamente.

// ✏️Actividad: Renderizar dinámicamente el select de color
// En esta actividad, sólo nos enfocaremos en renderizar dinámicamente las opciones del select de colores del producto. Para este ejercicio tienes que:

// Desde Visual Studio Code, abre la carpeta store y luego el archivo productDetail.js

// Modifica la función printDetails para que el select renderice de forma dinámica las opciones de los colores.

// Luego de “mapear”, une todos los elementos del array transformado con join() para retornar un único template. A modo de ejemplo:

// function printDetails(id) {
//    const product = products.find((each) => each.id === id);
//    const detailsTemplate = `
//       ...
//       <select type="text" placeholder="Selecciona un color">
//          ${product.colors.map(
//             (each) => `<option value=${each}>${each}</option>`
//          ).join("")}
//       </select>
//       ...
//    `;
//    const detailsSelector = document.querySelector("#details");
//    detailsSelector.innerHTML = detailsTemplate;
// }
// printDetails(id)
// Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.

// ✏️Actividad: Renderizar dinámicamente las miniaturas
// En esta actividad, sólo nos enfocaremos en renderizar dinámicamente las miniaturas del producto. Para este ejercicio tienes que:

// Desde Visual Studio Code, abre la carpeta store y luego el archivo productDetail.js

// Modifica la función printDetails para que la caja de las miniaturas renderice correctamente la cantidad de fotos que tenga el array de fotos del producto.

// Luego de “mapear”, une todos los elementos del array transformado con join() para retornar un único template. A modo de ejemplo:

// function printDetails(id) {
//    const product = products.find((each) => each.id === id);
//    const detailsTemplate = `
//       ...
//          <div class="product-images-block">
//             ${product.images.map(
//                 each => `<img class="miniImg" src="${each}" alt="mini" />`
//             ).join("")}
//          </div>
//       ...
//    `;
//    const detailsSelector = document.querySelector("#details");
//    detailsSelector.innerHTML = detailsTemplate;
// }
// printDetails(id)
// Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.
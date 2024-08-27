console.log("✏️Actividad: Generar tarjetas de carrito dinámicas") 

// Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store y crea el archivo cart.js en la carpeta scripts

// Conecta el nuevo script en la vista del carrito. 

// Abre el archivo cart.js y define una variable cartproducts.

const cartproducts = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cartproducts)
function createCartCard(cartproducts){
    return `  <div class="cart-product">
          <img src="${cartproducts.image[0]}" alt="Producto 10" class="product-image">
          <div class="product-details">
            <h3>${cartproducts.title}</h3>
            <p>${cartproducts.description}</p>
            <p>Precio: $${cartproducts.price}</p>
            <input type="number" value="${cartproducts.quantity}" min="1" class="quantity-input">
            <button class="remove-button">Eliminar</button>
          </div>
        </div>`
}

export function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
      productsTemplate += createCartCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
  }
printCards(cartproducts,"cartproducts");
// Asigna a esta variable un array con los productos del localStorage.

// Analiza la tarjeta del producto del carrito diseñada en la actividad anterior e identifica las propiedades de cada producto.

// Define las funciones necesarias para renderizar dinámicamente todos los productos agregados al carrito. A modo de ejemplo createCartCard para crecibir un objeto (producto) y retornar un template dinamico) y printCartCards para recibir un array de productos y luego imprimir en la vista las tarjetas.

// Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.
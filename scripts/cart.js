console.log("✏️Actividad: Generar tarjetas de carrito dinámicas") 

// Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store y crea el archivo cart.js en la carpeta scripts

// Conecta el nuevo script en la vista del carrito. 

// Abre el archivo cart.js y define una variable cartproducts.

 const cartproducts = JSON.parse(localStorage.getItem('cart')) || [];
console.log(cartproducts)
function createCartCard(cartproducts){
    return `  <div class="cart-product">
          <img src="${cartproducts.image}" alt="Producto 10" class="product-image">
          <div class="product-details">
            <h3>${cartproducts.title}</h3>
            <p>${cartproducts.color}</p>
            <p>${cartproducts.description}</p>
            <p>Precio unitario: $${cartproducts.price}</p>
             <p>Precio total: $${cartproducts.totalPrice}</p>
            <input type="number" value="${cartproducts.quantity}" min="1"  onchange="changeQuantity(event)" class="quantity-input">
            <button class="remove-button">Eliminar</button>
          </div>
        </div>`
}
 
 function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
      productsTemplate += createCartCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
  }
printCards(cartproducts,"cartproducts");
 
function changeQuantity(e) {
  const inputElement = e.target;
  const newQuantity = parseInt(inputElement.value, 10);
  const productTitle = inputElement.closest('.cart-product').querySelector('h3').innerText;

  const cartproducts = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Encuentra el producto en el carrito y actualiza su cantidad y precio total
  const product = cartproducts.find(product => product.title === productTitle);
  if (product) {
      product.quantity = newQuantity;
      product.totalPrice = (product.price * newQuantity).toFixed(2); ;
  }

  // Actualiza el carrito en localStorage
  localStorage.setItem('cart', JSON.stringify(cartproducts));

  // Re-renderiza las tarjetas del carrito
  printCards(cartproducts, "cartproducts");

  printTotal(cartproducts,"total")
}

// Asegúrate de que esta función esté definida en el archivo correcto y se cargue antes del uso

// Asigna a esta variable un array con los productos del localStorage.

// Analiza la tarjeta del producto del carrito diseñada en la actividad anterior e identifica las propiedades de cada producto.

// Define las funciones necesarias para renderizar dinámicamente todos los productos agregados al carrito. A modo de ejemplo createCartCard para crecibir un objeto (producto) y retornar un template dinamico) y printCartCards para recibir un array de productos y luego imprimir en la vista las tarjetas.

// Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.
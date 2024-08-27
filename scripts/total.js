console.log("✏️Actividad: Calcular total a pagar");
const cartproducts = JSON.parse(localStorage.getItem('cart')) || [];

// Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store y crea el archivo cart.js en la carpeta scripts

// Conecta el nuevo script en la vista del carrito.

// 💡Presta atención al orden de los scripts. El script cart debe tener acceso a las variables y funciones de layout y el script total tiene acceso a las variables y funciones de layout y cart.

// Abre el archivo total.js y define las funciones necesarias para renderizar dinámicamente el cuadro de cálculo de la cuenta a pagar. A modo de ejemplo createTotalTemplate para recibir como parámetro un array de productos y devuelva un template string con el cuadro de detalle del total y printTotal para recibir un array de objetos  y luego imprimir en la vista  el template generado.

// La función necesita iterar los productos para que cada vuelta sume el subtotal (precio * cantidad) con el de la siguiente vuelta.

function createTotalTemplate(arrayOfProducts) {
    // Verifica el contenido del array
    console.log(arrayOfProducts);
  
    // Inicializa la variable total
    let total = 0;
  
    // Calcula el total sumando el precio por la cantidad de cada producto
    arrayOfProducts.forEach((product) => {
      total += product.price * product.quantity;
    });
  
    // Retorna el HTML con el total calculado
    return `
      <div class="total-details">
        <p><strong>Total: $${total.toFixed(2)}</strong></p>
        <button class="checkout-button">Finalizar Compra</button>
      </div>
    `;
  }
  
// Imprime el total del carrito
function printTotal(arrayOfProducts, idSelector) {
    const totalTemplate = createTotalTemplate(arrayOfProducts);
    const totalContainer = document.getElementById(idSelector);
    if (totalContainer) {
      totalContainer.innerHTML = totalTemplate;
    } else {
      console.error(`Elemento con ID '${idSelector}' no encontrado.`);
    }
  }

printTotal(cartproducts,"total")
import { printCards } from "./productCards.js";

import { products } from "./products.js";
console.log("Trabajando con los eventos de teclado"); // 3. Define la función captureText para que imprima por consola “capturado”.
console.log("✏️ Actividad: Asignar evento de teclado en línea");

// function captureText(event) {
//  console.log(event);
// }
// function captureText(event) {
//   const evt = event;
//   console.log(event);
// }
// 4. Identifica el input de búsqueda de index.html

// 5. Agrega el atributo onkeyup para asignar un evento de tipo keyup. Cada vez que el usuario presione una tecla del teclado, deberá ejecutar la función captureText. A modo de ejemplo:

// <input type="text" placeholder="Search" onkeyup="captureText()" />
// 6. Abre con live server el archivo index.html y observa la correcta impresión por consola de cada tecla presionada.

console.log("✏️ Actividad: asignación de evento de teclado con event listener");
// En esta actividad, sólo te enfocarás en modificar el evento de teclado del input de tipo texto de la barra de navegación de manera que funcione con un escuchador de eventos. Para este ejercicio tienes que seguir los siguientes pasos:

// 1. Desde Visual Studio Code, abre la carpeta store y luego el archivo index.html

// 2. Quita el atributo onkeyup del input de tipo texto ya que implementarás otra forma: el escuchador de eventos y agrega el atributo id=”search”.

// 3. Abre el archivo filterProducts.js y define una variable searchSelector, para seleccionar con el método querySelector el input de tipo texto de la vista principal.
const searchSelector = document.getElementById("search");

// 4. El selector debe escuchar un evento con el método addEventListener. El evento debe ser de tipo keyup para que cada tecla presionada ejecute la función captureText. A modo de ejemplo:

// searchSelector.addEventListener("keyup", captureText);
// 5. Abre con live server el archivo index.html y observa la correcta impresión por consola de cada tecla presionada.
console.log("✏️ Actividad: Investigación del evento de teclado");
// Para este ejercicio tienes que seguir los siguientes pasos:

// 1. Desde Visual Studio Code, abre la carpeta store y luego el archivo filterProducts.js

// 2. Modifica el escuchador de eventos, de manera que ahora, la función depende de un objeto con todos los datos del evento. A modo de ejemplo:
//se activa cada vez que el usuario suelta una tecla en un campo de entrada
searchSelector.addEventListener("keyup", (event) => captureText(event, products));
// 3. Modifica la función captureText para que reciba el evento como parámetro e imprime por consola algunas propiedades importantes.

// 4. Abre con live server el archivo index.html y observa la correcta impresión por consola de cada tecla presionada. A modo de ejemplo:

console.log("✏️ Actividad: Filtrar productos");
// En esta actividad, modificarás la función captureText para renderizar los productos resultantes del filtro de tipo texto. Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store y luego el archivo filterProducts.js

// Modifica la función captureText para que:

// guarde en una variable el valor capturado por el evento
 function captureText(event, array) {
  const inputText = event.target.value.toLowerCase();
  const filterArray = array.filter((item) => {
    return item.title.toLowerCase().includes(inputText);
  });
  console.log(filterArray);
  printCards(filterArray,"products");
}
// filtre el array con todos los productos con los productos cuyo nombre incluya el texto capturado

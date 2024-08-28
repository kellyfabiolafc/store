// 
console.log("✏️Actividad: Finalizar la compra del carrito")
// En esta actividad, implementarás un evento de click con el escuchador de eventos y daremos vida al botón ”Finaliza tu compra” para borrar los datos de la variable que tiene todos los productos del carrito y actualizar la vista sin productos ni el total a pagar. Para este ejercicio tienes que seguir los siguientes pasos:

// 1. Desde Visual Studio Code, abre la carpeta store y luego crea el archivo buy.js en la carpeta scripts

// 2. Conecta el nuevo script en la vista del carrito. Presta atención al orden de los scripts.

// 3. Abre el archivo buy.js y define una variable buySelector para seleccionar con el método getElementById la etiqueta del botón “Finaliza tu compra”.
const buySelector = document.getElementById("buttonFinal");
// 4. El selector debe escuchar un evento de click para que cada click ejecute una función. La función necesita:
buySelector.addEventListener("click", function() {
    // 1. Borrar todos los productos del array `cartProducts`
    let cartProducts = []; // Reinicia el array de productos del carrito

    // 2. Borrar todos los productos del `localStorage`
    localStorage.removeItem("cart");

    // 3. Actualizar la impresión de las tarjetas de productos del carrito (sin productos)
    const cartContainer = document.getElementById("cartproducts");
    cartContainer.innerHTML = "<p>No hay productos en el carrito.</p>"; // Mensaje indicando que no hay productos
  
    // 4. Actualizar la impresión del cuadro de detalle del total (sumando cero)
    const totalContainer = document.getElementById("total-details");
    totalContainer.innerHTML = "<p>Total: $0</p>";

    // 5. Renderizar la vista para asegurarse de que todo funcione correctamente
    // Este paso está implícito en los pasos anteriores, donde actualizamos el DOM.

    // 6. Condiciona el renderizado de la vista para informar al usuario que no hay productos en el carrito
    // Este paso también se maneja con la actualización del `cartContainer`.
});

// Borrar todos los productos del localStorage

// actualizar la impresión de las tarjetas de productos del carrito (sin productos)

// actualizar la impresión del cuadro de detalle del total (sumando cero)

// 5. Programa y verifica la vista la cantidad de veces que sea necesario para que la vista se renderice y funcione correctamente.

// 6. Condiciona el renderizado de la vista para que informe al usuario que no hay productos en el carrito cuando efectivamente no hay productos en el localStorage.
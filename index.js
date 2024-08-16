// ✏️ Actividad: Cálculo del total de compras diarias
// En esta actividad, mejorarás el programa store de la sección 2 para simular una caja registradora y registrar la compra de
// tres clientes que adquieren tres productos cada uno en un día. Al final del día, la caja registradora debe mostrar el monto
// total facturado. Sigue estos pasos:

// Desde Visual Studio Code, abre la carpeta store

// // En el archivo "index.js", encapsula la iteración dentro de una función para que se pueda ejecutar una vez por cada cliente. Por ejemplo:

// const comprar = () => {
//   let totalApagar = 0;
//   const cliente = prompt("¿Cual es su nombre?")
//   for (let index = 1; index <= 3; index++) {
//     alert(`Cliente : ${cliente}. Compra : ${index}`)
//     const producto = prompt(`¿${cliente} qué producto desea llevar?`);
//     const cantidad = Number(prompt(`Cuantas unidades de ${producto}`));
//     const precio = Number(prompt(`Cuanto sale cada unidad de ${producto}`));
//     const subtotal = cantidad * precio;
//     totalApagar = totalApagar + subtotal;
//     console.log(`Cliente: ${cliente}, Producto: ${producto}, Cantidad: ${cantidad}, Precio: ${precio}, Subtotal: ${subtotal}`);
//   }
  

//   return totalApagar;
// };
// // Suma los totales de cada cliente. Puedes hacerlo como se muestra a continuación:

// const total1 = comprar();
// const total2 = comprar();
// const total3 = comprar();
// const total = total1 + total2 + total3;
// /* const total = 0;
// for (let i = 0 ; i < 3 ; i++){
// total+=comprar()
// }*/ 
// // O puedes hacerlo directamente de la siguiente manera:
// console.log(`El total recaudado por los 3 clientes es de ${total}`)
// // const total = comprar() + comprar() + comprar();

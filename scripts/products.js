
// import { printCards } from "./productCards.js";
const producto1 = {
  nombre: "celular",
  precio: 100000,
  stock: 2,
};
// 5. Agrega las propiedades id y foto, probando estas formas.

producto1.id = "id123";
producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

for (let producto in producto1) {
  console.log(producto1[producto]);
}

// ✏️ Actividad: Creación de un producto
// En esta actividad, mejorarás el programa store  de las secciones anteriores para definir los primeros productos de la aplicación web.

// A partir de este punto, comenzarás a definir las variables en inglés, ya que es una práctica habitual en el mundo de la programación. Sigue estos pasos:

// Desde Visual Studio Code, abre la carpeta store

// En products.js, define la clase Product con las propiedades:

// id y title (nombre): deben ser una cadena de texto.

// price (precio) y stock (cantidad) deben ser de tipo numérico.

// images (imágenes) por ahora asigna []

// y onsale (en oferta): debe ser un booleano para definir si está o no está en oferta.
// En products.js agrega al constructor de productos:
// Define un array de colores
const colors = [
  ["Space Gray"], // Macbook Pro 15'4
  ["White"], // AirPods Pro
  ["Rose Gold"], // Smartwatch
  ["Pink"], // iPhone 13
  ["Space Gray"], // iPad Air
  ["Space Gray"], // iPad Pro 12.9
];


const images = [
  "../assets/macbook_pro_15_4.jpg",
  "../assets/airpods_pro.jpg",
  "../assets/smartwatch.jpg",
  "../assets/iphone_13.jpg",
  "../assets/ipad_air.jpg",
  "../assets/ipad_pro_12_9.jpg",
];

const imagePaths = {
  "macbook": images[0],
  "airpods": images[1],
  "smartwatch": images[2],
  "iphone_13": images[3],
  "ipad_air": images[4],
  "ipad_12.jpg": images[5],
};
class Product {
  #supplier;

  constructor(
    id,
    title,
    price,
    stock,
    images,
    onsale,
    supplier,
    colors,
    description
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.stock = stock;
    this.images = images;
    this.onsale = onsale;
    this.#supplier = supplier;
    this.colors = colors;
    this.description = description;
  }

  get supplier() {
    return this.#supplier;
  }

  set supplier(newName) {
    this.#supplier = newName;
  }
  sellUnits(units) {
    if (units > this.stock) {
      console.log("Error no hay suficiente stock");
    } else {
      this.stock -= units;
    }
  }
}
// 3. Define la variable product1 e implementa el constructor new para crear una instancia de Product vacía. A modo de ejemplo:

// const product1 = new Product();
const product1 = new Product(
  1,
  "Macbook Pro 15'4",
  750000,
  10,
  [imagePaths["macbook"]],
  true,
  "Supplier Name",
  ["Space Gray"],
  "Incluye impuesto País y percepción AFIP"
);
// 4. Define la variable product2 para crear una instancia de Product con las propiedades id, title y price.
const product2 = new Product(
  2,
  "AirPods Pro",
  750000,
  15,
 [imagePaths["airpods"]],
  true,
  "Supplier Name",
  ["White"],
  "Incluye impuesto País y percepción AFIP"
);
// 5. Define la variable product3 para crear una instancia de Product con todas las propiedades que requiere la clase.
const product3 = new Product(
  3,
  "Smartwatch",
  750000,
  20,
  [imagePaths["smartwatch"]],
  true,
  "Supplier Name",
  ["Rose Gold"],
  "Incluye impuesto País y percepción AFIP"
);
// 6. Programa la impresión en consola de product1, product2 y product3.
console.log(`Producto vacio: ${product1}.
    Producto A : ${product2}.
    Producto B : ${product3}`);
// 7. Programa la impresión de la propiedad title de product2 y de la propiedad onsale de product3.

// for(let propiedades in product2){
//  console.log(`${propiedades}: ${product2[propiedades]}`)
// }

console.log(`Title: ${product2.title}`);
console.log(`Onsale: ${product3.onsale}`);

//--------------------------------------------->

// 8. Abre con live server el archivo index.html y verifica las salidas programadas.
// ✏️ Actividad:  Obtención y modificación de propiedades de una instancia
// En esta actividad, vas a definir propiedades privadas de la clase Product y vas a crear getters y setters para poder leer y modificar las mismas. Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store

// En products.js, modifica el constructor de la clase Product para agregar una propiedad privada supllier. A modo de ejemplo:

// 3. Define el método getter y el método setter de esta propiedad. A modo de ejemplo:

// Crear una instancia de Product
const product4 = new Product(
  4,
  "iPhone 13",
  750000,
  12,
  [imagePaths["iphone_13"]],
  true,
  "Supplier Name",
  ["Pink"],
  "Incluye impuesto País y percepción AFIP"
);
// Modificar el proveedor usando el setter
product4.supplier = "Tech Supplier";

// Obtener el proveedor usando el getter
const resultado = product4.supplier;
console.log(resultado);

// ✏️ Actividad: Venta de productos
// En esta actividad, crearás un método que, por cada venta de un producto, restará la cantidad vendida al stock del producto de la clase Product. Sigue estos pasos:

// Desde Visual Studio Code, abre la carpeta store

// Dentro de la clase Product del archivo products.js, define el método sellUnits para que cumpla los requerimientos. A modo de ejemplo:

// class Product {
// constructor(id, title, price, stock, images, onsale) {
// 		...
// }

// }
// 3. Define la variable product5 para crear una instancia de Product con todas las propiedades que requiere la clase. Debe tener 12 unidades de stock.
const product5 = new Product(
  5,
  "iPad Air",
  750000,
  8,
 [imagePaths["ipad_air"]],
  true,
  "Supplier Name",
  ["Space Gray"],
  "Incluye impuesto País y percepción AFIP"
);

// 4. Ejecuta el método sellUnits para vender 10 unidades y luego 5 unidades.
product5.sellUnits(10);
// Vender 5 unidades
console.log(product5);
product5.sellUnits(5);
// 5. Programa la impresión en consola de product5.
console.log(product5);
// 6. Abre con live server el archivo index.html y verifica las salidas programadas.

// 7. Mejora el método para que si no hay stock suficiente, no se descuenten unidades y se devuelva un mensaje de error.

//---------------------------------------------------------------------------------------------->
console.log("Programación Orientada a Objetos Arrays Arreglos");
console.log(" ✏️ Actividad: Listado de productos en la tienda");
// En esta actividad, vas a mejorar el programa store de las secciones anteriores definiendo una lista con las instancias de objetos creados hasta el momento. Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store desarrollada en secciones anteriores.

// Modifica products.js, debe quedar únicamente la clase Product y las instancias de productos creadas.

// Completa los datos de todas las instancias y crea las instancias necesarias para tener cuatro productos.

// Define la variable products como un array con los [ ]. Dentro de array listar cada uno de los productos definidos. A modo de ejemplo:

export const products = [product1, product2, product3, product4];
// Programa la impresión en consola del array completo.
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}
// Programa la impresión del segundo elemento del array.
console.log("sEGUNDO ELEMENTO DEL ARRAY");
console.log(products[1]);
// Para acceder al último elemento de un array hay que posicionarse en el elemento “(length)-1”. Programa la impresión de la propiedad title del último elemento del array.
console.log("Ultimo elemento del array");
console.log(products[products.length - 1]);
// Abre con live server el archivo index.html y verifica las salidas programadas.

console.log("✏️ Actividad: Ampliando la lista de productos");
// Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store

// En products.js define las variables product5 y product6 para crear dos instancias de Product con todas las propiedades que requiere la clase.
const product6 = new Product(
  6,
  "iPad Pro 12.9",
  750000,
  5,
  [imagePaths["ipad_12"]],
  true,
  "Supplier Name",
  ["Space Gray"],
  "Incluye impuesto País y percepción AFIP"
);
// Agrega product5 al inicio del array utilizando el método unshift. A modo de ejemplo:
console.log(
  "Agregando product5 al inicio del array utilizando el método unshift."
);
products.unshift(product5);
for (let q = 0; q < products.length; q++) {
  console.log(products[q]);
}
// Agrega product6 al final del array utilizando el método push. A modo de ejemplo:
console.log(
  "Agregando product6 al final del array utilizando el método unshift."
);
products.push(product6);
for (let q = 0; q < products.length; q++) {
  console.log(products[q]);
}
// Agrega las impresiones que creas convenientes para observar los cambios en la lista de productos.

// Abre con live server el archivo index.html y verifica las salidas programadas.

console.log("✏️ Actividad: Eliminación de productos de una lista");
// Para completar esta tarea, sigue estos pasos:

// Desde Visual Studio Code, abre la carpeta store

// En products.js quita el primer elemento del array utilizando el método shift.
console.log("Quitando el primer elemento del array utilizando el método shift");
products.shift();
for (let q = 0; q < products.length; q++) {
  console.log(products[q]);
}
// Quita el último elemento del array utilizando el método pop.
console.log("Quitando el ultimo elemento del array utilizando el método pop");
products.pop();
for (let q = 0; q < products.length; q++) {
  console.log(products[q]);
}
// Agrega las impresiones que creas convenientes para observar los cambios en la lista de productos.

// Abre con live server el archivo index.html y verifica las salidas programadas.

console.log("✏️ Actividad: Enriquecimiento de información de productos");
// En esta actividad, mejorarás la información de los productos agregando detalles, fotos y colores. Sigue estos pasos:

// Desde Visual Studio Code, abre la carpeta store



// Colors: para definir un array de colores del producto.

// Description: para definir un texto descriptivo del producto.

// Define estas nuevas propiedades para cada una de las instancias programadas.

// Define los arrays de imágenes de cada producto creado. Al menos tres fotos para dos productos y el resto dos.

// Agrega las impresiones que creas convenientes para observar los cambios en la lista de productos.

// Abre con live server el archivo index.html y verifica las salidas programadas.

// const filterProducts= captureText(products);
// printCards(products, "products");



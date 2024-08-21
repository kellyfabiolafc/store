import { products } from './products.js';

//const productsSelector = document.getElementById("products");
// let productsTemplate = `
//  <article  class="product-card">
//           <a  href="./details.html">
//             <img class="product-img" src="${product.images[0]}" alt="Macbook Pro" />
//             <div class="product-info">
//               <span class="product-title">${product.title}</span>
//               <span class="product-description">${product.colors}</span>
//               <div class="product-price-block">
//                 <span class="price">${product.price}</span>
//                 <span class="discount">50% Off</span>
//               </div>
//               <div class="product-tax-policy">
//                ${product.description}
//               </div>
//             </div>
//           </a>
//         </article>`;


// Correct way to insert the template
// productsSelector.innerHTML = productsTemplate;
// ✏️ Actividad: Renderizar los productos de forma dinámica
// Las tarjetas simplemente fueron “impresas” en la vista, pero siguen siendo datos estáticos. En esta actividad, vas a mejorar la vista principal del proyecto store para renderizar las tarjetas de producto de forma dinámica. Para este ejercicio vas a seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store

// Abre productCards.js y define una función createCard para que reciba como parámetro un objeto y devuelva un template string con sólo una tarjeta de producto. El objeto a recibir por la función será un producto con todas las propiedades definidas en la clase. 

function createCard(product) {
    return ` <article class="product-card">
     <a href="./details.html?id=${product.id}">
            <img class="product-img" src="${product.images[0]}" alt="${product.title}" />
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.colors}</span>
                <div class="product-price-block">
                    <span class="price">${product.price}</span>
                    <span class="discount">50% Off</span>
                </div>
                <div class="product-tax-policy">
                    ${product.description}
                </div>
            </div>
        </a>
    </article>`;
};

// Modifica cada dato “estático” de la tarjeta por la correspondiente propiedad del objeto product. Recuerda que en el template string se “invocan” variables de js con ${ }. A modo de ejemplo:


// const productsSelector = document.getElementById("products");

// let productsTemplate = "";
// for (const product of products) {
//     productsTemplate += createCard(product);
// }

// productsSelector.innerHTML = productsTemplate;

// En esta actividad vamos a crear una función que “encapsule” todo lo desarrollado en la actividad anterior. Para este ejercicio vas a seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store

// Abre productCards.html y define una función printCards que reciba como parámetro un array de productos arrayOfProducts y el id del selector HTML idSelector y que realice las siguientes instrucciones:

// Define una variable productsTemplate para concatenar todas las tarjetas de productos

// Itera con for of para que cada vuelta “cargue” una tarjeta de producto 

// Selecciona con getElementById la etiqueta idSelector

// Imprime con innerHTML el contenido guardado en la variable productsTemplate

export function printCards(arrayOfProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayOfProducts) {
    productsTemplate += createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}



// 3. Luego es necesario invocar a la función pasando el array de productos y el id del selector.  A modo de ejemplo:

 printCards(products, "products");
// 4. Abre con live server el archivo index.html y observa las tarjetas de producto.

// 5. Programa y verifica la vista la cantidad de veces que sea necesario para que las tarjetas se rendericen y funcionen correctamente.


console.log(" Links dinámicos")
console.log ("✏️ Actividad: Linkear cada tarjeta de producto con detail.html");
// Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store y luego el archivo productCards.js

// Modifica el template que devuelve la función createCard, debe tener una consulta o query dinámica con el id del producto. No olvidar los signos ? (pregunta) ni el = (igual). A modo de ejemplo:

// <a class="product-card" href="./details.html?id=${product.id}">
// Abre con live server el archivo index.html y prueba el correcto direccionamiento de los links.

console.log("✏️ Actividad: Capturar el id del producto");
// Para este ejercicio tienes que seguir los siguientes pasos:

// Desde Visual Studio Code, abre la carpeta store y luego el archivo details.html. 

// Quita el input de búsqueda de la barra de navegación.

// Conecta el script layout.js y modifica la barra de navegación y el pie de página para que se generen dinámicamente. 

// Conecta el script products.js para tener el array de productos disponible para la vista.

// Crea el archivo productDetail.js en la carpeta scripts y conectalo con la vista product.html


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
        <a href="./details.html">
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


const productsSelector = document.getElementById("products");

let productsTemplate = "";
for (const product of products) {
    productsTemplate += createCard(product);
}

productsSelector.innerHTML = productsTemplate;
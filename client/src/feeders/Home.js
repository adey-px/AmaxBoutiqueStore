'use strict';
import data from '../datastore/clothes.js';

// Logic object for Home template
const Home = {
	render: () => {
		const { products } = data;

		return `
      <ul class="products">
        ${products
					.map(
						(product) => `
          <li>
            <div class="product">
              <a href="/#/products/product/${product._id}">
                <img src="${product.image}" alt="${product.name}" />
              </a>
            <div class="product-name">
              <a href="/#/products/product/${product._id}">
                ${product.name}
              </a>
            </div>
            <div class="product-brand">
              ${product.brand}
            </div>
            <div class="product-price">
              $${product.price}
            </div>
            </div>
          </li>
        `
					)
					.join('\n')}
      `;
	},
};

/* 
join() prevnt coma ',' at end of each product in ui 
*/
// export to import in app.js
export default Home;

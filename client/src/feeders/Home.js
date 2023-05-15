'use strict';
import data from '../datastore/clothes.js';
// import { getProducts } from '../api';
// import { parseRequestUrl } from '../utils';
// import Rating from '../components/Rating';

// Home page object with render fun
const HomePage = {
	render: () => {
		const { products } = data;
		// const { value } = parseRequestUrl();
		// const PRODUCTS = await getProducts({ searchKeyword: value });

		// if (PRODUCTS.error) {
		// 	return `<div class="error">${PRODUCTS.error}</div>`;
		// }

		return `
      <ul class="products">
        ${products
					.map(
						(product) => `
          <li>
            <div class="product">
              <a href="/#/product/${product._id}">
                <img src="${product.image}" alt="${product.name}" />
              </a>
            <div class="product-name">
              <a href="/#/product/1">
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
export default HomePage;

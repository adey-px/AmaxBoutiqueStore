'use strict';

// Logic object for Home template
const Home = {
	render: async () => {
		/* fetch data from backend api */
		const response = await fetch('http://localhost:5000', {
			headers: { 'Content-Type': 'application/json' },
		});

		if (!response || !response.ok) {
			return `<div>Fatal error, no data found!</div>`;
		}
		const products = await response.json();

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
join() prevent coma ',' at end of each product in ui 
*/
// export to import in app.js
export default Home;

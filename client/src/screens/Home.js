'use strict';
import axios from 'axios';
import Rating from '../features/Rating';

// Object for Home page render
const HomeScreen = {
	render: async () => {
		const response = await axios({
			url: 'http://localhost:5000',
			headers: { 'Content-Type': 'application/json' },
		});

		if (!response || response.statusText !== 'OK') {
			return `<div>No product data to show</div>`;
		}

		/* data fetched above from backend api */
		const products = response.data;

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
            <div class="product-rating">
              ${Rating.render({ rating: product.ratings, review: `${product.reviews} reviews` })}
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

export default HomeScreen;

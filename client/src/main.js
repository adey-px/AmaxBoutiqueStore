'use strict';
import HomePage from './feeders/Home.js';
import Product from './feeders/Product.js';
import { requestUrl } from './helpers/Utils.js';
import { Error404 } from './helpers/Error404.js';
/*
script link as type module in index.html
*/

// Define route paths
const routes = {
	'/': HomePage,
	'/product/:id': Product,
};

//
const router = () => {
	const request = requestUrl();

	const parsedUrl =
		(request.resource ? `/${request.resource}` : '/') +
		(request.id ? '/:id' : '') +
		(request.verb ? `/${request.verb}` : '');

	const checkedUrl = routes[parsedUrl] ? routes[parsedUrl] : Error404;

	const main = document.getElementById('container');
	main.innerHTML = checkedUrl.render();

	/* render all products data in home page */
	// main.innerHTML = HomePage.render();
};

// Event listeners
window.addEventListener('load', router);
window.addEventListener('hashchange', router)

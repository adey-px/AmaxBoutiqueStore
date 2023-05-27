'use strict';
import Home from './feeders/Home.js';
import Product from './feeders/Product.js';
import { requestUrl } from './helpers/Utils.js';
import { Error404 } from './helpers/Error404.js';
/*
- script link as type module in index.html
- live server home runs on localhost:8080
*/

//
const routes = {
	'/': Home,
	'/products': Home,
	'/products/product/:id': Product,
};

// Routing logic for request object from Utils.js
const router = async () => {
	const request = requestUrl();
	const parseUrl =
		(request.root ? `/${request.root}` : '/') +
		(request.base ? `/${request.base}` : '') +
		(request.id ? '/:id' : '') +
		(request.verb ? `/${request.verb}` : '');

	/* if url not exist, return error page */
	const checkUrl = routes[parseUrl] ? routes[parseUrl] : Error404;

	/* render template logic with routing */
	const main = document.getElementById('container');
	main.innerHTML = await checkUrl.render();

	/* render home template without routing */
	// main.innerHTML = Home.render();
};

// Event listeners
window.addEventListener('load', router);
window.addEventListener('hashchange', router);

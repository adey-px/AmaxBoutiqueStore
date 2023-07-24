'use strict';
import HomeScreen from './screens/Home.js';
import ProductScreen from './screens/Product.js';
import { requestUrl } from './helpers/Utils.js';
import { Error404 } from './helpers/Error404.js';
/*
- script link as type module in index.html
*/

// API - matched with their logic files
const routes = {
	'/': HomeScreen,
	'/products': HomeScreen,
	'/products/product/:id': ProductScreen,
};

// Route logic for request object in Utils.js
const router = async () => {
	const request = requestUrl();
	const parseUrl =
		(request.root ? `/${request.root}` : '/') +
		(request.base ? `/${request.base}` : '') +
		(request.id ? '/:id' : '') +
		(request.verb ? `/${request.verb}` : '');

	/* if url not exist, return error page */
	const checkUrl = routes[parseUrl] ? routes[parseUrl] : Error404;

	/* render index template with routing */
	const home = document.getElementById('container');
	home.innerHTML = await checkUrl.render();

	/* render index template without routing */
	// home.innerHTML = Home.render();
};

// Event listeners
window.addEventListener('load', router);
window.addEventListener('hashchange', router);

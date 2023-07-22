'use strict';
import Home from './screens/Home.js';
import Product from './screens/Product.js';
import { requestUrl } from './helpers/Utils.js';
import { Error404 } from './helpers/Error404.js';
/*
- script link as type module in index.html
*/

<<<<<<< HEAD:client/src/main.js
// API - matched with their logic files
=======
// Set routes with js files in screens/
>>>>>>> fc0a992d6f052ee1e0e210bffbb395542d364d5e:client/src/index.js
const routes = {
	'/': Home,
	'/products': Home,
	'/products/product/:id': Product,
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

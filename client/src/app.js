import HomePage from './pages/Home.js';
/*
script link as type module in index.html
*/
const router = () => {
	const main = document.getElementById('container');
	main.innerHTML = HomePage.render();
};

window.addEventListener('load', router)
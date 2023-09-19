/*
Logic for Routing & Rendering defined in index.js
*/

// Get url from incoming request
export const requestUrl = () => {
	const url = document.location.hash.toLowerCase();
	const path = url.split('/');

	/* route contents for routes in index.js */
  /* as in `root/base/:id/verb` for each */
	/* root is 1st str passed after home url */
	return {
		root: path[1],
		base: path[2],
		id: path[3],
		verb: path[4],
	};
};

// //
// export const reRender = async (component) => {
// 	document.getElementById('main-container').innerHTML =
// 		await component.render();
// 	await component.after_render();
// };

// //
// export const showLoading = () => {
// 	document.getElementById('loading-overlay').classList.add('active');
// };

// //
// export const hideLoading = () => {
// 	document.getElementById('loading-overlay').classList.remove('active');
// };

// //
// export const showMessage = (message, callback) => {
// 	document.getElementById('message-overlay').innerHTML = `
//   <div>
//     <div id="message-overlay-content">${message}</div>
//     <button id="message-overlay-close-button">OK</button>
//   </div>
//   `;
// 	document.getElementById('message-overlay').classList.add('active');
// 	document
// 		.getElementById('message-overlay-close-button')
// 		.addEventListener('click', () => {
// 			document.getElementById('message-overlay').classList.remove('active');
// 			if (callback) {
// 				callback();
// 			}
// 		});
// };

// //
// export const redirectUser = () => {
// 	console.log(getCartItems().length);
// 	if (getCartItems().length !== 0) {
// 		document.location.hash = '/shipping';
// 	} else {
// 		document.location.hash = '/';
// 	}
// };

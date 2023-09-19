import { requestUrl } from '../helpers/Routing';
import { getProduct } from '../helpers/AjaxReq';

/*
Logic object for Product template
- error message comes from try/catch in AjaxReq.js
*/

const ProductScreen = {
	render: async () => {
		const request = requestUrl();
		const product = await getProduct(request.id);
		if (product.error) {
			return `<h1>${product.error}</h1>`;
		}
		return `<h1>${product.name}</h1>`;
	},
};

export default ProductScreen;

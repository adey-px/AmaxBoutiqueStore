/**
Purpose: 
- get data from product detail route defined in app.js
- make async bcos it sends ajax request to backend api
- `ph` is placeholder string for path[1] in Routing.js
- in catch, 1st error is from app.js, 2nd is native here
*/

import axios from 'axios';
import { apiHomeUrl } from '../config';

//
export const getProduct = async (id) => {
	try {
		const response = await axios({
			url: `${apiHomeUrl}/ph/product/${id}`,
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.statusText !== 'OK') {
			throw new Error(response.data.message);
		}
		return response.data;
	} catch (err) {
		return { error: err.response.data.message || err.message };
	}
};

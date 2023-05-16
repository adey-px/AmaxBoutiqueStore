/*
Data object array for Home page
- Extract data as below:
- import data from './datastore/clothes.js';
- const {products} = data, to use products in template 
- option: check console.log(data.products) to get data
*/
export default {
	products: [
		{
			_id: '1',
			name: 'Addida Slim shirt',
			category: 'Shirts',
			image: '/assets/img/product-1.jpg',
			price: 120,
			brand: 'Addidas',
			countInStock: 10,
			numReviews: 10,
			rating: 4.5,
		},
		{
			_id: '2',
			name: 'Nike Button jacket',
			category: 'Shirts',
			image: '/assets/img/product-2.jpg',
			price: 130,
			brand: 'Nike',
			countInStock: 10,
			numReviews: 10,
			rating: 4.5,
		},
		{
			_id: '3',
			name: 'Puma Slim pyjamas',
			category: 'Shirts',
			image: '/assets/img/product-3.jpg',
			price: 140,
			brand: 'Puma',
			countInStock: 10,
			numReviews: 10,
			rating: 4.5,
		},
		{
			_id: '4',
			name: 'Coleman stretch pant',
			category: 'Shirts',
			image: '/assets/img/product-4.jpg',
			price: 160,
			brand: 'Coleman',
			countInStock: 10,
			numReviews: 10,
			rating: 4.5,
		},
		{
			_id: '5',
			name: 'Apex designer leggy',
			category: 'Shirts',
			image: '/assets/img/product-5.jpg', 
			price: 180,
			brand: 'Apex',
			countInStock: 10,
			numReviews: 10,
			rating: 4.5,
		},
		{
			_id: '6',
			name: 'Zillow Slim pant',
			category: 'Shirts',
			image: '/assets/img/product-6.jpg',
			price: 190,
			brand: 'Zillow',
			countInStock: 10,
			numReviews: 10,
			rating: 4.5,
		},
	],
};

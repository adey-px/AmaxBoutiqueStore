/*
Object with data array for products
Extract data as below:
- set import {DATA} in './datastore/data.js';
- const {products} = DATA, to use products in template 
- option: check console.log(data.products) to get data
*/
export const DATA = {
	products: [
		{
			_id: '1',
			name: 'Addidas Slim shirt',
			category: 'Shirts',
			image: '/assets/img/product-1.jpg',
			price: 120,
			brand: 'Designer Top Brand Delight',
			stockNum: 80,
			ratings: 3.5,
			reviews: 200,
		},
		{
			_id: '2',
			name: 'Nike Button jacket',
			category: 'Shirts',
			image: '/assets/img/product-2.jpg',
			price: 130,
			brand: 'Nike Cusion Sweater Light',
			stockNum: 93,
			ratings: 4.5,
			reviews: 170,
		},
		{
			_id: '3',
			name: 'Puma Slim pyjamas',
			category: 'Shirts',
			image: '/assets/img/product-3.jpg',
			price: 140,
			brand: 'Puma Susuki Best Brand',
			stockNum: 94,
			ratings: 3.5,
			reviews: 150,
		},
		{
			_id: '4',
			name: 'Coleman stretch pant',
			category: 'Shirts',
			image: '/assets/img/product-4.jpg',
			price: 160,
			brand: 'Coleman Recommended Brand',
			stockNum: 18,
			ratings: 3.9,
			reviews: 167,
		},
		{
			_id: '5',
			name: 'Apex designer leggy',
			category: 'Shirts',
			image: '/assets/img/product-5.jpg',
			price: 180,
			brand: 'Apex Internation Delight',
			stockNum: 70,
			ratings: 4.0,
			reviews: 190,
		},
		{
			_id: '6',
			name: 'Zillow Slim pant',
			category: 'Shirts',
			image: '/assets/img/product-6.jpg',
			price: 190,
			brand: 'Zillow Unbeatable Specials',
			stockNum: 86,
			ratings: 4.5,
			reviews: 298,
		},
	],
};

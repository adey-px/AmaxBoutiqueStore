import express from 'express';
import data from './datastore/clothes.js';
import cors from 'cors';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// import path from 'path';
// import config from './config';
// import userRouter from './routers/userRouter';
// import orderRouter from './routers/orderRouter';
// import productRouter from './routers/productRouter';
// import uploadRouter from './routers/uploadRouter';

//
const app = express();

// client & server connection
app.use(cors());

//
app.get('/', (req, res) => {
	res.send(data.products)
});


// parse incoming request
// app.use(bodyParser.json());

// // Route paths
// app.use('/api/uploads', uploadRouter);
// app.use('/api/users', userRouter);
// app.use('/api/products', productRouter);
// app.use('/api/orders', orderRouter);
// app.get('/api/paypal/clientId', (req, res) => {
// 	res.send({ clientId: config.PAYPAL_CLIENT_ID });
// });

// // Middlewares
// app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));

// app.use(express.static(path.join(__dirname, '/../frontend')));

// app.get('*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/../frontend/index.html'));
// });

// app.use((err, req, res, next) => {
// 	const status = err.name && err.name === 'ValidationError' ? 400 : 500;
// 	res.status(status).send({ message: err.message });
// });

// // Database connection
// mongoose
// 	.connect(config.MONGODB_URL, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		useCreateIndex: true,
// 	})
// 	.then(() => {
// 		console.log('Connected to mongodb');
// 	})
// 	.catch((error) => {
// 		console.log(error.reason);
// 	});

// Server config
app.listen('5000', () => {
	console.log('Started Dev server at http://localhost:5000');
});
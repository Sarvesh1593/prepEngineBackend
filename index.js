import express from 'express';
import connectDB from './src/config/db.js';
import bodyParser from 'body-parser'; 
import categoryRoutes from './src/routes/categoryRoutes.js'; 
import questionRoutes from './src/routes/questionRoutes.js';
import subcategoryRoutes from './src/routes/subCategoryRoutes.js';

const app = express();


connectDB();


app.use(bodyParser.json()); // You can also use express.json() instead of body-parser

// Use the category routes
app.use('/api', categoryRoutes); // Mount the category routes on /api
app.use('/api', questionRoutes);
app.use('/api',subcategoryRoutes);

// Start the server
app.listen(3000, () => {
    console.log('Server is started on port 3000');
});

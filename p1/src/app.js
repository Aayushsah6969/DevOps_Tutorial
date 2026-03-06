const express = require('express');
const healthRoutes = require('./routes/health.routes');
const logger = require('./middleware/logger');
const versionRoutes = require('./routes/version.routes');
const productRoutes = require('./routes/product.routes');


const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/health', healthRoutes);
app.use('/version', versionRoutes);
app.use('/products', productRoutes);


// Logging middleware (after routes to capture response status)
app.use(logger);


module.exports = app;
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const externalRoutes = require('./routes/externalRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Ruta test
app.get('/', (req, res) => {
  res.json({ message: 'API Catalogo Online funcionando' });
});

app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/external', externalRoutes);

module.exports = app;
const connectDB = require('../config/mongodb');
const Category = require('./category');
const Product = require('./product');

// Conectar ao banco de dados
connectDB();

// Exportar modelos
module.exports = {
  Category,
  Product,
};

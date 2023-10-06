// models.js
const mongoose = require('mongoose');

// Define el esquema del artículo
const articuloSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  existencias: Number,
});

// Define el esquema del ticket
const ticketSchema = new mongoose.Schema({
  subtotal: Number,
  iva: Number,
  total: Number,
  articulos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Articulo' }],
  usuario: String,
});

// Crea modelos a partir de los esquemas
const Articulo = mongoose.model('Articulo', articuloSchema);
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = {
  Articulo,
  Ticket,
};
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  completada: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);
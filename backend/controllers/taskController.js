const Task = require('../models/Task');

exports.obtenerTareas = async (req, res) => {
  try {
    const tareas = await Task.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
};

exports.crearTarea = async (req, res) => {
  try {
    const nuevaTarea = new Task(req.body);
    const tareaGuardada = await nuevaTarea.save();
    res.status(201).json(tareaGuardada);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la tarea' });
  }
};

exports.actualizarTarea = async (req, res) => {
  try {
    const tareaActualizada = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tareaActualizada);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar la tarea' });
  }
};

exports.eliminarTarea = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tarea' });
  }
};

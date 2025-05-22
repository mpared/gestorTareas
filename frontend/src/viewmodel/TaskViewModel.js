import { reactive } from 'vue';
import { Task } from '../model/Task';

const API_URL = import.meta.env.VITE_API_URL; 

export function useTaskViewModel() {
  console.log("🌐 API_URL és:", API_URL);
  const state = reactive({
    tareas: [],
    nuevaTarea: new Task(),
    cargando: false,
    error: ''
  });

  async function cargarTareas() {
    state.cargando = true;
    try {
      const res = await fetch(API_URL);
      state.tareas = await res.json();
    } catch (e) {
      state.error = 'Error al cargar tareas';
    } finally {
      state.cargando = false;
    }
  }

  async function crearTarea() {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state.nuevaTarea)
      });
      const nueva = await res.json();
      console.log('✅ Tarea creada:', nueva); // para comprobar si tiene id
      state.tareas.push(nueva);
      state.nuevaTarea = new Task(); // reset
    } catch (e) {
      state.error = 'Error al crear la tarea';
    }
  }

  async function eliminarTarea(id) {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      state.tareas = state.tareas.filter(t => t._id !== id);
    } catch (e) {
      state.error = 'Error al eliminar';
    }
  }

  async function marcarCompletada(tarea) {
    try {
      const res = await fetch(`${API_URL}/${tarea._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...tarea }) // ya incluye 
      });
      const actualizada = await res.json();
      tarea.completada = actualizada.completada;
    } catch (e) {
      state.error = 'Error al actualizar tarea';
    }
  }

  return {
    state,
    cargarTareas,
    crearTarea,
    eliminarTarea,
    marcarCompletada
  };
}

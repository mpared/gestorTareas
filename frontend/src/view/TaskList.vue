<template>
  <div>
    <h2>Gestor de Tareas</h2>

    <form @submit.prevent="crearTarea">
      <input v-model="state.nuevaTarea.titulo" placeholder="Título" required />
      <input v-model="state.nuevaTarea.descripcion" placeholder="Descripción" required />
      <button type="submit">Añadir tarea</button>
    </form>

    <ul class="task-list">
      <li class="task-item" v-for="tarea in state.tareas" :key="tarea._id">
        <div class="task-header">
          <label class="checkbox-label">
            <input
              type="checkbox"
              v-model="tarea.completada"
              @change="marcarCompletada(tarea)"
            />
            <span :style="{ textDecoration: tarea.completada ? 'line-through' : 'none' }">
              {{ tarea.titulo }}
            </span>
          </label>
        </div>
        <p>{{ tarea.descripcion }}</p>
        <button @click="() => eliminarTarea(tarea._id)">Eliminar</button>
      </li>
    </ul>

    <p v-if="state.error">{{ state.error }}</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useTaskViewModel } from '../viewmodel/TaskViewModel';

const {
  state,
  cargarTareas,
  crearTarea,
  eliminarTarea,
  marcarCompletada
} = useTaskViewModel();

onMounted(() => {
  cargarTareas().then(() => {
    console.log('Tareas cargadas:', state.tareas)
  });
});
</script>

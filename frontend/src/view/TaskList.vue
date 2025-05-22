<template>
  <div>
    <h2>Gestor de Tareas</h2>

    <form @submit.prevent="crearTarea">
      <input v-model="state.nuevaTarea.titulo" placeholder="Título" required />
      <input v-model="state.nuevaTarea.descripcion" placeholder="Descripción" required />
      <button type="submit">Añadir tarea</button>
    </form>

    <ul>
    <li v-for="tarea in state.tareas" :key="tarea._id">
      <label>
        <input
          type="checkbox"
          v-model="tarea.completada"
          @change="marcarCompletada(tarea)"
        />
        <strong :style="{ textDecoration: tarea.completada ? 'line-through' : 'none' }">
          {{ tarea.titulo }}
        </strong>
      </label>
      <p>{{ tarea.descripcion }}</p>
      <button @click="() => { console.log('Eliminando:', tarea); eliminarTarea(tarea._id) }">Eliminar</button>
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

<template>
  <main class="container">
    <TaskList />
  </main>
</template>

<script setup>
import TaskList from './view/TaskList.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #ffb6c1; 
  color: white;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 650px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin: 5px 0 15px;
  border: none;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: bold;
  font-size: 16px;
}

input::placeholder,
textarea::placeholder {
  color: #f0f0f0;
}

button {
  background-color: #ffffff;
  color: #ff4b7d;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background-color: #ffe0eb;
}

ul {
  list-style: none;
  padding: 0;
}

.task-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}

.task-item {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-sizing: border-box;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  justify-content: flex-start;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap; 
}

.checkbox-label input[type="checkbox"] {
  transform: scale(1.2);
  accent-color: #ff4b7d;
  cursor: pointer;
}

.checkbox-label span {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.task-item p {
  text-align: left;
  padding-left: 30px;
  margin: 0;
  font-size: 1rem;
  color: white;
}


.task-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

input[type="checkbox"] { /*Creo que no funciona */
  accent-color: white; /* blanco */
  transform: scale(1.2);
  cursor: pointer;
}

</style>

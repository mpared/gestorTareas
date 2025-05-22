<template>
  <main>
    <TaskList />
  </main>
</template>

<script setup>
import TaskList from './view/TaskList.vue';
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  padding: 2rem;
}

main {
  max-width: 600px;
  margin: auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
</style>

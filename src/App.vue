<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="max-w-md mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">Mini Task Logger</h1>

      <!-- Input component -->
      <TaskInput @add-task="handleAddTask" />

      <!-- List component -->
      <TaskList :tasks="tasks" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'

// Import our database functions
import { addTask, fetchTasks } from './db.js'

// Reactive array of tasks
const tasks = ref([])

// Load tasks when the app starts
onMounted(async () => {
  tasks.value = await fetchTasks()
})

// Handle new task events
async function handleAddTask(text) {
  // 1. Save to IndexedDB
  await addTask(text)
  // 2. Re-fetch and update the list
  tasks.value = await fetchTasks()
}
</script>

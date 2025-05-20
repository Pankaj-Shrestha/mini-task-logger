<template>
  <div class="bg-gray-50 min-h-screen flex items-start justify-center py-12 px-4">
    <div class="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 space-y-8">
      <!-- Header -->
      <div class="header text-center">
        <h1 class="text-5xl font-extrabold text-blue-700">Mini Task Logger</h1>
      </div>

      <!-- Input Section -->
      <div class="input-section">
        <TaskInput @add-task="handleAddTask" />
      </div>

      <!-- Toast Placeholder: reserves 4rem height -->
      <div class="toast-placeholder mb-4 min-h-[4rem]">
        <!-- Inline toast sits here when showToast is true -->
        <Toast :show="showToast" :message="toastMessage" />
      </div>

      <!-- List Section -->
      <div class="list-section">
        <TaskList :tasks="tasks" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
import Toast from './components/Toast.vue'

// Import our database functions
import { addTask, fetchTasks } from './db.js'

// Reactive array of tasks
const tasks = ref([])

// Toast state
const showToast = ref(false)
const toastMessage = ref('')

// Load exisiting tasks when the app starts from IndexedDB
onMounted(async () => {
  tasks.value = await fetchTasks()
})

// Handle new task events
async function handleAddTask(text) {
  // 1. Save to IndexedDB
  await addTask(text)
  // 2. Re-fetch and update the list
  tasks.value = await fetchTasks()
  // show inline toast
  toastMessage.value = 'Task added successfully!'
  showToast.value = true

  // hide after 2s
  setTimeout(() => (showToast.value = false), 2000)
}
</script>

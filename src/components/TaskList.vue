<template>
  <ul class="space-y-2">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="flex justify-between items-center p-3 bg-white rounded shadow-sm"
    >
      <span>{{ task.text }}</span>
      <small class="text-gray-500">{{ formatDate(task.createdAt) }}</small>
    </li>
  </ul>
</template>

<script setup>
// Expect a prop "tasks" with an array of task objects
const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

/**
 * Format a timestamp (ms) into a string.
 * @param {number} ts – timestamp from Date.now()
 * @return {string} – formatted date string
 */
function formatDate(ts) {
  return new Date(ts).toLocaleString()
}
</script>

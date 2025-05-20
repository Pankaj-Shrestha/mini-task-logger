<template>
  <!-- Empty state -->
  <div v-if="tasks.length === 0" class="text-center py-10 text-gray-500">No tasks logged yet.</div>

  <!-- Otherwise, render with a transition-group for nice entry -->
  <transition-group name="list" tag="ul" class="space-y-4">
    <li
      v-for="task in tasks"
      :key="task.id"
      class="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition"
    >
      <span class="text-lg text-gray-800">{{ task.text }}</span>
      <small class="text-sm text-gray-500">{{ formatDate(task.createdAt) }}</small>
    </li>
  </transition-group>
</template>

<script setup>
const props = defineProps({ tasks: Array })

//Expressive date formatting
function formatDate(ts) {
  return new Intl.DateTimeFormat('default', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(ts))
}
</script>

<style scoped>
/* Animate list items sliding up & fading in */
.list-enter-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.list-leave-active {
  transition: opacity 0.2s ease;
}
.list-leave-to {
  opacity: 0;
}
</style>

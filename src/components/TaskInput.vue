<template>
  <div class="flex items-center space-x-4 mb-6">
    <input
      v-model="newText"
      @keyup.enter="submitTask"
      type="text"
      placeholder="Enter a task…"
      class="flex-1 text-lg px-5 py-3 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
    />
    <button
      @click="submitTask"
      :disabled="!newText.trim()"
      class="text-lg font-semibold px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition disabled:opacity-50"
    >
      Add
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Emit an event to parent with the new task text
const emit = defineEmits(['add-task'])
// Local state for the input’s text
const newText = ref('')

//Calls when the user presses Enter or clicks the button "Add"
// and clear the input field.
function submitTask() {
  const text = newText.value.trim()
  if (text) {
    emit('add-task', text)
    newText.value = ''
  }
}
</script>

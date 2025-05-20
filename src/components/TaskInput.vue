<template>
  <div class="flex gap-2 mb-4">
    <input
      v-model="newText"
      @keyup.enter="submitTask"
      type="text"
      placeholder="Enter a task…"
      class="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring"
    />
    <button
      @click="submitTask"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
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

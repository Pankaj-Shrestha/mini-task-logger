<template>
  <transition name="fade">
    <!-- Minimal inline toast -->
    <div
      v-if="show"
      class="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-md shadow-sm text-sm"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  message: String,
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>

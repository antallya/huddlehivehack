<template>
  <div class="px-4 py-2 rounded-full text-sm font-medium animate-pulse" :class="color">
    {{ mood }}
  </div>
</template>

<script setup>
defineProps({
  mood: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'bg-purple-100 text-purple-700'
  }
})
</script>

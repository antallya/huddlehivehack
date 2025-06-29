<template>
  <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
    <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
      <Icon :name="icon" class="w-6 h-6 text-red-600" />
    </div>
    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

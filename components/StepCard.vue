<template>
  <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative">
    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
      {{ step }}
    </div>
    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 mt-4">
      <Icon :name="icon" class="w-6 h-6 text-purple-600" />
    </div>
    <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  step: {
    type: String,
    required: true
  },
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

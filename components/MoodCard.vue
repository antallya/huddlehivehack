<template>
  <div class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 bg-gradient-to-r" :class="color">
      <Icon :name="icon" class="w-6 h-6 text-white" />
    </div>
    <h3 class="text-xl font-semibold text-gray-800 mb-3 text-center">{{ title }}</h3>
    <p class="text-gray-600 text-center">{{ description }}</p>
    <div class="mt-4 flex justify-center">
      <UButton variant="outline" size="sm">
        Try This Mood
      </UButton>
    </div>
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
  },
  color: {
    type: String,
    required: true
  }
})
</script>

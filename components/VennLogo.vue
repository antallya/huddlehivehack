<template>
  <div class="relative">
    <!-- Outer circle (largest) -->
    <div class="w-8 h-8 rounded-full border-2 border-purple-400 relative">
      <!-- Left circle -->
      <div class="absolute -left-2 top-1 w-5 h-5 rounded-full border-2 border-blue-400 bg-blue-50"></div>
      <!-- Right circle -->
      <div class="absolute -right-2 top-1 w-5 h-5 rounded-full border-2 border-teal-400 bg-teal-50"></div>
      <!-- Center intersection with U -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
        <span class="text-white text-xs font-bold">U</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Venn diagram logo component representing where different people's social needs overlap
</script>

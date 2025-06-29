<template>
  <div class="relative flex items-center justify-center" :class="sizeClasses">
    <!-- Modern logo inspired by community-space-connect but with vennU branding -->
    <div class="relative flex items-center justify-center">
      <!-- Main circular background -->
      <div class="relative bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
        <!-- Inner content -->
        <div class="bg-white rounded-full flex items-center justify-center" :class="innerSizeClasses">
          <!-- Stylized V logo -->
          <svg viewBox="0 0 24 24" :class="iconSizeClasses" class="text-transparent">
            <defs>
              <linearGradient id="vennGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#8B5CF6"/>
                <stop offset="50%" style="stop-color:#3B82F6"/>
                <stop offset="100%" style="stop-color:#14B8A6"/>
              </linearGradient>
            </defs>
            <!-- Modern V shape with community connection concept -->
            <path 
              d="M4 4 L10 16 L12 12 L14 16 L20 4 M8 8 A4 4 0 1 1 16 8" 
              stroke="url(#vennGradient)" 
              stroke-width="2.5" 
              fill="none" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
            <!-- Connection dots -->
            <circle cx="8" cy="8" r="1.5" fill="url(#vennGradient)" />
            <circle cx="16" cy="8" r="1.5" fill="url(#vennGradient)" />
            <circle cx="12" cy="12" r="2" fill="url(#vennGradient)" />
          </svg>
        </div>
        
        <!-- Subtle outer glow -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full animate-pulse opacity-20 scale-110"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Modern logo inspired by community-space-connect design
// Features a clean, circular design with the vennU brand colors
const props = defineProps({
  size: {
    type: String,
    default: 'default' // default, large, small
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'large':
      return 'w-16 h-16'
    case 'small':
      return 'w-6 h-6'
    default:
      return 'w-12 h-12'
  }
})

const innerSizeClasses = computed(() => {
  switch (props.size) {
    case 'large':
      return 'w-12 h-12'
    case 'small':
      return 'w-4 h-4'
    default:
      return 'w-8 h-8'
  }
})

const iconSizeClasses = computed(() => {
  switch (props.size) {
    case 'large':
      return 'w-8 h-8'
    case 'small':
      return 'w-3 h-3'
    default:
      return 'w-5 h-5'
  }
})
</script>

<style scoped>
/* Smooth animations for the logo */
.relative:hover .animate-pulse {
  animation-duration: 1.5s;
}

/* Custom gradient animation */
@keyframes gradient-shift {
  0%, 100% { 
    background-position: 0% 50%; 
  }
  50% { 
    background-position: 100% 50%; 
  }
}

.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>

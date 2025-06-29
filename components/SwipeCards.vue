<template>
  <div class="w-full max-w-md mx-auto">
    <div class="relative h-96 perspective-1000">
      <!-- Card Stack -->
      <div
        v-for="(item, index) in visibleItems"
        :key="item.id"
        :class="[
          'absolute inset-0 bg-white rounded-2xl shadow-2xl cursor-grab active:cursor-grabbing transition-all duration-300',
          {
            'z-30 transform': index === 0,
            'z-20 transform scale-95 translate-y-2': index === 1,
            'z-10 transform scale-90 translate-y-4 opacity-50': index === 2,
          }
        ]"
        :style="index === 0 ? cardTransform : ''"
        @mousedown="startDrag"
        @touchstart="startDrag"
      >
        <!-- Card Content -->
        <div class="h-full flex flex-col">
          <!-- Image Section -->
          <div class="h-48 relative overflow-hidden rounded-t-2xl">
            <img 
              :src="item.image" 
              :alt="item.name"
              class="w-full h-full object-cover"
            />
            <!-- Overlay badges -->
            <div class="absolute top-4 left-4 flex space-x-2">
              <PBadge 
                :value="item.type" 
                :severity="item.type === 'Community' ? 'info' : 'success'"
                class="text-xs"
              />
              <PBadge 
                v-if="item.distance"
                :value="item.distance" 
                severity="secondary"
                class="text-xs"
              />
            </div>
            
            <!-- Match percentage -->
            <div class="absolute top-4 right-4">
              <div class="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-purple-600">
                {{ item.matchPercentage }}% match
              </div>
            </div>
          </div>
          
          <!-- Content Section -->
          <div class="flex-1 p-6">
            <div class="flex items-start justify-between mb-3">
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-1">{{ item.name }}</h3>
                <p class="text-gray-600">{{ item.location }}</p>
              </div>
              <div class="text-right">
                <PRating 
                  :modelValue="item.rating" 
                  readonly 
                  :stars="5" 
                  class="text-sm"
                />
                <p class="text-xs text-gray-500 mt-1">{{ item.reviews }} reviews</p>
              </div>
            </div>
            
            <p class="text-gray-700 mb-4 text-sm leading-relaxed">{{ item.description }}</p>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <PTag 
                v-for="tag in item.tags" 
                :key="tag"
                :value="tag" 
                class="text-xs"
                severity="info"
              />
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 text-center border-t border-gray-100 pt-4">
              <div>
                <div class="text-lg font-semibold text-purple-600">{{ item.capacity }}</div>
                <div class="text-xs text-gray-500">Capacity</div>
              </div>
              <div>
                <div class="text-lg font-semibold text-teal-600">{{ item.events }}</div>
                <div class="text-xs text-gray-500">Events</div>
              </div>
              <div>
                <div class="text-lg font-semibold text-orange-600">${{ item.price }}</div>
                <div class="text-xs text-gray-500">Per hour</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Swipe indicators -->
        <div 
          v-if="index === 0 && swipeDirection"
          :class="[
            'absolute inset-0 rounded-2xl flex items-center justify-center transition-opacity duration-200',
            {
              'bg-green-500/20 border-4 border-green-500': swipeDirection === 'right',
              'bg-red-500/20 border-4 border-red-500': swipeDirection === 'left',
              'bg-blue-500/20 border-4 border-blue-500': swipeDirection === 'up'
            }
          ]"
        >
          <div 
            :class="[
              'text-6xl font-bold',
              {
                'text-green-500': swipeDirection === 'right',
                'text-red-500': swipeDirection === 'left',
                'text-blue-500': swipeDirection === 'up'
              }
            ]"
          >
            {{ swipeDirection === 'right' ? '❤️' : swipeDirection === 'left' ? '❌' : '⭐' }}
          </div>
        </div>
      </div>
      
      <!-- No more cards message -->
      <div 
        v-if="visibleItems.length === 0"
        class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl border-2 border-dashed border-purple-300"
      >
        <div class="text-center">
          <div class="text-6xl mb-4">🎉</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">All caught up!</h3>
          <p class="text-gray-600 mb-4">You've seen all available matches in your area.</p>
          <PButton 
            label="Refresh" 
            icon="pi pi-refresh"
            @click="resetCards"
            class="mood-button"
          />
        </div>
      </div>
    </div>
    
    <!-- Action Buttons -->
    <div class="flex justify-center space-x-4 mt-6">
      <PButton 
        icon="pi pi-times"
        severity="danger"
        rounded
        outlined
        size="large"
        @click="() => swipeCard('left')"
        :disabled="visibleItems.length === 0"
        class="w-14 h-14"
      />
      <PButton 
        icon="pi pi-star"
        severity="warning"
        rounded
        outlined  
        size="large"
        @click="() => swipeCard('up')"
        :disabled="visibleItems.length === 0"
        class="w-14 h-14"
      />
      <PButton 
        icon="pi pi-heart"
        severity="success"
        rounded
        outlined
        size="large"
        @click="() => swipeCard('right')"
        :disabled="visibleItems.length === 0"
        class="w-14 h-14"
      />
    </div>
    
    <!-- Action Labels -->
    <div class="flex justify-center space-x-8 mt-2 text-sm text-gray-500">
      <span>Pass</span>
      <span>Super Like</span>
      <span>Like</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    default: 'mixed' // 'communities', 'venues', 'mixed'
  }
})

const emit = defineEmits(['swipe', 'match', 'pass', 'superlike'])

// Reactive state
const currentIndex = ref(0)
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const dragOffset = ref({ x: 0, y: 0 })
const swipeDirection = ref(null)

// Computed
const visibleItems = computed(() => {
  return props.items.slice(currentIndex.value, currentIndex.value + 3)
})

const cardTransform = computed(() => {
  if (!isDragging.value) return ''
  
  const { x, y } = dragOffset.value
  const rotation = x * 0.1 // Subtle rotation based on horizontal movement
  
  return `transform: translate(${x}px, ${y}px) rotate(${rotation}deg)`
})

// Methods
function startDrag(event) {
  if (visibleItems.value.length === 0) return
  
  isDragging.value = true
  const clientX = event.clientX || event.touches[0].clientX
  const clientY = event.clientY || event.touches[0].clientY
  
  dragStart.value = { x: clientX, y: clientY }
  
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', endDrag)
  document.addEventListener('touchmove', onDrag)
  document.addEventListener('touchend', endDrag)
}

function onDrag(event) {
  if (!isDragging.value) return
  
  const clientX = event.clientX || event.touches[0].clientX
  const clientY = event.clientY || event.touches[0].clientY
  
  dragOffset.value = {
    x: clientX - dragStart.value.x,
    y: clientY - dragStart.value.y
  }
  
  // Determine swipe direction for visual feedback
  const { x, y } = dragOffset.value
  const threshold = 50
  
  if (Math.abs(x) > threshold || Math.abs(y) > threshold) {
    if (Math.abs(x) > Math.abs(y)) {
      swipeDirection.value = x > 0 ? 'right' : 'left'
    } else if (y < -threshold) {
      swipeDirection.value = 'up'
    } else {
      swipeDirection.value = null
    }
  } else {
    swipeDirection.value = null
  }
}

function endDrag() {
  if (!isDragging.value) return
  
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', endDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', endDrag)
  
  const { x, y } = dragOffset.value
  const threshold = 80
  
  // Determine if swipe was strong enough
  if (Math.abs(x) > threshold) {
    swipeCard(x > 0 ? 'right' : 'left')
  } else if (y < -threshold) {
    swipeCard('up')
  } else {
    // Snap back
    dragOffset.value = { x: 0, y: 0 }
    swipeDirection.value = null
  }
}

function swipeCard(direction) {
  if (visibleItems.value.length === 0) return
  
  const currentItem = visibleItems.value[0]
  
  // Emit events
  emit('swipe', { item: currentItem, direction })
  
  if (direction === 'right') {
    emit('match', currentItem)
    toast.add({
      severity: 'success',
      summary: 'It\'s a Match! ❤️',
      detail: `You liked ${currentItem.name}`,
      life: 3000
    })
  } else if (direction === 'left') {
    emit('pass', currentItem)
    toast.add({
      severity: 'info',
      summary: 'Passed',
      detail: `Maybe next time!`,
      life: 2000
    })
  } else if (direction === 'up') {
    emit('superlike', currentItem)
    toast.add({
      severity: 'warning',
      summary: 'Super Like! ⭐',
      detail: `You super liked ${currentItem.name}`,
      life: 3000
    })
  }
  
  // Move to next card
  currentIndex.value++
  dragOffset.value = { x: 0, y: 0 }
  swipeDirection.value = null
}

function resetCards() {
  currentIndex.value = 0
  dragOffset.value = { x: 0, y: 0 }
  swipeDirection.value = null
  
  toast.add({
    severity: 'info',
    summary: 'Refreshed!',
    detail: 'New matches are ready to explore',
    life: 2000
  })
}
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.cursor-grab:active {
  cursor: grabbing;
}

/* Smooth transitions */
.transition-all {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Card hover effects */
.bg-white:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>

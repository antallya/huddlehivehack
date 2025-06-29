<template>
  <div class="bg-white rounded-xl p-8 shadow-2xl max-w-4xl mx-auto">
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-gray-800 mb-4">Try Mood Charades</h3>
      <p class="text-gray-600">Select how you're feeling right now and see who might match your vibe!</p>
    </div>

    <!-- Current Mood Selection -->
    <div class="mb-8">
      <h4 class="text-lg font-semibold text-gray-700 mb-4 text-center">What's your current social mood?</h4>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div 
          v-for="mood in moods" 
          :key="mood.id"
          @click="selectMood(mood)"
          :class="[
            'p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:scale-105',
            selectedMood?.id === mood.id 
              ? 'border-purple-500 bg-purple-50 shadow-lg' 
              : 'border-gray-200 hover:border-purple-300'
          ]"
        >
          <div class="text-center">
            <div class="text-3xl mb-2">{{ mood.emoji }}</div>
            <div class="font-medium text-gray-800">{{ mood.name }}</div>
            <div class="text-sm text-gray-500 mt-1">{{ mood.description }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mood Expression Area -->
    <div v-if="selectedMood" class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
      <h4 class="text-lg font-semibold text-gray-700 mb-4 text-center">Express your {{ selectedMood.name }} vibe</h4>
      <div class="text-center">
        <div class="text-6xl mb-4 animate-bounce">{{ selectedMood.emoji }}</div>
        <p class="text-lg text-gray-700 mb-4">{{ selectedMood.fullDescription }}</p>
        <div class="flex justify-center space-x-4">
          <UButton 
            :color="isExpressing ? 'red' : 'purple'" 
            @click="toggleExpressing"
            size="lg"
          >
            <Icon :name="isExpressing ? 'i-heroicons-stop' : 'i-heroicons-play'" class="mr-2" />
            {{ isExpressing ? 'Stop Broadcasting' : 'Start Broadcasting' }}
          </UButton>
        </div>
      </div>
    </div>

    <!-- Nearby Matches -->
    <div v-if="isExpressing" class="mb-8">
      <h4 class="text-lg font-semibold text-gray-700 mb-4 text-center">
        People nearby who match your vibe
        <span class="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse ml-2"></span>
      </h4>
      <div class="grid md:grid-cols-3 gap-4">
        <div 
          v-for="match in filteredMatches" 
          :key="match.id"
          class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
        >
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold">
              {{ match.initials }}
            </div>
            <div class="flex-1">
              <div class="font-medium text-gray-800">{{ match.name }}</div>
              <div class="text-sm text-gray-500">{{ match.distance }} away</div>
              <div class="text-sm text-purple-600 flex items-center">
                <span class="mr-1">{{ getMoodEmoji(match.mood) }}</span>
                {{ match.mood }}
              </div>
            </div>
          </div>
          <div class="mt-3">
            <UButton 
              variant="outline" 
              size="sm" 
              block 
              @click="sendVibeCheck(match)"
              :disabled="match.contacted"
            >
              {{ match.contacted ? 'Vibe Sent!' : 'Send Vibe Check' }}
            </UButton>
          </div>
        </div>
      </div>
    </div>

    <!-- Location Suggestions -->
    <div v-if="isExpressing" class="text-center">
      <h4 class="text-lg font-semibold text-gray-700 mb-4">Suggested meetup spots nearby</h4>
      <div class="flex flex-wrap justify-center gap-2">
        <span 
          v-for="location in suggestedLocations" 
          :key="location"
          class="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
        >
          📍 {{ location }}
        </span>
      </div>
    </div>

    <!-- Demo Notice -->
    <div class="mt-8 text-center">
      <p class="text-sm text-gray-500">
        🎭 This is a demo of the Mood Charades feature. In the real app, this would connect you with actual people nearby!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedMood = ref(null)
const isExpressing = ref(false)

const moods = [
  {
    id: 1,
    name: 'Quiet Company',
    emoji: '📚',
    description: 'Parallel activities',
    fullDescription: 'You want to be around people but focus on your own thing - reading, working, or just existing in shared space.'
  },
  {
    id: 2,
    name: 'Casual Chat',
    emoji: '☕',
    description: 'Light conversation',
    fullDescription: 'You\'re in the mood for easy, flowing conversation without deep commitment or heavy topics.'
  },
  {
    id: 3,
    name: 'Decompression',
    emoji: '😮‍💨',
    description: 'Vent & unwind',
    fullDescription: 'You need to decompress from your day and wouldn\'t mind having someone to share the experience with.'
  },
  {
    id: 4,
    name: 'Creative Energy',
    emoji: '💡',
    description: 'Brainstorm & create',
    fullDescription: 'You\'re feeling inspired and want to bounce ideas around or work on something creative together.'
  },
  {
    id: 5,
    name: 'Gentle Movement',
    emoji: '🚶',
    description: 'Walking & talking',
    fullDescription: 'You want to get moving but at a relaxed pace - perfect for walking meetings or gentle activities.'
  },
  {
    id: 6,
    name: 'Just Presence',
    emoji: '🤝',
    description: 'Shared space',
    fullDescription: 'You don\'t need to talk much, just want to share space with another human being.'
  }
]

const nearbyMatches = ref([
  {
    id: 1,
    name: 'Alex',
    initials: 'AK',
    distance: '0.2 miles',
    mood: 'Quiet Company',
    contacted: false
  },
  {
    id: 2,
    name: 'Sam',
    initials: 'SJ',
    distance: '0.4 miles',
    mood: 'Casual Chat',
    contacted: false
  },
  {
    id: 3,
    name: 'Jordan',
    initials: 'JL',
    distance: '0.1 miles',
    mood: 'Just Presence',
    contacted: false
  },
  {
    id: 4,
    name: 'Casey',
    initials: 'CM',
    distance: '0.3 miles',
    mood: 'Creative Energy',
    contacted: false
  },
  {
    id: 5,
    name: 'Riley',
    initials: 'RB',
    distance: '0.5 miles',
    mood: 'Gentle Movement',
    contacted: false
  }
])

const filteredMatches = computed(() => {
  if (!selectedMood.value) return []
  
  // Show matches that complement the selected mood
  const compatibleMoods = {
    'Quiet Company': ['Quiet Company', 'Just Presence'],
    'Casual Chat': ['Casual Chat', 'Decompression'],
    'Decompression': ['Decompression', 'Casual Chat'],
    'Creative Energy': ['Creative Energy', 'Casual Chat'],
    'Gentle Movement': ['Gentle Movement', 'Casual Chat'],
    'Just Presence': ['Just Presence', 'Quiet Company']
  }
  
  return nearbyMatches.value.filter(match => 
    compatibleMoods[selectedMood.value.name]?.includes(match.mood)
  )
})

function getMoodEmoji(moodName) {
  const emojiMap = {
    'Quiet Company': '📚',
    'Casual Chat': '☕',
    'Decompression': '😮‍💨',
    'Creative Energy': '💡',
    'Gentle Movement': '🚶',
    'Just Presence': '🤝'
  }
  return emojiMap[moodName] || '😊'
}

function sendVibeCheck(match) {
  match.contacted = true
  // Add some visual feedback
  setTimeout(() => {
    // In a real app, this would trigger a notification
  }, 500)
}

const suggestedLocations = [
  'Central Library Reading Room',
  'Moonlight Café',
  'Washington Square Park',
  'The Study Lounge',
  'Riverside Walking Path'
]

function selectMood(mood) {
  selectedMood.value = mood
  isExpressing.value = false
}

function toggleExpressing() {
  isExpressing.value = !isExpressing.value
}
</script>

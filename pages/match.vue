<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
    <!-- Navigation -->
    <nav class="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <VennLogo class="h-8 w-8" />
            <span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              vennU
            </span>
          </NuxtLink>
          <div class="hidden md:flex space-x-6">
            <NuxtLink to="/" class="text-gray-700 hover:text-purple-600 transition-colors">Home</NuxtLink>
            <NuxtLink to="/demo" class="text-gray-700 hover:text-purple-600 transition-colors">Demo</NuxtLink>
            <span class="text-purple-600 font-medium">Match</span>
            <NuxtLink to="/about" class="text-gray-700 hover:text-purple-600 transition-colors">About</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">
          Find Your Perfect
          <span class="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Community Match
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Swipe through communities and spaces that match your current mood and interests. 
          Build amazing connections and experiences together!
        </p>
        
        <!-- Mode Toggle -->
        <div class="flex justify-center mb-8">
          <PSelectButton 
            v-model="matchMode" 
            :options="modeOptions" 
            optionLabel="label" 
            optionValue="value"
            class="mood-selector"
          />
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid md:grid-cols-4 gap-6 mb-12">
        <PCard class="text-center hover-lift">
          <template #content>
            <div class="text-3xl font-bold text-purple-600 mb-2">{{ stats.activeCommunities }}+</div>
            <div class="text-gray-600">Active Communities</div>
          </template>
        </PCard>
        <PCard class="text-center hover-lift">
          <template #content>
            <div class="text-3xl font-bold text-teal-600 mb-2">{{ stats.availableVenues }}+</div>
            <div class="text-gray-600">Available Venues</div>
          </template>
        </PCard>
        <PCard class="text-center hover-lift">
          <template #content>
            <div class="text-3xl font-bold text-orange-600 mb-2">{{ stats.happyMatches }}K+</div>
            <div class="text-gray-600">Happy Matches</div>
          </template>
        </PCard>
        <PCard class="text-center hover-lift">
          <template #content>
            <div class="text-3xl font-bold text-green-600 mb-2">{{ stats.eventsHosted }}+</div>
            <div class="text-gray-600">Events Hosted</div>
          </template>
        </PCard>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Swipe Interface -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-gray-800">
                {{ matchMode === 'communities' ? 'Discover Communities' : matchMode === 'venues' ? 'Explore Venues' : 'Mixed Matches' }}
              </h2>
              <div class="flex items-center space-x-4">
                <PBadge :value="`${remainingCards} remaining`" severity="info" />
                <PButton 
                  icon="pi pi-sliders-h" 
                  outlined 
                  @click="showFilters = !showFilters"
                  label="Filters"
                />
              </div>
            </div>
            
            <!-- Filters Panel -->
            <PPanel v-if="showFilters" header="Matching Filters" class="mb-6" toggleable :collapsed="false">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Current Mood</label>
                  <PDropdown 
                    v-model="selectedMood" 
                    :options="moods" 
                    optionLabel="name" 
                    placeholder="Select your vibe"
                    class="w-full"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Distance (miles)</label>
                  <PSlider v-model="maxDistance" :max="25" :min="1" class="w-full" />
                  <div class="text-sm text-gray-500 mt-1">Up to {{ maxDistance }} miles away</div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <PSlider v-model="priceRange" :max="100" :min="0" range class="w-full" />
                  <div class="text-sm text-gray-500 mt-1">${{ priceRange[0] }} - ${{ priceRange[1] }} per hour</div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                  <PDropdown 
                    v-model="groupSize" 
                    :options="groupSizes" 
                    optionLabel="label" 
                    optionValue="value"
                    placeholder="Select group size"
                    class="w-full"
                  />
                </div>
              </div>
            </PPanel>
            
            <!-- Swipe Cards -->
            <SwipeCards 
              :items="filteredItems"
              :type="matchMode"
              @swipe="handleSwipe"
              @match="handleMatch"
              @pass="handlePass"
              @superlike="handleSuperLike"
            />
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Recent Matches -->
          <PCard>
            <template #header>
              <div class="p-4 border-b">
                <h3 class="text-lg font-semibold text-gray-800">Recent Matches ❤️</h3>
              </div>
            </template>
            <template #content>
              <div class="space-y-4">
                <div 
                  v-for="match in recentMatches" 
                  :key="match.id"
                  class="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer"
                >
                  <PAvatar 
                    :image="match.image" 
                    :label="match.name.charAt(0)"
                    size="small"
                    shape="circle"
                  />
                  <div class="flex-1">
                    <div class="font-medium text-gray-800 text-sm">{{ match.name }}</div>
                    <div class="text-xs text-gray-500">{{ match.matchTime }}</div>
                  </div>
                  <PBadge :value="`${match.matchPercentage}%`" severity="success" />
                </div>
                
                <div v-if="recentMatches.length === 0" class="text-center text-gray-500 py-8">
                  <div class="text-4xl mb-2">💫</div>
                  <p>Start swiping to see your matches!</p>
                </div>
              </div>
            </template>
          </PCard>

          <!-- Mood Analytics -->
          <PCard>
            <template #header>
              <div class="p-4 border-b">
                <h3 class="text-lg font-semibold text-gray-800">Your Mood Trends</h3>
              </div>
            </template>
            <template #content>
              <div class="space-y-4">
                <div v-for="mood in moodAnalytics" :key="mood.name">
                  <div class="flex justify-between items-center mb-2">
                    <div class="flex items-center space-x-2">
                      <span>{{ mood.emoji }}</span>
                      <span class="text-sm font-medium">{{ mood.name }}</span>
                    </div>
                    <span class="text-sm text-gray-500">{{ mood.percentage }}%</span>
                  </div>
                  <PProgressBar :value="mood.percentage" class="h-2" />
                </div>
              </div>
            </template>
          </PCard>

          <!-- Quick Actions -->
          <PCard>
            <template #header>
              <div class="p-4 border-b">
                <h3 class="text-lg font-semibold text-gray-800">Quick Actions</h3>
              </div>
            </template>
            <template #content>
              <div class="space-y-3">
                <PButton 
                  label="List Your Space" 
                  icon="pi pi-plus"
                  outlined
                  class="w-full mood-button"
                  @click="showListSpace = true"
                />
                <PButton 
                  label="Create Community" 
                  icon="pi pi-users"
                  outlined
                  class="w-full"
                />
                <PButton 
                  label="Host Virtual Event" 
                  icon="pi pi-video"
                  outlined
                  class="w-full"
                />
                <PButton 
                  label="View Calendar" 
                  icon="pi pi-calendar"
                  outlined
                  class="w-full"
                />
              </div>
            </template>
          </PCard>
        </div>
      </div>
    </div>

    <!-- List Space Dialog -->
    <PDialog v-model:visible="showListSpace" header="List Your Space" modal class="w-full max-w-2xl">
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Space Name</label>
          <PInputText v-model="newSpace.name" placeholder="e.g., Cozy Coffee Corner" class="w-full" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <PTextarea v-model="newSpace.description" placeholder="Describe your space..." class="w-full" />
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Capacity</label>
            <PInputNumber v-model="newSpace.capacity" placeholder="10" class="w-full" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Price per hour</label>
            <PInputNumber v-model="newSpace.price" placeholder="25" prefix="$" class="w-full" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Best for these moods</label>
          <PMultiSelect 
            v-model="newSpace.suitableMoods" 
            :options="moods" 
            optionLabel="name"
            placeholder="Select suitable moods"
            class="w-full"
          />
        </div>
      </div>
      <template #footer>
        <PButton label="Cancel" severity="secondary" @click="showListSpace = false" />
        <PButton label="List Space" @click="submitSpace" class="mood-button" />
      </template>
    </PDialog>

    <!-- Toast notifications -->
    <PToast />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

// Reactive state
const matchMode = ref('mixed')
const selectedMood = ref(null)
const maxDistance = ref(10)
const priceRange = ref([0, 50])
const groupSize = ref(null)
const showFilters = ref(false)
const showListSpace = ref(false)
const recentMatches = ref([])
const swipeHistory = ref([])

// Form data
const newSpace = ref({
  name: '',
  description: '',
  capacity: null,
  price: null,
  suitableMoods: []
})

// Options
const modeOptions = [
  { label: 'Communities', value: 'communities' },
  { label: 'Venues', value: 'venues' },
  { label: 'Mixed', value: 'mixed' }
]

const moods = [
  { name: 'Quiet Company', emoji: '📚', value: 'quiet' },
  { name: 'Casual Chat', emoji: '☕', value: 'chat' },
  { name: 'Decompression', emoji: '😮‍💨', value: 'decompress' },
  { name: 'Creative Energy', emoji: '💡', value: 'creative' },
  { name: 'Gentle Movement', emoji: '🚶', value: 'movement' },
  { name: 'Just Presence', emoji: '🤝', value: 'presence' }
]

const groupSizes = [
  { label: '1-5 people', value: 'small' },
  { label: '6-15 people', value: 'medium' },
  { label: '16-30 people', value: 'large' },
  { label: '30+ people', value: 'xlarge' }
]

// Mock data
const allItems = ref([
  {
    id: 1,
    type: 'Community',
    name: 'Digital Nomads Coffee Club',
    location: 'Downtown Café District',
    description: 'A welcoming community for remote workers who love to blend productivity with social connection.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
    rating: 4.8,
    reviews: 124,
    matchPercentage: 92,
    distance: '0.3 miles',
    tags: ['Remote Work', 'Networking', 'Coffee'],
    capacity: 15,
    events: 28,
    price: 0,
    suitableMoods: ['chat', 'quiet', 'creative']
  },
  {
    id: 2,
    type: 'Venue',
    name: 'Serenity Study Lounge',
    location: 'University District',
    description: 'A peaceful co-working space designed for focused work and quiet collaboration.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    rating: 4.6,
    reviews: 89,
    matchPercentage: 88,
    distance: '0.5 miles',
    tags: ['Study', 'Quiet', 'WiFi'],
    capacity: 25,
    events: 12,
    price: 15,
    suitableMoods: ['quiet', 'creative', 'presence']
  },
  {
    id: 3,
    type: 'Community',
    name: 'Mindful Movement Circle',
    location: 'Riverside Park',
    description: 'Gentle yoga and walking meditation group that meets in beautiful outdoor spaces.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    rating: 4.9,
    reviews: 156,
    matchPercentage: 85,
    distance: '0.7 miles',
    tags: ['Wellness', 'Outdoor', 'Mindfulness'],
    capacity: 20,
    events: 45,
    price: 10,
    suitableMoods: ['movement', 'presence', 'decompress']
  },
  {
    id: 4,
    type: 'Venue',
    name: 'Innovation Hub Makerspace',
    location: 'Tech Quarter',
    description: 'A collaborative workspace with 3D printers, whiteboards, and creative tools.',
    image: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=400&h=300&fit=crop',
    rating: 4.7,
    reviews: 203,
    matchPercentage: 94,
    distance: '1.2 miles',
    tags: ['Innovation', 'Technology', 'Collaboration'],
    capacity: 30,
    events: 67,
    price: 25,
    suitableMoods: ['creative', 'chat', 'presence']
  },
  {
    id: 5,
    type: 'Community',
    name: 'Sunset Decompression Group',
    location: 'Hilltop Overlook',
    description: 'End-of-day gathering for professionals to unwind and share experiences.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    rating: 4.5,
    reviews: 78,
    matchPercentage: 87,
    distance: '2.1 miles',
    tags: ['Networking', 'Relaxation', 'Views'],
    capacity: 12,
    events: 34,
    price: 5,
    suitableMoods: ['decompress', 'chat', 'presence']
  }
])

const stats = ref({
  activeCommunities: 500,
  availableVenues: 1200,
  happyMatches: 10,
  eventsHosted: 850
})

// Computed
const filteredItems = computed(() => {
  let items = allItems.value

  // Filter by mode
  if (matchMode.value !== 'mixed') {
    items = items.filter(item => {
      if (matchMode.value === 'communities') return item.type === 'Community'
      if (matchMode.value === 'venues') return item.type === 'Venue'
      return true
    })
  }

  // Filter by mood
  if (selectedMood.value) {
    items = items.filter(item => 
      item.suitableMoods.includes(selectedMood.value.value)
    )
  }

  // Filter by price range
  items = items.filter(item => 
    item.price >= priceRange.value[0] && item.price <= priceRange.value[1]
  )

  return items.filter(item => !swipeHistory.value.includes(item.id))
})

const remainingCards = computed(() => filteredItems.value.length)

const moodAnalytics = computed(() => [
  { name: 'Creative Energy', emoji: '💡', percentage: 35 },
  { name: 'Casual Chat', emoji: '☕', percentage: 28 },
  { name: 'Quiet Company', emoji: '📚', percentage: 20 },
  { name: 'Decompression', emoji: '😮‍💨', percentage: 17 }
])

// Methods
function handleSwipe(data) {
  swipeHistory.value.push(data.item.id)
  console.log('Swiped:', data)
}

function handleMatch(item) {
  recentMatches.value.unshift({
    id: item.id + '-match',
    name: item.name,
    image: item.image,
    matchPercentage: item.matchPercentage,
    matchTime: 'Just now'
  })
  
  // Keep only recent 5 matches
  if (recentMatches.value.length > 5) {
    recentMatches.value = recentMatches.value.slice(0, 5)
  }
}

function handlePass(item) {
  console.log('Passed on:', item)
}

function handleSuperLike(item) {
  recentMatches.value.unshift({
    id: item.id + '-superlike',
    name: item.name,
    image: item.image,
    matchPercentage: item.matchPercentage,
    matchTime: 'Super liked now'
  })
}

function submitSpace() {
  toast.add({
    severity: 'success',
    summary: 'Space Listed!',
    detail: 'Your space will be reviewed and added to the platform.',
    life: 4000
  })
  
  // Reset form
  newSpace.value = {
    name: '',
    description: '',
    capacity: null,
    price: null,
    suitableMoods: []
  }
  
  showListSpace.value = false
}

// Add missing PrimeVue components
onMounted(() => {
  // Set default mood
  selectedMood.value = moods[1] // Casual Chat
})

useHead({
  title: 'Community Match - vennU',
  meta: [
    { name: 'description', content: 'Swipe through communities and venues that match your current mood and interests.' }
  ]
})
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.mood-selector {
  border-radius: 2rem;
}
</style>

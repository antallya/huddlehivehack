<template>
  <div class="space-y-8">
    <!-- Header with PrimeVue Components -->
    <div class="bg-white rounded-xl p-6 shadow-lg">
      <h3 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Icon name="i-heroicons-sparkles" class="mr-2 text-purple-600" />
        PrimeVue Enhanced Features
      </h3>
      
      <!-- Enhanced Mood Selection with PrimeVue -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold text-gray-700 mb-3">Enhanced Mood Selection</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PCard class="mood-card">
            <template #header>
              <div class="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-t-lg">
                <div class="text-white text-center">
                  <div class="text-3xl mb-2">📚</div>
                  <h5 class="font-semibold">Quiet Company</h5>
                </div>
              </div>
            </template>
            <template #content>
              <p class="text-gray-600 text-sm mb-4">Perfect for studying, working, or reading together in peaceful silence.</p>
              <div class="flex justify-between items-center">
                <PRating v-model="quietRating" :stars="5" readonly class="text-sm" />
                <PChip label="Popular" class="mood-chip" />
              </div>
            </template>
            <template #footer>
              <PButton 
                label="Select Mood" 
                class="mood-button w-full"
                @click="selectMood('Quiet Company')"
              />
            </template>
          </PCard>

          <PCard class="mood-card">
            <template #header>
              <div class="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-t-lg">
                <div class="text-white text-center">
                  <div class="text-3xl mb-2">☕</div>
                  <h5 class="font-semibold">Casual Chat</h5>
                </div>
              </div>
            </template>
            <template #content>
              <p class="text-gray-600 text-sm mb-4">Light conversation over coffee or while taking a leisurely walk.</p>
              <div class="flex justify-between items-center">
                <PRating v-model="chatRating" :stars="5" readonly class="text-sm" />
                <PChip label="Active" class="mood-chip" />
              </div>
            </template>
            <template #footer>
              <PButton 
                label="Select Mood" 
                class="mood-button w-full"
                @click="selectMood('Casual Chat')"
              />
            </template>
          </PCard>

          <PCard class="mood-card">
            <template #header>
              <div class="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-t-lg">
                <div class="text-white text-center">
                  <div class="text-3xl mb-2">😮‍💨</div>
                  <h5 class="font-semibold">Decompression</h5>
                </div>
              </div>
            </template>
            <template #content>
              <p class="text-gray-600 text-sm mb-4">Share the stress of the day with someone who understands.</p>
              <div class="flex justify-between items-center">
                <PRating v-model="decompressRating" :stars="5" readonly class="text-sm" />
                <PChip label="Supportive" class="mood-chip" />
              </div>
            </template>
            <template #footer>
              <PButton 
                label="Select Mood" 
                class="mood-button w-full"
                @click="selectMood('Decompression')"
              />
            </template>
          </PCard>
        </div>
      </div>

      <!-- Current Mood Display -->
      <div v-if="selectedMoodPrime" class="mb-6">
        <h4 class="text-lg font-semibold text-gray-700 mb-3">Your Current Vibe</h4>
        <PPanel :header="`${selectedMoodPrime} Mode Activated`" class="mb-4">
          <div class="flex items-center space-x-4">
            <PAvatar 
              :label="selectedMoodPrime.charAt(0)" 
              class="bg-gradient-to-r from-purple-500 to-teal-500 text-white"
              size="large" 
            />
            <div class="flex-1">
              <p class="text-gray-700">You're now broadcasting your <strong>{{ selectedMoodPrime }}</strong> vibe to nearby compatible people.</p>
              <div class="mt-2">
                <PTag 
                  :value="`Broadcasting: ${selectedMoodPrime}`" 
                  severity="success" 
                  icon="pi pi-wifi"
                />
              </div>
            </div>
            <div class="text-right">
              <PButton 
                label="Stop Broadcasting" 
                severity="secondary" 
                outlined 
                @click="stopBroadcasting"
              />
            </div>
          </div>
        </PPanel>
      </div>

      <!-- Match Progress -->
      <div v-if="selectedMoodPrime" class="mb-6">
        <h4 class="text-lg font-semibold text-gray-700 mb-3">Finding Your Match</h4>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-gray-600">Scanning nearby area...</span>
            <PBadge :value="matchProgress + '%'" severity="info" />
          </div>
          <PProgressBar :value="matchProgress" class="mb-2" />
          <div class="text-sm text-gray-500">
            Found {{ potentialMatches }} potential matches within 0.5 miles
          </div>
        </div>
      </div>

      <!-- Timeline of Connection -->
      <div v-if="selectedMoodPrime && matchProgress >= 100" class="mb-6">
        <h4 class="text-lg font-semibold text-gray-700 mb-3">Connection Timeline</h4>
        <PTimeline :value="timelineEvents" align="alternate" class="customized-timeline">
          <template #marker="slotProps">
            <span 
              class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-sm"
              :style="{ backgroundColor: slotProps.item.color }"
            >
              <i :class="slotProps.item.icon"></i>
            </span>
          </template>
          <template #content="slotProps">
            <PCard class="mt-3">
              <template #title>
                {{ slotProps.item.status }}
              </template>
              <template #subtitle>
                {{ slotProps.item.date }}
              </template>
              <template #content>
                <p>{{ slotProps.item.description }}</p>
              </template>
            </PCard>
          </template>
        </PTimeline>
      </div>

      <!-- Location Suggestions Carousel -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold text-gray-700 mb-3">Suggested Meetup Locations</h4>
        <PCarousel 
          :value="locations" 
          :numVisible="3" 
          :numScroll="1" 
          :responsiveOptions="carouselResponsiveOptions"
          class="custom-carousel"
        >
          <template #item="slotProps">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
              <div class="mb-3">
                <img 
                  :src="slotProps.data.image" 
                  :alt="slotProps.data.name" 
                  class="w-6 h-6 object-cover mx-auto rounded-lg shadow-md"
                />
              </div>
              <div>
                <h4 class="mb-1 font-semibold">{{ slotProps.data.name }}</h4>
                <h6 class="mt-0 mb-3 text-gray-600">{{ slotProps.data.distance }}</h6>
                <PTag :value="slotProps.data.type" class="mr-2" />
                <PTag :value="`${slotProps.data.capacity} spots`" severity="info" />
                <div class="mt-3">
                  <PButton 
                    label="Select Location" 
                    class="mood-button" 
                    size="small"
                  />
                </div>
              </div>
            </div>
          </template>
        </PCarousel>
      </div>

      <!-- Safety Accordion -->
      <div class="mb-6">
        <h4 class="text-lg font-semibold text-gray-700 mb-3">Safety Features</h4>
        <PAccordion :activeIndex="0">
          <PAccordionTab header="Verified Locations">
            <p class="text-gray-600">
              All meetup locations are pre-verified public spaces including cafes, libraries, 
              parks, and community centers. Each location has been checked for safety, 
              accessibility, and suitability for social connections.
            </p>
            <div class="mt-3 flex space-x-2">
              <PTag value="Safe" severity="success" />
              <PTag value="Public" severity="info" />
              <PTag value="Accessible" severity="warning" />
            </div>
          </PAccordionTab>
          <PAccordionTab header="Real-time Safety">
            <p class="text-gray-600">
              Our app includes real-time check-ins, emergency contact notifications, 
              and quick reporting features. You can set automatic check-in reminders 
              and share your location with trusted contacts.
            </p>
          </PAccordionTab>
          <PAccordionTab header="Community Standards">
            <p class="text-gray-600">
              All users must agree to our community standards and code of conduct. 
              We have a progressive trust system and community moderation to ensure 
              positive experiences for everyone.
            </p>
          </PAccordionTab>
        </PAccordion>
      </div>
    </div>

    <!-- Toast for notifications -->
    <PToast />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()

// Reactive data
const selectedMoodPrime = ref(null)
const quietRating = ref(4)
const chatRating = ref(5)
const decompressRating = ref(3)
const matchProgress = ref(0)
const potentialMatches = ref(0)

// Timeline events
const timelineEvents = ref([
  {
    status: 'Mood Selected',
    date: 'Just now',
    icon: 'pi pi-heart',
    color: '#9C27B0',
    description: 'You selected your current social vibe and started broadcasting.'
  },
  {
    status: 'Scanning Area',
    date: '30 seconds ago',
    icon: 'pi pi-search',
    color: '#673AB7',
    description: 'Our algorithm is finding people with compatible moods nearby.'
  },
  {
    status: 'Match Found',
    date: '1 minute ago',
    icon: 'pi pi-users',
    color: '#FF9800',
    description: 'Found 3 potential matches within walking distance!'
  },
  {
    status: 'Location Suggested',
    date: '2 minutes ago',
    icon: 'pi pi-map-marker',
    color: '#607D8B',
    description: 'Suggested meetup locations based on your preferences and proximity.'
  }
])

// Location data for carousel
const locations = ref([
  {
    name: 'Central Library',
    distance: '0.2 miles',
    type: 'Study Space',
    capacity: 12,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
  },
  {
    name: 'Moonlight Café',
    distance: '0.3 miles',
    type: 'Café',
    capacity: 8,
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop'
  },
  {
    name: 'Washington Square Park',
    distance: '0.4 miles',
    type: 'Outdoor',
    capacity: 20,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  },
  {
    name: 'The Study Lounge',
    distance: '0.5 miles',
    type: 'Co-working',
    capacity: 15,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
  }
])

const carouselResponsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
])

// Methods
function selectMood(mood) {
  selectedMoodPrime.value = mood
  matchProgress.value = 0
  potentialMatches.value = 0
  
  toast.add({
    severity: 'success',
    summary: 'Mood Selected!',
    detail: `Now broadcasting your ${mood} vibe to nearby people.`,
    life: 3000
  })
  
  // Simulate progress
  const progressInterval = setInterval(() => {
    if (matchProgress.value < 100) {
      matchProgress.value += 10
      potentialMatches.value = Math.floor(Math.random() * 5) + 1
    } else {
      clearInterval(progressInterval)
      toast.add({
        severity: 'info',
        summary: 'Matches Found!',
        detail: `Found ${potentialMatches.value} potential matches nearby.`,
        life: 3000
      })
    }
  }, 300)
}

function stopBroadcasting() {
  selectedMoodPrime.value = null
  matchProgress.value = 0
  potentialMatches.value = 0
  
  toast.add({
    severity: 'warn',
    summary: 'Broadcasting Stopped',
    detail: 'You are no longer visible to nearby matches.',
    life: 3000
  })
}

onMounted(() => {
  // Initialize any setup needed
})
</script>

<style scoped>
.customized-timeline .p-timeline-event-content {
  line-height: 1.5;
}

.custom-carousel .p-carousel-item {
  padding: 0.5rem;
}

.mood-card {
  transition: all 0.3s ease;
}

.mood-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

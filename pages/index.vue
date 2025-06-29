<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50">
    <!-- Navigation -->
    <nav class="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <VennLogo class="h-8 w-8" />
            <span class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
              vennU
            </span>
          </div>
          <div class="hidden md:flex space-x-6">
            <a href="#how-it-works" class="text-gray-700 hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#moods" class="text-gray-700 hover:text-purple-600 transition-colors">Mood Categories</a>
            <NuxtLink to="/demo" class="text-gray-700 hover:text-purple-600 transition-colors">Try Demo</NuxtLink>
            <NuxtLink to="/match" class="text-gray-700 hover:text-purple-600 transition-colors">Community Match</NuxtLink>
            <NuxtLink to="/primevue" class="text-gray-700 hover:text-purple-600 transition-colors">PrimeVue</NuxtLink>
            <a href="#safety" class="text-gray-700 hover:text-purple-600 transition-colors">Safety</a>
            <NuxtLink to="/about" class="text-gray-700 hover:text-purple-600 transition-colors">About</NuxtLink>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink to="/auth">
              <UButton variant="ghost" size="lg" class="hidden md:block">
                Sign In
              </UButton>
            </NuxtLink>
            <NuxtLink to="/auth">
              <UButton color="purple" size="lg" class="hidden md:block">
                Join Beta
              </UButton>
            </NuxtLink>
            <UButton variant="ghost" icon="i-heroicons-bars-3" class="md:hidden" />
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="flex justify-center mb-8">
            <VennLogo size="large" />
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            <span class="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Find Your Perfect
            </span>
            <br>
            <span class="bg-gradient-to-r from-teal-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Community Match
            </span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Swipe through venues, connect with communities, and build amazing experiences together! 
            It's like Tinder for finding your perfect social space.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <NuxtLink to="/match">
              <UButton color="purple" size="xl" class="px-8 py-4 text-lg font-semibold">
                Get Started Now! 🚀
              </UButton>
            </NuxtLink>
            <NuxtLink to="/demo">
              <UButton variant="outline" color="gray" size="xl" class="px-8 py-4 text-lg">
                Try Demo
              </UButton>
            </NuxtLink>
          </div>
          
          <!-- Hero Stats - inspired by reference site -->
          <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="text-center">
              <div class="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div class="text-gray-600">Active Communities</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-teal-600 mb-2">1,200+</div>
              <div class="text-gray-600">Available Venues</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-orange-600 mb-2">10K+</div>
              <div class="text-gray-600">Happy Matches</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section - Inspired by reference site -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Join Communities -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 mb-6 group-hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-user-group" class="text-2xl text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Join Communities</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Discover amazing communities that match your interests and passions!
              </p>
            </div>
          </div>

          <!-- List Your Venue -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-8 mb-6 group-hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-building-storefront" class="text-2xl text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">List Your Venue</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Share your space and connect with vibrant communities looking for the perfect spot!
              </p>
            </div>
          </div>

          <!-- Virtual Spaces -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 mb-6 group-hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-globe-alt" class="text-2xl text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Virtual Spaces</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Host online events and connect with communities worldwide through virtual venues!
              </p>
            </div>
          </div>

          <!-- Swipe & Match -->
          <div class="text-center group hover:scale-105 transition-transform duration-300">
            <div class="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 mb-6 group-hover:shadow-xl transition-shadow">
              <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-heart" class="text-2xl text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-3">Swipe & Match</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Tinder-style matching for community leaders to find their perfect venues!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">The Problem We're Solving</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional social apps create barriers instead of connections
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProblemCard 
            icon="i-heroicons-calendar-x-mark"
            title="Planning Anxiety"
            description="People crave spontaneous connection but hate committing to scheduled events"
          />
          <ProblemCard 
            icon="i-heroicons-clock"
            title="Time Pressure"
            description="Existing apps require advance scheduling when people want immediate connection"
          />
          <ProblemCard 
            icon="i-heroicons-building-storefront"
            title="Underused Spaces"
            description="Third spaces like parks and cafes aren't being utilized for community building"
          />
          <ProblemCard 
            icon="i-heroicons-face-frown"
            title="Bad Planners Left Out"
            description="Busy people and poor planners miss out on social opportunities"
          />
          <ProblemCard 
            icon="i-heroicons-heart-crack"
            title="Dating App Fatigue"
            description="Existing apps are either dating-focused or too formal for casual connection"
          />
          <ProblemCard 
            icon="i-heroicons-user"
            title="Lonely Decompression"
            description="Post-work unwinding happens alone when people would prefer gentle company"
          />
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">How vennU Works</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time social mood matching for spontaneous micro-meetups
          </p>
        </div>
        
        <div class="grid md:grid-cols-5 gap-8">
          <StepCard 
            step="1"
            icon="i-heroicons-face-smile"
            title="Check Your Mood"
            description="Select your current social vibe from our mood categories"
          />
          <StepCard 
            step="2"
            icon="i-heroicons-map-pin"
            title="Find Nearby Matches"
            description="See compatible people and suitable venues around you"
          />
          <StepCard 
            step="3"
            icon="i-heroicons-heart"
            title="Quick Match"
            description="Get notified when someone with compatible energy is nearby"
          />
          <StepCard 
            step="4"
            icon="i-heroicons-users"
            title="Micro-Meetup"
            description="Meet for 15-60 minutes of low-commitment social interaction"
          />
          <StepCard 
            step="5"
            icon="i-heroicons-hand-raised"
            title="Natural Exit"
            description="Built-in time boundaries make leaving comfortable and easy"
          />
        </div>
      </div>
    </section>

    <!-- Mood Categories Section -->
    <section id="moods" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Mood Categories</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Express your current social vibe and find your perfect match
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MoodCard 
            icon="i-heroicons-book-open"
            title="Quiet Company"
            description="Parallel activities, minimal talking, shared presence"
            color="from-blue-500 to-blue-600"
          />
          <MoodCard 
            icon="i-heroicons-chat-bubble-left-right"
            title="Casual Chat"
            description="Light conversation, getting to know people"
            color="from-green-500 to-green-600"
          />
          <MoodCard 
            icon="i-heroicons-face-frown"
            title="Decompression"
            description="Post-work venting, shared stress relief"
            color="from-orange-500 to-orange-600"
          />
          <MoodCard 
            icon="i-heroicons-light-bulb"
            title="Creative Energy"
            description="Collaborative activities, brainstorming"
            color="from-purple-500 to-purple-600"
          />
          <MoodCard 
            icon="i-heroicons-arrow-path"
            title="Gentle Movement"
            description="Walking, light activity while socializing"
            color="from-teal-500 to-teal-600"
          />
          <MoodCard 
            icon="i-heroicons-heart"
            title="Just Presence"
            description="Shared space, optional interaction"
            color="from-pink-500 to-pink-600"
          />
        </div>
      </div>
    </section>

    <!-- Community Matching Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Swipe & Match Communities</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover communities and venues that perfectly align with your current mood and interests. 
            Swipe through options like finding your perfect social match!
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Features List -->
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-heart" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Tinder-Style Matching</h3>
                <p class="text-gray-600">Swipe right on communities you love, left on ones that don't match your vibe. Find your perfect social connections effortlessly.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-building-storefront" class="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Venue Discovery</h3>
                <p class="text-gray-600">Find spaces that match your group size, budget, and mood. From cozy cafes to creative makerspaces.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-users" class="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Community Building</h3>
                <p class="text-gray-600">Join existing communities or create your own. Connect with like-minded people who share your interests and energy.</p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="i-heroicons-chart-bar" class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Smart Analytics</h3>
                <p class="text-gray-600">Track your mood patterns and see what types of communities and spaces you connect with most.</p>
              </div>
            </div>
          </div>
          
          <!-- Mock Phone Interface -->
          <div class="flex justify-center">
            <div class="relative">
              <!-- Phone Frame -->
              <div class="w-72 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
                <div class="w-full h-full bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl overflow-hidden relative">
                  <!-- Mock Swipe Card -->
                  <div class="absolute inset-4 bg-white rounded-xl shadow-lg">
                    <div class="h-32 bg-gradient-to-r from-purple-400 to-teal-400 rounded-t-xl"></div>
                    <div class="p-4">
                      <div class="flex items-center justify-between mb-2">
                        <h4 class="font-semibold text-gray-800">Digital Nomads Club</h4>
                        <span class="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded-full">92% match</span>
                      </div>
                      <p class="text-gray-600 text-sm mb-3">Remote workers coffee community</p>
                      <div class="flex space-x-2 mb-3">
                        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Coffee</span>
                        <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Networking</span>
                      </div>
                      <div class="flex justify-between text-sm text-gray-500">
                        <span>15 members</span>
                        <span>0.3 miles</span>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Action Buttons -->
                  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Icon name="i-heroicons-x-mark" class="w-6 h-6 text-red-600" />
                    </div>
                    <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name="i-heroicons-heart" class="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Action Indicators -->
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-ping"></div>
              <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/match">
            <UButton size="xl" class="px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700">
              <Icon name="i-heroicons-arrow-right" class="mr-2" />
              Start Matching Now
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Mood Charades Demo Section -->
    <section class="py-20 bg-gradient-to-br from-teal-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Mood Charades Demo</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Instead of acting out words, express your social vibe and let others guess if they match your energy
          </p>
        </div>
        
        <MoodCharadesDemo />
      </div>
    </section>

    <!-- Safety Section -->
    <section id="safety" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-6">Safety First</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple layers of safety and verification ensure secure connections
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SafetyFeature 
            icon="i-heroicons-shield-check"
            title="Verified Public Spaces"
            description="Only pre-approved parks, cafes, libraries, and plazas"
          />
          <SafetyFeature 
            icon="i-heroicons-users"
            title="Progressive Trust"
            description="New users start in groups, unlock smaller meetups over time"
          />
          <SafetyFeature 
            icon="i-heroicons-identification"
            title="Multi-Layer Verification"
            description="Phone, photo, and optional social/workplace verification"
          />
          <SafetyFeature 
            icon="i-heroicons-bell-alert"
            title="Real-Time Safety"
            description="Check-ins, emergency contacts, and quick reporting"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-teal-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Find Your Venn?</h2>
        <p class="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
          Join the social mood marketplace where authentic connections happen spontaneously
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton size="xl" variant="solid" color="white" class="px-8 py-4 text-purple-600">
            Join Beta Waitlist
          </UButton>
          <UButton size="xl" variant="outline" color="white" class="px-8 py-4">
            Learn More
          </UButton>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <VennLogo class="h-8 w-8 text-white" />
              <span class="text-2xl font-bold">vennU</span>
            </div>
            <p class="text-gray-400">Third Space Social Mood Marketplace</p>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Product</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">How It Works</a></li>
              <li><a href="#" class="hover:text-white">Mood Categories</a></li>
              <li><a href="#" class="hover:text-white">Safety Features</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">About</a></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
              <li><a href="#" class="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Legal</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">Privacy</a></li>
              <li><a href="#" class="hover:text-white">Terms</a></li>
              <li><a href="#" class="hover:text-white">Safety</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 vennU. All rights reserved. Built for HuddleHive Hack.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Set page metadata
useHead({
  title: 'vennU - Third Space Social Mood Marketplace',
  meta: [
    { name: 'description', content: 'Connect with people based on your current social vibe for spontaneous micro-meetups in public spaces. Real-time mood matching for authentic connections.' },
    { property: 'og:title', content: 'vennU - Third Space Social Mood Marketplace' },
    { property: 'og:description', content: 'Connect with people based on your current social vibe for spontaneous micro-meetups in public spaces.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

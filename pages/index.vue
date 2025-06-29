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
            <a href="#safety" class="text-gray-700 hover:text-purple-600 transition-colors">Safety</a>
            <NuxtLink to="/about" class="text-gray-700 hover:text-purple-600 transition-colors">About</NuxtLink>
          </div>
          <UButton color="purple" size="lg" class="hidden md:block">
            Join the Beta
          </UButton>
          <UButton variant="ghost" icon="i-heroicons-bars-3" class="md:hidden" />
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="flex justify-center mb-8">
            <VennLogo class="h-24 w-24" />
          </div>
          <h1 class="text-5xl md:text-7xl font-bold mb-6">
            <span class="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              vennU
            </span>
          </h1>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Third Space Social Mood Marketplace
          </h2>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with people based on your current social vibe for spontaneous micro-meetups in public spaces. 
            It's like Mood Charades in real life!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink to="/demo">
              <UButton color="purple" size="xl" class="px-8 py-4">
                <Icon name="i-heroicons-play" class="mr-2" />
                Try Mood Charades
              </UButton>
            </NuxtLink>
            <UButton variant="outline" size="xl" class="px-8 py-4">
              <Icon name="i-heroicons-video-camera" class="mr-2" />
              Watch Demo
            </UButton>
          </div>
        </div>
      </div>
      
      <!-- Floating mood bubbles -->
      <div class="absolute top-1/4 left-10 animate-bounce">
        <MoodBubble mood="Quiet Company" color="bg-blue-100 text-blue-700" />
      </div>
      <div class="absolute top-1/3 right-16 animate-bounce delay-1000">
        <MoodBubble mood="Creative Energy" color="bg-purple-100 text-purple-700" />
      </div>
      <div class="absolute bottom-1/4 left-1/4 animate-bounce delay-500">
        <MoodBubble mood="Gentle Movement" color="bg-teal-100 text-teal-700" />
      </div>
    </section>

    <!-- Problem Section -->
    <section class="py-20 bg-white">
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

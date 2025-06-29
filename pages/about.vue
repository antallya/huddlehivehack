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
            <a href="#team" class="text-gray-700 hover:text-purple-600 transition-colors">Team</a>
            <a href="#vision" class="text-gray-700 hover:text-purple-600 transition-colors">Vision</a>
            <a href="#hackathon" class="text-gray-700 hover:text-purple-600 transition-colors">Hackathon</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">About vennU</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're reimagining how people connect in the digital age by focusing on spontaneous, 
          authentic interactions that happen in the real world.
        </p>
      </div>

      <!-- Vision Section -->
      <section id="vision" class="mb-20">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Our Vision</h2>
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 class="text-xl font-semibold text-purple-600 mb-4">The Venn Diagram Philosophy</h3>
              <p class="text-gray-600 mb-4">
                Our logo isn't just a design choice - it's our core philosophy. The Venn diagram represents 
                the intersection where different people's social needs overlap. That sweet spot where your 
                current mood aligns with someone else's.
              </p>
              <p class="text-gray-600 mb-4">
                The "U" at the center represents you - the individual whose unique social needs are valid 
                and worth matching. We believe everyone deserves to find their perfect social moment, 
                whether that's quiet companionship or energetic collaboration.
              </p>
            </div>
            <div class="flex justify-center">
              <div class="relative w-48 h-48">
                <div class="absolute inset-0 border-4 border-purple-400 rounded-full opacity-50"></div>
                <div class="absolute left-8 top-8 w-32 h-32 border-4 border-blue-400 rounded-full bg-blue-50"></div>
                <div class="absolute right-8 top-8 w-32 h-32 border-4 border-teal-400 rounded-full bg-teal-50"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
                  <span class="text-white text-2xl font-bold">U</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Problem We're Solving -->
      <section class="mb-20">
        <div class="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white">
          <h2 class="text-3xl font-bold mb-6 text-center">Why vennU Matters</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl mb-4">🏙️</div>
              <h3 class="text-xl font-semibold mb-2">Urban Loneliness</h3>
              <p class="text-purple-100">
                Despite being surrounded by millions of people, city dwellers often feel disconnected and isolated.
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">⏰</div>
              <h3 class="text-xl font-semibold mb-2">Planning Fatigue</h3>
              <p class="text-purple-100">
                Traditional social apps require too much commitment and planning, creating barriers instead of connections.
              </p>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-4">🏛️</div>
              <h3 class="text-xl font-semibold mb-2">Underused Spaces</h3>
              <p class="text-purple-100">
                Beautiful public spaces remain underutilized for community building and organic social interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Hackathon Section -->
      <section id="hackathon" class="mb-20">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">HuddleHive Hack Project</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-purple-600 mb-4">The Challenge</h3>
              <p class="text-gray-600 mb-4">
                This project was built for the HuddleHive Hack, where we were challenged to create 
                innovative solutions for modern social connection problems.
              </p>
              <h3 class="text-xl font-semibold text-purple-600 mb-4">Our Approach</h3>
              <p class="text-gray-600 mb-4">
                Instead of building another scheduling app, we focused on the moment-to-moment human 
                experience of wanting connection. We asked: "What if social apps worked like our 
                actual social needs - spontaneous, mood-dependent, and contextual?"
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-purple-600 mb-4">Technical Innovation</h3>
              <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Real-time mood broadcasting and matching algorithms</li>
                <li>Geofenced safety zones in verified public spaces</li>
                <li>Progressive trust system for new users</li>
                <li>"Mood Charades" gamification of social expression</li>
                <li>Time-bounded micro-meetup coordination</li>
              </ul>
              <h3 class="text-xl font-semibold text-purple-600 mb-4">Future Development</h3>
              <p class="text-gray-600">
                While this hackathon version focuses on the concept and user experience, the full 
                implementation would include machine learning for better mood matching and 
                partnerships with local businesses for verified spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section id="team" class="mb-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">Built with ❤️ for Community</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            This project represents our belief that technology should bring people together, 
            not keep them apart.
          </p>
        </div>
        
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6 text-center">Project Values</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-heart" class="w-8 h-8 text-purple-600" />
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">Authenticity</h4>
              <p class="text-gray-600 text-sm">Real connections based on genuine emotional needs</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-shield-check" class="w-8 h-8 text-blue-600" />
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">Safety First</h4>
              <p class="text-gray-600 text-sm">Multiple layers of verification and public space focus</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-clock" class="w-8 h-8 text-teal-600" />
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">Spontaneity</h4>
              <p class="text-gray-600 text-sm">No planning required - just show up as you are</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-building-storefront" class="w-8 h-8 text-green-600" />
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">Community</h4>
              <p class="text-gray-600 text-sm">Revitalizing public spaces as connection hubs</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <div class="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white">
          <h2 class="text-3xl font-bold mb-4">Ready to Join the Movement?</h2>
          <p class="text-xl text-purple-100 mb-6">
            Help us build a world where authentic connection is just a mood away.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="lg" variant="solid" color="white" class="px-8 py-3 text-purple-600">
              Join Beta Waitlist
            </UButton>
            <UButton size="lg" variant="outline" color="white" class="px-8 py-3">
              Share Feedback
            </UButton>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About vennU - Third Space Social Mood Marketplace',
  meta: [
    { name: 'description', content: 'Learn about vennU\'s mission to create authentic connections through spontaneous mood-based meetups in public spaces.' }
  ]
})
</script>

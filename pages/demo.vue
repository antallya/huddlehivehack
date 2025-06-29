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
            <NuxtLink to="/about" class="text-gray-700 hover:text-purple-600 transition-colors">About</NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">Mood Charades Demo</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the core of vennU: expressing your social vibe and finding compatible connections nearby.
          It's like charades, but instead of acting out words, you're expressing your current social mood!
        </p>
      </div>

      <!-- Enhanced Demo Component -->
      <MoodCharadesDemo />

      <!-- How It Works in Real Life -->
      <section class="mt-20 mb-16">
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">How This Works in Real Life</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-face-smile" class="w-8 h-8 text-purple-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">1. Express Your Mood</h3>
              <p class="text-gray-600">
                Open the app when you're feeling social. Select your current vibe from our mood categories.
                Your mood is broadcast to compatible people nearby.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-users" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">2. Find Your Match</h3>
              <p class="text-gray-600">
                Our algorithm finds people whose current mood and energy level complement yours.
                No profiles to swipe, just authentic moment-to-moment matching.
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-map-pin" class="w-8 h-8 text-teal-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">3. Meet in Safety</h3>
              <p class="text-gray-600">
                Coordinate to meet in verified public spaces like cafes, parks, or libraries.
                Built-in time boundaries make it easy to connect without pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Example Scenarios -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Real-World Scenarios</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-blue-800 mb-4">📚 Quiet Company at the Library</h3>
            <p class="text-blue-700 mb-4">
              Sarah is studying for her certification but feeling isolated. She sets her mood to "Quiet Company" 
              and finds Mark, who's also working alone nearby. They sit at the same table, occasionally sharing 
              encouraging smiles while focusing on their own tasks.
            </p>
            <div class="text-sm text-blue-600">
              ⏱️ Duration: 2 hours • 📍 Central Library • 🎯 Perfect for introverts who want gentle presence
            </div>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-orange-800 mb-4">😮‍💨 Post-Work Decompression</h3>
            <p class="text-orange-700 mb-4">
              After a stressful day, Jake wants to vent but doesn't want to burden his friends. He finds Lisa, 
              who's also in "Decompression" mode. They meet at a park bench and take turns sharing their day's 
              frustrations with someone who gets it.
            </p>
            <div class="text-sm text-orange-600">
              ⏱️ Duration: 30 minutes • 📍 Riverside Park • 🎯 Mutual emotional support without commitment
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-purple-800 mb-4">💡 Creative Brainstorming Session</h3>
            <p class="text-purple-700 mb-4">
              Emma is stuck on a creative project and needs fresh perspectives. She matches with David, 
              who's also in "Creative Energy" mode. They meet at a café and bounce ideas off each other, 
              both leaving with new inspiration.
            </p>
            <div class="text-sm text-purple-600">
              ⏱️ Duration: 1 hour • 📍 Innovation Café • 🎯 Collaborative creativity with strangers-turned-collaborators
            </div>
          </div>

          <div class="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-teal-800 mb-4">🚶 Gentle Movement & Chat</h3>
            <p class="text-teal-700 mb-4">
              Alex wants to get some fresh air but finds solo walks boring. They connect with Jordan for 
              "Gentle Movement" and take a leisurely walk through the neighborhood, discussing everything 
              from weekend plans to philosophical musings.
            </p>
            <div class="text-sm text-teal-600">
              ⏱️ Duration: 45 minutes • 📍 Downtown Walking Path • 🎯 Exercise + socialization combo
            </div>
          </div>
        </div>
      </section>

      <!-- Safety Reminders -->
      <section class="mb-16">
        <div class="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 class="text-xl font-semibold text-green-800 mb-4 flex items-center">
            <Icon name="i-heroicons-shield-check" class="mr-2" />
            Safety Built-In
          </h3>
          <div class="grid md:grid-cols-2 gap-4 text-green-700">
            <ul class="space-y-2">
              <li>✅ All meetups happen in verified public spaces</li>
              <li>✅ Real-time location sharing with trusted contacts</li>
              <li>✅ Built-in check-in system for safety</li>
            </ul>
            <ul class="space-y-2">
              <li>✅ Progressive trust system for new users</li>
              <li>✅ Community moderation and reporting</li>
              <li>✅ Clear time boundaries for easy exits</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center">
        <div class="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white">
          <h2 class="text-3xl font-bold mb-4">Ready to Try Mood Charades IRL?</h2>
          <p class="text-xl text-purple-100 mb-6">
            This demo shows the potential. The real magic happens when you connect with actual people in your area.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton size="lg" variant="solid" color="white" class="px-8 py-3 text-purple-600">
              Join the Beta
            </UButton>
            <UButton size="lg" variant="outline" color="white" class="px-8 py-3">
              Share This Demo
            </UButton>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Mood Charades Demo - vennU',
  meta: [
    { name: 'description', content: 'Try the interactive Mood Charades demo and see how vennU matches people based on their current social vibe.' }
  ]
})
</script>

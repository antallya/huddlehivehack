<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 flex items-center justify-center px-4">
    <div class="max-w-lg w-full text-center">
      <!-- Success Animation -->
      <div class="mb-8">
        <div class="relative">
          <VennLogo size="large" class="mx-auto mb-4 animate-bounce" />
          <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
            <Icon name="i-heroicons-check" class="text-white text-lg" />
          </div>
        </div>
      </div>

      <!-- Welcome Message -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Welcome to 
          <span class="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            vennU!
          </span>
        </h1>
        <p class="text-xl text-gray-600 mb-6">
          You're all set! Let's find your perfect community matches.
        </p>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-3 gap-4 mb-8">
        <div class="bg-white rounded-xl p-4 shadow-sm">
          <div class="text-2xl font-bold text-purple-600">500+</div>
          <div class="text-sm text-gray-600">Communities</div>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm">
          <div class="text-2xl font-bold text-teal-600">1,200+</div>
          <div class="text-sm text-gray-600">Venues</div>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm">
          <div class="text-2xl font-bold text-orange-600">10K+</div>
          <div class="text-sm text-gray-600">Matches</div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-4">
        <NuxtLink to="/match">
          <UButton color="purple" size="xl" class="w-full py-4 text-lg font-semibold">
            Start Matching Now! 🚀
          </UButton>
        </NuxtLink>
        
        <div class="flex space-x-4">
          <NuxtLink to="/demo" class="flex-1">
            <UButton variant="outline" size="lg" class="w-full">
              Try Demo First
            </UButton>
          </NuxtLink>
          <NuxtLink to="/about" class="flex-1">
            <UButton variant="ghost" size="lg" class="w-full">
              Learn More
            </UButton>
          </NuxtLink>
        </div>
      </div>

      <!-- Quick Tips -->
      <div class="mt-12 bg-white rounded-2xl p-6 text-left shadow-sm">
        <h3 class="font-bold text-gray-800 mb-4 text-center">Quick Tips to Get Started:</h3>
        <div class="space-y-3">
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-purple-600 text-sm font-bold">1</span>
            </div>
            <p class="text-gray-600">Set your current mood and interests in your profile</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-teal-600 text-sm font-bold">2</span>
            </div>
            <p class="text-gray-600">Swipe through communities and venues that match your vibe</p>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-orange-600 text-sm font-bold">3</span>
            </div>
            <p class="text-gray-600">Connect and arrange spontaneous meetups!</p>
          </div>
        </div>
      </div>

      <!-- Safety Notice -->
      <div class="mt-8 text-center">
        <p class="text-sm text-gray-500">
          🛡️ Your safety is our priority. All communities are verified and moderated.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Welcome/success page after authentication
// Shows quick onboarding and guides users to start matching

// Set page title
useHead({
  title: 'Welcome to vennU! | Ready to Match',
  meta: [
    { name: 'description', content: 'Welcome to vennU! You\'re all set to start finding your perfect community matches.' }
  ]
})

// Add some celebration effects
onMounted(() => {
  // Could add confetti or other celebration animations here
  console.log('Welcome to vennU! 🎉')
})
</script>

<style scoped>
/* Custom animations for welcome page */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

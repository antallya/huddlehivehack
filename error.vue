<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 flex items-center justify-center">
    <div class="text-center">
      <div class="mb-8">
        <VennLogo class="h-24 w-24 mx-auto mb-4" />
        <div class="text-8xl font-bold text-gray-300 mb-4">404</div>
      </div>
      
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Mood Not Found</h1>
      <p class="text-xl text-gray-600 mb-8 max-w-md">
        Looks like this page is in a different mood than expected. 
        Let's get you back to finding your perfect vibe match!
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink to="/">
          <UButton color="purple" size="lg">
            <Icon name="i-heroicons-home" class="mr-2" />
            Back to Home
          </UButton>
        </NuxtLink>
        <NuxtLink to="/demo">
          <UButton variant="outline" size="lg">
            <Icon name="i-heroicons-play" class="mr-2" />
            Try Mood Charades
          </UButton>
        </NuxtLink>
      </div>
      
      <!-- Floating mood elements -->
      <div class="mt-12 flex justify-center space-x-4">
        <div class="animate-bounce">
          <MoodBubble mood="Lost" color="bg-gray-100 text-gray-500" />
        </div>
        <div class="animate-bounce delay-500">
          <MoodBubble mood="Confused" color="bg-blue-100 text-blue-500" />
        </div>
        <div class="animate-bounce delay-1000">
          <MoodBubble mood="Seeking" color="bg-purple-100 text-purple-500" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '404 - Mood Not Found | vennU',
  meta: [
    { name: 'description', content: 'Page not found. Get back to finding your perfect social vibe match on vennU.' }
  ]
})
</script>

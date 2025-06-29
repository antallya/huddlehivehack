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
            <NuxtLink to="/about" class="text-gray-700 hover:text-purple-600 transition-colors">About</NuxtLink>
            <span class="text-purple-600 font-medium">PrimeVue</span>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-800 mb-6">
          Enhanced with 
          <span class="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            PrimeVue
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience vennU with beautiful, accessible, and feature-rich PrimeVue components 
          seamlessly integrated with Tailwind CSS styling.
        </p>
        
        <div class="flex justify-center mt-8 space-x-4">
          <PButton 
            label="Explore Components" 
            icon="pi pi-sparkles"
            class="mood-button"
            size="large"
            @click="scrollToShowcase"
          />
          <PButton 
            label="View Documentation" 
            icon="pi pi-book"
            outlined
            size="large"
          />
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-16">
        <PCard class="text-center hover-lift">
          <template #header>
            <div class="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
              <Icon name="i-heroicons-sparkles" class="w-12 h-12 text-white mx-auto" />
            </div>
          </template>
          <template #title>
            Rich Components
          </template>
          <template #content>
            <p class="text-gray-600">
              Over 90+ Vue.js components including advanced data tables, charts, 
              forms, and interactive elements perfectly styled for vennU.
            </p>
          </template>
        </PCard>

        <PCard class="text-center hover-lift">
          <template #header>
            <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <Icon name="i-heroicons-paint-brush" class="w-12 h-12 text-white mx-auto" />
            </div>
          </template>
          <template #title>
            Tailwind Integration
          </template>
          <template #content>
            <p class="text-gray-600">
              Seamless integration with Tailwind CSS utilities while maintaining 
              PrimeVue's component functionality and accessibility features.
            </p>
          </template>
        </PCard>

        <PCard class="text-center hover-lift">
          <template #header>
            <div class="bg-gradient-to-r from-teal-500 to-teal-600 p-6">
              <Icon name="i-heroicons-shield-check" class="w-12 h-12 text-white mx-auto" />
            </div>
          </template>
          <template #title>
            Accessibility First
          </template>
          <template #content>
            <p class="text-gray-600">
              Built-in ARIA support, keyboard navigation, and screen reader 
              compatibility ensuring vennU is accessible to everyone.
            </p>
          </template>
        </PCard>
      </div>

      <!-- Technology Stack -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h2>
        <div class="bg-white rounded-xl p-8 shadow-lg">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="i-logos-nuxt-icon" class="w-8 h-8" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">Nuxt 3</h3>
              <p class="text-gray-600 text-sm">Full-stack Vue.js framework</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="i-logos-primevue" class="w-8 h-8" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">PrimeVue</h3>
              <p class="text-gray-600 text-sm">Rich UI component library</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="i-logos-tailwindcss-icon" class="w-8 h-8" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">Tailwind CSS</h3>
              <p class="text-gray-600 text-sm">Utility-first CSS framework</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="i-logos-typescript-icon" class="w-8 h-8" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">TypeScript</h3>
              <p class="text-gray-600 text-sm">Type-safe development</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Showcase -->
      <div ref="showcaseRef" class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Interactive Showcase</h2>
        <PrimeVueShowcase />
      </div>

      <!-- Code Example -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Integration Example</h2>
        <PPanel header="PrimeVue + Tailwind CSS Integration" class="mb-6">
          <PTabView>
            <PTabPanel header="Vue Template">
              <pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;template&gt;
  &lt;PCard class="mood-card hover-lift"&gt;
    &lt;template #header&gt;
      &lt;div class="bg-gradient-to-r from-purple-500 to-teal-500 p-4"&gt;
        &lt;h3 class="text-white text-center font-semibold"&gt;Quiet Company&lt;/h3&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #content&gt;
      &lt;p class="text-gray-600 mb-4"&gt;Perfect for parallel activities&lt;/p&gt;
      &lt;PRating v-model="rating" :stars="5" readonly /&gt;
    &lt;/template&gt;
    &lt;template #footer&gt;
      &lt;PButton label="Select Mood" class="mood-button w-full" /&gt;
    &lt;/template&gt;
  &lt;/PCard&gt;
&lt;/template&gt;</code></pre>
            </PTabPanel>
            <PTabPanel header="CSS Styling">
              <pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm"><code>.mood-card {
  transition: all 0.3s ease;
}

.mood-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.mood-button {
  background: linear-gradient(to right, #a855f7, #14b8a6);
  color: white;
  border: none;
}

.hover-lift:hover {
  transform: translateY(-2px);
}</code></pre>
            </PTabPanel>
            <PTabPanel header="Configuration">
              <pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm"><code>// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css']
})

// plugins/primevue.client.ts
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    theme: {
      preset: Lara,
      options: {
        prefix: 'p',
        darkModeSelector: '.dark'
      }
    }
  })
})</code></pre>
            </PTabPanel>
          </PTabView>
        </PPanel>
      </div>

      <!-- Benefits Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Why This Combination Works</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h3 class="text-xl font-semibold text-purple-600 mb-4">PrimeVue Advantages</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <PBadge value="✓" severity="success" class="mt-1 mr-3" />
                <span>90+ production-ready components</span>
              </li>
              <li class="flex items-start">
                <PBadge value="✓" severity="success" class="mt-1 mr-3" />
                <span>Built-in accessibility (ARIA, keyboard navigation)</span>
              </li>
              <li class="flex items-start">
                <PBadge value="✓" severity="success" class="mt-1 mr-3" />
                <span>Comprehensive theming system</span>
              </li>
              <li class="flex items-start">
                <PBadge value="✓" severity="success" class="mt-1 mr-3" />
                <span>Advanced components (DataTable, Charts, etc.)</span>
              </li>
              <li class="flex items-start">
                <PBadge value="✓" severity="success" class="mt-1 mr-3" />
                <span>TypeScript support out of the box</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-lg">
            <h3 class="text-xl font-semibold text-teal-600 mb-4">Tailwind CSS Benefits</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start">
                <PBadge value="✓" severity="info" class="mt-1 mr-3" />
                <span>Rapid prototyping and development</span>
              </li>
              <li class="flex items-start">
                <PBadge value="✓" severity="info" class="mt-1 mr-3" />
                <span>Consistent design system</span>
              </li>
              <li class="flex items-start">
                <PBadge value="✓" severity="info" class="mt-1 mr-3" />
                <span>Responsive design utilities</span>
              </li>
              <li class="flex items-start">
                <PBadge value="✓" severity="info" class="mt-1 mr-3" />
                <span>Custom component styling flexibility</span>
              </li>
              <li class="flex items-start">
                <PBadge value="✓" severity="info" class="mt-1 mr-3" />
                <span>Optimized bundle size</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center">
        <PPanel class="bg-gradient-to-r from-purple-600 to-teal-600 border-none">
          <div class="text-white text-center">
            <h2 class="text-3xl font-bold mb-4">Ready to Build with This Stack?</h2>
            <p class="text-xl text-purple-100 mb-6">
              Experience the power of PrimeVue components enhanced with Tailwind CSS in your next project.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <PButton 
                label="View Documentation" 
                icon="pi pi-external-link"
                severity="secondary"
                size="large"
              />
              <PButton 
                label="Download Starter" 
                icon="pi pi-download"
                outlined
                size="large"
                class="text-white border-white hover:bg-white hover:text-purple-600"
              />
            </div>
          </div>
        </PPanel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showcaseRef = ref(null)

function scrollToShowcase() {
  showcaseRef.value?.scrollIntoView({ behavior: 'smooth' })
}

useHead({
  title: 'PrimeVue Integration - vennU',
  meta: [
    { name: 'description', content: 'Experience vennU enhanced with beautiful PrimeVue components and Tailwind CSS styling.' }
  ]
})
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>

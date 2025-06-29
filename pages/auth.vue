<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <!-- Logo and Header -->
      <div class="text-center mb-8">
        <VennLogo size="large" class="mx-auto mb-4" />
        <h1 class="text-3xl font-bold text-gray-800 mb-2">
          <span class="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Welcome to vennU
          </span>
        </h1>
        <p class="text-gray-600">Join the community matching revolution</p>
      </div>

      <!-- Auth Form -->
      <PCard class="w-full">
        <template #content>
          <div class="space-y-6">
            <!-- Tab Toggle -->
            <div class="flex justify-center mb-6">
              <PSelectButton 
                v-model="authMode" 
                :options="authModeOptions" 
                optionLabel="label" 
                optionValue="value"
                class="w-full"
              />
            </div>

            <!-- Login Form -->
            <form v-if="authMode === 'login'" @submit.prevent="handleLogin" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <PInputText 
                  v-model="loginForm.email" 
                  type="email" 
                  placeholder="Enter your email"
                  class="w-full"
                  required
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <PPassword 
                  v-model="loginForm.password" 
                  placeholder="Enter your password"
                  class="w-full"
                  toggleMask
                  required
                />
              </div>

              <PButton 
                type="submit" 
                class="w-full" 
                size="large"
                :loading="isLoading"
              >
                Sign In
              </PButton>
            </form>

            <!-- Signup Form -->
            <form v-else @submit.prevent="handleSignup" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <PInputText 
                    v-model="signupForm.firstName" 
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <PInputText 
                    v-model="signupForm.lastName" 
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <PInputText 
                  v-model="signupForm.email" 
                  type="email" 
                  placeholder="Enter your email"
                  class="w-full"
                  required
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <PPassword 
                  v-model="signupForm.password" 
                  placeholder="Create a password"
                  class="w-full"
                  toggleMask
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">User Type</label>
                <PDropdown 
                  v-model="signupForm.userType" 
                  :options="userTypeOptions"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="Select your role"
                  class="w-full"
                />
              </div>

              <div class="flex items-start space-x-2">
                <PCheckbox v-model="signupForm.agreeTerms" inputId="terms" />
                <label for="terms" class="text-sm text-gray-600">
                  I agree to the <a href="#" class="text-purple-600 hover:underline">Terms of Service</a> 
                  and <a href="#" class="text-purple-600 hover:underline">Privacy Policy</a>
                </label>
              </div>

              <PButton 
                type="submit" 
                class="w-full" 
                size="large"
                :loading="isLoading"
                :disabled="!signupForm.agreeTerms"
              >
                Create Account
              </PButton>
            </form>

            <!-- Social Login -->
            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <PButton 
                outlined 
                class="w-full"
                @click="handleSocialLogin('google')"
              >
                <Icon name="i-logos-google-icon" class="mr-2" />
                Google
              </PButton>
              <PButton 
                outlined 
                class="w-full"
                @click="handleSocialLogin('facebook')"
              >
                <Icon name="i-logos-facebook" class="mr-2" />
                Facebook
              </PButton>
            </div>
          </div>
        </template>
      </PCard>

      <!-- Back to Home -->
      <div class="text-center mt-6">
        <NuxtLink to="/" class="text-purple-600 hover:text-purple-800 text-sm">
          ← Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Auth page with login and signup functionality
// Inspired by the reference site's auth system

const authMode = ref('login')
const isLoading = ref(false)

const authModeOptions = [
  { label: 'Sign In', value: 'login' },
  { label: 'Sign Up', value: 'signup' }
]

const userTypeOptions = [
  { label: 'Community Member', value: 'member' },
  { label: 'Community Leader', value: 'leader' },
  { label: 'Venue Owner', value: 'venue_owner' },
  { label: 'Event Organizer', value: 'organizer' }
]

const loginForm = reactive({
  email: '',
  password: ''
})

const signupForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  userType: '',
  agreeTerms: false
})

const handleLogin = async () => {
  isLoading.value = true
  
  // Simulate API call
  setTimeout(() => {
    console.log('Login attempt:', loginForm)
    
    // Show success message
    $toast.add({
      severity: 'success',
      summary: 'Welcome back!',
      detail: 'You have been signed in successfully.',
      life: 3000
    })
    
    // Redirect to welcome page
    navigateTo('/welcome')
    isLoading.value = false
  }, 1500)
}

const handleSignup = async () => {
  isLoading.value = true
  
  // Simulate API call
  setTimeout(() => {
    console.log('Signup attempt:', signupForm)
    
    // Show success message
    $toast.add({
      severity: 'success',
      summary: 'Account created!',
      detail: 'Welcome to vennU! You can now start matching.',
      life: 3000
    })
    
    // Redirect to welcome page
    navigateTo('/welcome')
    isLoading.value = false
  }, 2000)
}

const handleSocialLogin = (provider) => {
  console.log(`Social login with ${provider}`)
  
  $toast.add({
    severity: 'info',
    summary: 'Coming Soon',
    detail: `${provider} login will be available soon!`,
    life: 3000
  })
}

// Set page title
useHead({
  title: 'vennU - Sign In | Join the Community',
  meta: [
    { name: 'description', content: 'Join vennU and start finding your perfect community matches today!' }
  ]
})
</script>

<style scoped>
/* Custom styling for auth page */
.p-selectbutton {
  width: 100%;
}

.p-selectbutton .p-button {
  flex: 1;
}
</style>

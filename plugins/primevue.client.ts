import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import 'primeicons/primeicons.css'

// Import PrimeVue components
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dropdown from 'primevue/dropdown'
import Badge from 'primevue/badge'
import Chip from 'primevue/chip'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'
import Rating from 'primevue/rating'
import Dialog from 'primevue/dialog'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Slider from 'primevue/slider'
import Carousel from 'primevue/carousel'
import Timeline from 'primevue/timeline'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import DataView from 'primevue/dataview'
import Panel from 'primevue/panel'
import Divider from 'primevue/divider'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import SelectButton from 'primevue/selectbutton'
import InputNumber from 'primevue/inputnumber'
import MultiSelect from 'primevue/multiselect'
import Password from 'primevue/password'
import Checkbox from 'primevue/checkbox'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, {
    theme: {
      preset: Lara,
      options: {
        prefix: 'p',
        darkModeSelector: '.dark',
        cssLayer: false
      }
    }
  })

  // Register Toast service
  nuxtApp.vueApp.use(ToastService)

  // Register components globally
  nuxtApp.vueApp.component('PButton', Button)
  nuxtApp.vueApp.component('PCard', Card)
  nuxtApp.vueApp.component('PInputText', InputText)
  nuxtApp.vueApp.component('PTextarea', Textarea)
  nuxtApp.vueApp.component('PDropdown', Dropdown)
  nuxtApp.vueApp.component('PBadge', Badge)
  nuxtApp.vueApp.component('PChip', Chip)
  nuxtApp.vueApp.component('PAvatar', Avatar)
  nuxtApp.vueApp.component('PTag', Tag)
  nuxtApp.vueApp.component('PProgressBar', ProgressBar)
  nuxtApp.vueApp.component('PRating', Rating)
  nuxtApp.vueApp.component('PDialog', Dialog)
  nuxtApp.vueApp.component('PToast', Toast)
  nuxtApp.vueApp.component('PSlider', Slider)
  nuxtApp.vueApp.component('PCarousel', Carousel)
  nuxtApp.vueApp.component('PTimeline', Timeline)
  nuxtApp.vueApp.component('PAccordion', Accordion)
  nuxtApp.vueApp.component('PAccordionTab', AccordionTab)
  nuxtApp.vueApp.component('PDataView', DataView)
  nuxtApp.vueApp.component('PPanel', Panel)
  nuxtApp.vueApp.component('PDivider', Divider)
  nuxtApp.vueApp.component('PTabView', TabView)
  nuxtApp.vueApp.component('PTabPanel', TabPanel)
  nuxtApp.vueApp.component('PSelectButton', SelectButton)
  nuxtApp.vueApp.component('PInputNumber', InputNumber)
  nuxtApp.vueApp.component('PMultiSelect', MultiSelect)
  nuxtApp.vueApp.component('PPassword', Password)
  nuxtApp.vueApp.component('PCheckbox', Checkbox)
})

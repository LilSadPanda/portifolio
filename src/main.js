import { createApp, onMounted } from 'vue'
import App from './App.vue'
import { themeChange } from 'theme-change'

export default {
  setup() {
    onMounted(() => {
      themeChange(false)
    })
  },
}
import './main.css'

createApp(App).mount('#app')

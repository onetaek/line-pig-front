import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
// import AboutView from '@/views/AboutView.vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

async function fetchRoutes() {
  try {
    const response = await axios.get('/api/menus')
    return response.data.map(item => {
      const component = () => import(`@/views/${item.component}.vue`)

      return {
        path: item.path,
        name: item.name,
        component,
      }
    })
  } catch (error) {
    console.log('Error fetching routes:', error)
    return []
  }
}

const router = createRouter({
  history: createWebHistory('/'),
  routes: await fetchRoutes(),
})

export default router

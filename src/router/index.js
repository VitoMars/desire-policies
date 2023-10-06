import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from "../views/PrivacyPolicy.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PrivacyPolicy
    },
    // {
    //   path: '/privacy_policy',
    //   name: 'privacy_policy',
    //   component: PrivacyPolicy
    // }
  ]
})

export default router

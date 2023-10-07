import { createRouter, createWebHistory } from 'vue-router'
import PrivacyPolicy from "../views/PrivacyPolicy.vue"
import TermsAndConditions from "../views/TermsAndConditions.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    // {
    //   path: '/privacy_policy',
    //   name: 'privacy_policy',
    //   component: PrivacyPolicy
    // }
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions
    }
  ]
})

export default router

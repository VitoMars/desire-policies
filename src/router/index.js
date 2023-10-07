import { createRouter, createWebHistory } from 'vue-router'
import PrivacyPolicy from "../views/PrivacyPolicy.vue"
import TermsAndConditions from "../views/TermsAndConditions.vue"
import Disclaimer from "../views/Disclaimer.vue"
import CookiePolicy from "../views/CookiePolicy.vue"
import EULA from "../views/EULA.vue"
import ReturnAndRefundPolicy from "../views/ReturnAndRefundPolicy.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
    // {
    //   path: '/privacy-policy',
    //   name: 'privacy_policy',
    //   component: PrivacyPolicy
    // },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions
    },
    {
      path: '/disclaimer',
      name: 'disclaimer',
      component: Disclaimer
    },
    {
      path: '/cookie-policy',
      name: 'cookie-policy',
      component: CookiePolicy
    },
    {
      path: '/eula',
      name: 'eula',
      component: EULA
    },
    {
      path: '/return-and-refund',
      name: 'return-and-refund',
      component: ReturnAndRefundPolicy
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Form from "./components/form/index.vue";
import Button from "./components/button/index.vue";
import Loading from "./components/loading/index.vue";
import Text from "./components/text/index.vue";
import Menu from "./components/menu/index.vue";
import Dropdown from "./components/dropdown/index.vue";


const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Form
    },
    {
      path: '/button',
      component: Button
    },
    {
      path: '/loading',
      component: Loading
    },
    {
      path: '/text',
      component: Text
    },
    {
      path: '/dropdown',
      component: Dropdown
    },
    {
      path: '/menu',
      component: Menu
    }
  ]
})


export default router
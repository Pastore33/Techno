import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contato from '../views/Contato.vue'
import Cursos from '../views/Cursos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contato',
    name: 'NewContato',
    component: Contato
  },
  {
    path: '/cursos',
    name: 'NewCursos',
    component: Cursos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

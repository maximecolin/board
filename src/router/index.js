import Vue from 'vue'
import VueRouter from 'vue-router'
import CardEdit from '../components/CardEdit.vue'

Vue.use(VueRouter)

const routes = [
  { name: 'card', path: '/card/:uuid', component: CardEdit }
]

export default new VueRouter({
  mode: 'history',
  routes
})

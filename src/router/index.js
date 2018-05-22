import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../components/Board/Board.vue'
import NoBoard from '../components/Board/NoBoard.vue'
import CardEdit from '../components/Card/CardEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/',
    components: {
      default: NoBoard
    }
  },
  {
    name: 'board',
    path: '/board/:boardUuid',
    components: {
      default: Board
    }
  },
  {
    name: 'card',
    path: '/board/:boardUuid/card/:cardUuid',
    components: {
      default: Board,
      popin: CardEdit
    }
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})

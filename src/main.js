import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router/index.js'
import shortkey from 'vue-shortkey'

Vue.config.productionTip = false

Vue.use(shortkey)

Vue.mixin({
  computed: {
    $board() {
      return this.$store.getters.findBoardByUuid(this.$route.params.boardUuid)
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <transition name="fade">
      <router-view name="popin"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">

body {
  background-color: #1d2021;
  color: #999999;
  margin: 0;
  padding: 0;
}

h4, h5 {
  margin: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}

textarea, input, button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.columns {
  overflow-x: scroll;
  white-space: nowrap;
  height: 100%;
}

textarea, input, button {
  outline: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

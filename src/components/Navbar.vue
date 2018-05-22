<script>
import BoardMenu from './Board/BoardMenu.vue'

export default {
  components: {
    BoardMenu
  }
}
</script>

<template>
  <div class="navbar">
    <BoardMenu></BoardMenu>
  </div>
</template>

<style lang="scss">
  .navbar {
    background-color: #000;
    padding: 10px;
  }
</style>

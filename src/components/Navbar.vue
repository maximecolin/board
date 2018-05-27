<script>
import BoardMenu from './Board/BoardMenu.vue'
import SearchForm from './Board/SearchForm.vue'

export default {
  components: {
    BoardMenu,
    SearchForm
  }
}
</script>

<template>
  <div class="navbar">
    <BoardMenu></BoardMenu>
    <SearchForm :board="$board"></SearchForm>
  </div>
</template>

<style lang="scss">
  .navbar {
    background-color: #000;
    padding: 10px;
  }
</style>

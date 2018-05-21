<script>
export default {
  data() {
    return {
      search: null
    }
  },
  computed: {
    boards() {
      if (this.search === null || this.search === '') {
        return this.$store.state.boards;
      }

      return this.$store.getters.searchBoards(this.search);
    }
  }
}
</script>

<template>
  <div class="board-menu">
    <button>Boards</button>
    <div>
      <input type="text" v-model="search">
      <ul v-show="boards.length > 0">
        <li v-for="board in boards">{{ board.title }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
  .board-menu {

  }
</style>

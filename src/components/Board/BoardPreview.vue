<script>
export default {
  props: {
    board: Object
  },
  computed: {
    cards() {
      return this.$store.getters.allBoardCards(this.board.uuid)
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'board', params: { boardUuid: board.uuid } }" class="board-preview">
    <span class="board-preview-title">{{ board.title }}</span>
    <span class="board-preview-cards">{{ cards.length }} cards</span>
  </router-link>
</template>

<style lang="scss">
  .board-preview {
    display: block;
    margin: 10px;
    border-radius: 3px;
    padding: 10px;
    width: calc(20% - 20px);
    background-color: #36393c;
    color: #cccccc;
    height: 60px;
    text-decoration: none;

    .board-preview-title {
      font-weight: bold;
      font-size: 18px;
      display: block;
    }
  }
</style>

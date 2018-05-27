<script>
import BoardPreview from './BoardPreview.vue'

export default {
  components: {
    BoardPreview
  },
  computed: {
    boards() {
      return this.$store.state.boards
    }
  }
}
</script>

<template>
  <div class="boards">
    <BoardPreview v-for="(board, key) in boards" :key="key" :board="board"></BoardPreview>
  </div>
</template>

<style lang="scss">
  .boards {
    display: flex;
    flex-direction: row;
  }
</style>

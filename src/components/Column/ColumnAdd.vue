<script>
export default {
  props: {
    board: Object
  },
  data() {
    return {
      opened: false,
      title: null
    }
  },
  methods: {
    add() {
      this.$store.dispatch('addBoardColumn', { boardUuid: this.board.uuid, title: this.title })
      this.close()
    },
    open() {
      this.opened = true
    },
    close() {
      this.opened = false
      this.title = null
    }
  },
  watch: {
    opened() {
      if (true === this.opened) {
        this.$nextTick(() => { this.$el.querySelector('input').focus() })
      }
    }
  }
}
</script>

<template>
  <div class="column-add">
    <button class="column-add-button" v-show="!opened" v-on:click="open()">Add a column...</button>
    <div v-show="opened">
      <form v-on:submit.prevent="add()">
        <input type="text" v-model="title" v-on:keydown.escape.prevent.stop="close()">
        <button type="button" v-on:click="close()">Cancel</button>
        <button type="submit">Add</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  .column-add {
    .column-add-button {
      border: none;
      background: none;
      color: #cccccc;
      font-size: 14px;
      cursor: pointer;
    }
  }
</style>

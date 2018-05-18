<script>
export default {
  props: {
    column: Object
  },
  data() {
    return {
      opened: false,
      title: null
    }
  },
  methods: {
    add() {
      this.$store.commit('addCard', { column: this.column, title: this.title })
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
        setTimeout(() => {
          this.$el.querySelector('textarea').focus()
        }, 100)
      }
    }
  }
}
</script>

<template>
  <div class="card-add">
      <button class="card-add-button" v-show="!opened" v-on:click="open()">Add a card...</button>
      <div v-show="opened">
        <form v-on:submit.prevent="add()">
          <div class="card">
            <textarea v-model="title" v-on:keydown.enter.prevent="add()" v-on:keydown.escape.prevent="close()"></textarea>
          </div>
          <button type="button" v-on:click="close()">Cancel</button>
          <button type="submit">Add</button>
        </form>
      </div>
  </div>
</template>

<style lang="scss">
  .card-add {
    .card-add-button {
      border: none;
      background: none;
      color: #cccccc;
      font-size: 14px;
      cursor: pointer;
    }
  }
</style>

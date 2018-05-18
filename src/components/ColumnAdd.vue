<script>
export default {
  data() {
    return {
      opened: false,
      title: null
    }
  },
  methods: {
    add() {
      this.$store.commit('addColumn', { title: this.title })
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
          this.$el.querySelector('input').focus()
        }, 100)
      }
    }
  }
}
</script>

<template>
  <div>
    <div v-show="!opened" v-on:click="open()">Add a column...</div>
    <div v-show="opened">
      <form v-on:submit.prevent="add()">
        <input type="text" v-model="title" v-on:keydown.escape.prevent.stop="close()">
        <button type="button" v-on:click="close()">Cancel</button>
        <button type="submit">Add</button>
      </form>
    </div>
  </div>
</template>

<style>
</style>

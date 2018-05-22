<script>
export default {
  props: {
    board: Object,
  },
  data() {
    return {
      name: null
    }
  },
  methods: {
    reset() {
      this.name = null
    },
    cancel() {
      this.reset()
      this.$emit('canceled')
    },
    add() {
      this.$store.dispatch('addBoardLabel', { boardUuid: this.board.uuid, name: this.name })
      this.reset()
      this.$emit('created')
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent="add()" class="label-picker-create">
    <label>
      Name
      <input type="text" v-model="name">
    </label>
    <button type="button" v-on:click="cancel()">Cancel</button>
    <button type="submit">Add</button>
  </form>
</template>

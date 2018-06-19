<script>
import CardEditTask from './CardEditTask.vue'

export default {
  components: {
    CardEditTask
  },
  props: {
    board: Object,
    card: Object
  },
  data() {
    return {
      input: null
    }
  },
  computed: {
  },
  methods: {
    add() {
      this.$store.dispatch('addCardTask', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, label: this.input })
      this.input = null
    }
  }
}
</script>

<template>
  <div>
    <h4>Tasks</h4>
    <CardEditTask v-for="(task, key) in card.tasks" :key="key" :board="board" :card="card" :task="task"></CardEditTask>
    <form v-on:submit.prevent.stop="add()">
      <input type="text" v-model="input">
    </form>
  </div>
</template>

<style lang="scss">
  .card-edit-tasks {

  }
</style>

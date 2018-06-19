<script>
import CardEditTask from './CardEditTask.vue'
import InputForm from '../Common/InputForm.vue'

export default {
  components: {
    CardEditTask,
    InputForm
  },
  props: {
    board: Object,
    card: Object
  },
  methods: {
    add(label) {
      this.$store.dispatch('addCardTask', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, label })
      this.input = null
    }
  }
}
</script>

<template>
  <div>
    <h4>Tasks</h4>
    <CardEditTask v-for="(task, key) in card.tasks" :key="key" :board="board" :card="card" :task="task"></CardEditTask>
    <InputForm :placeholder="'Add task'" :label="'Add'" v-on:submit="add($event.value)"></InputForm>
  </div>
</template>

<style lang="scss">
  .card-edit-tasks {

  }
</style>

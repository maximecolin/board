<script>
export default {
  props: {
    board: Object,
    card: Object,
    task: Object
  },
  computed: {
    done: {
      get() {
        return this.task.done
      },
      set(value) {
        this.$store.dispatch('updateCardTaskDone', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, taskUuid: this.task.uuid, value })
      }
    }
  }
}
</script>

<template>
  <form class="card-edit-task">
    <label>
      <input type="checkbox" v-model="done">
      <span>{{ task.label }}</span>
    </label>
  </form>
</template>

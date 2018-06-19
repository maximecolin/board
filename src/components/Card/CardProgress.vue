<script>
export default {
  props: {
    card: Object
  },
  computed: {
    all() {
      return this.card.tasks
    },
    done() {
      return this.card.tasks.filter(task => task.done)
    }
  }
}
</script>

<template>
  <span>{{ done.length }} / {{ all.length }}</span>
</template>

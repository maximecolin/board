<script>
import LabelPicker from '../Label/LabelPicker.vue'

export default {
  components: {
    LabelPicker
  },
  props: {
    board: Object,
    card: Object
  },
  data() {
    return {
      labels: this.card ? this.card.labels : []
    }
  },
  watch: {
    card() {
      this.labels = this.card ? this.card.labels : []
    },
    labels() {
      this.$store.dispatch('updateCardLabels', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, labels: this.labels })
    }
  }
}
</script>

<template>
  <div>
    <LabelPicker :board="board" v-model="labels"></LabelPicker>
  </div>
</template>

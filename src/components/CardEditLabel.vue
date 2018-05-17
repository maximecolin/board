<script>
import LabelPicker from './LabelPicker.vue'

export default {
  components: {
    LabelPicker
  },
  props: {
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
      this.$store.dispatch('updateCardLabels', { uuid: this.card.uuid, labels: this.labels })
    }
  }
}
</script>

<template>
  <div>
    <LabelPicker v-model="labels"></LabelPicker>
  </div>
</template>

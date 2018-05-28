<script>
import InlineLabels from '../Label/InlineLabels.vue'

export default {
  components: {
    InlineLabels
  },
  props: {
    labels: Array
  }
}
</script>

<template>
  <div class="card-display-label">
    <h4>Labels</h4>
    <InlineLabels :labels="labels"></InlineLabels>
  </div>
</template>

<style lang="scss">
  .card-display-label {
    font-size: 16px;
  }
</style>

<script>
export default {
  props: {
    labels: Array
  }
}
</script>

<template>
  <span class="inline-labels">
    <span v-for="(label, key) in labels" :key="key" class="inline-label">{{ label.name }}</span>
  </span>
</template>

<style lang="scss">
  .inline-labels {
    display: block;
    margin: 0 -3px;

    .inline-label {
      display: inline-block;
      margin: 3px;
      background-color: #222;
      padding: 1px 3px;
      font-size: 12px;
      border-radius: 3px;
    }
  }
</style>

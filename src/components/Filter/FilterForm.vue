<script>
import LabelFilter from './LabelFilter.vue'

export default {
  components: {
    LabelFilter
  },
  props: {
    value: Object
  },
  computed: {
    filters: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent class="filter-form">
    <LabelFilter v-model="filters.labels"></LabelFilter>
  </form>
</template>

<style>
  .filter-form {
    margin: 15px;
  }
</style>

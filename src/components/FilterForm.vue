<script>
export default {
  props: {
    value: String
  },
  computed: {
    filter: {
      get() {
        return this.value
      },
      set(value) {
        return this.$emit('input', value)
      }
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent class="filter-form">
    <input type="text" v-model="filter" placeholder="Filter...">
  </form>
</template>

<style lang="scss">
  .filter-form {
    input {
      background-color: #36393c;
      padding: 10px;
      margin: 20px 15px;
      color: #cccccc;
      font-size: 18px;
      display: block;
      border: none;
      width: calc(100% - 50px);
    }
  }
</style>

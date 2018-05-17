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
    },
    hasFilter() {
      return this.filter && this.filter.length > 0
    }
  },
  methods: {
    clear() {
      this.filter = null
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent class="filter-form">
    <button type="button" class="filter-clear" v-show="hasFilter" v-on:click="clear()">&times;</button>
    <input type="text" v-model="filter" placeholder="Filter...">
  </form>
</template>

<style lang="scss">
  .filter-form {

    background-color: #36393c;
    padding: 10px;
    margin: 20px 15px;
    color: #cccccc;
    font-size: 18px;
    display: block;
    width: calc(100% - 50px);

    input {
      background-color: #36393c;
      padding: 0;
      margin: 0;
      color: #cccccc;
      font-size: 18px;
      display: block;
      border: none;
      width: calc(100% - 50px);
    }

    .filter-clear {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: none;
      color: #cccccc;
      border: none;
      font-size: 16px;
      line-height: 18px;
      float: right;
      cursor: pointer;
      border-radius: 15px;
      text-align: center;
      opacity: 0.5;
      transition: opacity 0.3s ease;
      padding-bottom: 3px;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>

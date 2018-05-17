<script>
export default {
  props: {
    value: String
  },
  computed: {
    search: {
      get() {
        return this.value
      },
      set(value) {
        return this.$emit('input', value)
      }
    },
    hasSearch() {
      return this.search && this.search.length > 0
    }
  },
  methods: {
    clear() {
      this.search = null
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent class="search-form">
    <button type="button" class="search-clear" v-show="hasSearch" v-on:click="clear()">&times;</button>
    <input type="text" v-model="search" placeholder="Search...">
  </form>
</template>

<style lang="scss">
  .search-form {

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

    .search-clear {
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

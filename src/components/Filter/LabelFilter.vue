<script>
export default {
  props: {
    board: Object,
    value: Array
  },
  data() {
    return {
      open: false,
      search: null
    }
  },
  computed: {
    labels() {
      return this.$store.getters.searchLabels(this.board.uuid, this.search)
    },
    checked: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  watch: {
    open() {
      if (this.open) {
        this.search = null
        setTimeout(() => this.$el.querySelector('input').focus(), 200)
      }
    }
  }
}
</script>

<template>
  <div class="label-filter">
    <button v-on:click="open = !open" class="label-filter-button">
      labels
    </button>
    <div class="label-filter-dropdown" v-show="open">
      <input type="text" v-model="search">
      <label v-for="label in labels">
        <input type="checkbox" name="labels" v-bind:value="label.uuid" v-model="checked">
        <span>{{ label.name }}</span>
      </label>
    </div>
  </div>
</template>

<style lang="scss">
  .label-filter {
    position: relative;

    .label-filter-button {
      background-color: #36393c;
      border: none;
      border-radius: 0;
      color: #ccc;
      padding: 5px 10px;
      font-size: 18px;
      cursor: pointer;
    }

    .label-filter-dropdown {
      position: absolute;
      z-index: 1000;
      background-color: #222;
      padding: 15px;

      label {
        display: block;
        margin: 3px 0;
        cursor: pointer;
      }
    }
  }
</style>

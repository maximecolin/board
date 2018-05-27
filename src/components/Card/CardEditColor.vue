<script>
export default {
  props: {
    board: Object,
    card: Object
  },
  data() {
    return {
      color: this.card.color,
      colors: ['none', 'red', 'blue', 'orange', 'green']
    }
  },
  watch: {
    color() {
      this.$store.dispatch('updateCardColor', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, color: this.color });
    }
  }
}
</script>

<template>
  <form class="card-edit-color">
    <label v-for="(value, key) in colors" :key="key">
      <input type="radio" name="color" v-model="color" v-bind:value="value">
      <span v-bind:class="value"></span>
    </label>
  </form>
</template>

<style lang="scss">
  .card-edit-color {
    input {
      display: none;
    }

    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #ffffff;
      border: 10px solid #ffffff;
      border-radius: 15px;
      margin: 3px;
      cursor: pointer;

      &.red { background-color: red; border-color: red }
      &.blue { background-color: blue; border-color: blue }
      &.orange { background-color: orange; border-color: orange }
      &.green { background-color: green; border-color: green }
    }

    input:checked ~ span {
      background-color: #ffffff;

      &.none {
        background-color: #000000;
      }
    }
  }
</style>

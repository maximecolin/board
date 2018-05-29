<script>
export default {
  props: {
    board: Object,
    card: Object
  },
  data() {
    return {
      open: false,
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
  <div class="card-edit-color">
    <button type="button" class="card-edit-color-button" v-on:click="open = !open">Color</button>
    <div class="card-edit-color-dropdown" v-show="open">

      <form class="color-picker">
        <label v-for="(value, key) in colors" :key="key">
          <input type="radio" name="color" v-model="color" v-bind:value="value">
          <span v-bind:class="value"></span>
        </label>
      </form>

    </div>
  </div>



</template>

<style lang="scss">
  .card-edit-color {

    position: relative;
    margin-bottom: 10px;

    .card-edit-color-button {
      border: none;
      background-color: #222;
      color: #999;
      width: 100%;
      font-size: 16px;
      cursor: pointer;
    }

    .card-edit-color-dropdown {
      position: absolute;
      top: 40px;
      background-color: #222;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      z-index: 1010;
    }
  }

  .color-picker {
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

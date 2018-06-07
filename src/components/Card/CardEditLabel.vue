<script>
import LabelPicker from '../Label/LabelPicker.vue'

export default {
  components: {
    LabelPicker
  },
  props: {
    board: Object,
    card: Object
  },
  data() {
    return {
      open: false,
      labels: this.card ? this.card.labels : []
    }
  },
  watch: {
    card() {
      this.labels = this.card ? this.card.labels : []
    },
    labels() {
      this.$store.dispatch('updateCardLabels', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, labels: this.labels })
    }
  }
}
</script>

<template>
  <div class="card-edit-label">
    <button type="button" class="card-edit-label-button" v-on:click="open = !open">Labels</button>
    <div class="card-edit-label-dropdown" v-show="open">
      <LabelPicker :board="board" v-model="labels"></LabelPicker>
    </div>
  </div>
</template>

<style lang="scss">
  .card-edit-label {

    position: relative;
    margin-bottom: 10px;

    .card-edit-label-button {
      border: none;
      background-color: #222;
      color: #999;
      width: 100%;
      font-size: 16px;
      cursor: pointer;
      text-align: left;
      padding: 5px;
    }

    .card-edit-label-dropdown {
      position: absolute;
      top: 40px;
      background-color: #222;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      z-index: 1010;
    }
  }
</style>

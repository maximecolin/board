<script>
import CardDisplayPoint from './CardDisplayPoint.vue'

export default {
  components: {
    CardDisplayPoint
  },
  props: {
    board: Object,
    card: Object
  },
  data() {
    return {
      editing: false,
      input: this.card.points
    }
  },
  methods: {
    save() {
      this.editing = false
      this.$store.dispatch('updateCardPoints', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, points: this.input })
    },
    cancel() {
      this.editing = false
      this.input = this.card.points
    },
    edit() {
      this.editing = true
      this.$nextTick(() => this.$el.querySelector('input').focus())
    }
  },
  watch: {
    card() {
      this.input = this.card.points
    },
    input() {
      const int = parseInt(this.input, 10);
      this.input = Number.isInteger(int) ? int : null;
    }
  }
}
</script>

<template>
  <div class="card-edit-points">
    <button class="card-edit-points-button" v-show="!editing" v-on:click="edit()">
      Points
      <CardDisplayPoint :points="card.points"></CardDisplayPoint>
    </button>
    <form class="card-edit-points-form" v-show="editing" v-on:submit.prevent="save()">
      <input type="number" v-model="input" v-shortkey.avoid v-on:keyup.escape.prevent.stop="cancel()">
      <button type="button" v-on:click="cancel()">Cancel</button>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<style lang="scss">
  .card-edit-points {

    .card-edit-points-button {
        border: none;
        background-color: #222;
        color: #999;
        width: 100%;
        font-size: 16px;
        cursor: pointer;
        text-align: left;
        padding: 5px;

        .badge {
          float: right;
          font-size: 14px;
        }
    }

    .card-edit-points-wrapper {
      cursor: pointer;
    }

    .card-edit-points-form {
      input {
        display: block;
        width: 100%;
        box-sizing: border-box;
      }
    }

    .card-display-points {
      float: right;
    }
  }
</style>

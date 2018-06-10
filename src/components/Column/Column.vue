<script>
import Draggable from 'vuedraggable'
import Card from '../Card/Card.vue'
import CardAdd from '../Card/CardAdd.vue'
import CardDisplayPoint from '../Card/CardDisplayPoint.vue'

export default {
  components: {
    Draggable,
    Card,
    CardAdd,
    CardDisplayPoint
  },
  props: {
    board: Object,
    column: Object,
    filters: Object
  },
  computed: {
    cards: {
      get() {
        return this.column.cards
      },
      set(cards) {
        this.$store.dispatch('updateColumnCards', { boardUuid: this.board.uuid, columnUuid: this.column.uuid, cards })
      }
    },
    points() {
      return this.cards.filter(card => Number.isInteger(card.points)).reduce((sum, card) => sum + card.points, 0)
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('removeBoardColumn', { boardUuid: this.board.uuid, column: this.column })
    }
  }
}
</script>

<template>
  <div class="column">
    <h4 class="title">
      <CardDisplayPoint :points="points"></CardDisplayPoint>
      {{ column.title }}
      <button type="button" class="column-not-draggable" v-on:click="remove()">&times;</button>
    </h4>

    <div class="infos">
      {{ column.cards.length }} items
    </div>

    <Draggable v-model="cards" :options="{ draggable: '.card-draggable', filter: '.card-not-draggable', group: 'cards' }" class="cards">
      <Card v-for="(card, key) in cards" :key="key" :board="board" :card="card" :filters="filters" class="card-draggable"></Card>
    </Draggable>

    <CardAdd :board="board" :column="column"></CardAdd>
  </div>
</template>

<style lang="scss">
  .column {
    width: 20%;
    margin: 0 15px;
    display: inline-block;
    vertical-align: top;

    .title {
      text-transform: uppercase;

      .card-display-points {
        float: right;
      }
    }

    .cards {
      min-height: 30px;
    }
  }
</style>

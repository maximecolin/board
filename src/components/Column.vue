<script>
import Draggable from 'vuedraggable'
import Card from './Card.vue'
import CardAdd from './CardAdd.vue'

export default {
  components: {
    Draggable,
    Card,
    CardAdd
  },
  props: {
    column: Object
  },
  computed: {
    cards: {
      get() {
        return this.column.cards
      },
      set(value) {
        this.$store.commit('updateCards', { column: this.column, cards: value })
      }
    }
  },
  methods: {
    remove() {
      this.$store.commit('removeColumn', { column: this.column })
    }
  }
}
</script>

<template>
  <div>
    <h4 class="title">
      {{ column.title }}
      <button type="button" class="column-not-draggable" v-on:click="remove()">&times;</button>
    </h4>

    <div class="infos">
      {{ column.cards.length }} items
    </div>

    <Draggable v-model="cards" :options="{ draggable: '.card-draggable', filter: '.card-not-draggable', group: 'cards' }" class="cards">
      <Card v-for="(card, key) in cards" :key="key" :card="card" class="card card-draggable"></Card>
    </Draggable>

    <CardAdd :column="column"></CardAdd>
  </div>
</template>

<style>
</style>

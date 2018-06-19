<script>
import InlineLabels from '../Label/InlineLabels.vue'
import CardDisplayPoint from './CardDisplayPoint.vue'
import CardProgress from './CardProgress.vue'

export default {
  components: {
    InlineLabels,
    CardDisplayPoint,
    CardProgress
  },
  props: {
    board: Object,
    card: Object,
    filters: Object
  },
  computed: {
    labels() {
      return this.card.labels
        .map(labelUuid => this.$store.getters.findLabelByUuid(this.board.uuid, labelUuid))
        .filter(label => label !== undefined)
    },
    className() {
      return 'color-' + this.card.color;
    },
    filtered() {
      if (!this.filters) {
        return false
      }

      return this.intersect.length !== this.filters.labels.length
    },
    intersect() {
      return this.card.labels.filter(uuid => this.filters.labels.indexOf(uuid) > -1)
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'card', params: { boardUuid: board.uuid, cardUuid: card.uuid } }" v-bind:class="[className, 'card', filtered ? 'filtered' : '']">
    <CardDisplayPoint :points="card.points"></CardDisplayPoint>
    <InlineLabels :labels="labels"></InlineLabels>
    <span class="card-title">{{ card.title }}</span>
    <CardProgress :card="card" v-show="card.tasks.length > 0"></CardProgress>
  </router-link>
</template>

<style lang="scss">
  .card {
    &.color-red { border-left: 4px solid red }
    &.color-blue { border-left: 4px solid blue }
    &.color-orange { border-left: 4px solid orange }
    &.color-green { border-left: 4px solid green }

    transition: opacity 0.2s ease;

    &.filtered {
      opacity: 0.3;
    }

    &.sortable-choosen {
      transform: rotate(10deg);
    }

    .card-title {
      display: block;
    }

    display: block;
    background-color: #36393c;
    padding: 20px;
    margin: 10px 0;
    color: #cccccc;
    border-radius: 3px;
    text-decoration: none;

    .title {
      font-size: 14px;
    }

    textarea {
      background-color: transparent;
      color: #cccccc;
      word-wrap: break-word;
      resize: none;
      border: none;
      width: calc(100% - 40px);
      font-size: 14px;
      margin: 0;
      padding: 0;
      height: 14px;
    }

    .card-display-points {
      float: right;
    }

  }
</style>

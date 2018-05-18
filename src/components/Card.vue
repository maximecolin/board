<script>
import InlineLabels from './InlineLabels.vue'

export default {
  components: {
    InlineLabels
  },
  props: {
    card: Object,
    filters: Object
  },
  computed: {
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
      const labelsUuids = this.card.labels.map(label => label.uuid)
      const searchUuids = this.filters.labels.map(label => label.uuid)

      return labelsUuids.filter(uuid => searchUuids.indexOf(uuid) > -1)
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'card', params: { uuid: card.uuid } }" v-bind:class="[className, 'card', filtered ? 'filtered' : '']">
    <InlineLabels :labels="card.labels"></InlineLabels>
    <span class="card-title">{{ card.title }}</span>
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

  }
</style>

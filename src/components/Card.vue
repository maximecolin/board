<script>
export default {
  props: {
    card: Object,
    filter: String
  },
  computed: {
    className() {
      return 'color-' + this.card.color;
    },
    filtered() {
      return this.filter ? undefined === this.card.labels.find(label => label.name === this.filter) : false
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'card', params: { uuid: card.uuid } }" v-bind:class="[className, 'card', filtered ? 'filtered' : '']">
    <span class="card-labels">
      <span v-for="(label, index) in card.labels" :key="index" class="card-label">{{ label.name }}</span>
    </span>
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

    .card-title {
      display: block;
    }

    .card-labels {
      display: block;
      margin: 0 -3px;

      .card-label {
        display: inline-block;
        margin: 3px;
        background-color: #222;
        padding: 1px 3px;
        font-size: 12px;
        border-radius: 3px;
      }
    }

  }
</style>

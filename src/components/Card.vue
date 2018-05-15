<script>
export default {
  props: {
    card: Object
  },
  computed: {
    className() {
      return 'color-' + this.card.color;
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'card', params: { uuid: card.uuid } }" v-bind:class="className">
    {{ card.title }}
  </router-link>
</template>

<style lang="scss">
  .card {
    &.color-red { border-left: 4px solid red }
    &.color-blue { border-left: 4px solid blue }
    &.color-orange { border-left: 4px solid orange }
    &.color-green { border-left: 4px solid green }
  }
</style>

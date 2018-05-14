<script>
export default {
  props: {
    card: Object
  }
}
</script>

<template>
  <router-link :to="{ name: 'card', params: { uuid: card.uuid } }">
    {{ card.title }}
  </router-link>
</template>

<style>
</style>

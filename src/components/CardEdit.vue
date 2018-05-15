<script>
import CardEditTitle from './CardEditTitle.vue'

export default {
  components: {
    CardEditTitle
  },
  computed: {
    card() {
      return this.$store.getters.findCardByUuid(this.$route.params.uuid)
    }
  },
  methods: {
    close() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <div class="overlay" v-on:click="close()">
    <div class="modal" v-on:click.prevent.stop>
      <button v-shortkey.once="['esc']" v-on:shortkey="close()" v-on:click="close()" class="close">&times;</button>
      <CardEditTitle :card="card"></CardEditTitle>
    </div>
  </div>
</template>

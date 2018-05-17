<script>
import CardEditTitle from './CardEditTitle.vue'
import CardEditColor from './CardEditColor.vue'
import CardEditLabel from './CardEditLabel.vue'

export default {
  components: {
    CardEditTitle,
    CardEditColor,
    CardEditLabel
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
    <div class="modal" v-on:click.stop>
      <button v-shortkey.once="['esc']" v-on:shortkey="close()" v-on:click="close()" class="close">&times;</button>
      <CardEditTitle :card="card"></CardEditTitle>
      <CardEditColor :card="card"></CardEditColor>
      <CardEditLabel :card="card"></CardEditLabel>
    </div>
  </div>
</template>

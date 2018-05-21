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

<style lang="scss">
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1100;

    .modal {
      width: 50vw;
      margin: 50px auto;
      padding: 30px;
      background-color: #36393c;
      position: relative;
      border-radius: 3px;
    }

    .close {
      position: absolute;
      top: -15px;
      right: -15px;
      background-color: #000000;
      color: #ffffff;
      border: none;
      border-radius: 50px;
      padding: 5px;
      font-size: 24px;
      display: block;
      width: 24px;
      height: 24px;
      box-sizing: content-box;
      line-height: 24px;
      opacity: 0.5;
      transition: opacity 0.5s ease;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }
</style>

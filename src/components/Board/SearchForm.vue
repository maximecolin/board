<script>
import Card from '../Card/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      input: null
    }
  },
  computed: {
    cards() {
      return this.$store.getters.searchCards(this.input)
    }
  },
  methods: {
    clear() {
      this.input = null
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent class="search-form">
    <input type="text" v-model="input" class="search-input" placeholder="Search..." v-on:keydown.escape.prevent.stop="clear()">
    <ul v-show="cards.length > 0" class="search-results">
      <li v-for="card in cards">
        <Card :card="card"></Card>
      </li>
    </ul>
  </form>
</template>

<style lang="scss">
  .search-form {
    position: relative;
    display: block;
    width: calc(100% - 30px);

    margin: 20px 15px;
    padding: 0;

    color: #cccccc;
    font-size: 18px;


    .search-input {
      display: block;
      width: 100%;
      box-sizing: border-box;

      padding: 10px;
      margin: 0;

      background-color: #36393c;
      border: none;

      color: #cccccc;
      font-size: 18px;
    }

    .search-results {
      position: absolute;
      z-index: 900;
      display: block;
      width: 100%;

      max-height: 80vh;
      overflow-y: scroll;

      box-sizing: border-box;

      padding: 15px 20px;
      margin: 10px 0;

      background-color: #111;

      list-style-type: none;
    }

    .search-clear {
      display: inline-block;
      width: 24px;
      height: 24px;
      background-color: #222;
      color: #cccccc;
      border: none;
      font-size: 16px;
      line-height: 18px;
      float: right;
      cursor: pointer;
      border-radius: 15px;
      text-align: center;
      opacity: 0.5;
      transition: opacity 0.3s ease;
      padding-bottom: 3px;

      &:hover {
        opacity: 1;
      }
    }

  }
</style>

<script>
import Card from '../Card/Card.vue'

export default {
  components: {
    Card
  },
  props: {
    board: Object
  },
  data() {
    return {
      input: null,
      focus: false
    }
  },
  computed: {
    cards() {
      return this.board ? this.$store.getters.searchCards(this.board.uuid, this.input) : []
    },
    large() {
      return this.focus || this.cards.length > 0
    }
  },
  methods: {
    onEscape() {
      this.input = null
      this.$el.querySelector('input').blur()
    },
    onFocus() {
      this.focus = true
    },
    onBlur() {
      this.focus = false

      if (this.cards.length === 0) {
        this.input = null;
      }
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent class="search-form">
    <input
      type="text"
      placeholder="Search..."
      v-model="input"
      v-bind:class="{ 'search-input': true, 'search-input-large': large }"
      v-on:keydown.escape.prevent.stop="onEscape()"
      v-on:focus="onFocus()"
      v-on:blur="onBlur()"
    >
    <ul v-show="cards.length > 0" class="search-results">
      <li v-for="card in cards">
        <Card :board="board" :card="card"></Card>
      </li>
    </ul>
  </form>
</template>

<style lang="scss">
  .search-form {
    display: inline-block;
    position: relative;

    padding: 0;

    color: #cccccc;
    font-size: 16px;


    .search-input {
      display: block;
      width: 100%;
      box-sizing: border-box;

      padding: 5px 7px;
      margin: 0;

      background-color: #36393c;
      border: none;

      color: #cccccc;
      font-size: 18px;

      width: 180px;

      transition: width 0.3s ease;

      &.search-input-large {
        width: 300px;
      }
    }

    .search-results {
      position: absolute;
      z-index: 900;
      display: block;
      width: 100%;

      max-height: 80vh;
      overflow-y: scroll;

      box-sizing: border-box;

      padding: 0 10px;
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

<script>
export default {
  data() {
    return {
      opened: false,
      search: null
    }
  },
  computed: {
    boards() {
      return this.$store.getters.searchBoards(this.search)
    },
    hasSearch() {
      return this.search !== null && this.search !== ''
    }
  },
  methods: {
    add() {
      this.$store.dispatch('addBoard', { title: this.search })
      this.search = null
    },
    close() {
      this.search = null
      this.opened = false
    }
  },
  watch: {
    opened() {
      this.$nextTick(() => this.$el.querySelector('input').focus())
    },
    $route() {
      this.close()
    }
  }
}
</script>

<template>
  <div class="board-menu">
    <button type="button" v-on:click="opened = !opened">Boards</button>
    <div class="dropdown" v-show="opened">
      <div>
        <input type="text" v-model="search" v-on:keydown.escape.prevent.stop="close()">
      </div>
      <ul v-show="boards.length > 0">
        <li>
          <router-link :to="{ name: 'home' }">
            All boards
          </router-link>
        </li>
        <li v-for="(board, key) in boards" :key="key">
          <router-link :to="{ name: 'board', params: { boardUuid: board.uuid } }">
            {{ board.title }}
          </router-link>
        </li>
      </ul>
      <div>
        <button type="button" v-show="hasSearch" v-on:click="add()">
          Create a "{{ search }}" board...
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .board-menu {
    display: inline-block;
    position: relative;

    .dropdown {
      position: absolute;
      top: 30px;
      width: 200px;
      z-index: 1000;
      background-color: #222;
      padding: 10px;
    }
  }
</style>

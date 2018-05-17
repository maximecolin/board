<script>
import Draggable from 'vuedraggable'
import Column from './components/Column.vue'
import ColumnAdd from './components/ColumnAdd.vue'
import SearchForm from './components/SearchForm.vue'

export default {
  name: 'app',
  components: {
    Column,
    ColumnAdd,
    Draggable,
    SearchForm
  },
  data() {
    return {
      search: null
    }
  },
  computed: {
    columns: {
      get() {
        return this.$store.state.columns
      },
      set(value) {
        this.$store.commit('updateColumns', value)
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <SearchForm v-model="search"></SearchForm>
    <Draggable v-model="columns" :options="{ draggable: '.column-draggable', filter: '.column-not-draggable' }" class="columns">
      <Column v-for="(column, key) in columns" :key="key" :column="column" :search="search" class="column-draggable"></Column>
      <ColumnAdd slot="footer" class="column"></ColumnAdd>
    </Draggable>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

body {
  background-color: #1d2021;
  color: #999999;
  margin: 0;
}

h4, h5 {
  margin: 0
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 10px;
  font-size: 14px;
}

textarea, input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.columns {

  display: flex;
  flex-direction: row;

  .column {
    width: 20%;
    margin: 0 15px;

    .title {
      text-transform: uppercase;
    }

    .cards {
      min-height: 30px;
    }

    .card {
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

  }

}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

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

textarea, input, button {
  outline: none;
}

</style>

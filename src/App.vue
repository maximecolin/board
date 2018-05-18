<script>
import Draggable from 'vuedraggable'
import Column from './components/Column.vue'
import ColumnAdd from './components/ColumnAdd.vue'
import SearchForm from './components/SearchForm.vue'
import FilterForm from './components/Filter/FilterForm.vue'

export default {
  name: 'app',
  components: {
    Column,
    ColumnAdd,
    Draggable,
    SearchForm,
    FilterForm
  },
  data() {
    return {
      filters: {
        labels: []
      }
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
    <SearchForm></SearchForm>
    <FilterForm v-model="filters"></FilterForm>
    <Draggable v-model="columns" :options="{ draggable: '.column-draggable', filter: '.column-not-draggable' }" class="columns">
      <Column v-for="(column, key) in columns" :key="key" :column="column" :filters="filters" class="column-draggable"></Column>
      <ColumnAdd slot="footer" class="column"></ColumnAdd>
    </Draggable>
    <transition name="fade">
      <router-view></router-view>
    </transition>
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

textarea, input, button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.columns {
  overflow-x: scroll;
  white-space: nowrap;
  height: 100%;
}

textarea, input, button {
  outline: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

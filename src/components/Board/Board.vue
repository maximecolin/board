<script>
import Draggable from 'vuedraggable'
import SearchForm from './SearchForm.vue'
import FilterForm from '../Filter/FilterForm.vue'
import Column from '../Column/Column.vue'
import ColumnAdd from '../Column/ColumnAdd.vue'

export default {
  components: {
    Draggable,
    SearchForm,
    FilterForm,
    Column,
    ColumnAdd
  },
  data() {
    return {
      filters: {
        labels: []
      }
    }
  },
  computed: {
    board() {
      return this.$store.getters.findBoardByUuid(this.$route.params.boardUuid)
    },
    columns: {
      get() {
        return this.board.columns
      },
      set(columns) {
        this.$store.dispatch('updateBoardColumns', { boardUuid: this.board.uuid, columns })
      }
    }
  }
}
</script>

<template>
  <div>
    <SearchForm :board="board"></SearchForm>
    <FilterForm :board="board" v-model="filters"></FilterForm>
    <Draggable v-model="columns" :options="{ draggable: '.column-draggable', filter: '.column-not-draggable' }" class="columns">
      <Column v-for="(column, key) in columns" :key="key" :board="board" :column="column" :filters="filters" class="column-draggable"></Column>
      <ColumnAdd slot="footer" class="column" :board="board"></ColumnAdd>
    </Draggable>
  </div>
</template>

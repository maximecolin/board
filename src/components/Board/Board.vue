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
  <div>
    <SearchForm></SearchForm>
    <FilterForm v-model="filters"></FilterForm>
    <Draggable v-model="columns" :options="{ draggable: '.column-draggable', filter: '.column-not-draggable' }" class="columns">
      <Column v-for="(column, key) in columns" :key="key" :column="column" :filters="filters" class="column-draggable"></Column>
      <ColumnAdd slot="footer" class="column"></ColumnAdd>
    </Draggable>
  </div>
</template>

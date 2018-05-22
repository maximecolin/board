<script>
import LableCreate from './LabelCreate.vue'
import LableEdit from './LabelEdit.vue'
import LableList from './LabelList.vue'

export default {
  components: {
    LableCreate,
    LableEdit,
    LableList
  },
  props: {
    board: Object,
    value: Array
  },
  data() {
    return {
      label: null,
      action: 'list'
    }
  },
  computed: {
    checked: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    showList() {
      this.action = 'list'
      this.label = null
    },
    showCreate() {
      this.action = 'create'
      this.label = null
    },
    showEdit(label) {
      this.action = 'edit'
      this.label = label
    }
  }
}
</script>

<template>
  <div class="label-picker">
    <LableCreate :board="board" v-show="action === 'create'" v-on:created="showList()" v-on:canceled="showList()"></LableCreate>
    <LableEdit :board="board" v-show="action === 'edit'" :label="label" v-on:edited="showList()" v-on:canceled="showList()"></LableEdit>
    <LableList :board="board" v-show="action === 'list'" v-model="checked" v-on:create="showCreate()" v-on:edit="showEdit($event.label)"></LableList>
  </div>
</template>

<style lang="scss">
  .label-picker {

  }
</style>

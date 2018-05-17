<script>
import LableCreate from './LabelPicker/LabelCreate.vue'
import LableEdit from './LabelPicker/LabelEdit.vue'
import LableList from './LabelPicker/LabelList.vue'

export default {
  components: {
    LableCreate,
    LableEdit,
    LableList
  },
  props: {
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
    <LableCreate v-show="action === 'create'" v-on:created="showList()" v-on:canceled="showList()"></LableCreate>
    <LableEdit v-show="action === 'edit'" :label="label" v-on:edited="showList()" v-on:canceled="showList()"></LableEdit>
    <LableList v-show="action === 'list'" v-model="checked" v-on:create="showCreate()" v-on:edit="showEdit($event.label)"></LableList>
  </div>
</template>

<style lang="scss">
  .label-picker {

  }
</style>

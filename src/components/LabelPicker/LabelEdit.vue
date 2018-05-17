<script>
export default {
  props: {
    label: Object
  },
  data() {
    return {
      name: null
    }
  },
  methods: {
    save() {
      this.$store.dispatch('updateLabel', { uuid: this.label.uuid, name: this.name })
      this.$emit('edited')
    },
    cancel() {
      this.$emit('canceled')
    }
  },
  watch: {
    label() {
      this.name = this.label ? this.label.name : null
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent="save()" class="label-picker-edit">
    <label>
      Name
      <input type="text" v-model="name">
    </label>
    <button type="button" v-on:click="cancel()">Cancel</button>
    <button type="submit">Save</button>
  </form>
</template>

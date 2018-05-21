<script>
export default {
  props: {
    value: Array
  },
  data() {
    return {
      search: null
    }
  },
  computed: {
    labels() {
      return this.search
        ? this.$store.state.labels.filter(label => label.name.match(new RegExp('.*' + this.search + '.*', 'i')))
        : this.$store.state.labels
    },
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
    check() {
      if (this.search !== null && this.labels.length === 1) {
        this.value.push(this.labels[0])
      }
    }
  }
}
</script>

<template>
  <form v-on:submit.prevent="check()" class="label-picker-list">
    <input type="text" v-model="search">
    <ul>
      <li v-for="(label, key) in labels" :key="key">
        <label>
          <input type="checkbox" name="labels" v-model="checked" v-bind:value="label.uuid" />
          <span>{{ label.name }}</span>
        </label>
        <button type="button" v-on:click="$emit('edit', { label })">edit</button>
      </li>
    </ul>
    <button type="button" v-on:click="$emit('create')">Create new label</button>
  </form>
</template>

<style lang="scss">
  .label-picker-list {
    ul {
      list-style-type: none;
      padding: 0;
    }
  }
</style>

<script>
export default {
  props: {
    label: String,
    placeholder: String
  },
  data() {
    return {
      input: null,
      open: false
    }
  },
  methods: {
    submit() {
      this.$emit('submit', { value: this.input })
      this.open = false
      this.input = null
    },
    cancel() {
      this.open = false
      this.input = null
    }
  },
  watch: {
    open() {
      if (true === this.open) {
        this.$nextTick(() => { this.$el.querySelector('input').focus() })
      }
    }
  }
}
</script>

<template>
  <div class="input-form">
    <form v-show="open" v-on:submit.prevent="submit()">
      <input type="text" v-model="input">
      <button type="button" v-on:click="cancel()">Cancel</button>
      <button type="submit">{{ label }}</button>
    </form>
    <button v-show="!open" v-on:click="open = true" class="open-button">{{ placeholder }}</button>
  </div>
</template>

<style lang="scss">
  .input-form {
    .open-button {
      border: none;
      background: none;
      color: #cccccc;
      font-size: 14px;
      cursor: pointer;
      padding: 0;
    }
  }
</style>

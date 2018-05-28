<script>
import nl2br from '../../helper/nl2br'

export default {
  props: {
    board: Object,
    card: Object
  },
  data() {
    return {
      editing: false,
      input: this.card.description
    }
  },
  computed: {
    html() {
      return nl2br(this.card.description)
    }
  },
  methods: {
    edit() {
      this.editing = true
      this.input = this.card.description
    },
    cancel() {
      this.editing = false
      this.input = this.card.description
    },
    save() {
      this.editing = false
      this.$store.dispatch('updateCardDescription', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, description: this.input })
    }
  },
  watch: {
    editing() {
      this.$nextTick(() => this.$el.querySelector('textarea').focus())
    }
  }
}
</script>

<template>
  <div class="card-edit-description">
    <h4>
      Description
      <button type="button" v-on:click="edit()">Edit</button>
    </h4>
    <div v-show="!editing && card.description" v-on:click="edit()" v-html="html"></div>
    <div v-show="!editing && !card.description" v-on:click="edit()" class="placeholder">Add description...</div>
    <form v-on:submit.prevent="save()" v-show="editing">
      <textarea
        v-model="input"
        v-shortkey.avoid
        v-on:keyup.escape.prevent.stop="cancel()"
        placeholder="Add description..."
      ></textarea>
      <button type="submit">Save</button>
      <button type="button" title="Cancel" v-on:click="cancel()">&times;</button>
    </form>
  </div>
</template>

<style lang="scss">
  .card-edit-description {
    margin: 10px 0;
    font-size: 16px;

    textarea {
      font-size: 16px;
      display: block;
      width: 100%;
      resize: none;
      min-height: 100px;
    }

    .placeholder {
      font-style: italic;
    }
  }

</style>

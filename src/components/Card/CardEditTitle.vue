<script>
export default {
  props: {
    board: Object,
    card: Object
  },
  data() {
    return {
      editing: false,
      title: this.card.title
    }
  },
  methods: {
    edit() {
      this.editing = true
      this.title = this.card.title
    },
    close() {
      this.editing = false
      this.title = this.card.title
    },
    submit() {
      this.editing = false
      this.$store.dispatch('updateCardTitle', { boardUuid: this.board.uuid, cardUuid: this.card.uuid, title: this.title })
    }
  },
  watch: {
    editing() {
      if (true === this.editing) {
        setTimeout(() => {
          this.$el.querySelector('textarea').focus()
        }, 100)
      }
    }
  }
}
</script>

<template>
  <div class="card-edit-title">
    <div class="show" v-show="!editing" v-on:click="edit()">
      {{ card.title }}
    </div>
    <form class="edit" v-show="editing" v-on:submit.prevent="submit()">
      <textarea
        v-model="title"
        v-shortkey.avoid
        v-on:keydown.enter.prevent="submit()"
        v-on:keyup.escape.prevent.stop="close()"
      >
      </textarea>
    </form>
  </div>
</template>

<style lang="scss">
  .card-edit-title {
    .show {
      font-size: 14px;
    }

    .edit {
      textarea {
        font-size: 14px;
        display: block;
        resize: none;
        width: 100%;
      }
    }
  }
</style>

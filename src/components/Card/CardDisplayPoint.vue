<script>
export default {
  props: {
    points: Number
  },
  computed: {
    value() {
      return Number.isInteger(this.points) ? this.points : '-'
    }
  }
}
</script>

<template>
  <span class="card-display-points">{{ value }}</span>
</template>

<style>
  .card-display-points {
    background-color: #ccc;
    color: #222;
    font-weight: bold;
    padding: 1px 5px;
    display: inline-block;
    border-radius: 50px;
  }
</style>

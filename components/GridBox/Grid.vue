<template>
  <div class="grid" :style="{'--items-per-line': col, '--grid-gap': gap}">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    col: { type: Number, default: 1 },
    gap: { type: String, default: '1.625em' }
  }
}
</script>

<style scoped>
.grid {
  display: block;
  margin-right: calc(-1 * var(--grid-gap));
  margin-bottom: calc(-1 * var(--grid-gap));
}
@supports (display: flex) {
  .grid {
    display: flex;
    flex-wrap: wrap;
  }
}
@supports (display: grid) {
  .grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(calc(100% / var(--items-per-line) -1 * var(--grid-gap)), 1fr)
    );
    grid-gap: var(--grid-gap);
    margin: initial;
  }
}
</style>

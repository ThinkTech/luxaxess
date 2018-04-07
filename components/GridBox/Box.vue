<template>
  <div class="grid__box">
    <slot/>
  </div>
</template>

<style scoped >
.grid__box {
  width: calc(100% / var(--items-per-line) - 1 * var(--grid-gap));
  margin-right: var(--grid-gap);
  margin-bottom: var(--grid-gap);
  display: inline-block;
}
@supports (display: flex) {
  .grid__box {
    flex: 1 0 calc(100% / var(--items-per-line) - var(--grid-gap));
    max-width: calc(100% / var(--items-per-line) - var(--grid-gap));
    width: auto;
  }
}
@supports (display: grid) {
  .grid__box {
    max-width: none;
    width: auto;
    margin: 0;
  }
}
</style>

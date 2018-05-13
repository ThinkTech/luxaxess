<template>
  <div class="grid" :style="{
    '--items-on-phone': col.phone || (typeof col === 'object' ? 1 : col),
    '--items-on-tablet': col.tablet || col.phone || (typeof col === 'object' ? 1 : col),
    '--items-on-pad': col.pad || col.tablet || col.phone || (typeof col === 'object' ? 1 : col),
    '--items-on-laptop': col.laptop || col.pad || col.tablet || col.phone || (typeof col === 'object' ? 1 : col),
    '--items-on-desktop': col.desktop || col.laptop || col.pad || col.tablet || col.phone || (typeof col === 'object' ? 1 : col),
    '--items-on-large': col.large || col.desktop || col.laptop || col.pad || col.tablet || col.phone || (typeof col === 'object' ? 1 : col),
    '--grid-gap': gap
  }">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    col: { type: [Object, Number], default: 1 },
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
@media (min-width: 1px) {
  .grid {
    --items-per-line: var(--items-on-phone);
  }
}
@media (min-width: 520px) {
  .grid {
    --items-per-line: var(--items-on-tablet);
  }
}
@media (min-width: 750px) {
  .grid {
    --items-per-line: var(--items-on-pad);
  }
}
@media (min-width: 960px) {
  .grid {
    --items-per-line: var(--items-on-laptop);
  }
}
@media (min-width: 1280px) {
  .grid {
    --items-per-line: var(--items-on-desktop);
  }
}
@media (min-width: 1920px) {
  .grid {
    --items-per-line: var(--items-on-large);
  }
}
</style>

<script setup lang="ts">
import { inject } from 'vue';

const context = inject('tabs-context') as any;
</script>

<template>
  <div 
    class="ui-tabs__list" 
    role="tablist"
    aria-orientation="horizontal"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">


.ui-tabs__list {
  display: flex;
  position: relative;
  
  /* Variant: Line (Netflix/Content style) */
  .ui-tabs--line & {
    /* Translated: --space-6 -> lg */
    gap: map.get($space-scale, lg);
    border-bottom: 1px solid var(--color-border-subtle);
  }

  /* Variant: Pill (System/Settings style) */
  .ui-tabs--pill & {
    /* Translated: --space-1 -> xs */
    gap: map.get($space-scale, xs);
    /* Semantic color shift */
    background-color: var(--color-surface-soft);
    padding: map.get($space-scale, xs);
    border-radius: var(--radius-md, 0.625rem);
    border: 1px solid var(--color-border-subtle);
    display: inline-flex;
  }
}
</style>
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
@use "@/styles" as *;

.ui-tabs__list {
  display: flex;
  position: relative;
  
  /* Variant: Line (Netflix/Content style) */
  .ui-tabs--line & {
    gap: var(--space-6);
    border-bottom: 1px solid var(--color-border-subtle);
  }

  /* Variant: Pill (System/Settings style) */
  .ui-tabs--pill & {
    gap: var(--space-1);
    background-color: var(--color-stage-black-850);
    padding: var(--space-1);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border-subtle);
    display: inline-flex;
  }
}
</style>
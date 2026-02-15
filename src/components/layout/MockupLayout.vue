<script setup lang="ts">
// Mock experience layout shell.
// Composes content-facing layouts (e.g. ContentDetailLayout).
</script>

<template>
  <div class="layout-mockup">
    <!-- Content-facing pages render here -->
    <slot />
  </div>
</template>

<style scoped lang="scss">


/* ==========================================================================
   MOCKUP LAYOUT
   ========================================================================== */

.layout-mockup {
  min-height: 100%;
  background-color: var(--color-surface);
}
</style>

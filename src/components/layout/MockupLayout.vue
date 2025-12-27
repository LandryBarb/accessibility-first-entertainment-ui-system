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
@use "@/styles" as *;

/* ==========================================================================
   MOCKUP LAYOUT
   ========================================================================== */

.layout-mockup {
  min-height: 100%;
  background-color: var(--color-bg-root);
}
</style>

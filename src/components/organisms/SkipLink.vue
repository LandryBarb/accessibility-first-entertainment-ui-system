<template>
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>
</template>

<style scoped lang="scss">


/* ==========================================================================
   SKIP LINK
   ========================================================================== */

.skip-link {
  position: absolute;
  /* Translated: --space-2 -> $space-scale, sm */
  top: map.get($space-scale, sm);
  left: map.get($space-scale, sm);
  
  /* Skip links must be above EVERYTHING. Using the system z-index we defined */
  z-index: var(--z-system, 1000);

  /* Translated: --space-2 and --space-4 */
  padding: map.get($space-scale, sm) map.get($space-scale, md);
  border-radius: var(--radius-sm, 0.375rem);

  /* Semantic color mapping */
  background-color: var(--color-surface-raised);
  color: var(--color-text-main);
  border: 1px solid var(--color-border-strong);

  /* Typography maps */
  font-size: map.get($font-size-scale, 0);
  font-weight: map.get($font-weight-scale, medium);
  text-decoration: none;

  /* Hidden until focused */
  transform: translateY(-200%);
  /* Swapped legacy motion variables for an explicit, snappy ease-out */
  transition: transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1);

  &:focus-visible {
    transform: translateY(0);
    /* Note: We don't need to write outline rules here because our global 
       _elements.scss catches all focusable elements and applies the ring! */
  }
}
</style>

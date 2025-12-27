<template>
  <a href="#main-content" class="skip-link">
    Skip to main content
  </a>
</template>

<style scoped lang="scss">
@use "@/styles" as *;

/* ==========================================================================
   SKIP LINK
   ========================================================================== */

.skip-link {
  position: absolute;
  top: var(--space-2);
  left: var(--space-2);
  z-index: var(--layout-z-overlay);

  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);

  background-color: var(--color-bg-elevated);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-strong);

  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;

  /* Hidden until focused */
  transform: translateY(-200%);
  transition: transform var(--motion-fast) var(--easing-standard);

  &:focus-visible {
    transform: translateY(0);
  }
}
</style>

<script setup lang="ts">
// Layout-only shell.
// Components are passed via slots and treated as black boxes.
</script>

<template>
  <div class="layout-system">
    <aside
      class="layout-system__sidebar"
      role="navigation"
      aria-label="System navigation"
    >
      <div class="layout-system__sidebar-header">
        <slot name="sidebar-header" />
      </div>

      <nav class="layout-system__nav">
        <slot name="navigation" />
      </nav>
    </aside>

    <main
      id="main-content"
      class="layout-system__main"
      role="main"
      tabindex="-1"
    >
      <div class="layout-system__container">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">


/* ==========================================================================
   SYSTEM LAYOUT
   ========================================================================== */

.layout-system {
  display: grid;
  grid-template-columns: var(--layout-sidebar-width) 1fr;
  min-height: 100%;
}

/* Sidebar */
.layout-system__sidebar {
  position: sticky;
  top: var(--layout-header-height);
  height: calc(100vh - var(--layout-header-height));

  background-color: var(--color-stage-black-800);
  border-right: 1px solid var(--color-border-subtle);

  overflow-y: auto;
  /* Ensure stacking context above content but below header overlays */
  z-index: var(--z-content); 
}

/* Sidebar header (branding / context) */
.layout-system__sidebar-header {
  padding: var(--space-5);
  border-bottom: 1px solid var(--color-border-subtle);
}

/* Navigation container */
.layout-system__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-4);
}

/* Main content */
.layout-system__main {
  display: flex;
  flex-direction: column;
  padding-block: var(--space-6);
  min-width: 0; /* Prevent grid blowout */
}

/* Content width governance */
.layout-system__container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);

  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

/* Responsive behavior */
@media (max-width: 48rem) {
  .layout-system {
    grid-template-columns: 1fr;
  }

  .layout-system__sidebar {
    position: static;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--color-border-subtle);
    max-height: 30vh; /* Cap height on mobile so it doesn't push content too far */
  }
}
</style>
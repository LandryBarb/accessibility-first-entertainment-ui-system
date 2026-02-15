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
  grid-template-columns: 1fr;
  min-height: 100%;

  /* Desktop: Sidebar + Content grid*/
  @include mq('md');
  grid-template-columns: var(--layout-sidebar-width, 16.25rem) 1fr;
}

/* Sidebar */
.layout-system__sidebar {
  /* Mobile-first */
  position: static;
  height: auto;
  max-height: 30vh; /* Cap height on mobile so it doesn't push content too far */
  
  /* Mapped to Core semantic token for background */
  background-color: var(--color-surface-soft);
  border-bottom: 1px solid var(--color-border-subtle);

  overflow-y: auto;
  z-index: var(--z-content, 10); 

  /* Desktop */
  @include mq('md') {
    position: sticky;
    top: var(--layout-header-height, 4rem);
    height: calc(100vh - var(--layout-header-height, 4rem));
    border-bottom: none;
    border-right: 1px solid var(--color-border-subtle);
    max-height: none;
  }
}

/* Sidebar header (branding / context) */
.layout-system__sidebar-header {
  padding: map.get($space-scale, lg);
  border-bottom: 1px solid var(--color-border-subtle);
}

/* Navigation container */
.layout-system__nav {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, md);
  padding: map.get($space-scale, md);
}

/* Main content */
.layout-system__main {
  display: flex;
  flex-direction: column;
  padding-block: map.get($space-scale, xl);
  min-width: 0; /* Prevent grid blowout */
}

/* Content width governance */
.layout-system__container {
  width: 100%;
  max-width: var(--layout-content-max, 87.5rem);
  margin-inline: auto;

  /* Fluid mobile padding */
  padding-inline: map.get($space-scale, md);

  /* Desktop padding */
  @include mq('md') {
    padding-inline: map.get($space-scale, xl);
  }

  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, xl);
}
</style>
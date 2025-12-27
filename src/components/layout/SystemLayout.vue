<script setup lang="ts">
// Components are black boxes passed into slots
</script>

<template>
  <div class="system-layout">
    <aside class="system-sidebar">
      <div class="sidebar-header">
        <slot name="sidebar-header" />
      </div>
      
      <nav class="sidebar-nav">
        <slot name="navigation" />
      </nav>
    </aside>

    <main class="system-content" id="main-content">
      <div class="content-container">
        <slot name="content" />
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.system-layout {
  display: grid;
  grid-template-columns: var(--sidebar-width) 1fr;
  min-height: calc(100vh - var(--header-height));
  
  // Mobile responsive: stacked layout
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.system-sidebar {
  background-color: var(--background);
  border-right: 1px solid var(--border);
  position: sticky;
  top: var(--header-height);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  
  @media (max-width: 768px) {
    display: none; // Would be handled by a Drawer component in real logic
  }
}

.sidebar-header {
  padding: var(--space-lg);
  border-bottom: 1px solid var(--border);
}

.sidebar-nav {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.system-content {
  background-color: var(--background);
  overflow-y: auto;
  height: calc(100vh - var(--header-height));
}

.content-container {
  max-width: 1024px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-xl);
  
  // Content spacing rhythm
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}
</style>
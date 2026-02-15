<script setup lang="ts">
import SystemLayout from "@/components/layout/SystemLayout.vue";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/molecules/Tabs";
</script>

<template>
  <SystemLayout>
    <template #sidebar-header>
      <div class="brand-context">
        <span class="brand-subtitle">Design System</span>
      </div>
    </template>

    <template #navigation>
      <div class="nav-group">
        <h3 class="nav-group__title">Foundations</h3>
        <ul class="nav-group__list" role="list">
          <li><a href="#" class="nav-item">Overview</a></li>
          <li><a href="#" class="nav-item">Colors</a></li>
          <li><a href="#" class="nav-item">Typography</a></li>
        </ul>
      </div>

      <div class="nav-group">
        <h3 class="nav-group__title">Components</h3>
        <ul class="nav-group__list" role="list">
          <li>
            <RouterLink to="/system/components/button" class="nav-item">
              Buttons
            </RouterLink>
          </li>
          <li><a href="#" class="nav-item">Inputs</a></li>
          <li>
            <RouterLink to="/system/components/tabs" class="nav-item">
              Tabs
            </RouterLink>
          </li>
          <li><a href="#" class="nav-item">Modals</a></li>
          <li><a href="#" class="nav-item">Toasts</a></li>
        </ul>
      </div>
    </template>

    <section class="system-page">
      <header class="system-page__header">
        <h1>Tabs</h1>
        <p class="system-page__description">
          A layered component system for switching between different views, contexts, or functional aspects of a page.
        </p>
      </header>

      <hr class="system-page__divider" />

      <section class="system-page__section">
        <h2>Line Variant</h2>
        <p>Used for high-level content navigation (e.g., Netflix categories).</p>
        <div class="example-surface">
          <Tabs defaultValue="account" variant="line">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <div class="example-content-area">
              <TabsContent value="account">Account settings panel.</TabsContent>
              <TabsContent value="password">Password change form.</TabsContent>
              <TabsContent value="billing">Billing history.</TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <section class="system-page__section">
        <h2>Pill Variant</h2>
        <p>Used for contained segmented controls or data toggles.</p>
        <div class="example-surface">
          <Tabs defaultValue="monthly" variant="pill">
            <TabsList>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <div class="example-content-area">
              <TabsContent value="daily">Daily view chart.</TabsContent>
              <TabsContent value="weekly">Weekly view chart.</TabsContent>
              <TabsContent value="monthly">Monthly view chart.</TabsContent>
            </div>
          </Tabs>
        </div>
      </section>
    </section>
  </SystemLayout>
</template>

<style scoped lang="scss">
/* Duplicating System Page styles for now (will extract later) */
.brand-context {
  display: flex;
  align-items: center;
  gap: map.get($space-scale, sm);
}

.brand-subtitle {
  font-size: map.get($font-size-scale, 0);
  color: var(--color-text-muted);
  font-weight: map.get($font-weight-scale, medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-group {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, sm);
}

.nav-group__title {
  /* Explicit 0.75rem for ultra-small UI text */
  font-size: 0.75rem; 
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: map.get($font-weight-scale, semibold);
  padding-inline: map.get($space-scale, sm);
}

.nav-group__list {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, xs);
}

.nav-item {
  display: block;
  padding: map.get($space-scale, sm);
  border-radius: var(--radius-sm, 0.375rem);
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: map.get($font-size-scale, 0);
  font-weight: map.get($font-weight-scale, medium);
  transition: background-color 150ms ease, color 150ms ease;

  &:hover {
    color: var(--color-text-main);
    background-color: var(--color-surface-raised);
  }

  &.router-link-active {
    background-color: color-mix(in srgb, var(--color-brand-primary) 15%, transparent);
    color: var(--color-brand-primary);
    font-weight: map.get($font-weight-scale, semibold);
  }
}

.system-page {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, xl);
  padding-bottom: map.get($space-scale, xl);
}

.system-page__header {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, md);

  h1 {
    font-size: map.get($font-size-scale, 4);
    font-weight: map.get($font-weight-scale, semibold);
    letter-spacing: -0.02em;
    color: var(--color-text-main);
  }
}

.system-page__description {
  font-size: map.get($font-size-scale, 2);
  color: var(--color-text-muted);
  max-width: 65ch;
  line-height: map.get($line-height-scale, relaxed);
}

.system-page__divider {
  border: 0;
  height: 1px;
  background-color: var(--color-border-subtle);
  width: 100%;
}

.system-page__section {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, md);

  h2 {
    font-size: map.get($font-size-scale, 2);
    font-weight: map.get($font-weight-scale, medium);
    color: var(--color-text-main);
  }

  p {
    color: var(--color-text-muted);
    max-width: 60ch;
  }
}

.example-surface {
  /* Using the raised surface for the container box */
  background-color: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md, 0.625rem);
  padding: map.get($space-scale, lg);
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, md);
}

.example-content-area {
  padding: map.get($space-scale, md);
  /* Using the lowest surface layer for the content inside the box for contrast */
  background-color: var(--color-surface);
  border-radius: var(--radius-sm, 0.375rem);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-muted);
  min-height: 100px;
}
</style>
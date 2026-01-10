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
@use "@/styles" as *;

/* Duplicating System Page styles for now (will extract later) */
.brand-context {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.brand-subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  font-weight: var(--font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nav-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.nav-group__title {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--font-weight-semibold);
  padding-inline: var(--space-2);
}

.nav-group__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.nav-item {
  display: block;
  padding: var(--space-2);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: background-color var(--motion-fast), color var(--motion-fast);

  &:hover {
    color: var(--color-text-primary);
    background-color: var(--color-stage-black-750);
  }

  &.router-link-active {
    background-color: color-mix(in srgb, var(--color-accent-primary) 15%, transparent);
    color: var(--color-accent-primary);
    font-weight: var(--font-weight-semibold);
  }
}

.system-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-7);
  padding-bottom: var(--space-7);
}

.system-page__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);

  h1 {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    letter-spacing: -0.02em;
  }
}

.system-page__description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 65ch;
  line-height: var(--line-height-loose);
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
  gap: var(--space-4);

  h2 {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-primary);
  }

  p {
    color: var(--color-text-secondary);
    max-width: 60ch;
  }
}

.example-surface {
  background-color: var(--color-stage-black-850);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.example-content-area {
  padding: var(--space-4);
  background-color: var(--color-bg-root);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border-subtle);
  color: var(--color-text-muted);
  min-height: 100px;
}
</style>
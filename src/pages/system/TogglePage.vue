<script setup lang="ts">
import { ref } from 'vue';
import SystemLayout from "@/components/layout/SystemLayout.vue";
import ToggleSwitch from "@/components/atoms/ToggleSwitch.vue";

const demo1 = ref(false);
const demo2 = ref(true);
const demo3 = ref(true);
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
        <h3 class="nav-group__title">Components</h3>
        <ul class="nav-group__list" role="list">
          <li><RouterLink to="/system/components/button" class="nav-item">Buttons</RouterLink></li>
          <li><RouterLink to="/system/components/iconButton" class="nav-item">Icon Buttons</RouterLink></li>
          <li><RouterLink to="/system/components/toggle" class="nav-item">Toggles</RouterLink></li>
          <li><RouterLink to="/system/components/tabs" class="nav-item">Tabs</RouterLink></li>
        </ul>
      </div>
    </template>

    <section class="system-page">
      <header class="system-page__header">
        <h1>Toggle Switch</h1>
        <p class="system-page__description">
          An immediate-action control used to turn settings or features on and off. 
          Fully accessible and keyboard navigable.
        </p>
      </header>

      <hr class="system-page__divider" />

      <section class="system-page__section">
        <h2>States</h2>
        <p>Interactive examples of the toggle switch in various states.</p>
        <div class="example-surface toggle-stack">
          <ToggleSwitch v-model="demo1" label="Autoplay Next Episode" />
          <ToggleSwitch v-model="demo2" label="Stream in HD (4K)" />
          <ToggleSwitch v-model="demo3" label="Disabled Setting" disabled />
        </div>
      </section>
    </section>
  </SystemLayout>
</template>

<style scoped lang="scss">
/* Inherit system page layout */
.brand-context { display: flex; align-items: center; gap: map.get($space-scale, sm); }
.brand-subtitle { font-size: map.get($font-size-scale, 0); color: var(--color-text-muted); font-weight: map.get($font-weight-scale, medium); text-transform: uppercase; letter-spacing: 0.05em; }
.nav-group { display: flex; flex-direction: column; gap: map.get($space-scale, sm); }
.nav-group__title { font-size: 0.75rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.08em; font-weight: map.get($font-weight-scale, semibold); padding-inline: map.get($space-scale, sm); }
.nav-group__list { display: flex; flex-direction: column; gap: map.get($space-scale, xs); }
.nav-item { display: block; padding: map.get($space-scale, sm); border-radius: var(--radius-sm, 0.375rem); color: var(--color-text-muted); text-decoration: none; font-size: map.get($font-size-scale, 0); font-weight: map.get($font-weight-scale, medium); transition: background-color 150ms ease, color 150ms ease; }
.nav-item:hover { color: var(--color-text-main); background-color: var(--color-surface-raised); }
.nav-item.router-link-active { background-color: color-mix(in srgb, var(--color-brand-primary) 15%, transparent); color: var(--color-brand-primary); font-weight: map.get($font-weight-scale, semibold); }
.system-page { display: flex; flex-direction: column; gap: map.get($space-scale, xl); padding-bottom: map.get($space-scale, xl); }
.system-page__header { display: flex; flex-direction: column; gap: map.get($space-scale, md); h1 { font-size: map.get($font-size-scale, 4); font-weight: map.get($font-weight-scale, semibold); letter-spacing: -0.02em; color: var(--color-text-main); } }
.system-page__description { font-size: map.get($font-size-scale, 2); color: var(--color-text-muted); max-width: 65ch; line-height: map.get($line-height-scale, relaxed); }
.system-page__divider { border: 0; height: 1px; background-color: var(--color-border-subtle); width: 100%; }
.system-page__section { display: flex; flex-direction: column; gap: map.get($space-scale, md); h2 { font-size: map.get($font-size-scale, 2); font-weight: map.get($font-weight-scale, medium); color: var(--color-text-main); } p { color: var(--color-text-muted); max-width: 60ch; } }

.example-surface {
  background-color: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md, 0.625rem);
  padding: map.get($space-scale, lg);
}

.toggle-stack {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, md);
  max-width: 400px;
}
</style>
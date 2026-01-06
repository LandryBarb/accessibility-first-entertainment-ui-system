<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import SkipLink from "@/components/organisms/SkipLink.vue";

const router = useRouter();
const route = useRoute();

// Type-safe access to meta.view (augmented in env.d.ts)
// Defaults to 'system' if undefined (e.g. 404 pages)
const currentView = computed(() => route.meta.view ?? "system");

const isSystem = () => currentView.value === "system";
const isMockup = () => currentView.value === "mockup";
</script>

<template>
  <SkipLink />

  <div class="layout-app">
    <header class="layout-header" role="banner">
      <div class="layout-container header-content">
        <div class="brand">
          <span class="brand-mark" aria-hidden="true" />
          <span class="brand-name">STREAM/UI</span>
        </div>

        <nav class="view-switcher" aria-label="View Mode">
          <button
            :class="{ active: isSystem() }"
            @click="router.push('/system/components/button')"
          >
            System
          </button>
          <button
            :class="{ active: isMockup() }"
            @click="router.push('/mockup/content/hero-1')"
          >
            Mockup
          </button>
        </nav>

        <span class="meta-info">v1.0.0</span>
      </div>
    </header>

    <main class="layout-main">
      <router-view />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles" as *;

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.brand {
  display: flex;
  align-items: center;
  gap: var(--space-2);

  .brand-mark {
    inline-size: 1.5rem;
    block-size: 1.5rem;
    border-radius: var(--radius-sm);
    background: linear-gradient(
      to bottom right,
      var(--color-spotlight-blue-500),
      var(--color-spotlight-blue-700)
    );
  }

  .brand-name {
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-sm);
    letter-spacing: 0.08em;
  }
}

.view-switcher {
  display: flex;
  gap: var(--space-1);
  padding: var(--space-1);
  border-radius: 999px;
  background-color: var(--color-cable-steel-700);
  border: 1px solid var(--color-border-subtle);

  button {
    padding: var(--space-1) var(--space-4);
    border-radius: 999px;
    background: transparent;
    color: var(--color-text-muted);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    transition: color var(--motion-fast), background-color var(--motion-fast);

    &.active {
      background-color: var(--color-accent-primary);
      color: var(--color-text-primary);
    }

    &:hover:not(.active) {
      color: var(--color-text-primary);
    }
  }
}

.meta-info {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
}

/* === Layout Fix === */
.layout-main {
  padding-top: var(--layout-header-height);
  display: flex;
  flex-direction: column; /* Key Fix: Forces children to stretch to full width */
  flex: 1;
  min-height: 0;
  width: 100%; /* Explicit width ensures full coverage */
}
</style>
<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
// import SkipLink from "@/components/organisms/SkipLink.vue";

const router = useRouter();
const route = useRoute();

// Type-safe access to meta.view (augmented in env.d.ts)
// Defaults to 'system' if undefined (e.g. 404 pages)
const currentView = computed(() => route.meta.view ?? "system");

const isSystem = () => currentView.value === "system";
const isMockup = () => currentView.value === "mockup";
</script>

<template>
  

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


.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.brand {
  display: flex;
  align-items: center;
  gap: map.get($space-scale, sm);

  .brand-mark {
    inline-size: 1.5rem;
    block-size: 1.5rem;
    border-radius: var(--radius-sm, 0.375rem);
    background: linear-gradient(
      to bottom right,
      var(--color-brand-primary),
      var(--color-brand-primary-soft)
    );
  }

  .brand-name {
   font-weight: map.get($font-weight-scale, semibold);
   font-size: map.get($font-size-scale, 1);
    letter-spacing: 0.08em;
  }
}

.view-switcher {
  display: flex;
  gap: map.get($space-scale, xs);
  padding: map.get($space-scale, xs);
  border-radius: 999px;
  background-color: var(--color-surface-soft);
  border: 1px solid var(--color-border-subtle);

  button {
    @include tap-target;
    padding: map.get($space-scale, xs) map.get($space-scale, md);
    border-radius: 999px;
    border:none;
    background: transparent;
    color: var(--color-text-muted);
    font-size: map.get($font-size-scale, 0);
    font-weight:map.get($font-weight-scale, medium);
    cursor: pointer;
transition: color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;

    &.active {
      background-color: var(--color-surface-raised);
      color: var(--color-text-main);
      box-shadow: var(--shadow-elevation-low);
    }

    &:hover:not(.active) {
      color: var(--color-text-main);
    }
  }
}

.meta-info {
  font-size: map.get($font-size-scale, 0);
  color: var(--color-text-muted);
}

/* === Layout Fix === */
.layout-main {
  padding-top: var(--layout-header-height, 4rem);
  display: flex;
  flex-direction: column; /* Key Fix: Forces children to stretch to full width */
  flex: 1;
  min-height: 0;
  width: 100%; /* Explicit width ensures full coverage */
}
</style>
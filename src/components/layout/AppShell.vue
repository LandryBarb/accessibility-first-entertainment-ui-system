<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import SkipLink from "@/components/organisms/SkipLink.vue";

const router = useRouter();

const currentView = computed<"system" | "mockup">(() => {
  return (router.currentRoute.value?.meta?.view as
    | "system"
    | "mockup") ?? "system";
});

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
            @click="router.push('/system')"
          >
            System
          </button>
          <button
            :class="{ active: isMockup() }"
            @click="router.push('/mockup')"
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

    &.active {
      background-color: var(--color-accent-primary);
      color: var(--color-text-primary);
    }
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

// In a real app, this might come from a router or store
const currentView = ref<'system' | 'mockup'>('system');
</script>

<template>
  <div class="app-shell">
    <header class="global-header" role="banner">
      <div class="header-content">
        <div class="brand">
          <div class="brand-mark" aria-hidden="true" />
          <span class="brand-name">STREAM/UI</span>
        </div>

        <nav class="view-switcher" role="navigation" aria-label="View Mode">
          <button 
            :class="{ active: currentView === 'system' }" 
            @click="currentView = 'system'"
          >
            System
          </button>
          <button 
            :class="{ active: currentView === 'mockup' }" 
            @click="currentView = 'mockup'"
          >
            Mockup
          </button>
        </nav>

        <div class="meta-info">v1.0.0</div>
      </div>
    </header>

    <div class="app-viewport">
      <slot :name="currentView"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.global-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: var(--z-sticky);
  
  // Glassmorphism effect
  background-color: rgba(13, 15, 20, 0.8); // var(--background) with opacity
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 var(--space-lg);
}

.brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  
  .brand-mark {
    width: 24px;
    height: 24px;
    border-radius: var(--radius-sm);
    background: linear-gradient(to bottom right, #42A5F5, #1E88E5);
  }

  .brand-name {
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
  }
}

.view-switcher {
  display: flex;
  background-color: var(--card); // Fallback or specific token
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px;

  button {
    background: transparent;
    border: none;
    color: var(--muted-foreground);
    padding: 6px 16px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background-color: var(--accent);
      color: var(--foreground);
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    
    &:hover:not(.active) {
      color: var(--foreground);
    }
  }
}

.app-viewport {
  padding-top: var(--header-height);
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
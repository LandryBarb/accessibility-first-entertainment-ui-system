<script setup lang="ts">
import SystemLayout from "@/components/layout/SystemLayout.vue";
import { ref } from 'vue'
import IconButton from "@/components/atoms/IconButton.vue";


const output = ref('Press a control button to test...')
function handlePrevious() {
  output.value = '⏮ Previous episode'
}

function handlePlay() {
  output.value = '▶ Playing video'
}

function handleVolume() {
  output.value = '🔊 Volume controls opened'
}

function handleSettings() {
  output.value = '⚙️ Settings opened'
}
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
          <li>
            <RouterLink to="/system/components/iconButton" class="nav-item">
              Icon Buttons
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
        <h1>Icon Button</h1>
        <p class="system-page__description">
          A fundamental interactive element used to trigger actions or navigate users.
          Buttons communicate call-to-actions clearly through established visual hierarchy.
        </p>
      </header>

      <hr class="system-page__divider" />

      <section class="system-page__section">
        <h2>Variants</h2>
        <p>Use variants to establish importance within a view.</p>
        <div class="example-surface">
          <IconButton 
          variant="primary"
          label="Previous Episode"
          >Primary</IconButton>
          <IconButton variant="default">Secondary</IconButton>
          <IconButton variant="small">Tertiary</IconButton>
          
        </div>
      </section>

      <section class="system-page__section">
        <h2>Sizes</h2>
        <p>Available in three fixed heights to accommodate information density.</p>
        <div class="example-surface">
          <IconButton size="sm">Small</IconButton>
        
        </div>
      </section>

      <section class="system-page__section">
        <h2>States</h2>
        <p>Visual feedback for interaction and processing states.</p>
        <div class="example-surface">
           <IconButton variant="default" :disabled="true" label="Next Episode">Secondary</IconButton>
          <IconButton variant="small">Tertiary</IconButton>
        </div>
      </section>
    </section>
  </SystemLayout>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MockupLayout from "@/components/layout/MockupLayout.vue";
import ToggleSwitch from "@/components/atoms/ToggleSwitch.vue";
import IconButton from "@/components/atoms/IconButton.vue";
import Icon from "@/components/atoms/Icon.vue";
import { ArrowLeft } from 'lucide-vue-next';

const router = useRouter();

// Mock Settings State
const autoplay = ref(true);
const highQuality = ref(false);
const notifications = ref(true);
const dataSaver = ref(false);
</script>

<template>
  <MockupLayout>
    <div class="settings-page">
      <header class="settings-header">
        <IconButton variant="secondary" label="Go Back" @click="router.back()">
          <Icon :icon="ArrowLeft" />
        </IconButton>
        <h1 class="page-title">Playback Settings</h1>
      </header>

      <main class="settings-container">
        <section class="settings-group">
          <h2 class="group-title">Video & Audio</h2>
          <div class="settings-card">
            <ToggleSwitch v-model="autoplay" label="Autoplay Next Episode" />
            <hr class="divider" />
            <ToggleSwitch v-model="highQuality" label="Stream in Maximum Quality (4K)" />
            <hr class="divider" />
            <ToggleSwitch v-model="dataSaver" label="Data Saver Mode" />
          </div>
        </section>

        <section class="settings-group">
          <h2 class="group-title">Preferences</h2>
          <div class="settings-card">
            <ToggleSwitch v-model="notifications" label="Push Notifications" />
          </div>
        </section>
      </main>
    </div>
  </MockupLayout>
</template>

<style scoped lang="scss">
.settings-page {
  padding: map.get($space-scale, xl) map.get($space-scale, md);
  max-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  animation: fade-in 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.settings-header {
  display: flex;
  align-items: center;
  gap: map.get($space-scale, md);
  margin-bottom: map.get($space-scale, 2xl);
}

.page-title {
  font-size: map.get($font-size-scale, 4);
  font-weight: map.get($font-weight-scale, bold);
  color: var(--color-text-main);
  letter-spacing: -0.02em;
}

.settings-container {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, 2xl);
}

.settings-group {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, sm);
}

.group-title {
  font-size: map.get($font-size-scale, 1);
  font-weight: map.get($font-weight-scale, semibold);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-inline: map.get($space-scale, sm);
}

.settings-card {
  background-color: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-lg, 0.875rem);
  padding: map.get($space-scale, md) map.get($space-scale, lg);
  box-shadow: var(--shadow-elevation-low);
}

.divider {
  border: 0;
  height: 1px;
  background-color: var(--color-border-subtle);
  margin-block: map.get($space-scale, sm);
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
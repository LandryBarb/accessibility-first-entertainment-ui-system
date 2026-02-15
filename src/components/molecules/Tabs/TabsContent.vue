<script setup lang="ts">
import { inject, computed } from 'vue';

const props = defineProps<{
  value: string;
}>();

const context = inject('tabs-context') as any;
const isActive = computed(() => context.activeValue.value === props.value);
</script>

<template>
  <div
    v-show="isActive"
    class="ui-tabs__content"
    role="tabpanel"
    :tabindex="0"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">

.ui-tabs__content {
  /* Replaced generic motion token with cinematic bezier curve */
  animation: fade-in 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
  outline: none;
  
  &:focus-visible {
    outline: var(--focus-ring-width, 2px) solid var(--color-focus-ring);
    outline-offset: var(--focus-ring-offset, 2px);
    border-radius: var(--radius-sm, 0.375rem);
  }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
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
  animation: fade-in var(--motion-base);
  outline: none;
  
  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--color-focus-ring);
    outline-offset: var(--focus-ring-offset);
    border-radius: var(--radius-sm);
  }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
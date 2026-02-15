<script setup lang="ts">
import { inject, computed } from 'vue';

const props = defineProps<{
  value: string;
  disabled?: boolean;
}>();

const context = inject('tabs-context') as any;
const isActive = computed(() => context.activeValue.value === props.value);

const handleClick = () => {
  if (!props.disabled) {
    context.setActive(props.value);
  }
};
</script>

<template>
  <button
    class="ui-tabs__trigger"
    :class="{ 'is-active': isActive }"
    role="tab"
    :aria-selected="isActive"
    :disabled="disabled"
    :tabindex="isActive ? 0 : -1"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">


.ui-tabs__trigger {
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: var(--font-family-base);
  transition: all var(--motion-fast);
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Variant: Line */
  .ui-tabs--line & {
    padding-bottom: var(--space-3);
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-muted);
    border-bottom: 3px solid transparent;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:hover:not(:disabled) {
      color: var(--color-text-primary);
    }

    &.is-active {
      color: var(--color-text-primary);
      border-color: var(--color-accent-primary);
    }
  }

  /* Variant: Pill */
  .ui-tabs--pill & {
    padding: var(--space-2) var(--space-4);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-muted);
    border-radius: var(--radius-sm);

    &:hover:not(:disabled) {
      color: var(--color-text-primary);
    }

    &.is-active {
      background-color: var(--color-cable-steel-600);
      color: var(--color-text-primary);
      box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    }
  }
}
</style>
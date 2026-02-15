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
  /* Added WCAG tap target */
  @include tap-target;
  
  cursor: pointer;
  background: transparent;
  border: none;
  font-family: inherit; /* Inherits from normalized body */
  /* Translated: Explicit fast timing */
  transition: all 150ms ease;
  white-space: nowrap;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Variant: Line */
  .ui-tabs--line & {
    padding-bottom: map.get($space-scale, sm);
    font-size: map.get($font-size-scale, 1);
    font-weight: map.get($font-weight-scale, bold);
    color: var(--color-text-muted);
    border-bottom: 3px solid transparent;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:hover:not(:disabled) {
      color: var(--color-text-main);
    }

    &.is-active {
      color: var(--color-text-main);
      border-color: var(--color-brand-primary);
    }
  }

  /* Variant: Pill */
  .ui-tabs--pill & {
    padding: map.get($space-scale, xs) map.get($space-scale, md);
    font-size: map.get($font-size-scale, 0);
    font-weight: map.get($font-weight-scale, medium);
    color: var(--color-text-muted);
    border-radius: var(--radius-sm, 0.375rem);

    &:hover:not(:disabled) {
      color: var(--color-text-main);
    }

    &.is-active {
      /* Semantic color & layered shadow integration */
      background-color: var(--color-surface-raised);
      color: var(--color-text-main);
      box-shadow: var(--shadow-elevation-low);
    }
  }
}
</style>
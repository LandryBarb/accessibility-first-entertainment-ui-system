<script setup lang="ts">
import { computed } from 'vue'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
})

const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
  <button
    :type="type"
    class="ui-button"
    :class="[`ui-button--${variant}`, `ui-button--${size}`]"
    :disabled="isDisabled"
    :aria-busy="loading || undefined"
  >
    <span class="ui-button__content">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
@use "@/styles" as *;

.ui-button {
  /* -------------------------------------------------
     Component-local indirection (token-derived only)
     ------------------------------------------------- */
  --btn-bg: var(--color-bg-surface);
  --btn-fg: var(--color-text-primary);
  --btn-border: var(--color-border-subtle);

  --btn-bg-hover: var(--color-bg-elevated);
  --btn-border-hover: var(--color-border-strong);

  --btn-bg-active: var(--color-bg-root);
  --btn-border-active: var(--color-border-strong);

  /* -------------------------------------------------
     Structure & layout
     ------------------------------------------------- */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  min-height: var(--tap-target-min);
  padding: var(--space-3) var(--space-4);

  font-family: var(--font-family-base);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);

  border-radius: var(--radius-md);
  border: 1px solid var(--btn-border);
  background-color: var(--btn-bg);
  color: var(--btn-fg);

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  transition:
    background-color var(--motion-base) var(--easing-standard),
    border-color var(--motion-base) var(--easing-standard),
    color var(--motion-base) var(--easing-standard),
    transform var(--motion-fast) var(--easing-standard);

  /* -------------------------------------------------
     Interaction
     ------------------------------------------------- */
  &:hover:not(:disabled) {
    background-color: var(--btn-bg-hover);
    border-color: var(--btn-border-hover);
  }

  &:active:not(:disabled) {
    background-color: var(--btn-bg-active);
    border-color: var(--btn-border-active);
    transform: translateY(var(--space-1));
  }

  /* Focus: enhance only, never replace global outline */
  &:focus-visible:not(:disabled) {
    border-color: var(--color-border-strong);
    background-color: var(--btn-bg-hover);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-bg-surface);
    color: var(--color-text-muted);
    border-color: var(--color-border-subtle);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:active:not(:disabled) {
      transform: none;
    }
  }
}

/* -------------------------------------------------
   Sizes (typography + spacing only)
   ------------------------------------------------- */

.ui-button--sm {
  font-size: var(--font-size-sm);
  padding: var(--space-2) var(--space-3);
}

.ui-button--md {
  font-size: var(--font-size-md);
}

.ui-button--lg {
  font-size: var(--font-size-md);
  padding: var(--space-4) var(--space-5);
}

/* -------------------------------------------------
   Variants — accent family assignment only
   ------------------------------------------------- */

.ui-button--primary {
  --btn-bg: var(--color-accent-primary);
  --btn-fg: var(--color-text-primary);
  --btn-border: var(--color-accent-primary);

  --btn-bg-hover: var(--color-accent-primary-hover);
  --btn-bg-active: var(--color-accent-primary-active);
}

.ui-button--secondary {
  --btn-bg: var(--color-bg-surface);
  --btn-fg: var(--color-text-primary);
  --btn-border: var(--color-border-strong);
}

.ui-button--tertiary {
  --btn-bg: transparent;
  --btn-fg: var(--color-text-secondary);
  --btn-border: transparent;
}

.ui-button--destructive {
  --btn-bg: var(--color-accent-danger);
  --btn-fg: var(--color-text-primary);
  --btn-border: var(--color-accent-danger);

  /* Use deeper red for hover/active via palette ramp */
  --btn-bg-hover: var(--color-caution-red-600);
  --btn-bg-active: var(--color-caution-red-700);
}

</style>

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
    class="button"
    :class="[`button--${variant}`, `ui-button--${size}`]"
    :disabled="isDisabled"
    :aria-busy="loading || undefined"
  >
    <span class="button__content">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">

.button {
  @include tap-target;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: map.get($space-scale, xs);
  padding-inline: map.get($space-scale, md);
  padding-block: map.get($space-scale, xs);
  border-radius: var(--radius-pill);
  border: 1px solid var(--color-border-subtle);
  background-color: var(--color-surface-soft);
  color: var(--color-text-main);
  font-weight: map.get($font-weight-scale, medium);
  cursor: pointer;
  text-decoration: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    background-color: var(--color-surface-raised);
  }


}

.button--primary {
  border-color: transparent;
  background-color: var(--color-brand-primary);
  color: var(--color-text-on-brand);

  &:hover {
    background-color: var(--color-brand-primary-strong);
  }
}
.button--secondary {
  background-color: var(--color-accent);
  color: var(--color-text-main);

  &:hover {
    background-color: var(--color-accent-soft);
  }
}
.button--destructive{
  background-color: var(--color-state-danger);
  color: var(--color-text-main);
   &:hover {
      background-color: var(--color-state-danger-soft);
  }
}

//3D Button Style
.button--3d {
  // Use Core token for background
  --_btn-color: var(--color-brand-primary);
  --_btn-text: var(--color-text-on-brand);

  background: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  outline-offset: 4px;

  .front {
    display: block;
    padding: map.get($space-scale, xs) map.get($space-scale, md);
    border-radius: 999px;
    background-color: var(--_btn-color);
    color: var(--_btn-text);
    transform: translateY(-4px);
    transition: transform 250ms cubic-bezier(.3, .7, .4, 1);
    border: 1px solid rgba(0,0,0,0.2);
  }

  // The "Shadow" layer
  background-color: color-mix(in srgb, var(--_btn-color), black 20%);
  border-radius: 999px;

  &:hover .front {
    transform: translateY(-6px);
  }

  &:active .front {
    transform: translateY(-1px);
  }


}





</style>

<script setup lang="ts" >
import { computed } from 'vue';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
    label: string,
    variant?: ButtonVariant,
    size?: ButtonSize,
    disabled?: boolean,
    type?: 'button' | 'submit' | 'reset';
}>(),{
    variant: 'secondary',
    size: 'md',
    disabled: false,
    type: 'button'
});

defineEmits(['click']);

const isDisabled = computed(()=> props.disabled);
</script>

<template>
    <button
    :type="type"
    class="icon-button"
    :class="[`icon-button--${variant}`, `icon-button--${size}`]"
    :aria-label="label"
    :disabled="disabled"
    @click="$emit('click')"
    >
    <slot />
    </button>
</template>

<style scoped lang="scss">
.icon-button{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-pill);
    cursor: pointer;
    text-decoration: none;

    transition: 
    background-color 150ms ease,
    color 150ms ease,
    transform 150ms cubic-bezier(0.2, 0.8, 0.2, 1);

    /* Hover lift effect */
    &:hover:not(:disabled){
        transform: scale(1.05)
    }
    &:active:not(:disabled){
        transform: scale(0.95)
    }
}
/* --- Sizes (Ensuring WCAG 44px minimum!) --- */
.icon-button--sm{
    @include tap-target;
    padding: map.get($space-scale, sm);
}

.icon-button--md{
    width: 3rem;
    height: 3rem;
}

.icon-button--lg{
    width: 4rem;
    height: 4rem;
}

/* --- Variants (Mapped to Semantic Tokens) --- */
.icon-button--primary{
    background-color: var(--color-brand-primary);
    color: var(--color-text-on-brand);

    &:hover:not(:disabled){
        background-color: var(--color-brand-primary-strong);
    }
}

.icon-button--secondary {
  background-color: var(--color-surface-soft);
  color: var(--color-text-main);
  border-color: var(--color-border-subtle);

  &:hover:not(:disabled) {
    background-color: var(--color-surface-raised);
  }
}

.icon-button--tertiary {
  background-color: transparent;
  color: var(--color-text-main);

  &:hover:not(:disabled) {
    background-color: var(--color-surface-soft);
  }
}

.icon-button--destructive {
  background-color: var(--color-state-danger-soft);
  color: var(--color-state-danger);

  &:hover:not(:disabled) {
    background-color: var(--color-state-danger);
    color: var(--color-text-on-brand);
  }

}

.icon-button:disabled{
opacity: .5;
cursor: not-allowed;
}


</style>
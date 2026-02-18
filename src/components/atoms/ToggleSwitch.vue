<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    modelValue: boolean;
    label: string;
    id?: string;
    disabled?: boolean;
}>(), {
    disabled: false
});

const emit = defineEmits<{
    'update:modelValue': [value: boolean]
}>();

// Generate unique ID if not provided
const uniqueId = computed(() => props.id || `switch-${Math.random().toString(36).substring(2, 9)}`);

const toggle = () => {
    if (!props.disabled) {
        emit('update:modelValue', !props.modelValue);
    }
};
</script>

<template>
    <div class="ui-switch-control" :class="{ 'is-disabled': disabled }">
        <label
            :for="uniqueId"
            class="ui-switch__label"
            @click.prevent="toggle"
        >
            {{ label }}
        </label>

        <button
            type="button"
            :id="uniqueId"
            role="switch"
            :aria-checked="modelValue"
            :disabled="disabled"
            class="ui-switch__button"
            @click="toggle"
        >
            <span class="ui-switch__thumb" aria-hidden="true"></span>
        </button>
    </div>
</template>

<style scoped lang="scss">
.ui-switch-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: map.get($space-scale, md);
  
  /* Adds slight vertical padding to ensure the whole row is easily tappable */
  padding-block: map.get($space-scale, xs); 
  
  &.is-disabled {
    opacity: 0.5;
    
    * {
      cursor: not-allowed;
    }
  }
}

.ui-switch__label {
  font-size: map.get($font-size-scale, 1);
  font-weight: map.get($font-weight-scale, medium);
  color: var(--color-text-main);
  cursor: pointer;
  flex: 1; /* Pushes the switch to the far edge if used in a list */
}

/* --- The Switch Track --- */
.ui-switch__button {
  position: relative;
  flex-shrink: 0;
  
  /* Standard tap target / track sizing */
  width: 3rem;  /* 48px */
  height: 1.5rem; /* 24px */
  border-radius: var(--radius-pill, 999px);
  border: 2px solid transparent;
  
  /* Off state background */
  background-color: var(--color-surface-soft);
  cursor: pointer;
  padding: 0;
  transition: background-color 200ms ease;

  /* Focus Visible (Keyboard Navigation) */
  &:focus-visible {
    outline: var(--focus-ring-width, 2px) solid var(--color-focus-ring);
    outline-offset: var(--focus-ring-offset, 2px);
  }

  /* On state background */
  &[aria-checked="true"] {
    background-color: var(--color-brand-primary);
  }
}

/* --- The Switch Thumb --- */
.ui-switch__thumb {
  display: block;
  /* Thumb size */
  width: 1.25rem;  /* 20px */
  height: 1.25rem; /* 20px */
  
  /* White thumb provides 3:1 contrast against both the grey OFF and brand ON tracks */
  background-color: #ffffff; 
  border-radius: 50%;
  box-shadow: var(--shadow-elevation-low, 0 2px 4px rgba(0,0,0,0.2));
  
  /* Off position (Left) */
  transform: translateX(2px);
  
  /* Cinematic motion */
  transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1);

  /* On position (Right) */
  [aria-checked="true"] & {
    /* Track Width (48) - Thumb Width (20) - Padding (4) = 24px travel distance */
    transform: translateX(24px); 
  }
}
</style>
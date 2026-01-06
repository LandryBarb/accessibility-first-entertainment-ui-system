<script setup lang="ts">
import { provide, ref, computed } from 'vue';

const props = withDefaults(defineProps<{
  defaultValue?: string;
  modelValue?: string;
  variant?: 'line' | 'pill';
}>(), {
  defaultValue: '',
  variant: 'line',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

// Internal state if v-model isn't used
const internalValue = ref(props.defaultValue);

const activeValue = computed({
  get: () => props.modelValue ?? internalValue.value,
  set: (val) => {
    internalValue.value = val;
    emit('update:modelValue', val);
  }
});

provide('tabs-context', {
  activeValue,
  variant: props.variant,
  setActive: (val: string) => { activeValue.value = val; }
});
</script>

<template>
  <div class="ui-tabs" :class="[`ui-tabs--${variant}`]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "@/styles" as *;

.ui-tabs {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
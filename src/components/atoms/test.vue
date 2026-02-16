<script setup lang="ts">
import { computed } from 'vue';

// 1. Explicitly define the interface to help Volar's TS inference
interface Props {
  icon: any;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  color: 'currentColor' // Handle the default color right here
});

// Safely map the size to pixels
const computedSize = computed(() => {
  const sizes = { sm: 16, md: 20, lg: 24 };
  return sizes[props.size];
});
</script>

<template>
  <component 
    :is="props.icon" 
    :size="computedSize" 
    :color="props.color"
    aria-hidden="true" 
    class="ui-icon"
  />
</template>

<style scoped>
.ui-icon {
  display: inline-flex;
  flex-shrink: 0;
}
</style>
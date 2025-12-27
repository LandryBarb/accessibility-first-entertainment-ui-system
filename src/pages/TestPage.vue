<script setup lang="ts">
    import BaseButton from '@/components/atoms/BaseButton.vue';
</script>

<template>
    <div class="test-page">
        <h1>Test Page</h1>
        <BaseButton variant="primary" size="lg">Primary Large</BaseButton>
        <BaseButton variant="secondary" size="md">Secondary Medium</BaseButton>
        <BaseButton variant="tertiary" size="sm" :disabled="true">Tertiary Small Disabled</BaseButton>
        <BaseButton variant="destructive" size="md" :loading="false">Destructive Medium Loading</BaseButton>
    </div>
</template>

<style lang="scss" scoped>
.test-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  h1 {
    margin-bottom: 1rem;
  }
}
</style>
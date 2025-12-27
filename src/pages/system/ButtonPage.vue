<script setup lang="ts">
import SystemLayout from "@/components/layout/SystemLayout.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";
</script>

<template>
  <SystemLayout>
    <!-- SIDEBAR HEADER -->
    <template #sidebar-header>
      <h2>Components</h2>
    </template>

    <!-- NAVIGATION -->
    <template #navigation>
      <RouterLink to="/system/components/button">
        Button
      </RouterLink>
    </template>

    <!-- MAIN CONTENT -->
    <section class="system-page">
      <header class="system-page__header">
        <h1>Button</h1>
        <p class="system-page__description">
          Foundational interactive component used across the system.
        </p>
      </header>

      <section class="system-page__section">
        <h2>Variants</h2>
        <div class="example-row">
           <BaseButton variant="primary" size="lg">Primary Large</BaseButton>
        <BaseButton variant="secondary" size="md">Secondary Medium</BaseButton>
        <BaseButton variant="tertiary" size="sm" >Tertiary </BaseButton>
        <BaseButton variant="destructive" size="md" >Destructive</BaseButton>
        </div>
      </section>

      <section class="system-page__section">
        <h2>States</h2>
        <div class="example-row">
                  <BaseButton variant="secondary" size="md" :disabled="false">Secondary  </BaseButton>
                  <BaseButton variant="secondary" size="md" :disabled="true">Disabled  </BaseButton>

   
        </div>
      </section>
    </section>
  </SystemLayout>
</template>

<style scoped lang="scss">


.system-page {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.system-page__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.system-page__description {
  color: var(--color-text-muted);
  max-width: 60ch;
}

.system-page__section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.example-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}
</style>

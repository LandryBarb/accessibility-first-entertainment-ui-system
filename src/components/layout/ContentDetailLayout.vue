<script setup lang="ts">
defineProps<{
  heroImage?: string;
}>();
</script>

<template>
  <article class="layout-detail">
    <!-- HERO REGION -->
    <section
      class="layout-detail__hero"
      aria-label="Featured content"
    >
      <div
        class="layout-detail__backdrop"
        aria-hidden="true"
      >
        <img
          v-if="heroImage"
          :src="heroImage"
          alt=""
          class="layout-detail__backdrop-image"
        />
        <div class="layout-detail__vignette" />
      </div>

      <div class="layout-detail__hero-content">
        <slot name="hero" />
      </div>

      <div class="layout-detail__hero-controls">
        <slot name="hero-controls" />
      </div>
    </section>

    <!-- CONTENT REGION -->
    <section class="layout-detail__body">
      <div class="layout-detail__container">
        <slot />
      </div>
    </section>
  </article>
</template>

<style scoped lang="scss">
@use "@/styles" as *;

/* ==========================================================================
   CONTENT DETAIL LAYOUT
   ========================================================================== */

.layout-detail {
  position: relative;
  background-color: var(--color-bg-root);
}

/* Hero region */
.layout-detail__hero {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: flex-end;
}

/* Backdrop */
.layout-detail__backdrop {
  position: absolute;
  inset: 0;
  z-index: var(--layout-z-background);
  overflow: hidden;
}

.layout-detail__backdrop-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Unified vignette (governed) */
.layout-detail__vignette {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to top,
      var(--color-bg-root) 0%,
      transparent 55%
    ),
    linear-gradient(
      to right,
      var(--color-bg-root) 0%,
      transparent 40%
    );
}

/* Hero content */
.layout-detail__hero-content {
  position: relative;
  z-index: var(--layout-z-content);
  width: 100%;
  padding-inline: var(--space-6);
  padding-bottom: var(--space-7);

  max-width: var(--container-max);
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* Optional hero controls (mute, info, etc.) */
.layout-detail__hero-controls {
  position: absolute;
  inset-inline-end: var(--space-6);
  inset-block-end: var(--space-6);
  z-index: var(--layout-z-content);
}

/* Content body */
.layout-detail__body {
  position: relative;
  margin-top: calc(var(--space-7) * -1);
  padding-top: var(--space-7);

  background-color: var(--color-bg-root);
}

/* Content container */
.layout-detail__container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-6);

  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

/* Responsive adjustments */
@media (max-width: 48rem) {
  .layout-detail__hero {
    min-height: 60vh;
  }

  .layout-detail__hero-controls {
    inset-inline-end: var(--space-4);
    inset-block-end: var(--space-4);
  }
}
</style>

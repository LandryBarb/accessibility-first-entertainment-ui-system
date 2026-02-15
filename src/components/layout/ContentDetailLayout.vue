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


/* ==========================================================================
   CONTENT DETAIL LAYOUT
   ========================================================================== */

.layout-detail {
  position: relative;
  background-color: var(--color-surface);
}

/* Hero region */
.layout-detail__hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;

  /* Desktop height via global breakpoint mixin */
  @include mq('md') {
    min-height: 70vh;
  }

}

/* Backdrop */
.layout-detail__backdrop {
  position: absolute;
  inset: 0;
  z-index: var(--z-background, 0);
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
      var(--color-surface) 0%,
      transparent 55%
    ),
    linear-gradient(
      to right,
      var(--color-surface) 0%,
      transparent 40%
    );
}

/* Hero content */
.layout-detail__hero-content {
  position: relative;
  z-index: var(--z-content, 10);
  width: 100%;
  padding-inline: map.get($space-scale, md);
  padding-bottom: map.get($space-scale, xl);

  /* Desktop spacing */
  @include mq('md') {
    padding-inline: map.get($space-scale, lg);
  }

  max-width: var(--layout-content-max, 87.5rem);
  margin-inline: auto;

  display: flex;
  flex-direction: column;
 gap: map.get($space-scale, md);
}

/* Optional hero controls (mute, info, etc.) */
.layout-detail__hero-controls {
  position: absolute;
  z-index: var(--z-content, 10);

  /* Mobile spacing */
  inset-inline-end: map.get($space-scale, md);
  inset-block-end: map.get($space-scale, md);

  /* Desktop spacing */
  @include mq('md') {
    inset-inline-end: map.get($space-scale, lg);
    inset-block-end: map.get($space-scale, lg);
  }
}

/* Content body */
.layout-detail__body {
  position: relative;
  /* Translates --space-7 negative overlap */
  margin-top: calc(map.get($space-scale, xl) * -1);
  padding-top: map.get($space-scale, xl);

  background-color: var(--color-surface);
}

/* Content container */
.layout-detail__container {
  max-width: var(--layout-content-max, 87.5rem);
  margin-inline: auto;
  
  /* Mobile padding */
  padding-inline: map.get($space-scale, md);

  /* Desktop padding */
  @include mq('md') {
    padding-inline: map.get($space-scale, lg);
  }

  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, lg);
}
</style>

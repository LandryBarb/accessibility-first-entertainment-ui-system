<script setup lang="ts">
// Layout props for hero background
defineProps<{
  heroImage: string;
}>();
</script>

<template>
  <article class="content-page">
    <section class="hero-region" aria-label="Featured Content">
      <div class="hero-backdrop">
        <img :src="heroImage" alt="" class="backdrop-image" />
        <div class="vignette-bottom"></div>
        <div class="vignette-left"></div>
      </div>

      <div class="hero-content">
        <div class="hero-metadata">
          <slot name="hero-meta" />
        </div>
        
        <div class="hero-actions">
          <slot name="hero-actions" />
        </div>

        <div class="hero-footer">
           <slot name="hero-footer" />
        </div>
      </div>
      
      <div class="hero-controls">
        <slot name="hero-controls" />
      </div>
    </section>

    <div class="content-body">
      <section class="detail-section">
        <slot name="details" />
      </section>

      <section class="rows-section">
        <slot name="rows" />
      </section>
    </div>
  </article>
</template>

<style scoped lang="scss">
.content-page {
  background-color: var(--background);
  min-height: 100vh;
  position: relative;
  padding-bottom: 5rem;
}

.hero-region {
  position: relative;
  height: 85vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
}

.hero-backdrop {
  position: absolute;
  inset: 0;
  z-index: var(--z-background);
  
  .backdrop-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // Replicating Tailwind gradients
  .vignette-bottom {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, var(--background) 0%, rgba(13, 15, 20, 0.2) 60%, transparent 100%);
  }

  .vignette-left {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, var(--background) 0%, rgba(13, 15, 20, 0.4) 50%, transparent 100%);
  }
}

.hero-content {
  position: relative;
  z-index: var(--z-content);
  width: 100%;
  max-width: 66%; // lg:w-2/3
  padding: 0 var(--space-xl) var(--space-2xl); // md:px-16 md:pb-16
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  // Animation entry scaffolding
  animation: slide-up 0.7s ease-out;
}

.hero-controls {
  position: absolute;
  bottom: 20%;
  right: var(--space-xl);
  z-index: var(--z-content);
}

.content-body {
  position: relative;
  z-index: var(--z-content);
  margin-top: -2.5rem; // -mt-10 overlap effect
  background: linear-gradient(to bottom, transparent, var(--background) 40px);
  padding: var(--space-xl);
  
  @media (min-width: 768px) {
    padding: 0 var(--space-2xl); // md:px-16
  }
}

.detail-section {
  margin-bottom: var(--space-2xl);
  max-width: var(--max-content-width);
  margin-left: auto;
  margin-right: auto;
}

.rows-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
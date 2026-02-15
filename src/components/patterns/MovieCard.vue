<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from '@/components/atoms/BaseButton.vue';

interface Movie {
  id: string;
  title: string;
  thumbnailUrl: string;
  match: string | number;
  year: string | number;
  rating: string;
}

const props = defineProps<{
  movie: Movie;
  aspectRatio?: 'landscape' | 'portrait';
}>();

const isPortrait = computed(() => props.aspectRatio === 'portrait');
</script>

<template>
  <article 
    class="movie-card" 
    :class="{ 'movie-card--portrait': isPortrait }"
    tabindex="0"
    :aria-label="`View details for ${movie.title}`"
  >
    <div class="movie-card__media">
      <img 
        :src="movie.thumbnailUrl" 
        :alt="movie.title" 
        class="movie-card__image" 
        loading="lazy"
      />
      <div class="movie-card__overlay" />
    </div>

    <div class="movie-card__content">
      <h3 class="movie-card__title">{{ movie.title }}</h3>
      
      <div class="movie-card__meta">
        <span class="match-score">{{ movie.match }} Match</span>
        <span class="meta-divider" aria-hidden="true">•</span>
        <span class="year">{{ movie.year }}</span>
        <span class="rating-badge">{{ movie.rating }}</span>
      </div>

      <div class="movie-card__actions">
        <BaseButton 
          variant="primary" 
          size="sm" 
          class="mini-btn" 
          aria-label="Play"
          tabindex="-1"
        >
          ▶
        </BaseButton>
        <BaseButton 
          variant="secondary" 
          size="sm" 
          class="mini-btn" 
          aria-label="Add to List"
          tabindex="-1"
        >
          +
        </BaseButton>
        <BaseButton 
          variant="tertiary" 
          size="sm" 
          class="mini-btn" 
          aria-label="Like"
          tabindex="-1"
        >
          👍
        </BaseButton>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
/* ❌ Removed: @use "@/styles" as *; */

.movie-card {
  display: flex;
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  border-radius: var(--radius-sm, 0.375rem);
  background-color: var(--color-surface-raised);
  
  /* Converted custom motion tokens to explicit standard easing */
  transition: 
    transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 300ms cubic-bezier(0.2, 0.8, 0.2, 1),
    z-index 0s 300ms; /* Delay z-index reset on mouseleave */
  
  cursor: pointer;
  outline: none;

  /* Default Landscape Aspect Ratio */
  aspect-ratio: 16/9;

  &--portrait {
    aspect-ratio: 2/3;
  }

  /* Interaction States */
  &:hover,
  &:focus-visible {
    transform: scale(1.05);
    z-index: var(--z-dropdown, 20); /* Lift above siblings */
    
    /* Using the new layered shadow system for smoother depth */
    box-shadow: var(--shadow-elevation-medium);
    transition-delay: 0s; /* Instant lift */

    .movie-card__content {
      opacity: 1;
      transform: translateY(0);
    }

    .movie-card__overlay {
      opacity: 0.8; /* Darkened slightly to make text pop more */
    }
  }

  &:focus-visible {
    outline: var(--focus-ring-width, 2px) solid var(--color-focus-ring);
    outline-offset: var(--focus-ring-offset, 2px);
  }
}

.movie-card__media {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
}

.movie-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.movie-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top, 
    var(--color-surface) 0%, 
    transparent 100%
  );
  opacity: 0;
  transition: opacity 300ms ease;
}

/* Hidden content that reveals */
.movie-card__content {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  padding: map.get($space-scale, md);
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, sm);
  
  opacity: 0;
  transform: translateY(map.get($space-scale, sm));
  transition: 
    opacity 300ms cubic-bezier(0.2, 0.8, 0.2, 1),
    transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.movie-card__title {
  font-size: map.get($font-size-scale, 1);
  font-weight: map.get($font-weight-scale, bold);
  color: var(--color-text-main);
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

.movie-card__meta {
  display: flex;
  align-items: center;
  gap: map.get($space-scale, sm);
  font-size: map.get($font-size-scale, 0);
  color: var(--color-text-muted);
}

.match-score {
  color: var(--color-state-success);
  font-weight: map.get($font-weight-scale, bold);
}

.rating-badge {
  border: 1px solid var(--color-text-subtle);
  padding: 0 4px;
  font-size: 10px;
  line-height: 1.4;
}

.movie-card__actions {
  display: flex;
  gap: map.get($space-scale, sm);
  margin-top: map.get($space-scale, xs);
}

/* Override button styles for the mini-card context */
.mini-btn {
  padding: map.get($space-scale, xs) !important;
  min-height: 2rem !important;
  min-width: 2rem !important;
  border-radius: 50% !important;
  font-size: map.get($font-size-scale, 0) !important;
  background-color: rgba(30, 30, 30, 0.8) !important;
  backdrop-filter: blur(4px);
  border: 1px solid var(--color-border-subtle) !important;

  &:hover {
    border-color: var(--color-text-main) !important;
    background-color: var(--color-surface-raised) !important;
  }
}
</style>
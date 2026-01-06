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
@use "@/styles" as *;

.movie-card {
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  border-radius: var(--radius-sm);
  background-color: var(--color-bg-elevated);
  transition: 
    transform var(--motion-base) var(--easing-standard),
    box-shadow var(--motion-base) var(--easing-standard),
    z-index 0s var(--motion-base); /* Delay z-index reset on mouseleave */
  
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
    z-index: var(--z-dropdown); /* Lift above siblings */
    box-shadow: var(--elevation-3);
    transition-delay: 0s; /* Instant lift */

    .movie-card__content {
      opacity: 1;
      transform: translateY(0);
    }

    .movie-card__overlay {
      opacity: 0.4;
    }
  }

  &:focus-visible {
    outline: var(--focus-ring-width) solid var(--color-focus-ring);
    outline-offset: var(--focus-ring-offset);
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
    var(--color-bg-root) 0%, 
    transparent 100%
  );
  opacity: 0;
  transition: opacity var(--motion-base);
}

/* Hidden content that reveals */
.movie-card__content {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  
  opacity: 0;
  transform: translateY(var(--space-2));
  transition: 
    opacity var(--motion-base) var(--easing-standard),
    transform var(--motion-base) var(--easing-standard);
}

.movie-card__title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

.movie-card__meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

.match-score {
  color: var(--color-accent-success);
  font-weight: var(--font-weight-bold);
}

.rating-badge {
  border: 1px solid var(--color-text-muted);
  padding: 0 4px;
  font-size: 10px;
  line-height: 1.4;
}

.movie-card__actions {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-1);
}

/* Override button styles for the mini-card context */
.mini-btn {
  padding: var(--space-1) !important;
  min-height: 2rem !important;
  min-width: 2rem !important;
  border-radius: 50% !important;
  font-size: var(--font-size-xs) !important;
  background-color: rgba(30, 30, 30, 0.8) !important;
  backdrop-filter: blur(4px);
  border: 1px solid var(--color-border-subtle) !important;

  &:hover {
    border-color: var(--color-text-primary) !important;
    background-color: var(--color-bg-elevated) !important;
  }
}
</style>
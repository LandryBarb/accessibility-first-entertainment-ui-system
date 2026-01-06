<script setup lang="ts">
import { ref } from "vue";
import MockupLayout from "@/components/layout/MockupLayout.vue";
import ContentDetailLayout from "@/components/layout/ContentDetailLayout.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";

// Mock Data (Stagecraft UI)
const HERO_MOVIE = {
  title: "ECLIPSE OF THE VOID",
  description: "In a future where starlight is the only currency, a rogue pilot discovers a constellation that shouldn't exist. As factions war for control of the sky, she must decide if the truth is worth extinguishing the only light humanity has left.",
  match: "98% Match",
  year: "2024",
  rating: "TV-MA",
  duration: "2h 14m",
  tags: ["4K Ultra HD", "Dolby Atmos"],
  cast: "Elena Vance, Marcus Thorne, Unit 734",
  // Unsplash image from original design
  image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2994&auto=format&fit=crop"
};

const isMuted = ref(true);
</script>

<template>
  <MockupLayout>
    <ContentDetailLayout :hero-image="HERO_MOVIE.image">
      
      <template #hero>
        <div class="hero-content">
          <h1 class="hero-title">{{ HERO_MOVIE.title }}</h1>

          <div class="hero-meta">
            <span class="match-score">{{ HERO_MOVIE.match }}</span>
            <span class="year">{{ HERO_MOVIE.year }}</span>
            <span class="rating-badge">{{ HERO_MOVIE.rating }}</span>
            <span class="duration">{{ HERO_MOVIE.duration }}</span>
            
            <div class="tech-badges">
              <span v-for="tag in HERO_MOVIE.tags" :kv="tag" class="tech-badge">
                {{ tag }}
              </span>
            </div>
          </div>

          <p class="hero-description">{{ HERO_MOVIE.description }}</p>

          <div class="hero-actions">
            <BaseButton variant="primary" size="lg" class="action-btn">
              <span aria-hidden="true">▶</span> Play
            </BaseButton>
            <BaseButton variant="secondary" size="lg" class="action-btn">
              <span aria-hidden="true">+</span> My List
            </BaseButton>
            <BaseButton variant="tertiary" size="md" class="icon-btn" aria-label="Like">
              👍
            </BaseButton>
            <BaseButton variant="tertiary" size="md" class="icon-btn" aria-label="More Info">
              ℹ️
            </BaseButton>
          </div>

          <div class="hero-cast">
            <span class="label">Starring:</span> {{ HERO_MOVIE.cast }}
          </div>
        </div>
      </template>

      <template #hero-controls>
        <button 
          class="mute-toggle" 
          @click="isMuted = !isMuted"
          :aria-label="isMuted ? 'Unmute' : 'Mute'"
        >
          {{ isMuted ? 'Vx' : 'Vo' }}
        </button>
        <div class="maturity-rating">
          {{ HERO_MOVIE.rating }}
        </div>
      </template>

      <div class="content-rows">
        <div class="tabs-placeholder">
          <div class="tabs-list">
            <button class="tab active">More Like This</button>
            <button class="tab">Details</button>
            <button class="tab">Trailers</button>
          </div>
        </div>

        <section class="carousel-section">
          <h3>Trending Now</h3>
          <div class="card-grid">
            <div v-for="i in 5" :key="i" class="movie-card-placeholder" />
          </div>
        </section>
      </div>

    </ContentDetailLayout>
  </MockupLayout>
</template>

<style scoped lang="scss">
@use "@/styles" as *;

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 60ch;
  animation: fade-in-up var(--motion-slow) var(--easing-standard);
}

.hero-title {
  font-size: var(--font-size-xl);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  line-height: 1;
  
  @media (min-width: 48rem) {
    font-size: 4rem; /* Specific cinematic size */
  }
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
}

.match-score {
  color: var(--color-accent-success);
  font-weight: var(--font-weight-bold);
}

.rating-badge {
  border: 1px solid var(--color-text-muted);
  padding: 0 var(--space-1);
  font-size: var(--font-size-xs);
}

.tech-badges {
  display: flex;
  gap: var(--space-2);
}

.tech-badge {
  background-color: rgba(255, 255, 255, 0.1); // Translucent
  padding: 2px 6px;
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  color: var(--color-text-primary);
}

.hero-description {
  font-size: var(--font-size-md);
  line-height: var(--line-height-loose);
  color: var(--color-text-primary);
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.action-btn {
  font-weight: var(--font-weight-bold);
  min-width: 140px;
}

.hero-cast {
  font-size: var(--font-size-xs);
  color: var(--color-text-muted);
  
  .label {
    color: var(--color-text-secondary);
  }
}

/* Controls */
.mute-toggle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--color-text-muted);
  background: rgba(0,0,0,0.3);
  color: var(--color-text-primary);
  backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  font-size: var(--font-size-xs);
  
  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: var(--color-text-primary);
  }
}

.maturity-rating {
  margin-top: var(--space-2);
  background: rgba(0,0,0,0.6);
  border-left: 3px solid var(--color-text-secondary);
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
}

/* Page Body */
.tabs-placeholder {
  margin-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-border-subtle);
}

.tabs-list {
  display: flex;
  gap: var(--space-6);
  
  .tab {
    padding-bottom: var(--space-3);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-muted);
    border-bottom: 3px solid transparent;
    text-transform: uppercase;
    
    &.active {
      color: var(--color-text-primary);
      border-color: var(--color-accent-primary);
    }
  }
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-3);
}

.movie-card-placeholder {
  aspect-ratio: 16/9;
  background-color: var(--color-stage-black-750);
  border-radius: var(--radius-sm);
  transition: transform var(--motion-base);
  
  &:hover {
    transform: scale(1.05);
    background-color: var(--color-stage-black-700);
  }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
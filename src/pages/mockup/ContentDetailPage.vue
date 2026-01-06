<script setup lang="ts">
import { ref } from "vue";
import MockupLayout from "@/components/layout/MockupLayout.vue";
import ContentDetailLayout from "@/components/layout/ContentDetailLayout.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";
import MovieCard from "@/components/patterns/MovieCard.vue";

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

const TRENDING_MOVIES = [
  { id: "1", title: "Neon Rain", year: 2023, rating: "R", match: 95, thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop" },
  { id: "2", title: "The Silent Sea", year: 2024, rating: "PG-13", match: 88, thumbnailUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=2984&auto=format&fit=crop" },
  { id: "3", title: "Archive 81", year: 2022, rating: "TV-MA", match: 92, thumbnailUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2970&auto=format&fit=crop" },
  { id: "4", title: "Cyber City", year: 2025, rating: "R", match: 99, thumbnailUrl: "https://images.unsplash.com/photo-1625806664977-621815b3b55c?q=80&w=3017&auto=format&fit=crop" },
  { id: "5", title: "Lost Signal", year: 2023, rating: "PG", match: 85, thumbnailUrl: "https://images.unsplash.com/photo-1534234828563-0af5bf89596e?q=80&w=3087&auto=format&fit=crop" },
];

const RELATED_MOVIES = [
  { id: "6", title: "Velvet Night", year: 2021, rating: "R", match: 91, thumbnailUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2959&auto=format&fit=crop" },
  { id: "7", title: "Protocol 4", year: 2024, rating: "TV-14", match: 89, thumbnailUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2972&auto=format&fit=crop" },
  { id: "8", title: "Echoes", year: 2020, rating: "PG-13", match: 82, thumbnailUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2111&auto=format&fit=crop" },
  ...TRENDING_MOVIES // Fill out the grid for visual density
];

// --- State ---

const isMuted = ref(true);
const activeTab = ref("related");
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
              <span v-for="tag in HERO_MOVIE.tags" :key="tag" class="tech-badge">
                {{ tag }}
              </span>
            </div>
          </div>

          <p class="hero-description">{{ HERO_MOVIE.description }}</p>

          <div class="hero-actions">
            <BaseButton variant="primary" size="lg" class="action-btn">
              <span aria-hidden="true" class="icon">▶</span> Play
            </BaseButton>
            <BaseButton variant="secondary" size="lg" class="action-btn">
              <span aria-hidden="true" class="icon">+</span> My List
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
          <span v-if="isMuted">🔇</span>
          <span v-else>wv</span>
        </button>
        <div class="maturity-rating">
          {{ HERO_MOVIE.rating }}
        </div>
      </template>

      <div class="content-rows">
        
        <div class="tabs-container">
          <div class="tabs-list" role="tablist">
            <button 
              class="tab" 
              :class="{ active: activeTab === 'related' }"
              role="tab"
              :aria-selected="activeTab === 'related'"
              @click="activeTab = 'related'"
            >
              More Like This
            </button>
            <button 
              class="tab" 
              :class="{ active: activeTab === 'details' }"
              role="tab"
              :aria-selected="activeTab === 'details'"
              @click="activeTab = 'details'"
            >
              Details
            </button>
            <button 
              class="tab" 
              :class="{ active: activeTab === 'trailers' }"
              role="tab"
              :aria-selected="activeTab === 'trailers'"
              @click="activeTab = 'trailers'"
            >
              Trailers
            </button>
          </div>
        </div>

        <section v-if="activeTab === 'related'" class="tab-panel" role="tabpanel">
          <div class="card-grid">
            <MovieCard 
              v-for="movie in RELATED_MOVIES" 
              :key="movie.id" 
              :movie="movie" 
            />
          </div>
        </section>

        <section v-if="activeTab === 'details'" class="tab-panel" role="tabpanel">
          <div class="details-placeholder">Details Content Placeholder</div>
        </section>

        <section class="carousel-section">
          <h3 class="section-title">Trending Now</h3>
          <div class="card-grid">
             <MovieCard 
              v-for="movie in TRENDING_MOVIES" 
              :key="movie.id" 
              :movie="movie" 
            />
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

/* --- Controls --- */
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

/* --- Content Body --- */
.tabs-container {
  margin-bottom: var(--space-6);
  border-bottom: 1px solid var(--color-border-subtle);
}

.tabs-list {
  display: flex;
  gap: var(--space-6);
}

.tab {
  padding-bottom: var(--space-3);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-muted);
  border-bottom: 3px solid transparent;
  text-transform: uppercase;
  transition: color var(--motion-fast), border-color var(--motion-fast);
  
  &:hover {
    color: var(--color-text-primary);
  }

  &.active {
    color: var(--color-text-primary);
    border-color: var(--color-accent-primary);
  }
}

.tab-panel {
  animation: fade-in var(--motion-base);
}

.details-placeholder {
  padding: var(--space-6);
  background: var(--color-bg-elevated);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
}

.carousel-section {
  margin-top: var(--space-7);
}

.section-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-4);
  color: var(--color-text-primary);
}

/* Grid Layout */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-4);
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
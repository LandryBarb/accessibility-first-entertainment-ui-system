<script setup lang="ts">
import { ref } from "vue";
import MockupLayout from "@/components/layout/MockupLayout.vue";
import ContentDetailLayout from "@/components/layout/ContentDetailLayout.vue";
import BaseButton from "@/components/atoms/BaseButton.vue";
import MovieCard from "@/components/patterns/MovieCard.vue";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/molecules/Tabs";
import IconButton from "@/components/atoms/IconButton.vue";
import Icon from "@/components/atoms/Icon.vue";
import { PlayIcon, StepForward, Pause, Settings, Volume2, Trash2, VolumeIcon, WifiOff, Info } from 'lucide-vue-next';


// --- Mock Data ---

const HERO_MOVIE = {
  title: "ECLIPSE OF THE VOID",
  description: "In a future where starlight is the only currency, a rogue pilot discovers a constellation that shouldn't exist. As factions war for control of the sky, she must decide if the truth is worth extinguishing the only light humanity has left.",
  match: "98% Match",
  year: "2024",
  rating: "TV-MA",
  duration: "2h 14m",
  tags: ["4K Ultra HD", "Dolby Atmos"],
  cast: "Elena Vance, Marcus Thorne, Unit 734",
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
            
            <IconButton
            variant="secondary"
            size="md" label="More Info">
          <Icon :icon="Info" size="md"/>
          </IconButton>
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
          <span v-else>🔊</span>
        </button>
        <div class="maturity-rating">
          {{ HERO_MOVIE.rating }}
        </div>
      </template>

      <div class="content-rows">
        
        <Tabs defaultValue="related" variant="line" class="content-tabs">
          <TabsList>
            <TabsTrigger value="related">More Like This</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="trailers">Trailers</TabsTrigger>
          </TabsList>

          <TabsContent value="related">
            <div class="card-grid">
              <MovieCard 
                v-for="movie in RELATED_MOVIES" 
                :key="movie.id" 
                :movie="movie" 
              />
            </div>
          </TabsContent>

          <TabsContent value="details">
            <div class="details-placeholder">
              <h3>Title Details</h3>
              <p>Director: Sofia Kovic</p>
              <p>Genres: Sci-Fi, Thriller, Drama</p>
            </div>
          </TabsContent>

          <TabsContent value="trailers">
            <div class="details-placeholder">Trailers Placeholder</div>
          </TabsContent>
        </Tabs>

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
/* Note: Most component-specific styles are now inside Tabs/*.vue */

/* Page-specific overrides for layout rhythm */
.content-tabs {
  margin-bottom: map.get($space-scale, xl);
}

.details-placeholder {
  padding: map.get($space-scale, lg);
  background: var(--color-surface-raised);
  border-radius: var(--radius-md, 0.625rem);
  color: var(--color-text-muted);
  border: 1px solid var(--color-border-subtle);
  
  h3 {
    color: var(--color-text-main);
    margin-bottom: map.get($space-scale, xs);
  }
}

/* --- Hero Styles --- */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, md);
  max-width: 60ch;
  animation: fade-in-up 600ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.hero-title {
  /* Fluid typography scaling */
  font-size: map.get($font-size-scale, 4);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  line-height: 1;
  
  @include mq('md') {
    font-size: map.get($font-size-scale, 5);
  }
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: map.get($space-scale, sm);
  font-size: map.get($font-size-scale, 1);
  font-weight: map.get($font-weight-scale, medium);
  color: var(--color-text-muted);
}

.match-score {
  color: var(--color-state-success);
  font-weight: map.get($font-weight-scale, bold);
}

.rating-badge {
  border: 1px solid var(--color-text-muted);
  padding: 0 map.get($space-scale, xs);
  font-size: map.get($font-size-scale, 0);
}

.tech-badges {
  display: flex;
  gap: map.get($space-scale, xs);
}

.tech-badge {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: var(--radius-sm, 0.375rem);
  font-size: map.get($font-size-scale, 0);
  color: var(--color-text-main);
}

.hero-description {
  font-size: map.get($font-size-scale, 1);
  line-height: map.get($line-height-scale, relaxed);
  color: var(--color-text-main);
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: map.get($space-scale, sm);
  margin-top: map.get($space-scale, xs);
}

.action-btn {
  font-weight: map.get($font-weight-scale, bold);
  min-width: 140px;
}

.icon {
  margin-right: map.get($space-scale, xs);
}

.hero-cast {
  font-size: map.get($font-size-scale, 0);
  color: var(--color-text-subtle);
  
  .label {
    color: var(--color-text-muted);
  }
}

/* --- Controls --- */
.mute-toggle {
  @include tap-target; /* WCAG touch target size */
  border-radius: 50%;
  border: 1px solid var(--color-text-subtle);
  background: rgba(0,0,0,0.3);
  color: var(--color-text-main);
  backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: var(--color-text-main);
  }

  &:focus-visible {
    outline: var(--focus-ring-width, 2px) solid var(--color-focus-ring);
    outline-offset: var(--focus-ring-offset, 2px);
  }
}

.maturity-rating {
  margin-top: map.get($space-scale, sm);
  background: rgba(0,0,0,0.6);
  border-left: 3px solid var(--color-text-muted);
  padding: map.get($space-scale, xs) map.get($space-scale, sm);
  font-size: map.get($font-size-scale, 0);
  text-transform: uppercase;
}

/* --- Page Layout --- */
.carousel-section {
  margin-top: map.get($space-scale, xl);
}

.section-title {
  font-size: map.get($font-size-scale, 3);
  font-weight: map.get($font-weight-scale, semibold);
  margin-bottom: map.get($space-scale, md);
  color: var(--color-text-main);
}

/* Grid Layout */
.card-grid {
  display: grid;
  /* Mobile size: minimum 160px wide */
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: map.get($space-scale, md);

  /* Desktop size: minimum 280px wide (Larger cards) */
  @include mq('md') {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: map.get($space-scale, lg); /* Slightly larger gap to balance the big cards */
  }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
<script setup lang="ts">
 import SystemLayout from '@/components/layout/SystemLayout.vue';
import Icon from '@/components/atoms/Icon.vue';
import IconButton from '@/components/atoms/IconButton.vue';
import TextInput from '@/components/atoms/TextInput.vue';
import { CheckCircle } from 'lucide-vue-next';
import { ref } from 'vue';
import BaseButton from '@/components/atoms/BaseButton.vue';


const email =  ref('');
const name = ref('');

// Template ref to access component methods
const emailInputRef = ref<InstanceType<typeof TextInput>>();

function validateEmail(){
    if(!email.value.includes('@')){
        //Call the exposed method!
        emailInputRef.value?.showError('Please enter a valid email address');
    } else{
        emailInputRef.value?.clearError();
    }
}
</script>

<template>

     <SystemLayout>
    <template #sidebar-header>
      <div class="brand-context">
        <span class="brand-subtitle">Design System</span>
      </div>
    </template>

    <template #navigation>
      <div class="nav-group">
        <h3 class="nav-group__title">Foundations</h3>
        <ul class="nav-group__list" role="list">
          <li><a href="#" class="nav-item">Overview</a></li>
          <li><a href="#" class="nav-item">Colors</a></li>
          <li><a href="#" class="nav-item">Typography</a></li>
        </ul>
      </div>

      <div class="nav-group">
        <h3 class="nav-group__title">Components</h3>
        <ul class="nav-group__list" role="list">
          <li>
            <RouterLink to="/system/components/button" class="nav-item">
              Buttons
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/system/components/iconButton" class="nav-item">
              Icon Buttons
            </RouterLink>
          </li>
          <li><a href="#" class="nav-item">Inputs</a></li>
          <li>
            <RouterLink to="/system/components/tabs" class="nav-item">
              Tabs
            </RouterLink>
          </li>
            <li>
            <RouterLink to="/system/components/input" class="nav-item">
              Inputs
            </RouterLink>
          </li>
          <li><a href="#" class="nav-item">Modals</a></li>
          <li><a href="#" class="nav-item">Toasts</a></li>
        </ul>
      </div>
    </template>

    <section class="system-page">
      <header class="system-page__header">
        <h1>Icon Button</h1>
        <p class="system-page__description">
          A fundamental interactive element used to trigger actions or navigate users.
          Buttons communicate call-to-actions clearly through established visual hierarchy.
        </p>
      </header>

      <hr class="system-page__divider" />
       <section class="system-page__section">
        <h2>Variants</h2>
        <p>Use variants to establish importance within a view.</p>
        <div class="example-surface">
    
         <!-- ref="emailInputRef" gives us access to exposed methods -->
          <TextInput
            ref="emailInputRef"
            v-model="email"
            label="Email"
            type="email"
            :required="true"
            hint="We'll never share your email"
          />

            <TextInput
            ref="emailInputRef"
            v-model="name"
            label="Firstname"
            type="name"
            :required="true"
            hint="enter your email"
          />

         
        

    </div>
    </section>
    </section>
    </SystemLayout> 
</template>

<style scoped lang="scss">
// @use "@/styles" as *;
/* Branding Context (Sidebar) */
.brand-context {
  display: flex;
  align-items: center;
  gap: map.get($space-scale, sm);
}

.brand-subtitle {
  font-size: map.get($font-size-scale, 0);
  color: var(--color-text-muted);
  font-weight: map.get($font-weight-scale, medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Nav Groups */
.nav-group {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, sm);
}

.nav-group__title {
  /* Using explicit 0.75rem for ultra-small UI text, or use step 0 if you prefer */
  font-size: 0.75rem; 
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: map.get($font-weight-scale, semibold);
  padding-inline: map.get($space-scale, sm);
}

.nav-group__list {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, xs);
}

.nav-item {
  display: block;
  padding: map.get($space-scale, sm);
  border-radius: var(--radius-sm, 0.375rem);
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: map.get($font-size-scale, 0);
  font-weight: map.get($font-weight-scale, medium);
  transition: background-color 150ms ease, color 150ms ease;

  &:hover {
    color: var(--color-text-main);
    background-color: var(--color-surface-raised);
  }

  /* Vue Router Active Class */
  &.router-link-active {
    background-color: color-mix(in srgb, var(--color-brand-primary) 15%, transparent);
    color: var(--color-brand-primary);
    font-weight: map.get($font-weight-scale, semibold);
  }
}

/* Page Layout */
.system-page {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, xl);
  padding-bottom: map.get($space-scale, xl); /* Scroll padding */
}

.system-page__header {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, md);

  h1 {
    font-size: map.get($font-size-scale, 4);
    font-weight: map.get($font-weight-scale, semibold);
    letter-spacing: -0.02em;
    color: var(--color-text-main);
  }
}

.system-page__description {
  font-size: map.get($font-size-scale, 2);
  color: var(--color-text-muted);
  max-width: 65ch;
  line-height: map.get($line-height-scale, relaxed);
}

.system-page__divider {
  border: 0;
  height: 1px;
  background-color: var(--color-border-subtle);
  width: 100%;
}

.system-page__section {
  display: flex;
  flex-direction: column;
  gap: map.get($space-scale, md);

  h2 {
    font-size: map.get($font-size-scale, 2);
    font-weight: map.get($font-weight-scale, medium);
    color: var(--color-text-main);
  }

  p {
    color: var(--color-text-muted);
    max-width: 60ch;
  }
}

/* Example Container */
.example-surface {
  /* Replaced hardcoded hardware color with our new semantic tokens */
  background-color: var(--color-surface-raised);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md, 0.625rem);
  padding: map.get($space-scale, lg);
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: map.get($space-scale, md);
}
</style>
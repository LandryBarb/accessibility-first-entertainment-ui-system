<script setup lang="ts">
import MockupLayout from "@/components/layout/MockupLayout.vue";
import ContentDetailLayout from "@/components/layout/ContentDetailLayout.vue";
</script>

<template>
  <MockupLayout>
    <ContentDetailLayout heroImage="/images/example.jpg">
      <template #hero>
        <!-- title, metadata, actions -->
      </template>

      <template #hero-controls>
        <!-- mute, captions, etc -->
      </template>

      <!-- Main content -->
      <section>
        <!-- tabs, rows, carousels -->
      </section>
    </ContentDetailLayout>
  </MockupLayout>
</template>

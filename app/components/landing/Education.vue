<script setup lang="ts">
import type { AboutCollectionItem } from '@nuxt/content'

defineProps<{
  page: AboutCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.education.title"
    :ui="{
      container: '!p-0 gap-4 sm:gap-4',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'mt-2'
    }"
  >
    <template #description>
      <div class="flex flex-col gap-6">
        <Motion
          v-for="(education, index) in page.education.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-nowrap gap-2 flex-col flex items-start justify-start"
        >
          <p class="font-semibold text-lg text-gray-800 dark:text-gray-500">
            {{ education.position }}
          </p>
          <p class="text-sm text-muted">
            {{ education.date }} / {{ education.school }}
          </p>
        </Motion>
      </div>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>

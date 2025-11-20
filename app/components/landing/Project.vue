<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})
</script>

<template>
  <UPageSection
    :title="page.project.title"
    :description="page.project.description"
    :ui="{
      container: 'px-0 !pt-0 sm:gap-6 lg:gap-8',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <div class="flex w-full flex-col gap-6">
      <div class="flex w-full flex-col gap-4">
        <NuxtLink
          v-for="project in projects?.filter((work) => work.tags.includes('Featured'))"
          :key="project.title"
          role="link"
          class="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          :to="project.url"
          :aria-label="'go to ' + project.title + ' project website'"
          :target="'_blank'"
        >
          <span class="whitespace-nowrap font-medium">
            {{ project.title }}
          </span>
          <div class="mx-2 h-[0.1px] w-full bg-gray-400" />
          <span class="whitespace-nowrap">
            {{ new Date(project.date).getFullYear() }}
          </span>
        </NuxtLink>
      </div>
      <NuxtLink to="/projects">
        <span class="text-primary text-sm cursor-pointer">
          See more
        </span>
      </NuxtLink>
    </div>
  </UPageSection>
</template>

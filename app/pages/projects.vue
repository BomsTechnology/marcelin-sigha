<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data: projects } = await useAsyncData('projects', () => {
  return queryCollection('projects').all()
})

const { global } = useAppConfig()

const tags = ['All', 'Web App', 'Shopify', 'Mobile', 'Landing Page']
const selectedTag = ref<string>('All')

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start',
        container: '!pb-8'
      }"
    >
      <template #links>
        <div
          v-if="page.links"
          class="flex items-center gap-2"
        >
          <UButton
            :to="`mailto:${global.email}`"
            v-bind="page.links[0]"
          />
        </div>
      </template>
    </UPageHero>
    <div class="flex flex-wrap justify-center items-center gap-4 py-8">
      <UButton
        v-for="(tag) in tags"
        :key="tag"
        :label="tag"
        size="md"
        :variant="selectedTag === tag ? 'solid' : 'ghost'"
        class="rounded-md cursor-pointer"
        @click="selectedTag = tag"
      />
    </div>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
      orientation="horizontal"
    >
      <Motion
        v-for="(project, index) in projects?.filter((work) => selectedTag === 'All' || work.tags.includes(selectedTag))"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="project.title"
          :description="project.description"
          variant="naked"
          reverse
          class="group"
          :ui="{
            wrapper: 'max-sm:order-last'
          }"
        >
          <div class="relative overflow-hidden w-full h-48 rounded-lg">
            <img
              :src="project.image"
              :alt="project.title"
              class="object-cover w-full h-full"
            >
            <div class="absolute inset-0 w-full h-full flex items-end py-4 px-2 gap-2 bg-linear-to-b from-transparent via-transparent to-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ULink
                v-if="project.github !== '#'"
                :to="project.github"
                class="text-sm text-primary flex items-center justify-center rounded-md bg-white p-1.5"
              >
                <UIcon
                  name="simple-icons-github"
                  class="size-5 text-primary transition-all opacity-0 group-hover:opacity-100"
                />
              </ULink>
              <ULink
                v-if="project.url !== '#'"
                :to="project.url"
                class="text-sm text-primary flex items-center justify-center rounded-md bg-white p-1.5"
              >
                <UIcon
                  name="i-lucide-square-arrow-out-up-right"
                  class="size-5 transition-all opacity-0 group-hover:opacity-100"
                />
              </ULink>
            </div>
          </div>
          <template #leading>
            <span class="text-sm text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
          </template>
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>

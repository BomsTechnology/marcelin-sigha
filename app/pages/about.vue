<script setup lang="ts">
const { data: page } = await useAsyncData('about', () => {
  return queryCollection('about').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

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
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <div class="sm:rotate-4 gap-4 flex flex-col">
        <UColorModeAvatar
          class="size-72 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
          :light="global.picture?.light!"
          :dark="global.picture?.dark!"
          :alt="global.picture?.alt!"
          :size="72"
        />
        <UButton
          class="justify-center"
          :label="'Contact me'"
          :to="`mailto:${global.email}`"
        />
      </div>
    </UPageHero>
    <Divider />
    <UPageSection

      :ui="{
        container: '!pt-8 !pb-12 !items-start'
      }"
      orientation="horizontal"
    >
      <LandingWorkExperience :page="page" />
      <LandingEducation :page="page" />
    </UPageSection>
    <Divider />
    <UPageSection
      :title="page.stack.title"
      :description="page.stack.description"
      :ui="{
        container: 'px-0 !pt-12 sm:gap-6 lg:gap-8',
        title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
        description: 'text-left mt-2 text-sm sm:text-md lg:text-sm text-muted'
      }"
    >
      <div class="flex flex-wrap gap-4">
        <Motion
          v-for="(item, index) in page.stack.items"
          :key="item.name"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="flex border border-muted rounded-md p-6"
        >
          <UIcon
            :name="item.icon"
            class="size-9"
            :font-controlled="false"
            :alt="item.name + ' logo'"
            :aria-label="item.name + ' logo'"
          />
        </Motion>
      </div>
    </UPageSection>
  </UPage>
</template>

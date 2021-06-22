<template>
  <div v-if="$config.log.enabled" class="bg-gray-800 border-t border-b border-dashed border-gray-700">
    <div data-aos="fade-up" class="max-w-7xl pb-6 mx-auto border-l border-r border-dashed border-gray-700">
      <div class="max-w-prose text-center mx-auto py-4">
        <p class="text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase">{{ $t('recentLog.subtext') }}</p>
        <nuxt-link :to="localePath('/log')" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500">{{ $t('recentLog.header') }}</nuxt-link>
      </div>
      <div data-aos="zoom-in" class="gap-4 mx-4 grid max-w-7xl grid-flow-row sm:grid-flow-col">
        <LogCard v-for="post in posts" :key="post.slug" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>

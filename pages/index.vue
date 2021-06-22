<template>
  <div>
    <HeroSection/>
    <LazyRecentBlog v-if="$config.log.enabled && posts" :posts="posts"/>
    <!--  -->
    <GithubCalendar v-if="$config.social.github"/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Home -- ${this.$config.name}`,
    }
  },
  data() {
    return {
      posts: null
    }
  },
  async created() {
    const fetchDocsLabel = 'fetchAllPosts'
    console.time(fetchDocsLabel)
    try {
      const posts = await this.$content('posts')
        .without(['body', 'toc', 'dir', 'extension', 'path', 'tags'])
        .limit(3)
        .skip(0)
        .sortBy('createdAt', 'desc')
        .fetch()
      this.posts = posts
    } catch (e) {
      console.error(e)
    } finally {
      console.timeEnd(fetchDocsLabel)
    }
  },
}
</script>

<style>
</style>

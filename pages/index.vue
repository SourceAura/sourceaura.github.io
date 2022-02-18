<template>
  <div class="">
    <HeroSection />
    <LazyRecentPetals v-if="$config.petals.enabled && petals" :petals="petals" />
    <!--  -->
    <GithubCalendar v-if="$config.social.github" />
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: `Home -- ${this.$config.name}`,
    };
  },
  // components: {
  //   Particles,
  // },
  data() {
    return {
      petals: null
    };
  },
  async created() {
    const fetchDocsLabel = "fetchAllPetals";
    console.time(fetchDocsLabel);
    try {
      const petals = await this.$content("petals")
        .without(["body", "toc", "dir", "extension", "path", "tags"])
        .limit(4)
        .skip(0)
        .sortBy("createdAt", "desc")
        .fetch();
      this.petals = petals;
    } catch (e) {
      console.error(e);
    } finally {
      console.timeEnd(fetchDocsLabel);
    }
  },
};
</script>

<style></style>

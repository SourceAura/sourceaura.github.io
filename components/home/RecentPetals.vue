<template>
  <div v-if="$config.petals.enabled" class="bg-transparent content-center">
    <vs-card-group>
      <div data-aos="fade-up" class="max-w-7xl pb-6 mx-auto">
        <div class="max-w-prose text-center mx-auto py-4">
          <p
            class="text-xs leading-6 text-chileanFire font-semibold tracking-wide lowercase"
          >{{ $t("recentPetal.subtext") }}</p>
          <nuxt-link
            :to="localePath('/petal')"
            class="mt-2 text-3xl hover:text-elfGreen leading-8 font-extrabold tracking-tight text-white"
          >{{ $t("recentPetal.header") }}</nuxt-link>
        </div>
        <div data-aos="zoom-in" class="gap-4 mx-4 grid max-w-7xl grid-flow-row sm:grid-flow-col">
          <!-- <PetalCard v-for="post in posts" :key="post.slug" :post="post" /> -->
          <PetalCard v-for="petal in petals" :key="petal.slug" :petal="petal" />
        </div>
      </div>
    </vs-card-group>
  </div>
</template>

<script>
export default {
  data: {
    cardColor: "black",
  },
  props: {
    petals: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>

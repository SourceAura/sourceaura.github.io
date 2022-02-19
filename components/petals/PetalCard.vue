<template>
  <nuxt-link
    :to="localePath(`/petals/${petal.slug}`)"
    class="flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden"
  >
    <v-card class="" max-width="344" color="#000" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4 text-white">{{ petal.title }}</div>
          <v-list-item-title class="text-h3 mb-1 text-white">{{ petal.category }}</v-list-item-title>
          <v-list-item-subtitle>
            <h1 class="text-white">... {{ petal.description }}</h1>
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="90" color="#fff">
          <!-- <UserAvatar
            class="h-9 w-9 rounded-full"
            :name="post.author.name"
            :photo-u-r-l="post.author.image"
          />-->
          <!-- <img
        class="h-36 w-full object-cover"
        :src="post.image"
        alt="Petal Image"
          />-->

          <img
            src="https://media1.tenor.com/images/fbd438a9f31f5d8022a8568128228f2d/tenor.gif?itemid=21007368"
            alt
          />
        </v-list-item-avatar>
      </v-list-item>
      <!--  -->
      <v-card-actions>
        <v-btn outlined rounded text>
          <div class="flex text-xs text-white">
            <time :datetime="petal.createdAt">
              {{
                new Date(petal.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
            </time>
            <span class="mx-1 text-white">&middot;</span>
            <span class="text-white">{{ petal.readingTime }}</span>
          </div>
        </v-btn>
      </v-card-actions>
    </v-card>

    <!--  -->
  </nuxt-link>
</template>

<script>
export default {

  data: () => ({

  }),

  props: {
    petal: {
      type: Object,
    },
  },
}
</script>

<style scoped>
</style>

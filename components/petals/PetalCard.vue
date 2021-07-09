<template>
  <nuxt-link
    :to="localePath(`/petals/${post.slug}`)"
    class="flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden"
  >
    <div v-if="post.image" class="hidden sm:flex flex-shrink-0 bg-transparent">
      <img
        class="h-36 w-full object-cover"
        :src="post.image"
        alt="Petal Image"
      />
    </div>
    <div
      class="flex-1 bg-transparent border-b bottom-0 p-5 flex flex-col justify-between"
    >
      <div class="flex-1">
        <p class="text-xs font-medium text-hot-pink hover:text-hot-pink">
          <a href="#" class="hover:underline hover:text-hot-pink">
            {{ post.category }}
          </a>
        </p>
        <div>
          <h3 class="mt-0.5 text-md leading-7 font-semibold text-white">
            {{ post.title }}
          </h3>
          <p class="mt-2 text-xs text-white">
            {{ post.description }}
          </p>
        </div>
      </div>
      <div class="mt-2 flex items-center">
        <div class="flex-shrink-0">
          <a
            target="_blank"
            rel="noreferrer"
            :href="`https://twitter.com/${post.author.twitter}`"
          >
            <UserAvatar
              class="h-9 w-9 rounded-full"
              :name="post.author.name"
              :photo-u-r-l="post.author.image"
            />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-xs font-medium text-white">
            <a
              target="_blank"
              rel="noreferrer"
              :href="`https://twitter.com/${post.author.twitter}`"
              class="hover:text-kingFish"
            >
              {{ post.author.name }}
            </a>
          </p>
          <div class="flex text-xs text-white">
            <time :datetime="post.createdAt">
              {{
                new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              }}
            </time>
            <span class="mx-1">
              &middot;
            </span>
            <span>
              {{ post.readingTime }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>

<style scoped></style>

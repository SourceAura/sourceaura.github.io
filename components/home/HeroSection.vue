<template>
  <div class="relative bg-transparent overflow-hidden">
    <div class="relative">
      <main class="">
        <div class="mx-auto py-8 max-w-7xl">
          <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">
            <div
              class="px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-laravel sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <!-- the chip -->
                <nuxt-link
                  v-if="$config.petals.enabled"
                  :to="localePath('/petals')"
                  class="group inline-flex hover:bg-black items-center text-white bg-transparent rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-caribGreen"
                >
                  <span
                    class="px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-kingFish rounded-full"
                    >{{ $t("hero.namaste") }}</span
                  >
                  <span class="ml-4 text-xs">{{ $t("hero.explore") }}</span>
                  <!-- chip icon trans. -->
                  <svg
                    class="transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </nuxt-link>
                <!--  chip end -->

                <h1
                  class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"
                >
                  <span class="md:block">{{ $t("hero.iAm") }}</span>
                  <vue-typer :text="$t('hero.terms')"></vue-typer>
                </h1>
                <p class="mt-3 text-base text-white sm:mt-5">
                  {{ $t("hero.aboutMe") }}
                </p>
                <!-- <p
                  v-if="$config.workedAt.enabled"
                  class="mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10"
                >
                  The Stack:
                </p> -->
                <div></div>
                <!-- <div
                  v-if="$config.workedAt.enabled"
                  class="mt-5 w-full sm:mx-auto lg:ml-0"
                >
                  <div
                    class="flex flex-wrap space-x-1 items-start items-center space-x-4 md:space-x-10"
                  >
                    <div
                      v-for="(firm, index) in $config.workedAt.meta"
                      :key="index"
                    >
                      <a
                        :href="firm.url"
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center justify-center"
                      >
                        <img
                          :src="firm.src"
                          class="h-8 rounded-sm sm:h-9"
                          :alt="firm.name"
                        />
                      </a>
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6">
              <vs-card type="3">
                <template #title>
                  <h3>Now Playing:</h3>
                </template>
                <template #img>
                  <img :src="$config.image" alt="" />
                </template>
                <template #text>
                  <p>
                    Play on Playa ^_^
                  </p>
                </template>
                <template #interactions>
                  <!-- Base Stack Icons -->
                  <vs-button danger icon>
                    <i class="bx bx-heart"></i>
                  </vs-button>
                  <vs-button class="btn-chat" shadow primary>
                    <i class="bx bx-chat"></i>
                    <span class="span">
                      54
                    </span>
                  </vs-button>
                </template>
              </vs-card>

              <!-- <div
                class="flex-shrink-0 w-full sm:mx-auto flex flex-1 items-center justify-center rounded-lg sm:overflow-hidden"
              >
                <img
                  class="rounded-md h-80"
                  :src="$config.image"
                  :alt="$config.name"
                />
              </div> -->
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
>>> .vue-typer .custom.char {
  @apply text-kingFish;
}
>>> .vue-typer .custom.char.selected {
  @apply bg-kingFish text-white;
}

>>> .vue-typer .custom.caret {
  width: 5px;
  @apply bg-kingFish;
}

.hover-arrow {
  position: relative;
  stroke-width: 1px;
}
</style>

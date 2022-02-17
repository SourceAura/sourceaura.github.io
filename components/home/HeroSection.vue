<template>
  <div class="relative bg-transparent overflow-hidden">
    <div class="relative">
      <main class>
        <div class="mx-auto py-8 max-w-7xl">
          <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">
            <div
              class="px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-laravel sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <!-- was chip -->

                <h1
                  class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"
                >
                  <span class="md:block">{{ $t("hero.iAm") }}</span>
                  <vue-typer :text="$t('hero.terms')"></vue-typer>
                </h1>
                <p class="mt-3 text-base text-white sm:mt-5">{{ $t("hero.aboutMe") }}</p>
                <!-- <p
                  v-if="$config.workedAt.enabled"
                  class="mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10"
                >
                  The Stack:
                </p>-->
                <br />
                <br />
                <div class>
                  <div>
                    <img
                      alt="Vue.js"
                      src="https://img.shields.io/badge/Vue.js-4FC08D.svg?style=for-the-badge&logo=vue-dot-js&logoColor=white"
                    />
                  </div>
                  <div>
                    <img
                      alt="Nuxt.js"
                      src="https://img.shields.io/badge/Nuxt.js-00C58E.svg?style=for-the-badge&logo=nuxt-dot-js&logoColor=white"
                    />
                  </div>
                  <div>
                    <img
                      alt="Tailwind.css"
                      src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white"
                    />
                  </div>
                </div>
                <!--  -->

                <!--  -->
              </div>
            </div>

            <!-- Hero Card  -->
            <div class="mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6">
              <vs-card type="5">
                <template #title>
                  <h5 class="text-white hover:text-kingFish">
                    <!-- header/title -->
                  </h5>
                </template>
                <template #text>
                  <!-- the chip -->
                  <nuxt-link
                    v-if="$config.petals.enabled"
                    @click="openLoading"
                    :to="localePath('/petals')"
                    class="group inline-flex hover:bg-black items-center text-white bg-transparent rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-caribGreen"
                  >
                  
                    <span
                      class="px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-kingFish rounded-full"
                    >{{ $t("hero.namaste") }}</span>
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
                </template>

                <!-- BG -->
                <template ref="target" id="target" #img>
                  <div class="rose">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220">
                      <path
                        class="st0"
                        d="M87.74 206.19c-27.78-10.62-71.22-75.71-41.72-113.27s93.08-59.29 123.69-26.1 61.46 82.23 21.11 114.8-75.3 35.19-103.08 24.57z"
                        id="H"
                      />
                      <path
                        class="st0"
                        d="M101.56 173.61c-29.67-5.04-85.66-61.03-63.83-104.14s80.62-77.26 117.58-50.39 77.26 69.43 43.67 109.74-67.75 49.83-97.42 44.79z"
                        id="G"
                      />
                      <path
                        class="st0"
                        d="M71.66 185.97c-26.89-4.57-77.62-55.3-57.84-94.36S86.88 21.6 120.36 45.95s70.01 62.91 39.57 99.44-61.38 45.14-88.27 40.58z"
                        id="F"
                      />
                      <path
                        class="st0"
                        d="M96.56 188.26c-23.75-4.03-68.58-48.85-51.1-83.37S110 43.04 139.59 64.56s61.85 55.58 34.96 87.85-54.24 39.89-77.99 35.85z"
                        id="E"
                      />
                      <path
                        class="st0"
                        d="M99.48 150.1c-19.08-3.24-55.09-39.25-41.05-66.97s51.85-49.69 75.62-32.41 49.69 44.65 28.09 70.58-43.57 32.04-62.66 28.8z"
                        id="D"
                      />
                      <path
                        class="st0"
                        d="M88.66 137.83c-14.38-2.44-41.52-29.58-30.94-50.48S96.8 49.9 114.71 62.92s37.45 33.65 21.17 53.19-32.84 24.16-47.22 21.72z"
                        id="C"
                      />
                      <path
                        class="st0"
                        d="M104.29 126.27c-10.18-1.9-29.67-21.38-22.45-36.01s27.14-25.98 39.95-16.56 26.84 24.21 15.58 37.81-22.89 16.65-33.08 14.76z"
                        id="B"
                      />
                      <path
                        class="st0"
                        d="M106.52 120.79c-5.49-.3-16.82-9.29-13.76-17.57s13.02-15.71 20.29-11.6c7.27 4.11 15.48 10.99 10.22 19.01s-11.26 10.46-16.75 10.16z"
                        id="A"
                      />
                    </svg>
                  </div>
                  <!-- <img
                    src="https://media1.tenor.com/images/fbd438a9f31f5d8022a8568128228f2d/tenor.gif?itemid=21007368"
                    alt
                  />-->
                </template>
                <!-- BG End -->
                <!-- Tip Button -->
                <template #interactions>
                  <vs-button color="#fff" transparent icon>
                    <i class="bx bx-heart"></i>
                    <!--  -->
                  </vs-button>
                </template>
                <!-- Tip Button End-->
              </vs-card>
            </div>
            <!-- Hero Card End -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTooltip1: false,
      components: {

      },
    };
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        target: this.$refs.content,
        color: 'dark'
      })
      setTimeout(() => {
        loading.close()
      }, 3000)
    },
  },
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


  <style scoped>
  /* rose styling */
  /* saw it on codepen.io - had to incorperate */
  @import '~/assets/css/rose.css';
    .st0{fill:#572f7d;stroke:#ce6c46;stroke-width:7;stroke-miterlimit:10}
  </style>

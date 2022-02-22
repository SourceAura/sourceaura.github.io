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
                <h1
                  class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"
                >
                  <span class="md:block">{{ $t("hero.iAm") }}</span>
                  <box-icon type="solid" name="cat"></box-icon>
                  <vue-typer :text="$t('hero.terms')"></vue-typer>
                </h1>
                <p class="mt-3 text-base text-white sm:mt-5">{{ $t("hero.aboutMe") }}</p>
                <!-- Tools -->

                <br />
                <div class>
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
              <vs-card type="2">
                <template #title>
                  <h1 class="text-white hover:text-kingFish">🌹</h1>
                </template>
                <template #text>
                  <!-- the chip -->
                  <nuxt-link
                    v-if="$config.petals.enabled"
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

                <!-- bg -->
                <template #img>
                  <img
                    src="https://media1.tenor.com/images/fbd438a9f31f5d8022a8568128228f2d/tenor.gif?itemid=21007368"
                    alt
                  />
                </template>
                <template #interactions>
                  <!-- <vs-button color="#fff" transparent icon>
                    <i class="bx bx-heart"></i>
                  </vs-button>-->

                  <!-- the stack -->
                  <box-icon name="cat" type="solid" flip="vertical" animation="flashing"></box-icon>

                  <box-icon type="logo" name="vuejs"></box-icon>
                  <box-icon type="logo" name="nodejs"></box-icon>
                  <box-icon type="logo" name="css3"></box-icon>
                  <box-icon name="html5" type="logo"></box-icon>
                  <box-icon type="logo" name="go-lang"></box-icon>
                  <box-icon name="firebase" type="logo"></box-icon>
                  <box-icon name="python" type="logo"></box-icon>
                  <box-icon name="terminal" animation="fade-right" flip="vertical"></box-icon>
                </template>
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
      components: {
      },
    };
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
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
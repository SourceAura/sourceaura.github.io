<template>
  <nav class="backdrop-filter backdrop-blur sticky top-0 z-40 w-full">
    <div
      class="max-w-7xl border-l border-r border-dashed border-caribGreen mx-auto px-2 sm:px-4 lg:px-8"
    >
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <nuxt-link :to="localePath('/')" class="flex-shrink-0">
            <TheLogo class="text-3xl w-auto" />
          </nuxt-link>
          <!--  -->
          <div class="hidden lg:block lg:ml-6">
            <div class="flex items-center space-x-4.3">
              <!-- <nuxt-link exact :to="localePath('/')" class="active text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.home')}}</nuxt-link> -->
              <!-- petals -->
              <nuxt-link
                v-show="$config.petals.enabled"
                :to="localePath('/petals')"
                class="active px-3 py-2 rounded-md text-sm font-bold"
              >
                <!-- {{ $t("nav.petals") }} -->
                <vs-button color="#fff" transparent>
                  petals
                  <template #animate>
                    <i class="bx bx-notepad"></i>
                  </template>
                </vs-button>
              </nuxt-link>
              <!--  projects -->
              <nuxt-link
                v-show="$config.projects.enabled"
                :to="localePath('/projects')"
                class="active px-3 py-2 rounded-md text-sm font-bold"
              >
                <!-- {{ $t("nav.projects") }} -->
                <vs-button color="#fff" transparent>
                  projects
                  <template #animate>
                    <i class="bx bx-code"></i>
                  </template>
                </vs-button>
              </nuxt-link>

              <!-- pulses -->
              <nuxt-link
                v-show="$config.pulses.enabled"
                :to="localePath('/pulses')"
                class="active px-3 py-2 rounded-md text-sm font-bold"
              >
                <!-- {{ $t("nav.pulses") }} -->
                <vs-button color="#fff" transparent>
                  pulses
                  <template #animate>
                    <i class="bx bx-pulse"></i>
                  </template>
                </vs-button>
              </nuxt-link>
              <!-- <nuxt-link v-show="$config.resume.enabled" :to="localePath('/resume')" class="active text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.resume')}}</nuxt-link> -->
              <!-- <a v-show="$config.buyMeACoffee.enabled" :href="$config.buyMeACoffee.url" target="_blank" rel="noreferrer" class="active text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.buyMeACoffee')}}</a> -->
            </div>
          </div>
        </div>

        <!-- mobile -->
        <div class="flex lg:hidden">
          <div class="mr-2 flex items-center md:hidden">
            <button
              @click="mobileMenuOpen = true"
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
              id="main-menu"
              aria-label="Main menu"
              aria-haspopup="true"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- Enter/Exit -->

        <!-- Enter/Exit End -->
        <div v-if="$config.firebase.enabled" class="hidden md:flex">
          <div
            v-if="!user"
            @click="signInUser"
            class="active cursor-pointer px-3 py-2 rounded-md text-sm font-bold"
          >
            <!-- {{ $t("nav.signIn") }} -->

            <vs-button color="#fff" flat animation-type="vertical">
              sign in
              <template #animate>
                <box-icon name="log-in-circle"></box-icon>
              </template>
            </vs-button>
          </div>
          <div
            v-else
            @click="signOutUser"
            class="active cursor-pointer px-3 py-2 rounded-md text-sm font-bold"
          >
            <!-- {{ $t("nav.signOut") }} -->

            <vs-button color="#fff" flat success animation-type="vertical">
              sign out
              <template #animate>
                <box-icon name="log-out-circle"></box-icon>
              </template>
            </vs-button>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <!-- Mobile Below -->
    <!--  -->
    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="mobileMenuOpen"
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div class="rounded-lg">
          <div
            class="bg-transparent rounded-lg overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="px-5 pt-4 flex items-center justify-between">
              <div @click="mobileMenuOpen = false">
                <nuxt-link exact :to="localePath('/')">
                  <TheLogo class="text-3xl w-auto" />
                </nuxt-link>
              </div>
              <div class="-mr-2">
                <button
                  @click="mobileMenuOpen = false"
                  type="button"
                  class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-graybg-gray-600 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                >
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div @click="mobileMenuOpen = false" class="flex flex-col space-y-1 px-2 pt-2 pb-3">
              <!-- <nuxt-link exact :to="localePath('/')" class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-600 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.home')}}</nuxt-link> -->
              <nuxt-link
                v-show="$config.petals.enabled"
                :to="localePath('/petals')"
                class="flex px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-600 transition duration-150 ease-in-out"
                role="menuitem"
              >{{ $t("nav.petals") }}</nuxt-link>
              <nuxt-link
                v-show="$config.projects.enabled"
                :to="localePath('/projects')"
                class="flex px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-600 transition duration-150 ease-in-out"
                role="menuitem"
              >{{ $t("nav.projects") }}</nuxt-link>
              <nuxt-link
                v-show="$config.pulses.enabled"
                :to="localePath('/pulses')"
                class="flex px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-600 transition duration-150 ease-in-out"
                role="menuitem"
              >{{ $t("nav.pulses") }}</nuxt-link>
              <!-- <nuxt-link v-show="$config.resume.enabled" :to="localePath('/resume')" class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-600 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.resume')}}</nuxt-link> -->
              <!-- <a v-show="$config.buyMeACoffee.enabled" :href="$config.buyMeACoffee.url" target="_blank" rel="noreferrer" class="flex px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-gray-100 hover:bg-gray-600 focus:outline-none focus:text-gray-100 focus:bg-gray-600 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.buyMeACoffee')}}</a> -->
            </div>
            <!-- Time Stamp -->
            <div class="flex text-gray-100 hover:text-white">
              {{timestamp}}
            </div>
            <div v-if="$config.firebase.enabled">
              <div
                v-if="!user"
                @click="signInUser"
                class="block w-full px-5 py-3 text-center font-medium text-gray-200 bg-kingFish hover:bg-kingFish hover:text-gray-200 focus:outline-none focus:bg-kingFish focus:text-gray-100 transition duration-150 ease-in-out"
              >{{ $t("nav.signIn") }}</div>
              <div
                v-else
                @click="signOutUser"
                class="block w-full px-5 py-3 text-center font-medium text-gray-200 bg-kingFish hover:bg-kingFish hover:text-gray-200 focus:outline-none focus:bg-kingFish focus:text-gray-100 transition duration-150 ease-in-out"
              >{{ $t("nav.signOut") }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import TheLogo from "~/components/logos/TheLogo";
export default {
  components: { TheLogo },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      value: '',
      mobileMenuOpen: false,
      toastOptions: { duration: 3000, theme: "bubble" },
    };
  },
  methods: {
    async signInUser() {
      this.mobileMenuOpen = false;
      try {
        const user = await this.$store.dispatch("signInUserWithGoogle");
      //  vuesax alert -
       this.$toast.success(
          `welcome ${user.displayName.toLowerCase()} 🙌`,
          this.toastOptions
        );
      } catch (e) {
        console.error(e);
        this.$toast.error(e.toString(), this.toastOptions);
      }
    },
    signOutUser() {
      this.mobileMenuOpen = false;
      this.$store.dispatch("signOut");
      this.$toast.show("see you next time 👋", this.toastOptions);
    },
  },
};
</script>

<script>
export default {
  data: {
    timestamp: ""
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      this.timestamp = dateTime;
    }
  }
}
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(11px);
}

.nuxt-link-active.active {
  @apply bg-black text-white;
}

.nuxt-link-active.active-mobile {
  @apply bg-gray-900 text-white;
}
</style>

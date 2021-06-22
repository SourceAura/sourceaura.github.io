<template>
  <div class="exonav">
    <v-toolbar dark color="rgb(0, 0, 0, 0)" dense>
      <v-app-bar-nav-icon>
        <nuxt-link :to="localePath('/')" class="flex-shrink-0">
          <TheLogo class="text-3xl w-auto" />
        </nuxt-link>
      </v-app-bar-nav-icon>
      <!-- <v-toolbar-title>SourceAura</v-toolbar-title> -->
      <v-spacer></v-spacer>
      <!-- journal -->
      <vs-button transparent>
        <nuxt-link
          v-show="$config.log.enabled"
          :to="localePath('/log')"
          class="active hover:bg-gray-700"
        >
          <!-- Book of Shadows in Light. -->
          <book-open-icon size="1.5x" class="custom-class"></book-open-icon>
        </nuxt-link>
      </vs-button>
      <!--  -->
      <vs-button transparent>
        <!-- works -->
        <nuxt-link
          v-show="$config.projects.enabled"
          :to="localePath('/projects')"
          class="active hover:bg-gray-700"
        >
          <!-- activity -->
          <airplay-icon size="1.5x" class="custom-class"></airplay-icon>
        </nuxt-link>
      </vs-button>
      <!--  -->
      <vs-button transparent >
        <!-- contact -->

        <nuxt-link
          v-show="$config.pulses.enabled"
          :to="localePath('/pulses')"
          class="active hover:bg-gray-700"
        >
          <!-- activity -->
          <activity-icon size="1.5x" class="custom-class"></activity-icon>
        </nuxt-link>
      </vs-button>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <!-- if usr end -->
      <v-spacer></v-spacer>
      <v-btn icon v-if="$config.firebase.enabled">
        <div v-if="!user">
          <!-- <v-icon @click="signInUser">mdi-login</v-icon> -->
          <log-in-icon size="1.5x" class=""></log-in-icon>
        </div>
        <div v-else>
          <!-- <v-icon @click="signOutUser">mdi-logout</v-icon> -->
          <log-out-icon size="1.5x" class=""></log-out-icon>
        </div>
        <!--  -->
      </v-btn>
    </v-toolbar>
    <!-- v-if - info check -->
    <!-- <v-system-bar height="30" lights-out></v-system-bar> -->
  </div>
</template>

//

<script>
// import TheLogo from "~/components/logos/TheLogo";
import {
  ActivityIcon,
  AirplayIcon,
  BookOpenIcon,
  LogInIcon,
  LogOutIcon
} from "vue-feather-icons";
export default {
  components: {
    ActivityIcon,
    AirplayIcon,
    BookOpenIcon,
    LogInIcon,
    LogOutIcon
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  data() {
    return {
      mobileMenuOpen: false,
      toastOptions: { duration: 3000, theme: "bubble" }
    };
  },
  methods: {
    async signInUser() {
      this.mobileMenuOpen = false;
      try {
        const user = await this.$store.dispatch("signInUserWithGoogle");
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
    }
  }
};
</script>

<style scoped></style>

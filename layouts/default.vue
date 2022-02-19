<template>
  <div>
    <TheNavBar />
    <Nuxt />
    <Zenyatta />
    <TheFooter />
  </div>
</template>

<script>
import Zenyatta from "~/components/Zenyatta.vue";

export default {
  data: function () {
    return {
      message: 'Hola mundo'
    }
  },
  webfontloader: {
    google: {
      families: ["Dosis:300,400"], //Loads Lato font with weights 400 and 700
    },
  },
  components: { Zenyatta }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Orbitron);

/* body {} */
html {
  @apply bg-black text-white font-sans;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* font-family: "Dosis", sans-serif !important; */
}
/* ?? */
::-moz-selection {
  @apply bg-transparent text-white;
}
::selection {
  @apply bg-transparent text-white;
}

/* Page-transition styles must be global */
/* page is used by default */
.page-leave-active,
.page-enter-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
/* slide-right */
.slide-right-leave-active,
.slide-right-enter-active {
  transition: all 0.3s;
}
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
.slide-right-enter-to,
.slide-right-leave {
  opacity: 1;
  transform: translate(0, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}
/* slide-left */
.slide-left-leave-active,
.slide-left-enter-active {
  transition: all 0.3s;
}
.slide-left-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-enter-to,
.slide-left-leave {
  opacity: 1;
  transform: translate(0, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-30px, 0);
}
/* swipe-right */
.swipe-right-leave-active,
.swipe-right-enter-active {
  transition: all 0.3s;
}
.swipe-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
.swipe-right-enter-to,
.swipe-right-leave {
  opacity: 1;
  transform: translate(0, 0);
}
.swipe-right-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}
/* jump */
.jump-leave-active,
.jump-enter-active {
  transition: all 0.3s;
}
.jump-enter {
  opacity: 0;
  transform: rotate(-12deg);
}
.jump-enter-to,
.jump-leave {
  opacity: 1;
  transform: rotate(0deg);
}
.jump-leave-to {
  opacity: 0;
  transform: rotate(12deg);
}
</style>


<style scoped>
/*====COLOR Codes====*/
.gradient,
.gradient:after {
    display: block;
    content: "";
    width: 400px;
    height: 80px;
    background: #bd328f;
    background: -moz-linear-gradient(
        -45deg,
        #bd328f 0%,
        #bd328f 18%,
        #2976ab 42%,
        #292f75 62%,
        #bd328f 82%,
        #bd328f 100%
    );
    background: -webkit-gradient(
        linear,
        left top,
        right bottom,
        color-stop(0%, #bd328f),
        color-stop(18%, #bd328f),
        color-stop(42%, #2976ab),
        color-stop(62%, #292f75),
        color-stop(82%, #bd328f),
        color-stop(100%, #bd328f)
    );
    background: -webkit-linear-gradient(
        -45deg,
        #bd328f 0%,
        #bd328f 18%,
        #2976ab 42%,
        #292f75 62%,
        #bd328f 82%,
        #bd328f 100%
    );
    background: -o-linear-gradient(
        -45deg,
        #bd328f 0%,
        #bd328f 18%,
        #2976ab 42%,
        #292f75 62%,
        #bd328f 82%,
        #bd328f 100%
    );
    background: -ms-linear-gradient(
        -45deg,
        #bd328f 0%,
        #bd328f 18%,
        #2976ab 42%,
        #292f75 62%,
        #bd328f 82%,
        #bd328f 100%
    );
    background: linear-gradient(
        135deg,
        #bd328f 0%,
        #bd328f 18%,
        #2976ab 42%,
        #292f75 62%,
        #bd328f 82%,
        #bd328f 100%
    );
}

.gradient {
    animation: 8s anim linear infinite;
}

.gradient:after {
    transform: translateX(400px);
}

@keyframes anim {
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(-400px);
    }
}



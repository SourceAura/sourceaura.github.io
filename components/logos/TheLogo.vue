<template>
<div class="font-light hover:text-laravel text-3xl animation-logo tracking-tighter text-kingFish">
  {{ $config.name[0].toLowerCase() }}
  <!-- 🌹's -->
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.animation-logo {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animationTimingFunction: cubic-bezier(0.4, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
  }
}

</style>

<template>
  <div class="main">
    <vue-particles color="#fff"></vue-particles>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="css">

.particles-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
}

#particles-js {
  position: absolute;
  background-size: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: hidden;
  width: 100%;
  height: 100vh !important;
  z-index: 0;
}
</style>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="mt-2 col-md-8 mb-5">
        <transition :duration="200" name="selim" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<style media="screen">
.selim-enter,
.selim-leave-active {
  opacity: 0;
  transform: translate(40px);
}

.selim-enter-active,
.selim-leave-active {
  transition: all 0.2s;
}

/* PE PEA PL PLA */
</style>
<script>
export default {
  created() {
    this.$store.dispatch("initPost");
  },
};
</script>

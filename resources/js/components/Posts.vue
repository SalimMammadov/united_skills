<template>
  <div class="">
    <div class="mt-3 d-flex justify-content-between">
      <router-link to="/add" tag="button" class="mb-3 btn btn-success">
        Add new post</router-link
      >
      <a href="/home"> <b>Home </b></a>
    </div>
    <post :key="post.id" v-for="post in posts" :post="post" />
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
};
</script>

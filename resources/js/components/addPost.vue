
      <template>
  <div class="mt-5 container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <form @submit.prevent="createPost()">
          <div class="form-group">
            <input
              v-model.trim="post.title"
              type="text"
              class="form__input form-control"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>
          <div class="form-group">
            <textarea
              placeholder="Description"
              class="form-control"
              v-model="post.desc"
            >
            </textarea>
          </div>

          <router-link to="/" class="btn btn-danger" tag="button"
            >Reject</router-link
          >
          <button type="submit" class="btn btn-success">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

      <style media="screen">
.error {
  font-weight: bold;
  color: red;
}
</style>

    <script type="text/javascript">
export default {
  data() {
    return {
      post: {
        title: "",
        desc: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$store.dispatch("addPost", this.post).then((r) => {
        console.log(r);
      });
      // this.$router.push("/");
    },
  },
};
</script>

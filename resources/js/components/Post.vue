<template>
  <div>
    <div class="task">
      <div class="header">
        <strong>{{ post.title }} </strong>
      </div>
      <hr />
      <div class="body">
        {{ post.body }}
      </div>
      <hr class="new4" />
      <div class="comments-box">
        <div class="addComment">
          <h5 class="text-info mb-2">Comments</h5>
          <div class="comment">
            <form class="d-flex" @submit.prevent="createComment(post.id)">
              <input
                placeholder="Type something"
                v-model="comment"
                type="text"
                class="form-control"
              />
              <button type="submit" class="ml-1 btn btn-info">
                Add comment
              </button>
            </form>
          </div>
        </div>
        <div
          class="comments p-3 mb-1"
          v-for="(comment, index) in post.comments"
          :key="comment.id"
        >
          <div class="d-flex align-items-center">
            <strong class="text-success"> {{ comment.user.name }} </strong>
            <i
              v-if="comment.user_id === user"
              @click="deleteComment(comment.id, index)"
              class="ml-2 fa fa-trash text-danger cursor-pointer"
            ></i>
          </div>
          {{ comment.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: window.User,
      comment: "",
    };
  },
  methods: {
    createComment(postId) {
      if (this.comment.length > 0) {
        axios
          .post("/comment", { post_id: postId, body: this.comment })
          .then((r) => {
            if (r.data.success) {
              alert(r.data.success);
              this.post.comments.push(r.data.comment);
              this.comment = "";
            }
          });
      }
    },
    deleteComment(id, index) {
      if (confirm("Sure?"))
        axios.delete("/comment/" + id).then((r) => {
          this.post.comments.splice(index, 1);
        });
    },
  },
  props: ["post"],
};
</script>
<style>
hr.new4 {
  border: 1px solid white;
}
.task {
  border-radius: 10px;
  backdrop-filter: blur(2px);
  background-image: linear-gradient(
    to right,
    rgb(3, 45, 108),
    rgb(4, 14, 34),
    rgb(42, 39, 103)
  ) !important;
  margin-top: 50px;
  color: white;
  padding: 20px;
}
</style>

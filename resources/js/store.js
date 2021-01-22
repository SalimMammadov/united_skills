import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        posts: [],
        errors: []
    },
    mutations: {
        initPost(state, posts) {
            state.posts = posts;
        },

        addPost(state, post) {
            state.posts.push(post);
        },
        deletePost(state, postid) {
            let index = state.posts.findIndex(i => {
                return i.id == postid;
            });
            state.posts.splice(index, 1);
        },
        updatePost(state, post) {
            let index = state.posts.findIndex(i => {
                return i.id == post.id;
            });
            if (index > -1) {
                state.posts[index] = post;
            }
        },

        searchPost(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        initPost({ commit }) {
            axios.get("/post").then(response => {
                commit("initPost", response.data);
            });
        },

        ///////

        addPost({ commit }, posts) {
            this.state.errors = [];
            axios
                .post("/post", posts)
                .then(response => {
                    commit("addPost", response.data.post);
                })
                .catch(error => {
                    if (error.response.status == 422) {
                        this.state.errors.push(error.response.data.errors);
                    }
                });
        },
        deletePost({ commit }, id) {
            axios.delete("/post/" + id, id).then(response => {
                commit("deletePost", id);
            });
        },
        updatePost({ commit }, post) {
            axios.put("/post/" + post.id, post).then(response => {
                commit("updatePost", post);
            });
        },

        searchPost({ commit }, post) {
            axios.post("/post/search", { name: post }).then(response => {
                commit("searchPost", response.data);
            });
        }
    },

    getters: {
        posts(state) {
            return state.posts;
        },
        errors(state) {
            return state.errors;
        }
    }
});

export default store;

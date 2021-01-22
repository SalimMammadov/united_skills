import store from "./store";
import router from "./routes";

require("./bootstrap");

window.Vue = require("vue");
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.component("App", require("./components/App.vue").default);
Vue.component("post", require("./components/Post.vue").default);
Vue.component("posts", require("./components/Posts.vue").default);
Vue.component("search", require("./components/searchUser.vue").default);

const app = new Vue({
    el: "#app",
    store,
    router
});

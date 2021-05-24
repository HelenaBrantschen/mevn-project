<template>
  <v-container>
    <v-alert
      border="left"
      close-text="Close Alert"
      color="green accent-4"
      dark
      dismissible
      v-if="showAlert"
    >
      {{ alertMessage }}
    </v-alert>

    <v-main :key="iterator">
      <!-- Main-->
      <v-row>
        <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
          <v-card class="pa-1" :to="{ name: 'post', params: { id: post._id } }">
            <v-img height="250" :src="`/${post.image}`"></v-img>
            <v-btn class="ml-4 mt-3" small outlined color="indigo">
              {{ post.category }}
            </v-btn>
            <v-card-title class="headline">
              {{ post.title }}
            </v-card-title>
            <v-card-text class="py-0">
              <p>{{ post.content.substring(0, 100) + "..." }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <button @click="handlePostClick()" class="btn" type="button">
        Add Post
      </button>
    </v-main>
    <v-overlay :absolute="absolute" :value="overlay">
      <v-container>
        <!-- <v-row no-gutters> -->
        <!-- <v-col sm="12" class="mx-auto"> -->
        <v-card class="postform pa-5">
          <v-card-title>Add new Post</v-card-title>
          <v-divider> </v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-2"
            enctype="multipart/form-data"
          >
            <v-text-field
              label="Title"
              v-model="post.title"
              prepend-icon="mdi-note"
              :rules="rules"
            >
            </v-text-field>

            <v-text-field
              label="Category"
              v-model="post.category"
              prepend-icon="mdi-view-list"
              :rules="rules"
            >
            </v-text-field>

            <v-textarea
              label="Content"
              v-model="post.content"
              prepend-icon="mdi-note-plus"
              :rules="rules"
            >
            </v-textarea>
            <v-file-input
              @change="selectFile"
              :rules="rules"
              show-size
              counter
              multiple
              label="Select Image"
            >
            </v-file-input>
            <v-btn color="success" @click="overlay = false"> cancel </v-btn>
            <v-btn type="submit" class="mt-3" color="primary">Add Post</v-btn>
          </v-form>
        </v-card>
        <!-- </v-col> -->
        <!-- </v-row> -->
      </v-container>
    </v-overlay>
  </v-container>
</template>

<style scoped>
.btn {
  position: fixed;
  background-color: aqua;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
}
.postform {
  width: 90vw;
  position: fixed;
  bottom: 2rem;
  left: 5%;
}
</style>
<script>
import API from "../api";

export default {
  data: () => ({
    posts: [],

    rules: [(value) => !!value || "This fiels is required!"],
    post: {
      title: "",
      category: "",
      content: "",
      image: "",
    },
    image: "",
    drawer: null,
    absolute: true,
    overlay: false,
    iterator: 0,
    showAlert: false,
    alertMessage: "",
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "Add Post", icon: "mdi-note-plus", link: "/add-post" },
      { title: "About", icon: "mdi-help-box", link: "/about" },
    ],
  }),
  async created() {
    this.posts = await API.getAllPost();
  },
  methods: {
    handlePostClick() {
      this.overlay = true;
    },

    selectFile(file) {
      this.image = file[0];
    },
    async submitForm() {
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("content", this.post.content);
      if (this.$refs.form.validate()) {
        // if form is validated send to database
        const response = await API.addPost(formData);
        this.overlay = false;
        this.showAlert = true;
        this.alertMessage = response.message;
        /* this.$router.push({path: '/' , params:{ message: response.message } });*/
        this.iterator++;
      }
    },
  },
};
</script>
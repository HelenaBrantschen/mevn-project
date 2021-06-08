<template>
  <v-container>
    <v-alert
      close-text="Close Alert"
      light
      color="black"
      outlined
      dense
      dismissible
      style="
      border-radius:0%;
      border: 4px dashed black;
       "  
      v-if="showAlert"
    >
      {{ alertMessage }}
    </v-alert>

    <v-main pa-0 :key="iterator">
      <!-- Main-->
      <v-row>
        <v-col  class="pa-0" v-for="post in posts" :key="post._id">
          <v-card tile width="50vw" height="50vw" style="overflow:hidden;" class="" :to="{ name: 'post', params: { id: post._id } }">
            <v-img class="gallery-img" height="100%" :src="`/${post.image}`"></v-img>
            <div class="gallery-post-wrapper">
            <v-btn class="ml-4 mt-3" small outlined color="white">
              {{ post.category }}
            </v-btn>
            <v-card-title class="headline">
              {{ post.title }}
            </v-card-title>
            <v-card-text class="py-0">
              <p>{{ post.content.substring(0, 100) + "..." }}</p>
            </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-btn @click="handlePostClick()" value="true" class="mx-2 btn btn-rounded" type="button" id="plus_btn" large>
        <v-icon light>
        mdi-plus
      </v-icon>
 </v-btn>
    </v-main>
    <v-overlay :absolute="absolute" :value="overlay" light >
        <!-- <v-row no-gutters> -->
        <!-- <v-col sm="12" class="mx-auto"> -->
        <v-card class=" postform pa-5 " light >
          <v-card-title class="blk">Create a new Post</v-card-title>
          <v-divider class="black"> </v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-2 "
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
              class="blk"
            >
            </v-text-field>

            <v-textarea
              label="Content"
              v-model="post.content"
              prepend-icon="mdi-note-plus"
              :rules="rules"
              class="blk"
            >
            </v-textarea>
            <v-file-input
              @change="selectFile"
              :rules="rules"
              show-size
              counter
              multiple
              label="Select Image"
              class="blk"
            >
            </v-file-input>
            <v-btn color="error" @click="showButton(), overlay = false" class="mt-3" plain style="z-index:999!important;"> cancel </v-btn>
            <v-btn type="submit" class="mt-3" color="sucess">Add Post</v-btn>
          </v-form>
        </v-card>
        <!-- </v-col> -->
        <!-- </v-row> -->
    </v-overlay>
  </v-container>
</template>

<style scoped>
.btn {
  position: fixed;
  bottom:3%;
  right:3%;
 z-index: 6;
  border-radius: 50%;
  height: 78px!important;
  width:78px!important;

}
.postform {
  width: 90vw;
  position: fixed;
  bottom: 2rem;
  left: 5%;
}
.title{
    margin-top:2%;

}

.icon-plus{
  position: relative;
  left:15%;
  display:flex;
  align-items: center;
  justify-items: center;
  color:rgb(49, 8, 8);
}
.gallery-img{
  z-index:2;
}

.gallery-post-wrapper{
  width:50vw;
  height:50vw;
  position: absolute;
  z-index:4;
  top:0;
    background-color:blueviolet;
    color:white;
      opacity: 0.0;

}
.gallery-post-wrapper:hover{
    opacity: 1.0;

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
      document.getElementById("plus_btn").style.display ="none";
      },
      showButton(){
      document.getElementById("plus_btn").style.display ="initial";

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
        document.getElementById("plus_btn").style.display ="initial";

        /* this.$router.push({path: '/' , params:{ message: response.message } });*/
        this.iterator++;
      }
    },
},
};
</script>
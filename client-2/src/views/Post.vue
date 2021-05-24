<template>
  <div class="container">
    <img class="header-img" :src="`/${post.image}`" alt="" />
    <p class="date">{{ post.created | formatDate}}</p>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>

    <v-btn
      color="success"
      text
      :to="{ name: 'edit-post', params: { id: post._id } }"
      >Edit</v-btn
    >
    <v-btn color="red" text @click="removePost(post._id)">Delete</v-btn>
  </div>
  
</template>
<style scoped>
.header-img{
  width:100vw;
  height:auto;
}
.date{
  float: right;
  padding: 2rem;
}
h1{
  padding-left: 2rem;
}
</style>
<script>
import API from "../api";
export default {
  data() {
    return {
      post: {},
      date: null,
    };
  },
  async created() {
    const response = await API.getPostById(this.$route.params.id);
    this.post = response;
  },
  methods: {
    async removePost(id) {
      const response = await API.deletePost(id);
      this.$router.push({
        name: "home",
        params: { message: response.message },
      });
    },
formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  mounted (){ 
    this.$nextTick(() => {
this.date =  this.parseDate(this.post.created);

    }) 
  }

};
</script>

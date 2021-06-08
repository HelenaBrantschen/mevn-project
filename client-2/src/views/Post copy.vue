<template>

  <div class="container pa-0">
  <v-btn @click="showOptions" value="true" class="mx-2 btn btn-rounded" type="button" id="plus_btn" large>
        <v-icon light>
        mdi-plus
      </v-icon>
 </v-btn>
 <div>
 <v-btn @click="editItem()" value="false" class="mx-2 btn btn-rounded hidden" type="button" id="edit_btn" large>
        <v-icon light>
mdi-plus      </v-icon>
 </v-btn><v-btn @click="deleteItem()" value="false" class="mx-2 btn btn-rounded hidden" type="button" id="delete_btn" large>
        <v-icon light>
          mdi-cancel
      </v-icon>
 </v-btn><v-btn @click="shareItem()" value="false" class="mx-2 btn btn-rounded hidden" type="button" id="share_btn" large>
        <v-icon light>
        mdi-plus
      </v-icon>
 </v-btn>
 </div>
    <div class="img-container">
    <img class="header-img" :src="`/${post.image}`" alt="" />
    </div>
    <p class="date">{{ post.created | formatDate}}</p>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>

    <v-btn
      color="success"
      text
      :to="{ name: 'edit-post', params: { id: post._id } }"
      ><v-icon></v-icon>Edit</v-btn
    >
    <v-btn color="red" text @click="removePost(post._id)">Delete</v-btn>

  </div>

  
</template>
<style scoped>
.img-container{
  overflow:hidden;
  align-content: center;
  width:100vw;
  height:30vh;
  display: flex;

}
.header-img{
  position:relative;
  top:0%;
  width:100%;
  align-self: center;
  height:auto;
  min-height:30vh;
  padding:0;
}
.date{
  padding-top:30px;
  padding-left: 20px;
  margin-bottom: 0px;
}
h2{
  padding-left: 20px;
    padding-bottom: 20px;

  font-size: 26pt;
  text-transform: uppercase;
}
p{
  padding-left:20px;
    padding-right:30px;

}
.btn{
    opacity: 0.9;
    border-radius: 50%;
    height: 78px!important;
  width:78px!important;
  transform:scale(0.75);
    


}
#plus_btn {
  position: fixed;
  bottom:3%;
  right:3%;
 z-index: 1000;
  height: 78px!important;
  width:78px!important;
    transform:scale(1);

}

.hidden{
  display: none;
}
.shown{
  display: initial;
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
    showOptions :function (){
 const btn_edit = document.getElementById("edit_btn").classList.add("shown");
  const btn_delete = document.getElementById("delete_btn").classList.add("shown");
  const btn_share = document.getElementById("share_btn").classList.add("shown");
  const btn_big = document.getElementById("plus_btn").classList.add("hidden");

    },
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

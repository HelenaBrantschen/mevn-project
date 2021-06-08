<template>

  <div class="container pa-0">
    <v-btn 
    id="edit_btn"
    class=""
    @click="enableEdit"      
    ><v-icon></v-icon>Edit</v-btn
    >
    <!-- <v-btn
      @click="showOptions"
      value="true"
      class="mx-2 btn btn-rounded"
      type="button"
      id="plus_btn"
      large
    >
      <v-icon light> mdi-plus </v-icon>
    </v-btn> -->
    <div>
      <!-- <v-btn
        @click="editItem()"
        value="false"
        class="mx-2 btn btn-rounded hidden"
        type="button"
        id="add_item"
        large
      >
        <v-icon light> mdi-plus </v-icon> </v-btn
      ><v-btn
        @click="deleteItem()"
        value="false"
        class="mx-2 btn btn-rounded hidden"
        type="button"
        id="delete_btn"
        large
      >
        <v-icon light> mdi-cancel </v-icon> </v-btn
      ><v-btn
        @click="shareItem()"
        value="false"
        class="mx-2 btn btn-rounded hidden"
        type="button"
        id="share_btn"
        large
      > 
        <v-icon light> mdi-plus </v-icon>
      </v-btn>-->
    </div>
  
    <div class="img-container">
      <img class="header-img" :src="`/${post.image}`" alt="" />
    </div>

      <v-form
            ref="form"
            @submit.prevent="updateForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
          <v-text-field v-model="post.dates"></v-text-field>
    <v-text-field   id="date" v-model="post.created" color="white" readonly></v-text-field>
    <v-text-field  class="readonly display-3" readonly id="title" v-model="post.title" color="white" style="border:none; max-height: auto;

"></v-text-field>

    <v-textarea class="readonly" readonly id="para" v-model="post.content" color="white"  ></v-textarea>
     <v-btn @click="formatDate" class="mt-3 btn" color="success" id=""             >try that date</v-btn
            >
     <v-btn type="submit" class="mt-3 hidden btn" color="success" id="update_btn"
              >Save</v-btn
            >
    </v-form>
    <!-- <v-btn
      color="success"
      text
      :to="{ name: 'edit-post', params: { id: post._id } }"
      ><v-icon></v-icon>Edit</v-btn
    > -->
    <v-btn color="red" text @click="removePost(post._id)">Delete</v-btn>
  </div>
</template>

<script>
import API from "../api";
export default {
  data() {
    return {
      post: {
        title: "",
        category: "",
        content: "",
        image: "",
        dates:[],
      },
      image:"",
      date: null,
    };
  },
  async created() {
    const response = await API.getPostById(this.$route.params.id);
    this.post = response;
  
  },
  methods: {
    showOptions: function () {
      // const btn_edit = document.getElementById("add_item").classList.add("shown");
      // const btn_delete = document.getElementById("delete_btn").classList.add("shown");
      // const btn_share = documen.getElementById("share_btn").classList.add("shown");
      // const btn_big = document.getElementById("plus_btn").classList.add("hidden");
    },
    enableEdit:function(){
const date = document.getElementById("date");
const title = document.getElementById("title");
const para = document. getElementById("para");

//const readonly = document. querySelectorAll("readonly");

//readonly.removeAttribute("readonly");
//readonly.remove.classList("readonly");


date.removeAttribute("readonly");
title.removeAttribute("readonly");
para.removeAttribute("readonly");


date.remove.classList ="readonly";
title.remove.classList="readonly";
para.remove.classList="readonly";



const updatebtn = document.getElementById("update_btn");

updatebtn.remove.classList="hidden";
updatebtn.classList.add("shown");

const editbtn = document.getElementById("edit_btn");
editbtn.classList.add("hidden");

    },
    async removePost(id) {//works fine
      const response = await API.deletePost(id);
      this.$router.push({
        name: "home",
        params: { message: response.message },
      });
    },
selectFile(file) {
      this.image = file[0];
    },
     async updateForm() {// issues here
console.log("this works too")

      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("content", this.post.content);
      formData.append("old_image", this.post.image);

      if (this.$refs.form.validate()) {
        // if form is validated send to database
        const response = await API.updatePost(this.$route.params.id, formData);
        this.$router.push({
          name: "home",
          params: { message: response.message },
        });
      }
    }, formatDate(dates) {
       dates = this.post.dates[0];
      if (!dates) return null;
      const bothDates = dates.split(",");
      const [year, month, day] = bothDates[0].split("-");
      const [year2, month2, day2] = bothDates[1].split("-");
  console.log(`${month}/${day}/${year}`+"–"+`${month2}/${day2}/${year2} `)
      return  `${month}/${day}/${year}`+"–"+`${month2}/${day2}/${year2} `;
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.date = this.parseDate(this.post.created);
    // });
  },
};
</script>
<style scoped>
 .v-text-field input {
    font-size: 1.2em;
    color:red;
  }

.img-container {
  overflow: hidden;
  align-content: center;
  width: 100vw;
  height: 30vh;
  display: flex;
}
.header-img {
  position: relative;
  top: 0%;
  width: 100%;
  align-self: center;
  height: auto;
  min-height: 30vh;
  padding: 0;
}
.date {
  padding-top: 30px;
  padding-left: 20px;
  margin-bottom: 0px;
}
#title {
  overflow: visible;
  padding: 0;
  max-height: unset;
  padding-left: 20px;
  padding-bottom: 20px;
  font-weight:bold;
  font-size: 26pt;
  text-transform: uppercase;
}
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
    border-color: inherit;
    border-style: none !important;
    }
p {
  padding-left: 20px;
  padding-right: 30px;
}
.btn {
  opacity: 0.9;
  border-radius: 50%;
  height: 78px !important;
  width: 78px !important;
  transform: scale(0.75);
}
#plus_btn {
  position: fixed;
  bottom: 3%;
  right: 3%;
  z-index: 1000;
  height: 78px !important;
  width: 78px !important;
  transform: scale(1);
}

#edit_btn{
  border-radius: 50%;
  background-color: white;
  height:78px;
  min-width:78px;
  width:78;
  position:absolute;
  top:3%;
  right:3%;
  z-index:4;
}
#update_btn{
  position:absolute;
  top:2%;
  right:3%
}

.hidden {
  display: none;
}
.shown {
  display: initial;
}
.input__control > .v-input__slot:after{
  display: none;
}
.v-text-field > .v-input__control > .v-input__slot:after {
    display: none;

}
</style>
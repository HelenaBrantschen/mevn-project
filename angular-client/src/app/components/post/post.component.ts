import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

      
  savePost(){
      
  }
    
  
}  
  

/*import API from "../api";
export default {

  computed:{
    formatedDate(){

      return this.formatDate(this.dates);
    }

  },
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
console.log(date,"datum")
const title = document.getElementById("title");
const para = document. getElementById("para");

//const readonly = document. querySelectorAll("readonly");

//readonly.removeAttribute("readonly");
//readonly.remove.classList("readonly");


title.removeAttribute("readonly");
para.removeAttribute("readonly");


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

      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("content", this.post.content);
      formData.append("old_image", this.post.image);
      formData.append("dates", this.post.dates);


      if (this.$refs.form.validate()) {
        // if form is validated send to database
        const response = await API.updatePost(this.$route.params.id, formData);
        this.$router.push({
          name: "home",
          params: { message: response.message },
        });
      }
    }, formatDate(dates) {
       var dates = this.post.dates[0];
       console.log( dates, "is it a string?")
      if (!dates) return null;
      if (typeof dates === 'string' ){
        var isRange = dates.includes("-") 
        console.log(isRange, "isRange?")
        if (dates.includes("-")){
          console.log("date range")
          const bothDates = dates.split(",");
      const [year, month, day] = bothDates[0].split("-");
      const [year2, month2, day2] = bothDates[1].split("-");
  console.log(`${month}/${day}/${year}`+"–"+`${month2}/${day2}/${year2} `)
      return  `${month}/${day}/${year}`+"–"+`${month2}/${day2}/${year2} `;
        }
        console.log("single date this");
        return dates
      }else{
        console.log("not a string or no date")
      }
  
    },
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.date = this.parseDate(this.post.created);
    // });
  },
};*/
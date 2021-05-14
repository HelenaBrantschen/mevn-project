import axios from 'axios'
const url = "/api/post";

export default class API {
    // to get all the posts from the server

    static async fetchAllPosts() {
        const res = await axios.get(url);
        return res.data;
    }

    //to get a single post by id
    static async getPostById(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    //to add a Post to the database
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
    }

    //to update a post in the database
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }

     //to delete a single post by id
     static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}
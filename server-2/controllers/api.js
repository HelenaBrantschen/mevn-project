const Post = require("../models/posts");

module.exports = class API {
    //fetch all posts
    static async fetchAllPosts(req, res) {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) {
            res.status(404).json({
                message: err.message
            })
        }
    };
    //fetch postby id 
    static async fetchPostById(req, res) {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({
                message: err.message
            });
        }
    };
    //create a post 
    static async createPost(req, res) {
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try {
            await Post.create(post);
            res.status(201).json({
                message: 'Post sucessfully created'
            })
        } catch (err) {
            res.status(400).json({
                message: err.message
            })
        }
    };
    //update a post 
    static async updatePost(req, res) {
        res.send('update a post');
    };
    //delete a post 
    static async deletePost(req, res) {
        res.send('delete a post');
    };
};
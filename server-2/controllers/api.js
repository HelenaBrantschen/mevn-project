const Post = require("../models/posts");
const fs = require("fs")

module.exports = class API {

    //fetch all posts
    static async fetchAllPosts(req, res) {
        try { // if there is a/are  post(s) give back status 200 and the posts
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (err) { // if there arent any posts give back a 404 with the error message
            res.status(404).json({
                message: err.message
            })
        }
    };
    //fetch postby id 
    static async fetchPostById(req, res) {
        //store the id at the end pf the the request in a var
        const id = req.params.id;
        try { // find the sspecific post with this id if found answer with a statuss 200 and give back the post
            const post = await Post.findById(id);
            res.status(200).json(post);
        } catch (err) { // if the post isn't found give back a 404 with the error message
            res.status(404).json({
                message: err.message
            });
        }
    };
    //create a post 
    static async createPost(req, res) {
        //
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
    //update a post more complicated for updating an element you must decide which one and store the other old values in a variable 
    static async updatePost(req, res) {
        const id = req.params.id;
        let new_image = "";
        if (req.file) {
            new_image = req.file.filename;
            try { //updating an image 
                fs.unlinkSync("./uploads/" + req.body.old_image);

            } catch {
                (err)
                console.log(err);
            }
        } else{
                new_image = req.body.old_image;
            }
            const newPost = req.body;
            newPost.image = new_image;

            try{
                await Post.findByIdAndUpdate(id, newPost);
                res.status(200).json({message: 'Post successfully updated'})
            }catch(err){ 
                res.status(404).json({message: err.message});
            }
        };




    
    //delete a post 
    static async deletePost(req, res) {
        const id = req.params.id;
        try{
            const result = await Post.findByIdAndDelete(id);
            if (result.image!= ''){
               try{ fs.unlinkSync('./uploads/'+result.image);
            }catch (err){
                console.log(err);
            }
        }
        res.status(200).json({message:'Post successfully deleted'})
        }catch(err){
            res.status(404).json({message: err.message})
        }
    };
};
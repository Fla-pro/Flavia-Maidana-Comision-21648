const { PostModel} =require('../models/post')

const getAllPosts = async (req, res) =>{
    const AllPosts = await PostModel.findAll();
    res.render("index", { posts })
};

const formCreateNewPost = async (req, res) =>{
    res.render('new-post');
};

const formUpdatePost = async (req, res) => {
    res.render('update-post');
}

const createPost = async(req, res) =>{
    const {author, content, title, url} =req.body;

   await PostModel.create({author, content, title, url});

   res.redirect('/posts');
};

module.exports = { getAllPosts,formCreateNewPost, createPost, formUpdatePost };
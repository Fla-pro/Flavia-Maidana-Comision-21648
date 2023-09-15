const { Router } = require('express'); 
const { 
       getAllPosts,
       createNewPost
} = require('../src/controllers/post.controllers');

const router = Router();

router.get('/', getAllPosts);
router.post('/', createNewPost);

module.exports= router;
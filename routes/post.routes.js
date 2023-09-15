const { Router } = require('express'); 
const { 
       getAllPosts,
       createNewPost
} = require('../src/controllers/post.controllers');

const router = Router();

router.get('/', getAllPosts);
router.get('/create', createNewPost);
router.post('/', createPost );
router.get('/update:id');

module.exports= router;
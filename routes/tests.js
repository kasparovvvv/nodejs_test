const router = require('express').Router();
//const { check } = require('express-validator');
//const postController = require("../controllers/posts")
//const checkAuth = require("../middleware/checkAuthToken")

//router.get('/',checkAuth,postController.getAllPosts);
router.get('/post',(req,res) => {
    res.send("test");
});


module.exports = {
    router,
}
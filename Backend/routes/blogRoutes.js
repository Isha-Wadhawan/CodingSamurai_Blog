const express = require("express")
const router = express.Router()
const {getBlogsController , createBlogController, updateBlogController, deleteBlogController, singleBlogController} = require('../controllers/blogControllers')

//get all blogs
router.get('/all-blogs' , getBlogsController )

//create-new-blog
router.post('/create-blog' , createBlogController )

//update-blog
router.put('/update-blog/:id' , updateBlogController )

//delete-blog
router.delete('/delete-blog/:id' , deleteBlogController )

//single-blog
router.get('/single-blog/:id' , singleBlogController )

module.exports = router;
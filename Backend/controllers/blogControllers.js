const {blogModel}  = require('../models/blogModel')


//GET all Blogs

exports.getBlogsController = async(req, res) =>{
    try{
        const blogs = await blogModel.find({});
        if(!blogs){
            return res.status(200).send({
                success :true,
                message : 'No Blogs Found'
            })
        }

        return res.status(200).send({
            blogsCount : blogs.length,
            success : true,
            message : 'All Blogs List',
            blogs
        })
    }
    catch(err){
        
        return res.status(500).send({
            success : false,
            message : 'Error while gwtting Blogs',
            err
        })
    }
}

//Create new blog
exports.createBlogController = async (req, res) =>{

    try{

        const {title, description, image} = req.body;

        if(!title || !description || !image){
            return res.status(400).send({
                success: false,
                message : 'Please provide all fields'
            })
        }

        const newBlog = new blogModel({title, description, image})
        await newBlog.save();
        return res.status(201).send({
            success:true,
            message: 'Blog Published Successfully',
            newBlog
        })


    }
    catch(err){
        return res.status(400).send({
            success :false,
            message : 'Blog not Created',
            err
        })
    }

}


//update Blogs
exports.updateBlogController = async (req, res) =>{

    try{
        const {id} = req.params;
        const {title , description, image} = req.body;
        const blog = await blogModel.findByIdAndUpdate(id, {...req.body}, {new:true})
        

        return res.status(200).send({
            sucess:true,
            message : 'Blog Updated Successfully',
            blog
        })

    }

    catch(err){
        return res.status(500).send({
            success: false,
            message : 'Cant update a blog',
            err
        })
    }

}
//delete Blogs

exports.deleteBlogController = async(req, res) =>{
    try{
        await blogModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success :true,
            message : "Blog Deleted Successfully"
        })


    }

    catch(err){
        return res.status(500).send({
            success:false,
            message: "Blog not Successfully"
        })
    }
}

//get Single Blog

exports.singleBlogController = async (req, res) =>{
    try{
       const blog = await blogModel.findById(req.params.id)
       if(!blog){
        return res.status(400).send({
            success:false,
            message: "Blog not found"
        })
       }
       return res.status(200).send({
        success :true,
        message : "Blog Found Successfully",
        blog
    })

    }
    catch(err)
    {
        return res.status(500).send({
            success:false,
            message: "Blog not found"
        })
    }
}
const Blog = require('../models/blogs');

async function handleHomePage(req,res){
    if(!req.user) return res.redirect('/user/signin');

    const blogsForUser = await Blog.find({ createdBy : req.user.id});
    res.render('homepage', {
        user : req.user,
        blogs :blogsForUser
    })
}

async function handleAddingBlog(req,res){
    const file_path = `/uploads/${req.user.id}/${req.file.filename}`
    const { title, description } = req.body;
    const blog = await Blog.create({
        title,
        description,
        createdBy : req.user.id,
        coverImage : file_path
    })

    return res.redirect('/');
}


module.exports = {
    handleHomePage,
    handleAddingBlog
}
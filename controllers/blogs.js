const Blog = require('../models/blogs');
const Comment = require('../models/comments')

async function handleHomePageForALL(req,res){
    user = null;
    if(req.user) { user = req.user}
    const blogsForUser = await Blog.find();
    res.render('AllBlogs', {
        user,
        blogs :blogsForUser
    })
}

async function handleHomePage(req,res){
    const blogsForUser = await Blog.find({ createdBy : req.user.id});
    res.render('homepage', {
        user : req.user,
        blogs :blogsForUser
    })
}

async function handleUserUpdate(req, res) {
  if(!req.user) return res.redirect('/user/signin');
  try {
    const { fullName, email, password } = req.body;

    let updateFields = {
      fullName,
      email
    };

    if (password && password.trim() !== "") {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateFields.password = hashedPassword;
    }

    if (req.file) {
      updateFields.profileImage = `/images/${req.user.id}/${req.file.filename}`;
    }

    const user = await User.findByIdAndUpdate(req.user.id, updateFields, {new : true });
    const jwtToken = createJWT(user)
    res.cookie('token', jwtToken)
    return res.redirect('/'); 
  } catch (err) {
    console.error(err);
    return res.status(500).send("Something went wrong");
  }
}

async function handleAddingBlog(req,res){
    if(!req.user) return res.redirect('/user/signin');
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

async function handleViewBlog(req, res){
  const blogid = req.params.blogId;

  const blog = await Blog.findById(blogid).populate("createdBy");
  const comments = await Comment.find({ blogPost: blogid })
      .populate("commentedBy") 
      .sort({ createdAt: -1 });


  return res.render('viewBlog', {
    blog : blog,
    comments: comments,
    user : req.user
  })
}

module.exports = {
  handleHomePageForALL,
  handleHomePage,
  handleAddingBlog,
  handleUserUpdate,
  handleViewBlog
}
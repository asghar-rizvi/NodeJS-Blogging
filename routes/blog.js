const { Router } = require('express');
const router = Router();
const { handleHomePageForALL,handleHomePage,handleAddingBlog, handleUserUpdate, handleViewBlog } = require('../controllers/blogs');
const Comment = require('../models/comments')

const upload = require('../middleware/multerLogicHandler');
const { checkAuthorization } = require('../middleware/authentication')

router.get('/BlogsForAll' ,handleHomePageForALL)
router.get('/' , checkAuthorization ,handleHomePage)

router.get('/add-blog', checkAuthorization,async (req,res)=>{
    if(!req.user) return res.redirect('/user/signin');
    res.render('addBlog', {
        user : req.user
    })
})
router.post('/add-blog',checkAuthorization ,upload.single('coverImage'), handleAddingBlog);

router.get('/update-user', checkAuthorization,async (req, res) => {
  if(!req.user) return res.redirect('/user/signin');
  return res.render('updateProfile', { user: req.user });
});

router.post('/update-user', checkAuthorization,upload.single('profileImage'), handleUserUpdate);

router.get('/:blogId', handleViewBlog)

router.post('/:blogId/comment', checkAuthorization, async (req, res) => {
  const blogId = req.params.blogId;
  const text = req.body.comment;
  await Comment.create({
    text,
    commentedBy: req.user.id,
    blogPost: blogId
  });
  return res.redirect(`/${blogId}`);
});


module.exports = router;
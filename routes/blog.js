const { Router } = require('express');
const router = Router();
const { handleHomePage,handleAddingBlog } = require('../controllers/blogs');
const upload = require('../middleware/multerLogicHandler');

router.get('/', handleHomePage)

router.get('/add-blog', async (req,res)=>{
    if(!req.user) return res.redirect('/user/signin');
    res.render('addBlog', {
        user : req.user
    })
})

router.post('/add-blog', upload.single('coverImage'), handleAddingBlog);


module.exports = router;
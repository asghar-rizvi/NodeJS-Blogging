const { Router } = require('express');
const router = Router();
const { handleUserSignUp, handleUserSignIn , handleUserLogout} = require('../controllers/users');
const upload = require('../middleware/userImageMulterHandler');

router.get('/signup', async (req,res)=>{
    res.render('signup')
})

router.get('/signin', async (req,res)=>{
    return res.render('signin')
})

router.post('/signup', handleUserSignUp);
router.post('/signin', handleUserSignIn);

router.get('/logout', handleUserLogout)




module.exports = router;
const { Router } = require('express');
const router = Router();
const { handleUserSignUp, handleUserSignIn } = require('../controllers/users');

router.get('/signup', async (req,res)=>{
    res.render('signup', { message : null})
})

router.get('/signin', async (req,res)=>{
    res.render('signin', { message : null})
})

router.post('/signup', handleUserSignUp);
router.post('/signin', handleUserSignIn);

module.exports = router;
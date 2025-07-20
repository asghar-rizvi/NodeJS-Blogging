const User = require('../models/users');
const bcrypt = require('bcrypt');
const { createJWT } = require('../service/authentication')

async function handleUserSignUp(req,res){
    const { fullName, email, password } = req.body;
    const user = await User.findOne( {email} );

    if(user){
        return res.render('signup', { message : 'User Already Registered'})
    }

    const hashedPassword = await bcrypt.hash(password, 15);
    console.log('hashed..', hashedPassword)
    const newUser =  await User.create({
        fullName,
        email,
        password : hashedPassword
    })

    return res.redirect('/user/signin')

}

async function handleUserSignIn(req,res){
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) { return res.render('signin', {message : 'No Such Account'})};

    const match = await bcrypt.compare(password , user.password);
    if(match){
        const jwtToken = createJWT(user)
        res.cookie('token', jwtToken)
        return res.redirect('/');
    }
    return res.render('signin', { message : 'User Email and Password Incorrect'})

}

async function handleUserLogout(req,res){
    res.clearCookie("token");
    return res.redirect('/user/signin');

}


module.exports = {
    handleUserSignUp,
    handleUserSignIn,
    handleUserLogout,
}
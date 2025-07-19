const User = require('../models/users');
const bcrypt = require('bcrypt');

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
        return res.redirect('/');
    }
    return res.render('signin', { message : 'User Email and Password Incorrect'})

}

module.exports = {
    handleUserSignUp,
    handleUserSignIn
}
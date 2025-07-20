require('dotenv').config();

const jwt = require('jsonwebtoken');
SECERETE_KEY = process.env.SECERETE_KEY 

 function createJWT(user){
    return  jwt.sign({
        id : user.id,
        fullName : user.fullName,
        email : user.email,
        role : user.role,
        profileImage : user.profileImage
    }, SECERETE_KEY)
}

function validateJWT(jwtToken){
    return jwt.verify(jwtToken, SECERETE_KEY)
}

module.exports = {
    createJWT,
    validateJWT
}
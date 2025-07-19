const jwt = require('jsonwebtoken');
const SECERETE_KEY = '$asghar$00$'

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
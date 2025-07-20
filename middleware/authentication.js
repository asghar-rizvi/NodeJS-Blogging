const { validateJWT } = require('../service/authentication');

function checkAuthentication(cookieName){
    return function(req,res,next) {
        try{
            const token = req.cookies[cookieName];
            if(!token){ 
                return next(); 
            }
            const user = validateJWT(token);
            if(!user){ return next();}
            req.user = user;
            return next();
        }catch{}
    }
}

function checkAuthorization(req,res, next){
    if (!req.user) {return  res.redirect('/user/signin')}
    
    return next();
}
module.exports = {
    checkAuthentication,
    checkAuthorization
}
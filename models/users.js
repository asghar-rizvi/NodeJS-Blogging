const { Schema, model } = require('mongoose');

const userSchema = Schema({
    fullName : {
        type : String,
        required: true
    },
    email : {
        type:String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['USER', 'ADMIN'],
        default : 'USER'
    },
    profileImage: {
        type : String,
        default : 'public/images'
    }
},
    {timestamps : true}
)

const User = model('users', userSchema);

module.exports = User;
const { Schema, model, } = require('mongoose');

const blogSchema = Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type:String,
        required : true,
    },
    createdBy : {
        type : Schema.Types.ObjectId,
        ref : 'users',
        required: true
        
    },
    coverImage: {
        type : String
    }
},
    {timestamps : true}
)

const Blog = model('blog', blogSchema);

module.exports = Blog;
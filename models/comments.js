const { Schema, model, } = require('mongoose');

const commentSchema = Schema({
    text : {
        type : String,
        required: true
    },
    commentedBy : {
        type : Schema.Types.ObjectId,
        ref : 'users',
        required: true
    },
    blogPost : {
        type : Schema.Types.ObjectId,
        ref : 'blog',
        required: true
    },
},
    {timestamps : true}
)

const comment = model('comment', commentSchema);

module.exports = comment;
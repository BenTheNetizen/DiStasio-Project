'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var UserSchema = new Schema({
    name: String,
    role: String,
});

var CommentSchema = new Schema({
    text: {
        type: String,
        required: 'Kindly enter the text of the post'
    },
    created_by: {
        type: String,
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: 'You need to attach a post to the comment'
    }
});

var PostSchema = new Schema({
    text: {
        type: String,
        required: 'Kindly enter the text of the post'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String,
    },
    index: {
        type: Number,
    },
    comments: [],
});

module.exports = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Comment', CommentSchema);
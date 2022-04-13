'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var PostSchema = new Schema({
    text: {
        type: String,
        required: 'Kindly enter the text of the post'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    // USER NEEDS TO BE AN ACTUAL USER OBJECT
    user: {
        type: String,
    }
});

module.exports = mongoose.model('Post', PostSchema);
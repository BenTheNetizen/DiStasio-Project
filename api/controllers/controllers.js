'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    User = mongoose.model('User'),
    Comment = mongoose.model('Comment');

// post functions
exports.get_all_posts = function(req, res) {
    Post.find({}, function(err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
}
exports.create_post = function(req, res) {
    var new_post = new Post(req.body);
    new_post.save(function(err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
}

// user functions
exports.create_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}
exports.get_all_users = function(req, res) {
    User.find({}, function(err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}

// comment functions
exports.create_comment = function(req, res) {
    console.log('running create_comment');
    var new_comment = {
        text: req.body.text,
        created_by: req.body.created_by,
        created_date: req.body.created_date,
    }

    Post.findById(req.body.post_id, function(err, post) {
        if (err)
            res.send(err);
        console.log(req.body.post_id);

        post.comments.push(new_comment);
        console.log(post);
        post.save(function(err, post) {
            if (err)
                res.send(err);
            res.json(post);
        });
    });
}


exports.get_all_comments = function(req, res) {
    Comment.find({}, function(err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
}
exports.get_comments_by_post_id = function(req, res) {
    Comment.find({post: req.params.post_id}, function(err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
}

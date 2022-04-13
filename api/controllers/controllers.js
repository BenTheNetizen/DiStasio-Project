'use strict';

var mongoose = require('mongoose'),
    Post = mongoose.model('Post');

exports.test = function(req, res) {
    let test = {
        test: 'test'
    };
    console.log('SUCCESS');
    res.json(test);
    /*
    res.send('Hello from the Test controller!');
    res.render('index', { title: 'Express' });
    */
};

exports.get_all_posts = function(req, res) {
    console.log('THINGS WORK :D');
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
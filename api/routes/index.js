'use strict';
module.exports = function(app) {
    var post = require('../controllers/controllers');
    app.route('/test/')
        .get(post.test);
    app.route('/posts/all/')
        .get(post.get_all_posts)
    app.route('/posts/create/')
        .post(post.create_post)
};
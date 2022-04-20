'use strict';
module.exports = function(app) {
    var controller = require('../controllers/controllers');

    // post endpoints
    app.route('/posts/all/')
        .get(controller.get_all_posts)
    app.route('/posts/create/')
        .post(controller.create_post)

    // user endpoints
    app.route('/users/create/')
        .post(controller.create_user)
    app.route('/users/all/')
        .get(controller.get_all_users)    
    // comment endpoints
    
    app.route('/comments/create/')
        .post(controller.create_comment)
        
    app.route('/comments/all/')
        .get(controller.get_all_comments)
    app.route('/comments/:post_id')
        .get(controller.get_comments_by_post_id)
  
};
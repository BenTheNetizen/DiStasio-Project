'use strict';
module.exports = function(app) {
    var controller = require('../controllers/controllers');

    // post endpoints
    /*
    /posts/all
    Returns all posts, including comments in JSON format
    */
    app.route('/posts/all/')
        .get(controller.get_all_posts)
    /* /posts/create/
    Creates a new post and returns the post in JSON format
    Body Requirements:
    {
        text: String,
        created_by: User object,
        created_date: Date object (defaults to current date)
    }
    */
    app.route('/posts/create/')
        .post(controller.create_post)


    // user endpoints
    /*
    /users/create/
    Creates a new user and returns the user in JSON format
    Body Requirements:
    {
        name: String,
        role: String
    }
    */
    app.route('/users/create/')
        .post(controller.create_user)
    
    /*
    /users/all
    Returns all users in JSON format
    */
    app.route('/users/all/')
        .get(controller.get_all_users)    

    // comment endpoints
    /*
    /comments/create/
    Creates a new comment and returns the comment in JSON format
    Body Requirements:
    {
        text: String,
        created_by: String,
        created_date: Date object (defaults to current date),
    }
    */
    app.route('/comments/create/')
        .post(controller.create_comment)
    

    // DONT USE THESE ENDPOINTS BELOW
    app.route('/comments/all/')
        .get(controller.get_all_comments)
    app.route('/comments/:post_id')
        .get(controller.get_comments_by_post_id)
  
};
import './Sidebar.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const comments = ["comment1", "comment2"]
const replies = ["reply1", "reply2"]

const getPostsURL = "http://localhost:4000/posts/all/";
const createPostURL = "http://localhost:4000/posts/create/";
const createCommentURL = "http://localhost:4000/comments/create/";

var arr_ = [];

function Sidebar(props) {
    const [comment, setComment] = useState("");
    const [allComments, setAllComments] = useState([]);
    const [reply, setReply] = useState("");
    const [displayReplyInput, setDisplayReplyInput] = useState("");
    const [commentID, setCommentID] = useState(null);
    const [addCommentBox, setaddCommentBox] = useState({});
    const [addReplyBox, setaddReplyBox] = useState({});
    
    useEffect(() => {       
        axios.get(getPostsURL).then((response) => {
            setAllComments(response.data);
            console.log(response.data);
        });
      }, [addCommentBox]);
      
    
    //function to display the create comment box
    const addcomment = (e) => {
        setaddCommentBox(true);
        setCommentID(e.target.getAttribute("data-id"));
        //console.log(e.target.getAttribute("data-id"));
    }

    // function to close the create comment box
    const removecomment = async() => {
        setaddCommentBox(false);
    }

    // function to submit post to the backend
    const submitComment = (e) => {
        // MAKE AXIOS POST REQUEST HERE
        axios.post(createPostURL, {
            text: comment,
            created_by: props.currentUser,
            index: commentID
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err)
        });
        
        console.log(`User ${props.currentUser} Created post: ${comment} for commendID: ${commentID}`);
        setaddCommentBox(false);
    }

    const addreply = async() => {
        setDisplayReplyInput(true);
    }
    const removereply = async() => {
        setDisplayReplyInput(false);
    }
    const submitReply = (e) => {
        replies.push(reply);
        setDisplayReplyInput(false);
    }

    

    // dictionary with keys as commentID and values as the comment (post)
    var commentsDict = new Proxy({}, {
        get: function(object, property) {
          return object.hasOwnProperty(property) ? object[property] : false;
        }
      });
    
    var isReplyingDict = new Proxy({}, {
        get: function(object, property) {
          return object.hasOwnProperty(property) ? object[property] : false;
        }
      });
    
    // loop goes through all the comments and adds them to the dictionary at the comment's index
    for (let i = 0; i <= 6; i++) {
        if (allComments[i] != undefined) {
            commentsDict[allComments[i].index] = allComments[i];
        }
    }
   
    var currentPostsJSX = [];
    // iterate through all posts, if commentsDict[post.index] is true, then display the post
    for (let i = 0; i <= 6; i++) {
        if (commentsDict[i] != false) {
            currentPostsJSX.push(
                <div class="post">
                    <div class="post-header">
                        <h4>Post: {commentsDict[i].text}</h4>
                        <p>Created by: {commentsDict[i].created_by}</p>
                        <p>Created date: {commentsDict[i].created_date}</p>
                        {(commentsDict[i].comments.length > 0) ?
                            commentsDict[i].comments.forEach(comment => {
                                return (
                                    <div class="comment">
                                        <p>{comment.text}</p>
                                        <p>Created by: {comment.created_by}</p>
                                        <p>Created date: {comment.created_date}</p>
                                    </div>
                                )
                        }) :
                            <div>
                                <p>No comments</p>
                            </div>
                        }
                    </div>
                    {(isReplyingDict[i] == true) ?
                        <div>
                            <input type="text" placeholder="Reply" onChange={(e) => setReply(e.target.value)}></input>
                            <button onClick={submitReply}>Submit</button>
                        </div> : 
                        <div class="post-footer">
                            <button>Add Reply</button>
                        </div>
                    }
                </div>
            )
        } else {
            currentPostsJSX.push(
                <div>
                    <button class="add-comment-button" data-id={i} onClick={addcomment}>+</button>
                </div>
            )
        }
    }

    return (
    <div>
        <div>
            <h1>NUMBER OF POSTS LENGTH: {allComments.length}</h1>
            <h1>Sidebar</h1>
                {/*
                {comments.map((comment, index) => 
                    <div class="comment-box">{comment}
            <> 
            {(displayReplyInput == true) ?
                <div>
                    <div>
                        <input id="reply" onChange={e => setReply(e.target.value)}></input>
                        <button onClick={submitReply}>Submit</button>
                        <button onClick={removereply}>Cancel</button>
                    </div>
                </div> :
                <div>
                    <div>
                        {replies.map(reply => <div class="comment-box">
                            {reply}
                        </div>)}
                    </div>
                        
                    <button onClick={addreply}>Reply</button>
                </div>
            }
        </>
        </div>
            )}*/}
        </div>


        <div>
        <> 

            {(addCommentBox == true)?
                <div>
                    <p>
                        <div class="vertical-align">
                            <h1>User: {props.currentUser}</h1>
                            <input id="comment" onChange={e => setComment(e.target.value)}></input>
                            <button onClick={submitComment}>Submit Comment</button>
                            <button onClick={removecomment}>Close</button>
                        </div>
                    </p>
                </div> :
                <div class="sidebar-align">
                    {currentPostsJSX}
                </div>
            }
        </>
            
        </div>
    </div>
    )
}

export default Sidebar;
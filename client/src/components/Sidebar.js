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
    const [displayReplyInput, setDisplayReplyInput] = useState(false);
    const [commentIndex, setcommentIndex] = useState(null);
    const [commentID, setcommentID] = useState(null);
    const [addCommentBox, setaddCommentBox] = useState({});
    const [test, setTest] = useState(false);
    
    useEffect(() => {       
        axios.get(getPostsURL).then((response) => {
            setAllComments(response.data);
            console.log(response.data);
        });
      }, [test, addCommentBox, displayReplyInput, commentID]);
    
    
    //function to display the create comment box
    const addcomment = (e) => {
        setaddCommentBox(true);
        console.log(`index: ${e.target.getAttribute('data-id')}`);
        setcommentIndex(e.target.getAttribute("data-id"));
        //console.log(e.target.getAttribute("data-id"));
    }

    // function to close the create comment box
    const removecomment = async() => {
        setaddCommentBox(false);
    }

    const displayReply = (e) => {
        setcommentID(e.target.getAttribute("data-id"));
        setDisplayReplyInput(!displayReplyInput);
        console.log('running function displayReply');
    }

    const cancelReply = (index) => {
        setDisplayReplyInput(prevState => {
            prevState[index] = prevState[index] ? false : true;
            return prevState;
        });
    }

    

    // function to submit post to the backend
    const submitComment = (e) => {
        // MAKE AXIOS POST REQUEST HERE
        axios.post(createPostURL, {
            text: comment,
            created_by: props.currentUser,
            index: commentIndex
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err)
        });
        
        console.log(`User ${props.currentUser} Created post: ${comment} for commendID: ${commentIndex}`);
        setaddCommentBox(false);
    }

    // function to submit reply to the backend
    const submitReply = () => {
        // MAKE AXIOS POST REQUEST HERE
        axios.post(createCommentURL, {
            text: reply,
            created_by: props.currentUser,
            created_date: new Date(),
            post_id: commentID
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err)
        });
        
        console.log(`User ${props.currentUser} Created reply: ${reply} for commentID: ${commentID}`);
        setDisplayReplyInput(false);
        setcommentID(null);
        // why is only this bottom line enough to for useeffect to run again?
        setaddCommentBox(false);
        setTest(!test);
    }

    

    // dictionary with keys as commentIndex and values as the comment (post)
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
                        <h4>Comments</h4>
                        {(commentsDict[i].comments.length > 0) ?
                            commentsDict[i].comments.map((comment, index) => {
                                return (
                                    <div key={index} class="comment">
                                        <p>Comment: {comment.text}</p>
                                        <p>Created by: {comment.created_by}</p>
                                        <p>Created date: {comment.created_date}</p>
                                    </div>
                                )})
                            
                         :
                            <div>
                                <p>No comments</p>
                            </div>
                        }
                    </div>
                    <div>
                        <button onClick={displayReply} data-id={commentsDict[i]._id}>Add Reply</button>
                    </div>
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
        </div>

        <> 
            {(addCommentBox == true)?
                <div>
                    <div class="vertical-align">
                        <h1>Create a comment</h1>
                        <h3>User: {props.currentUser}</h3>
                        <input id="comment" onChange={e => setComment(e.target.value)}></input>
                        <button onClick={submitComment}>Submit Comment</button>
                        <button onClick={removecomment}>Close</button>
                    </div>
                </div> :
                <div class="sidebar-align">
                    {(displayReplyInput == true) ?
                        <div class="vertical-align">
                            <h1>Create a reply</h1>
                            <h3>User: {props.currentUser}</h3>
                            <input id="comment" onChange={e => setReply(e.target.value)}></input>
                            <button onClick={submitReply}>Submit Reply</button>
                            <button onClick={displayReply} data-id="0">Close</button>
                        </div>
                        : 
                        <div>
                            {currentPostsJSX}
                        </div>}
                </div>
            }
        </>
            
    </div>
    )
}

export default Sidebar;
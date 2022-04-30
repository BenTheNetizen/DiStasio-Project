import './Sidebar.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const getPostsURL = "http://localhost:4000/posts/all/";
const createPostURL = "http://localhost:4000/posts/create/";
const createCommentURL = "http://localhost:4000/comments/create/";

const comments = ["comment1", "comment2"]
const replies = ["reply1", "reply2"]

function Sidebar(props) {
    /*
    const [posts, setPosts] = React.useState(null);
    React.useEffect(() => {
        axios.get(getPostsURL).then((response) => {
            setPosts(response.data);
            debugger;
        });
      }, []);
*/
    const [currentUser, setCurrentUser] = useState(null);
    const [addCommentBox, setaddCommentBox] = useState({});
    const [reply, setReply] = useState(null);
    const [currentPostId, setCurrentPostId] = useState(null);

    const addcomment = async() => {
        setaddCommentBox(true);
    }
    const removecomment = async() => {
        setaddCommentBox(false);
    }


    const [comment, setComment] = useState("");


    // function to submit post to the backend
    const submitPost = (e) => {
        // MAKE AXIOS POST REQUEST HERE
        console.log(`currentUser: ${currentUser}`);
        axios.post(createPostURL, {
            text: comment,
            created_by: currentUser,
        }).then(response => {
            console.log(response);
        }).catch(err => console.log(err));
        //comments.push(comment);
        setaddCommentBox(false);

        //console.log(comments)
        console.log(`${currentUser} Created post: ${comment}`);

    }

    const selectUser = (e) => {
        console.log(`Selected: ${e.target.textContent}`);
        setCurrentUser(e.target.textContent);
    }

        console.log(comments)
    }

    const [reply, setReply] = useState("");

    const [displayReplyInput, setDisplayReplyInput] = useState("");

    const addreply = async() => {
        setDisplayReplyInput(true);
    }
    const removereply = async() => {
        setDisplayReplyInput(false);
    }
    const submitReply = (e) => {
        replies.push(reply);
        setDisplayReplyInput(false);


    const submitReply = (e) => {
        console.log(`User ${currentUser} made reply: ${reply}`);
        axios.post(createCommentURL, {
            text: reply,
            created_by: currentUser,
            post_id: currentPostId,
        }).then(response => {
            console.log(response);
        }).catch(err => console.log(err));
    }
    
    return (
    <div>
        <div>
            <h1>Sidebar</h1>
                {comments.map(comment => 
                    <div class="comment-box">{comment}
        <> 
            {(displayReplyInput == true)?
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
                )}
        </div>




        <div>
        <> 
            {(addCommentBox == true)?
                <div>
                    <p>
                        <div class="vertical-align">
                            <h1>Select User Below</h1>
                            <div>
                                {props.users.map(user => 
                                    <button onClick={selectUser}>
                                        {user.name}
                                    </button>)}
                            </div>
                            <input id="comment" onChange={e => setComment(e.target.value)}></input>
                            <button onClick={submitPost}>Submit Post</button>
                            <button onClick={removecomment}>Close</button>
                        </div>
                    </p>
                </div> :
                <div class="sidebar-align">

                    <div>
                        <button class="add-comment-button" onClick={addcomment}>+</button>
                    </div>
                    <div>
                        <button class="add-comment-button" onClick={addcomment}>+</button>
                    </div>
                    <div>
                        <button class="add-comment-button" onClick={addcomment}>+</button>
                    </div>
                    <div>
                        <button class="add-comment-button" onClick={addcomment}>+</button>
                    </div>
                    <div>
                        <button class="add-comment-button" onClick={addcomment}>+</button>
                    </div>
                    <div>
                        <button class="add-comment-button" onClick={addcomment}>+</button>
                    </div>
                    <div>
                        <button class="add-comment-button" onClick={addcomment}>+</button>
                    </div>
                </div>
            }
        </>
            
        </div>
        <div>
            {props.posts.map(post => (
                // DUMMY CODE FOR DISPLAYING ALL THE POSTS
                <div>
                    <h1>Text: {post.text}</h1>
                    <p>User: {post.created_by}</p>
                    <p>Created Date: {post.created_date}</p>
                    <h3>Comments: </h3>
                    {post.comments.map(comment => (
                        <div>
                            <p>Text: {comment.text}</p>
                            <p>Created By: {comment.created_by}</p>
                        </div>
                    ))}
                    <div>
                        <h3>Add a comment</h3>
                        <h4>Select a user</h4>
                        <div>
                                {props.users.map(user => 
                                    <button onClick={selectUser}>
                                        {user.name}
                                    </button>)}
                        </div>
                        <input onChange={e => {
                            setReply(e.target.value)
                            setCurrentPostId(post._id)
                            console.log(e.target.value)
                            }}></input>
                        <button onClick={submitReply}>Add Reply</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}
export default Sidebar;
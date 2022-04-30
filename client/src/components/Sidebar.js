import './Sidebar.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const comments = ["comment1", "comment2"]
const replies = ["reply1", "reply2"]

function Sidebar(props) {

    const [currentUser, setCurrentUser] = useState(null);
    const [addCommentBox, setaddCommentBox] = useState({});

    const addcomment = async() => {
        setaddCommentBox(true);
    }
    const removecomment = async() => {
        setaddCommentBox(false);
    }


    const [comment, setComment] = useState("");


    const submitComment = (e) => {
        comments.push(comment);
        setaddCommentBox(false);
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
    }


    const [expand, setExpand] = useState({});

    const expandThread = async() => {
        setExpand(true);
    }
    const minimizeThread = async() => {
        setExpand(false);
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
                    <>
                        {
                            (expand == true)?
                            <div>
                                <div>
                                    {replies.map(reply => <div class="reply-box">
                                        {reply}
                                    </div>)}
                                </div>
                                <button onClick={minimizeThread}>Minimize</button>

                            </div>:
                            <div>
                                <button onClick={expandThread}>Expand</button>
                            </div>

                        }
                    </>


                        
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
                            <h1>User (blank)</h1>
                            <input id="comment" onChange={e => setComment(e.target.value)}></input>
                            <button onClick={submitComment}>Submit Comment</button>
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
    </div>
    )
}

export default Sidebar;
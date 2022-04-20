import './Sidebar.css';
import React, { useState, useEffect } from 'react';
const comments = ["comment1", "comment2"]

function Sidebar() {
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
    return (
    <div>
        <p>Sidebar</p>
        <div>
            <h1>Comments</h1>
            <div>
                {comments.map(comment => <div class="comment-box">{comment}</div>)}
            </div>
        </div>
        <div class="sidebar-align">
            <button class="add-comment-button" onClick={addcomment}>+</button>

            {/* <button class="add-comment-button" onClick={addcomment}><img class ="commnent-logo" alt="comment_logo" src="/comment.png"/></button> */}
            <button>Reply to Comment</button>
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
                <div></div>
            }
            </>
            
        </div>
    </div>
    )
}

export default Sidebar;
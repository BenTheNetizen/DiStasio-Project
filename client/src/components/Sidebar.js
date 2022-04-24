import './Sidebar.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const comments = ["comment1", "comment2"]

function Sidebar() {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);

      
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
        <div>
            <h1>Sidebar</h1>
            <div>
                {comments.map(comment => <div class="comment-box">
                {comment}
                <button >Reply</button>
            </div>)}
            </div>
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
import './Sidebar.css';
import React, { useState, useEffect } from 'react';
function Sidebar() {
    const [addCommentBox, setaddCommentBox] = useState({});

    const addcomment = async() => {
        setaddCommentBox(true);
    }
    const removecomment = async() => {
        setaddCommentBox(false);
    }

    return (
    <div>
        <p>Sidebar</p>
        <div class="sidebar-align">
            <button class="add-comment-button" onClick={addcomment}>+</button>

            {/* <button class="add-comment-button" onClick={addcomment}><img class ="commnent-logo" alt="comment_logo" src="/comment.png"/></button> */}
            <button>Reply to Comment</button>
        </div>


        <div>
        <> 
            {(addCommentBox == true)?
                <div >
                    <p>
                        <div class="vertical-align">
                            <h1>User (blank)</h1>
                            <input />
                            <button onclick={removecomment}>Add Comment</button>
                            <button onclick={removecomment}>Close</button>
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
import './Sidebar.css';
import React, { useState, useEffect } from 'react';
function Sidebar() {
    const [addCommentBox, setaddCommentBox] = useState({});

    const addcomment = async() => {
        setaddCommentBox(true);
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
                            <h1>User</h1>
                            <input />
                            <button>Add Comment</button>
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
import React, {useState} from 'react';
import './Report1.css'
import DocumentComponent from './Document';
import Sidebar from './Sidebar';
import Users from './Users';
import { Link } from "react-router-dom";


function Report1() {
    const [displayUsers, setDisplayUsers] = useState({});


    const handleUsersDisplay = async() => {
        setDisplayUsers(true);
    }
    const removeUsersDisplay = async() => {
        setDisplayUsers(false);
    }
    return (
    <div>
 
        <div class="header">
            <Link to="/">Back</Link>
            <div class="heading-curbside">
                <h2>Pathology Report #1</h2>
            </div>
            <> 
            {(displayUsers == true)?
                <div>
                    <Users />
                    <button onClick={removeUsersDisplay} class="users-button">Back</button>
                </div>
                :
                <div>
                    <div class="right-align">
                        <button onClick={handleUsersDisplay} class="users-button">Users</button>
                    </div>
  
                </div> 
            }
            </>

        </div>

        <div class="document-viewing">
            <DocumentComponent />
            <Sidebar />
        </div>
    </div>
    )
}

export default Report1;
import React, {useState} from 'react';
import './Report1.css'
import DocumentComponent from './Document';
import Sidebar from './Sidebar';
import Users from './Users';
import { Link } from "react-router-dom";


function Report1() {
    const [displayUsers, setDisplayUsers] = useState({});
    const [currentUser, setCurrentUser] = useState("Anonymous");

    const handleUsersDisplay = async() => {
        setDisplayUsers(true);
    }
    const removeUsersDisplay = async() => {
        setDisplayUsers(false);
    }

    const handleUserChange = (new_user) => {
        setCurrentUser(new_user);
    }

    return (
    <div>
        <Link class="back-button" to="/">Back</Link>
        <div class="header">
            <div class="heading-curbside">
                <h2>Pathology Report #1</h2>
            </div>
            <> 
            {(displayUsers == true)?
                <div>
                    <h1>Current User: {currentUser}</h1>
                    <Users handleUserChange={handleUserChange}/>
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
            <Sidebar 
                currentUser={currentUser}
            />
        </div>
    </div>
    )
}

export default Report1;
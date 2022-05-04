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
        <div>
            <div class="heading-curbside-2">
                <img src="/curbside_logo.svg" alt="image" id="curbside-logo"></img>
                <h2>Pathology Report #1</h2>
            </div>
            <> 
            {(displayUsers == true)?
                <div class="heading-curbside-2">
                    <div class="right-align">
                        <button class="notification-button"><img src="/notification.svg" id="notification-image" alt="image" /></button>
                        <h1>Current User: {currentUser}</h1>
                        <Users handleUserChange={handleUserChange}/>
                        <button onClick={removeUsersDisplay} class="users-back-button">Back</button>

                    </div>  
                </div>
                :
                <div class="heading-curbside-2">
                    <div class="right-align-2">
                        <button class="notification-button"><img src="/notification.svg" id="notification-image" alt="image" /></button>
                        <button onClick={handleUsersDisplay} class="users-button"><img src="/collaborators.svg" id="collaborators-image" alt="image" /></button>

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
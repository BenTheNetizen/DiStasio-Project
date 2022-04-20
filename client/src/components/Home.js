import React, {useState} from 'react';
import './Home.css'
import DocumentComponent from './Document';
import Sidebar from './Sidebar';
import Users from './Users';

function Home() {
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
            <div class="heading-curbside">
                <h1>Curbside</h1>
            </div>
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

export default Home;
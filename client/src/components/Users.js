import React, {useState} from 'react';

import './Users.css';

const users = ["Andy", "Ben", "Chandra", "Sarah", "Distasio", "XP"];

function Users(props) {
    const [user, setUser] = useState("");
    const[displayAddUserBox, setDisplayAddUserBox] = useState({});
    const submitUser = (e) => {
        users.push(user);
        console.log("user is")
        console.log(user);
        console.log("check that add user is pressed");
        setDisplayAddUserBox(false);
        
    }

    const addUser = async() => {
        setDisplayAddUserBox(true);
    }

  


    return (
    <div class="users-display">
        <h1>Users</h1>
        <div>
            {users.map((user, index) => 
                <button
                    onClick={() => props.handleUserChange(user)}
                    key={index}
                    class="user">
                        {user}
                </button>
            )}
        </div>

        <> 
            {(displayAddUserBox == true)?
                <div>
                    <div class="vertical-align">
                        <input id="newUser" onChange={e => setUser(e.target.value)}></input>
                        <button onClick={submitUser}>Submit User</button>

                    </div>
                </div> :
                <div>
                    <button onClick={addUser}>Add User</button>
                </div>
            }
        </>

    </div>
    );
}

export default Users;
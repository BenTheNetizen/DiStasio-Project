import React, {useState, useEffect} from 'react';
import './Report1.css'
import DocumentComponent from './Document';
import Sidebar from './Sidebar';
import Users from './Users';
import { Link } from "react-router-dom";
import axios from 'axios';

const getPostsURL = "http://localhost:4000/posts/all/";
const getUsersURL = "http://localhost:4000/users/all/";

function Report1() {
    const [displayUsers, setDisplayUsers] = useState({});
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(getUsersURL).then((response) => {
            setUsers(response.data);
        });
        axios.get(getPostsURL).then((response) => {
            setPosts(response.data);
            console.log(response.data);
        });
    }, []);

    const handleUsersDisplay = async() => {
        setDisplayUsers(true);
    }
    const removeUsersDisplay = async() => {
        setDisplayUsers(false);
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
            <Sidebar posts={posts} users={users}/>
        </div>
    </div>
    )
}

export default Report1;
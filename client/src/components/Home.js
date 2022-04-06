import React from 'react';
import './Home.css'
import DocumentComponent from './Document';

function Home() {
    return (
    <div>
        <h1>Curbside</h1>
        <div>
            <button>Users</button>
            <button>Add Comment</button>

        </div>
        <DocumentComponent />
    </div>
    )
}

export default Home;
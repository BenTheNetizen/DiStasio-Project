import React from 'react';
import './Home.css'
import DocumentComponent from './Document';
import Sidebar from './Sidebar';

function Home() {
    return (
    <div>
        <div class="heading-curbside">
            <h1>Curbside</h1>
        </div>
        <div class="heading-curbside">
            <h2>Pathology Report #1</h2>
        </div>
        <div class="right-align">
            <button>Users</button>
        </div>
        <div class="document-viewing">
            <DocumentComponent />
            <Sidebar />
        </div>
    </div>
    )
}

export default Home;
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Home.css';


function Home() {

    return (
    <div>
        <div class="heading-curbside">
                <h1>Curbside Home Page</h1>
        </div>
        <div>
            <Link style={{ textDecoration: 'none' }}  class="nav-link" to="/Report1">Report 1</Link>
            <Link style={{ textDecoration: 'none' }}  class="nav-link" to="/AddReport">Add Report</Link>
            <Link style={{ textDecoration: 'none' }}  class="nav-link" to="/Settings">Settings</Link>

        </div>

    </div>
    )
}

export default Home;
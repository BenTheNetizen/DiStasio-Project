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
            <Link className="nav-link" to="/Report1">Report 1</Link>
            <Link class="report-button" to="/AddReport">Add Report</Link>
        </div>

    </div>
    )
}

export default Home;
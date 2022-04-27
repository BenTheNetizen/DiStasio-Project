import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Home.css';


function Home() {

    return (
    <div>
        <div class="heading-curbside">
                <h1>Curbside</h1>
        </div>
        <div class="curbside-home">
            <p class="home-heading">
                Home
            </p>
            <div class="row-div">
                <p class="home-subheading">Active Discussions</p>
                <p class="home-subheading">Last Modified</p>
            </div>
            <Link style={{ textDecoration: 'none' }}  class="nav-link" to="/Report1">Report 1</Link>

            <p class="home-subheading">Resolved Discussions</p>
            <Link style={{ textDecoration: 'none' }}  class="nav-link" to="/Report1">Report 1</Link>
            <Link style={{ textDecoration: 'none' }}  class="nav-link" to="/Report1">Report 1</Link>
            <Link style={{ textDecoration: 'none' }}  class="nav-link" to="/Report1">Report 1</Link>


        </div>


    </div>
    )
}

export default Home;
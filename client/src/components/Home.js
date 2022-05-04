import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './Home.css';


function Home() {

    return (
    <div>
        <div class="heading-curbside">
            <img src="/curbside_logo.svg" alt="image" id="curbside-logo"></img>
        </div>

        <div class="curbside-home">
            <p class="home-heading">
                Home
            </p>
            <div class="row-div">
                <div>
                    <p class="home-subheading">Active Discussions</p>
                </div>
                <div>
                    <p class="home-subheading">Last Modified</p>
                </div>
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
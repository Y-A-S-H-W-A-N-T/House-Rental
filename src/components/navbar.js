import React from 'react'
import './css/navbar.css'
import './css/hero.css'

function Navbar() {
  return (
    <div>
        <nav class="nav-bar">
            <div class="container">
            <input type="checkbox" id="drop-down-cbox" />
            <label for="drop-down-cbox">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <h1 class="site-logo">RoamReserve</h1>

            <ul class="main-nav small-caps">
                <li><a href="#">Check Availability</a></li>
                <li><a href="#">Login/Signup</a></li>
                <li>
                <span>Property</span>
                <ul>
                    <li><a href="#">List Property</a></li>
                    <li><a href="">Check Condition</a></li>
                </ul>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
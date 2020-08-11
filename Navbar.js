import React from 'react'
import './css/sample-wallpaper'
import Navbar from './src/navbar';

function Navbar() {
    return (
        <div>
            <nav>
            <div>
            <a href="#">Hulk</a>
            <a href="#" class="logo is active">Marvel</a>
            <a href="#">Venom</a>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
import React from 'react'
import './css/sample-wallpaper.css'

function Wallpaper(props) {
    return (
        <article class="wallpaper">
        <img src={props.pic} alt='wallpaper #1'></img>
        </article>
    )
    
}

export default Wallpaper;
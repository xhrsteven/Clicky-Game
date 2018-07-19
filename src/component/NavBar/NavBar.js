import React from 'react'
import './NavBar.css'

const NavBar = props => (
    <nav>
        <ul>
            <li className='brand animated lightSpeedIn'>
                <a href='/clicky-game'>{props.title}</a>
            </li>
            <li className='rw'>{props.Message}</li>
            <li className='cur-sco'>Current Score: {props.score}</li>
            <li className='top-sco'>Top Score: {props.topScore}</li>
        </ul>
    </nav>
)

export default NavBar;
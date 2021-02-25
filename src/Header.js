import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.css'


export default class Header extends React.Component {
    render() {
        return (
            <header className="navBar">
                <NavLink exact activeClassName="selected" to="/planets">
                    <button className="navButton">Gallery</button>
                </NavLink>
                <p className="titleArea">Low-Tech Planetarium</p>
                <NavLink exact activeClassName="selected" to="/create">
                    <button className="navButton">Create Planet</button>
                </NavLink>

            </header>
        )
    }
}

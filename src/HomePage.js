import React from 'react';
import style from './HomePage.css';
import { NavLink } from 'react-router-dom';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="data-place">
                <img className="box-image" />
                <NavLink exact activeClassName="selected" to="/planets">
                    <p className="introduction">If you would like to learn about planets, please click here.</p>
                </NavLink>
            </div>
        )
    }
}

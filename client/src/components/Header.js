import HeaderButton from "./HeaderButton";
import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <Link to='/home' style={{ textDecoration: 'none', color:'rgb(255, 123, 0)'}}>
                    <text className='SiteTitle'>GroupConnect</text>
                </Link>
                <div className="ButtonRow">
                    <HeaderButton placeholder='Recent Posts' path='/home'/>
                    <HeaderButton placeholder='Groups' path='/groups'/>
                    <HeaderButton placeholder='My Profile' path='/myprofile'/>
                </div>
            </header>
        )
    }
}


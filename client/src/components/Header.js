import HeaderButton from "./HeaderButton";
import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <Link to='/' style={{ textDecoration: 'none', color: 'lightgrey'}}>
                    <text className='SiteTitle'>FAM-BOOK</text>
                </Link>
                <div className="ButtonRow">
                    <HeaderButton placeholder='Photos' path='/photos'/>
                    <HeaderButton placeholder='Groups' path='/groups'/>
                    <HeaderButton placeholder='My Profile' path='/myprofile'/>
                </div>
            </header>
        )
    }
}


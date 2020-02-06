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
                    <HeaderButton placeholder='About' path='/about'/>
                    <HeaderButton placeholder='Experience' path='/experience'/>
                    <HeaderButton placeholder='Contact Me' path='/contact'/>
                </div>
            </header>
        )
    }
}


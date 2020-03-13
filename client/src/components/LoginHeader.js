import React from 'react';
import '../styles/ProfilePage.css';
import FamBanner from '../assets/familybanner.jpg';
import {Link} from 'react-router-dom';

class LoginHeader extends React.Component {
    render() {
        return (
            <section className = "container-banner">
                <a href="#home"><img id = "feedPic" src={FamBanner} width="1750" height="400" alt="profilePicture"/> </a>
            </section>
        )
    }
}

export default LoginHeader 
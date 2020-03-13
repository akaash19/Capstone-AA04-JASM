import React from 'react';
import '../styles/ProfilePage.css';
import FamBanner from '../assets/FamHeader.jpg';
import {Link} from 'react-router-dom';

class LoginHeader extends React.Component {
    render() {
        return (
            <section className = "container-banner">
                <a href="#home"><img id = "feedPic" src={FamBanner} width="1920" height="600" alt="profilePicture"/> </a>
            </section>
        )
    }
}

export default LoginHeader 
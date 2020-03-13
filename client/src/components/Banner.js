import React from 'react';
import '../styles/ProfilePage.css';
import ProfilePic from '../assets/ProfilePic1.jpg';
import {Link} from 'react-router-dom';

class Banner extends React.Component {
    render() {
        return (
            <section className = "container-banner">
                <a href="#home"><img id = "profilePic" src={ProfilePic} width="130" height="170" alt="profilePicture"/> </a>
                <h1> Leyla Munkley </h1>
                
                <Link to={'/'} style={{ }}><button>Logout</button></Link>
                <button>edit</button>
                
            </section>
        )
    }
}

export default Banner 
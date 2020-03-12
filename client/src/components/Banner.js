import React from 'react';
import '../styles/ProfilePage.css';
import ProfilePic from '../assets/ProfilePic1.jpg';

class Banner extends React.Component {
    render() {
        return (
            <section className = "container-banner">
                <a href="#home"><img id = "profilePic" src={ProfilePic} width="170" height="170" alt="profilePicture"/> </a>
                <h1> Leyla Munkley </h1>
                <button>edit</button>
            </section>
        )
    }
}

export default Banner
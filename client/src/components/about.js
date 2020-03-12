import React from 'react';
import '../styles/ProfilePage.css';
class About extends React.Component {
    render(){
        return(
            <section id="container-about" className = "container-about">
            <h1> Life Update!</h1>
            <p>
                I currently live in Seattle Washington with my husband, Jeff, and two daughters Olivia and Kylee. Olivia is 15 and Kylee is 18!
                Kylee recently decided she would attend the University of Washington next fall! 
            </p>
            <button>edit</button>
            </section>
        )
    }
}
export default About
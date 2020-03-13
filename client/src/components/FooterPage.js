import React from 'react';
import '../styles/ProfilePage.css';
class FooterPage extends React.Component {
    render(){
        return(
            <section className = "mainContent">
            <h3 className="front-flip" style={{color: 'rgb(255, 123, 0)'}}><strong>GroupConnect &copy; 2020</strong></h3>
           
            <h4 className="front-flip" style={{color: 'rgb(255, 123, 0)'}}>Login</h4>
          
            <h4 className="front-flip" style={{color: 'rgb(255, 123, 0)'}}>Sign Up</h4>
            <h4 className="front-flip" style={{color: 'rgb(255, 123, 0)'}}>About</h4>
                <a href="https://www.facebook.com/">
                    <span className="icon fa fa-facebook" style={{color:'#0066ff'}} ></span>
                    </a>
                    <a href="https://twitter.com/" >
                            <span className="icon fa fa-twitter"  style={{color:'#6495ed'}}></span>
                    </a>
                    <a href="https://github.com/">
                            <span className="icon fa fa-instagram" style={{color:'#b366ff'}} ></span>
                    </a>
                    <a href="https://www.linkedin.com/in/">
                            <span className="icon fa fa-linkedin-square"  style={{color:'blue'}}></span>
                    </a>

            </section>
        )
    }

}

export default FooterPage
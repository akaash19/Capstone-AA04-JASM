import React from 'react';
import '../styles/ProfilePage.css';
class Contact extends React.Component {
    render(){
        return(
            <section className = "container-1">
            <h3><strong>Contact Leyla</strong></h3>
           
            <h4>Cell Numer: 206-745-8931</h4>
          
            <h4>Home Number: 206-457-1472</h4>
            <h4>Email Addresss: Leyla@Gmail.com</h4>
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

export default Contact
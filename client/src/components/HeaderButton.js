import React from 'react';
import {Link} from 'react-router-dom';

export default class HeaderButton extends React.Component {
    constructor(props) {
        super(props)
    }

    renderClass() {
      if(this.props.active) {
        return "HeaderButton HeaderButtonActive"
      } else {
        return "HeaderButton"
      }
    }

    render() {
        return(
            <div className={this.renderClass()}>
                <Link to={this.props.path} style={{ textDecoration: 'none', color: 'lightgrey'}}>
                    <h1>{this.props.placeholder}</h1>
                </Link>
            </div>
        )
    }    
}